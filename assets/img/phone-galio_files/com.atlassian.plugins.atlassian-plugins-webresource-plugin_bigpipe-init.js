;
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:bigpipe-init', location = 'js/bigpipe/initBigpipe.js' */
(function syncInitBigpipe(){var b=require("skate");require("wrm/bigpipe/element");var a=document.querySelectorAll("big-pipe");var c=0;var d=a.length;for(;c<d;c++){b.init(a[c])}})();;