"use strict";(()=>{var T=Object.defineProperty,w=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(n,t,e)=>t in n?T(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,c=(n,t)=>{for(var e in t||(t={}))S.call(t,e)&&y(n,e,t[e]);if(x)for(var e of x(t))E.call(t,e)&&y(n,e,t[e]);return n},v=(n,t)=>w(n,b(t));var O=(n,t)=>{var e={};for(var a in n)S.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(n!=null&&x)for(var a of x(n))t.indexOf(a)<0&&E.call(n,a)&&(e[a]=n[a]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[854],{"./src/components/Sample/Sample.stories.ts":(n,t,e)=>{var _,g,h;e.r(t),e.d(t,{Primary:()=>r,__namedExportsOrder:()=>p,default:()=>u});var a=e("./node_modules/@material-design-icons/svg/filled/face.svg"),o=e("./src/assets/icons/Github.svg"),i=e("./src/components/Icon/index.ts"),m=e("./src/components/Text/index.ts"),d=e("./node_modules/react/jsx-runtime.js");function l({text:f}){return(0,d.jsxs)("div",{className:"flex flex-row items-center",children:[(0,d.jsx)(m.x,{text:`This is Samp3le! "${f}"`,size:"heading3",weight:"semibold",className:"mr-2"}),(0,d.jsx)(i.J,{svg:o.Z,size:"xsmall"}),(0,d.jsx)(i.J,{svg:a.Z,size:"medium",className:"ml-1 inline-block fill-yellow-400 dark:fill-white"})]})}l.displayName="Sample";try{l.displayName="Sample",l.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:l.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(f){}const s={title:"rookies/Sample",component:l},r={args:{text:"Sample"}},u=s;r.parameters=v(c({},r.parameters),{docs:v(c({},(_=r.parameters)==null?void 0:_.docs),{source:c({originalSource:`{
  args: {
    text: 'Sample'
  }
}`},(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source)})});const p=["Primary"]},"./src/components/Icon/Icon.tsx":(n,t,e)=>{e.d(t,{J:()=>o});var a=e("./node_modules/react/jsx-runtime.js");function o(s){var r=s,{svg:i,size:m="medium",className:d}=r,l=O(r,["svg","size","className"]);const u={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[m]||{width:24,height:24};return(0,a.jsx)(i,c({viewBox:"0 0 24 24",width:u.width,height:u.height,className:d!=null?d:"fill-black dark:fill-white"},l))}o.displayName="Icon";try{o.displayName="Icon",o.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:o.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(i){}},"./src/components/Icon/index.ts":(n,t,e)=>{e.d(t,{J:()=>a.J});var a=e("./src/components/Icon/Icon.tsx")},"./src/components/Text/Text.tsx":(n,t,e)=>{e.d(t,{xv:()=>l});var a=e("./node_modules/react/jsx-runtime.js");const o={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},i={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},m={left:"text-left",right:"text-right",center:"text-center"},d={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function l({className:s,text:r,size:u="body1",weight:p="regular",align:_="left",color:g="primary"}){return(0,a.jsx)("p",{className:`font-display
        ${o[u]}
        ${i[p]}
        ${m[_]}
        ${d[g]}
        ${s}
        `,children:r})}l.displayName="Text";try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:l.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(s){}},"./src/components/Text/index.ts":(n,t,e)=>{e.d(t,{x:()=>a.xv});var a=e("./src/components/Text/Text.tsx")},"./node_modules/@material-design-icons/svg/filled/face.svg":(n,t,e)=>{e.d(t,{Z:()=>d});var a=e("./node_modules/react/index.js"),o;function i(){return i=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(l[u]=r[u])}return l},i.apply(this,arguments)}var m=function(s){return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},s),o||(o=a.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})))};const d=m},"./src/assets/icons/Github.svg":(n,t,e)=>{e.d(t,{Z:()=>d});var a=e("./node_modules/react/index.js"),o;function i(){return i=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(l[u]=r[u])}return l},i.apply(this,arguments)}var m=function(s){return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},s),o||(o=a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))};const d=m}}]);})();
