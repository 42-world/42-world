(()=>{var V=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(d,a,e)=>a in d?V(d,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[a]=e,I=(d,a)=>{for(var e in a||(a={}))B.call(a,e)&&w(d,e,a[e]);if(j)for(var e of j(a))M.call(a,e)&&w(d,e,a[e]);return d},N=(d,a)=>K(d,P(a));var b=(d,a)=>{var e={};for(var t in d)B.call(d,t)&&a.indexOf(t)<0&&(e[t]=d[t]);if(d!=null&&j)for(var t of j(d))a.indexOf(t)<0&&M.call(d,t)&&(e[t]=d[t]);return e};(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[511],{"./src/components/AvatarText/AvatarText.stories.ts":(d,a,e)=>{var O,E,S;"use strict";e.r(a),e.d(a,{Primary:()=>v,__namedExportsOrder:()=>T,default:()=>g});var t=e("./node_modules/classnames/index.js"),u=e.n(t),o=e("./src/components/Avatar/Avatar.tsx"),s=e("./src/components/Card/Card.tsx"),c=e("./src/components/Chip/Chip.tsx"),r=e("./src/components/Divider/index.ts"),n=e("./src/components/GroupHeader/GroupHeader.tsx"),i=e("./src/components/Icon/index.ts"),l=e("./src/components/Input/Input.tsx"),p=e("./src/components/ListItem/ListItem.tsx"),x=e("./src/components/Sample/Sample.tsx"),f=e("./src/components/Text/index.ts"),_=e("./src/components/Thumbnail/index.ts"),m=e("./node_modules/react/jsx-runtime.js");function y({src:C,alt:R="",size:A="40px",mainText:D,subText:L}){return(0,m.jsxs)("div",{className:u()("flex flex-row",{"gap-3":A==="40px","gap-4":A==="64px"}),children:[(0,m.jsx)(o.q,{src:C,alt:R,size:A}),(0,m.jsxs)("div",{className:"flex flex-col items-start justify-center",children:[(0,m.jsx)(f.x,{text:D,size:A==="64px"?"heading3":"body2",weight:"medium"}),L&&(0,m.jsx)(f.x,{text:L,size:A==="64px"?"body2":"small",color:"secondary"})]})]})}y.displayName="AvatarText";try{y.displayName="AvatarText",y.__docgenInfo={description:"",displayName:"AvatarText",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}},mainText:{defaultValue:null,description:"",name:"mainText",required:!0,type:{name:"string"}},subText:{defaultValue:null,description:"",name:"subText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AvatarText/AvatarText.tsx#AvatarText"]={docgenInfo:y.__docgenInfo,name:"AvatarText",path:"src/components/AvatarText/AvatarText.tsx#AvatarText"})}catch(C){}const h={title:"rookies/AvatarText",component:y},v={args:{src:"https://picsum.photos/536/354",alt:"42world",size:"40px",mainText:"\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C"}},g=h;v.parameters=N(I({},v.parameters),{docs:N(I({},(O=v.parameters)==null?void 0:O.docs),{source:I({originalSource:`{
  // Add your story args here
  args: {
    src: 'https://picsum.photos/536/354',
    alt: '42world',
    size: '40px',
    mainText: '\uADDC\uB3D9\uD55C\uADF8\uB987\uC8FC\uC18C'
  }
}`},(S=(E=v.parameters)==null?void 0:E.docs)==null?void 0:S.source)})});const T=["Primary"]},"./src/components/Avatar/Avatar.tsx":(d,a,e)=>{"use strict";e.d(a,{q:()=>s});var t=e("./node_modules/classnames/index.js"),u=e.n(t),o=e("./node_modules/react/jsx-runtime.js");function s({src:c,alt:r="",size:n="40px"}){return(0,o.jsx)("img",{src:c,alt:r,className:u()("rounded-full object-cover",{"w-10 h-10":n==="40px","w-16 h-16":n==="64px"})})}s.displayName="Avatar";try{s.displayName="Avatar",s.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:{value:"40px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"40px"'},{value:'"64px"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:s.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(c){}},"./src/components/Card/Card.tsx":(d,a,e)=>{"use strict";e.d(a,{Z:()=>s});var t=e("./src/components/Text/index.ts"),u=e("./src/components/Thumbnail/index.ts"),o=e("./node_modules/react/jsx-runtime.js");function s({imageSrc:c,imageAlt:r,primary:n="",secondary:i="",detail:l}){return(0,o.jsxs)("div",{className:"w-[278px] flex flex-col group",children:[(0,o.jsx)("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300",children:(0,o.jsx)(u.p,{src:c,alt:r,width:278,ratio:"16:9"})}),(0,o.jsx)("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300",children:(0,o.jsx)(t.x,{text:`${n} \xB7 ${i}`,size:"body2",weight:"regular",color:"secondary"})}),l&&(0,o.jsx)(t.x,{text:l,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"})]})}s.displayName="Card";try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},primary:{defaultValue:{value:""},description:"",name:"primary",required:!1,type:{name:"string"}},secondary:{defaultValue:{value:""},description:"",name:"secondary",required:!1,type:{name:"string"}},detail:{defaultValue:null,description:"",name:"detail",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:s.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(c){}},"./src/components/Chip/Chip.tsx":(d,a,e)=>{"use strict";e.d(a,{A:()=>r});var t=e("./node_modules/classnames/index.js"),u=e.n(t),o=e("./src/components/Icon/index.ts"),s=e("./src/components/Text/index.ts"),c=e("./node_modules/react/jsx-runtime.js");function r({icon:n,text:i,selected:l}){return(0,c.jsxs)("div",{className:u()("w-fit h-8 flex flex-row items-center rounded-lg select-none",i?"px-3":"px-2",l?"bg-bg-secondary dark:bg-bg-secondary_dark":"bg-bg-tertiary_alpha_0 dark:bg-bg-primary_alpha_0_dark"),children:[n&&(0,c.jsx)(o.J,{svg:n,className:"mr-2"}),i&&(0,c.jsx)(s.x,{text:i,size:"body2",weight:"medium",color:l?"primary":"secondary"})]})}r.displayName="Chip";try{r.displayName="Chip",r.__docgenInfo={description:"",displayName:"Chip",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FC<SVGAttributes<SVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:r.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(n){}},"./src/components/Divider/Divider.tsx":(d,a,e)=>{"use strict";e.d(a,{i:()=>s});var t=e("./node_modules/classnames/index.js"),u=e.n(t),o=e("./node_modules/react/jsx-runtime.js");function s(i){var l=i,{variant:c="primary",className:r}=l,n=b(l,["variant","className"]);return(0,o.jsx)("div",I({className:u()("w-full h-[1px]",{"bg-border-primary dark:bg-border-primary_dark":c==="primary","bg-border-secondary dark:bg-border-secondary_dark":c==="secondary"},r)},n))}s.displayName="Divider";try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:s.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(c){}},"./src/components/Divider/index.ts":(d,a,e)=>{"use strict";e.d(a,{i:()=>t.i});var t=e("./src/components/Divider/Divider.tsx")},"./src/components/GroupHeader/GroupHeader.tsx":(d,a,e)=>{"use strict";e.d(a,{t:()=>l});var t=e("./node_modules/react/index.js"),u;function o(){return o=Object.assign?Object.assign.bind():function(p){for(var x=1;x<arguments.length;x++){var f=arguments[x];for(var _ in f)Object.prototype.hasOwnProperty.call(f,_)&&(p[_]=f[_])}return p},o.apply(this,arguments)}var s=function(x){return t.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},x),u||(u=t.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))};const c=s;var r=e("./src/components/Icon/index.ts"),n=e("./src/components/Text/index.ts"),i=e("./node_modules/react/jsx-runtime.js");function l({href:p,text:x}){return(0,i.jsxs)("a",{className:"flex flex-row items-center gap-1 hover:gap-2 transition-gap duration-300 ease-in-out text-text-primary dark:text-text-primary_dark",href:p,children:[(0,i.jsx)(n.x,{text:x,size:"heading3",weight:"semibold"}),(0,i.jsx)(r.J,{svg:c,className:"w-6 h-6"})]})}l.displayName="GroupHeader";try{l.displayName="GroupHeader",l.__docgenInfo={description:"",displayName:"GroupHeader",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/GroupHeader/GroupHeader.tsx#GroupHeader"]={docgenInfo:l.__docgenInfo,name:"GroupHeader",path:"src/components/GroupHeader/GroupHeader.tsx#GroupHeader"})}catch(p){}},"./src/components/Icon/Icon.tsx":(d,a,e)=>{"use strict";e.d(a,{J:()=>u});var t=e("./node_modules/react/jsx-runtime.js");function u(n){var i=n,{svg:o,size:s="medium",className:c}=i,r=b(i,["svg","size","className"]);const l={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[s]||{width:24,height:24};return(0,t.jsx)(o,I({viewBox:"0 0 24 24",width:l.width,height:l.height,className:`fill-black dark:fill-white ${c}`},r))}u.displayName="Icon";try{u.displayName="Icon",u.__docgenInfo={description:"",displayName:"Icon",props:{svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"FC<SVGAttributes<SVGElement>>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'},{value:'"xlarge"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:u.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(o){}},"./src/components/Icon/index.ts":(d,a,e)=>{"use strict";e.d(a,{J:()=>t.J});var t=e("./src/components/Icon/Icon.tsx")},"./src/components/Input/Input.tsx":(d,a,e)=>{"use strict";e.d(a,{I:()=>n});var t=e("./node_modules/classnames/index.js"),u=e.n(t),o=e("./node_modules/react/index.js");const s=({state:i,defaultState:l,onChange:p})=>{const[x,f]=(0,o.useState)(typeof l=="function"?l():l),_=i!=null,m=_?i:x,y=(0,o.useCallback)(h=>{typeof h=="function"&&(h=h()),_||f(h),p==null||p(h)},[]);return[m,y]};var c=e("./src/components/Text/index.ts"),r=e("./node_modules/react/jsx-runtime.js");const n=(0,o.forwardRef)((O,T)=>{var E=O,{id:i,label:l,value:p,defaultValue:x,subLabel:f,variant:_,rightAddon:m,hasError:y,maxLength:h,onValueChange:v}=E,g=b(E,["id","label","value","defaultValue","subLabel","variant","rightAddon","hasError","maxLength","onValueChange"]);const S=(0,o.useId)(),[C,R]=s({state:p,defaultState:x!=null?x:"",onChange:v}),A=D=>{R(D.target.value)};return(0,r.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,r.jsxs)("div",{className:"flex w-full",children:[l&&(0,r.jsx)("label",{htmlFor:i!=null?i:S,className:'before:content-["*"] before:mr-1 text-sm leading-[1.8] font-normal text-text-secondary dark:text-text-secondary_dark',children:l}),h&&(0,r.jsx)(c.x,{className:"ml-auto",text:`(${C.length}/${h})`,size:"body2",weight:"regular",color:"secondary"})]}),(0,r.jsxs)("div",{className:u()("flex items-center w-full rounded-lg px-4",{"border border-solid border-border-primary bg-bg-primary_alpha_0 focus-within:border-color-blue_200":_==="outline","bg-bg-secondary dark:bg-bg-secondary_dark":_==="filled","border-color-red focus-within:border-color-red":y}),children:[(0,r.jsx)("input",I({ref:T,id:i!=null?i:S,className:"w-full h-[44px] bg-transparent focus:outline-none text-base font-normal leading-[1.5] text-text-primary dark:text-text-primary_dark placeholder:text-text-tertiary dark:placeholder:text-text-tertiary_dark",value:C,onChange:A,maxLength:h},g)),m&&(0,r.jsx)("span",{className:"flex",children:m})]}),f&&(0,r.jsx)(c.x,{text:f,size:"body2",weight:"regular",color:y?"red_200":"secondary"})]})});try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"",name:"subLabel",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!0,type:{name:"boolean"}},rightAddon:{defaultValue:null,description:"",name:"rightAddon",required:!0,type:{name:"ReactNode"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:n.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(i){}},"./src/components/ListItem/ListItem.tsx":(d,a,e)=>{"use strict";e.d(a,{H:()=>h});var t=e("./node_modules/react/index.js"),u;function o(){return o=Object.assign?Object.assign.bind():function(v){for(var g=1;g<arguments.length;g++){var T=arguments[g];for(var O in T)Object.prototype.hasOwnProperty.call(T,O)&&(v[O]=T[O])}return v},o.apply(this,arguments)}var s=function(g){return t.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},g),u||(u=t.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})))};const c=s;var r;function n(){return n=Object.assign?Object.assign.bind():function(v){for(var g=1;g<arguments.length;g++){var T=arguments[g];for(var O in T)Object.prototype.hasOwnProperty.call(T,O)&&(v[O]=T[O])}return v},n.apply(this,arguments)}var i=function(g){return t.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},g),r||(r=t.createElement("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})))};const l=i;var p=e("./src/components/Divider/index.ts"),x=e("./src/components/Icon/index.ts"),f=e("./src/components/Thumbnail/index.ts"),_=e("./src/components/Text/Text.tsx"),m=e("./node_modules/react/jsx-runtime.js");const y=(v,g)=>(0,m.jsxs)("div",{className:"flex flex-row items-center gap-1",children:[v&&(0,m.jsx)(_.xv,{text:v,size:"body2",weight:"medium",color:"secondary"}),v&&g&&"\xB7",g&&(0,m.jsx)(_.xv,{text:g,size:"body2",weight:"regular",color:"secondary"})]});y.displayName="MergedSecondaryText";function h({title:v,thumbnailSrc:g,secondaryTextFirst:T,secondaryTextSecond:O,commentCnt:E,likeCnt:S,hasBorder:C=!0}){return(0,m.jsxs)("div",{className:"w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none",children:[(0,m.jsxs)("div",{className:"flex flex-row items-center py-4",children:[g&&(0,m.jsx)(f.p,{src:g,alt:v,width:85,ratio:"16:9"}),(0,m.jsxs)("div",{className:"ml-3 flex-1",children:[y(T,O),(0,m.jsx)(_.xv,{text:v,size:"body1",weight:"medium",color:"primary"})]}),(0,m.jsxs)("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark",children:[E&&(0,m.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,m.jsx)(x.J,{svg:c,className:"w-4 h-4"}),(0,m.jsx)(_.xv,{text:E.toString(),size:"body2",weight:"regular",color:"secondary"})]}),S&&(0,m.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,m.jsx)(x.J,{svg:l,className:"w-4 h-4"}),(0,m.jsx)(_.xv,{text:S.toString(),size:"body2",weight:"regular",color:"secondary"})]})]})]}),C&&(0,m.jsx)(p.i,{variant:"secondary"})]})}h.displayName="ListItem";try{h.displayName="ListItem",h.__docgenInfo={description:"",displayName:"ListItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},thumbnailSrc:{defaultValue:null,description:"",name:"thumbnailSrc",required:!1,type:{name:"string"}},secondaryTextFirst:{defaultValue:null,description:"",name:"secondaryTextFirst",required:!1,type:{name:"string"}},secondaryTextSecond:{defaultValue:null,description:"",name:"secondaryTextSecond",required:!1,type:{name:"string"}},commentCnt:{defaultValue:null,description:"",name:"commentCnt",required:!1,type:{name:"number"}},likeCnt:{defaultValue:null,description:"",name:"likeCnt",required:!1,type:{name:"number"}},hasBorder:{defaultValue:{value:"true"},description:"",name:"hasBorder",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ListItem/ListItem.tsx#ListItem"]={docgenInfo:h.__docgenInfo,name:"ListItem",path:"src/components/ListItem/ListItem.tsx#ListItem"})}catch(v){}},"./src/components/Sample/Sample.tsx":(d,a,e)=>{"use strict";e.d(a,{d:()=>p});var t=e("./node_modules/@material-design-icons/svg/filled/face.svg"),u=e("./node_modules/react/index.js"),o;function s(){return s=Object.assign?Object.assign.bind():function(x){for(var f=1;f<arguments.length;f++){var _=arguments[f];for(var m in _)Object.prototype.hasOwnProperty.call(_,m)&&(x[m]=_[m])}return x},s.apply(this,arguments)}var c=function(f){return u.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},f),o||(o=u.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))};const r=c;var n=e("./src/components/Icon/index.ts"),i=e("./src/components/Text/index.ts"),l=e("./node_modules/react/jsx-runtime.js");function p({text:x}){return(0,l.jsxs)("div",{className:"flex flex-row items-center",children:[(0,l.jsx)(i.x,{text:`This is Samp3le! "${x}"`,size:"heading3",weight:"semibold",className:"mr-2"}),(0,l.jsx)(n.J,{svg:r,size:"xsmall",className:"inline-block  mr-1"}),(0,l.jsx)(n.J,{svg:t.Z,size:"medium",className:"inline-block fill-yellow-400"})]})}p.displayName="Sample";try{p.displayName="Sample",p.__docgenInfo={description:"",displayName:"Sample",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Sample/Sample.tsx#Sample"]={docgenInfo:p.__docgenInfo,name:"Sample",path:"src/components/Sample/Sample.tsx#Sample"})}catch(x){}},"./src/components/Text/Text.tsx":(d,a,e)=>{"use strict";e.d(a,{xv:()=>r});var t=e("./node_modules/react/jsx-runtime.js");const u={heading1:"text-4xl leading-normal",heading2:"text-2xl leading-normal",heading3:"text-lg leading-normal",body1:"text-base leading-[1.8rem]",body2:"text-sm leading-[1.8rem]",small:"text-xs leading-normal"},o={regular:"font-normal",medium:"font-medium",semibold:"font-semibold"},s={left:"text-left",right:"text-right",center:"text-center"},c={primary:"text-text-primary dark:text-text-primary_dark",secondary:"text-text-secondary dark:text-text-secondary_dark",tertiary:"text-text-tertiary dark:text-text-tertiary_dark",white:"text-white",black:"text-black",red_100:"text-red-300",red_200:"text-red-500",red_300:"text-red-700",orange_100:"text-orange-300",orange_200:"text-orange-500",orange_300:"text-orange-700",yellow_100:"text-yellow-300",yellow_200:"text-yellow-500",yellow_300:"text-yellow-700",lime_100:"text-lime-300",lime_200:"text-lime-500",lime_300:"text-lime-700",green_100:"text-green-300",green_200:"text-green-500",green_300:"text-green-700",sky_100:"text-sky-300",sky_200:"text-sky-500",sky_300:"text-sky-700",blue_100:"text-blue-300",blue_200:"text-blue-500",blue_300:"text-blue-700",indigo_100:"text-indigo-300",indigo_200:"text-indigo-500",indigo_300:"text-indigo-700"};function r({className:n,text:i,size:l="body1",weight:p="regular",align:x="left",color:f="primary"}){return(0,t.jsx)("p",{className:`font-display
        ${u[l]}
        ${o[p]}
        ${s[x]}
        ${c[f]}
        ${n}
        `,children:i})}r.displayName="Text";try{r.displayName="Text",r.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},size:{defaultValue:{value:"body1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"heading1"'},{value:'"heading2"'},{value:'"heading3"'},{value:'"body1"'},{value:'"body2"'},{value:'"small"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"medium"'},{value:'"semibold"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"white"'},{value:'"black"'},{value:'"red_100"'},{value:'"red_200"'},{value:'"red_300"'},{value:'"orange_100"'},{value:'"orange_200"'},{value:'"orange_300"'},{value:'"yellow_100"'},{value:'"yellow_200"'},{value:'"yellow_300"'},{value:'"lime_100"'},{value:'"lime_200"'},{value:'"lime_300"'},{value:'"green_100"'},{value:'"green_200"'},{value:'"green_300"'},{value:'"sky_100"'},{value:'"sky_200"'},{value:'"sky_300"'},{value:'"blue_100"'},{value:'"blue_200"'},{value:'"blue_300"'},{value:'"indigo_100"'},{value:'"indigo_200"'},{value:'"indigo_300"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:r.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(n){}},"./src/components/Text/index.ts":(d,a,e)=>{"use strict";e.d(a,{x:()=>t.xv});var t=e("./src/components/Text/Text.tsx")},"./src/components/Thumbnail/Thumbnail.tsx":(d,a,e)=>{"use strict";e.d(a,{p:()=>s});var t=e("./node_modules/classnames/index.js"),u=e.n(t),o=e("./node_modules/react/jsx-runtime.js");function s({src:c,alt:r="",width:n,ratio:i="16:9"}){const l={"16:9":"aspect-video","16:10":"aspect-16/10","1:1":"aspect-square"}[i];return(0,o.jsx)("img",{src:c,alt:r,style:{width:n},className:u()(l,"object-cover rounded-2xl")})}s.displayName="Thumbnail";try{s.displayName="Thumbnail",s.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},ratio:{defaultValue:{value:"16:9"},description:"",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"16:9"'},{value:'"16:10"'},{value:'"1:1"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Thumbnail/Thumbnail.tsx#Thumbnail"]={docgenInfo:s.__docgenInfo,name:"Thumbnail",path:"src/components/Thumbnail/Thumbnail.tsx#Thumbnail"})}catch(c){}},"./src/components/Thumbnail/index.ts":(d,a,e)=>{"use strict";e.d(a,{p:()=>t.p});var t=e("./src/components/Thumbnail/Thumbnail.tsx")},"./node_modules/@material-design-icons/svg/filled/face.svg":(d,a,e)=>{"use strict";e.d(a,{Z:()=>c});var t=e("./node_modules/react/index.js"),u;function o(){return o=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(r[l]=i[l])}return r},o.apply(this,arguments)}var s=function(n){return t.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},n),u||(u=t.createElement("path",{d:"M9 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})))};const c=s},"./node_modules/classnames/index.js":(d,a)=>{var e,t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var u={}.hasOwnProperty,o="[native code]";function s(){for(var c=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var i=typeof n;if(i==="string"||i==="number")c.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&c.push(l)}}else if(i==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){c.push(n.toString());continue}for(var p in n)u.call(n,p)&&n[p]&&c.push(p)}}}return c.join(" ")}d.exports?(s.default=s,d.exports=s):(e=[],t=function(){return s}.apply(a,e),t!==void 0&&(d.exports=t))})()}}]);})();
