---
title: "Intel VROC (Virtual RAID on CPU) on TYAN Server"
slug: "intel-vroc-virtual-raid-on-cpu-on-tyan-server"
date: "2021-11-29"
---

How to enable RAID for Intel VROC (Virtual RAID on CPU) with Intel Xeon Scalable processors. This tutorial is for a TYAN Thunder CX TN200-B7108-X4L / 2U4N 2S 12-LFF SATA HCI Server with Intel Xeon Gold 5215 processors.

1. Enter BIOS (Del)

2. Navigate to Platform Configuration

![](https://ryanhuang.io/wp-content/uploads/2021/11/Screen-Shot-2021-11-29-at-12.10.08-AM-1024x765.png)

3. Navigate to PCH Configuration

![](https://ryanhuang.io/wp-content/uploads/2021/11/Screen-Shot-2021-11-29-at-12.11.43-AM-1024x767.png)

4. Navigate to PCH SATA Configuration

5. Set "SATA Controller" to "Enabled" and "Configure SATA as" to "RAID"

![](https://ryanhuang.io/wp-content/uploads/2021/11/Screen-Shot-2021-11-29-at-12.13.17-AM-1024x766.png)

6. Save and reboot for RAID configuration.