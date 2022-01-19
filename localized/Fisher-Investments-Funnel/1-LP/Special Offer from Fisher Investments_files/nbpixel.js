// Newsbreak Pixel v1.0.0 | MIT License
!function(i,a,r){"use strict";function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function n(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?t(Object(o),!0).forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})}return i}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}var f={id:"",params:{},version:1},l=function(){function t(){u(this,t)}return s(t,null,[{key:"isPresent",value:function(e){return null!=e&&""!==e}},{key:"now",value:function(){return+new Date}},{key:"guid",value:function(){return f.version+"-xxxxxxxx-".replace(/[x]/g,function(e){var t=36*Math.random()|0;return("x"==e?t:3&t|8).toString(36)})+(+new Date).toString(36)}},{key:"optionalData",value:function(e){return!1===t.isPresent(e)?"":"object"===o(e)?t.optionalData(JSON.stringify(e)):"function"==typeof e?t.optionalData(e()):String(e)}}]),t}(),g=function(){function e(){u(this,e)}return s(e,null,[{key:"nameAndVersion",value:function(){var e,t=navigator.userAgent,n=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?"IE "+((e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""):"Chrome"===n[1]&&null!=(e=t.match(/\b(OPR|Edge)\/(\d+)/))?e.slice(1).join(" ").replace("OPR","Opera"):(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&n.splice(1,1,e[1]),n.join(" "))}},{key:"isMobile",value:function(){return"ontouchstart"in a}},{key:"userAgent",value:function(){return i.navigator.userAgent}}]),e}(),m=function(){function e(){u(this,e)}return s(e,null,[{key:"prefix",value:function(){return"__".concat("nbpix","_")}},{key:"set",value:function(e,t,n,r){var i,o=3<arguments.length&&void 0!==r?r:"/",u="";l.isPresent(n)&&((i=new Date).setTime(i.getTime()+60*n*1e3),u="expires=".concat(i.toGMTString(),"; ")),a.cookie="".concat(this.prefix()).concat(e,"=").concat(t,"; ").concat(u,"path=").concat(o,"; SameSite=Lax; domain=").concat(location.hostname.split(".").slice(-2).join("."))}},{key:"get",value:function(e){for(var e="".concat(this.prefix()).concat(e,"="),t=a.cookie.split(";"),n=0;n<t.length;n++){for(var r=t[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}}},{key:"delete",value:function(e){this.set(e,"",-100)}},{key:"exists",value:function(e){return l.isPresent(this.get(e))}},{key:"setUtms",value:function(){for(var e=["utm_source","utm_medium","utm_term","utm_content","utm_campaign"],t=!1,n=0,r=e.length;n<r;n++)if(l.isPresent(d.getParameterByName(e[n]))){t=!0;break}if(t){for(var i,o={},n=0,r=e.length;n<r;n++)i=d.getParameterByName(e[n]),l.isPresent(i)&&(o[e[n]]=i);this.set("utm",JSON.stringify(o))}}},{key:"getUtm",value:function(e){if(this.exists("utm")){var t=JSON.parse(this.get("utm"));return e in t?t[e]:""}}},{key:"setNbs",value:function(){for(var e=["nb_aid","nb_fid","nb_cid","esourceid","csource","siteid","ccreative","cname","placement_id","placement_name","icode","promo","uid_01","uid_02","uid_03","uid_04","uid_05","uid_06","uid_07","uid_08"],t=!1,n=0,r=e.length;n<r;n++)if(l.isPresent(d.getParameterByName(e[n]))){t=!0;break}if(t){for(var i,o={},n=0,r=e.length;n<r;n++)i=d.getParameterByName(e[n]),l.isPresent(i)&&(o[e[n]]=i);this.set("nb",JSON.stringify(o))}}},{key:"getNb",value:function(e){if(this.exists("nb")){var t=JSON.parse(this.get("nb"));return e in t?t[e]:""}}}]),e}(),d=function(){function e(){u(this,e)}return s(e,null,[{key:"getParameterByName",value:function(e,t){t=t||i.location.href,e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}},{key:"externalHost",value:function(e){return e.hostname!=location.hostname&&0===e.protocol.indexOf("http")}}]),e}(),p=function(){function r(e,t,n){u(this,r),this.params=[],this.event=e,this.timestamp=t,this.optional=l.optionalData(n),this.buildParams(),this.send()}return s(r,[{key:"buildParams",value:function(){var e=this.getAttribute();for(var t in e)e.hasOwnProperty(t)&&this.setParam(t,e[t](t))}},{key:"getAttribute",value:function(){var e=this;return n({id:function(){return f.id},uid:function(){return m.get("uid")},ev:function(){return e.event},ed:function(){return e.optional},v:function(){return f.version},dl:function(){return i.location.href},rl:function(){return a.referrer},ts:function(){return e.timestamp},de:function(){return a.characterSet},sr:function(){return i.screen.width+"x"+i.screen.height},vp:function(){return i.innerWidth+"x"+i.innerHeight},cd:function(){return i.screen.colorDepth},dt:function(){return a.title},bn:function(){return g.nameAndVersion()},md:function(){return g.isMobile()},ua:function(){return g.userAgent()},tz:function(){return(new Date).getTimezoneOffset()},utm_source:function(e){return m.getUtm(e)},utm_medium:function(e){return m.getUtm(e)},utm_term:function(e){return m.getUtm(e)},utm_content:function(e){return m.getUtm(e)},utm_campaign:function(e){return m.getUtm(e)},nb_aid:function(e){return m.getNb(e)},nb_fid:function(e){return m.getNb(e)},nb_cid:function(e){return m.getNb(e)},esourceid:function(e){return m.getNb(e)},csource:function(e){return m.getNb(e)},siteid:function(e){return m.getNb(e)},ccreative:function(e){return m.getNb(e)},cname:function(e){return m.getNb(e)},placement_id:function(e){return m.getNb(e)},placement_name:function(e){return m.getNb(e)},icode:function(e){return m.getNb(e)},promo:function(e){return m.getNb(e)},uid_01:function(e){return m.getNb(e)},uid_02:function(e){return m.getNb(e)},uid_03:function(e){return m.getNb(e)},uid_04:function(e){return m.getNb(e)},uid_05:function(e){return m.getNb(e)},uid_06:function(e){return m.getNb(e)},uid_07:function(e){return m.getNb(e)},uid_08:function(e){return m.getNb(e)}},f.params)}},{key:"setParam",value:function(e,t){l.isPresent(t)?this.params.push("".concat(e,"=").concat(encodeURIComponent(t))):this.params.push("".concat(e,"="))}},{key:"send",value:function(){i.navigator.sendBeacon?this.sendBeacon():this.sendImage()}},{key:"sendBeacon",value:function(){i.navigator.sendBeacon(this.getSourceUrl())}},{key:"sendImage",value:function(){this.img=a.createElement("img"),this.img.src=this.getSourceUrl(),this.img.style.display="none",this.img.width="1",this.img.height="1",a.getElementsByTagName("body")[0].appendChild(this.img)}},{key:"getSourceUrl",value:function(){return"".concat("https://business.newsbreak.com/tracking/pixel.gif","?").concat(this.params.join("&"))}}]),r}();m.exists("uid")?m.set("uid",m.get("uid"),1051200):m.set("uid",l.guid(),1051200),m.setUtms(),m.setNbs(),r.process=function(e,t,n){"init"===e?f.id=t:"param"===e?f.params[t]=function(){return n}:"event"===e&&("pageload"!==t||f.pageLoadOnce?"pageload"!==t&&"pageclose"!==t&&new p(t,l.now(),n):(f.pageLoadOnce=!0,new p(t,r.t,n)))};for(var e=0,h=r.queue.length;e<h;e++)r.process.apply(r,r.queue[e]);i.addEventListener("unload",function(){f.pageCloseOnce||(f.pageCloseOnce=!0,new p("pageclose",l.now(),function(){if(l.isPresent(f.externalHost)&&l.now()-f.externalHost.time<5e3)return f.externalHost.link}))}),i.onload=function(){for(var e=a.getElementsByTagName("a"),t=0,n=e.length;t<n;t++)e[t].addEventListener("click",function(e){d.externalHost(this)&&(f.externalHost={link:this.href,time:l.now()})}.bind(e[t]));for(var r=a.querySelectorAll("[data-nbpix-event]"),t=0,n=r.length;t<n;t++)r[t].addEventListener("click",function(e){var t=this.getAttribute("data-nbpix-event");t&&new p(t,l.now(),this.getAttribute("data-nbpix-data"))}.bind(r[t]))}}(window,document,window.nbpix);