---
title: "Find and Replace in MariaDB/MySQL"
slug: "find-replace-mariadb"
date: "2021-08-23"
---

Although, one can write a PHP script to go through each row, replacement and update, it is quicker and simple to do it with SQL.

```
UPDATE table SET column_heading = REPLACE(column_heading, 'find_this', 'replace_with');
```

With MariaDB 10+ and MySQL 8+, you can use regular expressions for find and replace with `REGEXP_REPLACE()`