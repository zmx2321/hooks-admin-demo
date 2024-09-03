import{r as x}from"./react.658dc38c.js";var E={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=x.exports;function $(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var V=typeof Object.is=="function"?Object.is:$,j=f.useState,O=f.useEffect,_=f.useLayoutEffect,g=f.useDebugValue;function k(e,t){var r=t(),i=j({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return _(function(){n.value=r,n.getSnapshot=t,p(n)&&u({inst:n})},[e,r,t]),O(function(){return p(n)&&u({inst:n}),e(function(){p(n)&&u({inst:n})})},[e]),g(r),r}function p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!V(e,r)}catch{return!0}}function q(e,t){return t()}var D=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?q:k;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:D;E.exports=w;var L={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=x.exports,M=E.exports;function R(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var W=typeof Object.is=="function"?Object.is:R,z=M.useSyncExternalStore,A=v.useRef,B=v.useEffect,C=v.useMemo,F=v.useDebugValue;L.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=A(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=C(function(){function S(o){if(!h){if(h=!0,d=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return a=s}return a=o}if(s=a,W(d,o))return s;var m=i(o);return n!==void 0&&n(s,m)?s:(d=o,a=m)}var h=!1,d,a,y=r===void 0?null:r;return[function(){return S(t())},y===null?void 0:function(){return S(y())}]},[t,r,i,n]);var l=z(e,u[0],u[1]);return B(function(){c.hasValue=!0,c.value=l},[l]),F(l),l};export{E as s};
