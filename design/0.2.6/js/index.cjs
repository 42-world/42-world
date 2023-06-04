var J=Object.create;var f=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty;var A=o=>f(o,"__esModule",{value:!0});var Y=(o,r)=>()=>(o&&(r=o(o=0)),r);var R=(o,r)=>()=>(r||o((r={exports:{}}).exports,r),r.exports),tt=(o,r)=>{A(o);for(var i in r)f(o,i,{get:r[i],enumerable:!0})},et=(o,r,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of Z(r))!Q.call(o,a)&&a!=="default"&&f(o,a,{get:()=>r[a],enumerable:!(i=X(r,a))||i.enumerable});return o},p=o=>et(A(f(o!=null?J(K(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);var e,t=Y(()=>{e=p(require("react"))});var m=R((xt,u)=>{t();(function(){"use strict";var o={}.hasOwnProperty,r="[native code]";function i(){for(var a=[],l=0;l<arguments.length;l++){var n=arguments[l];if(!!n){var d=typeof n;if(d==="string"||d==="number")a.push(n);else if(Array.isArray(n)){if(n.length){var g=i.apply(null,n);g&&a.push(g)}}else if(d==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){a.push(n.toString());continue}for(var c in n)o.call(n,c)&&n[c]&&a.push(c)}}}return a.join(" ")}typeof u!="undefined"&&u.exports?(i.default=i,u.exports=i):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return i}):window.classNames=i})()});tt(exports,{Card:()=>T,Chip:()=>S,GroupHeader:()=>M,Input:()=>P,Sample:()=>N,Text:()=>y,ThemeProvider:()=>rt,Thumbnail:()=>w,useTheme:()=>s});t();t();var j="caf08f00ef641c9754b45157817d5509049e568c541cd61dd960a35259a18f7c",ot=`*,
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

.ml-auto{
  margin-left:auto;
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

.h---44px--{
  height:44px;
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

.w-full{
  width:100%;
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

.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse:0;
  margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));
}

.rounded-2xl{
  border-radius:1rem;
}

.rounded-lg{
  border-radius:0.5rem;
}

.border{
  border-width:1px;
}

.border-solid{
  border-style:solid;
}

.border-border-primary{
  --tw-border-opacity:1;
  border-color:rgb(217 217 217 / var(--tw-border-opacity));
}

.border-color-red{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.bg-bg-primary_alpha_0{
  background-color:#FFFFFF00;
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

.bg-transparent{
  background-color:transparent;
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

.px-4{
  padding-left:1rem;
  padding-right:1rem;
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

.leading---1--5--{
  line-height:1.5;
}

.leading---1--8--{
  line-height:1.8;
}

._--text-color-red{
  --tw-text-opacity:1 !important;
  color:rgb(255 59 48 / var(--tw-text-opacity)) !important;
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
  color:rgb(41 41 41 / var(--tw-text-opacity));
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

.outline{
  outline-style:solid;
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

.placeholder--text-text-tertiary::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder--text-text-tertiary::placeholder{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder--text-text-tertiary_dark::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

.placeholder--text-text-tertiary_dark::placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

.before--mr-1::before{
  content:var(--tw-content);
  margin-right:0.25rem;
}

.before--content-----------::before{
  --tw-content:"*";
  content:var(--tw-content);
}

.focus-within--border-color-blue_200:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(0 122 255 / var(--tw-border-opacity));
}

.focus-within--border-color-red:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
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

.focus--outline-none:focus{
  outline:2px solid transparent;
  outline-offset:2px;
}

.group:hover .group-hover--mt-5{
  margin-top:1.25rem;
}

.group:hover .group-hover--mt----8px--{
  margin-top:-8px;
}
`;(function(){if(!document.getElementById(j)){var o=document.createElement("style");o.id=j,o.textContent=ot,document.head.appendChild(o)}})();t();t();t();var z=p(m());t();t();t();t();var v=p(require("react")),B=o=>{let r=(0,v.createContext)(o),i=r.Provider;function a(l){let n=(0,v.useContext)(r);if(!n)throw new Error(`useContext must be used within a Provider, check this ${l!=null?l:""}`);return n}return[a,i]};var[s,rt]=B("light");t();t();var L=p(m());function w({src:o,alt:r,width:i,ratio:a="16:9"}){let l={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[a];return e.createElement("img",{src:o,alt:r,style:{width:i},className:(0,L.default)(l,"object-cover rounded-2xl")})}function T({imageSrc:o,imageAlt:r,primary:i="",secondary:a="",detail:l}){let n=s();return e.createElement("div",{className:"w-[278px] flex flex-col group"},e.createElement("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300"},e.createElement(w,{src:o,alt:r,width:278,ratio:"16:9"})),e.createElement("div",{className:(0,z.default)("mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300 text-sm font-normal",{"text-text-secondary":n==="light","text-text-secondary_dark":n==="dark"})},e.createElement("span",null,i),e.createElement("span",{className:"mx-1"},"\xB7"),e.createElement("span",null,a)),l&&e.createElement("p",{className:(0,z.default)("text-base font-medium line-clamp-1",{"text-text-primary":n==="light","text-text-primary_dark":n==="dark"})},l))}t();t();var _=p(m());function S({children:o,text:r,selected:i}){let a=s();return e.createElement("div",{className:(0,_.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",r?"px-3":"px-2",{[i?"bg-bg-secondary":"bg-bg-tertiary_alpha_0"]:a==="light",[i?"bg-bg-secondary_dark":"bg-bg-primary_alpha_0_dark"]:a==="dark"})},e.createElement("div",{className:(0,_.default)([{hidden:!o},"mr-2"])},o),e.createElement("span",{className:(0,_.default)("text-sm font-medium",{[i?"text-text-primary":"text-text-secondary"]:a==="light",[i?"text-text-primary_dark":"text-text-secondary_dark"]:a==="dark"})},r))}t();t();var I=p(m());t();t();t();t();t();t();t();t();var H=({classname:o})=>e.createElement("svg",{className:`${o}`,viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M9.29 15.46l3.88-3.88L9.29 7.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}));t();t();t();t();t();t();t();var it={heading1:"text-4xl",heading2:"text-2xl",heading3:"text-lg",body1:"text-base",body2:"text-sm",small:"text-xs"},at={regular:"font-light",medium:"font-normal",semibold:"font-semibold"},nt={left:"text-left",right:"text-right",center:"text-center"},lt={light:{primary:"text-text-primary",secondary:"text-text-secondary",tertiary:"text-text-tertiary",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"},dark:{primary:"text-text-primary_dark",secondary:"text-text-secondary_dark",tertiary:"text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"}};function y({text:o,size:r="body1",weight:i="regular",align:a="left",color:l="primary"}){let n=s();return e.createElement("p",{className:`font-display
        ${it[r]}
        ${at[i]}
        ${nt[a]}
        ${lt[n][l]}
        `},o)}function M({href:o,text:r}){let i=s();return e.createElement("a",{className:(0,I.default)("flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out",{"text-text-primary":i==="light","text-text-primary_dark":i==="dark"}),href:o},e.createElement(y,{text:r,size:"heading3",weight:"semibold"}),e.createElement(H,{classname:(0,I.default)("w-6","h-6")}))}t();t();var D=p(m());function N({text:o}){let r=s();return e.createElement("div",{className:r==="dark"?"bg-pink-200":"bg-gray-300"},'\uB098 \uC798\uB798 "',o,'" and \uC878\uB824 "',r,'" \uC640\uC774\uCC28 \uC2E0\uB098\uD558\uB2E4..',e.createElement("br",null),(0,D.default)(["bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50",{"bg-gray-300":r==="light"}]))}t();t();var b=p(m()),C=p(require("react"));t();var k=p(require("react")),V=({state:o,defaultState:r,onChange:i})=>{let[a,l]=(0,k.useState)(typeof r=="function"?r():r),n=o!=null,d=n?o:a,g=(0,k.useCallback)(c=>{typeof c=="function"&&(c=c()),n||l(c),i==null||i(c)},[]);return[d,g]};var P=(0,C.forwardRef)(({id:o,label:r,value:i,defaultValue:a,subLabel:l,variant:n,rightAddon:d,hasError:g,maxLength:c,onValueChange:$,...U},W)=>{let E=(0,C.useId)(),x=s(),[F,q]=V({state:i,defaultState:a!=null?a:"",onChange:$}),G=O=>{q(O.target.value)};return e.createElement("div",{className:"flex flex-col space-y-2"},e.createElement("div",{className:"flex w-full"},r&&e.createElement("label",{htmlFor:o!=null?o:E,className:(0,b.default)('before:content-["*"] before:mr-1 text-sm leading-[1.8]  font-normal',{"text-text-secondary":x==="light","text-text-secondary_dark":x==="dark"})},r),c&&e.createElement("span",{className:(0,b.default)("text-sm leading-[1.8] font-normal ml-auto",{"text-text-secondary":x==="light","text-text-secondary_dark":x==="dark"})},"(",F.length,"/",c,")")),e.createElement("div",{className:(0,b.default)("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":n==="outline",[x==="light"?"bg-bg-secondary":"bg-bg-secondary_dark"]:n==="filled","border-color-red focus-within:border-color-red":g})},e.createElement("input",{ref:W,id:o!=null?o:E,className:(0,b.default)("w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5]",{"text-text-primary placeholder:text-text-tertiary":x==="light","text-text-primary_dark placeholder:text-text-tertiary_dark":x==="dark"}),value:F,onChange:G,maxLength:c,...U}),d&&e.createElement("span",{className:"flex"},d)),l&&e.createElement("span",{className:(0,b.default)("text-sm leading-[1.8] font-normal",{"text-text-secondary":x==="light","text-text-secondary_dark":x==="dark","!text-color-red":g})},l))});
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
