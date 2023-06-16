var T=Object.create;var u=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var S=t=>u(t,"__esModule",{value:!0});var y=(t,e)=>()=>(t&&(e=t(t=0)),e);var C=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var I=(t,e,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of w(e))!N.call(t,r)&&r!=="default"&&u(t,r,{get:()=>e[r],enumerable:!(i=g(e,r))||i.enumerable});return t},B=t=>I(S(u(t!=null?T(A(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as n from"react";var s=y(()=>{});var c=C((O,x)=>{s();(function(){"use strict";var t={}.hasOwnProperty,e="[native code]";function i(){for(var r=[],a=0;a<arguments.length;a++){var o=arguments[a];if(!!o){var m=typeof o;if(m==="string"||m==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var p=i.apply(null,o);p&&r.push(p)}}else if(m==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var f in o)t.call(o,f)&&o[f]&&r.push(f)}}}return r.join(" ")}typeof x!="undefined"&&x.exports?(i.default=i,x.exports=i):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return i}):window.classNames=i})()});s();var b=B(c());s();import{Avatar as D}from"./Avatar/index.js";import{AvatarText as v}from"./AvatarText/index.js";import{Card as _}from"./Card/index.js";import{Chip as M}from"./Chip/index.js";import{Comment as q}from"./Comment/index.js";import{Divider as F}from"./Divider/index.js";import{GroupHeader as K}from"./GroupHeader/index.js";import{Icon as U}from"./Icon/index.js";import{Input as W}from"./Input/index.js";import{ListItem as Y}from"./ListItem/index.js";import{Sample as R}from"./Sample/index.js";import{Text as h}from"./Text/index.js";import{Thumbnail as ot}from"./Thumbnail/index.js";import{Badge as d}from"./Badge/index.js";import{IconText as it}from"./IconText/index.js";import{Button as l}from"./Button/index.js";function mt({avatarSrc:t,avatarAlt:e="",username:i,time:r,content:a,isMine:o,isAuthor:m,isLiked:p,numOfLikes:f=0}){return n.createElement("div",{className:"flex flex-col gap-3 w-[720px] overflow-hidden break-words"},n.createElement("div",{className:"flex flex-row items-start gap-2"},n.createElement(v,{src:t,alt:e,mainText:i,subText:r}),m&&n.createElement(d,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),o&&n.createElement(d,{color:"outline",text:"\uB0B4\uB313\uAE00"})),n.createElement(h,{size:"body2",text:a}),n.createElement("div",{className:"flex flex-row items-center gap-4"},n.createElement(l,{text:`\uC88B\uC544\uC694 ${f}`,variant:"text",className:(0,b.default)("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":p})}),n.createElement(l,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"px-0 mx-4"}),n.createElement(l,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0"})))}export{mt as Comment};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
