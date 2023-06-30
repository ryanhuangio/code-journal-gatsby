---
title: "PHP: Extract Links from Multiple Sitemaps"
slug: "extract-links-from-multiple-sitemaps"
date: "2021-07-19"
---

This script helps streamline website regression testing along with research. It takes an array input of sitemap.xml files in `$sitemaps`, fetches the sitemaps using cURL, extracts a list of links and saves it to $filename. This script has been tested with extracting 1.8 million links from sitemaps.

1. Set the appropriate `memory_limit` inside `init_set()` and `php.ini`.
2. Make sure `extension=curl` is enabled in `php.ini`.
3. Edit `$filename` and `$sitemaps`.
5. Run `php extract.php`

### extract.php
```php
<?php
ini_set('memory_limit','32768M');
$sitemaps = array(
    "http://localhost/sitemap-1.xml",
    "http://localhost/sitemap-2.xml",
    "http://localhost/sitemap-3.xml"
    );

if(defined('STDIN')) {
    $line_break = "\n";
} else {
    $line_break = "<br />";
}

$sitemap_links = array();
while (!empty($sitemaps)) {
    foreach ($sitemaps as $sitemap_key =>$sitemap_value){
        unset($sitemaps[$sitemap_key]);
        $links_temp = extract_sitemap_links($sitemap_value);        
        array_push($sitemap_links,$links_temp);        
    }
}

echo "Script started...$line_break";

$stream = "";
foreach($sitemap_links as &$links) {
    foreach($links as &$link) {
        $link = str_replace("<loc>", "", $link);
        $link = str_replace("</loc>", "", $link);
        $stream .= $link."\n";
    }
}

try {
    $filename = "sitemap-links.txt";
    if(file_put_contents($filename, $stream)) echo "Successfully written to... ";
    if($line_break=="\n") {
        echo "$filename";
    }
    else  {
        echo "<a href='$filename' target='_blank'>$filename</a>";
    }
}
catch (Exception $e) {
	echo "Error: $e";
}

function extract_sitemap_links($sUrl) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch,CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0");
    curl_setopt($ch, CURLOPT_URL, $sUrl);
    $data = curl_exec($ch);
    $error= curl_error($ch);
    curl_close($ch);
    $links = array();
    $count = preg_match_all('@<loc>(.+?)<\/loc>@', $data, $matches);
    for ($i = 0; $i < $count; ++$i) {
        $links[] = $matches[0][$i];
    }
    return $links;  
}

echo $line_break;
echo "Memory Usage: ". format_bytes(memory_get_usage(), 2).$line_break;
echo "Peak Memory Usage: ".format_bytes(memory_get_peak_usage(), 2).$line_break;

function format_bytes($size, $precision = 2)
{
    $base = log($size, 1024);
    $suffixes = array('', 'K', 'M', 'G', 'T');   
    return round(pow(1024, $base - floor($base)), $precision) . $suffixes[floor($base)];
}
```