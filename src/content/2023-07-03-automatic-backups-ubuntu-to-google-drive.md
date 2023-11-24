---
title: Automatic Daily Backups from Ubuntu Server to Google Drive
slug: "automatic-backups-ubuntu-to-google-drive"
date: "2023-07-03"
---

This requires `rclone` installed and configured to Google Drive. See [Rclone Ubuntu Server to Google Drive](/rclone-ubuntu-server-to-google-drive)

1. Create the script `vi backup.sh`

```bash
#!/bin/bash

# Remove the existing contents of /home/__Temp
rm -rf /home/__Temp

# Create the __Temp directory if it doesn't exist
mkdir -p /home/__Temp

current_date=$(date +%Y-%m-%d)

# Use find with an exclusion condition for __Temp
find /home -mindepth 1 -maxdepth 1 -type d \
  \( ! -path '/home/__Temp' \) \
  -exec sh -c 'tar czf "/home/__Temp/$(basename {}).tar.gz" -C "{}" .' \;

rclone copy /home/__Temp/. GoogleDrive:RcloneBackups/domain.com/$current_date
```

```bash
# Outdated Script

#!/bin/bash

rm -rf /root/temp/*

current_date=$(date +%Y-%m-%d)

find /root -mindepth 1 -maxdepth 1 -type d \
  \( ! -path '*/node_modules/*' \
  ! -path '/root/temp/*' \
  ! -path '/root/.local/*' \
  ! -path '/root/snap/*' \) \
  ! -name 'nohup.out' \
  ! -name '.*' \
  -exec sh -c 'zip -r "/root/temp/$(basename {}).zip" "{}" -x "/root/temp/*"' \;


rclone copy /root/temp/. GoogleDrive:RcloneBackups/domain.com/$current_date

### replace GoogleDrive with your Rclone storage name and GoogleDriveFolder with the folder you want to store the backups in
```

2. Run `chmod 755 backup.sh`
3. Run `crontab -e` and select your favorite text editor
4. Add `0 23 * * * sh /root/backup.sh` to run automatic backups at 11pm each night
