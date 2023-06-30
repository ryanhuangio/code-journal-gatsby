---
title: "Registering Application as a Systemctl Service in Linux"
slug: "register-app-systemctl-service"
date: "2023-06-29"
---

In this example, I will use a Gatsby app called Code Journal. Replace the values for your application.

1. Create this file `sudo vi /etc/systemd/system/codejournal.service` (replace `codejournal` with your app)
2. Add the following but replace `Description` and 
```
[Unit]
Description=Code Journal
After=network.target

[Service]
ExecStart=/bin/bash -c "gatsby build && gatsby serve --host 0.0.0.0 --port 9000"
WorkingDirectory=/root/code-journal
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```
3. `sudo systemctl daemon-reload`
4. `sudo systemctl start codejournal`
5. `sudo systemctl enable codejournal`

##
Installing Dependencies

1. Update the Ubuntu package manager `apt update && apt upgrade`
2. Run `apt install vim sudo systemctl`