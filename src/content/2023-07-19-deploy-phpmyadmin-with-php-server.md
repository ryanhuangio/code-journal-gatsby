---
title: "Deploy phpMyAdmin with Built-in PHP Server"
slug: "deploy-phpmyadmin-with-php-server"
date: "2023-07-19"
---

Run phpMyAdmin from MacOS or Linux without a web server such as Apache or Nginx, using just the built in PHP server.

1. Download phpMyAdmin and unzip it.
2. `cd` into the phpMyAdmin directory
3. `mv config.sample.inc.php config.inc.php`
4. Set the hostname
5. For local development to bypass login screen, set

```
$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['user'] = '';
$cfg['Servers'][$i]['password'] = '';
$cfg['Servers'][$i]['AllowNoPassword'] = true;
```

6. Save it and run. The configurations will allow for importing larger SQL files.

```
php -d memory_limit=1024M -d post_max_size=500M -d upload_max_size=500M -S localhost:8080
```
