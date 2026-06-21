(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Gh={exports:{}},Aa={},Kh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function lw(){if(zm)return xe;zm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function H(V,B,ce){this.props=V,this.context=B,this.refs=Y,this.updater=ce||z}H.prototype.isReactComponent={},H.prototype.setState=function(V,B){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,B,"setState")},H.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function fe(){}fe.prototype=H.prototype;function ue(V,B,ce){this.props=V,this.context=B,this.refs=Y,this.updater=ce||z}var ge=ue.prototype=new fe;ge.constructor=ue,Q(ge,H.prototype),ge.isPureReactComponent=!0;var Se=Array.isArray,Je=Object.prototype.hasOwnProperty,ke={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(V,B,ce){var Ae,Ie={},Ce=null,Oe=null;if(B!=null)for(Ae in B.ref!==void 0&&(Oe=B.ref),B.key!==void 0&&(Ce=""+B.key),B)Je.call(B,Ae)&&!N.hasOwnProperty(Ae)&&(Ie[Ae]=B[Ae]);var Fe=arguments.length-2;if(Fe===1)Ie.children=ce;else if(1<Fe){for(var We=Array(Fe),W=0;W<Fe;W++)We[W]=arguments[W+2];Ie.children=We}if(V&&V.defaultProps)for(Ae in Fe=V.defaultProps,Fe)Ie[Ae]===void 0&&(Ie[Ae]=Fe[Ae]);return{$$typeof:i,type:V,key:Ce,ref:Oe,props:Ie,_owner:ke.current}}function k(V,B){return{$$typeof:i,type:V.type,key:B,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var B={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ce){return B[ce]})}var O=/\/+/g;function S(V,B){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):B.toString(36)}function it(V,B,ce,Ae,Ie){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var Oe=!1;if(V===null)Oe=!0;else switch(Ce){case"string":case"number":Oe=!0;break;case"object":switch(V.$$typeof){case i:case e:Oe=!0}}if(Oe)return Oe=V,Ie=Ie(Oe),V=Ae===""?"."+S(Oe,0):Ae,Se(Ie)?(ce="",V!=null&&(ce=V.replace(O,"$&/")+"/"),it(Ie,B,ce,"",function(W){return W})):Ie!=null&&(x(Ie)&&(Ie=k(Ie,ce+(!Ie.key||Oe&&Oe.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+V)),B.push(Ie)),1;if(Oe=0,Ae=Ae===""?".":Ae+":",Se(V))for(var Fe=0;Fe<V.length;Fe++){Ce=V[Fe];var We=Ae+S(Ce,Fe);Oe+=it(Ce,B,ce,We,Ie)}else if(We=C(V),typeof We=="function")for(V=We.call(V),Fe=0;!(Ce=V.next()).done;)Ce=Ce.value,We=Ae+S(Ce,Fe++),Oe+=it(Ce,B,ce,We,Ie);else if(Ce==="object")throw B=String(V),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Oe}function At(V,B,ce){if(V==null)return V;var Ae=[],Ie=0;return it(V,Ae,"","",function(Ce){return B.call(ce,Ce,Ie++)}),Ae}function Ue(V){if(V._status===-1){var B=V._result;B=B(),B.then(function(ce){(V._status===0||V._status===-1)&&(V._status=1,V._result=ce)},function(ce){(V._status===0||V._status===-1)&&(V._status=2,V._result=ce)}),V._status===-1&&(V._status=0,V._result=B)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},ee={transition:null},he={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ke};function te(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:At,forEach:function(V,B,ce){At(V,function(){B.apply(this,arguments)},ce)},count:function(V){var B=0;return At(V,function(){B++}),B},toArray:function(V){return At(V,function(B){return B})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xe.Component=H,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=ue,xe.StrictMode=s,xe.Suspense=y,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,xe.act=te,xe.cloneElement=function(V,B,ce){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=Q({},V.props),Ie=V.key,Ce=V.ref,Oe=V._owner;if(B!=null){if(B.ref!==void 0&&(Ce=B.ref,Oe=ke.current),B.key!==void 0&&(Ie=""+B.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for(We in B)Je.call(B,We)&&!N.hasOwnProperty(We)&&(Ae[We]=B[We]===void 0&&Fe!==void 0?Fe[We]:B[We])}var We=arguments.length-2;if(We===1)Ae.children=ce;else if(1<We){Fe=Array(We);for(var W=0;W<We;W++)Fe[W]=arguments[W+2];Ae.children=Fe}return{$$typeof:i,type:V.type,key:Ie,ref:Ce,props:Ae,_owner:Oe}},xe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},xe.createElement=T,xe.createFactory=function(V){var B=T.bind(null,V);return B.type=V,B},xe.createRef=function(){return{current:null}},xe.forwardRef=function(V){return{$$typeof:m,render:V}},xe.isValidElement=x,xe.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Ue}},xe.memo=function(V,B){return{$$typeof:v,type:V,compare:B===void 0?null:B}},xe.startTransition=function(V){var B=ee.transition;ee.transition={};try{V()}finally{ee.transition=B}},xe.unstable_act=te,xe.useCallback=function(V,B){return Be.current.useCallback(V,B)},xe.useContext=function(V){return Be.current.useContext(V)},xe.useDebugValue=function(){},xe.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},xe.useEffect=function(V,B){return Be.current.useEffect(V,B)},xe.useId=function(){return Be.current.useId()},xe.useImperativeHandle=function(V,B,ce){return Be.current.useImperativeHandle(V,B,ce)},xe.useInsertionEffect=function(V,B){return Be.current.useInsertionEffect(V,B)},xe.useLayoutEffect=function(V,B){return Be.current.useLayoutEffect(V,B)},xe.useMemo=function(V,B){return Be.current.useMemo(V,B)},xe.useReducer=function(V,B,ce){return Be.current.useReducer(V,B,ce)},xe.useRef=function(V){return Be.current.useRef(V)},xe.useState=function(V){return Be.current.useState(V)},xe.useSyncExternalStore=function(V,B,ce){return Be.current.useSyncExternalStore(V,B,ce)},xe.useTransition=function(){return Be.current.useTransition()},xe.version="18.3.1",xe}var Bm;function jd(){return Bm||(Bm=1,Kh.exports=lw()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function uw(){if($m)return Aa;$m=1;var i=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var E,A={},C=null,z=null;v!==void 0&&(C=""+v),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(z=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(A[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)A[E]===void 0&&(A[E]=y[E]);return{$$typeof:e,type:m,key:C,ref:z,props:A,_owner:o.current}}return Aa.Fragment=t,Aa.jsx=h,Aa.jsxs=h,Aa}var qm;function cw(){return qm||(qm=1,Gh.exports=uw()),Gh.exports}var b=cw(),at=jd(),vu={},Qh={exports:{}},on={},Xh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function hw(){return Hm||(Hm=1,(function(i){function e(ee,he){var te=ee.length;ee.push(he);e:for(;0<te;){var V=te-1>>>1,B=ee[V];if(0<o(B,he))ee[V]=he,ee[te]=B,te=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var he=ee[0],te=ee.pop();if(te!==he){ee[0]=te;e:for(var V=0,B=ee.length,ce=B>>>1;V<ce;){var Ae=2*(V+1)-1,Ie=ee[Ae],Ce=Ae+1,Oe=ee[Ce];if(0>o(Ie,te))Ce<B&&0>o(Oe,Ie)?(ee[V]=Oe,ee[Ce]=te,V=Ce):(ee[V]=Ie,ee[Ae]=te,V=Ae);else if(Ce<B&&0>o(Oe,te))ee[V]=Oe,ee[Ce]=te,V=Ce;else break e}}return he}function o(ee,he){var te=ee.sortIndex-he.sortIndex;return te!==0?te:ee.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],E=1,A=null,C=3,z=!1,Q=!1,Y=!1,H=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(ee){for(var he=t(v);he!==null;){if(he.callback===null)s(v);else if(he.startTime<=ee)s(v),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(v)}}function Se(ee){if(Y=!1,ge(ee),!Q)if(t(y)!==null)Q=!0,Ue(Je);else{var he=t(v);he!==null&&Be(Se,he.startTime-ee)}}function Je(ee,he){Q=!1,Y&&(Y=!1,fe(T),T=-1),z=!0;var te=C;try{for(ge(he),A=t(y);A!==null&&(!(A.expirationTime>he)||ee&&!D());){var V=A.callback;if(typeof V=="function"){A.callback=null,C=A.priorityLevel;var B=V(A.expirationTime<=he);he=i.unstable_now(),typeof B=="function"?A.callback=B:A===t(y)&&s(y),ge(he)}else s(y);A=t(y)}if(A!==null)var ce=!0;else{var Ae=t(v);Ae!==null&&Be(Se,Ae.startTime-he),ce=!1}return ce}finally{A=null,C=te,z=!1}}var ke=!1,N=null,T=-1,k=5,x=-1;function D(){return!(i.unstable_now()-x<k)}function O(){if(N!==null){var ee=i.unstable_now();x=ee;var he=!0;try{he=N(!0,ee)}finally{he?S():(ke=!1,N=null)}}else ke=!1}var S;if(typeof ue=="function")S=function(){ue(O)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,At=it.port2;it.port1.onmessage=O,S=function(){At.postMessage(null)}}else S=function(){H(O,0)};function Ue(ee){N=ee,ke||(ke=!0,S())}function Be(ee,he){T=H(function(){ee(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,Ue(Je))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(ee){switch(C){case 1:case 2:case 3:var he=3;break;default:he=C}var te=C;C=he;try{return ee()}finally{C=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,he){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var te=C;C=ee;try{return he()}finally{C=te}},i.unstable_scheduleCallback=function(ee,he,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,ee){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=te+B,ee={id:E++,callback:he,priorityLevel:ee,startTime:te,expirationTime:B,sortIndex:-1},te>V?(ee.sortIndex=te,e(v,ee),t(y)===null&&ee===t(v)&&(Y?(fe(T),T=-1):Y=!0,Be(Se,te-V))):(ee.sortIndex=B,e(y,ee),Q||z||(Q=!0,Ue(Je))),ee},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(ee){var he=C;return function(){var te=C;C=he;try{return ee.apply(this,arguments)}finally{C=te}}}})(Yh)),Yh}var Wm;function dw(){return Wm||(Wm=1,Xh.exports=hw()),Xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function fw(){if(Gm)return on;Gm=1;var i=jd(),e=dw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function C(n){return y.call(A,n)?!0:y.call(E,n)?!1:v.test(n)?A[n]=!0:(E[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(fe,ue);H[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(fe,ue);H[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(fe,ue);H[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Se=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Je=Symbol.for("react.element"),ke=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ee=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function B(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ce=!1;function Ae(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var c=j}Reflect.construct(n,[],r)}else{try{r.call()}catch(j){c=j}n.call(r.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ke:return"Portal";case k:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case it:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case At:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case Ue:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function Oe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function W(n){var r=We(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ye(n){n._valueTracker||(n._valueTracker=W(n))}function be(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ge(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function De(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Fe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Nt(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function gn(n,r){Nt(n,r);var a=Fe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?_s(n,r.type,a):r.hasOwnProperty("defaultValue")&&_s(n,r.type,Fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function il(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function _s(n,r,a){(r!=="number"||qe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var mr=Array.isArray;function gr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Do(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function vs(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Fe(a)}}function ws(n,r){var a=Fe(r.value),c=Fe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Vo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function vt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?vt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var yr,Oo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=yr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function zr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pi=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(n){Pi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),xi[r]=xi[n]})});function Lo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||xi.hasOwnProperty(n)&&xi[n]?(""+r).trim():r+"px"}function Mo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(n,r){if(r){if(Fo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Uo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ts=null,yn=null,Qn=null;function Is(n){if(n=ca(n)){if(typeof Ts!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Vl(r),Ts(n.stateNode,n.type,r))}}function Xn(n){yn?Qn?Qn.push(n):Qn=[n]:yn=n}function zo(){if(yn){var n=yn,r=Qn;if(Qn=yn=null,Is(n),r)for(n=0;n<r.length;n++)Is(r[n])}}function bi(n,r){return n(r)}function Bo(){}var _r=!1;function $o(n,r,a){if(_r)return n(r,a);_r=!0;try{return bi(n,r,a)}finally{_r=!1,(yn!==null||Qn!==null)&&(Bo(),zo())}}function ct(n,r){var a=n.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Ss=!1;if(m)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Ss=!1}function Di(n,r,a,c,d,p,_,I,R){var j=Array.prototype.slice.call(arguments,3);try{r.apply(a,j)}catch(K){this.onError(K)}}var Vi=!1,As=null,Pn=!1,qo=null,Ec={onError:function(n){Vi=!0,As=n}};function ks(n,r,a,c,d,p,_,I,R){Vi=!1,As=null,Di.apply(Ec,arguments)}function sl(n,r,a,c,d,p,_,I,R){if(ks.apply(this,arguments),Vi){if(Vi){var j=As;Vi=!1,As=null}else throw Error(t(198));Pn||(Pn=!0,qo=j)}}function Nn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Oi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function bn(n){if(Nn(n)!==n)throw Error(t(188))}function ol(n){var r=n.alternate;if(!r){if(r=Nn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return bn(d),n;if(p===c)return bn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Ho(n){return n=ol(n),n!==null?Rs(n):null}function Rs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Rs(n);if(r!==null)return r;n=n.sibling}return null}var Cs=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,al=e.unstable_shouldYield,Tc=e.unstable_requestPaint,Qe=e.unstable_now,ll=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,Br=e.unstable_UserBlockingPriority,_n=e.unstable_NormalPriority,Go=e.unstable_LowPriority,ul=e.unstable_IdlePriority,Mi=null,ln=null;function cl(n){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:dl,Ko=Math.log,hl=Math.LN2;function dl(n){return n>>>=0,n===0?32:31-(Ko(n)/hl|0)|0}var xs=64,Ps=4194304;function $r(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Fi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=$r(I):(p&=_,p!==0&&(c=$r(p)))}else _=a&~d,_!==0?c=$r(_):p!==0&&(c=$r(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Kt(r),d=1<<a,c|=n[a],r&=~d;return c}function Ic(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Kt(p),I=1<<_,R=d[_];R===-1?((I&a)===0||(I&c)!==0)&&(d[_]=Ic(I,r)):R<=r&&(n.expiredLanes|=I),p&=~I}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ji(){var n=xs;return xs<<=1,(xs&4194240)===0&&(xs=64),n}function qr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Hr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Kt(r),n[r]=a}function Ke(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Kt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Wr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Kt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ve=0;function Gr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fl,Ns,pl,ml,gl,Qo=!1,Yn=[],bt=null,Dn=null,Vn=null,Kr=new Map,vn=new Map,Jn=[],Sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yl(n,r){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Kr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(r.pointerId)}}function Jt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ca(r),r!==null&&Ns(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ac(n,r,a,c,d){switch(r){case"focusin":return bt=Jt(bt,n,r,a,c,d),!0;case"dragenter":return Dn=Jt(Dn,n,r,a,c,d),!0;case"mouseover":return Vn=Jt(Vn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Kr.set(p,Jt(Kr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,vn.set(p,Jt(vn.get(p)||null,n,r,a,c,d)),!0}return!1}function _l(n){var r=qi(n.target);if(r!==null){var a=Nn(r);if(a!==null){if(r=a.tag,r===13){if(r=Oi(a),r!==null){n.blockedOn=r,gl(n.priority,function(){pl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=bs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ni=c,a.target.dispatchEvent(c),Ni=null}else return r=ca(a),r!==null&&Ns(r),n.blockedOn=a,!1;r.shift()}return!0}function Ui(n,r,a){wr(n)&&a.delete(r)}function vl(){Qo=!1,bt!==null&&wr(bt)&&(bt=null),Dn!==null&&wr(Dn)&&(Dn=null),Vn!==null&&wr(Vn)&&(Vn=null),Kr.forEach(Ui),vn.forEach(Ui)}function On(n,r){n.blockedOn===r&&(n.blockedOn=null,Qo||(Qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vl)))}function Ln(n){function r(d){return On(d,n)}if(0<Yn.length){On(Yn[0],n);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(bt!==null&&On(bt,n),Dn!==null&&On(Dn,n),Vn!==null&&On(Vn,n),Kr.forEach(r),vn.forEach(r),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)_l(a),a.blockedOn===null&&Jn.shift()}var Er=Se.ReactCurrentBatchConfig,Qr=!0;function nt(n,r,a,c){var d=Ve,p=Er.transition;Er.transition=null;try{Ve=1,Xo(n,r,a,c)}finally{Ve=d,Er.transition=p}}function kc(n,r,a,c){var d=Ve,p=Er.transition;Er.transition=null;try{Ve=4,Xo(n,r,a,c)}finally{Ve=d,Er.transition=p}}function Xo(n,r,a,c){if(Qr){var d=bs(n,r,a,c);if(d===null)Mc(n,r,c,zi,a),yl(n,c);else if(Ac(d,n,r,a,c))c.stopPropagation();else if(yl(n,c),r&4&&-1<Sc.indexOf(n)){for(;d!==null;){var p=ca(d);if(p!==null&&fl(p),p=bs(n,r,a,c),p===null&&Mc(n,r,c,zi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Mc(n,r,c,null,a)}}var zi=null;function bs(n,r,a,c){if(zi=null,n=Es(c),n=qi(n),n!==null)if(r=Nn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Oi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zi=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ll()){case Li:return 1;case Br:return 4;case _n:case Go:return 16;case ul:return 536870912;default:return 16}default:return 16}}var cn=null,Ds=null,Zt=null;function Jo(){if(Zt)return Zt;var n,r=Ds,a=r.length,c,d="value"in cn?cn.value:cn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Zt=d.slice(n,1<c?1-c:void 0)}function Vs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function Zo(){return!1}function Dt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Zn:Zo,this.isPropagationStopped=Zo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),r}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Dt(Mn),er=te({},Mn,{view:0,detail:0}),Rc=Dt(er),Ls,Tr,Xr,Bi=te({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(Ls=n.screenX-Xr.screenX,Tr=n.screenY-Xr.screenY):Tr=Ls=0,Xr=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:Tr}}),Ms=Dt(Bi),ea=te({},Bi,{dataTransfer:0}),wl=Dt(ea),Fs=te({},er,{relatedTarget:0}),js=Dt(Fs),El=te({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=Dt(El),Tl=te({},Mn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Il=Dt(Tl),Sl=te({},Mn,{data:0}),ta=Dt(Sl),Us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Al={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Al[n])?!!r[n]:!1}function tr(){return kl}var l=te({},er,{key:function(n){if(n.key){var r=Us[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Vs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(n){return n.type==="keypress"?Vs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Dt(l),g=te({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Dt(g),L=te({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr}),U=Dt(L),Z=te({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=Dt(Z),Et=te({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Dt(Et),kt=[9,13,27,32],ft=m&&"CompositionEvent"in window,wn=null;m&&"documentMode"in document&&(wn=document.documentMode);var hn=m&&"TextEvent"in window&&!wn,$i=m&&(!ft||wn&&8<wn&&11>=wn),zs=" ",Of=!1;function Lf(n,r){switch(n){case"keyup":return kt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function s0(n,r){switch(n){case"compositionend":return Mf(r);case"keypress":return r.which!==32?null:(Of=!0,zs);case"textInput":return n=r.data,n===zs&&Of?null:n;default:return null}}function o0(n,r){if(Bs)return n==="compositionend"||!ft&&Lf(n,r)?(n=Jo(),Zt=Ds=cn=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $i&&r.locale!=="ko"?null:r.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!a0[n.type]:r==="textarea"}function jf(n,r,a,c){Xn(c),r=Nl(r,"onChange"),0<r.length&&(a=new Os("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var na=null,ra=null;function l0(n){rp(n,0)}function Rl(n){var r=Gs(n);if(be(r))return n}function u0(n,r){if(n==="change")return r}var Uf=!1;if(m){var Cc;if(m){var xc="oninput"in document;if(!xc){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),xc=typeof zf.oninput=="function"}Cc=xc}else Cc=!1;Uf=Cc&&(!document.documentMode||9<document.documentMode)}function Bf(){na&&(na.detachEvent("onpropertychange",$f),ra=na=null)}function $f(n){if(n.propertyName==="value"&&Rl(ra)){var r=[];jf(r,ra,n,Es(n)),$o(l0,r)}}function c0(n,r,a){n==="focusin"?(Bf(),na=r,ra=a,na.attachEvent("onpropertychange",$f)):n==="focusout"&&Bf()}function h0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(ra)}function d0(n,r){if(n==="click")return Rl(r)}function f0(n,r){if(n==="input"||n==="change")return Rl(r)}function p0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Fn=typeof Object.is=="function"?Object.is:p0;function ia(n,r){if(Fn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Fn(n[d],r[d]))return!1}return!0}function qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hf(n,r){var a=qf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Wf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Wf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Gf(){for(var n=window,r=qe();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=qe(n.document)}return r}function Pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function m0(n){var r=Gf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Wf(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Hf(a,p);var _=Hf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g0=m&&"documentMode"in document&&11>=document.documentMode,$s=null,Nc=null,sa=null,bc=!1;function Kf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||$s==null||$s!==qe(c)||(c=$s,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Nl(Nc,"onSelect"),0<c.length&&(r=new Os("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=$s)))}function Cl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var qs={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Dc={},Qf={};m&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function xl(n){if(Dc[n])return Dc[n];if(!qs[n])return n;var r=qs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Qf)return Dc[n]=r[a];return n}var Xf=xl("animationend"),Yf=xl("animationiteration"),Jf=xl("animationstart"),Zf=xl("transitionend"),ep=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,r){ep.set(n,r),u(r,[n])}for(var Vc=0;Vc<tp.length;Vc++){var Oc=tp[Vc],y0=Oc.toLowerCase(),_0=Oc[0].toUpperCase()+Oc.slice(1);Yr(y0,"on"+_0)}Yr(Xf,"onAnimationEnd"),Yr(Yf,"onAnimationIteration"),Yr(Jf,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Zf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function np(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,sl(c,r,void 0,n),n.currentTarget=null}function rp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],R=I.instance,j=I.currentTarget;if(I=I.listener,R!==p&&d.isPropagationStopped())break e;np(d,I,j),p=R}else for(_=0;_<c.length;_++){if(I=c[_],R=I.instance,j=I.currentTarget,I=I.listener,R!==p&&d.isPropagationStopped())break e;np(d,I,j),p=R}}}if(Pn)throw n=qo,Pn=!1,qo=null,n}function Ze(n,r){var a=r[$c];a===void 0&&(a=r[$c]=new Set);var c=n+"__bubble";a.has(c)||(ip(r,n,2,!1),a.add(c))}function Lc(n,r,a){var c=0;r&&(c|=4),ip(a,n,c,r)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[Pl]){n[Pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(v0.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pl]||(r[Pl]=!0,Lc("selectionchange",!1,r))}}function ip(n,r,a,c){switch(Yo(r)){case 1:var d=nt;break;case 4:d=kc;break;default:d=Xo}a=d.bind(null,r,a,n),d=void 0,!Ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Mc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;I!==null;){if(_=qi(I),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}I=I.parentNode}}c=c.return}$o(function(){var j=p,K=Es(a),X=[];e:{var G=ep.get(n);if(G!==void 0){var ne=Os,oe=n;switch(n){case"keypress":if(Vs(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":oe="focus",ne=js;break;case"focusout":oe="blur",ne=js;break;case"beforeblur":case"afterblur":ne=js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Ms;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=U;break;case Xf:case Yf:case Jf:ne=Ir;break;case Zf:ne=He;break;case"scroll":ne=Rc;break;case"wheel":ne=Le;break;case"copy":case"cut":case"paste":ne=Il;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=w}var ae=(r&4)!==0,ht=!ae&&n==="scroll",M=ae?G!==null?G+"Capture":null:G;ae=[];for(var P=j,F;P!==null;){F=P;var J=F.stateNode;if(F.tag===5&&J!==null&&(F=J,M!==null&&(J=ct(P,M),J!=null&&ae.push(la(P,J,F)))),ht)break;P=P.return}0<ae.length&&(G=new ne(G,oe,null,a,K),X.push({event:G,listeners:ae}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==Ni&&(oe=a.relatedTarget||a.fromElement)&&(qi(oe)||oe[Sr]))break e;if((ne||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=j,oe=oe?qi(oe):null,oe!==null&&(ht=Nn(oe),oe!==ht||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=j),ne!==oe)){if(ae=Ms,J="onMouseLeave",M="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ae=w,J="onPointerLeave",M="onPointerEnter",P="pointer"),ht=ne==null?G:Gs(ne),F=oe==null?G:Gs(oe),G=new ae(J,P+"leave",ne,a,K),G.target=ht,G.relatedTarget=F,J=null,qi(K)===j&&(ae=new ae(M,P+"enter",oe,a,K),ae.target=F,ae.relatedTarget=ht,J=ae),ht=J,ne&&oe)t:{for(ae=ne,M=oe,P=0,F=ae;F;F=Hs(F))P++;for(F=0,J=M;J;J=Hs(J))F++;for(;0<P-F;)ae=Hs(ae),P--;for(;0<F-P;)M=Hs(M),F--;for(;P--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Hs(ae),M=Hs(M)}ae=null}else ae=null;ne!==null&&sp(X,G,ne,ae,!1),oe!==null&&ht!==null&&sp(X,ht,oe,ae,!0)}}e:{if(G=j?Gs(j):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var le=u0;else if(Ff(G))if(Uf)le=f0;else{le=h0;var pe=c0}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=d0);if(le&&(le=le(n,j))){jf(X,le,a,K);break e}pe&&pe(n,G,j),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&_s(G,"number",G.value)}switch(pe=j?Gs(j):window,n){case"focusin":(Ff(pe)||pe.contentEditable==="true")&&($s=pe,Nc=j,sa=null);break;case"focusout":sa=Nc=$s=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Kf(X,a,K);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Kf(X,a,K)}var me;if(ft)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Bs?Lf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&($i&&a.locale!=="ko"&&(Bs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Bs&&(me=Jo()):(cn=K,Ds="value"in cn?cn.value:cn.textContent,Bs=!0)),pe=Nl(j,ve),0<pe.length&&(ve=new ta(ve,n,null,a,K),X.push({event:ve,listeners:pe}),me?ve.data=me:(me=Mf(a),me!==null&&(ve.data=me)))),(me=hn?s0(n,a):o0(n,a))&&(j=Nl(j,"onBeforeInput"),0<j.length&&(K=new ta("onBeforeInput","beforeinput",null,a,K),X.push({event:K,listeners:j}),K.data=me))}rp(X,r)})}function la(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Nl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ct(n,a),p!=null&&c.unshift(la(n,p,d)),p=ct(n,r),p!=null&&c.push(la(n,p,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sp(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,R=I.alternate,j=I.stateNode;if(R!==null&&R===c)break;I.tag===5&&j!==null&&(I=j,d?(R=ct(a,p),R!=null&&_.unshift(la(a,R,I))):d||(R=ct(a,p),R!=null&&_.push(la(a,R,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var w0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function op(n){return(typeof n=="string"?n:""+n).replace(w0,`
`).replace(E0,"")}function bl(n,r,a){if(r=op(r),op(n)!==r&&a)throw Error(t(425))}function Dl(){}var Fc=null,jc=null;function Uc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(n){return ap.resolve(null).then(n).catch(S0)}:zc;function S0(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Ln(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(r)}function Jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function lp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),nr="__reactFiber$"+Ws,ua="__reactProps$"+Ws,Sr="__reactContainer$"+Ws,$c="__reactEvents$"+Ws,A0="__reactListeners$"+Ws,k0="__reactHandles$"+Ws;function qi(n){var r=n[nr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Sr]||a[nr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=lp(n);n!==null;){if(a=n[nr])return a;n=lp(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[nr]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vl(n){return n[ua]||null}var qc=[],Ks=-1;function Zr(n){return{current:n}}function et(n){0>Ks||(n.current=qc[Ks],qc[Ks]=null,Ks--)}function Xe(n,r){Ks++,qc[Ks]=n.current,n.current=r}var ei={},jt=Zr(ei),en=Zr(!1),Hi=ei;function Qs(n,r){var a=n.type.contextTypes;if(!a)return ei;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function tn(n){return n=n.childContextTypes,n!=null}function Ol(){et(en),et(jt)}function up(n,r,a){if(jt.current!==ei)throw Error(t(168));Xe(jt,r),Xe(en,a)}function cp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Oe(n)||"Unknown",d));return te({},a,c)}function Ll(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ei,Hi=jt.current,Xe(jt,n),Xe(en,en.current),!0}function hp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=cp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,et(en),et(jt),Xe(jt,n)):et(en),Xe(en,a)}var Ar=null,Ml=!1,Hc=!1;function dp(n){Ar===null?Ar=[n]:Ar.push(n)}function R0(n){Ml=!0,dp(n)}function ti(){if(!Hc&&Ar!==null){Hc=!0;var n=0,r=Ve;try{var a=Ar;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ar=null,Ml=!1}catch(d){throw Ar!==null&&(Ar=Ar.slice(n+1)),Cs(Li,ti),d}finally{Ve=r,Hc=!1}}return null}var Xs=[],Ys=0,Fl=null,jl=0,En=[],Tn=0,Wi=null,kr=1,Rr="";function Gi(n,r){Xs[Ys++]=jl,Xs[Ys++]=Fl,Fl=n,jl=r}function fp(n,r,a){En[Tn++]=kr,En[Tn++]=Rr,En[Tn++]=Wi,Wi=n;var c=kr;n=Rr;var d=32-Kt(c)-1;c&=~(1<<d),a+=1;var p=32-Kt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,kr=1<<32-Kt(r)+d|a<<d|c,Rr=p+n}else kr=1<<p|a<<d|c,Rr=n}function Wc(n){n.return!==null&&(Gi(n,1),fp(n,1,0))}function Gc(n){for(;n===Fl;)Fl=Xs[--Ys],Xs[Ys]=null,jl=Xs[--Ys],Xs[Ys]=null;for(;n===Wi;)Wi=En[--Tn],En[Tn]=null,Rr=En[--Tn],En[Tn]=null,kr=En[--Tn],En[Tn]=null}var dn=null,fn=null,rt=!1,jn=null;function pp(n,r){var a=kn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function mp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,dn=n,fn=Jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,dn=n,fn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:kr,overflow:Rr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=kn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,dn=n,fn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(rt){var r=fn;if(r){var a=r;if(!mp(n,r)){if(Kc(n))throw Error(t(418));r=Jr(a.nextSibling);var c=dn;r&&mp(n,r)?pp(c,a):(n.flags=n.flags&-4097|2,rt=!1,dn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,rt=!1,dn=n}}}function gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function Ul(n){if(n!==dn)return!1;if(!rt)return gp(n),rt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Uc(n.type,n.memoizedProps)),r&&(r=fn)){if(Kc(n))throw yp(),Error(t(418));for(;r;)pp(n,r),r=Jr(r.nextSibling)}if(gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){fn=Jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}fn=null}}else fn=dn?Jr(n.stateNode.nextSibling):null;return!0}function yp(){for(var n=fn;n;)n=Jr(n.nextSibling)}function Js(){fn=dn=null,rt=!1}function Xc(n){jn===null?jn=[n]:jn.push(n)}var C0=Se.ReactCurrentBatchConfig;function ha(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function _p(n){var r=n._init;return r(n._payload)}function vp(n){function r(M,P){if(n){var F=M.deletions;F===null?(M.deletions=[P],M.flags|=16):F.push(P)}}function a(M,P){if(!n)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=ui(M,P),M.index=0,M.sibling=null,M}function p(M,P,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<P?(M.flags|=2,P):F):(M.flags|=2,P)):(M.flags|=1048576,P)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,P,F,J){return P===null||P.tag!==6?(P=zh(F,M.mode,J),P.return=M,P):(P=d(P,F),P.return=M,P)}function R(M,P,F,J){var le=F.type;return le===N?K(M,P,F.props.children,J,F.key):P!==null&&(P.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ue&&_p(le)===P.type)?(J=d(P,F.props),J.ref=ha(M,P,F),J.return=M,J):(J=hu(F.type,F.key,F.props,null,M.mode,J),J.ref=ha(M,P,F),J.return=M,J)}function j(M,P,F,J){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=Bh(F,M.mode,J),P.return=M,P):(P=d(P,F.children||[]),P.return=M,P)}function K(M,P,F,J,le){return P===null||P.tag!==7?(P=ts(F,M.mode,J,le),P.return=M,P):(P=d(P,F),P.return=M,P)}function X(M,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return P=zh(""+P,M.mode,F),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Je:return F=hu(P.type,P.key,P.props,null,M.mode,F),F.ref=ha(M,null,P),F.return=M,F;case ke:return P=Bh(P,M.mode,F),P.return=M,P;case Ue:var J=P._init;return X(M,J(P._payload),F)}if(mr(P)||he(P))return P=ts(P,M.mode,F,null),P.return=M,P;zl(M,P)}return null}function G(M,P,F,J){var le=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:I(M,P,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Je:return F.key===le?R(M,P,F,J):null;case ke:return F.key===le?j(M,P,F,J):null;case Ue:return le=F._init,G(M,P,le(F._payload),J)}if(mr(F)||he(F))return le!==null?null:K(M,P,F,J,null);zl(M,F)}return null}function ne(M,P,F,J,le){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(F)||null,I(P,M,""+J,le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Je:return M=M.get(J.key===null?F:J.key)||null,R(P,M,J,le);case ke:return M=M.get(J.key===null?F:J.key)||null,j(P,M,J,le);case Ue:var pe=J._init;return ne(M,P,F,pe(J._payload),le)}if(mr(J)||he(J))return M=M.get(F)||null,K(P,M,J,le,null);zl(P,J)}return null}function oe(M,P,F,J){for(var le=null,pe=null,me=P,ve=P=0,xt=null;me!==null&&ve<F.length;ve++){me.index>ve?(xt=me,me=null):xt=me.sibling;var ze=G(M,me,F[ve],J);if(ze===null){me===null&&(me=xt);break}n&&me&&ze.alternate===null&&r(M,me),P=p(ze,P,ve),pe===null?le=ze:pe.sibling=ze,pe=ze,me=xt}if(ve===F.length)return a(M,me),rt&&Gi(M,ve),le;if(me===null){for(;ve<F.length;ve++)me=X(M,F[ve],J),me!==null&&(P=p(me,P,ve),pe===null?le=me:pe.sibling=me,pe=me);return rt&&Gi(M,ve),le}for(me=c(M,me);ve<F.length;ve++)xt=ne(me,M,ve,F[ve],J),xt!==null&&(n&&xt.alternate!==null&&me.delete(xt.key===null?ve:xt.key),P=p(xt,P,ve),pe===null?le=xt:pe.sibling=xt,pe=xt);return n&&me.forEach(function(ci){return r(M,ci)}),rt&&Gi(M,ve),le}function ae(M,P,F,J){var le=he(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var pe=le=null,me=P,ve=P=0,xt=null,ze=F.next();me!==null&&!ze.done;ve++,ze=F.next()){me.index>ve?(xt=me,me=null):xt=me.sibling;var ci=G(M,me,ze.value,J);if(ci===null){me===null&&(me=xt);break}n&&me&&ci.alternate===null&&r(M,me),P=p(ci,P,ve),pe===null?le=ci:pe.sibling=ci,pe=ci,me=xt}if(ze.done)return a(M,me),rt&&Gi(M,ve),le;if(me===null){for(;!ze.done;ve++,ze=F.next())ze=X(M,ze.value,J),ze!==null&&(P=p(ze,P,ve),pe===null?le=ze:pe.sibling=ze,pe=ze);return rt&&Gi(M,ve),le}for(me=c(M,me);!ze.done;ve++,ze=F.next())ze=ne(me,M,ve,ze.value,J),ze!==null&&(n&&ze.alternate!==null&&me.delete(ze.key===null?ve:ze.key),P=p(ze,P,ve),pe===null?le=ze:pe.sibling=ze,pe=ze);return n&&me.forEach(function(aw){return r(M,aw)}),rt&&Gi(M,ve),le}function ht(M,P,F,J){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Je:e:{for(var le=F.key,pe=P;pe!==null;){if(pe.key===le){if(le=F.type,le===N){if(pe.tag===7){a(M,pe.sibling),P=d(pe,F.props.children),P.return=M,M=P;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ue&&_p(le)===pe.type){a(M,pe.sibling),P=d(pe,F.props),P.ref=ha(M,pe,F),P.return=M,M=P;break e}a(M,pe);break}else r(M,pe);pe=pe.sibling}F.type===N?(P=ts(F.props.children,M.mode,J,F.key),P.return=M,M=P):(J=hu(F.type,F.key,F.props,null,M.mode,J),J.ref=ha(M,P,F),J.return=M,M=J)}return _(M);case ke:e:{for(pe=F.key;P!==null;){if(P.key===pe)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){a(M,P.sibling),P=d(P,F.children||[]),P.return=M,M=P;break e}else{a(M,P);break}else r(M,P);P=P.sibling}P=Bh(F,M.mode,J),P.return=M,M=P}return _(M);case Ue:return pe=F._init,ht(M,P,pe(F._payload),J)}if(mr(F))return oe(M,P,F,J);if(he(F))return ae(M,P,F,J);zl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,F),P.return=M,M=P):(a(M,P),P=zh(F,M.mode,J),P.return=M,M=P),_(M)):a(M,P)}return ht}var Zs=vp(!0),wp=vp(!1),Bl=Zr(null),$l=null,eo=null,Yc=null;function Jc(){Yc=eo=$l=null}function Zc(n){var r=Bl.current;et(Bl),n._currentValue=r}function eh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function to(n,r){$l=n,Yc=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(nn=!0),n.firstContext=null)}function In(n){var r=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:r,next:null},eo===null){if($l===null)throw Error(t(308));eo=n,$l.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return r}var Ki=null;function th(n){Ki===null?Ki=[n]:Ki.push(n)}function Ep(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,th(r)):(a.next=d.next,d.next=a),r.interleaved=a,Cr(n,c)}function Cr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ni=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ri(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Cr(n,a)}return d=c.interleaved,d===null?(r.next=r,th(c)):(r.next=d.next,d.next=r),c.interleaved=r,Cr(n,a)}function ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Wr(n,a)}}function Ip(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Hl(n,r,a,c){var d=n.updateQueue;ni=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var R=I,j=R.next;R.next=null,_===null?p=j:_.next=j,_=R;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==_&&(I===null?K.firstBaseUpdate=j:I.next=j,K.lastBaseUpdate=R))}if(p!==null){var X=d.baseState;_=0,K=j=R=null,I=p;do{var G=I.lane,ne=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,ae=I;switch(G=r,ne=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){X=oe.call(ne,X,G);break e}X=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,G=typeof oe=="function"?oe.call(ne,X,G):oe,G==null)break e;X=te({},X,G);break e;case 2:ni=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else ne={eventTime:ne,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(j=K=ne,R=X):K=K.next=ne,_|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(R=X),d.baseState=R,d.firstBaseUpdate=j,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Yi|=_,n.lanes=_,n.memoizedState=X}}function Sp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},rr=Zr(da),fa=Zr(da),pa=Zr(da);function Qi(n){if(n===da)throw Error(t(174));return n}function rh(n,r){switch(Xe(pa,r),Xe(fa,n),Xe(rr,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:wt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=wt(r,n)}et(rr),Xe(rr,r)}function no(){et(rr),et(fa),et(pa)}function Ap(n){Qi(pa.current);var r=Qi(rr.current),a=wt(r,n.type);r!==a&&(Xe(fa,n),Xe(rr,a))}function ih(n){fa.current===n&&(et(rr),et(fa))}var st=Zr(0);function Wl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Gl=Se.ReactCurrentDispatcher,ah=Se.ReactCurrentBatchConfig,Xi=0,ot=null,Tt=null,Rt=null,Kl=!1,ma=!1,ga=0,x0=0;function Ut(){throw Error(t(321))}function lh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Fn(n[a],r[a]))return!1;return!0}function uh(n,r,a,c,d,p){if(Xi=p,ot=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Gl.current=n===null||n.memoizedState===null?D0:V0,n=a(c,d),ma){p=0;do{if(ma=!1,ga=0,25<=p)throw Error(t(301));p+=1,Rt=Tt=null,r.updateQueue=null,Gl.current=O0,n=a(c,d)}while(ma)}if(Gl.current=Yl,r=Tt!==null&&Tt.next!==null,Xi=0,Rt=Tt=ot=null,Kl=!1,r)throw Error(t(300));return n}function ch(){var n=ga!==0;return ga=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ot.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function Sn(){if(Tt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var r=Rt===null?ot.memoizedState:Rt.next;if(r!==null)Rt=r,Tt=n;else{if(n===null)throw Error(t(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Rt===null?ot.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function ya(n,r){return typeof r=="function"?r(n):r}function hh(n){var r=Sn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,R=null,j=p;do{var K=j.lane;if((Xi&K)===K)R!==null&&(R=R.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var X={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};R===null?(I=R=X,_=c):R=R.next=X,ot.lanes|=K,Yi|=K}j=j.next}while(j!==null&&j!==p);R===null?_=c:R.next=I,Fn(c,r.memoizedState)||(nn=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,ot.lanes|=p,Yi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dh(n){var r=Sn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Fn(p,r.memoizedState)||(nn=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function kp(){}function Rp(n,r){var a=ot,c=Sn(),d=r(),p=!Fn(c.memoizedState,d);if(p&&(c.memoizedState=d,nn=!0),c=c.queue,fh(Pp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Rt!==null&&Rt.memoizedState.tag&1){if(a.flags|=2048,_a(9,xp.bind(null,a,c,d,r),void 0,null),Ct===null)throw Error(t(349));(Xi&30)!==0||Cp(a,r,d)}return d}function Cp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=ot.updateQueue,r===null?(r={lastEffect:null,stores:null},ot.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function xp(n,r,a,c){r.value=a,r.getSnapshot=c,Np(r)&&bp(n)}function Pp(n,r,a){return a(function(){Np(r)&&bp(n)})}function Np(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Fn(n,a)}catch{return!0}}function bp(n){var r=Cr(n,1);r!==null&&$n(r,n,1,-1)}function Dp(n){var r=ir();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r.queue=n,n=n.dispatch=b0.bind(null,ot,n),[r.memoizedState,n]}function _a(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=ot.updateQueue,r===null?(r={lastEffect:null,stores:null},ot.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Vp(){return Sn().memoizedState}function Ql(n,r,a,c){var d=ir();ot.flags|=n,d.memoizedState=_a(1|r,a,void 0,c===void 0?null:c)}function Xl(n,r,a,c){var d=Sn();c=c===void 0?null:c;var p=void 0;if(Tt!==null){var _=Tt.memoizedState;if(p=_.destroy,c!==null&&lh(c,_.deps)){d.memoizedState=_a(r,a,p,c);return}}ot.flags|=n,d.memoizedState=_a(1|r,a,p,c)}function Op(n,r){return Ql(8390656,8,n,r)}function fh(n,r){return Xl(2048,8,n,r)}function Lp(n,r){return Xl(4,2,n,r)}function Mp(n,r){return Xl(4,4,n,r)}function Fp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function jp(n,r,a){return a=a!=null?a.concat([n]):null,Xl(4,4,Fp.bind(null,r,n),a)}function ph(){}function Up(n,r){var a=Sn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function zp(n,r){var a=Sn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&lh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Bp(n,r,a){return(Xi&21)===0?(n.baseState&&(n.baseState=!1,nn=!0),n.memoizedState=a):(Fn(a,r)||(a=ji(),ot.lanes|=a,Yi|=a,n.baseState=!0),r)}function P0(n,r){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),r()}finally{Ve=a,ah.transition=c}}function $p(){return Sn().memoizedState}function N0(n,r,a){var c=ai(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},qp(n))Hp(r,a);else if(a=Ep(n,r,a,c),a!==null){var d=Yt();$n(a,n,c,d),Wp(a,r,c)}}function b0(n,r,a){var c=ai(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(qp(n))Hp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,Fn(I,_)){var R=r.interleaved;R===null?(d.next=d,th(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=Ep(n,r,d,c),a!==null&&(d=Yt(),$n(a,n,c,d),Wp(a,r,c))}}function qp(n){var r=n.alternate;return n===ot||r!==null&&r===ot}function Hp(n,r){ma=Kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Wp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Wr(n,a)}}var Yl={readContext:In,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},D0={readContext:In,useCallback:function(n,r){return ir().memoizedState=[n,r===void 0?null:r],n},useContext:In,useEffect:Op,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,Fp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=ir();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=ir();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=N0.bind(null,ot,n),[c.memoizedState,n]},useRef:function(n){var r=ir();return n={current:n},r.memoizedState=n},useState:Dp,useDebugValue:ph,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=Dp(!1),r=n[0];return n=P0.bind(null,n[1]),ir().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=ot,d=ir();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Ct===null)throw Error(t(349));(Xi&30)!==0||Cp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Op(Pp.bind(null,c,p,n),[n]),c.flags|=2048,_a(9,xp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=ir(),r=Ct.identifierPrefix;if(rt){var a=Rr,c=kr;a=(c&~(1<<32-Kt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ga++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=x0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},V0={readContext:In,useCallback:Up,useContext:In,useEffect:fh,useImperativeHandle:jp,useInsertionEffect:Lp,useLayoutEffect:Mp,useMemo:zp,useReducer:hh,useRef:Vp,useState:function(){return hh(ya)},useDebugValue:ph,useDeferredValue:function(n){var r=Sn();return Bp(r,Tt.memoizedState,n)},useTransition:function(){var n=hh(ya)[0],r=Sn().memoizedState;return[n,r]},useMutableSource:kp,useSyncExternalStore:Rp,useId:$p,unstable_isNewReconciler:!1},O0={readContext:In,useCallback:Up,useContext:In,useEffect:fh,useImperativeHandle:jp,useInsertionEffect:Lp,useLayoutEffect:Mp,useMemo:zp,useReducer:dh,useRef:Vp,useState:function(){return dh(ya)},useDebugValue:ph,useDeferredValue:function(n){var r=Sn();return Tt===null?r.memoizedState=n:Bp(r,Tt.memoizedState,n)},useTransition:function(){var n=dh(ya)[0],r=Sn().memoizedState;return[n,r]},useMutableSource:kp,useSyncExternalStore:Rp,useId:$p,unstable_isNewReconciler:!1};function Un(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function mh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Yt(),d=ai(n),p=xr(c,d);p.payload=r,a!=null&&(p.callback=a),r=ri(n,p,d),r!==null&&($n(r,n,d,c),ql(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Yt(),d=ai(n),p=xr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=ri(n,p,d),r!==null&&($n(r,n,d,c),ql(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Yt(),c=ai(n),d=xr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ri(n,d,c),r!==null&&($n(r,n,c,a),ql(r,n,c))}};function Gp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!ia(a,c)||!ia(d,p):!0}function Kp(n,r,a){var c=!1,d=ei,p=r.contextType;return typeof p=="object"&&p!==null?p=In(p):(d=tn(r)?Hi:jt.current,c=r.contextTypes,p=(c=c!=null)?Qs(n,d):ei),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Qp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Jl.enqueueReplaceState(r,r.state,null)}function gh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},nh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=In(p):(p=tn(r)?Hi:jt.current,d.context=Qs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(mh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Jl.enqueueReplaceState(d,d.state,null),Hl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function yh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function _h(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function Xp(n,r,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Dh=c),_h(n,r)},a}function Yp(n,r,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){_h(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){_h(n,r),typeof c!="function"&&(si===null?si=new Set([this]):si.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Jp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new L0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=X0.bind(null,n,r,a),r.then(n,n))}function Zp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function em(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=xr(-1,1),r.tag=2,ri(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var M0=Se.ReactCurrentOwner,nn=!1;function Xt(n,r,a,c){r.child=n===null?wp(r,null,a,c):Zs(r,n.child,a,c)}function tm(n,r,a,c,d){a=a.render;var p=r.ref;return to(r,d),c=uh(n,r,a,c,p,d),a=ch(),n!==null&&!nn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Pr(n,r,d)):(rt&&a&&Wc(r),r.flags|=1,Xt(n,r,c,d),r.child)}function nm(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Uh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,rm(n,r,p,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(_,c)&&n.ref===r.ref)return Pr(n,r,d)}return r.flags|=1,n=ui(p,c),n.ref=r.ref,n.return=r,r.child=n}function rm(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ia(p,c)&&n.ref===r.ref)if(nn=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(nn=!0);else return r.lanes=n.lanes,Pr(n,r,d)}return vh(n,r,a,c,d)}function im(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(so,pn),pn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xe(so,pn),pn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Xe(so,pn),pn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,Xe(so,pn),pn|=c;return Xt(n,r,d,a),r.child}function sm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vh(n,r,a,c,d){var p=tn(a)?Hi:jt.current;return p=Qs(r,p),to(r,d),a=uh(n,r,a,c,p,d),c=ch(),n!==null&&!nn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Pr(n,r,d)):(rt&&c&&Wc(r),r.flags|=1,Xt(n,r,a,d),r.child)}function om(n,r,a,c,d){if(tn(a)){var p=!0;Ll(r)}else p=!1;if(to(r,d),r.stateNode===null)eu(n,r),Kp(r,a,c),gh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var R=_.context,j=a.contextType;typeof j=="object"&&j!==null?j=In(j):(j=tn(a)?Hi:jt.current,j=Qs(r,j));var K=a.getDerivedStateFromProps,X=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||R!==j)&&Qp(r,_,c,j),ni=!1;var G=r.memoizedState;_.state=G,Hl(r,c,_,d),R=r.memoizedState,I!==c||G!==R||en.current||ni?(typeof K=="function"&&(mh(r,a,K,c),R=r.memoizedState),(I=ni||Gp(r,a,I,c,G,R,j))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=j,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,Tp(n,r),I=r.memoizedProps,j=r.type===r.elementType?I:Un(r.type,I),_.props=j,X=r.pendingProps,G=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=In(R):(R=tn(a)?Hi:jt.current,R=Qs(r,R));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==X||G!==R)&&Qp(r,_,c,R),ni=!1,G=r.memoizedState,_.state=G,Hl(r,c,_,d);var oe=r.memoizedState;I!==X||G!==oe||en.current||ni?(typeof ne=="function"&&(mh(r,a,ne,c),oe=r.memoizedState),(j=ni||Gp(r,a,j,c,G,oe,R)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),_.props=c,_.state=oe,_.context=R,c=j):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return wh(n,r,a,c,p,d)}function wh(n,r,a,c,d,p){sm(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&hp(r,a,!1),Pr(n,r,p);c=r.stateNode,M0.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Zs(r,n.child,null,p),r.child=Zs(r,null,I,p)):Xt(n,r,I,p),r.memoizedState=c.state,d&&hp(r,a,!0),r.child}function am(n){var r=n.stateNode;r.pendingContext?up(n,r.pendingContext,r.pendingContext!==r.context):r.context&&up(n,r.context,!1),rh(n,r.containerInfo)}function lm(n,r,a,c,d){return Js(),Xc(d),r.flags|=256,Xt(n,r,a,c),r.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function um(n,r,a){var c=r.pendingProps,d=st.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xe(st,d&1),n===null)return Qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=du(_,c,0,null),n=ts(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Th(a),r.memoizedState=Eh,n):Ih(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return F0(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=ui(d,R),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ui(I,p):(p=ts(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Th(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=Eh,c}return p=n.child,n=p.sibling,c=ui(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Ih(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Xc(c),Zs(r,n.child,null,a),n=Ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function F0(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=yh(Error(t(422))),Zl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),p=ts(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Zs(r,n.child,null,_),r.child.memoizedState=Th(_),r.memoizedState=Eh,p);if((r.mode&1)===0)return Zl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=yh(p,c,void 0),Zl(n,r,_,c)}if(I=(_&n.childLanes)!==0,nn||I){if(c=Ct,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Cr(n,d),$n(c,n,d,-1))}return jh(),c=yh(Error(t(421))),Zl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Y0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,fn=Jr(d.nextSibling),dn=r,rt=!0,jn=null,n!==null&&(En[Tn++]=kr,En[Tn++]=Rr,En[Tn++]=Wi,kr=n.id,Rr=n.overflow,Wi=r),r=Ih(r,c.children),r.flags|=4096,r)}function cm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),eh(n.return,r,a)}function Sh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function hm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Xt(n,r,c.children,a),c=st.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cm(n,a,r);else if(n.tag===19)cm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xe(st,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Sh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Sh(r,!0,a,null,p);break;case"together":Sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Yi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ui(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ui(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function j0(n,r,a){switch(r.tag){case 3:am(r),Js();break;case 5:Ap(r);break;case 1:tn(r.type)&&Ll(r);break;case 4:rh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Xe(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Xe(st,st.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?um(n,r,a):(Xe(st,st.current&1),n=Pr(n,r,a),n!==null?n.sibling:null);Xe(st,st.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return hm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xe(st,st.current),c)break;return null;case 22:case 23:return r.lanes=0,im(n,r,a)}return Pr(n,r,a)}var dm,Ah,fm,pm;dm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},fm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(rr.current);var p=null;switch(a){case"input":d=Ge(n,d),c=Ge(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Do(n,d),c=Do(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Dl)}jo(a,c);var _;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var I=d[j];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?p||(p=[]):(p=p||[]).push(j,null));for(j in c){var R=c[j];if(I=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&R!==I&&(R!=null||I!=null))if(j==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&I[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(j,a)),a=R;else j==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(p=p||[]).push(j,R)):j==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(j,""+R):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(R!=null&&j==="onScroll"&&Ze("scroll",n),p||I===R||(p=[])):(p=p||[]).push(j,R))}a&&(p=p||[]).push("style",a);var j=p;(r.updateQueue=j)&&(r.flags|=4)}},pm=function(n,r,a,c){a!==c&&(r.flags|=4)};function va(n,r){if(!rt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function zt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function U0(n,r,a){var c=r.pendingProps;switch(Gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(r),null;case 1:return tn(r.type)&&Ol(),zt(r),null;case 3:return c=r.stateNode,no(),et(en),et(jt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,jn!==null&&(Lh(jn),jn=null))),Ah(n,r),zt(r),null;case 5:ih(r);var d=Qi(pa.current);if(a=r.type,n!==null&&r.stateNode!=null)fm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return zt(r),null}if(n=Qi(rr.current),Ul(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[nr]=r,c[ua]=p,n=(r.mode&1)!==0,a){case"dialog":Ze("cancel",c),Ze("close",c);break;case"iframe":case"object":case"embed":Ze("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)Ze(oa[d],c);break;case"source":Ze("error",c);break;case"img":case"image":case"link":Ze("error",c),Ze("load",c);break;case"details":Ze("toggle",c);break;case"input":De(c,p),Ze("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ze("invalid",c);break;case"textarea":vs(c,p),Ze("invalid",c)}jo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&bl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&bl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&Ze("scroll",c)}switch(a){case"input":ye(c),il(c,p,!0);break;case"textarea":ye(c),Vo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Dl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=vt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[nr]=r,n[ua]=c,dm(n,r,!1,!1),r.stateNode=n;e:{switch(_=Uo(a,c),a){case"dialog":Ze("cancel",n),Ze("close",n),d=c;break;case"iframe":case"object":case"embed":Ze("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)Ze(oa[d],n);d=c;break;case"source":Ze("error",n),d=c;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),d=c;break;case"details":Ze("toggle",n),d=c;break;case"input":De(n,c),d=Ge(n,c),Ze("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),Ze("invalid",n);break;case"textarea":vs(n,c),d=Do(n,c),Ze("invalid",n);break;default:d=c}jo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var R=I[p];p==="style"?Mo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Oo(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&zr(n,R):typeof R=="number"&&zr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&Ze("scroll",n):R!=null&&ge(n,p,R,_))}switch(a){case"input":ye(n),il(n,c,!1);break;case"textarea":ye(n),Vo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?gr(n,!!c.multiple,p,!1):c.defaultValue!=null&&gr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return zt(r),null;case 6:if(n&&r.stateNode!=null)pm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(pa.current),Qi(rr.current),Ul(r)){if(c=r.stateNode,a=r.memoizedProps,c[nr]=r,(p=c.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[nr]=r,r.stateNode=c}return zt(r),null;case 13:if(et(st),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rt&&fn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yp(),Js(),r.flags|=98560,p=!1;else if(p=Ul(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[nr]=r}else Js(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;zt(r),p=!1}else jn!==null&&(Lh(jn),jn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(st.current&1)!==0?It===0&&(It=3):jh())),r.updateQueue!==null&&(r.flags|=4),zt(r),null);case 4:return no(),Ah(n,r),n===null&&aa(r.stateNode.containerInfo),zt(r),null;case 10:return Zc(r.type._context),zt(r),null;case 17:return tn(r.type)&&Ol(),zt(r),null;case 19:if(et(st),p=r.memoizedState,p===null)return zt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)va(p,!1);else{if(It!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Wl(n),_!==null){for(r.flags|=128,va(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xe(st,st.current&1|2),r.child}n=n.sibling}p.tail!==null&&Qe()>oo&&(r.flags|=128,c=!0,va(p,!1),r.lanes=4194304)}else{if(!c)if(n=Wl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),va(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!rt)return zt(r),null}else 2*Qe()-p.renderingStartTime>oo&&a!==1073741824&&(r.flags|=128,c=!0,va(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Qe(),r.sibling=null,a=st.current,Xe(st,c?a&1|2:a&1),r):(zt(r),null);case 22:case 23:return Fh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(pn&1073741824)!==0&&(zt(r),r.subtreeFlags&6&&(r.flags|=8192)):zt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function z0(n,r){switch(Gc(r),r.tag){case 1:return tn(r.type)&&Ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return no(),et(en),et(jt),oh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ih(r),null;case 13:if(et(st),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Js()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return et(st),null;case 4:return no(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var tu=!1,Bt=!1,B0=typeof WeakSet=="function"?WeakSet:Set,se=null;function io(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ut(n,r,c)}else a.current=null}function kh(n,r,a){try{a()}catch(c){ut(n,r,c)}}var mm=!1;function $0(n,r){if(Fc=Qr,n=Gf(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,R=-1,j=0,K=0,X=n,G=null;t:for(;;){for(var ne;X!==a||d!==0&&X.nodeType!==3||(I=_+d),X!==p||c!==0&&X.nodeType!==3||(R=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(ne=X.firstChild)!==null;)G=X,X=ne;for(;;){if(X===n)break t;if(G===a&&++j===d&&(I=_),G===p&&++K===c&&(R=_),(ne=X.nextSibling)!==null)break;X=G,G=X.parentNode}X=ne}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},Qr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,ht=oe.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?ae:Un(r.type,ae),ht);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){ut(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=mm,mm=!1,oe}function wa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&kh(r,a,p)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Rh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function gm(n){var r=n.alternate;r!==null&&(n.alternate=null,gm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[nr],delete r[ua],delete r[$c],delete r[A0],delete r[k0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ym(n){return n.tag===5||n.tag===3||n.tag===4}function _m(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Dl));else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}function xh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xh(n,r,a),n=n.sibling;n!==null;)xh(n,r,a),n=n.sibling}var Vt=null,zn=!1;function ii(n,r,a){for(a=a.child;a!==null;)vm(n,r,a),a=a.sibling}function vm(n,r,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 5:Bt||io(a,r);case 6:var c=Vt,d=zn;Vt=null,ii(n,r,a),Vt=c,zn=d,Vt!==null&&(zn?(n=Vt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Vt.removeChild(a.stateNode));break;case 18:Vt!==null&&(zn?(n=Vt,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Ln(n)):Bc(Vt,a.stateNode));break;case 4:c=Vt,d=zn,Vt=a.stateNode.containerInfo,zn=!0,ii(n,r,a),Vt=c,zn=d;break;case 0:case 11:case 14:case 15:if(!Bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&kh(a,r,_),d=d.next}while(d!==c)}ii(n,r,a);break;case 1:if(!Bt&&(io(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){ut(a,r,I)}ii(n,r,a);break;case 21:ii(n,r,a);break;case 22:a.mode&1?(Bt=(c=Bt)||a.memoizedState!==null,ii(n,r,a),Bt=c):ii(n,r,a);break;default:ii(n,r,a)}}function wm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new B0),r.forEach(function(c){var d=J0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:Vt=I.stateNode,zn=!1;break e;case 3:Vt=I.stateNode.containerInfo,zn=!0;break e;case 4:Vt=I.stateNode.containerInfo,zn=!0;break e}I=I.return}if(Vt===null)throw Error(t(160));vm(p,_,d),Vt=null,zn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(j){ut(d,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Em(r,n),r=r.sibling}function Em(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bn(r,n),sr(n),c&4){try{wa(3,n,n.return),nu(3,n)}catch(ae){ut(n,n.return,ae)}try{wa(5,n,n.return)}catch(ae){ut(n,n.return,ae)}}break;case 1:Bn(r,n),sr(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(Bn(r,n),sr(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var d=n.stateNode;try{zr(d,"")}catch(ae){ut(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Nt(d,p),Uo(I,_);var j=Uo(I,p);for(_=0;_<R.length;_+=2){var K=R[_],X=R[_+1];K==="style"?Mo(d,X):K==="dangerouslySetInnerHTML"?Oo(d,X):K==="children"?zr(d,X):ge(d,K,X,j)}switch(I){case"input":gn(d,p);break;case"textarea":ws(d,p);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?gr(d,!!p.multiple,ne,!1):G!==!!p.multiple&&(p.defaultValue!=null?gr(d,!!p.multiple,p.defaultValue,!0):gr(d,!!p.multiple,p.multiple?[]:"",!1))}d[ua]=p}catch(ae){ut(n,n.return,ae)}}break;case 6:if(Bn(r,n),sr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){ut(n,n.return,ae)}}break;case 3:if(Bn(r,n),sr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(r.containerInfo)}catch(ae){ut(n,n.return,ae)}break;case 4:Bn(r,n),sr(n);break;case 13:Bn(r,n),sr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(bh=Qe())),c&4&&wm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Bt=(j=Bt)||K,Bn(r,n),Bt=j):Bn(r,n),sr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(X=se=K;se!==null;){switch(G=se,ne=G.child,G.tag){case 0:case 11:case 14:case 15:wa(4,G,G.return);break;case 1:io(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(ae){ut(c,a,ae)}}break;case 5:io(G,G.return);break;case 22:if(G.memoizedState!==null){Sm(X);continue}}ne!==null?(ne.return=G,se=ne):Sm(X)}K=K.sibling}e:for(K=null,X=n;;){if(X.tag===5){if(K===null){K=X;try{d=X.stateNode,j?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=X.stateNode,R=X.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=Lo("display",_))}catch(ae){ut(n,n.return,ae)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(ae){ut(n,n.return,ae)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Bn(r,n),sr(n),c&4&&wm(n);break;case 21:break;default:Bn(r,n),sr(n)}}function sr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(ym(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zr(d,""),c.flags&=-33);var p=_m(n);xh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=_m(n);Ch(n,I,_);break;default:throw Error(t(161))}}catch(R){ut(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function q0(n,r,a){se=n,Tm(n)}function Tm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||tu;if(!_){var I=d.alternate,R=I!==null&&I.memoizedState!==null||Bt;I=tu;var j=Bt;if(tu=_,(Bt=R)&&!j)for(se=d;se!==null;)_=se,R=_.child,_.tag===22&&_.memoizedState!==null?Am(d):R!==null?(R.return=_,se=R):Am(d);for(;p!==null;)se=p,Tm(p),p=p.sibling;se=d,tu=I,Bt=j}Im(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Im(n)}}function Im(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Bt||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Bt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Un(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Sp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Sp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&Ln(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Bt||r.flags&512&&Rh(r)}catch(G){ut(r,r.return,G)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function Sm(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function Am(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(R){ut(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){ut(r,d,R)}}var p=r.return;try{Rh(r)}catch(R){ut(r,p,R)}break;case 5:var _=r.return;try{Rh(r)}catch(R){ut(r,_,R)}}}catch(R){ut(r,r.return,R)}if(r===n){se=null;break}var I=r.sibling;if(I!==null){I.return=r.return,se=I;break}se=r.return}}var H0=Math.ceil,ru=Se.ReactCurrentDispatcher,Ph=Se.ReactCurrentOwner,An=Se.ReactCurrentBatchConfig,je=0,Ct=null,pt=null,Ot=0,pn=0,so=Zr(0),It=0,Ea=null,Yi=0,iu=0,Nh=0,Ta=null,rn=null,bh=0,oo=1/0,Nr=null,su=!1,Dh=null,si=null,ou=!1,oi=null,au=0,Ia=0,Vh=null,lu=-1,uu=0;function Yt(){return(je&6)!==0?Qe():lu!==-1?lu:lu=Qe()}function ai(n){return(n.mode&1)===0?1:(je&2)!==0&&Ot!==0?Ot&-Ot:C0.transition!==null?(uu===0&&(uu=ji()),uu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n)}function $n(n,r,a,c){if(50<Ia)throw Ia=0,Vh=null,Error(t(185));Hr(n,a,c),((je&2)===0||n!==Ct)&&(n===Ct&&((je&2)===0&&(iu|=a),It===4&&li(n,Ot)),sn(n,c),a===1&&je===0&&(r.mode&1)===0&&(oo=Qe()+500,Ml&&ti()))}function sn(n,r){var a=n.callbackNode;vr(n,r);var c=Fi(n,n===Ct?Ot:0);if(c===0)a!==null&&Wo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Wo(a),r===1)n.tag===0?R0(Rm.bind(null,n)):dp(Rm.bind(null,n)),I0(function(){(je&6)===0&&ti()}),a=null;else{switch(Gr(c)){case 1:a=Li;break;case 4:a=Br;break;case 16:a=_n;break;case 536870912:a=ul;break;default:a=_n}a=Om(a,km.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function km(n,r){if(lu=-1,uu=0,(je&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=Fi(n,n===Ct?Ot:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=je;je|=2;var p=xm();(Ct!==n||Ot!==r)&&(Nr=null,oo=Qe()+500,Zi(n,r));do try{K0();break}catch(I){Cm(n,I)}while(!0);Jc(),ru.current=p,je=d,pt!==null?r=0:(Ct=null,Ot=0,r=It)}if(r!==0){if(r===2&&(d=un(n),d!==0&&(c=d,r=Oh(n,d))),r===1)throw a=Ea,Zi(n,0),li(n,c),sn(n,Qe()),a;if(r===6)li(n,c);else{if(d=n.current.alternate,(c&30)===0&&!W0(d)&&(r=cu(n,c),r===2&&(p=un(n),p!==0&&(c=p,r=Oh(n,p))),r===1))throw a=Ea,Zi(n,0),li(n,c),sn(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,rn,Nr);break;case 3:if(li(n,c),(c&130023424)===c&&(r=bh+500-Qe(),10<r)){if(Fi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Yt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(es.bind(null,n,rn,Nr),r);break}es(n,rn,Nr);break;case 4:if(li(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Kt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*H0(c/1960))-c,10<c){n.timeoutHandle=zc(es.bind(null,n,rn,Nr),c);break}es(n,rn,Nr);break;case 5:es(n,rn,Nr);break;default:throw Error(t(329))}}}return sn(n,Qe()),n.callbackNode===a?km.bind(null,n):null}function Oh(n,r){var a=Ta;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=cu(n,r),n!==2&&(r=rn,rn=a,r!==null&&Lh(r)),n}function Lh(n){rn===null?rn=n:rn.push.apply(rn,n)}function W0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Fn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function li(n,r){for(r&=~Nh,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Kt(r),c=1<<a;n[a]=-1,r&=~c}}function Rm(n){if((je&6)!==0)throw Error(t(327));ao();var r=Fi(n,0);if((r&1)===0)return sn(n,Qe()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=un(n);c!==0&&(r=c,a=Oh(n,c))}if(a===1)throw a=Ea,Zi(n,0),li(n,r),sn(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,rn,Nr),sn(n,Qe()),null}function Mh(n,r){var a=je;je|=1;try{return n(r)}finally{je=a,je===0&&(oo=Qe()+500,Ml&&ti())}}function Ji(n){oi!==null&&oi.tag===0&&(je&6)===0&&ao();var r=je;je|=1;var a=An.transition,c=Ve;try{if(An.transition=null,Ve=1,n)return n()}finally{Ve=c,An.transition=a,je=r,(je&6)===0&&ti()}}function Fh(){pn=so.current,et(so)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,T0(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ol();break;case 3:no(),et(en),et(jt),oh();break;case 5:ih(c);break;case 4:no();break;case 13:et(st);break;case 19:et(st);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(Ct=n,pt=n=ui(n.current,null),Ot=pn=r,It=0,Ea=null,Nh=iu=Yi=0,rn=Ta=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Ki=null}return n}function Cm(n,r){do{var a=pt;try{if(Jc(),Gl.current=Yl,Kl){for(var c=ot.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Kl=!1}if(Xi=0,Rt=Tt=ot=null,ma=!1,ga=0,Ph.current=null,a===null||a.return===null){It=1,Ea=r,pt=null;break}e:{var p=n,_=a.return,I=a,R=r;if(r=Ot,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=R,K=I,X=K.tag;if((K.mode&1)===0&&(X===0||X===11||X===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Zp(_);if(ne!==null){ne.flags&=-257,em(ne,_,I,p,r),ne.mode&1&&Jp(p,j,r),r=ne,R=j;var oe=r.updateQueue;if(oe===null){var ae=new Set;ae.add(R),r.updateQueue=ae}else oe.add(R);break e}else{if((r&1)===0){Jp(p,j,r),jh();break e}R=Error(t(426))}}else if(rt&&I.mode&1){var ht=Zp(_);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),em(ht,_,I,p,r),Xc(ro(R,I));break e}}p=R=ro(R,I),It!==4&&(It=2),Ta===null?Ta=[p]:Ta.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Xp(p,R,r);Ip(p,M);break e;case 1:I=R;var P=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(si===null||!si.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=Yp(p,I,r);Ip(p,J);break e}}p=p.return}while(p!==null)}Nm(a)}catch(le){r=le,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function xm(){var n=ru.current;return ru.current=Yl,n===null?Yl:n}function jh(){(It===0||It===3||It===2)&&(It=4),Ct===null||(Yi&268435455)===0&&(iu&268435455)===0||li(Ct,Ot)}function cu(n,r){var a=je;je|=2;var c=xm();(Ct!==n||Ot!==r)&&(Nr=null,Zi(n,r));do try{G0();break}catch(d){Cm(n,d)}while(!0);if(Jc(),je=a,ru.current=c,pt!==null)throw Error(t(261));return Ct=null,Ot=0,It}function G0(){for(;pt!==null;)Pm(pt)}function K0(){for(;pt!==null&&!al();)Pm(pt)}function Pm(n){var r=Vm(n.alternate,n,pn);n.memoizedProps=n.pendingProps,r===null?Nm(n):pt=r,Ph.current=null}function Nm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=U0(a,r,pn),a!==null){pt=a;return}}else{if(a=z0(a,r),a!==null){a.flags&=32767,pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,pt=null;return}}if(r=r.sibling,r!==null){pt=r;return}pt=r=n}while(r!==null);It===0&&(It=5)}function es(n,r,a){var c=Ve,d=An.transition;try{An.transition=null,Ve=1,Q0(n,r,a,c)}finally{An.transition=d,Ve=c}return null}function Q0(n,r,a,c){do ao();while(oi!==null);if((je&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ke(n,p),n===Ct&&(pt=Ct=null,Ot=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,Om(_n,function(){return ao(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=An.transition,An.transition=null;var _=Ve;Ve=1;var I=je;je|=4,Ph.current=null,$0(n,a),Em(a,n),m0(jc),Qr=!!Fc,jc=Fc=null,n.current=a,q0(a),Tc(),je=I,Ve=_,An.transition=p}else n.current=a;if(ou&&(ou=!1,oi=n,au=d),p=n.pendingLanes,p===0&&(si=null),cl(a.stateNode),sn(n,Qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Dh,Dh=null,n;return(au&1)!==0&&n.tag!==0&&ao(),p=n.pendingLanes,(p&1)!==0?n===Vh?Ia++:(Ia=0,Vh=n):Ia=0,ti(),null}function ao(){if(oi!==null){var n=Gr(au),r=An.transition,a=Ve;try{if(An.transition=null,Ve=16>n?16:n,oi===null)var c=!1;else{if(n=oi,oi=null,au=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var I=p.deletions;if(I!==null){for(var R=0;R<I.length;R++){var j=I[R];for(se=j;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:wa(8,K,p)}var X=K.child;if(X!==null)X.return=K,se=X;else for(;se!==null;){K=se;var G=K.sibling,ne=K.return;if(gm(K),K===j){se=null;break}if(G!==null){G.return=ne,se=G;break}se=ne}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var ht=ae.sibling;ae.sibling=null,ae=ht}while(ae!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:wa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var P=n.current;for(se=P;se!==null;){_=se;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,se=F;else e:for(_=P;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:nu(9,I)}}catch(le){ut(I,I.return,le)}if(I===_){se=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,se=J;break e}se=I.return}}if(je=d,ti(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Mi,n)}catch{}c=!0}return c}finally{Ve=a,An.transition=r}}return!1}function bm(n,r,a){r=ro(a,r),r=Xp(n,r,1),n=ri(n,r,1),r=Yt(),n!==null&&(Hr(n,1,r),sn(n,r))}function ut(n,r,a){if(n.tag===3)bm(n,n,a);else for(;r!==null;){if(r.tag===3){bm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(si===null||!si.has(c))){n=ro(a,n),n=Yp(r,n,1),r=ri(r,n,1),n=Yt(),r!==null&&(Hr(r,1,n),sn(r,n));break}}r=r.return}}function X0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Yt(),n.pingedLanes|=n.suspendedLanes&a,Ct===n&&(Ot&a)===a&&(It===4||It===3&&(Ot&130023424)===Ot&&500>Qe()-bh?Zi(n,0):Nh|=a),sn(n,r)}function Dm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ps,Ps<<=1,(Ps&130023424)===0&&(Ps=4194304)));var a=Yt();n=Cr(n,r),n!==null&&(Hr(n,r,a),sn(n,a))}function Y0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Dm(n,a)}function J0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Dm(n,a)}var Vm;Vm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||en.current)nn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return nn=!1,j0(n,r,a);nn=(n.flags&131072)!==0}else nn=!1,rt&&(r.flags&1048576)!==0&&fp(r,jl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=Qs(r,jt.current);to(r,a),d=uh(null,r,c,n,d,a);var p=ch();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,tn(c)?(p=!0,Ll(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nh(r),d.updater=Jl,r.stateNode=d,d._reactInternals=r,gh(r,c,n,a),r=wh(null,r,c,!0,p,a)):(r.tag=0,rt&&p&&Wc(r),Xt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=ew(c),n=Un(c,n),d){case 0:r=vh(null,r,c,n,a);break e;case 1:r=om(null,r,c,n,a);break e;case 11:r=tm(null,r,c,n,a);break e;case 14:r=nm(null,r,c,Un(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Un(c,d),vh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Un(c,d),om(n,r,c,d,a);case 3:e:{if(am(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,Tp(n,r),Hl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=ro(Error(t(423)),r),r=lm(n,r,c,a,d);break e}else if(c!==d){d=ro(Error(t(424)),r),r=lm(n,r,c,a,d);break e}else for(fn=Jr(r.stateNode.containerInfo.firstChild),dn=r,rt=!0,jn=null,a=wp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){r=Pr(n,r,a);break e}Xt(n,r,c,a)}r=r.child}return r;case 5:return Ap(r),n===null&&Qc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Uc(c,d)?_=null:p!==null&&Uc(c,p)&&(r.flags|=32),sm(n,r),Xt(n,r,_,a),r.child;case 6:return n===null&&Qc(r),null;case 13:return um(n,r,a);case 4:return rh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Zs(r,null,c,a):Xt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Un(c,d),tm(n,r,c,d,a);case 7:return Xt(n,r,r.pendingProps,a),r.child;case 8:return Xt(n,r,r.pendingProps.children,a),r.child;case 12:return Xt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,Xe(Bl,c._currentValue),c._currentValue=_,p!==null)if(Fn(p.value,_)){if(p.children===d.children&&!en.current){r=Pr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var R=I.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=xr(-1,a&-a),R.tag=2;var j=p.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?R.next=R:(R.next=K.next,K.next=R),j.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),eh(p.return,a,r),I.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),eh(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Xt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,to(r,a),d=In(d),c=c(d),r.flags|=1,Xt(n,r,c,a),r.child;case 14:return c=r.type,d=Un(c,r.pendingProps),d=Un(c.type,d),nm(n,r,c,d,a);case 15:return rm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Un(c,d),eu(n,r),r.tag=1,tn(c)?(n=!0,Ll(r)):n=!1,to(r,a),Kp(r,c,d),gh(r,c,d,a),wh(null,r,c,!0,n,a);case 19:return hm(n,r,a);case 22:return im(n,r,a)}throw Error(t(156,r.tag))};function Om(n,r){return Cs(n,r)}function Z0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,r,a,c){return new Z0(n,r,a,c)}function Uh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ew(n){if(typeof n=="function")return Uh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===At)return 14}return 2}function ui(n,r){var a=n.alternate;return a===null?(a=kn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Uh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return ts(a.children,d,p,r);case T:_=8,d|=8;break;case k:return n=kn(12,a,r,d|2),n.elementType=k,n.lanes=p,n;case S:return n=kn(13,a,r,d),n.elementType=S,n.lanes=p,n;case it:return n=kn(19,a,r,d),n.elementType=it,n.lanes=p,n;case Be:return du(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case D:_=9;break e;case O:_=11;break e;case At:_=14;break e;case Ue:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=kn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function ts(n,r,a,c){return n=kn(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=kn(22,n,c,r),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,r,a){return n=kn(6,n,null,r),n.lanes=a,n}function Bh(n,r,a){return r=kn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function tw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qr(0),this.expirationTimes=qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $h(n,r,a,c,d,p,_,I,R){return n=new tw(n,r,a,I,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=kn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(p),n}function nw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Lm(n){if(!n)return ei;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(tn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(tn(a))return cp(n,a,r)}return r}function Mm(n,r,a,c,d,p,_,I,R){return n=$h(a,c,!0,n,d,p,_,I,R),n.context=Lm(null),a=n.current,c=Yt(),d=ai(a),p=xr(c,d),p.callback=r??null,ri(a,p,d),n.current.lanes=d,Hr(n,d,c),sn(n,c),n}function fu(n,r,a,c){var d=r.current,p=Yt(),_=ai(d);return a=Lm(a),r.context===null?r.context=a:r.pendingContext=a,r=xr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ri(d,r,_),n!==null&&($n(n,d,_,p),ql(n,d,_)),_}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function qh(n,r){Fm(n,r),(n=n.alternate)&&Fm(n,r)}function rw(){return null}var jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}mu.prototype.render=Hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){fu(null,n,null,null)}),r[Sr]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ml();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Jn.length&&r!==0&&r<Jn[a].priority;a++);Jn.splice(a,0,n),a===0&&_l(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Um(){}function iw(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var j=pu(_);p.call(j)}}var _=Mm(r,c,n,0,null,!1,!1,"",Um);return n._reactRootContainer=_,n[Sr]=_.current,aa(n.nodeType===8?n.parentNode:n),Ji(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var j=pu(R);I.call(j)}}var R=$h(n,0,!1,null,null,!1,!1,"",Um);return n._reactRootContainer=R,n[Sr]=R.current,aa(n.nodeType===8?n.parentNode:n),Ji(function(){fu(r,R,a,c)}),R}function yu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var R=pu(_);I.call(R)}}fu(r,_,n,d)}else _=iw(a,r,n,d,c);return pu(_)}fl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=$r(r.pendingLanes);a!==0&&(Wr(r,a|1),sn(r,Qe()),(je&6)===0&&(oo=Qe()+500,ti()))}break;case 13:Ji(function(){var c=Cr(n,1);if(c!==null){var d=Yt();$n(c,n,1,d)}}),qh(n,1)}},Ns=function(n){if(n.tag===13){var r=Cr(n,134217728);if(r!==null){var a=Yt();$n(r,n,134217728,a)}qh(n,134217728)}},pl=function(n){if(n.tag===13){var r=ai(n),a=Cr(n,r);if(a!==null){var c=Yt();$n(a,n,r,c)}qh(n,r)}},ml=function(){return Ve},gl=function(n,r){var a=Ve;try{return Ve=n,r()}finally{Ve=a}},Ts=function(n,r,a){switch(r){case"input":if(gn(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Vl(c);if(!d)throw Error(t(90));be(c),gn(c,d)}}}break;case"textarea":ws(n,a);break;case"select":r=a.value,r!=null&&gr(n,!!a.multiple,r,!1)}},bi=Mh,Bo=Ji;var sw={usingClientEntryPoint:!1,Events:[ca,Gs,Vl,Xn,zo,Mh]},Sa={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ho(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Mi=_u.inject(ow),ln=_u}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sw,on.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(r))throw Error(t(200));return nw(n,r,null,a)},on.createRoot=function(n,r){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=jm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=$h(n,1,!1,null,null,a,!1,c,d),n[Sr]=r.current,aa(n.nodeType===8?n.parentNode:n),new Hh(r)},on.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ho(r),n=n===null?null:n.stateNode,n},on.flushSync=function(n){return Ji(n)},on.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},on.hydrateRoot=function(n,r,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=jm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Mm(r,null,n,1,a??null,d,!1,p,_),n[Sr]=r.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},on.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},on.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1},on.unstable_batchedUpdates=Mh,on.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},on.version="18.3.1-next-f1338f8080-20240426",on}var Km;function pw(){if(Km)return Qh.exports;Km=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qh.exports=fw(),Qh.exports}var Qm;function mw(){if(Qm)return vu;Qm=1;var i=pw();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var gw=mw();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),by=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=at.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>at.createElement("svg",{ref:y,..._w,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:by("lucide",o),...m},[...h.map(([v,E])=>at.createElement(v,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(i,e)=>{const t=at.forwardRef(({className:s,...o},u)=>at.createElement(vw,{ref:u,iconNode:e,className:by(`lucide-${yw(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ew=mn("CircleAlert",ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Jh=mn("CircleCheckBig",Tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],wu=mn("ClipboardList",Iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Xm=mn("Info",Sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],kw=mn("List",Aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],Ym=mn("LogIn",Rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xw=mn("Plus",Cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Jm=mn("Search",Pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],bw=mn("ShieldAlert",Nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Vw=mn("SquarePen",Dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Lw=mn("Trash2",Ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Fw=mn("User",Mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zm=mn("X",jw),Uw=()=>{};var eg={};/**
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
 */const Dy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},zw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let C=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(C=64)),s.push(t[E],t[A],t[C],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Dy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):zw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new Bw;const C=u<<2|m>>4;if(s.push(C),v!==64){const z=m<<4&240|v>>2;if(s.push(z),A!==64){const Q=v<<6&192|A;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $w=function(i){const e=Dy(i);return Vy.encodeByteArray(e,!0)},Mu=function(i){return $w(i).replace(/\./g,"")},Oy=function(i){try{return Vy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hw=()=>qw().__FIREBASE_DEFAULTS__,Ww=()=>{if(typeof process>"u"||typeof eg>"u")return;const i=eg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Gw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Oy(i[1]);return e&&JSON.parse(e)},rc=()=>{try{return Uw()||Hw()||Ww()||Gw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ly=i=>{var e,t;return(t=(e=rc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Kw=i=>{const e=Ly(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},My=()=>{var i;return(i=rc())===null||i===void 0?void 0:i.config},Fy=i=>{var e;return(e=rc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ko(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Xw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Mu(JSON.stringify(t)),Mu(JSON.stringify(h)),""].join(".")}const Da={};function Yw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Da))Da[e]?i.emulator.push(e):i.prod.push(e);return i}function Jw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let tg=!1;function Uy(i,e){if(typeof window>"u"||typeof document>"u"||!ko(window.location.host)||Da[i]===e||Da[i]||tg)return;Da[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Yw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,z){C.setAttribute("width","24"),C.setAttribute("id",z),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function v(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{tg=!0,h()},C}function E(C,z){C.setAttribute("id",z),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=Jw(s),z=t("text"),Q=document.getElementById(z)||document.createElement("span"),Y=t("learnmore"),H=document.getElementById(Y)||document.createElement("a"),fe=t("preprendIcon"),ue=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const ge=C.element;m(ge),E(H,Y);const Se=v();y(ue,fe),ge.append(ue,Q,H,Se),document.body.appendChild(ge)}u?(Q.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function eE(){var i;const e=(i=rc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function rE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iE(){const i=Wt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function sE(){return!eE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const lE="FirebaseError";class Ur extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=lE,Object.setPrototypeOf(this,Ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?uE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Ur(o,m,s)}}function uE(i,e){return i.replace(cE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const cE=/\{\$([^}]+)}/g;function hE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ls(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(ng(u)&&ng(h)){if(!ls(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function ng(i){return i!==null&&typeof i=="object"}/**
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
 */function Ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dE(i,e){const t=new fE(i,e);return t.subscribe.bind(t)}class fE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");pE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Zh),o.error===void 0&&(o.error=Zh),o.complete===void 0&&(o.complete=Zh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Zh(){}/**
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
 */function Gt(i){return i&&i._delegate?i._delegate:i}class us{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class mE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Qw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yE(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gE(i){return i===ns?void 0:i}function yE(i){return i.instantiationMode==="EAGER"}/**
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
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const vE={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},wE=Pe.INFO,EE={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},TE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=EE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=wE,this._logHandler=TE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const IE=(i,e)=>e.some(t=>i instanceof t);let rg,ig;function SE(){return rg||(rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AE(){return ig||(ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zy=new WeakMap,dd=new WeakMap,By=new WeakMap,ed=new WeakMap,zd=new WeakMap;function kE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(gi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&zy.set(t,i)}).catch(()=>{}),zd.set(e,i),e}function RE(i){if(dd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});dd.set(i,e)}let fd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return dd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||By.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function CE(i){fd=i(fd)}function xE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(td(this),e,...t);return By.set(s,e.sort?e.sort():[e]),gi(s)}:AE().includes(i)?function(...e){return i.apply(td(this),e),gi(zy.get(this))}:function(...e){return gi(i.apply(td(this),e))}}function PE(i){return typeof i=="function"?xE(i):(i instanceof IDBTransaction&&RE(i),IE(i,SE())?new Proxy(i,fd):i)}function gi(i){if(i instanceof IDBRequest)return kE(i);if(ed.has(i))return ed.get(i);const e=PE(i);return e!==i&&(ed.set(i,e),zd.set(e,i)),e}const td=i=>zd.get(i);function NE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=gi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(gi(h.result),y.oldVersion,y.newVersion,gi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const bE=["get","getKey","getAll","getAllKeys","count"],DE=["put","add","delete","clear"],nd=new Map;function sg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=DE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||bE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return nd.set(e,u),u}CE(i=>({...i,get:(e,t,s)=>sg(e,t)||i.get(e,t,s),has:(e,t)=>!!sg(e,t)||i.has(e,t)}));/**
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
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(OE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function OE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",og="0.13.2";/**
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
 */const Lr=new Ud("@firebase/app"),LE="@firebase/app-compat",ME="@firebase/analytics-compat",FE="@firebase/analytics",jE="@firebase/app-check-compat",UE="@firebase/app-check",zE="@firebase/auth",BE="@firebase/auth-compat",$E="@firebase/database",qE="@firebase/data-connect",HE="@firebase/database-compat",WE="@firebase/functions",GE="@firebase/functions-compat",KE="@firebase/installations",QE="@firebase/installations-compat",XE="@firebase/messaging",YE="@firebase/messaging-compat",JE="@firebase/performance",ZE="@firebase/performance-compat",eT="@firebase/remote-config",tT="@firebase/remote-config-compat",nT="@firebase/storage",rT="@firebase/storage-compat",iT="@firebase/firestore",sT="@firebase/ai",oT="@firebase/firestore-compat",aT="firebase",lT="11.10.0";/**
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
 */const md="[DEFAULT]",uT={[pd]:"fire-core",[LE]:"fire-core-compat",[FE]:"fire-analytics",[ME]:"fire-analytics-compat",[UE]:"fire-app-check",[jE]:"fire-app-check-compat",[zE]:"fire-auth",[BE]:"fire-auth-compat",[$E]:"fire-rtdb",[qE]:"fire-data-connect",[HE]:"fire-rtdb-compat",[WE]:"fire-fn",[GE]:"fire-fn-compat",[KE]:"fire-iid",[QE]:"fire-iid-compat",[XE]:"fire-fcm",[YE]:"fire-fcm-compat",[JE]:"fire-perf",[ZE]:"fire-perf-compat",[eT]:"fire-rc",[tT]:"fire-rc-compat",[nT]:"fire-gcs",[rT]:"fire-gcs-compat",[iT]:"fire-fst",[oT]:"fire-fst-compat",[sT]:"fire-vertex","fire-js":"fire-js",[aT]:"fire-js-all"};/**
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
 */const Fu=new Map,cT=new Map,gd=new Map;function ag(i,e){try{i.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function _o(i){const e=i.name;if(gd.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,i);for(const t of Fu.values())ag(t,i);for(const t of cT.values())ag(t,i);return!0}function Bd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function qn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const hT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ga("app","Firebase",hT);/**
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
 */class dT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ro=lT;function $y(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:md,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=My()),!t)throw yi.create("no-options");const u=Fu.get(o);if(u){if(ls(t,u.options)&&ls(s,u.config))return u;throw yi.create("duplicate-app",{appName:o})}const h=new _E(o);for(const y of gd.values())h.addComponent(y);const m=new dT(t,s,h);return Fu.set(o,m),m}function qy(i=md){const e=Fu.get(i);if(!e&&i===md&&My())return $y();if(!e)throw yi.create("no-app",{appName:i});return e}function _i(i,e,t){var s;let o=(s=uT[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(m.join(" "));return}_o(new us(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const fT="firebase-heartbeat-database",pT=1,ja="firebase-heartbeat-store";let rd=null;function Hy(){return rd||(rd=NE(fT,pT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ja)}catch(t){console.warn(t)}}}}).catch(i=>{throw yi.create("idb-open",{originalErrorMessage:i.message})})),rd}async function mT(i){try{const t=(await Hy()).transaction(ja),s=await t.objectStore(ja).get(Wy(i));return await t.done,s}catch(e){if(e instanceof Ur)Lr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(t.message)}}}async function lg(i,e){try{const s=(await Hy()).transaction(ja,"readwrite");await s.objectStore(ja).put(e,Wy(i)),await s.done}catch(t){if(t instanceof Ur)Lr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(s.message)}}}function Wy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const gT=1024,yT=30;class _T{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=ug();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>yT){const h=ET(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Lr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ug(),{heartbeatsToSend:s,unsentEntries:o}=vT(this._heartbeatsCache.heartbeats),u=Mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Lr.warn(t),""}}}function ug(){return new Date().toISOString().substring(0,10)}function vT(i,e=gT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),cg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),cg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function cg(i){return Mu(JSON.stringify({version:2,heartbeats:i})).length}function ET(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function TT(i){_o(new us("platform-logger",e=>new VE(e),"PRIVATE")),_o(new us("heartbeat",e=>new _T(e),"PRIVATE")),_i(pd,og,i),_i(pd,og,"esm2017"),_i("fire-js","")}TT("");var IT="firebase",ST="11.10.0";/**
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
 */_i(IT,ST,"app");function $d(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AT=Gy,Ky=new Ga("auth","Firebase",Gy());/**
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
 */const ju=new Ud("@firebase/auth");function kT(i,...e){ju.logLevel<=Pe.WARN&&ju.warn(`Auth (${Ro}): ${i}`,...e)}function Ru(i,...e){ju.logLevel<=Pe.ERROR&&ju.error(`Auth (${Ro}): ${i}`,...e)}/**
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
 */function fr(i,...e){throw Hd(i,...e)}function Gn(i,...e){return Hd(i,...e)}function qd(i,e,t){const s=Object.assign(Object.assign({},AT()),{[e]:t});return new Ga("auth","Firebase",s).create(e,{appName:i.name})}function ss(i){return qd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RT(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&fr(i,"argument-error"),qd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ky.create(i,...e)}function we(i,e,...t){if(!i)throw Hd(e,...t)}function Dr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ru(e),new Error(e)}function Mr(i,e){i||Dr(e)}/**
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
 */function yd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function CT(){return hg()==="http:"||hg()==="https:"}function hg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CT()||nE()||"connection"in navigator)?navigator.onLine:!0}function PT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=Zw()||rE()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wd(i,e){Mr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DT=new Qa(3e4,6e4);function Gd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Co(i,e,t,s,o={}){return Xy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return tE()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&ko(i.emulatorConfig.host)&&(v.credentials="include"),Qy.fetch()(await Yy(i,i.config.apiHost,t,m),v)})}async function Xy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},NT),e);try{const o=new OT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Eu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Eu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Eu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw qd(i,E,v);fr(i,E)}}catch(o){if(o instanceof Ur)throw o;fr(i,"network-request-failed",{message:String(o)})}}async function VT(i,e,t,s,o={}){const u=await Co(i,e,t,s,o);return"mfaPendingCredential"in u&&fr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Yy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Wd(i.config,o):`${i.config.apiScheme}://${o}`;return bT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class OT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),DT.get())})}}function Eu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Gn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function LT(i,e){return Co(i,"POST","/v1/accounts:delete",e)}async function Uu(i,e){return Co(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Va(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MT(i,e=!1){const t=Gt(i),s=await t.getIdToken(e),o=Kd(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Va(id(o.auth_time)),issuedAtTime:Va(id(o.iat)),expirationTime:Va(id(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function id(i){return Number(i)*1e3}function Kd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const o=Oy(t);return o?JSON.parse(o):(Ru("Failed to decode base64 JWT payload"),null)}catch(o){return Ru("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dg(i){const e=Kd(i);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ua(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ur&&FT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function FT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class jT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ua(i,Uu(t,{idToken:s}));we(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Jy(u.providerUserInfo):[],m=zT(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=y?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new _d(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function UT(i){const e=Gt(i);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Jy(i){return i.map(e=>{var{providerId:t}=e,s=$d(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function BT(i,e){const t=await Xy(i,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Yy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&ko(i.emulatorConfig.host)&&(y.credentials="include"),Qy.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $T(i,e){return Co(i,"POST","/v2/accounts:revokeToken",Gd(i,e))}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await BT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
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
 */function hi(i,e){we(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=$d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new _d(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return MT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await Ua(this,LT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,E;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,fe=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ue=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ge,emailVerified:Se,isAnonymous:Je,providerData:ke,stsTokenManager:N}=t;we(ge&&N,e,"internal-error");const T=po.fromJSON(this.name,N);we(typeof ge=="string",e,"internal-error"),hi(A,e.name),hi(C,e.name),we(typeof Se=="boolean",e,"internal-error"),we(typeof Je=="boolean",e,"internal-error"),hi(z,e.name),hi(Q,e.name),hi(Y,e.name),hi(H,e.name),hi(fe,e.name),hi(ue,e.name);const k=new Hn({uid:ge,auth:e,email:C,emailVerified:Se,displayName:A,isAnonymous:Je,photoURL:Q,phoneNumber:z,tenantId:Y,stsTokenManager:T,createdAt:fe,lastLoginAt:ue});return ke&&Array.isArray(ke)&&(k.providerData=ke.map(x=>Object.assign({},x))),H&&(k._redirectEventId=H),k}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new Hn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await zu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Jy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const y=new Hn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const fg=new Map;function Vr(i){Mr(i instanceof Function,"Expected a class definition");let e=fg.get(i);return e?(Mr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,fg.set(i,e),e)}/**
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
 */class Zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zy.type="NONE";const pg=Zy;/**
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
 */function Cu(i,e,t){return`firebase:${i}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Cu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Cu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uu(this.auth,{idToken:e}).catch(()=>{});return t?Hn._fromGetAccountInfoResponse(this.auth,t,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Vr(pg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Vr(pg);const h=Cu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){let A;if(typeof E=="string"){const C=await Uu(e,{idToken:E}).catch(()=>{});if(!C)break;A=await Hn._fromGetAccountInfoResponse(e,C,E)}else A=Hn._fromJSON(e,E);v!==u&&(m=A),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new mo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new mo(u,e,s))}}/**
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
 */function mg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(r_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s_(e))return"Blackberry";if(o_(e))return"Webos";if(t_(e))return"Safari";if((e.includes("chrome/")||n_(e))&&!e.includes("edge/"))return"Chrome";if(i_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function e_(i=Wt()){return/firefox\//i.test(i)}function t_(i=Wt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n_(i=Wt()){return/crios\//i.test(i)}function r_(i=Wt()){return/iemobile/i.test(i)}function i_(i=Wt()){return/android/i.test(i)}function s_(i=Wt()){return/blackberry/i.test(i)}function o_(i=Wt()){return/webos/i.test(i)}function Qd(i=Wt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function qT(i=Wt()){var e;return Qd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HT(){return iE()&&document.documentMode===10}function a_(i=Wt()){return Qd(i)||i_(i)||o_(i)||s_(i)||/windows phone/i.test(i)||r_(i)}/**
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
 */function l_(i,e=[]){let t;switch(i){case"Browser":t=mg(Wt());break;case"Worker":t=`${mg(Wt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ro}/${s}`}/**
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
 */class WT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function GT(i,e={}){return Co(i,"GET","/v2/passwordPolicy",Gd(i,e))}/**
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
 */const KT=6;class QT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:KT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class XT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new WT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uu(this,{idToken:e}),s=await Hn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(ss(this));const t=e?Gt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GT(this),t=new QT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await $T(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ic(i){return Gt(i)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dE(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YT(i){Xd=i}function JT(i){return Xd.loadJS(i)}function ZT(){return Xd.gapiScript}function eI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function tI(i,e){const t=Bd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ls(u,e??{}))return o;fr(o,"already-initialized")}return t.initialize({options:e})}function nI(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rI(i,e,t){const s=ic(i);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=u_(e),{host:h,port:m}=iI(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(ls(v,s.config.emulator)&&ls(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ko(h)?(jy(`${u}//${h}${y}`),Uy("Auth",!0)):sI()}function u_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function iI(i){const e=u_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:yg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:yg(h)}}}function yg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function sI(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class c_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,t){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}/**
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
 */async function go(i,e){return VT(i,"POST","/v1/accounts:signInWithIdp",Gd(i,e))}/**
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
 */const oI="http://localhost";class cs extends c_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=$d(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new cs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:oI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */class Yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xa extends Yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class di extends Xa{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
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
 */class br extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return br.credential(t,s)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class fi extends Xa{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends Xa{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */class vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Hn._fromIdTokenResponse(e,s,o),h=_g(s);return new vo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=_g(s);return new vo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function _g(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Bu extends Ur{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Bu(e,t,s,o)}}function h_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(i,u,e,s):u})}async function aI(i,e,t=!1){const s=await Ua(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return vo._forOperation(i,"link",s)}/**
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
 */async function lI(i,e,t=!1){const{auth:s}=i;if(qn(s.app))return Promise.reject(ss(s));const o="reauthenticate";try{const u=await Ua(i,h_(s,o,e,i),t);we(u.idToken,s,"internal-error");const h=Kd(u.idToken);we(h,s,"internal-error");const{sub:m}=h;return we(i.uid===m,s,"user-mismatch"),vo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&fr(s,"user-mismatch"),u}}/**
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
 */async function uI(i,e,t=!1){if(qn(i.app))return Promise.reject(ss(i));const s="signIn",o=await h_(i,s,e),u=await vo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */function cI(i,e){return Gt(i).setPersistence(e)}function hI(i,e,t,s){return Gt(i).onIdTokenChanged(e,t,s)}function dI(i,e,t){return Gt(i).beforeAuthStateChanged(e,t)}function fI(i,e,t,s){return Gt(i).onAuthStateChanged(e,t,s)}function sd(i){return Gt(i).signOut()}const $u="__sak";/**
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
 */class d_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pI=1e3,mI=10;class f_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);HT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,mI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},pI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}f_.type="LOCAL";const p_=f_;/**
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
 */class m_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}m_.type="SESSION";const g_=m_;/**
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
 */function gI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new sc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await gI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function Jd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class yI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Jd("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ar(){return window}function _I(i){ar().location.href=i}/**
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
 */function y_(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function vI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function EI(){return y_()?self:null}/**
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
 */const __="firebaseLocalStorageDb",TI=1,qu="firebaseLocalStorage",v_="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oc(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function II(){const i=indexedDB.deleteDatabase(__);return new Ya(i).toPromise()}function vd(){const i=indexedDB.open(__,TI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:v_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await II(),e(await vd()))})})}async function vg(i,e,t){const s=oc(i,!0).put({[v_]:e,value:t});return new Ya(s).toPromise()}async function SI(i,e){const t=oc(i,!1).get(e),s=await new Ya(t).toPromise();return s===void 0?null:s.value}function wg(i,e){const t=oc(i,!0).delete(e);return new Ya(t).toPromise()}const AI=800,kI=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(EI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vI(),!this.activeServiceWorker)return;this.sender=new yI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await vg(e,$u,"1"),await wg(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>SI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=oc(o,!1).getAll();return new Ya(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const RI=w_;new Qa(3e4,6e4);/**
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
 */function E_(i,e){return e?Vr(e):(we(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Zd extends c_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CI(i){return uI(i.auth,new Zd(i),i.bypassAuthState)}function xI(i){const{auth:e,user:t}=i;return we(t,e,"internal-error"),lI(t,new Zd(i),i.bypassAuthState)}async function PI(i){const{auth:e,user:t}=i;return we(t,e,"internal-error"),aI(t,new Zd(i),i.bypassAuthState)}/**
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
 */class T_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CI;case"linkViaPopup":case"linkViaRedirect":return PI;case"reauthViaPopup":case"reauthViaRedirect":return xI;default:fr(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NI=new Qa(2e3,1e4);async function bI(i,e,t){if(qn(i.app))return Promise.reject(Gn(i,"operation-not-supported-in-this-environment"));const s=ic(i);RT(i,e,Yd);const o=E_(s,t);return new rs(s,"signInViaPopup",e,o).executeNotNull()}class rs extends T_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NI.get())};e()}}rs.currentPopupAction=null;/**
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
 */const DI="pendingRedirect",xu=new Map;class VI extends T_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const s=await OI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OI(i,e){const t=FI(e),s=MI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function LI(i,e){xu.set(i._key(),e)}function MI(i){return Vr(i._redirectPersistence)}function FI(i){return Cu(DI,i.config.apiKey,i.name)}async function jI(i,e,t=!1){if(qn(i.app))return Promise.reject(ss(i));const s=ic(i),o=E_(s,e),h=await new VI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const UI=600*1e3;class zI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!I_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function I_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(i);default:return!1}}/**
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
 */async function $I(i,e={}){return Co(i,"GET","/v1/projects",e)}/**
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
 */const qI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HI=/^https?/;async function WI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $I(i);for(const t of e)try{if(GI(t))return}catch{}fr(i,"unauthorized-domain")}function GI(i){const e=yd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!HI.test(t))return!1;if(qI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const KI=new Qa(3e4,6e4);function Tg(){const i=ar().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function QI(i){return new Promise((e,t)=>{var s,o,u;function h(){Tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tg(),t(Gn(i,"network-request-failed"))},timeout:KI.get()})}if(!((o=(s=ar().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=ar().gapi)===null||u===void 0)&&u.load)h();else{const m=eI("iframefcb");return ar()[m]=()=>{gapi.load?h():t(Gn(i,"network-request-failed"))},JT(`${ZT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function XI(i){return Pu=Pu||QI(i),Pu}/**
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
 */const YI=new Qa(5e3,15e3),JI="__/auth/iframe",ZI="emulator/auth/iframe",e1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n1(i){const e=i.config;we(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Wd(e,ZI):`https://${i.config.authDomain}/${JI}`,s={apiKey:e.apiKey,appName:i.name,v:Ro},o=t1.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function r1(i){const e=await XI(i),t=ar().gapi;return we(t,i,"internal-error"),e.open({where:document.body,url:n1(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Gn(i,"network-request-failed"),m=ar().setTimeout(()=>{u(h)},YI.get());function y(){ar().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const i1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s1=500,o1=600,a1="_blank",l1="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u1(i,e,t,s=s1,o=o1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},i1),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Wt().toLowerCase();t&&(m=n_(v)?a1:t),e_(v)&&(e=e||l1,y.scrollbars="yes");const E=Object.entries(y).reduce((C,[z,Q])=>`${C}${z}=${Q},`,"");if(qT(v)&&m!=="_self")return c1(e||"",m),new Ig(null);const A=window.open(e||"",m,E);we(A,i,"popup-blocked");try{A.focus()}catch{}return new Ig(A)}function c1(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const h1="__/auth/handler",d1="emulator/auth/handler",f1=encodeURIComponent("fac");async function Sg(i,e,t,s,o,u){we(i.config.authDomain,i,"auth-domain-config-required"),we(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ro,eventId:o};if(e instanceof Yd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",hE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(e instanceof Xa){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),v=y?`#${f1}=${encodeURIComponent(y)}`:"";return`${p1(i)}?${Ka(m).slice(1)}${v}`}function p1({config:i}){return i.emulator?Wd(i,d1):`https://${i.authDomain}/${h1}`}/**
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
 */const od="webStorageSupport";class m1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=jI,this._overrideRedirectResult=LI}async _openPopup(e,t,s,o){var u;Mr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Sg(e,t,s,yd(),o);return u1(e,h,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Sg(e,t,s,yd(),o);return _I(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await r1(e),s=new zI(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(od,{type:od},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[od];h!==void 0&&t(!!h),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return a_()||t_()||Qd()}}const g1=m1;var Ag="@firebase/auth",kg="1.10.8";/**
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
 */class y1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _1(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v1(i){_o(new us("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l_(i)},v=new XT(s,o,u,y);return nI(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_o(new us("auth-internal",e=>{const t=ic(e.getProvider("auth").getImmediate());return(s=>new y1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(Ag,kg,_1(i)),_i(Ag,kg,"esm2017")}/**
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
 */const w1=300,E1=Fy("authIdTokenMaxAge")||w1;let Rg=null;const T1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>E1)return;const o=t==null?void 0:t.token;Rg!==o&&(Rg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function I1(i=qy()){const e=Bd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=tI(i,{popupRedirectResolver:g1,persistence:[RI,p_,g_]}),s=Fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=T1(u.toString());dI(t,h,()=>h(t.currentUser)),hI(t,m=>h(m))}}const o=Ly("auth");return o&&rI(t,`http://${o}`),t}function S1(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}YT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Gn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",S1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v1("Browser");var Cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,S_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function k(){}k.prototype=T.prototype,N.D=T.prototype,N.prototype=new k,N.prototype.constructor=N,N.C=function(x,D,O){for(var S=Array(arguments.length-2),it=2;it<arguments.length;it++)S[it-2]=arguments[it];return T.prototype[D].apply(x,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,k){k||(k=0);var x=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)x[D]=T.charCodeAt(k++)|T.charCodeAt(k++)<<8|T.charCodeAt(k++)<<16|T.charCodeAt(k++)<<24;else for(D=0;16>D;++D)x[D]=T[k++]|T[k++]<<8|T[k++]<<16|T[k++]<<24;T=N.g[0],k=N.g[1],D=N.g[2];var O=N.g[3],S=T+(O^k&(D^O))+x[0]+3614090360&4294967295;T=k+(S<<7&4294967295|S>>>25),S=O+(D^T&(k^D))+x[1]+3905402710&4294967295,O=T+(S<<12&4294967295|S>>>20),S=D+(k^O&(T^k))+x[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=k+(T^D&(O^T))+x[3]+3250441966&4294967295,k=D+(S<<22&4294967295|S>>>10),S=T+(O^k&(D^O))+x[4]+4118548399&4294967295,T=k+(S<<7&4294967295|S>>>25),S=O+(D^T&(k^D))+x[5]+1200080426&4294967295,O=T+(S<<12&4294967295|S>>>20),S=D+(k^O&(T^k))+x[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=k+(T^D&(O^T))+x[7]+4249261313&4294967295,k=D+(S<<22&4294967295|S>>>10),S=T+(O^k&(D^O))+x[8]+1770035416&4294967295,T=k+(S<<7&4294967295|S>>>25),S=O+(D^T&(k^D))+x[9]+2336552879&4294967295,O=T+(S<<12&4294967295|S>>>20),S=D+(k^O&(T^k))+x[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=k+(T^D&(O^T))+x[11]+2304563134&4294967295,k=D+(S<<22&4294967295|S>>>10),S=T+(O^k&(D^O))+x[12]+1804603682&4294967295,T=k+(S<<7&4294967295|S>>>25),S=O+(D^T&(k^D))+x[13]+4254626195&4294967295,O=T+(S<<12&4294967295|S>>>20),S=D+(k^O&(T^k))+x[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=k+(T^D&(O^T))+x[15]+1236535329&4294967295,k=D+(S<<22&4294967295|S>>>10),S=T+(D^O&(k^D))+x[1]+4129170786&4294967295,T=k+(S<<5&4294967295|S>>>27),S=O+(k^D&(T^k))+x[6]+3225465664&4294967295,O=T+(S<<9&4294967295|S>>>23),S=D+(T^k&(O^T))+x[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=k+(O^T&(D^O))+x[0]+3921069994&4294967295,k=D+(S<<20&4294967295|S>>>12),S=T+(D^O&(k^D))+x[5]+3593408605&4294967295,T=k+(S<<5&4294967295|S>>>27),S=O+(k^D&(T^k))+x[10]+38016083&4294967295,O=T+(S<<9&4294967295|S>>>23),S=D+(T^k&(O^T))+x[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=k+(O^T&(D^O))+x[4]+3889429448&4294967295,k=D+(S<<20&4294967295|S>>>12),S=T+(D^O&(k^D))+x[9]+568446438&4294967295,T=k+(S<<5&4294967295|S>>>27),S=O+(k^D&(T^k))+x[14]+3275163606&4294967295,O=T+(S<<9&4294967295|S>>>23),S=D+(T^k&(O^T))+x[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=k+(O^T&(D^O))+x[8]+1163531501&4294967295,k=D+(S<<20&4294967295|S>>>12),S=T+(D^O&(k^D))+x[13]+2850285829&4294967295,T=k+(S<<5&4294967295|S>>>27),S=O+(k^D&(T^k))+x[2]+4243563512&4294967295,O=T+(S<<9&4294967295|S>>>23),S=D+(T^k&(O^T))+x[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=k+(O^T&(D^O))+x[12]+2368359562&4294967295,k=D+(S<<20&4294967295|S>>>12),S=T+(k^D^O)+x[5]+4294588738&4294967295,T=k+(S<<4&4294967295|S>>>28),S=O+(T^k^D)+x[8]+2272392833&4294967295,O=T+(S<<11&4294967295|S>>>21),S=D+(O^T^k)+x[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=k+(D^O^T)+x[14]+4259657740&4294967295,k=D+(S<<23&4294967295|S>>>9),S=T+(k^D^O)+x[1]+2763975236&4294967295,T=k+(S<<4&4294967295|S>>>28),S=O+(T^k^D)+x[4]+1272893353&4294967295,O=T+(S<<11&4294967295|S>>>21),S=D+(O^T^k)+x[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=k+(D^O^T)+x[10]+3200236656&4294967295,k=D+(S<<23&4294967295|S>>>9),S=T+(k^D^O)+x[13]+681279174&4294967295,T=k+(S<<4&4294967295|S>>>28),S=O+(T^k^D)+x[0]+3936430074&4294967295,O=T+(S<<11&4294967295|S>>>21),S=D+(O^T^k)+x[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=k+(D^O^T)+x[6]+76029189&4294967295,k=D+(S<<23&4294967295|S>>>9),S=T+(k^D^O)+x[9]+3654602809&4294967295,T=k+(S<<4&4294967295|S>>>28),S=O+(T^k^D)+x[12]+3873151461&4294967295,O=T+(S<<11&4294967295|S>>>21),S=D+(O^T^k)+x[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=k+(D^O^T)+x[2]+3299628645&4294967295,k=D+(S<<23&4294967295|S>>>9),S=T+(D^(k|~O))+x[0]+4096336452&4294967295,T=k+(S<<6&4294967295|S>>>26),S=O+(k^(T|~D))+x[7]+1126891415&4294967295,O=T+(S<<10&4294967295|S>>>22),S=D+(T^(O|~k))+x[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=k+(O^(D|~T))+x[5]+4237533241&4294967295,k=D+(S<<21&4294967295|S>>>11),S=T+(D^(k|~O))+x[12]+1700485571&4294967295,T=k+(S<<6&4294967295|S>>>26),S=O+(k^(T|~D))+x[3]+2399980690&4294967295,O=T+(S<<10&4294967295|S>>>22),S=D+(T^(O|~k))+x[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=k+(O^(D|~T))+x[1]+2240044497&4294967295,k=D+(S<<21&4294967295|S>>>11),S=T+(D^(k|~O))+x[8]+1873313359&4294967295,T=k+(S<<6&4294967295|S>>>26),S=O+(k^(T|~D))+x[15]+4264355552&4294967295,O=T+(S<<10&4294967295|S>>>22),S=D+(T^(O|~k))+x[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=k+(O^(D|~T))+x[13]+1309151649&4294967295,k=D+(S<<21&4294967295|S>>>11),S=T+(D^(k|~O))+x[4]+4149444226&4294967295,T=k+(S<<6&4294967295|S>>>26),S=O+(k^(T|~D))+x[11]+3174756917&4294967295,O=T+(S<<10&4294967295|S>>>22),S=D+(T^(O|~k))+x[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=k+(O^(D|~T))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var k=T-this.blockSize,x=this.B,D=this.h,O=0;O<T;){if(D==0)for(;O<=k;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<T;)if(x[D++]=N.charCodeAt(O++),D==this.blockSize){o(this,x),D=0;break}}else for(;O<T;)if(x[D++]=N[O++],D==this.blockSize){o(this,x),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var k=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=k&255,k/=256;for(this.u(N),N=Array(16),T=k=0;4>T;++T)for(var x=0;32>x;x+=8)N[k++]=this.g[T]>>>x&255;return N};function u(N,T){var k=m;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=T(N)}function h(N,T){this.h=T;for(var k=[],x=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;x&&O==T||(k[D]=O,x=!1)}this.g=k}var m={};function y(N){return-128<=N&&128>N?u(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return H(v(-N));for(var T=[],k=1,x=0;N>=k;x++)T[x]=N/k|0,k*=4294967296;return new h(T,0)}function E(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return H(E(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=v(Math.pow(T,8)),x=A,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+O),T);8>O?(O=v(Math.pow(T,O)),x=x.j(O).add(v(S))):(x=x.j(k),x=x.add(v(S)))}return x}var A=y(0),C=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-H(this).m();for(var N=0,T=1,k=0;k<this.g.length;k++){var x=this.i(k);N+=(0<=x?x:4294967296+x)*T,T*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(Y(this))return"-"+H(this).toString(N);for(var T=v(Math.pow(N,6)),k=this,x="";;){var D=Se(k,T).g;k=fe(k,D.j(T));var O=((0<k.g.length?k.g[0]:k.h)>>>0).toString(N);if(k=D,Q(k))return O+x;for(;6>O.length;)O="0"+O;x=O+x}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=fe(this,N),Y(N)?-1:Q(N)?0:1};function H(N){for(var T=N.g.length,k=[],x=0;x<T;x++)k[x]=~N.g[x];return new h(k,~N.h).add(C)}i.abs=function(){return Y(this)?H(this):this},i.add=function(N){for(var T=Math.max(this.g.length,N.g.length),k=[],x=0,D=0;D<=T;D++){var O=x+(this.i(D)&65535)+(N.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);x=S>>>16,O&=65535,S&=65535,k[D]=S<<16|O}return new h(k,k[k.length-1]&-2147483648?-1:0)};function fe(N,T){return N.add(H(T))}i.j=function(N){if(Q(this)||Q(N))return A;if(Y(this))return Y(N)?H(this).j(H(N)):H(H(this).j(N));if(Y(N))return H(this.j(H(N)));if(0>this.l(z)&&0>N.l(z))return v(this.m()*N.m());for(var T=this.g.length+N.g.length,k=[],x=0;x<2*T;x++)k[x]=0;for(x=0;x<this.g.length;x++)for(var D=0;D<N.g.length;D++){var O=this.i(x)>>>16,S=this.i(x)&65535,it=N.i(D)>>>16,At=N.i(D)&65535;k[2*x+2*D]+=S*At,ue(k,2*x+2*D),k[2*x+2*D+1]+=O*At,ue(k,2*x+2*D+1),k[2*x+2*D+1]+=S*it,ue(k,2*x+2*D+1),k[2*x+2*D+2]+=O*it,ue(k,2*x+2*D+2)}for(x=0;x<T;x++)k[x]=k[2*x+1]<<16|k[2*x];for(x=T;x<2*T;x++)k[x]=0;return new h(k,0)};function ue(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function ge(N,T){this.g=N,this.h=T}function Se(N,T){if(Q(T))throw Error("division by zero");if(Q(N))return new ge(A,A);if(Y(N))return T=Se(H(N),T),new ge(H(T.g),H(T.h));if(Y(T))return T=Se(N,H(T)),new ge(H(T.g),T.h);if(30<N.g.length){if(Y(N)||Y(T))throw Error("slowDivide_ only works with positive integers.");for(var k=C,x=T;0>=x.l(N);)k=Je(k),x=Je(x);var D=ke(k,1),O=ke(x,1);for(x=ke(x,2),k=ke(k,2);!Q(x);){var S=O.add(x);0>=S.l(N)&&(D=D.add(k),O=S),x=ke(x,1),k=ke(k,1)}return T=fe(N,D.j(T)),new ge(D,T)}for(D=A;0<=N.l(T);){for(k=Math.max(1,Math.floor(N.m()/T.m())),x=Math.ceil(Math.log(k)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),O=v(k),S=O.j(T);Y(S)||0<S.l(N);)k-=x,O=v(k),S=O.j(T);Q(O)&&(O=C),D=D.add(O),N=fe(N,S)}return new ge(D,N)}i.A=function(N){return Se(this,N).h},i.and=function(N){for(var T=Math.max(this.g.length,N.g.length),k=[],x=0;x<T;x++)k[x]=this.i(x)&N.i(x);return new h(k,this.h&N.h)},i.or=function(N){for(var T=Math.max(this.g.length,N.g.length),k=[],x=0;x<T;x++)k[x]=this.i(x)|N.i(x);return new h(k,this.h|N.h)},i.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),k=[],x=0;x<T;x++)k[x]=this.i(x)^N.i(x);return new h(k,this.h^N.h)};function Je(N){for(var T=N.g.length+1,k=[],x=0;x<T;x++)k[x]=N.i(x)<<1|N.i(x-1)>>>31;return new h(k,N.h)}function ke(N,T){var k=T>>5;T%=32;for(var x=N.g.length-k,D=[],O=0;O<x;O++)D[O]=0<T?N.i(O+k)>>>T|N.i(O+k+1)<<32-T:N.i(O+k);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,S_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,vi=h}).apply(typeof Cg<"u"?Cg:typeof self<"u"?self:typeof window<"u"?window:{});var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A_,xa,k_,Nu,wd,R_,C_,x_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tu=="object"&&Tu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,w=!1,L={next:function(){if(!w&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,g){return l.call.apply(l.bind,arguments)}function A(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,g){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,C.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,L,U){for(var Z=Array(arguments.length-2),He=2;He<arguments.length;He++)Z[He-2]=arguments[He];return f.prototype[L].apply(w,Z)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function H(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const L=l.length||0,U=w.length||0;l.length=L+U;for(let Z=0;Z<U;Z++)l[L+Z]=w[Z]}else l.push(w)}}class fe{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ue(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Se(l){return Se[" "](l),l}Se[" "]=function(){};var Je=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function ke(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,f){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let U=0;U<k.length;U++)g=k[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=he;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class it{constructor(){this.h=this.g=null}add(f,g){const w=At.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var At=new fe(()=>new Ue,l=>l.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ee=!1,he=new it,te=()=>{const l=m.Promise.resolve(void 0);Be=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=At;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ee=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function Ie(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Je){e:{try{Se(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ce[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}Q(Ie,ce);var Ce={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function We(l,f,g,w,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=L,this.key=++Fe,this.da=this.fa=!1}function W(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ye(l){this.src=l,this.g={},this.h=0}ye.prototype.add=function(l,f,g,w,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Z=qe(l,f,w,L);return-1<Z?(f=l[Z],g||(f.fa=!1)):(f=new We(f,this.src,U,!!w,L),f.fa=g,l.push(f)),f};function be(l,f){var g=f.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(w,L,1),U&&(W(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function qe(l,f,g,w){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==w)return L}return-1}var Ge="closure_lm_"+(1e6*Math.random()|0),De={};function Nt(l,f,g,w,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Nt(l,f[U],g,w,L);return null}return g=Vo(g),l&&l[Oe]?l.K(f,g,v(w)?!!w.capture:!1,L):gn(l,f,g,!1,w,L)}function gn(l,f,g,w,L,U){if(!f)throw Error("Invalid event type");var Z=v(L)?!!L.capture:!!L,He=vs(l);if(He||(l[Ge]=He=new ye(l)),g=He.add(f,g,w,Z,U),g.proxy)return g;if(w=il(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Ae||(L=Z),L===void 0&&(L=!1),l.addEventListener(f.toString(),w,L);else if(l.attachEvent)l.attachEvent(gr(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function il(){function l(g){return f.call(l.src,l.listener,g)}const f=Do;return l}function _s(l,f,g,w,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)_s(l,f[U],g,w,L);else w=v(w)?!!w.capture:!!w,g=Vo(g),l&&l[Oe]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=qe(U,g,w,L),-1<g&&(W(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=vs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=qe(f,g,w,L)),(g=-1<l?f[l]:null)&&mr(g))}function mr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Oe])be(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(gr(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=vs(f))?(be(g,l),g.h==0&&(g.src=null,f[Ge]=null)):W(l)}}}function gr(l){return l in De?De[l]:De[l]="on"+l}function Do(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&mr(l),l=g.call(w,f)}return l}function vs(l){return l=l[Ge],l instanceof ye?l:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(l){return typeof l=="function"?l:(l[ws]||(l[ws]=function(f){return l.handleEvent(f)}),l[ws])}function vt(){B.call(this),this.i=new ye(this),this.M=this,this.F=null}Q(vt,B),vt.prototype[Oe]=!0,vt.prototype.removeEventListener=function(l,f,g,w){_s(this,l,f,g,w)};function wt(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var L=f;f=new ce(w,l),x(f,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var Z=f.g=g[U];L=yr(Z,w,!0,f)&&L}if(Z=f.g=l,L=yr(Z,w,!0,f)&&L,L=yr(Z,w,!1,f)&&L,g)for(U=0;U<g.length;U++)Z=f.g=g[U],L=yr(Z,w,!1,f)&&L}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)W(g[w]);delete l.g[f],l.h--}}this.F=null},vt.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},vt.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function yr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var Z=f[U];if(Z&&!Z.da&&Z.capture==g){var He=Z.listener,Et=Z.ha||Z.src;Z.fa&&be(l.i,Z),L=He.call(Et,w)!==!1&&L}}return L&&!w.defaultPrevented}function Oo(l,f,g){if(typeof l=="function")g&&(l=C(l,g));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function zr(l){l.g=Oo(()=>{l.g=null,l.i&&(l.i=!1,zr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class xi extends B{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(l){B.call(this),this.h=l,this.g={}}Q(Pi,B);var Lo=[];function Mo(l){ke(l.g,function(f,g){this.g.hasOwnProperty(g)&&mr(f)},l),l.g={}}Pi.prototype.N=function(){Pi.aa.N.call(this),Mo(this)},Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fo=m.JSON.stringify,jo=m.JSON.parse,Uo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ni(){}Ni.prototype.h=null;function Es(l){return l.h||(l.h=l.i())}function Ts(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){ce.call(this,"d")}Q(Qn,ce);function Is(){ce.call(this,"c")}Q(Is,ce);var Xn={},zo=null;function bi(){return zo=zo||new vt}Xn.La="serverreachability";function Bo(l){ce.call(this,Xn.La,l)}Q(Bo,ce);function _r(l){const f=bi();wt(f,new Bo(f))}Xn.STAT_EVENT="statevent";function $o(l,f){ce.call(this,Xn.STAT_EVENT,l),this.stat=f}Q($o,ce);function ct(l){const f=bi();wt(f,new $o(f,l))}Xn.Ma="timingevent";function Ss(l,f){ce.call(this,Xn.Ma,l),this.size=f}Q(Ss,ce);function xn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Di(){this.g=!0}Di.prototype.xa=function(){this.g=!1};function Vi(l,f,g,w,L,U){l.info(function(){if(l.g)if(U)for(var Z="",He=U.split("&"),Et=0;Et<He.length;Et++){var Le=He[Et].split("=");if(1<Le.length){var kt=Le[0];Le=Le[1];var ft=kt.split("_");Z=2<=ft.length&&ft[1]=="type"?Z+(kt+"="+Le+"&"):Z+(kt+"=redacted&")}}else Z=null;else Z=U;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+f+`
`+g+`
`+Z})}function As(l,f,g,w,L,U,Z){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+f+`
`+g+`
`+U+" "+Z})}function Pn(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ec(l,g)+(w?" "+w:"")})}function qo(l,f){l.info(function(){return"TIMEOUT: "+f})}Di.prototype.info=function(){};function Ec(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Fo(g)}catch{return f}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Oi(){}Q(Oi,Ni),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},Nn=new Oi;function bn(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new Pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ol}function ol(){this.i=null,this.g="",this.h=!1}var Ho={},Rs={};function Cs(l,f,g){l.L=1,l.v=Wr(un(f)),l.m=g,l.P=!0,Wo(l,null)}function Wo(l,f){l.F=Date.now(),Qe(l),l.A=un(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Kr(g.i,"t",w),l.C=0,g=l.j.J,l.h=new ol,l.g=Sl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new xi(C(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Lo[0]=L.toString()),L=Lo);for(var U=0;U<L.length;U++){var Z=Nt(g,L[U],w||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),_r(),Vi(l.i,l.u,l.A,l.l,l.R,l.m)}bn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Zt(l)==3?f.j():this.Y(l)},bn.prototype.Y=function(l){try{if(l==this.g)e:{const ft=Zt(this.g);var f=this.g.Ba();const wn=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Jo(this.g)))){this.J||ft!=4||f==7||(f==8||0>=wn?_r(3):_r(2)),Li(this);var g=this.g.Z();this.X=g;t:if(al(this)){var w=Jo(this.g);l="";var L=w.length,U=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Br(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(U&&f==L-1)});w.length=0,this.h.g+=l,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=g==200,As(this.i,this.u,this.A,this.l,this.R,ft,g),this.o){if(this.T&&!this.K){t:{if(this.g){var He,Et=this.g;if((He=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(He)){var Le=He;break t}}Le=null}if(g=Le)Pn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,g);else{this.o=!1,this.s=3,ct(12),_n(this),Br(this);break e}}if(this.P){g=!0;let hn;for(;!this.J&&this.C<Z.length;)if(hn=Tc(this,Z),hn==Rs){ft==4&&(this.s=4,ct(14),g=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Ho){this.s=4,ct(15),Pn(this.i,this.l,Z,"[Invalid Chunk]"),g=!1;break}else Pn(this.i,this.l,hn,null),Go(this,hn);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||Z.length!=0||this.h.h||(this.s=1,ct(16),g=!1),this.o=this.o&&g,!g)Pn(this.i,this.l,Z,"[Invalid Chunked Response]"),_n(this),Br(this);else if(0<Z.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ea(kt),kt.M=!0,ct(11))}}else Pn(this.i,this.l,Z,null),Go(this,Z);ft==4&&_n(this),this.o&&!this.J&&(ft==4?js(this.j,this):(this.o=!1,Qe(this)))}else Vs(this.g),g==400&&0<Z.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),_n(this),Br(this)}}}catch{}finally{}};function al(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Tc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?Rs:(g=Number(f.substring(g,w)),isNaN(g)?Ho:(w+=1,w+g>f.length?Rs:(f=f.slice(w,w+g),l.C=w+g,f)))}bn.prototype.cancel=function(){this.J=!0,_n(this)};function Qe(l){l.S=Date.now()+l.I,ll(l,l.I)}function ll(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=xn(C(l.ba,l),f)}function Li(l){l.B&&(m.clearTimeout(l.B),l.B=null)}bn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(qo(this.i,this.A),this.L!=2&&(_r(),ct(17)),_n(this),this.s=2,Br(this)):ll(this,this.S-l)};function Br(l){l.j.G==0||l.J||js(l.j,l)}function _n(l){Li(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Mo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Go(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Kt(g.h,l))){if(!l.K&&Kt(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Fs(g),Mn(g);else break e;Ms(g),ct(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=xn(C(g.Za,g),6e3));if(1>=cl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ir(g,11)}else if((l.K||g.g==l)&&Fs(g),!ue(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let Le=L[f];if(g.T=Le[0],Le=Le[1],g.G==2)if(Le[0]=="c"){g.K=Le[1],g.ia=Le[2];const kt=Le[3];kt!=null&&(g.la=kt,g.j.info("VER="+g.la));const ft=Le[4];ft!=null&&(g.Aa=ft,g.j.info("SVER="+g.Aa));const wn=Le[5];wn!=null&&typeof wn=="number"&&0<wn&&(w=1.5*wn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const hn=l.g;if(hn){const $i=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var U=w.h;U.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ko(U,U.h),U.h=null))}if(w.D){const zs=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;zs&&(w.ya=zs,Ke(w.I,w.D,zs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var Z=l;if(w.qa=Il(w,w.J?w.ia:null,w.W),Z.K){hl(w.h,Z);var He=Z,Et=w.L;Et&&(He.I=Et),He.B&&(Li(He),Qe(He)),w.g=Z}else Bi(w);0<g.i.length&&er(g)}else Le[0]!="stop"&&Le[0]!="close"||Ir(g,7);else g.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Ir(g,7):Dt(g):Le[0]!="noop"&&g.l&&g.l.ta(Le),g.v=0)}}_r(4)}catch{}}var ul=class{constructor(l,f){this.g=l,this.map=f}};function Mi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function cl(l){return l.h?1:l.g?l.g.size:0}function Kt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ko(l,f){l.g?l.g.add(f):l.h=f}function hl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Mi.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function dl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function xs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function Ps(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function $r(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=Ps(l),w=xs(l),L=w.length,U=0;U<L;U++)f.call(void 0,w[U],g&&g[U],l)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ic(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),L=null;if(0<=w){var U=l[g].substring(0,w);L=l[g].substring(w+1)}else U=l[g];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function vr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof vr){this.h=l.h,ji(this,l.j),this.o=l.o,this.g=l.g,qr(this,l.s),this.l=l.l;var f=l.i,g=new Yn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Hr(this,g),this.m=l.m}else l&&(f=String(l).match(Fi))?(this.h=!1,ji(this,f[1]||"",!0),this.o=Ve(f[2]||""),this.g=Ve(f[3]||"",!0),qr(this,f[4]),this.l=Ve(f[5]||"",!0),Hr(this,f[6]||"",!0),this.m=Ve(f[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}vr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Gr(f,Ns,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Gr(f,Ns,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Gr(g,g.charAt(0)=="/"?ml:pl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Gr(g,Qo)),l.join("")};function un(l){return new vr(l)}function ji(l,f,g){l.j=g?Ve(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function qr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Hr(l,f,g){f instanceof Yn?(l.i=f,Jn(l.i,l.h)):(g||(f=Gr(f,gl)),l.i=new Yn(f,l.h))}function Ke(l,f,g){l.i.set(f,g)}function Wr(l){return Ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ve(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Gr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,fl),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function fl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ns=/[#\/\?@]/g,pl=/[#\?:]/g,ml=/[#\?]/g,gl=/[#\?@]/g,Qo=/#/g;function Yn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function bt(l){l.g||(l.g=new Map,l.h=0,l.i&&Ic(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Yn.prototype,i.add=function(l,f){bt(this),this.i=null,l=vn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Dn(l,f){bt(l),f=vn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Vn(l,f){return bt(l),f=vn(l,f),l.g.has(f)}i.forEach=function(l,f){bt(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(f,L,w,this)},this)},this)},i.na=function(){bt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const L=l[w];for(let U=0;U<L.length;U++)g.push(f[w])}return g},i.V=function(l){bt(this);let f=[];if(typeof l=="string")Vn(this,l)&&(f=f.concat(this.g.get(vn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return bt(this),this.i=null,l=vn(this,l),Vn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Kr(l,f,g){Dn(l,f),0<g.length&&(l.i=null,l.g.set(vn(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const U=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=U;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),l.push(L)}}return this.i=l.join("&")};function vn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Jn(l,f){f&&!l.j&&(bt(l),l.i=null,l.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(Dn(this,w),Kr(this,L,g))},l)),l.j=f}function Sc(l,f){const g=new Di;if(m.Image){const w=new Image;w.onload=z(Jt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=z(Jt,g,"TestLoadImage: error",!1,f,w),w.onabort=z(Jt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=z(Jt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function yl(l,f){const g=new Di,w=new AbortController,L=setTimeout(()=>{w.abort(),Jt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(L),U.ok?Jt(g,"TestPingServer: ok",!0,f):Jt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Jt(g,"TestPingServer: error",!1,f)})}function Jt(l,f,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function Ac(){this.g=new Uo}function _l(l,f,g){const w=g||"";try{$r(l,function(L,U){let Z=L;v(L)&&(Z=Fo(L)),f.push(w+U+"="+encodeURIComponent(Z))})}catch(L){throw f.push(w+"type="+encodeURIComponent("_badmap")),L}}function wr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(wr,Ni),wr.prototype.g=function(){return new Ui(this.l,this.j)},wr.prototype.i=(function(l){return function(){return l}})({});function Ui(l,f){vt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ui,vt),i=Ui.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Ln(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?On(this):Ln(this),this.readyState==3&&vl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,On(this))},i.Qa=function(l){this.g&&(this.response=l,On(this))},i.ga=function(){this.g&&On(this)};function On(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ln(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Ln(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Er(l){let f="";return ke(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Qr(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Er(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ke(l,f,g))}function nt(l){vt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(nt,vt);var kc=/^https?$/i,Xo=["POST","PUT"];i=nt.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Es(this.o):Es(Nn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){zi(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Xo,f,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Z]of g)this.g.setRequestHeader(U,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ds(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){zi(this,U)}};function zi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,bs(l),cn(l)}function bs(l){l.A||(l.A=!0,wt(l,"complete"),wt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,wt(this,"complete"),wt(this,"abort"),cn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),nt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},i.bb=function(){Yo(this)};function Yo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Zt(l)!=4||l.Z()!=2)){if(l.u&&Zt(l)==4)Oo(l.Ea,0,l);else if(wt(l,"readystatechange"),Zt(l)==4){l.h=!1;try{const Z=l.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=Z===0){var L=String(l.D).match(Fi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!kc.test(L?L.toLowerCase():"")}g=w}if(g)wt(l,"complete"),wt(l,"success");else{l.m=6;try{var U=2<Zt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",bs(l)}}finally{cn(l)}}}}function cn(l,f){if(l.g){Ds(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||wt(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ds(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Zt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),jo(f)}};function Jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Vs(l){const f={};l=(l.g&&2<=Zt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ue(l[w]))continue;var g=D(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[L]||[];f[L]=U,U.push(g)}N(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Zo(l){this.Aa=0,this.i=[],this.j=new Di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,l),this.cb=Zn("retryDelaySeedMs",1e4,l),this.Wa=Zn("forwardChannelMaxRetries",2,l),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(l&&l.concurrentRequestLimit),this.Da=new Ac,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,w){ct(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=Il(this,null,this.W),er(this)};function Dt(l){if(Os(l),l.G==3){var f=l.U++,g=un(l.I);if(Ke(g,"SID",l.K),Ke(g,"RID",f),Ke(g,"TYPE","terminate"),Tr(l,g),f=new bn(l,l.j,f),f.L=2,f.v=Wr(un(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=Sl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Qe(f)}Tl(l)}function Mn(l){l.g&&(ea(l),l.g.cancel(),l.g=null)}function Os(l){Mn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Fs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function er(l){if(!ln(l.h)&&!l.s){l.s=!0;var f=l.Ga;Be||te(),ee||(Be(),ee=!0),he.add(f,l),l.B=0}}function Rc(l,f){return cl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=xn(C(l.Ga,l,f),El(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new bn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),x(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Xr(this,L,f),g=un(this.I),Ke(g,"RID",l),Ke(g,"CVER",22),this.D&&Ke(g,"X-HTTP-Session-Id",this.D),Tr(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(Er(U)))+"&"+f:this.m&&Qr(g,this.m,U)),Ko(this.h,L),this.Ua&&Ke(g,"TYPE","init"),this.P?(Ke(g,"$req",f),Ke(g,"SID","null"),L.T=!0,Cs(L,g,null)):Cs(L,g,f),this.G=2}}else this.G==3&&(l?Ls(this,l):this.i.length==0||ln(this.h)||Ls(this))};function Ls(l,f){var g;f?g=f.l:g=l.U++;const w=un(l.I);Ke(w,"SID",l.K),Ke(w,"RID",g),Ke(w,"AID",l.T),Tr(l,w),l.m&&l.o&&Qr(w,l.m,l.o),g=new bn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Xr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ko(l.h,g),Cs(g,w,f)}function Tr(l,f){l.H&&ke(l.H,function(g,w){Ke(f,w,g)}),l.l&&$r({},function(g,w){Ke(f,w,g)})}function Xr(l,f,g){g=Math.min(l.i.length,g);var w=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const Z=["count="+g];U==-1?0<g?(U=L[0].g,Z.push("ofs="+U)):U=0:Z.push("ofs="+U);let He=!0;for(let Et=0;Et<g;Et++){let Le=L[Et].g;const kt=L[Et].map;if(Le-=U,0>Le)U=Math.max(0,L[Et].g-100),He=!1;else try{_l(kt,Z,"req"+Le+"_")}catch{w&&w(kt)}}if(He){w=Z.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function Bi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Be||te(),ee||(Be(),ee=!0),he.add(f,l),l.v=0}}function Ms(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=xn(C(l.Fa,l),El(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,wl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=xn(C(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Mn(this),wl(this))};function ea(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function wl(l){l.g=new bn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=un(l.qa);Ke(f,"RID","rpc"),Ke(f,"SID",l.K),Ke(f,"AID",l.T),Ke(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ke(f,"TO",l.ja),Ke(f,"TYPE","xmlhttp"),Tr(l,f),l.m&&l.o&&Qr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Wr(un(f)),g.m=null,g.P=!0,Wo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Mn(this),Ms(this),ct(19))};function Fs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function js(l,f){var g=null;if(l.g==f){Fs(l),ea(l),l.g=null;var w=2}else if(Kt(l.h,f))g=f.D,hl(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;w=bi(),wt(w,new Ss(w,g)),er(l)}else Bi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(w==1&&Rc(l,f)||w==2&&Ms(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:Ir(l,5);break;case 4:Ir(l,10);break;case 3:Ir(l,6);break;default:Ir(l,2)}}}function El(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function Ir(l,f){if(l.j.info("Error code "+f),f==2){var g=C(l.fb,l),w=l.Xa;const L=!w;w=new vr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ji(w,"https"),Wr(w),L?Sc(w.toString(),g):yl(w.toString(),g)}else ct(2);l.G=0,l.l&&l.l.sa(f),Tl(l),Os(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Tl(l){if(l.G=0,l.ka=[],l.l){const f=dl(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function Il(l,f,g){var w=g instanceof vr?un(g):new vr(g);if(w.g!="")f&&(w.g=f+"."+w.g),qr(w,w.s);else{var L=m.location;w=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new vr(null);w&&ji(U,w),f&&(U.g=f),L&&qr(U,L),g&&(U.l=g),w=U}return g=l.D,f=l.ya,g&&f&&Ke(w,g,f),Ke(w,"VER",l.la),Tr(l,w),w}function Sl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new nt(new wr({eb:g})):new nt(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ta(){}i=ta.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Us(){}Us.prototype.g=function(l,f){return new Qt(l,f)};function Qt(l,f){vt.call(this),this.g=new Zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ue(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ue(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new tr(this)}Q(Qt,vt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Dt(this.g)},Qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Fo(l),l=g);f.i.push(new ul(f.Ya++,l)),f.G==3&&er(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Qt.aa.N.call(this)};function Al(l){Qn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(Al,Qn);function kl(){Is.call(this),this.status=1}Q(kl,Is);function tr(l){this.g=l}Q(tr,ta),tr.prototype.ua=function(){wt(this.g,"a")},tr.prototype.ta=function(l){wt(this.g,new Al(l))},tr.prototype.sa=function(l){wt(this.g,new kl)},tr.prototype.ra=function(){wt(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,x_=function(){return new Us},C_=function(){return bi()},R_=Xn,wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,Nu=ks,sl.COMPLETE="complete",k_=sl,Ts.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,xa=Ts,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,A_=nt}).apply(typeof Tu<"u"?Tu:typeof self<"u"?self:typeof window<"u"?window:{});const xg="@firebase/firestore",Pg="4.8.0";/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let xo="11.10.0";/**
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
 */const hs=new Ud("@firebase/firestore");function uo(){return hs.logLevel}function re(i,...e){if(hs.logLevel<=Pe.DEBUG){const t=e.map(ef);hs.debug(`Firestore (${xo}): ${i}`,...t)}}function Fr(i,...e){if(hs.logLevel<=Pe.ERROR){const t=e.map(ef);hs.error(`Firestore (${xo}): ${i}`,...t)}}function Ti(i,...e){if(hs.logLevel<=Pe.WARN){const t=e.map(ef);hs.warn(`Firestore (${xo}): ${i}`,...t)}}function ef(i){if(typeof i=="string")return i;try{/**
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
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,P_(i,s,t)}function P_(i,e,t){let s=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function $e(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||P_(e,o,s)}function Te(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class N_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qt.UNAUTHENTICATED)))}shutdown(){}}class k1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class R1{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new wi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new wi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new N_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class C1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class x1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new C1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ng{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ng(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ng(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function N1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function b_(){return new TextEncoder}/**
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
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=N1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Re(i,e){return i<e?-1:i>e?1:0}function Ed(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Re(s,o);{const u=b_(),h=b1(u.encode(bg(i,t)),u.encode(bg(e,t)));return h!==0?h:Re(s,o)}}t+=s>65535?2:1}return Re(i.length,e.length)}function bg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function b1(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Re(i[t],e[t]);return Re(i.length,e.length)}function wo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Dg="__name__";class or{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=or.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Re(e.length,t.length)}static compareSegments(e,t){const s=or.isNumericId(e),o=or.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):Ed(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class Ye extends or{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const D1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends or{construct(e,t,s){return new Mt(e,t,s)}static isValidIdentifier(e){return D1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dg}static keyField(){return new Mt([Dg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ye.fromString(e))}static fromName(e){return new de(Ye.fromString(e).popFirst(5))}static empty(){return new de(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ye(e.slice()))}}/**
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
 */function D_(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function V1(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Vg(i){if(!de.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Og(i){if(de.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function V_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ac(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Or(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ac(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function yt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ja(i,e){if(!V_(i))throw new ie($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Lg=-62135596800,Mg=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Mg);return new tt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Lg)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mg}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ja(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:yt("string",tt._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new tt(0,0))}static max(){return new Ee(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const za=-1;function O1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new tt(t+1,0):new tt(t,s));return new Ii(o,de.empty(),e)}function L1(i){return new Ii(i.readTime,i.key,za)}class Ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ii(Ee.min(),de.empty(),za)}static max(){return new Ii(Ee.max(),de.empty(),za)}}function M1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */const F1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class j1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Po(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==F1)throw i;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((E=>{h[v]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new q(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function U1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function No(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}lc.ue=-1;/**
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
 */const nf=-1;function uc(i){return i==null}function Hu(i){return i===0&&1/i==-1/0}function z1(i){return typeof i=="number"&&Number.isInteger(i)&&!Hu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const O_="";function B1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Fg(e)),e=$1(i.get(t),e);return Fg(e)}function $1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case O_:t+="";break;default:t+=u}}return t}function Fg(i){return i+O_+""}/**
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
 */function jg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function fs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function L_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class lt{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Iu(this.root,e,this.comparator,!0)}}class Iu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Lt.RED,this.left=o??Lt.EMPTY,this.right=u??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Lt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new St(Mt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class M_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new M_("Invalid base64 string: "+u):u}})(e);return new Ft(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const q1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(i){if($e(!!i,39018),typeof i=="string"){let e=0;const t=q1.exec(i);if($e(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:dt(i.seconds),nanos:dt(i.nanos)}}function dt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ai(i){return typeof i=="string"?Ft.fromBase64String(i):Ft.fromUint8Array(i)}/**
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
 */const F_="server_timestamp",j_="__type__",U_="__previous_value__",z_="__local_write_time__";function rf(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[j_])===null||t===void 0?void 0:t.stringValue)===F_}function cc(i){const e=i.mapValue.fields[U_];return rf(e)?cc(e):e}function Ba(i){const e=Si(i.mapValue.fields[z_].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class H1{constructor(e,t,s,o,u,h,m,y,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=E}}const Wu="(default)";class $a{constructor(e,t){this.projectId=e,this.database=t||Wu}static empty(){return new $a("","")}get isDefaultDatabase(){return this.database===Wu}isEqual(e){return e instanceof $a&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const B_="__type__",W1="__max__",Su={mapValue:{}},$_="__vector__",Gu="value";function ki(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?rf(i)?4:K1(i)?9007199254740991:G1(i)?10:11:_e(28295,{value:i})}function pr(i,e){if(i===e)return!0;const t=ki(i);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ba(i).isEqual(Ba(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Si(o.timestampValue),m=Si(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ai(o.bytesValue).isEqual(Ai(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return dt(o.geoPointValue.latitude)===dt(u.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return dt(o.integerValue)===dt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=dt(o.doubleValue),m=dt(u.doubleValue);return h===m?Hu(h)===Hu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return wo(i.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(jg(h)!==jg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!pr(h[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function qa(i,e){return(i.values||[]).find((t=>pr(t,e)))!==void 0}function Eo(i,e){if(i===e)return 0;const t=ki(i),s=ki(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=dt(u.integerValue||u.doubleValue),y=dt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return zg(i.timestampValue,e.timestampValue);case 4:return zg(Ba(i),Ba(e));case 5:return Ed(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ai(u),y=Ai(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const E=Re(m[v],y[v]);if(E!==0)return E}return Re(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Re(dt(u.latitude),dt(h.latitude));return m!==0?m:Re(dt(u.longitude),dt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Bg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,y,v,E;const A=u.fields||{},C=h.fields||{},z=(m=A[Gu])===null||m===void 0?void 0:m.arrayValue,Q=(y=C[Gu])===null||y===void 0?void 0:y.arrayValue,Y=Re(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((E=Q==null?void 0:Q.values)===null||E===void 0?void 0:E.length)||0);return Y!==0?Y:Bg(z,Q)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Su.mapValue&&h===Su.mapValue)return 0;if(u===Su.mapValue)return 1;if(h===Su.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},E=Object.keys(v);y.sort(),E.sort();for(let A=0;A<y.length&&A<E.length;++A){const C=Ed(y[A],E[A]);if(C!==0)return C;const z=Eo(m[y[A]],v[E[A]]);if(z!==0)return z}return Re(y.length,E.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function zg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=Si(i),s=Si(e),o=Re(t.seconds,s.seconds);return o!==0?o:Re(t.nanos,s.nanos)}function Bg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Eo(t[o],s[o]);if(u)return u}return Re(t.length,s.length)}function To(i){return Td(i)}function Td(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Si(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ai(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Td(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Td(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function bu(i){switch(ki(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cc(i);return e?16+bu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ai(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+bu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return fs(s.fields,((u,h)=>{o+=u.length+bu(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function $g(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Id(i){return!!i&&"integerValue"in i}function sf(i){return!!i&&"arrayValue"in i}function qg(i){return!!i&&"nullValue"in i}function Hg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Du(i){return!!i&&"mapValue"in i}function G1(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[B_])===null||t===void 0?void 0:t.stringValue)===$_}function Oa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return fs(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Oa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function K1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===W1}/**
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
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oa(t)}setAll(e){let t=Mt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Oa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){fs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Rn(Oa(this.value))}}function q_(i){const e=[];return fs(i.fields,((t,s)=>{const o=new Mt([t]);if(Du(s)){const u=q_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Wn(e)}/**
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
 */class Ht{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ht(e,0,Ee.min(),Ee.min(),Ee.min(),Rn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ht(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ht(e,2,t,Ee.min(),Ee.min(),Rn.empty(),0)}static newUnknownDocument(e,t){return new Ht(e,3,t,Ee.min(),Ee.min(),Rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ku{constructor(e,t){this.position=e,this.inclusive=t}}function Wg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!pr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Q1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class H_{}class gt extends H_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Y1(e,t,s):t==="array-contains"?new eS(e,s):t==="in"?new tS(e,s):t==="not-in"?new nS(e,s):t==="array-contains-any"?new rS(e,s):new gt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new J1(e,s):new Z1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Eo(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends H_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Kn(e,t)}matches(e){return W_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function W_(i){return i.op==="and"}function G_(i){return X1(i)&&W_(i)}function X1(i){for(const e of i.filters)if(e instanceof Kn)return!1;return!0}function Sd(i){if(i instanceof gt)return i.field.canonicalString()+i.op.toString()+To(i.value);if(G_(i))return i.filters.map((e=>Sd(e))).join(",");{const e=i.filters.map((t=>Sd(t))).join(",");return`${i.op}(${e})`}}function K_(i,e){return i instanceof gt?(function(s,o){return o instanceof gt&&s.op===o.op&&s.field.isEqual(o.field)&&pr(s.value,o.value)})(i,e):i instanceof Kn?(function(s,o){return o instanceof Kn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&K_(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function Q_(i){return i instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${To(t.value)}`})(i):i instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Q_).join(" ,")+"}"})(i):"Filter"}class Y1 extends gt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class J1 extends gt{constructor(e,t){super(e,"in",t),this.keys=X_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Z1 extends gt{constructor(e,t){super(e,"not-in",t),this.keys=X_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function X_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class eS extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&qa(t.arrayValue,this.value)}}class tS extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qa(this.value.arrayValue,t)}}class nS extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qa(this.value.arrayValue,t)}}class rS extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>qa(this.value.arrayValue,s)))}}/**
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
 */class iS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Kg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new iS(i,e,t,s,o,u,h)}function of(i){const e=Te(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Sd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),uc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>To(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>To(s))).join(",")),e.Pe=t}return e.Pe}function af(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Q1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!K_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Gg(i.startAt,e.startAt)&&Gg(i.endAt,e.endAt)}function Ad(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Za{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function sS(i,e,t,s,o,u,h,m){return new Za(i,e,t,s,o,u,h,m)}function lf(i){return new Za(i)}function Qg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Y_(i){return i.collectionGroup!==null}function La(i){const e=Te(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new St(Mt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Qu(u,s))})),t.has(Mt.keyField().canonicalString())||e.Te.push(new Qu(Mt.keyField(),s))}return e.Te}function lr(i){const e=Te(i);return e.Ie||(e.Ie=oS(e,La(i))),e.Ie}function oS(i,e){if(i.limitType==="F")return Kg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Qu(o.field,u)}));const t=i.endAt?new Ku(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ku(i.startAt.position,i.startAt.inclusive):null;return Kg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function kd(i,e){const t=i.filters.concat([e]);return new Za(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Rd(i,e,t){return new Za(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function hc(i,e){return af(lr(i),lr(e))&&i.limitType===e.limitType}function J_(i){return`${of(lr(i))}|lt:${i.limitType}`}function co(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Q_(o))).join(", ")}]`),uc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>To(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>To(o))).join(",")),`Target(${s})`})(lr(i))}; limitType=${i.limitType})`}function dc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of La(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Wg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,La(s),o)||s.endAt&&!(function(h,m,y){const v=Wg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,La(s),o))})(i,e)}function aS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Z_(i){return(e,t)=>{let s=!1;for(const o of La(i)){const u=lS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function lS(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?Eo(y,v):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
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
 */class ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return L_(this.inner)}size(){return this.innerSize}}/**
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
 */const uS=new lt(de.comparator);function jr(){return uS}const ev=new lt(de.comparator);function Pa(...i){let e=ev;for(const t of i)e=e.insert(t.key,t);return e}function tv(i){let e=ev;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function is(){return Ma()}function nv(){return Ma()}function Ma(){return new ps((i=>i.toString()),((i,e)=>i.isEqual(e)))}const cS=new lt(de.comparator),hS=new St(de.comparator);function Ne(...i){let e=hS;for(const t of i)e=e.add(t);return e}const dS=new St(Re);function fS(){return dS}/**
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
 */function uf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function rv(i){return{integerValue:""+i}}function pS(i,e){return z1(e)?rv(e):uf(i,e)}/**
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
 */class fc{constructor(){this._=void 0}}function mS(i,e,t){return i instanceof Xu?(function(o,u){const h={fields:{[j_]:{stringValue:F_},[z_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rf(u)&&(u=cc(u)),u&&(h.fields[U_]=u),{mapValue:h}})(t,e):i instanceof Ha?sv(i,e):i instanceof Wa?ov(i,e):(function(o,u){const h=iv(o,u),m=Xg(h)+Xg(o.Ee);return Id(h)&&Id(o.Ee)?rv(m):uf(o.serializer,m)})(i,e)}function gS(i,e,t){return i instanceof Ha?sv(i,e):i instanceof Wa?ov(i,e):t}function iv(i,e){return i instanceof Yu?(function(s){return Id(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Xu extends fc{}class Ha extends fc{constructor(e){super(),this.elements=e}}function sv(i,e){const t=av(e);for(const s of i.elements)t.some((o=>pr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Wa extends fc{constructor(e){super(),this.elements=e}}function ov(i,e){let t=av(e);for(const s of i.elements)t=t.filter((o=>!pr(o,s)));return{arrayValue:{values:t}}}class Yu extends fc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Xg(i){return dt(i.integerValue||i.doubleValue)}function av(i){return sf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function yS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ha&&o instanceof Ha||s instanceof Wa&&o instanceof Wa?wo(s.elements,o.elements,pr):s instanceof Yu&&o instanceof Yu?pr(s.Ee,o.Ee):s instanceof Xu&&o instanceof Xu})(i.transform,e.transform)}class _S{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class pc{}function lv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new cf(i.key,ur.none()):new el(i.key,i.data,ur.none());{const t=i.data,s=Rn.empty();let o=new St(Mt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ms(i.key,s,new Wn(o.toArray()),ur.none())}}function vS(i,e,t){i instanceof el?(function(o,u,h){const m=o.value.clone(),y=Jg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ms?(function(o,u,h){if(!Vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Jg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(uv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Fa(i,e,t,s){return i instanceof el?(function(u,h,m,y){if(!Vu(u.precondition,h))return m;const v=u.value.clone(),E=Zg(u.fieldTransforms,y,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof ms?(function(u,h,m,y){if(!Vu(u.precondition,h))return m;const v=Zg(u.fieldTransforms,y,h),E=h.data;return E.setAll(uv(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function wS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=iv(s.transform,o||null);u!=null&&(t===null&&(t=Rn.empty()),t.set(s.field,u))}return t||null}function Yg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((u,h)=>yS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class el extends pc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ms extends pc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function uv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Jg(i,e,t){const s=new Map;$e(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,gS(h,m,t[o]))}return s}function Zg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,mS(u,h,e))}return s}class cf extends pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ES extends pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&vS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=nv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=lv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ne())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>Yg(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>Yg(t,s)))}}class hf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){$e(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return cS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new hf(e,t,s,o)}}/**
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
 */class IS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,Me;function AS(i){switch(i){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function cv(i){if(i===void 0)return Fr("GRPC error has no .code"),$.UNKNOWN;switch(i){case mt.OK:return $.OK;case mt.CANCELLED:return $.CANCELLED;case mt.UNKNOWN:return $.UNKNOWN;case mt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case mt.INTERNAL:return $.INTERNAL;case mt.UNAVAILABLE:return $.UNAVAILABLE;case mt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case mt.NOT_FOUND:return $.NOT_FOUND;case mt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case mt.ABORTED:return $.ABORTED;case mt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case mt.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:i})}}(Me=mt||(mt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const kS=new vi([4294967295,4294967295],0);function ey(i){const e=b_().encode(i),t=new S_;return t.update(e),new Uint8Array(t.digest())}function ty(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,u],0)]}class df{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=vi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(kS)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ey(e),[s,o]=ty(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new df(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ey(e),[s,o]=ty(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new mc(Ee.min(),o,new lt(Re),jr(),Ne())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,Ne(),Ne(),Ne())}}/**
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
 */class Ou{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class hv{constructor(e,t){this.targetId=e,this.De=t}}class dv{constructor(e,t,s=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ny{constructor(){this.ve=0,this.Ce=ry(),this.Fe=Ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),s=Ne();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new tl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=ry()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class RS{constructor(e){this.We=e,this.Ge=new Map,this.ze=jr(),this.je=Au(),this.Je=Au(),this.He=new lt(Re)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Ad(u))if(s===0){const h=new de(u.path);this.Xe(t,h,Ht.newNoDocument(h,Ee.min()))}else $e(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),y=m?this.ut(m,e,h):1;if(y!==0){this.rt(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ai(s).toUint8Array()}catch(y){if(y instanceof M_)return Ti("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new df(h,o,u)}catch(y){return Ti(y instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Ad(m.target)){const y=new de(m.target.path);this.Tt(y).has(h)||this.It(h,y)||this.Xe(h,y,Ht.newNoDocument(y,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Ne();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.st(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new mc(e,t,this.He,this.ze,s);return this.ze=jr(),this.je=Au(),this.Je=Au(),this.He=new lt(Re),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ny,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new St(Re),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new St(Re),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ny),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Au(){return new lt(de.comparator)}function ry(){return new lt(de.comparator)}const CS={asc:"ASCENDING",desc:"DESCENDING"},xS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PS={and:"AND",or:"OR"};class NS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cd(i,e){return i.useProto3Json||uc(e)?e:{value:e}}function Ju(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function bS(i,e){return Ju(i,e.toTimestamp())}function cr(i){return $e(!!i,49232),Ee.fromTimestamp((function(t){const s=Si(t);return new tt(s.seconds,s.nanos)})(i))}function ff(i,e){return xd(i,e).canonicalString()}function xd(i,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function pv(i){const e=Ye.fromString(i);return $e(vv(e),10190,{key:e.toString()}),e}function Pd(i,e){return ff(i.databaseId,e.path)}function ad(i,e){const t=pv(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(gv(t))}function mv(i,e){return ff(i.databaseId,e)}function DS(i){const e=pv(i);return e.length===4?Ye.emptyPath():gv(e)}function Nd(i){return new Ye(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function gv(i){return $e(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function iy(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function VS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,E){return v.useProto3Json?($e(E===void 0||typeof E=="string",58123),Ft.fromBase64String(E||"")):($e(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ft.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const E=v.code===void 0?$.UNKNOWN:cv(v.code);return new ie(E,v.message||"")})(h);t=new dv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ad(i,s.document.name),u=cr(s.document.updateTime),h=s.document.createTime?cr(s.document.createTime):Ee.min(),m=new Rn({mapValue:{fields:s.document.fields}}),y=Ht.newFoundDocument(o,u,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Ou(v,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ad(i,s.document),u=s.readTime?cr(s.readTime):Ee.min(),h=Ht.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ou([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ad(i,s.document),u=s.removedTargetIds||[];t=new Ou([],u,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new SS(o,u),m=s.targetId;t=new hv(m,h)}}return t}function OS(i,e){let t;if(e instanceof el)t={update:iy(i,e.key,e.value)};else if(e instanceof cf)t={delete:Pd(i,e.key)};else if(e instanceof ms)t={update:iy(i,e.key,e.data),updateMask:qS(e.fieldMask)};else{if(!(e instanceof ES))return _e(16599,{Rt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Xu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Yu)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:bS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function LS(i,e){return i&&i.length>0?($e(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?cr(o.updateTime):cr(u);return h.isEqual(Ee.min())&&(h=cr(u)),new _S(h,o.transformResults||[])})(t,e)))):[]}function MS(i,e){return{documents:[mv(i,e.path)]}}function FS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=mv(i,o);const u=(function(v){if(v.length!==0)return _v(Kn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((E=>(function(C){return{field:ho(C.field),direction:zS(C.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Cd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function jS(i){let e=DS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){$e(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(A){const C=yv(A);return C instanceof Kn&&G_(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((C=>(function(Q){return new Qu(fo(Q.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let C;return C=typeof A=="object"?A.value:A,uc(C)?null:C})(t.limit));let y=null;t.startAt&&(y=(function(A){const C=!!A.before,z=A.values||[];return new Ku(z,C)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const C=!A.before,z=A.values||[];return new Ku(z,C)})(t.endAt)),sS(e,o,h,u,m,"F",y,v)}function US(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=fo(t.unaryFilter.field);return gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=fo(t.unaryFilter.field);return gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=fo(t.unaryFilter.field);return gt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return gt.create(fo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((s=>yv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function zS(i){return CS[i]}function BS(i){return xS[i]}function $S(i){return PS[i]}function ho(i){return{fieldPath:i.canonicalString()}}function fo(i){return Mt.fromServerFormat(i.fieldPath)}function _v(i){return i instanceof gt?(function(t){if(t.op==="=="){if(Hg(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NAN"}};if(qg(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hg(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NAN"}};if(qg(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(t.field),op:BS(t.op),value:t.value}}})(i):i instanceof Kn?(function(t){const s=t.getFilters().map((o=>_v(o)));return s.length===1?s[0]:{compositeFilter:{op:$S(t.op),filters:s}}})(i):_e(54877,{filter:i})}function qS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class mi{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Ft.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HS{constructor(e){this.gt=e}}function WS(i){const e=jS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
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
 */class GS{constructor(){this.Dn=new KS}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ii.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class KS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new St(Ye.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new St(Ye.comparator)).toArray()}}/**
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
 */const sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wv=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(wv,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class Io{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Io(0)}static ur(){return new Io(-1)}}/**
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
 */const oy="LruGarbageCollector",QS=1048576;function ay([i,e],[t,s]){const o=Re(i,t);return o===0?Re(e,s):o}class XS{constructor(e){this.Tr=e,this.buffer=new St(ay),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ay(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(oy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){No(t)?re(oy,"Ignoring IndexedDB error during garbage collection: ",t):await Po(t)}await this.Rr(3e5)}))}}class JS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(lc.ue);const s=new XS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(sy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,y,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),uo()<=Pe.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(v-y)+`ms
Total Duration: ${v-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function ZS(i,e){return new JS(i,e)}/**
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
 */class eA{constructor(){this.changes=new ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Fa(s.mutation,o,Wn.empty(),tt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ne()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ne()){const o=is();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Pa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=is();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ne())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=jr();const h=Ma(),m=(function(){return Ma()})();return t.forEach(((y,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof ms)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Fa(E.mutation,v,E.mutation.getFieldMask(),tt.now())):h.set(v.key,Wn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>{var A;return m.set(v,new tA(E,(A=h.get(v))!==null&&A!==void 0?A:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Ma();let o=new lt(((h,m)=>h-m)),u=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let E=s.get(y)||Wn.empty();E=m.applyToLocalView(v,E),s.set(y,E);const A=(o.get(m.batchId)||Ne()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,E=y.value,A=nv();E.forEach((C=>{if(!u.has(C)){const z=lv(t.get(C),s.get(C));z!==null&&A.set(C,z),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Y_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):q.resolve(is());let m=za,y=u;return h.next((v=>q.forEach(v,((E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{y=y.insert(E,C)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Ne()))).next((E=>({batchId:m,changes:tv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Pa();return this.indexManager.getCollectionParents(e,u).next((m=>q.forEach(m,(y=>{const v=(function(A,C){return new Za(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((E=>{E.forEach(((A,C)=>{h=h.insert(A,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ht.newInvalidDocument(E)))}));let m=Pa();return h.forEach(((y,v)=>{const E=u.get(y);E!==void 0&&Fa(E.mutation,v,Wn.empty(),tt.now()),dc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class rA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:WS(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class iA{constructor(){this.overlays=new lt(de.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=is();return q.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=is(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new lt(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=is(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=is(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,E)=>m.set(v,E))),!(m.size()>=o)););return q.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new IS(t,s));let u=this.kr.get(t);u===void 0&&(u=Ne(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class sA{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class pf{constructor(){this.qr=new St(Pt.Qr),this.$r=new St(Pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Pt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Pt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new de(new Ye([])),s=new Pt(t,e),o=new Pt(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new Ye([])),s=new Pt(t,e),o=new Pt(t,e+1);let u=Ne();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Pt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Pt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
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
 */class oA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new St(Pt.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new TS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new Pt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?nf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Pt(t,0),o=new Pt(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new St(Re);return t.forEach((o=>{const u=new Pt(o,0),h=new Pt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Pt(new de(u),0);let m=new St(Re);return this.Yr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Hr)),!0)}),h),q.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return q.forEach(t.mutations,(o=>{const u=new Pt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Pt(t,0),o=this.Yr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class aA{constructor(e){this.ni=e,this.docs=(function(){return new lt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Ht.newInvalidDocument(t))}getEntries(e,t){let s=jr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ht.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=jr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:E}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||M1(L1(E),s)<=0||(o.has(E.key)||dc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return q.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new lA(this)}getSize(e){return q.resolve(this.size)}}class lA extends eA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class uA{constructor(e){this.persistence=e,this.ii=new ps((t=>of(t)),af),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new pf,this.targetCount=0,this._i=Io.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),q.waitFor(u).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
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
 */class Ev{constructor(e,t){this.ai={},this.overlays={},this.ui=new lc(0),this.ci=!1,this.ci=!0,this.li=new sA,this.referenceDelegate=e(this),this.hi=new uA(this),this.indexManager=new GS,this.remoteDocumentCache=(function(o){return new aA(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new HS(t),this.Ti=new rA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new oA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new cA(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return q.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class cA extends j1{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Ai=new pf,this.Ri=null}static Vi(e){return new mf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(s=>{const o=de.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Zu{constructor(e,t){this.persistence=e,this.gi=new ps((s=>B1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=ZS(this,t)}static Vi(e,t){return new Zu(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bu(e.data.value)),t}Sr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ne(),o=Ne();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new gf(e,t.fromCache,s,o)}}/**
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
 */class hA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return sE()?8:U1(Wt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new hA;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(uo()<=Pe.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(uo()<=Pe.DEBUG&&re("QueryEngine","Query:",co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(uo()<=Pe.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):q.resolve())}ps(e,t){if(Qg(t))return q.resolve(null);let s=lr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Rd(t,null,"F"),s=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ne(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.bs(t,m);return this.Ds(t,v,h,y.readTime)?this.ps(e,Rd(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ys(e,t,s,o){return Qg(t)||o.isEqual(Ee.min())?q.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?q.resolve(null):(uo()<=Pe.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),co(t)),this.vs(e,h,t,O1(o,za)).next((m=>m)))}))}bs(e,t){let s=new St(Z_(e));return t.forEach(((o,u)=>{dc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return uo()<=Pe.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",co(t)),this.gs.getDocumentsMatchingQuery(e,t,Ii.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const yf="LocalStore",fA=3e8;class pA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new lt(Re),this.Ms=new ps((u=>of(u)),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function mA(i,e,t,s){return new pA(i,e,t,s)}async function Tv(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ne();for(const v of o){h.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}for(const v of u){m.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function gA(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,E){const A=v.batch,C=A.keys();let z=q.resolve();return C.forEach((Q=>{z=z.next((()=>E.getEntry(y,Q))).next((Y=>{const H=v.docVersions.get(Q);$e(H!==null,48541),Y.version.compareTo(H)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),E.addEntry(Y)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ne();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Iv(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function yA(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((E,A)=>{const C=o.get(A);if(!C)return;m.push(t.hi.removeMatchingKeys(u,E.removedDocuments,A).next((()=>t.hi.addMatchingKeys(u,E.addedDocuments,A))));let z=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(Ft.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(A,z),(function(Y,H,fe){return Y.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=fA?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0})(C,z,E)&&m.push(t.hi.updateTargetData(u,z))}));let y=jr(),v=Ne();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(_A(u,h,e.documentUpdates).next((E=>{y=E.Ls,v=E.ks}))),!s.isEqual(Ee.min())){const E=t.hi.getLastRemoteSnapshotVersion(u).next((A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return q.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Fs=o,u)))}function _A(i,e,t){let s=Ne(),o=Ne();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=jr();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ee.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):re(yf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Ls:h,ks:o}}))}function vA(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function wA(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,q.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new mi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function bd(i,e,t){const s=Te(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!No(h))throw h;re(yf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function ly(i,e,t){const s=Te(i);let o=Ee.min(),u=Ne();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,E){const A=Te(y),C=A.Ms.get(E);return C!==void 0?q.resolve(A.Fs.get(C)):A.hi.getTargetData(v,E)})(s,h,lr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Ne()))).next((m=>(EA(s,aS(e),m),{documents:m,qs:u})))))}function EA(i,e,t){let s=i.xs.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class uy{constructor(){this.activeTargetIds=fS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TA{constructor(){this.Fo=new uy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new uy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IA{xo(e){}shutdown(){}}/**
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
 */const cy="ConnectivityMonitor";class hy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(cy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(cy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ku=null;function Dd(){return ku===null?ku=(function(){return 268435456+Math.round(2147483648*Math.random())})():ku++,"0x"+ku.toString(16)}/**
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
 */const ld="RestConnection",SA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Wu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Dd(),m=this.Go(e,t.toUriEncodedString());re(ld,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,o,u);const{host:v}=new URL(m),E=ko(v);return this.jo(e,m,y,s,E).then((A=>(re(ld,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw Ti(ld,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=SA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class kA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const $t="WebChannelConnection";class RA extends AA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Dd();return new Promise(((m,y)=>{const v=new A_;v.setWithCredentials(!0),v.listenOnce(k_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Nu.NO_ERROR:const A=v.getResponseJson();re($t,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Nu.TIMEOUT:re($t,`RPC '${e}' ${h} timed out`),y(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const C=v.getStatus();if(re($t,`RPC '${e}' ${h} failed with status:`,C,"response text:",v.getResponseText()),C>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const Q=z==null?void 0:z.error;if(Q&&Q.status&&Q.message){const Y=(function(fe){const ue=fe.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ue)>=0?ue:$.UNKNOWN})(Q.status);y(new ie(Y,Q.message))}else y(new ie($.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new ie($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{re($t,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);re($t,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=Dd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=x_(),m=C_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");re($t,`Creating RPC '${e}' stream ${o}: ${E}`,y);const A=h.createWebChannel(E,y);this.T_(A);let C=!1,z=!1;const Q=new kA({Ho:H=>{z?re($t,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(C||(re($t,`Opening RPC '${e}' stream ${o} transport.`),A.open(),C=!0),re($t,`RPC '${e}' stream ${o} sending:`,H),A.send(H))},Yo:()=>A.close()}),Y=(H,fe,ue)=>{H.listen(fe,(ge=>{try{ue(ge)}catch(Se){setTimeout((()=>{throw Se}),0)}}))};return Y(A,xa.EventType.OPEN,(()=>{z||(re($t,`RPC '${e}' stream ${o} transport opened.`),Q.s_())})),Y(A,xa.EventType.CLOSE,(()=>{z||(z=!0,re($t,`RPC '${e}' stream ${o} transport closed`),Q.__(),this.I_(A))})),Y(A,xa.EventType.ERROR,(H=>{z||(z=!0,Ti($t,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),Q.__(new ie($.UNAVAILABLE,"The operation could not be completed")))})),Y(A,xa.EventType.MESSAGE,(H=>{var fe;if(!z){const ue=H.data[0];$e(!!ue,16349);const ge=ue,Se=(ge==null?void 0:ge.error)||((fe=ge[0])===null||fe===void 0?void 0:fe.error);if(Se){re($t,`RPC '${e}' stream ${o} received error:`,Se);const Je=Se.status;let ke=(function(k){const x=mt[k];if(x!==void 0)return cv(x)})(Je),N=Se.message;ke===void 0&&(ke=$.INTERNAL,N="Unknown error status: "+Je+" with message "+Se.message),z=!0,Q.__(new ie(ke,N)),A.close()}else re($t,`RPC '${e}' stream ${o} received:`,ue),Q.a_(ue)}})),Y(m,R_.STAT_EVENT,(H=>{H.stat===wd.PROXY?re($t,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===wd.NOPROXY&&re($t,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Q.o_()}),0),Q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ud(){return typeof document<"u"?document:null}/**
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
 */function gc(i){return new NS(i,!0)}/**
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
 */class Sv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const dy="PersistentStream";class Av{constructor(e,t,s,o,u,h,m,y){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class CA extends Av{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=VS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?cr(h.readTime):Ee.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Nd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Ad(y)?{documents:MS(u,y)}:{query:FS(u,y).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=fv(u,h.resumeToken);const v=Cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Ju(u,h.snapshotVersion.toTimestamp());const v=Cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=US(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Nd(this.serializer),t.removeTarget=e,this.k_(t)}}class xA extends Av{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=LS(e.writeResults,e.commitTime),s=cr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Nd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>OS(this.serializer,s)))};this.k_(t)}}/**
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
 */class PA{}class NA extends PA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,xd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,xd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class bA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Fr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ds="RemoteStore";class DA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{gs(this)&&(re(ds,"Restarting streams for network reachability change."),await(async function(y){const v=Te(y);v.Ia.add(4),await nl(v),v.Aa.set("Unknown"),v.Ia.delete(4),await yc(v)})(this))}))})),this.Aa=new bA(s,o)}}async function yc(i){if(gs(i))for(const e of i.da)await e(!0)}async function nl(i){for(const e of i.da)await e(!1)}function kv(i,e){const t=Te(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ef(t)?wf(t):bo(t).x_()&&vf(t,e))}function _f(i,e){const t=Te(i),s=bo(t);t.Ta.delete(e),s.x_()&&Rv(t,e),t.Ta.size===0&&(s.x_()?s.B_():gs(t)&&t.Aa.set("Unknown"))}function vf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bo(i).H_(e)}function Rv(i,e){i.Ra.$e(e),bo(i).Y_(e)}function wf(i){i.Ra=new RS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),bo(i).start(),i.Aa.aa()}function Ef(i){return gs(i)&&!bo(i).M_()&&i.Ta.size>0}function gs(i){return Te(i).Ia.size===0}function Cv(i){i.Ra=void 0}async function VA(i){i.Aa.set("Online")}async function OA(i){i.Ta.forEach(((e,t)=>{vf(i,e)}))}async function LA(i,e){Cv(i),Ef(i)?(i.Aa.la(e),wf(i)):i.Aa.set("Unknown")}async function MA(i,e,t){if(i.Aa.set("Online"),e instanceof dv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){re(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ec(i,s)}else if(e instanceof Ou?i.Ra.Ye(e):e instanceof hv?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ee.min()))try{const s=await Iv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ta.get(v);E&&u.Ta.set(v,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const E=u.Ta.get(y);if(!E)return;u.Ta.set(y,E.withResumeToken(Ft.EMPTY_BYTE_STRING,E.snapshotVersion)),Rv(u,y);const A=new mi(E.target,y,v,E.sequenceNumber);vf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){re(ds,"Failed to raise snapshot:",s),await ec(i,s)}}async function ec(i,e,t){if(!No(e))throw e;i.Ia.add(1),await nl(i),i.Aa.set("Offline"),t||(t=()=>Iv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{re(ds,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await yc(i)}))}function xv(i,e){return e().catch((t=>ec(i,t,e)))}async function _c(i){const e=Te(i),t=Ri(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nf;for(;FA(e);)try{const o=await vA(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,jA(e,o)}catch(o){await ec(e,o)}Pv(e)&&Nv(e)}function FA(i){return gs(i)&&i.Pa.length<10}function jA(i,e){i.Pa.push(e);const t=Ri(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Pv(i){return gs(i)&&!Ri(i).M_()&&i.Pa.length>0}function Nv(i){Ri(i).start()}async function UA(i){Ri(i).na()}async function zA(i){const e=Ri(i);for(const t of i.Pa)e.X_(t.mutations)}async function BA(i,e,t){const s=i.Pa.shift(),o=hf.from(s,e,t);await xv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await _c(i)}async function $A(i,e){e&&Ri(i).Z_&&await(async function(s,o){if((function(h){return AS(h)&&h!==$.ABORTED})(o.code)){const u=s.Pa.shift();Ri(s).N_(),await xv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await _c(s)}})(i,e),Pv(i)&&Nv(i)}async function fy(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),re(ds,"RemoteStore received new credentials");const s=gs(t);t.Ia.add(3),await nl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await yc(t)}async function qA(i,e){const t=Te(i);e?(t.Ia.delete(2),await yc(t)):e||(t.Ia.add(2),await nl(t),t.Aa.set("Unknown"))}function bo(i){return i.Va||(i.Va=(function(t,s,o){const u=Te(t);return u.ia(),new CA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:VA.bind(null,i),e_:OA.bind(null,i),n_:LA.bind(null,i),J_:MA.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),Ef(i)?wf(i):i.Aa.set("Unknown")):(await i.Va.stop(),Cv(i))}))),i.Va}function Ri(i){return i.ma||(i.ma=(function(t,s,o){const u=Te(t);return u.ia(),new xA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:UA.bind(null,i),n_:$A.bind(null,i),ea:zA.bind(null,i),ta:BA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await _c(i)):(await i.ma.stop(),i.Pa.length>0&&(re(ds,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
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
 */class Tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Tf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(i,e){if(Fr("AsyncQueue",`${e}: ${i}`),No(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Pa(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class py{constructor(){this.fa=new lt(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class So{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new So(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class HA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class WA{constructor(){this.queries=my(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=my(),u.forEach(((h,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new ie($.ABORTED,"Firestore shutting down"))}}function my(){return new ps((i=>J_(i)),hc)}async function bv(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new HA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=If(h,`Initialization of query '${co(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Sf(t)}async function Dv(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function GA(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Sf(t)}function KA(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Sf(i){i.Da.forEach((e=>{e.next()}))}var Vd,gy;(gy=Vd||(Vd={})).Fa="default",gy.Cache="cache";class Vv{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Vd.Cache}}/**
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
 */class Ov{constructor(e){this.key=e}}class Lv{constructor(e){this.key=e}}class QA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=Z_(e),this.eu=new yo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new py,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,A)=>{const C=o.get(E),z=dc(this.query,A)?A:null,Q=!!C&&this.mutatedKeys.has(C.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;C&&z?C.data.isEqual(z.data)?Q!==Y&&(s.track({type:3,doc:z}),H=!0):this.iu(C,z)||(s.track({type:2,doc:z}),H=!0,(y&&this.Xa(z,y)>0||v&&this.Xa(z,v)<0)&&(m=!0)):!C&&z?(s.track({type:0,doc:z}),H=!0):C&&!z&&(s.track({type:1,doc:C}),H=!0,(y||v)&&(m=!0)),H&&(z?(h=h.add(z),u=Y?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,A)=>(function(z,Q){const Y=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:H})}};return Y(z)-Y(Q)})(E.type,A.type)||this.Xa(E.doc,A.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],y=this.Za.size===0&&this.current&&!o?1:0,v=y!==this.Ya;return this.Ya=y,h.length!==0||v?{snapshot:new So(this.query,e.eu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new py,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Lv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Ov(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return So.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Af="SyncEngine";class XA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class YA{constructor(e){this.key=e,this.lu=!1}}class JA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ps((m=>J_(m)),hc),this.Tu=new Map,this.Iu=new Set,this.du=new lt(de.comparator),this.Eu=new Map,this.Au=new pf,this.Ru={},this.Vu=new Map,this.mu=Io.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ZA(i,e,t=!0){const s=Bv(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await Mv(s,e,t,!0),o}async function ek(i,e){const t=Bv(i);await Mv(t,e,!0,!1)}async function Mv(i,e,t,s){const o=await wA(i.localStore,lr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await tk(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&kv(i.remoteStore,o),m}async function tk(i,e,t,s,o){i.gu=(A,C,z)=>(async function(Y,H,fe,ue){let ge=H.view.nu(fe);ge.Ds&&(ge=await ly(Y.localStore,H.query,!1).then((({documents:N})=>H.view.nu(N,ge))));const Se=ue&&ue.targetChanges.get(H.targetId),Je=ue&&ue.targetMismatches.get(H.targetId)!=null,ke=H.view.applyChanges(ge,Y.isPrimaryClient,Se,Je);return _y(Y,H.targetId,ke._u),ke.snapshot})(i,A,C,z);const u=await ly(i.localStore,e,!0),h=new QA(e,u.qs),m=h.nu(u.documents),y=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);_y(i,t,v._u);const E=new XA(e,t,h);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),v.snapshot}async function nk(i,e,t){const s=Te(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!hc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await bd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&_f(s.remoteStore,o.targetId),Od(s,o.targetId)})).catch(Po)):(Od(s,o.targetId),await bd(s.localStore,o.targetId,!0))}async function rk(i,e){const t=Te(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_f(t.remoteStore,s.targetId))}async function ik(i,e,t){const s=hk(i);try{const o=await(function(h,m){const y=Te(h),v=tt.now(),E=m.reduce(((z,Q)=>z.add(Q.key)),Ne());let A,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Q=jr(),Y=Ne();return y.Os.getEntries(z,E).next((H=>{Q=H,Q.forEach(((fe,ue)=>{ue.isValidDocument()||(Y=Y.add(fe))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Q))).next((H=>{A=H;const fe=[];for(const ue of m){const ge=wS(ue,A.get(ue.key).overlayedDocument);ge!=null&&fe.push(new ms(ue.key,ge,q_(ge.value.mapValue),ur.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,fe,m)})).next((H=>{C=H;const fe=H.applyToLocalDocumentSet(A,Y);return y.documentOverlayCache.saveOverlays(z,H.batchId,fe)}))})).then((()=>({batchId:C.batchId,changes:tv(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Ru[h.currentUser.toKey()];v||(v=new lt(Re)),v=v.insert(m,y),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await rl(s,o.changes),await _c(s.remoteStore)}catch(o){const u=If(o,"Failed to persist write");t.reject(u)}}async function Fv(i,e){const t=Te(i);try{const s=await yA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?$e(h.lu,14607):o.removedDocuments.size>0&&($e(h.lu,42227),h.lu=!1))})),await rl(t,s,e)}catch(s){await Po(s)}}function yy(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Te(h);y.onlineState=m;let v=!1;y.queries.forEach(((E,A)=>{for(const C of A.wa)C.va(m)&&(v=!0)})),v&&Sf(y)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sk(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new lt(de.comparator);h=h.insert(u,Ht.newNoDocument(u,Ee.min()));const m=Ne().add(u),y=new mc(Ee.min(),new Map,new lt(Re),h,m);await Fv(s,y),s.du=s.du.remove(u),s.Eu.delete(e),kf(s)}else await bd(s.localStore,e,!1).then((()=>Od(s,e,t))).catch(Po)}async function ok(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await gA(t.localStore,e);Uv(t,s,null),jv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await Po(o)}}async function ak(i,e,t){const s=Te(i);try{const o=await(function(h,m){const y=Te(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return y.mutationQueue.lookupMutationBatch(v,m).next((A=>($e(A!==null,37113),E=A.keys(),y.mutationQueue.removeMutationBatch(v,A)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>y.localDocuments.getDocuments(v,E)))}))})(s.localStore,e);Uv(s,e,t),jv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await Po(o)}}function jv(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function Uv(i,e,t){const s=Te(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Od(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||zv(i,s)}))}function zv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(_f(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),kf(i))}function _y(i,e,t){for(const s of t)s instanceof Ov?(i.Au.addReference(s.key,e),lk(i,s)):s instanceof Lv?(re(Af,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||zv(i,s.key)):_e(19791,{yu:s})}function lk(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(re(Af,"New document in limbo: "+t),i.Iu.add(s),kf(i))}function kf(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new de(Ye.fromString(e)),s=i.mu.next();i.Eu.set(s,new YA(t)),i.du=i.du.insert(t,s),kv(i.remoteStore,new mi(lr(lf(t.path)),s,"TargetPurposeLimboResolution",lc.ue))}}async function rl(i,e,t){const s=Te(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{h.push(s.gu(y,e,t).then((v=>{var E;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(v){o.push(v);const A=gf.Es(y.targetId,v);u.push(A)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(y,v){const E=Te(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>q.forEach(v,(C=>q.forEach(C.Is,(z=>E.persistence.referenceDelegate.addReference(A,C.targetId,z))).next((()=>q.forEach(C.ds,(z=>E.persistence.referenceDelegate.removeReference(A,C.targetId,z)))))))))}catch(A){if(!No(A))throw A;re(yf,"Failed to update sequence numbers: "+A)}for(const A of v){const C=A.targetId;if(!A.fromCache){const z=E.Fs.get(C),Q=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(Q);E.Fs=E.Fs.insert(C,Y)}}})(s.localStore,u))}async function uk(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){re(Af,"User change. New user:",e.toKey());const s=await Tv(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((y=>{y.reject(new ie($.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Bs)}}function ck(i,e){const t=Te(i),s=t.Eu.get(e);if(s&&s.lu)return Ne().add(s.key);{let o=Ne();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Bv(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ck.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sk.bind(null,e),e.hu.J_=GA.bind(null,e.eventManager),e.hu.pu=KA.bind(null,e.eventManager),e}function hk(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ok.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ak.bind(null,e),e}class tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return mA(this.persistence,new dA,e.initialUser,this.serializer)}Du(e){return new Ev(mf.Vi,this.serializer)}bu(e){return new TA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tc.provider={build:()=>new tc};class dk extends tc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){$e(this.persistence.referenceDelegate instanceof Zu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new YS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new Ev((s=>Zu.Vi(s,t)),this.serializer)}}class Ld{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uk.bind(null,this.syncEngine),await qA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new WA})()}createDatastore(e){const t=gc(e.databaseInfo.databaseId),s=(function(u){return new RA(u)})(e.databaseInfo);return(function(u,h,m,y){return new NA(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new DA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>yy(this.syncEngine,t,0)),(function(){return hy.C()?new hy:new IA})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,E){const A=new JA(o,u,h,m,y,v);return E&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Te(o);re(ds,"RemoteStore shutting down."),u.Ia.add(5),await nl(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ld.provider={build:()=>new Ld};/**
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
 */class $v{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ci="FirestoreClient";class fk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=qt.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=If(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function cd(i,e){i.asyncQueue.verifyOperationInProgress(),re(Ci,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Tv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ti("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ti("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function vy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await pk(i);re(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>fy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>fy(e.remoteStore,o))),i._onlineComponents=e}async function pk(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){re(Ci,"Using user provided OfflineComponentProvider");try{await cd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ti("Error using user provided cache. Falling back to memory cache: "+t),await cd(i,new tc)}}else re(Ci,"Using default OfflineComponentProvider"),await cd(i,new dk(void 0));return i._offlineComponents}async function qv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(re(Ci,"Using user provided OnlineComponentProvider"),await vy(i,i._uninitializedComponentsProvider._online)):(re(Ci,"Using default OnlineComponentProvider"),await vy(i,new Ld))),i._onlineComponents}function mk(i){return qv(i).then((e=>e.syncEngine))}async function Md(i){const e=await qv(i),t=e.eventManager;return t.onListen=ZA.bind(null,e.syncEngine),t.onUnlisten=nk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ek.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rk.bind(null,e.syncEngine),t}function gk(i,e,t={}){const s=new wi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const E=new $v({next:C=>{E.Ou(),h.enqueueAndForget((()=>Dv(u,A))),C.fromCache&&y.source==="server"?v.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(C)},error:C=>v.reject(C)}),A=new Vv(m,E,{includeMetadataChanges:!0,ka:!0});return bv(u,A)})(await Md(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function Hv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const wy=new Map;/**
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
 */const Wv="firestore.googleapis.com",Ey=!0;class Ty{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wv,this.ssl=Ey}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ey;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QS)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new A1;switch(s.type){case"firstParty":return new x1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=wy.get(t);s&&(re("ComponentProvider","Removing Datastore"),wy.delete(t),s.terminate())})(this),Promise.resolve()}}function yk(i,e,t,s={}){var o;i=Or(i,vc);const u=ko(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(jy(`https://${y}`),Uy("Firestore",!0)),h.host!==Wv&&h.host!==y&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!ls(v,m)&&(i._setSettings(v),s.mockUserToken)){let E,A;if(typeof s.mockUserToken=="string")E=s.mockUserToken,A=qt.MOCK_USER;else{E=Xw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new qt(C)}i._authCredentials=new k1(new N_(E,A))}}/**
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
 */class ys{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class _t{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ja(t,_t._jsonSchema))return new _t(e,s||null,new de(Ye.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:yt("string",_t._jsonSchemaVersion),referencePath:yt("string")};class Ei extends ys{constructor(e,t,s){super(e,t,lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new de(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function ka(i,e,...t){if(i=Gt(i),D_("collection","path",e),i instanceof vc){const s=Ye.fromString(e,...t);return Og(s),new Ei(i,null,s)}{if(!(i instanceof _t||i instanceof Ei))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return Og(s),new Ei(i.firestore,null,s)}}function hd(i,e,...t){if(i=Gt(i),arguments.length===1&&(e=tf.newId()),D_("doc","path",e),i instanceof vc){const s=Ye.fromString(e,...t);return Vg(s),new _t(i,null,new de(s))}{if(!(i instanceof _t||i instanceof Ei))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return Vg(s),new _t(i.firestore,i instanceof Ei?i.converter:null,new de(s))}}/**
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
 */const Iy="AsyncQueue";class Sy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sv(this,"async_queue_retry"),this.oc=()=>{const s=ud();s&&re(Iy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=ud();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ud();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new wi;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!No(e))throw e;re(Iy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Fr("INTERNAL UNHANDLED ERROR: ",Ay(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Tf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:Ay(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ay(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function ky(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Ao extends vc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Sy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sy(e),this._firestoreClient=void 0,await e}}}function _k(i,e){const t=typeof i=="object"?i:qy(),s=typeof i=="string"?i:Wu,o=Bd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Kw("firestore");u&&yk(o,...u)}return o}function Rf(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||vk(i),i._firestoreClient}function vk(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,y,v,E){return new H1(m,y,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Hv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new fk(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Ft.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ja(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:yt("string",Cn._jsonSchemaVersion),bytes:yt("string")};/**
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
 */class Cf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gv{constructor(e){this._methodName=e}}/**
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
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(Ja(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:yt("string",hr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
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
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ja(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new ie($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:yt("string",dr._jsonSchemaVersion),vectorValues:yt("object")};/**
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
 */const wk=/^__.*__$/;class Ek{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}function Kv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:i})}}class xf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return nc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Kv(this.Ec)&&wk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Tk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||gc(e)}Dc(e,t,s,o=!1){return new xf({Ec:e,methodName:t,bc:s,path:Mt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qv(i){const e=i._freezeSettings(),t=gc(i._databaseId);return new Tk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Ik(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);Jv("Data must be an object, but it was:",h,s);const m=Xv(s,h);let y,v;if(u.merge)y=new Wn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const C=Ak(e,A,t);if(!h.contains(C))throw new ie($.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Rk(E,C)||E.push(C)}y=new Wn(E),v=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,v=h.fieldTransforms;return new Ek(new Rn(m),y,v)}function Sk(i,e,t,s=!1){return Pf(t,i.Dc(s?4:3,e))}function Pf(i,e){if(Yv(i=Gt(i)))return Jv("Unsupported field value:",e,i),Xv(i,e);if(i instanceof Gv)return(function(s,o){if(!Kv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Pf(m,o.yc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=tt.fromDate(s);return{timestampValue:Ju(o.serializer,u)}}if(s instanceof tt){const u=new tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ju(o.serializer,u)}}if(s instanceof hr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Cn)return{bytesValue:fv(o.serializer,s._byteString)};if(s instanceof _t){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ff(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof dr)return(function(h,m){return{mapValue:{fields:{[B_]:{stringValue:$_},[Gu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return uf(m.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${ac(s)}`)})(i,e)}function Xv(i,e){const t={};return L_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(i,((s,o)=>{const u=Pf(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Yv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof tt||i instanceof hr||i instanceof Cn||i instanceof _t||i instanceof Gv||i instanceof dr)}function Jv(i,e,t){if(!Yv(t)||!V_(t)){const s=ac(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Ak(i,e,t){if((e=Gt(e))instanceof Cf)return e._internalPath;if(typeof e=="string")return Zv(i,e);throw nc("Field path arguments must be of type string or ",i,!1,void 0,t)}const kk=new RegExp("[~\\*/\\[\\]]");function Zv(i,e,t){if(e.search(kk)>=0)throw nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Cf(...e.split("."))._internalPath}catch{throw nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function nc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ie($.INVALID_ARGUMENT,m+i+y)}function Rk(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class e0{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Nf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ck extends e0{data(){return super.data()}}function Nf(i,e){return typeof e=="string"?Zv(i,e):e instanceof Cf?e._internalPath:e._delegate._internalPath}/**
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
 */function t0(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bf{}class xk extends bf{}function Pk(i,e,...t){let s=[];e instanceof bf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof Df)).length,m=u.filter((y=>y instanceof wc)).length;if(h>1||h>0&&m>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class wc extends xk{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new wc(e,t,s)}_apply(e){const t=this._parse(e);return n0(e._query,t),new ys(e.firestore,e.converter,kd(e._query,t))}_parse(e){const t=Qv(e.firestore);return(function(u,h,m,y,v,E,A){let C;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Cy(A,E);const Q=[];for(const Y of A)Q.push(Ry(y,u,Y));C={arrayValue:{values:Q}}}else C=Ry(y,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Cy(A,E),C=Sk(m,h,A,E==="in"||E==="not-in");return gt.create(v,E,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Nk(i,e,t){const s=e,o=Nf("where",i);return wc._create(o,s,t)}class Df extends bf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Df(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)n0(h,y),h=kd(h,y)})(e._query,t),new ys(e.firestore,e.converter,kd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ry(i,e,t){if(typeof(t=Gt(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Y_(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ye.fromString(t));if(!de.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $g(i,new de(s))}if(t instanceof _t)return $g(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(t)}.`)}function Cy(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function n0(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bk{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Gu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>dt(h.doubleValue)));return new dr(u)}convertGeoPoint(e){return new hr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=cc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const t=Si(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);$e(vv(s),9688,{name:e});const o=new $a(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function Dk(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends e0{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Nf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=os._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:yt("string",os._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class Lu extends os{data(e={}){return super.data(e)}}class as{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ba(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Lu(this._firestore,this._userDataWriter,s.key,s,new ba(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ba(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ba(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:Vk(m.type),doc:y,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=as._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:yt("string",as._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class Vf extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function Ok(i){i=Or(i,ys);const e=Or(i.firestore,Ao),t=Rf(e),s=new Vf(e);return t0(i._query),gk(t,i._query).then((o=>new as(e,s,i,o)))}function xy(i,e,t){i=Or(i,_t);const s=Or(i.firestore,Ao),o=Dk(i.converter,e);return r0(s,[Ik(Qv(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,ur.none())])}function Lk(i){return r0(Or(i.firestore,Ao),[new cf(i._key,ur.none())])}function Mk(i,...e){var t,s,o;i=Gt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||ky(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(ky(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let y,v,E;if(i instanceof _t)v=Or(i.firestore,Ao),E=lf(i._key.path),y={next:A=>{e[h]&&e[h](Fk(v,i,A))},error:e[h+1],complete:e[h+2]};else{const A=Or(i,ys);v=Or(A.firestore,Ao),E=A._query;const C=new Vf(v);y={next:z=>{e[h]&&e[h](new as(v,C,A,z))},error:e[h+1],complete:e[h+2]},t0(i._query)}return(function(C,z,Q,Y){const H=new $v(Y),fe=new Vv(z,H,Q);return C.asyncQueue.enqueueAndForget((async()=>bv(await Md(C),fe))),()=>{H.Ou(),C.asyncQueue.enqueueAndForget((async()=>Dv(await Md(C),fe)))}})(Rf(v),E,m,y)}function r0(i,e){return(function(s,o){const u=new wi;return s.asyncQueue.enqueueAndForget((async()=>ik(await mk(s),o,u))),u.promise})(Rf(i),e)}function Fk(i,e,t){const s=t.docs.get(e._key),o=new Vf(i);return new os(i,o,e._key,s,new ba(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){xo=o})(Ro),_o(new us("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ao(new R1(s.getProvider("auth-internal")),new P1(h,s.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(v.options.projectId,E)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),_i(xg,Pg,e),_i(xg,Pg,"esm2017")})();const jk={apiKey:"AIzaSyD3HNVcLjjsptFnJWsmXwL9_SQvyqtALHs",authDomain:"tcssh-service.firebaseapp.com",projectId:"tcssh-service",storageBucket:"tcssh-service.firebasestorage.app",messagingSenderId:"438628712501",appId:"1:438628712501:web:626754f06fdb088126f17c"},i0=$y(jk),lo=I1(i0),Ra=_k(i0),Ca="tcssh-service",Fd="cloud.tcssh.tc.edu.tw",Py=i=>{var e;return((e=i==null?void 0:i.email)==null?void 0:e.toLowerCase().endsWith(`@${Fd}`))===!0},Ny=i=>i!=null&&i.email?`tcssh-registrar:${i.email.toLowerCase()}`:null;function Uk(){const[i,e]=at.useState(null),[t,s]=at.useState(!0),[o,u]=at.useState(""),[h,m]=at.useState("form"),[y,v]=at.useState(""),[E,A]=at.useState(1),C=30,[z,Q]=at.useState(!1),[Y,H]=at.useState({registrar:"",date:new Date().toISOString().split("T")[0]}),[fe,ue]=at.useState([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}]),[ge,Se]=at.useState([]),[Je,ke]=at.useState({show:!1,message:"",type:""}),[N,T]=at.useState({show:!1,password:"",pendingAction:null}),[k,x]=at.useState({show:!1,recordId:null,studentName:""});at.useEffect(()=>{document.title="二中學生愛校服務登記表",cI(lo,p_).catch(ye=>{console.error("無法設定登入保存狀態",ye)});const W=fI(lo,async ye=>{if(ye&&!Py(ye)){await sd(lo),e(null),u("請使用學校 Google 帳號登入（@cloud.tcssh.tc.edu.tw）"),s(!1);return}e(ye),u(""),s(!1)});return()=>W()},[]),at.useEffect(()=>{if(!i)return;const W=ka(Ra,"artifacts",Ca,"public","data","serviceRecords"),ye=Mk(W,be=>{const qe=new Date;qe.setFullYear(qe.getFullYear()-1);const Ge=be.docs.map(De=>({id:Number(De.id),...De.data()})).filter(De=>new Date(De.date)>=qe);Se(Ge)},be=>{console.error("雲端資料同步失敗:",be),Ue("無法連接雲端資料庫","error")});return()=>ye()},[i]),at.useEffect(()=>{const W=Ny(i);if(!W)return;const ye=localStorage.getItem(W);ye&&H(be=>({...be,registrar:ye}))},[i]),at.useEffect(()=>{A(1)},[y]);const D=W=>{const{name:ye,value:be}=W.target;if(H(qe=>({...qe,[ye]:be})),ye==="registrar"){const qe=Ny(i);if(qe){const Ge=be.trim();Ge?localStorage.setItem(qe,Ge):localStorage.removeItem(qe)}}},O=(W,ye,be)=>{ue(qe=>qe.map(Ge=>Ge.id===W?{...Ge,[ye]:be,...ye==="name"?{nameWasAutoFilled:!1}:{}}:Ge))},S=async(W,ye)=>{const be=ye.replace(/\D/g,"").slice(0,6);if(ue(qe=>qe.map(Ge=>Ge.id!==W?Ge:{...Ge,studentId:be,...Ge.nameWasAutoFilled?{name:"",nameWasAutoFilled:!1}:{}})),!(be.length!==6||!i))try{const qe=ka(Ra,"artifacts",Ca,"public","data","serviceRecords"),Ge=await Ok(Pk(qe,Nk("studentId","==",be)));if(Ge.empty)return;const De=Ge.docs.map(Nt=>Nt.data()).sort((Nt,gn)=>Number(gn.id||0)-Number(Nt.id||0))[0];if(!(De!=null&&De.name))return;ue(Nt=>Nt.map(gn=>gn.id===W&&gn.studentId===be?{...gn,name:De.name,nameWasAutoFilled:!0}:gn))}catch(qe){console.error("查詢學生姓名失敗：",qe)}},it=()=>{ue([...fe,{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])},At=W=>{fe.length>1&&ue(fe.filter(ye=>ye.id!==W))},Ue=(W,ye="success")=>{ke({show:!0,message:W,type:ye}),setTimeout(()=>{ke({show:!1,message:"",type:""})},3e3)},Be=async W=>{if(W.preventDefault(),!i){Ue("資料庫尚未連線，請稍候...","error");return}if(!Y.registrar||!Y.date){Ue("請填寫上方「登記人」與「登記日期」！","error");return}const ye=fe.filter(De=>De.studentId.trim()!==""||De.name.trim()!==""||De.violationReason.trim()!=="");if(ye.length===0){Ue("請至少填寫一筆學生資料！","error");return}if(ye.some(De=>!De.studentId.trim()||!De.name.trim()||!De.violationReason.trim())){Ue("請確認有輸入的列皆已完整填寫必填欄位！","error");return}if(ye.some(De=>De.studentId.trim().length!==6)){Ue("請確認輸入的學號皆為 6 碼！","error");return}const Ge=ye.map((De,Nt)=>({id:Date.now()-Nt,registrar:Y.registrar,date:Y.date,studentId:De.studentId,name:De.name,serviceCount:Number(De.serviceCount)||1,violationReason:De.violationReason,timestamp:new Date().toLocaleString(),completed:!1}));try{const De=ka(Ra,"artifacts",Ca,"public","data","serviceRecords");await Promise.all(Ge.map(Nt=>xy(hd(De,Nt.id.toString()),Nt))),Ue(`成功登記 ${Ge.length} 筆資料並儲存至雲端！`,"success"),ue([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])}catch(De){console.error("雲端寫入失敗:",De),Ue("雲端儲存失敗，請重試！","error")}},ee=async W=>{if(!z)return;const ye=ka(Ra,"artifacts",Ca,"public","data","serviceRecords"),be=!W.completed;try{await xy(hd(ye,W.id.toString()),{...W,completed:be}),Ue(be?`已將 ${W.name} 標記為完成！`:`已取消 ${W.name} 的完成狀態`,be?"success":"info")}catch(qe){console.error("更新完成狀態失敗:",qe),Ue("雲端更新失敗，請重試！","error")}},he=W=>{z&&x({show:!0,recordId:W.id,studentName:W.name})},te=async()=>{if(!(!i||!k.recordId))try{const W=ka(Ra,"artifacts",Ca,"public","data","serviceRecords");await Lk(hd(W,k.recordId.toString())),Ue("紀錄已從雲端資料庫徹底刪除！","info")}catch(W){console.error("刪除失敗:",W),Ue("資料庫刪除失敗，請重試！","error")}finally{x({show:!1,recordId:null,studentName:""})}},V=()=>{N.password==="22021897"?(Q(!0),Ue("管理員權限驗證成功！","success"),T(W=>(W.pendingAction&&setTimeout(()=>W.pendingAction(),100),{show:!1,password:"",pendingAction:null}))):Ue("密碼錯誤，請重新輸入！","error")},B=()=>{Q(!1),Ue("管理員已登出並鎖定權限","info")},ce=async()=>{u("");try{const W=new br;W.setCustomParameters({hd:Fd,prompt:"select_account"});const ye=await bI(lo,W);Py(ye.user)||(await sd(lo),u("請使用學校 Google 帳號登入（@cloud.tcssh.tc.edu.tw）"))}catch(W){console.error("Google 登入失敗：",W),(W==null?void 0:W.code)!=="auth/popup-closed-by-user"&&u("Google 登入失敗，請確認使用學校帳號後再試一次")}},Ae=async()=>{await sd(lo),Q(!1)},Ie=ge.filter(W=>{const ye=y.toLowerCase();return W.date.toLowerCase().includes(ye)||W.studentId.toLowerCase().includes(ye)||W.name.toLowerCase().includes(ye)||W.registrar.toLowerCase().includes(ye)}),Ce=Math.ceil(Ie.length/C)||1,Oe=E*C,Fe=Oe-C,We=[...Ie].sort((W,ye)=>ye.id-W.id).slice(Fe,Oe);return t?b.jsx("div",{className:"soft-login min-h-screen flex items-center justify-center px-4 font-sans",children:b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"}),b.jsx("p",{className:"text-slate-700 font-bold",children:"正在確認學校帳號…"})]})}):i?b.jsxs("div",{className:"soft-page min-h-screen py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 relative selection:bg-teal-600 selection:text-white",children:[b.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none rounded-b-[40px] z-0"}),b.jsxs("div",{className:"relative w-full max-w-5xl mx-auto space-y-8 transition-all duration-300 z-10",children:[b.jsxs("header",{className:"soft-card soft-header rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden mt-4 sm:mt-0",children:[b.jsx("div",{className:"soft-accent-bar absolute top-0 left-0 w-full"}),b.jsx("div",{className:"flex justify-center items-center mb-5",children:b.jsx("div",{className:"bg-teal-50 text-teal-700 p-4 rounded-2xl border border-teal-100 shadow-sm",children:b.jsx(wu,{size:44,className:"stroke-[1.8]"})})}),b.jsxs("div",{className:"inline-flex items-center space-x-2 bg-slate-100/90 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-4 border border-slate-200 shadow-sm",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-600 animate-pulse"}),b.jsx("span",{children:"臺中二中學務處 教官室"})]}),b.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-slate-955 tracking-tight leading-none mb-3",children:"二中學生愛校服務登記表"}),b.jsxs("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-center hidden sm:block",children:["依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導",b.jsx("br",{}),"期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"]}),b.jsx("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-left block sm:hidden px-4",children:"依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導，期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"}),b.jsxs("div",{className:"mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-bold text-slate-600",children:[b.jsx("span",{className:"max-w-full truncate",children:i.email}),b.jsx("button",{type:"button",onClick:Ae,className:"rounded-lg px-3 py-1.5 text-blue-700 hover:bg-blue-50 transition-colors",children:"切換學校帳號"})]})]}),b.jsx("div",{className:"flex justify-center mb-6",children:b.jsxs("div",{className:"soft-tabs p-1.5 rounded-2xl inline-flex space-x-1 border shadow-sm",children:[b.jsxs("button",{onClick:()=>m("form"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${h==="form"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-955 hover:bg-white/40"}`,children:[b.jsx(Vw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記作業"]}),b.jsxs("button",{onClick:()=>m("list"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${h==="list"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-955 hover:bg-white/40"}`,children:[b.jsx(kw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記名單查詢"]})]})}),N.show&&b.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity",children:b.jsxs("div",{className:"soft-modal bg-white rounded-3xl p-8 max-w-sm w-full border animate-in zoom-in-95 duration-200",children:[b.jsxs("div",{className:"flex items-center text-blue-700 mb-4 bg-blue-50 p-3 rounded-2xl",children:[b.jsx(Ym,{size:24,className:"mr-2 text-blue-700 stroke-[2.5]"}),b.jsx("h3",{className:"text-lg font-black text-slate-955",children:"管理員權限驗證"})]}),b.jsx("p",{className:"text-sm text-slate-700 font-bold leading-relaxed mb-5",children:"此操作需要教官室權限驗證。請輸入管理員密碼："}),b.jsx("input",{type:"password",placeholder:"請輸入密碼",value:N.password,onChange:W=>T(ye=>({...ye,password:W.target.value})),onKeyDown:W=>W.key==="Enter"&&V(),className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-550 text-slate-955 font-bold outline-none mb-6 placeholder:text-slate-400 font-mono text-center tracking-widest",autoFocus:!0}),b.jsxs("div",{className:"flex justify-end space-x-3",children:[b.jsx("button",{onClick:()=>T({show:!1,password:"",pendingAction:null}),className:"px-4 py-2.5 text-slate-755 hover:bg-slate-100 rounded-xl transition-colors font-extrabold text-sm",children:"取消"}),b.jsx("button",{onClick:V,className:"px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/10 transition-colors font-extrabold text-sm",children:"確認登入"})]})]})}),k.show&&b.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity",children:b.jsxs("div",{className:"soft-modal bg-white rounded-3xl p-8 max-w-sm w-full border animate-in zoom-in-95 duration-200",children:[b.jsxs("div",{className:"flex items-center text-red-600 mb-4 bg-red-50 p-3 rounded-2xl",children:[b.jsx(bw,{size:24,className:"mr-2 text-red-600 stroke-[2.5]"}),b.jsx("h3",{className:"text-lg font-black text-slate-955",children:"確認刪除登記紀錄？"})]}),b.jsxs("p",{className:"text-sm text-slate-700 font-extrabold leading-relaxed mb-6",children:["您確定要徹底刪除學生 ",b.jsxs("span",{className:"text-red-600 font-black text-base",children:["「",k.studentName,"」"]})," 的這筆登記紀錄嗎？此動作將永久自雲端資料庫抹除，且無法復原。"]}),b.jsxs("div",{className:"flex justify-end space-x-3",children:[b.jsx("button",{onClick:()=>x({show:!1,recordId:null,studentName:""}),className:"px-4 py-2.5 text-slate-755 hover:bg-slate-100 rounded-xl transition-colors font-extrabold text-sm",children:"取消"}),b.jsx("button",{onClick:te,className:"px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md shadow-red-500/10 transition-colors font-extrabold text-sm",children:"確定刪除"})]})]})}),b.jsxs("div",{className:"w-full",children:[h==="form"&&b.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[b.jsxs("form",{onSubmit:Be,className:"soft-card rounded-[2rem] p-6 sm:p-10",children:[b.jsxs("h2",{className:"text-xl font-black mb-6 flex items-center text-slate-950 border-b pb-4 border-slate-100",children:[b.jsx(Fw,{size:22,className:"mr-2.5 text-blue-600 stroke-[2.5]"}),"填寫登記資料"]}),b.jsxs("div",{className:"space-y-6",children:[b.jsxs("div",{className:"soft-section p-5 border rounded-2xl space-y-4",children:[b.jsxs("p",{className:"text-xs text-slate-800 font-black mb-2 flex items-center",children:[b.jsx(Xm,{size:14,className:"mr-1.5 text-blue-600 stroke-[2.5]"})," 以下資料送出後會自動保留"]}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[b.jsxs("div",{children:[b.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記人 (師長/負責幹部) ",b.jsx("span",{className:"text-red-500",children:"*"})]}),b.jsx("input",{type:"text",name:"registrar",placeholder:"例: 林組長",value:Y.registrar,onChange:D,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-slate-950 font-extrabold bg-white placeholder:text-slate-400 shadow-inner"})]}),b.jsxs("div",{children:[b.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記日期 ",b.jsx("span",{className:"text-red-500",children:"*"})]}),b.jsx("input",{type:"date",name:"date",value:Y.date,onChange:D,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold bg-white shadow-inner"})]})]})]}),b.jsxs("div",{className:"space-y-4",children:[b.jsx("div",{className:"flex justify-between items-end mb-1",children:b.jsx("label",{className:"block text-sm font-extrabold text-slate-900",children:"批次學生資料填寫"})}),fe.map((W,ye)=>b.jsxs("div",{className:"soft-student-card relative p-6 border rounded-2xl flex flex-col gap-4 group transition-all",children:[fe.length>1&&b.jsx("button",{type:"button",onClick:()=>At(W.id),className:"absolute -top-3 -right-3 bg-white text-slate-500 hover:text-red-600 hover:bg-red-50 border-2 border-slate-200 rounded-full p-1.5 shadow-md transition-colors z-10 cursor-pointer",title:"移除此列",children:b.jsx(Zm,{size:16,className:"stroke-[2.5]"})}),b.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[b.jsxs("div",{className:"sm:col-span-2",children:[b.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["學號 ",b.jsx("span",{className:"text-red-600",children:"*"})]}),b.jsx("input",{type:"text",placeholder:"例: 110123",maxLength:"6",value:W.studentId,onChange:be=>S(W.id,be.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-350 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold outline-none placeholder:text-slate-400 font-mono shadow-inner"})]}),b.jsxs("div",{className:"sm:col-span-2",children:[b.jsxs("label",{className:"flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5",children:[b.jsxs("span",{children:["姓名 ",b.jsx("span",{className:"text-red-600",children:"*"})]}),W.nameWasAutoFilled&&b.jsx("span",{className:"text-[11px] text-teal-700 font-bold",children:"已由資料庫帶入"})]}),b.jsx("input",{type:"text",placeholder:"例: 王小明",value:W.name,onChange:be=>O(W.id,"name",be.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold outline-none placeholder:text-slate-400 shadow-inner animate-none"})]}),b.jsxs("div",{className:"sm:col-span-2",children:[b.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["次數 ",b.jsx("span",{className:"text-red-600",children:"*"})]}),b.jsx("input",{type:"number",min:"1",value:W.serviceCount,onChange:be=>O(W.id,"serviceCount",be.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-black outline-none shadow-inner"})]}),b.jsxs("div",{className:"sm:col-span-6",children:[b.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["違規事件/事由 ",b.jsx("span",{className:"text-red-600",children:"*"})]}),b.jsx("input",{type:"text",placeholder:"例: 遲到、未交作業",value:W.violationReason,onChange:be=>O(W.id,"violationReason",be.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-955 font-extrabold outline-none placeholder:text-slate-400 shadow-inner"})]})]})]},W.id)),b.jsxs("button",{type:"button",onClick:it,className:"w-full py-4 border-2 border-dashed border-slate-750 rounded-2xl hover:bg-blue-50/50 hover:text-blue-700 hover:border-blue-450 transition-colors flex items-center justify-center text-sm font-extrabold mt-2 cursor-pointer shadow-sm active:scale-[0.995]",children:[b.jsx(xw,{size:16,className:"mr-1.5 stroke-[3]"})," 新增下一位學生"]})]}),b.jsxs("button",{type:"submit",className:"soft-primary w-full mt-6 text-white font-black py-4 px-4 rounded-2xl transition-all duration-250 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 text-center flex justify-center items-center cursor-pointer text-base",children:[b.jsx(Jh,{size:18,className:"mr-2"})," 送出登記"]})]})]}),b.jsxs("div",{className:"soft-info rounded-[1.75rem] p-6 border",children:[b.jsxs("h3",{className:"font-extrabold text-blue-900 mb-3 flex items-center text-base",children:[b.jsx(Xm,{size:18,className:"mr-2 text-blue-600 stroke-[2.5]"})," 愛校服務須知"]}),b.jsxs("ul",{className:"text-sm text-blue-900/90 font-bold space-y-2.5 list-none",children:[b.jsxs("li",{className:"flex items-start",children:[b.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請著整齊校服或運動服進行服務，並請攜帶學生證。"]}),b.jsxs("li",{className:"flex items-start",children:[b.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請準時至指定地點集合，遲到將酌減服務時數。"]}),b.jsxs("li",{className:"flex items-start",children:[b.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 完成服務後，請主動持「愛校服務單」請負責老師簽名。"]}),b.jsxs("li",{className:"flex items-start",children:[b.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 若因故無法出席，請務必提前一天至學務處取消。"]})]})]})]}),h==="list"&&b.jsx("div",{className:"w-full animate-in fade-in duration-300",children:b.jsxs("div",{className:"soft-card rounded-[2rem] p-6 sm:p-8 min-h-[500px]",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b-2 pb-5 gap-4 border-slate-200",children:[b.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:flex-grow md:max-w-xl lg:max-w-2xl",children:[b.jsxs("h2",{className:"text-xl font-black text-slate-955 flex items-center shrink-0",children:[b.jsx(wu,{size:22,className:"mr-2 text-green-700 stroke-[3]"}),"登記名單查詢"]}),b.jsxs("div",{className:"relative w-full h-[38px] flex-grow",children:[b.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",children:b.jsx(Jm,{size:14,className:"text-slate-900 stroke-[2.5]"})}),b.jsx("input",{type:"text",placeholder:"搜尋登記日期、學號、姓名...",value:y,onChange:W=>v(W.target.value),className:"w-full h-full pl-9 pr-9 py-2 border border-slate-350 rounded-full focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none text-xs bg-white text-slate-955 font-black placeholder:text-slate-400 shadow-sm"}),y&&b.jsx("button",{onClick:()=>v(""),className:"absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-605 hover:text-slate-955",children:b.jsx(Zm,{size:14,className:"stroke-[2.5]"})})]})]}),b.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto md:justify-end shrink-0",children:[b.jsxs("div",{className:"flex items-center justify-between bg-slate-50 border border-slate-200 p-1 rounded-xl shadow-sm h-[38px] w-auto shrink-0 space-x-2",children:[b.jsx("button",{type:"button",onClick:()=>A(W=>Math.max(W-1,1)),disabled:E===1,className:"px-3 h-full bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center shadow-inner",children:"上一頁"}),b.jsxs("span",{className:"text-xs font-black text-slate-900 font-mono px-1",children:[E," / ",Ce]}),b.jsx("button",{type:"button",onClick:()=>A(W=>Math.min(W+1,Ce)),disabled:E===Ce,className:"px-3 h-full bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center shadow-inner",children:"下一頁"})]}),z?b.jsxs("button",{type:"button",onClick:B,className:"h-[38px] px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-black shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5 border border-emerald-500 shrink-0",title:"已解鎖管理權限！點選此處登出",children:[b.jsx(Jh,{size:14,className:"stroke-[3] fill-emerald-100/30"}),b.jsx("span",{children:"已登入 (登出)"})]}):b.jsxs("button",{type:"button",onClick:()=>T({show:!0,password:"",pendingAction:null}),className:"h-[38px] px-4 bg-slate-900 hover:bg-slate-850 text-white rounded-full text-xs font-black shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center space-x-1.5 border border-slate-800 shrink-0",title:"請點選此處進行密碼驗證",children:[b.jsx(Ym,{size:14,className:"stroke-[3]"}),b.jsx("span",{children:"權限登入"})]}),b.jsxs("span",{className:"h-[38px] px-4 text-xs font-black text-blue-900 bg-blue-100/65 border border-blue-200/80 rounded-full shadow-sm flex items-center justify-center shrink-0 font-sans",children:["共 ",Ie.length," 筆紀錄"]})]})]}),ge.length===0?b.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:b.jsx(wu,{size:48,className:"text-slate-400 stroke-[1.5]"})}),b.jsx("p",{className:"font-bold",children:"目前尚無登記紀錄，請前往登記作業！"})]}):Ie.length===0?b.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[b.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:b.jsx(Jm,{size:48,className:"text-slate-400 stroke-[1.5]"})}),b.jsxs("p",{className:"font-bold",children:["找不到符合「",b.jsx("span",{className:"text-slate-955 font-black",children:y}),"」的紀錄"]}),b.jsx("button",{onClick:()=>v(""),className:"text-blue-600 hover:text-blue-800 text-sm font-extrabold cursor-pointer",children:"清除搜尋條件"})]}):b.jsx("div",{className:"soft-table overflow-x-auto rounded-2xl border",children:b.jsxs("table",{className:"w-full text-left border-collapse whitespace-nowrap",children:[b.jsx("thead",{children:b.jsxs("tr",{className:"bg-slate-100 text-slate-955 text-sm border-b-2 border-slate-200",children:[b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"登記日期"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"學號"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"姓名"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"違規事件 / 事由"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider text-center",children:"次數"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider",children:"登記人"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider text-center",children:"完成"}),b.jsx("th",{className:"py-4.5 px-6 font-black text-slate-955 tracking-wider text-right",children:"操作"})]})}),b.jsx("tbody",{className:"divide-y divide-slate-200 bg-white",children:We.map(W=>b.jsxs("tr",{className:"hover:bg-blue-50/30 transition-colors group",children:[b.jsx("td",{className:"py-4 px-6 text-sm text-slate-955 font-black font-mono",children:W.date}),b.jsx("td",{className:"py-4 px-6 text-slate-955 font-black font-mono text-base",children:W.studentId}),b.jsx("td",{className:"py-4 px-6 text-slate-955 font-black text-base",children:W.name}),b.jsx("td",{className:`py-4 px-6 text-sm text-slate-955 font-extrabold max-w-xs truncate ${W.violationReason&&W.violationReason.length>18?"cursor-help":""}`,title:W.violationReason,children:b.jsx("span",{className:W.violationReason&&W.violationReason.length>18?"border-b border-dashed border-slate-400 pb-0.5":"",children:W.violationReason||"-"})}),b.jsx("td",{className:"py-4 px-6 text-center",children:b.jsx("span",{className:"inline-flex items-center justify-center px-3.5 py-1 text-xs font-black leading-none text-red-955 bg-red-100 border-2 border-red-300 rounded-full font-mono shadow-sm",children:W.serviceCount})}),b.jsx("td",{className:"py-4 px-6 text-sm text-slate-955 font-black",children:W.registrar}),b.jsx("td",{className:"py-4 px-6 text-center",children:W.completed?b.jsx(Jh,{size:24,className:`mx-auto stroke-[2.5] transition-all ${z?"text-emerald-600 fill-emerald-100 cursor-pointer hover:scale-110 active:scale-95":"text-emerald-600/60 fill-emerald-100/40 cursor-default"}`,onClick:()=>ee(W),title:"已完成！"}):b.jsx("div",{onClick:()=>ee(W),className:`w-5 h-5 rounded-full border-2 mx-auto flex items-center justify-center transition-all ${z?"border-emerald-600 hover:bg-emerald-50 cursor-pointer":"border-slate-350 cursor-default"}`,title:"未完成。"})}),b.jsx("td",{className:"py-4 px-6 text-right",children:b.jsx("button",{onClick:()=>he(W),className:`p-2 rounded-xl transition-all ${z?"text-slate-400 hover:text-red-500 hover:bg-red-50 cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100":"text-slate-200 cursor-default"}`,title:"移除這筆登記",disabled:!z,children:b.jsx(Lw,{size:18,className:"stroke-[2.5]"})})})]},W.id))})]})})]})})]}),b.jsxs("footer",{className:"text-center text-sm text-slate-500 font-bold py-6 border-t border-slate-200/50",children:["© ",new Date().getFullYear()," 國立臺中第二高級中等學校學務處 教官室"]})]})]}):b.jsx("div",{className:"soft-login min-h-screen flex items-center justify-center px-4 py-10 font-sans text-slate-800",children:b.jsxs("main",{className:"soft-card relative w-full max-w-md rounded-[2rem] p-8 sm:p-10 text-center",children:[b.jsx("div",{className:"soft-login-icon w-16 h-16 mx-auto mb-5 rounded-2xl text-white flex items-center justify-center",children:b.jsx(wu,{size:34})}),b.jsx("p",{className:"inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black mb-4",children:"國立臺中二中校園專屬系統"}),b.jsx("h1",{className:"text-2xl sm:text-3xl font-black tracking-tight mb-3",children:"二中手機違規管理系統"}),b.jsx("p",{className:"text-slate-600 leading-relaxed mb-7",children:"本系統僅限學校 Google 帳號使用。請登入後繼續填寫與查看紀錄。"}),o&&b.jsxs("div",{className:"mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700 flex items-start text-left",children:[b.jsx(Ew,{size:19,className:"mr-2 mt-0.5 shrink-0"}),b.jsx("span",{children:o})]}),b.jsxs("button",{type:"button",onClick:ce,className:"w-full flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-black text-slate-700 shadow-sm transition hover:border-teal-300 hover:bg-teal-50/60 active:scale-[0.99]",children:[b.jsx("span",{className:"mr-3 text-xl font-black text-blue-600",children:"G"}),"使用學校 Google 帳號登入"]}),b.jsxs("p",{className:"mt-5 text-xs font-bold text-slate-500",children:["限 @",Fd]})]})})}gw.createRoot(document.getElementById("root")).render(b.jsx(at.StrictMode,{children:b.jsx(Uk,{})}));
