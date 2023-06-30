---
title: "Install Webuzo Control Panel on Linux CentOS 7"
slug: "install-webuzo-on-centos"
date: "2016-03-16"
---

Webuzo is a web hosting control panel for Linux. The few things that set Webuzo apart from other LAMP (Linux Apache MySQL and PHP) stack web hosting control panels is that it is a single user control panel, easy to install but most notably is that it is free. They do have a paid version, and the difference between the free and paid version is the number of scripts available—55 scripts and 391 scripts, respectively. These scripts allow you to install web applications with 1 click and integrates fully into the Webuzo control panel framework.

You can install Webuzo on any of the popular Linux distributions. According to their [system requirements](http://www.webuzo.com/wiki/System_Requirements), it works for 32-bit (x86) but the installer gave me some issues so I installed it on 64-bit (x86 64). The indicated minimum requirement for RAM is 512mb but it does work on 256mb of RAM.

For this tutorial, I am using CentOS 7 64-bit so if you are using Debian, you will need to use the apt-get counterpart instead of yum.  

## Removing Existing Apache Installations (Optional)

If you are installing this on a dedicated server, you probably will not need to worry about this since most dedicated servers come with just the operating system unless you specify that you want additional software installed. If you are installing this on a VPS, you may need to remove existing Apache installs since some VPS provides have Apache installed as a default. You can double check by contacting your web hosting provider to see if it comes with Apache or if it is a blank Linux installation (skip Part 1, if it is).

First, we need to find out all of the installed server component and server module packages.

You can run this to find out all of the server component packages:

`yum list installed httpd`

And then run this to find out all of the server module packages:

`yum list installed mod`

Second, we will remove Apache along with the installed packages. Below is the command to remove Apache along with the typical packages that come installed:

```
yum remove httpd httpd-devel httpd-manual httpd-tools mod auth kerb mod auth mysql mod auth pgsql mod authz ldap mod dav svn mod dnssd mod nss mod perl mod revocator mod ssl mod wsgi
```

Lastly, we need to remove the Apache user and group, and a few extra folders left behind. You will need to run each of these commands:

```
userdel -r apache
rm -rfv /var/www
rm -rfv /etc/httpd
rm -rfv /usr/lib/httpd
```

## Install Webuzo

1. Login as root.
2. `wget http://files.webuzo.com/install.sh`
3. `chmod 700 install.sh`
4. `./install.sh`
5. Once the installation script finishes, you will see a message "Installation Completed... Congratulations, Webuzo has been successfully installed..." and it will also give you the URL to type into your web browser. It will be along the lines of http://111.222.111.222:2004 (it'll be your IP address instead).

## Configure Webuzo with Apache, Exim and Dovecot

### Finalizing Webuzo Setup

Open your web browser and navigate to the URL given to you from the last step of Part 2, and you will be taken to the Webuzo Initial Setup page. Enter a username, password, email address (used for system notifications and resetting your password) and your domain name. For the nameservers, you can type in ns1.yourdomain.com and ns2.yourdomain.com.

For the License Key, you can get your free license key [here](http://www.webuzo.com/free).

### Reinstall Apache using Webuzo (Optional)

Webuzo installs Apache by default so this is an optional step. I am only suggesting this because out of several Linux VPS I installed Webuzo onto, one of them ran into an issue with Apache and this was my resolution. If you did not have to do Part 1, you can skip this altogether.

1. Login to Webuzo. Once you are logged in, you may need to click Enduser Panel if you are on the Admin Panel page.
2. On the left Search bar, type in Apache and click on Apache (not Apache2, which requires the paid version).
3. Click Remove.
4. Once it has been removed, refresh the page and click Install.

### Install Exim for SMTP (Outbound Email)

At this point, your web server is set up but you cannot create email accounts or send out emails. Next, we need to install Exim, which is a MTA (Mail Transfer Agent) that handles the sending out of emails--in short, an SMTP server.

1. On the left Search bar, type in Exim and click on Exim.
2. Click Install.

### Install Dovecot for IMAP/POP (Inbound Email)

At this point, you can create email accounts and send out email using an SMTP client but you will not be able to receive emails or even use the built in webmail client, SquirrelMail. You would need to install Dovecot.

1. On the left Search bar, type in Dovecot and click Dovecot.
2. Click Install.

Done. You have successfully installed Webuzo with Apache, Exim and Dovecot.