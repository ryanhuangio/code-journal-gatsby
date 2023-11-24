---
title: Rclone Ubuntu Server to Google Drive
slug: "rclone-ubuntu-server-to-google-drive"
date: "2023-07-03"
---

This is a component tutorial for [Automatic Backups from Ubuntu Server to Google Drive](/automatic-backups-ubuntu-to-google-drive)

1. Update package manager `apt update`
2. Install workflow dependencies `apt install sudo vim curl unzip zip`
3. Install Rclone `sudo -v ; curl https://rclone.org/install.sh | sudo bash`
4. Run `rclone config`
5. Go to [Google Cloud console](https://console.cloud.google.com/apis/) and create a **New Project**.
6. Once a new project has been created, go to **Enabled APIs & services** and add
7. Search for Google Drive API, click into it and **Enable**
8. Go to **OAuth consent screen** and select **External** and fill out the information
9. On the next screen under **Scopes**, click **Add or Remove Scopes** and add `.../auth/docs` `.../auth/drive	` `.../auth/drive.metadata.readonly`
10. On next screen under **Test users**, click **Add Users** and add yourself.
11. Click on **Publish App**
12. Navigate to **Credentials** and create an **OAuth client ID** with Application type as **Desktop app**.
13. Save the credentials.
14. In Ubuntu, `cd` to the directory you want to backup and run `rclone copy . StorageName:/GoogleDriveFolder` replacing `StorageName` with the remote name you assigned.
