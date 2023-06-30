---
title: "Change Port in Rocky Linux"
slug: "change-port-in-rockylinux"
date: "2021-08-25"
---

Rocky Linux 8 was used, but this works for all RHEL downstream distros, such as AlmaLinux or CentOS.

## Custom SSH Port

By default, the SSH port is 22 but for security purposes, you may want to change your SSH port.

`vi /etc/ssh/sshd config`

Uncomment `Port = 22` and change to `Port = 1234`. Save with `Esc + :wq`

`firewall-cmd --zone=public --add-port=1234/tcp --permanent`
`firewall-cmd --reload`
`yum install policycoreutils-python-utils`

`semanage port -a -t ssh port t -p tcp 2202 semanage port -m -t ssh port t -p tcp 2202 systemctl restart sshd
`
## Login Using SSH Keys

For additional security, one can authenticate using SSH keys.

`ssh-keygen -t rsa`
`vi ~/.ssh/authorized keys`

Copy and paste your public key from your local machine and save

`Esc + :wq`

`chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized keys`

On the local machine, run the following to authenticate using your keys

`ssh -i ~/.ssh/id rsa ssh://root@hostname.com:1234`