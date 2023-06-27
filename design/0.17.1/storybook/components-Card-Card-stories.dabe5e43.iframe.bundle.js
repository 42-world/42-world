(()=>{var w=Object.defineProperty,N=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(n,a,e)=>a in n?w(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,d=(n,a)=>{for(var e in a||(a={}))R.call(a,e)&&B(n,e,a[e]);if(S)for(var e of S(a))I.call(a,e)&&B(n,e,a[e]);return n},_=(n,a)=>N(n,j(a));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[518],{"./src/components/Card/Card.stories.ts":(n,a,e)=>{var x,C,g,y,v,f,h,A,T;"use strict";e.r(a),e.d(a,{Primary:()=>u,PrimaryNoPrimaryText:()=>l,PrimaryWithTitle:()=>t,__namedExportsOrder:()=>m,default:()=>c});var s=e("./src/components/Text/index.ts"),p=e("./src/components/Thumbnail/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function r({imageSrc:E,imageAlt:O,primary:D="",secondary:P="",title:b}){return(0,o.jsxs)("div",{className:"group flex w-[278px] flex-col transition-transform duration-300 ease-in-out active:scale-92",children:[(0,o.jsx)("div",{className:"transition-transform duration-300 ease-in-out group-hover:translate-y-m8",children:(0,o.jsx)(p.p,{src:E,alt:O,width:278,ratio:"16:9"})}),(0,o.jsx)("div",{className:"mt-3 transition-spacing duration-300 ease-in-out",children:(0,o.jsx)(s.x,{text:`${D} \xB7 ${P}`,size:"body2",weight:"regular",color:"secondary"})}),b&&(0,o.jsx)(s.x,{text:b,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"})]})}r.displayName="Card";try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:r.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(E){}const i={title:"rookies/Card",component:r},u={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",primary:"\uC5D0\uBCA0\uBCA0\uC190",secondary:"2023.04.32"}},t={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",primary:"\uC5D0\uBCA0\uBCA0\uC190",secondary:"2023.04.32",title:"\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0"}},l={args:{imageSrc:"https://picsum.photos/536/354",imageAlt:"42world",secondary:"\uC9C0\uCD5C",title:"\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0"}},c=i;u.parameters=_(d({},u.parameters),{docs:_(d({},(x=u.parameters)==null?void 0:x.docs),{source:d({originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    primary: '\uC5D0\uBCA0\uBCA0\uC190',
    secondary: '2023.04.32'
  }
}`},(g=(C=u.parameters)==null?void 0:C.docs)==null?void 0:g.source)})}),t.parameters=_(d({},t.parameters),{docs:_(d({},(y=t.parameters)==null?void 0:y.docs),{source:d({originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    primary: '\uC5D0\uBCA0\uBCA0\uC190',
    secondary: '2023.04.32',
    title: '\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0'
  }
}`},(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source)})}),l.parameters=_(d({},l.parameters),{docs:_(d({},(h=l.parameters)==null?void 0:h.docs),{source:d({originalSource:`{
  args: {
    imageSrc: 'https://picsum.photos/536/354',
    imageAlt: '42world',
    secondary: '\uC9C0\uCD5C',
    title: '\uC9C0\uCD5C\uB294 \uBC30\uAC00 \uACE0\uD504\uACE0 \uB0B4\uC77C\uC740 \uB2ED\uAC00\uC2B4\uC0B4 \uC18C\uC138\uC9C0 \uBA39\uC744 \uAC70\uACE0 \uC2A4\uD0C0\uBC85\uC2A4 \uAC00\uC11C \uC774\uAC70 \uD558\uACE0'
  }
}`},(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source)})});const m=["Primary","PrimaryWithTitle","PrimaryNoPrimaryText"]},"./src/components/Text/Text.tsx":(n,a,e)=>{"use strict";e.d(a,{xv:()=>t});var s=e("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),p=e("./node_modules/react/jsx-runtime.js");const o={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-normal",body2:"text-sm leading-normal",small:"text-xs leading-normal"},r={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},i={left:"text-left",right:"text-right",center:"text-center"},u={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function t({className:l,text:c,size:m="body1",weight:x="regular",align:C="left",color:g="primary"}){return(0,p.jsx)("p",{className:(0,s.m)("font-display",o[m],r[x],i[C],u[g],l),children:c})}t.displayName="Text";try{t.displayName="Text",t.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:t.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(l){}},"./src/components/Text/index.ts":(n,a,e)=>{"use strict";e.d(a,{x:()=>s.xv});var s=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(n,a,e)=>{"use strict";e.d(a,{p:()=>r});var s=e("./node_modules/classnames/index.js"),p=e.n(s),o=e("./node_modules/react/jsx-runtime.js");function r({src:i,alt:u="",width:t,rounded:l="16px",ratio:c="16:9",className:m}){const x={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[c],C={"8px":"rounded-lg","16px":"rounded-2xl"}[l];return(0,o.jsx)("img",{src:i,alt:u,style:{width:t},className:p()(x,C,"object-cover",m)})}r.displayName="Thumbnail";try{r.displayName="Thumbnail",r.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},rounded:{defaultValue:{value:"16px"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"8px"'},{value:'"16px"'}]}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:r.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(i){}},"./src/components/Thumbnail/index.ts":(n,a,e)=>{"use strict";e.d(a,{p:()=>s.p});var s=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/classnames/index.js":(n,a)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty,o="[native code]";function r(){for(var i=[],u=0;u<arguments.length;u++){var t=arguments[u];if(t){var l=typeof t;if(l==="string"||l==="number")i.push(t);else if(Array.isArray(t)){if(t.length){var c=r.apply(null,t);c&&i.push(c)}}else if(l==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){i.push(t.toString());continue}for(var m in t)p.call(t,m)&&t[m]&&i.push(m)}}}return i.join(" ")}n.exports?(r.default=r,n.exports=r):(e=[],s=function(){return r}.apply(a,e),s!==void 0&&(n.exports=s))})()}}]);})();
