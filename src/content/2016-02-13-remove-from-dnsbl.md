---
title: "Remove from DNSBL or RBL Blacklists"
slug: "remove-from-dnsbl"
date: "2016-02-13"
---

DNSBL or DNS Blackhole List and RBL or Realtime Blackhole List are great for the consumer but for businesses and marketers, it can be a huge headache—even if the email sending is legitimate and opt-in because they are going by IP reputation and domain name reputation (reverse IP). If you have a large mailing list (opted in) that has not seen the light of day for some time, this can trigger these DNSBL / RBL services such as Barracuda and Spamhaus.

**What is DNSBL / RBL?**

This is an email spam prevention effort that flags locations on the Internet that has a reputation of spamming. There are tons of providers but some of the more popular ones include Barracuda, Spamhaus, Protected Sky RBL and Invaluement. These DNSBL services create blacklists and the recipient ISPs will check with one or multiple DNSBL providers to see if the email will make it to the Inbox or not. If it is flagged as spam, it will enter a "black hole" and will not make it to the recipients Inbox or even Spam box. That's correct. If it is flagged with a DNSBL provider, it may not even show up in the Spam box.

### **How to check if my domain or IP is blacklisted?**

I recommend using [MX Toolbox](http://mxtoolbox.com/SuperTool.aspx) and the [Multi RBL checker by valli.org](http://mxtoolbox.com/SuperTool.aspx).

### **How do I remove myself from these blacklists?**

There are tons of DNSBL / RBL providers and each of them has their own process to remove from their blacklist. I have included the links to remove from blacklist for some of the popular DNSBL / RBL providers that tend to be on the aggressive side with blacklisting.

**Spamhaus:** Spamhaus is the most popular and is used by web hosting companies and larger corporate email providers. Spamhaus has multiple blocklists including IP based and domain based so you need to check both your domain and IP of the domain name. You can request for blacklist removal at their [Blocklist Removal Center](https://www.spamhaus.org/lookup/).

**Barracuda:** Barracuda is used by the popular anti-spam engine SpamAssassin, which is default service that comes with virtually every Cpanel based web hosting provider. You can request for your IP to be removed from their blacklist using their [Removal Request](http://www.barracudacentral.org/rbl/removal-request) service. You can also add your domain name to their partnered whitelist service [EmailReg.org](http://www.emailreg.org/index.cgi) although requires a $20 one time fee.

**Protected Sky:** Protected Sky is a free RBL that is open for anybody to use for anti-spam. You can request to remove from blacklist using their [Lookup](http://psky.me/check/) service. Enter your mail server's IP address and if it is blacklisted, you will see a Request a Delisting link.

**Invaluement:** Invaluement normally displays as ivmURI, ivmSIP and ivmSIP/24, which are the names of their corresponding blacklists. You can request to remove from their blacklist using their [Removal Requests](http://www.invaluement.com/removal/) page.

**SORBS:** SORBS is one of the DNSBL providers that Gmail uses so if you are on this blacklist, it can be a nightmare. To remove from blacklist, you would need to create a free account at [sorbs.net](http://www.sorbs.net), and then navigate to their [Support](http://www.sorbs.net/cgi-bin/support) once you are logged in to request for your IP to be removed.

**SpamRats:** SpamRats normally displays as RATS-Dyna, RATS NoPtr, RATS-Spam and RATS-Auth. To remove from their RATS NoPtr blacklist, you must have a PTR reverse DNS record set up. If you have this set up, you can request to remove your IP from their lists on the [RAT Lists](http://www.spamrats.com/lists.php) page.

**URIBL****:** URIBL requires you to create an account at [uribl.com](http://uribl.com). To remove from blacklist, you would go to [Lookup](https://admin.uribl.com/?section=lookup;) once you are logged in, and they will do the reverse IP for you so you would enter your domain name. If it is blacklisted, you can click on the request delist from that screen.