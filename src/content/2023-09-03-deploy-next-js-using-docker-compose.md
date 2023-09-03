---
title: "Deploy Next.js App Using Docker Compose"
slug: "deploy-next-js-using-docker-compose"
date: "2023-09-03"
---

1. Save as `docker-compose.yml` inside your app directory (same directory as `next.config.js` and `package.json`)

Change `3200` to your preferred public port.

```
version: '3.9'
services:
    ubuntu:
        container_name: Next_App
        image: ubuntu:latest
        ports:
            - '3200:3000'
        volumes:
            - ./:/home/app
        command: >
            bash -c '
              apt update &&
              apt install -y vim curl &&
              apt-get update &&
              apt-get install -y ca-certificates curl gnupg &&
              mkdir -p /etc/apt/keyrings &&
              curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg &&
              echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list &&
              apt-get update &&
              apt-get install nodejs -y &&
              npm install -g npm &&
              cd /home/app &&
              rm -Rf /home/app/node_modules &&
              rm -Rf /home/app/.next &&
              npm install &&
              npm run build &&
              tail -f /dev/null'
```

2. Run `docker compose up -d`
