"use strict";(()=>{var f=Object.defineProperty,b=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var y=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,_=(a,t)=>{for(var e in t||(t={}))T.call(t,e)&&y(a,e,t[e]);if(x)for(var e of x(t))B.call(t,e)&&y(a,e,t[e]);return a},c=(a,t)=>b(a,E(t));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[65],{"./src/components/Badge/Badge.stories.ts":(a,t,e)=>{var n,l,r;e.r(t),e.d(t,{Primary:()=>o,__namedExportsOrder:()=>i,default:()=>u});var d=e("./src/components/Badge/Badge.tsx");const s={title:"rookies/Badge",component:d.C},o={args:{color:"mono",text:"\uB0B4\uB313\uAE00"}},u=s;o.parameters=c(_({},o.parameters),{docs:c(_({},(n=o.parameters)==null?void 0:n.docs),{source:_({originalSource:`{
  // Add your story args here
  args: {
    color: 'mono',
    text: '\uB0B4\uB313\uAE00'
  }
}`},(r=(l=o.parameters)==null?void 0:l.docs)==null?void 0:r.source)})});const i=["Primary"]},"./src/components/Badge/Badge.tsx":(a,t,e)=>{e.d(t,{C:()=>l});var d=e("./node_modules/classnames/index.js"),s=e.n(d),o=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),u=e("./src/components/Text/index.ts"),i=e("./node_modules/react/jsx-runtime.js");const n={indigo:"bg-color-indigo",yellow:"bg-color-yellow",mint:"bg-color-mint",cyan:"bg-color-cyan",blue:"bg-color-blue_200",pink:"bg-color-pink",brown:"bg-color-brown",mono:"bg-bg-primary_dark dark:bg-bg-primary",outline:"bg-none"};function l({color:r="outline",text:m,className:g}){return(0,i.jsx)("div",{className:(0,o.m)(s()("px-2 py-[3px] w-fit rounded-lg",n[r],{"border border-border-secondary dark:border-border-secondary_dark":r==="outline"}),g),children:(0,i.jsx)(u.x,{text:m,size:"small",className:s()({"text-text-primary_dark dark:text-text-primary":r==="mono"}),color:r==="outline"?"secondary":"white"})})}l.displayName="Badge";try{l.displayName="Badge",l.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:{value:"outline"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"indigo"'},{value:'"yellow"'},{value:'"mint"'},{value:'"cyan"'},{value:'"blue"'},{value:'"pink"'},{value:'"brown"'},{value:'"mono"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:l.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(r){}},"./src/components/Text/Text.tsx":(a,t,e)=>{e.d(t,{xv:()=>n});var d=e("./node_modules/react/jsx-runtime.js");const s={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},o={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},u={left:"text-left",right:"text-right",center:"text-center"},i={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function n({className:l,text:r,size:m="body1",weight:g="regular",align:v="left",color:p="primary"}){return(0,d.jsx)("p",{className:`font-display
        ${s[m]}
        ${o[g]}
        ${u[v]}
        ${i[p]}
        ${l}
        `,children:r})}n.displayName="Text";try{n.displayName="Text",n.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:n.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(l){}},"./src/components/Text/index.ts":(a,t,e)=>{e.d(t,{x:()=>d.xv});var d=e("./src/components/Text/Text.tsx")}}]);})();
