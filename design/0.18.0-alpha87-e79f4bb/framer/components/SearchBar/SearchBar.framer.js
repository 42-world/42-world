import*as r from"react";import{ControlType as e}from"framer";import{FramerProvider as t,applyFramerProperties as p}from"../../common/framer/index.js";import{SearchBar as m}from"./SearchBar.js";function i(a){let{children:l,...o}=a;return r.createElement(t,null,r.createElement(m,{...o}))}p(i,{variant:{title:"Variant",type:e.Enum,options:["primary","solid"],defaultValue:"primary"},value:{title:"Value",type:e.String,defaultValue:""},placeholder:{title:"Placeholder",type:e.String,defaultValue:"Gyudong"}});export{i as SearchBar};
