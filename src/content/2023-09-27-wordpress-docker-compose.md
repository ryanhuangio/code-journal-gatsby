---
title: "Deploy Wordpress using Docker Compose with phpMyAdmin"
slug: "wordpress-docker-compose"
date: "2023-09-27"
---

Launch Wordpress and phpMyAdmin using Docker Compose.

1. Save as `docker-compose.yml`

```
version: "3.9"

services:
  mariadb:
    container_name: "Wordpress_MariaDb"
    image: mariadb:latest
    environment:
      MYSQL_ROOT_PASSWORD: "ReplaceWithYourPassword" # Replace with your desired root password
      MYSQL_DATABASE: "wordpress_app" # Replace with your database name
    volumes:
      - ./mariadb-data:/var/lib/mysql
      - ./wordpress_app.sql:/docker-entrypoint-initdb.d/wordpress_app.sql
    ports:
      - "3306:3306"

  phpmyadmin:
    container_name: "Wordpress_PhpMyAdmin"
    build:
      context: .
      dockerfile: Dockerfile.phpmyadmin # Use the custom Dockerfile
    environment:
      PMA_ARBITRARY: 1
      PMA_HOST: mariadb
      PMA_USER: root
      PMA_PASSWORD: "ReplaceWithYourPassword" # Use the same root password as defined for MariaDB
      PHP_INI_MEMORY_LIMIT: "1024M"
      PHP_INI_POST_MAX_SIZE: "1024M"
      PHP_INI_UPLOAD_MAX_FILESIZE: "1024M"
    ports:
      - "8080:80"
    depends_on:
      - mariadb

  wordpress:
    container_name: Wordpress_App
    image: wordpress:latest
    environment:
      WORDPRESS_DB_HOST: mariadb:3306
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: "ReplaceWithYourPassword" # Use the same root password as defined for MariaDB
      WORDPRESS_DB_NAME: wordpress_app # Replace with your database name
    volumes:
      - ./wordpress:/var/www/html
    ports:
      - "80:80"

volumes:
  mariadb-data:

```

2. Run `docker compose up -d`
