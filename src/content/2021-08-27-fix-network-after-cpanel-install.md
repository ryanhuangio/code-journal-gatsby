---
title: "Fix Broken Network After Installing Cpanel"
date: "2021-08-27"
slug: "fix-network-after-cpanel-install"
---

Edit `/etc/sysconfig/network-scripts/ifcfg-ens3`

Add the following

```BOOTPROTO=static
IPADDR=173.254.241.105
NETMASK=255.255.255.224
GATEWAY=173.254.241.98
DNS1=8.8.8.8
DNS2=8.8.4.4```

Restart the network with `systemctl restart network`