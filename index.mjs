// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var o=r,i=n;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===r||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var c,f=[],a=!1,l=-1;function s(){a&&c&&(a=!1,c.length?f=c.concat(f):l=-1,f.length&&h())}function h(){if(!a){var e=u(s);a=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,a=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new d(e,t)),1!==f.length||a||u(h)}function d(e,t){this.fun=e,this.array=t}d.prototype.run=function(){this.fun.apply(null,this.array)};var p="browser",w="browser",v={},y=[],g={},T={},b={};function _(){}var k=_,L=_,O=_,j=_,E=_,D=_,M=_;function N(e){throw new Error("process.binding is not supported")}function x(){return"/"}function A(e){throw new Error("process.chdir is not supported")}function P(){return 0}var z=t.performance||{},R=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};function q(e){var t=.001*R.call(z),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var B=new Date;function C(){return(new Date-B)/1e3}var F={nextTick:m,title:p,browser:true,env:v,argv:y,version:"",versions:g,on:k,addListener:L,once:O,off:j,removeListener:E,removeAllListeners:D,emit:M,binding:N,cwd:x,chdir:A,umask:P,hrtime:q,platform:w,release:T,config:b,uptime:C},G=e(Object.freeze({__proto__:null,addListener:L,argv:y,binding:N,browser:true,chdir:A,config:b,cwd:x,default:F,emit:M,env:v,hrtime:q,nextTick:m,off:j,on:k,once:O,platform:w,release:T,removeAllListeners:D,removeListener:E,title:p,umask:P,uptime:C,version:"",versions:g})).stdout;export{G as default};
//# sourceMappingURL=index.mjs.map
