---
title: "Install MariaDB 10.6 on Rocky Linux 8"
slug: "install-mariadb-on-rockylinux"
date: "2021-08-25"
---

Rocky Linux 8 was used, but this works for all RHEL downstream distros, such as AlmaLinux or CentOS.

## Enable MariaDB Repo

Enable MariaDB 10.6 in the YUM repository.

`sudo vi /etc/yum.repos.d/mariadb.repo`

Paste the following

```
# MariaDB 10.6 CentOS repository list - created 2021-08-25 01:00 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.6/centos8-amd64
module_hotfixes=1
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

## Install MariaDB

`sudo dnf install MariaDB-server -y`
`systemctl start mariadb`
`systemctl enable mariadb`

Add MariaDB to your firewall.

`sudo firewall-cmd --permanent --add-service=mysql`
`sudo firewall-cmd --reload`

## Securing MariaDB

`sudo mariadb-secure-installation`