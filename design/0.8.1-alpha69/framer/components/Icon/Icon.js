import*as s from"react";import{createElement as a}from"react";function o({svg:h,size:i="medium",className:l,...r}){let t={xsmall:{width:12,height:12},small:{width:16,height:16},medium:{width:20,height:20},large:{width:24,height:24},xlarge:{width:32,height:32}}[i]||{width:24,height:24},e=h({});return a("svg",{...e==null?void 0:e.props,viewBox:"0 0 24 24",width:t.width,height:t.height,className:`fill-black dark:fill-white ${l}`,...r},e==null?void 0:e.props.children)}export{o as Icon};
