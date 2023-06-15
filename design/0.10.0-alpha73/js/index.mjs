var Z=Object.create;var h=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var nt=Object.getPrototypeOf,et=Object.prototype.hasOwnProperty;var rt=e=>h(e,"__esModule",{value:!0});var ot=(e,r)=>()=>(e&&(r=e(e=0)),r);var it=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var at=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of tt(r))!et.call(e,i)&&i!=="default"&&h(e,i,{get:()=>r[i],enumerable:!(o=R(r,i))||o.enumerable});return e},x=e=>at(rt(h(e!=null?Z(nt(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);import*as t from"react";var n=ot(()=>{});var g=it((vt,w)=>{n();(function(){"use strict";var e={}.hasOwnProperty,r="[native code]";function o(){for(var i=[],l=0;l<arguments.length;l++){var s=arguments[l];if(!!s){var p=typeof s;if(p==="string"||p==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var m=o.apply(null,s);m&&i.push(m)}}else if(p==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var d in s)e.call(s,d)&&s[d]&&i.push(d)}}}return i.join(" ")}typeof w!="undefined"&&w.exports?(o.default=o,w.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});n();n();var _="43da39888eb53c52c3e835ce02db4272dcbd44da931ead2bc8ddcb938e64ef1e",lt=`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');

*,
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

.ml-1{
  margin-left:0.25rem;
}

.ml-3{
  margin-left:0.75rem;
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

.inline-block{
  display:inline-block;
}

.flex{
  display:flex;
}

.aspect-16\\/10{
  aspect-ratio:16 / 10;
}

.aspect-square{
  aspect-ratio:1 / 1;
}

.aspect-video{
  aspect-ratio:16 / 9;
}

.h-10{
  height:2.5rem;
}

.h-16{
  height:4rem;
}

.h-4{
  height:1rem;
}

.h-6{
  height:1.5rem;
}

.h-8{
  height:2rem;
}

.h-\\[1px\\]{
  height:1px;
}

.h-\\[44px\\]{
  height:44px;
}

.w-10{
  width:2.5rem;
}

.w-16{
  width:4rem;
}

.w-4{
  width:1rem;
}

.w-6{
  width:1.5rem;
}

.w-\\[278px\\]{
  width:278px;
}

.w-\\[540px\\]{
  width:540px;
}

.w-fit{
  width:-moz-fit-content;
  width:fit-content;
}

.w-full{
  width:100%;
}

.flex-1{
  flex:1 1 0%;
}

.cursor-pointer{
  cursor:pointer;
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

.items-start{
  align-items:flex-start;
}

.items-center{
  align-items:center;
}

.justify-center{
  justify-content:center;
}

.gap-1{
  gap:0.25rem;
}

.gap-2{
  gap:0.5rem;
}

.gap-3{
  gap:0.75rem;
}

.gap-4{
  gap:1rem;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse:0;
  margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));
}

.rounded-2xl{
  border-radius:1rem;
}

.rounded-full{
  border-radius:9999px;
}

.rounded-lg{
  border-radius:0.5rem;
}

.border{
  border-width:1px;
}

.border-0{
  border-width:0px;
}

.border-solid{
  border-style:solid;
}

.border-border-primary{
  --tw-border-opacity:1;
  border-color:rgb(209 213 219 / var(--tw-border-opacity));
}

.border-color-red{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.bg-bg-primary_alpha_0{
  background-color:#FFFFFF00;
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

.bg-border-primary{
  --tw-bg-opacity:1;
  background-color:rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-border-primary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(82 82 82 / var(--tw-bg-opacity));
}

.bg-border-secondary{
  --tw-bg-opacity:1;
  background-color:rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-border-secondary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(38 38 38 / var(--tw-bg-opacity));
}

.bg-color-blue_200{
  --tw-bg-opacity:1;
  background-color:rgb(0 122 255 / var(--tw-bg-opacity));
}

.bg-transparent{
  background-color:transparent;
}

.fill-black{
  fill:#000;
}

.fill-color-white{
  fill:#FFFFFF;
}

.fill-text-secondary{
  fill:#737373;
}

.fill-yellow-400{
  fill:#facc15;
}

.object-cover{
  -o-object-fit:cover;
     object-fit:cover;
}

.px-0{
  padding-left:0px;
  padding-right:0px;
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

.py-4{
  padding-top:1rem;
  padding-bottom:1rem;
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

.font-medium{
  font-weight:500;
}

.font-normal{
  font-weight:400;
}

.font-semibold{
  font-weight:600;
}

.leading-\\[1\\.5\\]{
  line-height:1.5;
}

.leading-\\[1\\.8\\]{
  line-height:1.8;
}

.leading-\\[1\\.8rem\\]{
  line-height:1.8rem;
}

.leading-normal{
  line-height:1.5;
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

.text-text-secondary{
  --tw-text-opacity:1;
  color:rgb(115 115 115 / var(--tw-text-opacity));
}

.text-text-tertiary{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
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

.transition-transform{
  transition-property:transform;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.duration-300{
  transition-duration:300ms;
}

.ease-in-out{
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-out{
  transition-timing-function:cubic-bezier(0, 0, 0.2, 1);
}

.placeholder\\:text-text-tertiary::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder\\:text-text-tertiary::placeholder{
  --tw-text-opacity:1;
  color:rgb(181 181 181 / var(--tw-text-opacity));
}

.before\\:mr-1::before{
  content:var(--tw-content);
  margin-right:0.25rem;
}

.before\\:content-\\[\\"\\*\\"\\]::before{
  --tw-content:"*";
  content:var(--tw-content);
}

.focus-within\\:border-color-blue_200:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(0 122 255 / var(--tw-border-opacity));
}

.focus-within\\:border-color-red:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.hover\\:gap-2:hover{
  gap:0.5rem;
}

.hover\\:border-color-blue_200:hover{
  --tw-border-opacity:1;
  border-color:rgb(0 122 255 / var(--tw-border-opacity));
}

.hover\\:bg-color-blue_300:hover{
  --tw-bg-opacity:1;
  background-color:rgb(0 86 179 / var(--tw-bg-opacity));
}

.focus\\:outline-none:focus{
  outline:2px solid transparent;
  outline-offset:2px;
}

.active\\:scale-95:active{
  --tw-scale-x:.95;
  --tw-scale-y:.95;
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:mt-5{
  margin-top:1.25rem;
}

.group:hover .group-hover\\:mt-\\[-8px\\]{
  margin-top:-8px;
}

.group:hover .group-hover\\:text-color-blue_200{
  --tw-text-opacity:1;
  color:rgb(0 122 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:bg-bg-primary_alpha_0_dark){
  background-color:#00000000;
}

:is(.dark .dark\\:bg-bg-secondary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(20 20 20 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-border-primary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(82 82 82 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-border-secondary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(38 38 38 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:fill-white){
  fill:#fff;
}

:is(.dark .dark\\:text-text-primary_dark){
  --tw-text-opacity:1;
  color:rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-secondary_dark){
  --tw-text-opacity:1;
  color:rgb(186 186 186 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-tertiary_dark){
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}
`;(function(){if(!document.getElementById(_)){var e=document.createElement("style");e.id=_,e.textContent=lt,document.head.appendChild(e)}})();n();n();n();var T=x(g());function u({src:e,alt:r="",size:o="40px"}){return t.createElement("img",{src:e,alt:r,className:(0,T.default)("rounded-full object-cover",{"w-10 h-10":o==="40px","w-16 h-16":o==="64px"})})}n();n();var z=x(g());function C({src:e,alt:r="",size:o="40px",mainText:i,subText:l}){return t.createElement("div",{className:(0,z.default)("flex flex-row",{"gap-3":o==="40px","gap-4":o==="64px"})},t.createElement(u,{src:e,alt:r,size:o}),t.createElement("div",{className:"flex flex-col items-start justify-center"},t.createElement(a,{text:i,size:o==="64px"?"heading3":"body2",weight:"medium"}),l&&t.createElement(a,{text:l,size:o==="64px"?"body2":"small",color:"secondary"})))}n();n();n();n();var st={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},ct={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},dt={left:"text-left",right:"text-right",center:"text-center"},pt={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function a({className:e,text:r,size:o="body1",weight:i="regular",align:l="left",color:s="primary"}){return t.createElement("p",{className:`font-display
        ${st[o]}
        ${ct[i]}
        ${dt[l]}
        ${pt[s]}
        ${e}
        `},r)}n();n();var S=x(g());function b({src:e,alt:r="",width:o,ratio:i="16:9"}){let l={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[i];return t.createElement("img",{src:e,alt:r,style:{width:o},className:(0,S.default)(l,"object-cover rounded-2xl")})}function N({imageSrc:e,imageAlt:r,primary:o="",secondary:i="",detail:l}){return t.createElement("div",{className:"w-[278px] flex flex-col group"},t.createElement("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300"},t.createElement(b,{src:e,alt:r,width:278,ratio:"16:9"})),t.createElement("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300"},t.createElement(a,{text:`${o} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})),l&&t.createElement(a,{text:l,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}n();n();var I=x(g());n();n();function c({svg:e,size:r="medium",className:o,...i}){let l={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[r]||{width:24,height:24};return t.createElement(e,{viewBox:"0 0 24 24",width:l.width,height:l.height,className:o!=null?o:"fill-black dark:fill-white",...i})}function A({icon:e,text:r,selected:o}){return t.createElement("div",{className:(0,I.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",r?"px-3":"px-2",o?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},e&&t.createElement(c,{svg:e,className:"mr-2"}),r&&t.createElement(a,{text:r,size:"body2",weight:"medium",color:o?"primary":"secondary"}))}n();n();var P=x(g());function f({variant:e="primary",className:r,...o}){return t.createElement("div",{className:(0,P.default)("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":e==="primary","bg-border-secondary dark:bg-border-secondary_dark":e==="secondary"},r),...o})}n();n();n();var B=e=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...e},t.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));function M({href:e,text:r}){return t.createElement("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:e},t.createElement(a,{text:r,size:"heading3",weight:"semibold"}),t.createElement(c,{svg:B,className:"w-6 h-6"}))}n();n();var L=x(g());import{forwardRef as xt,useId as bt}from"react";n();import{useCallback as gt,useState as mt}from"react";var E=({state:e,defaultState:r,onChange:o})=>{let[i,l]=mt(typeof r=="function"?r():r),s=e!=null,p=s?e:i,m=gt(d=>{typeof d=="function"&&(d=d()),s||l(d),o==null||o(d)},[]);return[p,m]};var G=xt(({id:e,label:r,value:o,defaultValue:i,subLabel:l,variant:s,rightAddon:p,hasError:m,maxLength:d,onValueChange:q,...X},Y)=>{let v=bt(),[k,J]=E({state:o,defaultState:i!=null?i:"",onChange:q}),K=Q=>{J(Q.target.value)};return t.createElement("div",{className:"flex flex-col space-y-2"},t.createElement("div",{className:"flex w-full"},r&&t.createElement("label",{htmlFor:e!=null?e:v,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark'},r),d&&t.createElement(a,{className:"ml-auto",text:`(${k.length}/${d})`,size:"body2",weight:"regular",color:"secondary"})),t.createElement("div",{className:(0,L.default)("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":s==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":s==="filled","border-color-red focus-within:border-color-red":m})},t.createElement("input",{ref:Y,id:e!=null?e:v,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:k,onChange:K,maxLength:d,...X}),p&&t.createElement("span",{className:"flex"},p)),l&&t.createElement(a,{text:l,size:"body2",weight:"regular",color:m?"red_200":"secondary"}))});n();n();n();var V=e=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...e},t.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}));n();var j=e=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...e},t.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}));var wt=(e,r)=>t.createElement("div",{className:"flex flex-row items-center gap-1"},e&&t.createElement(a,{text:e,size:"body2",weight:"medium",color:"secondary"}),e&&r&&"\xB7",r&&t.createElement(a,{text:r,size:"body2",weight:"regular",color:"secondary"}));function H({title:e,thumbnailSrc:r,secondaryTextFirst:o,secondaryTextSecond:i,commentCnt:l,likeCnt:s,hasBorder:p=!0}){return t.createElement("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none"},t.createElement("div",{className:"flex flex-row items-center py-4"},r&&t.createElement(b,{src:r,alt:e,width:85,ratio:"16:9"}),t.createElement("div",{className:"ml-3 flex-1"},wt(o,i),t.createElement(a,{text:e,size:"body1",weight:"medium",color:"primary"})),t.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},l&&t.createElement("div",{className:"flex flex-row items-center gap-2"},t.createElement(c,{svg:V,className:"w-4 h-4"}),t.createElement(a,{text:l.toString(),size:"body2",weight:"regular",color:"secondary"})),s&&t.createElement("div",{className:"flex flex-row items-center gap-2"},t.createElement(c,{svg:j,className:"w-4 h-4"}),t.createElement(a,{text:s.toString(),size:"body2",weight:"regular",color:"secondary"})))),p&&t.createElement(f,{variant:"secondary"}))}n();n();n();var D=e=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...e},t.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}));n();var F=e=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...e},t.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}));function $({text:e}){return t.createElement("div",{className:"flex flex-row items-center"},t.createElement(a,{text:`This is Samp3le! "${e}"`,size:"heading3",weight:"semibold",className:"mr-2"}),t.createElement(c,{svg:F,size:"xsmall"}),t.createElement(c,{svg:D,size:"medium",className:"inline-block dark:fill-white fill-yellow-400 ml-1"}))}n();n();var y=x(g());var ut={primary:"bg-color-blue_200 border-0 hover:bg-color-blue_300",secondary:"border-border-primary hover:border-color-blue_200",text:"border-0"};function O({text:e,variant:r="primary",icon:o,...i}){return t.createElement("button",{className:(0,y.default)(`group h-8 flex flex-row items-center gap-2 px-3 rounded-2xl border border-solid ${ut[r]}`,{"px-0":!o}),...i},o&&t.createElement(c,{svg:o,size:"small",className:r==="primary"?"fill-color-white":"fill-text-secondary"}),e&&t.createElement(a,{text:e,size:"body2",weight:"medium",color:r==="primary"?"white":"secondary",className:(0,y.default)({"group-hover:text-color-blue_200":r!=="primary"})}))}n();n();function U(){return typeof window=="undefined"?!1:window.document.documentElement.classList.contains("dark")}n();function Rn(){return typeof window=="undefined"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches}n();function W(e){if(typeof window=="undefined")return;let r=window.document;e==="dark"?r.documentElement.classList.add("dark"):r.documentElement.classList.remove("dark")}n();function oe(){typeof window!="undefined"&&W(U()?"light":"dark")}export{u as Avatar,C as AvatarText,O as Button,N as Card,A as Chip,f as Divider,M as GroupHeader,c as Icon,G as Input,H as ListItem,$ as Sample,a as Text,b as Thumbnail,U as isDarkTheme,Rn as isOsDarkTheme,W as setTheme,oe as toggleTheme};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
