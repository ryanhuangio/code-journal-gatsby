---
title: "MariaDB: Turning Off Strict Mode"
slug: "mariadb-turn-off-strict-mode"
date: "2022-02-09"
---

While this is not recommended, if you have an app that requires `STRICT_TRANS_TABLES` turned off, here is how to do it.

## Turn it off in MariaDB's configuration file:

1. Open the MariaDB configuration file using the command
   `vi /etc/my.cnf`

1. Add the following line to the file
   `sql_mode = ""`

1. Save the changes and exit the editor.
1. Restart the MariaDB service using the command
   `systemctl restart mariadb`

## Turn it off in the MariaDB schema database:

1. Log in to the MySQL or phpMyAdmin interface.
1. Run the following command to disable strict mode: `SET GLOBAL sql_mode='';`
