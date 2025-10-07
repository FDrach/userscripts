// ==UserScript==
// @name         Web Console Utilities
// @match        *://*/*
// @version      1.3
// @description  Injects some helper functions into the window object, making them accessible in the developer console for any website.
// @author       Drachenberg Franco
// @grant        unsafeWindow
// @updateURL    https://github.com/FDrach/userscripts/raw/refs/heads/master/WebConsoleUtilities.user.js
// @downloadURL  https://github.com/FDrach/userscripts/raw/refs/heads/master/WebConsoleUtilities.user.js
// @icon         data:image/gif;base64,R0lGODlhEAAQAPQQAOu+Z/TahvTuqtOhZ8yVjevAr4RPVP/r4pdkUYRgPLuBXcyqld3FqPXUyHNWVJ6Ef9bHsq94W/LFwundytzMuah1euTcuGVISvLFrwAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCAAQACwAAAAAEAAQAAAFbyAkjlAABGQ6CkGLquMAyAsAx0NDTcstAoqGcOArLSoLQssnWCwYjAXLlhoEFhMKg3ASpAACwcCJUCAQBALJtdASzoSBehQQEB7QhSKiII4AgAZnEWV9VDFmCBcOCUUQBQULQo4FGAUHB5QSlw0qIQAh+QQJDQAOACwDAAAACwAQAAAFZaAjBkAgnqIgBCwqAsCwwC6wFBI1iIQ4EI0GBuBAnAayBQFhPAUYjQljYHIyrgxFK7W4EhTUUaBLYXzDAsaju2AqGKUIImFIKCKRxwCQSFwMCBE7JzdADS4OBQ0LBweIDg0SjSghACH5BAkNABEALAQAAAAKABAAAAVeYCQCgWhGghCsZwQAwxIAIhENQ9FQQ4Qgt0FjCPiZYhAK8MRIMnrHAIPCUAh6PcGCQVAMaKQFBcL9qgKPhfo3ELwSiIQBoUAQAIqEwzGviYYLBQwtBwc6LRENhg0nIQAh+QQJCwAQACwCAAAADQAQAAAFYyAkigAQjKgoBOyZQuUALMALDUMjSYMNKYVGY+EDEI41m4UxaVQQUJSJQSUQEUTTasFYVBKJh6hFpSoGitEq8HgsFufRgDUwQBOIHmoQeTocCT4HBwwFDIIHFBIFPhMHEg0pIQAh+QQJCwAUACwBAAAADgAQAAAFaiAljkEAjOgoBGuQjgAwDMspEug8Nc0iJqmZhDdIAFOCxWNB8L0oAQYEwhi8BiVaY4JDlQQChYLBQFhhJRmBvEAoRKUsbfmIIHDxwEBhQCQQESgxehFGDn1PAAsHEktOTwcHDAVPI5GTKCEAIfkECQsADwAsAAAAAA8AEAAABWvgI45PYJKoKAhmkI4DAAwDMy4ovUwHMzwJBGq2ODQIwBRLQVgsCMiUqbZg4KSBgWLRsOYCAp+WASH8Ri3amICInFtZXZUdEQ3S2ogh4UhUSABTCggJfAYpWjQSXU0vIwdGBQWOIpASBTYiIQAh+QQJDQAQACwBAAAADgAQAAAFbCAkjgEAjCgpBGw6DuawMCdEpHJzFAOEIKjBgNFoMERAlImwWDCTKAGD0ly4IICAbMI4kiCC1UBBoaZYWhnjgVCoSmPCg0GAZgXjyC/hMNwgAyx5CAYOCQlBQjkSTBVXEDoNBQVWVxIHXAUoIQAh+QQFCgATACwCAAAADgAQAAAFbuAkigEAjOgoCEGbjgMwDAvzwktzFGNFwAPGobEYIVIBwmIxmCCOKQtjAZm+ACVGY+oiBVYLhYSi+Aa8LRqDgIhg0YDIY1lBEAQibGDwTCQQNGcTegpPDgYJTSgzAw1EDDw3EzoFDRKSkwdalyghADs=
// ==/UserScript==

(function() {
    'use strict';

    const Base64=(function(){const b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const a256="";const r64=[];const r256=[];let i=0;const UTF8={encode:function(strUni){return strUni.replace(/[\u0080-\u07ff]/g,function(c){var cc=c.charCodeAt(0);return String.fromCharCode(0xc0|(cc>>6),0x80|(cc&0x3f));}).replace(/[\u0800-\uffff]/g,function(c){var cc=c.charCodeAt(0);return String.fromCharCode(0xe0|(cc>>12),0x80|((cc>>6)&0x3f),0x80|(cc&0x3f));});},decode:function(strUtf){return strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(c){var cc=((c.charCodeAt(0)&0x0f)<<12)|((c.charCodeAt(1)&0x3f)<<6)|(c.charCodeAt(2)&0x3f);return String.fromCharCode(cc);}).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(c){var cc=((c.charCodeAt(0)&0x1f)<<6)|(c.charCodeAt(1)&0x3f);return String.fromCharCode(cc);});},};let a256Mutable="";while(i<256){var c=String.fromCharCode(i);a256Mutable+=c;r256[i]=i;r64[i]=b64.indexOf(c);++i;}const a256Final=a256Mutable;function code(s,discard,alpha,beta,w1,w2){s=String(s);let buffer=0,i=0,length=s.length,result="",bitsInBuffer=0;while(i<length){let c=s.charCodeAt(i);c=c<256?alpha[c]:-1;buffer=(buffer<<w1)+c;bitsInBuffer+=w1;while(bitsInBuffer>=w2){bitsInBuffer-=w2;let tmp=buffer>>bitsInBuffer;result+=beta.charAt(tmp);buffer^=tmp<<bitsInBuffer;}++i;}if(!discard&&bitsInBuffer>0){result+=beta.charAt(buffer<<(w2-bitsInBuffer));}return result;}const encode=function(plain,utf8encode){utf8encode=typeof utf8encode=="undefined"?true:utf8encode;plain=utf8encode?UTF8.encode(plain):plain;plain=code(plain,false,r256,b64,8,6);return plain+"====".slice(plain.length%4||4);};const decode=function(coded,utf8decode){utf8decode=typeof utf8decode=="undefined"?true:utf8decode;coded=String(coded).replace(/[^A-Za-z0-9\+\/\=]/g,"");let parts=coded.split("=");let i=parts.length;do{--i;parts[i]=code(parts[i],true,r64,a256Final,6,8);}while(i>0);const result=parts.join("");return utf8decode?UTF8.decode(result):result;};return{encode:encode,decode:decode,btoa:encode,atob:decode,};})();
    const Base16={encode:function(plainText=""){return plainText.split("").map((c)=> c.charCodeAt(0).toString(16).padStart(2,"0")).join("");},decode:function(hexString=""){const hexPairs=hexString.match(/.{1,2}/g)||[];return hexPairs.map((c)=> String.fromCharCode(parseInt(c,16))).join("");},};
    const range=function(start, stop, step){if(stop===undefined){stop=start;start=0;}step=step || 1;const result=[];if(step>0){for(let i=start;i<stop;i+=step){result.push(i);}}else{for(let i=start;i>stop;i+=step){result.push(i);}}return result;};
    const dedup=(array) => [...new Set(array)];
    const getUrls=(includes="", returnAs=console)=>{const urls=Array.from(document.getElementsByTagName("a")).filter((e)=>{return e.href.includes(includes);}).map((e)=>{return e.href;});switch (returnAs){case String:return urls.join("\n");break;case Array:return urls;break;case console:default:return urls.join("\n");break;}console.log(urls.join("\n"));};
    const sorted = (array) => [...array].sort((a,b)=>a-b);

    const functions = ["Base64", "Base16", "range", "getAllUrls", "dedup", "sorted"];
    if (typeof unsafeWindow.InjectedFunctions === 'undefined') {
        unsafeWindow.InjectedFunctions = true;
            functions.forEach(func => {
            unsafeWindow[func] = eval(func);
    });
    }

})();




