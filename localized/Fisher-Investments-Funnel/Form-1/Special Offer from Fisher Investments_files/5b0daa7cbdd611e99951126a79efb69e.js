if (typeof tiMonitor == "undefined"){ var tiMonitor = tiMonitor || {};
(function(){Function.prototype.bind=Function.prototype.bind||function(a){var c=this;return function(){return c.apply(a,arguments)}}})();var EMPTY_FUN=function(){},UNDEF;
(function(){function a(){}var c=null;try{c=function(){return this}()}catch(b){}a.global=function(){return c};a.namespace=function(b,d,g,h){b=b.split(".");var f=a.NAMESPACE_BASE||a.global(),m=null,k=null,f=g||f;for(g=0;g<b.length-1;g+=1)k=b[g],f[k]=f[k]||{},f=f[k];m=f;k=b[b.length-1];c.TAGSDK_NS_OVERRIDE&&(h=!1);void 0!==d?void 0!==m[k]&&h||(m[k]=d):m[k]=m[k]||{};return m[k]};a.clazz=function(b,d,c,h,f){a.namespace(b,d,h,!0);"function"===typeof c&&(d.superclass=c,d.prototype=new d.superclass(f));d.prototype&&
(b=b.split("."),d.prototype.CLASS_NAME=b[b.length-1],b.splice(b.length-1,1),d.prototype.PACKAGE_NAME=b.join("."));return d};a.clazz("taginspector.Define",a)})();
(function(){function a(b){}for(var c={},b=0;93>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=".charAt(b)]=b;taginspector.Define.clazz("taginspector.Cookie",a);a.cookieAlphabet="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=";a.cookieAlphabetMap=c;a.decode=function(b){return decodeURIComponent(b)};a.encode=function(b){return encodeURIComponent(b)};a.set=function(b,d,c,h,f){if(c){var m=new Date;
m.setTime(m.getTime()+864E5*c);c="; expires="+m.toGMTString()}else c="";f&&(b=a.encode(b),d=a.encode(d));b=b+"="+d+c+"; path=/;";h&&(b+=" domain="+h);document.cookie=b};a.get=function(b,d){for(var c=b+"=",h=document.cookie.split(";"),f=0;f<h.length;f++){for(var m=h[f];" "===m.charAt(0);)m=m.substring(1,m.length);if(0===m.indexOf(c))return c=m.substring(c.length,m.length),d&&(c=a.decode(c)),c}return null};a.getAll=function(b,c){for(var g=b+"=",h=document.cookie.split(";"),f=[],m=0;m<h.length;m++){for(var k=
h[m];" "===k.charAt(0);)k=k.substring(1,k.length);0===k.indexOf(g)&&(k=k.substring(g.length,k.length),c&&(k=a.decode(k)),f.push(k))}return f};a.rm=function(b,c){a.set(b,"",-1,c)}})();
(function(){function a(a){if(a)if(a.alphabet)for(this.alphabet=a.alphabet,this.dict={},a=0;a<this.alphabet.length;a++)this.dict[this.alphabet[a]]=a;else this.alphabet=b,this.dict=g}function c(b,a){for(var c in a)if(b===a[c])return c;return null}for(var b=[],e=Math.pow(2,8),d=0;d<e;d++)b.push(String.fromCharCode(d));for(var g={},e=0;e<b.length;e++)g[b[e]]=e;taginspector.Define.clazz("taginspector.compression.LZW",a);a.prototype.encode=function(b){for(var a=this.alphabet.length,c={},d=[],e=0,n=b.charAt(e++),
p,l=this.dict;p=b.charAt(e++);){var r=n+p;if(l.hasOwnProperty(r)||c.hasOwnProperty(r))n=r;else{var g=l.hasOwnProperty(n)?l[n]:c[n];if(void 0===g)throw"Dictionary base is to small for those contents: "+n;d.push(g);c[r]=a++;n=p}}""!==n&&d.push(c.hasOwnProperty(n)?c[n]:l[n]);return d};a.prototype.decode=function(b){for(var a=this.dict,d=this.alphabet.length,e,g={},n=c(b[0],a),p=n,l=[n],r=1;r<b.length;r++){var x=b[r];e=c(x,a);null===e&&(g.hasOwnProperty(x)&&(e=g[x]),null===e&&(e=p+n));l.push(e);n=e.charAt(0);
g[d++]=p+n;p=e}return l.join("")}})();
(function(){function a(b){}for(var c={},b=0;45>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]=b;for(var e={},b=0;45>b;b++)e['ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b)]=b;for(var d={},b=0;45>b;b++)d["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]='ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b);var g="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".split(""),h=g.length,f=new taginspector.compression.LZW({});taginspector.Define.clazz("taginspector.compression.Compressor",
a);a.prototype.compress=function(b,a){for(var c=(a||f).encode(b),n=[],p=0;p<c.length;p++)n.push(String.fromCharCode(c[p]));return n.join("")};a.prototype.compressAnsi=function(b,a){for(var c=(a||f).encode(b),n=[],p=0;p<c.length;p++){var l;l=c[p];var r=0,e=0>l;e&&(l=-l);var s="",v=!0;do r=l%h,v?(s=d[g[r]],v=!1):s=g[r]+s,l=(l-r)/h;while(0<l);l=e?"-"+s:s;n.push(l)}return n.join("")};a.prototype.decompressAnsi=function(b,a){for(var d=[],n="",p=0;p<b.length;p++){var l=b.charAt(p);if(e.hasOwnProperty(l)){for(var l=
n+l,n="",r=0,g=0,s=!0,v=0;v<l.length;v++){var y=l.charAt(l.length-1-v);s&&(s=!1,y="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(e[y]));r+=c[y]*Math.pow(h,g++)}l=r;d.push(l)}else n+=l}return(a||f).decode(d)};a.prototype.decompress=function(b,a){for(var c=[],n=0;n<b.length;n++)c.push(b.charCodeAt(n));return(a||f).decode(c)}})();
(function(){function a(){}function c(b,a){for(var l=h.length,c=0;c<l;c++)if(b===h[c][0])return h[c][1];h[h.length]=[b,a];return!1}function b(a,p,l,r,d){var e=!1,f=!1,k=!1,m=!1,q=!1,q=!1;p&&(e=(q=!!p.all)||p.nodes,m=q||p.win,f=q,k=p.noFunctions&&!q,void 0!==p.noOwn&&(f=!!p.noOwn),void 0!==p.noFunctions&&(k=!!p.noFunctions),void 0!==p.win&&(m=!!p.win),void 0!==p.nodes&&(e=!!p.nodes),q=!!p.copyReference);if(void 0===l||l){void 0!==l&&l--;if(!(a&&a instanceof Object))return a;if(!e){try{if(a instanceof
Node)return a}catch(A){if(a instanceof ActiveXObject&&void 0!==a.nodeType)return a}if(a===document)return a}if(!m&&a===g)return a;e=a instanceof Array?[]:{};a instanceof Date&&(e=new Date(a));!k&&a instanceof Function&&(k=String(a).replace(/\s+/g,""),e=k.indexOf("{[nativecode]}")+14===k.length?function(){return a.apply(d||this,arguments)}:function(){return a.apply(this,arguments)});void 0===r&&(h=[],r=0);if(k=c(a,e))return k;if(e instanceof Array)for(k=0;k<a.length;k++)e[e.length]=a[k]===a[k]?b(a[k],
p,l,r+1,a):a[k];else{var k=0,u;for(u in a){if(f||a.hasOwnProperty(u))e[u]=a[u]===a[u]?b(a[u],p,l,r+1,a):a[u];k++}}p.proto&&(e.prototype=b(a.prototype,p,l,r+1,a));q&&(e.___copy_ref=a);return e}}function e(b,a,l,c,d,k,h){l=l||{};void 0===l.hasOwn&&(l.hasOwn=!0);if(!l.objectsOnly||b instanceof Object)if(void 0===l.maxDeep||l.maxDeep){void 0!==l.maxDeep&&l.maxDeep--;if(!l||!l.nodes)try{if(b instanceof Node)return}catch(m){if(b instanceof ActiveXObject&&void 0!==b.nodeType)return}if(b!==g){void 0===c&&
(f=[],c=0);var q;a:{for(q=0;q<c&&q<f.length;q++)if(b===f[q]){q=!0;break a}q=!1}if(!(q||(f[c]=b,d=d||b,d&&k&&d[k]!==d[k]||a(b,d,k,h)))){k=0;q="";for(var w in b){if(!l.hasOwn||b.hasOwnProperty(w))try{var A=b[w];l.track&&(q=h?h+"."+w:w);e(A,a,l,c+1,d,w,q)}catch(u){}k++}}}}}var d=taginspector.Define,g=d.global();d.clazz("taginspector.datapulse.Utils",a);a.global=d.global;a.namespace=d.namespace;a.clazz=d.clazz;a.getObjectUsingPath=function(b,a){a=a||g;for(var l=b.split("."),c=0;c<l.length;c++)a&&l[c]&&
(a=a[l[c]]);return a};a.variableExists=function(b){return void 0!==b&&null!==b&&""!==b};a.ANON_VARS=[];a.getAnonymousAcessor=function(b){var c=a.indexInArray(b,a.ANON_VARS);-1===c&&(c=a.addToArrayIfNotExist(a.ANON_VARS,b));return"taginspector.datapulse.Utils.ANON_VARS["+c+"]"};a.replaceAll=function(b,a,l){return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),l)};a.isInt=function(b){if(isNaN(b))return!1;b=parseFloat(b);return(b|0)===b};a.secureText=function(b){"string"!==
typeof b&&(b+="");b=b.replace(/</g,"&lt;");return b=b.replace(/>/g,"&gt;")};a.getUrl=function(){return document.location.href};a.getQueryParam=function(b){var c,l,d,e;c=a.getUrl();if(0<c.indexOf("?"))for(e=c.substring(c.indexOf("?")+1).split("&"),c=0,l=e.length;c<l;c+=1)if(d=e[c],0<d.indexOf("=")&&(d=d.split("="),2===d.length&&d[0]===b))return d[1];return null};a.getElementValue=function(b){return(b=document.getElementById(b))?b.textContent||b.innerText:null};var h=[];a.objectCopy=function(a,c){c=
c||{};var l=b(a,c,c.maxDeep);h=[];return l};var f=[];a.traverse=function(b,a,c){e(b,a,c)};a.prepareQuotedString=function(b){return"string"===typeof b?'"'+b.replace(/\"/g,'\\"')+'"':b};a.expressionToFunction=function(b,c){return a.gevalAndReturn("function ("+(c||"")+") {"+b+"}").result};a.defineClass=function(b,c,l){var d=b.split("."),d=a.gevalAndReturn("(function "+d[d.length-1]+"() {  if ("+b+"._CONSTRUCTOR) {    return "+b+"._CONSTRUCTOR.apply(this, arguments);  } else {    if ("+b+".superclass) {      return "+
b+".superclass.apply(this, arguments);    }  }})").result;d._CONSTRUCTOR=l.CONSTRUCTOR;d.superclass=c;a.clazz(b,d,c);for(var e in l)l.hasOwnProperty(e)&&"CONSTRUCTOR"!==e&&(d.prototype[e]=l[e]);return d};a.keys=function(b){if(b instanceof Object){if(Object.keys)return Object.keys(b);var a=[],c;for(c in b)b.hasOwnProperty(c)&&(a[a.length]=c);return a}throw"keys() called on non-object!";};a.getSrcElement=function(b){var a;b=b||window.event;b.srcElement?a=b.srcElement:b.target&&(a=b.target);return a};
a.addToArrayIfNotExist=function(b,a){for(var c=0,d=!1;c<b.length;c+=1)if(b[c]===a){d=!0;break}d||(b[b.length]=a,c=-1);return c};a.indexInArray=function(b,a){for(var c=0,d=!1;c<b.length;c++)if(b[c]===a){d=!0;break}return d?c:-1};a.removeFromArray=function(b,a){for(var c=0;c<b.length;c+=1)b[c]===a&&b.splice(c,1)};a.addClass=function(b,c){var d;try{b.classList.add(c)}catch(e){null===b.className?b.className=c:(d=b.className.split(" "),a.addToArrayIfNotExist(d,c),b.className=d.join(" "))}};a.removeClass=
function(b,c){var d;try{b.classList.remove(c)}catch(e){null===b.className?b.className="":(d=b.className.split(" "),a.removeFromArray(d,c),b.className=d.join(" "))}};a.gevalAndReturn=function(b){a.gevalAndReturn.___var_test___=void 0;a.gevalAndReturn.___var_test___error=void 0;a.geval("try{taginspector.datapulse.Utils.gevalAndReturn.___var_test___=("+b+");}catch(ex){taginspector.datapulse.Utils.gevalAndReturn.___var_test___error = ex;}");return{result:a.gevalAndReturn.___var_test___,error:a.gevalAndReturn.___var_test___error}};
a.trim=function(b){try{return String(b).trim()}catch(a){return String(b).replace(/^\s+|\s+$/g,"")}};a.setIfUnset=function(b,a){if(b&&a)for(var c in a)a.hasOwnProperty(c)&&!b.hasOwnProperty(c)&&(b[c]=a[c])};a.geval=function(b){window&&window.execScript?window.execScript(b):g.eval.call(g,b)};var m=[],k=!1;a.bodyReady=function(b){if(k)return b&&b(),!0;if(k=!(!document.body||"complete"!==document.readyState)){for(var a=0;a<m.length;a++)try{m[a]()}catch(c){}b&&b()}else b&&m.push(b);return k};var q=g.onload;
g.onload=function(b){a.bodyReady();q&&q(b)}})();
(function(){function a(b){this.config={name:"Trigger-"+c++,uniqueId:"Trigger-"+c++,triggerScript:void 0,rules:[]};this.currentState=a.state.WAITING;if(b){for(var e in b)b.hasOwnProperty(e)&&(this.config[e]=b[e]);this.uniqueId=this.config.uniqueId;b.session&&this.setSession(b.session);return a.register(this)}}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.trigger.BaseTrigger",a);a.pageTriggers=[];a.resetFiredTriggers=function(){pageTriggers=a.pageTriggers;for(i=0;i<pageTriggers.length;i++){t=
pageTriggers[i];t.config.triggerFired=!1;t.currentState=a.state.WAITING;for(var b=0;b<t.config.rules.length;b++)rule=t.config.rules[b],rule.hitSent=!1}};a.register=function(b){return b instanceof a?(a.pageTriggers.push(b),b):null};a.state={WAITING:0,FIRED:1};a.prototype.checkRules=function(){for(var b=0;b<this.config.rules.length;b++)rule=this.config.rules[b],rule.checkFiltersIfTriggersFired()};a.prototype.triggerCallback=function(){this.currentState=a.state.FIRED;this.checkRules()};a.prototype.initTrigger=
function(b){cb=this.triggerCallback;cb=cb.bind(this);triggerFired=this.config.triggerFired;!1==triggerFired&&this.config.triggerScript(cb,triggerFired);this.config.triggerFired=!0;b(this.config.triggerFired)};a.prototype.getState=function(){return this.currentState};a.prototype.addRule=function(b){this.config.rules.push(b)};a.prototype.setTriggerScript=function(b){this.config.triggerScript=b}})();
(function(){function a(b){this.config={};this.parameters=null;this.reportValue=!1;if(b){this.uniqueId=b.uniqueId;this.reportValue=b.reportValue;a.ALL_VARIABLES[this.uniqueId]=this;for(var c in b)this.config[c]=b[c];void 0!==b.value&&(this.value=b.value);void 0!==b.defaultValue&&(this.defaultValue=b.defaultValue);return a.register(this)}}var c=taginspector.datapulse.Utils;c.clazz("taginspector.datapulse.pagevariable.BaseVariable",a);a.ALL_VARIABLES={};a.pageVariables=[];a.clearCache=function(){pageVars=
a.pageVariables;for(i=0;i<pageVars.length;i++)t=pageVars[i],t.isCachedValueSet=!1};a.register=function(b){return b instanceof a?(a.pageVariables.push(b),b):null};a.prototype.getValue=function(){return this.value};a.prototype.setValue=function(b){this.value=b};a.prototype.getDefaultValue=function(){return this.defaultValue};a.prototype.setDefaultValue=function(b){this.defaultValue=b};a.prototype.exists=function(b){var a=c.variableExists(this.getValue());b&&(a=a||c.variableExists(this.getDefaultValue()));
return a};a.prototype.getRelativeValue=function(b,a){var d=this.getValue();c.variableExists(d)||(d=a);var g;b&&!c.variableExists(d)&&(g=this.getDefaultValue(),c.variableExists(g)&&(d=g));return d};a.prototype.replaceToken=function(b,a,d,g){var h=this.exists();d=h?this.getValue():d;b="\\$\\{"+b+"\\}";return g||d instanceof Array?(g=h?this.getValueAccessorString():c.getAnonymousAcessor(d),a.replace(new RegExp(b,"g"),g)):a.replace(new RegExp(b,"g"),d)};a.prototype.getAccessorString=function(){return"taginspector.datapulse.pagevariable.BaseVariable.ALL_VARIABLES."+
this.uniqueId};a.prototype.getValueAccessorString=function(){return this.getAccessorString()+".getValue()"}})();
(function(){function a(b){this._lockObject={};var e={uniqueId:"Macro-"+c++};if(b)for(var d in b)e[d]=b[d];this.reportValue=!1;b&&(this.uniqueId=b.uniqueId,this.reportValue=b.reportValue);this.valueSetTimestamp=0;this.isCachedValueSet=!1;this.cachedValue="";a.superclass.call(this,e)}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.pagevariable.JsExpression",a,taginspector.datapulse.pagevariable.BaseVariable);a.prototype.getValue=function(){return!0==this.isCachedValueSet&&3>=performance.now()-
this.valueSetTimestamp?this.cachedValue:this.value(!0)?(this.isCachedValueSet=!0,this.valueSetTimestamp=performance.now(),this.cachedValue=this.value(!0).toString()):""}})();
(function(){function a(b){this.config={order:0,include:!0,name:"Filter-"+c++,uniqueId:"Filter-"+c++,script:void 0,session:void 0};this.session=null;if(b){for(var a in b)b.hasOwnProperty(a)&&(this.config[a]=b[a]);b.session&&this.setSession(b.session)}this.uniqueId=this.config.uniqueId}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.filter.BaseFilter",a);a.state={DISABLED:-3,SESSION:-2,PASS:-1,FAIL:0};a.prototype.reset=function(){this.enable()};a.prototype.disable=function(){this.config.disabled=
!0};a.prototype.enable=function(){this.config.disabled=!1};a.prototype.match=function(){return!0};a.prototype.setSession=function(b){this.session=b};a.prototype.getSession=function(){return this.session};a.prototype.getState=function(){var b=a.state.PASS;if(this.config.disabled)return a.state.DISABLED;this.config.script&&(b=this.config.script.call(this,b));isNaN(+b)&&(b=a.state.FAIL);this.lastState=+b;return b}})();
(function(){taginspector.datapulse.Utils.namespace("taginspector.datapulse.filter.pattern.PatternType",{CONTAINS:"Contains",MATCHES_EXACTLY:"Matches Exactly",STARTS_WITH:"Starts With",ENDS_WITH:"Ends With",REGULAR_EXPRESSION:"Regular Expression",ALL_URLS:"All URLs",EQUALS:"Equals",DOES_NOT_EQUAL:"Does not Equal",DOES_NOT_CONTAIN:"Does not Contain",DOES_NOT_STARTS_WITH:"Does not Start With",DOES_NOT_END_WITH:"Does not End With",MATCHES_REGEX:"Matches Regex",DOES_NOT_MATCH_REGEX:"Does not Match Regex",
LESS_THAN:"Less Than",GREATER_THAN:"Greater Than"})})();
(function(){function a(c){this._lockObject={};var d={comparisonType:b.CONTAINS,sourceVariable:void 0,comparisonVariable:void 0};if(c)for(var g in c)c.hasOwnProperty(g)&&(d[g]=c[g]);a.superclass.call(this,d)}var c=taginspector.datapulse.Utils,b=taginspector.datapulse.filter.pattern.PatternType;c.clazz("taginspector.datapulse.filter.JsExpressionFilter",a,taginspector.datapulse.filter.BaseFilter);a.prototype.match=function(){var a=!0,d=this.config.sourceVariable.getValue();if("object"==typeof this.config.comparisonVariable)var g=
this.config.comparisonVariable.getValue();else if("string"==typeof this.config.comparisonVariable||"number"==typeof this.config.comparisonVariable)g=this.config.comparisonVariable;else return!1;switch(this.config.comparisonType){case b.LESS_THAN:case b.GREATER_THAN:if(!1==c.isInt(g))return!1;g=parseInt(g)}switch(this.config.comparisonType){case b.DOES_NOT_CONTAIN:case b.CONTAINS:a=0<=d.toLowerCase().indexOf(g.toLowerCase());break;case b.EQUALS:case b.DOES_NOT_EQUAL:case b.MATCHES_EXACTLY:a=d.toLowerCase()===
g.toLowerCase();break;case b.STARTS_WITH:case b.DOES_NOT_STARTS_WITH:a=0===d.toLowerCase().indexOf(g.toLowerCase());break;case b.ENDS_WITH:case b.DOES_NOT_END_WITH:a=d.toLowerCase().substr(-g.length)===g.toLowerCase();break;case b.MATCHES_REGEX:case b.REGULAR_EXPRESSION:case b.DOES_NOT_MATCH_REGEX:a=(new RegExp(g,"i")).test(d);break;case b.LESS_THAN:a=d<g;break;case b.GREATER_THAN:a=d>g;break;case b.ALL_variableValueS:a=!0}switch(this.config.comparisonType){case b.DOES_NOT_EQUAL:case b.DOES_NOT_CONTAIN:case b.DOES_NOT_STARTS_WITH:case b.DOES_NOT_END_WITH:case b.DOES_NOT_MATCH_REGEX:a=
!a}return a}})();
(function(){function a(b){this.config={};this.uniqueId="BR"+d++;this.ruleVersion=1;this.triggerTiming="";if(b){this.uniqueId=b.uniqueId;this.ruleVersion=b.ruleVersion;this.triggerTiming=b.triggerTiming;this.dataCollector=b.dataCollector;for(var a in b)this.config[a]=b[a]}this.filters=[];this.session=void 0;this.triggers=[];this.hitSent=!1}var c=taginspector.datapulse.filter.BaseFilter,b=taginspector.datapulse.trigger.BaseTrigger,e=taginspector.datapulse.pagevariable.BaseVariable,d=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.BaseRule",
a);a.prototype.getFilters=function(){return this.filters};a.prototype.addFilter=function(b){this.filters.push(b)};a.prototype.addTrigger=function(b){this.triggers.push(b)};a.prototype.hasHitBeenSent=function(){return this.hitSent};var g=b.state.WAITING,h=b.state.FIRED,f=c.state.PASS,m=c.state.FAIL;a.prototype.getFailedFilters=function(){filters=this.filters;failedFilters=[];for(var b=0;b<filters.length;b++)filter=filters[b],filter.match()||failedFilters.push(filter.uniqueId+"|"+filter.config.sourceVariable.uniqueId);
return failedFilters};a.prototype.checkFiltersIfTriggersFired=function(b){b=tiMonitor.dataCollector.timeOnPage();triggersRun=this.triggersState();if(triggersRun==h&&!1==this.hitSent)if(this.hitSent=!0,validationResults=this.filtersState(),validationResults==m){failedFilters=this.getFailedFilters();qsPageVariables=[];pageVariables=e.pageVariables;for(i=0;i<pageVariables.length;i++)try{pageVariable=pageVariables[i],pageVariable instanceof e&&!0==pageVariable.reportValue&&(variableId=pageVariable.uniqueId,
(variableValue=pageVariable.getValue())?1E3<variableValue.length&&(variableValue=variableValue.substring(0,1E3)):variableValue="*undefined*",combinedVariableValue=encodeURIComponent(variableId)+"="+encodeURIComponent(variableValue),qsPageVariables.push(combinedVariableValue))}catch(a){errMessage="Error with variable "+variableId+": "+a.message,console.log(errMessage),jeErrorObj={message:errMessage},tiMonitor.dataCollector.queueRequest(jeErrorObj,"jserror")}failedRuleObject={failedConditions:failedFilters.toString(),
pageMacros:qsPageVariables.toString(),failedRule:this.uniqueId,validationTime:b,ruleVersion:this.ruleVersion,triggerTiming:this.triggerTiming};this.dataCollector.queueRequest(failedRuleObject,"validationerror")}else passedRuleObject={passedRule:this.uniqueId,ruleVersion:this.ruleVersion,validationTime:b,triggerTiming:this.triggerTiming},this.dataCollector.queueRequest(passedRuleObject,"validationsuccess")};a.prototype.triggersState=function(){for(var b=h,a=0;a<this.triggers.length;a++)if(trigger=
this.triggers[a],trigger.getState()==g){b=g;break}return b};a.prototype.filtersState=function(){filters=this.filters;session=this.session;filters=filters.sort(function(b,a){try{return a.config.order-b.config.order}catch(c){return 0}});var b=f;if(!filters||0===filters.length)return b;for(var a,c=0;c<filters.length;c++)if(a=filters[c],a.setSession(session),!1==a.match()){b=m;break}return b}})();
(function(){function a(b){for(var a=[],c=0;c<b.length;c++){var e=d(b[c][0]);a.push([new RegExp(e,"g"),"*"+b[c][1]])}return a}function c(b,a){for(var c=0;c<a.length;c++)if(a[c][1]===b)return a[c][0];return null}function b(b){this._regexDefs=k;this._defs=m;b&&b.definitions&&(this._regexDefs=a(b.definitions),this._defs=b.definitions)}function e(b,a){for(var c=[],d=0;d<b.length;d++){var e=!0;a&&(e=b.charCodeAt(d)<=a);var g=f.cookieAlphabetMap.hasOwnProperty(b.charAt(d));e&&!g?c.push("*"+b.charCodeAt(d)+
"."):c.push(b.charAt(d))}return c.join("")}function d(b){return b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function g(b){for(var a={},c="",d=0;d<b.length;d++){var e=b.charAt(d);switch(e){case "=":case "&":case "?":case "/":case "*":case ",":case ":":isNaN(a[c])&&(a[c]=b.split(c).length-1);c="";break;default:c+=e}}b=[];for(var g in a)a.hasOwnProperty(g)&&(c=a[g],c>=n&&g.length>=q&&b.push([g,c]));return b=b.sort(function(b,a){return b[0].length===a[0].length?0:a[0].length>b[0].length?1:-1})}var h=
taginspector.Define,f=taginspector.Cookie,m=[['","referrer":[{"url":"http://',"1-"],['","referrer":[{"url":"https://',"2-"],[',"referrer":[{"url":"http://',"3-"],[',"referrer":[{"url":"https://',"4-"],[',"sessionStartTime":',"5-"],['":{}}',"6-"],["www.google.com","7-"],["www.google.co.uk","8-"],["www.google.","9-"],['"landing":"',"Z"],['"landing":',"L"],['"time":',"A"],['"sessionStartTime":',"S"],['"pageViews":',"P"],['"sessionCount":',"B"],['"sessionLandingPage":',"E"],['"referrer":',"R"],['"url":"http://www.',
"J"],['"url":"https://www.',"M"],['"url":"',"I"],['"url":',"U"],["http://www.","W"],["https://www.","V"],["%2Fen%2Ftsuk%2F","K"],["http%3A%2F%2Fwww","F"],["http%3A%2F%2F","D"],["http://","H"],["https://","X"],['""',"O"],['",',"Y"]],k=a(m);h.clazz("taginspector.datapulse.compression.Encoder",b);b.prototype.encode=function(b,a){for(var c=b.replace(/\*/g,"**"),f=0;f<this._regexDefs.length;f++)var h=this._regexDefs[f],c=c.replace(h[0],h[1]);for(var c=c.replace(/;/g,"*-"),c=c.replace(/&/g,"*."),c=c.replace(/\\/g,
"*/"),c=c.replace(/=/g,"*+"),c=c.replace(/\n/g,"*N"),c=c.replace(/ /g,"*_"),c=c.replace(/\t/g,"*T"),c=c.replace(/,/g,"*C"),c=c.replace(/"/g,"*Q"),f=g(c),h=c.replace(/\$/g,"$$$"),k=[],m=0,n=0;m<f.length;m++){var q=new RegExp(d(f[m][0]),"g"),q=h.replace(q,"$"+n+"-");q!==h&&(k.push(f[m][0]),n++,h=q)}f=[h,k];h=f[1];(k=0<h.length)&&(c=f[0]);c=a?e(c,a):e(c);return k?"Y"+h.join("*")+"?"+c:"N"+c};var q=4,n=2;b.prototype.decode=function(b){var a=null;if("N"===b.charAt(0))b=b.substring(1);else if("Y"===b.charAt(0)){var d=
b.indexOf("?");if(0<=d&&(a=b.substring(1,d),a=a.split("*"),b=b.substring(d+1),a&&0!==a.length&&b)){for(var d="",e=!1,f=!1,g="",h=0;h<b.length;h++){var k=b.charAt(h);"$"===k||e||f?e||f?(e=!1,"$"===k?d+="$":isNaN(+("-"+k))?f?(d=a&&"-"===k&&a[+g]?d+a[+g]:d+("$"+g+k),g="",f=!1):d+="$"+k:(f=!0,g+=k)):e=!0:d+=k}g&&(d+="$"+g);e&&(d+="$");b=d}}a="";e=d=!1;f="";for(g=0;g<b.length;g++)h=b.charAt(g),"*"===h||d||e?d||e?(d=!1,isNaN(+("-"+h))?e?(a="."===h?a+String.fromCharCode(+f):"-"===h&&c(f+"-",this._defs)?
a+c(f+"-",this._defs):a+("*"+f+h),f="",e=!1):"*"===h?a+="*":"-"===h?a+=";":"/"===h?a+="\\":"."===h?a+="&":"+"===h?a+="=":"N"===h?a+="\n":"_"===h?a+=" ":"T"===h?a+="\t":"C"===h?a+=",":"Q"===h?a+='"':null!==c(h,this._defs)?(h=c(h,this._defs),a+=h):a+="*"+h:(f+=h,e=!0)):d=!0:a+=h;f&&(a+="*"+f);d&&(a+="*");return a}})();
(function(){function a(b){this.testBinary=!1;this.binSupported=e;b&&(this.compressor=new taginspector.compression.Compressor,this.encoder=new taginspector.datapulse.compression.Encoder({}),void 0!==b.binSupported&&(this.binSupported=!!b.binSupported))}var c=taginspector.Define,b=taginspector.Cookie;c.global();var e=!1;c.clazz("taginspector.datapulse.compression.CookieCompressor",a);a.prototype.compress=function(a,c){if("string"!==typeof a||""===a)return a;var e=this.encoder.encode(a),f;if(this.binSupported||
this.testBinary){f=this.compressor.compress(e);f='"B'+this.encoder.encode(f,128)+'"';b.set("__qtag_test_bin__",f);var m=b.get("__qtag_test_bin__");b.rm("__qtag_test_bin__");m&&m!==f&&(f=null)}m=this.encoder.encode(this.compressor.compressAnsi(e));e=!c&&e.length<=m.length?'"E'+e+'"':'"C'+m+'"';return f&&f.length<e.length?f:e};a.prototype.decompress=function(b){if("string"!==typeof b||""===b)return b;'"'===b.charAt(0)&&(b=b.substring(1,b.length-1));var a=b.charAt(0);b=b.substring(1);switch(a){case "E":return this.encoder.decode(b);
case "C":return b=this.compressor.decompressAnsi(this.encoder.decode(b)),this.encoder.decode(b);case "B":return b=this.compressor.decompress(this.encoder.decode(b)),this.encoder.decode(b);default:throw"This code is not supported! Code: "+a;}}})();
(function(){var a=taginspector.Cookie,c=taginspector.datapulse.Utils,b=function(){};c.clazz("taginspector.datapulse.Session",b);var e=new taginspector.datapulse.compression.CookieCompressor({});b.readCompressedCookie=function(b){b=a.get(b);return e.decompress(b)};b.setupSession=function(d){var g,h,f,m,k;g={};k="tm_"+d.containerId;var q="x_tm_"+d.containerId;f=a.get(k,!0);var n=!!f;null===f&&(f=a.get(q),f=e.decompress(f));if(f)try{f=JSON.parse(f)}catch(p){f={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,
referrer:[],sessionLandingPage:"",__v:{}}}else f={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,referrer:[],sessionLandingPage:"",__v:{}};h=(new Date).getTime();g.sessionCount!==parseInt(f.sc,10)?(f.sessionStartTime=h,f.sc=g.sessionCount,f.sessionCount+=1,f.referrer.push({url:b.getReferrer(),landing:c.getUrl().substring(0,300),time:h}),f.sessionLandingPage=c.getUrl().substring(0,300)):b.isReferrerDifferent()&&!b.referrerIsSameAsPrevious(f.referrer,h,18E5)&&(f.referrer.push({url:b.getReferrer(),
landing:c.getUrl().substring(0,300),time:h}),f.sessionLandingPage=c.getUrl().substring(0,300),f.sessionStartTime=h,f.sessionCount+=1);g.sessionCount=f.sessionCount;g.sessionStartTime=f.sessionStartTime;g.pageStartTime=h;f.pageViews+=1;g.pageViews=f.pageViews;g.sessionLandingPage=f.sessionLandingPage;g.referrer=f.referrer;5<g.referrer.length&&g.referrer.splice(2,g.referrer.length-5);m=JSON.stringify(f);for(h=0;e.compress(m).length>d.maxCookieLength&&5>h;)3<=f.referrer.length?f.referrer.splice(2,1):
2===f.referrer.length?f.referrer=[f.referrer[0]]:1===f.referrer.length&&(f.referrer=[]),m=JSON.stringify(f),h+=1;g.referrer=f.referrer;n&&a.rm(k);k=e.compress(m);a.rm(q);a.set(q,k,365,d.cookieDomain);g.setVariable=function(b,c,g){f.__v[b]=[c,g?g:0];b=e.compress(JSON.stringify(f));a.set(q,b,365,d.cookieDomain)};g.getCookie=function(b,c){var d=a.get(b);if(d&&(c||0===b.indexOf("x_")))try{d=e.decompress(d)}catch(f){}else d=a.decode(d);return d};g.getVariable=function(b){var a;if(b=f.__v[b])if(a=b[1],
0===a||a>(new Date).getTime())return b[0];return null};g.on=function(b,a,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)};g.getTagCookie=function(){return b.readCompressedCookie(q)};return b.lastSession=g};b.referrerIsSameAsPrevious=function(a,e,h){var f,m;return 0<a.length?(f=b.getReferrer(),m=c.getUrl().substring(0,300),a=a[a.length-1],a.url===f&&a.landing===m&&a.time+h>e):!1};b.isReferrerDifferent=function(){var a,c;c=b.getReferrer();a=c.indexOf("://");if(-1===
a)return!0;try{return 0!==c.substring(a+3).indexOf(b.getDomain())?!0:!1}catch(e){return!0}};b.getReferrer=function(){return document.referrer?document.referrer.substring(0,300):"direct"};b.getDomain=function(){return document.location.host}})();
(function(){function a(a){this.config={siteID:"",pixelHost:"",tagDefinitions:[]};this.session=null;if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b]);this.pixelHost=this.config.pixelHost;this.siteID=this.config.siteID;this.tagDefinitions=this.config.tagDefinitions;this.startTime=Date.now();this.resourceCounter=this.offsetTime=0;this.pageId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var a=16*Math.random()|0;return("x"==b?a:a&3|8).toString(16)});this.pendingRequests=
[];this.currentlySendingData=!1;this.identifiedRequests={}}taginspector.datapulse.Utils.clazz("taginspector.datapulse.DataCollector",a);a.prototype.timeOnPage=function(){return performance.now()-this.offsetTime};a.prototype.adjustTimeForOffset=function(a){return!1==isNaN(a)?(fts=parseFloat(a).toFixed(2),fts=parseFloat(a),fts-=this.offsetTime,0>fts&&(fts=0),fts.toString()):a};a.prototype.getPageCurrentTime=function(){return Date.now()};a.prototype.getPageStartTime=function(){return this.startTime};
a.prototype.isBeaconSupported=function(){return"sendBeacon"in navigator?!0:!1};a.prototype.getMaxBodySize=function(){isSendBeaconRequest=this.isBeaconSupported();return 6E3};a.prototype.createRequestBody=function(){for(var a={requestList:[]},b=0,e=this.getMaxBodySize(),d=0;0<this.pendingRequests.length;){var g=this.pendingRequests[0];if(void 0!=g||null!=g)if(b+=encodeURIComponent(g).length,b>e&&0!=d)break;else a.requestList.push(this.pendingRequests.shift()),d+=1;else this.pendingRequests.shift()}return a};
a.prototype.createPixelRequest=function(a){reqPixel=new Image;reqPixel.src=this.pixelHost+"?"+a};a.prototype.createAjaxPostRequest=function(a){XMLHttpRequest.prototype.sendAsBinary||(XMLHttpRequest.prototype.sendAsBinary=function(b){for(var a=b.length,c=new Uint8Array(a),e=0;e<a;e++)c[e]=b.charCodeAt(e)&255;this.send(c)});var b=new XMLHttpRequest;b.open("POST",this.pixelHost,!0);var e="----"+Date.now().toString(16);b.setRequestHeader("Content-Type","multipart/form-data; boundary="+e);b.sendAsBinary("--"+
e+'\r\nContent-Disposition: form-data; name="beaconreq"\r\n\r\n'+a+"\r\n--"+e+"--\r\n")};a.prototype.createSendBeaconRequest=function(a){var b=new FormData;b.append("beaconreq",a);result=navigator.sendBeacon(this.pixelHost,b);!1==result&&this.createAjaxPostRequest(a)};a.prototype.b64EncodeUnicode=function(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,a){return String.fromCharCode("0x"+a)}))};a.prototype.identifyRequest=function(a){for(var b=!1,e=0;e<this.tagDefinitions.length;e++){var d=
this.tagDefinitions[e];if(!0==d.regex.test(a.name)){!1==this.identifiedRequests.hasOwnProperty(d.id)&&(this.identifiedRequests[d.id]=[]);"384"==d.id?(!1==this.identifiedRequests.hasOwnProperty("291")&&(this.identifiedRequests["291"]=[]),this.identifiedRequests["291"].push(a)):"291"==d.id&&(!1==this.identifiedRequests.hasOwnProperty("384")&&(this.identifiedRequests["384"]=[]),this.identifiedRequests["384"].push(a));this.identifiedRequests[d.id].push(a);b=!0;break}}return b};a.prototype.resetIdentifiedRequests=
function(){try{currentTs=performance.now();newIdentifiedRequests={};for(var a in this.identifiedRequests)if(this.identifiedRequests.hasOwnProperty(a))for(z=0;z<this.identifiedRequests[a].length;z++)foundTag=this.identifiedRequests[a][z],350>Math.abs(currentTs-foundTag.startTime)&&(!1==newIdentifiedRequests.hasOwnProperty(a)&&(newIdentifiedRequests[a]=[]),newIdentifiedRequests[a].push(foundTag));this.identifiedRequests=newIdentifiedRequests}catch(b){console.log(b.message)}};a.prototype.sendRequests=
function(a){if(!1==tiMonitor.dataCollector.currentlySendingData){tiMonitor.dataCollector.currentlySendingData=!0;for(base_req_data="pid="+this.pageId+"&sid="+this.siteID+"&purl="+encodeURIComponent(tiMonitor.sendData.currentUrl)+"&pst="+encodeURIComponent(this.getPageStartTime())+"&pct="+encodeURIComponent(this.getPageCurrentTime())+"&sblf="+encodeURIComponent(tiMonitor.sendData.sampleblackListFlag)+"&sr="+encodeURIComponent(tiMonitor.sendData.sampleRate)+"&mts="+encodeURIComponent(this.getPageCurrentTime());0<
this.pendingRequests.length;)requestBody=this.createRequestBody(),encodedRequestString=encodeURIComponent(this.b64EncodeUnicode(JSON.stringify(requestBody))),req_data=base_req_data+"&taginfo="+encodedRequestString+"&b64=1",!0!=this.isBeaconSupported()||!0!=a&&!0!=tiMonitor.sendData.windowUnloadEvent?this.createAjaxPostRequest(req_data):this.createSendBeaconRequest(req_data);tiMonitor.dataCollector.currentlySendingData=!1}};a.prototype.isValidResourceStartTime=function(a){var b=!0;try{if(a=parseFloat(a),
this.timeOnPage()<a||36E5<a)b=!1}catch(e){console.log(e.message)}return b};a.prototype.queueRequest=function(a,b){if("validationerror"!=b&&"validationsuccess"!=b||!("complete"!=document.readyState||3E3>performance.now()-tiMonitor.dataCollector.offsetTime)||"DOM Load"==a.triggerTiming){if("resource"==b)if(!0==this.isValidResourceStartTime(this.adjustTimeForOffset(a.startTime)))reqName=a.name,req="rt="+b+"&ce="+encodeURIComponent(this.adjustTimeForOffset(a.connectEnd))+"&cs="+encodeURIComponent(this.adjustTimeForOffset(a.connectStart))+
"&dle="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupEnd))+"&dls="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupStart))+"&d="+encodeURIComponent(a.duration.toFixed(2))+"&et="+encodeURIComponent(a.entryType)+"&fs="+encodeURIComponent(this.adjustTimeForOffset(a.fetchStart))+"&it="+encodeURIComponent(a.initiatorType)+"&n="+encodeURIComponent(a.name)+"&rde="+encodeURIComponent(this.adjustTimeForOffset(a.redirectEnd))+"&rds="+encodeURIComponent(this.adjustTimeForOffset(a.redirectStart))+
"&reqs="+encodeURIComponent(this.adjustTimeForOffset(a.requestStart))+"&rse="+encodeURIComponent(this.adjustTimeForOffset(a.responseEnd))+"&rss="+encodeURIComponent(this.adjustTimeForOffset(a.responseStart))+"&scc=&st="+encodeURIComponent(this.adjustTimeForOffset(a.startTime))+"&sz="+encodeURIComponent(this.adjustTimeForOffset(a.decodedBodySize)),this.resourceCounter+=1;else return;else if("pageload"==b){dom_complete=dom_content_load=dom_interactive=page_size="";try{var e=performance.timing;0!=e.domInteractive&&
(dom_interactive=e.domInteractive-e.fetchStart);0!=e.domContentLoadedEventEnd&&(dom_content_load=e.domContentLoadedEventEnd-e.fetchStart);0!=e.domComplete&&(dom_complete=e.domComplete-e.fetchStart)}catch(d){console.log(d.message)}conn_type=conn_downlink=conn_roundtrip=conn_downlinkMax=conn_effType="";req="rt="+b+"&ref=&top="+encodeURIComponent(this.timeOnPage())+"&domint="+encodeURIComponent(dom_interactive)+"&domcl="+encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)+
"&condl="+encodeURIComponent(conn_downlink)+"&conrt="+encodeURIComponent(conn_roundtrip)+"&coneff="+encodeURIComponent(conn_effType)+"&psz="+ +encodeURIComponent(page_size)}else"validationerror"==b&&!1==tiMonitor.sendData.preventFiringValidationRules?req="rt="+b+"&fr="+encodeURIComponent(a.failedRule)+"&rv="+encodeURIComponent(a.ruleVersion)+"&pm="+encodeURIComponent(a.pageMacros)+"&fc="+encodeURIComponent(a.failedConditions)+"&vt="+encodeURIComponent(a.validationTime):"validationsuccess"==b&&!1==
tiMonitor.sendData.preventFiringValidationRules?req="rt="+b+"&pr="+encodeURIComponent(a.passedRule)+"&rv="+encodeURIComponent(a.ruleVersion)+"&vt="+encodeURIComponent(a.validationTime):"jserror"==b?req="rt="+b+"&msg="+a.message:"pageBeforeUnload"==b&&(e=performance.timing,dom_interactive=e.domInteractive-e.fetchStart,dom_content_load=e.domContentLoadedEventEnd-e.fetchStart,dom_complete=e.domComplete-e.fetchStart,dom_content_load_end=e.domContentLoadedEventEnd,response_end=e.responseEnd,navigation_start=
e.navigationStart,firstContentfulPaint=first_paint=timeToFirstPaint=void 0,window.performance&&(e=window.performance.getEntriesByType("paint"),void 0!=e&&0<e.length&&(timeToFirstPaint=parseInt(1E3*e[0].startTime),first_paint=navigation_start+timeToFirstPaint,firstContentfulPaint=parseInt(1E3*e[1].startTime))),req="rt="+b+"&ref=&top="+encodeURIComponent(performance.now())+"&domint="+encodeURIComponent(dom_interactive)+"&domcl="+encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)+
"&domcle="+encodeURIComponent(dom_content_load_end)+"&rse="+encodeURIComponent(response_end)+"&navs="+encodeURIComponent(navigation_start)+"&fpt="+encodeURIComponent(first_paint)+"&tfpt="+encodeURIComponent(timeToFirstPaint)+"&fcpt="+encodeURIComponent(firstContentfulPaint));0<this.resourceCounter&&(this.pendingRequests.push(req),"validationerror"!=b&&"validationsuccess"!=b||this.sendRequests(!0))}}})();


tiMonitor.dataCollector = new taginspector.datapulse.DataCollector({siteID:"5b0daa7cbdd611e99951126a79efb69e", pixelHost:"https://collect.analyze.ly", tagDefinitions: [{id: '2527', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)aarp\\.go2cloud.org\\/)', 'i')},{id: '2667', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(autotrader|kbb)\\.com\\/pixall\\/v2\\/pageload)', 'i')},{id: '2526', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adobedtm\\.com([\\/a-zA-Z0-9]*)?\\/launch|\\/\\/([\\/a-zA-Z0-9].*)adobe([\\/a-zA-Z0-9].*)launch([\\/a-zA-Z0-9-].*)\\.js))|(grainger\\.com([\\/a-zA-Z0-9].*)adobe([\\/a-zA-Z0-9].*)launch([\\/a-zA-Z0-9-].*)\\.js)', 'i')},{id: '59', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)offermatica\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tt\\.omtrdc\\.net\\/))|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)d4isvpgrs7dwu\\.cloudfront\\.net\\/adobetarget\\/)|(\\/mbox\\.js)|((\\/m[0-9]\\/(.*)\\/mbox\\/|target\\.nationwide\\.com))', 'i')},{id: '85', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)leadback\\.advertising\\.com\\/)', 'i')},{id: '139', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)atdmt\\.com\\/mstag\\/site\\/(.*)\\/(mstag\\.js|analytics\\.html))', 'i')},{id: '273', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)js\\.stormiq\\.com\\/[0-9]*\\.ct\\.js)', 'i')},{id: '740', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)constantcontact\\.com\\/(.*)\\/safe_subscribe_logo\\.gif)', 'i')},{id: '882', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/urchin\\.js)', 'i')},{id: '1385', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)s3\\.amazonaws\\.com\\/searchdiscovery-satellite-production\\/|\\/satellitelib([a-zA-Z0-9-]*)\\.js)|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adobedtm\\.com([\\/a-zA-Z0-9]*)?\\/satelliteLib)', 'i')},{id: '1420', regex: new RegExp('(^http(s)?:\\/\\/ct\\.pinterest\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)pinimg.com\\/ct\\/)', 'i')},{id: '1436', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)snap\\.licdn\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(dc|imp2|px).ads\\.linkedin\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bizographics.com\\/insight\\.(min\\.)?js))', 'i')},{id: '1473', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)yimg\\.com\\/wi\\/ytc\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)sp\\.analytics\\.yahoo\\.com\\/)', 'i')},{id: '2532', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(demdex|omtrdc)\\.net\\/id\\?d_visid_ver)', 'i')},{id: '2547', regex: new RegExp('(gtag\\/js\\?id\\=(G|g)-)|((\\/g\\/collect\\?v=2|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(google-analytics|google)\\.com(\\/[a-z])?\\/collect\\?v=2|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net(\\/[a-z])?\\/collect\\?v=2))', 'i')},{id: '294', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)doubleclick\\.net\\/activity)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)fls\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/.*id=dc-)|(gtag\\/js\\?id\\=(DC|dc)-)', 'i')},{id: '401', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/siteopt\\.js)', 'i')},{id: '747', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)liveagentforsalesforce\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)salesforceliveagent\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)force\\.com\\/(.*)\\/(ChatInvite|LiveAgent))', 'i')},{id: '1406', regex: new RegExp('((^http(s)?:\\/\\/connect\\.facebook\\.net\\/(.*)\\/fbevents\\.js|^http(s)?:\\/\\/www\\.facebook\\.com\\/tr(\\/|\\?)|http(s)?:\\/\\/connect\\.facebook\\.net\\/signals\\/(config\\/|plugins\\/identity.js)|^http(s)?:\\/\\/facebook\\.com\\/(platform|common)\\/cavalry_endpoint\\.php))', 'i')},{id: '1480', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/gtag\\/js)', 'i')},{id: '1393', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)platform\\.twitter\\.com\\/oct\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ads-twitter\\.com\\/uwt\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)t\\.co\\/i\\/adsct|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics.twitter.com\\/i\\/adsct)', 'i')},{id: '1450', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/gtm\\/js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/a\\?|googleoptimize\\.com))', 'i')},{id: '396', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/|\\?id=(gtm|GTM)-([a-zA-Z0-9]{4,10})))', 'i')},{id: '1', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com(\\/r)?\\/__utm\\.gif)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/u\\/ga\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/p\\/__utm\\.gif)|(\\/u\\/ga_debug\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/ga\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/js\\/gweb\\/analytics\\/autotrack\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/js\\/gweb\\/analytics\\/doubletrack\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/ga_exp\\.js)|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/analytics\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/plugins\\/ua\\/))|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com(\\/[a-z])?\\/collect|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net(\\/[a-z])?\\/collect))|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net\\/dc\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net\\/__utm\\.gif))', 'i')},{id: '1397', regex: new RegExp('(^http(s)?:\\/\\/(.*)fls\\.doubleclick\\.net\\/(.*)type=visua0)', 'i')},{id: '2548', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(googletagservices|doubleclick)\\.(com|net)(\\/tag\\/js\\/gpt\\.js|\\/gpt\\/|\\/gampad\\/ads)|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tpc\\.googlesyndication\\.com\\/safeframe\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googlesyndication\\.com\\/pagead\\/show_companion_ad\\.js)', 'i')},{id: '2549', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleapis\\.com\\/adexchangebuyer\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adexchangebuyer\\.googleapis\\.com\\/)', 'i')},{id: '2550', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)cm\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '291', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleads\\.g\\.doubleclick\\.net\\/pagead\\/viewthroughconversion)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/ads\\/user-lists\\/)', 'i')},{id: '292', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)gan\\.doubleclick\\.net\\/)', 'i')},{id: '1458', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bid\\.g\\.doubleclick\\.net\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleads\\.g\\.doubleclick\\.net\\/dbm\\/ad)', 'i')},{id: '296', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adx\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '390', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)survey\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '1398', regex: new RegExp('(^http(s)?:\\/\\/(ad\\.doubleclick\\.net\\/(.*)visualiqinc(.*)|((.*)\\.|)myvisualiq\\.net\\/))', 'i')},{id: '295', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)www\\.googletagservices\\.com\\/tag\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-ace\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad\\.[a-z]*\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-apac\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-emea\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)pubads\\.g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)m\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)2mdn\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)static\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)iv\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)cm\\.g\\.doubleclick\\.net\\/)|(^donotmatch$)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)g\\.doubleclick\\.net\\/)', 'i')},{id: '1312', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ads\\.yahoo\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics\\.yahoo\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)advertising\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adsonar\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tacoda\\.net\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adtechus\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adtech\\.de\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)atwola\\.com\\/)', 'i')},{id: '1427', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bluecore\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)triggeredmail\\.appspot\\.com\\/))', 'i')},{id: '2205', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)go2cloud\\.org\\/)', 'i')},{id: '384', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleadservices\\.com\\/pagead\\/conversion\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleadservices\\.com\\/pagead\\/conversion\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleadservices\\.com\\/pagead\\/conversion_async\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/.*id=aw-)', 'i')},{id: '648', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)outbrain\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)outbrainimg\\.com\\/)', 'i')},{id: '827', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)zetabbs\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)taboola\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)taboolasyndication\\.com\\/)', 'i')},{id: '835', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(tealium\\.hs\\.llnwd\\.net|tealiumiq.com)\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tiqcdn\\.(com|cn)\\/)|(\\/utag\\.js)|(\\/utag\\..*\\.js)', 'i')},{id: '1416', regex: new RegExp('(^http(s)?:\\/\\/bat\\.bing\\.com\\/)', 'i')},{id: '1452', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)liadm\\.com\\/)', 'i')},{id: '1625', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)dianomi\\.com\\/)', 'i')},{id: '2019', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tribune\\.com\\/)', 'i')},{id: '2635', regex: new RegExp('(\\/\\/(cdn\\.mediago\\.io\\/js\\/pixel.js|trace\\.mediago\\.io\\/api\\/html\\/))', 'i')},{id: '2664', regex: new RegExp('((^http(s)?:\\/\\/ads\\.nextdoor\\.com\\/.*\\.js|^http(s)?:\\/\\/flask\\.nextdoor\\.com\\/pixel))', 'i')}]});
tiMonitor.sendData = {
	pageId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);}),
	sentUnload: false,
	currentlyIterating: false,
	pageBeingSampled: false,
	externalTagStartTimes: [],
	internalTagStartTimes: [],
	currentUrl: window.location.href,
	minimumBeforeUnloadRestriction: 5,
	pageTitle: '',
	sampleRate: 20046,
	sampleBlackList: new RegExp('.*'),
	sampleBlackListEnabled: false,
	sampleblackListFlag: false,
	getRandomInt: function() {
		return Math.floor(Math.random() * (this.sampleRate - 1 + 1)) + 1;
	},
	shouldSamplePage: function(){
		if(this.sampleBlackListEnabled == true){
			if(this.sampleBlackList.test(this.currentUrl) == true){
				this.sampleblackListFlag = true;
				return false;
			}
		}
		if(1 == tiMonitor.sendData.getRandomInt()){
			return false;
		}else{
			tiMonitor.sendData.pageBeingSampled = true;
			return true;
		}
	},
	createFakeReq: function(reqUrl){
		fakeHit = {
			connectEnd: 0,
			connectStart: 0,
			decodedBodySize: 0,
			domainLookupEnd: 0,
			domainLookupStart: 0,
			duration: 0,
			entryType: "resource",
			fetchStart: 0,
			initiatorType: "script",
			name: "",
			redirectEnd: 0,
			redirectStart: 0,
			requestStart: 0,
			responseEnd: 0,
			responseStart: 0,
			startTime: 0
		};
		fetchStart = performance.now()
		fakeDuration = 10.47999999905005;
		
		fakeHit.fetchStart = fetchStart;
		fakeHit.startTime = fetchStart;
		fakeHit.duration = fakeDuration;
		fakeHit.responseEnd = fetchStart + fakeDuration;
		fakeHit.name = reqUrl + "&post=1";
		tiMonitor.dataCollector.identifyRequest(fakeHit);
		tiMonitor.dataCollector.queueRequest(fakeHit, "resource");
		
	},
	isSinglePageApp: function(){
		if(window.angular){
			return true;
		}else{
			return false;
		}
	},
	isPerformanceObserverSupported: function(){
		if(window.PerformanceObserver){
			return true;
		}else{
			return false;
		}
	},
	isInIframe: function(){
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	},
	isPerformanceObserverInitialized: false,
	performanceObserverCallback: function(list){

		var perfEntries = list.getEntries();
		for (var i = 0; i < perfEntries.length; i++){
			var req = perfEntries[i];
			if(tiMonitor.sendData.isValidRequest(req) == true){
				tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
				tiMonitor.dataCollector.queueRequest(req, "resource");
			}else{
				tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
			}
		}

		tiMonitor.sendData.isPerformanceObserverInitialized=true;
	},
	suportedBrowser: function(){
		var isSupported = true;
		ua = navigator.userAgent;
		var isNativeAndroid = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
		var isIE = ((ua.indexOf('Trident') > -1) || (ua.indexOf('MSIE') > -1));
		var perfMonSupport = false;
		var isEventSupported = false;
		if(typeof Event == "function"){
			isEventSupported = true;
		}
		if ('performance' in window) { 
			if ('getEntries' in performance) {
				perfMonSupport = true;
			}
		}
		if(isNativeAndroid == true || perfMonSupport == false || isIE == true || isEventSupported == false){
			isSupported = false;
		}
		return isSupported;
	},
	blackList: new RegExp('http(s)?:\/\/(col\.eum-appdynamics\.com|((.*)\.|)mouseflow.com|akstat.io)'),
	lastPerformanceObjLength: 0,
	areTriggersActivated: false,
	isDuplicateRequest: function(req){
		lt = tiMonitor.sendData.getUniqueReqKey(req);
		return !(tiMonitor.sendData.externalTagStartTimes.indexOf(lt) == -1 && tiMonitor.sendData.internalTagStartTimes.indexOf(lt) == -1);
	},
	isBlacklistedRequest: function(req){
		return this.blackList.test(req.name) == true;
	},
	isExternalRequest: function(req){
		externalReq = true;
		windowOrigin = window.location.protocol + '//' + window.location.hostname;
		if(req.name.length >= windowOrigin.length){
			truncReqName = (req.name).substr(0, windowOrigin.length);
			externalReq = (truncReqName).indexOf(windowOrigin) == -1;
		}
		return externalReq;
	},
	isTIRequest: function(req){
		return !((req.name).indexOf(tiMonitor.dataCollector.pixelHost) == -1);
	},
	isValidRequest:function(req){
		var validReq = false;
		var identifiedTag = tiMonitor.dataCollector.identifyRequest(req);
		if(this.isTIRequest(req) == false && (this.isExternalRequest(req) == true || identifiedTag == true) && this.isBlacklistedRequest(req) == false){
			validReq = true;
		}
		return validReq;
	},
	getUniqueReqKey:function(req){
		return (req.startTime).toString() + "-" + (req.responseEnd).toString();
	},
	isBufferFull:function(){
		bufferFull = false;
		if(window.performance.getEntriesByType("resource").length == 150 || window.performance.getEntriesByType("resource").length == 250 || window.performance.getEntriesByType("resource").length == 400){
			bufferFull = true;
		}
		return bufferFull;
	},
	iteratePerformance: function(){
		if(this.currentlyIterating == false){
			this.currentlyIterating = true;

			var pe = performance.getEntriesByType("resource");
			if(this.lastPerformanceObjLength != pe.length){
				this.lastPerformanceObjLength = pe.length;
				for (var i = 0; i < pe.length; i++) {
					var req = pe[i];
					if(this.isDuplicateRequest(req) == false){
						if(tiMonitor.sendData.isValidRequest(req) == true){
							tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
							tiMonitor.dataCollector.queueRequest(req, "resource");
						}else{
							tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
						}
					}
				}
			}
			if(this.areTriggersActivated == false){
				this.areTriggersActivated = true;
				tiMonitor.validationRules(true);
			}
			this.currentlyIterating = false;
		}
	},
	domLoadCompleteEvent: (document.readyState == 'complete'),
	windowUnloadEvent: false,
	preventFiringValidationRules: false,
	pageVariableFiredEvents: {},
	pageComplete: function(){
		if(tiMonitor.sendData.sentUnload == false && tiMonitor.sendData.pageBeingSampled == false){
			tiMonitor.sendData.sentUnload = true;
			tiMonitor.dataCollector.queueRequest(null, "pageload");
			this.iteratePerformance();
			this.fire();
		}
	},
	waitForDomLoad: function(){
		if (document.readyState == 'complete' && tiMonitor.sendData.sentUnload == false){
			tiMonitor.sendData.pageComplete();
			return true;
		}else{
			return false;
		}
	},
	fire: function(){
		tiMonitor.dataCollector.sendRequests(false);
	},
	clearBuffer: function(){
		if(window.performance.clearResourceTimings){
			startBufferLength = window.performance.getEntriesByType("resource").length;
			tiMonitor.sendData.iteratePerformance();
			window.performance.clearResourceTimings();
			endBufferLength = window.performance.getEntriesByType("resource").length;

			if (startBufferLength == endBufferLength){
				this.preventFiringValidationRules = true;
			}
		}
	},
	handleUnload: function(){
		tiMonitor.windowUnloadEvent=true;
		tiMonitor.sendData.pageComplete();

		if(tiMonitor.sendData.isPerformanceObserverSupported() == false){
			tiMonitor.sendData.iteratePerformance();
		}
		tiMonitor.sendData.fire();
	},
	fullBufferEventListener: function(){
		if("clearResourceTimings" in window.performance){
			if("addEventListener" in window.performance){
				window.performance.addEventListener("resourcetimingbufferfull", function(){
					tiMonitor.sendData.clearBuffer();
				});
			}else{
				if("onresourcetimingbufferfull" in window.performance){
					window.performance.onresourcetimingbufferfull = function(event) {
						tiMonitor.sendData.clearBuffer();
					};
				}
			}
		}
	},
	initialized: false
};

tiMonitor.ruleVariableCache = {
	spaRulesFiring: false,
	_cachedVariableValues: {},
	censor: function(n) {var o = 0;return function(r, t) {if (0 !== o && "object" == typeof n && "object" == typeof t && n == t) {return "[Circular]"}else if (o >= 500) {return "[Unknown]"}else {return (++o, t)}}},
	updateCache: function(maxCacheTime){
		globalVars = tiMonitor.getGlobalJsVars();
		for(var p=0; p<globalVars.length; p++){
			this.getVariableValue(globalVars[p], maxCacheTime)
		}
	},
	getVariableValue: function(variableName, maxCacheTime){
		retVal = '';
		if(this._cachedVariableValues.hasOwnProperty(variableName)){
			if(this._cachedVariableValues[variableName]["cacheTime"] > performance.now() || this.spaRulesFiring == true){
				this._cachedVariableValues[variableName]["cacheTime"] = this._cachedVariableValues[variableName]["cacheTime"] + 30;
				return this._cachedVariableValues[variableName]["val"];
			}
		}
		try{
			var tmpVarVal = eval(variableName);
			if(typeof tmpVarVal === 'object'){
				try{
					if(tmpVarVal.hasOwnProperty('length')){
						tmpArray = [];
						objStart = tiMonitor.spaRuleObjectLengthTracker.getLastValidatedObjectLength(tmpVarVal, variableName);
						for(z=objStart; z < tmpVarVal.length; z++){
							try{
								tmpArray.push(JSON.stringify(tmpVarVal[z]));
							}catch(err){ }
						}
						retVal = tmpArray.toString();
					}else{
						retVal = JSON.stringify(tmpVarVal);
					}
				}catch(err) {
					retVal = JSON.stringify(tmpVarVal, this.censor(tmpVarVal));
					console.log(err.message);
				}
			}else if(typeof tmpVarVal !== 'undefined'){
				retVal = tmpVarVal;
			}
			this._cachedVariableValues[variableName] = {"val": retVal, "cacheTime": performance.now() + maxCacheTime}

		} catch(err) {
			console.log(err.message);
		}
		
		return retVal;
	}
};

tiMonitor.spaRuleObjectLengthTracker = {
	spaPageCounter: 0,
	spaRuleObjectLengths: {0:{}},
	_checkIfObject: function(obj){
		return typeof(obj) == 'object';
	},
	isTrackable: function(obj){
		if(this._checkIfObject(obj)){
			return obj.hasOwnProperty("length")
		}else{
			return false;
		}
	},
	_trackObjectLength: function(obj, objName){
		if(this.isTrackable(obj)){
			objLen = obj.length;
			this.spaRuleObjectLengths[this.spaPageCounter][objName] = objLen;
		}
	},
	getLastValidatedObjectLength: function(obj, objName){
		if(this.isTrackable(obj)){
			if(this.spaRuleObjectLengths[this.spaPageCounter].hasOwnProperty(objName) == false){
				this._trackObjectLength(obj, objName);
			}

			lastValidationLength = 0;
			if(this.spaRuleObjectLengths[this.spaPageCounter - 1].hasOwnProperty(objName)){
				lastValidationLength = this.spaRuleObjectLengths[this.spaPageCounter - 1][objName]
			}
			return lastValidationLength;
		}
	},
	incrimentSpaPageview: function(){
		this.spaPageCounter = this.spaPageCounter + 1;
		this.spaRuleObjectLengths[this.spaPageCounter] = {};
	}
};

tiMonitor.getGlobalJsVars = function (){
	try {
		var tiGlobalJsVars = ['utag_data.country_code', 'utag_data.response_quality', 'utag_data.page_type', 'utag_data.page_step', 'navigator.userAgent', 'js.response_quality', 'page_type'];
		return tiGlobalJsVars;
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
		return [];
	}
};

tiMonitor.validationRules = function (){
	try {
		macro_function_e94fcab7_483b_5f43_9a0b_6c0709b2d627 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1473') == true){
				var re = new RegExp('10067811', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1473'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1473'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e94fcab7_483b_5f43_9a0b_6c0709b2d627 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e94fcab7_483b_5f43_9a0b_6c0709b2d627', reportValue: false});
		macro_e94fcab7_483b_5f43_9a0b_6c0709b2d627.setValue(macro_function_e94fcab7_483b_5f43_9a0b_6c0709b2d627);
		macro_function_c3d9b672_1133_57d3_9f6a_ce65e7733922 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1473') == true){
				var re = new RegExp("(?:[?&])(el=Qualified)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1473'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1473'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_c3d9b672_1133_57d3_9f6a_ce65e7733922 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'c3d9b672_1133_57d3_9f6a_ce65e7733922', reportValue: false});
		macro_c3d9b672_1133_57d3_9f6a_ce65e7733922.setValue(macro_function_c3d9b672_1133_57d3_9f6a_ce65e7733922);
		macro_function_44031c13_b398_5391_a0b5_da2a61be6cca = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('utag_data.country_code', 100);
		} 
		macro_44031c13_b398_5391_a0b5_da2a61be6cca = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '44031c13_b398_5391_a0b5_da2a61be6cca', reportValue: true});
		macro_44031c13_b398_5391_a0b5_da2a61be6cca.setValue(macro_function_44031c13_b398_5391_a0b5_da2a61be6cca);
		macro_function_b65f7a28_b1cb_534c_89fe_0b52895e705d = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('utag_data.response_quality', 100);
		} 
		macro_b65f7a28_b1cb_534c_89fe_0b52895e705d = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'b65f7a28_b1cb_534c_89fe_0b52895e705d', reportValue: true});
		macro_b65f7a28_b1cb_534c_89fe_0b52895e705d.setValue(macro_function_b65f7a28_b1cb_534c_89fe_0b52895e705d);
		macro_function_08cbad8c_9783_5f70_82ee_c47d8bb276c5 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1452') == true){
				var re = new RegExp("(?:[?&])(aid=a-00pa)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1452'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1452'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_08cbad8c_9783_5f70_82ee_c47d8bb276c5 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '08cbad8c_9783_5f70_82ee_c47d8bb276c5', reportValue: false});
		macro_08cbad8c_9783_5f70_82ee_c47d8bb276c5.setValue(macro_function_08cbad8c_9783_5f70_82ee_c47d8bb276c5);
		macro_function_9520fc8d_e9aa_5145_a801_103617928996 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1625') == true){
				var re = new RegExp("(?:[?&])(c=7356)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1625'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1625'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_9520fc8d_e9aa_5145_a801_103617928996 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '9520fc8d_e9aa_5145_a801_103617928996', reportValue: false});
		macro_9520fc8d_e9aa_5145_a801_103617928996.setValue(macro_function_9520fc8d_e9aa_5145_a801_103617928996);
		macro_function_a01e8426_5b91_53f0_8b5b_cb8a8307aa48 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('384') == true){
				var re = new RegExp('.*oTogCOnPmQQQ76SY2wM.*|.*OM7TCLr_3XcQ68b1iwM.*|.*wvKPCKej0QoQobWCzQM.*|.*cdBRCNu1jQUQzajX1QM.*|.*rRwuCPiNwFoQoMSqyAM.*|.*Mf7WCIW9mAoQk5ebzAM.*|.*AjopCPeV1AUQsaGa1gM.*|.*xAuACJL5kwQQ9svF2QM.*|.*xAuACJL5kwQQ9svF2QM.*|.*pYzMCJTUzAkQpOTk1gM.*|.*05BwCLfUlwEQy6Ky6wM.*|.*iy7KCNXL9ncQ08b1iwM.*', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['384'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['384'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_a01e8426_5b91_53f0_8b5b_cb8a8307aa48 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'a01e8426_5b91_53f0_8b5b_cb8a8307aa48', reportValue: false});
		macro_a01e8426_5b91_53f0_8b5b_cb8a8307aa48.setValue(macro_function_a01e8426_5b91_53f0_8b5b_cb8a8307aa48);
		macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428 = function(){
			return tiMonitor.sendData.currentUrl;
		} 
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '31dad1ae_f686_5581_8cbc_52bf9629b428', reportValue: false});
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428.setValue(macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428);
		macro_function_22dc7922_97c9_5d53_99a1_7cab6cf97b25 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '22dc7922_97c9_5d53_99a1_7cab6cf97b25', reportValue: false});
		macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25.setValue(macro_function_22dc7922_97c9_5d53_99a1_7cab6cf97b25);
		macro_function_f241fe18_57a4_5a18_85c6_c302db449c8e = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('294') == true){
				var re = new RegExp('(.*)8091093(.*)Qualified(.*)', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['294'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['294'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_f241fe18_57a4_5a18_85c6_c302db449c8e = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'f241fe18_57a4_5a18_85c6_c302db449c8e', reportValue: false});
		macro_f241fe18_57a4_5a18_85c6_c302db449c8e.setValue(macro_function_f241fe18_57a4_5a18_85c6_c302db449c8e);
		macro_function_aaa2926b_5f7b_5b30_a4f0_676a3a011d1e = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('2635') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_aaa2926b_5f7b_5b30_a4f0_676a3a011d1e = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'aaa2926b_5f7b_5b30_a4f0_676a3a011d1e', reportValue: false});
		macro_aaa2926b_5f7b_5b30_a4f0_676a3a011d1e.setValue(macro_function_aaa2926b_5f7b_5b30_a4f0_676a3a011d1e);
		macro_function_0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('utag_data.page_type', 100);
		} 
		macro_0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7', reportValue: true});
		macro_0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7.setValue(macro_function_0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7);
		macro_function_a760bf2b_e13b_58ec_be94_34b61e81009f = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('827') == true){
				var re = new RegExp('1007231', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['827'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['827'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_a760bf2b_e13b_58ec_be94_34b61e81009f = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'a760bf2b_e13b_58ec_be94_34b61e81009f', reportValue: false});
		macro_a760bf2b_e13b_58ec_be94_34b61e81009f.setValue(macro_function_a760bf2b_e13b_58ec_be94_34b61e81009f);
		macro_function_e6d68060_38fe_5595_b4f8_6ba963f72567 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('827') == true){
				var re = new RegExp("(?:[?&])(en=Qualified)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['827'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['827'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e6d68060_38fe_5595_b4f8_6ba963f72567 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e6d68060_38fe_5595_b4f8_6ba963f72567', reportValue: false});
		macro_e6d68060_38fe_5595_b4f8_6ba963f72567.setValue(macro_function_e6d68060_38fe_5595_b4f8_6ba963f72567);
		macro_function_d112082e_8068_5e3b_8c02_57a4e0e1f205 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('utag_data.page_step', 100);
		} 
		macro_d112082e_8068_5e3b_8c02_57a4e0e1f205 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'd112082e_8068_5e3b_8c02_57a4e0e1f205', reportValue: true});
		macro_d112082e_8068_5e3b_8c02_57a4e0e1f205.setValue(macro_function_d112082e_8068_5e3b_8c02_57a4e0e1f205);
		macro_function_27d31391_ddf8_56aa_809a_859fc8a53c08 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1393') == true){
				var re = new RegExp("(?:[?&])(txn_id=o0ysq)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1393'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1393'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_27d31391_ddf8_56aa_809a_859fc8a53c08 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '27d31391_ddf8_56aa_809a_859fc8a53c08', reportValue: false});
		macro_27d31391_ddf8_56aa_809a_859fc8a53c08.setValue(macro_function_27d31391_ddf8_56aa_809a_859fc8a53c08);
		macro_function_b407d0e2_33f3_5739_adab_bdb1a179a3ed = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('291') == true){
				var re = new RegExp('1033835420', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['291'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['291'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_b407d0e2_33f3_5739_adab_bdb1a179a3ed = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'b407d0e2_33f3_5739_adab_bdb1a179a3ed', reportValue: false});
		macro_b407d0e2_33f3_5739_adab_bdb1a179a3ed.setValue(macro_function_b407d0e2_33f3_5739_adab_bdb1a179a3ed);
		macro_function_a6f1bc15_441a_5fb3_acc0_568643913f82 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('384') == true){
				var re = new RegExp("(?:[?&])(label=3GzHCKzZhXgQnKf87AM)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['384'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['384'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_a6f1bc15_441a_5fb3_acc0_568643913f82 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'a6f1bc15_441a_5fb3_acc0_568643913f82', reportValue: false});
		macro_a6f1bc15_441a_5fb3_acc0_568643913f82.setValue(macro_function_a6f1bc15_441a_5fb3_acc0_568643913f82);
		macro_function_f92d5a39_d5f4_5afb_8e90_cd31cddbf67c = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1625') == true){
				var re = new RegExp("(?:[?&])(shortcode=fisherinvestmentsus)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1625'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1625'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_f92d5a39_d5f4_5afb_8e90_cd31cddbf67c = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'f92d5a39_d5f4_5afb_8e90_cd31cddbf67c', reportValue: false});
		macro_f92d5a39_d5f4_5afb_8e90_cd31cddbf67c.setValue(macro_function_f92d5a39_d5f4_5afb_8e90_cd31cddbf67c);
		macro_function_fa0aede2_ac7f_5750_9e4c_4011e3692625 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(ea=view)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_fa0aede2_ac7f_5750_9e4c_4011e3692625 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'fa0aede2_ac7f_5750_9e4c_4011e3692625', reportValue: false});
		macro_fa0aede2_ac7f_5750_9e4c_4011e3692625.setValue(macro_function_fa0aede2_ac7f_5750_9e4c_4011e3692625);
		macro_function_08234d50_bb94_5f96_b004_5a413f14fe79 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(ec=conversion)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_08234d50_bb94_5f96_b004_5a413f14fe79 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '08234d50_bb94_5f96_b004_5a413f14fe79', reportValue: false});
		macro_08234d50_bb94_5f96_b004_5a413f14fe79.setValue(macro_function_08234d50_bb94_5f96_b004_5a413f14fe79);
		macro_function_e6e63991_1dc5_5ac1_8300_1039b64c31fa = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(cd14=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e6e63991_1dc5_5ac1_8300_1039b64c31fa = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e6e63991_1dc5_5ac1_8300_1039b64c31fa', reportValue: false});
		macro_e6e63991_1dc5_5ac1_8300_1039b64c31fa.setValue(macro_function_e6e63991_1dc5_5ac1_8300_1039b64c31fa);
		macro_function_d545c54f_51dc_5572_b290_1e4526e933a3 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1436') == true){
				var re = new RegExp("(?:[?&])(url=fisherinvestments.com\/usqualified)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1436'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1436'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_d545c54f_51dc_5572_b290_1e4526e933a3 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'd545c54f_51dc_5572_b290_1e4526e933a3', reportValue: false});
		macro_d545c54f_51dc_5572_b290_1e4526e933a3.setValue(macro_function_d545c54f_51dc_5572_b290_1e4526e933a3);
		macro_function_9a5a5e14_fa98_556f_914e_bd66ca40a5f7 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1436') == true){
				var re = new RegExp("(?:[?&])(pid=11458)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1436'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1436'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_9a5a5e14_fa98_556f_914e_bd66ca40a5f7 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '9a5a5e14_fa98_556f_914e_bd66ca40a5f7', reportValue: false});
		macro_9a5a5e14_fa98_556f_914e_bd66ca40a5f7.setValue(macro_function_9a5a5e14_fa98_556f_914e_bd66ca40a5f7);
		macro_function_e0145076_2c26_5567_bfc8_f059d52c48d7 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1393') == true){
				var re = new RegExp("(?:[?&])(txn_id=o0zwk)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1393'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1393'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e0145076_2c26_5567_bfc8_f059d52c48d7 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e0145076_2c26_5567_bfc8_f059d52c48d7', reportValue: false});
		macro_e0145076_2c26_5567_bfc8_f059d52c48d7.setValue(macro_function_e0145076_2c26_5567_bfc8_f059d52c48d7);
		macro_function_7dff911f_c83c_5519_b68c_f13f89869a1d = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1416') == true){
				var re = new RegExp("(?:[?&])(ti=4006685)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1416'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1416'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_7dff911f_c83c_5519_b68c_f13f89869a1d = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '7dff911f_c83c_5519_b68c_f13f89869a1d', reportValue: false});
		macro_7dff911f_c83c_5519_b68c_f13f89869a1d.setValue(macro_function_7dff911f_c83c_5519_b68c_f13f89869a1d);
		macro_function_5903dbe6_f5de_50af_92b2_3b4023382420 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(tid=UA-65079555-3)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_5903dbe6_f5de_50af_92b2_3b4023382420 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5903dbe6_f5de_50af_92b2_3b4023382420', reportValue: false});
		macro_5903dbe6_f5de_50af_92b2_3b4023382420.setValue(macro_function_5903dbe6_f5de_50af_92b2_3b4023382420);
		macro_function_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1 = function(){
			return 'true';
		} 
		macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1', reportValue: false});
		macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1.setValue(macro_function_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1);
		macro_function_7dc99cb4_4412_5d09_b54c_8c007216f296 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('294') == true){
				var re = new RegExp('(.*)8091093(.*)', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['294'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['294'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_7dc99cb4_4412_5d09_b54c_8c007216f296 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '7dc99cb4_4412_5d09_b54c_8c007216f296', reportValue: false});
		macro_7dc99cb4_4412_5d09_b54c_8c007216f296.setValue(macro_function_7dc99cb4_4412_5d09_b54c_8c007216f296);
		macro_function_aa8a44c8_c134_5a4a_a6e5_3c042004c207 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('navigator.userAgent', 100);
		} 
		macro_aa8a44c8_c134_5a4a_a6e5_3c042004c207 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'aa8a44c8_c134_5a4a_a6e5_3c042004c207', reportValue: true});
		macro_aa8a44c8_c134_5a4a_a6e5_3c042004c207.setValue(macro_function_aa8a44c8_c134_5a4a_a6e5_3c042004c207);
		macro_function_283c4810_1e6c_578f_81e6_8a0f261de40c = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('1489271087955822', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_283c4810_1e6c_578f_81e6_8a0f261de40c = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '283c4810_1e6c_578f_81e6_8a0f261de40c', reportValue: false});
		macro_283c4810_1e6c_578f_81e6_8a0f261de40c.setValue(macro_function_283c4810_1e6c_578f_81e6_8a0f261de40c);
		macro_function_b4f4119d_9751_58e9_a2ba_16a6eb97aa52 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('384') == true){
				var re = new RegExp("(?:[?&])(label=d58JCPiLYRC-krr8Aw)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['384'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['384'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_b4f4119d_9751_58e9_a2ba_16a6eb97aa52 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'b4f4119d_9751_58e9_a2ba_16a6eb97aa52', reportValue: false});
		macro_b4f4119d_9751_58e9_a2ba_16a6eb97aa52.setValue(macro_function_b4f4119d_9751_58e9_a2ba_16a6eb97aa52);
		macro_function_e5aeda4c_b080_517f_8a7f_2c4517707b73 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('648') == true){
				var re = new RegExp("(?:[?&])(name=Qualified)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['648'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['648'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e5aeda4c_b080_517f_8a7f_2c4517707b73 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e5aeda4c_b080_517f_8a7f_2c4517707b73', reportValue: false});
		macro_e5aeda4c_b080_517f_8a7f_2c4517707b73.setValue(macro_function_e5aeda4c_b080_517f_8a7f_2c4517707b73);
		macro_function_ef7bcbe9_ba97_561a_97a4_c6ab1c18a66a = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('648') == true){
				var re = new RegExp("(?:[?&])(marketerId=00edc0c31d11b6ebdc5e761a620c91453e)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['648'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['648'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_ef7bcbe9_ba97_561a_97a4_c6ab1c18a66a = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'ef7bcbe9_ba97_561a_97a4_c6ab1c18a66a', reportValue: false});
		macro_ef7bcbe9_ba97_561a_97a4_c6ab1c18a66a.setValue(macro_function_ef7bcbe9_ba97_561a_97a4_c6ab1c18a66a);
		macro_function_307e31e6_8c54_591c_94f1_91be094027cc = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(t=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_307e31e6_8c54_591c_94f1_91be094027cc = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '307e31e6_8c54_591c_94f1_91be094027cc', reportValue: false});
		macro_307e31e6_8c54_591c_94f1_91be094027cc.setValue(macro_function_307e31e6_8c54_591c_94f1_91be094027cc);
		macro_function_80e057de_7085_5077_b981_ec4d05ffed0e = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(tid=UA-44160600-1)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_80e057de_7085_5077_b981_ec4d05ffed0e = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '80e057de_7085_5077_b981_ec4d05ffed0e', reportValue: false});
		macro_80e057de_7085_5077_b981_ec4d05ffed0e.setValue(macro_function_80e057de_7085_5077_b981_ec4d05ffed0e);
		macro_function_e682109d_0e75_5b34_90cf_ec8618e93010 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp("(?:[?&])(cd\\[content_name\\]=Qualified)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e682109d_0e75_5b34_90cf_ec8618e93010 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e682109d_0e75_5b34_90cf_ec8618e93010', reportValue: false});
		macro_e682109d_0e75_5b34_90cf_ec8618e93010.setValue(macro_function_e682109d_0e75_5b34_90cf_ec8618e93010);
		macro_function_85d56d1b_a403_5eb3_8ca4_23f12814aa80 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp("(?:[?&])(ev=Lead)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_85d56d1b_a403_5eb3_8ca4_23f12814aa80 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '85d56d1b_a403_5eb3_8ca4_23f12814aa80', reportValue: false});
		macro_85d56d1b_a403_5eb3_8ca4_23f12814aa80.setValue(macro_function_85d56d1b_a403_5eb3_8ca4_23f12814aa80);
		macro_function_07e0eb5c_c8ef_5ca8_a2c7_1810f42d3d8a = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('2664') == true){
				var re = new RegExp("(?:[?&])(ev=CONVERSION)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['2664'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['2664'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_07e0eb5c_c8ef_5ca8_a2c7_1810f42d3d8a = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '07e0eb5c_c8ef_5ca8_a2c7_1810f42d3d8a', reportValue: false});
		macro_07e0eb5c_c8ef_5ca8_a2c7_1810f42d3d8a.setValue(macro_function_07e0eb5c_c8ef_5ca8_a2c7_1810f42d3d8a);
		macro_function_9e96ab4e_701f_5bea_9908_d679bb0960da = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('2635') == true){
				var re = new RegExp("(?:[?&])(acid=305)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['2635'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['2635'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_9e96ab4e_701f_5bea_9908_d679bb0960da = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '9e96ab4e_701f_5bea_9908_d679bb0960da', reportValue: false});
		macro_9e96ab4e_701f_5bea_9908_d679bb0960da.setValue(macro_function_9e96ab4e_701f_5bea_9908_d679bb0960da);
		macro_function_202d72e9_3893_54c0_9465_365201ae2914 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('648') == true){
				var re = new RegExp("(?:[?&])(marketerid=00edc0c31d11b6ebdc5e761a620c91453e)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['648'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['648'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_202d72e9_3893_54c0_9465_365201ae2914 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '202d72e9_3893_54c0_9465_365201ae2914', reportValue: false});
		macro_202d72e9_3893_54c0_9465_365201ae2914.setValue(macro_function_202d72e9_3893_54c0_9465_365201ae2914);
		macro_function_e8d684d7_d24e_5a90_81d1_cecfd0023848 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1416') == true){
				var re = new RegExp("(?:[?&])(ec=conversion)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1416'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1416'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_e8d684d7_d24e_5a90_81d1_cecfd0023848 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'e8d684d7_d24e_5a90_81d1_cecfd0023848', reportValue: false});
		macro_e8d684d7_d24e_5a90_81d1_cecfd0023848.setValue(macro_function_e8d684d7_d24e_5a90_81d1_cecfd0023848);
		macro_function_53ceeaf0_ebf5_5e04_83ef_5ec7840b23e9 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('2019') == true){
				var re = new RegExp('.*ntv_pixel_id=8fd101b8b91342fe8a741caa3a244378.*', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['2019'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['2019'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_53ceeaf0_ebf5_5e04_83ef_5ec7840b23e9 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '53ceeaf0_ebf5_5e04_83ef_5ec7840b23e9', reportValue: false});
		macro_53ceeaf0_ebf5_5e04_83ef_5ec7840b23e9.setValue(macro_function_53ceeaf0_ebf5_5e04_83ef_5ec7840b23e9);
		macro_function_9669f82d_3337_5ce0_81ca_151c269d8419 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('js.response_quality', 100);
		} 
		macro_9669f82d_3337_5ce0_81ca_151c269d8419 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '9669f82d_3337_5ce0_81ca_151c269d8419', reportValue: true});
		macro_9669f82d_3337_5ce0_81ca_151c269d8419.setValue(macro_function_9669f82d_3337_5ce0_81ca_151c269d8419);
		macro_function_b222e344_89bf_5e44_ac64_686a7e695528 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('835') == true){
				var re = new RegExp('collect.tealiumiq', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['835'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['835'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_b222e344_89bf_5e44_ac64_686a7e695528 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'b222e344_89bf_5e44_ac64_686a7e695528', reportValue: false});
		macro_b222e344_89bf_5e44_ac64_686a7e695528.setValue(macro_function_b222e344_89bf_5e44_ac64_686a7e695528);
		macro_function_900d90a4_368e_506e_b876_f577b91fa421 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('page_type', 100);
		} 
		macro_900d90a4_368e_506e_b876_f577b91fa421 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '900d90a4_368e_506e_b876_f577b91fa421', reportValue: true});
		macro_900d90a4_368e_506e_b876_f577b91fa421.setValue(macro_function_900d90a4_368e_506e_b876_f577b91fa421);
		

condition_cde4ef70_020a_401c_8e7a_4f3bedb02f62 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e94fcab7_483b_5f43_9a0b_6c0709b2d627, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'cde4ef70_020a_401c_8e7a_4f3bedb02f62'});

condition_94a08733_9819_4850_bf2e_d65a382350ec = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_c3d9b672_1133_57d3_9f6a_ce65e7733922, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '94a08733_9819_4850_bf2e_d65a382350ec'});

rule_2305 = new taginspector.datapulse.BaseRule({uniqueId: '2305', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2305.addFilter(condition_cde4ef70_020a_401c_8e7a_4f3bedb02f62);
rule_2305.addFilter(condition_94a08733_9819_4850_bf2e_d65a382350ec);

condition_168b6310_b30d_4ec7_b25b_6104ad10ae1e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_08cbad8c_9783_5f70_82ee_c47d8bb276c5, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '168b6310_b30d_4ec7_b25b_6104ad10ae1e'});

rule_2422 = new taginspector.datapulse.BaseRule({uniqueId: '2422', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2422.addFilter(condition_168b6310_b30d_4ec7_b25b_6104ad10ae1e);

condition_c758adfd_3983_4978_9af2_4780b113c923 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_9520fc8d_e9aa_5145_a801_103617928996, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'c758adfd_3983_4978_9af2_4780b113c923'});

rule_4235 = new taginspector.datapulse.BaseRule({uniqueId: '4235', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_4235.addFilter(condition_c758adfd_3983_4978_9af2_4780b113c923);

condition_3f6b9aa7_e93e_47e2_94a9_3c69104be5be = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_a01e8426_5b91_53f0_8b5b_cb8a8307aa48, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '3f6b9aa7_e93e_47e2_94a9_3c69104be5be'});

rule_1772 = new taginspector.datapulse.BaseRule({uniqueId: '1772', triggerTiming: 'Window Unload',  ruleVersion: 3, dataCollector: tiMonitor.dataCollector});
rule_1772.addFilter(condition_3f6b9aa7_e93e_47e2_94a9_3c69104be5be);

condition_534f2628_e4cb_4bb5_b68a_e0fdc9b56960 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '.*', comparisonType: 'Matches Regex', uniqueId: '534f2628_e4cb_4bb5_b68a_e0fdc9b56960'});

rule_9389 = new taginspector.datapulse.BaseRule({uniqueId: '9389', triggerTiming: 'Window Before Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_9389.addFilter(condition_534f2628_e4cb_4bb5_b68a_e0fdc9b56960);

condition_074a7b79_e82c_4618_bcca_5c49f215f831 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_f241fe18_57a4_5a18_85c6_c302db449c8e, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '074a7b79_e82c_4618_bcca_5c49f215f831'});

rule_2155 = new taginspector.datapulse.BaseRule({uniqueId: '2155', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2155.addFilter(condition_074a7b79_e82c_4618_bcca_5c49f215f831);

condition_b81af569_4b7d_463a_9f61_6e43208e3136 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_aaa2926b_5f7b_5b30_a4f0_676a3a011d1e, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'b81af569_4b7d_463a_9f61_6e43208e3136'});

rule_13178 = new taginspector.datapulse.BaseRule({uniqueId: '13178', triggerTiming: 'Window Before Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_13178.addFilter(condition_b81af569_4b7d_463a_9f61_6e43208e3136);

condition_af45ded0_4300_4b42_9a61_063060257957 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_a760bf2b_e13b_58ec_be94_34b61e81009f, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'af45ded0_4300_4b42_9a61_063060257957'});

condition_e2dba079_5b88_415c_989a_788e3ec28944 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e6d68060_38fe_5595_b4f8_6ba963f72567, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'e2dba079_5b88_415c_989a_788e3ec28944'});

rule_2280 = new taginspector.datapulse.BaseRule({uniqueId: '2280', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_2280.addFilter(condition_af45ded0_4300_4b42_9a61_063060257957);
rule_2280.addFilter(condition_e2dba079_5b88_415c_989a_788e3ec28944);

condition_1a3117db_43c4_4429_9bf0_34b4c7f44ef6 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_27d31391_ddf8_56aa_809a_859fc8a53c08, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '1a3117db_43c4_4429_9bf0_34b4c7f44ef6'});

rule_2716 = new taginspector.datapulse.BaseRule({uniqueId: '2716', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2716.addFilter(condition_1a3117db_43c4_4429_9bf0_34b4c7f44ef6);

condition_1fb48b70_1e07_4b5e_bf4f_ffbd106b34a6 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e94fcab7_483b_5f43_9a0b_6c0709b2d627, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '1fb48b70_1e07_4b5e_bf4f_ffbd106b34a6'});

rule_2304 = new taginspector.datapulse.BaseRule({uniqueId: '2304', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2304.addFilter(condition_1fb48b70_1e07_4b5e_bf4f_ffbd106b34a6);

condition_ffc3be6a_7ae9_4172_bc65_d414814b30d2 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b407d0e2_33f3_5739_adab_bdb1a179a3ed, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'ffc3be6a_7ae9_4172_bc65_d414814b30d2'});

condition_8dd8b858_2191_451b_bce8_e190f75bfd8d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_a6f1bc15_441a_5fb3_acc0_568643913f82, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '8dd8b858_2191_451b_bce8_e190f75bfd8d'});

rule_1771 = new taginspector.datapulse.BaseRule({uniqueId: '1771', triggerTiming: 'Window Unload',  ruleVersion: 3, dataCollector: tiMonitor.dataCollector});
rule_1771.addFilter(condition_ffc3be6a_7ae9_4172_bc65_d414814b30d2);
rule_1771.addFilter(condition_8dd8b858_2191_451b_bce8_e190f75bfd8d);

condition_c7485976_f134_4d2b_bd4d_56ffb3c54c40 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_f92d5a39_d5f4_5afb_8e90_cd31cddbf67c, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'c7485976_f134_4d2b_bd4d_56ffb3c54c40'});

rule_4234 = new taginspector.datapulse.BaseRule({uniqueId: '4234', triggerTiming: 'Window Unload',  ruleVersion: 6, dataCollector: tiMonitor.dataCollector});
rule_4234.addFilter(condition_c7485976_f134_4d2b_bd4d_56ffb3c54c40);

condition_526608f3_b3b3_4d90_86fb_50209c0c21c5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_fa0aede2_ac7f_5750_9e4c_4011e3692625, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '526608f3_b3b3_4d90_86fb_50209c0c21c5'});

condition_4066d701_708a_4b37_870c_910911483009 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_08234d50_bb94_5f96_b004_5a413f14fe79, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '4066d701_708a_4b37_870c_910911483009'});

condition_1da9f86a_d9de_4bed_930f_f0535107157c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e6e63991_1dc5_5ac1_8300_1039b64c31fa, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '1da9f86a_d9de_4bed_930f_f0535107157c'});

rule_1751 = new taginspector.datapulse.BaseRule({uniqueId: '1751', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_1751.addFilter(condition_526608f3_b3b3_4d90_86fb_50209c0c21c5);
rule_1751.addFilter(condition_4066d701_708a_4b37_870c_910911483009);
rule_1751.addFilter(condition_1da9f86a_d9de_4bed_930f_f0535107157c);

condition_1dd7fbcf_9d1d_4a3c_a543_247497b9f457 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_08cbad8c_9783_5f70_82ee_c47d8bb276c5, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '1dd7fbcf_9d1d_4a3c_a543_247497b9f457'});

rule_1671 = new taginspector.datapulse.BaseRule({uniqueId: '1671', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_1671.addFilter(condition_1dd7fbcf_9d1d_4a3c_a543_247497b9f457);

condition_bb02071a_63a4_42b7_959d_ecc2d039e8f7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_d545c54f_51dc_5572_b290_1e4526e933a3, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'bb02071a_63a4_42b7_959d_ecc2d039e8f7'});

condition_15961cf2_e32a_4dcc_8c38_e1216f3238f0 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_9a5a5e14_fa98_556f_914e_bd66ca40a5f7, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '15961cf2_e32a_4dcc_8c38_e1216f3238f0'});

rule_1664 = new taginspector.datapulse.BaseRule({uniqueId: '1664', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_1664.addFilter(condition_bb02071a_63a4_42b7_959d_ecc2d039e8f7);
rule_1664.addFilter(condition_15961cf2_e32a_4dcc_8c38_e1216f3238f0);

condition_bd70a052_997d_42ae_ba10_39c8b5a345e2 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e0145076_2c26_5567_bfc8_f059d52c48d7, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'bd70a052_997d_42ae_ba10_39c8b5a345e2'});

rule_2717 = new taginspector.datapulse.BaseRule({uniqueId: '2717', triggerTiming: 'Window Before Unload',  ruleVersion: 2, dataCollector: tiMonitor.dataCollector});
rule_2717.addFilter(condition_bd70a052_997d_42ae_ba10_39c8b5a345e2);

condition_8e808b68_4c4f_4041_aa3a_6a175f2f941c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_7dff911f_c83c_5519_b68c_f13f89869a1d, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '8e808b68_4c4f_4041_aa3a_6a175f2f941c'});

rule_1674 = new taginspector.datapulse.BaseRule({uniqueId: '1674', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_1674.addFilter(condition_8e808b68_4c4f_4041_aa3a_6a175f2f941c);

condition_0e8dddfe_37e9_43db_8b62_0a3eae26b586 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5903dbe6_f5de_50af_92b2_3b4023382420, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '0e8dddfe_37e9_43db_8b62_0a3eae26b586'});

rule_1576 = new taginspector.datapulse.BaseRule({uniqueId: '1576', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_1576.addFilter(condition_0e8dddfe_37e9_43db_8b62_0a3eae26b586);

condition_6ea42ebc_9b94_4441_916b_f17bb298d36e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_7dc99cb4_4412_5d09_b54c_8c007216f296, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '6ea42ebc_9b94_4441_916b_f17bb298d36e'});

rule_2144 = new taginspector.datapulse.BaseRule({uniqueId: '2144', triggerTiming: 'Window Unload',  ruleVersion: 7, dataCollector: tiMonitor.dataCollector});
rule_2144.addFilter(condition_6ea42ebc_9b94_4441_916b_f17bb298d36e);

condition_b862193e_b19b_420c_a771_e7c5dc815484 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_283c4810_1e6c_578f_81e6_8a0f261de40c, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'b862193e_b19b_420c_a771_e7c5dc815484'});

rule_1574 = new taginspector.datapulse.BaseRule({uniqueId: '1574', triggerTiming: 'Window Unload',  ruleVersion: 8, dataCollector: tiMonitor.dataCollector});
rule_1574.addFilter(condition_b862193e_b19b_420c_a771_e7c5dc815484);

condition_10fc029b_5898_4e3b_8432_a6303ea0e536 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b4f4119d_9751_58e9_a2ba_16a6eb97aa52, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '10fc029b_5898_4e3b_8432_a6303ea0e536'});

rule_1770 = new taginspector.datapulse.BaseRule({uniqueId: '1770', triggerTiming: 'Window Unload',  ruleVersion: 3, dataCollector: tiMonitor.dataCollector});
rule_1770.addFilter(condition_10fc029b_5898_4e3b_8432_a6303ea0e536);

condition_03b416fd_ea80_4006_a0c6_8a425eef6c84 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_9a5a5e14_fa98_556f_914e_bd66ca40a5f7, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '03b416fd_ea80_4006_a0c6_8a425eef6c84'});

rule_1663 = new taginspector.datapulse.BaseRule({uniqueId: '1663', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_1663.addFilter(condition_03b416fd_ea80_4006_a0c6_8a425eef6c84);

condition_55910a7f_1985_46c2_b7b3_5ea2cf092c51 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e5aeda4c_b080_517f_8a7f_2c4517707b73, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '55910a7f_1985_46c2_b7b3_5ea2cf092c51'});

condition_97922e0a_747e_4f34_9934_d3922596988d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_ef7bcbe9_ba97_561a_97a4_c6ab1c18a66a, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '97922e0a_747e_4f34_9934_d3922596988d'});

rule_2329 = new taginspector.datapulse.BaseRule({uniqueId: '2329', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2329.addFilter(condition_55910a7f_1985_46c2_b7b3_5ea2cf092c51);
rule_2329.addFilter(condition_97922e0a_747e_4f34_9934_d3922596988d);

condition_6fda32cd_0fcb_448b_b11f_25ee666cc877 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_307e31e6_8c54_591c_94f1_91be094027cc, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '6fda32cd_0fcb_448b_b11f_25ee666cc877'});

condition_f6f6407b_8f02_4dea_8e9a_634342f3681c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_80e057de_7085_5077_b981_ec4d05ffed0e, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'f6f6407b_8f02_4dea_8e9a_634342f3681c'});

rule_1577 = new taginspector.datapulse.BaseRule({uniqueId: '1577', triggerTiming: 'Window Unload',  ruleVersion: 6, dataCollector: tiMonitor.dataCollector});
rule_1577.addFilter(condition_6fda32cd_0fcb_448b_b11f_25ee666cc877);
rule_1577.addFilter(condition_f6f6407b_8f02_4dea_8e9a_634342f3681c);

condition_f2ebf11f_d346_4336_b1d9_0f5fe20b36cc = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e682109d_0e75_5b34_90cf_ec8618e93010, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'f2ebf11f_d346_4336_b1d9_0f5fe20b36cc'});

condition_001c4ba5_0a09_44e3_858d_816d0cffe2dd = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_85d56d1b_a403_5eb3_8ca4_23f12814aa80, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '001c4ba5_0a09_44e3_858d_816d0cffe2dd'});

rule_1791 = new taginspector.datapulse.BaseRule({uniqueId: '1791', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_1791.addFilter(condition_f2ebf11f_d346_4336_b1d9_0f5fe20b36cc);
rule_1791.addFilter(condition_001c4ba5_0a09_44e3_858d_816d0cffe2dd);

condition_24f2ca53_fe39_4c7e_94b8_f6602fec0a3b = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_a760bf2b_e13b_58ec_be94_34b61e81009f, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '24f2ca53_fe39_4c7e_94b8_f6602fec0a3b'});

rule_2291 = new taginspector.datapulse.BaseRule({uniqueId: '2291', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_2291.addFilter(condition_24f2ca53_fe39_4c7e_94b8_f6602fec0a3b);

condition_fc01cdaa_ffd4_4210_9a58_db01a42cd637 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_07e0eb5c_c8ef_5ca8_a2c7_1810f42d3d8a, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'fc01cdaa_ffd4_4210_9a58_db01a42cd637'});

rule_14036 = new taginspector.datapulse.BaseRule({uniqueId: '14036', triggerTiming: 'Window Unload',  ruleVersion: 3, dataCollector: tiMonitor.dataCollector});
rule_14036.addFilter(condition_fc01cdaa_ffd4_4210_9a58_db01a42cd637);

condition_52eb710a_41cf_446d_94b3_daba9d7fa569 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '.*', comparisonType: 'Matches Regex', uniqueId: '52eb710a_41cf_446d_94b3_daba9d7fa569'});

rule_9387 = new taginspector.datapulse.BaseRule({uniqueId: '9387', triggerTiming: 'Window Unload',  ruleVersion: 3, dataCollector: tiMonitor.dataCollector});
rule_9387.addFilter(condition_52eb710a_41cf_446d_94b3_daba9d7fa569);

condition_bb2a4838_3884_499e_a17c_c02959c88992 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_9e96ab4e_701f_5bea_9908_d679bb0960da, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'bb2a4838_3884_499e_a17c_c02959c88992'});

rule_12723 = new taginspector.datapulse.BaseRule({uniqueId: '12723', triggerTiming: 'Window Unload',  ruleVersion: 9, dataCollector: tiMonitor.dataCollector});
rule_12723.addFilter(condition_bb2a4838_3884_499e_a17c_c02959c88992);

condition_dd53f35f_a1df_4ea2_9acb_619534531e82 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_202d72e9_3893_54c0_9465_365201ae2914, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'dd53f35f_a1df_4ea2_9acb_619534531e82'});

rule_1608 = new taginspector.datapulse.BaseRule({uniqueId: '1608', triggerTiming: 'Window Unload',  ruleVersion: 5, dataCollector: tiMonitor.dataCollector});
rule_1608.addFilter(condition_dd53f35f_a1df_4ea2_9acb_619534531e82);

condition_d03cae7a_0144_42af_ac89_52fd153c8f6c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_7dff911f_c83c_5519_b68c_f13f89869a1d, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'd03cae7a_0144_42af_ac89_52fd153c8f6c'});

condition_4eeceb8c_9a2b_499f_a1d7_d98b48e922df = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_e8d684d7_d24e_5a90_81d1_cecfd0023848, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '4eeceb8c_9a2b_499f_a1d7_d98b48e922df'});

rule_1785 = new taginspector.datapulse.BaseRule({uniqueId: '1785', triggerTiming: 'Window Unload',  ruleVersion: 4, dataCollector: tiMonitor.dataCollector});
rule_1785.addFilter(condition_d03cae7a_0144_42af_ac89_52fd153c8f6c);
rule_1785.addFilter(condition_4eeceb8c_9a2b_499f_a1d7_d98b48e922df);

condition_38fcf0d3_3ccc_40da_838d_e1575acd29c5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '.*', comparisonType: 'Matches Regex', uniqueId: '38fcf0d3_3ccc_40da_838d_e1575acd29c5'});

rule_9388 = new taginspector.datapulse.BaseRule({uniqueId: '9388', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_9388.addFilter(condition_38fcf0d3_3ccc_40da_838d_e1575acd29c5);

condition_0a1d7db1_6cb7_4d08_b248_1d48f902c643 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_53ceeaf0_ebf5_5e04_83ef_5ec7840b23e9, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '0a1d7db1_6cb7_4d08_b248_1d48f902c643'});

rule_12319 = new taginspector.datapulse.BaseRule({uniqueId: '12319', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_12319.addFilter(condition_0a1d7db1_6cb7_4d08_b248_1d48f902c643);

condition_4fc08879_7b86_4718_9952_d7230bf602fe = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b222e344_89bf_5e44_ac64_686a7e695528, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '4fc08879_7b86_4718_9952_d7230bf602fe'});

rule_18436 = new taginspector.datapulse.BaseRule({uniqueId: '18436', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_18436.addFilter(condition_4fc08879_7b86_4718_9952_d7230bf602fe);

condition_b9efa0ca_b077_4faf_a29d_ae3433b08bff = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '.*', comparisonType: 'Matches Regex', uniqueId: 'b9efa0ca_b077_4faf_a29d_ae3433b08bff'});

rule_7600 = new taginspector.datapulse.BaseRule({uniqueId: '7600', triggerTiming: 'Window Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_7600.addFilter(condition_b9efa0ca_b077_4faf_a29d_ae3433b08bff);


condition_cf6e0863_42ac_4d6d_850e_4c01e3b1bd27 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: 'cf6e0863_42ac_4d6d_850e_4c01e3b1bd27'});
trigger_function_trigger_fe8425d8_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_cf6e0863_42ac_4d6d_850e_4c01e3b1bd27.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8425d8_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8425d8_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8425d8_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8425d8_6d9b_11ec_8726_1201f4358c27.addRule(rule_2305);
rule_2305.addTrigger(trigger_fe8425d8_6d9b_11ec_8726_1201f4358c27);

condition_89a98b54_3839_4e49_8c48_3b15a493de57 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '89a98b54_3839_4e49_8c48_3b15a493de57'});
trigger_function_trigger_fe842d12_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_89a98b54_3839_4e49_8c48_3b15a493de57.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe842d12_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe842d12_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe842d12_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe842d12_6d9b_11ec_8726_1201f4358c27.addRule(rule_2305);
rule_2305.addTrigger(trigger_fe842d12_6d9b_11ec_8726_1201f4358c27);

condition_bc2eea45_2303_4109_9626_9363c9be9d24 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: 'bc2eea45_2303_4109_9626_9363c9be9d24'});
trigger_function_trigger_fe843b2c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_bc2eea45_2303_4109_9626_9363c9be9d24.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe843b2c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe843b2c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe843b2c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe843b2c_6d9b_11ec_8726_1201f4358c27.addRule(rule_2422);
rule_2422.addTrigger(trigger_fe843b2c_6d9b_11ec_8726_1201f4358c27);

condition_b8a05a41_bdb5_477c_83a3_8b641b1dd334 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: 'b8a05a41_bdb5_477c_83a3_8b641b1dd334'});
trigger_function_trigger_fe84486a_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_b8a05a41_bdb5_477c_83a3_8b641b1dd334.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84486a_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84486a_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84486a_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84486a_6d9b_11ec_8726_1201f4358c27.addRule(rule_4235);
rule_4235.addTrigger(trigger_fe84486a_6d9b_11ec_8726_1201f4358c27);

condition_86b037ca_5d38_4354_aa37_8910a3c36ce3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '86b037ca_5d38_4354_aa37_8910a3c36ce3'});
trigger_function_trigger_fe844ec8_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_86b037ca_5d38_4354_aa37_8910a3c36ce3.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe844ec8_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe844ec8_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe844ec8_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe844ec8_6d9b_11ec_8726_1201f4358c27.addRule(rule_4235);
rule_4235.addTrigger(trigger_fe844ec8_6d9b_11ec_8726_1201f4358c27);

condition_ac2c28a0_4597_4595_a4ae_b330af192dc2 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'ac2c28a0_4597_4595_a4ae_b330af192dc2'});
trigger_function_trigger_fe845bfc_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_ac2c28a0_4597_4595_a4ae_b330af192dc2.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe845bfc_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe845bfc_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe845bfc_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe845bfc_6d9b_11ec_8726_1201f4358c27.addRule(rule_1772);
rule_1772.addTrigger(trigger_fe845bfc_6d9b_11ec_8726_1201f4358c27);

condition_4453c31c_0e10_47d9_b339_2900bb4f2e5a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Does not Equal', uniqueId: '4453c31c_0e10_47d9_b339_2900bb4f2e5a'});
trigger_function_trigger_fe846214_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_4453c31c_0e10_47d9_b339_2900bb4f2e5a.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe846214_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe846214_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe846214_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe846214_6d9b_11ec_8726_1201f4358c27.addRule(rule_1772);
rule_1772.addTrigger(trigger_fe846214_6d9b_11ec_8726_1201f4358c27);

condition_cd67c397_5b6a_43ab_a87b_beb25e5172ec = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'cd67c397_5b6a_43ab_a87b_beb25e5172ec'});
trigger_function_trigger_fe846caa_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_cd67c397_5b6a_43ab_a87b_beb25e5172ec.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe846caa_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe846caa_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe846caa_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe846caa_6d9b_11ec_8726_1201f4358c27.addRule(rule_9389);
rule_9389.addTrigger(trigger_fe846caa_6d9b_11ec_8726_1201f4358c27);

condition_d997678e_448d_4d7a_a273_2807a573913b = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: 'd997678e_448d_4d7a_a273_2807a573913b'});
trigger_function_trigger_fe84789e_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_d997678e_448d_4d7a_a273_2807a573913b.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84789e_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84789e_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84789e_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84789e_6d9b_11ec_8726_1201f4358c27.addRule(rule_2155);
rule_2155.addTrigger(trigger_fe84789e_6d9b_11ec_8726_1201f4358c27);

condition_a527bdac_7738_4829_bc84_d2c39e12916f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'a527bdac_7738_4829_bc84_d2c39e12916f'});
trigger_function_trigger_fe847ee8_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_a527bdac_7738_4829_bc84_d2c39e12916f.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe847ee8_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe847ee8_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe847ee8_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe847ee8_6d9b_11ec_8726_1201f4358c27.addRule(rule_2155);
rule_2155.addTrigger(trigger_fe847ee8_6d9b_11ec_8726_1201f4358c27);

condition_954af580_f64e_4ff5_ae11_ea3b17641fc9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7, comparisonVariable: 'Landing Page', comparisonType: 'Equals', uniqueId: '954af580_f64e_4ff5_ae11_ea3b17641fc9'});
trigger_function_trigger_fe84899c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_954af580_f64e_4ff5_ae11_ea3b17641fc9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84899c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84899c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84899c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84899c_6d9b_11ec_8726_1201f4358c27.addRule(rule_13178);
rule_13178.addTrigger(trigger_fe84899c_6d9b_11ec_8726_1201f4358c27);

condition_1f0d0227_a313_4c5c_a2ac_0008cb592bb3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '1f0d0227_a313_4c5c_a2ac_0008cb592bb3'});
trigger_function_trigger_fe848f8c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_1f0d0227_a313_4c5c_a2ac_0008cb592bb3.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe848f8c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe848f8c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe848f8c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe848f8c_6d9b_11ec_8726_1201f4358c27.addRule(rule_13178);
rule_13178.addTrigger(trigger_fe848f8c_6d9b_11ec_8726_1201f4358c27);

condition_dd05dec7_3e5e_4b32_b356_ded210512003 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_d112082e_8068_5e3b_8c02_57a4e0e1f205, comparisonVariable: 'thank|Thank', comparisonType: 'Matches Regex', uniqueId: 'dd05dec7_3e5e_4b32_b356_ded210512003'});
trigger_function_trigger_fe84a530_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_dd05dec7_3e5e_4b32_b356_ded210512003.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84a530_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84a530_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84a530_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84a530_6d9b_11ec_8726_1201f4358c27.addRule(rule_2280);
rule_2280.addTrigger(trigger_fe84a530_6d9b_11ec_8726_1201f4358c27);

condition_62cec4ba_8d44_4c33_87ad_6762b1eb8dd7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '62cec4ba_8d44_4c33_87ad_6762b1eb8dd7'});
trigger_function_trigger_fe84ad32_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_62cec4ba_8d44_4c33_87ad_6762b1eb8dd7.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84ad32_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84ad32_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84ad32_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84ad32_6d9b_11ec_8726_1201f4358c27.addRule(rule_2280);
rule_2280.addTrigger(trigger_fe84ad32_6d9b_11ec_8726_1201f4358c27);

condition_5f8c0335_a587_4b35_8ce5_7536dd28c464 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '5f8c0335_a587_4b35_8ce5_7536dd28c464'});
trigger_function_trigger_fe84b354_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5f8c0335_a587_4b35_8ce5_7536dd28c464.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84b354_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84b354_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84b354_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84b354_6d9b_11ec_8726_1201f4358c27.addRule(rule_2280);
rule_2280.addTrigger(trigger_fe84b354_6d9b_11ec_8726_1201f4358c27);

condition_12ec98e9_fb84_45d8_a3bd_a4f59dcc82a9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '12ec98e9_fb84_45d8_a3bd_a4f59dcc82a9'});
trigger_function_trigger_fe84bffc_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_12ec98e9_fb84_45d8_a3bd_a4f59dcc82a9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84bffc_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84bffc_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84bffc_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84bffc_6d9b_11ec_8726_1201f4358c27.addRule(rule_2716);
rule_2716.addTrigger(trigger_fe84bffc_6d9b_11ec_8726_1201f4358c27);

condition_c634c225_18c7_4b66_9803_453658c33574 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: 'c634c225_18c7_4b66_9803_453658c33574'});
trigger_function_trigger_fe84cccc_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c634c225_18c7_4b66_9803_453658c33574.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84cccc_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84cccc_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84cccc_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84cccc_6d9b_11ec_8726_1201f4358c27.addRule(rule_2304);
rule_2304.addTrigger(trigger_fe84cccc_6d9b_11ec_8726_1201f4358c27);

condition_97b94dd3_66a9_4cb9_b910_75ae6e041252 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '97b94dd3_66a9_4cb9_b910_75ae6e041252'});
trigger_function_trigger_fe84de9c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_97b94dd3_66a9_4cb9_b910_75ae6e041252.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84de9c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84de9c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84de9c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84de9c_6d9b_11ec_8726_1201f4358c27.addRule(rule_1771);
rule_1771.addTrigger(trigger_fe84de9c_6d9b_11ec_8726_1201f4358c27);

condition_5cc55716_d9d5_4e20_ad30_96abf0c03fcc = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '5cc55716_d9d5_4e20_ad30_96abf0c03fcc'});
trigger_function_trigger_fe84e4d2_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5cc55716_d9d5_4e20_ad30_96abf0c03fcc.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84e4d2_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84e4d2_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84e4d2_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84e4d2_6d9b_11ec_8726_1201f4358c27.addRule(rule_1771);
rule_1771.addTrigger(trigger_fe84e4d2_6d9b_11ec_8726_1201f4358c27);

condition_95bde59e_f585_4560_883a_9dd9a7f4c79f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: '95bde59e_f585_4560_883a_9dd9a7f4c79f'});
trigger_function_trigger_fe84f314_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_95bde59e_f585_4560_883a_9dd9a7f4c79f.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84f314_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84f314_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84f314_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84f314_6d9b_11ec_8726_1201f4358c27.addRule(rule_4234);
rule_4234.addTrigger(trigger_fe84f314_6d9b_11ec_8726_1201f4358c27);

condition_86a8de99_11bf_4e0a_bb67_448e89f0e720 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_d112082e_8068_5e3b_8c02_57a4e0e1f205, comparisonVariable: 'Thank You', comparisonType: 'Does not Equal', uniqueId: '86a8de99_11bf_4e0a_bb67_448e89f0e720'});
trigger_function_trigger_fe84f9ae_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_86a8de99_11bf_4e0a_bb67_448e89f0e720.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe84f9ae_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe84f9ae_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe84f9ae_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe84f9ae_6d9b_11ec_8726_1201f4358c27.addRule(rule_4234);
rule_4234.addTrigger(trigger_fe84f9ae_6d9b_11ec_8726_1201f4358c27);

condition_c20c66f9_d7b8_492e_b4f4_16ff2784924d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified|Unqualified', comparisonType: 'Matches Regex', uniqueId: 'c20c66f9_d7b8_492e_b4f4_16ff2784924d'});
trigger_function_trigger_fe8512fe_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c20c66f9_d7b8_492e_b4f4_16ff2784924d.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8512fe_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8512fe_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8512fe_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8512fe_6d9b_11ec_8726_1201f4358c27.addRule(rule_1751);
rule_1751.addTrigger(trigger_fe8512fe_6d9b_11ec_8726_1201f4358c27);

condition_d4ea71c9_68e5_4bd5_8338_3c33d42fc396 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'd4ea71c9_68e5_4bd5_8338_3c33d42fc396'});
trigger_function_trigger_fe85212c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_d4ea71c9_68e5_4bd5_8338_3c33d42fc396.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85212c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85212c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85212c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85212c_6d9b_11ec_8726_1201f4358c27.addRule(rule_1671);
rule_1671.addTrigger(trigger_fe85212c_6d9b_11ec_8726_1201f4358c27);

condition_1dbfa46e_d9ea_483f_be79_bfa9e5419b02 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: '1dbfa46e_d9ea_483f_be79_bfa9e5419b02'});
trigger_function_trigger_fe852726_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_1dbfa46e_d9ea_483f_be79_bfa9e5419b02.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe852726_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe852726_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe852726_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe852726_6d9b_11ec_8726_1201f4358c27.addRule(rule_1671);
rule_1671.addTrigger(trigger_fe852726_6d9b_11ec_8726_1201f4358c27);

condition_fedda59e_419e_4b4d_abab_33a5bdcd29ae = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'fedda59e_419e_4b4d_abab_33a5bdcd29ae'});
trigger_function_trigger_fe853982_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_fedda59e_419e_4b4d_abab_33a5bdcd29ae.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe853982_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe853982_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe853982_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe853982_6d9b_11ec_8726_1201f4358c27.addRule(rule_1664);
rule_1664.addTrigger(trigger_fe853982_6d9b_11ec_8726_1201f4358c27);

condition_7b6ece0e_0b4b_4db6_a699_6b43ee770a81 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '7b6ece0e_0b4b_4db6_a699_6b43ee770a81'});
trigger_function_trigger_fe85406c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_7b6ece0e_0b4b_4db6_a699_6b43ee770a81.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85406c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85406c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85406c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85406c_6d9b_11ec_8726_1201f4358c27.addRule(rule_1664);
rule_1664.addTrigger(trigger_fe85406c_6d9b_11ec_8726_1201f4358c27);

condition_7fcbc340_adbd_44e9_bd76_0a6500dbf76b = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '7fcbc340_adbd_44e9_bd76_0a6500dbf76b'});
trigger_function_trigger_fe854ec2_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_7fcbc340_adbd_44e9_bd76_0a6500dbf76b.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe854ec2_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe854ec2_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe854ec2_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe854ec2_6d9b_11ec_8726_1201f4358c27.addRule(rule_2717);
rule_2717.addTrigger(trigger_fe854ec2_6d9b_11ec_8726_1201f4358c27);

condition_3b1c435e_250b_4330_92f7_afa9c0f106be = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: '3b1c435e_250b_4330_92f7_afa9c0f106be'});
trigger_function_trigger_fe8554ee_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_3b1c435e_250b_4330_92f7_afa9c0f106be.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8554ee_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8554ee_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8554ee_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8554ee_6d9b_11ec_8726_1201f4358c27.addRule(rule_2717);
rule_2717.addTrigger(trigger_fe8554ee_6d9b_11ec_8726_1201f4358c27);

condition_1936abee_5b34_4166_8574_716db60dd0e5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: '1936abee_5b34_4166_8574_716db60dd0e5'});
trigger_function_trigger_fe8561dc_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_1936abee_5b34_4166_8574_716db60dd0e5.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8561dc_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8561dc_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8561dc_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8561dc_6d9b_11ec_8726_1201f4358c27.addRule(rule_1674);
rule_1674.addTrigger(trigger_fe8561dc_6d9b_11ec_8726_1201f4358c27);

condition_570130cb_b73f_4e1a_9eba_c70c46589023 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '570130cb_b73f_4e1a_9eba_c70c46589023'});
trigger_function_trigger_fe856e5c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_570130cb_b73f_4e1a_9eba_c70c46589023.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe856e5c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe856e5c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe856e5c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe856e5c_6d9b_11ec_8726_1201f4358c27.addRule(rule_1576);
rule_1576.addTrigger(trigger_fe856e5c_6d9b_11ec_8726_1201f4358c27);

condition_784d6e45_c7bb_4485_8675_87daabb88a7b = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '784d6e45_c7bb_4485_8675_87daabb88a7b'});
trigger_function_trigger_fe857a50_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_784d6e45_c7bb_4485_8675_87daabb88a7b.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe857a50_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe857a50_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe857a50_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe857a50_6d9b_11ec_8726_1201f4358c27.addRule(rule_2144);
rule_2144.addTrigger(trigger_fe857a50_6d9b_11ec_8726_1201f4358c27);

condition_a42b7718_0246_4987_a06c_c7d9158c5ae1 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_aa8a44c8_c134_5a4a_a6e5_3c042004c207, comparisonVariable: 'Edge', comparisonType: 'Does not Contain', uniqueId: 'a42b7718_0246_4987_a06c_c7d9158c5ae1'});
trigger_function_trigger_fe858054_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_a42b7718_0246_4987_a06c_c7d9158c5ae1.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe858054_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe858054_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe858054_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe858054_6d9b_11ec_8726_1201f4358c27.addRule(rule_2144);
rule_2144.addTrigger(trigger_fe858054_6d9b_11ec_8726_1201f4358c27);

condition_82a10ec1_4417_4410_931b_7ee1559a694b = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '82a10ec1_4417_4410_931b_7ee1559a694b'});
trigger_function_trigger_fe858612_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_82a10ec1_4417_4410_931b_7ee1559a694b.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe858612_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe858612_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe858612_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe858612_6d9b_11ec_8726_1201f4358c27.addRule(rule_2144);
rule_2144.addTrigger(trigger_fe858612_6d9b_11ec_8726_1201f4358c27);

condition_cff5d3ef_0c5b_45e2_a05c_21d8452a779d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: 'cff5d3ef_0c5b_45e2_a05c_21d8452a779d'});
trigger_function_trigger_fe859198_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_cff5d3ef_0c5b_45e2_a05c_21d8452a779d.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe859198_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe859198_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe859198_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe859198_6d9b_11ec_8726_1201f4358c27.addRule(rule_1574);
rule_1574.addTrigger(trigger_fe859198_6d9b_11ec_8726_1201f4358c27);

condition_029264a4_4b92_43e7_82cb_0de69e962b85 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '029264a4_4b92_43e7_82cb_0de69e962b85'});
trigger_function_trigger_fe85a07a_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_029264a4_4b92_43e7_82cb_0de69e962b85.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85a07a_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85a07a_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85a07a_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85a07a_6d9b_11ec_8726_1201f4358c27.addRule(rule_1770);
rule_1770.addTrigger(trigger_fe85a07a_6d9b_11ec_8726_1201f4358c27);

condition_0aad4bf6_2752_4c34_bcde_8cd44b42e530 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '0aad4bf6_2752_4c34_bcde_8cd44b42e530'});
trigger_function_trigger_fe85a714_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_0aad4bf6_2752_4c34_bcde_8cd44b42e530.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85a714_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85a714_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85a714_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85a714_6d9b_11ec_8726_1201f4358c27.addRule(rule_1770);
rule_1770.addTrigger(trigger_fe85a714_6d9b_11ec_8726_1201f4358c27);

condition_46283180_eca5_4f72_a42d_fe16a67b73db = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '46283180_eca5_4f72_a42d_fe16a67b73db'});
trigger_function_trigger_fe85b470_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_46283180_eca5_4f72_a42d_fe16a67b73db.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85b470_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85b470_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85b470_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85b470_6d9b_11ec_8726_1201f4358c27.addRule(rule_1663);
rule_1663.addTrigger(trigger_fe85b470_6d9b_11ec_8726_1201f4358c27);

condition_3dde9ad2_76e8_498a_b5fa_7fcc0c03fed5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '3dde9ad2_76e8_498a_b5fa_7fcc0c03fed5'});
trigger_function_trigger_fe85c8a2_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_3dde9ad2_76e8_498a_b5fa_7fcc0c03fed5.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85c8a2_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85c8a2_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85c8a2_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85c8a2_6d9b_11ec_8726_1201f4358c27.addRule(rule_2329);
rule_2329.addTrigger(trigger_fe85c8a2_6d9b_11ec_8726_1201f4358c27);

condition_959fbda2_c42c_48e3_b9fd_539d36ee5cc9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '959fbda2_c42c_48e3_b9fd_539d36ee5cc9'});
trigger_function_trigger_fe85cece_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_959fbda2_c42c_48e3_b9fd_539d36ee5cc9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85cece_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85cece_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85cece_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85cece_6d9b_11ec_8726_1201f4358c27.addRule(rule_2329);
rule_2329.addTrigger(trigger_fe85cece_6d9b_11ec_8726_1201f4358c27);

condition_7d27a946_ffde_4121_9643_4f00087269f9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Matches Regex', uniqueId: '7d27a946_ffde_4121_9643_4f00087269f9'});
trigger_function_trigger_fe85e06c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_7d27a946_ffde_4121_9643_4f00087269f9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85e06c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85e06c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85e06c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85e06c_6d9b_11ec_8726_1201f4358c27.addRule(rule_1577);
rule_1577.addTrigger(trigger_fe85e06c_6d9b_11ec_8726_1201f4358c27);

condition_f1c25eee_8cd8_4c7a_81ff_0073c49d2118 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'f1c25eee_8cd8_4c7a_81ff_0073c49d2118'});
trigger_function_trigger_fe85f642_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_f1c25eee_8cd8_4c7a_81ff_0073c49d2118.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85f642_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85f642_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85f642_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85f642_6d9b_11ec_8726_1201f4358c27.addRule(rule_1791);
rule_1791.addTrigger(trigger_fe85f642_6d9b_11ec_8726_1201f4358c27);

condition_b768c5d3_2d48_41af_ad5e_93394e9200f9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: 'b768c5d3_2d48_41af_ad5e_93394e9200f9'});
trigger_function_trigger_fe85fc8c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_b768c5d3_2d48_41af_ad5e_93394e9200f9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe85fc8c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe85fc8c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe85fc8c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe85fc8c_6d9b_11ec_8726_1201f4358c27.addRule(rule_1791);
rule_1791.addTrigger(trigger_fe85fc8c_6d9b_11ec_8726_1201f4358c27);

condition_3c2f0624_230d_450e_987b_b5a428053794 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '3c2f0624_230d_450e_987b_b5a428053794'});
trigger_function_trigger_fe86089e_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_3c2f0624_230d_450e_987b_b5a428053794.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe86089e_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe86089e_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe86089e_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe86089e_6d9b_11ec_8726_1201f4358c27.addRule(rule_2291);
rule_2291.addTrigger(trigger_fe86089e_6d9b_11ec_8726_1201f4358c27);

condition_73725b35_2846_4c20_9b4d_b66a4b18029a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '73725b35_2846_4c20_9b4d_b66a4b18029a'});
trigger_function_trigger_fe8616ae_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_73725b35_2846_4c20_9b4d_b66a4b18029a.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8616ae_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8616ae_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8616ae_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8616ae_6d9b_11ec_8726_1201f4358c27.addRule(rule_14036);
rule_14036.addTrigger(trigger_fe8616ae_6d9b_11ec_8726_1201f4358c27);

condition_76d61ab1_9b19_4535_bff2_82713847b63a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '76d61ab1_9b19_4535_bff2_82713847b63a'});
trigger_function_trigger_fe861cd0_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_76d61ab1_9b19_4535_bff2_82713847b63a.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe861cd0_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe861cd0_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe861cd0_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe861cd0_6d9b_11ec_8726_1201f4358c27.addRule(rule_14036);
rule_14036.addTrigger(trigger_fe861cd0_6d9b_11ec_8726_1201f4358c27);

condition_07d3f4a4_8c52_4bdc_99d0_23569dc8b562 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_aa8a44c8_c134_5a4a_a6e5_3c042004c207, comparisonVariable: '.*Mobile.*Safari.*', comparisonType: 'Matches Regex', uniqueId: '07d3f4a4_8c52_4bdc_99d0_23569dc8b562'});
trigger_function_trigger_fe8627e8_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_07d3f4a4_8c52_4bdc_99d0_23569dc8b562.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8627e8_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8627e8_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8627e8_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8627e8_6d9b_11ec_8726_1201f4358c27.addRule(rule_9387);
rule_9387.addTrigger(trigger_fe8627e8_6d9b_11ec_8726_1201f4358c27);

condition_466f6835_d923_4553_a923_b1066b2dcd45 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: '466f6835_d923_4553_a923_b1066b2dcd45'});
trigger_function_trigger_fe863558_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_466f6835_d923_4553_a923_b1066b2dcd45.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe863558_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe863558_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe863558_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe863558_6d9b_11ec_8726_1201f4358c27.addRule(rule_12723);
rule_12723.addTrigger(trigger_fe863558_6d9b_11ec_8726_1201f4358c27);

condition_c3a92dd2_d31d_4a5f_ae69_c79c197b2851 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_0ccd7c93_8bd2_5f15_b0b9_e1df96829ed7, comparisonVariable: 'Landing Page', comparisonType: 'Equals', uniqueId: 'c3a92dd2_d31d_4a5f_ae69_c79c197b2851'});
trigger_function_trigger_fe863b66_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c3a92dd2_d31d_4a5f_ae69_c79c197b2851.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe863b66_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe863b66_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe863b66_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe863b66_6d9b_11ec_8726_1201f4358c27.addRule(rule_12723);
rule_12723.addTrigger(trigger_fe863b66_6d9b_11ec_8726_1201f4358c27);

condition_5807613d_0139_4170_81b8_77fede07c7a7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '5807613d_0139_4170_81b8_77fede07c7a7'});
trigger_function_trigger_fe86419c_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5807613d_0139_4170_81b8_77fede07c7a7.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe86419c_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe86419c_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe86419c_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe86419c_6d9b_11ec_8726_1201f4358c27.addRule(rule_12723);
rule_12723.addTrigger(trigger_fe86419c_6d9b_11ec_8726_1201f4358c27);

condition_956eeed9_cf5e_4bc4_b618_8c8e82f17ed9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '956eeed9_cf5e_4bc4_b618_8c8e82f17ed9'});
trigger_function_trigger_fe864fc0_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_956eeed9_cf5e_4bc4_b618_8c8e82f17ed9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe864fc0_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe864fc0_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe864fc0_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe864fc0_6d9b_11ec_8726_1201f4358c27.addRule(rule_1608);
rule_1608.addTrigger(trigger_fe864fc0_6d9b_11ec_8726_1201f4358c27);

condition_eca3fa5a_515c_4441_9cae_e84cc6513d67 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b65f7a28_b1cb_534c_89fe_0b52895e705d, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'eca3fa5a_515c_4441_9cae_e84cc6513d67'});
trigger_function_trigger_fe8661d6_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_eca3fa5a_515c_4441_9cae_e84cc6513d67.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8661d6_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8661d6_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8661d6_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8661d6_6d9b_11ec_8726_1201f4358c27.addRule(rule_1785);
rule_1785.addTrigger(trigger_fe8661d6_6d9b_11ec_8726_1201f4358c27);

condition_076085f6_3df4_469f_8c70_5ae9f22cfe4d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44031c13_b398_5391_a0b5_da2a61be6cca, comparisonVariable: 'US', comparisonType: 'Equals', uniqueId: '076085f6_3df4_469f_8c70_5ae9f22cfe4d'});
trigger_function_trigger_fe8667ee_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_076085f6_3df4_469f_8c70_5ae9f22cfe4d.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8667ee_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8667ee_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8667ee_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8667ee_6d9b_11ec_8726_1201f4358c27.addRule(rule_1785);
rule_1785.addTrigger(trigger_fe8667ee_6d9b_11ec_8726_1201f4358c27);

condition_dace2998_dc1c_4407_bbdd_de3a7b134be1 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_aa8a44c8_c134_5a4a_a6e5_3c042004c207, comparisonVariable: '(?!.*Mobile).*Version.*Safari.*', comparisonType: 'Matches Regex', uniqueId: 'dace2998_dc1c_4407_bbdd_de3a7b134be1'});
trigger_function_trigger_fe867374_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_dace2998_dc1c_4407_bbdd_de3a7b134be1.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe867374_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe867374_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe867374_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe867374_6d9b_11ec_8726_1201f4358c27.addRule(rule_9388);
rule_9388.addTrigger(trigger_fe867374_6d9b_11ec_8726_1201f4358c27);

condition_cc4588d1_b7da_4ad9_b2b4_8abf7d49b8e1 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_9669f82d_3337_5ce0_81ca_151c269d8419, comparisonVariable: 'Qualified', comparisonType: 'Equals', uniqueId: 'cc4588d1_b7da_4ad9_b2b4_8abf7d49b8e1'});
trigger_function_trigger_fe8681e8_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_cc4588d1_b7da_4ad9_b2b4_8abf7d49b8e1.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe8681e8_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe8681e8_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe8681e8_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe8681e8_6d9b_11ec_8726_1201f4358c27.addRule(rule_12319);
rule_12319.addTrigger(trigger_fe8681e8_6d9b_11ec_8726_1201f4358c27);

condition_c3b45836_3d4e_48df_9257_30d140f3e3cb = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_900d90a4_368e_506e_b876_f577b91fa421, comparisonVariable: 'Landing Page', comparisonType: 'Equals', uniqueId: 'c3b45836_3d4e_48df_9257_30d140f3e3cb'});
trigger_function_trigger_fe868dc8_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c3b45836_3d4e_48df_9257_30d140f3e3cb.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe868dc8_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe868dc8_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe868dc8_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe868dc8_6d9b_11ec_8726_1201f4358c27.addRule(rule_18436);
rule_18436.addTrigger(trigger_fe868dc8_6d9b_11ec_8726_1201f4358c27);

condition_6fa54011_0ac1_4f68_89e5_7e331cb10759 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '6fa54011_0ac1_4f68_89e5_7e331cb10759'});
trigger_function_trigger_fe869804_6d9b_11ec_8726_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_6fa54011_0ac1_4f68_89e5_7e331cb10759.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_fe869804_6d9b_11ec_8726_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_fe869804_6d9b_11ec_8726_1201f4358c27, uniqueId: 'fe869804_6d9b_11ec_8726_1201f4358c27', triggerFired: false });
trigger_fe869804_6d9b_11ec_8726_1201f4358c27.addRule(rule_7600);
rule_7600.addTrigger(trigger_fe869804_6d9b_11ec_8726_1201f4358c27);


		function _asyncFireTrigger(tgr){
			return new Promise(function(resolve, reject){
				tgr.initTrigger(resolve);
			});
		}

		function initUnloadTriggers(){
			var tiTriggerListInit = [];
			tiMonitor.ruleVariableCache.updateCache(100);
			tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8425d8_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe842d12_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe843b2c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84486a_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe844ec8_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe845bfc_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe846214_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe846caa_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84789e_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe847ee8_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84899c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe848f8c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84a530_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84ad32_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84b354_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84bffc_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84cccc_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84de9c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84e4d2_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84f314_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe84f9ae_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8512fe_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85212c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe852726_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe853982_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85406c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe854ec2_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8554ee_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8561dc_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe856e5c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe857a50_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe858054_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe858612_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe859198_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85a07a_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85a714_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85b470_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85c8a2_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85cece_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85e06c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85f642_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe85fc8c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe86089e_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8616ae_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe861cd0_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8627e8_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe863558_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe863b66_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe86419c_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe864fc0_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8661d6_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8667ee_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe867374_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe8681e8_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe868dc8_6d9b_11ec_8726_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_fe869804_6d9b_11ec_8726_1201f4358c27));

			Promise.all(tiTriggerListInit).then(function(values){
			});
		}

		window.addEventListener("unload", function (event) {
			tiMonitor.sendData.fire();
		});

		window.addEventListener("pagehide", function (event) {
			tiMonitor.fireValidationRules();
		});

		window.addEventListener("beforeunload", function (event) {
			tiMonitor.fireValidationRules();
		});

		document.addEventListener('tiSimulateUnload', function (e) {
			initUnloadTriggers();
		}, false);


	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.fireValidationRules = function (){
	try {
		//fire unload triggers:
		if(typeof Event == "function" && tiMonitor.sendData.pageBeingSampled == false){
			var event = new Event("tiSimulateUnload");
			tiMonitor.sendData.handleUnload();
			document.dispatchEvent(event);
		}
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.enableEnhancedTagSupport = function (){
	try {
		scInterval = 0;
		var tiScPostSupport = setInterval(function() {
			scInterval = scInterval + 100;
			if(scInterval >= 20000){
				clearInterval(tiScPostSupport);
			}
			if(typeof(s) != "undefined"){
				if (s.hasOwnProperty("registerPostTrackCallback")){
					s.registerPostTrackCallback(function(requestUrl) {
						if(requestUrl.length > 2048 || navigator.userAgent.indexOf("iPhone") > -1){
							tiMonitor.sendData.createFakeReq(requestUrl);
						}
					});
					clearInterval(tiScPostSupport);
				}
			}
		}, 100);
		fbInterval = 0;
		var tiFbPostSupport = setInterval(function() {
			fbInterval = fbInterval + 100;
			if(fbInterval >= 20000){
				clearInterval(tiFbPostSupport);
			}
			if(typeof(fbq) != "undefined"){
				if (fbq.hasOwnProperty("on")){
					clearInterval(tiFbPostSupport);
					fbq.on( "fired", function(reqMethod, reqData) {
						if(reqMethod == "POST"){
							params = []
							for(x=1;x<reqData["_params"].length;x++){
								param = reqData["_params"][x];
								params.push(encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value));
							}
							fbUrl = "https://www.facebook.com/tr/?" + params.join('&');
							tiMonitor.sendData.createFakeReq(fbUrl);
						}
					});
				}
			}
		}, 100);
	
		function initGaTracker(tracker){
			var globalSendTaskName = '_' + tracker.get('trackingId') + '_sendHitTask';
			var originalSendHitTask = window[globalSendTaskName] = window[globalSendTaskName] || tracker.get('sendHitTask');

			tracker.set('sendHitTask', function(model) {
				globalSendTaskName2 = '_' + model.get('trackingId') + '_sendHitTask';
				originalSendHitTask2 = window[globalSendTaskName2];
				originalSendHitTask2(model);
				hitPayload = model.get('hitPayload');
				fullHitUrl = "https://www.google-analytics.com/collect?" + hitPayload
				if(hitPayload.length > 2036 && hitPayload.length <= 8192){
					tiMonitor.sendData.createFakeReq(fullHitUrl);
				}
			});
		}
		gaInterval = 0;
		tiGaPostSupport = setInterval(function() {
			gaInterval = gaInterval + 500;
			if(gaInterval >= 20000){
				clearInterval(tiGaPostSupport);
			}
			if(typeof(ga) != "undefined"){
				if (ga.hasOwnProperty("getAll")){
					if(ga.getAll().length > 0){
						for(x=0; x<ga.getAll().length; x++){
						initGaTracker(ga.getAll()[x])
						}
						clearInterval(tiGaPostSupport);
					}
				}
			}
		}, 500);
	}catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.initializeNewPage = function (){
	try {
		tiMonitor.windowUnloadEvent = false;
		tiMonitor.sendData.sentUnload = false;
		tiMonitor.sendData.pageBeingSampled = tiMonitor.sendData.shouldSamplePage();
		newPageId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});
		tiMonitor.sendData.pageId = newPageId;
		tiMonitor.dataCollector.pageId = newPageId;
		
		tiMonitor.dataCollector.startTime = Date.now();
		// tiMonitor.dataCollector.identifiedRequests = {};
		tiMonitor.dataCollector.resetIdentifiedRequests();
		tiMonitor.dataCollector.offsetTime = performance.now();
		tiMonitor.sendData.currentUrl = window.location.href;
		tiMonitor.sendData.preventFiringValidationRules = false;
		tiMonitor.dataCollector.resource_size = 0;
		taginspector.datapulse.trigger.BaseTrigger.resetFiredTriggers();
		taginspector.datapulse.pagevariable.BaseVariable.clearCache();
		tiMonitor.spaRuleObjectLengthTracker.incrimentSpaPageview();
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.enableSpaSupport = function() {
	var portRegex = /:[0-9]+$/;
	var kd = {};
	ld = function (a, b) {
		kd[a] = kd[a] || [];
		kd[a][b] = !0
	}
	getWindowParam = function(a, b, c) {
		b && (void 0 === window[a] || c && !window[a]) && (window[a] = b);
		return window[a]
	}
	getUrl = function () {
		return document.location.href;
	}

	getUrlwithoutFragment = function (a) {
		return stripFragmentFromUrl(getUrlDict(a))
	}
	stripFragmentFromUrl = function (a) {
		var b = "";
		if (a && a.href) {
			var c = a.href.indexOf("#");
			b = 0 > c ? a.href : a.href.substr(0, c)
		}
		return b
	}
	getUrlDict = function (a) {
		var b = document.createElement("a");
		a && (b.href = a);
		var c = b.pathname;
		"/" !== c[0] && (a || ld("TAGGING", 1), c = "/" + c);
		var d = b.hostname.replace(portRegex, "");
		return {
			href: b.href,
			protocol: b.protocol,
			host: b.host,
			hostname: d,
			pathname: c,
			search: b.search,
			hash: b.hash,
			port: b.port
		}
	}
	getUrlComponent = function (urlDict, uriComponent, c, d, e) {
		uriComponent && (uriComponent = String(uriComponent).toLowerCase());
		if ("protocol" === uriComponent || "port" === uriComponent){
			urlDict.protocol = stripSemicolon(urlDict.protocol) || stripSemicolon(document.location.protocol);
		}
		"port" === uriComponent ? urlDict.port = String(Number(urlDict.hostname ? urlDict.port : document.location.port) || ("http" == urlDict.protocol ? 80 : "https" == urlDict.protocol ? 443 : "")) : "host" === uriComponent && (urlDict.hostname = (urlDict.hostname || document.location.hostname).replace(portRegex, "").toLowerCase());
		var uriComponentCopy = uriComponent, h, k = stripSemicolon(urlDict.protocol);
		uriComponentCopy && (uriComponentCopy = String(uriComponentCopy).toLowerCase());
		switch (uriComponentCopy) {
			case "url_no_fragment":
				result = stripFragmentFromUrl(a);
				break;
			case "protocol":
				result = k;
				break;
			case "host":
				result = urlDict.hostname.replace(portRegex, "").toLowerCase();
				if (c) {
					var l = /^www\d*\./.exec(result);
					l && l[0] && (result = result.substr(l[0].length))
				}
				break;
			case "port":
				result = String(Number(urlDict.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
				break;
			case "path":
				urlDict.pathname || urlDict.hostname || ld("TAGGING", 1);
				result = "/" == urlDict.pathname.substr(0, 1) ? urlDict.pathname : "/" + urlDict.pathname;
				var m = result.split("/");
				0 <= n(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
				result = m.join("/");
				break;
			case "query":
				result = urlDict.search.replace("?", "");
				e && (result = getQueryparameters(result, e, void 0));
				break;
			case "extension":
				var q = urlDict.pathname.split(".");
				result = 1 < q.length ? q[q.length - 1] : "";
				result = result.split("/")[0];
				break;
			case "fragment":
				result = urlDict.hash.replace("#", "");
				break;
			default:
				result = a && urlDict.href
		}
		return result
	}
	getUrlFragment = function (a) {
		return getUrlComponent(getUrlDict(a), "fragment")
	}
	stripSemicolon = function (a) {
		return a ? a.replace(":", "").toLowerCase() : ""
	}
	isFunction = function(a) {
		return "function" == typeof a
	}
	getQueryparameters = function(a, b, c) {
		for (var d = a.split("&"), e = 0; e < d.length; e++) {
			var f = d[e].split("=");
			if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
				var h = f.slice(1).join("=");
				return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
			}
		}
	}
	addListener = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
	}
	var avb = function(){
		function getNewUrlOnEventCallback(event) {
			return event.target && event.target.location && event.target.location.href ? event.target.location.href : getUrl()
		}
		function listenToHashChangeEvents(winObj, histObj) {
			addListener(winObj, "hashchange", function(event) {
				var newUrl = getNewUrlOnEventCallback(event);
				histObj({
					source: "hashchange",
					state: null,
					url: getUrlwithoutFragment(newUrl),
					L: getUrlFragment(newUrl)
				})
			})
		} 
		function listenToPopstateEvents(winObj, histObj) {
			addListener(winObj, "popstate", function(event) {
				var newUrl = getNewUrlOnEventCallback(event);
				histObj({
					source: "popstate",
					state: event.state,
					url: getUrlwithoutFragment(newUrl),
					L: getUrlFragment(newUrl)
				})
			})
		}
		function bindToHistoryEvent(eventName, windowObj, historyObj) {
			var windowHistoryObj = windowObj.history;
			var eventType = windowHistoryObj[eventName];
			if (isFunction(eventType))
				try {
					windowHistoryObj[eventName] = function (q, r, u) {
						eventType.apply(windowHistoryObj, [].slice.call(arguments, 0));
						historyObj({
							source: eventName,
							state: q,
							url: getUrlwithoutFragment(getUrl()),
							L: getUrlFragment(getUrl())
						})
					}
				} catch (q) {}
		}	
		function orgHistoryObj() {
			var historyDict = {
				source: null,
				state: getWindowParam("history").state || null,
				url: getUrlwithoutFragment(getUrl()),
				L: getUrlFragment(getUrl())
			};
			return function(winObj) {
				var l = {};
				l[historyDict.source] = !0;
				l[winObj.source] = !0;
				if (!l.popstate || !l.hashchange || historyDict.L != winObj.L) {
					if(historyDict.url !== undefined && winObj.url !== undefined){
						var historyDictUrlNoQs = (historyDict.url).split("?")[0];
						var winObjUrlNoQs = (winObj.url).split("?")[0];
						if (historyDictUrlNoQs !== winObjUrlNoQs) {
							historyDict = winObj;
							if(performance.now() - tiMonitor.dataCollector.offsetTime > 200){
								tiMonitor.ruleVariableCache.updateCache(100);
								tiMonitor.ruleVariableCache.spaRulesFiring = true;
								setTimeout(function() {
									tiMonitor.fireValidationRules();
									tiMonitor.sendData.pageComplete();
									tiMonitor.ruleVariableCache.spaRulesFiring = false;
									tiMonitor.initializeNewPage();
									tiMonitor.sendData.pageComplete();
								}, 200);
							}
						}
					}
				}
			}
		}(function(f) {
			f()
		})(function() {
			var winObj = getWindowParam("self");
			var histObj = orgHistoryObj();
			listenToHashChangeEvents(winObj, histObj);
			listenToPopstateEvents(winObj, histObj);
			bindToHistoryEvent("pushState", winObj, histObj);
			bindToHistoryEvent("replaceState", winObj, histObj);
		})
	}();
};

tiMonitor.initializeMain = function() {
	if(tiMonitor.sendData.suportedBrowser() == true && tiMonitor.sendData.isInIframe() == false){
		if(tiMonitor.sendData.initialized == false){
			tiMonitor.sendData.initialized = true;
			if(tiMonitor.sendData.shouldSamplePage() == false && tiMonitor.sendData.isBufferFull() == false){
				if(false){
					tiMonitor.dataCollector.session = taginspector.datapulse.Session.setupSession({"containerId": "5b0daa7cbdd611e99951126a79efb69e"});
				}
				tiMonitor.sendData.fullBufferEventListener();
				tiMonitor.spaRuleObjectLengthTracker.incrimentSpaPageview();

				if(tiMonitor.sendData.isPerformanceObserverSupported() == true){
					var iteratePerformanceCompleted = false;
					while(iteratePerformanceCompleted == false){
						tiMonitor.sendData.iteratePerformance();
						pe = performance.getEntriesByType("resource");
						if(tiMonitor.sendData.lastPerformanceObjLength == pe.length){
							iteratePerformanceCompleted = true;
						}
					}
					var observer = new PerformanceObserver(tiMonitor.sendData.performanceObserverCallback);
					observer.observe({entryTypes: ['resource']});

				}else{
					setInterval(function () {tiMonitor.sendData.iteratePerformance()}, 1000);
				}
				tiMonitor.enableEnhancedTagSupport();
				try {
					tiMonitor.enableSpaSupport();
				} catch (err) {
					console.log(err.message);
					jeErrorObj = {
						message: err.message
					};
					tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
				}
				var tiDomLoadInterval = setInterval(function () {
					isDomLoaded = tiMonitor.sendData.waitForDomLoad();
					if(isDomLoaded){
						clearInterval(tiDomLoadInterval);
					}
				}, 1000);
				setInterval(function () {tiMonitor.sendData.fire()}, 1000);
			}
		}
	}
}
tiMonitor.initializeMain();
 }