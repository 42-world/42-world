var gr=Object.create;var rt=Object.defineProperty;var ur=Object.getOwnPropertyDescriptor;var br=Object.getOwnPropertyNames;var fr=Object.getPrototypeOf,xr=Object.prototype.hasOwnProperty;var wr=t=>rt(t,"__esModule",{value:!0});var yr=(t,e)=>()=>(t&&(e=t(t=0)),e);var vr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var hr=(t,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of br(e))!xr.call(t,i)&&i!=="default"&&rt(t,i,{get:()=>e[i],enumerable:!(o=ur(e,i))||o.enumerable});return t},S=t=>hr(wr(rt(t!=null?gr(fr(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);import*as r from"react";var n=yr(()=>{});var C=vr((Qr,Y)=>{n();(function(){"use strict";var t={}.hasOwnProperty,e="[native code]";function o(){for(var i=[],l=0;l<arguments.length;l++){var a=arguments[l];if(!!a){var s=typeof a;if(s==="string"||s==="number")i.push(a);else if(Array.isArray(a)){if(a.length){var d=o.apply(null,a);d&&i.push(d)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){i.push(a.toString());continue}for(var c in a)t.call(a,c)&&a[c]&&i.push(c)}}}return i.join(" ")}typeof Y!="undefined"&&Y.exports?(o.default=o,Y.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});n();n();var ft="43da39888eb53c52c3e835ce02db4272dcbd44da931ead2bc8ddcb938e64ef1e",kr=`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');

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

.absolute{
  position:absolute;
}

.relative{
  position:relative;
}

.left-0{
  left:0px;
}

.top-0{
  top:0px;
}

.z-10{
  z-index:10;
}

.mx-4{
  margin-left:1rem;
  margin-right:1rem;
}

.mb-4{
  margin-bottom:1rem;
}

.mb-6{
  margin-bottom:1.5rem;
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

.mt-4{
  margin-top:1rem;
}

.mt-6{
  margin-top:1.5rem;
}

.line-clamp-1{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}

.line-clamp-4{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:4;
}

.inline-block{
  display:inline-block;
}

.flex{
  display:flex;
}

.contents{
  display:contents;
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

.h-fit{
  height:-moz-fit-content;
  height:fit-content;
}

.h-full{
  height:100%;
}

.w-10{
  width:2.5rem;
}

.w-16{
  width:4rem;
}

.w-411{
  width:411px;
}

.w-6{
  width:1.5rem;
}

.w-\\[278px\\]{
  width:278px;
}

.w-\\[720px\\]{
  width:720px;
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

.justify-start{
  justify-content:flex-start;
}

.justify-center{
  justify-content:center;
}

.justify-between{
  justify-content:space-between;
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

.overflow-hidden{
  overflow:hidden;
}

.break-words{
  overflow-wrap:break-word;
}

.rounded{
  border-radius:0.25rem;
}

.rounded-2xl{
  border-radius:1rem;
}

.rounded-3xl{
  border-radius:1.5rem;
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

.border-border-secondary{
  --tw-border-opacity:1;
  border-color:rgb(243 244 246 / var(--tw-border-opacity));
}

.border-border-secondary_dark{
  --tw-border-opacity:1;
  border-color:rgb(38 38 38 / var(--tw-border-opacity));
}

.border-color-red{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.bg-bg-primary_alpha_0{
  background-color:#FFFFFF00;
}

.bg-bg-primary_dark{
  --tw-bg-opacity:1;
  background-color:rgb(10 10 10 / var(--tw-bg-opacity));
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
  background-color:rgb(56 189 248 / var(--tw-bg-opacity));
}

.bg-color-brown{
  --tw-bg-opacity:1;
  background-color:rgb(162 132 94 / var(--tw-bg-opacity));
}

.bg-color-cyan{
  --tw-bg-opacity:1;
  background-color:rgb(50 173 230 / var(--tw-bg-opacity));
}

.bg-color-indigo{
  --tw-bg-opacity:1;
  background-color:rgb(88 86 214 / var(--tw-bg-opacity));
}

.bg-color-mint{
  --tw-bg-opacity:1;
  background-color:rgb(0 199 190 / var(--tw-bg-opacity));
}

.bg-color-pink{
  --tw-bg-opacity:1;
  background-color:rgb(255 45 85 / var(--tw-bg-opacity));
}

.bg-color-system_200{
  --tw-bg-opacity:1;
  background-color:rgb(56 189 248 / var(--tw-bg-opacity));
}

.bg-color-yellow{
  --tw-bg-opacity:1;
  background-color:rgb(255 204 0 / var(--tw-bg-opacity));
}

.bg-transparent{
  background-color:transparent;
}

.bg-gradient-to-t{
  background-image:linear-gradient(to top, var(--tw-gradient-stops));
}

.bg-none{
  background-image:none;
}

.from-bg-primary{
  --tw-gradient-from:#FFFFFF var(--tw-gradient-from-position);
  --tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-transparent{
  --tw-gradient-to:transparent var(--tw-gradient-to-position);
}

.fill-black{
  fill:#000;
}

.fill-color-system_200{
  fill:#38BDF8;
}

.fill-color-white{
  fill:#FFFFFF;
}

.fill-text-primary{
  fill:#000000;
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

.p-2{
  padding:0.5rem;
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

.py-\\[3px\\]{
  padding-top:3px;
  padding-bottom:3px;
}

.pl-4{
  padding-left:1rem;
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

.text-color-system_200{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
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

.outline-none{
  outline:2px solid transparent;
  outline-offset:2px;
}

.outline{
  outline-style:solid;
}

.transition{
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-\\[fill\\]{
  transition-property:fill;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-all{
  transition-property:all;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
}

.transition-colors{
  transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:150ms;
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
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.focus-within\\:border-color-red:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(255 59 48 / var(--tw-border-opacity));
}

.focus-within\\:border-color-system_200:focus-within{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.hover\\:gap-2:hover{
  gap:0.5rem;
}

.hover\\:border-color-system_200:hover{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.hover\\:bg-color-system_300:hover{
  --tw-bg-opacity:1;
  background-color:rgb(2 132 199 / var(--tw-bg-opacity));
}

.focus\\:outline-none:focus{
  outline:2px solid transparent;
  outline-offset:2px;
}

.active\\:scale-92:active{
  --tw-scale-x:0.92;
  --tw-scale-y:0.92;
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.active\\:scale-95:active{
  --tw-scale-x:.95;
  --tw-scale-y:.95;
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group\\/feed:hover .group-hover\\/feed\\:translate-y-m8{
  --tw-translate-y:-8px;
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:translate-y-m8{
  --tw-translate-y:-8px;
  transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:fill-color-system_200{
  fill:#38BDF8;
}

.group:hover .group-hover\\:text-color-system_200{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

:is(.dark .dark\\:border-border-primary_dark){
  --tw-border-opacity:1;
  border-color:rgb(82 82 82 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-border-secondary_dark){
  --tw-border-opacity:1;
  border-color:rgb(38 38 38 / var(--tw-border-opacity));
}

:is(.dark .dark\\:bg-bg-primary){
  --tw-bg-opacity:1;
  background-color:rgb(255 255 255 / var(--tw-bg-opacity));
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

:is(.dark .dark\\:from-bg-primary_dark){
  --tw-gradient-from:#0A0A0A var(--tw-gradient-from-position);
  --tw-gradient-to:rgb(10 10 10 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);
}

:is(.dark .dark\\:fill-color-system_200){
  fill:#38BDF8;
}

:is(.dark .dark\\:fill-text-primary_dark){
  fill:#FFFFFF;
}

:is(.dark .dark\\:fill-text-secondary_dark){
  fill:#BABABA;
}

:is(.dark .dark\\:fill-white){
  fill:#fff;
}

:is(.dark .dark\\:text-color-system_200){
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-primary){
  --tw-text-opacity:1;
  color:rgb(0 0 0 / var(--tw-text-opacity));
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

:is(.dark .hover\\:dark\\:border-color-system_200):hover{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

.\\[\\&\\>p\\]\\:text-color-system_200>p{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

:is(.dark .\\[\\&\\>p\\]\\:dark\\:text-color-system_200)>p{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}
`;(function(){if(!document.getElementById(ft)){var t=document.createElement("style");t.id=ft,t.textContent=kr,document.head.appendChild(t)}})();n();n();n();var xt=S(C());function q({src:t,alt:e="",size:o="40px"}){return r.createElement("img",{src:t,alt:e,className:(0,xt.default)("rounded-full object-cover",{"h-10 w-10":o==="40px","h-16 w-16":o==="64px"})})}n();n();var Vt=S(C());n();n();n();n();function wt(){for(var t=0,e,o,i="";t<arguments.length;)(e=arguments[t++])&&(o=yt(e))&&(i&&(i+=" "),i+=o);return i}function yt(t){if(typeof t=="string")return t;for(var e,o="",i=0;i<t.length;i++)t[i]&&(e=yt(t[i]))&&(o&&(o+=" "),o+=e);return o}n();n();n();var et="-";function vt(t){var e=_r(t),o=t.conflictingClassGroups,i=t.conflictingClassGroupModifiers,l=i===void 0?{}:i;function a(d){var c=d.split(et);return c[0]===""&&c.length!==1&&c.shift(),ht(c,e)||Tr(d)}function s(d,c){var m=o[d]||[];return c&&l[d]?[].concat(m,l[d]):m}return{getClassGroupId:a,getConflictingClassGroupIds:s}}function ht(t,e){var s;if(t.length===0)return e.classGroupId;var o=t[0],i=e.nextPart.get(o),l=i?ht(t.slice(1),i):void 0;if(l)return l;if(e.validators.length!==0){var a=t.join(et);return(s=e.validators.find(function(d){var c=d.validator;return c(a)}))==null?void 0:s.classGroupId}}var kt=/^\[(.+)\]$/;function Tr(t){if(kt.test(t)){var e=kt.exec(t)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function _r(t){var e=t.theme,o=t.prefix,i={nextPart:new Map,validators:[]},l=zr(Object.entries(t.classGroups),o);return l.forEach(function(a){var s=a[0],d=a[1];nt(d,i,s,e)}),i}function nt(t,e,o,i){t.forEach(function(l){if(typeof l=="string"){var a=l===""?e:Tt(e,l);a.classGroupId=o;return}if(typeof l=="function"){if(Cr(l)){nt(l(i),e,o,i);return}e.validators.push({validator:l,classGroupId:o});return}Object.entries(l).forEach(function(s){var d=s[0],c=s[1];nt(c,Tt(e,d),o,i)})})}function Tt(t,e){var o=t;return e.split(et).forEach(function(i){o.nextPart.has(i)||o.nextPart.set(i,{nextPart:new Map,validators:[]}),o=o.nextPart.get(i)}),o}function Cr(t){return t.isThemeGetter}function zr(t,e){return e?t.map(function(o){var i=o[0],l=o[1],a=l.map(function(s){return typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(function(d){var c=d[0],m=d[1];return[e+c,m]})):s});return[i,a]}):t}n();function _t(t){if(t<1)return{get:function(){},set:function(){}};var e=0,o=new Map,i=new Map;function l(a,s){o.set(a,s),e++,e>t&&(e=0,i=o,o=new Map)}return{get:function(s){var d=o.get(s);if(d!==void 0)return d;if((d=i.get(s))!==void 0)return l(s,d),d},set:function(s,d){o.has(s)?o.set(s,d):l(s,d)}}}n();var ot="!";function Ct(t){var e=t.separator||":",o=e.length===1,i=e[0],l=e.length;return function(s){for(var d=[],c=0,m=0,b,g=0;g<s.length;g++){var x=s[g];if(c===0){if(x===i&&(o||s.slice(g,g+l)===e)){d.push(s.slice(m,g)),m=g+l;continue}if(x==="/"){b=g;continue}}x==="["?c++:x==="]"&&c--}var w=d.length===0?s:s.substring(m),h=w.startsWith(ot),y=h?w.substring(1):w,k=b&&b>m?b-m:void 0;return{modifiers:d,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:k}}}function zt(t){if(t.length<=1)return t;var e=[],o=[];return t.forEach(function(i){var l=i[0]==="[";l?(e.push.apply(e,o.sort().concat([i])),o=[]):o.push(i)}),e.push.apply(e,o.sort()),e}function St(t){return{cache:_t(t.cacheSize),splitModifiers:Ct(t),...vt(t)}}n();var Sr=/\s+/;function At(t,e){var o=e.splitModifiers,i=e.getClassGroupId,l=e.getConflictingClassGroupIds,a=new Set;return t.trim().split(Sr).map(function(s){var d=o(s),c=d.modifiers,m=d.hasImportantModifier,b=d.baseClassName,g=d.maybePostfixModifierPosition,x=i(g?b.substring(0,g):b),w=Boolean(g);if(!x){if(!g)return{isTailwindClass:!1,originalClassName:s};if(x=i(b),!x)return{isTailwindClass:!1,originalClassName:s};w=!1}var h=zt(c).join(":"),y=m?h+ot:h;return{isTailwindClass:!0,modifierId:y,classGroupId:x,originalClassName:s,hasPostfixModifier:w}}).reverse().filter(function(s){if(!s.isTailwindClass)return!0;var d=s.modifierId,c=s.classGroupId,m=s.hasPostfixModifier,b=d+c;return a.has(b)?!1:(a.add(b),l(c,m).forEach(function(g){return a.add(d+g)}),!0)}).reverse().map(function(s){return s.originalClassName}).join(" ")}function It(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var i,l,a,s=d;function d(m){var b=e[0],g=e.slice(1),x=g.reduce(function(w,h){return h(w)},b());return i=St(x),l=i.cache.get,a=i.cache.set,s=c,c(m)}function c(m){var b=l(m);if(b)return b;var g=At(m,i);return a(m,g),g}return function(){return s(wt.apply(null,arguments))}}n();n();function u(t){var e=function(i){return i[t]||[]};return e.isThemeGetter=!0,e}n();var Mt=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ar=/^\d+\/\d+$/,Ir=new Set(["px","full","screen"]),Mr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Nr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Pr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function z(t){return P(t)||Ir.has(t)||Ar.test(t)||I(t)}function I(t){return B(t,"length",jr)}function Nt(t){return B(t,"size",Lt)}function Pt(t){return B(t,"position",Lt)}function jt(t){return B(t,"url",Gr)}function W(t){return B(t,"number",P)}function P(t){return!Number.isNaN(Number(t))}function Gt(t){return t.endsWith("%")&&P(t.slice(0,-1))}function L(t){return Et(t)||B(t,"number",Et)}function f(t){return Mt.test(t)}function E(){return!0}function M(t){return Mr.test(t)}function Bt(t){return B(t,"",Br)}function B(t,e,o){var i=Mt.exec(t);return i?i[1]?i[1]===e:o(i[2]):!1}function jr(t){return Nr.test(t)}function Lt(){return!1}function Gr(t){return t.startsWith("url(")}function Et(t){return Number.isInteger(Number(t))}function Br(t){return Pr.test(t)}function Ft(){var t=u("colors"),e=u("spacing"),o=u("blur"),i=u("brightness"),l=u("borderColor"),a=u("borderRadius"),s=u("borderSpacing"),d=u("borderWidth"),c=u("contrast"),m=u("grayscale"),b=u("hueRotate"),g=u("invert"),x=u("gap"),w=u("gradientColorStops"),h=u("gradientColorStopPositions"),y=u("inset"),k=u("margin"),N=u("opacity"),A=u("padding"),st=u("saturate"),Z=u("scale"),lt=u("sepia"),dt=u("skew"),ct=u("space"),pt=u("translate"),K=function(){return["auto","contain","none"]},Q=function(){return["auto","hidden","clip","visible","scroll"]},R=function(){return["auto",e]},mt=function(){return["",z]},U=function(){return["auto",P,f]},gt=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},$=function(){return["solid","dashed","dotted","double","none"]},ut=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},tt=function(){return["start","end","center","between","around","evenly","stretch"]},H=function(){return["","0",f]},bt=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},O=function(){return[P,W]},X=function(){return[P,f]};return{cacheSize:500,theme:{colors:[E],spacing:[z],blur:["none","",M,I],brightness:O(),borderColor:[t],borderRadius:["none","","full",M,I],borderSpacing:[e],borderWidth:mt(),contrast:O(),grayscale:H(),hueRotate:X(),invert:H(),gap:[e],gradientColorStops:[t],gradientColorStopPositions:[Gt,I],inset:R(),margin:R(),opacity:O(),padding:[e],saturate:O(),scale:O(),sepia:H(),skew:X(),space:[e],translate:[e]},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":bt()}],"break-before":[{"break-before":bt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(gt(),[f])}],overflow:[{overflow:Q()}],"overflow-x":[{"overflow-x":Q()}],"overflow-y":[{"overflow-y":Q()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",L]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:[L]},f]}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[L]},f]}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal"].concat(tt())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(tt(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(tt(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[ct]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ct]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",e]}],"min-w":[{"min-w":["min","max","fit",z]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,I]}],h:[{h:[e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z]}],"max-h":[{"max-h":[e,"min","max","fit"]}],"font-size":[{text:["base",M,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",W]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",P,W]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat($(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",z]}],"underline-offset":[{"underline-offset":["auto",z]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[e]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(gt(),[Pt])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Nt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},jt]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat($(),["hidden"])}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:$()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:[""].concat($())}],"outline-offset":[{"outline-offset":[z]}],"outline-w":[{outline:[z]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:mt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[z]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",M,Bt]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":ut()}],"bg-blend":[{"bg-blend":ut()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",M,f]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[g]}],saturate:[{saturate:[st]}],sepia:[{sepia:[lt]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[st]}],"backdrop-sepia":[{"backdrop-sepia":[lt]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Z]}],"scale-x":[{"scale-x":[Z]}],"scale-y":[{"scale-y":[Z]}],rotate:[{rotate:[L,f]}],"translate-x":[{"translate-x":[pt]}],"translate-y":[{"translate-y":[pt]}],"skew-x":[{"skew-x":[dt]}],"skew-y":[{"skew-y":[dt]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",t]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[e]}],"scroll-mx":[{"scroll-mx":[e]}],"scroll-my":[{"scroll-my":[e]}],"scroll-ms":[{"scroll-ms":[e]}],"scroll-me":[{"scroll-me":[e]}],"scroll-mt":[{"scroll-mt":[e]}],"scroll-mr":[{"scroll-mr":[e]}],"scroll-mb":[{"scroll-mb":[e]}],"scroll-ml":[{"scroll-ml":[e]}],"scroll-p":[{"scroll-p":[e]}],"scroll-px":[{"scroll-px":[e]}],"scroll-py":[{"scroll-py":[e]}],"scroll-ps":[{"scroll-ps":[e]}],"scroll-pe":[{"scroll-pe":[e]}],"scroll-pt":[{"scroll-pt":[e]}],"scroll-pr":[{"scroll-pr":[e]}],"scroll-pb":[{"scroll-pb":[e]}],"scroll-pl":[{"scroll-pl":[e]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[z,W]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}n();var j=It(Ft);var Lr={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},Er={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},Fr={left:"text-left",right:"text-right",center:"text-center"},Vr={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function p({className:t,text:e,size:o="body1",weight:i="regular",align:l="left",color:a="primary"}){return r.createElement("p",{className:j("font-display",Lr[o],Er[i],Fr[l],Vr[a],t)},e)}function F({src:t,alt:e="",size:o="40px",mainText:i,subText:l}){return r.createElement("div",{className:(0,Vt.default)("flex flex-row",{"gap-3":o==="40px","gap-4":o==="64px"})},r.createElement(q,{src:t,alt:e,size:o}),r.createElement("div",{className:"flex flex-col items-start justify-center"},r.createElement(p,{text:i,size:o==="64px"?"heading3":"body2",weight:"medium"}),l&&r.createElement(p,{text:l,size:o==="64px"?"body2":"small",color:"secondary"})))}n();n();n();n();var Ht=S(C());function G({src:t,alt:e="",width:o,rounded:i="16px",ratio:l="16:9",className:a}){let s={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[l],d={"8px":"rounded-lg","16px":"rounded-2xl"}[i];return r.createElement("img",{src:t,alt:e,style:{width:o},className:(0,Ht.default)(s,d,"object-cover",a)})}function Ot({imageSrc:t,imageAlt:e,primary:o="",secondary:i="",title:l}){return r.createElement("div",{className:"group flex w-[278px] flex-col transition-transform duration-300 ease-in-out active:scale-92"},r.createElement("div",{className:"transition-transform duration-300 ease-in-out group-hover:translate-y-m8"},r.createElement(G,{src:t,alt:e,width:278,ratio:"16:9"})),r.createElement("div",{className:"mt-3 transition-spacing duration-300 ease-in-out"},r.createElement(p,{text:`${o} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})),l&&r.createElement(p,{text:l,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}n();n();var it=S(C());n();n();function T({svg:t,size:e="medium",className:o,...i}){let l={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[e]||{width:24,height:24};return r.createElement(t,{viewBox:"0 0 24 24",width:l.width,height:l.height,className:o!=null?o:"fill-black dark:fill-white",...i})}function Wt({icon:t,text:e,isSelected:o}){return r.createElement("div",{className:(0,it.default)("group flex h-8 w-fit select-none flex-row items-center rounded-lg",e?"px-3":"px-2",o?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},t&&r.createElement(T,{svg:t,className:(0,it.default)("mr-2  transition-[fill] group-hover:fill-color-system_200",o?"fill-text-primary dark:fill-text-primary_dark":"fill-text-secondary dark:fill-text-secondary_dark")}),e&&r.createElement(p,{text:e,size:"body2",weight:"medium",color:o?"primary":"secondary",className:"transition-colors group-hover:text-color-system_200"}))}n();n();var Ut=S(C());n();n();var at=S(C());var Hr={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function D({color:t="outline",text:e,className:o}){return r.createElement("div",{className:j((0,at.default)("w-fit rounded-lg px-2 py-[3px]",Hr[t],{"border border-border-secondary dark:border-border-secondary_dark":t==="outline"}),o)},r.createElement(p,{text:e,size:"small",className:(0,at.default)({"text-text-primary_dark dark:text-text-primary":t==="mono"}),color:t==="outline"?"secondary":"white"}))}n();n();var Dt=S(C());var Or={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function v(t){var d;let{text:e,icon:o,className:i,...l}=t,a=(d=t.variant)!=null?d:"primary",s=t.variant==="text"&&t.activated;return r.createElement("button",{className:j(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${Or[a]}`,o&&!e?"px-2":"px-3",i),...l},o&&r.createElement(T,{svg:o,size:"small",className:j("transition-colors duration-300",a==="primary"?"fill-color-white":"fill-text-secondary group-hover:fill-color-system_200 dark:fill-text-secondary_dark",s&&"fill-color-system_200 dark:fill-color-system_200")}),e&&r.createElement(p,{text:e,size:"body2",weight:"medium",color:a==="primary"?"white":"secondary",className:(0,Dt.default)("transition-colors duration-300",{"group-hover:text-color-system_200":a!=="primary","text-color-system_200 dark:text-color-system_200":s})}))}function $t({avatarSrc:t,avatarAlt:e="",username:o,time:i,content:l,isMine:a,isAuthor:s,isLiked:d,numOfLikes:c=0,onClickLike:m,onClickEdit:b,onClickReply:g}){return r.createElement("div",{className:"flex w-[720px] flex-col gap-3 overflow-hidden break-words"},r.createElement("div",{className:"flex flex-row items-start gap-2"},r.createElement(F,{src:t,alt:e,mainText:o,subText:i}),s&&r.createElement(D,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),a&&r.createElement(D,{color:"outline",text:"\uB0B4\uB313\uAE00"})),r.createElement(p,{size:"body2",text:l}),r.createElement("div",{className:"flex flex-row items-center gap-4"},r.createElement(v,{text:`\uC88B\uC544\uC694 ${c}`,variant:"text",className:(0,Ut.default)("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":d}),onClick:m}),r.createElement(v,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"mx-4 px-0",onClick:g}),r.createElement(v,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0",onClick:b})))}n();n();var Xt=S(C());function V({variant:t="primary",className:e,...o}){return r.createElement("div",{className:(0,Xt.default)("h-[1px] w-full",{"bg-border-primary dark:bg-border-primary_dark":t==="primary","bg-border-secondary dark:bg-border-secondary_dark":t==="secondary"},e),...o})}n();n();n();var Yt=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));function qt({href:t,text:e}){return r.createElement("a",{className:"flex flex-row items-center gap-1 text-text-primary transition-gap duration-300 ease-in-out hover:gap-2 dark:text-text-primary_dark",href:t},r.createElement(p,{text:e,size:"heading3",weight:"semibold"}),r.createElement(T,{svg:Yt,className:"h-6 w-6"}))}n();n();var Zt=S(C());import{forwardRef as Ur,useId as $r}from"react";n();import{useCallback as Wr,useState as Dr}from"react";var Jt=({state:t,defaultState:e,onChange:o})=>{let[i,l]=Dr(typeof e=="function"?e():e),a=t!=null,s=a?t:i,d=Wr(c=>{typeof c=="function"&&(c=c()),a||l(c),o==null||o(c)},[]);return[s,d]};var Kt=Ur(({id:t,label:e,value:o,defaultValue:i,subLabel:l,variant:a,rightAddon:s,hasError:d,maxLength:c,onValueChange:m,...b},g)=>{let x=$r(),[w,h]=Jt({state:o,defaultState:i!=null?i:"",onChange:m}),y=k=>{h(k.target.value)};return r.createElement("div",{className:"flex flex-col space-y-2"},r.createElement("div",{className:"flex w-full"},e&&r.createElement("label",{htmlFor:t!=null?t:x,className:'text-sm font-normal leading-[1.8] text-text-secondary before:mr-1 before:content-["*"] dark:text-text-secondary_dark'},e),c&&r.createElement(p,{className:"ml-auto",text:`(${w.length}/${c})`,size:"body2",weight:"regular",color:"secondary"})),r.createElement("div",{className:(0,Zt.default)("flex w-full items-center rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":a==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":a==="filled","border-color-red focus-within:border-color-red":d})},r.createElement("input",{ref:g,id:t!=null?t:x,className:"h-[44px] w-full bg-transparent text-base font-normal leading-[1.5] text-text-primary placeholder:text-text-tertiary focus:outline-none dark:text-text-primary_dark dark:placeholder:text-text-tertiary_dark",value:w,onChange:y,maxLength:c,...b}),s&&r.createElement("span",{className:"flex"},s)),l&&r.createElement(p,{text:l,size:"body2",weight:"regular",color:d?"red_200":"secondary"}))});n();n();var Xr=(t,e)=>r.createElement("div",{className:"flex flex-row items-center gap-1"},t&&r.createElement(p,{text:t,size:"body2",color:"secondary"}),t&&e&&r.createElement(p,{text:"\xB7",size:"body2",color:"secondary"}),e&&r.createElement(p,{text:e,size:"body2",color:"secondary"}));function Qt({title:t,thumbnailSrc:e,secondaryTextFirst:o,secondaryTextSecond:i,hasBorder:l=!0,rightAddon:a,onClick:s}){return r.createElement("div",{className:"w-full cursor-pointer select-none transition-transform duration-300 ease-out active:scale-95",onClick:s},r.createElement("div",{className:"flex flex-row items-center justify-between py-4"},r.createElement("div",{className:"flex flex-row items-center"},e&&r.createElement(G,{src:e,alt:t,width:85,rounded:"8px",ratio:"16:9"}),r.createElement("div",{className:"ml-3 flex-1"},Xr(o,i),r.createElement(p,{text:t,size:"body1",weight:"medium",color:"primary"}))),r.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},a)),l&&r.createElement(V,{variant:"secondary"}))}n();n();n();var Rt=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}));n();var J=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}));function tr({text:t}){return r.createElement("div",{className:"flex flex-row items-center"},r.createElement(p,{text:`This is Samp3le! "${t}"`,size:"heading3",weight:"semibold",className:"mr-2"}),r.createElement(T,{svg:J,size:"xsmall"}),r.createElement(T,{svg:Rt,size:"medium",className:"ml-1 inline-block fill-yellow-400 dark:fill-white"}))}n();n();n();var rr=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}));var er=S(C());import{forwardRef as Yr}from"react";var nr=Yr(({className:t,...e},o)=>r.createElement("div",{className:"flex items-center rounded-3xl border border-border-secondary p-2 pl-4 focus-within:border-color-system_200"},r.createElement("input",{ref:o,className:(0,er.default)("h-8 w-full flex-1 bg-transparent text-sm outline-none",t),...e}),r.createElement(v,{type:"submit",icon:rr,"aria-label":"\uB313\uAE00 \uC791\uC131"})));n();n();var or=S(C());var qr={medium:"body1",small:"body2",xsmall:"small"};function ir({svg:t,size:e="medium",text:o}){return r.createElement("div",{className:(0,or.default)("flex flex-row items-center",{"gap-2":e!=="xsmall","gap-1":e==="xsmall"})},r.createElement(T,{svg:t,size:e,className:"fill-text-secondary dark:fill-text-secondary_dark"}),r.createElement(p,{text:o,size:qr[e],color:"secondary"}))}n();n();n();var ar=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}));function sr({githubLink:t="",mailLink:e="",text:o}){return r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"align-center mb-6 flex w-full flex-row justify-center gap-2"},r.createElement("a",{href:t,target:"_blank",className:"inline-block h-fit w-fit"},r.createElement(v,{variant:"secondary",icon:J})),r.createElement("a",{href:e,target:"_blank",className:"inline-block h-fit w-fit"},r.createElement(v,{variant:"secondary",icon:ar}))),r.createElement("div",{className:"align-center flex justify-center"},r.createElement(p,{size:"body2",color:"secondary",text:o})))}n();n();n();var lr=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}));n();var dr=t=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...t},r.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}));function cr({username:t,timestamp:e,userProfileSrc:o,thumbnailSrc:i,title:l,contents:a,isLiked:s,likeCount:d=0,isCommentClicked:c,commentCount:m=0,onClickLike:b,onClickComment:g}){return r.createElement("div",{className:"group/feed w-411 transition-transform duration-300 ease-in-out active:scale-92"},r.createElement(F,{src:o,mainText:t,subText:e}),r.createElement(G,{src:i,width:411,className:"mt-4 transition-transform duration-300 ease-in-out group-hover/feed:translate-y-m8"}),r.createElement("div",{className:"relative mt-6 w-411"},r.createElement(p,{size:"heading2",weight:"semibold",text:l,className:"mb-4"}),r.createElement(p,{text:a,className:"line-clamp-4"}),r.createElement("div",{className:"absolute left-0 top-0 z-10 h-full w-411 bg-gradient-to-t from-bg-primary to-transparent dark:from-bg-primary_dark "})),r.createElement("div",{className:" mb-4 mt-4 flex flex-row items-center justify-start"},r.createElement(v,{variant:"text",activated:s,icon:dr,text:d.toString(),onClick:b}),r.createElement(v,{variant:"text",activated:c,icon:lr,text:m.toString(),onClick:g})),r.createElement(V,{variant:"primary",className:"w-411"}))}n();n();function pr(){return typeof window=="undefined"?!1:window.document.documentElement.classList.contains("dark")}n();function Zo(){return typeof window=="undefined"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches}n();function mr(t){if(typeof window=="undefined")return;let e=window.document;t==="dark"?e.documentElement.classList.add("dark"):e.documentElement.classList.remove("dark")}n();function ri(){typeof window!="undefined"&&mr(pr()?"light":"dark")}export{q as Avatar,F as AvatarText,D as Badge,v as Button,Ot as Card,Wt as Chip,$t as Comment,nr as CommentInput,V as Divider,cr as Feed,sr as Footer,qt as GroupHeader,T as Icon,ir as IconText,Kt as Input,Qt as ListItem,tr as Sample,p as Text,G as Thumbnail,pr as isDarkTheme,Zo as isOsDarkTheme,mr as setTheme,ri as toggleTheme};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
