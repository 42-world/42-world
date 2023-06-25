"use strict";(()=>{var f=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(r,t,e)=>t in r?f(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,m=(r,t)=>{for(var e in t||(t={}))k.call(t,e)&&h(r,e,t[e]);if(g)for(var e of g(t))j.call(t,e)&&h(r,e,t[e]);return r},u=(r,t)=>_(r,b(t));(self.webpackChunk_42world_design_core=self.webpackChunk_42world_design_core||[]).push([[281],{"./node_modules/@mdx-js/react/lib/index.js":(r,t,e)=>{e.d(t,{NF:()=>c,Zo:()=>x,ah:()=>l,pC:()=>n});var d=e("./node_modules/react/index.js");const n=d.createContext({});function c(o){return s;function s(a){const i=l(a.components);return d.createElement(o,u(m({},a),{allComponents:i}))}}function l(o){const s=d.useContext(n);return d.useMemo(()=>typeof o=="function"?o(s):m(m({},s),o),[s,o])}const p={};function x({components:o,children:s,disableParentContext:a}){let i;return a?i=typeof o=="function"?o({}):o||p:i=l(o),d.createElement(n.Provider,{value:i},s)}},"./src/Introduction.mdx":(r,t,e)=>{e.r(t),e.d(t,{default:()=>x});var d=e("./node_modules/react/index.js"),n=e("./node_modules/react/jsx-runtime.js"),c=e("./node_modules/@mdx-js/react/lib/index.js"),l=e("./node_modules/@storybook/blocks/dist/index.mjs");function p(o={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),o.components);return s?(0,n.jsx)(s,Object.assign({},o,{children:(0,n.jsx)(a,{})})):a();function a(){const i=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,c.ah)(),o.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h_,{title:"Rookies/Introduction"}),`
`,(0,n.jsx)("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,(0,n.jsx)(i.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,(0,n.jsxs)(i.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,(0,n.jsx)(i.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,(0,n.jsxs)(i.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,(0,n.jsx)(i.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,(0,n.jsx)(i.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,n.jsx)(i.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]})]})}}const x=p}}]);})();
