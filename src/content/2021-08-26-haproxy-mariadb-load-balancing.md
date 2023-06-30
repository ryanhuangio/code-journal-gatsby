---
title: "HAProxy MariaDB Cluster Load Balancing"
slug: "haproxy-mariadb-load-balancing"
date: "2021-08-26"
---

This assumes the MariaDB replicas are already exist.

Replace `/etc/haproxy/haproxy.cfg` with

```global
    log 127.0.0.1 local0 notice
    user haproxy
    group haproxy
defaults
    log global
    retries 2
    timeout connect 3000
    timeout server 5000
    timeout client 5000
listen mysql-cluster
    bind 10.0.0.0:3306
    mode tcp
    option mysql-check user haproxy_user
    balance roundrobin
    server reader1 10.0.0.1:3306 check
    server reader2 10.0.0.2:3306 check
    server reader3 10.0.0.3:3306 check
    server reader4 10.0.0.4:3306 check
    server reader5 10.0.0.5:3306 check

listen stats
    bind *:8000
    mode http
    stats enable
    stats uri /
    stats realm Strictly Private
    stats auth admin:password```

Install MariaDB so HAProxy can check each replica.

On the MariaDB replication master, enter mariadb and run (replace `10.0.0.x` with IP of HAProxy instance)

```GRANT ALL PRIVILEGES ON _._ TO 'haproxy_user'@'10.0.0.x' IDENTIFIED BY 'AnyPassword' WITH GRANT OPTION; 
SET PASSWORD FOR 'haproxy_user'@'10.0.0.x'='';
FLUSH PRIVILEGES;```