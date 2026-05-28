(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Bh={exports:{}},Ta={},$h={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function B0(){if(Cm)return Ce;Cm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.iterator;function x(b){return b===null||typeof b!="object"?null:(b=C&&b[C]||b["@@iterator"],typeof b=="function"?b:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,X={};function H(b,$,le){this.props=b,this.context=$,this.refs=X,this.updater=le||z}H.prototype.isReactComponent={},H.prototype.setState=function(b,$){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,$,"setState")},H.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function me(){}me.prototype=H.prototype;function ue(b,$,le){this.props=b,this.context=$,this.refs=X,this.updater=le||z}var ge=ue.prototype=new me;ge.constructor=ue,K(ge,H.prototype),ge.isPureReactComponent=!0;var ce=Array.isArray,Be=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(b,$,le){var Se,ke={},Ne=null,Le=null;if($!=null)for(Se in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(Ne=""+$.key),$)Be.call($,Se)&&!D.hasOwnProperty(Se)&&(ke[Se]=$[Se]);var Me=arguments.length-2;if(Me===1)ke.children=le;else if(1<Me){for(var $e=Array(Me),_t=0;_t<Me;_t++)$e[_t]=arguments[_t+2];ke.children=$e}if(b&&b.defaultProps)for(Se in Me=b.defaultProps,Me)ke[Se]===void 0&&(ke[Se]=Me[Se]);return{$$typeof:i,type:b,key:Ne,ref:Le,props:ke,_owner:Ie.current}}function E(b,$){return{$$typeof:i,type:b.type,key:$,ref:b.ref,props:b.props,_owner:b._owner}}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function P(b){var $={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(le){return $[le]})}var V=/\/+/g;function A(b,$){return typeof b=="object"&&b!==null&&b.key!=null?P(""+b.key):$.toString(36)}function we(b,$,le,Se,ke){var Ne=typeof b;(Ne==="undefined"||Ne==="boolean")&&(b=null);var Le=!1;if(b===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(b.$$typeof){case i:case e:Le=!0}}if(Le)return Le=b,ke=ke(Le),b=Se===""?"."+A(Le,0):Se,ce(ke)?(le="",b!=null&&(le=b.replace(V,"$&/")+"/"),we(ke,$,le,"",function(_t){return _t})):ke!=null&&(k(ke)&&(ke=E(ke,le+(!ke.key||Le&&Le.key===ke.key?"":(""+ke.key).replace(V,"$&/")+"/")+b)),$.push(ke)),1;if(Le=0,Se=Se===""?".":Se+":",ce(b))for(var Me=0;Me<b.length;Me++){Ne=b[Me];var $e=Se+A(Ne,Me);Le+=we(Ne,$,le,$e,ke)}else if($e=x(b),typeof $e=="function")for(b=$e.call(b),Me=0;!(Ne=b.next()).done;)Ne=Ne.value,$e=Se+A(Ne,Me++),Le+=we(Ne,$,le,$e,ke);else if(Ne==="object")throw $=String(b),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function tt(b,$,le){if(b==null)return b;var Se=[],ke=0;return we(b,Se,"","",function(Ne){return $.call(le,Ne,ke++)}),Se}function Nt(b){if(b._status===-1){var $=b._result;$=$(),$.then(function(le){(b._status===0||b._status===-1)&&(b._status=1,b._result=le)},function(le){(b._status===0||b._status===-1)&&(b._status=2,b._result=le)}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var je={current:null},Z={transition:null},he={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ie};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:tt,forEach:function(b,$,le){tt(b,function(){$.apply(this,arguments)},le)},count:function(b){var $=0;return tt(b,function(){$++}),$},toArray:function(b){return tt(b,function($){return $})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ce.Component=H,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ue,Ce.StrictMode=s,Ce.Suspense=y,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Ce.act=ne,Ce.cloneElement=function(b,$,le){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Se=K({},b.props),ke=b.key,Ne=b.ref,Le=b._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,Le=Ie.current),$.key!==void 0&&(ke=""+$.key),b.type&&b.type.defaultProps)var Me=b.type.defaultProps;for($e in $)Be.call($,$e)&&!D.hasOwnProperty($e)&&(Se[$e]=$[$e]===void 0&&Me!==void 0?Me[$e]:$[$e])}var $e=arguments.length-2;if($e===1)Se.children=le;else if(1<$e){Me=Array($e);for(var _t=0;_t<$e;_t++)Me[_t]=arguments[_t+2];Se.children=Me}return{$$typeof:i,type:b.type,key:ke,ref:Ne,props:Se,_owner:Le}},Ce.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:u,_context:b},b.Consumer=b},Ce.createElement=S,Ce.createFactory=function(b){var $=S.bind(null,b);return $.type=b,$},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:m,render:b}},Ce.isValidElement=k,Ce.lazy=function(b){return{$$typeof:T,_payload:{_status:-1,_result:b},_init:Nt}},Ce.memo=function(b,$){return{$$typeof:v,type:b,compare:$===void 0?null:$}},Ce.startTransition=function(b){var $=Z.transition;Z.transition={};try{b()}finally{Z.transition=$}},Ce.unstable_act=ne,Ce.useCallback=function(b,$){return je.current.useCallback(b,$)},Ce.useContext=function(b){return je.current.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b){return je.current.useDeferredValue(b)},Ce.useEffect=function(b,$){return je.current.useEffect(b,$)},Ce.useId=function(){return je.current.useId()},Ce.useImperativeHandle=function(b,$,le){return je.current.useImperativeHandle(b,$,le)},Ce.useInsertionEffect=function(b,$){return je.current.useInsertionEffect(b,$)},Ce.useLayoutEffect=function(b,$){return je.current.useLayoutEffect(b,$)},Ce.useMemo=function(b,$){return je.current.useMemo(b,$)},Ce.useReducer=function(b,$,le){return je.current.useReducer(b,$,le)},Ce.useRef=function(b){return je.current.useRef(b)},Ce.useState=function(b){return je.current.useState(b)},Ce.useSyncExternalStore=function(b,$,le){return je.current.useSyncExternalStore(b,$,le)},Ce.useTransition=function(){return je.current.useTransition()},Ce.version="18.3.1",Ce}var Rm;function Dd(){return Rm||(Rm=1,$h.exports=B0()),$h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function $0(){if(Pm)return Ta;Pm=1;var i=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var T,C={},x=null,z=null;v!==void 0&&(x=""+v),y.key!==void 0&&(x=""+y.key),y.ref!==void 0&&(z=y.ref);for(T in y)s.call(y,T)&&!u.hasOwnProperty(T)&&(C[T]=y[T]);if(m&&m.defaultProps)for(T in y=m.defaultProps,y)C[T]===void 0&&(C[T]=y[T]);return{$$typeof:e,type:m,key:x,ref:z,props:C,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var xm;function H0(){return xm||(xm=1,Bh.exports=$0()),Bh.exports}var U=H0(),Mt=Dd(),mu={},Hh={exports:{}},Jt={},Wh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function W0(){return Nm||(Nm=1,(function(i){function e(Z,he){var ne=Z.length;Z.push(he);e:for(;0<ne;){var b=ne-1>>>1,$=Z[b];if(0<o($,he))Z[b]=he,Z[ne]=$,ne=b;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var he=Z[0],ne=Z.pop();if(ne!==he){Z[0]=ne;e:for(var b=0,$=Z.length,le=$>>>1;b<le;){var Se=2*(b+1)-1,ke=Z[Se],Ne=Se+1,Le=Z[Ne];if(0>o(ke,ne))Ne<$&&0>o(Le,ke)?(Z[b]=Le,Z[Ne]=ne,b=Ne):(Z[b]=ke,Z[Se]=ne,b=Se);else if(Ne<$&&0>o(Le,ne))Z[b]=Le,Z[Ne]=ne,b=Ne;else break e}}return he}function o(Z,he){var ne=Z.sortIndex-he.sortIndex;return ne!==0?ne:Z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],T=1,C=null,x=3,z=!1,K=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(Z){for(var he=t(v);he!==null;){if(he.callback===null)s(v);else if(he.startTime<=Z)s(v),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(v)}}function ce(Z){if(X=!1,ge(Z),!K)if(t(y)!==null)K=!0,Nt(Be);else{var he=t(v);he!==null&&je(ce,he.startTime-Z)}}function Be(Z,he){K=!1,X&&(X=!1,me(S),S=-1),z=!0;var ne=x;try{for(ge(he),C=t(y);C!==null&&(!(C.expirationTime>he)||Z&&!P());){var b=C.callback;if(typeof b=="function"){C.callback=null,x=C.priorityLevel;var $=b(C.expirationTime<=he);he=i.unstable_now(),typeof $=="function"?C.callback=$:C===t(y)&&s(y),ge(he)}else s(y);C=t(y)}if(C!==null)var le=!0;else{var Se=t(v);Se!==null&&je(ce,Se.startTime-he),le=!1}return le}finally{C=null,x=ne,z=!1}}var Ie=!1,D=null,S=-1,E=5,k=-1;function P(){return!(i.unstable_now()-k<E)}function V(){if(D!==null){var Z=i.unstable_now();k=Z;var he=!0;try{he=D(!0,Z)}finally{he?A():(Ie=!1,D=null)}}else Ie=!1}var A;if(typeof ue=="function")A=function(){ue(V)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,tt=we.port2;we.port1.onmessage=V,A=function(){tt.postMessage(null)}}else A=function(){H(V,0)};function Nt(Z){D=Z,Ie||(Ie=!0,A())}function je(Z,he){S=H(function(){Z(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){K||z||(K=!0,Nt(Be))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var ne=x;x=he;try{return Z()}finally{x=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,he){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=x;x=Z;try{return he()}finally{x=ne}},i.unstable_scheduleCallback=function(Z,he,ne){var b=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?b+ne:b):ne=b,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,Z={id:T++,callback:he,priorityLevel:Z,startTime:ne,expirationTime:$,sortIndex:-1},ne>b?(Z.sortIndex=ne,e(v,Z),t(y)===null&&Z===t(v)&&(X?(me(S),S=-1):X=!0,je(ce,ne-b))):(Z.sortIndex=$,e(y,Z),K||z||(K=!0,Nt(Be))),Z},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(Z){var he=x;return function(){var ne=x;x=he;try{return Z.apply(this,arguments)}finally{x=ne}}}})(qh)),qh}var Dm;function q0(){return Dm||(Dm=1,Wh.exports=W0()),Wh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function G0(){if(Vm)return Jt;Vm=1;var i=Dd(),e=q0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},C={};function x(n){return y.call(C,n)?!0:y.call(T,n)?!1:v.test(n)?C[n]=!0:(T[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,ue);H[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,ue);H[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,ue);H[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var ce=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),P=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,b;function $(n){if(b===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);b=r&&r[1]||""}return`
`+b+n}var le=!1;function Se(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function ke(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ie:return"Portal";case E:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case we:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case tt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _t(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ar(n){n._valueTracker||(n._valueTracker=_t(n))}function ds(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Si(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function fs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ro(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function Po(n,r){Ro(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ps(n,r.type,a):r.hasOwnProperty("defaultValue")&&ps(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function el(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ps(n,r,a){(r!=="number"||Or(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lr=Array.isArray;function ur(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function xo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ms(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(lr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function gs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function No(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cr,Do=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=cr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Lr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(n){ki.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ai[r]=Ai[n]})});function Vo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ai.hasOwnProperty(n)&&Ai[n]?(""+r).trim():r+"px"}function bo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Vo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Oo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,r){if(r){if(Oo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Mo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function ys(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _s=null,un=null,jn=null;function vs(n){if(n=aa(n)){if(typeof _s!="function")throw Error(t(280));var r=n.stateNode;r&&(r=xl(r),_s(n.stateNode,n.type,r))}}function zn(n){un?jn?jn.push(n):jn=[n]:un=n}function Fo(){if(un){var n=un,r=jn;if(jn=un=null,vs(n),r)for(n=0;n<r.length;n++)vs(r[n])}}function Ri(n,r){return n(r)}function Uo(){}var hr=!1;function jo(n,r,a){if(hr)return n(r,a);hr=!0;try{return Ri(n,r,a)}finally{hr=!1,(un!==null||jn!==null)&&(Uo(),Fo())}}function rt(n,r){var a=n.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ws=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{ws=!1}function Pi(n,r,a,c,d,p,_,I,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(G){this.onError(G)}}var xi=!1,Es=null,In=!1,zo=null,gc={onError:function(n){xi=!0,Es=n}};function Ts(n,r,a,c,d,p,_,I,R){xi=!1,Es=null,Pi.apply(gc,arguments)}function tl(n,r,a,c,d,p,_,I,R){if(Ts.apply(this,arguments),xi){if(xi){var F=Es;xi=!1,Es=null}else throw Error(t(198));In||(In=!0,zo=F)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ni(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function nl(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Bo(n){return n=nl(n),n!==null?Is(n):null}function Is(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Is(n);if(r!==null)return r;n=n.sibling}return null}var Ss=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,rl=e.unstable_shouldYield,yc=e.unstable_requestPaint,He=e.unstable_now,il=e.unstable_getCurrentPriorityLevel,Di=e.unstable_ImmediatePriority,Mr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,sl=e.unstable_IdlePriority,Vi=null,en=null;function ol(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Vi,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:ll,Wo=Math.log,al=Math.LN2;function ll(n){return n>>>=0,n===0?32:31-(Wo(n)/al|0)|0}var As=64,ks=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Fr(I):(p&=_,p!==0&&(c=Fr(p)))}else _=a&~d,_!==0?c=Fr(_):p!==0&&(c=Fr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-zt(r),d=1<<a,c|=n[a],r&=~d;return c}function _c(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-zt(p),I=1<<_,R=d[_];R===-1?((I&a)===0||(I&c)!==0)&&(d[_]=_c(I,r)):R<=r&&(n.expiredLanes|=I),p&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oi(){var n=As;return As<<=1,(As&4194240)===0&&(As=64),n}function Ur(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function jr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-zt(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function zr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var xe=0;function Br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ul,Cs,cl,hl,dl,qo=!1,Bn=[],St=null,kn=null,Cn=null,$r=new Map,hn=new Map,$n=[],vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(n,r){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=aa(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function wc(n,r,a,c,d){switch(r){case"focusin":return St=Wt(St,n,r,a,c,d),!0;case"dragenter":return kn=Wt(kn,n,r,a,c,d),!0;case"mouseover":return Cn=Wt(Cn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return $r.set(p,Wt($r.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Wt(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function pl(n){var r=ji(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ni(a),r!==null){n.blockedOn=r,dl(n.priority,function(){cl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return r=aa(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function Li(n,r,a){fr(n)&&a.delete(r)}function ml(){qo=!1,St!==null&&fr(St)&&(St=null),kn!==null&&fr(kn)&&(kn=null),Cn!==null&&fr(Cn)&&(Cn=null),$r.forEach(Li),hn.forEach(Li)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,qo||(qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ml)))}function Pn(n){function r(d){return Rn(d,n)}if(0<Bn.length){Rn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&Rn(St,n),kn!==null&&Rn(kn,n),Cn!==null&&Rn(Cn,n),$r.forEach(r),hn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)pl(a),a.blockedOn===null&&$n.shift()}var pr=ce.ReactCurrentBatchConfig,Hr=!0;function Xe(n,r,a,c){var d=xe,p=pr.transition;pr.transition=null;try{xe=1,Go(n,r,a,c)}finally{xe=d,pr.transition=p}}function Ec(n,r,a,c){var d=xe,p=pr.transition;pr.transition=null;try{xe=4,Go(n,r,a,c)}finally{xe=d,pr.transition=p}}function Go(n,r,a,c){if(Hr){var d=Rs(n,r,a,c);if(d===null)Dc(n,r,c,Mi,a),fl(n,c);else if(wc(d,n,r,a,c))c.stopPropagation();else if(fl(n,c),r&4&&-1<vc.indexOf(n)){for(;d!==null;){var p=aa(d);if(p!==null&&ul(p),p=Rs(n,r,a,c),p===null&&Dc(n,r,c,Mi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Dc(n,r,c,null,a)}}var Mi=null;function Rs(n,r,a,c){if(Mi=null,n=ys(c),n=ji(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ni(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Mi=n,null}function Ko(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(il()){case Di:return 1;case Mr:return 4;case cn:case Ho:return 16;case sl:return 536870912;default:return 16}default:return 16}}var nn=null,Ps=null,qt=null;function Qo(){if(qt)return qt;var n,r=Ps,a=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function xs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function Xo(){return!1}function At(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Hn:Xo,this.isPropagationStopped=Xo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),r}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=At(xn),Wn=ne({},xn,{view:0,detail:0}),Tc=At(Wn),Ds,mr,Wr,Fi=ne({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(Ds=n.screenX-Wr.screenX,mr=n.screenY-Wr.screenY):mr=Ds=0,Wr=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:mr}}),Vs=At(Fi),Yo=ne({},Fi,{dataTransfer:0}),gl=At(Yo),bs=ne({},Wn,{relatedTarget:0}),Os=At(bs),yl=ne({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),gr=At(yl),_l=ne({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vl=At(_l),wl=ne({},xn,{data:0}),Jo=At(wl),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},El={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=El[n])?!!r[n]:!1}function qn(){return Tl}var l=ne({},Wn,{key:function(n){if(n.key){var r=Ls[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=xs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?xs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(l),g=ne({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(g),O=ne({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),j=At(O),J=ne({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=At(J),dt=ne({},Fi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=At(dt),vt=[9,13,27,32],ot=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var rn=m&&"TextEvent"in window&&!dn,Ui=m&&(!ot||dn&&8<dn&&11>=dn),Ms=" ",Ef=!1;function Tf(n,r){switch(n){case"keyup":return vt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function Uv(n,r){switch(n){case"compositionend":return If(r);case"keypress":return r.which!==32?null:(Ef=!0,Ms);case"textInput":return n=r.data,n===Ms&&Ef?null:n;default:return null}}function jv(n,r){if(Fs)return n==="compositionend"||!ot&&Tf(n,r)?(n=Qo(),qt=Ps=nn=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ui&&r.locale!=="ko"?null:r.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!zv[n.type]:r==="textarea"}function Af(n,r,a,c){zn(c),r=Cl(r,"onChange"),0<r.length&&(a=new Ns("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Zo=null,ea=null;function Bv(n){$f(n,0)}function Il(n){var r=$s(n);if(ds(r))return n}function $v(n,r){if(n==="change")return r}var kf=!1;if(m){var Ic;if(m){var Sc="oninput"in document;if(!Sc){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),Sc=typeof Cf.oninput=="function"}Ic=Sc}else Ic=!1;kf=Ic&&(!document.documentMode||9<document.documentMode)}function Rf(){Zo&&(Zo.detachEvent("onpropertychange",Pf),ea=Zo=null)}function Pf(n){if(n.propertyName==="value"&&Il(ea)){var r=[];Af(r,ea,n,ys(n)),jo(Bv,r)}}function Hv(n,r,a){n==="focusin"?(Rf(),Zo=r,ea=a,Zo.attachEvent("onpropertychange",Pf)):n==="focusout"&&Rf()}function Wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(ea)}function qv(n,r){if(n==="click")return Il(r)}function Gv(n,r){if(n==="input"||n==="change")return Il(r)}function Kv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Kv;function ta(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nf(n,r){var a=xf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xf(a)}}function Df(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Df(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Vf(){for(var n=window,r=Or();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Or(n.document)}return r}function Ac(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Qv(n){var r=Vf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Df(a.ownerDocument.documentElement,a)){if(c!==null&&Ac(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Nf(a,p);var _=Nf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Xv=m&&"documentMode"in document&&11>=document.documentMode,Us=null,kc=null,na=null,Cc=!1;function bf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||Us==null||Us!==Or(c)||(c=Us,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=Cl(kc,"onSelect"),0<c.length&&(r=new Ns("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Us)))}function Sl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var js={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Rc={},Of={};m&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Al(n){if(Rc[n])return Rc[n];if(!js[n])return n;var r=js[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Of)return Rc[n]=r[a];return n}var Lf=Al("animationend"),Mf=Al("animationiteration"),Ff=Al("animationstart"),Uf=Al("transitionend"),jf=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,r){jf.set(n,r),u(r,[n])}for(var Pc=0;Pc<zf.length;Pc++){var xc=zf[Pc],Yv=xc.toLowerCase(),Jv=xc[0].toUpperCase()+xc.slice(1);qr(Yv,"on"+Jv)}qr(Lf,"onAnimationEnd"),qr(Mf,"onAnimationIteration"),qr(Ff,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(Uf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Bf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,tl(c,r,void 0,n),n.currentTarget=null}function $f(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],R=I.instance,F=I.currentTarget;if(I=I.listener,R!==p&&d.isPropagationStopped())break e;Bf(d,I,F),p=R}else for(_=0;_<c.length;_++){if(I=c[_],R=I.instance,F=I.currentTarget,I=I.listener,R!==p&&d.isPropagationStopped())break e;Bf(d,I,F),p=R}}}if(In)throw n=zo,In=!1,zo=null,n}function qe(n,r){var a=r[Fc];a===void 0&&(a=r[Fc]=new Set);var c=n+"__bubble";a.has(c)||(Hf(r,n,2,!1),a.add(c))}function Nc(n,r,a){var c=0;r&&(c|=4),Hf(a,n,c,r)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[kl]){n[kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[kl]||(r[kl]=!0,Nc("selectionchange",!1,r))}}function Hf(n,r,a,c){switch(Ko(r)){case 1:var d=Xe;break;case 4:d=Ec;break;default:d=Go}a=d.bind(null,r,a,n),d=void 0,!ws||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Dc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;I!==null;){if(_=ji(I),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}I=I.parentNode}}c=c.return}jo(function(){var F=p,G=ys(a),Q=[];e:{var W=jf.get(n);if(W!==void 0){var ee=Ns,ie=n;switch(n){case"keypress":if(xs(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Os;break;case"focusout":ie="blur",ee=Os;break;case"beforeblur":case"afterblur":ee=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=j;break;case Lf:case Mf:case Ff:ee=gr;break;case Uf:ee=Ue;break;case"scroll":ee=Tc;break;case"wheel":ee=De;break;case"copy":case"cut":case"paste":ee=vl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var se=(r&4)!==0,it=!se&&n==="scroll",L=se?W!==null?W+"Capture":null:W;se=[];for(var N=F,M;N!==null;){M=N;var Y=M.stateNode;if(M.tag===5&&Y!==null&&(M=Y,L!==null&&(Y=rt(N,L),Y!=null&&se.push(sa(N,Y,M)))),it)break;N=N.return}0<se.length&&(W=new ee(W,ie,null,a,G),Q.push({event:W,listeners:se}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",W&&a!==Ci&&(ie=a.relatedTarget||a.fromElement)&&(ji(ie)||ie[yr]))break e;if((ee||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?ji(ie):null,ie!==null&&(it=Sn(ie),ie!==it||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(se=Vs,Y="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(se=w,Y="onPointerLeave",L="onPointerEnter",N="pointer"),it=ee==null?W:$s(ee),M=ie==null?W:$s(ie),W=new se(Y,N+"leave",ee,a,G),W.target=it,W.relatedTarget=M,Y=null,ji(G)===F&&(se=new se(L,N+"enter",ie,a,G),se.target=M,se.relatedTarget=it,Y=se),it=Y,ee&&ie)t:{for(se=ee,L=ie,N=0,M=se;M;M=zs(M))N++;for(M=0,Y=L;Y;Y=zs(Y))M++;for(;0<N-M;)se=zs(se),N--;for(;0<M-N;)L=zs(L),M--;for(;N--;){if(se===L||L!==null&&se===L.alternate)break t;se=zs(se),L=zs(L)}se=null}else se=null;ee!==null&&Wf(Q,W,ee,se,!1),ie!==null&&it!==null&&Wf(Q,it,ie,se,!0)}}e:{if(W=F?$s(F):window,ee=W.nodeName&&W.nodeName.toLowerCase(),ee==="select"||ee==="input"&&W.type==="file")var oe=$v;else if(Sf(W))if(kf)oe=Gv;else{oe=Wv;var fe=Hv}else(ee=W.nodeName)&&ee.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(oe=qv);if(oe&&(oe=oe(n,F))){Af(Q,oe,a,G);break e}fe&&fe(n,W,F),n==="focusout"&&(fe=W._wrapperState)&&fe.controlled&&W.type==="number"&&ps(W,"number",W.value)}switch(fe=F?$s(F):window,n){case"focusin":(Sf(fe)||fe.contentEditable==="true")&&(Us=fe,kc=F,na=null);break;case"focusout":na=kc=Us=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,bf(Q,a,G);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":bf(Q,a,G)}var pe;if(ot)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Fs?Tf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Ui&&a.locale!=="ko"&&(Fs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Fs&&(pe=Qo()):(nn=G,Ps="value"in nn?nn.value:nn.textContent,Fs=!0)),fe=Cl(F,_e),0<fe.length&&(_e=new Jo(_e,n,null,a,G),Q.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=If(a),pe!==null&&(_e.data=pe)))),(pe=rn?Uv(n,a):jv(n,a))&&(F=Cl(F,"onBeforeInput"),0<F.length&&(G=new Jo("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=pe))}$f(Q,r)})}function sa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Cl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=rt(n,a),p!=null&&c.unshift(sa(n,p,d)),p=rt(n,r),p!=null&&c.push(sa(n,p,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,R=I.alternate,F=I.stateNode;if(R!==null&&R===c)break;I.tag===5&&F!==null&&(I=F,d?(R=rt(a,p),R!=null&&_.unshift(sa(a,R,I))):d||(R=rt(a,p),R!=null&&_.push(sa(a,R,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(e0,`
`).replace(t0,"")}function Rl(n,r,a){if(r=qf(r),qf(n)!==r&&a)throw Error(t(425))}function Pl(){}var Vc=null,bc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(n){return Gf.resolve(null).then(n).catch(i0)}:Lc;function i0(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Kf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Bs,oa="__reactProps$"+Bs,yr="__reactContainer$"+Bs,Fc="__reactEvents$"+Bs,s0="__reactListeners$"+Bs,o0="__reactHandles$"+Bs;function ji(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[yr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Kf(n);n!==null;){if(a=n[Gn])return a;n=Kf(n)}return r}n=a,a=n.parentNode}return null}function aa(n){return n=n[Gn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[oa]||null}var Uc=[],Hs=-1;function Kr(n){return{current:n}}function Ge(n){0>Hs||(n.current=Uc[Hs],Uc[Hs]=null,Hs--)}function We(n,r){Hs++,Uc[Hs]=n.current,n.current=r}var Qr={},Dt=Kr(Qr),Gt=Kr(!1),zi=Qr;function Ws(n,r){var a=n.type.contextTypes;if(!a)return Qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Nl(){Ge(Gt),Ge(Dt)}function Qf(n,r,a){if(Dt.current!==Qr)throw Error(t(168));We(Dt,r),We(Gt,a)}function Xf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ne({},a,c)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,zi=Dt.current,We(Dt,n),We(Gt,Gt.current),!0}function Yf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Xf(n,r,zi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Gt),Ge(Dt),We(Dt,n)):Ge(Gt),We(Gt,a)}var _r=null,Vl=!1,jc=!1;function Jf(n){_r===null?_r=[n]:_r.push(n)}function a0(n){Vl=!0,Jf(n)}function Xr(){if(!jc&&_r!==null){jc=!0;var n=0,r=xe;try{var a=_r;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,Vl=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),Ss(Di,Xr),d}finally{xe=r,jc=!1}}return null}var qs=[],Gs=0,bl=null,Ol=0,fn=[],pn=0,Bi=null,vr=1,wr="";function $i(n,r){qs[Gs++]=Ol,qs[Gs++]=bl,bl=n,Ol=r}function Zf(n,r,a){fn[pn++]=vr,fn[pn++]=wr,fn[pn++]=Bi,Bi=n;var c=vr;n=wr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var p=32-zt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,vr=1<<32-zt(r)+d|a<<d|c,wr=p+n}else vr=1<<p|a<<d|c,wr=n}function zc(n){n.return!==null&&($i(n,1),Zf(n,1,0))}function Bc(n){for(;n===bl;)bl=qs[--Gs],qs[Gs]=null,Ol=qs[--Gs],qs[Gs]=null;for(;n===Bi;)Bi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,vr=fn[--pn],fn[pn]=null}var sn=null,on=null,Ye=!1,Dn=null;function ep(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function tp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Bi!==null?{id:vr,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hc(n){if(Ye){var r=on;if(r){var a=r;if(!tp(n,r)){if($c(n))throw Error(t(418));r=Gr(a.nextSibling);var c=sn;r&&tp(n,r)?ep(c,a):(n.flags=n.flags&-4097|2,Ye=!1,sn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,sn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ll(n){if(n!==sn)return!1;if(!Ye)return np(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=on)){if($c(n))throw rp(),Error(t(418));for(;r;)ep(n,r),r=Gr(r.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Gr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Gr(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=on;n;)n=Gr(n.nextSibling)}function Ks(){on=sn=null,Ye=!1}function Wc(n){Dn===null?Dn=[n]:Dn.push(n)}var l0=ce.ReactCurrentBatchConfig;function la(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ip(n){var r=n._init;return r(n._payload)}function sp(n){function r(L,N){if(n){var M=L.deletions;M===null?(L.deletions=[N],L.flags|=16):M.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=ii(L,N),L.index=0,L.sibling=null,L}function p(L,N,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<N?(L.flags|=2,N):M):(L.flags|=2,N)):(L.flags|=1048576,N)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,N,M,Y){return N===null||N.tag!==6?(N=Lh(M,L.mode,Y),N.return=L,N):(N=d(N,M),N.return=L,N)}function R(L,N,M,Y){var oe=M.type;return oe===D?G(L,N,M.props.children,Y,M.key):N!==null&&(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&ip(oe)===N.type)?(Y=d(N,M.props),Y.ref=la(L,N,M),Y.return=L,Y):(Y=au(M.type,M.key,M.props,null,L.mode,Y),Y.ref=la(L,N,M),Y.return=L,Y)}function F(L,N,M,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=Mh(M,L.mode,Y),N.return=L,N):(N=d(N,M.children||[]),N.return=L,N)}function G(L,N,M,Y,oe){return N===null||N.tag!==7?(N=Yi(M,L.mode,Y,oe),N.return=L,N):(N=d(N,M),N.return=L,N)}function Q(L,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Lh(""+N,L.mode,M),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Be:return M=au(N.type,N.key,N.props,null,L.mode,M),M.ref=la(L,null,N),M.return=L,M;case Ie:return N=Mh(N,L.mode,M),N.return=L,N;case Nt:var Y=N._init;return Q(L,Y(N._payload),M)}if(lr(N)||he(N))return N=Yi(N,L.mode,M,null),N.return=L,N;Ml(L,N)}return null}function W(L,N,M,Y){var oe=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return oe!==null?null:I(L,N,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Be:return M.key===oe?R(L,N,M,Y):null;case Ie:return M.key===oe?F(L,N,M,Y):null;case Nt:return oe=M._init,W(L,N,oe(M._payload),Y)}if(lr(M)||he(M))return oe!==null?null:G(L,N,M,Y,null);Ml(L,M)}return null}function ee(L,N,M,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(M)||null,I(N,L,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Be:return L=L.get(Y.key===null?M:Y.key)||null,R(N,L,Y,oe);case Ie:return L=L.get(Y.key===null?M:Y.key)||null,F(N,L,Y,oe);case Nt:var fe=Y._init;return ee(L,N,M,fe(Y._payload),oe)}if(lr(Y)||he(Y))return L=L.get(M)||null,G(N,L,Y,oe,null);Ml(N,Y)}return null}function ie(L,N,M,Y){for(var oe=null,fe=null,pe=N,_e=N=0,Tt=null;pe!==null&&_e<M.length;_e++){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var Oe=W(L,pe,M[_e],Y);if(Oe===null){pe===null&&(pe=Tt);break}n&&pe&&Oe.alternate===null&&r(L,pe),N=p(Oe,N,_e),fe===null?oe=Oe:fe.sibling=Oe,fe=Oe,pe=Tt}if(_e===M.length)return a(L,pe),Ye&&$i(L,_e),oe;if(pe===null){for(;_e<M.length;_e++)pe=Q(L,M[_e],Y),pe!==null&&(N=p(pe,N,_e),fe===null?oe=pe:fe.sibling=pe,fe=pe);return Ye&&$i(L,_e),oe}for(pe=c(L,pe);_e<M.length;_e++)Tt=ee(pe,L,_e,M[_e],Y),Tt!==null&&(n&&Tt.alternate!==null&&pe.delete(Tt.key===null?_e:Tt.key),N=p(Tt,N,_e),fe===null?oe=Tt:fe.sibling=Tt,fe=Tt);return n&&pe.forEach(function(si){return r(L,si)}),Ye&&$i(L,_e),oe}function se(L,N,M,Y){var oe=he(M);if(typeof oe!="function")throw Error(t(150));if(M=oe.call(M),M==null)throw Error(t(151));for(var fe=oe=null,pe=N,_e=N=0,Tt=null,Oe=M.next();pe!==null&&!Oe.done;_e++,Oe=M.next()){pe.index>_e?(Tt=pe,pe=null):Tt=pe.sibling;var si=W(L,pe,Oe.value,Y);if(si===null){pe===null&&(pe=Tt);break}n&&pe&&si.alternate===null&&r(L,pe),N=p(si,N,_e),fe===null?oe=si:fe.sibling=si,fe=si,pe=Tt}if(Oe.done)return a(L,pe),Ye&&$i(L,_e),oe;if(pe===null){for(;!Oe.done;_e++,Oe=M.next())Oe=Q(L,Oe.value,Y),Oe!==null&&(N=p(Oe,N,_e),fe===null?oe=Oe:fe.sibling=Oe,fe=Oe);return Ye&&$i(L,_e),oe}for(pe=c(L,pe);!Oe.done;_e++,Oe=M.next())Oe=ee(pe,L,_e,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&pe.delete(Oe.key===null?_e:Oe.key),N=p(Oe,N,_e),fe===null?oe=Oe:fe.sibling=Oe,fe=Oe);return n&&pe.forEach(function(z0){return r(L,z0)}),Ye&&$i(L,_e),oe}function it(L,N,M,Y){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Be:e:{for(var oe=M.key,fe=N;fe!==null;){if(fe.key===oe){if(oe=M.type,oe===D){if(fe.tag===7){a(L,fe.sibling),N=d(fe,M.props.children),N.return=L,L=N;break e}}else if(fe.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&ip(oe)===fe.type){a(L,fe.sibling),N=d(fe,M.props),N.ref=la(L,fe,M),N.return=L,L=N;break e}a(L,fe);break}else r(L,fe);fe=fe.sibling}M.type===D?(N=Yi(M.props.children,L.mode,Y,M.key),N.return=L,L=N):(Y=au(M.type,M.key,M.props,null,L.mode,Y),Y.ref=la(L,N,M),Y.return=L,L=Y)}return _(L);case Ie:e:{for(fe=M.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){a(L,N.sibling),N=d(N,M.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else r(L,N);N=N.sibling}N=Mh(M,L.mode,Y),N.return=L,L=N}return _(L);case Nt:return fe=M._init,it(L,N,fe(M._payload),Y)}if(lr(M))return ie(L,N,M,Y);if(he(M))return se(L,N,M,Y);Ml(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,M),N.return=L,L=N):(a(L,N),N=Lh(M,L.mode,Y),N.return=L,L=N),_(L)):a(L,N)}return it}var Qs=sp(!0),op=sp(!1),Fl=Kr(null),Ul=null,Xs=null,qc=null;function Gc(){qc=Xs=Ul=null}function Kc(n){var r=Fl.current;Ge(Fl),n._currentValue=r}function Qc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ys(n,r){Ul=n,qc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Qt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if(Ul===null)throw Error(t(308));Xs=n,Ul.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Hi=null;function Xc(n){Hi===null?Hi=[n]:Hi.push(n)}function ap(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Xc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Er(n,c)}function Er(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Yr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Jr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Er(n,a)}return d=c.interleaved,d===null?(r.next=r,Xc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Er(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}function up(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;Yr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var R=I,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==_&&(I===null?G.firstBaseUpdate=F:I.next=F,G.lastBaseUpdate=R))}if(p!==null){var Q=d.baseState;_=0,G=F=R=null,I=p;do{var W=I.lane,ee=I.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,se=I;switch(W=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(ee,Q,W);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,W=typeof ie=="function"?ie.call(ee,Q,W):ie,W==null)break e;Q=ne({},Q,W);break e;case 2:Yr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else ee={eventTime:ee,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(F=G=ee,R=Q):G=G.next=ee,_|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(R=Q),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Gi|=_,n.lanes=_,n.memoizedState=Q}}function cp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Kn=Kr(ua),ca=Kr(ua),ha=Kr(ua);function Wi(n){if(n===ua)throw Error(t(174));return n}function Jc(n,r){switch(We(ha,r),We(ca,n),We(Kn,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ht(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ht(r,n)}Ge(Kn),We(Kn,r)}function Js(){Ge(Kn),Ge(ca),Ge(ha)}function hp(n){Wi(ha.current);var r=Wi(Kn.current),a=ht(r,n.type);r!==a&&(We(ca,n),We(Kn,a))}function Zc(n){ca.current===n&&(Ge(Kn),Ge(ca))}var Je=Kr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var eh=[];function th(){for(var n=0;n<eh.length;n++)eh[n]._workInProgressVersionPrimary=null;eh.length=0}var $l=ce.ReactCurrentDispatcher,nh=ce.ReactCurrentBatchConfig,qi=0,Ze=null,ft=null,wt=null,Hl=!1,da=!1,fa=0,u0=0;function Vt(){throw Error(t(321))}function rh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function ih(n,r,a,c,d,p){if(qi=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?f0:p0,n=a(c,d),da){p=0;do{if(da=!1,fa=0,25<=p)throw Error(t(301));p+=1,wt=ft=null,r.updateQueue=null,$l.current=m0,n=a(c,d)}while(da)}if($l.current=Gl,r=ft!==null&&ft.next!==null,qi=0,wt=ft=Ze=null,Hl=!1,r)throw Error(t(300));return n}function sh(){var n=fa!==0;return fa=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=n:wt=wt.next=n,wt}function gn(){if(ft===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var r=wt===null?Ze.memoizedState:wt.next;if(r!==null)wt=r,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},wt===null?Ze.memoizedState=wt=n:wt=wt.next=n}return wt}function pa(n,r){return typeof r=="function"?r(n):r}function oh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,R=null,F=p;do{var G=F.lane;if((qi&G)===G)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(I=R=Q,_=c):R=R.next=Q,Ze.lanes|=G,Gi|=G}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=I,Nn(c,r.memoizedState)||(Qt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,Gi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ah(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Nn(p,r.memoizedState)||(Qt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function dp(){}function fp(n,r){var a=Ze,c=gn(),d=r(),p=!Nn(c.memoizedState,d);if(p&&(c.memoizedState=d,Qt=!0),c=c.queue,lh(gp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,ma(9,mp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(qi&30)!==0||pp(a,r,d)}return d}function pp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function mp(n,r,a,c){r.value=a,r.getSnapshot=c,yp(r)&&_p(n)}function gp(n,r,a){return a(function(){yp(r)&&_p(n)})}function yp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function _p(n){var r=Er(n,1);r!==null&&Ln(r,n,1,-1)}function vp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=d0.bind(null,Ze,n),[r.memoizedState,n]}function ma(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function wp(){return gn().memoizedState}function Wl(n,r,a,c){var d=Qn();Ze.flags|=n,d.memoizedState=ma(1|r,a,void 0,c===void 0?null:c)}function ql(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var _=ft.memoizedState;if(p=_.destroy,c!==null&&rh(c,_.deps)){d.memoizedState=ma(r,a,p,c);return}}Ze.flags|=n,d.memoizedState=ma(1|r,a,p,c)}function Ep(n,r){return Wl(8390656,8,n,r)}function lh(n,r){return ql(2048,8,n,r)}function Tp(n,r){return ql(4,2,n,r)}function Ip(n,r){return ql(4,4,n,r)}function Sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ap(n,r,a){return a=a!=null?a.concat([n]):null,ql(4,4,Sp.bind(null,r,n),a)}function uh(){}function kp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&rh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Cp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&rh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Rp(n,r,a){return(qi&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(Nn(a,r)||(a=Oi(),Ze.lanes|=a,Gi|=a,n.baseState=!0),r)}function c0(n,r){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=nh.transition;nh.transition={};try{n(!1),r()}finally{xe=a,nh.transition=c}}function Pp(){return gn().memoizedState}function h0(n,r,a){var c=ni(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xp(n))Np(r,a);else if(a=ap(n,r,a,c),a!==null){var d=Ht();Ln(a,n,c,d),Dp(a,r,c)}}function d0(n,r,a){var c=ni(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xp(n))Np(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,Nn(I,_)){var R=r.interleaved;R===null?(d.next=d,Xc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=ap(n,r,d,c),a!==null&&(d=Ht(),Ln(a,n,c,d),Dp(a,r,c))}}function xp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Np(n,r){da=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Dp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}var Gl={readContext:mn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},f0={readContext:mn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Ep,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,Sp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Wl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=h0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:vp,useDebugValue:uh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=vp(!1),r=n[0];return n=c0.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(qi&30)!==0||pp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Ep(gp.bind(null,c,p,n),[n]),c.flags|=2048,ma(9,mp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Qn(),r=Et.identifierPrefix;if(Ye){var a=wr,c=vr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=u0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},p0={readContext:mn,useCallback:kp,useContext:mn,useEffect:lh,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:Cp,useReducer:oh,useRef:wp,useState:function(){return oh(pa)},useDebugValue:uh,useDeferredValue:function(n){var r=gn();return Rp(r,ft.memoizedState,n)},useTransition:function(){var n=oh(pa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1},m0={readContext:mn,useCallback:kp,useContext:mn,useEffect:lh,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:Cp,useReducer:ah,useRef:wp,useState:function(){return ah(pa)},useDebugValue:uh,useDeferredValue:function(n){var r=gn();return ft===null?r.memoizedState=n:Rp(r,ft.memoizedState,n)},useTransition:function(){var n=ah(pa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ch(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Tr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Ln(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Tr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Ln(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=ni(n),d=Tr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Jr(n,d,c),r!==null&&(Ln(r,n,c,a),jl(r,n,c))}};function Vp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!ta(a,c)||!ta(d,p):!0}function bp(n,r,a){var c=!1,d=Qr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Kt(r)?zi:Dt.current,c=r.contextTypes,p=(c=c!=null)?Ws(n,d):Qr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Op(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function hh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Kt(r)?zi:Dt.current,d.context=Ws(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(ch(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Kl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var a="",c=r;do a+=ke(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function dh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function fh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,r,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){tu||(tu=!0,Rh=c),fh(n,r)},a}function Mp(n,r,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){fh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){fh(n,r),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Fp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new g0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=x0.bind(null,n,r,a),r.then(n,n))}function Up(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function jp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Tr(-1,1),r.tag=2,Jr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var y0=ce.ReactCurrentOwner,Qt=!1;function $t(n,r,a,c){r.child=n===null?op(r,null,a,c):Qs(r,n.child,a,c)}function zp(n,r,a,c,d){a=a.render;var p=r.ref;return Ys(r,d),c=ih(n,r,a,c,p,d),a=sh(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ir(n,r,d)):(Ye&&a&&zc(r),r.flags|=1,$t(n,r,c,d),r.child)}function Bp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Oh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,$p(n,r,p,c,d)):(n=au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(_,c)&&n.ref===r.ref)return Ir(n,r,d)}return r.flags|=1,n=ii(p,c),n.ref=r.ref,n.return=r,r.child=n}function $p(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ta(p,c)&&n.ref===r.ref)if(Qt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return r.lanes=n.lanes,Ir(n,r,d)}return ph(n,r,a,c,d)}function Hp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(to,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,We(to,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(to,an),an|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,We(to,an),an|=c;return $t(n,r,d,a),r.child}function Wp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ph(n,r,a,c,d){var p=Kt(a)?zi:Dt.current;return p=Ws(r,p),Ys(r,d),a=ih(n,r,a,c,p,d),c=sh(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ir(n,r,d)):(Ye&&c&&zc(r),r.flags|=1,$t(n,r,a,d),r.child)}function qp(n,r,a,c,d){if(Kt(a)){var p=!0;Dl(r)}else p=!1;if(Ys(r,d),r.stateNode===null)Xl(n,r),bp(r,a,c),hh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var R=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Kt(a)?zi:Dt.current,F=Ws(r,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||R!==F)&&Op(r,_,c,F),Yr=!1;var W=r.memoizedState;_.state=W,zl(r,c,_,d),R=r.memoizedState,I!==c||W!==R||Gt.current||Yr?(typeof G=="function"&&(ch(r,a,G,c),R=r.memoizedState),(I=Yr||Vp(r,a,I,c,W,R,F))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,lp(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:Vn(r.type,I),_.props=F,Q=r.pendingProps,W=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=mn(R):(R=Kt(a)?zi:Dt.current,R=Ws(r,R));var ee=a.getDerivedStateFromProps;(G=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Q||W!==R)&&Op(r,_,c,R),Yr=!1,W=r.memoizedState,_.state=W,zl(r,c,_,d);var ie=r.memoizedState;I!==Q||W!==ie||Gt.current||Yr?(typeof ee=="function"&&(ch(r,a,ee,c),ie=r.memoizedState),(F=Yr||Vp(r,a,F,c,W,ie,R)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return mh(n,r,a,c,p,d)}function mh(n,r,a,c,d,p){Wp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Yf(r,a,!1),Ir(n,r,p);c=r.stateNode,y0.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Qs(r,n.child,null,p),r.child=Qs(r,null,I,p)):$t(n,r,I,p),r.memoizedState=c.state,d&&Yf(r,a,!0),r.child}function Gp(n){var r=n.stateNode;r.pendingContext?Qf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Qf(n,r.context,!1),Jc(n,r.containerInfo)}function Kp(n,r,a,c,d){return Ks(),Wc(d),r.flags|=256,$t(n,r,a,c),r.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qp(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Je,d&1),n===null)return Hc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=lu(_,c,0,null),n=Yi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=yh(a),r.memoizedState=gh,n):_h(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return _0(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=ii(d,R),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=ii(I,p):(p=Yi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?yh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=gh,c}return p=n.child,n=p.sibling,c=ii(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function _h(n,r){return r=lu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ql(n,r,a,c){return c!==null&&Wc(c),Qs(r,n.child,null,a),n=_h(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function _0(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=dh(Error(t(422))),Ql(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=lu({mode:"visible",children:c.children},d,0,null),p=Yi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Qs(r,n.child,null,_),r.child.memoizedState=yh(_),r.memoizedState=gh,p);if((r.mode&1)===0)return Ql(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=dh(p,c,void 0),Ql(n,r,_,c)}if(I=(_&n.childLanes)!==0,Qt||I){if(c=Et,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Er(n,d),Ln(c,n,d,-1))}return bh(),c=dh(Error(t(421))),Ql(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=N0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=Gr(d.nextSibling),sn=r,Ye=!0,Dn=null,n!==null&&(fn[pn++]=vr,fn[pn++]=wr,fn[pn++]=Bi,vr=n.id,wr=n.overflow,Bi=r),r=_h(r,c.children),r.flags|=4096,r)}function Xp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Qc(n.return,r,a)}function vh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Yp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xp(n,a,r);else if(n.tag===19)Xp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),vh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}vh(r,!0,a,null,p);break;case"together":vh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ir(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ii(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ii(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function v0(n,r,a){switch(r.tag){case 3:Gp(r),Ks();break;case 5:hp(r);break;case 1:Kt(r.type)&&Dl(r);break;case 4:Jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;We(Fl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(We(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Qp(n,r,a):(We(Je,Je.current&1),n=Ir(n,r,a),n!==null?n.sibling:null);We(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Yp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,Hp(n,r,a)}return Ir(n,r,a)}var Jp,wh,Zp,em;Jp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wh=function(){},Zp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Kn.current);var p=null;switch(a){case"input":d=Si(n,d),c=Si(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=xo(n,d),c=xo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pl)}Lo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==I&&(R!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&I[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,I=I?I.__html:void 0,R!=null&&I!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&qe("scroll",n),p||I===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},em=function(n,r,a,c){a!==c&&(r.flags|=4)};function ga(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function w0(n,r,a){var c=r.pendingProps;switch(Bc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(r),null;case 1:return Kt(r.type)&&Nl(),bt(r),null;case 3:return c=r.stateNode,Js(),Ge(Gt),Ge(Dt),th(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Nh(Dn),Dn=null))),wh(n,r),bt(r),null;case 5:Zc(r);var d=Wi(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)Zp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return bt(r),null}if(n=Wi(Kn.current),Ll(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Gn]=r,c[oa]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)qe(ra[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":fs(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":ms(c,p),qe("invalid",c)}Lo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&qe("scroll",c)}switch(a){case"input":ar(c),el(c,p,!0);break;case"textarea":ar(c),No(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Pl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Gn]=r,n[oa]=c,Jp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Mo(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)qe(ra[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":fs(n,c),d=Si(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),qe("invalid",n);break;case"textarea":ms(n,c),d=xo(n,c),qe("invalid",n);break;default:d=c}Lo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var R=I[p];p==="style"?bo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Do(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Lr(n,R):typeof R=="number"&&Lr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&qe("scroll",n):R!=null&&ge(n,p,R,_))}switch(a){case"input":ar(n),el(n,c,!1);break;case"textarea":ar(n),No(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ur(n,!!c.multiple,p,!1):c.defaultValue!=null&&ur(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return bt(r),null;case 6:if(n&&r.stateNode!=null)em(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(ha.current),Wi(Kn.current),Ll(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Rl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return bt(r),null;case 13:if(Ge(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)rp(),Ks(),r.flags|=98560,p=!1;else if(p=Ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bt(r),p=!1}else Dn!==null&&(Nh(Dn),Dn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?pt===0&&(pt=3):bh())),r.updateQueue!==null&&(r.flags|=4),bt(r),null);case 4:return Js(),wh(n,r),n===null&&ia(r.stateNode.containerInfo),bt(r),null;case 10:return Kc(r.type._context),bt(r),null;case 17:return Kt(r.type)&&Nl(),bt(r),null;case 19:if(Ge(Je),p=r.memoizedState,p===null)return bt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ga(p,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Bl(n),_!==null){for(r.flags|=128,ga(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&He()>no&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ye)return bt(r),null}else 2*He()-p.renderingStartTime>no&&a!==1073741824&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=He(),r.sibling=null,a=Je.current,We(Je,c?a&1|2:a&1),r):(bt(r),null);case 22:case 23:return Vh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(bt(r),r.subtreeFlags&6&&(r.flags|=8192)):bt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function E0(n,r){switch(Bc(r),r.tag){case 1:return Kt(r.type)&&Nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Js(),Ge(Gt),Ge(Dt),th(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Zc(r),null;case 13:if(Ge(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Je),null;case 4:return Js(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Yl=!1,Ot=!1,T0=typeof WeakSet=="function"?WeakSet:Set,re=null;function eo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,r,c)}else a.current=null}function Eh(n,r,a){try{a()}catch(c){nt(n,r,c)}}var tm=!1;function I0(n,r){if(Vc=Hr,n=Vf(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,R=-1,F=0,G=0,Q=n,W=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(I=_+d),Q!==p||c!==0&&Q.nodeType!==3||(R=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)W=Q,Q=ee;for(;;){if(Q===n)break t;if(W===a&&++F===d&&(I=_),W===p&&++G===c&&(R=_),(ee=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=ee}a=I===-1||R===-1?null:{start:I,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:n,selectionRange:a},Hr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,it=ie.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?se:Vn(r.type,se),it);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){nt(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=tm,tm=!1,ie}function ya(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Eh(r,a,p)}d=d.next}while(d!==c)}}function Jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Th(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function nm(n){var r=n.alternate;r!==null&&(n.alternate=null,nm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[oa],delete r[Fc],delete r[s0],delete r[o0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,a),n=n.sibling;n!==null;)Ih(n,r,a),n=n.sibling}function Sh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Sh(n,r,a),n=n.sibling;n!==null;)Sh(n,r,a),n=n.sibling}var kt=null,bn=!1;function Zr(n,r,a){for(a=a.child;a!==null;)sm(n,r,a),a=a.sibling}function sm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Vi,a)}catch{}switch(a.tag){case 5:Ot||eo(a,r);case 6:var c=kt,d=bn;kt=null,Zr(n,r,a),kt=c,bn=d,kt!==null&&(bn?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(bn?(n=kt,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Pn(n)):Mc(kt,a.stateNode));break;case 4:c=kt,d=bn,kt=a.stateNode.containerInfo,bn=!0,Zr(n,r,a),kt=c,bn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Eh(a,r,_),d=d.next}while(d!==c)}Zr(n,r,a);break;case 1:if(!Ot&&(eo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){nt(a,r,I)}Zr(n,r,a);break;case 21:Zr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Zr(n,r,a),Ot=c):Zr(n,r,a);break;default:Zr(n,r,a)}}function om(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new T0),r.forEach(function(c){var d=D0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:kt=I.stateNode,bn=!1;break e;case 3:kt=I.stateNode.containerInfo,bn=!0;break e;case 4:kt=I.stateNode.containerInfo,bn=!0;break e}I=I.return}if(kt===null)throw Error(t(160));sm(p,_,d),kt=null,bn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){nt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)am(r,n),r=r.sibling}function am(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Xn(n),c&4){try{ya(3,n,n.return),Jl(3,n)}catch(se){nt(n,n.return,se)}try{ya(5,n,n.return)}catch(se){nt(n,n.return,se)}}break;case 1:On(r,n),Xn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(On(r,n),Xn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(se){nt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Ro(d,p),Mo(I,_);var F=Mo(I,p);for(_=0;_<R.length;_+=2){var G=R[_],Q=R[_+1];G==="style"?bo(d,Q):G==="dangerouslySetInnerHTML"?Do(d,Q):G==="children"?Lr(d,Q):ge(d,G,Q,F)}switch(I){case"input":Po(d,p);break;case"textarea":gs(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?ur(d,!!p.multiple,ee,!1):W!==!!p.multiple&&(p.defaultValue!=null?ur(d,!!p.multiple,p.defaultValue,!0):ur(d,!!p.multiple,p.multiple?[]:"",!1))}d[oa]=p}catch(se){nt(n,n.return,se)}}break;case 6:if(On(r,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){nt(n,n.return,se)}}break;case 3:if(On(r,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(se){nt(n,n.return,se)}break;case 4:On(r,n),Xn(n);break;case 13:On(r,n),Xn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ch=He())),c&4&&om(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||G,On(r,n),Ot=F):On(r,n),Xn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(re=n,G=n.child;G!==null;){for(Q=re=G;re!==null;){switch(W=re,ee=W.child,W.tag){case 0:case 11:case 14:case 15:ya(4,W,W.return);break;case 1:eo(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){nt(c,a,se)}}break;case 5:eo(W,W.return);break;case 22:if(W.memoizedState!==null){cm(Q);continue}}ee!==null?(ee.return=W,re=ee):cm(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Q.stateNode,R=Q.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,I.style.display=Vo("display",_))}catch(se){nt(n,n.return,se)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(se){nt(n,n.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:On(r,n),Xn(n),c&4&&om(n);break;case 21:break;default:On(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var p=im(n);Sh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=im(n);Ih(n,I,_);break;default:throw Error(t(161))}}catch(R){nt(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function S0(n,r,a){re=n,lm(n)}function lm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Yl;if(!_){var I=d.alternate,R=I!==null&&I.memoizedState!==null||Ot;I=Yl;var F=Ot;if(Yl=_,(Ot=R)&&!F)for(re=d;re!==null;)_=re,R=_.child,_.tag===22&&_.memoizedState!==null?hm(d):R!==null?(R.return=_,re=R):hm(d);for(;p!==null;)re=p,lm(p),p=p.sibling;re=d,Yl=I,Ot=F}um(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):um(n)}}function um(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||Jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&cp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}cp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Pn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&Th(r)}catch(W){nt(r,r.return,W)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function cm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function hm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Jl(4,r)}catch(R){nt(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){nt(r,d,R)}}var p=r.return;try{Th(r)}catch(R){nt(r,p,R)}break;case 5:var _=r.return;try{Th(r)}catch(R){nt(r,_,R)}}}catch(R){nt(r,r.return,R)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var A0=Math.ceil,Zl=ce.ReactCurrentDispatcher,Ah=ce.ReactCurrentOwner,yn=ce.ReactCurrentBatchConfig,be=0,Et=null,at=null,Ct=0,an=0,to=Kr(0),pt=0,_a=null,Gi=0,eu=0,kh=0,va=null,Xt=null,Ch=0,no=1/0,Sr=null,tu=!1,Rh=null,ei=null,nu=!1,ti=null,ru=0,wa=0,Ph=null,iu=-1,su=0;function Ht(){return(be&6)!==0?He():iu!==-1?iu:iu=He()}function ni(n){return(n.mode&1)===0?1:(be&2)!==0&&Ct!==0?Ct&-Ct:l0.transition!==null?(su===0&&(su=Oi()),su):(n=xe,n!==0||(n=window.event,n=n===void 0?16:Ko(n.type)),n)}function Ln(n,r,a,c){if(50<wa)throw wa=0,Ph=null,Error(t(185));jr(n,a,c),((be&2)===0||n!==Et)&&(n===Et&&((be&2)===0&&(eu|=a),pt===4&&ri(n,Ct)),Yt(n,c),a===1&&be===0&&(r.mode&1)===0&&(no=He()+500,Vl&&Xr()))}function Yt(n,r){var a=n.callbackNode;dr(n,r);var c=bi(n,n===Et?Ct:0);if(c===0)a!==null&&$o(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&$o(a),r===1)n.tag===0?a0(fm.bind(null,n)):Jf(fm.bind(null,n)),r0(function(){(be&6)===0&&Xr()}),a=null;else{switch(Br(c)){case 1:a=Di;break;case 4:a=Mr;break;case 16:a=cn;break;case 536870912:a=sl;break;default:a=cn}a=Em(a,dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function dm(n,r){if(iu=-1,su=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=bi(n,n===Et?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ou(n,c);else{r=c;var d=be;be|=2;var p=mm();(Et!==n||Ct!==r)&&(Sr=null,no=He()+500,Qi(n,r));do try{R0();break}catch(I){pm(n,I)}while(!0);Gc(),Zl.current=p,be=d,at!==null?r=0:(Et=null,Ct=0,r=pt)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=xh(n,d))),r===1)throw a=_a,Qi(n,0),ri(n,c),Yt(n,He()),a;if(r===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!k0(d)&&(r=ou(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=xh(n,p))),r===1))throw a=_a,Qi(n,0),ri(n,c),Yt(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Xi(n,Xt,Sr);break;case 3:if(ri(n,c),(c&130023424)===c&&(r=Ch+500-He(),10<r)){if(bi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(Xi.bind(null,n,Xt,Sr),r);break}Xi(n,Xt,Sr);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-zt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*A0(c/1960))-c,10<c){n.timeoutHandle=Lc(Xi.bind(null,n,Xt,Sr),c);break}Xi(n,Xt,Sr);break;case 5:Xi(n,Xt,Sr);break;default:throw Error(t(329))}}}return Yt(n,He()),n.callbackNode===a?dm.bind(null,n):null}function xh(n,r){var a=va;return n.current.memoizedState.isDehydrated&&(Qi(n,r).flags|=256),n=ou(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&Nh(r)),n}function Nh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function k0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Nn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ri(n,r){for(r&=~kh,r&=~eu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-zt(r),c=1<<a;n[a]=-1,r&=~c}}function fm(n){if((be&6)!==0)throw Error(t(327));ro();var r=bi(n,0);if((r&1)===0)return Yt(n,He()),null;var a=ou(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=xh(n,c))}if(a===1)throw a=_a,Qi(n,0),ri(n,r),Yt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Xi(n,Xt,Sr),Yt(n,He()),null}function Dh(n,r){var a=be;be|=1;try{return n(r)}finally{be=a,be===0&&(no=He()+500,Vl&&Xr())}}function Ki(n){ti!==null&&ti.tag===0&&(be&6)===0&&ro();var r=be;be|=1;var a=yn.transition,c=xe;try{if(yn.transition=null,xe=1,n)return n()}finally{xe=c,yn.transition=a,be=r,(be&6)===0&&Xr()}}function Vh(){an=to.current,Ge(to)}function Qi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,n0(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Js(),Ge(Gt),Ge(Dt),th();break;case 5:Zc(c);break;case 4:Js();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Kc(c.type._context);break;case 22:case 23:Vh()}a=a.return}if(Et=n,at=n=ii(n.current,null),Ct=an=r,pt=0,_a=null,kh=eu=Gi=0,Xt=va=null,Hi!==null){for(r=0;r<Hi.length;r++)if(a=Hi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Hi=null}return n}function pm(n,r){do{var a=at;try{if(Gc(),$l.current=Gl,Hl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(qi=0,wt=ft=Ze=null,da=!1,fa=0,Ah.current=null,a===null||a.return===null){pt=1,_a=r,at=null;break}e:{var p=n,_=a.return,I=a,R=r;if(r=Ct,I.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,G=I,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var ee=Up(_);if(ee!==null){ee.flags&=-257,jp(ee,_,I,p,r),ee.mode&1&&Fp(p,F,r),r=ee,R=F;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(R),r.updateQueue=se}else ie.add(R);break e}else{if((r&1)===0){Fp(p,F,r),bh();break e}R=Error(t(426))}}else if(Ye&&I.mode&1){var it=Up(_);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),jp(it,_,I,p,r),Wc(Zs(R,I));break e}}p=R=Zs(R,I),pt!==4&&(pt=2),va===null?va=[p]:va.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Lp(p,R,r);up(p,L);break e;case 1:I=R;var N=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ei===null||!ei.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Mp(p,I,r);up(p,Y);break e}}p=p.return}while(p!==null)}ym(a)}catch(oe){r=oe,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function mm(){var n=Zl.current;return Zl.current=Gl,n===null?Gl:n}function bh(){(pt===0||pt===3||pt===2)&&(pt=4),Et===null||(Gi&268435455)===0&&(eu&268435455)===0||ri(Et,Ct)}function ou(n,r){var a=be;be|=2;var c=mm();(Et!==n||Ct!==r)&&(Sr=null,Qi(n,r));do try{C0();break}catch(d){pm(n,d)}while(!0);if(Gc(),be=a,Zl.current=c,at!==null)throw Error(t(261));return Et=null,Ct=0,pt}function C0(){for(;at!==null;)gm(at)}function R0(){for(;at!==null&&!rl();)gm(at)}function gm(n){var r=wm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?ym(n):at=r,Ah.current=null}function ym(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=w0(a,r,an),a!==null){at=a;return}}else{if(a=E0(a,r),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,at=null;return}}if(r=r.sibling,r!==null){at=r;return}at=r=n}while(r!==null);pt===0&&(pt=5)}function Xi(n,r,a){var c=xe,d=yn.transition;try{yn.transition=null,xe=1,P0(n,r,a,c)}finally{yn.transition=d,xe=c}return null}function P0(n,r,a,c){do ro();while(ti!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===Et&&(at=Et=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nu||(nu=!0,Em(cn,function(){return ro(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var _=xe;xe=1;var I=be;be|=4,Ah.current=null,I0(n,a),am(a,n),Qv(bc),Hr=!!Vc,bc=Vc=null,n.current=a,S0(a),yc(),be=I,xe=_,yn.transition=p}else n.current=a;if(nu&&(nu=!1,ti=n,ru=d),p=n.pendingLanes,p===0&&(ei=null),ol(a.stateNode),Yt(n,He()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Rh,Rh=null,n;return(ru&1)!==0&&n.tag!==0&&ro(),p=n.pendingLanes,(p&1)!==0?n===Ph?wa++:(wa=0,Ph=n):wa=0,Xr(),null}function ro(){if(ti!==null){var n=Br(ru),r=yn.transition,a=xe;try{if(yn.transition=null,xe=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,ru=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,re=n.current;re!==null;){var p=re,_=p.child;if((re.flags&16)!==0){var I=p.deletions;if(I!==null){for(var R=0;R<I.length;R++){var F=I[R];for(re=F;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:ya(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,re=Q;else for(;re!==null;){G=re;var W=G.sibling,ee=G.return;if(nm(G),G===F){re=null;break}if(W!==null){W.return=ee,re=W;break}re=ee}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var it=se.sibling;se.sibling=null,se=it}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ya(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,re=L;break e}re=p.return}}var N=n.current;for(re=N;re!==null;){_=re;var M=_.child;if((_.subtreeFlags&2064)!==0&&M!==null)M.return=_,re=M;else e:for(_=N;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Jl(9,I)}}catch(oe){nt(I,I.return,oe)}if(I===_){re=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,re=Y;break e}re=I.return}}if(be=d,Xr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Vi,n)}catch{}c=!0}return c}finally{xe=a,yn.transition=r}}return!1}function _m(n,r,a){r=Zs(a,r),r=Lp(n,r,1),n=Jr(n,r,1),r=Ht(),n!==null&&(jr(n,1,r),Yt(n,r))}function nt(n,r,a){if(n.tag===3)_m(n,n,a);else for(;r!==null;){if(r.tag===3){_m(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=Zs(a,n),n=Mp(r,n,1),r=Jr(r,n,1),n=Ht(),r!==null&&(jr(r,1,n),Yt(r,n));break}}r=r.return}}function x0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(Ct&a)===a&&(pt===4||pt===3&&(Ct&130023424)===Ct&&500>He()-Ch?Qi(n,0):kh|=a),Yt(n,r)}function vm(n,r){r===0&&((n.mode&1)===0?r=1:(r=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var a=Ht();n=Er(n,r),n!==null&&(jr(n,r,a),Yt(n,a))}function N0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),vm(n,a)}function D0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),vm(n,a)}var wm;wm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Gt.current)Qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Qt=!1,v0(n,r,a);Qt=(n.flags&131072)!==0}else Qt=!1,Ye&&(r.flags&1048576)!==0&&Zf(r,Ol,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Xl(n,r),n=r.pendingProps;var d=Ws(r,Dt.current);Ys(r,a),d=ih(null,r,c,n,d,a);var p=sh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,Dl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=Kl,r.stateNode=d,d._reactInternals=r,hh(r,c,n,a),r=mh(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&zc(r),$t(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Xl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=b0(c),n=Vn(c,n),d){case 0:r=ph(null,r,c,n,a);break e;case 1:r=qp(null,r,c,n,a);break e;case 11:r=zp(null,r,c,n,a);break e;case 14:r=Bp(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),ph(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),qp(n,r,c,d,a);case 3:e:{if(Gp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,lp(n,r),zl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Zs(Error(t(423)),r),r=Kp(n,r,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),r),r=Kp(n,r,c,a,d);break e}else for(on=Gr(r.stateNode.containerInfo.firstChild),sn=r,Ye=!0,Dn=null,a=op(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ks(),c===d){r=Ir(n,r,a);break e}$t(n,r,c,a)}r=r.child}return r;case 5:return hp(r),n===null&&Hc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Oc(c,d)?_=null:p!==null&&Oc(c,p)&&(r.flags|=32),Wp(n,r),$t(n,r,_,a),r.child;case 6:return n===null&&Hc(r),null;case 13:return Qp(n,r,a);case 4:return Jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Qs(r,null,c,a):$t(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),zp(n,r,c,d,a);case 7:return $t(n,r,r.pendingProps,a),r.child;case 8:return $t(n,r,r.pendingProps.children,a),r.child;case 12:return $t(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,We(Fl,c._currentValue),c._currentValue=_,p!==null)if(Nn(p.value,_)){if(p.children===d.children&&!Gt.current){r=Ir(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var R=I.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=Tr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?R.next=R:(R.next=G.next,G.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),Qc(p.return,a,r),I.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Qc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}$t(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ys(r,a),d=mn(d),c=c(d),r.flags|=1,$t(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),Bp(n,r,c,d,a);case 15:return $p(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Xl(n,r),r.tag=1,Kt(c)?(n=!0,Dl(r)):n=!1,Ys(r,a),bp(r,c,d),hh(r,c,d,a),mh(null,r,c,!0,n,a);case 19:return Yp(n,r,a);case 22:return Hp(n,r,a)}throw Error(t(156,r.tag))};function Em(n,r){return Ss(n,r)}function V0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new V0(n,r,a,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function b0(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===tt)return 14}return 2}function ii(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Oh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return Yi(a.children,d,p,r);case S:_=8,d|=8;break;case E:return n=_n(12,a,r,d|2),n.elementType=E,n.lanes=p,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=p,n;case we:return n=_n(19,a,r,d),n.elementType=we,n.lanes=p,n;case je:return lu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case P:_=9;break e;case V:_=11;break e;case tt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Yi(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function lu(n,r,a,c){return n=_n(22,n,c,r),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Lh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Mh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function O0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fh(n,r,a,c,d,p,_,I,R){return n=new O0(n,r,a,I,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(p),n}function L0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Tm(n){if(!n)return Qr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Xf(n,a,r)}return r}function Im(n,r,a,c,d,p,_,I,R){return n=Fh(a,c,!0,n,d,p,_,I,R),n.context=Tm(null),a=n.current,c=Ht(),d=ni(a),p=Tr(c,d),p.callback=r??null,Jr(a,p,d),n.current.lanes=d,jr(n,d,c),Yt(n,c),n}function uu(n,r,a,c){var d=r.current,p=Ht(),_=ni(d);return a=Tm(a),r.context===null?r.context=a:r.pendingContext=a,r=Tr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Jr(d,r,_),n!==null&&(Ln(n,d,_,p),jl(n,d,_)),_}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Uh(n,r){Sm(n,r),(n=n.alternate)&&Sm(n,r)}function M0(){return null}var Am=typeof reportError=="function"?reportError:function(n){console.error(n)};function jh(n){this._internalRoot=n}hu.prototype.render=jh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));uu(n,r,null,null)},hu.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ki(function(){uu(null,n,null,null)}),r[yr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=hl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&pl(n)}};function zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function km(){}function F0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=cu(_);p.call(F)}}var _=Im(r,c,n,0,null,!1,!1,"",km);return n._reactRootContainer=_,n[yr]=_.current,ia(n.nodeType===8?n.parentNode:n),Ki(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=cu(R);I.call(F)}}var R=Fh(n,0,!1,null,null,!1,!1,"",km);return n._reactRootContainer=R,n[yr]=R.current,ia(n.nodeType===8?n.parentNode:n),Ki(function(){uu(r,R,a,c)}),R}function fu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var R=cu(_);I.call(R)}}uu(r,_,n,d)}else _=F0(a,r,n,d,c);return cu(_)}ul=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fr(r.pendingLanes);a!==0&&(zr(r,a|1),Yt(r,He()),(be&6)===0&&(no=He()+500,Xr()))}break;case 13:Ki(function(){var c=Er(n,1);if(c!==null){var d=Ht();Ln(c,n,1,d)}}),Uh(n,1)}},Cs=function(n){if(n.tag===13){var r=Er(n,134217728);if(r!==null){var a=Ht();Ln(r,n,134217728,a)}Uh(n,134217728)}},cl=function(n){if(n.tag===13){var r=ni(n),a=Er(n,r);if(a!==null){var c=Ht();Ln(a,n,r,c)}Uh(n,r)}},hl=function(){return xe},dl=function(n,r){var a=xe;try{return xe=n,r()}finally{xe=a}},_s=function(n,r,a){switch(r){case"input":if(Po(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));ds(c),Po(c,d)}}}break;case"textarea":gs(n,a);break;case"select":r=a.value,r!=null&&ur(n,!!a.multiple,r,!1)}},Ri=Dh,Uo=Ki;var U0={usingClientEntryPoint:!1,Events:[aa,$s,xl,zn,Fo,Dh]},Ea={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Vi=pu.inject(j0),en=pu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0,Jt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(r))throw Error(t(200));return L0(n,r,null,a)},Jt.createRoot=function(n,r){if(!zh(n))throw Error(t(299));var a=!1,c="",d=Am;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Fh(n,1,!1,null,null,a,!1,c,d),n[yr]=r.current,ia(n.nodeType===8?n.parentNode:n),new jh(r)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bo(r),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return Ki(n)},Jt.hydrate=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!0,a)},Jt.hydrateRoot=function(n,r,a){if(!zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Am;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Im(r,null,n,1,a??null,d,!1,p,_),n[yr]=r.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new hu(r)},Jt.render=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!1,a)},Jt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Ki(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Jt.unstable_batchedUpdates=Dh,Jt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,r,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var bm;function K0(){if(bm)return Hh.exports;bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Hh.exports=G0(),Hh.exports}var Om;function Q0(){if(Om)return mu;Om=1;var i=K0();return mu.createRoot=i.createRoot,mu.hydrateRoot=i.hydrateRoot,mu}var X0=Q0();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=Mt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>Mt.createElement("svg",{ref:y,...J0,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:gy("lucide",o),...m},[...h.map(([v,T])=>Mt.createElement(v,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(i,e)=>{const t=Mt.forwardRef(({className:s,...o},u)=>Mt.createElement(Z0,{ref:u,iconNode:e,className:gy(`lucide-${Y0(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Lm=Un("CircleAlert",ew);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Mm=Un("CircleCheckBig",tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Gh=Un("ClipboardList",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kh=Un("Info",rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],sw=Un("List",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],aw=Un("Plus",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Fm=Un("Search",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],cw=Un("SquarePen",uw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],dw=Un("Trash2",hw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],pw=Un("User",fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Um=Un("X",mw),gw=()=>{};var jm={};/**
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
 */const yy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},yw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},_y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,T=u>>2,C=(u&3)<<4|m>>4;let x=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(x=64)),s.push(t[T],t[C],t[x],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(yy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):yw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||C==null)throw new _w;const x=u<<2|m>>4;if(s.push(x),v!==64){const z=m<<4&240|v>>2;if(s.push(z),C!==64){const K=v<<6&192|C;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class _w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vw=function(i){const e=yy(i);return _y.encodeByteArray(e,!0)},Vu=function(i){return vw(i).replace(/\./g,"")},vy=function(i){try{return _y.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ew=()=>ww().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof jm>"u")return;const i=jm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Iw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&vy(i[1]);return e&&JSON.parse(e)},Zu=()=>{try{return gw()||Ew()||Tw()||Iw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},wy=i=>{var e,t;return(t=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Sw=i=>{const e=wy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ey=()=>{var i;return(i=Zu())===null||i===void 0?void 0:i.config},Ty=i=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Aw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Iy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function kw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Vu(JSON.stringify(t)),Vu(JSON.stringify(h)),""].join(".")}const Ca={};function Cw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ca))Ca[e]?i.emulator.push(e):i.prod.push(e);return i}function Rw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let zm=!1;function Sy(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Ca[i]===e||Ca[i]||zm)return;Ca[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=Cw().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function y(x,z){x.setAttribute("width","24"),x.setAttribute("id",z),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function v(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{zm=!0,h()},x}function T(x,z){x.setAttribute("id",z),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function C(){const x=Rw(s),z=t("text"),K=document.getElementById(z)||document.createElement("span"),X=t("learnmore"),H=document.getElementById(X)||document.createElement("a"),me=t("preprendIcon"),ue=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const ge=x.element;m(ge),T(H,X);const ce=v();y(ue,me),ge.append(ue,K,H,ce),document.body.appendChild(ge)}u?(K.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function xw(){var i;const e=(i=Zu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bw(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Ow(){return!xw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lw(){try{return typeof indexedDB=="object"}catch{return!1}}function Mw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fw="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Fw,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Uw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new br(o,m,s)}}function Uw(i,e){return i.replace(jw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const jw=/\{\$([^}]+)}/g;function zw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Bm(u)&&Bm(h)){if(!rs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Bm(i){return i!==null&&typeof i=="object"}/**
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
 */function $a(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bw(i,e){const t=new $w(i,e);return t.subscribe.bind(t)}class $w{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Hw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Qh),o.error===void 0&&(o.error=Qh),o.complete===void 0&&(o.complete=Qh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Qh(){}/**
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
 */class Ww{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Aw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gw(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(i){return i===Ji?void 0:i}function Gw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ww(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const Qw={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Xw=Re.INFO,Yw={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},Jw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Yw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vd{constructor(e){this.name=e,this._logLevel=Xw,this._logHandler=Jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const Zw=(i,e)=>e.some(t=>i instanceof t);let $m,Hm;function eE(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return Hm||(Hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ay=new WeakMap,ld=new WeakMap,ky=new WeakMap,Xh=new WeakMap,bd=new WeakMap;function nE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(di(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ay.set(t,i)}).catch(()=>{}),bd.set(e,i),e}function rE(i){if(ld.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ld.set(i,e)}let ud={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ld.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ky.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function iE(i){ud=i(ud)}function sE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Yh(this),e,...t);return ky.set(s,e.sort?e.sort():[e]),di(s)}:tE().includes(i)?function(...e){return i.apply(Yh(this),e),di(Ay.get(this))}:function(...e){return di(i.apply(Yh(this),e))}}function oE(i){return typeof i=="function"?sE(i):(i instanceof IDBTransaction&&rE(i),Zw(i,eE())?new Proxy(i,ud):i)}function di(i){if(i instanceof IDBRequest)return nE(i);if(Xh.has(i))return Xh.get(i);const e=oE(i);return e!==i&&(Xh.set(i,e),bd.set(e,i)),e}const Yh=i=>bd.get(i);function aE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=di(h);return s&&h.addEventListener("upgradeneeded",y=>{s(di(h.result),y.oldVersion,y.newVersion,di(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const lE=["get","getKey","getAll","getAllKeys","count"],uE=["put","add","delete","clear"],Jh=new Map;function Wm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Jh.get(e))return Jh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=uE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||lE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Jh.set(e,u),u}iE(i=>({...i,get:(e,t,s)=>Wm(e,t)||i.get(e,t,s),has:(e,t)=>!!Wm(e,t)||i.has(e,t)}));/**
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
 */class cE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",qm="0.13.2";/**
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
 */const Rr=new Vd("@firebase/app"),dE="@firebase/app-compat",fE="@firebase/analytics-compat",pE="@firebase/analytics",mE="@firebase/app-check-compat",gE="@firebase/app-check",yE="@firebase/auth",_E="@firebase/auth-compat",vE="@firebase/database",wE="@firebase/data-connect",EE="@firebase/database-compat",TE="@firebase/functions",IE="@firebase/functions-compat",SE="@firebase/installations",AE="@firebase/installations-compat",kE="@firebase/messaging",CE="@firebase/messaging-compat",RE="@firebase/performance",PE="@firebase/performance-compat",xE="@firebase/remote-config",NE="@firebase/remote-config-compat",DE="@firebase/storage",VE="@firebase/storage-compat",bE="@firebase/firestore",OE="@firebase/ai",LE="@firebase/firestore-compat",ME="firebase",FE="11.10.0";/**
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
 */const hd="[DEFAULT]",UE={[cd]:"fire-core",[dE]:"fire-core-compat",[pE]:"fire-analytics",[fE]:"fire-analytics-compat",[gE]:"fire-app-check",[mE]:"fire-app-check-compat",[yE]:"fire-auth",[_E]:"fire-auth-compat",[vE]:"fire-rtdb",[wE]:"fire-data-connect",[EE]:"fire-rtdb-compat",[TE]:"fire-fn",[IE]:"fire-fn-compat",[SE]:"fire-iid",[AE]:"fire-iid-compat",[kE]:"fire-fcm",[CE]:"fire-fcm-compat",[RE]:"fire-perf",[PE]:"fire-perf-compat",[xE]:"fire-rc",[NE]:"fire-rc-compat",[DE]:"fire-gcs",[VE]:"fire-gcs-compat",[bE]:"fire-fst",[LE]:"fire-fst-compat",[OE]:"fire-vertex","fire-js":"fire-js",[ME]:"fire-js-all"};/**
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
 */const bu=new Map,jE=new Map,dd=new Map;function Gm(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function mo(i){const e=i.name;if(dd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,i);for(const t of bu.values())Gm(t,i);for(const t of jE.values())Gm(t,i);return!0}function Od(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const zE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Ba("app","Firebase",zE);/**
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
 */class BE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const To=FE;function Cy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=Ey()),!t)throw fi.create("no-options");const u=bu.get(o);if(u){if(rs(t,u.options)&&rs(s,u.config))return u;throw fi.create("duplicate-app",{appName:o})}const h=new Kw(o);for(const y of dd.values())h.addComponent(y);const m=new BE(t,s,h);return bu.set(o,m),m}function Ry(i=hd){const e=bu.get(i);if(!e&&i===hd&&Ey())return Cy();if(!e)throw fi.create("no-app",{appName:i});return e}function pi(i,e,t){var s;let o=(s=UE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(m.join(" "));return}mo(new is(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const $E="firebase-heartbeat-database",HE=1,Va="firebase-heartbeat-store";let Zh=null;function Py(){return Zh||(Zh=aE($E,HE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Va)}catch(t){console.warn(t)}}}}).catch(i=>{throw fi.create("idb-open",{originalErrorMessage:i.message})})),Zh}async function WE(i){try{const t=(await Py()).transaction(Va),s=await t.objectStore(Va).get(xy(i));return await t.done,s}catch(e){if(e instanceof br)Rr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function Km(i,e){try{const s=(await Py()).transaction(Va,"readwrite");await s.objectStore(Va).put(e,xy(i)),await s.done}catch(t){if(t instanceof br)Rr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function xy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const qE=1024,GE=30;class KE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Qm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>GE){const h=YE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qm(),{heartbeatsToSend:s,unsentEntries:o}=QE(this._heartbeatsCache.heartbeats),u=Vu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function QE(i,e=qE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Xm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class XE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lw()?Mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await WE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Xm(i){return Vu(JSON.stringify({version:2,heartbeats:i})).length}function YE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function JE(i){mo(new is("platform-logger",e=>new cE(e),"PRIVATE")),mo(new is("heartbeat",e=>new KE(e),"PRIVATE")),pi(cd,qm,i),pi(cd,qm,"esm2017"),pi("fire-js","")}JE("");var ZE="firebase",eT="11.10.0";/**
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
 */pi(ZE,eT,"app");function Ld(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Ny(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tT=Ny,Dy=new Ba("auth","Firebase",Ny());/**
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
 */const Ou=new Vd("@firebase/auth");function nT(i,...e){Ou.logLevel<=Re.WARN&&Ou.warn(`Auth (${To}): ${i}`,...e)}function Iu(i,...e){Ou.logLevel<=Re.ERROR&&Ou.error(`Auth (${To}): ${i}`,...e)}/**
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
 */function Pr(i,...e){throw Md(i,...e)}function Jn(i,...e){return Md(i,...e)}function Vy(i,e,t){const s=Object.assign(Object.assign({},tT()),{[e]:t});return new Ba("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return Vy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Dy.create(i,...e)}function ve(i,e,...t){if(!i)throw Md(e,...t)}function Ar(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Iu(e),new Error(e)}function xr(i,e){i||Ar(e)}/**
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
 */function fd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function rT(){return Ym()==="http:"||Ym()==="https:"}function Ym(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rT()||Dw()||"connection"in navigator)?navigator.onLine:!0}function sT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=Pw()||Vw()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fd(i,e){xr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class by{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lT=new Ha(3e4,6e4);function Wa(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Io(i,e,t,s,o={}){return Oy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=$a(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return Nw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(v.credentials="include"),by.fetch()(await Ly(i,i.config.apiHost,t,m),v)})}async function Oy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},oT),e);try{const o=new uT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw gu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw gu(i,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Vy(i,T,v);Pr(i,T)}}catch(o){if(o instanceof br)throw o;Pr(i,"network-request-failed",{message:String(o)})}}async function Ud(i,e,t,s,o={}){const u=await Io(i,e,t,s,o);return"mfaPendingCredential"in u&&Pr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ly(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Fd(i.config,o):`${i.config.apiScheme}://${o}`;return aT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class uT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),lT.get())})}}function gu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function cT(i,e){return Io(i,"POST","/v1/accounts:delete",e)}async function Lu(i,e){return Io(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(i,e=!1){const t=ln(i),s=await t.getIdToken(e),o=jd(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ra(ed(o.auth_time)),issuedAtTime:Ra(ed(o.iat)),expirationTime:Ra(ed(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ed(i){return Number(i)*1e3}function jd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const o=vy(t);return o?JSON.parse(o):(Iu("Failed to decode base64 JWT payload"),null)}catch(o){return Iu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Jm(i){const e=jd(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&dT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function dT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class fT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await ba(i,Lu(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?My(u.providerUserInfo):[],m=mT(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),T=y?v:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new pd(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(i,C)}async function pT(i){const e=ln(i);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function My(i){return i.map(e=>{var{providerId:t}=e,s=Ld(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function gT(i,e){const t=await Oy(i,{},async()=>{const s=$a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Ly(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(y.credentials="include"),by.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yT(i,e){return Io(i,"POST","/v2/accounts:revokeToken",Wa(i,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Jm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await gT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Ar("not implemented")}}/**
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
 */function oi(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ba(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return pT(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await ba(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,T;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,x=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,me=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ue=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:ge,emailVerified:ce,isAnonymous:Be,providerData:Ie,stsTokenManager:D}=t;ve(ge&&D,e,"internal-error");const S=uo.fromJSON(this.name,D);ve(typeof ge=="string",e,"internal-error"),oi(C,e.name),oi(x,e.name),ve(typeof ce=="boolean",e,"internal-error"),ve(typeof Be=="boolean",e,"internal-error"),oi(z,e.name),oi(K,e.name),oi(X,e.name),oi(H,e.name),oi(me,e.name),oi(ue,e.name);const E=new Mn({uid:ge,auth:e,email:x,emailVerified:ce,displayName:C,isAnonymous:Be,photoURL:K,phoneNumber:z,tenantId:X,stsTokenManager:S,createdAt:me,lastLoginAt:ue});return Ie&&Array.isArray(Ie)&&(E.providerData=Ie.map(k=>Object.assign({},k))),H&&(E._redirectEventId=H),E}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new Mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Mu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?My(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const y=new Mn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const Zm=new Map;function kr(i){xr(i instanceof Function,"Expected a class definition");let e=Zm.get(i);return e?(xr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Zm.set(i,e),e)}/**
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
 */class Fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fy.type="NONE";const eg=Fy;/**
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
 */function Su(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Su(this.userKey,o.apiKey,u),this.fullPersistenceKey=Su("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(kr(eg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||kr(eg);const h=Su(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const T=await v._get(h);if(T){let C;if(typeof T=="string"){const x=await Lu(e,{idToken:T}).catch(()=>{});if(!x)break;C=await Mn._fromGetAccountInfoResponse(e,x,T)}else C=Mn._fromJSON(e,T);v!==u&&(m=C),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new co(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function tg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(By(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hy(e))return"Blackberry";if(Wy(e))return"Webos";if(jy(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if($y(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Uy(i=jt()){return/firefox\//i.test(i)}function jy(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(i=jt()){return/crios\//i.test(i)}function By(i=jt()){return/iemobile/i.test(i)}function $y(i=jt()){return/android/i.test(i)}function Hy(i=jt()){return/blackberry/i.test(i)}function Wy(i=jt()){return/webos/i.test(i)}function zd(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _T(i=jt()){var e;return zd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vT(){return bw()&&document.documentMode===10}function qy(i=jt()){return zd(i)||$y(i)||Wy(i)||Hy(i)||/windows phone/i.test(i)||By(i)}/**
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
 */function Gy(i,e=[]){let t;switch(i){case"Browser":t=tg(jt());break;case"Worker":t=`${tg(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${To}/${s}`}/**
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
 */class wT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ET(i,e={}){return Io(i,"GET","/v2/passwordPolicy",Wa(i,e))}/**
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
 */const TT=6;class IT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:TT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class ST{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new wT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Cr(this));const t=e?ln(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ET(this),t=new IT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&nT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qa(i){return ln(i)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bw(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AT(i){Bd=i}function kT(i){return Bd.loadJS(i)}function CT(){return Bd.gapiScript}function RT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function PT(i,e){const t=Od(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(rs(u,e??{}))return o;Pr(o,"already-initialized")}return t.initialize({options:e})}function xT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function NT(i,e,t){const s=qa(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Ky(e),{host:h,port:m}=DT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(rs(v,s.config.emulator)&&rs(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,Eo(h)?(Iy(`${u}//${h}${y}`),Sy("Auth",!0)):VT()}function Ky(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function DT(i){const e=Ky(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:rg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:rg(h)}}}function rg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function VT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Qy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ar("not implemented")}_getIdTokenResponse(e){return Ar("not implemented")}_linkToIdToken(e,t){return Ar("not implemented")}_getReauthenticationResolver(e){return Ar("not implemented")}}/**
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
 */async function ho(i,e){return Ud(i,"POST","/v1/accounts:signInWithIdp",Wa(i,e))}/**
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
 */const bT="http://localhost";class ss extends Qy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ld(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ss(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:bT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$a(t)}return e}}/**
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
 */class Xy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends Xy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function OT(i,e){return Ud(i,"POST","/v1/accounts:signUp",Wa(i,e))}/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Mn._fromIdTokenResponse(e,s,o),h=ig(s);return new Nr({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ig(s);return new Nr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ig(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function sg(i){var e;if(vn(i.app))return Promise.reject(Cr(i));const t=qa(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nr({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await OT(t,{returnSecureToken:!0}),o=await Nr._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Fu extends br{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Fu(e,t,s,o)}}function Yy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(i,u,e,s):u})}async function LT(i,e,t=!1){const s=await ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Nr._forOperation(i,"link",s)}/**
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
 */async function MT(i,e,t=!1){const{auth:s}=i;if(vn(s.app))return Promise.reject(Cr(s));const o="reauthenticate";try{const u=await ba(i,Yy(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=jd(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(i.uid===m,s,"user-mismatch"),Nr._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Pr(s,"user-mismatch"),u}}/**
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
 */async function FT(i,e,t=!1){if(vn(i.app))return Promise.reject(Cr(i));const s="signIn",o=await Yy(i,s,e),u=await Nr._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */async function UT(i,e){return Ud(i,"POST","/v1/accounts:signInWithCustomToken",Wa(i,e))}/**
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
 */async function jT(i,e){if(vn(i.app))return Promise.reject(Cr(i));const t=qa(i),s=await UT(t,{token:e,returnSecureToken:!0}),o=await Nr._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}function zT(i,e,t,s){return ln(i).onIdTokenChanged(e,t,s)}function BT(i,e,t){return ln(i).beforeAuthStateChanged(e,t)}function $T(i,e,t,s){return ln(i).onAuthStateChanged(e,t,s)}const Uu="__sak";/**
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
 */class Jy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HT=1e3,WT=10;class Zy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);vT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,WT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zy.type="LOCAL";const qT=Zy;/**
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
 */class e_ extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e_.type="SESSION";const t_=e_;/**
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
 */function GT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ec(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await GT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
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
 */function $d(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class KT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=$d("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const x=C;if(x.data.eventId===v)switch(x.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Zn(){return window}function QT(i){Zn().location.href=i}/**
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
 */function n_(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function XT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function JT(){return n_()?self:null}/**
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
 */const r_="firebaseLocalStorageDb",ZT=1,ju="firebaseLocalStorage",i_="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(i,e){return i.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function eI(){const i=indexedDB.deleteDatabase(r_);return new Ka(i).toPromise()}function md(){const i=indexedDB.open(r_,ZT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ju,{keyPath:i_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ju)?e(s):(s.close(),await eI(),e(await md()))})})}async function og(i,e,t){const s=tc(i,!0).put({[i_]:e,value:t});return new Ka(s).toPromise()}async function tI(i,e){const t=tc(i,!1).get(e),s=await new Ka(t).toPromise();return s===void 0?null:s.value}function ag(i,e){const t=tc(i,!0).delete(e);return new Ka(t).toPromise()}const nI=800,rI=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(JT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new KT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await og(e,Uu,"1"),await ag(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>og(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ag(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=tc(o,!1).getAll();return new Ka(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const iI=s_;new Ha(3e4,6e4);/**
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
 */function sI(i,e){return e?kr(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Hd extends Qy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oI(i){return FT(i.auth,new Hd(i),i.bypassAuthState)}function aI(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),MT(t,new Hd(i),i.bypassAuthState)}async function lI(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),LT(t,new Hd(i),i.bypassAuthState)}/**
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
 */class o_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oI;case"linkViaPopup":case"linkViaRedirect":return lI;case"reauthViaPopup":case"reauthViaRedirect":return aI;default:Pr(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uI=new Ha(2e3,1e4);class lo extends o_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uI.get())};e()}}lo.currentPopupAction=null;/**
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
 */const cI="pendingRedirect",Au=new Map;class hI extends o_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await dI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dI(i,e){const t=mI(e),s=pI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function fI(i,e){Au.set(i._key(),e)}function pI(i){return kr(i._redirectPersistence)}function mI(i){return Su(cI,i.config.apiKey,i.name)}async function gI(i,e,t=!1){if(vn(i.app))return Promise.reject(Cr(i));const s=qa(i),o=sI(s,e),h=await new hI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const yI=600*1e3;class _I{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!a_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function a_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a_(i);default:return!1}}/**
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
 */async function wI(i,e={}){return Io(i,"GET","/v1/projects",e)}/**
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
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function II(i){if(i.config.emulator)return;const{authorizedDomains:e}=await wI(i);for(const t of e)try{if(SI(t))return}catch{}Pr(i,"unauthorized-domain")}function SI(i){const e=fd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!TI.test(t))return!1;if(EI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const AI=new Ha(3e4,6e4);function ug(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function kI(i){return new Promise((e,t)=>{var s,o,u;function h(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),t(Jn(i,"network-request-failed"))},timeout:AI.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Zn().gapi)===null||u===void 0)&&u.load)h();else{const m=RT("iframefcb");return Zn()[m]=()=>{gapi.load?h():t(Jn(i,"network-request-failed"))},kT(`${CT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw ku=null,e})}let ku=null;function CI(i){return ku=ku||kI(i),ku}/**
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
 */const RI=new Ha(5e3,15e3),PI="__/auth/iframe",xI="emulator/auth/iframe",NI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Fd(e,xI):`https://${i.config.authDomain}/${PI}`,s={apiKey:e.apiKey,appName:i.name,v:To},o=DI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${$a(s).slice(1)}`}async function bI(i){const e=await CI(i),t=Zn().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:VI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},RI.get());function y(){Zn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,MI=600,FI="_blank",UI="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(i,e,t,s=LI,o=MI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},OI),{width:s.toString(),height:o.toString(),top:u,left:h}),v=jt().toLowerCase();t&&(m=zy(v)?FI:t),Uy(v)&&(e=e||UI,y.scrollbars="yes");const T=Object.entries(y).reduce((x,[z,K])=>`${x}${z}=${K},`,"");if(_T(v)&&m!=="_self")return zI(e||"",m),new cg(null);const C=window.open(e||"",m,T);ve(C,i,"popup-blocked");try{C.focus()}catch{}return new cg(C)}function zI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const BI="__/auth/handler",$I="emulator/auth/handler",HI=encodeURIComponent("fac");async function hg(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:To,eventId:o};if(e instanceof Xy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",zw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,C]of Object.entries({}))h[T]=C}if(e instanceof Ga){const T=e.getScopes().filter(C=>C!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),v=y?`#${HI}=${encodeURIComponent(y)}`:"";return`${WI(i)}?${$a(m).slice(1)}${v}`}function WI({config:i}){return i.emulator?Fd(i,$I):`https://${i.authDomain}/${BI}`}/**
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
 */const td="webStorageSupport";class qI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t_,this._completeRedirectFn=gI,this._overrideRedirectResult=fI}async _openPopup(e,t,s,o){var u;xr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await hg(e,t,s,fd(),o);return jI(e,h,$d())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await hg(e,t,s,fd(),o);return QT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await bI(e),s=new _I(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(td,{type:td},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[td];h!==void 0&&t(!!h),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=II(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qy()||jy()||zd()}}const GI=qI;var dg="@firebase/auth",fg="1.10.8";/**
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
 */class KI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(i){mo(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(i)},v=new ST(s,o,u,y);return xT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mo(new is("auth-internal",e=>{const t=qa(e.getProvider("auth").getImmediate());return(s=>new KI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(dg,fg,QI(i)),pi(dg,fg,"esm2017")}/**
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
 */const YI=300,JI=Ty("authIdTokenMaxAge")||YI;let pg=null;const ZI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JI)return;const o=t==null?void 0:t.token;pg!==o&&(pg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function e1(i=Ry()){const e=Od(i,"auth");if(e.isInitialized())return e.getImmediate();const t=PT(i,{popupRedirectResolver:GI,persistence:[iI,qT,t_]}),s=Ty("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=ZI(u.toString());BT(t,h,()=>h(t.currentUser)),zT(t,m=>h(m))}}const o=wy("auth");return o&&NT(t,`http://${o}`),t}function t1(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}AT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",t1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,l_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function E(){}E.prototype=S.prototype,D.D=S.prototype,D.prototype=new E,D.prototype.constructor=D,D.C=function(k,P,V){for(var A=Array(arguments.length-2),we=2;we<arguments.length;we++)A[we-2]=arguments[we];return S.prototype[P].apply(k,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,E){E||(E=0);var k=Array(16);if(typeof S=="string")for(var P=0;16>P;++P)k[P]=S.charCodeAt(E++)|S.charCodeAt(E++)<<8|S.charCodeAt(E++)<<16|S.charCodeAt(E++)<<24;else for(P=0;16>P;++P)k[P]=S[E++]|S[E++]<<8|S[E++]<<16|S[E++]<<24;S=D.g[0],E=D.g[1],P=D.g[2];var V=D.g[3],A=S+(V^E&(P^V))+k[0]+3614090360&4294967295;S=E+(A<<7&4294967295|A>>>25),A=V+(P^S&(E^P))+k[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(E^V&(S^E))+k[2]+606105819&4294967295,P=V+(A<<17&4294967295|A>>>15),A=E+(S^P&(V^S))+k[3]+3250441966&4294967295,E=P+(A<<22&4294967295|A>>>10),A=S+(V^E&(P^V))+k[4]+4118548399&4294967295,S=E+(A<<7&4294967295|A>>>25),A=V+(P^S&(E^P))+k[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(E^V&(S^E))+k[6]+2821735955&4294967295,P=V+(A<<17&4294967295|A>>>15),A=E+(S^P&(V^S))+k[7]+4249261313&4294967295,E=P+(A<<22&4294967295|A>>>10),A=S+(V^E&(P^V))+k[8]+1770035416&4294967295,S=E+(A<<7&4294967295|A>>>25),A=V+(P^S&(E^P))+k[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(E^V&(S^E))+k[10]+4294925233&4294967295,P=V+(A<<17&4294967295|A>>>15),A=E+(S^P&(V^S))+k[11]+2304563134&4294967295,E=P+(A<<22&4294967295|A>>>10),A=S+(V^E&(P^V))+k[12]+1804603682&4294967295,S=E+(A<<7&4294967295|A>>>25),A=V+(P^S&(E^P))+k[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=P+(E^V&(S^E))+k[14]+2792965006&4294967295,P=V+(A<<17&4294967295|A>>>15),A=E+(S^P&(V^S))+k[15]+1236535329&4294967295,E=P+(A<<22&4294967295|A>>>10),A=S+(P^V&(E^P))+k[1]+4129170786&4294967295,S=E+(A<<5&4294967295|A>>>27),A=V+(E^P&(S^E))+k[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^E&(V^S))+k[11]+643717713&4294967295,P=V+(A<<14&4294967295|A>>>18),A=E+(V^S&(P^V))+k[0]+3921069994&4294967295,E=P+(A<<20&4294967295|A>>>12),A=S+(P^V&(E^P))+k[5]+3593408605&4294967295,S=E+(A<<5&4294967295|A>>>27),A=V+(E^P&(S^E))+k[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^E&(V^S))+k[15]+3634488961&4294967295,P=V+(A<<14&4294967295|A>>>18),A=E+(V^S&(P^V))+k[4]+3889429448&4294967295,E=P+(A<<20&4294967295|A>>>12),A=S+(P^V&(E^P))+k[9]+568446438&4294967295,S=E+(A<<5&4294967295|A>>>27),A=V+(E^P&(S^E))+k[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^E&(V^S))+k[3]+4107603335&4294967295,P=V+(A<<14&4294967295|A>>>18),A=E+(V^S&(P^V))+k[8]+1163531501&4294967295,E=P+(A<<20&4294967295|A>>>12),A=S+(P^V&(E^P))+k[13]+2850285829&4294967295,S=E+(A<<5&4294967295|A>>>27),A=V+(E^P&(S^E))+k[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=P+(S^E&(V^S))+k[7]+1735328473&4294967295,P=V+(A<<14&4294967295|A>>>18),A=E+(V^S&(P^V))+k[12]+2368359562&4294967295,E=P+(A<<20&4294967295|A>>>12),A=S+(E^P^V)+k[5]+4294588738&4294967295,S=E+(A<<4&4294967295|A>>>28),A=V+(S^E^P)+k[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^E)+k[11]+1839030562&4294967295,P=V+(A<<16&4294967295|A>>>16),A=E+(P^V^S)+k[14]+4259657740&4294967295,E=P+(A<<23&4294967295|A>>>9),A=S+(E^P^V)+k[1]+2763975236&4294967295,S=E+(A<<4&4294967295|A>>>28),A=V+(S^E^P)+k[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^E)+k[7]+4139469664&4294967295,P=V+(A<<16&4294967295|A>>>16),A=E+(P^V^S)+k[10]+3200236656&4294967295,E=P+(A<<23&4294967295|A>>>9),A=S+(E^P^V)+k[13]+681279174&4294967295,S=E+(A<<4&4294967295|A>>>28),A=V+(S^E^P)+k[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^E)+k[3]+3572445317&4294967295,P=V+(A<<16&4294967295|A>>>16),A=E+(P^V^S)+k[6]+76029189&4294967295,E=P+(A<<23&4294967295|A>>>9),A=S+(E^P^V)+k[9]+3654602809&4294967295,S=E+(A<<4&4294967295|A>>>28),A=V+(S^E^P)+k[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=P+(V^S^E)+k[15]+530742520&4294967295,P=V+(A<<16&4294967295|A>>>16),A=E+(P^V^S)+k[2]+3299628645&4294967295,E=P+(A<<23&4294967295|A>>>9),A=S+(P^(E|~V))+k[0]+4096336452&4294967295,S=E+(A<<6&4294967295|A>>>26),A=V+(E^(S|~P))+k[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~E))+k[14]+2878612391&4294967295,P=V+(A<<15&4294967295|A>>>17),A=E+(V^(P|~S))+k[5]+4237533241&4294967295,E=P+(A<<21&4294967295|A>>>11),A=S+(P^(E|~V))+k[12]+1700485571&4294967295,S=E+(A<<6&4294967295|A>>>26),A=V+(E^(S|~P))+k[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~E))+k[10]+4293915773&4294967295,P=V+(A<<15&4294967295|A>>>17),A=E+(V^(P|~S))+k[1]+2240044497&4294967295,E=P+(A<<21&4294967295|A>>>11),A=S+(P^(E|~V))+k[8]+1873313359&4294967295,S=E+(A<<6&4294967295|A>>>26),A=V+(E^(S|~P))+k[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~E))+k[6]+2734768916&4294967295,P=V+(A<<15&4294967295|A>>>17),A=E+(V^(P|~S))+k[13]+1309151649&4294967295,E=P+(A<<21&4294967295|A>>>11),A=S+(P^(E|~V))+k[4]+4149444226&4294967295,S=E+(A<<6&4294967295|A>>>26),A=V+(E^(S|~P))+k[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=P+(S^(V|~E))+k[2]+718787259&4294967295,P=V+(A<<15&4294967295|A>>>17),A=E+(V^(P|~S))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+V&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var E=S-this.blockSize,k=this.B,P=this.h,V=0;V<S;){if(P==0)for(;V<=E;)o(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<S;)if(k[P++]=D.charCodeAt(V++),P==this.blockSize){o(this,k),P=0;break}}else for(;V<S;)if(k[P++]=D[V++],P==this.blockSize){o(this,k),P=0;break}}this.h=P,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var E=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=E&255,E/=256;for(this.u(D),D=Array(16),S=E=0;4>S;++S)for(var k=0;32>k;k+=8)D[E++]=this.g[S]>>>k&255;return D};function u(D,S){var E=m;return Object.prototype.hasOwnProperty.call(E,D)?E[D]:E[D]=S(D)}function h(D,S){this.h=S;for(var E=[],k=!0,P=D.length-1;0<=P;P--){var V=D[P]|0;k&&V==S||(E[P]=V,k=!1)}this.g=E}var m={};function y(D){return-128<=D&&128>D?u(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return C;if(0>D)return H(v(-D));for(var S=[],E=1,k=0;D>=E;k++)S[k]=D/E|0,E*=4294967296;return new h(S,0)}function T(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return H(T(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=v(Math.pow(S,8)),k=C,P=0;P<D.length;P+=8){var V=Math.min(8,D.length-P),A=parseInt(D.substring(P,P+V),S);8>V?(V=v(Math.pow(S,V)),k=k.j(V).add(v(A))):(k=k.j(E),k=k.add(v(A)))}return k}var C=y(0),x=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-H(this).m();for(var D=0,S=1,E=0;E<this.g.length;E++){var k=this.i(E);D+=(0<=k?k:4294967296+k)*S,S*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(X(this))return"-"+H(this).toString(D);for(var S=v(Math.pow(D,6)),E=this,k="";;){var P=ce(E,S).g;E=me(E,P.j(S));var V=((0<E.g.length?E.g[0]:E.h)>>>0).toString(D);if(E=P,K(E))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function X(D){return D.h==-1}i.l=function(D){return D=me(this,D),X(D)?-1:K(D)?0:1};function H(D){for(var S=D.g.length,E=[],k=0;k<S;k++)E[k]=~D.g[k];return new h(E,~D.h).add(x)}i.abs=function(){return X(this)?H(this):this},i.add=function(D){for(var S=Math.max(this.g.length,D.g.length),E=[],k=0,P=0;P<=S;P++){var V=k+(this.i(P)&65535)+(D.i(P)&65535),A=(V>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);k=A>>>16,V&=65535,A&=65535,E[P]=A<<16|V}return new h(E,E[E.length-1]&-2147483648?-1:0)};function me(D,S){return D.add(H(S))}i.j=function(D){if(K(this)||K(D))return C;if(X(this))return X(D)?H(this).j(H(D)):H(H(this).j(D));if(X(D))return H(this.j(H(D)));if(0>this.l(z)&&0>D.l(z))return v(this.m()*D.m());for(var S=this.g.length+D.g.length,E=[],k=0;k<2*S;k++)E[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<D.g.length;P++){var V=this.i(k)>>>16,A=this.i(k)&65535,we=D.i(P)>>>16,tt=D.i(P)&65535;E[2*k+2*P]+=A*tt,ue(E,2*k+2*P),E[2*k+2*P+1]+=V*tt,ue(E,2*k+2*P+1),E[2*k+2*P+1]+=A*we,ue(E,2*k+2*P+1),E[2*k+2*P+2]+=V*we,ue(E,2*k+2*P+2)}for(k=0;k<S;k++)E[k]=E[2*k+1]<<16|E[2*k];for(k=S;k<2*S;k++)E[k]=0;return new h(E,0)};function ue(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ge(D,S){this.g=D,this.h=S}function ce(D,S){if(K(S))throw Error("division by zero");if(K(D))return new ge(C,C);if(X(D))return S=ce(H(D),S),new ge(H(S.g),H(S.h));if(X(S))return S=ce(D,H(S)),new ge(H(S.g),S.h);if(30<D.g.length){if(X(D)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var E=x,k=S;0>=k.l(D);)E=Be(E),k=Be(k);var P=Ie(E,1),V=Ie(k,1);for(k=Ie(k,2),E=Ie(E,2);!K(k);){var A=V.add(k);0>=A.l(D)&&(P=P.add(E),V=A),k=Ie(k,1),E=Ie(E,1)}return S=me(D,P.j(S)),new ge(P,S)}for(P=C;0<=D.l(S);){for(E=Math.max(1,Math.floor(D.m()/S.m())),k=Math.ceil(Math.log(E)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=v(E),A=V.j(S);X(A)||0<A.l(D);)E-=k,V=v(E),A=V.j(S);K(V)&&(V=x),P=P.add(V),D=me(D,A)}return new ge(P,D)}i.A=function(D){return ce(this,D).h},i.and=function(D){for(var S=Math.max(this.g.length,D.g.length),E=[],k=0;k<S;k++)E[k]=this.i(k)&D.i(k);return new h(E,this.h&D.h)},i.or=function(D){for(var S=Math.max(this.g.length,D.g.length),E=[],k=0;k<S;k++)E[k]=this.i(k)|D.i(k);return new h(E,this.h|D.h)},i.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),E=[],k=0;k<S;k++)E[k]=this.i(k)^D.i(k);return new h(E,this.h^D.h)};function Be(D){for(var S=D.g.length+1,E=[],k=0;k<S;k++)E[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(E,D.h)}function Ie(D,S){var E=S>>5;S%=32;for(var k=D.g.length-E,P=[],V=0;V<k;V++)P[V]=0<S?D.i(V+E)>>>S|D.i(V+E+1)<<32-S:D.i(V+E);return new h(P,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,mi=h}).apply(typeof mg<"u"?mg:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u_,Ia,c_,Cu,gd,h_,d_,f_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var O=l[w];if(!(O in g))break e;g=g[O]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,w=!1,O={next:function(){if(!w&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,g){return l.call.apply(l.bind,arguments)}function C(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,w),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function x(l,f,g){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:C,x.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function K(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,O,j){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return f.prototype[O].apply(w,J)}}function X(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function H(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const O=l.length||0,j=w.length||0;l.length=O+j;for(let J=0;J<j;J++)l[O+J]=w[J]}else l.push(w)}}class me{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ue(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function ce(l){return ce[" "](l),l}ce[" "]=function(){};var Be=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Ie(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function D(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function S(l){const f={};for(const g in l)f[g]=l[g];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let g,w;for(let O=1;O<arguments.length;O++){w=arguments[O];for(g in w)l[g]=w[g];for(let j=0;j<E.length;j++)g=E[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function P(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function A(){var l=he;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class we{constructor(){this.h=this.g=null}add(f,g){const w=tt.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var tt=new me(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Z=!1,he=new we,ne=()=>{const l=m.Promise.resolve(void 0);je=()=>{l.then(b)}};var b=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){V(g)}var f=tt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function ke(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Be){e:{try{ce(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ke.aa.h.call(this)}}K(ke,le);var Ne={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function $e(l,f,g,w,O){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=O,this.key=++Me,this.da=this.fa=!1}function _t(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ar(l){this.src=l,this.g={},this.h=0}ar.prototype.add=function(l,f,g,w,O){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var J=Or(l,f,w,O);return-1<J?(f=l[J],g||(f.fa=!1)):(f=new $e(f,this.src,j,!!w,O),f.fa=g,l.push(f)),f};function ds(l,f){var g=f.type;if(g in l.g){var w=l.g[g],O=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=O)&&Array.prototype.splice.call(w,O,1),j&&(_t(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Or(l,f,g,w){for(var O=0;O<l.length;++O){var j=l[O];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==w)return O}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),fs={};function Ro(l,f,g,w,O){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Ro(l,f[j],g,w,O);return null}return g=No(g),l&&l[Le]?l.K(f,g,v(w)?!!w.capture:!1,O):Po(l,f,g,!1,w,O)}function Po(l,f,g,w,O,j){if(!f)throw Error("Invalid event type");var J=v(O)?!!O.capture:!!O,Ue=ms(l);if(Ue||(l[Si]=Ue=new ar(l)),g=Ue.add(f,g,w,J,j),g.proxy)return g;if(w=el(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Se||(O=J),O===void 0&&(O=!1),l.addEventListener(f.toString(),w,O);else if(l.attachEvent)l.attachEvent(ur(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function el(){function l(g){return f.call(l.src,l.listener,g)}const f=xo;return l}function ps(l,f,g,w,O){if(Array.isArray(f))for(var j=0;j<f.length;j++)ps(l,f[j],g,w,O);else w=v(w)?!!w.capture:!!w,g=No(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Or(j,g,w,O),-1<g&&(_t(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=ms(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Or(f,g,w,O)),(g=-1<l?f[l]:null)&&lr(g))}function lr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ds(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(ur(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=ms(f))?(ds(g,l),g.h==0&&(g.src=null,f[Si]=null)):_t(l)}}}function ur(l){return l in fs?fs[l]:fs[l]="on"+l}function xo(l,f){if(l.da)l=!0;else{f=new ke(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&lr(l),l=g.call(w,f)}return l}function ms(l){return l=l[Si],l instanceof ar?l:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(l){return typeof l=="function"?l:(l[gs]||(l[gs]=function(f){return l.handleEvent(f)}),l[gs])}function ct(){$.call(this),this.i=new ar(this),this.M=this,this.F=null}K(ct,$),ct.prototype[Le]=!0,ct.prototype.removeEventListener=function(l,f,g,w){ps(this,l,f,g,w)};function ht(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var O=f;f=new le(w,l),k(f,O)}if(O=!0,g)for(var j=g.length-1;0<=j;j--){var J=f.g=g[j];O=cr(J,w,!0,f)&&O}if(J=f.g=l,O=cr(J,w,!0,f)&&O,O=cr(J,w,!1,f)&&O,g)for(j=0;j<g.length;j++)J=f.g=g[j],O=cr(J,w,!1,f)&&O}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)_t(g[w]);delete l.g[f],l.h--}}this.F=null},ct.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},ct.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function cr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,j=0;j<f.length;++j){var J=f[j];if(J&&!J.da&&J.capture==g){var Ue=J.listener,dt=J.ha||J.src;J.fa&&ds(l.i,J),O=Ue.call(dt,w)!==!1&&O}}return O&&!w.defaultPrevented}function Do(l,f,g){if(typeof l=="function")g&&(l=x(l,g));else if(l&&typeof l.handleEvent=="function")l=x(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Lr(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Lr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ai extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(l){$.call(this),this.h=l,this.g={}}K(ki,$);var Vo=[];function bo(l){Ie(l.g,function(f,g){this.g.hasOwnProperty(g)&&lr(f)},l),l.g={}}ki.prototype.N=function(){ki.aa.N.call(this),bo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=m.JSON.stringify,Lo=m.JSON.parse,Mo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ci(){}Ci.prototype.h=null;function ys(l){return l.h||(l.h=l.i())}function _s(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){le.call(this,"d")}K(jn,le);function vs(){le.call(this,"c")}K(vs,le);var zn={},Fo=null;function Ri(){return Fo=Fo||new ct}zn.La="serverreachability";function Uo(l){le.call(this,zn.La,l)}K(Uo,le);function hr(l){const f=Ri();ht(f,new Uo(f))}zn.STAT_EVENT="statevent";function jo(l,f){le.call(this,zn.STAT_EVENT,l),this.stat=f}K(jo,le);function rt(l){const f=Ri();ht(f,new jo(f,l))}zn.Ma="timingevent";function ws(l,f){le.call(this,zn.Ma,l),this.size=f}K(ws,le);function Tn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function xi(l,f,g,w,O,j){l.info(function(){if(l.g)if(j)for(var J="",Ue=j.split("&"),dt=0;dt<Ue.length;dt++){var De=Ue[dt].split("=");if(1<De.length){var vt=De[0];De=De[1];var ot=vt.split("_");J=2<=ot.length&&ot[1]=="type"?J+(vt+"="+De+"&"):J+(vt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+w+") [attempt "+O+"]: "+f+`
`+g+`
`+J})}function Es(l,f,g,w,O,j,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+O+"]: "+f+`
`+g+`
`+j+" "+J})}function In(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+gc(l,g)+(w?" "+w:"")})}function zo(l,f){l.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function gc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var O=w[1];if(Array.isArray(O)&&!(1>O.length)){var j=O[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<O.length;J++)O[J]=""}}}}return Oo(g)}catch{return f}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Ni(){}K(Ni,Ci),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Sn=new Ni;function An(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var Bo={},Is={};function Ss(l,f,g){l.L=1,l.v=zr(tn(f)),l.m=g,l.P=!0,$o(l,null)}function $o(l,f){l.F=Date.now(),He(l),l.A=tn(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),$r(g.i,"t",w),l.C=0,g=l.j.J,l.h=new nl,l.g=wl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Ai(x(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Vo[0]=O.toString()),O=Vo);for(var j=0;j<O.length;j++){var J=Ro(g,O[j],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),hr(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const ot=qt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||ot!=4||f==7||(f==8||0>=dn?hr(3):hr(2)),Di(this);var g=this.g.Z();this.X=g;t:if(rl(this)){var w=Qo(this.g);l="";var O=w.length,j=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Mr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(j&&f==O-1)});w.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,Es(this.i,this.u,this.A,this.l,this.R,ot,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,dt=this.g;if((Ue=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(Ue)){var De=Ue;break t}}De=null}if(g=De)In(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,g);else{this.o=!1,this.s=3,rt(12),cn(this),Mr(this);break e}}if(this.P){g=!0;let rn;for(;!this.J&&this.C<J.length;)if(rn=yc(this,J),rn==Is){ot==4&&(this.s=4,rt(14),g=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Bo){this.s=4,rt(15),In(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else In(this.i,this.l,rn,null),Ho(this,rn);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||J.length!=0||this.h.h||(this.s=1,rt(16),g=!1),this.o=this.o&&g,!g)In(this.i,this.l,J,"[Invalid Chunked Response]"),cn(this),Mr(this);else if(0<J.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Yo(vt),vt.M=!0,rt(11))}}else In(this.i,this.l,J,null),Ho(this,J);ot==4&&cn(this),this.o&&!this.J&&(ot==4?Os(this.j,this):(this.o=!1,He(this)))}else xs(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),cn(this),Mr(this)}}}catch{}finally{}};function rl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?Is:(g=Number(f.substring(g,w)),isNaN(g)?Bo:(w+=1,w+g>f.length?Is:(f=f.slice(w,w+g),l.C=w+g,f)))}An.prototype.cancel=function(){this.J=!0,cn(this)};function He(l){l.S=Date.now()+l.I,il(l,l.I)}function il(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(x(l.ba,l),f)}function Di(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zo(this.i,this.A),this.L!=2&&(hr(),rt(17)),cn(this),this.s=2,Mr(this)):il(this,this.S-l)};function Mr(l){l.j.G==0||l.J||Os(l.j,l)}function cn(l){Di(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,bo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ho(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||zt(g.h,l))){if(!l.K&&zt(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var O=w;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)bs(g),xn(g);else break e;Vs(g),rt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Tn(x(g.Za,g),6e3));if(1>=ol(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else gr(g,11)}else if((l.K||g.g==l)&&bs(g),!ue(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let De=O[f];if(g.T=De[0],De=De[1],g.G==2)if(De[0]=="c"){g.K=De[1],g.ia=De[2];const vt=De[3];vt!=null&&(g.la=vt,g.j.info("VER="+g.la));const ot=De[4];ot!=null&&(g.Aa=ot,g.j.info("SVER="+g.Aa));const dn=De[5];dn!=null&&typeof dn=="number"&&0<dn&&(w=1.5*dn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const rn=l.g;if(rn){const Ui=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var j=w.h;j.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Wo(j,j.h),j.h=null))}if(w.D){const Ms=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ms&&(w.ya=Ms,ze(w.I,w.D,Ms))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var J=l;if(w.qa=vl(w,w.J?w.ia:null,w.W),J.K){al(w.h,J);var Ue=J,dt=w.L;dt&&(Ue.I=dt),Ue.B&&(Di(Ue),He(Ue)),w.g=J}else Fi(w);0<g.i.length&&Wn(g)}else De[0]!="stop"&&De[0]!="close"||gr(g,7);else g.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?gr(g,7):At(g):De[0]!="noop"&&g.l&&g.l.ta(De),g.v=0)}}hr(4)}catch{}}var sl=class{constructor(l,f){this.g=l,this.map=f}};function Vi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ol(l){return l.h?1:l.g?l.g.size:0}function zt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Wo(l,f){l.g?l.g.add(f):l.h=f}function al(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Vi.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ll(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return X(l.i)}function As(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function ks(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function Fr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ks(l),w=As(l),O=w.length,j=0;j<O;j++)f.call(void 0,w[j],g&&g[j],l)}var bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),O=null;if(0<=w){var j=l[g].substring(0,w);O=l[g].substring(w+1)}else j=l[g];f(j,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function dr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof dr){this.h=l.h,Oi(this,l.j),this.o=l.o,this.g=l.g,Ur(this,l.s),this.l=l.l;var f=l.i,g=new Bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),jr(this,g),this.m=l.m}else l&&(f=String(l).match(bi))?(this.h=!1,Oi(this,f[1]||"",!0),this.o=xe(f[2]||""),this.g=xe(f[3]||"",!0),Ur(this,f[4]),this.l=xe(f[5]||"",!0),jr(this,f[6]||"",!0),this.m=xe(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}dr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Br(f,Cs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Br(f,Cs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Br(g,g.charAt(0)=="/"?hl:cl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Br(g,qo)),l.join("")};function tn(l){return new dr(l)}function Oi(l,f,g){l.j=g?xe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ur(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function jr(l,f,g){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(g||(f=Br(f,dl)),l.i=new Bn(f,l.h))}function ze(l,f,g){l.i.set(f,g)}function zr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,ul),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ul(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,qo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function St(l){l.g||(l.g=new Map,l.h=0,l.i&&_c(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Bn.prototype,i.add=function(l,f){St(this),this.i=null,l=hn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function kn(l,f){St(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Cn(l,f){return St(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){St(this),this.g.forEach(function(g,w){g.forEach(function(O){l.call(f,O,w,this)},this)},this)},i.na=function(){St(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const O=l[w];for(let j=0;j<O.length;j++)g.push(f[w])}return g},i.V=function(l){St(this);let f=[];if(typeof l=="string")Cn(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return St(this),this.i=null,l=hn(this,l),Cn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function $r(l,f,g){kn(l,f),0<g.length&&(l.i=null,l.g.set(hn(l,f),X(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const j=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var O=j;J[w]!==""&&(O+="="+encodeURIComponent(String(J[w]))),l.push(O)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(St(l),l.i=null,l.g.forEach(function(g,w){var O=w.toLowerCase();w!=O&&(kn(this,w),$r(this,O,g))},l)),l.j=f}function vc(l,f){const g=new Pi;if(m.Image){const w=new Image;w.onload=z(Wt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=z(Wt,g,"TestLoadImage: error",!1,f,w),w.onabort=z(Wt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=z(Wt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function fl(l,f){const g=new Pi,w=new AbortController,O=setTimeout(()=>{w.abort(),Wt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(O),j.ok?Wt(g,"TestPingServer: ok",!0,f):Wt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Wt(g,"TestPingServer: error",!1,f)})}function Wt(l,f,g,w,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),w(g)}catch{}}function wc(){this.g=new Mo}function pl(l,f,g){const w=g||"";try{Fr(l,function(O,j){let J=O;v(O)&&(J=Oo(O)),f.push(w+j+"="+encodeURIComponent(J))})}catch(O){throw f.push(w+"type="+encodeURIComponent("_badmap")),O}}function fr(l){this.l=l.Ub||null,this.j=l.eb||!1}K(fr,Ci),fr.prototype.g=function(){return new Li(this.l,this.j)},fr.prototype.i=(function(l){return function(){return l}})({});function Li(l,f){ct.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Li,ct),i=Li.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Pn(this),this.readyState==3&&ml(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pr(l){let f="";return Ie(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Hr(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=pr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,f,g))}function Xe(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Xe,ct);var Ec=/^https?$/i,Go=["POST","PUT"];i=Xe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?ys(this.o):ys(Sn),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Mi(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var O in w)g.set(O,w[O]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Go,f,void 0))||w||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of g)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Mi(this,j)}};function Mi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Rs(l),nn(l)}function Rs(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Xe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},i.bb=function(){Ko(this)};function Ko(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)Do(l.Ea,0,l);else if(ht(l,"readystatechange"),qt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=J===0){var O=String(l.D).match(bi)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),w=!Ec.test(O?O.toLowerCase():"")}g=w}if(g)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var j=2<qt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Rs(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ps(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ht(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ps(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lo(f)}};function Qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function xs(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ue(l[w]))continue;var g=P(l[w]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[O]||[];f[O]=j,j.push(g)}D(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Xo(l){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,l),this.cb=Hn("retryDelaySeedMs",1e4,l),this.Wa=Hn("forwardChannelMaxRetries",2,l),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(l&&l.concurrentRequestLimit),this.Da=new wc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Xo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,w){rt(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=vl(this,null,this.W),Wn(this)};function At(l){if(Ns(l),l.G==3){var f=l.U++,g=tn(l.I);if(ze(g,"SID",l.K),ze(g,"RID",f),ze(g,"TYPE","terminate"),mr(l,g),f=new An(l,l.j,f),f.L=2,f.v=zr(tn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=wl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),He(f)}_l(l)}function xn(l){l.g&&(Yo(l),l.g.cancel(),l.g=null)}function Ns(l){xn(l),l.u&&(m.clearTimeout(l.u),l.u=null),bs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Wn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;je||ne(),Z||(je(),Z=!0),he.add(f,l),l.B=0}}function Tc(l,f){return ol(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(x(l.Ga,l,f),yl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new An(this,this.j,l);let j=this.o;if(this.S&&(j?(j=S(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(O.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Wr(this,O,f),g=tn(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),mr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(pr(j)))+"&"+f:this.m&&Hr(g,this.m,j)),Wo(this.h,O),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",f),ze(g,"SID","null"),O.T=!0,Ss(O,g,null)):Ss(O,g,f),this.G=2}}else this.G==3&&(l?Ds(this,l):this.i.length==0||en(this.h)||Ds(this))};function Ds(l,f){var g;f?g=f.l:g=l.U++;const w=tn(l.I);ze(w,"SID",l.K),ze(w,"RID",g),ze(w,"AID",l.T),mr(l,w),l.m&&l.o&&Hr(w,l.m,l.o),g=new An(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Wr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Wo(l.h,g),Ss(g,w,f)}function mr(l,f){l.H&&Ie(l.H,function(g,w){ze(f,w,g)}),l.l&&Fr({},function(g,w){ze(f,w,g)})}function Wr(l,f,g){g=Math.min(l.i.length,g);var w=l.l?x(l.l.Na,l.l,l):null;e:{var O=l.i;let j=-1;for(;;){const J=["count="+g];j==-1?0<g?(j=O[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let Ue=!0;for(let dt=0;dt<g;dt++){let De=O[dt].g;const vt=O[dt].map;if(De-=j,0>De)j=Math.max(0,O[dt].g-100),Ue=!1;else try{pl(vt,J,"req"+De+"_")}catch{w&&w(vt)}}if(Ue){w=J.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function Fi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;je||ne(),Z||(je(),Z=!0),he.add(f,l),l.v=0}}function Vs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(x(l.Fa,l),yl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(x(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),xn(this),gl(this))};function Yo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function gl(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),mr(l,f),l.m&&l.o&&Hr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=zr(tn(f)),g.m=null,g.P=!0,$o(g,l)}i.Za=function(){this.C!=null&&(this.C=null,xn(this),Vs(this),rt(19))};function bs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Os(l,f){var g=null;if(l.g==f){bs(l),Yo(l),l.g=null;var w=2}else if(zt(l.h,f))g=f.D,al(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;w=Ri(),ht(w,new ws(w,g)),Wn(l)}else Fi(l);else if(O=f.s,O==3||O==0&&0<f.X||!(w==1&&Tc(l,f)||w==2&&Vs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),O){case 1:gr(l,5);break;case 4:gr(l,10);break;case 3:gr(l,6);break;default:gr(l,2)}}}function yl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function gr(l,f){if(l.j.info("Error code "+f),f==2){var g=x(l.fb,l),w=l.Xa;const O=!w;w=new dr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Oi(w,"https"),zr(w),O?vc(w.toString(),g):fl(w.toString(),g)}else rt(2);l.G=0,l.l&&l.l.sa(f),_l(l),Ns(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function _l(l){if(l.G=0,l.ka=[],l.l){const f=ll(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function vl(l,f,g){var w=g instanceof dr?tn(g):new dr(g);if(w.g!="")f&&(w.g=f+"."+w.g),Ur(w,w.s);else{var O=m.location;w=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var j=new dr(null);w&&Oi(j,w),f&&(j.g=f),O&&Ur(j,O),g&&(j.l=g),w=j}return g=l.D,f=l.ya,g&&f&&ze(w,g,f),ze(w,"VER",l.la),mr(l,w),w}function wl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new fr({eb:g})):new Xe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}i=Jo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ls(){}Ls.prototype.g=function(l,f){return new Bt(l,f)};function Bt(l,f){ct.call(this),this.g=new Xo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ue(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ue(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}K(Bt,ct),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){At(this.g)},Bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Oo(l),l=g);f.i.push(new sl(f.Ya++,l)),f.G==3&&Wn(f)},Bt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Bt.aa.N.call(this)};function El(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}K(El,jn);function Tl(){vs.call(this),this.status=1}K(Tl,vs);function qn(l){this.g=l}K(qn,Jo),qn.prototype.ua=function(){ht(this.g,"a")},qn.prototype.ta=function(l){ht(this.g,new El(l))},qn.prototype.sa=function(l){ht(this.g,new Tl)},qn.prototype.ra=function(){ht(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,f_=function(){return new Ls},d_=function(){return Ri()},h_=zn,gd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Cu=Ts,tl.COMPLETE="complete",c_=tl,_s.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ia=_s,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,u_=Xe}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const gg="@firebase/firestore",yg="4.8.0";/**
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
 */const os=new Vd("@firebase/firestore");function io(){return os.logLevel}function te(i,...e){if(os.logLevel<=Re.DEBUG){const t=e.map(Wd);os.debug(`Firestore (${So}): ${i}`,...t)}}function Dr(i,...e){if(os.logLevel<=Re.ERROR){const t=e.map(Wd);os.error(`Firestore (${So}): ${i}`,...t)}}function yi(i,...e){if(os.logLevel<=Re.WARN){const t=e.map(Wd);os.warn(`Firestore (${So}): ${i}`,...t)}}function Wd(i){if(typeof i=="string")return i;try{/**
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
 */function ye(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,p_(i,s,t)}function p_(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Dr(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||p_(e,o,s)}function Te(i,e){return i}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class m_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class r1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class i1{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new es;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new es,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new es)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new m_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class s1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class o1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new s1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new _g(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _g(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function l1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function g_(){return new TextEncoder}/**
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
 */class qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=l1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ae(i,e){return i<e?-1:i>e?1:0}function yd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const u=g_(),h=u1(u.encode(vg(i,t)),u.encode(vg(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(i.length,e.length)}function vg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function u1(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ae(i[t],e[t]);return Ae(i.length,e.length)}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const wg="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ae(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):yd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mi.fromString(e.substring(4,e.length-2))}}class Ke extends Yn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const c1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Yn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return c1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wg}static keyField(){return new Pt([wg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ae(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ae(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ke.fromString(e))}static fromName(e){return new de(Ke.fromString(e).popFirst(5))}static empty(){return new de(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ke(e.slice()))}}/**
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
 */function y_(i,e,t){if(!t)throw new ae(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function h1(i,e,t,s){if(e===!0&&s===!0)throw new ae(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Eg(i){if(!de.isDocumentKey(i))throw new ae(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Tg(i){if(de.isDocumentKey(i))throw new ae(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function __(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Gd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye(12329,{type:typeof i})}function ts(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gd(i);throw new ae(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function Qa(i,e){if(!__(i))throw new ae(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ae(q.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ig=-62135596800,Sg=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Sg);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ig)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sg}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ig;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ut("string",Qe._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Qe(0,0))}static max(){return new Ee(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oa=-1;function d1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new _i(o,de.empty(),e)}function f1(i){return new _i(i.readTime,i.key,Oa)}class _i{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _i(Ee.min(),de.empty(),Oa)}static max(){return new _i(Ee.max(),de.empty(),Oa)}}function p1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Ae(i.largestBatchId,e.largestBatchId))}/**
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
 */const m1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ao(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==m1)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((o=>o?B.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((T=>{h[v]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new B(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function y1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class nc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nc.ue=-1;/**
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
 */const Kd=-1;function rc(i){return i==null}function zu(i){return i===0&&1/i==-1/0}function _1(i){return typeof i=="number"&&Number.isInteger(i)&&!zu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const v_="";function v1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ag(e)),e=w1(i.get(t),e);return Ag(e)}function w1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case v_:t+="";break;default:t+=u}}return t}function Ag(i){return i+v_+""}/**
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
 */function kg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ls(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function w_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _u(this.root,e,this.comparator,!1)}getReverseIterator(){return new _u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _u(this.root,e,this.comparator,!0)}}class _u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new yt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class E_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new E_("Invalid base64 string: "+u):u}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const E1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=E1.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(i.seconds),nanos:st(i.nanos)}}function st(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function wi(i){return typeof i=="string"?xt.fromBase64String(i):xt.fromUint8Array(i)}/**
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
 */const T_="server_timestamp",I_="__type__",S_="__previous_value__",A_="__local_write_time__";function Qd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[I_])===null||t===void 0?void 0:t.stringValue)===T_}function ic(i){const e=i.mapValue.fields[S_];return Qd(e)?ic(e):e}function La(i){const e=vi(i.mapValue.fields[A_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class T1{constructor(e,t,s,o,u,h,m,y,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=T}}const Bu="(default)";class Ma{constructor(e,t){this.projectId=e,this.database=t||Bu}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===Bu}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const k_="__type__",I1="__max__",vu={mapValue:{}},C_="__vector__",$u="value";function Ei(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Qd(i)?4:A1(i)?9007199254740991:S1(i)?10:11:ye(28295,{value:i})}function sr(i,e){if(i===e)return!0;const t=Ei(i);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vi(o.timestampValue),m=vi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return wi(o.bytesValue).isEqual(wi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return st(o.geoPointValue.latitude)===st(u.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return st(o.integerValue)===st(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=st(o.doubleValue),m=st(u.doubleValue);return h===m?zu(h)===zu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(kg(h)!==kg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!sr(h[y],m[y])))return!1;return!0})(i,e);default:return ye(52216,{left:i})}}function Fa(i,e){return(i.values||[]).find((t=>sr(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ei(i),s=Ei(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=st(u.integerValue||u.doubleValue),y=st(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Rg(i.timestampValue,e.timestampValue);case 4:return Rg(La(i),La(e));case 5:return yd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=wi(u),y=wi(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const T=Ae(m[v],y[v]);if(T!==0)return T}return Ae(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ae(st(u.latitude),st(h.latitude));return m!==0?m:Ae(st(u.longitude),st(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Pg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,y,v,T;const C=u.fields||{},x=h.fields||{},z=(m=C[$u])===null||m===void 0?void 0:m.arrayValue,K=(y=x[$u])===null||y===void 0?void 0:y.arrayValue,X=Ae(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((T=K==null?void 0:K.values)===null||T===void 0?void 0:T.length)||0);return X!==0?X:Pg(z,K)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},T=Object.keys(v);y.sort(),T.sort();for(let C=0;C<y.length&&C<T.length;++C){const x=yd(y[C],T[C]);if(x!==0)return x;const z=yo(m[y[C]],v[T[C]]);if(z!==0)return z}return Ae(y.length,T.length)})(i.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function Rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ae(i,e);const t=vi(i),s=vi(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Pg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return Ae(t.length,s.length)}function _o(i){return _d(i)}function _d(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=vi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return wi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=_d(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${_d(t.fields[h])}`;return o+"}"})(i.mapValue):ye(61005,{value:i})}function Ru(i){switch(Ei(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(i);return e?16+Ru(e):16;case 5:return 2*i.stringValue.length;case 6:return wi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Ru(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ls(s.fields,((u,h)=>{o+=u.length+Ru(h)})),o})(i.mapValue);default:throw ye(13486,{value:i})}}function vd(i){return!!i&&"integerValue"in i}function Xd(i){return!!i&&"arrayValue"in i}function xg(i){return!!i&&"nullValue"in i}function Ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Pu(i){return!!i&&"mapValue"in i}function S1(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[k_])===null||t===void 0?void 0:t.stringValue)===C_}function Pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ls(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function A1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===I1}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ls(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new wn(Pa(this.value))}}function R_(i){const e=[];return ls(i.fields,((t,s)=>{const o=new Pt([t]);if(Pu(s)){const u=R_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Fn(e)}/**
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
 */class Ut{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ut(e,0,Ee.min(),Ee.min(),Ee.min(),wn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ee.min(),Ee.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ee.min(),Ee.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function Dg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!sr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function k1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class P_{}class mt extends P_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new R1(e,t,s):t==="array-contains"?new N1(e,s):t==="in"?new D1(e,s):t==="not-in"?new V1(e,s):t==="array-contains-any"?new b1(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new P1(e,s):new x1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends P_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new or(e,t)}matches(e){return x_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function x_(i){return i.op==="and"}function N_(i){return C1(i)&&x_(i)}function C1(i){for(const e of i.filters)if(e instanceof or)return!1;return!0}function wd(i){if(i instanceof mt)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(N_(i))return i.filters.map((e=>wd(e))).join(",");{const e=i.filters.map((t=>wd(t))).join(",");return`${i.op}(${e})`}}function D_(i,e){return i instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(i,e):i instanceof or?(function(s,o){return o instanceof or&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&D_(h,o.filters[m])),!0):!1})(i,e):void ye(19439)}function V_(i){return i instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof or?(function(t){return t.op.toString()+" {"+t.getFilters().map(V_).join(" ,")+"}"})(i):"Filter"}class R1 extends mt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class P1 extends mt{constructor(e,t){super(e,"in",t),this.keys=b_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class x1 extends mt{constructor(e,t){super(e,"not-in",t),this.keys=b_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function b_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class N1 extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xd(t)&&Fa(t.arrayValue,this.value)}}class D1 extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fa(this.value.arrayValue,t)}}class V1 extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fa(this.value.arrayValue,t)}}class b1 extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Fa(this.value.arrayValue,s)))}}/**
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
 */class O1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function bg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new O1(i,e,t,s,o,u,h)}function Yd(i){const e=Te(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>wd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Pe=t}return e.Pe}function Jd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!k1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!D_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Vg(i.startAt,e.startAt)&&Vg(i.endAt,e.endAt)}function Ed(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class sc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function L1(i,e,t,s,o,u,h,m){return new sc(i,e,t,s,o,u,h,m)}function Zd(i){return new sc(i)}function Og(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function M1(i){return i.collectionGroup!==null}function xa(i){const e=Te(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Pt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Wu(u,s))})),t.has(Pt.keyField().canonicalString())||e.Te.push(new Wu(Pt.keyField(),s))}return e.Te}function er(i){const e=Te(i);return e.Ie||(e.Ie=F1(e,xa(i))),e.Ie}function F1(i,e){if(i.limitType==="F")return bg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Wu(o.field,u)}));const t=i.endAt?new Hu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Hu(i.startAt.position,i.startAt.inclusive):null;return bg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Td(i,e,t){return new sc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function oc(i,e){return Jd(er(i),er(e))&&i.limitType===e.limitType}function O_(i){return`${Yd(er(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>V_(o))).join(", ")}]`),rc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(er(i))}; limitType=${i.limitType})`}function ac(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of xa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Dg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,xa(s),o)||s.endAt&&!(function(h,m,y){const v=Dg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,xa(s),o))})(i,e)}function U1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function L_(i){return(e,t)=>{let s=!1;for(const o of xa(i)){const u=j1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function j1(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?yo(y,v):ye(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:i.dir})}}/**
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
 */class us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
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
 */const z1=new et(de.comparator);function Vr(){return z1}const M_=new et(de.comparator);function Sa(...i){let e=M_;for(const t of i)e=e.insert(t.key,t);return e}function F_(i){let e=M_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Zi(){return Na()}function U_(){return Na()}function Na(){return new us((i=>i.toString()),((i,e)=>i.isEqual(e)))}const B1=new et(de.comparator),$1=new yt(de.comparator);function Pe(...i){let e=$1;for(const t of i)e=e.add(t);return e}const H1=new yt(Ae);function W1(){return H1}/**
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
 */function ef(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function j_(i){return{integerValue:""+i}}function q1(i,e){return _1(e)?j_(e):ef(i,e)}/**
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
 */class lc{constructor(){this._=void 0}}function G1(i,e,t){return i instanceof qu?(function(o,u){const h={fields:{[I_]:{stringValue:T_},[A_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Qd(u)&&(u=ic(u)),u&&(h.fields[S_]=u),{mapValue:h}})(t,e):i instanceof Ua?B_(i,e):i instanceof ja?$_(i,e):(function(o,u){const h=z_(o,u),m=Lg(h)+Lg(o.Ee);return vd(h)&&vd(o.Ee)?j_(m):ef(o.serializer,m)})(i,e)}function K1(i,e,t){return i instanceof Ua?B_(i,e):i instanceof ja?$_(i,e):t}function z_(i,e){return i instanceof Gu?(function(s){return vd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class qu extends lc{}class Ua extends lc{constructor(e){super(),this.elements=e}}function B_(i,e){const t=H_(e);for(const s of i.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ja extends lc{constructor(e){super(),this.elements=e}}function $_(i,e){let t=H_(e);for(const s of i.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class Gu extends lc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Lg(i){return st(i.integerValue||i.doubleValue)}function H_(i){return Xd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Q1(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ua&&o instanceof Ua||s instanceof ja&&o instanceof ja?go(s.elements,o.elements,sr):s instanceof Gu&&o instanceof Gu?sr(s.Ee,o.Ee):s instanceof qu&&o instanceof qu})(i.transform,e.transform)}class X1{constructor(e,t){this.version=e,this.transformResults=t}}class tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class uc{}function W_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new tf(i.key,tr.none()):new Xa(i.key,i.data,tr.none());{const t=i.data,s=wn.empty();let o=new yt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new cs(i.key,s,new Fn(o.toArray()),tr.none())}}function Y1(i,e,t){i instanceof Xa?(function(o,u,h){const m=o.value.clone(),y=Fg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof cs?(function(o,u,h){if(!xu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Fg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(q_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Da(i,e,t,s){return i instanceof Xa?(function(u,h,m,y){if(!xu(u.precondition,h))return m;const v=u.value.clone(),T=Ug(u.fieldTransforms,y,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof cs?(function(u,h,m,y){if(!xu(u.precondition,h))return m;const v=Ug(u.fieldTransforms,y,h),T=h.data;return T.setAll(q_(u)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((C=>C.field)))})(i,e,t,s):(function(u,h,m){return xu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function J1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=z_(s.transform,o||null);u!=null&&(t===null&&(t=wn.empty()),t.set(s.field,u))}return t||null}function Mg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>Q1(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Xa extends uc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class cs extends uc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function q_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Fg(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,K1(h,m,t[o]))}return s}function Ug(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,G1(u,h,e))}return s}class tf extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z1 extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Y1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=U_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=W_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>Mg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>Mg(t,s)))}}class nf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return B1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new nf(e,t,s,o)}}/**
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
 */class tS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Ve;function rS(i){switch(i){case q.OK:return ye(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ye(15467,{code:i})}}function G_(i){if(i===void 0)return Dr("GRPC error has no .code"),q.UNKNOWN;switch(i){case lt.OK:return q.OK;case lt.CANCELLED:return q.CANCELLED;case lt.UNKNOWN:return q.UNKNOWN;case lt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case lt.INTERNAL:return q.INTERNAL;case lt.UNAVAILABLE:return q.UNAVAILABLE;case lt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case lt.NOT_FOUND:return q.NOT_FOUND;case lt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case lt.ABORTED:return q.ABORTED;case lt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case lt.DATA_LOSS:return q.DATA_LOSS;default:return ye(39323,{code:i})}}(Ve=lt||(lt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const iS=new mi([4294967295,4294967295],0);function jg(i){const e=g_().encode(i),t=new l_;return t.update(e),new Uint8Array(t.digest())}function zg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new mi([t,s],0),new mi([o,u],0)]}class rf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Aa(`Invalid padding: ${t}`);if(s<0)throw new Aa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=mi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(mi.fromNumber(s)));return o.compare(iS)===1&&(o=new mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=jg(e),[s,o]=zg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new rf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=jg(e),[s,o]=zg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new cc(Ee.min(),o,new et(Ae),Vr(),Pe())}}class Ya{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,Pe(),Pe(),Pe())}}/**
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
 */class Nu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class K_{constructor(e,t){this.targetId=e,this.De=t}}class Q_{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Bg{constructor(){this.ve=0,this.Ce=$g(),this.Fe=xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}})),new Ya(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=$g()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class sS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Vr(),this.je=wu(),this.Je=wu(),this.He=new et(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Ed(u))if(s===0){const h=new de(u.path);this.Xe(t,h,Ut.newNoDocument(h,Ee.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),y=m?this.ut(m,e,h):1;if(y!==0){this.rt(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=wi(s).toUint8Array()}catch(y){if(y instanceof E_)return yi("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new rf(h,o,u)}catch(y){return yi(y instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Ed(m.target)){const y=new de(m.target.path);this.Tt(y).has(h)||this.It(h,y)||this.Xe(h,y,Ut.newNoDocument(y,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Pe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.st(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new cc(e,t,this.He,this.ze,s);return this.ze=Vr(),this.je=wu(),this.Je=wu(),this.He=new et(Ae),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Bg,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Bg),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function wu(){return new et(de.comparator)}function $g(){return new et(de.comparator)}const oS={asc:"ASCENDING",desc:"DESCENDING"},aS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lS={and:"AND",or:"OR"};class uS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Id(i,e){return i.useProto3Json||rc(e)?e:{value:e}}function Ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function cS(i,e){return Ku(i,e.toTimestamp())}function nr(i){return Fe(!!i,49232),Ee.fromTimestamp((function(t){const s=vi(t);return new Qe(s.seconds,s.nanos)})(i))}function sf(i,e){return Sd(i,e).canonicalString()}function Sd(i,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Y_(i){const e=Ke.fromString(i);return Fe(nv(e),10190,{key:e.toString()}),e}function Ad(i,e){return sf(i.databaseId,e.path)}function nd(i,e){const t=Y_(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(Z_(t))}function J_(i,e){return sf(i.databaseId,e)}function hS(i){const e=Y_(i);return e.length===4?Ke.emptyPath():Z_(e)}function kd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Z_(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Hg(i,e,t){return{name:Ad(i,e),fields:t.value.mapValue.fields}}function dS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ye(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,T){return v.useProto3Json?(Fe(T===void 0||typeof T=="string",58123),xt.fromBase64String(T||"")):(Fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),xt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const T=v.code===void 0?q.UNKNOWN:G_(v.code);return new ae(T,v.message||"")})(h);t=new Q_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=nd(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Ee.min(),m=new wn({mapValue:{fields:s.document.fields}}),y=Ut.newFoundDocument(o,u,h,m),v=s.targetIds||[],T=s.removedTargetIds||[];t=new Nu(v,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=nd(i,s.document),u=s.readTime?nr(s.readTime):Ee.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=nd(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new nS(o,u),m=s.targetId;t=new K_(m,h)}}return t}function fS(i,e){let t;if(e instanceof Xa)t={update:Hg(i,e.key,e.value)};else if(e instanceof tf)t={delete:Ad(i,e.key)};else if(e instanceof cs)t={update:Hg(i,e.key,e.data),updateMask:TS(e.fieldMask)};else{if(!(e instanceof Z1))return ye(16599,{Rt:e.type});t={verify:Ad(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Gu)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:cS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)})(i,e.precondition)),t}function pS(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Ee.min())&&(h=nr(u)),new X1(h,o.transformResults||[])})(t,e)))):[]}function mS(i,e){return{documents:[J_(i,e.path)]}}function gS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=J_(i,o);const u=(function(v){if(v.length!==0)return tv(or.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((T=>(function(x){return{field:oo(x.field),direction:vS(x.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Id(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function yS(i){let e=hS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(C){const x=ev(C);return x instanceof or&&N_(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(C){return C.map((x=>(function(K){return new Wu(ao(K.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(C){let x;return x=typeof C=="object"?C.value:C,rc(x)?null:x})(t.limit));let y=null;t.startAt&&(y=(function(C){const x=!!C.before,z=C.values||[];return new Hu(z,x)})(t.startAt));let v=null;return t.endAt&&(v=(function(C){const x=!C.before,z=C.values||[];return new Hu(z,x)})(t.endAt)),L1(e,o,h,u,m,"F",y,v)}function _S(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ev(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(i):i.fieldFilter!==void 0?(function(t){return mt.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return or.create(t.compositeFilter.filters.map((s=>ev(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(i):ye(30097,{filter:i})}function vS(i){return oS[i]}function wS(i){return aS[i]}function ES(i){return lS[i]}function oo(i){return{fieldPath:i.canonicalString()}}function ao(i){return Pt.fromServerFormat(i.fieldPath)}function tv(i){return i instanceof mt?(function(t){if(t.op==="=="){if(Ng(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(xg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ng(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(xg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:wS(t.op),value:t.value}}})(i):i instanceof or?(function(t){const s=t.getFilters().map((o=>tv(o)));return s.length===1?s[0]:{compositeFilter:{op:ES(t.op),filters:s}}})(i):ye(54877,{filter:i})}function TS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class hi{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=xt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class IS{constructor(e){this.gt=e}}function SS(i){const e=yS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Td(e,e.limit,"L"):e}/**
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
 */class AS{constructor(){this.Dn=new kS}addToCollectionParentIndex(e,t){return this.Dn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(_i.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class kS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ke.comparator)).toArray()}}/**
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
 */const Wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rv=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(rv,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class vo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new vo(0)}static ur(){return new vo(-1)}}/**
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
 */const qg="LruGarbageCollector",CS=1048576;function Gg([i,e],[t,s]){const o=Ae(i,t);return o===0?Ae(e,s):o}class RS{constructor(e){this.Tr=e,this.buffer=new yt(Gg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){te(qg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?te(qg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Rr(3e5)}))}}class xS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(nc.ue);const s=new RS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Wg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,y,v;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o)))).next((C=>(s=C,m=Date.now(),this.removeTargets(e,s,t)))).next((C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(v=Date.now(),io()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-T}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C}))))}}function NS(i,e){return new xS(i,e)}/**
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
 */class DS{constructor(){this.changes=new us((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class bS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Da(s.mutation,o,Fn.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Zi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Sa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Zi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Vr();const h=Na(),m=(function(){return Na()})();return t.forEach(((y,v)=>{const T=s.get(v.key);o.has(v.key)&&(T===void 0||T.mutation instanceof cs)?u=u.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Da(T.mutation,v,T.mutation.getFieldMask(),Qe.now())):h.set(v.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>{var C;return m.set(v,new VS(T,(C=h.get(v))!==null&&C!==void 0?C:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new et(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let T=s.get(y)||Fn.empty();T=m.applyToLocalView(v,T),s.set(y,T);const C=(o.get(m.batchId)||Pe()).add(y);o=o.insert(m.batchId,C)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,T=y.value,C=U_();T.forEach((x=>{if(!u.has(x)){const z=W_(t.get(x),s.get(x));z!==null&&C.set(x,z),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):M1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(Zi());let m=Oa,y=u;return h.next((v=>B.forEach(v,((T,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(T)?B.resolve():this.remoteDocumentCache.getEntry(e,T).next((x=>{y=y.insert(T,x)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Pe()))).next((T=>({batchId:m,changes:F_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Sa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Sa();return this.indexManager.getCollectionParents(e,u).next((m=>B.forEach(m,(y=>{const v=(function(C,x){return new sc(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((T=>{T.forEach(((C,x)=>{h=h.insert(C,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Ut.newInvalidDocument(T)))}));let m=Sa();return h.forEach(((y,v)=>{const T=u.get(y);T!==void 0&&Da(T.mutation,v,Fn.empty(),Qe.now()),ac(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class OS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return B.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:SS(o.bundledQuery),readTime:nr(o.readTime)}})(t)),B.resolve()}}/**
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
 */class LS{constructor(){this.overlays=new et(de.comparator),this.kr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Zi();return B.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=Zi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let T=u.get(v.largestBatchId);T===null&&(T=Zi(),u=u.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const m=Zi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,T)=>m.set(v,T))),!(m.size()>=o)););return B.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new tS(t,s));let u=this.kr.get(t);u===void 0&&(u=Pe(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class MS{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class of{constructor(){this.qr=new yt(It.Qr),this.$r=new yt(It.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new It(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new de(new Ke([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new Ke([])),s=new It(t,e),o=new It(t,e+1);let u=Pe();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new It(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
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
 */class FS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(It.Qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new eS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Kd:this.er-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ae);return t.forEach((o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),B.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new It(new de(u),0);let m=new yt(Ae);return this.Yr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Hr)),!0)}),h),B.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return B.forEach(t.mutations,(o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new It(t,0),o=this.Yr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class US{constructor(e){this.ni=e,this.docs=(function(){return new et(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Vr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Vr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:T}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||p1(f1(T),s)<=0||(o.has(T.key)||ac(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ri(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new jS(this)}getSize(e){return B.resolve(this.size)}}class jS extends DS{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class zS{constructor(e){this.persistence=e,this.ii=new us((t=>Yd(t)),Jd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new of,this.targetCount=0,this._i=vo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),B.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.hr(t),B.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),B.waitFor(u).next((()=>o))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.oi.containsKey(t))}}/**
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
 */class iv{constructor(e,t){this.ai={},this.overlays={},this.ui=new nc(0),this.ci=!1,this.ci=!0,this.li=new MS,this.referenceDelegate=e(this),this.hi=new zS(this),this.indexManager=new AS,this.remoteDocumentCache=(function(o){return new US(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new IS(t),this.Ti=new OS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new LS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new FS(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new BS(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return B.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class BS extends g1{constructor(e){super(),this.currentSequenceNumber=e}}class af{constructor(e){this.persistence=e,this.Ai=new of,this.Ri=null}static Vi(e){return new af(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,(s=>{const o=de.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return B.or([()=>B.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qu{constructor(e,t){this.persistence=e,this.gi=new us((s=>v1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=NS(this,t)}static Vi(e,t){return new Qu(e,t)}Ii(){}di(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return B.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?B.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),B.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}Sr(e,t,s){return B.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new lf(e,t.fromCache,s,o)}}/**
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
 */class $S{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class HS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ow()?8:y1(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new $S;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(io()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(io()<=Re.DEBUG&&te("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(io()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):B.resolve())}ps(e,t){if(Og(t))return B.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Td(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.bs(t,m);return this.Ds(t,v,h,y.readTime)?this.ps(e,Td(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ys(e,t,s,o){return Og(t)||o.isEqual(Ee.min())?B.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?B.resolve(null):(io()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.vs(e,h,t,d1(o,Oa)).next((m=>m)))}))}bs(e,t){let s=new yt(L_(e));return t.forEach(((o,u)=>{ac(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return io()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",so(t)),this.gs.getDocumentsMatchingQuery(e,t,_i.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const uf="LocalStore",WS=3e8;class qS{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ae),this.Ms=new us((u=>Yd(u)),Jd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function GS(i,e,t,s){return new qS(i,e,t,s)}async function sv(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Pe();for(const v of o){h.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}for(const v of u){m.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function KS(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,T){const C=v.batch,x=C.keys();let z=B.resolve();return x.forEach((K=>{z=z.next((()=>T.getEntry(y,K))).next((X=>{const H=v.docVersions.get(K);Fe(H!==null,48541),X.version.compareTo(H)<0&&(C.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),T.addEntry(X)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,C)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function ov(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function QS(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((T,C)=>{const x=o.get(C);if(!x)return;m.push(t.hi.removeMatchingKeys(u,T.removedDocuments,C).next((()=>t.hi.addMatchingKeys(u,T.addedDocuments,C))));let z=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?z=z.withResumeToken(xt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,s)),o=o.insert(C,z),(function(X,H,me){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=WS?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(x,z,T)&&m.push(t.hi.updateTargetData(u,z))}));let y=Vr(),v=Pe();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(XS(u,h,e.documentUpdates).next((T=>{y=T.Ls,v=T.ks}))),!s.isEqual(Ee.min())){const T=t.hi.getLastRemoteSnapshotVersion(u).next((C=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return B.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Fs=o,u)))}function XS(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Vr();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ee.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(uf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Ls:h,ks:o}}))}function YS(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Kd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function JS(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,B.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new hi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Cd(i,e,t){const s=Te(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;te(uf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Kg(i,e,t){const s=Te(i);let o=Ee.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,T){const C=Te(y),x=C.Ms.get(T);return x!==void 0?B.resolve(C.Fs.get(x)):C.hi.getTargetData(v,T)})(s,h,er(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Pe()))).next((m=>(ZS(s,U1(e),m),{documents:m,qs:u})))))}function ZS(i,e,t){let s=i.xs.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class Qg{constructor(){this.activeTargetIds=W1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eA{constructor(){this.Fo=new Qg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Qg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tA{xo(e){}shutdown(){}}/**
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
 */const Xg="ConnectivityMonitor";class Yg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){te(Xg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){te(Xg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eu=null;function Rd(){return Eu===null?Eu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Eu++,"0x"+Eu.toString(16)}/**
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
 */const rd="RestConnection",nA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Bu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Rd(),m=this.Go(e,t.toUriEncodedString());te(rd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,o,u);const{host:v}=new URL(m),T=Eo(v);return this.jo(e,m,y,s,T).then((C=>(te(rd,`Received RPC '${e}' ${h}: `,C),C)),(C=>{throw yi(rd,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=nA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class iA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Lt="WebChannelConnection";class sA extends rA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Rd();return new Promise(((m,y)=>{const v=new u_;v.setWithCredentials(!0),v.listenOnce(c_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Cu.NO_ERROR:const C=v.getResponseJson();te(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case Cu.TIMEOUT:te(Lt,`RPC '${e}' ${h} timed out`),y(new ae(q.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const x=v.getStatus();if(te(Lt,`RPC '${e}' ${h} failed with status:`,x,"response text:",v.getResponseText()),x>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const K=z==null?void 0:z.error;if(K&&K.status&&K.message){const X=(function(me){const ue=me.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ue)>=0?ue:q.UNKNOWN})(K.status);y(new ae(X,K.message))}else y(new ae(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new ae(q.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{te(Lt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);te(Lt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",T,s,15)}))}P_(e,t,s){const o=Rd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=f_(),m=d_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const T=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${T}`,y);const C=h.createWebChannel(T,y);this.T_(C);let x=!1,z=!1;const K=new iA({Ho:H=>{z?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(x||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),x=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,H),C.send(H))},Yo:()=>C.close()}),X=(H,me,ue)=>{H.listen(me,(ge=>{try{ue(ge)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return X(C,Ia.EventType.OPEN,(()=>{z||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),K.s_())})),X(C,Ia.EventType.CLOSE,(()=>{z||(z=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),K.__(),this.I_(C))})),X(C,Ia.EventType.ERROR,(H=>{z||(z=!0,yi(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),K.__(new ae(q.UNAVAILABLE,"The operation could not be completed")))})),X(C,Ia.EventType.MESSAGE,(H=>{var me;if(!z){const ue=H.data[0];Fe(!!ue,16349);const ge=ue,ce=(ge==null?void 0:ge.error)||((me=ge[0])===null||me===void 0?void 0:me.error);if(ce){te(Lt,`RPC '${e}' stream ${o} received error:`,ce);const Be=ce.status;let Ie=(function(E){const k=lt[E];if(k!==void 0)return G_(k)})(Be),D=ce.message;Ie===void 0&&(Ie=q.INTERNAL,D="Unknown error status: "+Be+" with message "+ce.message),z=!0,K.__(new ae(Ie,D)),C.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,ue),K.a_(ue)}})),X(m,h_.STAT_EVENT,(H=>{H.stat===gd.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===gd.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.o_()}),0),K}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function id(){return typeof document<"u"?document:null}/**
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
 */function hc(i){return new uS(i,!0)}/**
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
 */class av{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Jg="PersistentStream";class lv{constructor(e,t,s,o,u,h,m,y){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new av(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Dr(t.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ae(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return te(Jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(te(Jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oA extends lv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=dS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?nr(h.readTime):Ee.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=kd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Ed(y)?{documents:mS(u,y)}:{query:gS(u,y).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=X_(u,h.resumeToken);const v=Id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Ku(u,h.snapshotVersion.toTimestamp());const v=Id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=_S(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=kd(this.serializer),t.removeTarget=e,this.k_(t)}}class aA extends lv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=pS(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=kd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>fS(this.serializer,s)))};this.k_(t)}}/**
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
 */class lA{}class uA extends lA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Sd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(q.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Sd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class cA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dr(t),this._a=!1):te("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const as="RemoteStore";class hA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{hs(this)&&(te(as,"Restarting streams for network reachability change."),await(async function(y){const v=Te(y);v.Ia.add(4),await Ja(v),v.Aa.set("Unknown"),v.Ia.delete(4),await dc(v)})(this))}))})),this.Aa=new cA(s,o)}}async function dc(i){if(hs(i))for(const e of i.da)await e(!0)}async function Ja(i){for(const e of i.da)await e(!1)}function uv(i,e){const t=Te(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ff(t)?df(t):Co(t).x_()&&hf(t,e))}function cf(i,e){const t=Te(i),s=Co(t);t.Ta.delete(e),s.x_()&&cv(t,e),t.Ta.size===0&&(s.x_()?s.B_():hs(t)&&t.Aa.set("Unknown"))}function hf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).H_(e)}function cv(i,e){i.Ra.$e(e),Co(i).Y_(e)}function df(i){i.Ra=new sS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Aa.aa()}function ff(i){return hs(i)&&!Co(i).M_()&&i.Ta.size>0}function hs(i){return Te(i).Ia.size===0}function hv(i){i.Ra=void 0}async function dA(i){i.Aa.set("Online")}async function fA(i){i.Ta.forEach(((e,t)=>{hf(i,e)}))}async function pA(i,e){hv(i),ff(i)?(i.Aa.la(e),df(i)):i.Aa.set("Unknown")}async function mA(i,e,t){if(i.Aa.set("Online"),e instanceof Q_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){te(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xu(i,s)}else if(e instanceof Nu?i.Ra.Ye(e):e instanceof K_?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ee.min()))try{const s=await ov(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ta.get(v);T&&u.Ta.set(v,T.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const T=u.Ta.get(y);if(!T)return;u.Ta.set(y,T.withResumeToken(xt.EMPTY_BYTE_STRING,T.snapshotVersion)),cv(u,y);const C=new hi(T.target,y,v,T.sequenceNumber);hf(u,C)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){te(as,"Failed to raise snapshot:",s),await Xu(i,s)}}async function Xu(i,e,t){if(!ko(e))throw e;i.Ia.add(1),await Ja(i),i.Aa.set("Offline"),t||(t=()=>ov(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(as,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await dc(i)}))}function dv(i,e){return e().catch((t=>Xu(i,t,e)))}async function fc(i){const e=Te(i),t=Ti(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Kd;for(;gA(e);)try{const o=await YS(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,yA(e,o)}catch(o){await Xu(e,o)}fv(e)&&pv(e)}function gA(i){return hs(i)&&i.Pa.length<10}function yA(i,e){i.Pa.push(e);const t=Ti(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function fv(i){return hs(i)&&!Ti(i).M_()&&i.Pa.length>0}function pv(i){Ti(i).start()}async function _A(i){Ti(i).na()}async function vA(i){const e=Ti(i);for(const t of i.Pa)e.X_(t.mutations)}async function wA(i,e,t){const s=i.Pa.shift(),o=nf.from(s,e,t);await dv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await fc(i)}async function EA(i,e){e&&Ti(i).Z_&&await(async function(s,o){if((function(h){return rS(h)&&h!==q.ABORTED})(o.code)){const u=s.Pa.shift();Ti(s).N_(),await dv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await fc(s)}})(i,e),fv(i)&&pv(i)}async function Zg(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),te(as,"RemoteStore received new credentials");const s=hs(t);t.Ia.add(3),await Ja(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await dc(t)}async function TA(i,e){const t=Te(i);e?(t.Ia.delete(2),await dc(t)):e||(t.Ia.add(2),await Ja(t),t.Aa.set("Unknown"))}function Co(i){return i.Va||(i.Va=(function(t,s,o){const u=Te(t);return u.ia(),new oA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:dA.bind(null,i),e_:fA.bind(null,i),n_:pA.bind(null,i),J_:mA.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),ff(i)?df(i):i.Aa.set("Unknown")):(await i.Va.stop(),hv(i))}))),i.Va}function Ti(i){return i.ma||(i.ma=(function(t,s,o){const u=Te(t);return u.ia(),new aA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:_A.bind(null,i),n_:EA.bind(null,i),ea:vA.bind(null,i),ta:wA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await fc(i)):(await i.ma.stop(),i.Pa.length>0&&(te(as,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
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
 */class pf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new pf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mf(i,e){if(Dr("AsyncQueue",`${e}: ${i}`),ko(i))return new ae(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class fo{static emptySet(e){return new fo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Sa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ey{constructor(){this.fa=new et(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class wo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new wo(e,t,fo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class IA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class SA{constructor(){this.queries=ty(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=ty(),u.forEach(((h,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new ae(q.ABORTED,"Firestore shutting down"))}}function ty(){return new us((i=>O_(i)),oc)}async function AA(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new IA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=mf(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&gf(t)}async function kA(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function CA(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&gf(t)}function RA(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function gf(i){i.Da.forEach((e=>{e.next()}))}var Pd,ny;(ny=Pd||(Pd={})).Fa="default",ny.Cache="cache";class PA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Pd.Cache}}/**
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
 */class mv{constructor(e){this.key=e}}class gv{constructor(e){this.key=e}}class xA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=L_(e),this.eu=new fo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ey,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,C)=>{const x=o.get(T),z=ac(this.query,C)?C:null,K=!!x&&this.mutatedKeys.has(x.key),X=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;x&&z?x.data.isEqual(z.data)?K!==X&&(s.track({type:3,doc:z}),H=!0):this.iu(x,z)||(s.track({type:2,doc:z}),H=!0,(y&&this.Xa(z,y)>0||v&&this.Xa(z,v)<0)&&(m=!0)):!x&&z?(s.track({type:0,doc:z}),H=!0):x&&!z&&(s.track({type:1,doc:x}),H=!0,(y||v)&&(m=!0)),H&&(z?(h=h.add(z),u=X?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((T,C)=>(function(z,K){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:H})}};return X(z)-X(K)})(T.type,C.type)||this.Xa(T.doc,C.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],y=this.Za.size===0&&this.current&&!o?1:0,v=y!==this.Ya;return this.Ya=y,h.length!==0||v?{snapshot:new wo(this.query,e.eu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ey,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new gv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new mv(s))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return wo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const yf="SyncEngine";class NA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class DA{constructor(e){this.key=e,this.lu=!1}}class VA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new us((m=>O_(m)),oc),this.Tu=new Map,this.Iu=new Set,this.du=new et(de.comparator),this.Eu=new Map,this.Au=new of,this.Ru={},this.Vu=new Map,this.mu=vo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function bA(i,e,t=!0){const s=Tv(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await yv(s,e,t,!0),o}async function OA(i,e){const t=Tv(i);await yv(t,e,!0,!1)}async function yv(i,e,t,s){const o=await JS(i.localStore,er(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await LA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&uv(i.remoteStore,o),m}async function LA(i,e,t,s,o){i.gu=(C,x,z)=>(async function(X,H,me,ue){let ge=H.view.nu(me);ge.Ds&&(ge=await Kg(X.localStore,H.query,!1).then((({documents:D})=>H.view.nu(D,ge))));const ce=ue&&ue.targetChanges.get(H.targetId),Be=ue&&ue.targetMismatches.get(H.targetId)!=null,Ie=H.view.applyChanges(ge,X.isPrimaryClient,ce,Be);return iy(X,H.targetId,Ie._u),Ie.snapshot})(i,C,x,z);const u=await Kg(i.localStore,e,!0),h=new xA(e,u.qs),m=h.nu(u.documents),y=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);iy(i,t,v._u);const T=new NA(e,t,h);return i.Pu.set(e,T),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),v.snapshot}async function MA(i,e,t){const s=Te(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!oc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Cd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&cf(s.remoteStore,o.targetId),xd(s,o.targetId)})).catch(Ao)):(xd(s,o.targetId),await Cd(s.localStore,o.targetId,!0))}async function FA(i,e){const t=Te(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),cf(t.remoteStore,s.targetId))}async function UA(i,e,t){const s=qA(i);try{const o=await(function(h,m){const y=Te(h),v=Qe.now(),T=m.reduce(((z,K)=>z.add(K.key)),Pe());let C,x;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let K=Vr(),X=Pe();return y.Os.getEntries(z,T).next((H=>{K=H,K.forEach(((me,ue)=>{ue.isValidDocument()||(X=X.add(me))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,K))).next((H=>{C=H;const me=[];for(const ue of m){const ge=J1(ue,C.get(ue.key).overlayedDocument);ge!=null&&me.push(new cs(ue.key,ge,R_(ge.value.mapValue),tr.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,me,m)})).next((H=>{x=H;const me=H.applyToLocalDocumentSet(C,X);return y.documentOverlayCache.saveOverlays(z,H.batchId,me)}))})).then((()=>({batchId:x.batchId,changes:F_(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Ru[h.currentUser.toKey()];v||(v=new et(Ae)),v=v.insert(m,y),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await Za(s,o.changes),await fc(s.remoteStore)}catch(o){const u=mf(o,"Failed to persist write");t.reject(u)}}async function _v(i,e){const t=Te(i);try{const s=await QS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await Za(t,s,e)}catch(s){await Ao(s)}}function ry(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Te(h);y.onlineState=m;let v=!1;y.queries.forEach(((T,C)=>{for(const x of C.wa)x.va(m)&&(v=!0)})),v&&gf(y)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jA(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new et(de.comparator);h=h.insert(u,Ut.newNoDocument(u,Ee.min()));const m=Pe().add(u),y=new cc(Ee.min(),new Map,new et(Ae),h,m);await _v(s,y),s.du=s.du.remove(u),s.Eu.delete(e),_f(s)}else await Cd(s.localStore,e,!1).then((()=>xd(s,e,t))).catch(Ao)}async function zA(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await KS(t.localStore,e);wv(t,s,null),vv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await Ao(o)}}async function BA(i,e,t){const s=Te(i);try{const o=await(function(h,m){const y=Te(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return y.mutationQueue.lookupMutationBatch(v,m).next((C=>(Fe(C!==null,37113),T=C.keys(),y.mutationQueue.removeMutationBatch(v,C)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>y.localDocuments.getDocuments(v,T)))}))})(s.localStore,e);wv(s,e,t),vv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await Ao(o)}}function vv(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function wv(i,e,t){const s=Te(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function xd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||Ev(i,s)}))}function Ev(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(cf(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),_f(i))}function iy(i,e,t){for(const s of t)s instanceof mv?(i.Au.addReference(s.key,e),$A(i,s)):s instanceof gv?(te(yf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||Ev(i,s.key)):ye(19791,{yu:s})}function $A(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(te(yf,"New document in limbo: "+t),i.Iu.add(s),_f(i))}function _f(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new de(Ke.fromString(e)),s=i.mu.next();i.Eu.set(s,new DA(t)),i.du=i.du.insert(t,s),uv(i.remoteStore,new hi(er(Zd(t.path)),s,"TargetPurposeLimboResolution",nc.ue))}}async function Za(i,e,t){const s=Te(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{h.push(s.gu(y,e,t).then((v=>{var T;if((v||t)&&s.isPrimaryClient){const C=v?!v.fromCache:(T=t==null?void 0:t.targetChanges.get(y.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,C?"current":"not-current")}if(v){o.push(v);const C=lf.Es(y.targetId,v);u.push(C)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(y,v){const T=Te(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>B.forEach(v,(x=>B.forEach(x.Is,(z=>T.persistence.referenceDelegate.addReference(C,x.targetId,z))).next((()=>B.forEach(x.ds,(z=>T.persistence.referenceDelegate.removeReference(C,x.targetId,z)))))))))}catch(C){if(!ko(C))throw C;te(uf,"Failed to update sequence numbers: "+C)}for(const C of v){const x=C.targetId;if(!C.fromCache){const z=T.Fs.get(x),K=z.snapshotVersion,X=z.withLastLimboFreeSnapshotVersion(K);T.Fs=T.Fs.insert(x,X)}}})(s.localStore,u))}async function HA(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){te(yf,"User change. New user:",e.toKey());const s=await sv(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((y=>{y.reject(new ae(q.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Bs)}}function WA(i,e){const t=Te(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let o=Pe();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Tv(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=_v.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jA.bind(null,e),e.hu.J_=CA.bind(null,e.eventManager),e.hu.pu=RA.bind(null,e.eventManager),e}function qA(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BA.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return GS(this.persistence,new HS,e.initialUser,this.serializer)}Du(e){return new iv(af.Vi,this.serializer)}bu(e){return new eA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class GA extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof Qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new PS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new iv((s=>Qu.Vi(s,t)),this.serializer)}}class Nd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ry(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=HA.bind(null,this.syncEngine),await TA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SA})()}createDatastore(e){const t=hc(e.databaseInfo.databaseId),s=(function(u){return new sA(u)})(e.databaseInfo);return(function(u,h,m,y){return new uA(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new hA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ry(this.syncEngine,t,0)),(function(){return Yg.C()?new Yg:new tA})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,T){const C=new VA(o,u,h,m,y,v);return T&&(C.fu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Te(o);te(as,"RemoteStore shutting down."),u.Ia.add(5),await Ja(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Nd.provider={build:()=>new Nd};/**
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
 */class KA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ii="FirestoreClient";class QA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Ii,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Ii,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=mf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function sd(i,e){i.asyncQueue.verifyOperationInProgress(),te(Ii,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await sv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{yi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{te("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{yi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function sy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await XA(i);te(Ii,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Zg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Zg(e.remoteStore,o))),i._onlineComponents=e}async function XA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(Ii,"Using user provided OfflineComponentProvider");try{await sd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await sd(i,new Yu)}}else te(Ii,"Using default OfflineComponentProvider"),await sd(i,new GA(void 0));return i._offlineComponents}async function Iv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(Ii,"Using user provided OnlineComponentProvider"),await sy(i,i._uninitializedComponentsProvider._online)):(te(Ii,"Using default OnlineComponentProvider"),await sy(i,new Nd))),i._onlineComponents}function YA(i){return Iv(i).then((e=>e.syncEngine))}async function oy(i){const e=await Iv(i),t=e.eventManager;return t.onListen=bA.bind(null,e.syncEngine),t.onUnlisten=MA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FA.bind(null,e.syncEngine),t}/**
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
 */function Sv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const ay=new Map;/**
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
 */const Av="firestore.googleapis.com",ly=!0;class uy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Av,this.ssl=ly}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ly;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CS)throw new ae(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ae(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new n1;switch(s.type){case"firstParty":return new o1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ay.get(t);s&&(te("ComponentProvider","Removing Datastore"),ay.delete(t),s.terminate())})(this),Promise.resolve()}}function JA(i,e,t,s={}){var o;i=ts(i,pc);const u=Eo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(Iy(`https://${y}`),Sy("Firestore",!0)),h.host!==Av&&h.host!==y&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!rs(v,m)&&(i._setSettings(v),s.mockUserToken)){let T,C;if(typeof s.mockUserToken=="string")T=s.mockUserToken,C=Ft.MOCK_USER;else{T=kw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ae(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Ft(x)}i._authCredentials=new r1(new m_(T,C))}}/**
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
 */class mc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mc(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qa(t,gt._jsonSchema))return new gt(e,s||null,new de(Ke.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:ut("string",gt._jsonSchemaVersion),referencePath:ut("string")};class gi extends mc{constructor(e,t,s){super(e,t,Zd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new de(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function cy(i,e,...t){if(i=ln(i),y_("collection","path",e),i instanceof pc){const s=Ke.fromString(e,...t);return Tg(s),new gi(i,null,s)}{if(!(i instanceof gt||i instanceof gi))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Tg(s),new gi(i.firestore,null,s)}}function hy(i,e,...t){if(i=ln(i),arguments.length===1&&(e=qd.newId()),y_("doc","path",e),i instanceof pc){const s=Ke.fromString(e,...t);return Eg(s),new gt(i,null,new de(s))}{if(!(i instanceof gt||i instanceof gi))throw new ae(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Eg(s),new gt(i.firestore,i instanceof gi?i.converter:null,new de(s))}}/**
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
 */const dy="AsyncQueue";class fy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new av(this,"async_queue_retry"),this.oc=()=>{const s=id();s&&te(dy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=id();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=id();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new es;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ko(e))throw e;te(dy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Dr("INTERNAL UNHANDLED ERROR: ",py(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=pf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:py(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function py(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function my(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class za extends pc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new fy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fy(e),this._firestoreClient=void 0,await e}}}function ZA(i,e){const t=typeof i=="object"?i:Ry(),s=typeof i=="string"?i:Bu,o=Od(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Sw("firestore");u&&JA(o,...u)}return o}function kv(i){if(i._terminated)throw new ae(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||ek(i),i._firestoreClient}function ek(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,y,v,T){return new T1(m,y,v,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,Sv(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new QA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(xt.fromBase64String(e))}catch(t){throw new ae(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:ut("string",En._jsonSchemaVersion),bytes:ut("string")};/**
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
 */class vf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cv{constructor(e){this._methodName=e}}/**
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
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:ut("string",rr._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
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
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ae(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:ut("string",ir._jsonSchemaVersion),vectorValues:ut("object")};/**
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
 */const tk=/^__.*__$/;class nk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}function Rv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:i})}}class wf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new wf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ju(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Rv(this.Ec)&&tk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||hc(e)}Dc(e,t,s,o=!1){return new wf({Ec:e,methodName:t,bc:s,path:Pt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ik(i){const e=i._freezeSettings(),t=hc(i._databaseId);return new rk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function sk(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);Dv("Data must be an object, but it was:",h,s);const m=xv(s,h);let y,v;if(u.merge)y=new Fn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const C of u.mergeFields){const x=ok(e,C,t);if(!h.contains(x))throw new ae(q.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);lk(T,x)||T.push(x)}y=new Fn(T),v=h.fieldTransforms.filter((C=>y.covers(C.field)))}else y=null,v=h.fieldTransforms;return new nk(new wn(m),y,v)}function Pv(i,e){if(Nv(i=ln(i)))return Dv("Unsupported field value:",e,i),xv(i,e);if(i instanceof Cv)return(function(s,o){if(!Rv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Pv(m,o.yc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=ln(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return q1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:Ku(o.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof En)return{bytesValue:X_(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:sf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[k_]:{stringValue:C_},[$u]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return ef(m.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Gd(s)}`)})(i,e)}function xv(i,e){const t={};return w_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(i,((s,o)=>{const u=Pv(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Nv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Qe||i instanceof rr||i instanceof En||i instanceof gt||i instanceof Cv||i instanceof ir)}function Dv(i,e,t){if(!Nv(t)||!__(t)){const s=Gd(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function ok(i,e,t){if((e=ln(e))instanceof vf)return e._internalPath;if(typeof e=="string")return Vv(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const ak=new RegExp("[~\\*/\\[\\]]");function Vv(i,e,t){if(e.search(ak)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new vf(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ae(q.INVALID_ARGUMENT,m+i+y)}function lk(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class bv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ov("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uk extends bv{data(){return super.data()}}function Ov(i,e){return typeof e=="string"?Vv(i,e):e instanceof vf?e._internalPath:e._delegate._internalPath}/**
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
 */function ck(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hk{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ls(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[$u].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>st(h.doubleValue)));return new ir(u)}convertGeoPoint(e){return new rr(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=vi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe(nv(s),9688,{name:e});const o=new Ma(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Dr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function dk(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends bv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ov("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ns._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:ut("string",ns._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Du extends ns{data(e={}){return super.data(e)}}class po{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ka(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new ka(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,T=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:fk(m.type),doc:y,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:i})}}po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:ut("string",po._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class Lv extends hk{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function pk(i,e,t){i=ts(i,gt);const s=ts(i.firestore,za),o=dk(i.converter,e);return Mv(s,[sk(ik(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,tr.none())])}function mk(i){return Mv(ts(i.firestore,za),[new tf(i._key,tr.none())])}function gk(i,...e){var t,s,o;i=ln(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||my(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(my(e[h])){const C=e[h];e[h]=(t=C.next)===null||t===void 0?void 0:t.bind(C),e[h+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),e[h+2]=(o=C.complete)===null||o===void 0?void 0:o.bind(C)}let y,v,T;if(i instanceof gt)v=ts(i.firestore,za),T=Zd(i._key.path),y={next:C=>{e[h]&&e[h](yk(v,i,C))},error:e[h+1],complete:e[h+2]};else{const C=ts(i,mc);v=ts(C.firestore,za),T=C._query;const x=new Lv(v);y={next:z=>{e[h]&&e[h](new po(v,x,C,z))},error:e[h+1],complete:e[h+2]},ck(i._query)}return(function(x,z,K,X){const H=new KA(X),me=new PA(z,H,K);return x.asyncQueue.enqueueAndForget((async()=>AA(await oy(x),me))),()=>{H.Ou(),x.asyncQueue.enqueueAndForget((async()=>kA(await oy(x),me)))}})(kv(v),T,m,y)}function Mv(i,e){return(function(s,o){const u=new es;return s.asyncQueue.enqueueAndForget((async()=>UA(await YA(s),o,u))),u.promise})(kv(i),e)}function yk(i,e,t){const s=t.docs.get(e._key),o=new Lv(i);return new ns(i,o,e._key,s,new ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){So=o})(To),mo(new is("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new za(new i1(s.getProvider("auth-internal")),new a1(h,s.getProvider("app-check-internal")),(function(v,T){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ae(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(v.options.projectId,T)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),pi(gg,yg,e),pi(gg,yg,"esm2017")})();const _k={apiKey:"AIzaSyD3HNVcLjjsptFnJWsmXwL9_SQvyqtALHs",authDomain:"tcssh-service.firebaseapp.com",projectId:"tcssh-service",storageBucket:"tcssh-service.firebasestorage.app",messagingSenderId:"438628712501",appId:"1:438628712501:web:626754f06fdb088126f17c"},Fv=Cy(_k),Tu=e1(Fv),od=ZA(Fv),ad="tcssh-service";function vk(){const[i,e]=Mt.useState(null),[t,s]=Mt.useState("form"),[o,u]=Mt.useState(""),[h,m]=Mt.useState({registrar:"",date:new Date().toISOString().split("T")[0]}),[y,v]=Mt.useState([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}]),[T,C]=Mt.useState([]),[x,z]=Mt.useState({show:!1,message:"",type:""}),[K,X]=Mt.useState({show:!1,recordId:null,password:""});Mt.useEffect(()=>{document.title="二中學生愛校服務登記表",(async()=>{try{const P=typeof window<"u"?window.__initial_auth_token:void 0;if(P)try{await jT(Tu,P)}catch(V){console.warn("自訂權杖不相容，已自動切換至匿名登入模式：",V),await sg(Tu)}else await sg(Tu)}catch(P){console.error("初始登入失敗:",P),ce("資料庫連線認證失敗","error")}})();const k=$T(Tu,e);return()=>k()},[]),Mt.useEffect(()=>{if(!i)return;const E=cy(od,"artifacts",ad,"public","data","serviceRecords"),k=gk(E,P=>{const V=new Date;V.setFullYear(V.getFullYear()-1);const A=P.docs.map(we=>({id:Number(we.id),...we.data()})).filter(we=>new Date(we.date)>=V);C(A)},P=>{console.error("讀取資料失敗:",P),ce("無法連接資料庫","error")});return()=>k()},[i]);const H=E=>{const{name:k,value:P}=E.target;m(V=>({...V,[k]:P}))},me=(E,k,P)=>{v(y.map(V=>V.id===E?{...V,[k]:P}:V))},ue=()=>{v([...y,{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])},ge=E=>{y.length>1&&v(y.filter(k=>k.id!==E))},ce=(E,k="success")=>{z({show:!0,message:E,type:k}),setTimeout(()=>{z({show:!1,message:"",type:""})},3e3)},Be=async E=>{if(E.preventDefault(),!i){ce("資料庫尚未連線，請稍候再試","error");return}if(!h.registrar||!h.date){ce("請填寫上方「登記人」與「登記日期」！","error");return}const k=y.filter(we=>we.studentId.trim()!==""||we.name.trim()!==""||we.violationReason.trim()!=="");if(k.length===0){ce("請至少填寫一筆學生的資料！","error");return}if(k.some(we=>!we.studentId.trim()||!we.name.trim()||!we.violationReason.trim())){ce("請確認有輸入的列皆已完整填寫「學號」、「姓名」與「違規事件」！","error");return}if(k.some(we=>we.studentId.trim().length!==6)){ce("請確認輸入的學號皆為 6 碼！","error");return}const A=k.map((we,tt)=>({id:Date.now()-tt,registrar:h.registrar,date:h.date,studentId:we.studentId,name:we.name,serviceCount:Number(we.serviceCount)||1,violationReason:we.violationReason,timestamp:new Date().toLocaleString()}));try{const we=cy(od,"artifacts",ad,"public","data","serviceRecords");await Promise.all(A.map(tt=>pk(hy(we,tt.id.toString()),tt))),ce(`成功登記 ${A.length} 筆資料並儲存至雲端！`,"success"),v([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])}catch(we){console.error("寫入失敗:",we),ce("資料庫寫入失敗，請重試！","error")}},Ie=E=>{X({show:!0,recordId:E,password:""})},D=async()=>{if(i)if(K.password==="22021897")try{await mk(hy(od,"artifacts",ad,"public","data","serviceRecords",K.recordId.toString())),ce("紀錄已從資料庫徹底刪除","info"),X({show:!1,recordId:null,password:""})}catch(E){console.error("刪除失敗:",E),ce("資料庫刪除失敗，請重試！","error")}else ce("密碼錯誤，無法刪除！","error")},S=T.filter(E=>{const k=o.toLowerCase();return E.date.toLowerCase().includes(k)||E.studentId.toLowerCase().includes(k)||E.name.toLowerCase().includes(k)||E.registrar.toLowerCase().includes(k)});return U.jsxs("div",{className:"min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 relative selection:bg-blue-600 selection:text-white",children:[U.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none rounded-b-[40px] z-0"}),U.jsxs("div",{className:"relative w-full max-w-5xl mx-auto space-y-8 transition-all duration-300 z-10",children:[U.jsxs("header",{className:"bg-white rounded-3xl shadow-md border border-slate-200/80 p-8 sm:p-12 text-center relative overflow-hidden mt-8 sm:mt-0",children:[U.jsx("div",{className:"absolute top-0 left-0 w-full h-3 bg-blue-600 school-gradient"}),U.jsx("div",{className:"flex justify-center items-center mb-5",children:U.jsx("div",{className:"bg-blue-50 text-blue-700 p-4 rounded-2xl shadow-inner border border-blue-100",children:U.jsx(Gh,{size:44,className:"stroke-[1.8]"})})}),U.jsxs("div",{className:"inline-flex items-center space-x-2 bg-slate-100/90 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-4 border border-slate-200 shadow-sm",children:[U.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-600 animate-pulse"}),U.jsx("span",{children:"臺中二中學務處 生輔組"})]}),U.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none mb-3",children:"二中學生愛校服務登記表"}),U.jsxs("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-center hidden sm:block",children:["依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導",U.jsx("br",{}),"期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"]}),U.jsx("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-left block sm:hidden px-4",children:"依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導，期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"})]}),U.jsx("div",{className:"flex justify-center mb-6",children:U.jsxs("div",{className:"bg-slate-200/80 p-1.5 rounded-2xl inline-flex space-x-1 border border-slate-300 shadow-sm",children:[U.jsxs("button",{onClick:()=>s("form"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${t==="form"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-950 hover:bg-white/40"}`,children:[U.jsx(cw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記作業"]}),U.jsxs("button",{onClick:()=>s("list"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${t==="list"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-950 hover:bg-white/40"}`,children:[U.jsx(sw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記名單查詢"]})]})}),x.show&&U.jsxs("div",{className:`fixed bottom-6 right-6 z-50 flex items-center p-4 rounded-2xl shadow-2xl border-2 transition-all duration-300 transform translate-y-0 opacity-100 ${x.type==="error"?"bg-red-50 text-red-950 border-red-200 shadow-red-100":x.type==="info"?"bg-blue-50 text-blue-950 border-blue-200 shadow-blue-100":"bg-emerald-50 text-emerald-950 border-emerald-200 shadow-emerald-100"}`,children:[U.jsx("div",{className:`p-1.5 rounded-lg mr-3 ${x.type==="error"?"bg-red-100 text-red-700":x.type==="info"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}`,children:x.type==="error"?U.jsx(Lm,{size:20,className:"stroke-[2.5]"}):x.type==="info"?U.jsx(Kh,{size:20,className:"stroke-[2.5]"}):U.jsx(Mm,{size:20,className:"stroke-[2.5]"})}),U.jsx("span",{className:"font-extrabold text-sm",children:x.message})]}),K.show&&U.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity",children:U.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-slate-200 animate-in zoom-in-95 duration-200",children:[U.jsxs("div",{className:"flex items-center text-red-600 mb-4 bg-red-50/50 p-3 rounded-2xl",children:[U.jsx(Lm,{size:24,className:"mr-2 text-red-600 stroke-[2.5]"}),U.jsx("h3",{className:"text-lg font-black text-slate-950",children:"確認刪除紀錄"})]}),U.jsx("p",{className:"text-sm text-slate-700 font-bold leading-relaxed mb-5",children:"此操作將永久移除該筆紀錄。請輸入管理員密碼以確認操作："}),U.jsx("input",{type:"password",placeholder:"請輸入密碼",value:K.password,onChange:E=>X(k=>({...k,password:E.target.value})),onKeyDown:E=>E.key==="Enter"&&D(),className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 text-slate-950 font-bold outline-none mb-6 placeholder:text-slate-400 font-mono text-center tracking-widest",autoFocus:!0}),U.jsxs("div",{className:"flex justify-end space-x-3",children:[U.jsx("button",{onClick:()=>X({show:!1,recordId:null,password:""}),className:"px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors font-extrabold text-sm",children:"取消"}),U.jsx("button",{onClick:D,className:"px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md shadow-red-500/10 transition-colors font-extrabold text-sm",children:"確認刪除"})]})]})}),U.jsxs("div",{className:"w-full",children:[t==="form"&&U.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[U.jsxs("form",{onSubmit:Be,className:"bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10",children:[U.jsxs("h2",{className:"text-xl font-black mb-6 flex items-center text-slate-950 border-b pb-4 border-slate-100",children:[U.jsx(pw,{size:22,className:"mr-2.5 text-blue-600 stroke-[2.5]"}),"填寫登記資料"]}),U.jsxs("div",{className:"space-y-6",children:[U.jsxs("div",{className:"p-5 bg-gradient-to-br from-slate-100 to-slate-200/40 border-2 border-slate-300 rounded-2xl space-y-4 shadow-sm",children:[U.jsxs("p",{className:"text-xs text-slate-800 font-black mb-2 flex items-center",children:[U.jsx(Kh,{size:14,className:"mr-1.5 text-blue-600 stroke-[2.5]"})," 以下資料送出後會自動保留"]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsxs("div",{children:[U.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記人 (師長/負責幹部) ",U.jsx("span",{className:"text-red-500",children:"*"})]}),U.jsx("input",{type:"text",name:"registrar",placeholder:"例: 林組長",value:h.registrar,onChange:H,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-slate-950 font-extrabold bg-white placeholder:text-slate-400 shadow-inner"})]}),U.jsxs("div",{children:[U.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記日期 ",U.jsx("span",{className:"text-red-500",children:"*"})]}),U.jsx("input",{type:"date",name:"date",value:h.date,onChange:H,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-slate-950 font-extrabold bg-white shadow-inner"})]})]})]}),U.jsxs("div",{className:"space-y-4",children:[U.jsx("div",{className:"flex justify-between items-end mb-1",children:U.jsx("label",{className:"block text-sm font-extrabold text-slate-900",children:"批次學生資料填寫"})}),y.map((E,k)=>U.jsxs("div",{className:"relative p-6 border-2 border-slate-200/80 rounded-2xl bg-white shadow-sm flex flex-col gap-4 group transition-all hover:shadow-md hover:border-slate-300",children:[y.length>1&&U.jsx("button",{type:"button",onClick:()=>ge(E.id),className:"absolute -top-3 -right-3 bg-white text-slate-500 hover:text-red-600 hover:bg-red-50 border-2 border-slate-200 rounded-full p-1.5 shadow-md transition-colors z-10 cursor-pointer",title:"移除此列",children:U.jsx(Um,{size:16,className:"stroke-[2.5]"})}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[U.jsxs("div",{className:"sm:col-span-2",children:[U.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["學號 ",U.jsx("span",{className:"text-red-600",children:"*"})]}),U.jsx("input",{type:"text",placeholder:"例: 110123",maxLength:"6",value:E.studentId,onChange:P=>me(E.id,"studentId",P.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-extrabold outline-none placeholder:text-slate-400 font-mono shadow-inner"})]}),U.jsxs("div",{className:"sm:col-span-2",children:[U.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["姓名 ",U.jsx("span",{className:"text-red-600",children:"*"})]}),U.jsx("input",{type:"text",placeholder:"例: 王小明",value:E.name,onChange:P=>me(E.id,"name",P.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-extrabold outline-none placeholder:text-slate-400 shadow-inner"})]}),U.jsxs("div",{className:"sm:col-span-2",children:[U.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["次數 ",U.jsx("span",{className:"text-red-600",children:"*"})]}),U.jsx("input",{type:"number",min:"1",value:E.serviceCount,onChange:P=>me(E.id,"serviceCount",P.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-black outline-none shadow-inner"})]}),U.jsxs("div",{className:"sm:col-span-6",children:[U.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["違規事件/事由 ",U.jsx("span",{className:"text-red-600",children:"*"})]}),U.jsx("input",{type:"text",placeholder:"例: 遲到、未交作業",value:E.violationReason,onChange:P=>me(E.id,"violationReason",P.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-extrabold outline-none placeholder:text-slate-400 shadow-inner"})]})]})]},E.id)),U.jsxs("button",{type:"button",onClick:ue,className:"w-full py-4 border-2 border-dashed border-slate-300 text-slate-700 rounded-2xl hover:bg-blue-50/50 hover:text-blue-700 hover:border-blue-450 transition-colors flex items-center justify-center text-sm font-extrabold mt-2 cursor-pointer shadow-sm active:scale-[0.995]",children:[U.jsx(aw,{size:16,className:"mr-1.5 stroke-[3]"})," 新增下一位學生"]})]}),U.jsxs("button",{type:"submit",className:"w-full mt-6 bg-blue-600 hover:school-gradient text-white font-black py-4 px-4 rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-250 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 text-center flex justify-center items-center cursor-pointer text-base",children:[U.jsx(Mm,{size:18,className:"mr-2"})," 送出登記"]})]})]}),U.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border-2 border-blue-100",children:[U.jsxs("h3",{className:"font-extrabold text-blue-900 mb-3 flex items-center text-base",children:[U.jsx(Kh,{size:18,className:"mr-2 text-blue-600 stroke-[2.5]"})," 愛校服務須知"]}),U.jsxs("ul",{className:"text-sm text-blue-900/90 font-bold space-y-2.5 list-none",children:[U.jsxs("li",{className:"flex items-start",children:[U.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請著整齊校服或運動服進行服務，並請攜帶學生證。"]}),U.jsxs("li",{className:"flex items-start",children:[U.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請準時至指定地點集合，遲到將酌減服務時數。"]}),U.jsxs("li",{className:"flex items-start",children:[U.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 完成服務後，請主動持「愛校服務單」請負責老師簽名。"]}),U.jsxs("li",{className:"flex items-start",children:[U.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 若因故無法出席，請務必提前一天至學務處取消。"]})]})]})]}),t==="list"&&U.jsx("div",{className:"w-full animate-in fade-in duration-300",children:U.jsxs("div",{className:"bg-white rounded-3xl shadow-xl border-2 border-slate-250 p-6 sm:p-8 min-h-[500px]",children:[U.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b-2 pb-5 gap-4 border-slate-200",children:[U.jsxs("h2",{className:"text-xl font-black text-slate-950 flex items-center shrink-0",children:[U.jsx(Gh,{size:22,className:"mr-2 text-green-700 stroke-[3]"}),"登記名單查詢"]}),U.jsxs("div",{className:"relative flex-grow max-w-md w-full sm:mx-4",children:[U.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",children:U.jsx(Fm,{size:16,className:"text-slate-900 stroke-[2.5]"})}),U.jsx("input",{type:"text",placeholder:"搜尋登記日期、學號、姓名或登記人...",value:o,onChange:E=>u(E.target.value),className:"w-full pl-10 pr-10 py-2.5 border-2 border-slate-350 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none text-xs transition-shadow bg-slate-50 focus:bg-white text-slate-950 font-black placeholder:text-slate-500"}),o&&U.jsx("button",{onClick:()=>u(""),className:"absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-950 focus:outline-none",title:"清除搜尋",children:U.jsx(Um,{size:16,className:"stroke-[2.5]"})})]}),U.jsxs("span",{className:"text-xs font-black text-blue-900 bg-blue-100 border-2 border-blue-200 px-4 py-1.5 rounded-full shrink-0 shadow-sm",children:["共 ",S.length," 筆紀錄"]})]}),T.length===0?U.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[U.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:U.jsx(Gh,{size:48,className:"text-slate-400 stroke-[1.5]"})}),U.jsx("p",{className:"font-bold",children:"目前尚無登記紀錄，請前往登記作業！"})]}):S.length===0?U.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[U.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:U.jsx(Fm,{size:48,className:"text-slate-400 stroke-[1.5]"})}),U.jsxs("p",{className:"font-bold",children:["找不到符合「",U.jsx("span",{className:"text-slate-950 font-black",children:o}),"」的紀錄"]}),U.jsx("button",{onClick:()=>u(""),className:"text-blue-600 hover:text-blue-800 text-sm font-extrabold cursor-pointer",children:"清除搜尋條件"})]}):U.jsx("div",{className:"overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm",children:U.jsxs("table",{className:"w-full text-left border-collapse whitespace-nowrap",children:[U.jsx("thead",{children:U.jsxs("tr",{className:"bg-slate-100 text-slate-950 text-sm border-b-2 border-slate-200",children:[U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"登記日期"}),U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"學號"}),U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"姓名"}),U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"違規事件 / 事由"}),U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider text-center",children:"次數"}),U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"登記人"}),U.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider text-right",children:"操作"})]})}),U.jsx("tbody",{className:"divide-y divide-slate-200 bg-white",children:[...S].sort((E,k)=>k.id-E.id).map(E=>U.jsxs("tr",{className:"hover:bg-blue-50/30 transition-colors group",children:[U.jsx("td",{className:"py-4 px-6 text-sm text-slate-950 font-black font-mono",children:E.date}),U.jsx("td",{className:"py-4 px-6 text-slate-950 font-black font-mono text-base",children:E.studentId}),U.jsx("td",{className:"py-4 px-6 text-slate-950 font-black text-base",children:E.name}),U.jsx("td",{className:"py-4 px-6 text-sm text-slate-950 font-extrabold max-w-xs truncate",title:E.violationReason,children:E.violationReason||"-"}),U.jsx("td",{className:"py-4 px-6 text-center",children:U.jsx("span",{className:"inline-flex items-center justify-center px-3.5 py-1 text-xs font-black leading-none text-red-950 bg-red-100 border-2 border-red-300 rounded-full font-mono shadow-sm",children:E.serviceCount})}),U.jsx("td",{className:"py-4 px-6 text-sm text-slate-950 font-black",children:E.registrar}),U.jsx("td",{className:"py-4 px-6 text-right",children:U.jsx("button",{onClick:()=>Ie(E.id),className:"text-slate-400 hover:text-red-500 p-2 rounded-xl hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer",title:"刪除紀錄",children:U.jsx(dw,{size:18,className:"stroke-[2.5]"})})})]},E.id))})]})})]})})]}),U.jsxs("footer",{className:"text-center text-sm text-slate-500 font-bold py-6 border-t border-slate-200/50",children:["© ",new Date().getFullYear()," 國立臺中第二高級中等學校學務處 生輔組"]})]})]})}X0.createRoot(document.getElementById("root")).render(U.jsx(Mt.StrictMode,{children:U.jsx(vk,{})}));
