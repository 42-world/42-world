(()=>{var A=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var v=(t,e,n)=>new Promise((o,r)=>{var a=s=>{try{i(n.next(s))}catch(p){r(p)}},d=s=>{try{i(n.throw(s))}catch(p){r(p)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(a,d);i((n=n.apply(t,e)).next())});var R=A(C=>{(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[179],{"./node_modules/@storybook/addon-docs/dist sync recursive":t=>{function e(n){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}e.keys=()=>[],e.resolve=e,e.id="./node_modules/@storybook/addon-docs/dist sync recursive",t.exports=e},"./.storybook/preview.tsx":(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>T});var o=n("./node_modules/@storybook/theming/dist/chunk-4NMOSTKD.mjs"),r=n("./node_modules/react/index.js"),a=n("./node_modules/storybook-dark-mode/dist/esm/index.js"),d=n("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(d),s=n("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=n.n(s),u=n("./node_modules/style-loader/dist/runtime/insertBySelector.js"),w=n.n(u),y=n("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),b=n.n(y),c=n("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),l=n.n(c),h=n("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=n.n(h),x=n("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/styles/_tailwind.css"),g={};g.styleTagTransform=O(),g.setAttributes=b(),g.insert=w().bind(null,"head"),g.domAPI=p(),g.insertStyleElement=l();var D=i()(x.Z,g);const z=x.Z&&x.Z.locals?x.Z.locals:void 0;var f=n("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./.storybook/style.css"),m={};m.styleTagTransform=O(),m.setAttributes=b(),m.insert=w().bind(null,"head"),m.domAPI=p(),m.insertStyleElement=l();var M=i()(f.Z,m);const P=f.Z&&f.Z.locals?f.Z.locals:void 0;var k=n("./node_modules/react/jsx-runtime.js");const T={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},darkMode:{dark:o.np.dark,light:o.np.light,darkClass:"darkClass",lightClass:"lightClass",current:"light",classTarget:"html",stylePreview:!0}},decorators:[_=>(0,k.jsx)(j,{children:_()})]};function j(_){const E=(0,a.vs)();return(0,r.useEffect)(()=>{const S=window.document;E?S.documentElement.classList.add("dark"):S.documentElement.classList.remove("dark")},[E]),(0,k.jsx)(k.Fragment,{children:_.children})}},"./storybook-config-entry.js":(t,e,n)=>{"use strict";var o=n("./node_modules/@storybook/global/dist/index.mjs"),r=n("@storybook/preview-api");const a=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,d=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,i=c=>c(),s=[c=>v(C,null,function*(){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(c))return;const l=c.substring(6);return n("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+l)}),c=>v(C,null,function*(){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(c))return;const l=c.substring(6);return n("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+l)})];function p(c){return v(this,null,function*(){for(let l=0;l<s.length;l++){const h=yield i(()=>s[l](c));if(h)return h}})}const{SERVER_CHANNEL_URL:u}=o.global,w=()=>(0,r.composeConfigs)([n("./node_modules/@storybook/react/preview.js"),n("./node_modules/@storybook/addon-links/dist/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),n("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),n("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),n("./node_modules/@storybook/addon-styling/dist/preview.mjs"),n("./.storybook/preview.tsx")]),y=(0,a.createChannel)({page:"preview"});if(r.addons.setChannel(y),u){const c=(0,d.createChannel)({url:u});r.addons.setServerChannel(c),window.__STORYBOOK_SERVER_CHANNEL__=c}const b=new r.PreviewWeb;window.__STORYBOOK_PREVIEW__=b,window.__STORYBOOK_STORY_STORE__=b.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=y,window.__STORYBOOK_CLIENT_API__=new r.ClientApi({storyStore:b.storyStore}),b.initialize({importFn:p,getProjectAnnotations:w})},"./node_modules/@storybook/react/dist sync recursive":t=>{function e(n){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}e.keys=()=>[],e.resolve=e,e.id="./node_modules/@storybook/react/dist sync recursive",t.exports=e},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./.storybook/style.css":(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),a=n("./node_modules/css-loader/dist/runtime/api.js"),d=n.n(a),i=d()(r());i.push([t.id,`.darkClass .sb-show-main {
  background: #333333 !important;
}

.darkClass .docs-story {
  background: #333333 !important;
}
`,""]);const s=i},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/styles/_tailwind.css":(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var o=n("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=n.n(o),a=n("./node_modules/css-loader/dist/runtime/api.js"),d=n.n(a),i=d()(r());i.push([t.id,"@import url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css);"]),i.push([t.id,`/*
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

*, ::before, ::after{
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

::backdrop{
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

.ml-auto{
  margin-left: auto;
}

.mr-2{
  margin-right: 0.5rem;
}

.mt-3{
  margin-top: 0.75rem;
}

.line-clamp-1{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.flex{
  display: flex;
}

.hidden{
  display: none;
}

.aspect-16\\/10{
  aspect-ratio: 16 / 10;
}

.aspect-square{
  aspect-ratio: 1 / 1;
}

.aspect-video{
  aspect-ratio: 16 / 9;
}

.h-10{
  height: 2.5rem;
}

.h-16{
  height: 4rem;
}

.h-6{
  height: 1.5rem;
}

.h-8{
  height: 2rem;
}

.h-\\[1px\\]{
  height: 1px;
}

.h-\\[44px\\]{
  height: 44px;
}

.w-10{
  width: 2.5rem;
}

.w-16{
  width: 4rem;
}

.w-6{
  width: 1.5rem;
}

.w-\\[278px\\]{
  width: 278px;
}

.w-\\[720px\\]{
  width: 720px;
}

.w-fit{
  width: -moz-fit-content;
  width: fit-content;
}

.w-full{
  width: 100%;
}

.select-none{
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.flex-row{
  flex-direction: row;
}

.flex-col{
  flex-direction: column;
}

.items-start{
  align-items: flex-start;
}

.items-center{
  align-items: center;
}

.justify-center{
  justify-content: center;
}

.gap-1{
  gap: 0.25rem;
}

.gap-3{
  gap: 0.75rem;
}

.gap-4{
  gap: 1rem;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.overflow-hidden{
  overflow: hidden;
}

.break-words{
  overflow-wrap: break-word;
}

.rounded-2xl{
  border-radius: 1rem;
}

.rounded-full{
  border-radius: 9999px;
}

.rounded-lg{
  border-radius: 0.5rem;
}

.border{
  border-width: 1px;
}

.border-solid{
  border-style: solid;
}

.border-border-primary{
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-border-secondary{
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-border-secondary_dark{
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}

.border-color-red{
  --tw-border-opacity: 1;
  border-color: rgb(255 59 48 / var(--tw-border-opacity));
}

.bg-bg-primary{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-bg-primary_alpha_0{
  background-color: #FFFFFF00;
}

.bg-bg-primary_dark{
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity));
}

.bg-bg-secondary{
  --tw-bg-opacity: 1;
  background-color: rgb(244 245 246 / var(--tw-bg-opacity));
}

.bg-bg-secondary_dark{
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity));
}

.bg-bg-tertiary_alpha_0{
  background-color: #E3E3E300;
}

.bg-border-primary{
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-border-primary_dark{
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.bg-border-secondary{
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-border-secondary_dark{
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.bg-color-blue_200{
  --tw-bg-opacity: 1;
  background-color: rgb(0 122 255 / var(--tw-bg-opacity));
}

.bg-color-brown{
  --tw-bg-opacity: 1;
  background-color: rgb(162 132 94 / var(--tw-bg-opacity));
}

.bg-color-cyan{
  --tw-bg-opacity: 1;
  background-color: rgb(50 173 230 / var(--tw-bg-opacity));
}

.bg-color-indigo{
  --tw-bg-opacity: 1;
  background-color: rgb(88 86 214 / var(--tw-bg-opacity));
}

.bg-color-mint{
  --tw-bg-opacity: 1;
  background-color: rgb(0 199 190 / var(--tw-bg-opacity));
}

.bg-color-pink{
  --tw-bg-opacity: 1;
  background-color: rgb(255 45 85 / var(--tw-bg-opacity));
}

.bg-color-yellow{
  --tw-bg-opacity: 1;
  background-color: rgb(255 204 0 / var(--tw-bg-opacity));
}

.bg-gray-300{
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-pink-200{
  --tw-bg-opacity: 1;
  background-color: rgb(251 207 232 / var(--tw-bg-opacity));
}

.bg-transparent{
  background-color: transparent;
}

.object-cover{
  -o-object-fit: cover;
     object-fit: cover;
}

.px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3{
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4{
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-\\[3px\\]{
  padding-top: 3px;
  padding-bottom: 3px;
}

.text-left{
  text-align: left;
}

.text-center{
  text-align: center;
}

.text-right{
  text-align: right;
}

.text-2xl{
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-4xl{
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-base{
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg{
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-light{
  font-weight: 300;
}

.font-normal{
  font-weight: 400;
}

.font-semibold{
  font-weight: 600;
}

.leading-\\[1\\.5\\]{
  line-height: 1.5;
}

.leading-\\[1\\.8\\]{
  line-height: 1.8;
}

.leading-\\[1\\.8rem\\]{
  line-height: 1.8rem;
}

.leading-normal{
  line-height: 1.5;
}

.text-black{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-300{
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

.text-blue-500{
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-700{
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.text-green-300{
  --tw-text-opacity: 1;
  color: rgb(134 239 172 / var(--tw-text-opacity));
}

.text-green-500{
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-700{
  --tw-text-opacity: 1;
  color: rgb(21 128 61 / var(--tw-text-opacity));
}

.text-indigo-300{
  --tw-text-opacity: 1;
  color: rgb(165 180 252 / var(--tw-text-opacity));
}

.text-indigo-500{
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}

.text-indigo-700{
  --tw-text-opacity: 1;
  color: rgb(67 56 202 / var(--tw-text-opacity));
}

.text-lime-300{
  --tw-text-opacity: 1;
  color: rgb(190 242 100 / var(--tw-text-opacity));
}

.text-lime-500{
  --tw-text-opacity: 1;
  color: rgb(132 204 22 / var(--tw-text-opacity));
}

.text-lime-700{
  --tw-text-opacity: 1;
  color: rgb(77 124 15 / var(--tw-text-opacity));
}

.text-orange-300{
  --tw-text-opacity: 1;
  color: rgb(253 186 116 / var(--tw-text-opacity));
}

.text-orange-500{
  --tw-text-opacity: 1;
  color: rgb(249 115 22 / var(--tw-text-opacity));
}

.text-orange-700{
  --tw-text-opacity: 1;
  color: rgb(194 65 12 / var(--tw-text-opacity));
}

.text-red-300{
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity));
}

.text-red-500{
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-700{
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-sky-300{
  --tw-text-opacity: 1;
  color: rgb(125 211 252 / var(--tw-text-opacity));
}

.text-sky-500{
  --tw-text-opacity: 1;
  color: rgb(14 165 233 / var(--tw-text-opacity));
}

.text-sky-700{
  --tw-text-opacity: 1;
  color: rgb(3 105 161 / var(--tw-text-opacity));
}

.text-text-primary{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-text-primary_dark{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-text-secondary{
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.text-text-tertiary{
  --tw-text-opacity: 1;
  color: rgb(181 181 181 / var(--tw-text-opacity));
}

.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-yellow-300{
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity));
}

.text-yellow-500{
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity));
}

.text-yellow-700{
  --tw-text-opacity: 1;
  color: rgb(161 98 7 / var(--tw-text-opacity));
}

.outline{
  outline-style: solid;
}

.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-gap{
  transition-property: gap;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-spacing{
  transition-property: margin, padding;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300{
  transition-duration: 300ms;
}

.ease-in-out{
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.placeholder\\:text-text-tertiary::-moz-placeholder{
  --tw-text-opacity: 1;
  color: rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder\\:text-text-tertiary::placeholder{
  --tw-text-opacity: 1;
  color: rgb(181 181 181 / var(--tw-text-opacity));
}

.before\\:mr-1::before{
  content: var(--tw-content);
  margin-right: 0.25rem;
}

.before\\:content-\\[\\"\\*\\"\\]::before{
  --tw-content: "*";
  content: var(--tw-content);
}

.focus-within\\:border-color-blue_200:focus-within{
  --tw-border-opacity: 1;
  border-color: rgb(0 122 255 / var(--tw-border-opacity));
}

.focus-within\\:border-color-red:focus-within{
  --tw-border-opacity: 1;
  border-color: rgb(255 59 48 / var(--tw-border-opacity));
}

.hover\\:gap-2:hover{
  gap: 0.5rem;
}

.hover\\:opacity-50:hover{
  opacity: 0.5;
}

.hover\\:ring-4:hover{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.group:hover .group-hover\\:mt-5{
  margin-top: 1.25rem;
}

.group:hover .group-hover\\:mt-\\[-8px\\]{
  margin-top: -8px;
}

:is(.dark .dark\\:border-border-secondary_dark){
  --tw-border-opacity: 1;
  border-color: rgb(38 38 38 / var(--tw-border-opacity));
}

:is(.dark .dark\\:bg-bg-primary){
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-bg-primary_alpha_0_dark){
  background-color: #00000000;
}

:is(.dark .dark\\:bg-bg-primary_dark){
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-bg-secondary_dark){
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-border-primary_dark){
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-border-secondary_dark){
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:text-text-primary){
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-primary_dark){
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-secondary_dark){
  --tw-text-opacity: 1;
  color: rgb(186 186 186 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-text-tertiary_dark){
  --tw-text-opacity: 1;
  color: rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::-moz-placeholder{
  --tw-text-opacity: 1;
  color: rgb(122 122 122 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder\\:text-text-tertiary_dark)::placeholder{
  --tw-text-opacity: 1;
  color: rgb(122 122 122 / var(--tw-text-opacity));
}
`,""]);const s=i},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(t,e,n)=>{var o={"./Introduction.mdx":["./src/Introduction.mdx",206,281]};function r(a){if(!n.o(o,a))return Promise.resolve().then(()=>{var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s});var d=o[a],i=d[0];return Promise.all(d.slice(1).map(n.e)).then(()=>n(i))}r.keys=()=>Object.keys(o),r.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",t.exports=r},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(t,e,n)=>{var o={"./components/Avatar/Avatar.stories":["./src/components/Avatar/Avatar.stories.ts",989],"./components/Avatar/Avatar.stories.ts":["./src/components/Avatar/Avatar.stories.ts",989],"./components/AvatarText/AvatarText.stories":["./src/components/AvatarText/AvatarText.stories.ts",685,511],"./components/AvatarText/AvatarText.stories.ts":["./src/components/AvatarText/AvatarText.stories.ts",685,511],"./components/Badge/Badge.stories":["./src/components/Badge/Badge.stories.ts",685,65],"./components/Badge/Badge.stories.ts":["./src/components/Badge/Badge.stories.ts",685,65],"./components/Card/Card.stories":["./src/components/Card/Card.stories.ts",518],"./components/Card/Card.stories.ts":["./src/components/Card/Card.stories.ts",518],"./components/Chip/Chip.stories":["./src/components/Chip/Chip.stories.ts",529],"./components/Chip/Chip.stories.ts":["./src/components/Chip/Chip.stories.ts",529],"./components/Comment/Comment.stories":["./src/components/Comment/Comment.stories.ts",685,196],"./components/Comment/Comment.stories.ts":["./src/components/Comment/Comment.stories.ts",685,196],"./components/Divider/Divider.stories":["./src/components/Divider/Divider.stories.ts",953],"./components/Divider/Divider.stories.ts":["./src/components/Divider/Divider.stories.ts",953],"./components/GroupHeader/GroupHeader.stories":["./src/components/GroupHeader/GroupHeader.stories.ts",721],"./components/GroupHeader/GroupHeader.stories.ts":["./src/components/GroupHeader/GroupHeader.stories.ts",721],"./components/Input/Input.stories":["./src/components/Input/Input.stories.ts",195],"./components/Input/Input.stories.ts":["./src/components/Input/Input.stories.ts",195],"./components/Sample/Sample.stories":["./src/components/Sample/Sample.stories.ts",854],"./components/Sample/Sample.stories.ts":["./src/components/Sample/Sample.stories.ts",854],"./components/Text/Text.stories":["./src/components/Text/Text.stories.ts",874],"./components/Text/Text.stories.ts":["./src/components/Text/Text.stories.ts",874],"./components/Thumbnail/Thumbnail.stories":["./src/components/Thumbnail/Thumbnail.stories.ts",934],"./components/Thumbnail/Thumbnail.stories.ts":["./src/components/Thumbnail/Thumbnail.stories.ts",934]};function r(a){if(!n.o(o,a))return Promise.resolve().then(()=>{var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s});var d=o[a],i=d[0];return Promise.all(d.slice(1).map(n.e)).then(()=>n(i))}r.keys=()=>Object.keys(o),r.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",t.exports=r},"@storybook/addons":t=>{"use strict";t.exports=__STORYBOOK_MODULE_ADDONS__},"@storybook/channels":t=>{"use strict";t.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":t=>{"use strict";t.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":t=>{"use strict";t.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":t=>{"use strict";t.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?4f7e":()=>{}},t=>{var e=o=>t(t.s=o);t.O(0,[409],()=>e("./storybook-config-entry.js"));var n=t.O()}])});R();})();
