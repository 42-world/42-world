import*as e from"react";import{Divider as d}from"../Divider/index.js";import{Thumbnail as l}from"../Thumbnail/index.js";import{Text as i}from"./../Text/Text.js";var m=(r,t)=>e.createElement("div",{className:"flex flex-row items-center gap-1"},r&&e.createElement(i,{text:r,size:"body2",weight:"regular",color:"secondary"}),r&&t&&e.createElement(i,{text:"\xB7",size:"body2",weight:"regular",color:"secondary"}),t&&e.createElement(i,{text:t,size:"body2",weight:"regular",color:"secondary"}));function x({children:r,title:t,thumbnailSrc:o,secondaryTextFirst:s,secondaryTextSecond:a,hasBorder:n=!0}){return e.createElement("div",{className:"w-full cursor-pointer active:scale-95 transition-transform duration-300 ease-out select-none"},e.createElement("div",{className:"flex flex-row justify-between items-center py-4"},e.createElement("div",{className:"flex flex-row items-center"},o&&e.createElement(l,{src:o,alt:t,width:85,ratio:"16:9"}),e.createElement("div",{className:"ml-3 flex-1"},m(s,a),e.createElement(i,{text:t,size:"body1",weight:"medium",color:"primary"}))),r),n&&e.createElement(d,{variant:"secondary"}))}function c({children:r}){return e.createElement("div",{className:"flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark"},r)}x.MetadataItems=c;export{x as ListItem};
