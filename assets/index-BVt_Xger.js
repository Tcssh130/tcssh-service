(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Wh={exports:{}},Ta={},qh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function $0(){if(Pm)return Re;Pm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=k&&D[k]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function W(D,$,z){this.props=D,this.context=$,this.refs=Y,this.updater=z||B}W.prototype.isReactComponent={},W.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function we(){}we.prototype=W.prototype;function fe(D,$,z){this.props=D,this.context=$,this.refs=Y,this.updater=z||B}var me=fe.prototype=new we;me.constructor=fe,Q(me,W.prototype),me.isPureReactComponent=!0;var Ie=Array.isArray,je=Object.prototype.hasOwnProperty,ke={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(D,$,z){var ie,oe={},ve=null,Pe=null;if($!=null)for(ie in $.ref!==void 0&&(Pe=$.ref),$.key!==void 0&&(ve=""+$.key),$)je.call($,ie)&&!N.hasOwnProperty(ie)&&(oe[ie]=$[ie]);var de=arguments.length-2;if(de===1)oe.children=z;else if(1<de){for(var Le=Array(de),wt=0;wt<de;wt++)Le[wt]=arguments[wt+2];oe.children=Le}if(D&&D.defaultProps)for(ie in de=D.defaultProps,de)oe[ie]===void 0&&(oe[ie]=de[ie]);return{$$typeof:i,type:D,key:ve,ref:Pe,props:oe,_owner:ke.current}}function A(D,$){return{$$typeof:i,type:D.type,key:$,ref:D.ref,props:D.props,_owner:D._owner}}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function R(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(z){return $[z]})}var V=/\/+/g;function S(D,$){return typeof D=="object"&&D!==null&&D.key!=null?R(""+D.key):$.toString(36)}function Ye(D,$,z,ie,oe){var ve=typeof D;(ve==="undefined"||ve==="boolean")&&(D=null);var Pe=!1;if(D===null)Pe=!0;else switch(ve){case"string":case"number":Pe=!0;break;case"object":switch(D.$$typeof){case i:case e:Pe=!0}}if(Pe)return Pe=D,oe=oe(Pe),D=ie===""?"."+S(Pe,0):ie,Ie(oe)?(z="",D!=null&&(z=D.replace(V,"$&/")+"/"),Ye(oe,$,z,"",function(wt){return wt})):oe!=null&&(P(oe)&&(oe=A(oe,z+(!oe.key||Pe&&Pe.key===oe.key?"":(""+oe.key).replace(V,"$&/")+"/")+D)),$.push(oe)),1;if(Pe=0,ie=ie===""?".":ie+":",Ie(D))for(var de=0;de<D.length;de++){ve=D[de];var Le=ie+S(ve,de);Pe+=Ye(ve,$,z,Le,oe)}else if(Le=b(D),typeof Le=="function")for(D=Le.call(D),de=0;!(ve=D.next()).done;)ve=ve.value,Le=ie+S(ve,de++),Pe+=Ye(ve,$,z,Le,oe);else if(ve==="object")throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Pe}function _t(D,$,z){if(D==null)return D;var ie=[],oe=0;return Ye(D,ie,"","",function(ve){return $.call(z,ve,oe++)}),ie}function ct(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(z){(D._status===0||D._status===-1)&&(D._status=1,D._result=z)},function(z){(D._status===0||D._status===-1)&&(D._status=2,D._result=z)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var Fe={current:null},Z={transition:null},he={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ke};function te(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:_t,forEach:function(D,$,z){_t(D,function(){$.apply(this,arguments)},z)},count:function(D){var $=0;return _t(D,function(){$++}),$},toArray:function(D){return _t(D,function($){return $})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=W,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=fe,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Re.act=te,Re.cloneElement=function(D,$,z){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ie=Q({},D.props),oe=D.key,ve=D.ref,Pe=D._owner;if($!=null){if($.ref!==void 0&&(ve=$.ref,Pe=ke.current),$.key!==void 0&&(oe=""+$.key),D.type&&D.type.defaultProps)var de=D.type.defaultProps;for(Le in $)je.call($,Le)&&!N.hasOwnProperty(Le)&&(ie[Le]=$[Le]===void 0&&de!==void 0?de[Le]:$[Le])}var Le=arguments.length-2;if(Le===1)ie.children=z;else if(1<Le){de=Array(Le);for(var wt=0;wt<Le;wt++)de[wt]=arguments[wt+2];ie.children=de}return{$$typeof:i,type:D.type,key:oe,ref:ve,props:ie,_owner:Pe}},Re.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Re.createElement=T,Re.createFactory=function(D){var $=T.bind(null,D);return $.type=D,$},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:m,render:D}},Re.isValidElement=P,Re.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ct}},Re.memo=function(D,$){return{$$typeof:_,type:D,compare:$===void 0?null:$}},Re.startTransition=function(D){var $=Z.transition;Z.transition={};try{D()}finally{Z.transition=$}},Re.unstable_act=te,Re.useCallback=function(D,$){return Fe.current.useCallback(D,$)},Re.useContext=function(D){return Fe.current.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D){return Fe.current.useDeferredValue(D)},Re.useEffect=function(D,$){return Fe.current.useEffect(D,$)},Re.useId=function(){return Fe.current.useId()},Re.useImperativeHandle=function(D,$,z){return Fe.current.useImperativeHandle(D,$,z)},Re.useInsertionEffect=function(D,$){return Fe.current.useInsertionEffect(D,$)},Re.useLayoutEffect=function(D,$){return Fe.current.useLayoutEffect(D,$)},Re.useMemo=function(D,$){return Fe.current.useMemo(D,$)},Re.useReducer=function(D,$,z){return Fe.current.useReducer(D,$,z)},Re.useRef=function(D){return Fe.current.useRef(D)},Re.useState=function(D){return Fe.current.useState(D)},Re.useSyncExternalStore=function(D,$,z){return Fe.current.useSyncExternalStore(D,$,z)},Re.useTransition=function(){return Fe.current.useTransition()},Re.version="18.3.1",Re}var xm;function Vd(){return xm||(xm=1,qh.exports=$0()),qh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function H0(){if(Nm)return Ta;Nm=1;var i=Vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var E,k={},b=null,B=null;_!==void 0&&(b=""+_),y.key!==void 0&&(b=""+y.key),y.ref!==void 0&&(B=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(k[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)k[E]===void 0&&(k[E]=y[E]);return{$$typeof:e,type:m,key:b,ref:B,props:k,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var bm;function W0(){return bm||(bm=1,Wh.exports=H0()),Wh.exports}var M=W0(),lt=Vd(),mu={},Gh={exports:{}},Jt={},Kh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function q0(){return Dm||(Dm=1,(function(i){function e(Z,he){var te=Z.length;Z.push(he);e:for(;0<te;){var D=te-1>>>1,$=Z[D];if(0<o($,he))Z[D]=he,Z[te]=$,te=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var he=Z[0],te=Z.pop();if(te!==he){Z[0]=te;e:for(var D=0,$=Z.length,z=$>>>1;D<z;){var ie=2*(D+1)-1,oe=Z[ie],ve=ie+1,Pe=Z[ve];if(0>o(oe,te))ve<$&&0>o(Pe,oe)?(Z[D]=Pe,Z[ve]=te,D=ve):(Z[D]=oe,Z[ie]=te,D=ie);else if(ve<$&&0>o(Pe,te))Z[D]=Pe,Z[ve]=te,D=ve;else break e}}return he}function o(Z,he){var te=Z.sortIndex-he.sortIndex;return te!==0?te:Z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],E=1,k=null,b=3,B=!1,Q=!1,Y=!1,W=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Z){for(var he=t(_);he!==null;){if(he.callback===null)s(_);else if(he.startTime<=Z)s(_),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(_)}}function Ie(Z){if(Y=!1,me(Z),!Q)if(t(y)!==null)Q=!0,ct(je);else{var he=t(_);he!==null&&Fe(Ie,he.startTime-Z)}}function je(Z,he){Q=!1,Y&&(Y=!1,we(T),T=-1),B=!0;var te=b;try{for(me(he),k=t(y);k!==null&&(!(k.expirationTime>he)||Z&&!R());){var D=k.callback;if(typeof D=="function"){k.callback=null,b=k.priorityLevel;var $=D(k.expirationTime<=he);he=i.unstable_now(),typeof $=="function"?k.callback=$:k===t(y)&&s(y),me(he)}else s(y);k=t(y)}if(k!==null)var z=!0;else{var ie=t(_);ie!==null&&Fe(Ie,ie.startTime-he),z=!1}return z}finally{k=null,b=te,B=!1}}var ke=!1,N=null,T=-1,A=5,P=-1;function R(){return!(i.unstable_now()-P<A)}function V(){if(N!==null){var Z=i.unstable_now();P=Z;var he=!0;try{he=N(!0,Z)}finally{he?S():(ke=!1,N=null)}}else ke=!1}var S;if(typeof fe=="function")S=function(){fe(V)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,_t=Ye.port2;Ye.port1.onmessage=V,S=function(){_t.postMessage(null)}}else S=function(){W(V,0)};function ct(Z){N=Z,ke||(ke=!0,S())}function Fe(Z,he){T=W(function(){Z(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Q||B||(Q=!0,ct(je))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(b){case 1:case 2:case 3:var he=3;break;default:he=b}var te=b;b=he;try{return Z()}finally{b=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,he){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=b;b=Z;try{return he()}finally{b=te}},i.unstable_scheduleCallback=function(Z,he,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:E++,callback:he,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>D?(Z.sortIndex=te,e(_,Z),t(y)===null&&Z===t(_)&&(Y?(we(T),T=-1):Y=!0,Fe(Ie,te-D))):(Z.sortIndex=$,e(y,Z),Q||B||(Q=!0,ct(je))),Z},i.unstable_shouldYield=R,i.unstable_wrapCallback=function(Z){var he=b;return function(){var te=b;b=he;try{return Z.apply(this,arguments)}finally{b=te}}}})(Qh)),Qh}var Vm;function G0(){return Vm||(Vm=1,Kh.exports=q0()),Kh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function K0(){if(Om)return Jt;Om=1;var i=Vd(),e=G0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},k={};function b(n){return y.call(k,n)?!0:y.call(E,n)?!1:_.test(n)?k[n]=!0:(E[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var we=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(we,fe);W[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(we,fe);W[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(we,fe);W[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?b(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ie=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),ke=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),Z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function $(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var z=!1;function ie(n,r){if(!n||z)return"";z=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=I);break}}}finally{z=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function oe(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ke:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Ye:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case R:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:ve(n.type)||"Memo";case ct:r=n._payload,n=n._init;try{return ve(n(r))}catch{}}return null}function Pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function wt(n){var r=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ar(n){n._valueTracker||(n._valueTracker=wt(n))}function ds(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Si(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function fs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=de(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ro(n,r){r=r.checked,r!=null&&me(n,"checked",r,!1)}function Po(n,r){Ro(n,r);var a=de(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ps(n,r.type,a):r.hasOwnProperty("defaultValue")&&ps(n,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function el(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ps(n,r,a){(r!=="number"||Or(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lr=Array.isArray;function ur(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function xo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ms(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(lr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:de(a)}}function gs(n,r){var a=de(r.value),c=de(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function No(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cr,bo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=cr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Lr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(n){ki.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ai[r]=Ai[n]})});function Do(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ai.hasOwnProperty(n)&&Ai[n]?(""+r).trim():r+"px"}function Vo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Do(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Oo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,r){if(r){if(Oo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Mo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function ys(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,un=null,jn=null;function _s(n){if(n=aa(n)){if(typeof vs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=xl(r),vs(n.stateNode,n.type,r))}}function zn(n){un?jn?jn.push(n):jn=[n]:un=n}function Fo(){if(un){var n=un,r=jn;if(jn=un=null,_s(n),r)for(n=0;n<r.length;n++)_s(r[n])}}function Ri(n,r){return n(r)}function Uo(){}var hr=!1;function jo(n,r,a){if(hr)return n(r,a);hr=!0;try{return Ri(n,r,a)}finally{hr=!1,(un!==null||jn!==null)&&(Uo(),Fo())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ws=!1;if(m)try{var In={};Object.defineProperty(In,"passive",{get:function(){ws=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{ws=!1}function Pi(n,r,a,c,d,p,v,I,C){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var xi=!1,Es=null,Sn=!1,zo=null,_c={onError:function(n){xi=!0,Es=n}};function Ts(n,r,a,c,d,p,v,I,C){xi=!1,Es=null,Pi.apply(_c,arguments)}function tl(n,r,a,c,d,p,v,I,C){if(Ts.apply(this,arguments),xi){if(xi){var U=Es;xi=!1,Es=null}else throw Error(t(198));Sn||(Sn=!0,zo=U)}}function An(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ni(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function kn(n){if(An(n)!==n)throw Error(t(188))}function nl(n){var r=n.alternate;if(!r){if(r=An(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return kn(d),n;if(p===c)return kn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Bo(n){return n=nl(n),n!==null?Is(n):null}function Is(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Is(n);if(r!==null)return r;n=n.sibling}return null}var Ss=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,rl=e.unstable_shouldYield,wc=e.unstable_requestPaint,$e=e.unstable_now,il=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,Mr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,sl=e.unstable_IdlePriority,Di=null,en=null;function ol(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:ll,Wo=Math.log,al=Math.LN2;function ll(n){return n>>>=0,n===0?32:31-(Wo(n)/al|0)|0}var As=64,ks=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Fr(I):(p&=v,p!==0&&(c=Fr(p)))}else v=a&~d,v!==0?c=Fr(v):p!==0&&(c=Fr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-zt(r),d=1<<a,c|=n[a],r&=~d;return c}function Ec(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-zt(p),I=1<<v,C=d[v];C===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Ec(I,r)):C<=r&&(n.expiredLanes|=I),p&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oi(){var n=As;return As<<=1,(As&4194240)===0&&(As=64),n}function Ur(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function jr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-zt(r),n[r]=a}function Be(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function zr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var be=0;function Br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ul,Cs,cl,hl,dl,qo=!1,Bn=[],kt=null,Cn=null,Rn=null,$r=new Map,hn=new Map,$n=[],Tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(n,r){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=aa(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ic(n,r,a,c,d){switch(r){case"focusin":return kt=Wt(kt,n,r,a,c,d),!0;case"dragenter":return Cn=Wt(Cn,n,r,a,c,d),!0;case"mouseover":return Rn=Wt(Rn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return $r.set(p,Wt($r.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Wt(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function pl(n){var r=ji(n.target);if(r!==null){var a=An(r);if(a!==null){if(r=a.tag,r===13){if(r=Ni(a),r!==null){n.blockedOn=r,dl(n.priority,function(){cl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return r=aa(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function Li(n,r,a){fr(n)&&a.delete(r)}function ml(){qo=!1,kt!==null&&fr(kt)&&(kt=null),Cn!==null&&fr(Cn)&&(Cn=null),Rn!==null&&fr(Rn)&&(Rn=null),$r.forEach(Li),hn.forEach(Li)}function Pn(n,r){n.blockedOn===r&&(n.blockedOn=null,qo||(qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ml)))}function xn(n){function r(d){return Pn(d,n)}if(0<Bn.length){Pn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kt!==null&&Pn(kt,n),Cn!==null&&Pn(Cn,n),Rn!==null&&Pn(Rn,n),$r.forEach(r),hn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)pl(a),a.blockedOn===null&&$n.shift()}var pr=Ie.ReactCurrentBatchConfig,Hr=!0;function Qe(n,r,a,c){var d=be,p=pr.transition;pr.transition=null;try{be=1,Go(n,r,a,c)}finally{be=d,pr.transition=p}}function Sc(n,r,a,c){var d=be,p=pr.transition;pr.transition=null;try{be=4,Go(n,r,a,c)}finally{be=d,pr.transition=p}}function Go(n,r,a,c){if(Hr){var d=Rs(n,r,a,c);if(d===null)Oc(n,r,c,Mi,a),fl(n,c);else if(Ic(d,n,r,a,c))c.stopPropagation();else if(fl(n,c),r&4&&-1<Tc.indexOf(n)){for(;d!==null;){var p=aa(d);if(p!==null&&ul(p),p=Rs(n,r,a,c),p===null&&Oc(n,r,c,Mi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Oc(n,r,c,null,a)}}var Mi=null;function Rs(n,r,a,c){if(Mi=null,n=ys(c),n=ji(n),n!==null)if(r=An(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ni(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Mi=n,null}function Ko(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(il()){case bi:return 1;case Mr:return 4;case cn:case Ho:return 16;case sl:return 536870912;default:return 16}default:return 16}}var nn=null,Ps=null,qt=null;function Qo(){if(qt)return qt;var n,r=Ps,a=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function xs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function Xo(){return!1}function Ct(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Hn:Xo,this.isPropagationStopped=Xo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),r}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Ct(Nn),Wn=te({},Nn,{view:0,detail:0}),Ac=Ct(Wn),bs,mr,Wr,Fi=te({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(bs=n.screenX-Wr.screenX,mr=n.screenY-Wr.screenY):mr=bs=0,Wr=n),bs)},movementY:function(n){return"movementY"in n?n.movementY:mr}}),Ds=Ct(Fi),Yo=te({},Fi,{dataTransfer:0}),gl=Ct(Yo),Vs=te({},Wn,{relatedTarget:0}),Os=Ct(Vs),yl=te({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),gr=Ct(yl),vl=te({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_l=Ct(vl),wl=te({},Nn,{data:0}),Jo=Ct(wl),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},El={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=El[n])?!!r[n]:!1}function qn(){return Tl}var l=te({},Wn,{key:function(n){if(n.key){var r=Ls[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=xs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?xs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(l),g=te({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(g),O=te({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),j=Ct(O),ee=te({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Ct(ee),ft=te({},Fi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Ct(ft),Et=[9,13,27,32],st=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var rn=m&&"TextEvent"in window&&!dn,Ui=m&&(!st||dn&&8<dn&&11>=dn),Ms=" ",If=!1;function Sf(n,r){switch(n){case"keyup":return Et.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function j_(n,r){switch(n){case"compositionend":return Af(r);case"keypress":return r.which!==32?null:(If=!0,Ms);case"textInput":return n=r.data,n===Ms&&If?null:n;default:return null}}function z_(n,r){if(Fs)return n==="compositionend"||!st&&Sf(n,r)?(n=Qo(),qt=Ps=nn=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ui&&r.locale!=="ko"?null:r.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!B_[n.type]:r==="textarea"}function Cf(n,r,a,c){zn(c),r=Cl(r,"onChange"),0<r.length&&(a=new Ns("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Zo=null,ea=null;function $_(n){Wf(n,0)}function Il(n){var r=$s(n);if(ds(r))return n}function H_(n,r){if(n==="change")return r}var Rf=!1;if(m){var kc;if(m){var Cc="oninput"in document;if(!Cc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),Cc=typeof Pf.oninput=="function"}kc=Cc}else kc=!1;Rf=kc&&(!document.documentMode||9<document.documentMode)}function xf(){Zo&&(Zo.detachEvent("onpropertychange",Nf),ea=Zo=null)}function Nf(n){if(n.propertyName==="value"&&Il(ea)){var r=[];Cf(r,ea,n,ys(n)),jo($_,r)}}function W_(n,r,a){n==="focusin"?(xf(),Zo=r,ea=a,Zo.attachEvent("onpropertychange",Nf)):n==="focusout"&&xf()}function q_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(ea)}function G_(n,r){if(n==="click")return Il(r)}function K_(n,r){if(n==="input"||n==="change")return Il(r)}function Q_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var bn=typeof Object.is=="function"?Object.is:Q_;function ta(n,r){if(bn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!bn(n[d],r[d]))return!1}return!0}function bf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,r){var a=bf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bf(a)}}function Vf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Of(){for(var n=window,r=Or();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Or(n.document)}return r}function Rc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function X_(n){var r=Of(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Vf(a.ownerDocument.documentElement,a)){if(c!==null&&Rc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Df(a,p);var v=Df(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y_=m&&"documentMode"in document&&11>=document.documentMode,Us=null,Pc=null,na=null,xc=!1;function Lf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||Us==null||Us!==Or(c)||(c=Us,"selectionStart"in c&&Rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=Cl(Pc,"onSelect"),0<c.length&&(r=new Ns("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Us)))}function Sl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var js={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Nc={},Mf={};m&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Al(n){if(Nc[n])return Nc[n];if(!js[n])return n;var r=js[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Mf)return Nc[n]=r[a];return n}var Ff=Al("animationend"),Uf=Al("animationiteration"),jf=Al("animationstart"),zf=Al("transitionend"),Bf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,r){Bf.set(n,r),u(r,[n])}for(var bc=0;bc<$f.length;bc++){var Dc=$f[bc],J_=Dc.toLowerCase(),Z_=Dc[0].toUpperCase()+Dc.slice(1);qr(J_,"on"+Z_)}qr(Ff,"onAnimationEnd"),qr(Uf,"onAnimationIteration"),qr(jf,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(zf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Hf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,tl(c,r,void 0,n),n.currentTarget=null}function Wf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],C=I.instance,U=I.currentTarget;if(I=I.listener,C!==p&&d.isPropagationStopped())break e;Hf(d,I,U),p=C}else for(v=0;v<c.length;v++){if(I=c[v],C=I.instance,U=I.currentTarget,I=I.listener,C!==p&&d.isPropagationStopped())break e;Hf(d,I,U),p=C}}}if(Sn)throw n=zo,Sn=!1,zo=null,n}function We(n,r){var a=r[zc];a===void 0&&(a=r[zc]=new Set);var c=n+"__bubble";a.has(c)||(qf(r,n,2,!1),a.add(c))}function Vc(n,r,a){var c=0;r&&(c|=4),qf(a,n,c,r)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[kl]){n[kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(e0.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[kl]||(r[kl]=!0,Vc("selectionchange",!1,r))}}function qf(n,r,a,c){switch(Ko(r)){case 1:var d=Qe;break;case 4:d=Sc;break;default:d=Go}a=d.bind(null,r,a,n),d=void 0,!ws||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Oc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;I!==null;){if(v=ji(I),v===null)return;if(C=v.tag,C===5||C===6){c=p=v;continue e}I=I.parentNode}}c=c.return}jo(function(){var U=p,K=ys(a),X=[];e:{var q=Bf.get(n);if(q!==void 0){var ne=Ns,ae=n;switch(n){case"keypress":if(xs(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":ae="focus",ne=Os;break;case"focusout":ae="blur",ne=Os;break;case"beforeblur":case"afterblur":ne=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=j;break;case Ff:case Uf:case jf:ne=gr;break;case zf:ne=ze;break;case"scroll":ne=Ac;break;case"wheel":ne=De;break;case"copy":case"cut":case"paste":ne=_l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=w}var le=(r&4)!==0,rt=!le&&n==="scroll",L=le?q!==null?q+"Capture":null:q;le=[];for(var x=U,F;x!==null;){F=x;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,L!==null&&(J=nt(x,L),J!=null&&le.push(sa(x,J,F)))),rt)break;x=x.return}0<le.length&&(q=new ne(q,ae,null,a,K),X.push({event:q,listeners:le}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",q&&a!==Ci&&(ae=a.relatedTarget||a.fromElement)&&(ji(ae)||ae[yr]))break e;if((ne||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=U,ae=ae?ji(ae):null,ae!==null&&(rt=An(ae),ae!==rt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=U),ne!==ae)){if(le=Ds,J="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(le=w,J="onPointerLeave",L="onPointerEnter",x="pointer"),rt=ne==null?q:$s(ne),F=ae==null?q:$s(ae),q=new le(J,x+"leave",ne,a,K),q.target=rt,q.relatedTarget=F,J=null,ji(K)===U&&(le=new le(L,x+"enter",ae,a,K),le.target=F,le.relatedTarget=rt,J=le),rt=J,ne&&ae)t:{for(le=ne,L=ae,x=0,F=le;F;F=zs(F))x++;for(F=0,J=L;J;J=zs(J))F++;for(;0<x-F;)le=zs(le),x--;for(;0<F-x;)L=zs(L),F--;for(;x--;){if(le===L||L!==null&&le===L.alternate)break t;le=zs(le),L=zs(L)}le=null}else le=null;ne!==null&&Gf(X,q,ne,le,!1),ae!==null&&rt!==null&&Gf(X,rt,ae,le,!0)}}e:{if(q=U?$s(U):window,ne=q.nodeName&&q.nodeName.toLowerCase(),ne==="select"||ne==="input"&&q.type==="file")var ue=H_;else if(kf(q))if(Rf)ue=K_;else{ue=q_;var ge=W_}else(ne=q.nodeName)&&ne.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ue=G_);if(ue&&(ue=ue(n,U))){Cf(X,ue,a,K);break e}ge&&ge(n,q,U),n==="focusout"&&(ge=q._wrapperState)&&ge.controlled&&q.type==="number"&&ps(q,"number",q.value)}switch(ge=U?$s(U):window,n){case"focusin":(kf(ge)||ge.contentEditable==="true")&&(Us=ge,Pc=U,na=null);break;case"focusout":na=Pc=Us=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Lf(X,a,K);break;case"selectionchange":if(Y_)break;case"keydown":case"keyup":Lf(X,a,K)}var ye;if(st)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Fs?Sf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Ui&&a.locale!=="ko"&&(Fs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Fs&&(ye=Qo()):(nn=K,Ps="value"in nn?nn.value:nn.textContent,Fs=!0)),ge=Cl(U,Ee),0<ge.length&&(Ee=new Jo(Ee,n,null,a,K),X.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=Af(a),ye!==null&&(Ee.data=ye)))),(ye=rn?j_(n,a):z_(n,a))&&(U=Cl(U,"onBeforeInput"),0<U.length&&(K=new Jo("onBeforeInput","beforeinput",null,a,K),X.push({event:K,listeners:U}),K.data=ye))}Wf(X,r)})}function sa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Cl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(sa(n,p,d)),p=nt(n,r),p!=null&&c.push(sa(n,p,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var I=a,C=I.alternate,U=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&U!==null&&(I=U,d?(C=nt(a,p),C!=null&&v.unshift(sa(a,C,I))):d||(C=nt(a,p),C!=null&&v.push(sa(a,C,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function Kf(n){return(typeof n=="string"?n:""+n).replace(t0,`
`).replace(n0,"")}function Rl(n,r,a){if(r=Kf(r),Kf(n)!==r&&a)throw Error(t(425))}function Pl(){}var Lc=null,Mc=null;function Fc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(n){return Qf.resolve(null).then(n).catch(s0)}:Uc;function s0(n){setTimeout(function(){throw n})}function jc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),xn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);xn(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Xf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Bs,oa="__reactProps$"+Bs,yr="__reactContainer$"+Bs,zc="__reactEvents$"+Bs,o0="__reactListeners$"+Bs,a0="__reactHandles$"+Bs;function ji(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[yr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Xf(n);n!==null;){if(a=n[Gn])return a;n=Xf(n)}return r}n=a,a=n.parentNode}return null}function aa(n){return n=n[Gn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[oa]||null}var Bc=[],Hs=-1;function Kr(n){return{current:n}}function qe(n){0>Hs||(n.current=Bc[Hs],Bc[Hs]=null,Hs--)}function He(n,r){Hs++,Bc[Hs]=n.current,n.current=r}var Qr={},Dt=Kr(Qr),Gt=Kr(!1),zi=Qr;function Ws(n,r){var a=n.type.contextTypes;if(!a)return Qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Nl(){qe(Gt),qe(Dt)}function Yf(n,r,a){if(Dt.current!==Qr)throw Error(t(168));He(Dt,r),He(Gt,a)}function Jf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Pe(n)||"Unknown",d));return te({},a,c)}function bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,zi=Dt.current,He(Dt,n),He(Gt,Gt.current),!0}function Zf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Jf(n,r,zi),c.__reactInternalMemoizedMergedChildContext=n,qe(Gt),qe(Dt),He(Dt,n)):qe(Gt),He(Gt,a)}var vr=null,Dl=!1,$c=!1;function ep(n){vr===null?vr=[n]:vr.push(n)}function l0(n){Dl=!0,ep(n)}function Xr(){if(!$c&&vr!==null){$c=!0;var n=0,r=be;try{var a=vr;for(be=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,Dl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Ss(bi,Xr),d}finally{be=r,$c=!1}}return null}var qs=[],Gs=0,Vl=null,Ol=0,fn=[],pn=0,Bi=null,_r=1,wr="";function $i(n,r){qs[Gs++]=Ol,qs[Gs++]=Vl,Vl=n,Ol=r}function tp(n,r,a){fn[pn++]=_r,fn[pn++]=wr,fn[pn++]=Bi,Bi=n;var c=_r;n=wr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var p=32-zt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,_r=1<<32-zt(r)+d|a<<d|c,wr=p+n}else _r=1<<p|a<<d|c,wr=n}function Hc(n){n.return!==null&&($i(n,1),tp(n,1,0))}function Wc(n){for(;n===Vl;)Vl=qs[--Gs],qs[Gs]=null,Ol=qs[--Gs],qs[Gs]=null;for(;n===Bi;)Bi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,_r=fn[--pn],fn[pn]=null}var sn=null,on=null,Xe=!1,Dn=null;function np(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function rp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Bi!==null?{id:_r,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(Xe){var r=on;if(r){var a=r;if(!rp(n,r)){if(qc(n))throw Error(t(418));r=Gr(a.nextSibling);var c=sn;r&&rp(n,r)?np(c,a):(n.flags=n.flags&-4097|2,Xe=!1,sn=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,sn=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ll(n){if(n!==sn)return!1;if(!Xe)return ip(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Fc(n.type,n.memoizedProps)),r&&(r=on)){if(qc(n))throw sp(),Error(t(418));for(;r;)np(n,r),r=Gr(r.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Gr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Gr(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=on;n;)n=Gr(n.nextSibling)}function Ks(){on=sn=null,Xe=!1}function Kc(n){Dn===null?Dn=[n]:Dn.push(n)}var u0=Ie.ReactCurrentBatchConfig;function la(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function op(n){var r=n._init;return r(n._payload)}function ap(n){function r(L,x){if(n){var F=L.deletions;F===null?(L.deletions=[x],L.flags|=16):F.push(x)}}function a(L,x){if(!n)return null;for(;x!==null;)r(L,x),x=x.sibling;return null}function c(L,x){for(L=new Map;x!==null;)x.key!==null?L.set(x.key,x):L.set(x.index,x),x=x.sibling;return L}function d(L,x){return L=ii(L,x),L.index=0,L.sibling=null,L}function p(L,x,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<x?(L.flags|=2,x):F):(L.flags|=2,x)):(L.flags|=1048576,x)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,x,F,J){return x===null||x.tag!==6?(x=Uh(F,L.mode,J),x.return=L,x):(x=d(x,F),x.return=L,x)}function C(L,x,F,J){var ue=F.type;return ue===N?K(L,x,F.props.children,J,F.key):x!==null&&(x.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ct&&op(ue)===x.type)?(J=d(x,F.props),J.ref=la(L,x,F),J.return=L,J):(J=au(F.type,F.key,F.props,null,L.mode,J),J.ref=la(L,x,F),J.return=L,J)}function U(L,x,F,J){return x===null||x.tag!==4||x.stateNode.containerInfo!==F.containerInfo||x.stateNode.implementation!==F.implementation?(x=jh(F,L.mode,J),x.return=L,x):(x=d(x,F.children||[]),x.return=L,x)}function K(L,x,F,J,ue){return x===null||x.tag!==7?(x=Yi(F,L.mode,J,ue),x.return=L,x):(x=d(x,F),x.return=L,x)}function X(L,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Uh(""+x,L.mode,F),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case je:return F=au(x.type,x.key,x.props,null,L.mode,F),F.ref=la(L,null,x),F.return=L,F;case ke:return x=jh(x,L.mode,F),x.return=L,x;case ct:var J=x._init;return X(L,J(x._payload),F)}if(lr(x)||he(x))return x=Yi(x,L.mode,F,null),x.return=L,x;Ml(L,x)}return null}function q(L,x,F,J){var ue=x!==null?x.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:I(L,x,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case je:return F.key===ue?C(L,x,F,J):null;case ke:return F.key===ue?U(L,x,F,J):null;case ct:return ue=F._init,q(L,x,ue(F._payload),J)}if(lr(F)||he(F))return ue!==null?null:K(L,x,F,J,null);Ml(L,F)}return null}function ne(L,x,F,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(F)||null,I(x,L,""+J,ue);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case je:return L=L.get(J.key===null?F:J.key)||null,C(x,L,J,ue);case ke:return L=L.get(J.key===null?F:J.key)||null,U(x,L,J,ue);case ct:var ge=J._init;return ne(L,x,F,ge(J._payload),ue)}if(lr(J)||he(J))return L=L.get(F)||null,K(x,L,J,ue,null);Ml(x,J)}return null}function ae(L,x,F,J){for(var ue=null,ge=null,ye=x,Ee=x=0,St=null;ye!==null&&Ee<F.length;Ee++){ye.index>Ee?(St=ye,ye=null):St=ye.sibling;var Me=q(L,ye,F[Ee],J);if(Me===null){ye===null&&(ye=St);break}n&&ye&&Me.alternate===null&&r(L,ye),x=p(Me,x,Ee),ge===null?ue=Me:ge.sibling=Me,ge=Me,ye=St}if(Ee===F.length)return a(L,ye),Xe&&$i(L,Ee),ue;if(ye===null){for(;Ee<F.length;Ee++)ye=X(L,F[Ee],J),ye!==null&&(x=p(ye,x,Ee),ge===null?ue=ye:ge.sibling=ye,ge=ye);return Xe&&$i(L,Ee),ue}for(ye=c(L,ye);Ee<F.length;Ee++)St=ne(ye,L,Ee,F[Ee],J),St!==null&&(n&&St.alternate!==null&&ye.delete(St.key===null?Ee:St.key),x=p(St,x,Ee),ge===null?ue=St:ge.sibling=St,ge=St);return n&&ye.forEach(function(si){return r(L,si)}),Xe&&$i(L,Ee),ue}function le(L,x,F,J){var ue=he(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var ge=ue=null,ye=x,Ee=x=0,St=null,Me=F.next();ye!==null&&!Me.done;Ee++,Me=F.next()){ye.index>Ee?(St=ye,ye=null):St=ye.sibling;var si=q(L,ye,Me.value,J);if(si===null){ye===null&&(ye=St);break}n&&ye&&si.alternate===null&&r(L,ye),x=p(si,x,Ee),ge===null?ue=si:ge.sibling=si,ge=si,ye=St}if(Me.done)return a(L,ye),Xe&&$i(L,Ee),ue;if(ye===null){for(;!Me.done;Ee++,Me=F.next())Me=X(L,Me.value,J),Me!==null&&(x=p(Me,x,Ee),ge===null?ue=Me:ge.sibling=Me,ge=Me);return Xe&&$i(L,Ee),ue}for(ye=c(L,ye);!Me.done;Ee++,Me=F.next())Me=ne(ye,L,Ee,Me.value,J),Me!==null&&(n&&Me.alternate!==null&&ye.delete(Me.key===null?Ee:Me.key),x=p(Me,x,Ee),ge===null?ue=Me:ge.sibling=Me,ge=Me);return n&&ye.forEach(function(B0){return r(L,B0)}),Xe&&$i(L,Ee),ue}function rt(L,x,F,J){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case je:e:{for(var ue=F.key,ge=x;ge!==null;){if(ge.key===ue){if(ue=F.type,ue===N){if(ge.tag===7){a(L,ge.sibling),x=d(ge,F.props.children),x.return=L,L=x;break e}}else if(ge.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ct&&op(ue)===ge.type){a(L,ge.sibling),x=d(ge,F.props),x.ref=la(L,ge,F),x.return=L,L=x;break e}a(L,ge);break}else r(L,ge);ge=ge.sibling}F.type===N?(x=Yi(F.props.children,L.mode,J,F.key),x.return=L,L=x):(J=au(F.type,F.key,F.props,null,L.mode,J),J.ref=la(L,x,F),J.return=L,L=J)}return v(L);case ke:e:{for(ge=F.key;x!==null;){if(x.key===ge)if(x.tag===4&&x.stateNode.containerInfo===F.containerInfo&&x.stateNode.implementation===F.implementation){a(L,x.sibling),x=d(x,F.children||[]),x.return=L,L=x;break e}else{a(L,x);break}else r(L,x);x=x.sibling}x=jh(F,L.mode,J),x.return=L,L=x}return v(L);case ct:return ge=F._init,rt(L,x,ge(F._payload),J)}if(lr(F))return ae(L,x,F,J);if(he(F))return le(L,x,F,J);Ml(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,x!==null&&x.tag===6?(a(L,x.sibling),x=d(x,F),x.return=L,L=x):(a(L,x),x=Uh(F,L.mode,J),x.return=L,L=x),v(L)):a(L,x)}return rt}var Qs=ap(!0),lp=ap(!1),Fl=Kr(null),Ul=null,Xs=null,Qc=null;function Xc(){Qc=Xs=Ul=null}function Yc(n){var r=Fl.current;qe(Fl),n._currentValue=r}function Jc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ys(n,r){Ul=n,Qc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Qt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if(Ul===null)throw Error(t(308));Xs=n,Ul.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Hi=null;function Zc(n){Hi===null?Hi=[n]:Hi.push(n)}function up(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Zc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Er(n,c)}function Er(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Yr=!1;function eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Jr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Er(n,a)}return d=c.interleaved,d===null?(r.next=r,Zc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Er(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}function hp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;Yr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,U=C.next;C.next=null,v===null?p=U:v.next=U,v=C;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=U:I.next=U,K.lastBaseUpdate=C))}if(p!==null){var X=d.baseState;v=0,K=U=C=null,I=p;do{var q=I.lane,ne=I.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=n,le=I;switch(q=r,ne=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){X=ae.call(ne,X,q);break e}X=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,q=typeof ae=="function"?ae.call(ne,X,q):ae,q==null)break e;X=te({},X,q);break e;case 2:Yr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[I]:q.push(I))}else ne={eventTime:ne,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(U=K=ne,C=X):K=K.next=ne,v|=q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;q=I,I=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(C=X),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Gi|=v,n.lanes=v,n.memoizedState=X}}function dp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Kn=Kr(ua),ca=Kr(ua),ha=Kr(ua);function Wi(n){if(n===ua)throw Error(t(174));return n}function th(n,r){switch(He(ha,r),He(ca,n),He(Kn,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=dt(r,n)}qe(Kn),He(Kn,r)}function Js(){qe(Kn),qe(ca),qe(ha)}function fp(n){Wi(ha.current);var r=Wi(Kn.current),a=dt(r,n.type);r!==a&&(He(ca,n),He(Kn,a))}function nh(n){ca.current===n&&(qe(Kn),qe(ca))}var Je=Kr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var rh=[];function ih(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var $l=Ie.ReactCurrentDispatcher,sh=Ie.ReactCurrentBatchConfig,qi=0,Ze=null,pt=null,Tt=null,Hl=!1,da=!1,fa=0,c0=0;function Vt(){throw Error(t(321))}function oh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!bn(n[a],r[a]))return!1;return!0}function ah(n,r,a,c,d,p){if(qi=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?p0:m0,n=a(c,d),da){p=0;do{if(da=!1,fa=0,25<=p)throw Error(t(301));p+=1,Tt=pt=null,r.updateQueue=null,$l.current=g0,n=a(c,d)}while(da)}if($l.current=Gl,r=pt!==null&&pt.next!==null,qi=0,Tt=pt=Ze=null,Hl=!1,r)throw Error(t(300));return n}function lh(){var n=fa!==0;return fa=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function gn(){if(pt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=Tt===null?Ze.memoizedState:Tt.next;if(r!==null)Tt=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Tt===null?Ze.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function pa(n,r){return typeof r=="function"?r(n):r}function uh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,C=null,U=p;do{var K=U.lane;if((qi&K)===K)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(I=C=X,v=c):C=C.next=X,Ze.lanes|=K,Gi|=K}U=U.next}while(U!==null&&U!==p);C===null?v=c:C.next=I,bn(c,r.memoizedState)||(Qt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,Gi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ch(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);bn(p,r.memoizedState)||(Qt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function pp(){}function mp(n,r){var a=Ze,c=gn(),d=r(),p=!bn(c.memoizedState,d);if(p&&(c.memoizedState=d,Qt=!0),c=c.queue,hh(vp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ma(9,yp.bind(null,a,c,d,r),void 0,null),It===null)throw Error(t(349));(qi&30)!==0||gp(a,r,d)}return d}function gp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function yp(n,r,a,c){r.value=a,r.getSnapshot=c,_p(r)&&wp(n)}function vp(n,r,a){return a(function(){_p(r)&&wp(n)})}function _p(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!bn(n,a)}catch{return!0}}function wp(n){var r=Er(n,1);r!==null&&Mn(r,n,1,-1)}function Ep(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=f0.bind(null,Ze,n),[r.memoizedState,n]}function ma(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Tp(){return gn().memoizedState}function Wl(n,r,a,c){var d=Qn();Ze.flags|=n,d.memoizedState=ma(1|r,a,void 0,c===void 0?null:c)}function ql(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(pt!==null){var v=pt.memoizedState;if(p=v.destroy,c!==null&&oh(c,v.deps)){d.memoizedState=ma(r,a,p,c);return}}Ze.flags|=n,d.memoizedState=ma(1|r,a,p,c)}function Ip(n,r){return Wl(8390656,8,n,r)}function hh(n,r){return ql(2048,8,n,r)}function Sp(n,r){return ql(4,2,n,r)}function Ap(n,r){return ql(4,4,n,r)}function kp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Cp(n,r,a){return a=a!=null?a.concat([n]):null,ql(4,4,kp.bind(null,r,n),a)}function dh(){}function Rp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&oh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Pp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&oh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function xp(n,r,a){return(qi&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(bn(a,r)||(a=Oi(),Ze.lanes|=a,Gi|=a,n.baseState=!0),r)}function h0(n,r){var a=be;be=a!==0&&4>a?a:4,n(!0);var c=sh.transition;sh.transition={};try{n(!1),r()}finally{be=a,sh.transition=c}}function Np(){return gn().memoizedState}function d0(n,r,a){var c=ni(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bp(n))Dp(r,a);else if(a=up(n,r,a,c),a!==null){var d=Ht();Mn(a,n,c,d),Vp(a,r,c)}}function f0(n,r,a){var c=ni(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(n))Dp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,bn(I,v)){var C=r.interleaved;C===null?(d.next=d,Zc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=up(n,r,d,c),a!==null&&(d=Ht(),Mn(a,n,c,d),Vp(a,r,c))}}function bp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Dp(n,r){da=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Vp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}var Gl={readContext:mn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},p0={readContext:mn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Ip,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,kp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Wl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=d0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Ep,useDebugValue:dh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Ep(!1),r=n[0];return n=h0.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Qn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),It===null)throw Error(t(349));(qi&30)!==0||gp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Ip(vp.bind(null,c,p,n),[n]),c.flags|=2048,ma(9,yp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Qn(),r=It.identifierPrefix;if(Xe){var a=wr,c=_r;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=c0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},m0={readContext:mn,useCallback:Rp,useContext:mn,useEffect:hh,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:Ap,useMemo:Pp,useReducer:uh,useRef:Tp,useState:function(){return uh(pa)},useDebugValue:dh,useDeferredValue:function(n){var r=gn();return xp(r,pt.memoizedState,n)},useTransition:function(){var n=uh(pa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Np,unstable_isNewReconciler:!1},g0={readContext:mn,useCallback:Rp,useContext:mn,useEffect:hh,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:Ap,useMemo:Pp,useReducer:ch,useRef:Tp,useState:function(){return ch(pa)},useDebugValue:dh,useDeferredValue:function(n){var r=gn();return pt===null?r.memoizedState=n:xp(r,pt.memoizedState,n)},useTransition:function(){var n=ch(pa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:pp,useSyncExternalStore:mp,useId:Np,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function fh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Tr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Mn(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Tr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Mn(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=ni(n),d=Tr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Jr(n,d,c),r!==null&&(Mn(r,n,c,a),jl(r,n,c))}};function Op(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ta(a,c)||!ta(d,p):!0}function Lp(n,r,a){var c=!1,d=Qr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Kt(r)?zi:Dt.current,c=r.contextTypes,p=(c=c!=null)?Ws(n,d):Qr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Mp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function ph(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},eh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Kt(r)?zi:Dt.current,d.context=Ws(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(fh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Kl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var a="",c=r;do a+=oe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function mh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function gh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,r,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){tu||(tu=!0,Nh=c),gh(n,r)},a}function Up(n,r,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){gh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){gh(n,r),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function jp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new y0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=N0.bind(null,n,r,a),r.then(n,n))}function zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Bp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Tr(-1,1),r.tag=2,Jr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var v0=Ie.ReactCurrentOwner,Qt=!1;function $t(n,r,a,c){r.child=n===null?lp(r,null,a,c):Qs(r,n.child,a,c)}function $p(n,r,a,c,d){a=a.render;var p=r.ref;return Ys(r,d),c=ah(n,r,a,c,p,d),a=lh(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ir(n,r,d)):(Xe&&a&&Hc(r),r.flags|=1,$t(n,r,c,d),r.child)}function Hp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Fh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Wp(n,r,p,c,d)):(n=au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(v,c)&&n.ref===r.ref)return Ir(n,r,d)}return r.flags|=1,n=ii(p,c),n.ref=r.ref,n.return=r,r.child=n}function Wp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ta(p,c)&&n.ref===r.ref)if(Qt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return r.lanes=n.lanes,Ir(n,r,d)}return yh(n,r,a,c,d)}function qp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(to,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(to,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(to,an),an|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(to,an),an|=c;return $t(n,r,d,a),r.child}function Gp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function yh(n,r,a,c,d){var p=Kt(a)?zi:Dt.current;return p=Ws(r,p),Ys(r,d),a=ah(n,r,a,c,p,d),c=lh(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ir(n,r,d)):(Xe&&c&&Hc(r),r.flags|=1,$t(n,r,a,d),r.child)}function Kp(n,r,a,c,d){if(Kt(a)){var p=!0;bl(r)}else p=!1;if(Ys(r,d),r.stateNode===null)Xl(n,r),Lp(r,a,c),ph(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var C=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=mn(U):(U=Kt(a)?zi:Dt.current,U=Ws(r,U));var K=a.getDerivedStateFromProps,X=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||C!==U)&&Mp(r,v,c,U),Yr=!1;var q=r.memoizedState;v.state=q,zl(r,c,v,d),C=r.memoizedState,I!==c||q!==C||Gt.current||Yr?(typeof K=="function"&&(fh(r,a,K,c),C=r.memoizedState),(I=Yr||Op(r,a,I,c,q,C,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=U,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,cp(n,r),I=r.memoizedProps,U=r.type===r.elementType?I:Vn(r.type,I),v.props=U,X=r.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=mn(C):(C=Kt(a)?zi:Dt.current,C=Ws(r,C));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==X||q!==C)&&Mp(r,v,c,C),Yr=!1,q=r.memoizedState,v.state=q,zl(r,c,v,d);var ae=r.memoizedState;I!==X||q!==ae||Gt.current||Yr?(typeof ne=="function"&&(fh(r,a,ne,c),ae=r.memoizedState),(U=Yr||Op(r,a,U,c,q,ae,C)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ae),v.props=c,v.state=ae,v.context=C,c=U):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return vh(n,r,a,c,p,d)}function vh(n,r,a,c,d,p){Gp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Zf(r,a,!1),Ir(n,r,p);c=r.stateNode,v0.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Qs(r,n.child,null,p),r.child=Qs(r,null,I,p)):$t(n,r,I,p),r.memoizedState=c.state,d&&Zf(r,a,!0),r.child}function Qp(n){var r=n.stateNode;r.pendingContext?Yf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Yf(n,r.context,!1),th(n,r.containerInfo)}function Xp(n,r,a,c,d){return Ks(),Kc(d),r.flags|=256,$t(n,r,a,c),r.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function wh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return Gc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=lu(v,c,0,null),n=Yi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=wh(a),r.memoizedState=_h,n):Eh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return _0(n,r,v,c,I,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ii(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ii(I,p):(p=Yi(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?wh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=_h,c}return p=n.child,n=p.sibling,c=ii(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Eh(n,r){return r=lu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ql(n,r,a,c){return c!==null&&Kc(c),Qs(r,n.child,null,a),n=Eh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _0(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=mh(Error(t(422))),Ql(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=lu({mode:"visible",children:c.children},d,0,null),p=Yi(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Qs(r,n.child,null,v),r.child.memoizedState=wh(v),r.memoizedState=_h,p);if((r.mode&1)===0)return Ql(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=mh(p,c,void 0),Ql(n,r,v,c)}if(I=(v&n.childLanes)!==0,Qt||I){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Er(n,d),Mn(c,n,d,-1))}return Mh(),c=mh(Error(t(421))),Ql(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=b0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=Gr(d.nextSibling),sn=r,Xe=!0,Dn=null,n!==null&&(fn[pn++]=_r,fn[pn++]=wr,fn[pn++]=Bi,_r=n.id,wr=n.overflow,Bi=r),r=Eh(r,c.children),r.flags|=4096,r)}function Jp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Jc(n.return,r,a)}function Th(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Zp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jp(n,a,r);else if(n.tag===19)Jp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Th(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Th(r,!0,a,null,p);break;case"together":Th(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ir(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ii(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ii(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function w0(n,r,a){switch(r.tag){case 3:Qp(r),Ks();break;case 5:fp(r);break;case 1:Kt(r.type)&&bl(r);break;case 4:th(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Fl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Yp(n,r,a):(He(Je,Je.current&1),n=Ir(n,r,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Zp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,qp(n,r,a)}return Ir(n,r,a)}var em,Ih,tm,nm;em=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ih=function(){},tm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Kn.current);var p=null;switch(a){case"input":d=Si(n,d),c=Si(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=xo(n,d),c=xo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pl)}Lo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var C=c[U];if(I=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&C!==I&&(C!=null||I!=null))if(U==="style")if(I){for(v in I)!I.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&I[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(p||(p=[]),p.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(p=p||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&We("scroll",n),p||I===C||(p=[])):(p=p||[]).push(U,C))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},nm=function(n,r,a,c){a!==c&&(r.flags|=4)};function ga(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function E0(n,r,a){var c=r.pendingProps;switch(Wc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Kt(r.type)&&Nl(),Ot(r),null;case 3:return c=r.stateNode,Js(),qe(Gt),qe(Dt),ih(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Vh(Dn),Dn=null))),Ih(n,r),Ot(r),null;case 5:nh(r);var d=Wi(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)tm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Wi(Kn.current),Ll(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Gn]=r,c[oa]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)We(ra[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":fs(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":ms(c,p),We("invalid",c)}Lo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":ar(c),el(c,p,!0);break;case"textarea":ar(c),No(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Pl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=r,n[oa]=c,em(n,r,!1,!1),r.stateNode=n;e:{switch(v=Mo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)We(ra[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":fs(n,c),d=Si(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":ms(n,c),d=xo(n,c),We("invalid",n);break;default:d=c}Lo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var C=I[p];p==="style"?Vo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&bo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Lr(n,C):typeof C=="number"&&Lr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&We("scroll",n):C!=null&&me(n,p,C,v))}switch(a){case"input":ar(n),el(n,c,!1);break;case"textarea":ar(n),No(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ur(n,!!c.multiple,p,!1):c.defaultValue!=null&&ur(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)nm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(ha.current),Wi(Kn.current),Ll(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Rl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Ot(r),null;case 13:if(qe(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)sp(),Ks(),r.flags|=98560,p=!1;else if(p=Ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Dn!==null&&(Vh(Dn),Dn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?mt===0&&(mt=3):Mh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Js(),Ih(n,r),n===null&&ia(r.stateNode.containerInfo),Ot(r),null;case 10:return Yc(r.type._context),Ot(r),null;case 17:return Kt(r.type)&&Nl(),Ot(r),null;case 19:if(qe(Je),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)ga(p,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Bl(n),v!==null){for(r.flags|=128,ga(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>no&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return Ot(r),null}else 2*$e()-p.renderingStartTime>no&&a!==1073741824&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Lh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function T0(n,r){switch(Wc(r),r.tag){case 1:return Kt(r.type)&&Nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Js(),qe(Gt),qe(Dt),ih(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return nh(r),null;case 13:if(qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Je),null;case 4:return Js(),null;case 10:return Yc(r.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var Yl=!1,Lt=!1,I0=typeof WeakSet=="function"?WeakSet:Set,se=null;function eo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,r,c)}else a.current=null}function Sh(n,r,a){try{a()}catch(c){tt(n,r,c)}}var rm=!1;function S0(n,r){if(Lc=Hr,n=Of(),Rc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,C=-1,U=0,K=0,X=n,q=null;t:for(;;){for(var ne;X!==a||d!==0&&X.nodeType!==3||(I=v+d),X!==p||c!==0&&X.nodeType!==3||(C=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(ne=X.firstChild)!==null;)q=X,X=ne;for(;;){if(X===n)break t;if(q===a&&++U===d&&(I=v),q===p&&++K===c&&(C=v),(ne=X.nextSibling)!==null)break;X=q,q=X.parentNode}X=ne}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:n,selectionRange:a},Hr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var ae=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,rt=ae.memoizedState,L=r.stateNode,x=L.getSnapshotBeforeUpdate(r.elementType===r.type?le:Vn(r.type,le),rt);L.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){tt(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return ae=rm,rm=!1,ae}function ya(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Sh(r,a,p)}d=d.next}while(d!==c)}}function Jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ah(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function im(n){var r=n.alternate;r!==null&&(n.alternate=null,im(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[oa],delete r[zc],delete r[o0],delete r[a0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function om(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(n=n.child,n!==null))for(kh(n,r,a),n=n.sibling;n!==null;)kh(n,r,a),n=n.sibling}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}var Rt=null,On=!1;function Zr(n,r,a){for(a=a.child;a!==null;)am(n,r,a),a=a.sibling}function am(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:Lt||eo(a,r);case 6:var c=Rt,d=On;Rt=null,Zr(n,r,a),Rt=c,On=d,Rt!==null&&(On?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(On?(n=Rt,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),xn(n)):jc(Rt,a.stateNode));break;case 4:c=Rt,d=On,Rt=a.stateNode.containerInfo,On=!0,Zr(n,r,a),Rt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Sh(a,r,v),d=d.next}while(d!==c)}Zr(n,r,a);break;case 1:if(!Lt&&(eo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){tt(a,r,I)}Zr(n,r,a);break;case 21:Zr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Zr(n,r,a),Lt=c):Zr(n,r,a);break;default:Zr(n,r,a)}}function lm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new I0),r.forEach(function(c){var d=D0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,On=!1;break e;case 3:Rt=I.stateNode.containerInfo,On=!0;break e;case 4:Rt=I.stateNode.containerInfo,On=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));am(p,v,d),Rt=null,On=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){tt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)um(r,n),r=r.sibling}function um(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(r,n),Xn(n),c&4){try{ya(3,n,n.return),Jl(3,n)}catch(le){tt(n,n.return,le)}try{ya(5,n,n.return)}catch(le){tt(n,n.return,le)}}break;case 1:Ln(r,n),Xn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(Ln(r,n),Xn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(le){tt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ro(d,p),Mo(I,v);var U=Mo(I,p);for(v=0;v<C.length;v+=2){var K=C[v],X=C[v+1];K==="style"?Vo(d,X):K==="dangerouslySetInnerHTML"?bo(d,X):K==="children"?Lr(d,X):me(d,K,X,U)}switch(I){case"input":Po(d,p);break;case"textarea":gs(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?ur(d,!!p.multiple,ne,!1):q!==!!p.multiple&&(p.defaultValue!=null?ur(d,!!p.multiple,p.defaultValue,!0):ur(d,!!p.multiple,p.multiple?[]:"",!1))}d[oa]=p}catch(le){tt(n,n.return,le)}}break;case 6:if(Ln(r,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){tt(n,n.return,le)}}break;case 3:if(Ln(r,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(r.containerInfo)}catch(le){tt(n,n.return,le)}break;case 4:Ln(r,n),Xn(n);break;case 13:Ln(r,n),Xn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(xh=$e())),c&4&&lm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||K,Ln(r,n),Lt=U):Ln(r,n),Xn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(X=se=K;se!==null;){switch(q=se,ne=q.child,q.tag){case 0:case 11:case 14:case 15:ya(4,q,q.return);break;case 1:eo(q,q.return);var ae=q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ae.props=r.memoizedProps,ae.state=r.memoizedState,ae.componentWillUnmount()}catch(le){tt(c,a,le)}}break;case 5:eo(q,q.return);break;case 22:if(q.memoizedState!==null){dm(X);continue}}ne!==null?(ne.return=q,se=ne):dm(X)}K=K.sibling}e:for(K=null,X=n;;){if(X.tag===5){if(K===null){K=X;try{d=X.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=X.stateNode,C=X.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Do("display",v))}catch(le){tt(n,n.return,le)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(le){tt(n,n.return,le)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Ln(r,n),Xn(n),c&4&&lm(n);break;case 21:break;default:Ln(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(sm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var p=om(n);Ch(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=om(n);kh(n,I,v);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function A0(n,r,a){se=n,cm(n)}function cm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Yl;if(!v){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Lt;I=Yl;var U=Lt;if(Yl=v,(Lt=C)&&!U)for(se=d;se!==null;)v=se,C=v.child,v.tag===22&&v.memoizedState!==null?fm(d):C!==null?(C.return=v,se=C):fm(d);for(;p!==null;)se=p,cm(p),p=p.sibling;se=d,Yl=I,Lt=U}hm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):hm(n)}}function hm(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&dp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}dp(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&xn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Ah(r)}catch(q){tt(r,r.return,q)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function dm(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function fm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Jl(4,r)}catch(C){tt(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){tt(r,d,C)}}var p=r.return;try{Ah(r)}catch(C){tt(r,p,C)}break;case 5:var v=r.return;try{Ah(r)}catch(C){tt(r,v,C)}}}catch(C){tt(r,r.return,C)}if(r===n){se=null;break}var I=r.sibling;if(I!==null){I.return=r.return,se=I;break}se=r.return}}var k0=Math.ceil,Zl=Ie.ReactCurrentDispatcher,Rh=Ie.ReactCurrentOwner,yn=Ie.ReactCurrentBatchConfig,Oe=0,It=null,ot=null,Pt=0,an=0,to=Kr(0),mt=0,va=null,Gi=0,eu=0,Ph=0,_a=null,Xt=null,xh=0,no=1/0,Sr=null,tu=!1,Nh=null,ei=null,nu=!1,ti=null,ru=0,wa=0,bh=null,iu=-1,su=0;function Ht(){return(Oe&6)!==0?$e():iu!==-1?iu:iu=$e()}function ni(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Pt!==0?Pt&-Pt:u0.transition!==null?(su===0&&(su=Oi()),su):(n=be,n!==0||(n=window.event,n=n===void 0?16:Ko(n.type)),n)}function Mn(n,r,a,c){if(50<wa)throw wa=0,bh=null,Error(t(185));jr(n,a,c),((Oe&2)===0||n!==It)&&(n===It&&((Oe&2)===0&&(eu|=a),mt===4&&ri(n,Pt)),Yt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(no=$e()+500,Dl&&Xr()))}function Yt(n,r){var a=n.callbackNode;dr(n,r);var c=Vi(n,n===It?Pt:0);if(c===0)a!==null&&$o(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&$o(a),r===1)n.tag===0?l0(mm.bind(null,n)):ep(mm.bind(null,n)),i0(function(){(Oe&6)===0&&Xr()}),a=null;else{switch(Br(c)){case 1:a=bi;break;case 4:a=Mr;break;case 16:a=cn;break;case 536870912:a=sl;break;default:a=cn}a=Im(a,pm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function pm(n,r){if(iu=-1,su=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=Vi(n,n===It?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ou(n,c);else{r=c;var d=Oe;Oe|=2;var p=ym();(It!==n||Pt!==r)&&(Sr=null,no=$e()+500,Qi(n,r));do try{P0();break}catch(I){gm(n,I)}while(!0);Xc(),Zl.current=p,Oe=d,ot!==null?r=0:(It=null,Pt=0,r=mt)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=Dh(n,d))),r===1)throw a=va,Qi(n,0),ri(n,c),Yt(n,$e()),a;if(r===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!C0(d)&&(r=ou(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=Dh(n,p))),r===1))throw a=va,Qi(n,0),ri(n,c),Yt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Xi(n,Xt,Sr);break;case 3:if(ri(n,c),(c&130023424)===c&&(r=xh+500-$e(),10<r)){if(Vi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(Xi.bind(null,n,Xt,Sr),r);break}Xi(n,Xt,Sr);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-zt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*k0(c/1960))-c,10<c){n.timeoutHandle=Uc(Xi.bind(null,n,Xt,Sr),c);break}Xi(n,Xt,Sr);break;case 5:Xi(n,Xt,Sr);break;default:throw Error(t(329))}}}return Yt(n,$e()),n.callbackNode===a?pm.bind(null,n):null}function Dh(n,r){var a=_a;return n.current.memoizedState.isDehydrated&&(Qi(n,r).flags|=256),n=ou(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&Vh(r)),n}function Vh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function C0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!bn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ri(n,r){for(r&=~Ph,r&=~eu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-zt(r),c=1<<a;n[a]=-1,r&=~c}}function mm(n){if((Oe&6)!==0)throw Error(t(327));ro();var r=Vi(n,0);if((r&1)===0)return Yt(n,$e()),null;var a=ou(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=Dh(n,c))}if(a===1)throw a=va,Qi(n,0),ri(n,r),Yt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Xi(n,Xt,Sr),Yt(n,$e()),null}function Oh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(no=$e()+500,Dl&&Xr())}}function Ki(n){ti!==null&&ti.tag===0&&(Oe&6)===0&&ro();var r=Oe;Oe|=1;var a=yn.transition,c=be;try{if(yn.transition=null,be=1,n)return n()}finally{be=c,yn.transition=a,Oe=r,(Oe&6)===0&&Xr()}}function Lh(){an=to.current,qe(to)}function Qi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,r0(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Js(),qe(Gt),qe(Dt),ih();break;case 5:nh(c);break;case 4:Js();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:Yc(c.type._context);break;case 22:case 23:Lh()}a=a.return}if(It=n,ot=n=ii(n.current,null),Pt=an=r,mt=0,va=null,Ph=eu=Gi=0,Xt=_a=null,Hi!==null){for(r=0;r<Hi.length;r++)if(a=Hi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Hi=null}return n}function gm(n,r){do{var a=ot;try{if(Xc(),$l.current=Gl,Hl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(qi=0,Tt=pt=Ze=null,da=!1,fa=0,Rh.current=null,a===null||a.return===null){mt=1,va=r,ot=null;break}e:{var p=n,v=a.return,I=a,C=r;if(r=Pt,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,K=I,X=K.tag;if((K.mode&1)===0&&(X===0||X===11||X===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=zp(v);if(ne!==null){ne.flags&=-257,Bp(ne,v,I,p,r),ne.mode&1&&jp(p,U,r),r=ne,C=U;var ae=r.updateQueue;if(ae===null){var le=new Set;le.add(C),r.updateQueue=le}else ae.add(C);break e}else{if((r&1)===0){jp(p,U,r),Mh();break e}C=Error(t(426))}}else if(Xe&&I.mode&1){var rt=zp(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Bp(rt,v,I,p,r),Kc(Zs(C,I));break e}}p=C=Zs(C,I),mt!==4&&(mt=2),_a===null?_a=[p]:_a.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Fp(p,C,r);hp(p,L);break e;case 1:I=C;var x=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ei===null||!ei.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=Up(p,I,r);hp(p,J);break e}}p=p.return}while(p!==null)}_m(a)}catch(ue){r=ue,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function ym(){var n=Zl.current;return Zl.current=Gl,n===null?Gl:n}function Mh(){(mt===0||mt===3||mt===2)&&(mt=4),It===null||(Gi&268435455)===0&&(eu&268435455)===0||ri(It,Pt)}function ou(n,r){var a=Oe;Oe|=2;var c=ym();(It!==n||Pt!==r)&&(Sr=null,Qi(n,r));do try{R0();break}catch(d){gm(n,d)}while(!0);if(Xc(),Oe=a,Zl.current=c,ot!==null)throw Error(t(261));return It=null,Pt=0,mt}function R0(){for(;ot!==null;)vm(ot)}function P0(){for(;ot!==null&&!rl();)vm(ot)}function vm(n){var r=Tm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?_m(n):ot=r,Rh.current=null}function _m(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=E0(a,r,an),a!==null){ot=a;return}}else{if(a=T0(a,r),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ot=null;return}}if(r=r.sibling,r!==null){ot=r;return}ot=r=n}while(r!==null);mt===0&&(mt=5)}function Xi(n,r,a){var c=be,d=yn.transition;try{yn.transition=null,be=1,x0(n,r,a,c)}finally{yn.transition=d,be=c}return null}function x0(n,r,a,c){do ro();while(ti!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Be(n,p),n===It&&(ot=It=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nu||(nu=!0,Im(cn,function(){return ro(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var v=be;be=1;var I=Oe;Oe|=4,Rh.current=null,S0(n,a),um(a,n),X_(Mc),Hr=!!Lc,Mc=Lc=null,n.current=a,A0(a),wc(),Oe=I,be=v,yn.transition=p}else n.current=a;if(nu&&(nu=!1,ti=n,ru=d),p=n.pendingLanes,p===0&&(ei=null),ol(a.stateNode),Yt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Nh,Nh=null,n;return(ru&1)!==0&&n.tag!==0&&ro(),p=n.pendingLanes,(p&1)!==0?n===bh?wa++:(wa=0,bh=n):wa=0,Xr(),null}function ro(){if(ti!==null){var n=Br(ru),r=yn.transition,a=be;try{if(yn.transition=null,be=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,ru=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var I=p.deletions;if(I!==null){for(var C=0;C<I.length;C++){var U=I[C];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:ya(8,K,p)}var X=K.child;if(X!==null)X.return=K,se=X;else for(;se!==null;){K=se;var q=K.sibling,ne=K.return;if(im(K),K===U){se=null;break}if(q!==null){q.return=ne,se=q;break}se=ne}}}var ae=p.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var rt=le.sibling;le.sibling=null,le=rt}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ya(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,se=L;break e}se=p.return}}var x=n.current;for(se=x;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=x;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Jl(9,I)}}catch(ue){tt(I,I.return,ue)}if(I===v){se=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,se=J;break e}se=I.return}}if(Oe=d,Xr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{be=a,yn.transition=r}}return!1}function wm(n,r,a){r=Zs(a,r),r=Fp(n,r,1),n=Jr(n,r,1),r=Ht(),n!==null&&(jr(n,1,r),Yt(n,r))}function tt(n,r,a){if(n.tag===3)wm(n,n,a);else for(;r!==null;){if(r.tag===3){wm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=Zs(a,n),n=Up(r,n,1),r=Jr(r,n,1),n=Ht(),r!==null&&(jr(r,1,n),Yt(r,n));break}}r=r.return}}function N0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Pt&a)===a&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>$e()-xh?Qi(n,0):Ph|=a),Yt(n,r)}function Em(n,r){r===0&&((n.mode&1)===0?r=1:(r=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var a=Ht();n=Er(n,r),n!==null&&(jr(n,r,a),Yt(n,a))}function b0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Em(n,a)}function D0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Em(n,a)}var Tm;Tm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Gt.current)Qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Qt=!1,w0(n,r,a);Qt=(n.flags&131072)!==0}else Qt=!1,Xe&&(r.flags&1048576)!==0&&tp(r,Ol,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Xl(n,r),n=r.pendingProps;var d=Ws(r,Dt.current);Ys(r,a),d=ah(null,r,c,n,d,a);var p=lh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,bl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,eh(r),d.updater=Kl,r.stateNode=d,d._reactInternals=r,ph(r,c,n,a),r=vh(null,r,c,!0,p,a)):(r.tag=0,Xe&&p&&Hc(r),$t(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Xl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=O0(c),n=Vn(c,n),d){case 0:r=yh(null,r,c,n,a);break e;case 1:r=Kp(null,r,c,n,a);break e;case 11:r=$p(null,r,c,n,a);break e;case 14:r=Hp(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),yh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Kp(n,r,c,d,a);case 3:e:{if(Qp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,cp(n,r),zl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Zs(Error(t(423)),r),r=Xp(n,r,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),r),r=Xp(n,r,c,a,d);break e}else for(on=Gr(r.stateNode.containerInfo.firstChild),sn=r,Xe=!0,Dn=null,a=lp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ks(),c===d){r=Ir(n,r,a);break e}$t(n,r,c,a)}r=r.child}return r;case 5:return fp(r),n===null&&Gc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Fc(c,d)?v=null:p!==null&&Fc(c,p)&&(r.flags|=32),Gp(n,r),$t(n,r,v,a),r.child;case 6:return n===null&&Gc(r),null;case 13:return Yp(n,r,a);case 4:return th(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Qs(r,null,c,a):$t(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),$p(n,r,c,d,a);case 7:return $t(n,r,r.pendingProps,a),r.child;case 8:return $t(n,r,r.pendingProps.children,a),r.child;case 12:return $t(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,He(Fl,c._currentValue),c._currentValue=v,p!==null)if(bn(p.value,v)){if(p.children===d.children&&!Gt.current){r=Ir(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=Tr(-1,a&-a),C.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?C.next=C:(C.next=K.next,K.next=C),U.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),Jc(p.return,a,r),I.lanes|=a;break}C=C.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Jc(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}$t(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ys(r,a),d=mn(d),c=c(d),r.flags|=1,$t(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),Hp(n,r,c,d,a);case 15:return Wp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Xl(n,r),r.tag=1,Kt(c)?(n=!0,bl(r)):n=!1,Ys(r,a),Lp(r,c,d),ph(r,c,d,a),vh(null,r,c,!0,n,a);case 19:return Zp(n,r,a);case 22:return qp(n,r,a)}throw Error(t(156,r.tag))};function Im(n,r){return Ss(n,r)}function V0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new V0(n,r,a,c)}function Fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O0(n){if(typeof n=="function")return Fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===_t)return 14}return 2}function ii(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Fh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return Yi(a.children,d,p,r);case T:v=8,d|=8;break;case A:return n=vn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Ye:return n=vn(19,a,r,d),n.elementType=Ye,n.lanes=p,n;case Fe:return lu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case R:v=9;break e;case V:v=11;break e;case _t:v=14;break e;case ct:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Yi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function lu(n,r,a,c){return n=vn(22,n,c,r),n.elementType=Fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Uh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function jh(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function L0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zh(n,r,a,c,d,p,v,I,C){return n=new L0(n,r,a,I,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=vn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(p),n}function M0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Sm(n){if(!n)return Qr;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Jf(n,a,r)}return r}function Am(n,r,a,c,d,p,v,I,C){return n=zh(a,c,!0,n,d,p,v,I,C),n.context=Sm(null),a=n.current,c=Ht(),d=ni(a),p=Tr(c,d),p.callback=r??null,Jr(a,p,d),n.current.lanes=d,jr(n,d,c),Yt(n,c),n}function uu(n,r,a,c){var d=r.current,p=Ht(),v=ni(d);return a=Sm(a),r.context===null?r.context=a:r.pendingContext=a,r=Tr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Jr(d,r,v),n!==null&&(Mn(n,d,v,p),jl(n,d,v)),v}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Bh(n,r){km(n,r),(n=n.alternate)&&km(n,r)}function F0(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $h(n){this._internalRoot=n}hu.prototype.render=$h.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));uu(n,r,null,null)},hu.prototype.unmount=$h.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ki(function(){uu(null,n,null,null)}),r[yr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=hl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&pl(n)}};function Hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rm(){}function U0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=cu(v);p.call(U)}}var v=Am(r,c,n,0,null,!1,!1,"",Rm);return n._reactRootContainer=v,n[yr]=v.current,ia(n.nodeType===8?n.parentNode:n),Ki(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=cu(C);I.call(U)}}var C=zh(n,0,!1,null,null,!1,!1,"",Rm);return n._reactRootContainer=C,n[yr]=C.current,ia(n.nodeType===8?n.parentNode:n),Ki(function(){uu(r,C,a,c)}),C}function fu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var C=cu(v);I.call(C)}}uu(r,v,n,d)}else v=U0(a,r,n,d,c);return cu(v)}ul=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fr(r.pendingLanes);a!==0&&(zr(r,a|1),Yt(r,$e()),(Oe&6)===0&&(no=$e()+500,Xr()))}break;case 13:Ki(function(){var c=Er(n,1);if(c!==null){var d=Ht();Mn(c,n,1,d)}}),Bh(n,1)}},Cs=function(n){if(n.tag===13){var r=Er(n,134217728);if(r!==null){var a=Ht();Mn(r,n,134217728,a)}Bh(n,134217728)}},cl=function(n){if(n.tag===13){var r=ni(n),a=Er(n,r);if(a!==null){var c=Ht();Mn(a,n,r,c)}Bh(n,r)}},hl=function(){return be},dl=function(n,r){var a=be;try{return be=n,r()}finally{be=a}},vs=function(n,r,a){switch(r){case"input":if(Po(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));ds(c),Po(c,d)}}}break;case"textarea":gs(n,a);break;case"select":r=a.value,r!=null&&ur(n,!!a.multiple,r,!1)}},Ri=Oh,Uo=Ki;var j0={usingClientEntryPoint:!1,Events:[aa,$s,xl,zn,Fo,Oh]},Ea={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Di=pu.inject(z0),en=pu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0,Jt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(r))throw Error(t(200));return M0(n,r,null,a)},Jt.createRoot=function(n,r){if(!Hh(n))throw Error(t(299));var a=!1,c="",d=Cm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=zh(n,1,!1,null,null,a,!1,c,d),n[yr]=r.current,ia(n.nodeType===8?n.parentNode:n),new $h(r)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bo(r),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return Ki(n)},Jt.hydrate=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!0,a)},Jt.hydrateRoot=function(n,r,a){if(!Hh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Am(r,null,n,1,a??null,d,!1,p,v),n[yr]=r.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new hu(r)},Jt.render=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!1,a)},Jt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Ki(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Jt.unstable_batchedUpdates=Oh,Jt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,r,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var Lm;function Q0(){if(Lm)return Gh.exports;Lm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Gh.exports=K0(),Gh.exports}var Mm;function X0(){if(Mm)return mu;Mm=1;var i=Q0();return mu.createRoot=i.createRoot,mu.hydrateRoot=i.hydrateRoot,mu}var Y0=X0();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=lt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>lt.createElement("svg",{ref:y,...Z0,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:yy("lucide",o),...m},[...h.map(([_,E])=>lt.createElement(_,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=(i,e)=>{const t=lt.forwardRef(({className:s,...o},u)=>lt.createElement(ew,{ref:u,iconNode:e,className:yy(`lucide-${J0(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xh=Tn("CircleCheckBig",tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Yh=Tn("ClipboardList",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Fm=Tn("Info",rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],sw=Tn("List",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],Um=Tn("LogIn",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],lw=Tn("Plus",aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],jm=Tn("Search",uw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],hw=Tn("ShieldAlert",cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],fw=Tn("SquarePen",dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],mw=Tn("Trash2",pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yw=Tn("User",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zm=Tn("X",vw),_w=()=>{};var Bm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ww=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},_y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,E=u>>2,k=(u&3)<<4|m>>4;let b=(m&15)<<2|_>>6,B=_&63;y||(B=64,h||(b=64)),s.push(t[E],t[k],t[b],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(vy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):ww(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||k==null)throw new Ew;const b=u<<2|m>>4;if(s.push(b),_!==64){const B=m<<4&240|_>>2;if(s.push(B),k!==64){const Q=_<<6&192|k;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tw=function(i){const e=vy(i);return _y.encodeByteArray(e,!0)},Lu=function(i){return Tw(i).replace(/\./g,"")},wy=function(i){try{return _y.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=()=>Iw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof Bm>"u")return;const i=Bm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},kw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&wy(i[1]);return e&&JSON.parse(e)},nc=()=>{try{return _w()||Sw()||Aw()||kw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ey=i=>{var e,t;return(t=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Cw=i=>{const e=Ey(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ty=()=>{var i;return(i=nc())===null||i===void 0?void 0:i.config},Iy=i=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sy(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Lu(JSON.stringify(t)),Lu(JSON.stringify(h)),""].join(".")}const Ca={};function xw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ca))Ca[e]?i.emulator.push(e):i.prod.push(e);return i}function Nw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let $m=!1;function Ay(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Ca[i]===e||Ca[i]||$m)return;Ca[i]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",u=xw().prod.length>0;function h(){const b=document.getElementById(s);b&&b.remove()}function m(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function y(b,B){b.setAttribute("width","24"),b.setAttribute("id",B),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function _(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{$m=!0,h()},b}function E(b,B){b.setAttribute("id",B),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function k(){const b=Nw(s),B=t("text"),Q=document.getElementById(B)||document.createElement("span"),Y=t("learnmore"),W=document.getElementById(Y)||document.createElement("a"),we=t("preprendIcon"),fe=document.getElementById(we)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const me=b.element;m(me),E(W,Y);const Ie=_();y(fe,we),me.append(fe,Q,W,Ie),document.body.appendChild(me)}u?(Q.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Dw(){var i;const e=(i=nc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ow(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Lw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Fw(){return!Dw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="FirebaseError";class Vr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zw,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Bw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Vr(o,m,s)}}function Bw(i,e){return i.replace($w,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const $w=/\{\$([^}]+)}/g;function Hw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Hm(u)&&Hm(h)){if(!rs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Hm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ww(i,e){const t=new qw(i,e);return t.subscribe.bind(t)}class qw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Jh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(i){return i&&i._delegate?i._delegate:i}class is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Rw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xw(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qw(i){return i===Ji?void 0:i}function Xw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(xe||(xe={}));const Jw={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Zw=xe.INFO,eE={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},tE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=eE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=Zw,this._logHandler=tE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const nE=(i,e)=>e.some(t=>i instanceof t);let Wm,qm;function rE(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iE(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,cd=new WeakMap,Cy=new WeakMap,Zh=new WeakMap,Ld=new WeakMap;function sE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(di(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,i)}).catch(()=>{}),Ld.set(e,i),e}function oE(i){if(cd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});cd.set(i,e)}let hd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return cd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Cy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aE(i){hd=i(hd)}function lE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ed(this),e,...t);return Cy.set(s,e.sort?e.sort():[e]),di(s)}:iE().includes(i)?function(...e){return i.apply(ed(this),e),di(ky.get(this))}:function(...e){return di(i.apply(ed(this),e))}}function uE(i){return typeof i=="function"?lE(i):(i instanceof IDBTransaction&&oE(i),nE(i,rE())?new Proxy(i,hd):i)}function di(i){if(i instanceof IDBRequest)return sE(i);if(Zh.has(i))return Zh.get(i);const e=uE(i);return e!==i&&(Zh.set(i,e),Ld.set(e,i)),e}const ed=i=>Ld.get(i);function cE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=di(h);return s&&h.addEventListener("upgradeneeded",y=>{s(di(h.result),y.oldVersion,y.newVersion,di(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const hE=["get","getKey","getAll","getAllKeys","count"],dE=["put","add","delete","clear"],td=new Map;function Gm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=dE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return td.set(e,u),u}aE(i=>({...i,get:(e,t,s)=>Gm(e,t)||i.get(e,t,s),has:(e,t)=>!!Gm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",Km="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Od("@firebase/app"),mE="@firebase/app-compat",gE="@firebase/analytics-compat",yE="@firebase/analytics",vE="@firebase/app-check-compat",_E="@firebase/app-check",wE="@firebase/auth",EE="@firebase/auth-compat",TE="@firebase/database",IE="@firebase/data-connect",SE="@firebase/database-compat",AE="@firebase/functions",kE="@firebase/functions-compat",CE="@firebase/installations",RE="@firebase/installations-compat",PE="@firebase/messaging",xE="@firebase/messaging-compat",NE="@firebase/performance",bE="@firebase/performance-compat",DE="@firebase/remote-config",VE="@firebase/remote-config-compat",OE="@firebase/storage",LE="@firebase/storage-compat",ME="@firebase/firestore",FE="@firebase/ai",UE="@firebase/firestore-compat",jE="firebase",zE="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="[DEFAULT]",BE={[dd]:"fire-core",[mE]:"fire-core-compat",[yE]:"fire-analytics",[gE]:"fire-analytics-compat",[_E]:"fire-app-check",[vE]:"fire-app-check-compat",[wE]:"fire-auth",[EE]:"fire-auth-compat",[TE]:"fire-rtdb",[IE]:"fire-data-connect",[SE]:"fire-rtdb-compat",[AE]:"fire-fn",[kE]:"fire-fn-compat",[CE]:"fire-iid",[RE]:"fire-iid-compat",[PE]:"fire-fcm",[xE]:"fire-fcm-compat",[NE]:"fire-perf",[bE]:"fire-perf-compat",[DE]:"fire-rc",[VE]:"fire-rc-compat",[OE]:"fire-gcs",[LE]:"fire-gcs-compat",[ME]:"fire-fst",[UE]:"fire-fst-compat",[FE]:"fire-vertex","fire-js":"fire-js",[jE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Map,$E=new Map,pd=new Map;function Qm(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function mo(i){const e=i.name;if(pd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,i);for(const t of Mu.values())Qm(t,i);for(const t of $E.values())Qm(t,i);return!0}function Md(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function _n(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Ba("app","Firebase",HE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=zE;function Ry(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=Ty()),!t)throw fi.create("no-options");const u=Mu.get(o);if(u){if(rs(t,u.options)&&rs(s,u.config))return u;throw fi.create("duplicate-app",{appName:o})}const h=new Yw(o);for(const y of pd.values())h.addComponent(y);const m=new WE(t,s,h);return Mu.set(o,m),m}function Py(i=fd){const e=Mu.get(i);if(!e&&i===fd&&Ty())return Ry();if(!e)throw fi.create("no-app",{appName:i});return e}function pi(i,e,t){var s;let o=(s=BE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(m.join(" "));return}mo(new is(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="firebase-heartbeat-database",GE=1,Da="firebase-heartbeat-store";let nd=null;function xy(){return nd||(nd=cE(qE,GE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(i=>{throw fi.create("idb-open",{originalErrorMessage:i.message})})),nd}async function KE(i){try{const t=(await xy()).transaction(Da),s=await t.objectStore(Da).get(Ny(i));return await t.done,s}catch(e){if(e instanceof Vr)Rr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function Xm(i,e){try{const s=(await xy()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,Ny(i)),await s.done}catch(t){if(t instanceof Vr)Rr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function Ny(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=1024,XE=30;class YE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ym();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>XE){const h=eT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ym(),{heartbeatsToSend:s,unsentEntries:o}=JE(this._heartbeatsCache.heartbeats),u=Lu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function JE(i,e=QE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Jm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ZE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await KE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jm(i){return Lu(JSON.stringify({version:2,heartbeats:i})).length}function eT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(i){mo(new is("platform-logger",e=>new fE(e),"PRIVATE")),mo(new is("heartbeat",e=>new YE(e),"PRIVATE")),pi(dd,Km,i),pi(dd,Km,"esm2017"),pi("fire-js","")}tT("");var nT="firebase",rT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pi(nT,rT,"app");function Fd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iT=by,Dy=new Ba("auth","Firebase",by());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Od("@firebase/auth");function sT(i,...e){Fu.logLevel<=xe.WARN&&Fu.warn(`Auth (${To}): ${i}`,...e)}function ku(i,...e){Fu.logLevel<=xe.ERROR&&Fu.error(`Auth (${To}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(i,...e){throw Ud(i,...e)}function Jn(i,...e){return Ud(i,...e)}function Vy(i,e,t){const s=Object.assign(Object.assign({},iT()),{[e]:t});return new Ba("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return Vy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ud(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Dy.create(i,...e)}function Te(i,e,...t){if(!i)throw Ud(e,...t)}function Ar(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ku(e),new Error(e)}function xr(i,e){i||Ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function oT(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oT()||Ow()||"connection"in navigator)?navigator.onLine:!0}function lT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=bw()||Lw()}get(){return aT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(i,e){xr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hT=new Ha(3e4,6e4);function Wa(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Io(i,e,t,s,o={}){return Ly(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=$a(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:y},u);return Vw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(_.credentials="include"),Oy.fetch()(await My(i,i.config.apiHost,t,m),_)})}async function Ly(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},uT),e);try{const o=new dT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw gu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw gu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Vy(i,E,_);Pr(i,E)}}catch(o){if(o instanceof Vr)throw o;Pr(i,"network-request-failed",{message:String(o)})}}async function zd(i,e,t,s,o={}){const u=await Io(i,e,t,s,o);return"mfaPendingCredential"in u&&Pr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function My(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?jd(i.config,o):`${i.config.apiScheme}://${o}`;return cT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class dT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),hT.get())})}}function gu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(i,e){return Io(i,"POST","/v1/accounts:delete",e)}async function Uu(i,e){return Io(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pT(i,e=!1){const t=ln(i),s=await t.getIdToken(e),o=Bd(s);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ra(rd(o.auth_time)),issuedAtTime:Ra(rd(o.iat)),expirationTime:Ra(rd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rd(i){return Number(i)*1e3}function Bd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=wy(t);return o?JSON.parse(o):(ku("Failed to decode base64 JWT payload"),null)}catch(o){return ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function eg(i){const e=Bd(i);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Vr&&mT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function mT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Va(i,Uu(t,{idToken:s}));Te(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Fy(u.providerUserInfo):[],m=vT(i.providerData,h),y=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=y?_:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new gd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,k)}async function yT(i){const e=ln(i);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Fy(i){return i.map(e=>{var{providerId:t}=e,s=Fd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(i,e){const t=await Ly(i,{},async()=>{const s=$a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await My(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(y.credentials="include"),Oy.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wT(i,e){return Io(i,"POST","/v2/accounts:revokeToken",Wa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=eg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await _T(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Te(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(i,e){Te(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new gd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Va(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pT(this,e)}reload(){return yT(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Va(this,fT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,_,E;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,b=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,we=(_=t.createdAt)!==null&&_!==void 0?_:void 0,fe=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:me,emailVerified:Ie,isAnonymous:je,providerData:ke,stsTokenManager:N}=t;Te(me&&N,e,"internal-error");const T=uo.fromJSON(this.name,N);Te(typeof me=="string",e,"internal-error"),oi(k,e.name),oi(b,e.name),Te(typeof Ie=="boolean",e,"internal-error"),Te(typeof je=="boolean",e,"internal-error"),oi(B,e.name),oi(Q,e.name),oi(Y,e.name),oi(W,e.name),oi(we,e.name),oi(fe,e.name);const A=new Fn({uid:me,auth:e,email:b,emailVerified:Ie,displayName:k,isAnonymous:je,photoURL:Q,phoneNumber:B,tenantId:Y,stsTokenManager:T,createdAt:we,lastLoginAt:fe});return ke&&Array.isArray(ke)&&(A.providerData=ke.map(P=>Object.assign({},P))),W&&(A._redirectEventId=W),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ju(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Fy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const y=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new gd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function kr(i){xr(i instanceof Function,"Expected a class definition");let e=tg.get(i);return e?(xr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,tg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uy.type="NONE";const ng=Uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Cu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Cu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uu(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(kr(ng),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||kr(ng);const h=Cu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let k;if(typeof E=="string"){const b=await Uu(e,{idToken:E}).catch(()=>{});if(!b)break;k=await Fn._fromGetAccountInfoResponse(e,b,E)}else k=Fn._fromJSON(e,E);_!==u&&(m=k),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new co(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wy(e))return"Blackberry";if(qy(e))return"Webos";if(zy(e))return"Safari";if((e.includes("chrome/")||By(e))&&!e.includes("edge/"))return"Chrome";if(Hy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jy(i=jt()){return/firefox\//i.test(i)}function zy(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function By(i=jt()){return/crios\//i.test(i)}function $y(i=jt()){return/iemobile/i.test(i)}function Hy(i=jt()){return/android/i.test(i)}function Wy(i=jt()){return/blackberry/i.test(i)}function qy(i=jt()){return/webos/i.test(i)}function $d(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ET(i=jt()){var e;return $d(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TT(){return Mw()&&document.documentMode===10}function Gy(i=jt()){return $d(i)||Hy(i)||qy(i)||Wy(i)||/windows phone/i.test(i)||$y(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(i,e=[]){let t;switch(i){case"Browser":t=rg(jt());break;case"Worker":t=`${rg(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${To}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(i,e={}){return Io(i,"GET","/v2/passwordPolicy",Wa(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=6;class kT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:AT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.beforeStateQueue=new IT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uu(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_n(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Cr(this));const t=e?ln(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ST(this),t=new kT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qa(i){return ln(i)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ww(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(i){Hd=i}function PT(i){return Hd.loadJS(i)}function xT(){return Hd.gapiScript}function NT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(i,e){const t=Md(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(rs(u,e??{}))return o;Pr(o,"already-initialized")}return t.initialize({options:e})}function DT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function VT(i,e,t){const s=qa(i);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Qy(e),{host:h,port:m}=OT(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(rs(_,s.config.emulator)&&rs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Eo(h)?(Sy(`${u}//${h}${y}`),Ay("Auth",!0)):LT()}function Qy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function OT(i){const e=Qy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:sg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:sg(h)}}}function sg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function LT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ar("not implemented")}_getIdTokenResponse(e){return Ar("not implemented")}_linkToIdToken(e,t){return Ar("not implemented")}_getReauthenticationResolver(e){return Ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(i,e){return zd(i,"POST","/v1/accounts:signInWithIdp",Wa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="http://localhost";class ss extends Xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Fd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ss(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:MT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$a(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Yy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Ga{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ss._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return li.credential(t,s)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ga{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ga{constructor(){super("twitter.com")}static credential(e,t){return ss._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(i,e){return zd(i,"POST","/v1/accounts:signUp",Wa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Fn._fromIdTokenResponse(e,s,o),h=og(s);return new Nr({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=og(s);return new Nr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function og(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(i){var e;if(_n(i.app))return Promise.reject(Cr(i));const t=qa(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nr({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await FT(t,{returnSecureToken:!0}),o=await Nr._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends Vr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new zu(e,t,s,o)}}function Jy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(i,u,e,s):u})}async function UT(i,e,t=!1){const s=await Va(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Nr._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(i,e,t=!1){const{auth:s}=i;if(_n(s.app))return Promise.reject(Cr(s));const o="reauthenticate";try{const u=await Va(i,Jy(s,o,e,i),t);Te(u.idToken,s,"internal-error");const h=Bd(u.idToken);Te(h,s,"internal-error");const{sub:m}=h;return Te(i.uid===m,s,"user-mismatch"),Nr._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Pr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(i,e,t=!1){if(_n(i.app))return Promise.reject(Cr(i));const s="signIn",o=await Jy(i,s,e),u=await Nr._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(i,e){return zd(i,"POST","/v1/accounts:signInWithCustomToken",Wa(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(i,e){if(_n(i.app))return Promise.reject(Cr(i));const t=qa(i),s=await BT(t,{token:e,returnSecureToken:!0}),o=await Nr._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}function HT(i,e,t,s){return ln(i).onIdTokenChanged(e,t,s)}function WT(i,e,t){return ln(i).beforeAuthStateChanged(e,t)}function qT(i,e,t,s){return ln(i).onAuthStateChanged(e,t,s)}const Bu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=1e3,KT=10;class ev extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);TT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,KT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},GT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const QT=ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tv.type="SESSION";const nv=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await XT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Wd("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const b=k;if(b.data.eventId===_)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function JT(i){Zn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function ZT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function tI(){return rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="firebaseLocalStorageDb",nI=1,$u="firebaseLocalStorage",sv="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(i,e){return i.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function rI(){const i=indexedDB.deleteDatabase(iv);return new Ka(i).toPromise()}function yd(){const i=indexedDB.open(iv,nI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore($u,{keyPath:sv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains($u)?e(s):(s.close(),await rI(),e(await yd()))})})}async function lg(i,e,t){const s=ic(i,!0).put({[sv]:e,value:t});return new Ka(s).toPromise()}async function iI(i,e){const t=ic(i,!1).get(e),s=await new Ka(t).toPromise();return s===void 0?null:s.value}function ug(i,e){const t=ic(i,!0).delete(e);return new Ka(t).toPromise()}const sI=800,oI=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>oI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(tI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZT(),!this.activeServiceWorker)return;this.sender=new YT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await lg(e,Bu,"1"),await ug(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>lg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>iI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ug(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ic(o,!1).getAll();return new Ka(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const aI=ov;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(i,e){return e?kr(e):(Te(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Xy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uI(i){return zT(i.auth,new qd(i),i.bypassAuthState)}function cI(i){const{auth:e,user:t}=i;return Te(t,e,"internal-error"),jT(t,new qd(i),i.bypassAuthState)}async function hI(i){const{auth:e,user:t}=i;return Te(t,e,"internal-error"),UT(t,new qd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uI;case"linkViaPopup":case"linkViaRedirect":return hI;case"reauthViaPopup":case"reauthViaRedirect":return cI;default:Pr(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new Ha(2e3,1e4);class lo extends av{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dI.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="pendingRedirect",Ru=new Map;class pI extends av{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const s=await mI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mI(i,e){const t=vI(e),s=yI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function gI(i,e){Ru.set(i._key(),e)}function yI(i){return kr(i._redirectPersistence)}function vI(i){return Cu(fI,i.config.apiKey,i.name)}async function _I(i,e,t=!1){if(_n(i.app))return Promise.reject(Cr(i));const s=qa(i),o=lI(s,e),h=await new pI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=600*1e3;class EI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!lv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wI&&this.cachedEventUids.clear(),this.cachedEventUids.has(cg(e))}saveEventToCache(e){this.cachedEventUids.add(cg(e)),this.lastProcessedEventTime=Date.now()}}function cg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function lv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(i,e={}){return Io(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function kI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await II(i);for(const t of e)try{if(CI(t))return}catch{}Pr(i,"unauthorized-domain")}function CI(i){const e=md(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!AI.test(t))return!1;if(SI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new Ha(3e4,6e4);function hg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function PI(i){return new Promise((e,t)=>{var s,o,u;function h(){hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hg(),t(Jn(i,"network-request-failed"))},timeout:RI.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Zn().gapi)===null||u===void 0)&&u.load)h();else{const m=NT("iframefcb");return Zn()[m]=()=>{gapi.load?h():t(Jn(i,"network-request-failed"))},PT(`${xT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function xI(i){return Pu=Pu||PI(i),Pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Ha(5e3,15e3),bI="__/auth/iframe",DI="emulator/auth/iframe",VI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LI(i){const e=i.config;Te(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?jd(e,DI):`https://${i.config.authDomain}/${bI}`,s={apiKey:e.apiKey,appName:i.name,v:To},o=OI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${$a(s).slice(1)}`}async function MI(i){const e=await xI(i),t=Zn().gapi;return Te(t,i,"internal-error"),e.open({where:document.body,url:LI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},NI.get());function y(){Zn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UI=500,jI=600,zI="_blank",BI="http://localhost";class dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $I(i,e,t,s=UI,o=jI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},FI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=jt().toLowerCase();t&&(m=By(_)?zI:t),jy(_)&&(e=e||BI,y.scrollbars="yes");const E=Object.entries(y).reduce((b,[B,Q])=>`${b}${B}=${Q},`,"");if(ET(_)&&m!=="_self")return HI(e||"",m),new dg(null);const k=window.open(e||"",m,E);Te(k,i,"popup-blocked");try{k.focus()}catch{}return new dg(k)}function HI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="__/auth/handler",qI="emulator/auth/handler",GI=encodeURIComponent("fac");async function fg(i,e,t,s,o,u){Te(i.config.authDomain,i,"auth-domain-config-required"),Te(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:To,eventId:o};if(e instanceof Yy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Hw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,k]of Object.entries({}))h[E]=k}if(e instanceof Ga){const E=e.getScopes().filter(k=>k!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),_=y?`#${GI}=${encodeURIComponent(y)}`:"";return`${KI(i)}?${$a(m).slice(1)}${_}`}function KI({config:i}){return i.emulator?jd(i,qI):`https://${i.authDomain}/${WI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="webStorageSupport";class QI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=_I,this._overrideRedirectResult=gI}async _openPopup(e,t,s,o){var u;xr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await fg(e,t,s,md(),o);return $I(e,h,Wd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await fg(e,t,s,md(),o);return JT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await MI(e),s=new EI(e);return t.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(id,{type:id},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[id];h!==void 0&&t(!!h),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gy()||zy()||$d()}}const XI=QI;var pg="@firebase/auth",mg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZI(i){mo(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(i)},_=new CT(s,o,u,y);return DT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mo(new is("auth-internal",e=>{const t=qa(e.getProvider("auth").getImmediate());return(s=>new YI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(pg,mg,JI(i)),pi(pg,mg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=300,t1=Iy("authIdTokenMaxAge")||e1;let gg=null;const n1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>t1)return;const o=t==null?void 0:t.token;gg!==o&&(gg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function r1(i=Py()){const e=Md(i,"auth");if(e.isInitialized())return e.getImmediate();const t=bT(i,{popupRedirectResolver:XI,persistence:[aI,QT,nv]}),s=Iy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=n1(u.toString());WT(t,h,()=>h(t.currentUser)),HT(t,m=>h(m))}}const o=Ey("auth");return o&&VT(t,`http://${o}`),t}function i1(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}RT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",i1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZI("Browser");var yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,uv;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function A(){}A.prototype=T.prototype,N.D=T.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(P,R,V){for(var S=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)S[Ye-2]=arguments[Ye];return T.prototype[R].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,A){A||(A=0);var P=Array(16);if(typeof T=="string")for(var R=0;16>R;++R)P[R]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(R=0;16>R;++R)P[R]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=N.g[0],A=N.g[1],R=N.g[2];var V=N.g[3],S=T+(V^A&(R^V))+P[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=V+(R^T&(A^R))+P[1]+3905402710&4294967295,V=T+(S<<12&4294967295|S>>>20),S=R+(A^V&(T^A))+P[2]+606105819&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(T^R&(V^T))+P[3]+3250441966&4294967295,A=R+(S<<22&4294967295|S>>>10),S=T+(V^A&(R^V))+P[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=V+(R^T&(A^R))+P[5]+1200080426&4294967295,V=T+(S<<12&4294967295|S>>>20),S=R+(A^V&(T^A))+P[6]+2821735955&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(T^R&(V^T))+P[7]+4249261313&4294967295,A=R+(S<<22&4294967295|S>>>10),S=T+(V^A&(R^V))+P[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=V+(R^T&(A^R))+P[9]+2336552879&4294967295,V=T+(S<<12&4294967295|S>>>20),S=R+(A^V&(T^A))+P[10]+4294925233&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(T^R&(V^T))+P[11]+2304563134&4294967295,A=R+(S<<22&4294967295|S>>>10),S=T+(V^A&(R^V))+P[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=V+(R^T&(A^R))+P[13]+4254626195&4294967295,V=T+(S<<12&4294967295|S>>>20),S=R+(A^V&(T^A))+P[14]+2792965006&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(T^R&(V^T))+P[15]+1236535329&4294967295,A=R+(S<<22&4294967295|S>>>10),S=T+(R^V&(A^R))+P[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(T^A))+P[6]+3225465664&4294967295,V=T+(S<<9&4294967295|S>>>23),S=R+(T^A&(V^T))+P[11]+643717713&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(R^V))+P[0]+3921069994&4294967295,A=R+(S<<20&4294967295|S>>>12),S=T+(R^V&(A^R))+P[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(T^A))+P[10]+38016083&4294967295,V=T+(S<<9&4294967295|S>>>23),S=R+(T^A&(V^T))+P[15]+3634488961&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(R^V))+P[4]+3889429448&4294967295,A=R+(S<<20&4294967295|S>>>12),S=T+(R^V&(A^R))+P[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(T^A))+P[14]+3275163606&4294967295,V=T+(S<<9&4294967295|S>>>23),S=R+(T^A&(V^T))+P[3]+4107603335&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(R^V))+P[8]+1163531501&4294967295,A=R+(S<<20&4294967295|S>>>12),S=T+(R^V&(A^R))+P[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(T^A))+P[2]+4243563512&4294967295,V=T+(S<<9&4294967295|S>>>23),S=R+(T^A&(V^T))+P[7]+1735328473&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(R^V))+P[12]+2368359562&4294967295,A=R+(S<<20&4294967295|S>>>12),S=T+(A^R^V)+P[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^R)+P[8]+2272392833&4294967295,V=T+(S<<11&4294967295|S>>>21),S=R+(V^T^A)+P[11]+1839030562&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^T)+P[14]+4259657740&4294967295,A=R+(S<<23&4294967295|S>>>9),S=T+(A^R^V)+P[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^R)+P[4]+1272893353&4294967295,V=T+(S<<11&4294967295|S>>>21),S=R+(V^T^A)+P[7]+4139469664&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^T)+P[10]+3200236656&4294967295,A=R+(S<<23&4294967295|S>>>9),S=T+(A^R^V)+P[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^R)+P[0]+3936430074&4294967295,V=T+(S<<11&4294967295|S>>>21),S=R+(V^T^A)+P[3]+3572445317&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^T)+P[6]+76029189&4294967295,A=R+(S<<23&4294967295|S>>>9),S=T+(A^R^V)+P[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^R)+P[12]+3873151461&4294967295,V=T+(S<<11&4294967295|S>>>21),S=R+(V^T^A)+P[15]+530742520&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^T)+P[2]+3299628645&4294967295,A=R+(S<<23&4294967295|S>>>9),S=T+(R^(A|~V))+P[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~R))+P[7]+1126891415&4294967295,V=T+(S<<10&4294967295|S>>>22),S=R+(T^(V|~A))+P[14]+2878612391&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~T))+P[5]+4237533241&4294967295,A=R+(S<<21&4294967295|S>>>11),S=T+(R^(A|~V))+P[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~R))+P[3]+2399980690&4294967295,V=T+(S<<10&4294967295|S>>>22),S=R+(T^(V|~A))+P[10]+4293915773&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~T))+P[1]+2240044497&4294967295,A=R+(S<<21&4294967295|S>>>11),S=T+(R^(A|~V))+P[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~R))+P[15]+4264355552&4294967295,V=T+(S<<10&4294967295|S>>>22),S=R+(T^(V|~A))+P[6]+2734768916&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~T))+P[13]+1309151649&4294967295,A=R+(S<<21&4294967295|S>>>11),S=T+(R^(A|~V))+P[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~R))+P[11]+3174756917&4294967295,V=T+(S<<10&4294967295|S>>>22),S=R+(T^(V|~A))+P[2]+718787259&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~T))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+R&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var A=T-this.blockSize,P=this.B,R=this.h,V=0;V<T;){if(R==0)for(;V<=A;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<T;)if(P[R++]=N.charCodeAt(V++),R==this.blockSize){o(this,P),R=0;break}}else for(;V<T;)if(P[R++]=N[V++],R==this.blockSize){o(this,P),R=0;break}}this.h=R,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var A=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=A&255,A/=256;for(this.u(N),N=Array(16),T=A=0;4>T;++T)for(var P=0;32>P;P+=8)N[A++]=this.g[T]>>>P&255;return N};function u(N,T){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=T(N)}function h(N,T){this.h=T;for(var A=[],P=!0,R=N.length-1;0<=R;R--){var V=N[R]|0;P&&V==T||(A[R]=V,P=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return k;if(0>N)return W(_(-N));for(var T=[],A=1,P=0;N>=A;P++)T[P]=N/A|0,A*=4294967296;return new h(T,0)}function E(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return W(E(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(T,8)),P=k,R=0;R<N.length;R+=8){var V=Math.min(8,N.length-R),S=parseInt(N.substring(R,R+V),T);8>V?(V=_(Math.pow(T,V)),P=P.j(V).add(_(S))):(P=P.j(A),P=P.add(_(S)))}return P}var k=y(0),b=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-W(this).m();for(var N=0,T=1,A=0;A<this.g.length;A++){var P=this.i(A);N+=(0<=P?P:4294967296+P)*T,T*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(Y(this))return"-"+W(this).toString(N);for(var T=_(Math.pow(N,6)),A=this,P="";;){var R=Ie(A,T).g;A=we(A,R.j(T));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=R,Q(A))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=we(this,N),Y(N)?-1:Q(N)?0:1};function W(N){for(var T=N.g.length,A=[],P=0;P<T;P++)A[P]=~N.g[P];return new h(A,~N.h).add(b)}i.abs=function(){return Y(this)?W(this):this},i.add=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],P=0,R=0;R<=T;R++){var V=P+(this.i(R)&65535)+(N.i(R)&65535),S=(V>>>16)+(this.i(R)>>>16)+(N.i(R)>>>16);P=S>>>16,V&=65535,S&=65535,A[R]=S<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function we(N,T){return N.add(W(T))}i.j=function(N){if(Q(this)||Q(N))return k;if(Y(this))return Y(N)?W(this).j(W(N)):W(W(this).j(N));if(Y(N))return W(this.j(W(N)));if(0>this.l(B)&&0>N.l(B))return _(this.m()*N.m());for(var T=this.g.length+N.g.length,A=[],P=0;P<2*T;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var R=0;R<N.g.length;R++){var V=this.i(P)>>>16,S=this.i(P)&65535,Ye=N.i(R)>>>16,_t=N.i(R)&65535;A[2*P+2*R]+=S*_t,fe(A,2*P+2*R),A[2*P+2*R+1]+=V*_t,fe(A,2*P+2*R+1),A[2*P+2*R+1]+=S*Ye,fe(A,2*P+2*R+1),A[2*P+2*R+2]+=V*Ye,fe(A,2*P+2*R+2)}for(P=0;P<T;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=T;P<2*T;P++)A[P]=0;return new h(A,0)};function fe(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function me(N,T){this.g=N,this.h=T}function Ie(N,T){if(Q(T))throw Error("division by zero");if(Q(N))return new me(k,k);if(Y(N))return T=Ie(W(N),T),new me(W(T.g),W(T.h));if(Y(T))return T=Ie(N,W(T)),new me(W(T.g),T.h);if(30<N.g.length){if(Y(N)||Y(T))throw Error("slowDivide_ only works with positive integers.");for(var A=b,P=T;0>=P.l(N);)A=je(A),P=je(P);var R=ke(A,1),V=ke(P,1);for(P=ke(P,2),A=ke(A,2);!Q(P);){var S=V.add(P);0>=S.l(N)&&(R=R.add(A),V=S),P=ke(P,1),A=ke(A,1)}return T=we(N,R.j(T)),new me(R,T)}for(R=k;0<=N.l(T);){for(A=Math.max(1,Math.floor(N.m()/T.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=_(A),S=V.j(T);Y(S)||0<S.l(N);)A-=P,V=_(A),S=V.j(T);Q(V)&&(V=b),R=R.add(V),N=we(N,S)}return new me(R,N)}i.A=function(N){return Ie(this,N).h},i.and=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)&N.i(P);return new h(A,this.h&N.h)},i.or=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)|N.i(P);return new h(A,this.h|N.h)},i.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)^N.i(P);return new h(A,this.h^N.h)};function je(N){for(var T=N.g.length+1,A=[],P=0;P<T;P++)A[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(A,N.h)}function ke(N,T){var A=T>>5;T%=32;for(var P=N.g.length-A,R=[],V=0;V<P;V++)R[V]=0<T?N.i(V+A)>>>T|N.i(V+A+1)<<32-T:N.i(V+A);return new h(R,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,uv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,mi=h}).apply(typeof yg<"u"?yg:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cv,Ia,hv,xu,vd,dv,fv,pv;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var O=l[w];if(!(O in g))break e;g=g[O]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,w=!1,O={next:function(){if(!w&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,g){return l.call.apply(l.bind,arguments)}function k(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,w),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function b(l,f,g){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:k,b.apply(null,arguments)}function B(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,O,j){for(var ee=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ee[ze-2]=arguments[ze];return f.prototype[O].apply(w,ee)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function W(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const O=l.length||0,j=w.length||0;l.length=O+j;for(let ee=0;ee<j;ee++)l[O+ee]=w[ee]}else l.push(w)}}class we{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ie(l){return Ie[" "](l),l}Ie[" "]=function(){};var je=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function ke(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let g,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(g in w)l[g]=w[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function R(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function S(){var l=he;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ye{constructor(){this.h=this.g=null}add(f,g){const w=_t.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var _t=new we(()=>new ct,l=>l.reset());class ct{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,Z=!1,he=new Ye,te=()=>{const l=m.Promise.resolve(void 0);Fe=()=>{l.then(D)}};var D=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){V(g)}var f=_t;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function z(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var ie=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function oe(l,f){if(z.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(je){e:{try{Ie(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ve[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&oe.aa.h.call(this)}}Q(oe,z);var ve={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),de=0;function Le(l,f,g,w,O){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=O,this.key=++de,this.da=this.fa=!1}function wt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ar(l){this.src=l,this.g={},this.h=0}ar.prototype.add=function(l,f,g,w,O){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var ee=Or(l,f,w,O);return-1<ee?(f=l[ee],g||(f.fa=!1)):(f=new Le(f,this.src,j,!!w,O),f.fa=g,l.push(f)),f};function ds(l,f){var g=f.type;if(g in l.g){var w=l.g[g],O=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=O)&&Array.prototype.splice.call(w,O,1),j&&(wt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Or(l,f,g,w){for(var O=0;O<l.length;++O){var j=l[O];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==w)return O}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),fs={};function Ro(l,f,g,w,O){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Ro(l,f[j],g,w,O);return null}return g=No(g),l&&l[Pe]?l.K(f,g,_(w)?!!w.capture:!1,O):Po(l,f,g,!1,w,O)}function Po(l,f,g,w,O,j){if(!f)throw Error("Invalid event type");var ee=_(O)?!!O.capture:!!O,ze=ms(l);if(ze||(l[Si]=ze=new ar(l)),g=ze.add(f,g,w,ee,j),g.proxy)return g;if(w=el(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)ie||(O=ee),O===void 0&&(O=!1),l.addEventListener(f.toString(),w,O);else if(l.attachEvent)l.attachEvent(ur(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function el(){function l(g){return f.call(l.src,l.listener,g)}const f=xo;return l}function ps(l,f,g,w,O){if(Array.isArray(f))for(var j=0;j<f.length;j++)ps(l,f[j],g,w,O);else w=_(w)?!!w.capture:!!w,g=No(g),l&&l[Pe]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Or(j,g,w,O),-1<g&&(wt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=ms(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Or(f,g,w,O)),(g=-1<l?f[l]:null)&&lr(g))}function lr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Pe])ds(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(ur(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=ms(f))?(ds(g,l),g.h==0&&(g.src=null,f[Si]=null)):wt(l)}}}function ur(l){return l in fs?fs[l]:fs[l]="on"+l}function xo(l,f){if(l.da)l=!0;else{f=new oe(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&lr(l),l=g.call(w,f)}return l}function ms(l){return l=l[Si],l instanceof ar?l:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(l){return typeof l=="function"?l:(l[gs]||(l[gs]=function(f){return l.handleEvent(f)}),l[gs])}function ht(){$.call(this),this.i=new ar(this),this.M=this,this.F=null}Q(ht,$),ht.prototype[Pe]=!0,ht.prototype.removeEventListener=function(l,f,g,w){ps(this,l,f,g,w)};function dt(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new z(f,l);else if(f instanceof z)f.target=f.target||l;else{var O=f;f=new z(w,l),P(f,O)}if(O=!0,g)for(var j=g.length-1;0<=j;j--){var ee=f.g=g[j];O=cr(ee,w,!0,f)&&O}if(ee=f.g=l,O=cr(ee,w,!0,f)&&O,O=cr(ee,w,!1,f)&&O,g)for(j=0;j<g.length;j++)ee=f.g=g[j],O=cr(ee,w,!1,f)&&O}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)wt(g[w]);delete l.g[f],l.h--}}this.F=null},ht.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},ht.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function cr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,j=0;j<f.length;++j){var ee=f[j];if(ee&&!ee.da&&ee.capture==g){var ze=ee.listener,ft=ee.ha||ee.src;ee.fa&&ds(l.i,ee),O=ze.call(ft,w)!==!1&&O}}return O&&!w.defaultPrevented}function bo(l,f,g){if(typeof l=="function")g&&(l=b(l,g));else if(l&&typeof l.handleEvent=="function")l=b(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Lr(l){l.g=bo(()=>{l.g=null,l.i&&(l.i=!1,Lr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ai extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(l){$.call(this),this.h=l,this.g={}}Q(ki,$);var Do=[];function Vo(l){ke(l.g,function(f,g){this.g.hasOwnProperty(g)&&lr(f)},l),l.g={}}ki.prototype.N=function(){ki.aa.N.call(this),Vo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=m.JSON.stringify,Lo=m.JSON.parse,Mo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ci(){}Ci.prototype.h=null;function ys(l){return l.h||(l.h=l.i())}function vs(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){z.call(this,"d")}Q(jn,z);function _s(){z.call(this,"c")}Q(_s,z);var zn={},Fo=null;function Ri(){return Fo=Fo||new ht}zn.La="serverreachability";function Uo(l){z.call(this,zn.La,l)}Q(Uo,z);function hr(l){const f=Ri();dt(f,new Uo(f))}zn.STAT_EVENT="statevent";function jo(l,f){z.call(this,zn.STAT_EVENT,l),this.stat=f}Q(jo,z);function nt(l){const f=Ri();dt(f,new jo(f,l))}zn.Ma="timingevent";function ws(l,f){z.call(this,zn.Ma,l),this.size=f}Q(ws,z);function In(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function xi(l,f,g,w,O,j){l.info(function(){if(l.g)if(j)for(var ee="",ze=j.split("&"),ft=0;ft<ze.length;ft++){var De=ze[ft].split("=");if(1<De.length){var Et=De[0];De=De[1];var st=Et.split("_");ee=2<=st.length&&st[1]=="type"?ee+(Et+"="+De+"&"):ee+(Et+"=redacted&")}}else ee=null;else ee=j;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+f+`
`+g+`
`+ee})}function Es(l,f,g,w,O,j,ee){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+f+`
`+g+`
`+j+" "+ee})}function Sn(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+_c(l,g)+(w?" "+w:"")})}function zo(l,f){l.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function _c(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var O=w[1];if(Array.isArray(O)&&!(1>O.length)){var j=O[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ee=1;ee<O.length;ee++)O[ee]=""}}}}return Oo(g)}catch{return f}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function Ni(){}Q(Ni,Ci),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},An=new Ni;function kn(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var Bo={},Is={};function Ss(l,f,g){l.L=1,l.v=zr(tn(f)),l.m=g,l.P=!0,$o(l,null)}function $o(l,f){l.F=Date.now(),$e(l),l.A=tn(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),$r(g.i,"t",w),l.C=0,g=l.j.J,l.h=new nl,l.g=wl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Ai(b(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Do[0]=O.toString()),O=Do);for(var j=0;j<O.length;j++){var ee=Ro(g,O[j],w||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),hr(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}kn.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},kn.prototype.Y=function(l){try{if(l==this.g)e:{const st=qt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||st!=4||f==7||(f==8||0>=dn?hr(3):hr(2)),bi(this);var g=this.g.Z();this.X=g;t:if(rl(this)){var w=Qo(this.g);l="";var O=w.length,j=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Mr(this);var ee="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(j&&f==O-1)});w.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=g==200,Es(this.i,this.u,this.A,this.l,this.R,st,g),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,ft=this.g;if((ze=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(ze)){var De=ze;break t}}De=null}if(g=De)Sn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,g);else{this.o=!1,this.s=3,nt(12),cn(this),Mr(this);break e}}if(this.P){g=!0;let rn;for(;!this.J&&this.C<ee.length;)if(rn=wc(this,ee),rn==Is){st==4&&(this.s=4,nt(14),g=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Bo){this.s=4,nt(15),Sn(this.i,this.l,ee,"[Invalid Chunk]"),g=!1;break}else Sn(this.i,this.l,rn,null),Ho(this,rn);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||ee.length!=0||this.h.h||(this.s=1,nt(16),g=!1),this.o=this.o&&g,!g)Sn(this.i,this.l,ee,"[Invalid Chunked Response]"),cn(this),Mr(this);else if(0<ee.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Yo(Et),Et.M=!0,nt(11))}}else Sn(this.i,this.l,ee,null),Ho(this,ee);st==4&&cn(this),this.o&&!this.J&&(st==4?Os(this.j,this):(this.o=!1,$e(this)))}else xs(this.g),g==400&&0<ee.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),cn(this),Mr(this)}}}catch{}finally{}};function rl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function wc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?Is:(g=Number(f.substring(g,w)),isNaN(g)?Bo:(w+=1,w+g>f.length?Is:(f=f.slice(w,w+g),l.C=w+g,f)))}kn.prototype.cancel=function(){this.J=!0,cn(this)};function $e(l){l.S=Date.now()+l.I,il(l,l.I)}function il(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=In(b(l.ba,l),f)}function bi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}kn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zo(this.i,this.A),this.L!=2&&(hr(),nt(17)),cn(this),this.s=2,Mr(this)):il(this,this.S-l)};function Mr(l){l.j.G==0||l.J||Os(l.j,l)}function cn(l){bi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Vo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ho(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||zt(g.h,l))){if(!l.K&&zt(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Vs(g),Nn(g);else break e;Ds(g),nt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=In(b(g.Za,g),6e3));if(1>=ol(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else gr(g,11)}else if((l.K||g.g==l)&&Vs(g),!fe(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let De=O[f];if(g.T=De[0],De=De[1],g.G==2)if(De[0]=="c"){g.K=De[1],g.ia=De[2];const Et=De[3];Et!=null&&(g.la=Et,g.j.info("VER="+g.la));const st=De[4];st!=null&&(g.Aa=st,g.j.info("SVER="+g.Aa));const dn=De[5];dn!=null&&typeof dn=="number"&&0<dn&&(w=1.5*dn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const rn=l.g;if(rn){const Ui=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var j=w.h;j.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Wo(j,j.h),j.h=null))}if(w.D){const Ms=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ms&&(w.ya=Ms,Be(w.I,w.D,Ms))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var ee=l;if(w.qa=_l(w,w.J?w.ia:null,w.W),ee.K){al(w.h,ee);var ze=ee,ft=w.L;ft&&(ze.I=ft),ze.B&&(bi(ze),$e(ze)),w.g=ee}else Fi(w);0<g.i.length&&Wn(g)}else De[0]!="stop"&&De[0]!="close"||gr(g,7);else g.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?gr(g,7):Ct(g):De[0]!="noop"&&g.l&&g.l.ta(De),g.v=0)}}hr(4)}catch{}}var sl=class{constructor(l,f){this.g=l,this.map=f}};function Di(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ol(l){return l.h?1:l.g?l.g.size:0}function zt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Wo(l,f){l.g?l.g.add(f):l.h=f}function al(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Di.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ll(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function As(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function ks(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function Fr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ks(l),w=As(l),O=w.length,j=0;j<O;j++)f.call(void 0,w[j],g&&g[j],l)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ec(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),O=null;if(0<=w){var j=l[g].substring(0,w);O=l[g].substring(w+1)}else j=l[g];f(j,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function dr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof dr){this.h=l.h,Oi(this,l.j),this.o=l.o,this.g=l.g,Ur(this,l.s),this.l=l.l;var f=l.i,g=new Bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),jr(this,g),this.m=l.m}else l&&(f=String(l).match(Vi))?(this.h=!1,Oi(this,f[1]||"",!0),this.o=be(f[2]||""),this.g=be(f[3]||"",!0),Ur(this,f[4]),this.l=be(f[5]||"",!0),jr(this,f[6]||"",!0),this.m=be(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}dr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Br(f,Cs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Br(f,Cs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Br(g,g.charAt(0)=="/"?hl:cl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Br(g,qo)),l.join("")};function tn(l){return new dr(l)}function Oi(l,f,g){l.j=g?be(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ur(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function jr(l,f,g){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(g||(f=Br(f,dl)),l.i=new Bn(f,l.h))}function Be(l,f,g){l.i.set(f,g)}function zr(l){return Be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function be(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,ul),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ul(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,qo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function kt(l){l.g||(l.g=new Map,l.h=0,l.i&&Ec(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Bn.prototype,i.add=function(l,f){kt(this),this.i=null,l=hn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Cn(l,f){kt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return kt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){kt(this),this.g.forEach(function(g,w){g.forEach(function(O){l.call(f,O,w,this)},this)},this)},i.na=function(){kt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const O=l[w];for(let j=0;j<O.length;j++)g.push(f[w])}return g},i.V=function(l){kt(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return kt(this),this.i=null,l=hn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function $r(l,f,g){Cn(l,f),0<g.length&&(l.i=null,l.g.set(hn(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const j=encodeURIComponent(String(w)),ee=this.V(w);for(w=0;w<ee.length;w++){var O=j;ee[w]!==""&&(O+="="+encodeURIComponent(String(ee[w]))),l.push(O)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(kt(l),l.i=null,l.g.forEach(function(g,w){var O=w.toLowerCase();w!=O&&(Cn(this,w),$r(this,O,g))},l)),l.j=f}function Tc(l,f){const g=new Pi;if(m.Image){const w=new Image;w.onload=B(Wt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=B(Wt,g,"TestLoadImage: error",!1,f,w),w.onabort=B(Wt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=B(Wt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function fl(l,f){const g=new Pi,w=new AbortController,O=setTimeout(()=>{w.abort(),Wt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(O),j.ok?Wt(g,"TestPingServer: ok",!0,f):Wt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Wt(g,"TestPingServer: error",!1,f)})}function Wt(l,f,g,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(g)}catch{}}function Ic(){this.g=new Mo}function pl(l,f,g){const w=g||"";try{Fr(l,function(O,j){let ee=O;_(O)&&(ee=Oo(O)),f.push(w+j+"="+encodeURIComponent(ee))})}catch(O){throw f.push(w+"type="+encodeURIComponent("_badmap")),O}}function fr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(fr,Ci),fr.prototype.g=function(){return new Li(this.l,this.j)},fr.prototype.i=(function(l){return function(){return l}})({});function Li(l,f){ht.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Li,ht),i=Li.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,xn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Pn(this):xn(this),this.readyState==3&&ml(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Pn(this))},i.Qa=function(l){this.g&&(this.response=l,Pn(this))},i.ga=function(){this.g&&Pn(this)};function Pn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,xn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function xn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pr(l){let f="";return ke(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Hr(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=pr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Be(l,f,g))}function Qe(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Qe,ht);var Sc=/^https?$/i,Go=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?ys(this.o):ys(An),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Mi(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)g.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Go,f,void 0))||w||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of g)this.g.setRequestHeader(j,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Mi(this,j)}};function Mi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Rs(l),nn(l)}function Rs(l){l.A||(l.A=!0,dt(l,"complete"),dt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,dt(this,"complete"),dt(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},i.bb=function(){Ko(this)};function Ko(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)bo(l.Ea,0,l);else if(dt(l,"readystatechange"),qt(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=ee===0){var O=String(l.D).match(Vi)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),w=!Sc.test(O?O.toLowerCase():"")}g=w}if(g)dt(l,"complete"),dt(l,"success");else{l.m=6;try{var j=2<qt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Rs(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ps(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||dt(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ps(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lo(f)}};function Qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function xs(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(fe(l[w]))continue;var g=R(l[w]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[O]||[];f[O]=j,j.push(g)}N(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Xo(l){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,l),this.cb=Hn("retryDelaySeedMs",1e4,l),this.Wa=Hn("forwardChannelMaxRetries",2,l),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(l&&l.concurrentRequestLimit),this.Da=new Ic,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Xo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,w){nt(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=_l(this,null,this.W),Wn(this)};function Ct(l){if(Ns(l),l.G==3){var f=l.U++,g=tn(l.I);if(Be(g,"SID",l.K),Be(g,"RID",f),Be(g,"TYPE","terminate"),mr(l,g),f=new kn(l,l.j,f),f.L=2,f.v=zr(tn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=wl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}vl(l)}function Nn(l){l.g&&(Yo(l),l.g.cancel(),l.g=null)}function Ns(l){Nn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Vs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Wn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Fe||te(),Z||(Fe(),Z=!0),he.add(f,l),l.B=0}}function Ac(l,f){return ol(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=In(b(l.Ga,l,f),yl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new kn(this,this.j,l);let j=this.o;if(this.S&&(j?(j=T(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(O.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Wr(this,O,f),g=tn(this.I),Be(g,"RID",l),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),mr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(pr(j)))+"&"+f:this.m&&Hr(g,this.m,j)),Wo(this.h,O),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",f),Be(g,"SID","null"),O.T=!0,Ss(O,g,null)):Ss(O,g,f),this.G=2}}else this.G==3&&(l?bs(this,l):this.i.length==0||en(this.h)||bs(this))};function bs(l,f){var g;f?g=f.l:g=l.U++;const w=tn(l.I);Be(w,"SID",l.K),Be(w,"RID",g),Be(w,"AID",l.T),mr(l,w),l.m&&l.o&&Hr(w,l.m,l.o),g=new kn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Wr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Wo(l.h,g),Ss(g,w,f)}function mr(l,f){l.H&&ke(l.H,function(g,w){Be(f,w,g)}),l.l&&Fr({},function(g,w){Be(f,w,g)})}function Wr(l,f,g){g=Math.min(l.i.length,g);var w=l.l?b(l.l.Na,l.l,l):null;e:{var O=l.i;let j=-1;for(;;){const ee=["count="+g];j==-1?0<g?(j=O[0].g,ee.push("ofs="+j)):j=0:ee.push("ofs="+j);let ze=!0;for(let ft=0;ft<g;ft++){let De=O[ft].g;const Et=O[ft].map;if(De-=j,0>De)j=Math.max(0,O[ft].g-100),ze=!1;else try{pl(Et,ee,"req"+De+"_")}catch{w&&w(Et)}}if(ze){w=ee.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function Fi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Fe||te(),Z||(Fe(),Z=!0),he.add(f,l),l.v=0}}function Ds(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=In(b(l.Fa,l),yl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=In(b(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Nn(this),gl(this))};function Yo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function gl(l){l.g=new kn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);Be(f,"RID","rpc"),Be(f,"SID",l.K),Be(f,"AID",l.T),Be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Be(f,"TO",l.ja),Be(f,"TYPE","xmlhttp"),mr(l,f),l.m&&l.o&&Hr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=zr(tn(f)),g.m=null,g.P=!0,$o(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Nn(this),Ds(this),nt(19))};function Vs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Os(l,f){var g=null;if(l.g==f){Vs(l),Yo(l),l.g=null;var w=2}else if(zt(l.h,f))g=f.D,al(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;w=Ri(),dt(w,new ws(w,g)),Wn(l)}else Fi(l);else if(O=f.s,O==3||O==0&&0<f.X||!(w==1&&Ac(l,f)||w==2&&Ds(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),O){case 1:gr(l,5);break;case 4:gr(l,10);break;case 3:gr(l,6);break;default:gr(l,2)}}}function yl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function gr(l,f){if(l.j.info("Error code "+f),f==2){var g=b(l.fb,l),w=l.Xa;const O=!w;w=new dr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Oi(w,"https"),zr(w),O?Tc(w.toString(),g):fl(w.toString(),g)}else nt(2);l.G=0,l.l&&l.l.sa(f),vl(l),Ns(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function vl(l){if(l.G=0,l.ka=[],l.l){const f=ll(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function _l(l,f,g){var w=g instanceof dr?tn(g):new dr(g);if(w.g!="")f&&(w.g=f+"."+w.g),Ur(w,w.s);else{var O=m.location;w=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var j=new dr(null);w&&Oi(j,w),f&&(j.g=f),O&&Ur(j,O),g&&(j.l=g),w=j}return g=l.D,f=l.ya,g&&f&&Be(w,g,f),Be(w,"VER",l.la),mr(l,w),w}function wl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new fr({eb:g})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}i=Jo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ls(){}Ls.prototype.g=function(l,f){return new Bt(l,f)};function Bt(l,f){ht.call(this),this.g=new Xo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!fe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}Q(Bt,ht),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Ct(this.g)},Bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Oo(l),l=g);f.i.push(new sl(f.Ya++,l)),f.G==3&&Wn(f)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Bt.aa.N.call(this)};function El(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(El,jn);function Tl(){_s.call(this),this.status=1}Q(Tl,_s);function qn(l){this.g=l}Q(qn,Jo),qn.prototype.ua=function(){dt(this.g,"a")},qn.prototype.ta=function(l){dt(this.g,new El(l))},qn.prototype.sa=function(l){dt(this.g,new Tl)},qn.prototype.ra=function(){dt(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,pv=function(){return new Ls},fv=function(){return Ri()},dv=zn,vd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,xu=Ts,tl.COMPLETE="complete",hv=tl,vs.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ia=vs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,cv=Qe}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const vg="@firebase/firestore",_g="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Od("@firebase/firestore");function io(){return os.logLevel}function re(i,...e){if(os.logLevel<=xe.DEBUG){const t=e.map(Gd);os.debug(`Firestore (${So}): ${i}`,...t)}}function br(i,...e){if(os.logLevel<=xe.ERROR){const t=e.map(Gd);os.error(`Firestore (${So}): ${i}`,...t)}}function yi(i,...e){if(os.logLevel<=xe.WARN){const t=e.map(Gd);os.warn(`Firestore (${So}): ${i}`,...t)}}function Gd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,mv(i,s,t)}function mv(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw br(s),new Error(s)}function Ue(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||mv(e,o,s)}function Ae(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Vr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class o1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class a1{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new es;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new es,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new es)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new gv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class l1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class u1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new l1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new wg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new wg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=h1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function _d(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ce(s,o);{const u=yv(),h=d1(u.encode(Eg(i,t)),u.encode(Eg(e,t)));return h!==0?h:Ce(s,o)}}t+=s>65535?2:1}return Ce(i.length,e.length)}function Eg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function d1(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ce(i[t],e[t]);return Ce(i.length,e.length)}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):_d(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mi.fromString(e.substring(4,e.length-2))}}class Ge extends Yn{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const f1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Yn{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return f1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tg}static keyField(){return new Nt([Tg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ce(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ce(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ce(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(i,e,t){if(!t)throw new ce(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function p1(i,e,t,s){if(e===!0&&s===!0)throw new ce(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ig(i){if(!pe.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Sg(i){if(pe.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function _v(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Qd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function ts(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qd(i);throw new ce(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function Qa(i,e){if(!_v(i))throw new ce(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ce(G.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=-62135596800,kg=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kg);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ag)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kg}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ag;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ut("string",Ke._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Ke(0,0))}static max(){return new Se(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=-1;function m1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new vi(o,pe.empty(),e)}function g1(i){return new vi(i.readTime,i.key,Oa)}class vi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vi(Se.min(),pe.empty(),Oa)}static max(){return new vi(Se.max(),pe.empty(),Oa)}}function y1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==v1)throw i;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function w1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}sc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=-1;function oc(i){return i==null}function Hu(i){return i===0&&1/i==-1/0}function E1(i){return typeof i=="number"&&Number.isInteger(i)&&!Hu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="";function T1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Cg(e)),e=I1(i.get(t),e);return Cg(e)}function I1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case wv:t+="";break;default:t+=u}}return t}function Cg(i){return i+wv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ls(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Ev(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??xt.RED,this.left=o??xt.EMPTY,this.right=u??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new xt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new vt(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Tv("Invalid base64 string: "+u):u}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const S1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(i){if(Ue(!!i,39018),typeof i=="string"){let e=0;const t=S1.exec(i);if(Ue(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function wi(i){return typeof i=="string"?bt.fromBase64String(i):bt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="server_timestamp",Sv="__type__",Av="__previous_value__",kv="__local_write_time__";function Yd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sv])===null||t===void 0?void 0:t.stringValue)===Iv}function ac(i){const e=i.mapValue.fields[Av];return Yd(e)?ac(e):e}function La(i){const e=_i(i.mapValue.fields[kv].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,t,s,o,u,h,m,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E}}const Wu="(default)";class Ma{constructor(e,t){this.projectId=e,this.database=t||Wu}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===Wu}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="__type__",k1="__max__",_u={mapValue:{}},Rv="__vector__",qu="value";function Ei(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Yd(i)?4:R1(i)?9007199254740991:C1(i)?10:11:_e(28295,{value:i})}function sr(i,e){if(i===e)return!0;const t=Ei(i);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_i(o.timestampValue),m=_i(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return wi(o.bytesValue).isEqual(wi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?Hu(h)===Hu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Rg(h)!==Rg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!sr(h[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Fa(i,e){return(i.values||[]).find((t=>sr(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ei(i),s=Ei(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=it(u.integerValue||u.doubleValue),y=it(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return xg(i.timestampValue,e.timestampValue);case 4:return xg(La(i),La(e));case 5:return _d(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=wi(u),y=wi(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const E=Ce(m[_],y[_]);if(E!==0)return E}return Ce(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ce(it(u.latitude),it(h.latitude));return m!==0?m:Ce(it(u.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Ng(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,y,_,E;const k=u.fields||{},b=h.fields||{},B=(m=k[qu])===null||m===void 0?void 0:m.arrayValue,Q=(y=b[qu])===null||y===void 0?void 0:y.arrayValue,Y=Ce(((_=B==null?void 0:B.values)===null||_===void 0?void 0:_.length)||0,((E=Q==null?void 0:Q.values)===null||E===void 0?void 0:E.length)||0);return Y!==0?Y:Ng(B,Q)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===_u.mapValue&&h===_u.mapValue)return 0;if(u===_u.mapValue)return 1;if(h===_u.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let k=0;k<y.length&&k<E.length;++k){const b=_d(y[k],E[k]);if(b!==0)return b;const B=yo(m[y[k]],_[E[k]]);if(B!==0)return B}return Ce(y.length,E.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function xg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=_i(i),s=_i(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function Ng(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function vo(i){return wd(i)}function wd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=_i(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return wi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return pe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=wd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${wd(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function Nu(i){switch(Ei(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(i);return e?16+Nu(e):16;case 5:return 2*i.stringValue.length;case 6:return wi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Nu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ls(s.fields,((u,h)=>{o+=u.length+Nu(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function Ed(i){return!!i&&"integerValue"in i}function Jd(i){return!!i&&"arrayValue"in i}function bg(i){return!!i&&"nullValue"in i}function Dg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function bu(i){return!!i&&"mapValue"in i}function C1(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cv])===null||t===void 0?void 0:t.stringValue)===Rv}function Pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ls(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function R1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===k1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!bu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());bu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];bu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ls(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new wn(Pa(this.value))}}function Pv(i){const e=[];return ls(i.fields,((t,s)=>{const o=new Nt([t]);if(bu(s)){const u=Pv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,Se.min(),Se.min(),Se.min(),wn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,Se.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Se.min(),Se.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Se.min(),Se.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.position=e,this.inclusive=t}}function Vg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Og(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!sr(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t="asc"){this.field=e,this.dir=t}}function P1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{}class gt extends xv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new N1(e,t,s):t==="array-contains"?new V1(e,s):t==="in"?new O1(e,s):t==="not-in"?new L1(e,s):t==="array-contains-any"?new M1(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new b1(e,s):new D1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends xv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new or(e,t)}matches(e){return Nv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Nv(i){return i.op==="and"}function bv(i){return x1(i)&&Nv(i)}function x1(i){for(const e of i.filters)if(e instanceof or)return!1;return!0}function Td(i){if(i instanceof gt)return i.field.canonicalString()+i.op.toString()+vo(i.value);if(bv(i))return i.filters.map((e=>Td(e))).join(",");{const e=i.filters.map((t=>Td(t))).join(",");return`${i.op}(${e})`}}function Dv(i,e){return i instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(i,e):i instanceof or?(function(s,o){return o instanceof or&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Dv(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function Vv(i){return i instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${vo(t.value)}`})(i):i instanceof or?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vv).join(" ,")+"}"})(i):"Filter"}class N1 extends gt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class b1 extends gt{constructor(e,t){super(e,"in",t),this.keys=Ov("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class D1 extends gt{constructor(e,t){super(e,"not-in",t),this.keys=Ov("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ov(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class V1 extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jd(t)&&Fa(t.arrayValue,this.value)}}class O1 extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fa(this.value.arrayValue,t)}}class L1 extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fa(this.value.arrayValue,t)}}class M1 extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Fa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Lg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new F1(i,e,t,s,o,u,h)}function Zd(i){const e=Ae(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Td(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>vo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>vo(s))).join(",")),e.Pe=t}return e.Pe}function ef(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!P1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Dv(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Og(i.startAt,e.startAt)&&Og(i.endAt,e.endAt)}function Id(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function U1(i,e,t,s,o,u,h,m){return new lc(i,e,t,s,o,u,h,m)}function tf(i){return new lc(i)}function Mg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function j1(i){return i.collectionGroup!==null}function xa(i){const e=Ae(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Nt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Ku(u,s))})),t.has(Nt.keyField().canonicalString())||e.Te.push(new Ku(Nt.keyField(),s))}return e.Te}function er(i){const e=Ae(i);return e.Ie||(e.Ie=z1(e,xa(i))),e.Ie}function z1(i,e){if(i.limitType==="F")return Lg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ku(o.field,u)}));const t=i.endAt?new Gu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Gu(i.startAt.position,i.startAt.inclusive):null;return Lg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Sd(i,e,t){return new lc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function uc(i,e){return ef(er(i),er(e))&&i.limitType===e.limitType}function Lv(i){return`${Zd(er(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Vv(o))).join(", ")}]`),oc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>vo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>vo(o))).join(",")),`Target(${s})`})(er(i))}; limitType=${i.limitType})`}function cc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of xa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=Vg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,xa(s),o)||s.endAt&&!(function(h,m,y){const _=Vg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,xa(s),o))})(i,e)}function B1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Mv(i){return(e,t)=>{let s=!1;for(const o of xa(i)){const u=$1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function $1(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?yo(y,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Ev(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new et(pe.comparator);function Dr(){return H1}const Fv=new et(pe.comparator);function Sa(...i){let e=Fv;for(const t of i)e=e.insert(t.key,t);return e}function Uv(i){let e=Fv;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Zi(){return Na()}function jv(){return Na()}function Na(){return new us((i=>i.toString()),((i,e)=>i.isEqual(e)))}const W1=new et(pe.comparator),q1=new vt(pe.comparator);function Ne(...i){let e=q1;for(const t of i)e=e.add(t);return e}const G1=new vt(Ce);function K1(){return G1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function zv(i){return{integerValue:""+i}}function Q1(i,e){return E1(e)?zv(e):nf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function X1(i,e,t){return i instanceof Qu?(function(o,u){const h={fields:{[Sv]:{stringValue:Iv},[kv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Yd(u)&&(u=ac(u)),u&&(h.fields[Av]=u),{mapValue:h}})(t,e):i instanceof Ua?$v(i,e):i instanceof ja?Hv(i,e):(function(o,u){const h=Bv(o,u),m=Fg(h)+Fg(o.Ee);return Ed(h)&&Ed(o.Ee)?zv(m):nf(o.serializer,m)})(i,e)}function Y1(i,e,t){return i instanceof Ua?$v(i,e):i instanceof ja?Hv(i,e):t}function Bv(i,e){return i instanceof Xu?(function(s){return Ed(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Qu extends hc{}class Ua extends hc{constructor(e){super(),this.elements=e}}function $v(i,e){const t=Wv(e);for(const s of i.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ja extends hc{constructor(e){super(),this.elements=e}}function Hv(i,e){let t=Wv(e);for(const s of i.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class Xu extends hc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Fg(i){return it(i.integerValue||i.doubleValue)}function Wv(i){return Jd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function J1(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ua&&o instanceof Ua||s instanceof ja&&o instanceof ja?go(s.elements,o.elements,sr):s instanceof Xu&&o instanceof Xu?sr(s.Ee,o.Ee):s instanceof Qu&&o instanceof Qu})(i.transform,e.transform)}class Z1{constructor(e,t){this.version=e,this.transformResults=t}}class tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Du(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class dc{}function qv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new rf(i.key,tr.none()):new Xa(i.key,i.data,tr.none());{const t=i.data,s=wn.empty();let o=new vt(Nt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new cs(i.key,s,new Un(o.toArray()),tr.none())}}function eS(i,e,t){i instanceof Xa?(function(o,u,h){const m=o.value.clone(),y=jg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof cs?(function(o,u,h){if(!Du(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=jg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(Gv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ba(i,e,t,s){return i instanceof Xa?(function(u,h,m,y){if(!Du(u.precondition,h))return m;const _=u.value.clone(),E=zg(u.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof cs?(function(u,h,m,y){if(!Du(u.precondition,h))return m;const _=zg(u.fieldTransforms,y,h),E=h.data;return E.setAll(Gv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((k=>k.field)))})(i,e,t,s):(function(u,h,m){return Du(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function tS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Bv(s.transform,o||null);u!=null&&(t===null&&(t=wn.empty()),t.set(s.field,u))}return t||null}function Ug(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>J1(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Xa extends dc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class cs extends dc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Gv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function jg(i,e,t){const s=new Map;Ue(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Y1(h,m,t[o]))}return s}function zg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,X1(u,h,e))}return s}class rf extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nS extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&eS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=jv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=qv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>Ug(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>Ug(t,s)))}}class sf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return W1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new sf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,Ve;function oS(i){switch(i){case G.OK:return _e(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function Kv(i){if(i===void 0)return br("GRPC error has no .code"),G.UNKNOWN;switch(i){case at.OK:return G.OK;case at.CANCELLED:return G.CANCELLED;case at.UNKNOWN:return G.UNKNOWN;case at.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case at.INTERNAL:return G.INTERNAL;case at.UNAVAILABLE:return G.UNAVAILABLE;case at.UNAUTHENTICATED:return G.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case at.NOT_FOUND:return G.NOT_FOUND;case at.ALREADY_EXISTS:return G.ALREADY_EXISTS;case at.PERMISSION_DENIED:return G.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case at.ABORTED:return G.ABORTED;case at.OUT_OF_RANGE:return G.OUT_OF_RANGE;case at.UNIMPLEMENTED:return G.UNIMPLEMENTED;case at.DATA_LOSS:return G.DATA_LOSS;default:return _e(39323,{code:i})}}(Ve=at||(at={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new mi([4294967295,4294967295],0);function Bg(i){const e=yv().encode(i),t=new uv;return t.update(e),new Uint8Array(t.digest())}function $g(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new mi([t,s],0),new mi([o,u],0)]}class of{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Aa(`Invalid padding: ${t}`);if(s<0)throw new Aa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=mi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(mi.fromNumber(s)));return o.compare(aS)===1&&(o=new mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Bg(e),[s,o]=$g(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new of(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=Bg(e),[s,o]=$g(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fc(Se.min(),o,new et(Ce),Dr(),Ne())}}class Ya{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Qv{constructor(e,t){this.targetId=e,this.De=t}}class Xv{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Hg{constructor(){this.ve=0,this.Ce=Wg(),this.Fe=bt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),s=Ne();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new Ya(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Wg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class lS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Dr(),this.je=wu(),this.Je=wu(),this.He=new et(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Id(u))if(s===0){const h=new pe(u.path);this.Xe(t,h,Ut.newNoDocument(h,Se.min()))}else Ue(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),y=m?this.ut(m,e,h):1;if(y!==0){this.rt(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=wi(s).toUint8Array()}catch(y){if(y instanceof Tv)return yi("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new of(h,o,u)}catch(y){return yi(y instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Id(m.target)){const y=new pe(m.target.path);this.Tt(y).has(h)||this.It(h,y)||this.Xe(h,y,Ut.newNoDocument(y,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Ne();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.st(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new fc(e,t,this.He,this.ze,s);return this.ze=Dr(),this.je=wu(),this.Je=wu(),this.He=new et(Ce),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Hg,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new vt(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new vt(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Hg),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function wu(){return new et(pe.comparator)}function Wg(){return new et(pe.comparator)}const uS={asc:"ASCENDING",desc:"DESCENDING"},cS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hS={and:"AND",or:"OR"};class dS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ad(i,e){return i.useProto3Json||oc(e)?e:{value:e}}function Yu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function fS(i,e){return Yu(i,e.toTimestamp())}function nr(i){return Ue(!!i,49232),Se.fromTimestamp((function(t){const s=_i(t);return new Ke(s.seconds,s.nanos)})(i))}function af(i,e){return kd(i,e).canonicalString()}function kd(i,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Jv(i){const e=Ge.fromString(i);return Ue(r_(e),10190,{key:e.toString()}),e}function Cd(i,e){return af(i.databaseId,e.path)}function sd(i,e){const t=Jv(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(e_(t))}function Zv(i,e){return af(i.databaseId,e)}function pS(i){const e=Jv(i);return e.length===4?Ge.emptyPath():e_(e)}function Rd(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function e_(i){return Ue(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function qg(i,e,t){return{name:Cd(i,e),fields:t.value.mapValue.fields}}function mS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(Ue(E===void 0||typeof E=="string",58123),bt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),bt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?G.UNKNOWN:Kv(_.code);return new ce(E,_.message||"")})(h);t=new Xv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=sd(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Se.min(),m=new wn({mapValue:{fields:s.document.fields}}),y=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Vu(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=sd(i,s.document),u=s.readTime?nr(s.readTime):Se.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Vu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=sd(i,s.document),u=s.removedTargetIds||[];t=new Vu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new sS(o,u),m=s.targetId;t=new Qv(m,h)}}return t}function gS(i,e){let t;if(e instanceof Xa)t={update:qg(i,e.key,e.value)};else if(e instanceof rf)t={delete:Cd(i,e.key)};else if(e instanceof cs)t={update:qg(i,e.key,e.data),updateMask:AS(e.fieldMask)};else{if(!(e instanceof nS))return _e(16599,{Rt:e.type});t={verify:Cd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Xu)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:fS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function yS(i,e){return i&&i.length>0?(Ue(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Se.min())&&(h=nr(u)),new Z1(h,o.transformResults||[])})(t,e)))):[]}function vS(i,e){return{documents:[Zv(i,e.path)]}}function _S(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Zv(i,o);const u=(function(_){if(_.length!==0)return n_(or.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(b){return{field:oo(b.field),direction:TS(b.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ad(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function wS(i){let e=pS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(k){const b=t_(k);return b instanceof or&&bv(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((b=>(function(Q){return new Ku(ao(Q.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(k){let b;return b=typeof k=="object"?k.value:k,oc(b)?null:b})(t.limit));let y=null;t.startAt&&(y=(function(k){const b=!!k.before,B=k.values||[];return new Gu(B,b)})(t.startAt));let _=null;return t.endAt&&(_=(function(k){const b=!k.before,B=k.values||[];return new Gu(B,b)})(t.endAt)),U1(e,o,h,u,m,"F",y,_)}function ES(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function t_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return gt.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return or.create(t.compositeFilter.filters.map((s=>t_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function TS(i){return uS[i]}function IS(i){return cS[i]}function SS(i){return hS[i]}function oo(i){return{fieldPath:i.canonicalString()}}function ao(i){return Nt.fromServerFormat(i.fieldPath)}function n_(i){return i instanceof gt?(function(t){if(t.op==="=="){if(Dg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(bg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(bg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:IS(t.op),value:t.value}}})(i):i instanceof or?(function(t){const s=t.getFilters().map((o=>n_(o)));return s.length===1?s[0]:{compositeFilter:{op:SS(t.op),filters:s}}})(i):_e(54877,{filter:i})}function AS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function r_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,s,o,u=Se.min(),h=Se.min(),m=bt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.gt=e}}function CS(i){const e=wS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.Dn=new PS}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(vi.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class PS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},i_=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(i_,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new _o(0)}static ur(){return new _o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="LruGarbageCollector",xS=1048576;function Qg([i,e],[t,s]){const o=Ce(i,t);return o===0?Ce(e,s):o}class NS{constructor(e){this.Tr=e,this.buffer=new vt(Qg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Qg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(Kg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?re(Kg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Rr(3e5)}))}}class DS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(sc.ue);const s=new NS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Gg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o)))).next((k=>(s=k,m=Date.now(),this.removeTargets(e,s,t)))).next((k=>(u=k,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((k=>(_=Date.now(),io()<=xe.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${k} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k}))))}}function VS(i,e){return new DS(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.changes=new us((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ba(s.mutation,o,Un.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ne()){const o=Zi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Sa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Zi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ne())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Dr();const h=Na(),m=(function(){return Na()})();return t.forEach(((y,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof cs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),ba(E.mutation,_,E.mutation.getFieldMask(),Ke.now())):h.set(_.key,Un.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var k;return m.set(_,new LS(E,(k=h.get(_))!==null&&k!==void 0?k:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new et(((h,m)=>h-m)),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let E=s.get(y)||Un.empty();E=m.applyToLocalView(_,E),s.set(y,E);const k=(o.get(m.batchId)||Ne()).add(y);o=o.insert(m.batchId,k)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,E=y.value,k=jv();E.forEach((b=>{if(!u.has(b)){const B=qv(t.get(b),s.get(b));B!==null&&k.set(b,B),u=u.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,k))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):j1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(Zi());let m=Oa,y=u;return h.next((_=>H.forEach(_,((E,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((b=>{y=y.insert(E,b)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Ne()))).next((E=>({batchId:m,changes:Uv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Sa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Sa();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(y=>{const _=(function(k,b){return new lc(b,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((k,b)=>{h=h.insert(k,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))}));let m=Sa();return h.forEach(((y,_)=>{const E=u.get(y);E!==void 0&&ba(E.mutation,_,Un.empty(),Ke.now()),cc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:CS(o.bundledQuery),readTime:nr(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.overlays=new et(pe.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Zi();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=Zi(),u=t.length+1,h=new pe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Zi(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=Zi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return H.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new iS(t,s));let u=this.kr.get(t);u===void 0&&(u=Ne(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.qr=new vt(At.Qr),this.$r=new vt(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new pe(new Ge([])),s=new At(t,e),o=new At(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new Ge([])),s=new At(t,e),o=new At(t,e+1);let u=Ne();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new vt(At.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new rS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new At(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Xd:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Ce);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const h=new At(new pe(u),0);let m=new vt(Ce);return this.Yr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Hr)),!0)}),h),H.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new At(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.ni=e,this.docs=(function(){return new et(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Dr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Dr();const h=t.path,m=new pe(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||y1(g1(E),s)<=0||(o.has(E.key)||cc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new $S(this)}getSize(e){return H.resolve(this.size)}}class $S extends OS{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.persistence=e,this.ii=new us((t=>Zd(t)),ef),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.si=0,this.oi=new lf,this.targetCount=0,this._i=_o.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new _o(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.ai={},this.overlays={},this.ui=new sc(0),this.ci=!1,this.ci=!0,this.li=new jS,this.referenceDelegate=e(this),this.hi=new HS(this),this.indexManager=new RS,this.remoteDocumentCache=(function(o){return new BS(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new kS(t),this.Ti=new FS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new US,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new zS(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new WS(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class WS extends _1{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.Ai=new lf,this.Ri=null}static Vi(e){return new uf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=pe.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ju{constructor(e,t){this.persistence=e,this.gi=new us((s=>T1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=VS(this,t)}static Vi(e,t){return new Ju(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Se.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nu(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ne(),o=Ne();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Fw()?8:w1(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new qS;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(io()<=xe.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(io()<=xe.DEBUG&&re("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(io()<=xe.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):H.resolve())}ps(e,t){if(Mg(t))return H.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Sd(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ne(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.bs(t,m);return this.Ds(t,_,h,y.readTime)?this.ps(e,Sd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ys(e,t,s,o){return Mg(t)||o.isEqual(Se.min())?H.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?H.resolve(null):(io()<=xe.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.vs(e,h,t,m1(o,Oa)).next((m=>m)))}))}bs(e,t){let s=new vt(Mv(e));return t.forEach(((o,u)=>{cc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return io()<=xe.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",so(t)),this.gs.getDocumentsMatchingQuery(e,t,vi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="LocalStore",KS=3e8;class QS{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ce),this.Ms=new us((u=>Zd(u)),ef),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function XS(i,e,t,s){return new QS(i,e,t,s)}async function o_(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ne();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function YS(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,E){const k=_.batch,b=k.keys();let B=H.resolve();return b.forEach((Q=>{B=B.next((()=>E.getEntry(y,Q))).next((Y=>{const W=_.docVersions.get(Q);Ue(W!==null,48541),Y.version.compareTo(W)<0&&(k.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),E.addEntry(Y)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,k)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ne();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function a_(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function JS(i,e){const t=Ae(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((E,k)=>{const b=o.get(k);if(!b)return;m.push(t.hi.removeMatchingKeys(u,E.removedDocuments,k).next((()=>t.hi.addMatchingKeys(u,E.addedDocuments,k))));let B=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?B=B.withResumeToken(bt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(k,B),(function(Y,W,we){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=KS?!0:we.addedDocuments.size+we.modifiedDocuments.size+we.removedDocuments.size>0})(b,B,E)&&m.push(t.hi.updateTargetData(u,B))}));let y=Dr(),_=Ne();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(ZS(u,h,e.documentUpdates).next((E=>{y=E.Ls,_=E.ks}))),!s.isEqual(Se.min())){const E=t.hi.getLastRemoteSnapshotVersion(u).next((k=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Fs=o,u)))}function ZS(i,e,t){let s=Ne(),o=Ne();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Dr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Se.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):re(hf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{Ls:h,ks:o}}))}function eA(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Xd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function tA(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new hi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Pd(i,e,t){const s=Ae(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;re(hf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Xg(i,e,t){const s=Ae(i);let o=Se.min(),u=Ne();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,E){const k=Ae(y),b=k.Ms.get(E);return b!==void 0?H.resolve(k.Fs.get(b)):k.hi.getTargetData(_,E)})(s,h,er(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?u:Ne()))).next((m=>(nA(s,B1(e),m),{documents:m,qs:u})))))}function nA(i,e,t){let s=i.xs.get(e)||Se.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class Yg{constructor(){this.activeTargetIds=K1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rA{constructor(){this.Fo=new Yg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Yg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="ConnectivityMonitor";class Zg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(Jg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(Jg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu=null;function xd(){return Eu===null?Eu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Eu++,"0x"+Eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="RestConnection",sA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Wu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=xd(),m=this.Go(e,t.toUriEncodedString());re(od,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,o,u);const{host:_}=new URL(m),E=Eo(_);return this.jo(e,m,y,s,E).then((k=>(re(od,`Received RPC '${e}' ${h}: `,k),k)),(k=>{throw yi(od,`RPC '${e}' ${h} failed with error: `,k,"url: ",m,"request:",s),k}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=sA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class lA extends oA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=xd();return new Promise(((m,y)=>{const _=new cv;_.setWithCredentials(!0),_.listenOnce(hv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case xu.NO_ERROR:const k=_.getResponseJson();re(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(k)),m(k);break;case xu.TIMEOUT:re(Mt,`RPC '${e}' ${h} timed out`),y(new ce(G.DEADLINE_EXCEEDED,"Request time out"));break;case xu.HTTP_ERROR:const b=_.getStatus();if(re(Mt,`RPC '${e}' ${h} failed with status:`,b,"response text:",_.getResponseText()),b>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const Q=B==null?void 0:B.error;if(Q&&Q.status&&Q.message){const Y=(function(we){const fe=we.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(fe)>=0?fe:G.UNKNOWN})(Q.status);y(new ce(Y,Q.message))}else y(new ce(G.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ce(G.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{re(Mt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);re(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=xd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=pv(),m=fv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");re(Mt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const k=h.createWebChannel(E,y);this.T_(k);let b=!1,B=!1;const Q=new aA({Ho:W=>{B?re(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(b||(re(Mt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),b=!0),re(Mt,`RPC '${e}' stream ${o} sending:`,W),k.send(W))},Yo:()=>k.close()}),Y=(W,we,fe)=>{W.listen(we,(me=>{try{fe(me)}catch(Ie){setTimeout((()=>{throw Ie}),0)}}))};return Y(k,Ia.EventType.OPEN,(()=>{B||(re(Mt,`RPC '${e}' stream ${o} transport opened.`),Q.s_())})),Y(k,Ia.EventType.CLOSE,(()=>{B||(B=!0,re(Mt,`RPC '${e}' stream ${o} transport closed`),Q.__(),this.I_(k))})),Y(k,Ia.EventType.ERROR,(W=>{B||(B=!0,yi(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Q.__(new ce(G.UNAVAILABLE,"The operation could not be completed")))})),Y(k,Ia.EventType.MESSAGE,(W=>{var we;if(!B){const fe=W.data[0];Ue(!!fe,16349);const me=fe,Ie=(me==null?void 0:me.error)||((we=me[0])===null||we===void 0?void 0:we.error);if(Ie){re(Mt,`RPC '${e}' stream ${o} received error:`,Ie);const je=Ie.status;let ke=(function(A){const P=at[A];if(P!==void 0)return Kv(P)})(je),N=Ie.message;ke===void 0&&(ke=G.INTERNAL,N="Unknown error status: "+je+" with message "+Ie.message),B=!0,Q.__(new ce(ke,N)),k.close()}else re(Mt,`RPC '${e}' stream ${o} received:`,fe),Q.a_(fe)}})),Y(m,dv.STAT_EVENT,(W=>{W.stat===vd.PROXY?re(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===vd.NOPROXY&&re(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Q.o_()}),0),Q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(i){return new dS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="PersistentStream";class u_{constructor(e,t,s,o,u,h,m,y){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new l_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ce(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(ey,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(ey,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uA extends u_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=mS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Se.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?nr(h.readTime):Se.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Rd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Id(y)?{documents:vS(u,y)}:{query:_S(u,y).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Yv(u,h.resumeToken);const _=Ad(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Se.min())>0){m.readTime=Yu(u,h.snapshotVersion.toTimestamp());const _=Ad(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=ES(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Rd(this.serializer),t.removeTarget=e,this.k_(t)}}class cA extends u_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=yS(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Rd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>gS(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{}class dA extends hA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,kd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(G.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,kd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(G.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class fA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(br(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="RemoteStore";class pA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{hs(this)&&(re(as,"Restarting streams for network reachability change."),await(async function(y){const _=Ae(y);_.Ia.add(4),await Ja(_),_.Aa.set("Unknown"),_.Ia.delete(4),await mc(_)})(this))}))})),this.Aa=new fA(s,o)}}async function mc(i){if(hs(i))for(const e of i.da)await e(!0)}async function Ja(i){for(const e of i.da)await e(!1)}function c_(i,e){const t=Ae(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),mf(t)?pf(t):Co(t).x_()&&ff(t,e))}function df(i,e){const t=Ae(i),s=Co(t);t.Ta.delete(e),s.x_()&&h_(t,e),t.Ta.size===0&&(s.x_()?s.B_():hs(t)&&t.Aa.set("Unknown"))}function ff(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).H_(e)}function h_(i,e){i.Ra.$e(e),Co(i).Y_(e)}function pf(i){i.Ra=new lS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Aa.aa()}function mf(i){return hs(i)&&!Co(i).M_()&&i.Ta.size>0}function hs(i){return Ae(i).Ia.size===0}function d_(i){i.Ra=void 0}async function mA(i){i.Aa.set("Online")}async function gA(i){i.Ta.forEach(((e,t)=>{ff(i,e)}))}async function yA(i,e){d_(i),mf(i)?(i.Aa.la(e),pf(i)):i.Aa.set("Unknown")}async function vA(i,e,t){if(i.Aa.set("Online"),e instanceof Xv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){re(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zu(i,s)}else if(e instanceof Vu?i.Ra.Ye(e):e instanceof Qv?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Se.min()))try{const s=await a_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ta.get(_);E&&u.Ta.set(_,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const E=u.Ta.get(y);if(!E)return;u.Ta.set(y,E.withResumeToken(bt.EMPTY_BYTE_STRING,E.snapshotVersion)),h_(u,y);const k=new hi(E.target,y,_,E.sequenceNumber);ff(u,k)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){re(as,"Failed to raise snapshot:",s),await Zu(i,s)}}async function Zu(i,e,t){if(!ko(e))throw e;i.Ia.add(1),await Ja(i),i.Aa.set("Offline"),t||(t=()=>a_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{re(as,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await mc(i)}))}function f_(i,e){return e().catch((t=>Zu(i,t,e)))}async function gc(i){const e=Ae(i),t=Ti(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xd;for(;_A(e);)try{const o=await eA(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,wA(e,o)}catch(o){await Zu(e,o)}p_(e)&&m_(e)}function _A(i){return hs(i)&&i.Pa.length<10}function wA(i,e){i.Pa.push(e);const t=Ti(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function p_(i){return hs(i)&&!Ti(i).M_()&&i.Pa.length>0}function m_(i){Ti(i).start()}async function EA(i){Ti(i).na()}async function TA(i){const e=Ti(i);for(const t of i.Pa)e.X_(t.mutations)}async function IA(i,e,t){const s=i.Pa.shift(),o=sf.from(s,e,t);await f_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await gc(i)}async function SA(i,e){e&&Ti(i).Z_&&await(async function(s,o){if((function(h){return oS(h)&&h!==G.ABORTED})(o.code)){const u=s.Pa.shift();Ti(s).N_(),await f_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await gc(s)}})(i,e),p_(i)&&m_(i)}async function ty(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),re(as,"RemoteStore received new credentials");const s=hs(t);t.Ia.add(3),await Ja(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await mc(t)}async function AA(i,e){const t=Ae(i);e?(t.Ia.delete(2),await mc(t)):e||(t.Ia.add(2),await Ja(t),t.Aa.set("Unknown"))}function Co(i){return i.Va||(i.Va=(function(t,s,o){const u=Ae(t);return u.ia(),new uA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:mA.bind(null,i),e_:gA.bind(null,i),n_:yA.bind(null,i),J_:vA.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),mf(i)?pf(i):i.Aa.set("Unknown")):(await i.Va.stop(),d_(i))}))),i.Va}function Ti(i){return i.ma||(i.ma=(function(t,s,o){const u=Ae(t);return u.ia(),new cA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:EA.bind(null,i),n_:SA.bind(null,i),ea:TA.bind(null,i),ta:IA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await gc(i)):(await i.ma.stop(),i.Pa.length>0&&(re(as,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new gf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(i,e){if(br("AsyncQueue",`${e}: ${i}`),ko(i))return new ce(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static emptySet(e){return new fo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Sa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new fo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.fa=new et(pe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class wo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new wo(e,t,fo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class CA{constructor(){this.queries=ry(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ae(t),u=o.queries;o.queries=ry(),u.forEach(((h,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new ce(G.ABORTED,"Firestore shutting down"))}}function ry(){return new us((i=>Lv(i)),uc)}async function RA(i,e){const t=Ae(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new kA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=yf(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&vf(t)}async function PA(i,e){const t=Ae(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function xA(i,e){const t=Ae(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&vf(t)}function NA(i,e,t){const s=Ae(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function vf(i){i.Da.forEach((e=>{e.next()}))}var Nd,iy;(iy=Nd||(Nd={})).Fa="default",iy.Cache="cache";class bA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Nd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.key=e}}class y_{constructor(e){this.key=e}}class DA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=Mv(e),this.eu=new fo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ny,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,k)=>{const b=o.get(E),B=cc(this.query,k)?k:null,Q=!!b&&this.mutatedKeys.has(b.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;b&&B?b.data.isEqual(B.data)?Q!==Y&&(s.track({type:3,doc:B}),W=!0):this.iu(b,B)||(s.track({type:2,doc:B}),W=!0,(y&&this.Xa(B,y)>0||_&&this.Xa(B,_)<0)&&(m=!0)):!b&&B?(s.track({type:0,doc:B}),W=!0):b&&!B&&(s.track({type:1,doc:b}),W=!0,(y||_)&&(m=!0)),W&&(B?(h=h.add(B),u=Y?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,k)=>(function(B,Q){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:W})}};return Y(B)-Y(Q)})(E.type,k.type)||this.Xa(E.doc,k.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],y=this.Za.size===0&&this.current&&!o?1:0,_=y!==this.Ya;return this.Ya=y,h.length!==0||_?{snapshot:new wo(this.query,e.eu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ny,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new y_(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new g_(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return wo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const _f="SyncEngine";class VA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class OA{constructor(e){this.key=e,this.lu=!1}}class LA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new us((m=>Lv(m)),uc),this.Tu=new Map,this.Iu=new Set,this.du=new et(pe.comparator),this.Eu=new Map,this.Au=new lf,this.Ru={},this.Vu=new Map,this.mu=_o.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function MA(i,e,t=!0){const s=I_(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await v_(s,e,t,!0),o}async function FA(i,e){const t=I_(i);await v_(t,e,!0,!1)}async function v_(i,e,t,s){const o=await tA(i.localStore,er(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await UA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&c_(i.remoteStore,o),m}async function UA(i,e,t,s,o){i.gu=(k,b,B)=>(async function(Y,W,we,fe){let me=W.view.nu(we);me.Ds&&(me=await Xg(Y.localStore,W.query,!1).then((({documents:N})=>W.view.nu(N,me))));const Ie=fe&&fe.targetChanges.get(W.targetId),je=fe&&fe.targetMismatches.get(W.targetId)!=null,ke=W.view.applyChanges(me,Y.isPrimaryClient,Ie,je);return oy(Y,W.targetId,ke._u),ke.snapshot})(i,k,b,B);const u=await Xg(i.localStore,e,!0),h=new DA(e,u.qs),m=h.nu(u.documents),y=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);oy(i,t,_._u);const E=new VA(e,t,h);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),_.snapshot}async function jA(i,e,t){const s=Ae(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!uc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Pd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&df(s.remoteStore,o.targetId),bd(s,o.targetId)})).catch(Ao)):(bd(s,o.targetId),await Pd(s.localStore,o.targetId,!0))}async function zA(i,e){const t=Ae(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),df(t.remoteStore,s.targetId))}async function BA(i,e,t){const s=QA(i);try{const o=await(function(h,m){const y=Ae(h),_=Ke.now(),E=m.reduce(((B,Q)=>B.add(Q.key)),Ne());let k,b;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Q=Dr(),Y=Ne();return y.Os.getEntries(B,E).next((W=>{Q=W,Q.forEach(((we,fe)=>{fe.isValidDocument()||(Y=Y.add(we))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,Q))).next((W=>{k=W;const we=[];for(const fe of m){const me=tS(fe,k.get(fe.key).overlayedDocument);me!=null&&we.push(new cs(fe.key,me,Pv(me.value.mapValue),tr.exists(!0)))}return y.mutationQueue.addMutationBatch(B,_,we,m)})).next((W=>{b=W;const we=W.applyToLocalDocumentSet(k,Y);return y.documentOverlayCache.saveOverlays(B,W.batchId,we)}))})).then((()=>({batchId:b.batchId,changes:Uv(k)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Ce)),_=_.insert(m,y),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await Za(s,o.changes),await gc(s.remoteStore)}catch(o){const u=yf(o,"Failed to persist write");t.reject(u)}}async function __(i,e){const t=Ae(i);try{const s=await JS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ue(h.lu,14607):o.removedDocuments.size>0&&(Ue(h.lu,42227),h.lu=!1))})),await Za(t,s,e)}catch(s){await Ao(s)}}function sy(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Ae(h);y.onlineState=m;let _=!1;y.queries.forEach(((E,k)=>{for(const b of k.wa)b.va(m)&&(_=!0)})),_&&vf(y)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $A(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new et(pe.comparator);h=h.insert(u,Ut.newNoDocument(u,Se.min()));const m=Ne().add(u),y=new fc(Se.min(),new Map,new et(Ce),h,m);await __(s,y),s.du=s.du.remove(u),s.Eu.delete(e),wf(s)}else await Pd(s.localStore,e,!1).then((()=>bd(s,e,t))).catch(Ao)}async function HA(i,e){const t=Ae(i),s=e.batch.batchId;try{const o=await YS(t.localStore,e);E_(t,s,null),w_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await Ao(o)}}async function WA(i,e,t){const s=Ae(i);try{const o=await(function(h,m){const y=Ae(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,m).next((k=>(Ue(k!==null,37113),E=k.keys(),y.mutationQueue.removeMutationBatch(_,k)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);E_(s,e,t),w_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await Ao(o)}}function w_(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function E_(i,e,t){const s=Ae(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function bd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||T_(i,s)}))}function T_(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(df(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),wf(i))}function oy(i,e,t){for(const s of t)s instanceof g_?(i.Au.addReference(s.key,e),qA(i,s)):s instanceof y_?(re(_f,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||T_(i,s.key)):_e(19791,{yu:s})}function qA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(re(_f,"New document in limbo: "+t),i.Iu.add(s),wf(i))}function wf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new pe(Ge.fromString(e)),s=i.mu.next();i.Eu.set(s,new OA(t)),i.du=i.du.insert(t,s),c_(i.remoteStore,new hi(er(tf(t.path)),s,"TargetPurposeLimboResolution",sc.ue))}}async function Za(i,e,t){const s=Ae(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{h.push(s.gu(y,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const k=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,k?"current":"not-current")}if(_){o.push(_);const k=cf.Es(y.targetId,_);u.push(k)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(y,_){const E=Ae(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>H.forEach(_,(b=>H.forEach(b.Is,(B=>E.persistence.referenceDelegate.addReference(k,b.targetId,B))).next((()=>H.forEach(b.ds,(B=>E.persistence.referenceDelegate.removeReference(k,b.targetId,B)))))))))}catch(k){if(!ko(k))throw k;re(hf,"Failed to update sequence numbers: "+k)}for(const k of _){const b=k.targetId;if(!k.fromCache){const B=E.Fs.get(b),Q=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(Q);E.Fs=E.Fs.insert(b,Y)}}})(s.localStore,u))}async function GA(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){re(_f,"User change. New user:",e.toKey());const s=await o_(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((y=>{y.reject(new ce(G.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Bs)}}function KA(i,e){const t=Ae(i),s=t.Eu.get(e);if(s&&s.lu)return Ne().add(s.key);{let o=Ne();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function I_(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=__.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$A.bind(null,e),e.hu.J_=xA.bind(null,e.eventManager),e.hu.pu=NA.bind(null,e.eventManager),e}function QA(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WA.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return XS(this.persistence,new GS,e.initialUser,this.serializer)}Du(e){return new s_(uf.Vi,this.serializer)}bu(e){return new rA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class XA extends ec{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ue(this.persistence.referenceDelegate instanceof Ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new bS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new s_((s=>Ju.Vi(s,t)),this.serializer)}}class Dd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GA.bind(null,this.syncEngine),await AA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new CA})()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=(function(u){return new lA(u)})(e.databaseInfo);return(function(u,h,m,y){return new dA(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new pA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>sy(this.syncEngine,t,0)),(function(){return Zg.C()?new Zg:new iA})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,E){const k=new LA(o,u,h,m,y,_);return E&&(k.fu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ae(o);re(as,"RemoteStore shutting down."),u.Ia.add(5),await Ja(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Dd.provider={build:()=>new Dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="FirestoreClient";class JA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(Ii,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ii,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ld(i,e){i.asyncQueue.verifyOperationInProgress(),re(Ii,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await o_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{yi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{yi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function ay(i,e){i.asyncQueue.verifyOperationInProgress();const t=await ZA(i);re(Ii,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ty(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ty(e.remoteStore,o))),i._onlineComponents=e}async function ZA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){re(Ii,"Using user provided OfflineComponentProvider");try{await ld(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await ld(i,new ec)}}else re(Ii,"Using default OfflineComponentProvider"),await ld(i,new XA(void 0));return i._offlineComponents}async function S_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(re(Ii,"Using user provided OnlineComponentProvider"),await ay(i,i._uninitializedComponentsProvider._online)):(re(Ii,"Using default OnlineComponentProvider"),await ay(i,new Dd))),i._onlineComponents}function ek(i){return S_(i).then((e=>e.syncEngine))}async function ly(i){const e=await S_(i),t=e.eventManager;return t.onListen=MA.bind(null,e.syncEngine),t.onUnlisten=jA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firestore.googleapis.com",cy=!0;class hy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=k_,this.ssl=cy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:cy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=i_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xS)throw new ce(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new s1;switch(s.type){case"firstParty":return new u1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=uy.get(t);s&&(re("ComponentProvider","Removing Datastore"),uy.delete(t),s.terminate())})(this),Promise.resolve()}}function tk(i,e,t,s={}){var o;i=ts(i,yc);const u=Eo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(Sy(`https://${y}`),Ay("Firestore",!0)),h.host!==k_&&h.host!==y&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!rs(_,m)&&(i._setSettings(_),s.mockUserToken)){let E,k;if(typeof s.mockUserToken=="string")E=s.mockUserToken,k=Ft.MOCK_USER;else{E=Pw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ce(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Ft(b)}i._authCredentials=new o1(new gv(E,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vc(this.firestore,e,this._query)}}class yt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qa(t,yt._jsonSchema))return new yt(e,s||null,new pe(Ge.fromString(t.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:ut("string",yt._jsonSchemaVersion),referencePath:ut("string")};class gi extends vc{constructor(e,t,s){super(e,t,tf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new pe(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Tu(i,e,...t){if(i=ln(i),vv("collection","path",e),i instanceof yc){const s=Ge.fromString(e,...t);return Sg(s),new gi(i,null,s)}{if(!(i instanceof yt||i instanceof gi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Sg(s),new gi(i.firestore,null,s)}}function ud(i,e,...t){if(i=ln(i),arguments.length===1&&(e=Kd.newId()),vv("doc","path",e),i instanceof yc){const s=Ge.fromString(e,...t);return Ig(s),new yt(i,null,new pe(s))}{if(!(i instanceof yt||i instanceof gi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Ig(s),new yt(i.firestore,i instanceof gi?i.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="AsyncQueue";class fy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new l_(this,"async_queue_retry"),this.oc=()=>{const s=ad();s&&re(dy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new es;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ko(e))throw e;re(dy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,br("INTERNAL UNHANDLED ERROR: ",py(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=gf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:py(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function py(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class za extends yc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new fy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fy(e),this._firestoreClient=void 0,await e}}}function nk(i,e){const t=typeof i=="object"?i:Py(),s=typeof i=="string"?i:Wu,o=Md(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Cw("firestore");u&&tk(o,...u)}return o}function C_(i){if(i._terminated)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||rk(i),i._firestoreClient}function rk(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,y,_,E){return new A1(m,y,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,A_(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new JA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(bt.fromBase64String(e))}catch(t){throw new ce(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:ut("string",En._jsonSchemaVersion),bytes:ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:ut("string",rr._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ce(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:ut("string",ir._jsonSchemaVersion),vectorValues:ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=/^__.*__$/;class sk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}function P_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:i})}}class Tf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return tc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(P_(this.Ec)&&ik.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ok{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}Dc(e,t,s,o=!1){return new Tf({Ec:e,methodName:t,bc:s,path:Nt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ak(i){const e=i._freezeSettings(),t=pc(i._databaseId);return new ok(i._databaseId,!!e.ignoreUndefinedProperties,t)}function lk(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);D_("Data must be an object, but it was:",h,s);const m=N_(s,h);let y,_;if(u.merge)y=new Un(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const k of u.mergeFields){const b=uk(e,k,t);if(!h.contains(b))throw new ce(G.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);hk(E,b)||E.push(b)}y=new Un(E),_=h.fieldTransforms.filter((k=>y.covers(k.field)))}else y=null,_=h.fieldTransforms;return new sk(new wn(m),y,_)}function x_(i,e){if(b_(i=ln(i)))return D_("Unsupported field value:",e,i),N_(i,e);if(i instanceof R_)return(function(s,o){if(!P_(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=x_(m,o.yc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=ln(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Q1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ke.fromDate(s);return{timestampValue:Yu(o.serializer,u)}}if(s instanceof Ke){const u=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yu(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof En)return{bytesValue:Yv(o.serializer,s._byteString)};if(s instanceof yt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[Cv]:{stringValue:Rv},[qu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return nf(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Qd(s)}`)})(i,e)}function N_(i,e){const t={};return Ev(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(i,((s,o)=>{const u=x_(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function b_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ke||i instanceof rr||i instanceof En||i instanceof yt||i instanceof R_||i instanceof ir)}function D_(i,e,t){if(!b_(t)||!_v(t)){const s=Qd(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function uk(i,e,t){if((e=ln(e))instanceof Ef)return e._internalPath;if(typeof e=="string")return V_(i,e);throw tc("Field path arguments must be of type string or ",i,!1,void 0,t)}const ck=new RegExp("[~\\*/\\[\\]]");function V_(i,e,t){if(e.search(ck)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ef(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function tc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ce(G.INVALID_ARGUMENT,m+i+y)}function hk(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(L_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dk extends O_{data(){return super.data()}}function L_(i,e){return typeof e=="string"?V_(i,e):e instanceof Ef?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pk{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ls(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[qu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new ir(u)}convertGeoPoint(e){return new rr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ac(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=_i(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(r_(s),9688,{name:e});const o=new Ma(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||br(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends O_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ou(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(L_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ns._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:ut("string",ns._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Ou extends ns{data(e={}){return super.data(e)}}class po{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ka(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ou(this._firestore,this._userDataWriter,s.key,s,new ka(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Ou(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Ou(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:gk(m.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:ut("string",po._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class M_ extends pk{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function gy(i,e,t){i=ts(i,yt);const s=ts(i.firestore,za),o=mk(i.converter,e);return F_(s,[lk(ak(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,tr.none())])}function yk(i){return F_(ts(i.firestore,za),[new rf(i._key,tr.none())])}function vk(i,...e){var t,s,o;i=ln(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||my(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(my(e[h])){const k=e[h];e[h]=(t=k.next)===null||t===void 0?void 0:t.bind(k),e[h+1]=(s=k.error)===null||s===void 0?void 0:s.bind(k),e[h+2]=(o=k.complete)===null||o===void 0?void 0:o.bind(k)}let y,_,E;if(i instanceof yt)_=ts(i.firestore,za),E=tf(i._key.path),y={next:k=>{e[h]&&e[h](_k(_,i,k))},error:e[h+1],complete:e[h+2]};else{const k=ts(i,vc);_=ts(k.firestore,za),E=k._query;const b=new M_(_);y={next:B=>{e[h]&&e[h](new po(_,b,k,B))},error:e[h+1],complete:e[h+2]},fk(i._query)}return(function(b,B,Q,Y){const W=new YA(Y),we=new bA(B,W,Q);return b.asyncQueue.enqueueAndForget((async()=>RA(await ly(b),we))),()=>{W.Ou(),b.asyncQueue.enqueueAndForget((async()=>PA(await ly(b),we)))}})(C_(_),E,m,y)}function F_(i,e){return(function(s,o){const u=new es;return s.asyncQueue.enqueueAndForget((async()=>BA(await ek(s),o,u))),u.promise})(C_(i),e)}function _k(i,e,t){const s=t.docs.get(e._key),o=new M_(i);return new ns(i,o,e._key,s,new ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){So=o})(To),mo(new is("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new za(new a1(s.getProvider("auth-internal")),new c1(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ce(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(_.options.projectId,E)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),pi(vg,_g,e),pi(vg,_g,"esm2017")})();const wk={apiKey:"AIzaSyD3HNVcLjjsptFnJWsmXwL9_SQvyqtALHs",authDomain:"tcssh-service.firebaseapp.com",projectId:"tcssh-service",storageBucket:"tcssh-service.firebasestorage.app",messagingSenderId:"438628712501",appId:"1:438628712501:web:626754f06fdb088126f17c"},U_=Ry(wk),Iu=r1(U_),Su=nk(U_),Au="tcssh-service";function Ek(){const[i,e]=lt.useState(null),[t,s]=lt.useState("form"),[o,u]=lt.useState(""),[h,m]=lt.useState(1),y=30,[_,E]=lt.useState(!1),[k,b]=lt.useState({registrar:"",date:new Date().toISOString().split("T")[0]}),[B,Q]=lt.useState([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}]),[Y,W]=lt.useState([]),[we,fe]=lt.useState({show:!1,message:"",type:""}),[me,Ie]=lt.useState({show:!1,password:"",pendingAction:null}),[je,ke]=lt.useState({show:!1,recordId:null,studentName:""});lt.useEffect(()=>{document.title="二中學生愛校服務登記表",(async()=>{try{const oe=typeof window<"u"?window.__initial_auth_token:void 0;if(oe)try{await $T(Iu,oe)}catch(ve){console.warn("自訂權杖相容性跳轉：",ve),await ag(Iu)}else await ag(Iu)}catch(oe){console.error("連線認證初始化失敗:",oe),R("資料庫連線驗證失敗","error")}})();const ie=qT(Iu,e);return()=>ie()},[]),lt.useEffect(()=>{if(!i)return;const z=Tu(Su,"artifacts",Au,"public","data","serviceRecords"),ie=vk(z,oe=>{const ve=new Date;ve.setFullYear(ve.getFullYear()-1);const Pe=oe.docs.map(de=>({id:Number(de.id),...de.data()})).filter(de=>new Date(de.date)>=ve);W(Pe)},oe=>{console.error("雲端資料同步失敗:",oe),R("無法連接雲端資料庫","error")});return()=>ie()},[i]),lt.useEffect(()=>{m(1)},[o]);const N=z=>{const{name:ie,value:oe}=z.target;b(ve=>({...ve,[ie]:oe}))},T=(z,ie,oe)=>{Q(B.map(ve=>ve.id===z?{...ve,[ie]:oe}:ve))},A=()=>{Q([...B,{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])},P=z=>{B.length>1&&Q(B.filter(ie=>ie.id!==z))},R=(z,ie="success")=>{fe({show:!0,message:z,type:ie}),setTimeout(()=>{fe({show:!1,message:"",type:""})},3e3)},V=async z=>{if(z.preventDefault(),!i){R("資料庫尚未連線，請稍候...","error");return}if(!k.registrar||!k.date){R("請填寫上方「登記人」與「登記日期」！","error");return}const ie=B.filter(de=>de.studentId.trim()!==""||de.name.trim()!==""||de.violationReason.trim()!=="");if(ie.length===0){R("請至少填寫一筆學生資料！","error");return}if(ie.some(de=>!de.studentId.trim()||!de.name.trim()||!de.violationReason.trim())){R("請確認有輸入的列皆已完整填寫必填欄位！","error");return}if(ie.some(de=>de.studentId.trim().length!==6)){R("請確認輸入的學號皆為 6 碼！","error");return}const Pe=ie.map((de,Le)=>({id:Date.now()-Le,registrar:k.registrar,date:k.date,studentId:de.studentId,name:de.name,serviceCount:Number(de.serviceCount)||1,violationReason:de.violationReason,timestamp:new Date().toLocaleString(),completed:!1}));try{const de=Tu(Su,"artifacts",Au,"public","data","serviceRecords");await Promise.all(Pe.map(Le=>gy(ud(de,Le.id.toString()),Le))),R(`成功登記 ${Pe.length} 筆資料並儲存至雲端！`,"success"),Q([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])}catch(de){console.error("雲端寫入失敗:",de),R("雲端儲存失敗，請重試！","error")}},S=async z=>{if(!_)return;const ie=Tu(Su,"artifacts",Au,"public","data","serviceRecords"),oe=!z.completed;try{await gy(ud(ie,z.id.toString()),{...z,completed:oe}),R(oe?`已將 ${z.name} 標記為完成！`:`已取消 ${z.name} 的完成狀態`,oe?"success":"info")}catch(ve){console.error("更新完成狀態失敗:",ve),R("雲端更新失敗，請重試！","error")}},Ye=z=>{_&&ke({show:!0,recordId:z.id,studentName:z.name})},_t=async()=>{if(!(!i||!je.recordId))try{const z=Tu(Su,"artifacts",Au,"public","data","serviceRecords");await yk(ud(z,je.recordId.toString())),R("紀錄已從雲端資料庫徹底刪除！","info")}catch(z){console.error("刪除失敗:",z),R("資料庫刪除失敗，請重試！","error")}finally{ke({show:!1,recordId:null,studentName:""})}},ct=()=>{me.password==="22021897"?(E(!0),R("管理員權限驗證成功！","success"),Ie(z=>(z.pendingAction&&setTimeout(()=>z.pendingAction(),100),{show:!1,password:"",pendingAction:null}))):R("密碼錯誤，請重新輸入！","error")},Fe=()=>{E(!1),R("管理員已登出並鎖定權限","info")},Z=Y.filter(z=>{const ie=o.toLowerCase();return z.date.toLowerCase().includes(ie)||z.studentId.toLowerCase().includes(ie)||z.name.toLowerCase().includes(ie)||z.registrar.toLowerCase().includes(ie)}),he=Math.ceil(Z.length/y)||1,te=h*y,D=te-y,$=[...Z].sort((z,ie)=>ie.id-z.id).slice(D,te);return M.jsxs("div",{className:"min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 relative selection:bg-blue-600 selection:text-white",children:[M.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none rounded-b-[40px] z-0"}),M.jsxs("div",{className:"relative w-full max-w-5xl mx-auto space-y-8 transition-all duration-300 z-10",children:[M.jsxs("header",{className:"bg-white rounded-3xl shadow-md border border-slate-200/80 p-8 sm:p-12 text-center relative overflow-hidden mt-8 sm:mt-0",children:[M.jsx("div",{className:"absolute top-0 left-0 w-full h-3 bg-blue-600 school-gradient"}),M.jsx("div",{className:"flex justify-center items-center mb-5",children:M.jsx("div",{className:"bg-blue-50 text-blue-700 p-4 rounded-2xl shadow-inner border border-blue-100",children:M.jsx(Yh,{size:44,className:"stroke-[1.8]"})})}),M.jsxs("div",{className:"inline-flex items-center space-x-2 bg-slate-100/90 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-4 border border-slate-200 shadow-sm",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-600 animate-pulse"}),M.jsx("span",{children:"臺中二中學務處 教官室"})]}),M.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-slate-955 tracking-tight leading-none mb-3",children:"二中學生愛校服務登記表"}),M.jsxs("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-center hidden sm:block",children:["依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導",M.jsx("br",{}),"期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"]}),M.jsx("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-left block sm:hidden px-4",children:"依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導，期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"})]}),M.jsx("div",{className:"flex justify-center mb-6",children:M.jsxs("div",{className:"bg-slate-200/80 p-1.5 rounded-2xl inline-flex space-x-1 border border-slate-300 shadow-sm",children:[M.jsxs("button",{onClick:()=>s("form"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${t==="form"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-955 hover:bg-white/40"}`,children:[M.jsx(fw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記作業"]}),M.jsxs("button",{onClick:()=>s("list"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${t==="list"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-955 hover:bg-white/40"}`,children:[M.jsx(sw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記名單查詢"]})]})}),me.show&&M.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity",children:M.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-slate-200 animate-in zoom-in-95 duration-200",children:[M.jsxs("div",{className:"flex items-center text-blue-700 mb-4 bg-blue-50 p-3 rounded-2xl",children:[M.jsx(Um,{size:24,className:"mr-2 text-blue-700 stroke-[2.5]"}),M.jsx("h3",{className:"text-lg font-black text-slate-955",children:"管理員權限驗證"})]}),M.jsx("p",{className:"text-sm text-slate-700 font-bold leading-relaxed mb-5",children:"此操作需要教官室權限驗證。請輸入管理員密碼："}),M.jsx("input",{type:"password",placeholder:"請輸入密碼",value:me.password,onChange:z=>Ie(ie=>({...ie,password:z.target.value})),onKeyDown:z=>z.key==="Enter"&&ct(),className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-550 text-slate-955 font-bold outline-none mb-6 placeholder:text-slate-400 font-mono text-center tracking-widest",autoFocus:!0}),M.jsxs("div",{className:"flex justify-end space-x-3",children:[M.jsx("button",{onClick:()=>Ie({show:!1,password:"",pendingAction:null}),className:"px-4 py-2.5 text-slate-755 hover:bg-slate-100 rounded-xl transition-colors font-extrabold text-sm",children:"取消"}),M.jsx("button",{onClick:ct,className:"px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/10 transition-colors font-extrabold text-sm",children:"確認登入"})]})]})}),je.show&&M.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity",children:M.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-slate-200 animate-in zoom-in-95 duration-200",children:[M.jsxs("div",{className:"flex items-center text-red-600 mb-4 bg-red-50 p-3 rounded-2xl",children:[M.jsx(hw,{size:24,className:"mr-2 text-red-600 stroke-[2.5]"}),M.jsx("h3",{className:"text-lg font-black text-slate-955",children:"確認刪除登記紀錄？"})]}),M.jsxs("p",{className:"text-sm text-slate-700 font-extrabold leading-relaxed mb-6",children:["您確定要徹底刪除學生 ",M.jsxs("span",{className:"text-red-600 font-black text-base",children:["「",je.studentName,"」"]})," 的這筆登記紀錄嗎？此動作將永久自雲端資料庫抹除，且無法復原。"]}),M.jsxs("div",{className:"flex justify-end space-x-3",children:[M.jsx("button",{onClick:()=>ke({show:!1,recordId:null,studentName:""}),className:"px-4 py-2.5 text-slate-755 hover:bg-slate-100 rounded-xl transition-colors font-extrabold text-sm",children:"取消"}),M.jsx("button",{onClick:_t,className:"px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md shadow-red-500/10 transition-colors font-extrabold text-sm",children:"確定刪除"})]})]})}),M.jsxs("div",{className:"w-full",children:[t==="form"&&M.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[M.jsxs("form",{onSubmit:V,className:"bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10",children:[M.jsxs("h2",{className:"text-xl font-black mb-6 flex items-center text-slate-950 border-b pb-4 border-slate-100",children:[M.jsx(yw,{size:22,className:"mr-2.5 text-blue-600 stroke-[2.5]"}),"填寫登記資料"]}),M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{className:"p-5 bg-gradient-to-br from-slate-100 to-slate-200/40 border-2 border-slate-300 rounded-2xl space-y-4 shadow-sm",children:[M.jsxs("p",{className:"text-xs text-slate-800 font-black mb-2 flex items-center",children:[M.jsx(Fm,{size:14,className:"mr-1.5 text-blue-600 stroke-[2.5]"})," 以下資料送出後會自動保留"]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[M.jsxs("div",{children:[M.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記人 (師長/負責幹部) ",M.jsx("span",{className:"text-red-500",children:"*"})]}),M.jsx("input",{type:"text",name:"registrar",placeholder:"例: 林組長",value:k.registrar,onChange:N,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-slate-950 font-extrabold bg-white placeholder:text-slate-400 shadow-inner"})]}),M.jsxs("div",{children:[M.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記日期 ",M.jsx("span",{className:"text-red-500",children:"*"})]}),M.jsx("input",{type:"date",name:"date",value:k.date,onChange:N,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold bg-white shadow-inner"})]})]})]}),M.jsxs("div",{className:"space-y-4",children:[M.jsx("div",{className:"flex justify-between items-end mb-1",children:M.jsx("label",{className:"block text-sm font-extrabold text-slate-900",children:"批次學生資料填寫"})}),B.map((z,ie)=>M.jsxs("div",{className:"relative p-6 border-2 border-slate-200/80 rounded-2xl bg-white shadow-sm flex flex-col gap-4 group transition-all hover:shadow-md hover:border-slate-300",children:[B.length>1&&M.jsx("button",{type:"button",onClick:()=>P(z.id),className:"absolute -top-3 -right-3 bg-white text-slate-500 hover:text-red-600 hover:bg-red-50 border-2 border-slate-200 rounded-full p-1.5 shadow-md transition-colors z-10 cursor-pointer",title:"移除此列",children:M.jsx(zm,{size:16,className:"stroke-[2.5]"})}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[M.jsxs("div",{className:"sm:col-span-2",children:[M.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["學號 ",M.jsx("span",{className:"text-red-600",children:"*"})]}),M.jsx("input",{type:"text",placeholder:"例: 110123",maxLength:"6",value:z.studentId,onChange:oe=>T(z.id,"studentId",oe.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-350 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold outline-none placeholder:text-slate-400 font-mono shadow-inner"})]}),M.jsxs("div",{className:"sm:col-span-2",children:[M.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["姓名 ",M.jsx("span",{className:"text-red-600",children:"*"})]}),M.jsx("input",{type:"text",placeholder:"例: 王小明",value:z.name,onChange:oe=>T(z.id,"name",oe.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold outline-none placeholder:text-slate-400 shadow-inner animate-none"})]}),M.jsxs("div",{className:"sm:col-span-2",children:[M.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["次數 ",M.jsx("span",{className:"text-red-600",children:"*"})]}),M.jsx("input",{type:"number",min:"1",value:z.serviceCount,onChange:oe=>T(z.id,"serviceCount",oe.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-black outline-none shadow-inner"})]}),M.jsxs("div",{className:"sm:col-span-6",children:[M.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["違規事件/事由 ",M.jsx("span",{className:"text-red-600",children:"*"})]}),M.jsx("input",{type:"text",placeholder:"例: 遲到、未交作業",value:z.violationReason,onChange:oe=>T(z.id,"violationReason",oe.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold outline-none placeholder:text-slate-400 shadow-inner"})]})]})]},z.id)),M.jsxs("button",{type:"button",onClick:A,className:"w-full py-4 border-2 border-dashed border-slate-750 rounded-2xl hover:bg-blue-50/50 hover:text-blue-700 hover:border-blue-450 transition-colors flex items-center justify-center text-sm font-extrabold mt-2 cursor-pointer shadow-sm active:scale-[0.995]",children:[M.jsx(lw,{size:16,className:"mr-1.5 stroke-[3]"})," 新增下一位學生"]})]}),M.jsxs("button",{type:"submit",className:"w-full mt-6 bg-blue-600 hover:school-gradient text-white font-black py-4 px-4 rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-250 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 text-center flex justify-center items-center cursor-pointer text-base",children:[M.jsx(Xh,{size:18,className:"mr-2"})," 送出登記"]})]})]}),M.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border-2 border-blue-100",children:[M.jsxs("h3",{className:"font-extrabold text-blue-900 mb-3 flex items-center text-base",children:[M.jsx(Fm,{size:18,className:"mr-2 text-blue-600 stroke-[2.5]"})," 愛校服務須知"]}),M.jsxs("ul",{className:"text-sm text-blue-900/90 font-bold space-y-2.5 list-none",children:[M.jsxs("li",{className:"flex items-start",children:[M.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請著整齊校服或運動服進行服務，並請攜帶學生證。"]}),M.jsxs("li",{className:"flex items-start",children:[M.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請準時至指定地點集合，遲到將酌減服務時數。"]}),M.jsxs("li",{className:"flex items-start",children:[M.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 完成服務後，請主動持「愛校服務單」請負責老師簽名。"]}),M.jsxs("li",{className:"flex items-start",children:[M.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 若因故無法出席，請務必提前一天至學務處取消。"]})]})]})]}),t==="list"&&M.jsx("div",{className:"w-full animate-in fade-in duration-300",children:M.jsxs("div",{className:"bg-white rounded-3xl shadow-xl border-2 border-slate-250 p-6 sm:p-8 min-h-[500px]",children:[M.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b-2 pb-5 gap-4 border-slate-200",children:[M.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:flex-grow md:max-w-xl lg:max-w-2xl",children:[M.jsxs("h2",{className:"text-xl font-black text-slate-955 flex items-center shrink-0",children:[M.jsx(Yh,{size:22,className:"mr-2 text-green-700 stroke-[3]"}),"登記名單查詢"]}),M.jsxs("div",{className:"relative w-full h-[38px] flex-grow",children:[M.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",children:M.jsx(jm,{size:14,className:"text-slate-900 stroke-[2.5]"})}),M.jsx("input",{type:"text",placeholder:"搜尋登記日期、學號、姓名...",value:o,onChange:z=>u(z.target.value),className:"w-full h-full pl-9 pr-9 py-2 border border-slate-350 rounded-full focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none text-xs bg-white text-slate-955 font-black placeholder:text-slate-400 shadow-sm"}),o&&M.jsx("button",{onClick:()=>u(""),className:"absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-605 hover:text-slate-955",children:M.jsx(zm,{size:14,className:"stroke-[2.5]"})})]})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto md:justify-end shrink-0",children:[M.jsxs("div",{className:"flex items-center justify-between bg-slate-50 border border-slate-200 p-1 rounded-xl shadow-sm h-[38px] w-auto shrink-0 space-x-2",children:[M.jsx("button",{type:"button",onClick:()=>m(z=>Math.max(z-1,1)),disabled:h===1,className:"px-3 h-full bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center shadow-inner",children:"上一頁"}),M.jsxs("span",{className:"text-xs font-black text-slate-900 font-mono px-1",children:[h," / ",he]}),M.jsx("button",{type:"button",onClick:()=>m(z=>Math.min(z+1,he)),disabled:h===he,className:"px-3 h-full bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center shadow-inner",children:"下一頁"})]}),_?M.jsxs("button",{type:"button",onClick:Fe,className:"h-[38px] px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-black shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5 border border-emerald-500 shrink-0",title:"已解鎖管理權限！點選此處登出",children:[M.jsx(Xh,{size:14,className:"stroke-[3] fill-emerald-100/30"}),M.jsx("span",{children:"已登入 (登出)"})]}):M.jsxs("button",{type:"button",onClick:()=>Ie({show:!0,password:"",pendingAction:null}),className:"h-[38px] px-4 bg-slate-900 hover:bg-slate-850 text-white rounded-full text-xs font-black shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5 border border-slate-800 shrink-0",title:"請點選此處進行密碼驗證",children:[M.jsx(Um,{size:14,className:"stroke-[3]"}),M.jsx("span",{children:"權限登入"})]}),M.jsxs("span",{className:"h-[38px] px-4 text-xs font-black text-blue-900 bg-blue-100/65 border border-blue-200/80 rounded-full shadow-sm flex items-center justify-center shrink-0 font-sans",children:["共 ",Z.length," 筆紀錄"]})]})]}),Y.length===0?M.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[M.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:M.jsx(Yh,{size:48,className:"text-slate-400 stroke-[1.5]"})}),M.jsx("p",{className:"font-bold",children:"目前尚無登記紀錄，請前往登記作業！"})]}):Z.length===0?M.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[M.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:M.jsx(jm,{size:48,className:"text-slate-400 stroke-[1.5]"})}),M.jsxs("p",{className:"font-bold",children:["找不到符合「",M.jsx("span",{className:"text-slate-955 font-black",children:o}),"」的紀錄"]}),M.jsx("button",{onClick:()=>u(""),className:"text-blue-600 hover:text-blue-800 text-sm font-extrabold cursor-pointer",children:"清除搜尋條件"})]}):M.jsx("div",{className:"overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm",children:M.jsxs("table",{className:"w-full text-left border-collapse whitespace-nowrap",children:[M.jsx("thead",{children:M.jsxs("tr",{className:"bg-slate-100 text-slate-955 text-sm border-b-2 border-slate-200",children:[M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"登記日期"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"學號"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"姓名"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"違規事件 / 事由"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider text-center",children:"次數"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"登記人"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider text-center",children:"完成"}),M.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider text-right",children:"操作"})]})}),M.jsx("tbody",{className:"divide-y divide-slate-200 bg-white",children:$.map(z=>M.jsxs("tr",{className:"hover:bg-blue-50/30 transition-colors group",children:[M.jsx("td",{className:"py-4 px-6 text-sm text-slate-955 font-black font-mono",children:z.date}),M.jsx("td",{className:"py-4 px-6 text-slate-955 font-black font-mono text-base",children:z.studentId}),M.jsx("td",{className:"py-4 px-6 text-slate-955 font-black text-base",children:z.name}),M.jsx("td",{className:`py-4 px-6 text-sm text-slate-955 font-extrabold max-w-xs truncate ${z.violationReason&&z.violationReason.length>18?"cursor-help":""}`,title:z.violationReason,children:M.jsx("span",{className:z.violationReason&&z.violationReason.length>18?"border-b border-dashed border-slate-400 pb-0.5":"",children:z.violationReason||"-"})}),M.jsx("td",{className:"py-4 px-6 text-center",children:M.jsx("span",{className:"inline-flex items-center justify-center px-3.5 py-1 text-xs font-black leading-none text-red-955 bg-red-100 border-2 border-red-300 rounded-full font-mono shadow-sm",children:z.serviceCount})}),M.jsx("td",{className:"py-4 px-6 text-sm text-slate-955 font-black",children:z.registrar}),M.jsx("td",{className:"py-4 px-6 text-center",children:z.completed?M.jsx(Xh,{size:24,className:`mx-auto stroke-[2.5] transition-all ${_?"text-emerald-600 fill-emerald-100 cursor-pointer hover:scale-110 active:scale-95":"text-emerald-600/60 fill-emerald-100/40 cursor-default"}`,onClick:()=>S(z),title:"已完成！"}):M.jsx("div",{onClick:()=>S(z),className:`w-5 h-5 rounded-full border-2 mx-auto flex items-center justify-center transition-all ${_?"border-emerald-600 hover:bg-emerald-50 cursor-pointer":"border-slate-350 cursor-default"}`,title:"未完成。"})}),M.jsx("td",{className:"py-4 px-6 text-right",children:M.jsx("button",{onClick:()=>Ye(z),className:`p-2 rounded-xl transition-all ${_?"text-slate-400 hover:text-red-500 hover:bg-red-50 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100":"text-slate-200 cursor-default"}`,title:"移除這筆登記",disabled:!_,children:M.jsx(mw,{size:18,className:"stroke-[2.5]"})})})]},z.id))})]})})]})})]}),M.jsxs("footer",{className:"text-center text-sm text-slate-500 font-bold py-6 border-t border-slate-200/50",children:["© ",new Date().getFullYear()," 國立臺中第二高級中等學校學務處 教官室"]})]})]})}Y0.createRoot(document.getElementById("root")).render(M.jsx(lt.StrictMode,{children:M.jsx(Ek,{})}));
