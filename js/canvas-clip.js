!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=11)}([function(t,n,e){t.exports=!e(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var i=e(1),o=e(2),r=e(15),a=e(17),c=function(t,n,e){var s,l,u,p=t&c.F,f=t&c.G,g=t&c.S,d=t&c.P,h=t&c.B,m=t&c.W,v=f?o:o[n]||(o[n]={}),x=v.prototype,A=f?i:g?i[n]:(i[n]||{}).prototype;f&&(e=n);for(s in e)(l=!p&&A&&void 0!==A[s])&&s in v||(u=l?A[s]:e[s],v[s]=f&&"function"!=typeof A[s]?e[s]:h&&l?r(u,i):m&&A[s]==u?function(t){var n=function(n,e,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,i)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(u):d&&"function"==typeof u?r(Function.call,u):u,d&&((v.virtual||(v.virtual={}))[s]=u,t&c.R&&x&&!x[s]&&a(x,s,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var i=e(18),o=e(19),r=e(21),a=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(i(t),n=r(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var i=e(8),o=e(9);t.exports=function(t){return i(o(t))}},function(t,n,e){var i=e(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=e(12),r=e.n(o),a=e(23),c=e.n(a),s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),r()(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),l=function(){function t(n){return i(this,t),this.config={id:"",imgUrl:"",scale:null,clipImgMinW:100,clipImgMinH:100},this.img=new Image,e(41),this.config=c()({},this.config,n),this.parentEle=document.getElementById(this.config.id),this.CreateHtml(this.config.imgUrl).ImgUrl(this.config.imgUrl).DragEvent(),this}return s(t,[{key:"ImgUrl",value:function(t){var n=this;return this.img.src=t,this.clipImgW=this.config.clipImgMinW,this.clipImgH=this.config.clipImgMinH,this.transX=0,this.transY=0,this.img.onload=function(){n.clipBgImg.style.backgroundImage="url("+t+")",n.clipImg.src=t,n.img.width/n.img.height>=1?(n.imgScale=n.img.width/n.parentEle.clientWidth,n.clipImg.style.width=n.parentEle.clientWidth+"px",n.clipBox.style.width=n.parentEle.clientWidth+"px",n.clipBox.style.height=n.img.height/n.imgScale+"px"):(n.imgScale=n.img.height/n.parentEle.clientHeight,n.clipImg.style.width=n.img.width/n.imgScale+"px",n.clipBox.style.width=n.img.width/n.imgScale+"px",n.clipBox.style.height=n.parentEle.clientHeight+"px"),n.ImgClip()},this}},{key:"DragEvent",value:function(){var t=this,n=void 0,e=void 0,i=void 0,o=void 0,r=void 0,a=void 0,c=void 0,s=void 0,l=!1,u=void 0;this.dotBox.addEventListener("mousedown",function(i){i.preventDefault(),n=i.pageX,e=i.pageY,r=t.transX,a=t.transY,c=t.clipImgW,s=t.clipImgH,l=!0,u=i.target.id}),document.addEventListener("mousemove",function(p){if(l){switch(i=p.pageX,o=p.pageY,u){case"dotTopLeft":t.transX=Math.max(0,Math.min(r+i-n,c+r-t.config.clipImgMinW)),t.transY=Math.max(0,Math.min(a+o-e,s+a-t.config.clipImgMinH)),t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+n-i,c+r)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+e-o,s+a)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale,t.transY=a+s-t.clipImgH);break;case"dotTopRight":t.transY=Math.max(0,Math.min(a+o-e,s+a-t.config.clipImgMinH)),t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+i-n,t.clipBox.clientWidth-t.transX)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+e-o,s+a)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale,t.transY=a+s-t.clipImgH);break;case"dotBottomLeft":t.transX=Math.max(0,Math.min(r+i-n,c+r-t.config.clipImgMinW)),t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+n-i,c+r)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+o-e,t.clipBox.clientHeight-t.transY)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale);break;case"dotBottomRight":t.clipImgW=Math.max(t.config.clipImgMinW,Math.min(c+i-n,t.clipBox.clientWidth-t.transX)),t.clipImgH=Math.max(t.config.clipImgMinH,Math.min(s+o-e,t.clipBox.clientHeight-t.transY)),t.config.scale&&(t.clipImgH=t.clipImgW/t.config.scale);break;default:t.transX=Math.max(0,Math.min(r+i-n,t.clipBox.clientWidth-t.dotBox.offsetWidth)),t.transY=Math.max(0,Math.min(a+o-e,t.clipBox.clientHeight-t.dotBox.offsetHeight))}t.ImgClip()}}),document.addEventListener("mouseup",function(){l=!1})}},{key:"ImgClip",value:function(){return this.dotBox.style.width=this.clipImgW+"px",this.dotBox.style.height=this.clipImgH+"px",this.dotBox.style.transform="translate3d("+this.transX+"px,"+this.transY+"px,0)",this.clipImg.style.clip="rect("+this.transY+"px,"+(this.clipImgW+this.transX)+"px,"+(this.clipImgH+this.transY)+"px,"+this.transX+"px)",this}},{key:"CreateHtml",value:function(t){return this.parentEle.innerHTML='\n<div class="canvasClip-beforeImg" style="background-image: url('+t+')"></div>\n<img class="canvasClip-afterImg" src="'+t+'"/>\n<div class="canvasClip-clipBox">\n    <div class="canvasClip-dotBox">\n      <div id="dotTopLeft" class="canvasClip-dot canvasClip-dot-topLeft"></div>\n      <div id="dotTopRight" class="canvasClip-dot canvasClip-dot-topRight"></div>\n      <div id="dotBottomLeft" class="canvasClip-dot canvasClip-dot-bottomLeft"></div>\n      <div id="dotBottomRight" class="canvasClip-dot canvasClip-dot-bottomRight"></div>\n    </div>\n</div>\n',this.clipBgImg=document.getElementsByClassName("canvasClip-beforeImg")[0],this.clipImg=document.getElementsByClassName("canvasClip-afterImg")[0],this.clipBox=document.getElementsByClassName("canvasClip-clipBox")[0],this.dotBox=document.getElementsByClassName("canvasClip-dotBox")[0],this.dotTopLeft=document.getElementById("dotTopLeft"),this.dotTopRight=document.getElementById("dotTopRight"),this.dotBottomLeft=document.getElementById("dotBottomLeft"),this.dotBottomRight=document.getElementById("dotBottomRight"),this}},{key:"CanvasClipImg",value:function(){var t=this.transX*this.imgScale,n=this.transY*this.imgScale,e=this.clipImgW*this.imgScale,i=this.clipImgH*this.imgScale,o=document.createElement("canvas"),r=o.getContext("2d");o.width=e,o.height=i,r.drawImage(this.clipImg,t,n,e,i,0,0,e,i);var a=o.toDataURL();a=a.split(",")[1],a=window.atob(a);for(var c=new Uint8Array(a.length),s=0;s<a.length;s++)c[s]=a.charCodeAt(s);var l=new Blob([c],{type:"image/png"});return console.log(l),l}}]),t}();n.default=l},function(t,n,e){t.exports={default:e(13),__esModule:!0}},function(t,n,e){e(14);var i=e(2).Object;t.exports=function(t,n,e){return i.defineProperty(t,n,e)}},function(t,n,e){var i=e(5);i(i.S+i.F*!e(0),"Object",{defineProperty:e(6).f})},function(t,n,e){var i=e(16);t.exports=function(t,n,e){if(i(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,i){return t.call(n,e,i)};case 3:return function(e,i,o){return t.call(n,e,i,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var i=e(6),o=e(22);t.exports=e(0)?function(t,n,e){return i.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var i=e(3);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(0)&&!e(4)(function(){return 7!=Object.defineProperty(e(20)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var i=e(3),o=e(1).document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},function(t,n,e){var i=e(3);t.exports=function(t,n){if(!i(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!i(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!i(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!i(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports={default:e(24),__esModule:!0}},function(t,n,e){e(25),t.exports=e(2).Object.assign},function(t,n,e){var i=e(5);i(i.S+i.F,"Object",{assign:e(26)})},function(t,n,e){"use strict";var i=e(27),o=e(38),r=e(39),a=e(40),c=e(8),s=Object.assign;t.exports=!s||e(4)(function(){var t={},n={},e=Symbol(),i="abcdefghijklmnopqrst";return t[e]=7,i.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=i})?function(t,n){for(var e=a(t),s=arguments.length,l=1,u=o.f,p=r.f;s>l;)for(var f,g=c(arguments[l++]),d=u?i(g).concat(u(g)):i(g),h=d.length,m=0;h>m;)p.call(g,f=d[m++])&&(e[f]=g[f]);return e}:s},function(t,n,e){var i=e(28),o=e(37);t.exports=Object.keys||function(t){return i(t,o)}},function(t,n,e){var i=e(29),o=e(7),r=e(31)(!1),a=e(34)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,l=[];for(e in c)e!=a&&i(c,e)&&l.push(e);for(;n.length>s;)i(c,e=n[s++])&&(~r(l,e)||l.push(e));return l}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var i=e(7),o=e(32),r=e(33);t.exports=function(t){return function(n,e,a){var c,s=i(n),l=o(s.length),u=r(a,l);if(t&&e!=e){for(;l>u;)if((c=s[u++])!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===e)return t||u||0;return!t&&-1}}},function(t,n,e){var i=e(10),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},function(t,n,e){var i=e(10),o=Math.max,r=Math.min;t.exports=function(t,n){return t=i(t),t<0?o(t+n,0):r(t,n)}},function(t,n,e){var i=e(35)("keys"),o=e(36);t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var i=e(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var i=e(9);t.exports=function(t){return Object(i(t))}},function(t,n,e){var i=e(42);"string"==typeof i&&(i=[[t.i,i,""]]);var o={};o.transform=void 0;e(44)(i,o);i.locals&&(t.exports=i.locals)},function(t,n,e){n=t.exports=e(43)(!0),n.push([t.i,'.canvasClip-beforeImg{width:100%;height:100%;background:no-repeat 50%/contain}.canvasClip-beforeImg:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5)}.canvasClip-afterImg{-webkit-user-select:none;user-select:none}.canvasClip-afterImg,.canvasClip-clipBox{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.canvasClip-dotBox{top:0;left:0;border:1px dashed #000}.canvasClip-dot,.canvasClip-dotBox{position:absolute;box-sizing:border-box}.canvasClip-dot{width:12px;height:12px;border:1px solid #000}.canvasClip-dot-topLeft{top:-6px;left:-6px;cursor:nw-resize}.canvasClip-dot-topRight{top:-6px;right:-6px;cursor:ne-resize}.canvasClip-dot-bottomLeft{left:-6px;bottom:-6px;cursor:sw-resize}.canvasClip-dot-bottomRight{right:-6px;bottom:-6px;cursor:se-resize}',"",{version:3,sources:["/Users/zuo/WebstormProjects/canvas-clip/src/index.scss"],names:[],mappings:"AAAA,sBAAsB,WAAW,YAAY,gCAA2C,CAAC,4BAA6B,WAAW,kBAAkB,MAAM,OAAO,WAAW,YAAY,+BAAgC,CAAC,qBAAgI,yBAAyB,gBAAgB,CAAC,yCAArJ,kBAAkB,QAAQ,SAAS,uCAAwC,8BAAgC,CAAyK,mBAAqC,MAAM,OAAO,sBAAuB,CAAsB,mCAA5E,kBAAkB,AAAoC,qBAAqB,CAAsG,AAArG,gBAAkC,WAAW,YAAY,qBAAsB,CAAsB,wBAAwB,SAAS,UAAU,gBAAgB,CAAC,yBAAyB,SAAS,WAAW,gBAAgB,CAAC,2BAA2B,UAAU,YAAY,gBAAgB,CAAC,4BAA4B,WAAW,YAAY,gBAAgB,CAAC",file:"index.scss",sourcesContent:[".canvasClip-beforeImg{width:100%;height:100%;background:no-repeat center center /contain}.canvasClip-beforeImg::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5)}.canvasClip-afterImg{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-user-select:none;user-select:none}.canvasClip-clipBox{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.canvasClip-dotBox{position:absolute;top:0;left:0;border:1px dashed #000;box-sizing:border-box}.canvasClip-dot{position:absolute;width:12px;height:12px;border:1px solid #000;box-sizing:border-box}.canvasClip-dot-topLeft{top:-6px;left:-6px;cursor:nw-resize}.canvasClip-dot-topRight{top:-6px;right:-6px;cursor:ne-resize}.canvasClip-dot-bottomLeft{left:-6px;bottom:-6px;cursor:sw-resize}.canvasClip-dot-bottomRight{right:-6px;bottom:-6px;cursor:se-resize}\n"],sourceRoot:""}])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=i(o);return[e].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[e].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var i=e(n,t);return n[2]?"@media "+n[2]+"{"+i+"}":i}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){function i(t,n){for(var e=0;e<t.length;e++){var i=t[e],o=d[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(u(i.parts[r],n))}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(u(i.parts[r],n));d[i.id]={id:i.id,refs:1,parts:a}}}}function o(t,n){for(var e=[],i={},o=0;o<t.length;o++){var r=t[o],a=n.base?r[0]+n.base:r[0],c=r[1],s=r[2],l=r[3],u={css:c,media:s,sourceMap:l};i[a]?i[a].parts.push(u):e.push(i[a]={id:a,parts:[u]})}return e}function r(t,n){var e=m(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=A[A.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),A.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=A.indexOf(t);n>=0&&A.splice(n,1)}function c(t){var n=document.createElement("style");return t.attrs.type="text/css",l(n,t.attrs),r(t,n),n}function s(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(n,t.attrs),r(t,n),n}function l(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function u(t,n){var e,i,o,r;if(n.transform&&t.css){if(!(r=n.transform(t.css)))return function(){};t.css=r}if(n.singleton){var l=x++;e=v||(v=c(n)),i=p.bind(null,e,l,!1),o=p.bind(null,e,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=s(n),i=g.bind(null,e,n),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=c(n),i=f.bind(null,e),o=function(){a(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}function p(t,n,e,i){var o=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(n,o);else{var r=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function f(t,n){var e=n.css,i=n.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function g(t,n,e){var i=e.css,o=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||r)&&(i=b(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([i],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var d={},h=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var n={};return function(e){return void 0===n[e]&&(n[e]=t.call(this,e)),n[e]}}(function(t){return document.querySelector(t)}),v=null,x=0,A=[],b=e(45);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=h()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=o(t,n);return i(e,n),function(t){for(var r=[],a=0;a<e.length;a++){var c=e[a],s=d[c.id];s.refs--,r.push(s)}if(t){i(o(t,n),n)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var y=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,i=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}}]);
//# sourceMappingURL=canvas-clip.js.map