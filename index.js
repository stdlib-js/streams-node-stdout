// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stdout=t()}(this,(function(){"use strict";function e(e){var t=e.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}var o=n,i=r;function u(e){if(o===setTimeout)return setTimeout(e,0);if((o===n||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}"function"==typeof t.setTimeout&&(o=setTimeout),"function"==typeof t.clearTimeout&&(i=clearTimeout);var f,c=[],a=!1,l=-1;function s(){a&&f&&(a=!1,f.length?c=f.concat(c):l=-1,c.length&&d())}function d(){if(!a){var e=u(s);a=!0;for(var t=c.length;t;){for(f=c,c=[];++l<t;)f&&f[l].run();l=-1,t=c.length}f=null,a=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||a||u(d)}function m(e,t){this.fun=e,this.array=t}m.prototype.run=function(){this.fun.apply(null,this.array)};var h="browser",w="browser",v={},y=[],g={},b={},T={};function j(){}var k=j,L=j,O=j,_=j,E=j,x=j,D=j;function N(e){throw new Error("process.binding is not supported")}function A(){return"/"}function M(e){throw new Error("process.chdir is not supported")}function P(){return 0}var z=t.performance||{},q=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};function B(e){var t=.001*q.call(z),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]}var C=new Date;function F(){return(new Date-C)/1e3}var G={nextTick:p,title:h,browser:true,env:v,argv:y,version:"",versions:g,on:k,addListener:L,once:O,off:_,removeListener:E,removeAllListeners:x,emit:D,binding:N,cwd:A,chdir:M,umask:P,hrtime:B,platform:w,release:b,config:T,uptime:F};return e(Object.freeze({__proto__:null,addListener:L,argv:y,binding:N,browser:true,chdir:M,config:T,cwd:A,default:G,emit:D,env:v,hrtime:B,nextTick:p,off:_,on:k,once:O,platform:w,release:b,removeAllListeners:x,removeListener:E,title:h,umask:P,uptime:F,version:"",versions:g})).stdout}));
//# sourceMappingURL=index.js.map