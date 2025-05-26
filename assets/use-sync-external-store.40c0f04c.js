import{r as $}from"./react.acfecb27.js";var p={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=$.exports;function V(e,u){return e===u&&(e!==0||1/e===1/u)||e!==e&&u!==u}var h=typeof Object.is=="function"?Object.is:V,j=i.useState,R=i.useEffect,D=i.useLayoutEffect,O=i.useDebugValue;function z(e,u){var t=u(),a=j({inst:{value:t,getSnapshot:u}}),r=a[0].inst,n=a[1];return D(function(){r.value=t,r.getSnapshot=u,m(r)&&n({inst:r})},[e,t,u]),R(function(){return m(r)&&n({inst:r}),e(function(){m(r)&&n({inst:r})})},[e]),O(t),t}function m(e){var u=e.getSnapshot;e=e.value;try{var t=u();return!h(e,t)}catch{return!0}}function I(e,u){return u()}var M=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?I:z;w.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:M;p.exports=w;var _={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=$.exports,g=p.exports;function G(e,u){return e===u&&(e!==0||1/e===1/u)||e!==e&&u!==u}var L=typeof Object.is=="function"?Object.is:G,k=g.useSyncExternalStore,C=d.useRef,U=d.useEffect,W=d.useMemo,x=d.useDebugValue;_.useSyncExternalStoreWithSelector=function(e,u,t,a,r){var n=C(null);if(n.current===null){var f={hasValue:!1,value:null};n.current=f}else f=n.current;n=W(function(){function S(o){if(!y){if(y=!0,l=o,o=a(o),r!==void 0&&f.hasValue){var c=f.value;if(r(c,o))return v=c}return v=o}if(c=v,L(l,o))return c;var b=a(o);return r!==void 0&&r(c,b)?(l=o,c):(l=o,v=b)}var y=!1,l,v,E=t===void 0?null:t;return[function(){return S(u())},E===null?void 0:function(){return S(E())}]},[u,t,a,r]);var s=k(e,n[0],n[1]);return U(function(){f.hasValue=!0,f.value=s},[s]),x(s),s};export{p as s};
