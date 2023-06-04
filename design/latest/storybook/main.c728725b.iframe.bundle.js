(()=>{var W=Object.defineProperty;var C=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var N=(o,n,e)=>n in o?W(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e,z=(o,n)=>{for(var e in n||(n={}))P.call(n,e)&&N(o,e,n[e]);if(C)for(var e of C(n))K.call(n,e)&&N(o,e,n[e]);return o};var U=(o,n)=>{var e={};for(var a in o)P.call(o,a)&&n.indexOf(a)<0&&(e[a]=o[a]);if(o!=null&&C)for(var a of C(o))n.indexOf(a)<0&&K.call(o,a)&&(e[a]=o[a]);return e};var F=(o,n)=>()=>(n||o((n={exports:{}}).exports,n),n.exports);var S=(o,n,e)=>new Promise((a,l)=>{var i=r=>{try{s(e.next(r))}catch(d){l(d)}},t=r=>{try{s(e.throw(r))}catch(d){l(d)}},s=r=>r.done?a(r.value):Promise.resolve(r.value).then(i,t);s((e=e.apply(o,n)).next())});var H=F(R=>{(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[179],{"./node_modules/@storybook/addon-docs/dist sync recursive":o=>{function n(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}n.keys=()=>[],n.resolve=n,n.id="./node_modules/@storybook/addon-docs/dist sync recursive",o.exports=n},"./.storybook/preview.tsx":(o,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>Y});var a=e("./node_modules/@storybook/theming/dist/chunk-4NMOSTKD.mjs"),l=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-dark-mode/dist/esm/index.js"),t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(t),r=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(r),c=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_=e.n(c),m=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=e.n(m),g=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(g),u=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(u),y=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/styles/_tailwind.css"),f={};f.styleTagTransform=v(),f.setAttributes=p(),f.insert=_().bind(null,"head"),f.domAPI=d(),f.insertStyleElement=h();var A=s()(y.Z,f);const j=y.Z&&y.Z.locals?y.Z.locals:void 0;var V=e("./src/components/Card/Card.tsx"),O=e("./src/components/Chip/Chip.tsx"),E=e("./src/components/GroupHeader/GroupHeader.tsx"),x=e("./src/components/Sample/Sample.tsx"),T=e("./src/components/Text/index.ts"),M=e("./src/components/Thumbnail/index.ts"),B=e("./src/components/Input/Input.tsx"),k=e("./src/context/index.ts"),w=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./.storybook/style.css"),b={};b.styleTagTransform=v(),b.setAttributes=p(),b.insert=_().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h();var $=s()(w.Z,b);const G=w.Z&&w.Z.locals?w.Z.locals:void 0;var L=e("./node_modules/react/jsx-runtime.js");const Y={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},darkMode:{dark:a.np.dark,light:a.np.light,darkClass:"darkClass",lightClass:"lightClass",current:"light",classTarget:"html",stylePreview:!0}},decorators:[I=>(0,L.jsx)(D,{children:I()})]};function D(I){return(0,L.jsx)(k.f,{value:(0,i.vs)()?"dark":"light",children:I.children})}D.displayName="ThemeWrapper"},"./src/assets/icons/index.ts":(o,n,e)=>{"use strict";e.d(n,{Dk:()=>s,_Q:()=>c});const i={color:{main_green_5:"#9CDD9F",main_green_10:"#41C464",main_green_20:"#009929",red_5_light:"#FFD4D1",red_10_light:"#FF5D5D",red_20_light:"#F34247",red_5_dark:"#5F2121",grey_5_light:"#FEFEFE",grey_10_light:"#FDFDFD",grey_20_light:"#F7F8F9",grey_30_light:"#E9EBEE",grey_40_light:"#C5C8CE",grey_50_light:"#646F7C",grey_60_light:"#374553",grey_70_light:"#28323C",grey_80_light:"#161D24",grey_5_dark:"#171B1C",grey_10_dark:"#1E2427",grey_20_dark:"#2E363A",grey_30_dark:"#41474C",grey_40_dark:"#5A6166",grey_50_dark:"#999FA4",grey_60_dark:"#C5C8CE",grey_70_dark:"#F7F8F9",grey_80_dark:"#FDFDFD"},screenSize:{TABLET_SIZE:"700px"}};var t=e("./node_modules/react/jsx-runtime.js");const s=({color:u})=>(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:i.color[u],children:(0,t.jsx)("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"})});s.displayName="BellIcon";try{s.displayName="BellIcon",s.__docgenInfo={description:"",displayName:"BellIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/BellIcon.tsx#BellIcon"]={docgenInfo:s.__docgenInfo,name:"BellIcon",path:"src/assets/icons/BellIcon.tsx#BellIcon"})}catch(u){}const r=({color:u})=>(0,t.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"18",height:"18",color:i.color[u],children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})});r.displayName="ChatIcon";try{r.displayName="ChatIcon",r.__docgenInfo={description:"",displayName:"ChatIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ChatIcon.tsx#ChatIcon"]={docgenInfo:r.__docgenInfo,name:"ChatIcon",path:"src/assets/icons/ChatIcon.tsx#ChatIcon"})}catch(u){}const d=({color:u,className:v})=>(0,t.jsx)("svg",{className:`checkmarkSvg ${v}`,viewBox:"0 0 20 20",fill:"currentColor",color:i.color[u],children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})});d.displayName="CheckMarkIcon";try{d.displayName="CheckMarkIcon",d.__docgenInfo={description:"",displayName:"CheckMarkIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/CheckMarkIcon.tsx#CheckMarkIcon"]={docgenInfo:d.__docgenInfo,name:"CheckMarkIcon",path:"src/assets/icons/CheckMarkIcon.tsx#CheckMarkIcon"})}catch(u){}const c=({classname:u})=>(0,t.jsx)("svg",{className:`${u}`,viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M9.29 15.46l3.88-3.88L9.29 7.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})});c.displayName="ChevronRight";try{c.displayName="ChevronRight",c.__docgenInfo={description:"",displayName:"ChevronRight",props:{classname:{defaultValue:null,description:"",name:"classname",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ChevronRight.tsx#ChevronRight"]={docgenInfo:c.__docgenInfo,name:"ChevronRight",path:"src/assets/icons/ChevronRight.tsx#ChevronRight"})}catch(u){}const _=({color:u})=>(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:i.color[u],children:(0,t.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})});_.displayName="MoonIcon";try{_.displayName="MoonIcon",_.__docgenInfo={description:"",displayName:"MoonIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/MoonIcon.tsx#MoonIcon"]={docgenInfo:_.__docgenInfo,name:"MoonIcon",path:"src/assets/icons/MoonIcon.tsx#MoonIcon"})}catch(u){}const m=({color:u})=>(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:i.color[u],children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd"})});m.displayName="PlusIcon";try{m.displayName="PlusIcon",m.__docgenInfo={description:"",displayName:"PlusIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/PlusIcon.tsx#PlusIcon"]={docgenInfo:m.__docgenInfo,name:"PlusIcon",path:"src/assets/icons/PlusIcon.tsx#PlusIcon"})}catch(u){}const p=({color:u})=>(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:i.color[u],children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})});p.displayName="SearchIcon";try{p.displayName="SearchIcon",p.__docgenInfo={description:"",displayName:"SearchIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/SearchIcon.tsx#SearchIcon"]={docgenInfo:p.__docgenInfo,name:"SearchIcon",path:"src/assets/icons/SearchIcon.tsx#SearchIcon"})}catch(u){}const g=({color:u})=>(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",width:"24",height:"24",color:i.color[u],children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})});g.displayName="SunIcon";try{g.displayName="SunIcon",g.__docgenInfo={description:"",displayName:"SunIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/SunIcon.tsx#SunIcon"]={docgenInfo:g.__docgenInfo,name:"SunIcon",path:"src/assets/icons/SunIcon.tsx#SunIcon"})}catch(u){}const h=({color:u})=>(0,t.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"18",height:"18",color:i.color[u],children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"})});h.displayName="ThumbIcon";try{h.displayName="ThumbIcon",h.__docgenInfo={description:"",displayName:"ThumbIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"main_green_5"'},{value:'"main_green_10"'},{value:'"main_green_20"'},{value:'"red_5_light"'},{value:'"red_10_light"'},{value:'"red_20_light"'},{value:'"red_5_dark"'},{value:'"grey_5_light"'},{value:'"grey_10_light"'},{value:'"grey_20_light"'},{value:'"grey_30_light"'},{value:'"grey_40_light"'},{value:'"grey_50_light"'},{value:'"grey_60_light"'},{value:'"grey_70_light"'},{value:'"grey_80_light"'},{value:'"grey_5_dark"'},{value:'"grey_10_dark"'},{value:'"grey_20_dark"'},{value:'"grey_30_dark"'},{value:'"grey_40_dark"'},{value:'"grey_50_dark"'},{value:'"grey_60_dark"'},{value:'"grey_70_dark"'},{value:'"grey_80_dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/ThumbIcon.tsx#ThumbIcon"]={docgenInfo:h.__docgenInfo,name:"ThumbIcon",path:"src/assets/icons/ThumbIcon.tsx#ThumbIcon"})}catch(u){}},"./src/components/Card/Card.tsx":(o,n,e)=>{"use strict";e.d(n,{Z:()=>r});var a=e("./node_modules/classnames/index.js"),l=e.n(a),i=e("./src/context/index.ts"),t=e("./src/components/Thumbnail/index.ts"),s=e("./node_modules/react/jsx-runtime.js");function r({imageSrc:d,imageAlt:c,primary:_="",secondary:m="",detail:p}){const g=(0,i.F)();return(0,s.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,s.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,s.jsx)(t.p,{src:d,alt:c,width:278,ratio:"16:9"})}),(0,s.jsxs)("div",{className:l()("mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300 text-sm font-normal",{"text-text-secondary":g==="light","text-text-secondary_dark":g==="dark"}),children:[(0,s.jsx)("span",{children:_}),(0,s.jsx)("span",{className:"mx-1",children:"\xB7"}),(0,s.jsx)("span",{children:m})]}),p&&(0,s.jsx)("p",{className:l()("text-base font-medium line-clamp-1",{"text-text-primary":g==="light","text-text-primary_dark":g==="dark"}),children:p})]})}r.displayName="Card";try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:r.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(d){}},"./src/components/Chip/Chip.tsx":(o,n,e)=>{"use strict";e.d(n,{A:()=>s});var a=e("./node_modules/classnames/index.js"),l=e.n(a),i=e("./src/context/index.ts"),t=e("./node_modules/react/jsx-runtime.js");function s({children:r,text:d,selected:c}){const _=(0,i.F)();return(0,t.jsxs)("div",{className:l()("w-fit h-8 flex flex-row items-center rounded-lg select-none",d?"px-3":"px-2",{[c?"bg-bg-secondary":"bg-bg-tertiary_alpha_0"]:_==="light",[c?"bg-bg-secondary_dark":"bg-bg-primary_alpha_0_dark"]:_==="dark"}),children:[(0,t.jsx)("div",{className:l()([{hidden:!r},"mr-2"]),children:r}),(0,t.jsx)("span",{className:l()("text-sm font-medium",{[c?"text-text-primary":"text-text-secondary"]:_==="light",[c?"text-text-primary_dark":"text-text-secondary_dark"]:_==="dark"}),children:d})]})}s.displayName="Chip";try{s.displayName="Chip",s.__docgenInfo={description:"",displayName:"Chip",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:s.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(r){}},"./src/components/GroupHeader/GroupHeader.tsx":(o,n,e)=>{"use strict";e.d(n,{t:()=>d});var a=e("./node_modules/classnames/index.js"),l=e.n(a),i=e("./src/assets/icons/index.ts"),t=e("./src/context/index.ts"),s=e("./src/components/Text/index.ts"),r=e("./node_modules/react/jsx-runtime.js");function d({href:c,text:_}){const m=(0,t.F)();return(0,r.jsxs)("a",{className:l()("flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out",{"text-text-primary":m==="light","text-text-primary_dark":m==="dark"}),href:c,children:[(0,r.jsx)(s.x,{text:_,size:"heading3",weight:"semibold"}),(0,r.jsx)(i._Q,{classname:l()("w-6","h-6")})]})}d.displayName="GroupHeader";try{d.displayName="GroupHeader",d.__docgenInfo={description:"",displayName:"GroupHeader",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/GroupHeader/GroupHeader.tsx#GroupHeader"]={docgenInfo:d.__docgenInfo,name:"GroupHeader",path:"src/components/GroupHeader/GroupHeader.tsx#GroupHeader"})}catch(c){}},"./src/components/Input/Input.tsx":(o,n,e)=>{"use strict";e.d(n,{I:()=>d});var a=e("./node_modules/classnames/index.js"),l=e.n(a),i=e("./node_modules/react/index.js"),t=e("./src/context/index.ts");const s=({state:c,defaultState:_,onChange:m})=>{const[p,g]=(0,i.useState)(typeof _=="function"?_():_),h=c!=null,u=h?c:p,v=(0,i.useCallback)(y=>{typeof y=="function"&&(y=y()),h||g(y),m==null||m(y)},[]);return[u,v]};var r=e("./node_modules/react/jsx-runtime.js");const d=(0,i.forwardRef)((V,j)=>{var O=V,{id:c,label:_,value:m,defaultValue:p,subLabel:g,variant:h,rightAddon:u,hasError:v,maxLength:y,onValueChange:f}=O,A=U(O,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const E=(0,i.useId)(),x=(0,t.F)(),[T,M]=s({state:m,defaultState:p!=null?p:"",onChange:f}),B=k=>{M(k.target.value)};return(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)("div",{className:"flex w-full",children:[_&&(0,r.jsx)("label",{htmlFor:c!=null?c:E,className:l()('before:content-["*"] before:mr-1 text-sm leading-[1.8]  font-normal',{"text-text-secondary":x==="light","text-text-secondary_dark":x==="dark"}),children:_}),y&&(0,r.jsxs)("span",{className:l()("text-sm leading-[1.8] font-normal ml-auto",{"text-text-secondary":x==="light","text-text-secondary_dark":x==="dark"}),children:["(",T.length,"/",y,")"]})]}),(0,r.jsxs)("div",{className:l()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":h==="outline",[x==="light"?"bg-bg-secondary":"bg-bg-secondary_dark"]:h==="filled","border-color-red focus-within:border-color-red":v}),children:[(0,r.jsx)("input",z({ref:j,id:c!=null?c:E,className:l()("w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5]",{"text-text-primary placeholder:text-text-tertiary":x==="light","text-text-primary_dark placeholder:text-text-tertiary_dark":x==="dark"}),value:T,onChange:B,maxLength:y},A)),u&&(0,r.jsx)("span",{className:"flex",children:u})]}),g&&(0,r.jsx)("span",{className:l()("text-sm leading-[1.8] font-normal",{"text-text-secondary":x==="light","text-text-secondary_dark":x==="dark","!text-color-red":v}),children:g})]})});try{d.displayName="Input",d.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:d.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(c){}},"./src/components/Sample/Sample.tsx":(o,n,e)=>{"use strict";e.d(n,{d:()=>s});var a=e("./node_modules/classnames/index.js"),l=e.n(a),i=e("./src/context/index.ts"),t=e("./node_modules/react/jsx-runtime.js");function s({text:r}){const d=(0,i.F)();return(0,t.jsxs)("div",{className:d==="dark"?"bg-pink-200":"bg-gray-300",children:['\uB098 \uC798\uB798 "',r,'" and \uC878\uB824 "',d,'" \uC640\uC774\uCC28 \uC2E0\uB098\uD558\uB2E4..',(0,t.jsx)("br",{}),l()(["bg-pink-200 text-lg hover:ring-4 hover:ring-offset-3 hover:opacity-50",{"bg-gray-300":d==="light"}])]})}s.displayName="Sample";try{s.displayName="Sample",s.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:s.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(r){}},"./src/components/Text/Text.tsx":(o,n,e)=>{"use strict";e.d(n,{xv:()=>d});var a=e("./src/context/index.ts"),l=e("./node_modules/react/jsx-runtime.js");const i={heading1:"text-4xl",heading2:"text-2xl",heading3:"text-lg",body1:"text-base",body2:"text-sm",small:"text-xs"},t={regular:"font-light",medium:"font-normal",semibold:"font-semibold"},s={left:"text-left",right:"text-right",center:"text-center"},r={light:{primary:"text-text-primary",secondary:"text-text-secondary",tertiary:"text-text-tertiary",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"},dark:{primary:"text-text-primary_dark",secondary:"text-text-secondary_dark",tertiary:"text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"}};function d({text:c,size:_="body1",weight:m="regular",align:p="left",color:g="primary"}){const h=(0,a.F)();return(0,l.jsx)("p",{className:`font-display
        ${i[_]}
        ${t[m]}
        ${s[p]}
        ${r[h][g]}
        `,children:c})}d.displayName="Text";try{d.displayName="Text",d.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:d.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(c){}},"./src/components/Text/index.ts":(o,n,e)=>{"use strict";e.d(n,{x:()=>a.xv});var a=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(o,n,e)=>{"use strict";e.d(n,{p:()=>t});var a=e("./node_modules/classnames/index.js"),l=e.n(a),i=e("./node_modules/react/jsx-runtime.js");function t({src:s,alt:r,width:d,ratio:c="16:9"}){const _={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[c];return(0,i.jsx)("img",{src:s,alt:r,style:{width:d},className:l()(_,"object-cover rounded-2xl")})}t.displayName="Thumbnail";try{t.displayName="Thumbnail",t.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:t.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(s){}},"./src/components/Thumbnail/index.ts":(o,n,e)=>{"use strict";e.d(n,{p:()=>a.p});var a=e("./src/components/Thumbnail/Thumbnail.tsx")},"./src/context/index.ts":(o,n,e)=>{"use strict";e.d(n,{f:()=>t,F:()=>i});var a=e("./node_modules/react/index.js");const l=s=>{const r=(0,a.createContext)(s),d=r.Provider;function c(_){const m=(0,a.useContext)(r);if(!m)throw new Error(`useContext must be used within a Provider, check this ${_!=null?_:""}`);return m}return[c,d]},[i,t]=l("light");try{i.displayName="useTheme",i.__docgenInfo={description:"",displayName:"useTheme",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/context/themeContext.tsx#useTheme"]={docgenInfo:i.__docgenInfo,name:"useTheme",path:"src/context/themeContext.tsx#useTheme"})}catch(s){}try{t.displayName="ThemeProvider",t.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/context/themeContext.tsx#ThemeProvider"]={docgenInfo:t.__docgenInfo,name:"ThemeProvider",path:"src/context/themeContext.tsx#ThemeProvider"})}catch(s){}},"./storybook-config-entry.js":(o,n,e)=>{"use strict";var a=e("./node_modules/@storybook/global/dist/index.mjs"),l=e("@storybook/preview-api");const i=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,t=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,s=g=>g(),r=[g=>S(R,null,function*(){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(g))return;const h=g.substring(6);return e("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+h)}),g=>S(R,null,function*(){if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(g))return;const h=g.substring(6);return e("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+h)})];function d(g){return S(this,null,function*(){for(let h=0;h<r.length;h++){const u=yield s(()=>r[h](g));if(u)return u}})}const{SERVER_CHANNEL_URL:c}=a.global,_=()=>(0,l.composeConfigs)([e("./node_modules/@storybook/react/preview.js"),e("./node_modules/@storybook/addon-links/dist/preview.mjs"),e("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),e("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),e("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),e("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),e("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),e("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),e("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),e("./node_modules/@storybook/addon-styling/dist/preview.mjs"),e("./.storybook/preview.tsx")]),m=(0,i.createChannel)({page:"preview"});if(l.addons.setChannel(m),c){const g=(0,t.createChannel)({url:c});l.addons.setServerChannel(g),window.__STORYBOOK_SERVER_CHANNEL__=g}const p=new l.PreviewWeb;window.__STORYBOOK_PREVIEW__=p,window.__STORYBOOK_STORY_STORE__=p.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=m,window.__STORYBOOK_CLIENT_API__=new l.ClientApi({storyStore:p.storyStore}),p.initialize({importFn:d,getProjectAnnotations:_})},"./node_modules/@storybook/react/dist sync recursive":o=>{function n(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}n.keys=()=>[],n.resolve=n,n.id="./node_modules/@storybook/react/dist sync recursive",o.exports=n},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./.storybook/style.css":(o,n,e)=>{"use strict";e.d(n,{Z:()=>r});var a=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),i=e("./node_modules/css-loader/dist/runtime/api.js"),t=e.n(i),s=t()(l());s.push([o.id,`.darkClass .sb-show-main {
  background: #333333 !important;
}

.darkClass .docs-story {
  background: #333333 !important;
}
`,""]);const r=s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/styles/_tailwind.css":(o,n,e)=>{"use strict";e.d(n,{Z:()=>r});var a=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),i=e("./node_modules/css-loader/dist/runtime/api.js"),t=e.n(i),s=t()(l());s.push([o.id,`/*
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

.ml-auto {
  margin-left: auto;
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

.h-\\[44px\\] {
  height: 44px;
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

.w-full {
  width: 100%;
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

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.rounded-2xl {
  border-radius: 1rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-border-primary {
  --tw-border-opacity: 1;
  border-color: rgb(217 217 217 / var(--tw-border-opacity));
}

.border-color-red {
  --tw-border-opacity: 1;
  border-color: rgb(255 59 48 / var(--tw-border-opacity));
}

.bg-bg-primary_alpha_0 {
  background-color: #FFFFFF00;
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

.bg-transparent {
  background-color: transparent;
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

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
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

.leading-\\[1\\.5\\] {
  line-height: 1.5;
}

.leading-\\[1\\.8\\] {
  line-height: 1.8;
}

.\\!text-color-red {
  --tw-text-opacity: 1 !important;
  color: rgb(255 59 48 / var(--tw-text-opacity)) !important;
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
  color: rgb(41 41 41 / var(--tw-text-opacity));
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

.outline {
  outline-style: solid;
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

.placeholder\\:text-text-tertiary::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder\\:text-text-tertiary::placeholder {
  --tw-text-opacity: 1;
  color: rgb(181 181 181 / var(--tw-text-opacity));
}

.placeholder\\:text-text-tertiary_dark::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(122 122 122 / var(--tw-text-opacity));
}

.placeholder\\:text-text-tertiary_dark::placeholder {
  --tw-text-opacity: 1;
  color: rgb(122 122 122 / var(--tw-text-opacity));
}

.before\\:mr-1::before {
  content: var(--tw-content);
  margin-right: 0.25rem;
}

.before\\:content-\\[\\"\\*\\"\\]::before {
  --tw-content: "*";
  content: var(--tw-content);
}

.focus-within\\:border-color-blue_200:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(0 122 255 / var(--tw-border-opacity));
}

.focus-within\\:border-color-red:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(255 59 48 / var(--tw-border-opacity));
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

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.group:hover .group-hover\\:mt-5 {
  margin-top: 1.25rem;
}

.group:hover .group-hover\\:mt-\\[-8px\\] {
  margin-top: -8px;
}
`,""]);const r=s},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(o,n,e)=>{var a={"./Introduction.mdx":["./src/Introduction.mdx",206,281]};function l(i){if(!e.o(a,i))return Promise.resolve().then(()=>{var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r});var t=a[i],s=t[0];return Promise.all(t.slice(1).map(e.e)).then(()=>e(s))}l.keys=()=>Object.keys(a),l.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",o.exports=l},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(o,n,e)=>{var a={"./components/Card/Card.stories":["./src/components/Card/Card.stories.ts",518],"./components/Card/Card.stories.ts":["./src/components/Card/Card.stories.ts",518],"./components/Chip/Chip.stories":["./src/components/Chip/Chip.stories.ts",529],"./components/Chip/Chip.stories.ts":["./src/components/Chip/Chip.stories.ts",529],"./components/GroupHeader/GroupHeader.stories":["./src/components/GroupHeader/GroupHeader.stories.ts",721],"./components/GroupHeader/GroupHeader.stories.ts":["./src/components/GroupHeader/GroupHeader.stories.ts",721],"./components/Input/Input.stories":["./src/components/Input/Input.stories.ts",195],"./components/Input/Input.stories.ts":["./src/components/Input/Input.stories.ts",195],"./components/Sample/Sample.stories":["./src/components/Sample/Sample.stories.ts",854],"./components/Sample/Sample.stories.ts":["./src/components/Sample/Sample.stories.ts",854],"./components/Text/Text.stories":["./src/components/Text/Text.stories.ts",874],"./components/Text/Text.stories.ts":["./src/components/Text/Text.stories.ts",874],"./components/Thumbnail/Thumbnail.stories":["./src/components/Thumbnail/Thumbnail.stories.ts",934],"./components/Thumbnail/Thumbnail.stories.ts":["./src/components/Thumbnail/Thumbnail.stories.ts",934]};function l(i){if(!e.o(a,i))return Promise.resolve().then(()=>{var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r});var t=a[i],s=t[0];return e.e(t[1]).then(()=>e(s))}l.keys=()=>Object.keys(a),l.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",o.exports=l},"@storybook/addons":o=>{"use strict";o.exports=__STORYBOOK_MODULE_ADDONS__},"@storybook/channels":o=>{"use strict";o.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":o=>{"use strict";o.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":o=>{"use strict";o.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":o=>{"use strict";o.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?4f7e":()=>{}},o=>{var n=a=>o(o.s=a);o.O(0,[897],()=>n("./storybook-config-entry.js"));var e=o.O()}])});H();})();
