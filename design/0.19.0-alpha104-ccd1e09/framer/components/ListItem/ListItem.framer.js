import*as e from"react";import{ControlType as t}from"framer";import{FramerProvider as i,applyFramerProperties as m}from"../../common/framer/index.js";import{ListItem as n}from"./ListItem.js";function a({rightAddon:r,...o}){return r.length?e.createElement(i,null,e.createElement(n,{rightAddon:r,...o})):e.createElement(i,null,e.createElement(n,{...o}))}m(a,{title:{title:"Title",type:t.String,defaultValue:"Lorem ipsum"},thumbnailSrc:{title:"ThumbnailSrc",type:t.String,defaultValue:"https://picsum.photos/536/354"},secondaryTextFirst:{title:"SecondaryTextFirst",type:t.String,defaultValue:"2021.10.20"},secondaryTextSecond:{title:"SecondaryTextSecond",type:t.String,defaultValue:"\uD64D\uAE38\uB3D9"},hasBorder:{title:"HasBorder",type:t.Boolean,defaultValue:!0},rightAddon:{title:"RightAddon",type:t.ComponentInstance},onClick:{title:"OnClick",type:t.EventHandler}});export{a as ListItem};
