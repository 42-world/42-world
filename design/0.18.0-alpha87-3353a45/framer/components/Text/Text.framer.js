import*as e from"react";import{ControlType as t}from"framer";import{FramerProvider as r,applyFramerProperties as i}from"../../common/framer/index.js";import{Text as n,textAlignConfig as p,textColorConfig as m,textSizeConfig as l,textWeightConfig as f}from"./Text.js";function s(o){return e.createElement(r,null,e.createElement(n,{...o}))}i(s,{text:{title:"Text",type:t.String,defaultValue:"Hello!"},size:{title:"Size",type:t.Enum,options:Object.keys(l)},weight:{title:"Weight",type:t.Enum,options:Object.keys(f)},align:{title:"Align",type:t.Enum,options:Object.keys(p)},color:{title:"Color",type:t.Enum,options:Object.keys(m)}});export{s as Text};
