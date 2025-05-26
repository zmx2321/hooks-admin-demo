import{a as f,r as e}from"./react.acfecb27.js";import{a as T}from"./react-dom.c71d3c1c.js";import{l as U,R as F}from"./react-router.dd3f5746.js";import{c as _}from"./@remix-run.83bb7a71.js";/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b="6";try{window.__reactRouterVersion=b}catch{}const x="startTransition",l=f[x],y="flushSync";T[y];const E="useId";f[E];function V(t){let{basename:h,children:p,future:r,window:R}=t,o=e.exports.useRef();o.current==null&&(o.current=_({window:R,v5Compat:!0}));let s=o.current,[a,n]=e.exports.useState({action:s.action,location:s.location}),{v7_startTransition:i}=r||{},c=e.exports.useCallback(u=>{i&&l?l(()=>n(u)):n(u)},[n,i]);return e.exports.useLayoutEffect(()=>s.listen(c),[s,c]),e.exports.useEffect(()=>U(r),[r]),e.exports.createElement(F,{basename:h,children:p,location:a.location,navigationType:a.action,navigator:s,future:r})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var S;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S||(S={}));export{V as H};
