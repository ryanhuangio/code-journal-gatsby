---
title: "Backup Database Server to Remote Server"
slug: "backup-database-to-remote-server"
date: "2022-02-08"
---

Save the script to `/home/scriptbd/scriptbd.sh`

```bash
#!/bin/bash#
echo "starting db backup"
day="$(date '+%Y-%m-%d')"
mysqldump database1 > /home/scriptbd/bds/"$day"_database1.sql
mysqldump database2 > /home/scriptbd/bds/"$day"_database2.sql
mysqldump database3 > /home/scriptbd/bds/"$day"_database3.sql
scp -P 718 /home/scriptbd/bds/* root@domain.com:/home/user/backups/databases/
rm -rf /home/scriptbd/bds/*
ssh -p 718 root@domain.com "chown -R user:user /home/user/backups/databases/* "
echo "db backup complete"
```

