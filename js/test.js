!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=46)}([function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(1),o=n(2),r=n(15),a=n(17),c=function(t,e,n){var s,l,u,p=t&c.F,f=t&c.G,d=t&c.S,g=t&c.P,h=t&c.B,m=t&c.W,v=f?o:o[e]||(o[e]={}),x=v.prototype,b=f?i:d?i[e]:(i[e]||{}).prototype;f&&(n=e);for(s in n)(l=!p&&b&&void 0!==b[s])&&s in v||(u=l?b[s]:n[s],v[s]=f&&"function"!=typeof b[s]?n[s]:h&&l?r(u,i):m&&b[s]==u?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):g&&"function"==typeof u?r(Function.call,u):u,g&&((v.virtual||(v.virtual={}))[s]=u,t&c.R&&x&&!x[s]&&a(x,s,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var i=n(18),o=n(19),r=n(21),a=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(8),o=n(9);t.exports=function(t){return i(o(t))}},function(t,e,n){var i=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),r=n.n(o),a=n(23),c=n.n(a),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),r()(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),l=function(){function t(e){return i(this,t),this.config={id:"",imgUrl:"",scale:null,clipImgMinW:100,clipImgMinH:100},this.img=new Image,n(41),this.config=c()({},this.config,e),this.parentEle=document.getElementById(this.config.id),this.ImgUrl(this.config.imgUrl,this.CreateHtml()).DragEvent(),this}return s(t,[{key:"ImgUrl",value:function(t,e){var n=this;return this.img.src=t,this.clipImgW=this.config.clipImgMinW,this.clipImgH=this.config.clipImgMinH,this.transX=0,this.transY=0,this.img.onload=function(){n.img.width/n.img.height>=1?(n.imgScale=n.img.width/n.parentEle.clientWidth,n.clipImg.style.width=n.parentEle.clientWidth+"px",n.clipBox.style.width=n.parentEle.clientWidth+"px",n.clipBox.style.height=n.img.height/n.imgScale+"px"):(n.imgScale=n.img.height/n.parentEle.clientHeight,n.clipImg.style.width=n.img.width/n.imgScale+"px",n.clipBox.style.width=n.img.width/n.imgScale+"px",n.clipBox.style.height=n.parentEle.clientHeight+"px"),n.clipBgImg.style.backgroundImage="url("+t+")",n.clipImg.src=t,n.ImgClip()},this}},{key:"DragEvent",value:function(){var t=this,e=void 0,n=void 0,i=void 0,o=void 0,r=void 0,a=void 0,c=void 0,s=void 0,l=!1,u=void 0;this.dotBox.addEventListener("mousedown",function(i){i.preventDefault(),e=i.pageX,n=i.pageY,r=t.transX,a=t.transY,c=t.clipImgW,s=t.clipImgH,l=!0,u=i.target.id}),document.addEventListener("mousemove",function(p){if(l){switch(i=p.pageX,o=p.pageY,u){case"dotTopLeft":t.transX=Math.max(0,Math.min(r+i-e,c+r-t.config.clipImgMinW)),t.transY=Math.max(0,Math.min(a+o-n,s+a-t.config.clipImgMinH)),t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+e-i,c+r)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+n-o,s+a)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale,t.transY=a+s-t.clipImgH);break;case"dotTopRight":t.transY=Math.max(0,Math.min(a+o-n,s+a-t.config.clipImgMinH)),t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+i-e,t.clipBox.clientWidth-t.transX)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+n-o,s+a)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale,t.transY=a+s-t.clipImgH);break;case"dotBottomLeft":t.transX=Math.max(0,Math.min(r+i-e,c+r-t.config.clipImgMinW)),t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+e-i,c+r)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+o-n,t.clipBox.clientHeight-t.transY)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale);break;case"dotBottomRight":t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+i-e,t.clipBox.clientWidth-t.transX)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+o-n,t.clipBox.clientHeight-t.transY)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale);break;default:t.transX=Math.max(0,Math.min(r+i-e,t.clipBox.clientWidth-t.dotBox.offsetWidth)),t.transY=Math.max(0,Math.min(a+o-n,t.clipBox.clientHeight-t.dotBox.offsetHeight))}t.ImgClip()}}),document.addEventListener("mouseup",function(){l=!1})}},{key:"ImgClip",value:function(){return this.dotBox.style.width=this.clipImgW+"px",this.dotBox.style.height=this.clipImgH+"px",this.dotBox.style.transform="translate("+this.transX+"px,"+this.transY+"px)",this.dotBox.style.msTransform="translate("+this.transX+"px,"+this.transY+"px)",this.clipImg.style.clip="rect("+this.transY+"px,"+(this.clipImgW+this.transX)+"px,"+(this.clipImgH+this.transY)+"px,"+this.transX+"px)",this}},{key:"CreateHtml",value:function(){return this.parentEle.innerHTML='\n<div class="canvasClip-beforeImg"></div>\n<img class="canvasClip-afterImg" src=""/>\n<div class="canvasClip-clipBox">\n    <div class="canvasClip-dotBox">\n      <div id="dotTopLeft" class="canvasClip-dot canvasClip-dot-topLeft"></div>\n      <div id="dotTopRight" class="canvasClip-dot canvasClip-dot-topRight"></div>\n      <div id="dotBottomLeft" class="canvasClip-dot canvasClip-dot-bottomLeft"></div>\n      <div id="dotBottomRight" class="canvasClip-dot canvasClip-dot-bottomRight"></div>\n    </div>\n</div>\n',this.clipBgImg=document.getElementsByClassName("canvasClip-beforeImg")[0],this.clipImg=document.getElementsByClassName("canvasClip-afterImg")[0],this.clipBox=document.getElementsByClassName("canvasClip-clipBox")[0],this.dotBox=document.getElementsByClassName("canvasClip-dotBox")[0],this.dotTopLeft=document.getElementById("dotTopLeft"),this.dotTopRight=document.getElementById("dotTopRight"),this.dotBottomLeft=document.getElementById("dotBottomLeft"),this.dotBottomRight=document.getElementById("dotBottomRight"),this}},{key:"CanvasClipImg",value:function(){var t=this.transX*this.imgScale,e=this.transY*this.imgScale,n=this.clipImgW*this.imgScale,i=this.clipImgH*this.imgScale,o=document.createElement("canvas"),r=o.getContext("2d");o.width=n,o.height=i,r.drawImage(this.clipImg,t,e,n,i,0,0,n,i);var a=o.toDataURL();a=a.split(",")[1],a=window.atob(a);for(var c=new Uint8Array(a.length),s=0;s<a.length;s++)c[s]=a.charCodeAt(s);var l=new Blob([c],{type:"image/png"});return console.log(l),l}}]),t}();window.CanvasClip=l,e.default=l},function(t,e,n){t.exports={default:n(13),__esModule:!0}},function(t,e,n){n(14);var i=n(2).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(5);i(i.S+i.F*!n(0),"Object",{defineProperty:n(6).f})},function(t,e,n){var i=n(16);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(6),o=n(22);t.exports=n(0)?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(3);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(0)&&!n(4)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(3),o=n(1).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,e,n){var i=n(3);t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(24),__esModule:!0}},function(t,e,n){n(25),t.exports=n(2).Object.assign},function(t,e,n){var i=n(5);i(i.S+i.F,"Object",{assign:n(26)})},function(t,e,n){"use strict";var i=n(27),o=n(38),r=n(39),a=n(40),c=n(8),s=Object.assign;t.exports=!s||n(4)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=i})?function(t,e){for(var n=a(t),s=arguments.length,l=1,u=o.f,p=r.f;s>l;)for(var f,d=c(arguments[l++]),g=u?i(d).concat(u(d)):i(d),h=g.length,m=0;h>m;)p.call(d,f=g[m++])&&(n[f]=d[f]);return n}:s},function(t,e,n){var i=n(28),o=n(37);t.exports=Object.keys||function(t){return i(t,o)}},function(t,e,n){var i=n(29),o=n(7),r=n(31)(!1),a=n(34)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,l=[];for(n in c)n!=a&&i(c,n)&&l.push(n);for(;e.length>s;)i(c,n=e[s++])&&(~r(l,n)||l.push(n));return l}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(7),o=n(32),r=n(33);t.exports=function(t){return function(e,n,a){var c,s=i(e),l=o(s.length),u=r(a,l);if(t&&n!=n){for(;l>u;)if((c=s[u++])!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}}},function(t,e,n){var i=n(10),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},function(t,e,n){var i=n(10),o=Math.max,r=Math.min;t.exports=function(t,e){return t=i(t),t<0?o(t+e,0):r(t,e)}},function(t,e,n){var i=n(35)("keys"),o=n(36);t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var i=n(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var i=n(9);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(42);"string"==typeof i&&(i=[[t.i,i,""]]);var o={};o.transform=void 0;n(44)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(43)(!0),e.push([t.i,'.canvasClip-beforeImg{width:100%;height:100%;background:no-repeat 50%/contain}.canvasClip-beforeImg:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.canvasClip-afterImg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.canvasClip-afterImg,.canvasClip-clipBox{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.canvasClip-dotBox{top:0;left:0;border:1px dashed #000}.canvasClip-dot,.canvasClip-dotBox{position:absolute;box-sizing:border-box}.canvasClip-dot{width:12px;height:12px;border:1px solid #000}.canvasClip-dot-topLeft{top:-6px;left:-6px;cursor:nw-resize}.canvasClip-dot-topRight{top:-6px;right:-6px;cursor:ne-resize}.canvasClip-dot-bottomLeft{left:-6px;bottom:-6px;cursor:sw-resize}.canvasClip-dot-bottomRight{right:-6px;bottom:-6px;cursor:se-resize}',"",{version:3,sources:["/Users/zuo/WebstormProjects/canvas-clip/src/index.scss"],names:[],mappings:"AAAA,sBAAsB,WAAW,YAAY,gCAA2C,CAAC,4BAA6B,WAAW,kBAAkB,MAAM,OAAO,WAAW,YAAY,+BAAgC,CAAC,qBAAwF,yBAAyB,sBAAsB,qBAAqB,gBAAgB,CAAC,yCAAxJ,kBAAkB,QAAQ,SAAS,8BAAgC,CAA4K,mBAAqC,MAAM,OAAO,sBAAuB,CAAsB,mCAA5E,kBAAkB,AAAoC,qBAAqB,CAAsG,AAArG,gBAAkC,WAAW,YAAY,qBAAsB,CAAsB,wBAAwB,SAAS,UAAU,gBAAgB,CAAC,yBAAyB,SAAS,WAAW,gBAAgB,CAAC,2BAA2B,UAAU,YAAY,gBAAgB,CAAC,4BAA4B,WAAW,YAAY,gBAAgB,CAAC",file:"index.scss",sourcesContent:[".canvasClip-beforeImg{width:100%;height:100%;background:no-repeat center center /contain}.canvasClip-beforeImg::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5)}.canvasClip-afterImg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.canvasClip-clipBox{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.canvasClip-dotBox{position:absolute;top:0;left:0;border:1px dashed #000;box-sizing:border-box}.canvasClip-dot{position:absolute;width:12px;height:12px;border:1px solid #000;box-sizing:border-box}.canvasClip-dot-topLeft{top:-6px;left:-6px;cursor:nw-resize}.canvasClip-dot-topRight{top:-6px;right:-6px;cursor:ne-resize}.canvasClip-dot-bottomLeft{left:-6px;bottom:-6px;cursor:sw-resize}.canvasClip-dot-bottomRight{right:-6px;bottom:-6px;cursor:se-resize}\n"],sourceRoot:""}])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=g[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(u(i.parts[r],e))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(u(i.parts[r],e));g[i.id]={id:i.id,refs:1,parts:a}}}}function o(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],c=r[1],s=r[2],l=r[3],u={css:c,media:s,sourceMap:l};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}function r(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=b[b.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function c(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),r(t,e),e}function s(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),r(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var l=x++;n=v||(v=c(e)),i=p.bind(null,n,l,!1),o=p.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(e),i=d.bind(null,n,e),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(e),i=f.bind(null,n),o=function(){a(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function p(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function f(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=A(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var g={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),v=null,x=0,b=[],A=n(45);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return i(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var c=n[a],s=g[c.id];s.refs--,r.push(s)}if(t){i(o(t,e),e)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete g[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n(47),r=n(48),a=document.createElement("select");a.innerHTML="\n    <option value="+o+">横图</option>\n    <option value="+r+">竖图</option>",document.body.innerHTML='\n<div class="test" id="test"></div>\n<input type="button" value="clip" id="clip"/>\n',document.body.appendChild(a);var c=new i.default({id:"test",imgUrl:o,scale:2,clipImgMinW:200,clipImgMinH:100});console.dir(c),a.addEventListener("change",function(){c.config.imgUrl=this.value,c.ImgUrl(this.value)}),document.getElementById("clip").addEventListener("click",function(){var t=document.getElementById("img");t?t.setAttribute("src",URL.createObjectURL(c.CanvasClipImg())):(t=document.createElement("img"),t.id="img",t.setAttribute("src",URL.createObjectURL(c.CanvasClipImg())),document.body.appendChild(t))})},function(t,e,n){t.exports=n.p+"ec5fd581db9219471afe2a41e18931cc.jpg"},function(t,e,n){t.exports=n.p+"c686bd59a7044536b28fb86594ba5e40.jpg"}]);
//# sourceMappingURL=test.js.map