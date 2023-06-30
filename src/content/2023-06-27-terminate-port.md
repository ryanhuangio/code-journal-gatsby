---
title: "Terminating an Application or Service by Port Number in Linux"
slug: "terminate-app-by-port-number"
date: "2023-06-27"
---

If you have started an application in one shell and subsequently opened a new shell session, you will notice that when you try to run your application, the desired port is already occupied.

Fortunately, it is relatively straightforward to terminate applications using the port number.

1. Find the process ID with the port in question `sudo lsof -i :9000` (replace `9000` with yours)
2. Terminate the process `sudo kill <PID>` (replace `<PID`> with the process ID)

If `lsof` is not available, run `apt update && apt install lsof`