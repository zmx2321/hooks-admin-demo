import{r as Q}from"./react.658dc38c.js";import{c as Z}from"./redux.27b1313d.js";function E(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?E=function(r){return typeof r}:E=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},E(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ee(e,t,r){return t&&M(e.prototype,t),r&&M(e,r),e}function te(e,t){return t&&(E(t)==="object"||typeof t=="function")?t:I(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},$(e)}function I(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function z(e,t){return z=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},z(e,t)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ne=function(e){re(t,e);function t(){var r,n;C(this,t);for(var i=arguments.length,u=new Array(i),a=0;a<i;a++)u[a]=arguments[a];return n=te(this,(r=$(t)).call.apply(r,[this].concat(u))),j(I(n),"state",{bootstrapped:!1}),j(I(n),"_unsubscribe",void 0),j(I(n),"handlePersistorState",function(){var p=n.props.persistor,f=p.getState(),s=f.bootstrapped;s&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally(function(){return n.setState({bootstrapped:!0})}):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())}),n}return ee(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(Q.exports.PureComponent);j(ne,"defaultProps",{children:null,loading:null});var W="persist:",B="persist/FLUSH",k="persist/REHYDRATE",Y="persist/PAUSE",q="persist/PERSIST",J="persist/PURGE",V="persist/REGISTER",ie=-1;function x(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(r){return typeof r}:x=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},x(e)}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?H(r,!0).forEach(function(n){ue(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e,t,r,n){n.debug;var i=oe({},r);return e&&x(e)==="object"&&Object.keys(e).forEach(function(u){u!=="_persist"&&t[u]===r[u]&&(i[u]=e[u])}),i}function ae(e){var t=e.blacklist||null,r=e.whitelist||null,n=e.transforms||[],i=e.throttle||0,u="".concat(e.keyPrefix!==void 0?e.keyPrefix:W).concat(e.key),a=e.storage,p;e.serialize===!1?p=function(m){return m}:typeof e.serialize=="function"?p=e.serialize:p=fe;var f=e.writeFailHandler||null,s={},d={},o=[],y=null,v=null,R=function(m){Object.keys(m).forEach(function(c){!O(c)||s[c]!==m[c]&&o.indexOf(c)===-1&&o.push(c)}),Object.keys(s).forEach(function(c){m[c]===void 0&&O(c)&&o.indexOf(c)===-1&&s[c]!==void 0&&o.push(c)}),y===null&&(y=setInterval(h,i)),s=m};function h(){if(o.length===0){y&&clearInterval(y),y=null;return}var l=o.shift(),m=n.reduce(function(c,P){return P.in(c,l,s)},s[l]);if(m!==void 0)try{d[l]=p(m)}catch(c){console.error("redux-persist/createPersistoid: error serializing state",c)}else delete d[l];o.length===0&&S()}function S(){Object.keys(d).forEach(function(l){s[l]===void 0&&delete d[l]}),v=a.setItem(u,p(d)).catch(_)}function O(l){return!(r&&r.indexOf(l)===-1&&l!=="_persist"||t&&t.indexOf(l)!==-1)}function _(l){f&&f(l)}var w=function(){for(;o.length!==0;)h();return v||Promise.resolve()};return{update:R,flush:w}}function fe(e){return JSON.stringify(e)}function le(e){var t=e.transforms||[],r="".concat(e.keyPrefix!==void 0?e.keyPrefix:W).concat(e.key),n=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=pe,n.getItem(r).then(function(u){if(u)try{var a={},p=i(u);return Object.keys(p).forEach(function(f){a[f]=t.reduceRight(function(s,d){return d.out(s,f,p)},i(p[f]))}),a}catch(f){throw f}else return})}function pe(e){return JSON.parse(e)}function ce(e){var t=e.storage,r="".concat(e.keyPrefix!==void 0?e.keyPrefix:W).concat(e.key);return t.removeItem(r,de)}function de(e){}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?G(r,!0).forEach(function(n){ye(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e,t){if(e==null)return{};var r=he(e,t),n,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)n=u[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function he(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,u;for(u=0;u<n.length;u++)i=n[u],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var me=5e3;function We(e,t){var r=e.version!==void 0?e.version:ie;e.debug;var n=e.stateReconciler===void 0?se:e.stateReconciler,i=e.getStoredState||le,u=e.timeout!==void 0?e.timeout:me,a=null,p=!1,f=!0,s=function(o){return o._persist.rehydrated&&a&&!f&&a.update(o),o};return function(d,o){var y=d||{},v=y._persist,R=ve(y,["_persist"]),h=R;if(o.type===q){var S=!1,O=function(T,g){S||(o.rehydrate(e.key,T,g),S=!0)};if(u&&setTimeout(function(){!S&&O(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},u),f=!1,a||(a=ae(e)),v)return b({},t(h,o),{_persist:v});if(typeof o.rehydrate!="function"||typeof o.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return o.register(e.key),i(e).then(function(P){var T=e.migrate||function(g,$e){return Promise.resolve(g)};T(P,r).then(function(g){O(g)},function(g){O(void 0,g)})},function(P){O(void 0,P)}),b({},t(h,o),{_persist:{version:r,rehydrated:!1}})}else{if(o.type===J)return p=!0,o.result(ce(e)),b({},t(h,o),{_persist:v});if(o.type===B)return o.result(a&&a.flush()),b({},t(h,o),{_persist:v});if(o.type===Y)f=!0;else if(o.type===k){if(p)return b({},h,{_persist:b({},v,{rehydrated:!0})});if(o.key===e.key){var _=t(h,o),w=o.payload,l=n!==!1&&w!==void 0?n(w,d,_,e):_,m=b({},l,{_persist:b({},v,{rehydrated:!0})});return s(m)}}}if(!v)return t(d,o);var c=t(h,o);return c===h?d:s(b({},c,{_persist:v}))}}function K(e){return ge(e)||Oe(e)||be()}function be(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Oe(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function ge(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?N(r,!0).forEach(function(n){Pe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X={registry:[],bootstrapped:!1},Se=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:X,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case V:return U({},t,{registry:[].concat(K(t.registry),[r.key])});case k:var n=t.registry.indexOf(r.key),i=K(t.registry);return i.splice(n,1),U({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function ke(e,t,r){var n=r||!1,i=Z(Se,X,t&&t.enhancer?t.enhancer:void 0),u=function(s){i.dispatch({type:V,key:s})},a=function(s,d,o){var y={type:k,payload:d,err:o,key:s};e.dispatch(y),i.dispatch(y),n&&p.getState().bootstrapped&&(n(),n=!1)},p=U({},i,{purge:function(){var s=[];return e.dispatch({type:J,result:function(o){s.push(o)}}),Promise.all(s)},flush:function(){var s=[];return e.dispatch({type:B,result:function(o){s.push(o)}}),Promise.all(s)},pause:function(){e.dispatch({type:Y})},persist:function(){e.dispatch({type:q,register:u,rehydrate:a})}});return t&&t.manualPersist||p.persist(),p}var F={},L={};L.__esModule=!0;L.default=Ee;function D(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(r){return typeof r}:D=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},D(e)}function A(){}var _e={getItem:A,setItem:A,removeItem:A};function we(e){if((typeof self=="undefined"?"undefined":D(self))!=="object"||!(e in self))return!1;try{var t=self[e],r="redux-persist ".concat(e," test");t.setItem(r,"test"),t.getItem(r),t.removeItem(r)}catch{return!1}return!0}function Ee(e){var t="".concat(e,"Storage");return we(t)?self[t]:_e}F.__esModule=!0;F.default=xe;var Ie=je(L);function je(e){return e&&e.__esModule?e:{default:e}}function xe(e){var t=(0,Ie.default)(e);return{getItem:function(n){return new Promise(function(i,u){i(t.getItem(n))})},setItem:function(n,i){return new Promise(function(u,a){u(t.setItem(n,i))})},removeItem:function(n){return new Promise(function(i,u){i(t.removeItem(n))})}}}var De=void 0,Re=Te(F);function Te(e){return e&&e.__esModule?e:{default:e}}var Ae=(0,Re.default)("local");De=Ae;export{ne as P,ke as a,De as d,We as p};
