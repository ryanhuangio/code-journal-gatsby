---
title: "CPU Throttling for Windows Applications"
slug: "cpu-throttling-windows-apps"
date: "2016-03-15"
---

This is for CPU throttling on the application level, and is different than dynamic frequency scaling, which is used to prevent overheating and save power. CPU throttling for applications allows you to control how much overall CPU usage a specific application is allowed to use.

Sometimes applications can go rampant on CPU consumption, which may cause other applications or even the operating system to become unstable. This can happen if the application was designed for a smaller use case and you are pushing the application's boundaries--for example, a CSV editing application may be designed and tested for up to thousands of records but if you open a CSV file with 10 million records, it max out your computer's CPU cycles.

I recommend using a software called BES, which stands for Battle Encoder Shirase (no idea what this means). It is a simple piece of software that allows you to Target and Limit the CPU usage by percentage for up to 3 applications.

[Download BES](http://mion.faireal.net/BES/)

The website says it is compatible with Windows 7/XP/2000 but if you have Windows 8/ 8.1/10, you should be able to still run it without issues. I used it on Windows 10.