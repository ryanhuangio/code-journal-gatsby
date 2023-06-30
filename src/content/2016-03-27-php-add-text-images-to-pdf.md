---
title: "PHP: Adding Text and Images to Existing PDF Documents"
slug: "php-add-text-images-to-pdf"
date: "2016-03-27"
---

For a projects I am working on, I need to merge the customer's headshot photo and details onto a PDF template. The traditional method of doing this would be to open up Photoshop each time and swap out the content and export as a PDF but I wanted an automated approach—this is where PHP becomes an valuable asset.

After doing some research, I was able to find two libraries—one that handled importing an existing PDF ([FPDI Libary](https://www.setasign.com/products/fpdi/downloads/)) and one that handled adding text and images to the PDF ([FPDF Library](http://www.fpdf.org/)). There are massive applications for dynamically adding text and images to a PDF. Some of the applications include generating custom invoices, letters, certificates, print and so much more!

For both security and practical purposes, I cleaned up my code and removed the excess that was applicable to just my project. Below is the clean version of my PHP code:

```
<?php

require_once('fpdf.php');
require_once('fpdi.php');

function generatePDF($source, $output, $text, $image) {

$pdf = new FPDI('Portrait','mm',array(215.9,279.4)); // Array sets the X, Y dimensions in mm
$pdf->AddPage();
$pagecount = $pdf->setSourceFile($source);
$tppl = $pdf->importPage(1);

$pdf->useTemplate($tppl, 0, 0, 0, 0);

$pdf->Image($image,10,10,50,50); // X start, Y start, X width, Y width in mm

$pdf->SetFont('Helvetica','',10); // Font Name, Font Style (eg. 'B' for Bold), Font Size
$pdf->SetTextColor(0,0,0); // RGB 
$pdf->SetXY(51.5, 57); // X start, Y start in mm
$pdf->Write(0, $text);

$pdf->Output($output, "F");
}
generatePDF("template.pdf", "export.pdf", "Hello world", "image.jpg");
```