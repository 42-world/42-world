var S=Object.create;var x=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var y=t=>x(t,"__esModule",{value:!0});var E=(t,o)=>()=>(t&&(o=t(t=0)),o);var J=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports),q=(t,o)=>{y(t);for(var i in o)x(t,i,{get:o[i],enumerable:!0})},I=(t,o,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of N(o))!T.call(t,a)&&a!=="default"&&x(t,a,{get:()=>o[a],enumerable:!(i=j(o,a))||i.enumerable});return t},p=t=>I(y(x(t!=null?S(P(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var r,e=E(()=>{r=p(require("react"))});var g=J((H,l)=>{e();(function(){"use strict";var t={}.hasOwnProperty,o="[native code]";function i(){for(var a=[],c=0;c<arguments.length;c++){var n=arguments[c];if(!!n){var b=typeof n;if(b==="string"||b==="number")a.push(n);else if(Array.isArray(n)){if(n.length){var h=i.apply(null,n);h&&a.push(h)}}else if(b==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){a.push(n.toString());continue}for(var m in n)t.call(n,m)&&n[m]&&a.push(m)}}}return a.join(" ")}typeof l!="undefined"&&l.exports?(i.default=i,l.exports=i):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return i}):window.classNames=i})()});q(exports,{Chip:()=>v,Jiychoi:()=>k,Sample:()=>O,ThemeProvider:()=>A,Thumbnail:()=>C,useTheme:()=>s});e();e();var f="43da39888eb53c52c3e835ce02db4272dcbd44da931ead2bc8ddcb938e64ef1e",M=`*,
::before,
::after{
  box-sizing:border-box;
  border-width:0;
  border-style:solid;
  border-color:#e5e7eb;
}

::before,
::after{
  --tw-content:'';
}

html{
  line-height:1.5;
  -webkit-text-size-adjust:100%;
  -moz-tab-size:4;
  -o-tab-size:4;
     tab-size:4;
  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:normal;
  font-variation-settings:normal;
}

body{
  margin:0;
  line-height:inherit;
}

hr{
  height:0;
  color:inherit;
  border-top-width:1px;
}

abbr:where([title]){
  -webkit-text-decoration:underline dotted;
          text-decoration:underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-size:inherit;
  font-weight:inherit;
}

a{
  color:inherit;
  text-decoration:inherit;
}

b,
strong{
  font-weight:bolder;
}

code,
kbd,
samp,
pre{
  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size:1em;
}

small{
  font-size:80%;
}

sub,
sup{
  font-size:75%;
  line-height:0;
  position:relative;
  vertical-align:baseline;
}

sub{
  bottom:-0.25em;
}

sup{
  top:-0.5em;
}

table{
  text-indent:0;
  border-color:inherit;
  border-collapse:collapse;
}

button,
input,
optgroup,
select,
textarea{
  font-family:inherit;
  font-size:100%;
  font-weight:inherit;
  line-height:inherit;
  color:inherit;
  margin:0;
  padding:0;
}

button,
select{
  text-transform:none;
}

button,
[type='button'],
[type='reset'],
[type='submit']{
  -webkit-appearance:button;
  background-color:transparent;
  background-image:none;
}

:-moz-focusring{
  outline:auto;
}

:-moz-ui-invalid{
  box-shadow:none;
}

progress{
  vertical-align:baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button{
  height:auto;
}

[type='search']{
  -webkit-appearance:textfield;
  outline-offset:-2px;
}

::-webkit-search-decoration{
  -webkit-appearance:none;
}

::-webkit-file-upload-button{
  -webkit-appearance:button;
  font:inherit;
}

summary{
  display:list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre{
  margin:0;
}

fieldset{
  margin:0;
  padding:0;
}

legend{
  padding:0;
}

ol,
ul,
menu{
  list-style:none;
  margin:0;
  padding:0;
}

textarea{
  resize:vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder{
  opacity:1;
  color:#9ca3af;
}

input::placeholder,
textarea::placeholder{
  opacity:1;
  color:#9ca3af;
}

button,
[role="button"]{
  cursor:pointer;
}

:disabled{
  cursor:default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object{
  display:block;
  vertical-align:middle;
}

img,
video{
  max-width:100%;
  height:auto;
}

[hidden]{
  display:none;
}

html,
  body{
  font-family:Pretendard Variable;
}

*, ::before, ::after{
  --tw-border-spacing-x:0;
  --tw-border-spacing-y:0;
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x:;
  --tw-pan-y:;
  --tw-pinch-zoom:;
  --tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position:;
  --tw-gradient-via-position:;
  --tw-gradient-to-position:;
  --tw-ordinal:;
  --tw-slashed-zero:;
  --tw-numeric-figure:;
  --tw-numeric-spacing:;
  --tw-numeric-fraction:;
  --tw-ring-inset:;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur:;
  --tw-brightness:;
  --tw-contrast:;
  --tw-grayscale:;
  --tw-hue-rotate:;
  --tw-invert:;
  --tw-saturate:;
  --tw-sepia:;
  --tw-drop-shadow:;
  --tw-backdrop-blur:;
  --tw-backdrop-brightness:;
  --tw-backdrop-contrast:;
  --tw-backdrop-grayscale:;
  --tw-backdrop-hue-rotate:;
  --tw-backdrop-invert:;
  --tw-backdrop-opacity:;
  --tw-backdrop-saturate:;
  --tw-backdrop-sepia:;
}

::backdrop{
  --tw-border-spacing-x:0;
  --tw-border-spacing-y:0;
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x:;
  --tw-pan-y:;
  --tw-pinch-zoom:;
  --tw-scroll-snap-strictness:proximity;
  --tw-gradient-from-position:;
  --tw-gradient-via-position:;
  --tw-gradient-to-position:;
  --tw-ordinal:;
  --tw-slashed-zero:;
  --tw-numeric-figure:;
  --tw-numeric-spacing:;
  --tw-numeric-fraction:;
  --tw-ring-inset:;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur:;
  --tw-brightness:;
  --tw-contrast:;
  --tw-grayscale:;
  --tw-hue-rotate:;
  --tw-invert:;
  --tw-saturate:;
  --tw-sepia:;
  --tw-drop-shadow:;
  --tw-backdrop-blur:;
  --tw-backdrop-brightness:;
  --tw-backdrop-contrast:;
  --tw-backdrop-grayscale:;
  --tw-backdrop-hue-rotate:;
  --tw-backdrop-invert:;
  --tw-backdrop-opacity:;
  --tw-backdrop-saturate:;
  --tw-backdrop-sepia:;
}

.mx-1{
  margin-left:0.25rem;
  margin-right:0.25rem;
}

.mr-2{
  margin-right:0.5rem;
}

.mt-3{
  margin-top:0.75rem;
}

.line-clamp-1{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}

.flex{
  display:flex;
}

.hidden{
  display:none;
}

.aspect-16--10{
  aspect-ratio:16 / 10;
}

.aspect-square{
  aspect-ratio:1 / 1;
}

.aspect-video{
  aspect-ratio:16 / 9;
}

.h-6{
  height:1.5rem;
}

.h-8{
  height:2rem;
}

.w-6{
  width:1.5rem;
}

.w---278px--{
  width:278px;
}

.w-fit{
  width:-moz-fit-content;
  width:fit-content;
}

.select-none{
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.flex-row{
  flex-direction:row;
}

.flex-col{
  flex-direction:column;
}

.items-center{
  align-items:center;
}

.gap-1{
  gap:0.25rem;
}

.rounded-2xl{
  border-radius:1rem;
}

.rounded-lg{
  border-radius:0.5rem;
}

.bg-bg-primary_alpha_0_dark{
  background-color:#00000000;
}

.bg-bg-secondary{
  --tw-bg-opacity:1;
  background-color:rgb(244 245 246 / var(--tw-bg-opacity));
}

.bg-bg-secondary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(20 20 20 / var(--tw-bg-opacity));
}

.bg-bg-tertiary_alpha_0{
  background-color:#E3E3E300;
}

.bg-gray-300{
  --tw-bg-opacity:1;
  background-color:rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-pink-200{
  --tw-bg-opacity:1;
  background-color:rgb(251 207 232 / var(--tw-bg-opacity));
}

.object-cover{
  -o-object-fit:cover;
     object-fit:cover;
}

.px-2{
  padding-left:0.5rem;
  padding-right:0.5rem;
}

.px-3{
  padding-left:0.75rem;
  padding-right:0.75rem;
}

.text-left{
  text-align:left;
}

.text-center{
  text-align:center;
}

.text-right{
  text-align:right;
}

.text-2xl{
  font-size:1.5rem;
  line-height:2rem;
}

.text-4xl{
  font-size:2.25rem;
  line-height:2.5rem;
}

.text-base{
  font-size:1rem;
  line-height:1.5rem;
}

.text-lg{
  font-size:1.125rem;
  line-height:1.75rem;
}

.text-sm{
  font-size:0.875rem;
  line-height:1.25rem;
}

.text-xs{
  font-size:0.75rem;
  line-height:1rem;
}

.font-light{
  font-weight:300;
}

.font-medium{
  font-weight:500;
}

.font-normal{
  font-weight:400;
}

.font-semibold{
  font-weight:600;
}

.leading---1--2--{
  line-height:1.2;
}

.text-black{
  --tw-text-opacity:1;
  color:rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-300{
  --tw-text-opacity:1;
  color:rgb(147 197 253 / var(--tw-text-opacity));
}

.text-blue-500{
  --tw-text-opacity:1;
  color:rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-700{
  --tw-text-opacity:1;
  color:rgb(29 78 216 / var(--tw-text-opacity));
}

.text-color-white{
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

.text-green-300{
  --tw-text-opacity:1;
  color:rgb(134 239 172 / var(--tw-text-opacity));
}

.text-green-500{
  --tw-text-opacity:1;
  color:rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-700{
  --tw-text-opacity:1;
  color:rgb(21 128 61 / var(--tw-text-opacity));
}

.text-indigo-300{
  --tw-text-opacity:1;
  color:rgb(165 180 252 / var(--tw-text-opacity));
}

.text-indigo-500{
  --tw-text-opacity:1;
  color:rgb(99 102 241 / var(--tw-text-opacity));
}

.text-indigo-700{
  --tw-text-opacity:1;
  color:rgb(67 56 202 / var(--tw-text-opacity));
}

.text-lime-300{
  --tw-text-opacity:1;
  color:rgb(190 242 100 / var(--tw-text-opacity));
}

.text-lime-500{
  --tw-text-opacity:1;
  color:rgb(132 204 22 / var(--tw-text-opacity));
}

.text-lime-700{
  --tw-text-opacity:1;
  color:rgb(77 124 15 / var(--tw-text-opacity));
}

.text-orange-300{
  --tw-text-opacity:1;
  color:rgb(253 186 116 / var(--tw-text-opacity));
}

.text-orange-500{
  --tw-text-opacity:1;
  color:rgb(249 115 22 / var(--tw-text-opacity));
}

.text-orange-700{
  --tw-text-opacity:1;
  color:rgb(194 65 12 / var(--tw-text-opacity));
}

.text-red-300{
  --tw-text-opacity:1;
  color:rgb(252 165 165 / var(--tw-text-opacity));
}

.text-red-500{
  --tw-text-opacity:1;
  color:rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-700{
  --tw-text-opacity:1;
  color:rgb(185 28 28 / var(--tw-text-opacity));
}

.text-sky-300{
  --tw-text-opacity:1;
  color:rgb(125 211 252 / var(--tw-text-opacity));
}

.text-sky-500{
  --tw-text-opacity:1;
  color:rgb(14 165 233 / var(--tw-text-opacity));
}

.text-sky-700{
  --tw-text-opacity:1;
  color:rgb(3 105 161 / var(--tw-text-opacity));
}

.text-text-primary{
  --tw-text-opacity:1;
  color:rgb(0 0 0 / var(--tw-text-opacity));
}

.text-text-primary_dark{
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

.text-text-secondary{
  --tw-text-opacity:1;
  color:rgb(112 112 112 / var(--tw-text-opacity));
}

.text-text-secondary_dark{
  --tw-text-opacity:1;
  color:rgb(186 186 186 / var(--tw-text-opacity));
}

.text-text-tertiary{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.text-text-tertiary_dark{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

.text-white{
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

.text-yellow-300{
  --tw-text-opacity:1;
  color:rgb(253 224 71 / var(--tw-text-opacity));
}

.text-yellow-500{
  --tw-text-opacity:1;
  color:rgb(234 179 8 / var(--tw-text-opacity));
}

.text-yellow-700{
  --tw-text-opacity:1;
  color:rgb(161 98 7 / var(--tw-text-opacity));
}

.transition-gap{
  transition-property:gap;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-spacing{
  transition-property:margin, padding;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.duration-300{
  transition-duration:300ms;
}

.ease-in-out{
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
}

.hover--gap-2:hover{
  gap:0.5rem;
}

.hover--opacity-50:hover{
  opacity:0.5;
}

.hover--ring-4:hover{
  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.group:hover .group-hover--mt-5{
  margin-top:1.25rem;
}

.group:hover .group-hover--mt----8px--{
  margin-top:-8px;
}
`;(function(){if(!document.getElementById(f)){var t=document.createElement("style");t.id=f,t.textContent=M,document.head.appendChild(t)}})();e();e();e();var w=p(g());e();e();e();e();var d=p(require("react")),u=t=>{let o=(0,d.createContext)(t),i=o.Provider;function a(c){let n=(0,d.useContext)(o);if(!n)throw new Error(`useContext must be used within a Provider, check this ${c!=null?c:""}`);return n}return[a,i]};var[s,A]=u("light");function v({children:t,text:o,selected:i}){let a=s();return r.createElement("div",{className:(0,w.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",o?"px-3":"px-2",{[i?"bg-bg-secondary":"bg-bg-tertiary_alpha_0"]:a==="light",[i?"bg-bg-secondary_dark":"bg-bg-primary_alpha_0_dark"]:a==="dark"})},r.createElement("div",{className:(0,w.default)([{hidden:!t},"mr-2"])},t),r.createElement("span",{className:(0,w.default)("text-sm font-medium",{[i?"text-text-primary":"text-text-secondary"]:a==="light",[i?"text-text-primary_dark":"text-text-secondary_dark"]:a==="dark"})},o))}e();e();function k(){let t=s();return r.createElement("div",{className:t==="light"?"text-text-primary":"text-color-white"},r.createElement("h1",null,"Jiychoi"),r.createElement("p",null,"Hi, I'm ",t," Jiychoi"),r.createElement("p",null,"Poam\uCD5C \uC9C0 \uBBF8\uCCD0\uB530\uC774"))}e();e();var _=p(g());function O({text:t}){let o=s();return r.createElement("div",{className:o==="dark"?"bg-pink-200":"bg-gray-300"},'\uB098 \uC798\uB798 "',t,'" and \uC878\uB824 "',o,'" \uC640\uC774\uCC28 \uC2E0\uB098\uD558\uB2E4..',r.createElement("br",null),(0,_.default)(["bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50",{"bg-gray-300":o==="light"}]))}e();e();var z=p(g());function C({src:t,alt:o,width:i,ratio:a="16:9"}){let c={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[a];return r.createElement("img",{src:t,alt:o,style:{width:i},className:(0,z.default)(c,"object-cover rounded-2xl")})}
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
