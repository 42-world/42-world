import*as r from"react";import{Text as o}from"../Text/index.js";import{Thumbnail as n}from"../Thumbnail/index.js";function d({imageSrc:t,imageAlt:e,primary:s="",secondary:a="",detail:i}){return r.createElement("div",{className:"w-[278px] flex flex-col group"},r.createElement("div",{className:"group-hover:mt-[-8px] transition-spacing ease-in-out duration-300"},r.createElement(n,{src:t,alt:e,width:278,ratio:"16:9"})),r.createElement("div",{className:"mt-3 group-hover:mt-5 transition-spacing ease-in-out duration-300"},r.createElement(o,{text:`${s} \xB7 ${a}`,size:"body2",weight:"regular",color:"secondary"})),i&&r.createElement(o,{text:i,size:"body1",weight:"medium",color:"primary",className:"line-clamp-1"}))}export{d as Card};
