---
title: Automatic Daily Backups from Ubuntu Server to Google Drive
slug: 'automatic-backups-ubuntu-to-google-drive'
date: '2023-07-03'
---

This requires `rclone` installed and configured to Google Drive. See [Rclone Ubuntu Server to Google Drive](/rclone-ubuntu-server-to-google-drive)

1. Create the script `vi backups.sh`

```bash
###

#!/bin/bash

rm -rf /root/temp/*

current_date=$(date +%Y-%m-%d)

#find /root -mindepth 1 -maxdepth 1 -type d -not -path '*/node_modules/*' -not -path '/root/temp/*' -not -path '/root/.local/*' -not -name 'nohup.out' -not -path '/root/snap/*' -not -name '.*' -exec sh -c 'zip -r "/root/temp/$(basename {}).zip" "{}" -x "/root/temp"' \;

find /root -mindepth 1 -maxdepth 1 -type d \
  \( ! -path '*/node_modules/*' \
  ! -path '/root/temp/*' \
  ! -path '/root/.local/*' \
  ! -path '/root/snap/*' \) \
  ! -name 'nohup.out' \
  ! -name '.*' \
  -exec sh -c 'zip -r "/root/temp/$(basename {}).zip" "{}" -x "/root/temp/*"' \;


rclone copy /root/temp/. GoogleDrive:RcloneBackups/node.ryanhuang.io/$current_date

### replace GoogleDrive with your Rclone storage name and GoogleDriveFolder with the folder you want to store the backups in
```

2. Run `crontab -e` and select your favorite text editor
3. Add `0 23 * * * sh /root/backup.sh` to run automatic backups at 11pm each night
