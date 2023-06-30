---
title: "Rebuild & Re-Sync MariaDB Replication"
slug: "rebuild-resync-mariadb-replication"
date: "2022-01-05"
---

## Master Server

On the master MariaDB server, please reset, flush tables with read lock, export SQL dump and unlock tables.

Enter `mariadb`

RESET MASTER;
FLUSH TABLES WITH READ LOCK;

Exit `mariadb` to export each database. Do not export all databases automatically, otherwise, the MariaDB database server databases will be exported and imported too, which would wreck the slaves.

mysqldump -u root -p database > database_dump.sql

Enter `mariadb`

`UNLOCK TABLES;`

## Slave Server

On the slave MariaDB servers, import each SQL dump and restart the slave.

`mysql -u root -p database < database_dump.sql`

Enter `mariadb`

```STOP SLAVE;
RESET SLAVE;
CHANGE MASTER TO MASTER_LOG_FILE='mysql-bin.000001', MASTER_LOG_POS=1;
START SLAVE;
show slave status G```

## Re-Sync to Current Master Position

If there are any errors on the slaves, you can resync the slaves to the current position of the master, which you can find both the `MASTER_LOG_FILE` and `MASTER_LOG_POS` from phpMyAdmin.

```STOP SLAVE;
RESET SLAVE;
CHANGE MASTER TO
  MASTER_HOST='master.db.prdistribution.com', 
  MASTER_USER='replication_user',
  MASTER_PASSWORD='XXXXXX',
  MASTER_PORT=3306,
  MASTER_LOG_FILE='master1-bin.000002',
  MASTER_LOG_POS=108314,
  MASTER_CONNECT_RETRY=10;
START SLAVE;
show slave status G```

![](https://ryanhuang.io/wp-content/uploads/2022/01/Screen-Shot-2022-01-04-at-8.33.10-PM-1024x672.png)

Grant Privileges
----------------

If there are permissions that need to be set, you can do so with the following as examples (change empty password fields after `IDENTIFIED BY`):

```GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'replication_user'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'replication_root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY '' WITH GRANT OPTION;```