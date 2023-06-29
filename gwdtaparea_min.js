(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d,e="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var k={a:!0},l={};try{l.__proto__=k;g=l.a;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=f,n=this||self;function p(a,b,h){h=void 0===h?null:h;var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,h);b.dispatchEvent(c);return c};function q(a,b){this.g=b===r?a:""}q.prototype.toString=function(){return this.g.toString()};q.prototype.i=!0;q.prototype.h=function(){return this.g.toString()};var t=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,r={};var u=[];function v(a){a=u.indexOf(a);0<=a&&u.splice(a,1)}document.addEventListener("click",function(a){for(var b=0;b<u.length;b++)if(25>Math.abs(a.clientX-u[b].v)&&25>Math.abs(a.clientY-u[b].A)||25>Math.abs(a.screenX-u[b].G)&&25>Math.abs(a.screenY-u[b].H))u.splice(b,1),a.stopPropagation(),a.preventDefault()},!0);function w(){var a=HTMLElement.call(this)||this;a.o=0;a.u=0;a.i=null;a.l=null;a.h=null;a.j=null;a.m=a.B.bind(a);a.g=!0;return a}var x=HTMLElement;w.prototype=e(x.prototype);
w.prototype.constructor=w;if(m)m(w,x);else for(var y in x)if("prototype"!=y)if(Object.defineProperties){var z=Object.getOwnPropertyDescriptor(x,y);z&&Object.defineProperty(w,y,z)}else w[y]=x[y];d=w.prototype;d.connectedCallback=function(){this.h||(this.i=this.s.bind(this),this.l=this.F.bind(this),this.h=this.D.bind(this),this.j=this.C.bind(this));this.addEventListener("click",this.i,!1);this.addEventListener("touchstart",this.l,!1);this.addEventListener("action",this.m,!1)};
d.disconnectedCallback=function(){this.removeEventListener("click",this.i,!1);this.removeEventListener("touchstart",this.l,!1);this.removeEventListener("action",this.m,!1)};d.s=function(a){this.g&&p("action",this,a);this.g=!0};d.F=function(a){this.addEventListener("touchmove",this.h,!1);this.addEventListener("touchend",this.j,!1);a=a.touches[0];this.o=a.clientX;this.u=a.clientY};
d.C=function(a){this.s(a);this.removeEventListener("touchmove",this.h,!1);this.removeEventListener("touchend",this.j,!1);a=a.changedTouches[0];a={v:a.clientX,A:a.clientY,G:a.screenX,H:a.screenY};u.push(a);setTimeout(v.bind(null,a),2500)};d.D=function(a){a=a.touches[0];this.g=this.g&&10>=Math.abs(this.o-a.clientX)&&10>=Math.abs(this.u-a.clientY)};
d.B=function(a){var b=this.getAttribute("exit-id"),h=this.getAttribute("product-index"),c=this.getAttribute("exit-override-url");c&&!p("tapareaexit",this,{"exit-id":b,url:c,"product-index":h,"action-event":a.detail}).detail.handled&&(c instanceof q?a=c:(a=c,a instanceof q||(a="object"==typeof a&&a.i?a.h():String(a),t.test(a)||(a="about:invalid#zClosurez"),a=new q(a,r))),n.open(a instanceof q&&a.constructor===q?a.g:"type_error:SafeUrl",""))};customElements.define("gwd-taparea",w);}).call(this);
