// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var o=r,i=n;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===r||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var c,a=[],f=!1,l=-1;function s(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&m())}function m(){if(!f){var e=u(s);f=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,f=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function d(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||f||u(m)}function h(e,t){this.fun=e,this.array=t}h.prototype.run=function(){this.fun.apply(null,this.array)};var w={},v=[],p={},g={},b={};function T(){}var y=T,_=T,k=T,L=T,O=T,j=T,E=T;function D(e){throw new Error("process.binding is not supported")}function M(){return"/"}function N(e){throw new Error("process.chdir is not supported")}function x(){return 0}var A=t.performance||{},P=A.now||A.mozNow||A.msNow||A.oNow||A.webkitNow||function(){return(new Date).getTime()};function z(e){var t=.001*P.call(A),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var q=new Date;function B(){return(new Date-q)/1e3}var C={nextTick:d,title:"browser",browser:true,env:w,argv:v,version:"",versions:p,on:y,addListener:_,once:k,off:L,removeListener:O,removeAllListeners:j,emit:E,binding:D,cwd:M,chdir:N,umask:x,hrtime:z,platform:"browser",release:g,config:b,uptime:B},F=e(Object.freeze({__proto__:null,addListener:_,argv:v,binding:D,browser:true,chdir:N,config:b,cwd:M,default:C,emit:E,env:w,hrtime:z,nextTick:d,off:L,on:y,once:k,platform:"browser",release:g,removeAllListeners:j,removeListener:O,title:"browser",umask:x,uptime:B,version:"",versions:p})).stdout;export{F as default};
//# sourceMappingURL=index.mjs.map
