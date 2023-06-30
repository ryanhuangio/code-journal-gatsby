---
title: "Intel VROC (Virtual RAID on CPU) on TYAN Server"
slug: "intel-vroc-virtual-raid-on-cpu-on-tyan-server"
date: "2021-11-29"
---

How to enable RAID for Intel VROC (Virtual RAID on CPU) with Intel Xeon Scalable processors. This tutorial is for a TYAN Thunder CX TN200-B7108-X4L / 2U4N 2S 12-LFF SATA HCI Server with Intel Xeon Gold 5215 processors.

1. Enter BIOS (Del)

2. Navigate to Platform Configuration

![](/2021-11-29-intel-vroc-virtual-raid-on-cpu-on-tyan-server-1.png)

3. Navigate to PCH Configuration

![](/2021-11-29-intel-vroc-virtual-raid-on-cpu-on-tyan-server-2.png)

4. Navigate to PCH SATA Configuration

5. Set "SATA Controller" to "Enabled" and "Configure SATA as" to "RAID"

![](/2021-11-29-intel-vroc-virtual-raid-on-cpu-on-tyan-server-3.png)

6. Save and reboot for RAID configuration.