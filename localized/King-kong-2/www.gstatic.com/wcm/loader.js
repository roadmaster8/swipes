(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var b=this||self,f=/^[\w+/_-]+[=]{0,2}$/,g=null,h=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&f.test(a)?a:""},l=function(a,c){function d(){}d.prototype=c.prototype;a.j=c.prototype;a.prototype=new d;a.prototype.constructor=a;a.i=function(k,e,S){for(var G=Array(arguments.length-2),n=2;n<arguments.length;n++)G[n-2]=arguments[n];return c.prototype[e].apply(k,G)}},m=function(a){return a};function p(a){if(Error.captureStackTrace)Error.captureStackTrace(this,p);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))}l(p,Error);p.prototype.name="CustomError";var q=function(a,c){a=a.split("%s");for(var d="",k=a.length-1,e=0;e<k;e++)d+=a[e]+(e<c.length?c[e]:"%s");p.call(this,d+a[k])};l(q,p);q.prototype.name="AssertionError";var r=function(a,c){throw new q("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var t;var w=function(a,c){this.g=a===u&&c||"";this.h=v};w.prototype.toString=function(){return"Const{"+this.g+"}"};var v={},u={};var y=function(a,c){this.g=c===x?a:""};y.prototype.toString=function(){return this.g+""};
var z=function(){var a=new w(u,"//www.gstatic.com/call-tracking/call-tracking_7.js");a instanceof w&&a.constructor===w&&a.h===v?a=a.g:(r("expected object of type Const, got '"+a+"'"),a="type_error:Const");if(void 0===t){var c=null;var d=b.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:m,createScript:m,createScriptURL:m})}catch(k){b.console&&b.console.error(k.message)}t=c}else t=c}a=(c=t)?c.createScriptURL(a):a;return new y(a,x)},x={};var A=[0],B=[],C=z(),D=z();if(window._googWcmAk){var E=parseInt(window._googWcmAk,10);-1===A.indexOf(E)&&(0<=B.indexOf(E)||0>E%100)&&(D=C)}var F=document.createElement("script");F.async=1;var H=D,I;a:{try{var J=F&&F.ownerDocument,K=J&&(J.defaultView||J.parentWindow);K=K||b;if(K.Element&&K.Location){I=K;break a}}catch(a){}I=null}
if(I&&"undefined"!=typeof I.HTMLScriptElement&&(!F||!(F instanceof I.HTMLScriptElement)&&(F instanceof I.Location||F instanceof I.Element))){var L;var M=typeof F;if("object"==M&&null!=F||"function"==M)try{L=F.constructor.displayName||F.constructor.name||Object.prototype.toString.call(F)}catch(a){L="<object could not be stringified>"}else L=void 0===F?"undefined":null===F?"null":typeof F;r("Argument is not a %s (or a non-Element, non-Location mock); got: %s","HTMLScriptElement",L)}var N;
if(H instanceof y&&H.constructor===y)N=H.g;else{var O=typeof H;r("expected object of type TrustedResourceUrl, got '"+H+"' of type "+("object"!=O?O:H?Array.isArray(H)?"array":O:"null"));N="type_error:TrustedResourceUrl"}F.src=N;var P;var Q=F.ownerDocument&&F.ownerDocument.defaultView;Q&&Q!=b?P=h(Q.document):(null===g&&(g=h(b.document)),P=g);P&&F.setAttribute("nonce",P);var R=document.getElementsByTagName("script")[0];F.setAttribute("nonce",R.nonce||R.getAttribute("nonce"));
R.parentNode.insertBefore(F,R);}).call(this);