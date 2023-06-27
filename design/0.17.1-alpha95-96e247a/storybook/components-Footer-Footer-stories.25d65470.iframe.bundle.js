(()=>{var C=Object.defineProperty,P=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var A=(a,t,e)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,f=(a,t)=>{for(var e in t||(t={}))B.call(t,e)&&A(a,e,t[e]);if(S)for(var e of S(t))j.call(t,e)&&A(a,e,t[e]);return a},T=(a,t)=>P(a,R(t));var w=(a,t)=>{var e={};for(var n in a)B.call(a,n)&&t.indexOf(n)<0&&(e[n]=a[n]);if(a!=null&&S)for(var n of S(a))t.indexOf(n)<0&&j.call(a,n)&&(e[n]=a[n]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[110],{"./src/components/Footer/Footer.stories.ts":(a,t,e)=>{var h,E,O;"use strict";e.r(t),e.d(t,{Primary:()=>_,__namedExportsOrder:()=>v,default:()=>y});var n=e("./src/components/Button/index.ts"),d=e("./src/components/Text/index.ts"),m=e("./node_modules/react/index.js"),u;function l(){return l=Object.assign?Object.assign.bind():function(p){for(var g=1;g<arguments.length;g++){var b=arguments[g];for(var I in b)Object.prototype.hasOwnProperty.call(b,I)&&(p[I]=b[I])}return p},l.apply(this,arguments)}var i=function(g){return m.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},g),u||(u=m.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"})))};const r=i;var s=e("./src/assets/icons/Github.svg"),o=e("./node_modules/react/jsx-runtime.js");function c({githubLink:p="",mailLink:g="",text:b}){return(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsxs)("div",{className:"align-center mb-6 flex w-full flex-row justify-center gap-2",children:[(0,o.jsx)("a",{href:p,target:"_blank",className:"inline-block h-fit w-fit",children:(0,o.jsx)(n.z,{variant:"secondary",icon:s.Z})}),(0,o.jsx)("a",{href:g,target:"_blank",className:"inline-block h-fit w-fit",children:(0,o.jsx)(n.z,{variant:"secondary",icon:r})})]}),(0,o.jsx)("div",{className:"align-center flex justify-center",children:(0,o.jsx)(d.x,{size:"body2",color:"secondary",text:b})})]})}c.displayName="Footer";try{c.displayName="Footer",c.__docgenInfo={description:"",displayName:"Footer",props:{githubLink:{defaultValue:{value:""},description:"",name:"githubLink",required:!1,type:{name:"string"}},mailLink:{defaultValue:{value:""},description:"",name:"mailLink",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/Footer.tsx#Footer"]={docgenInfo:c.__docgenInfo,name:"Footer",path:"src/components/Footer/Footer.tsx#Footer"})}catch(p){}const x={title:"rookies/Footer",component:c},_={args:{githubLink:"https://github.com",mailLink:"mailto:asdf@naver.com",text:"@ 2022. Team ROOK!ES"}},y=x;_.parameters=T(f({},_.parameters),{docs:T(f({},(h=_.parameters)==null?void 0:h.docs),{source:f({originalSource:`{
  // Add your story args here
  args: {
    githubLink: 'https://github.com',
    mailLink: 'mailto:asdf@naver.com',
    text: '@ 2022. Team ROOK!ES'
  }
}`},(O=(E=_.parameters)==null?void 0:E.docs)==null?void 0:O.source)})});const v=["Primary"]},"./src/components/Button/Button.tsx":(a,t,e)=>{"use strict";e.d(t,{z:()=>s});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),d=e("./node_modules/classnames/index.js"),m=e.n(d),u=e("./src/components/Icon/index.ts"),l=e("./src/components/Text/index.ts"),i=e("./node_modules/react/jsx-runtime.js");const r={primary:"bg-color-system_200 border-0 hover:bg-color-system_300",secondary:"border-border-primary dark:border-border-primary_dark hover:border-color-system_200 hover:dark:border-color-system_200",text:"border-0"};function s(o){var O;const E=o,{text:c,icon:x,className:_}=E,y=w(E,["text","icon","className"]),v=(O=o.variant)!=null?O:"primary",h=o.variant==="text"&&o.activated;return(0,i.jsxs)("button",T(f({className:(0,n.m)(`group flex h-8 flex-row items-center gap-2 rounded-2xl border border-solid transition-all duration-300 active:scale-95 ${r[v]}`,x&&!c?"px-2":"px-3",_)},y),{children:[x&&(0,i.jsx)(u.J,{svg:x,size:"small",className:(0,n.m)("transition-colors duration-300",v==="primary"?"fill-color-white":"fill-text-secondary group-hover:fill-color-system_200 dark:fill-text-secondary_dark",h&&"fill-color-system_200 dark:fill-color-system_200")}),c&&(0,i.jsx)(l.x,{text:c,size:"body2",weight:"medium",color:v==="primary"?"white":"secondary",className:m()("transition-colors duration-300",{"group-hover:text-color-system_200":v!=="primary","text-color-system_200 dark:text-color-system_200":h})})]}))}s.displayName="Button";try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"primary"'},{value:'"secondary"'}]}},activated:{defaultValue:null,description:"",name:"activated",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGSVGElement>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(o){}},"./src/components/Button/index.ts":(a,t,e)=>{"use strict";e.d(t,{z:()=>n.z});var n=e("./src/components/Button/Button.tsx")},"./src/components/Icon/Icon.tsx":(a,t,e)=>{"use strict";e.d(t,{J:()=>d});var n=e("./node_modules/react/jsx-runtime.js");function d(r){var s=r,{svg:m,size:u="medium",className:l}=s,i=w(s,["svg","size","className"]);const o={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[u]||{width:24,height:24};return(0,n.jsx)(m,f({viewBox:"0 0 24 24",width:o.width,height:o.height,className:l!=null?l:"fill-black dark:fill-white"},i))}d.displayName="Icon";try{d.displayName="Icon",d.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:d.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(m){}},"./src/components/Icon/index.ts":(a,t,e)=>{"use strict";e.d(t,{J:()=>n.J});var n=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(a,t,e)=>{"use strict";e.d(t,{xv:()=>r});var n=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),d=e("./node_modules/react/jsx-runtime.js");const m={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},u={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},l={left:"text-left",right:"text-right",center:"text-center"},i={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function r({className:s,text:o,size:c="body1",weight:x="regular",align:_="left",color:y="primary"}){return(0,d.jsx)("p",{className:(0,n.m)("font-display",m[c],u[x],l[_],i[y],s),children:o})}r.displayName="Text";try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(s){}},"./src/components/Text/index.ts":(a,t,e)=>{"use strict";e.d(t,{x:()=>n.xv});var n=e("./src/components/Text/Text.tsx")},"./src/assets/icons/Github.svg":(a,t,e)=>{"use strict";e.d(t,{Z:()=>l});var n=e("./node_modules/react/index.js"),d;function m(){return m=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i},m.apply(this,arguments)}var u=function(r){return n.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},r),d||(d=n.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))};const l=u},"./node_modules/classnames/index.js":(a,t)=>{var e,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,m="[native code]";function u(){for(var l=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var s=typeof r;if(s==="string"||s==="number")l.push(r);else if(Array.isArray(r)){if(r.length){var o=u.apply(null,r);o&&l.push(o)}}else if(s==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){l.push(r.toString());continue}for(var c in r)d.call(r,c)&&r[c]&&l.push(c)}}}return l.join(" ")}a.exports?(u.default=u,a.exports=u):(e=[],n=function(){return u}.apply(t,e),n!==void 0&&(a.exports=n))})()}}]);})();
