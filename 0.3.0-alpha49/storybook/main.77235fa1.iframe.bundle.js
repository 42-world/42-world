(()=>{var R=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var _=(o,t,n)=>new Promise((e,r)=>{var d=a=>{try{s(n.next(a))}catch(l){r(l)}},i=a=>{try{s(n.throw(a))}catch(l){r(l)}},s=a=>a.done?e(a.value):Promise.resolve(a.value).then(d,i);s((n=n.apply(o,t)).next())});var A=R(C=>{(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[179],{"./node_modules/@storybook/addon-docs/dist sync recursive":o=>{function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=()=>[],t.resolve=t,t.id="./node_modules/@storybook/addon-docs/dist sync recursive",o.exports=t},"./.storybook/preview.tsx":(o,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var e=n("./node_modules/@storybook/theming/dist/chunk-4NMOSTKD.mjs"),r=n("./node_modules/react/index.js"),d=n("./node_modules/storybook-dark-mode/dist/esm/index.js"),i=n("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(i),a=n("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),l=n.n(a),p=n("./node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(p),h=n("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=n.n(h),m=n("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),u=n.n(m),b=n("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=n.n(b),f=n("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/styles/_tailwind.css"),y={};y.styleTagTransform=O(),y.setAttributes=g(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=u();var k=s()(f.Z,y);const P=f.Z&&f.Z.locals?f.Z.locals:void 0;var D=n("./src/components/Chip/Chip.tsx"),M=n("./src/components/Jiychoi/Jiychoi.tsx"),L=n("./src/components/Sample/Sample.tsx"),B=n("./src/components/Thumbnail/index.ts"),T=n("./src/context/index.ts"),w=n("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./.storybook/style.css"),x={};x.styleTagTransform=O(),x.setAttributes=g(),x.insert=c().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=u();var I=s()(w.Z,x);const N=w.Z&&w.Z.locals?w.Z.locals:void 0;var E=n("./node_modules/react/jsx-runtime.js");const j={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},darkMode:{dark:e.np.dark,light:e.np.light,darkClass:"darkClass",lightClass:"lightClass",current:"light",classTarget:"html",stylePreview:!0}},decorators:[v=>(0,E.jsx)(S,{children:v()})]};function S(v){return(0,E.jsx)(T.f,{value:(0,d.vs)()?"dark":"light",children:v.children})}S.displayName="ThemeWrapper"},"./src/components/Chip/Chip.tsx":(o,t,n)=>{"use strict";n.d(t,{A:()=>s});var e=n("./node_modules/classnames/index.js"),r=n.n(e),d=n("./src/context/index.ts"),i=n("./node_modules/react/jsx-runtime.js");function s({children:a,text:l,selected:p}){const c=(0,d.F)();return(0,i.jsxs)("div",{className:r()("w-fit h-8 flex flex-row items-center rounded-lg select-none",l?"px-3":"px-2",{[p?"bg-bg-secondary":"bg-bg-tertiary_alpha_0"]:c==="light",[p?"bg-bg-secondary_dark":"bg-bg-primary_alpha_0_dark"]:c==="dark"}),children:[(0,i.jsx)("div",{className:r()([{hidden:!a},"mr-2"]),children:a}),(0,i.jsx)("span",{className:r()("text-sm font-medium",{[p?"text-text-primary":"text-text-secondary"]:c==="light",[p?"text-text-primary_dark":"text-text-secondary_dark"]:c==="dark"}),children:l})]})}s.displayName="Chip";try{s.displayName="Chip",s.__docgenInfo={description:"",displayName:"Chip",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:s.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(a){}},"./src/components/Jiychoi/Jiychoi.tsx":(o,t,n)=>{"use strict";n.d(t,{f:()=>d});var e=n("./src/context/index.ts"),r=n("./node_modules/react/jsx-runtime.js");function d(){const i=(0,e.F)();return(0,r.jsxs)("div",{className:i==="light"?"text-text-primary":"text-color-white",children:[(0,r.jsx)("h1",{children:"Jiychoi"}),(0,r.jsxs)("p",{children:["Hi, I'm ",i," Jiychoi"]}),(0,r.jsx)("p",{children:"Poam\uCD5C \uC9C0 \uBBF8\uCCD0\uB530\uC774"})]})}d.displayName="Jiychoi"},"./src/components/Sample/Sample.tsx":(o,t,n)=>{"use strict";n.d(t,{d:()=>s});var e=n("./node_modules/classnames/index.js"),r=n.n(e),d=n("./src/context/index.ts"),i=n("./node_modules/react/jsx-runtime.js");function s({text:a}){const l=(0,d.F)();return(0,i.jsxs)("div",{className:l==="dark"?"bg-pink-200":"bg-gray-300",children:['\uB098 \uC798\uB798 "',a,'" and \uC878\uB824 "',l,'" \uC640\uC774\uCC28 \uC2E0\uB098\uD558\uB2E4..',(0,i.jsx)("br",{}),r()(["bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50",{"bg-gray-300":l==="light"}])]})}s.displayName="Sample";try{s.displayName="Sample",s.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:s.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(a){}},"./src/components/Thumbnail/Thumbnail.tsx":(o,t,n)=>{"use strict";n.d(t,{p:()=>i});var e=n("./node_modules/classnames/index.js"),r=n.n(e),d=n("./node_modules/react/jsx-runtime.js");function i({src:s,alt:a,width:l,ratio:p="16:9"}){const c={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[p];return(0,d.jsx)("img",{src:s,alt:a,style:{width:l},className:r()(c,"object-cover rounded-2xl")})}i.displayName="Thumbnail";try{i.displayName="Thumbnail",i.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:i.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(s){}},"./src/components/Thumbnail/index.ts":(o,t,n)=>{"use strict";n.d(t,{p:()=>e.p});var e=n("./src/components/Thumbnail/Thumbnail.tsx")},"./src/context/index.ts":(o,t,n)=>{"use strict";n.d(t,{f:()=>i,F:()=>d});var e=n("./node_modules/react/index.js");const r=s=>{const a=(0,e.createContext)(s),l=a.Provider;function p(c){const h=(0,e.useContext)(a);if(!h)throw new Error(`useContext must be used within a Provider, check this ${c!=null?c:""}`);return h}return[p,l]},[d,i]=r("light");try{d.displayName="useTheme",d.__docgenInfo={description:"",displayName:"useTheme",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/context/themeContext.tsx#useTheme"]={docgenInfo:d.__docgenInfo,name:"useTheme",path:"src/context/themeContext.tsx#useTheme"})}catch(s){}try{i.displayName="ThemeProvider",i.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/context/themeContext.tsx#ThemeProvider"]={docgenInfo:i.__docgenInfo,name:"ThemeProvider",path:"src/context/themeContext.tsx#ThemeProvider"})}catch(s){}},"./storybook-config-entry.js":(o,t,n)=>{"use strict";var e=n("./node_modules/@storybook/global/dist/index.mjs"),r=n("@storybook/preview-api");const d=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,i=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,s=m=>m(),a=[m=>_(C,null,function*(){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(m))return;const u=m.substring(6);return n("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+u)}),m=>_(C,null,function*(){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(m))return;const u=m.substring(6);return n("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+u)})];function l(m){return _(this,null,function*(){for(let u=0;u<a.length;u++){const b=yield s(()=>a[u](m));if(b)return b}})}const{SERVER_CHANNEL_URL:p}=e.global,c=()=>(0,r.composeConfigs)([n("./node_modules/@storybook/react/preview.js"),n("./node_modules/@storybook/addon-links/dist/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),n("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),n("./node_modules/@storybook/addon-styling/dist/preview.mjs"),n("./.storybook/preview.tsx")]),h=(0,d.createChannel)({page:"preview"});if(r.addons.setChannel(h),p){const m=(0,i.createChannel)({url:p});r.addons.setServerChannel(m),window.__STORYBOOK_SERVER_CHANNEL__=m}const g=new r.PreviewWeb;window.__STORYBOOK_PREVIEW__=g,window.__STORYBOOK_STORY_STORE__=g.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=h,window.__STORYBOOK_CLIENT_API__=new r.ClientApi({storyStore:g.storyStore}),g.initialize({importFn:l,getProjectAnnotations:c})},"./node_modules/@storybook/react/dist sync recursive":o=>{function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=()=>[],t.resolve=t,t.id="./node_modules/@storybook/react/dist sync recursive",o.exports=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./.storybook/style.css":(o,t,n)=>{"use strict";n.d(t,{Z:()=>a});var e=n("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(e),d=n("./node_modules/css-loader/dist/runtime/api.js"),i=n.n(d),s=i()(r());s.push([o.id,`.darkClass .sb-show-main {
  background: #333333 !important;
}

.darkClass .docs-story {
  background: #333333 !important;
}
`,""]);const a=s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/styles/_tailwind.css":(o,t,n)=>{"use strict";n.d(t,{Z:()=>a});var e=n("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(e),d=n("./node_modules/css-loader/dist/runtime/api.js"),i=n.n(d),s=i()(r());s.push([o.id,`/*
! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

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
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

html,
  body {
  font-family: Pretendard Variable;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.flex {
  display: flex;
}

.hidden {
  display: none;
}

.aspect-16\\/10 {
  aspect-ratio: 16 / 10;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

.h-6 {
  height: 1.5rem;
}

.h-8 {
  height: 2rem;
}

.w-6 {
  width: 1.5rem;
}

.w-\\[278px\\] {
  width: 278px;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.gap-1 {
  gap: 0.25rem;
}

.rounded-2xl {
  border-radius: 1rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.bg-bg-primary_alpha_0_dark {
  background-color: #00000000;
}

.bg-bg-secondary {
  --tw-bg-opacity: 1;
  background-color: rgb(244 245 246 / var(--tw-bg-opacity));
}

.bg-bg-secondary_dark {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity));
}

.bg-bg-tertiary_alpha_0 {
  background-color: #E3E3E300;
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 207 232 / var(--tw-bg-opacity));
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-light {
  font-weight: 300;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.leading-\\[1\\.2\\] {
  line-height: 1.2;
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.text-color-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(134 239 172 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}

.text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(165 180 252 / var(--tw-text-opacity));
}

.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}

.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(67 56 202 / var(--tw-text-opacity));
}

.text-lime-300 {
  --tw-text-opacity: 1;
  color: rgb(190 242 100 / var(--tw-text-opacity));
}

.text-lime-500 {
  --tw-text-opacity: 1;
  color: rgb(132 204 22 / var(--tw-text-opacity));
}

.text-lime-700 {
  --tw-text-opacity: 1;
  color: rgb(77 124 15 / var(--tw-text-opacity));
}

.text-orange-300 {
  --tw-text-opacity: 1;
  color: rgb(253 186 116 / var(--tw-text-opacity));
}

.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.text-orange-700 {
  --tw-text-opacity: 1;
  color: rgb(194 65 12 / var(--tw-text-opacity));
}

.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-sky-300 {
  --tw-text-opacity: 1;
  color: rgb(125 211 252 / var(--tw-text-opacity));
}

.text-sky-500 {
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
}

.text-sky-700 {
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.text-text-primary {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-text-primary_dark {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-text-secondary {
  --tw-text-opacity: 1;
  color: rgb(112 112 112 / var(--tw-text-opacity));
}

.text-text-secondary_dark {
  --tw-text-opacity: 1;
  color: rgb(186 186 186 / var(--tw-text-opacity));
}

.text-text-tertiary {
  --tw-text-opacity: 1;
  color: rgb(181 181 181 / var(--tw-text-opacity));
}

.text-text-tertiary_dark {
  --tw-text-opacity: 1;
  color: rgb(122 122 122 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity));
}

.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity));
}

.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(161 98 7 / var(--tw-text-opacity));
}

.transition-gap {
  transition-property: gap;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-spacing {
  transition-property: margin, padding;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\\:gap-2:hover {
  gap: 0.5rem;
}

.hover\\:opacity-50:hover {
  opacity: 0.5;
}

.hover\\:ring-4:hover {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.group:hover .group-hover\\:mt-5 {
  margin-top: 1.25rem;
}

.group:hover .group-hover\\:mt-\\[-8px\\] {
  margin-top: -8px;
}
`,""]);const a=s},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(o,t,n)=>{var e={"./Introduction.mdx":["./src/Introduction.mdx",206,281]};function r(d){if(!n.o(e,d))return Promise.resolve().then(()=>{var a=new Error("Cannot find module '"+d+"'");throw a.code="MODULE_NOT_FOUND",a});var i=e[d],s=i[0];return Promise.all(i.slice(1).map(n.e)).then(()=>n(s))}r.keys=()=>Object.keys(e),r.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",o.exports=r},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(o,t,n)=>{var e={"./components/Card/Card.stories":["./src/components/Card/Card.stories.ts",518],"./components/Card/Card.stories.ts":["./src/components/Card/Card.stories.ts",518],"./components/Chip/Chip.stories":["./src/components/Chip/Chip.stories.ts",529],"./components/Chip/Chip.stories.ts":["./src/components/Chip/Chip.stories.ts",529],"./components/GroupHeader/GroupHeader.stories":["./src/components/GroupHeader/GroupHeader.stories.ts",721],"./components/GroupHeader/GroupHeader.stories.ts":["./src/components/GroupHeader/GroupHeader.stories.ts",721],"./components/Jiychoi/Jiychoi.stories":["./src/components/Jiychoi/Jiychoi.stories.ts",658],"./components/Jiychoi/Jiychoi.stories.ts":["./src/components/Jiychoi/Jiychoi.stories.ts",658],"./components/Sample/Sample.stories":["./src/components/Sample/Sample.stories.ts",854],"./components/Sample/Sample.stories.ts":["./src/components/Sample/Sample.stories.ts",854],"./components/Text/Text.stories":["./src/components/Text/Text.stories.ts",874],"./components/Text/Text.stories.ts":["./src/components/Text/Text.stories.ts",874],"./components/Thumbnail/Thumbnail.stories":["./src/components/Thumbnail/Thumbnail.stories.ts",934],"./components/Thumbnail/Thumbnail.stories.ts":["./src/components/Thumbnail/Thumbnail.stories.ts",934]};function r(d){if(!n.o(e,d))return Promise.resolve().then(()=>{var a=new Error("Cannot find module '"+d+"'");throw a.code="MODULE_NOT_FOUND",a});var i=e[d],s=i[0];return n.e(i[1]).then(()=>n(s))}r.keys=()=>Object.keys(e),r.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",o.exports=r},"@storybook/addons":o=>{"use strict";o.exports=__STORYBOOK_MODULE_ADDONS__},"@storybook/channels":o=>{"use strict";o.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":o=>{"use strict";o.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":o=>{"use strict";o.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":o=>{"use strict";o.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?4f7e":()=>{}},o=>{var t=e=>o(o.s=e);o.O(0,[897],()=>t("./storybook-config-entry.js"));var n=o.O()}])});A();})();
