---
title: "Insert Tawk.to Live Chat Link in Wordpress Menu"
slug: "tawk-link-in-wordpress-menu"
date: "2023-01-04"
---

Tawk.to is the most popular free Live Chat software. Wordpress is the most popular CMS software. Naturally one would like to integrate the two. Integration is pretty straight forward, however, if you want to let's say have a "Live Chat" or "Contact" link in the main menu that triggers the Live Chat modal to toggle expand or collapse, you will find that Wordpress will remove the JavaScript from your Tawk JavaScript toggle link `javascript:void(Tawk_API.toggle())`

Here is the workaround:

1.  We will add a menu item as we normally would let's call it Live Chat and link it to https://www.domain.com/contact (this page does not need to exist)
2.  We will use jQuery to find the link and replace it with the Tawk JavaScript toggle link. This code could be placed into the theme files or any plugin that let's you insert custom HTML code into your website.

Together, it should look something like this with your Tawk.to embed code, jQuery CDN and the jQuery code to swap in the Tawk.to link.

```javascript
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='[replace this with your unique widget source from Tawk]';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("a[href='https://www.domain.com/contact']").attr("href", "javascript:void(Tawk_API.toggle())");
});
</script>
```