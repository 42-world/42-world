var J=Object.create;var u=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var I=e=>u(e,"__esModule",{value:!0});var tt=(e,r)=>()=>(e&&(r=e(e=0)),r);var nt=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),et=(e,r)=>{I(e);for(var o in r)u(e,o,{get:r[o],enumerable:!0})},rt=(e,r,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Q(r))!R.call(e,i)&&i!=="default"&&u(e,i,{get:()=>r[i],enumerable:!(o=K(r,i))||o.enumerable});return e},d=e=>rt(I(u(e!=null?J(Z(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var t,n=tt(()=>{t=d(require("react"))});var m=nt((mt,y)=>{n();(function(){"use strict";var e={}.hasOwnProperty,r="[native code]";function o(){for(var i=[],s=0;s<arguments.length;s++){var a=arguments[s];if(!!a){var p=typeof a;if(p==="string"||p==="number")i.push(a);else if(Array.isArray(a)){if(a.length){var g=o.apply(null,a);g&&i.push(g)}}else if(p==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){i.push(a.toString());continue}for(var c in a)e.call(a,c)&&a[c]&&i.push(c)}}}return i.join(" ")}typeof y!="undefined"&&y.exports?(o.default=o,y.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});et(exports,{Avatar:()=>w,AvatarText:()=>k,Card:()=>_,Chip:()=>z,Divider:()=>h,GroupHeader:()=>T,Input:()=>S,ListItem:()=>P,Sample:()=>N,Text:()=>l,Thumbnail:()=>x});n();n();var E="43da39888eb53c52c3e835ce02db4272dcbd44da931ead2bc8ddcb938e64ef1e",ot=`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');

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

.flex{
  display:flex;
}

.hidden{
  display:none;
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

.text-pink-500{
  --tw-text-opacity:1;
  color:rgb(236 72 153 / var(--tw-text-opacity));
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

:is(.dark .dark\\:text-gray-700){
  --tw-text-opacity:1;
  color:rgb(55 65 81 / var(--tw-text-opacity));
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
`;(function(){if(!document.getElementById(E)){var e=document.createElement("style");e.id=E,e.textContent=ot,document.head.appendChild(e)}})();n();n();n();var F=d(m());function w({src:e,alt:r="",size:o="40px"}){return t.createElement("img",{src:e,alt:r,className:(0,F.default)("rounded-full object-cover",{"w-10 h-10":o==="40px","w-16 h-16":o==="64px"})})}n();n();var L=d(m());function k({src:e,alt:r="",size:o="40px",mainText:i,subText:s}){return t.createElement("div",{className:(0,L.default)("flex flex-row",{"gap-3":o==="40px","gap-4":o==="64px"})},t.createElement(w,{src:e,alt:r,size:o}),t.createElement("div",{className:"flex flex-col items-start justify-center"},t.createElement(l,{text:i,size:o==="64px"?"heading3":"body2",weight:"medium"}),s&&t.createElement(l,{text:s,size:o==="64px"?"body2":"small",color:"secondary"})))}n();n();n();n();var it={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},at={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},lt={left:"text-left",right:"text-right",center:"text-center"},st={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function l({className:e,text:r,size:o="body1",weight:i="regular",align:s="left",color:a="primary"}){return t.createElement("p",{className:`font-display
        ${it[o]}
        ${at[i]}
        ${lt[s]}
        ${st[a]}
        ${e}
        `},r)}n();n();var D=d(m());function x({src:e,alt:r="",width:o,ratio:i="16:9"}){let s={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[i];return t.createElement("img",{src:e,alt:r,style:{width:o},className:(0,D.default)(s,"object-cover rounded-2xl")})}function _({imageSrc:e,imageAlt:r,primary:o="",secondary:i="",detail:s}){return t.createElement("div",{className:"w-[278px] flex flex-col group"},t.createElement("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300"},t.createElement(x,{src:e,alt:r,width:278,ratio:"16:9"})),t.createElement("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300"},t.createElement(l,{text:`${o} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})),s&&t.createElement(l,{text:s,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}n();n();var C=d(m());function z({children:e,text:r,selected:o}){return t.createElement("div",{className:(0,C.default)("w-fit h-8 flex flex-row items-center rounded-lg select-none",r?"px-3":"px-2",o?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},t.createElement("div",{className:(0,C.default)([{hidden:!e},"mr-2"])},e),r&&t.createElement(l,{text:r,size:"body2",weight:"medium",color:o?"primary":"secondary"}))}n();n();var B=d(m());function h({variant:e="primary",className:r,...o}){return t.createElement("div",{className:(0,B.default)("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":e==="primary","bg-border-secondary dark:bg-border-secondary_dark":e==="secondary"},r),...o})}n();n();n();n();n();n();n();n();n();var j=e=>t.createElement("svg",{...e,viewBox:"0 0 24 24",fill:"currentColor"},t.createElement("path",{d:"M9.29 15.46l3.88-3.88L9.29 7.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}));n();n();n();n();n();function T({href:e,text:r}){return t.createElement("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:e},t.createElement(l,{text:r,size:"heading3",weight:"semibold"}),t.createElement(j,{className:"w-6 h-6"}))}n();n();var V=d(m()),v=d(require("react"));n();var f=d(require("react")),H=({state:e,defaultState:r,onChange:o})=>{let[i,s]=(0,f.useState)(typeof r=="function"?r():r),a=e!=null,p=a?e:i,g=(0,f.useCallback)(c=>{typeof c=="function"&&(c=c()),a||s(c),o==null||o(c)},[]);return[p,g]};var S=(0,v.forwardRef)(({id:e,label:r,value:o,defaultValue:i,subLabel:s,variant:a,rightAddon:p,hasError:g,maxLength:c,onValueChange:U,...W},q)=>{let A=(0,v.useId)(),[M,O]=H({state:o,defaultState:i!=null?i:"",onChange:U}),X=Y=>{O(Y.target.value)};return t.createElement("div",{className:"flex flex-col space-y-2"},t.createElement("div",{className:"flex w-full"},r&&t.createElement("label",{htmlFor:e!=null?e:A,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark'},r),c&&t.createElement(l,{className:"ml-auto",text:`(${M.length}/${c})`,size:"body2",weight:"regular",color:"secondary"})),t.createElement("div",{className:(0,V.default)("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":a==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":a==="filled","border-color-red focus-within:border-color-red":g})},t.createElement("input",{ref:q,id:e!=null?e:A,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:M,onChange:X,maxLength:c,...W}),p&&t.createElement("span",{className:"flex"},p)),s&&t.createElement(l,{text:s,size:"body2",weight:"regular",color:g?"red_200":"secondary"}))});n();n();function N({text:e}){return t.createElement("p",{className:"text-pink-500 dark:text-gray-700"},'This is Sample! "',e,'"')}n();n();n();var G=e=>t.createElement("svg",{...e,viewBox:"0 0 24 24",fill:"currentColor"},t.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}));n();var $=e=>t.createElement("svg",{...e,viewBox:"0 0 24 24",fill:"currentColor"},t.createElement("path",{d:"M10.67 19.8C5.15 14.85 1.95 12.16 2 8.41c.04-2.97 2.3-4.39 2.35-4.43 3.61-2.46 6.89.22 7.65 1.11.75-.88 3.99-3.51 7.56-1.16.52.34 2.23 1.65 2.42 4.12.32 4.28-4.14 7.76-8.65 11.76-.38.34-.86.5-1.34.5-.47 0-.94-.17-1.32-.51z"}));var ct=(e,r)=>t.createElement("div",{className:"flex flex-row items-center gap-1"},e&&t.createElement(l,{text:e,size:"body2",weight:"medium",color:"secondary"}),e&&r&&"\xB7",r&&t.createElement(l,{text:r,size:"body2",weight:"regular",color:"secondary"}));function P({title:e,thumbnailSrc:r,secondaryTextFirst:o,secondaryTextSecond:i,commentCnt:s,likeCnt:a,hasBorder:p=!0}){return t.createElement("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out"},t.createElement("div",{className:"flex flex-row items-center py-4"},r&&t.createElement(x,{src:r,alt:e,width:85,ratio:"16:9"}),t.createElement("div",{className:"ml-3 flex-1"},ct(o,i),t.createElement(l,{text:e,size:"body1",weight:"medium",color:"primary"})),t.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},s&&t.createElement("div",{className:"flex flex-row items-center gap-2"},t.createElement(G,{className:"w-4 h-4"}),t.createElement(l,{text:s.toString(),size:"body2",weight:"regular",color:"secondary"})),a&&t.createElement("div",{className:"flex flex-row items-center gap-2"},t.createElement($,{className:"w-4 h-4"}),t.createElement(l,{text:a.toString(),size:"body2",weight:"regular",color:"secondary"})))),p&&t.createElement(h,{variant:"secondary"}))}
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
