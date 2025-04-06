import{r as a}from"./index.5XC2200L.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=a,x=Symbol.for("react.element"),k=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,b=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,s){var r,o={},n=null,u=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)E.call(e,r)&&!h.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:x,type:t,key:n,ref:u,props:o,_owner:b.current}}i.Fragment=k;i.jsx=l;i.jsxs=l;p.exports=i;var O=p.exports;/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),g=(t,e)=>{const s=a.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:u,className:c="",children:f,...d},m)=>a.createElement("svg",{ref:m,...v,width:o,height:o,stroke:r,strokeWidth:u?Number(n)*24/Number(o):n,className:["lucide",`lucide-${R(t)}`,c].join(" "),...d},[...e.map(([_,y])=>a.createElement(_,y)),...Array.isArray(f)?f:[f]]));return s.displayName=`${t}`,s};export{g as c,O as j};
