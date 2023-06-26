var mt=Object.create;var tr=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var ut=Object.getOwnPropertyNames;var bt=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty;var xt=r=>tr(r,"__esModule",{value:!0});var wt=(r,t)=>()=>(r&&(t=r(r=0)),t);var ht=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var yt=(r,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ut(t))!ft.call(r,i)&&i!=="default"&&tr(r,i,{get:()=>t[i],enumerable:!(o=gt(t,i))||o.enumerable});return r},S=r=>yt(xt(tr(r!=null?mt(bt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);import*as e from"react";var n=wt(()=>{});var C=ht((Rt,$)=>{n();(function(){"use strict";var r={}.hasOwnProperty,t="[native code]";function o(){for(var i=[],l=0;l<arguments.length;l++){var a=arguments[l];if(!!a){var s=typeof a;if(s==="string"||s==="number")i.push(a);else if(Array.isArray(a)){if(a.length){var d=o.apply(null,a);d&&i.push(d)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){i.push(a.toString());continue}for(var c in a)r.call(a,c)&&a[c]&&i.push(c)}}}return i.join(" ")}typeof $!="undefined"&&$.exports?(o.default=o,$.exports=o):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return o}):window.classNames=o})()});n();n();var xr="caf08f00ef641c9754b45157817d5509049e568c541cd61dd960a35259a18f7c",vt=`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');

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

.relative{
  position:relative;
}

.mx-4{
  margin-left:1rem;
  margin-right:1rem;
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

.rounded-\\[20px\\]{
  border-radius:20px;
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

.bg-bg-primary{
  --tw-bg-opacity:1;
  background-color:rgb(255 255 255 / var(--tw-bg-opacity));
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

.bg-inherit{
  background-color:inherit;
}

.bg-transparent{
  background-color:transparent;
}

.bg-gradient-to-r{
  background-image:linear-gradient(to right, var(--tw-gradient-stops));
}

.bg-none{
  background-image:none;
}

.from-green-200{
  --tw-gradient-from:#bbf7d0 var(--tw-gradient-from-position);
  --tw-gradient-to:rgb(187 247 208 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-color-system_100{
  --tw-gradient-to:#BAE6FD var(--tw-gradient-to-position);
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

.p-0{
  padding:0px;
}

.p-0\\.5{
  padding:0.125rem;
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

.pr-1{
  padding-right:0.25rem;
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

.leading-6{
  line-height:1.5rem;
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

.shadow-searchbar{
  --tw-shadow:0px 0px 1px 0px #F3F4F6;
  --tw-shadow-colored:0px 0px 1px 0px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline-none{
  outline:2px solid transparent;
  outline-offset:2px;
}

.outline{
  outline-style:solid;
}

.outline-0{
  outline-width:0px;
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

.focus-within\\:bg-color-system_200:focus-within{
  --tw-bg-opacity:1;
  background-color:rgb(56 189 248 / var(--tw-bg-opacity));
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

.hover\\:shadow-searchbar_hover:hover{
  --tw-shadow:0px 0px 5px 1px #D1D5DB;
  --tw-shadow-colored:0px 0px 5px 1px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:shadow-searchbar_solid_hover:hover{
  --tw-shadow:0px 0px 16px 4px #B5B5B5;
  --tw-shadow-colored:0px 0px 16px 4px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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

:is(.dark .dark\\:bg-bg-primary_dark){
  --tw-bg-opacity:1;
  background-color:rgb(10 10 10 / var(--tw-bg-opacity));
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

:is(.dark .dark\\:fill-text-primary_dark){
  fill:#FFFFFF;
}

:is(.dark .dark\\:fill-text-secondary_dark){
  fill:#BABABA;
}

:is(.dark .dark\\:fill-white){
  fill:#fff;
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

:is(.dark .dark\\:shadow-searchbar_dark){
  --tw-shadow:0px 0px 1px 0px #262626;
  --tw-shadow-colored:0px 0px 1px 0px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::-moz-placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::placeholder{
  --tw-text-opacity:1;
  color:rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:focus-within\\:bg-color-system_200:focus-within){
  --tw-bg-opacity:1;
  background-color:rgb(56 189 248 / var(--tw-bg-opacity));
}

:is(.dark .hover\\:dark\\:border-color-system_200):hover{
  --tw-border-opacity:1;
  border-color:rgb(56 189 248 / var(--tw-border-opacity));
}

:is(.dark .dark\\:hover\\:shadow-searchbar_hover_dark:hover){
  --tw-shadow:0px 0px 5px 1px #525252;
  --tw-shadow-colored:0px 0px 5px 1px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

:is(.dark .dark\\:hover\\:shadow-searchbar_solid_hover_dark:hover){
  --tw-shadow:0px 0px 16px 4px #7A7A7A;
  --tw-shadow-colored:0px 0px 16px 4px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.\\[\\&\\>p\\]\\:text-color-system_200>p{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}

:is(.dark .\\[\\&\\>p\\]\\:dark\\:text-color-system_200)>p{
  --tw-text-opacity:1;
  color:rgb(56 189 248 / var(--tw-text-opacity));
}
`;(function(){if(!document.getElementById(xr)){var r=document.createElement("style");r.id=xr,r.textContent=vt,document.head.appendChild(r)}})();n();n();n();var wr=S(C());function q({src:r,alt:t="",size:o="40px"}){return e.createElement("img",{src:r,alt:t,className:(0,wr.default)("rounded-full object-cover",{"h-10 w-10":o==="40px","h-16 w-16":o==="64px"})})}n();n();var Hr=S(C());n();n();n();n();function hr(){for(var r=0,t,o,i="";r<arguments.length;)(t=arguments[r++])&&(o=yr(t))&&(i&&(i+=" "),i+=o);return i}function yr(r){if(typeof r=="string")return r;for(var t,o="",i=0;i<r.length;i++)r[i]&&(t=yr(r[i]))&&(o&&(o+=" "),o+=t);return o}n();n();n();var er="-";function vr(r){var t=_t(r),o=r.conflictingClassGroups,i=r.conflictingClassGroupModifiers,l=i===void 0?{}:i;function a(d){var c=d.split(er);return c[0]===""&&c.length!==1&&c.shift(),kr(c,t)||kt(d)}function s(d,c){var m=o[d]||[];return c&&l[d]?[].concat(m,l[d]):m}return{getClassGroupId:a,getConflictingClassGroupIds:s}}function kr(r,t){var s;if(r.length===0)return t.classGroupId;var o=r[0],i=t.nextPart.get(o),l=i?kr(r.slice(1),i):void 0;if(l)return l;if(t.validators.length!==0){var a=r.join(er);return(s=t.validators.find(function(d){var c=d.validator;return c(a)}))==null?void 0:s.classGroupId}}var _r=/^\[(.+)\]$/;function kt(r){if(_r.test(r)){var t=_r.exec(r)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function _t(r){var t=r.theme,o=r.prefix,i={nextPart:new Map,validators:[]},l=Ct(Object.entries(r.classGroups),o);return l.forEach(function(a){var s=a[0],d=a[1];nr(d,i,s,t)}),i}function nr(r,t,o,i){r.forEach(function(l){if(typeof l=="string"){var a=l===""?t:Tr(t,l);a.classGroupId=o;return}if(typeof l=="function"){if(Tt(l)){nr(l(i),t,o,i);return}t.validators.push({validator:l,classGroupId:o});return}Object.entries(l).forEach(function(s){var d=s[0],c=s[1];nr(c,Tr(t,d),o,i)})})}function Tr(r,t){var o=r;return t.split(er).forEach(function(i){o.nextPart.has(i)||o.nextPart.set(i,{nextPart:new Map,validators:[]}),o=o.nextPart.get(i)}),o}function Tt(r){return r.isThemeGetter}function Ct(r,t){return t?r.map(function(o){var i=o[0],l=o[1],a=l.map(function(s){return typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(function(d){var c=d[0],m=d[1];return[t+c,m]})):s});return[i,a]}):r}n();function Cr(r){if(r<1)return{get:function(){},set:function(){}};var t=0,o=new Map,i=new Map;function l(a,s){o.set(a,s),t++,t>r&&(t=0,i=o,o=new Map)}return{get:function(s){var d=o.get(s);if(d!==void 0)return d;if((d=i.get(s))!==void 0)return l(s,d),d},set:function(s,d){o.has(s)?o.set(s,d):l(s,d)}}}n();var or="!";function zr(r){var t=r.separator||":",o=t.length===1,i=t[0],l=t.length;return function(s){for(var d=[],c=0,m=0,b,g=0;g<s.length;g++){var x=s[g];if(c===0){if(x===i&&(o||s.slice(g,g+l)===t)){d.push(s.slice(m,g)),m=g+l;continue}if(x==="/"){b=g;continue}}x==="["?c++:x==="]"&&c--}var w=d.length===0?s:s.substring(m),y=w.startsWith(or),h=y?w.substring(1):w,v=b&&b>m?b-m:void 0;return{modifiers:d,hasImportantModifier:y,baseClassName:h,maybePostfixModifierPosition:v}}}function Sr(r){if(r.length<=1)return r;var t=[],o=[];return r.forEach(function(i){var l=i[0]==="[";l?(t.push.apply(t,o.sort().concat([i])),o=[]):o.push(i)}),t.push.apply(t,o.sort()),t}function Ir(r){return{cache:Cr(r.cacheSize),splitModifiers:zr(r),...vr(r)}}n();var zt=/\s+/;function Mr(r,t){var o=t.splitModifiers,i=t.getClassGroupId,l=t.getConflictingClassGroupIds,a=new Set;return r.trim().split(zt).map(function(s){var d=o(s),c=d.modifiers,m=d.hasImportantModifier,b=d.baseClassName,g=d.maybePostfixModifierPosition,x=i(g?b.substring(0,g):b),w=Boolean(g);if(!x){if(!g)return{isTailwindClass:!1,originalClassName:s};if(x=i(b),!x)return{isTailwindClass:!1,originalClassName:s};w=!1}var y=Sr(c).join(":"),h=m?y+or:y;return{isTailwindClass:!0,modifierId:h,classGroupId:x,originalClassName:s,hasPostfixModifier:w}}).reverse().filter(function(s){if(!s.isTailwindClass)return!0;var d=s.modifierId,c=s.classGroupId,m=s.hasPostfixModifier,b=d+c;return a.has(b)?!1:(a.add(b),l(c,m).forEach(function(g){return a.add(d+g)}),!0)}).reverse().map(function(s){return s.originalClassName}).join(" ")}function Ar(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var i,l,a,s=d;function d(m){var b=t[0],g=t.slice(1),x=g.reduce(function(w,y){return y(w)},b());return i=Ir(x),l=i.cache.get,a=i.cache.set,s=c,c(m)}function c(m){var b=l(m);if(b)return b;var g=Mr(m,i);return a(m,g),g}return function(){return s(hr.apply(null,arguments))}}n();n();function u(r){var t=function(i){return i[r]||[]};return t.isThemeGetter=!0,t}n();var Nr=/^\[(?:([a-z-]+):)?(.+)\]$/i,St=/^\d+\/\d+$/,It=new Set(["px","full","screen"]),Mt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,At=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,Nt=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function z(r){return B(r)||It.has(r)||St.test(r)||A(r)}function A(r){return G(r,"length",Pt)}function Pr(r){return G(r,"size",Er)}function Br(r){return G(r,"position",Er)}function Gr(r){return G(r,"url",Bt)}function H(r){return G(r,"number",B)}function B(r){return!Number.isNaN(Number(r))}function jr(r){return r.endsWith("%")&&B(r.slice(0,-1))}function j(r){return Vr(r)||G(r,"number",Vr)}function f(r){return Nr.test(r)}function L(){return!0}function N(r){return Mt.test(r)}function Lr(r){return G(r,"",Gt)}function G(r,t,o){var i=Nr.exec(r);return i?i[1]?i[1]===t:o(i[2]):!1}function Pt(r){return At.test(r)}function Er(){return!1}function Bt(r){return r.startsWith("url(")}function Vr(r){return Number.isInteger(Number(r))}function Gt(r){return Nt.test(r)}function Fr(){var r=u("colors"),t=u("spacing"),o=u("blur"),i=u("brightness"),l=u("borderColor"),a=u("borderRadius"),s=u("borderSpacing"),d=u("borderWidth"),c=u("contrast"),m=u("grayscale"),b=u("hueRotate"),g=u("invert"),x=u("gap"),w=u("gradientColorStops"),y=u("gradientColorStopPositions"),h=u("inset"),v=u("margin"),P=u("opacity"),M=u("padding"),lr=u("saturate"),Z=u("scale"),dr=u("sepia"),cr=u("skew"),pr=u("space"),mr=u("translate"),K=function(){return["auto","contain","none"]},Q=function(){return["auto","hidden","clip","visible","scroll"]},R=function(){return["auto",t]},gr=function(){return["",z]},D=function(){return["auto",B,f]},ur=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},W=function(){return["solid","dashed","dotted","double","none"]},br=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},rr=function(){return["start","end","center","between","around","evenly","stretch"]},V=function(){return["","0",f]},fr=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},F=function(){return[B,H]},U=function(){return[B,f]};return{cacheSize:500,theme:{colors:[L],spacing:[z],blur:["none","",N,A],brightness:F(),borderColor:[r],borderRadius:["none","","full",N,A],borderSpacing:[t],borderWidth:gr(),contrast:F(),grayscale:V(),hueRotate:U(),invert:V(),gap:[t],gradientColorStops:[r],gradientColorStopPositions:[jr,A],inset:R(),margin:R(),opacity:F(),padding:[t],saturate:F(),scale:F(),sepia:V(),skew:U(),space:[t],translate:[t]},classGroups:{aspect:[{aspect:["auto","square","video",f]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":fr()}],"break-before":[{"break-before":fr()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(ur(),[f])}],overflow:[{overflow:Q()}],"overflow-x":[{"overflow-x":Q()}],"overflow-y":[{"overflow-y":Q()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",f]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",j]}],"grid-cols":[{"grid-cols":[L]}],"col-start-end":[{col:["auto",{span:[j]},f]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[L]}],"row-start-end":[{row:["auto",{span:[j]},f]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",f]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",f]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal"].concat(rr())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(rr(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(rr(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[pr]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[pr]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",t]}],"min-w":[{"min-w":["min","max","fit",z]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[N]},N,A]}],h:[{h:[t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z]}],"max-h":[{"max-h":[t,"min","max","fit"]}],"font-size":[{text:["base",N,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",H]}],"font-family":[{font:[L]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",B,H]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z]}],"list-image":[{"list-image":["none",f]}],"list-style-type":[{list:["none","disc","decimal",f]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[P]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[P]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(W(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",z]}],"underline-offset":[{"underline-offset":["auto",z]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[t]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",f]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[P]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(ur(),[Br])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Pr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Gr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[P]}],"border-style":[{border:[].concat(W(),["hidden"])}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[P]}],"divide-style":[{divide:W()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:[""].concat(W())}],"outline-offset":[{"outline-offset":[z]}],"outline-w":[{outline:[z]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:gr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[P]}],"ring-offset-w":[{"ring-offset":[z]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",N,Lr]}],"shadow-color":[{shadow:[L]}],opacity:[{opacity:[P]}],"mix-blend":[{"mix-blend":br()}],"bg-blend":[{"bg-blend":br()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[i]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",N,f]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[g]}],saturate:[{saturate:[lr]}],sepia:[{sepia:[dr]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[P]}],"backdrop-saturate":[{"backdrop-saturate":[lr]}],"backdrop-sepia":[{"backdrop-sepia":[dr]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",f]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",f]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",f]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[Z]}],"scale-x":[{"scale-x":[Z]}],"scale-y":[{"scale-y":[Z]}],rotate:[{rotate:[j,f]}],"translate-x":[{"translate-x":[mr]}],"translate-y":[{"translate-y":[mr]}],"skew-x":[{"skew-x":[cr]}],"skew-y":[{"skew-y":[cr]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",f]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",f]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[t]}],"scroll-mx":[{"scroll-mx":[t]}],"scroll-my":[{"scroll-my":[t]}],"scroll-ms":[{"scroll-ms":[t]}],"scroll-me":[{"scroll-me":[t]}],"scroll-mt":[{"scroll-mt":[t]}],"scroll-mr":[{"scroll-mr":[t]}],"scroll-mb":[{"scroll-mb":[t]}],"scroll-ml":[{"scroll-ml":[t]}],"scroll-p":[{"scroll-p":[t]}],"scroll-px":[{"scroll-px":[t]}],"scroll-py":[{"scroll-py":[t]}],"scroll-ps":[{"scroll-ps":[t]}],"scroll-pe":[{"scroll-pe":[t]}],"scroll-pt":[{"scroll-pt":[t]}],"scroll-pr":[{"scroll-pr":[t]}],"scroll-pb":[{"scroll-pb":[t]}],"scroll-pl":[{"scroll-pl":[t]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",f]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[z,H]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}n();var I=Ar(Fr);var jt={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},Lt={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},Et={left:"text-left",right:"text-right",center:"text-center"},Vt={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function p({className:r,text:t,size:o="body1",weight:i="regular",align:l="left",color:a="primary"}){return e.createElement("p",{className:I("font-display",jt[o],Lt[i],Et[l],Vt[a],r)},t)}function J({src:r,alt:t="",size:o="40px",mainText:i,subText:l}){return e.createElement("div",{className:(0,Hr.default)("flex flex-row",{"gap-3":o==="40px","gap-4":o==="64px"})},e.createElement(q,{src:r,alt:t,size:o}),e.createElement("div",{className:"flex flex-col items-start justify-center"},e.createElement(p,{text:i,size:o==="64px"?"heading3":"body2",weight:"medium"}),l&&e.createElement(p,{text:l,size:o==="64px"?"body2":"small",color:"secondary"})))}n();n();n();n();var Or=S(C());function E({src:r,alt:t="",width:o,rounded:i="16px",ratio:l="16:9"}){let a={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[l],s={"8px":"rounded-lg","16px":"rounded-2xl"}[i];return e.createElement("img",{src:r,alt:t,style:{width:o},className:(0,Or.default)(a,s,"object-cover")})}function Dr({imageSrc:r,imageAlt:t,primary:o="",secondary:i="",detail:l}){return e.createElement("div",{className:"group flex w-[278px] flex-col"},e.createElement("div",{className:"transition-spacing duration-300 ease-in-out group-hover:mt-[-8px]"},e.createElement(E,{src:r,alt:t,width:278,ratio:"16:9"})),e.createElement("div",{className:"mt-3 transition-spacing duration-300 ease-in-out group-hover:mt-5"},e.createElement(p,{text:`${o} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})),l&&e.createElement(p,{text:l,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}n();n();var ir=S(C());n();n();function k({svg:r,size:t="medium",className:o,...i}){let l={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[t]||{width:24,height:24};return e.createElement(r,{viewBox:"0 0 24 24",width:l.width,height:l.height,className:o!=null?o:"fill-black dark:fill-white",...i})}function Wr({icon:r,text:t,isSelected:o}){return e.createElement("div",{className:(0,ir.default)("group flex h-8 w-fit select-none flex-row items-center rounded-lg",t?"px-3":"px-2",o?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark")},r&&e.createElement(k,{svg:r,className:(0,ir.default)("mr-2  transition-[fill] group-hover:fill-color-system_200",o?"fill-text-primary dark:fill-text-primary_dark":"fill-text-secondary dark:fill-text-secondary_dark")}),t&&e.createElement(p,{text:t,size:"body2",weight:"medium",color:o?"primary":"secondary",className:"transition-colors group-hover:text-color-system_200"}))}n();n();var Ur=S(C());n();n();var ar=S(C());var Ft={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function O({color:r="outline",text:t,className:o}){return e.createElement("div",{className:I((0,ar.default)("w-fit rounded-lg px-2 py-[3px]",Ft[r],{"border border-border-secondary dark:border-border-secondary_dark":r==="outline"}),o)},e.createElement(p,{text:t,size:"small",className:(0,ar.default)({"text-text-primary_dark dark:text-text-primary":r==="mono"}),color:r==="outline"?"secondary":"white"}))}n();n();var sr=S(C());var Ht={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function _(r){var d;let{text:t,icon:o,className:i,...l}=r,a=(d=r.variant)!=null?d:"primary",s=r.variant==="text"&&r.activated;return e.createElement("button",{className:I(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${Ht[a]}`,o&&!t?"px-2":"px-3",i),...l},o&&e.createElement(k,{svg:o,size:"small",className:(0,sr.default)(a==="primary"?"fill-color-white":"fill-text-secondary dark:fill-text-secondary_dark","transition-colors duration-300",{"group-hover:fill-color-system_200":a!=="primary","fill-color-system_200":s})}),t&&e.createElement(p,{text:t,size:"body2",weight:"medium",color:a==="primary"?"white":"secondary",className:(0,sr.default)("transition-colors duration-300",{"group-hover:text-color-system_200":a!=="primary","text-color-system_200":s})}))}function $r({avatarSrc:r,avatarAlt:t="",username:o,time:i,content:l,isMine:a,isAuthor:s,isLiked:d,numOfLikes:c=0,onClickLike:m,onClickEdit:b,onClickReply:g}){return e.createElement("div",{className:"flex w-[720px] flex-col gap-3 overflow-hidden break-words"},e.createElement("div",{className:"flex flex-row items-start gap-2"},e.createElement(J,{src:r,alt:t,mainText:o,subText:i}),s&&e.createElement(O,{color:"outline",text:"\uC791\uC131\uC790",className:"ml-1"}),a&&e.createElement(O,{color:"outline",text:"\uB0B4\uB313\uAE00"})),e.createElement(p,{size:"body2",text:l}),e.createElement("div",{className:"flex flex-row items-center gap-4"},e.createElement(_,{text:`\uC88B\uC544\uC694 ${c}`,variant:"text",className:(0,Ur.default)("px-0",{"[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200":d}),onClick:m}),e.createElement(_,{text:"\uB2F5\uAE00\uB2EC\uAE30",variant:"text",className:"mx-4 px-0",onClick:g}),e.createElement(_,{text:"\uC218\uC815\uD558\uAE30",variant:"text",className:"px-0",onClick:b})))}n();n();var qr=S(C());function X({variant:r="primary",className:t,...o}){return e.createElement("div",{className:(0,qr.default)("h-[1px] w-full",{"bg-border-primary dark:bg-border-primary_dark":r==="primary","bg-border-secondary dark:bg-border-secondary_dark":r==="secondary"},t),...o})}n();n();n();var Jr=r=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...r},e.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));function Xr({href:r,text:t}){return e.createElement("a",{className:"flex flex-row items-center gap-1 text-text-primary transition-gap duration-300 ease-in-out hover:gap-2 dark:text-text-primary_dark",href:r},e.createElement(p,{text:t,size:"heading3",weight:"semibold"}),e.createElement(k,{svg:Jr,className:"h-6 w-6"}))}n();n();var Zr=S(C());import{forwardRef as Wt,useId as Ut}from"react";n();import{useCallback as Ot,useState as Dt}from"react";var Yr=({state:r,defaultState:t,onChange:o})=>{let[i,l]=Dt(typeof t=="function"?t():t),a=r!=null,s=a?r:i,d=Ot(c=>{typeof c=="function"&&(c=c()),a||l(c),o==null||o(c)},[]);return[s,d]};var Kr=Wt(({id:r,label:t,value:o,defaultValue:i,subLabel:l,variant:a,rightAddon:s,hasError:d,maxLength:c,onValueChange:m,...b},g)=>{let x=Ut(),[w,y]=Yr({state:o,defaultState:i!=null?i:"",onChange:m}),h=v=>{y(v.target.value)};return e.createElement("div",{className:"flex flex-col space-y-2"},e.createElement("div",{className:"flex w-full"},t&&e.createElement("label",{htmlFor:r!=null?r:x,className:'text-sm font-normal leading-[1.8] text-text-secondary before:mr-1 before:content-["*"] dark:text-text-secondary_dark'},t),c&&e.createElement(p,{className:"ml-auto",text:`(${w.length}/${c})`,size:"body2",weight:"regular",color:"secondary"})),e.createElement("div",{className:(0,Zr.default)("flex w-full items-center rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":a==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":a==="filled","border-color-red focus-within:border-color-red":d})},e.createElement("input",{ref:g,id:r!=null?r:x,className:"h-[44px] w-full bg-transparent text-base font-normal leading-[1.5] text-text-primary placeholder:text-text-tertiary focus:outline-none dark:text-text-primary_dark dark:placeholder:text-text-tertiary_dark",value:w,onChange:h,maxLength:c,...b}),s&&e.createElement("span",{className:"flex"},s)),l&&e.createElement(p,{text:l,size:"body2",weight:"regular",color:d?"red_200":"secondary"}))});n();n();var $t=(r,t)=>e.createElement("div",{className:"flex flex-row items-center gap-1"},r&&e.createElement(p,{text:r,size:"body2",color:"secondary"}),r&&t&&e.createElement(p,{text:"\xB7",size:"body2",color:"secondary"}),t&&e.createElement(p,{text:t,size:"body2",color:"secondary"}));function Qr({title:r,thumbnailSrc:t,secondaryTextFirst:o,secondaryTextSecond:i,hasBorder:l=!0,rightAddon:a,onClick:s}){return e.createElement("div",{className:"w-full cursor-pointer select-none transition-transform duration-300 ease-out active:scale-95",onClick:s},e.createElement("div",{className:"flex flex-row items-center justify-between py-4"},e.createElement("div",{className:"flex flex-row items-center"},t&&e.createElement(E,{src:t,alt:r,width:85,rounded:"8px",ratio:"16:9"}),e.createElement("div",{className:"ml-3 flex-1"},$t(o,i),e.createElement(p,{text:r,size:"body1",weight:"medium",color:"primary"}))),e.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},a)),l&&e.createElement(X,{variant:"secondary"}))}n();n();n();var Rr=r=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...r},e.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}));n();var Y=r=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...r},e.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}));function rt({text:r}){return e.createElement("div",{className:"flex flex-row items-center"},e.createElement(p,{text:`This is Samp3le! "${r}"`,size:"heading3",weight:"semibold",className:"mr-2"}),e.createElement(k,{svg:Y,size:"xsmall"}),e.createElement(k,{svg:Rr,size:"medium",className:"ml-1 inline-block fill-yellow-400 dark:fill-white"}))}n();n();n();var tt=r=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...r},e.createElement("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}));var et=S(C());import{forwardRef as qt}from"react";var nt=qt(({className:r,...t},o)=>e.createElement("div",{className:"flex items-center rounded-3xl border border-border-secondary p-2 pl-4 focus-within:border-color-system_200"},e.createElement("input",{ref:o,className:(0,et.default)("h-8 w-full flex-1 bg-transparent text-sm outline-none",r),...t}),e.createElement(_,{type:"submit",icon:tt,"aria-label":"\uB313\uAE00 \uC791\uC131"})));n();n();var ot=S(C());var Jt={medium:"body1",small:"body2",xsmall:"small"};function it({svg:r,size:t="medium",text:o}){return e.createElement("div",{className:(0,ot.default)("flex flex-row items-center",{"gap-2":t!=="xsmall","gap-1":t==="xsmall"})},e.createElement(k,{svg:r,size:t,className:"fill-text-secondary dark:fill-text-secondary_dark"}),e.createElement(p,{text:o,size:Jt[t],color:"secondary"}))}n();n();n();var at=r=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...r},e.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}));function st({githubLink:r="",mailLink:t="",text:o}){return e.createElement("div",{className:"flex flex-col"},e.createElement("div",{className:"align-center mb-6 flex w-full flex-row justify-center gap-2"},e.createElement("a",{href:r,target:"_blank",className:"inline-block h-fit w-fit"},e.createElement(_,{variant:"secondary",icon:Y})),e.createElement("a",{href:t,target:"_blank",className:"inline-block h-fit w-fit"},e.createElement(_,{variant:"secondary",icon:at}))),e.createElement("div",{className:"align-center flex justify-center"},e.createElement(p,{size:"body2",color:"secondary",text:o})))}n();n();import{forwardRef as Xt}from"react";n();var lt=r=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",...r},e.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}));var Yt={primary:"bg-gradient-to-r from-green-200 to-color-system_100 shadow-searchbar hover:shadow-searchbar_hover dark:shadow-searchbar_dark dark:hover:shadow-searchbar_hover_dark",solid:"bg-border-primary dark:bg-border-primary_dark focus-within:bg-color-system_200 dark:focus-within:bg-color-system_200 hover:shadow-searchbar_solid_hover dark:hover:shadow-searchbar_solid_hover_dark"},dt=Xt(({variant:r="primary",className:t,...o},i)=>e.createElement("div",{className:I("relative h-10 w-full overflow-hidden rounded-[20px] p-0.5",Yt[r])},e.createElement("div",{className:"flex h-full w-full flex-row items-center rounded-[20px] bg-bg-primary pl-4 pr-1 dark:bg-bg-primary_dark"},e.createElement("input",{ref:i,className:I("h-full flex-1 border-0 bg-inherit text-sm font-medium leading-6 outline-0 placeholder:text-text-tertiary dark:text-text-tertiary_dark dark:placeholder:text-text-tertiary_dark",t),...o}),e.createElement(_,{type:"submit",variant:"text",icon:lt,"aria-label":"\uAC80\uC0C9"}))));n();n();function ct(){return typeof window=="undefined"?!1:window.document.documentElement.classList.contains("dark")}n();function Xo(){return typeof window=="undefined"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches}n();function pt(r){if(typeof window=="undefined")return;let t=window.document;r==="dark"?t.documentElement.classList.add("dark"):t.documentElement.classList.remove("dark")}n();function Ro(){typeof window!="undefined"&&pt(ct()?"light":"dark")}export{q as Avatar,J as AvatarText,O as Badge,_ as Button,Dr as Card,Wr as Chip,$r as Comment,nt as CommentInput,X as Divider,st as Footer,Xr as GroupHeader,k as Icon,it as IconText,Kr as Input,Qr as ListItem,rt as Sample,dt as SearchBar,p as Text,E as Thumbnail,ct as isDarkTheme,Xo as isOsDarkTheme,pt as setTheme,Ro as toggleTheme};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
