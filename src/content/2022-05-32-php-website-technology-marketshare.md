---
title: "PHP Website Technology Marketshare"
slug: "php-website-technology-marketshare"
date: "2022-05-32"
---
```php
<?php
ini_set('default_socket_timeout',5); 

$websites = file_get_contents('majesticmillion.txt');

$limit = 1000000;
//$limit = 1000000;
$countWordpress = 0;
$countShopify = 0;
$countWix = 0;
$countGodaddy = 0;
$countSquareSpace = 0;
$countMagento = 0;
$countJoomla = 0;
$countDrupal = 0;
$countWeebly = 0;
$break = 0;
foreach(preg_split("/((\r?\n)|(\r\n?))/", $websites) as $website){
    $break++;
    if ($break < $limit) 
    {
        $stack = isTechnology($website);
        $countWordpress += $stack["wordpress"];
        $countShopify  += $stack["shopify"];
        $countWix  += $stack["wix"];
        $countGodaddy += $stack["godaddy"];
        $countSquareSpace += $stack["squarespace"];
        $countMagento  += $stack["magento"];
        $countJoomla  += $stack["joomla"];
        $countDrupal  += $stack["drupal"];
        $countWeebly += $stack["weebly"];

        $countTotal = 
        $countWordpress +
        $countShopify +
        $countWix +
        $countGodaddy +
        $countSquareSpace +
        $countMagento +
        $countJoomla +
        $countDrupal +
        $countWeebly + 0.00000000000000001
        ;

        $percentWordpress = round($countWordpress/$countTotal*100);
        $percentShopify = round($countShopify/$countTotal*100);
        $percentWix = round($countWix/$countTotal*100);
        $percentGodaddy = round($countGodaddy/$countTotal*100);
        $percentSquareSpace = round($countSquareSpace/$countTotal*100);
        $percentMagento = round($countMagento/$countTotal*100);
        $percentJoomla = round($countJoomla/$countTotal*100);
        $percentDrupal = round($countDrupal/$countTotal*100);
        $percentWeebly = round($countWeebly/$countTotal*100);
        
        $percentWordpressAll = round($countWordpress/$break*100);
        $percentShopifyAll = round($countShopify/$break*100);
        $percentWixAll = round($countWix/$break*100);
        $percentGodaddyAll = round($countGodaddy/$break*100);
        $percentSquareSpaceAll = round($countSquareSpace/$break*100);
        $percentMagentoAll = round($countMagento/$break*100);
        $percentJoomlaAll = round($countJoomla/$break*100);
        $percentDrupalAll = round($countDrupal/$break*100);
        $percentWeeblyAll = round($countWeebly/$break*100);
 
        echo "$break. Processing $website...\n";
        echo "
        Wordpress: $countWordpress ($percentWordpress% of detected, $percentWordpressAll% of analyzed)
        Shopify: $countShopify ($percentShopify% of detected, $percentShopifyAll% of analyzed)
        Wix: $countWix ($percentWix% of detected, $percentWixAll% of analyzed)
        Godaddy: $countGodaddy ($percentGodaddy% of detected, $percentGodaddyAll% of analyzed)
        SquareSpace: $countSquareSpace ($percentSquareSpace% of detected, $percentSquareSpaceAll% of analyzed)
        Magento: $countMagento ($percentMagento% of detected, $percentMagentoAll% of analyzed)
        Joomla: $countJoomla ($percentJoomla% of detected, $percentJoomlaAll% of analyzed)
        Drupal: $countDrupal ($percentDrupal% of detected, $percentDrupalAll% of analyzed)
        Weebly: $countWeebly ($percentWeebly% of detected, $percentWeeblyAll% of analyzed)
        Total Detected: $countTotal
        Total Websites Analyzed: $break;
        \n\n";
    }
} 



function isTechnology($url) {
    if(!str_contains($url, "http")) $url = "http://".$url;
        $url = @file_get_contents($url);
        $techStack = array();
        $techStack["wordpress"] = detectTech($url, "wp-content");
        $techStack["shopify"] = detectTech($url, "shopify");
        $techStack["wix"] = detectTech($url, "wix");
        $techStack["godaddy"] = detectTech($url, "godaddy");
        $techStack["squarespace"] = detectTech($url, "squarespace");
        $techStack["magento"] = detectTech($url, "magento");
        $techStack["joomla"] = detectTech($url, "joomla");
        $techStack["drupal"] = detectTech($url, "drupal");
        $techStack["weebly"] = detectTech($url, "weebly");
    return $techStack;
}

function detectTech($techStack, $footprint) {
    if (strpos($techStack,$footprint) !== false) {
        return 1;
    } else {
        return 0;
    }
}

/*
- isTechnology() takes in a URL and then detects if it is each of those web technologies
- The foreach loop runs each URL into isTechnology() to get the stats for each website
 and then crunches some math with that info and shows the CLI output
*/```