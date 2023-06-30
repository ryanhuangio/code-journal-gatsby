---
title: "Remote Server Automation using PuTTY and SSH Commands"
slug: "remote-server-automation"
date: "2016-02-11"
---

If you have multiple virtual machines or servers that you need to deploy the same commands to, here is how you would do it:

1. Make sure you have PuTTY, and you can download it here (download putty.exe).
2. In the same folder that you have `putty.exe`, create a .bat text file using Notepad in this case I am calling it `servers.bat` and create a .txt file using Notepad in this case I am calling it `server_exec.txt`
3. Inside `servers.bat`, you want to put `putty.exe root@server.com -pw password -m servers_exec.txt` and repeat each server on a new line.
4. Inside `server_exec.txt`, you want to put the SSH commands, one per line.
5. Double click on `servers.bat` and it'll login to each server and run your commands.

This concept can be taken and expanded on for more complex automation. For example, if each of your servers requires its own set of commands, you can create a separate .txt file for each server and update it in the corresponding line in your .bat file.