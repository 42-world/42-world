var A=Object.create;var b=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var O=e=>b(e,"__esModule",{value:!0});var z=(e,t)=>()=>(e&&(t=e(e=0)),t);var $=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var q=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of M(t))!E.call(e,o)&&o!=="default"&&b(e,o,{get:()=>t[o],enumerable:!(n=H(t,o))||n.enumerable});return e},L=e=>q(O(b(e!=null?A(j(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as a from"react";var c=z(()=>{});var y=$((Q,m)=>{c();(function(){"use strict";var e={}.hasOwnProperty,t="[native code]";function n(){for(var o=[],l=0;l<arguments.length;l++){var r=arguments[l];if(!!r){var s=typeof r;if(s==="string"||s==="number")o.push(r);else if(Array.isArray(r)){if(r.length){var u=n.apply(null,r);u&&o.push(u)}}else if(s==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){o.push(r.toString());continue}for(var i in r)e.call(r,i)&&r[i]&&o.push(i)}}}return o.join(" ")}typeof m!="undefined"&&m.exports?(n.default=n,m.exports=n):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return n}):window.classNames=n})()});c();var f=L(y());import{forwardRef as B,useId as D}from"react";import{useControllableState as G}from"../../utils/useControllableState.js";import{Text as w}from"../Text/index.js";var X=B(({id:e,size:t="medium",label:n,value:o,defaultValue:l,subLabel:r,variant:s,required:u,rightAddon:i,hasError:v,maxLength:d,disabled:p,className:N,onValueChange:C,...I},S)=>{let x=D(),[h,k]=G({state:o,defaultState:l!=null?l:"",onChange:C}),_=g=>{d&&g.target.value.length>d||k(g.target.value)},T=n||d;return a.createElement("div",{className:(0,f.default)("flex flex-col",{"opacity-40":p},N)},T?a.createElement("div",{className:"mb-2 flex w-full"},n&&a.createElement("label",{htmlFor:e!=null?e:x,className:(0,f.default)("text-sm font-normal leading-[1.8] text-text-secondary before:mr-1 dark:text-text-secondary_dark",{'before:content-["*"]':u})},n),d?a.createElement(w,{className:"ml-auto",text:`(${h.length}/${d})`,size:"body2",weight:"regular",color:"secondary"}):null):null,a.createElement("div",{className:(0,f.default)("flex w-full items-center rounded-lg border border-solid px-4",{"border-border-primary bg-transparent focus-within:border-color-blue_200 dark:border-border-primary_dark":s==="outlined","border-transparent bg-bg-secondary dark:bg-bg-secondary_dark":s==="filled","!border-color-red focus-within:border-color-red":v})},a.createElement("input",{ref:S,id:e!=null?e:x,className:(0,f.default)("w-full bg-transparent text-base font-normal leading-[1.5] text-text-primary placeholder:text-text-tertiary focus:outline-none dark:text-text-primary_dark dark:placeholder:text-text-tertiary_dark",{"h-[44px]":t==="medium","h-[32px]":t==="small","cursor-not-allowed":p}),value:h,onChange:_,maxLength:d,disabled:p,required:u,...I}),i&&a.createElement("span",{className:"flex"},i)),r&&a.createElement("div",{className:"mt-2"},a.createElement(w,{text:r,size:"body2",weight:"regular",color:v?"red_200":"secondary"})))});export{X as Input};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
