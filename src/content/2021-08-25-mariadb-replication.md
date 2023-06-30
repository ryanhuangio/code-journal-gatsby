---
title: "MariaDB 10.6 Replication with Rocky Linux 8"
slug: "mariadb-replication"
date: "2021-08-25"
---

Rocky Linux 8 was used, but this works for all RHEL downstream distros, such as AlmaLinux or CentOS.

## Master

Add the following to `/etc/my.cnf`

```
[client-server]
[mariadb]
log-bin
server_id=1
log-basename=master1
binlog-format=mixed
```

Enter `mariadb` and run

```
GRANT ALL PRIVILEGES ON _._ TO 'replication_user'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
GRANT REPLICATION SLAVE ON *.* TO 'replication_user'@'%';
FLUSH PRIVILEGES;
```

## Replicas

`vi /etc/my.cnf`

Add the following to `/etc/my.cnf`

```
[mariadb]
server_id=[unique int]
#server_id=2
```

Restart MariaDB

`systemctl restart mariadb`

Enter `mariadb` and run

```
CHANGE MASTER TO
  MASTER_HOST='master.db.prdistribution.com', 
  MASTER_USER='replication_user',
  MASTER_PASSWORD='PASSWORD',
  MASTER_PORT=3306,
  MASTER_LOG_FILE='master1-bin.000096',
  MASTER_LOG_POS=568,
  MASTER_CONNECT_RETRY=10;

Allow remote connections (optional) but change '%' to remote IP.

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;
```