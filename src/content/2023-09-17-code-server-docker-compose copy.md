---
title: "VS Code Server with Password and Port Using Docker Compose"
slug: "code-server-docker-compose"
date: "2023-09-17"
---

Launch VS Code on the server using Docker compose with a password and custom port.


1. Save as `docker-compose.yml`
```
version: '3.9'

services:
  code-server:
    container_name: CodeServer
    image: ubuntu:latest
    ports:
      - "8080:8080"
    volumes:
      - ./home:/home
    command:
      - bash
      - -c
      - |
        apt update && apt install -y curl sudo systemd && \
        curl -fsSL https://code-server.dev/install.sh | sh && \
        mkdir -p /root/.config/code-server && \
        cat <<EOL > /root/.config/code-server/config.yaml
        bind-addr: 0.0.0.0:8080
        auth: password
        password: pass123
        cert: false
        EOL
        code-server
    tty: true

```

2. Run `docker compose up -d`