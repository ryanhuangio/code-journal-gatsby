---
title: "Registering Application as a Systemd/Systemctl Service in Linux"
slug: "register-app-systemctl-service"
date: "2023-06-29" 
---

Registering an application as a systemd daemon allows you to enable it to start when the server restarts. It also will allow you to `start` `stop` and `restart` your application using `systemctl`.

### Install Dependencies

1. Update the Ubuntu package manager `apt update && apt upgrade`
2. Run `apt install vim sudo systemctl`

## Register a Gatsby App

In this example, I will deploy Gatsby app called Code Journal. Replace the values for your application.

1. Create this file `sudo vi /etc/systemd/system/codejournal.service` (replace `codejournal` with your app)
2. Add the following but replace `Description` `ExecStart` and `WorkingDirectory`
```
[Unit]
Description=Code Journal
After=network.target

[Service]
ExecStart=/bin/bash -c "gatsby build && gatsby serve --host 0.0.0.0 --port 9000"
WorkingDirectory=/home/code-journal
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```
3. `sudo systemctl daemon-reload`
4. `sudo systemctl start codejournal.service`
5. `sudo systemctl enable codejournal.service`

## Register a Python App

In this example, I will deploy a Python Flask app called Leads App. All of the instructions are the same as above, except step 2. Use the following instead:

```
[Unit]
Description=Leads App
After=network.target

[Service]
User=leadsapp
Group=leadsapp
WorkingDirectory=/home/leads_app
ExecStart=/usr/local/bin/gunicorn --bind 0.0.0.0:8000 app:app

[Install]
WantedBy=multi-user.target
```

