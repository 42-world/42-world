(()=>{var D=Object.defineProperty,L=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var C=(n,t,e)=>t in n?D(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,g=(n,t)=>{for(var e in t||(t={}))k.call(t,e)&&C(n,e,t[e]);if(h)for(var e of h(t))O.call(t,e)&&C(n,e,t[e]);return n},b=(n,t)=>L(n,B(t));var A=(n,t)=>{var e={};for(var l in n)k.call(n,l)&&t.indexOf(l)<0&&(e[l]=n[l]);if(n!=null&&h)for(var l of h(n))t.indexOf(l)<0&&O.call(n,l)&&(e[l]=n[l]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[195],{"./src/components/Input/Input.stories.ts":(n,t,e)=>{var r,a,s;"use strict";e.r(t),e.d(t,{Primary:()=>o,__namedExportsOrder:()=>u,default:()=>i});var l=e("./src/components/Input/Input.tsx");const m={title:"rookies/Input",component:l.I},o={args:{placeholder:"",maxLength:10,variant:"outline",hasError:!1}},i=m;o.parameters=b(g({},o.parameters),{docs:b(g({},(r=o.parameters)==null?void 0:r.docs),{source:g({originalSource:`{
  args: {
    placeholder: '',
    maxLength: 10,
    variant: 'outline',
    hasError: false
  }
}`},(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source)})});const u=["Primary"]},"./src/components/Input/Input.tsx":(n,t,e)=>{"use strict";e.d(t,{I:()=>a});var l=e("./node_modules/classnames/index.js"),m=e.n(l),o=e("./node_modules/react/index.js");const i=({state:s,defaultState:d,onChange:c})=>{const[_,p]=(0,o.useState)(typeof d=="function"?d():d),f=s!=null,v=f?s:_,y=(0,o.useCallback)(x=>{typeof x=="function"&&(x=x()),f||p(x),c==null||c(x)},[]);return[v,y]};var u=e("./src/components/Text/index.ts"),r=e("./node_modules/react/jsx-runtime.js");const a=(0,o.forwardRef)((K,j)=>{var E=K,{id:s,label:d,value:c,defaultValue:_,subLabel:p,variant:f,rightAddon:v,hasError:y,maxLength:x,onValueChange:w}=E,S=A(E,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const I=(0,o.useId)(),[T,N]=i({state:c,defaultState:_!=null?_:"",onChange:w}),V=R=>{N(R.target.value)};return(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)("div",{className:"flex w-full",children:[d&&(0,r.jsx)("label",{htmlFor:s!=null?s:I,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:d}),x&&(0,r.jsx)(u.x,{className:"ml-auto",text:`(${T.length}/${x})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,r.jsxs)("div",{className:m()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":f==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":f==="filled","border-color-red focus-within:border-color-red":y}),children:[(0,r.jsx)("input",g({ref:j,id:s!=null?s:I,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:T,onChange:V,maxLength:x},S)),v&&(0,r.jsx)("span",{className:"flex",children:v})]}),p&&(0,r.jsx)(u.x,{text:p,size:"body2",weight:"regular",color:y?"red_200":"secondary"})]})});try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:a.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(s){}},"./src/components/Text/Text.tsx":(n,t,e)=>{"use strict";e.d(t,{xv:()=>r});var l=e("./node_modules/react/jsx-runtime.js");const m={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},o={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},i={left:"text-left",right:"text-right",center:"text-center"},u={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function r({className:a,text:s,size:d="body1",weight:c="regular",align:_="left",color:p="primary"}){return(0,l.jsx)("p",{className:`font-display
        ${m[d]}
        ${o[c]}
        ${i[_]}
        ${u[p]}
        ${a}
        `,children:s})}r.displayName="Text";try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(a){}},"./src/components/Text/index.ts":(n,t,e)=>{"use strict";e.d(t,{x:()=>l.xv});var l=e("./src/components/Text/Text.tsx")},"./node_modules/classnames/index.js":(n,t)=>{var e,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var m={}.hasOwnProperty,o="[native code]";function i(){for(var u=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var s=typeof a;if(s==="string"||s==="number")u.push(a);else if(Array.isArray(a)){if(a.length){var d=i.apply(null,a);d&&u.push(d)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){u.push(a.toString());continue}for(var c in a)m.call(a,c)&&a[c]&&u.push(c)}}}return u.join(" ")}n.exports?(i.default=i,n.exports=i):(e=[],l=function(){return i}.apply(t,e),l!==void 0&&(n.exports=l))})()}}]);})();
