(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Bh={exports:{}},Ta={},$h={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function H0(){if(xm)return Ce;xm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=k&&D[k]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Y={};function W(D,z,ae){this.props=D,this.context=z,this.refs=Y,this.updater=ae||B}W.prototype.isReactComponent={},W.prototype.setState=function(D,z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,z,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function de(){}de.prototype=W.prototype;function he(D,z,ae){this.props=D,this.context=z,this.refs=Y,this.updater=ae||B}var ge=he.prototype=new de;ge.constructor=he,J(ge,W.prototype),ge.isPureReactComponent=!0;var we=Array.isArray,ze=Object.prototype.hasOwnProperty,Ie={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function I(D,z,ae){var Se,ke={},Ne=null,Le=null;if(z!=null)for(Se in z.ref!==void 0&&(Le=z.ref),z.key!==void 0&&(Ne=""+z.key),z)ze.call(z,Se)&&!R.hasOwnProperty(Se)&&(ke[Se]=z[Se]);var Me=arguments.length-2;if(Me===1)ke.children=ae;else if(1<Me){for(var Be=Array(Me),_t=0;_t<Me;_t++)Be[_t]=arguments[_t+2];ke.children=Be}if(D&&D.defaultProps)for(Se in Me=D.defaultProps,Me)ke[Se]===void 0&&(ke[Se]=Me[Se]);return{$$typeof:i,type:D,key:Ne,ref:Le,props:ke,_owner:Ie.current}}function A(D,z){return{$$typeof:i,type:D.type,key:z,ref:D.ref,props:D.props,_owner:D._owner}}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function b(D){var z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return z[ae]})}var V=/\/+/g;function S(D,z){return typeof D=="object"&&D!==null&&D.key!=null?b(""+D.key):z.toString(36)}function Qe(D,z,ae,Se,ke){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var Le=!1;if(D===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(D.$$typeof){case i:case e:Le=!0}}if(Le)return Le=D,ke=ke(Le),D=Se===""?"."+S(Le,0):Se,we(ke)?(ae="",D!=null&&(ae=D.replace(V,"$&/")+"/"),Qe(ke,z,ae,"",function(_t){return _t})):ke!=null&&(P(ke)&&(ke=A(ke,ae+(!ke.key||Le&&Le.key===ke.key?"":(""+ke.key).replace(V,"$&/")+"/")+D)),z.push(ke)),1;if(Le=0,Se=Se===""?".":Se+":",we(D))for(var Me=0;Me<D.length;Me++){Ne=D[Me];var Be=Se+S(Ne,Me);Le+=Qe(Ne,z,ae,Be,ke)}else if(Be=x(D),typeof Be=="function")for(D=Be.call(D),Me=0;!(Ne=D.next()).done;)Ne=Ne.value,Be=Se+S(Ne,Me++),Le+=Qe(Ne,z,ae,Be,ke);else if(Ne==="object")throw z=String(D),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Le}function vt(D,z,ae){if(D==null)return D;var Se=[],ke=0;return Qe(D,Se,"","",function(Ne){return z.call(ae,Ne,ke++)}),Se}function ut(D){if(D._status===-1){var z=D._result;z=z(),z.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=z)}if(D._status===1)return D._result.default;throw D._result}var K={current:null},$={transition:null},ne={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:$,ReactCurrentOwner:Ie};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:vt,forEach:function(D,z,ae){vt(D,function(){z.apply(this,arguments)},ae)},count:function(D){var z=0;return vt(D,function(){z++}),z},toArray:function(D){return vt(D,function(z){return z})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=W,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=he,Ce.StrictMode=s,Ce.Suspense=y,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,Ce.act=ee,Ce.cloneElement=function(D,z,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Se=J({},D.props),ke=D.key,Ne=D.ref,Le=D._owner;if(z!=null){if(z.ref!==void 0&&(Ne=z.ref,Le=Ie.current),z.key!==void 0&&(ke=""+z.key),D.type&&D.type.defaultProps)var Me=D.type.defaultProps;for(Be in z)ze.call(z,Be)&&!R.hasOwnProperty(Be)&&(Se[Be]=z[Be]===void 0&&Me!==void 0?Me[Be]:z[Be])}var Be=arguments.length-2;if(Be===1)Se.children=ae;else if(1<Be){Me=Array(Be);for(var _t=0;_t<Be;_t++)Me[_t]=arguments[_t+2];Se.children=Me}return{$$typeof:i,type:D.type,key:ke,ref:Ne,props:Se,_owner:Le}},Ce.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ce.createElement=I,Ce.createFactory=function(D){var z=I.bind(null,D);return z.type=D,z},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:m,render:D}},Ce.isValidElement=P,Ce.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ut}},Ce.memo=function(D,z){return{$$typeof:_,type:D,compare:z===void 0?null:z}},Ce.startTransition=function(D){var z=$.transition;$.transition={};try{D()}finally{$.transition=z}},Ce.unstable_act=ee,Ce.useCallback=function(D,z){return K.current.useCallback(D,z)},Ce.useContext=function(D){return K.current.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D){return K.current.useDeferredValue(D)},Ce.useEffect=function(D,z){return K.current.useEffect(D,z)},Ce.useId=function(){return K.current.useId()},Ce.useImperativeHandle=function(D,z,ae){return K.current.useImperativeHandle(D,z,ae)},Ce.useInsertionEffect=function(D,z){return K.current.useInsertionEffect(D,z)},Ce.useLayoutEffect=function(D,z){return K.current.useLayoutEffect(D,z)},Ce.useMemo=function(D,z){return K.current.useMemo(D,z)},Ce.useReducer=function(D,z,ae){return K.current.useReducer(D,z,ae)},Ce.useRef=function(D){return K.current.useRef(D)},Ce.useState=function(D){return K.current.useState(D)},Ce.useSyncExternalStore=function(D,z,ae){return K.current.useSyncExternalStore(D,z,ae)},Ce.useTransition=function(){return K.current.useTransition()},Ce.version="18.3.1",Ce}var Nm;function Od(){return Nm||(Nm=1,$h.exports=H0()),$h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function W0(){if(bm)return Ta;bm=1;var i=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var E,k={},x=null,B=null;_!==void 0&&(x=""+_),y.key!==void 0&&(x=""+y.key),y.ref!==void 0&&(B=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(k[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)k[E]===void 0&&(k[E]=y[E]);return{$$typeof:e,type:m,key:x,ref:B,props:k,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=h,Ta.jsxs=h,Ta}var Dm;function q0(){return Dm||(Dm=1,Bh.exports=W0()),Bh.exports}var O=q0(),St=Od(),mu={},Hh={exports:{}},Jt={},Wh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function G0(){return Vm||(Vm=1,(function(i){function e($,ne){var ee=$.length;$.push(ne);e:for(;0<ee;){var D=ee-1>>>1,z=$[D];if(0<o(z,ne))$[D]=ne,$[ee]=z,ee=D;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ne=$[0],ee=$.pop();if(ee!==ne){$[0]=ee;e:for(var D=0,z=$.length,ae=z>>>1;D<ae;){var Se=2*(D+1)-1,ke=$[Se],Ne=Se+1,Le=$[Ne];if(0>o(ke,ee))Ne<z&&0>o(Le,ke)?($[D]=Le,$[Ne]=ee,D=Ne):($[D]=ke,$[Se]=ee,D=Se);else if(Ne<z&&0>o(Le,ee))$[D]=Le,$[Ne]=ee,D=Ne;else break e}}return ne}function o($,ne){var ee=$.sortIndex-ne.sortIndex;return ee!==0?ee:$.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],E=1,k=null,x=3,B=!1,J=!1,Y=!1,W=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge($){for(var ne=t(_);ne!==null;){if(ne.callback===null)s(_);else if(ne.startTime<=$)s(_),ne.sortIndex=ne.expirationTime,e(y,ne);else break;ne=t(_)}}function we($){if(Y=!1,ge($),!J)if(t(y)!==null)J=!0,ut(ze);else{var ne=t(_);ne!==null&&K(we,ne.startTime-$)}}function ze($,ne){J=!1,Y&&(Y=!1,de(I),I=-1),B=!0;var ee=x;try{for(ge(ne),k=t(y);k!==null&&(!(k.expirationTime>ne)||$&&!b());){var D=k.callback;if(typeof D=="function"){k.callback=null,x=k.priorityLevel;var z=D(k.expirationTime<=ne);ne=i.unstable_now(),typeof z=="function"?k.callback=z:k===t(y)&&s(y),ge(ne)}else s(y);k=t(y)}if(k!==null)var ae=!0;else{var Se=t(_);Se!==null&&K(we,Se.startTime-ne),ae=!1}return ae}finally{k=null,x=ee,B=!1}}var Ie=!1,R=null,I=-1,A=5,P=-1;function b(){return!(i.unstable_now()-P<A)}function V(){if(R!==null){var $=i.unstable_now();P=$;var ne=!0;try{ne=R(!0,$)}finally{ne?S():(Ie=!1,R=null)}}else Ie=!1}var S;if(typeof he=="function")S=function(){he(V)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,vt=Qe.port2;Qe.port1.onmessage=V,S=function(){vt.postMessage(null)}}else S=function(){W(V,0)};function ut($){R=$,Ie||(Ie=!0,S())}function K($,ne){I=W(function(){$(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){J||B||(J=!0,ut(ze))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function($){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var ee=x;x=ne;try{return $()}finally{x=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,ne){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=x;x=$;try{return ne()}finally{x=ee}},i.unstable_scheduleCallback=function($,ne,ee){var D=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?D+ee:D):ee=D,$){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=ee+z,$={id:E++,callback:ne,priorityLevel:$,startTime:ee,expirationTime:z,sortIndex:-1},ee>D?($.sortIndex=ee,e(_,$),t(y)===null&&$===t(_)&&(Y?(de(I),I=-1):Y=!0,K(we,ee-D))):($.sortIndex=z,e(y,$),J||B||(J=!0,ut(ze))),$},i.unstable_shouldYield=b,i.unstable_wrapCallback=function($){var ne=x;return function(){var ee=x;x=ne;try{return $.apply(this,arguments)}finally{x=ee}}}})(qh)),qh}var Om;function K0(){return Om||(Om=1,Wh.exports=G0()),Wh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function Q0(){if(Lm)return Jt;Lm=1;var i=Od(),e=K0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},k={};function x(n){return y.call(k,n)?!0:y.call(E,n)?!1:_.test(n)?k[n]=!0:(E[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(de,he);W[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(de,he);W[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(de,he);W[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ge(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(J(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),b=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),$=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,D;function z(n){if(D===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var ae=!1;function Se(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,T=p.length-1;1<=v&&0<=T&&d[v]!==p[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==p[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==p[T]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?z(n):""}function ke(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case Ie:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case b:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case ut:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _t(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ar(n){n._valueTracker||(n._valueTracker=_t(n))}function ds(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Or(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Si(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function fs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ro(n,r){r=r.checked,r!=null&&ge(n,"checked",r,!1)}function Po(n,r){Ro(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ps(n,r.type,a):r.hasOwnProperty("defaultValue")&&ps(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function el(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ps(n,r,a){(r!=="number"||Or(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lr=Array.isArray;function ur(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function xo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ms(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(lr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function gs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function No(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cr,bo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=cr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Lr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(n){ki.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ai[r]=Ai[n]})});function Do(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ai.hasOwnProperty(n)&&Ai[n]?(""+r).trim():r+"px"}function Vo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Do(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Oo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,r){if(r){if(Oo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Mo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function ys(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,un=null,jn=null;function _s(n){if(n=aa(n)){if(typeof vs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=xl(r),vs(n.stateNode,n.type,r))}}function zn(n){un?jn?jn.push(n):jn=[n]:un=n}function Fo(){if(un){var n=un,r=jn;if(jn=un=null,_s(n),r)for(n=0;n<r.length;n++)_s(r[n])}}function Ri(n,r){return n(r)}function Uo(){}var hr=!1;function jo(n,r,a){if(hr)return n(r,a);hr=!0;try{return Ri(n,r,a)}finally{hr=!1,(un!==null||jn!==null)&&(Uo(),Fo())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ws=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{ws=!1}function Pi(n,r,a,c,d,p,v,T,C){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(Q){this.onError(Q)}}var xi=!1,Es=null,In=!1,zo=null,gc={onError:function(n){xi=!0,Es=n}};function Ts(n,r,a,c,d,p,v,T,C){xi=!1,Es=null,Pi.apply(gc,arguments)}function tl(n,r,a,c,d,p,v,T,C){if(Ts.apply(this,arguments),xi){if(xi){var U=Es;xi=!1,Es=null}else throw Error(t(198));In||(In=!0,zo=U)}}function Sn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ni(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function nl(n){var r=n.alternate;if(!r){if(r=Sn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return An(d),n;if(p===c)return An(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=p;break}if(T===c){v=!0,c=d,a=p;break}T=T.sibling}if(!v){for(T=p.child;T;){if(T===a){v=!0,a=p,c=d;break}if(T===c){v=!0,c=p,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Bo(n){return n=nl(n),n!==null?Is(n):null}function Is(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Is(n);if(r!==null)return r;n=n.sibling}return null}var Ss=e.unstable_scheduleCallback,$o=e.unstable_cancelCallback,rl=e.unstable_shouldYield,yc=e.unstable_requestPaint,$e=e.unstable_now,il=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,Mr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Ho=e.unstable_LowPriority,sl=e.unstable_IdlePriority,Di=null,en=null;function ol(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Di,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:ll,Wo=Math.log,al=Math.LN2;function ll(n){return n>>>=0,n===0?32:31-(Wo(n)/al|0)|0}var As=64,ks=4194304;function Fr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=Fr(T):(p&=v,p!==0&&(c=Fr(p)))}else v=a&~d,v!==0?c=Fr(v):p!==0&&(c=Fr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-zt(r),d=1<<a,c|=n[a],r&=~d;return c}function vc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-zt(p),T=1<<v,C=d[v];C===-1?((T&a)===0||(T&c)!==0)&&(d[v]=vc(T,r)):C<=r&&(n.expiredLanes|=T),p&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Oi(){var n=As;return As<<=1,(As&4194240)===0&&(As=64),n}function Ur(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function jr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-zt(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function zr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var xe=0;function Br(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ul,Cs,cl,hl,dl,qo=!1,Bn=[],kt=null,kn=null,Cn=null,$r=new Map,hn=new Map,$n=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fl(n,r){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":$r.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function Wt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=aa(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function wc(n,r,a,c,d){switch(r){case"focusin":return kt=Wt(kt,n,r,a,c,d),!0;case"dragenter":return kn=Wt(kn,n,r,a,c,d),!0;case"mouseover":return Cn=Wt(Cn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return $r.set(p,Wt($r.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,Wt(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function pl(n){var r=ji(n.target);if(r!==null){var a=Sn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ni(a),r!==null){n.blockedOn=r,dl(n.priority,function(){cl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ci=c,a.target.dispatchEvent(c),Ci=null}else return r=aa(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function Li(n,r,a){fr(n)&&a.delete(r)}function ml(){qo=!1,kt!==null&&fr(kt)&&(kt=null),kn!==null&&fr(kn)&&(kn=null),Cn!==null&&fr(Cn)&&(Cn=null),$r.forEach(Li),hn.forEach(Li)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,qo||(qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ml)))}function Pn(n){function r(d){return Rn(d,n)}if(0<Bn.length){Rn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kt!==null&&Rn(kt,n),kn!==null&&Rn(kn,n),Cn!==null&&Rn(Cn,n),$r.forEach(r),hn.forEach(r),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)pl(a),a.blockedOn===null&&$n.shift()}var pr=we.ReactCurrentBatchConfig,Hr=!0;function Xe(n,r,a,c){var d=xe,p=pr.transition;pr.transition=null;try{xe=1,Go(n,r,a,c)}finally{xe=d,pr.transition=p}}function Ec(n,r,a,c){var d=xe,p=pr.transition;pr.transition=null;try{xe=4,Go(n,r,a,c)}finally{xe=d,pr.transition=p}}function Go(n,r,a,c){if(Hr){var d=Rs(n,r,a,c);if(d===null)bc(n,r,c,Mi,a),fl(n,c);else if(wc(d,n,r,a,c))c.stopPropagation();else if(fl(n,c),r&4&&-1<_c.indexOf(n)){for(;d!==null;){var p=aa(d);if(p!==null&&ul(p),p=Rs(n,r,a,c),p===null&&bc(n,r,c,Mi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var Mi=null;function Rs(n,r,a,c){if(Mi=null,n=ys(c),n=ji(n),n!==null)if(r=Sn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ni(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Mi=n,null}function Ko(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(il()){case bi:return 1;case Mr:return 4;case cn:case Ho:return 16;case sl:return 536870912;default:return 16}default:return 16}}var nn=null,Ps=null,qt=null;function Qo(){if(qt)return qt;var n,r=Ps,a=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function xs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Hn(){return!0}function Xo(){return!1}function Ct(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Hn:Xo,this.isPropagationStopped=Xo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),r}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Ct(xn),Wn=ee({},xn,{view:0,detail:0}),Tc=Ct(Wn),bs,mr,Wr,Fi=ee({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(bs=n.screenX-Wr.screenX,mr=n.screenY-Wr.screenY):mr=bs=0,Wr=n),bs)},movementY:function(n){return"movementY"in n?n.movementY:mr}}),Ds=Ct(Fi),Yo=ee({},Fi,{dataTransfer:0}),gl=Ct(Yo),Vs=ee({},Wn,{relatedTarget:0}),Os=Ct(Vs),yl=ee({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),gr=Ct(yl),vl=ee({},xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_l=Ct(vl),wl=ee({},xn,{data:0}),Jo=Ct(wl),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},El={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=El[n])?!!r[n]:!1}function qn(){return Tl}var l=ee({},Wn,{key:function(n){if(n.key){var r=Ls[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=xs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?xs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(l),g=ee({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(g),L=ee({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),j=Ct(L),te=ee({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Ct(te),dt=ee({},Fi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),be=Ct(dt),wt=[9,13,27,32],st=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var rn=m&&"TextEvent"in window&&!dn,Ui=m&&(!st||dn&&8<dn&&11>=dn),Ms=" ",Sf=!1;function Af(n,r){switch(n){case"keyup":return wt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function z_(n,r){switch(n){case"compositionend":return kf(r);case"keypress":return r.which!==32?null:(Sf=!0,Ms);case"textInput":return n=r.data,n===Ms&&Sf?null:n;default:return null}}function B_(n,r){if(Fs)return n==="compositionend"||!st&&Af(n,r)?(n=Qo(),qt=Ps=nn=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ui&&r.locale!=="ko"?null:r.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!$_[n.type]:r==="textarea"}function Rf(n,r,a,c){zn(c),r=Cl(r,"onChange"),0<r.length&&(a=new Ns("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Zo=null,ea=null;function H_(n){qf(n,0)}function Il(n){var r=$s(n);if(ds(r))return n}function W_(n,r){if(n==="change")return r}var Pf=!1;if(m){var Ic;if(m){var Sc="oninput"in document;if(!Sc){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),Sc=typeof xf.oninput=="function"}Ic=Sc}else Ic=!1;Pf=Ic&&(!document.documentMode||9<document.documentMode)}function Nf(){Zo&&(Zo.detachEvent("onpropertychange",bf),ea=Zo=null)}function bf(n){if(n.propertyName==="value"&&Il(ea)){var r=[];Rf(r,ea,n,ys(n)),jo(H_,r)}}function q_(n,r,a){n==="focusin"?(Nf(),Zo=r,ea=a,Zo.attachEvent("onpropertychange",bf)):n==="focusout"&&Nf()}function G_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Il(ea)}function K_(n,r){if(n==="click")return Il(r)}function Q_(n,r){if(n==="input"||n==="change")return Il(r)}function X_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:X_;function ta(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function Df(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vf(n,r){var a=Df(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Df(a)}}function Of(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Of(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Lf(){for(var n=window,r=Or();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Or(n.document)}return r}function Ac(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Y_(n){var r=Lf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(c!==null&&Ac(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Vf(a,p);var v=Vf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var J_=m&&"documentMode"in document&&11>=document.documentMode,Us=null,kc=null,na=null,Cc=!1;function Mf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||Us==null||Us!==Or(c)||(c=Us,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),na&&ta(na,c)||(na=c,c=Cl(kc,"onSelect"),0<c.length&&(r=new Ns("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Us)))}function Sl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var js={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Rc={},Ff={};m&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Al(n){if(Rc[n])return Rc[n];if(!js[n])return n;var r=js[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ff)return Rc[n]=r[a];return n}var Uf=Al("animationend"),jf=Al("animationiteration"),zf=Al("animationstart"),Bf=Al("transitionend"),$f=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,r){$f.set(n,r),u(r,[n])}for(var Pc=0;Pc<Hf.length;Pc++){var xc=Hf[Pc],Z_=xc.toLowerCase(),e0=xc[0].toUpperCase()+xc.slice(1);qr(Z_,"on"+e0)}qr(Uf,"onAnimationEnd"),qr(jf,"onAnimationIteration"),qr(zf,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(Bf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Wf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,tl(c,r,void 0,n),n.currentTarget=null}function qf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],C=T.instance,U=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;Wf(d,T,U),p=C}else for(v=0;v<c.length;v++){if(T=c[v],C=T.instance,U=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;Wf(d,T,U),p=C}}}if(In)throw n=zo,In=!1,zo=null,n}function We(n,r){var a=r[Fc];a===void 0&&(a=r[Fc]=new Set);var c=n+"__bubble";a.has(c)||(Gf(r,n,2,!1),a.add(c))}function Nc(n,r,a){var c=0;r&&(c|=4),Gf(a,n,c,r)}var kl="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[kl]){n[kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(t0.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[kl]||(r[kl]=!0,Nc("selectionchange",!1,r))}}function Gf(n,r,a,c){switch(Ko(r)){case 1:var d=Xe;break;case 4:d=Ec;break;default:d=Go}a=d.bind(null,r,a,n),d=void 0,!ws||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;T!==null;){if(v=ji(T),v===null)return;if(C=v.tag,C===5||C===6){c=p=v;continue e}T=T.parentNode}}c=c.return}jo(function(){var U=p,Q=ys(a),X=[];e:{var q=$f.get(n);if(q!==void 0){var re=Ns,oe=n;switch(n){case"keypress":if(xs(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":oe="focus",re=Os;break;case"focusout":oe="blur",re=Os;break;case"beforeblur":case"afterblur":re=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=gl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=j;break;case Uf:case jf:case zf:re=gr;break;case Bf:re=Ue;break;case"scroll":re=Tc;break;case"wheel":re=be;break;case"copy":case"cut":case"paste":re=_l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=w}var le=(r&4)!==0,rt=!le&&n==="scroll",M=le?q!==null?q+"Capture":null:q;le=[];for(var N=U,F;N!==null;){F=N;var Z=F.stateNode;if(F.tag===5&&Z!==null&&(F=Z,M!==null&&(Z=nt(N,M),Z!=null&&le.push(sa(N,Z,F)))),rt)break;N=N.return}0<le.length&&(q=new re(q,oe,null,a,Q),X.push({event:q,listeners:le}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",q&&a!==Ci&&(oe=a.relatedTarget||a.fromElement)&&(ji(oe)||oe[yr]))break e;if((re||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,re?(oe=a.relatedTarget||a.toElement,re=U,oe=oe?ji(oe):null,oe!==null&&(rt=Sn(oe),oe!==rt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=U),re!==oe)){if(le=Ds,Z="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(le=w,Z="onPointerLeave",M="onPointerEnter",N="pointer"),rt=re==null?q:$s(re),F=oe==null?q:$s(oe),q=new le(Z,N+"leave",re,a,Q),q.target=rt,q.relatedTarget=F,Z=null,ji(Q)===U&&(le=new le(M,N+"enter",oe,a,Q),le.target=F,le.relatedTarget=rt,Z=le),rt=Z,re&&oe)t:{for(le=re,M=oe,N=0,F=le;F;F=zs(F))N++;for(F=0,Z=M;Z;Z=zs(Z))F++;for(;0<N-F;)le=zs(le),N--;for(;0<F-N;)M=zs(M),F--;for(;N--;){if(le===M||M!==null&&le===M.alternate)break t;le=zs(le),M=zs(M)}le=null}else le=null;re!==null&&Kf(X,q,re,le,!1),oe!==null&&rt!==null&&Kf(X,rt,oe,le,!0)}}e:{if(q=U?$s(U):window,re=q.nodeName&&q.nodeName.toLowerCase(),re==="select"||re==="input"&&q.type==="file")var ue=W_;else if(Cf(q))if(Pf)ue=Q_;else{ue=G_;var pe=q_}else(re=q.nodeName)&&re.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ue=K_);if(ue&&(ue=ue(n,U))){Rf(X,ue,a,Q);break e}pe&&pe(n,q,U),n==="focusout"&&(pe=q._wrapperState)&&pe.controlled&&q.type==="number"&&ps(q,"number",q.value)}switch(pe=U?$s(U):window,n){case"focusin":(Cf(pe)||pe.contentEditable==="true")&&(Us=pe,kc=U,na=null);break;case"focusout":na=kc=Us=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Mf(X,a,Q);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":Mf(X,a,Q)}var me;if(st)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Fs?Af(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Ui&&a.locale!=="ko"&&(Fs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Fs&&(me=Qo()):(nn=Q,Ps="value"in nn?nn.value:nn.textContent,Fs=!0)),pe=Cl(U,ve),0<pe.length&&(ve=new Jo(ve,n,null,a,Q),X.push({event:ve,listeners:pe}),me?ve.data=me:(me=kf(a),me!==null&&(ve.data=me)))),(me=rn?z_(n,a):B_(n,a))&&(U=Cl(U,"onBeforeInput"),0<U.length&&(Q=new Jo("onBeforeInput","beforeinput",null,a,Q),X.push({event:Q,listeners:U}),Q.data=me))}qf(X,r)})}function sa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Cl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(sa(n,p,d)),p=nt(n,r),p!=null&&c.push(sa(n,p,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var T=a,C=T.alternate,U=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&U!==null&&(T=U,d?(C=nt(a,p),C!=null&&v.unshift(sa(a,C,T))):d||(C=nt(a,p),C!=null&&v.push(sa(a,C,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var n0=/\r\n?/g,r0=/\u0000|\uFFFD/g;function Qf(n){return(typeof n=="string"?n:""+n).replace(n0,`
`).replace(r0,"")}function Rl(n,r,a){if(r=Qf(r),Qf(n)!==r&&a)throw Error(t(425))}function Pl(){}var Dc=null,Vc=null;function Oc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(n){return Xf.resolve(null).then(n).catch(o0)}:Lc;function o0(n){setTimeout(function(){throw n})}function Mc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Yf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Bs,oa="__reactProps$"+Bs,yr="__reactContainer$"+Bs,Fc="__reactEvents$"+Bs,a0="__reactListeners$"+Bs,l0="__reactHandles$"+Bs;function ji(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[yr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Yf(n);n!==null;){if(a=n[Gn])return a;n=Yf(n)}return r}n=a,a=n.parentNode}return null}function aa(n){return n=n[Gn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[oa]||null}var Uc=[],Hs=-1;function Kr(n){return{current:n}}function qe(n){0>Hs||(n.current=Uc[Hs],Uc[Hs]=null,Hs--)}function He(n,r){Hs++,Uc[Hs]=n.current,n.current=r}var Qr={},Dt=Kr(Qr),Gt=Kr(!1),zi=Qr;function Ws(n,r){var a=n.type.contextTypes;if(!a)return Qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Nl(){qe(Gt),qe(Dt)}function Jf(n,r,a){if(Dt.current!==Qr)throw Error(t(168));He(Dt,r),He(Gt,a)}function Zf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,zi=Dt.current,He(Dt,n),He(Gt,Gt.current),!0}function ep(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Zf(n,r,zi),c.__reactInternalMemoizedMergedChildContext=n,qe(Gt),qe(Dt),He(Dt,n)):qe(Gt),He(Gt,a)}var vr=null,Dl=!1,jc=!1;function tp(n){vr===null?vr=[n]:vr.push(n)}function u0(n){Dl=!0,tp(n)}function Xr(){if(!jc&&vr!==null){jc=!0;var n=0,r=xe;try{var a=vr;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,Dl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Ss(bi,Xr),d}finally{xe=r,jc=!1}}return null}var qs=[],Gs=0,Vl=null,Ol=0,fn=[],pn=0,Bi=null,_r=1,wr="";function $i(n,r){qs[Gs++]=Ol,qs[Gs++]=Vl,Vl=n,Ol=r}function np(n,r,a){fn[pn++]=_r,fn[pn++]=wr,fn[pn++]=Bi,Bi=n;var c=_r;n=wr;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var p=32-zt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,_r=1<<32-zt(r)+d|a<<d|c,wr=p+n}else _r=1<<p|a<<d|c,wr=n}function zc(n){n.return!==null&&($i(n,1),np(n,1,0))}function Bc(n){for(;n===Vl;)Vl=qs[--Gs],qs[Gs]=null,Ol=qs[--Gs],qs[Gs]=null;for(;n===Bi;)Bi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,_r=fn[--pn],fn[pn]=null}var sn=null,on=null,Ye=!1,bn=null;function rp(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function ip(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Bi!==null?{id:_r,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hc(n){if(Ye){var r=on;if(r){var a=r;if(!ip(n,r)){if($c(n))throw Error(t(418));r=Gr(a.nextSibling);var c=sn;r&&ip(n,r)?rp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,sn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,sn=n}}}function sp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ll(n){if(n!==sn)return!1;if(!Ye)return sp(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Oc(n.type,n.memoizedProps)),r&&(r=on)){if($c(n))throw op(),Error(t(418));for(;r;)rp(n,r),r=Gr(r.nextSibling)}if(sp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Gr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Gr(n.stateNode.nextSibling):null;return!0}function op(){for(var n=on;n;)n=Gr(n.nextSibling)}function Ks(){on=sn=null,Ye=!1}function Wc(n){bn===null?bn=[n]:bn.push(n)}var c0=we.ReactCurrentBatchConfig;function la(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var T=d.refs;v===null?delete T[p]:T[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ap(n){var r=n._init;return r(n._payload)}function lp(n){function r(M,N){if(n){var F=M.deletions;F===null?(M.deletions=[N],M.flags|=16):F.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ii(M,N),M.index=0,M.sibling=null,M}function p(M,N,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<N?(M.flags|=2,N):F):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,F,Z){return N===null||N.tag!==6?(N=Lh(F,M.mode,Z),N.return=M,N):(N=d(N,F),N.return=M,N)}function C(M,N,F,Z){var ue=F.type;return ue===R?Q(M,N,F.props.children,Z,F.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ut&&ap(ue)===N.type)?(Z=d(N,F.props),Z.ref=la(M,N,F),Z.return=M,Z):(Z=au(F.type,F.key,F.props,null,M.mode,Z),Z.ref=la(M,N,F),Z.return=M,Z)}function U(M,N,F,Z){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Mh(F,M.mode,Z),N.return=M,N):(N=d(N,F.children||[]),N.return=M,N)}function Q(M,N,F,Z,ue){return N===null||N.tag!==7?(N=Yi(F,M.mode,Z,ue),N.return=M,N):(N=d(N,F),N.return=M,N)}function X(M,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Lh(""+N,M.mode,F),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ze:return F=au(N.type,N.key,N.props,null,M.mode,F),F.ref=la(M,null,N),F.return=M,F;case Ie:return N=Mh(N,M.mode,F),N.return=M,N;case ut:var Z=N._init;return X(M,Z(N._payload),F)}if(lr(N)||ne(N))return N=Yi(N,M.mode,F,null),N.return=M,N;Ml(M,N)}return null}function q(M,N,F,Z){var ue=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:T(M,N,""+F,Z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:return F.key===ue?C(M,N,F,Z):null;case Ie:return F.key===ue?U(M,N,F,Z):null;case ut:return ue=F._init,q(M,N,ue(F._payload),Z)}if(lr(F)||ne(F))return ue!==null?null:Q(M,N,F,Z,null);Ml(M,F)}return null}function re(M,N,F,Z,ue){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return M=M.get(F)||null,T(N,M,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ze:return M=M.get(Z.key===null?F:Z.key)||null,C(N,M,Z,ue);case Ie:return M=M.get(Z.key===null?F:Z.key)||null,U(N,M,Z,ue);case ut:var pe=Z._init;return re(M,N,F,pe(Z._payload),ue)}if(lr(Z)||ne(Z))return M=M.get(F)||null,Q(N,M,Z,ue,null);Ml(N,Z)}return null}function oe(M,N,F,Z){for(var ue=null,pe=null,me=N,ve=N=0,It=null;me!==null&&ve<F.length;ve++){me.index>ve?(It=me,me=null):It=me.sibling;var Oe=q(M,me,F[ve],Z);if(Oe===null){me===null&&(me=It);break}n&&me&&Oe.alternate===null&&r(M,me),N=p(Oe,N,ve),pe===null?ue=Oe:pe.sibling=Oe,pe=Oe,me=It}if(ve===F.length)return a(M,me),Ye&&$i(M,ve),ue;if(me===null){for(;ve<F.length;ve++)me=X(M,F[ve],Z),me!==null&&(N=p(me,N,ve),pe===null?ue=me:pe.sibling=me,pe=me);return Ye&&$i(M,ve),ue}for(me=c(M,me);ve<F.length;ve++)It=re(me,M,ve,F[ve],Z),It!==null&&(n&&It.alternate!==null&&me.delete(It.key===null?ve:It.key),N=p(It,N,ve),pe===null?ue=It:pe.sibling=It,pe=It);return n&&me.forEach(function(si){return r(M,si)}),Ye&&$i(M,ve),ue}function le(M,N,F,Z){var ue=ne(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var pe=ue=null,me=N,ve=N=0,It=null,Oe=F.next();me!==null&&!Oe.done;ve++,Oe=F.next()){me.index>ve?(It=me,me=null):It=me.sibling;var si=q(M,me,Oe.value,Z);if(si===null){me===null&&(me=It);break}n&&me&&si.alternate===null&&r(M,me),N=p(si,N,ve),pe===null?ue=si:pe.sibling=si,pe=si,me=It}if(Oe.done)return a(M,me),Ye&&$i(M,ve),ue;if(me===null){for(;!Oe.done;ve++,Oe=F.next())Oe=X(M,Oe.value,Z),Oe!==null&&(N=p(Oe,N,ve),pe===null?ue=Oe:pe.sibling=Oe,pe=Oe);return Ye&&$i(M,ve),ue}for(me=c(M,me);!Oe.done;ve++,Oe=F.next())Oe=re(me,M,ve,Oe.value,Z),Oe!==null&&(n&&Oe.alternate!==null&&me.delete(Oe.key===null?ve:Oe.key),N=p(Oe,N,ve),pe===null?ue=Oe:pe.sibling=Oe,pe=Oe);return n&&me.forEach(function($0){return r(M,$0)}),Ye&&$i(M,ve),ue}function rt(M,N,F,Z){if(typeof F=="object"&&F!==null&&F.type===R&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:e:{for(var ue=F.key,pe=N;pe!==null;){if(pe.key===ue){if(ue=F.type,ue===R){if(pe.tag===7){a(M,pe.sibling),N=d(pe,F.props.children),N.return=M,M=N;break e}}else if(pe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ut&&ap(ue)===pe.type){a(M,pe.sibling),N=d(pe,F.props),N.ref=la(M,pe,F),N.return=M,M=N;break e}a(M,pe);break}else r(M,pe);pe=pe.sibling}F.type===R?(N=Yi(F.props.children,M.mode,Z,F.key),N.return=M,M=N):(Z=au(F.type,F.key,F.props,null,M.mode,Z),Z.ref=la(M,N,F),Z.return=M,M=Z)}return v(M);case Ie:e:{for(pe=F.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(M,N.sibling),N=d(N,F.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=Mh(F,M.mode,Z),N.return=M,M=N}return v(M);case ut:return pe=F._init,rt(M,N,pe(F._payload),Z)}if(lr(F))return oe(M,N,F,Z);if(ne(F))return le(M,N,F,Z);Ml(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,F),N.return=M,M=N):(a(M,N),N=Lh(F,M.mode,Z),N.return=M,M=N),v(M)):a(M,N)}return rt}var Qs=lp(!0),up=lp(!1),Fl=Kr(null),Ul=null,Xs=null,qc=null;function Gc(){qc=Xs=Ul=null}function Kc(n){var r=Fl.current;qe(Fl),n._currentValue=r}function Qc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ys(n,r){Ul=n,qc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Qt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if(Ul===null)throw Error(t(308));Xs=n,Ul.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Hi=null;function Xc(n){Hi===null?Hi=[n]:Hi.push(n)}function cp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Xc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Er(n,c)}function Er(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Yr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Jr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Er(n,a)}return d=c.interleaved,d===null?(r.next=r,Xc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Er(n,a)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}function dp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;Yr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,U=C.next;C.next=null,v===null?p=U:v.next=U,v=C;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=U:T.next=U,Q.lastBaseUpdate=C))}if(p!==null){var X=d.baseState;v=0,Q=U=C=null,T=p;do{var q=T.lane,re=T.eventTime;if((c&q)===q){Q!==null&&(Q=Q.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,le=T;switch(q=r,re=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){X=oe.call(re,X,q);break e}X=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,q=typeof oe=="function"?oe.call(re,X,q):oe,q==null)break e;X=ee({},X,q);break e;case 2:Yr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else re={eventTime:re,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(U=Q=re,C=X):Q=Q.next=re,v|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(Q===null&&(C=X),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Gi|=v,n.lanes=v,n.memoizedState=X}}function fp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Kn=Kr(ua),ca=Kr(ua),ha=Kr(ua);function Wi(n){if(n===ua)throw Error(t(174));return n}function Jc(n,r){switch(He(ha,r),He(ca,n),He(Kn,ua),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ht(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ht(r,n)}qe(Kn),He(Kn,r)}function Js(){qe(Kn),qe(ca),qe(ha)}function pp(n){Wi(ha.current);var r=Wi(Kn.current),a=ht(r,n.type);r!==a&&(He(ca,n),He(Kn,a))}function Zc(n){ca.current===n&&(qe(Kn),qe(ca))}var Je=Kr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var eh=[];function th(){for(var n=0;n<eh.length;n++)eh[n]._workInProgressVersionPrimary=null;eh.length=0}var $l=we.ReactCurrentDispatcher,nh=we.ReactCurrentBatchConfig,qi=0,Ze=null,ft=null,Et=null,Hl=!1,da=!1,fa=0,h0=0;function Vt(){throw Error(t(321))}function rh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function ih(n,r,a,c,d,p){if(qi=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$l.current=n===null||n.memoizedState===null?m0:g0,n=a(c,d),da){p=0;do{if(da=!1,fa=0,25<=p)throw Error(t(301));p+=1,Et=ft=null,r.updateQueue=null,$l.current=y0,n=a(c,d)}while(da)}if($l.current=Gl,r=ft!==null&&ft.next!==null,qi=0,Et=ft=Ze=null,Hl=!1,r)throw Error(t(300));return n}function sh(){var n=fa!==0;return fa=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(ft===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var r=Et===null?Ze.memoizedState:Et.next;if(r!==null)Et=r,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function pa(n,r){return typeof r=="function"?r(n):r}function oh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=v=null,C=null,U=p;do{var Q=U.lane;if((qi&Q)===Q)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(T=C=X,v=c):C=C.next=X,Ze.lanes|=Q,Gi|=Q}U=U.next}while(U!==null&&U!==p);C===null?v=c:C.next=T,Nn(c,r.memoizedState)||(Qt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,Gi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ah(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Nn(p,r.memoizedState)||(Qt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function mp(){}function gp(n,r){var a=Ze,c=gn(),d=r(),p=!Nn(c.memoizedState,d);if(p&&(c.memoizedState=d,Qt=!0),c=c.queue,lh(_p.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ma(9,vp.bind(null,a,c,d,r),void 0,null),Tt===null)throw Error(t(349));(qi&30)!==0||yp(a,r,d)}return d}function yp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function vp(n,r,a,c){r.value=a,r.getSnapshot=c,wp(r)&&Ep(n)}function _p(n,r,a){return a(function(){wp(r)&&Ep(n)})}function wp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Ep(n){var r=Er(n,1);r!==null&&Ln(r,n,1,-1)}function Tp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},r.queue=n,n=n.dispatch=p0.bind(null,Ze,n),[r.memoizedState,n]}function ma(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Ip(){return gn().memoizedState}function Wl(n,r,a,c){var d=Qn();Ze.flags|=n,d.memoizedState=ma(1|r,a,void 0,c===void 0?null:c)}function ql(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var v=ft.memoizedState;if(p=v.destroy,c!==null&&rh(c,v.deps)){d.memoizedState=ma(r,a,p,c);return}}Ze.flags|=n,d.memoizedState=ma(1|r,a,p,c)}function Sp(n,r){return Wl(8390656,8,n,r)}function lh(n,r){return ql(2048,8,n,r)}function Ap(n,r){return ql(4,2,n,r)}function kp(n,r){return ql(4,4,n,r)}function Cp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Rp(n,r,a){return a=a!=null?a.concat([n]):null,ql(4,4,Cp.bind(null,r,n),a)}function uh(){}function Pp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&rh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function xp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&rh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Np(n,r,a){return(qi&21)===0?(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a):(Nn(a,r)||(a=Oi(),Ze.lanes|=a,Gi|=a,n.baseState=!0),r)}function d0(n,r){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=nh.transition;nh.transition={};try{n(!1),r()}finally{xe=a,nh.transition=c}}function bp(){return gn().memoizedState}function f0(n,r,a){var c=ni(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dp(n))Vp(r,a);else if(a=cp(n,r,a,c),a!==null){var d=Ht();Ln(a,n,c,d),Op(a,r,c)}}function p0(n,r,a){var c=ni(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dp(n))Vp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,T=p(v,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,v)){var C=r.interleaved;C===null?(d.next=d,Xc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=cp(n,r,d,c),a!==null&&(d=Ht(),Ln(a,n,c,d),Op(a,r,c))}}function Dp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Vp(n,r){da=Hl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Op(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,zr(n,a)}}var Gl={readContext:mn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},m0={readContext:mn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Sp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4194308,4,Cp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Wl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=f0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Tp,useDebugValue:uh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Tp(!1),r=n[0];return n=d0.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Tt===null)throw Error(t(349));(qi&30)!==0||yp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Sp(_p.bind(null,c,p,n),[n]),c.flags|=2048,ma(9,vp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Qn(),r=Tt.identifierPrefix;if(Ye){var a=wr,c=_r;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=fa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=h0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},g0={readContext:mn,useCallback:Pp,useContext:mn,useEffect:lh,useImperativeHandle:Rp,useInsertionEffect:Ap,useLayoutEffect:kp,useMemo:xp,useReducer:oh,useRef:Ip,useState:function(){return oh(pa)},useDebugValue:uh,useDeferredValue:function(n){var r=gn();return Np(r,ft.memoizedState,n)},useTransition:function(){var n=oh(pa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:mp,useSyncExternalStore:gp,useId:bp,unstable_isNewReconciler:!1},y0={readContext:mn,useCallback:Pp,useContext:mn,useEffect:lh,useImperativeHandle:Rp,useInsertionEffect:Ap,useLayoutEffect:kp,useMemo:xp,useReducer:ah,useRef:Ip,useState:function(){return ah(pa)},useDebugValue:uh,useDeferredValue:function(n){var r=gn();return ft===null?r.memoizedState=n:Np(r,ft.memoizedState,n)},useTransition:function(){var n=ah(pa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:mp,useSyncExternalStore:gp,useId:bp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ch(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Tr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Ln(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=ni(n),p=Tr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Jr(n,p,d),r!==null&&(Ln(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=ni(n),d=Tr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Jr(n,d,c),r!==null&&(Ln(r,n,c,a),jl(r,n,c))}};function Lp(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!ta(a,c)||!ta(d,p):!0}function Mp(n,r,a){var c=!1,d=Qr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Kt(r)?zi:Dt.current,c=r.contextTypes,p=(c=c!=null)?Ws(n,d):Qr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Fp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function hh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Kt(r)?zi:Dt.current,d.context=Ws(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(ch(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Kl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var a="",c=r;do a+=ke(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function dh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function fh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function Up(n,r,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){tu||(tu=!0,Rh=c),fh(n,r)},a}function jp(n,r,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){fh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){fh(n,r),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function zp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new v0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=b0.bind(null,n,r,a),r.then(n,n))}function Bp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function $p(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Tr(-1,1),r.tag=2,Jr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var _0=we.ReactCurrentOwner,Qt=!1;function $t(n,r,a,c){r.child=n===null?up(r,null,a,c):Qs(r,n.child,a,c)}function Hp(n,r,a,c,d){a=a.render;var p=r.ref;return Ys(r,d),c=ih(n,r,a,c,p,d),a=sh(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ir(n,r,d)):(Ye&&a&&zc(r),r.flags|=1,$t(n,r,c,d),r.child)}function Wp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Oh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,qp(n,r,p,c,d)):(n=au(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:ta,a(v,c)&&n.ref===r.ref)return Ir(n,r,d)}return r.flags|=1,n=ii(p,c),n.ref=r.ref,n.return=r,r.child=n}function qp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ta(p,c)&&n.ref===r.ref)if(Qt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qt=!0);else return r.lanes=n.lanes,Ir(n,r,d)}return ph(n,r,a,c,d)}function Gp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(to,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(to,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(to,an),an|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(to,an),an|=c;return $t(n,r,d,a),r.child}function Kp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ph(n,r,a,c,d){var p=Kt(a)?zi:Dt.current;return p=Ws(r,p),Ys(r,d),a=ih(n,r,a,c,p,d),c=sh(),n!==null&&!Qt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Ir(n,r,d)):(Ye&&c&&zc(r),r.flags|=1,$t(n,r,a,d),r.child)}function Qp(n,r,a,c,d){if(Kt(a)){var p=!0;bl(r)}else p=!1;if(Ys(r,d),r.stateNode===null)Xl(n,r),Mp(r,a,c),hh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var C=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=mn(U):(U=Kt(a)?zi:Dt.current,U=Ws(r,U));var Q=a.getDerivedStateFromProps,X=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||C!==U)&&Fp(r,v,c,U),Yr=!1;var q=r.memoizedState;v.state=q,zl(r,c,v,d),C=r.memoizedState,T!==c||q!==C||Gt.current||Yr?(typeof Q=="function"&&(ch(r,a,Q,c),C=r.memoizedState),(T=Yr||Lp(r,a,T,c,q,C,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,hp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Dn(r.type,T),v.props=U,X=r.pendingProps,q=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=mn(C):(C=Kt(a)?zi:Dt.current,C=Ws(r,C));var re=a.getDerivedStateFromProps;(Q=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==X||q!==C)&&Fp(r,v,c,C),Yr=!1,q=r.memoizedState,v.state=q,zl(r,c,v,d);var oe=r.memoizedState;T!==X||q!==oe||Gt.current||Yr?(typeof re=="function"&&(ch(r,a,re,c),oe=r.memoizedState),(U=Yr||Lp(r,a,U,c,q,oe,C)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),v.props=c,v.state=oe,v.context=C,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return mh(n,r,a,c,p,d)}function mh(n,r,a,c,d,p){Kp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&ep(r,a,!1),Ir(n,r,p);c=r.stateNode,_0.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Qs(r,n.child,null,p),r.child=Qs(r,null,T,p)):$t(n,r,T,p),r.memoizedState=c.state,d&&ep(r,a,!0),r.child}function Xp(n){var r=n.stateNode;r.pendingContext?Jf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Jf(n,r.context,!1),Jc(n,r.containerInfo)}function Yp(n,r,a,c,d){return Ks(),Wc(d),r.flags|=256,$t(n,r,a,c),r.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jp(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return Hc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=lu(v,c,0,null),n=Yi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=yh(a),r.memoizedState=gh,n):vh(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return w0(n,r,v,c,T,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ii(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ii(T,p):(p=Yi(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?yh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=gh,c}return p=n.child,n=p.sibling,c=ii(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function vh(n,r){return r=lu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ql(n,r,a,c){return c!==null&&Wc(c),Qs(r,n.child,null,a),n=vh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function w0(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=dh(Error(t(422))),Ql(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=lu({mode:"visible",children:c.children},d,0,null),p=Yi(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Qs(r,n.child,null,v),r.child.memoizedState=yh(v),r.memoizedState=gh,p);if((r.mode&1)===0)return Ql(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=dh(p,c,void 0),Ql(n,r,v,c)}if(T=(v&n.childLanes)!==0,Qt||T){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Er(n,d),Ln(c,n,d,-1))}return Vh(),c=dh(Error(t(421))),Ql(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=D0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=Gr(d.nextSibling),sn=r,Ye=!0,bn=null,n!==null&&(fn[pn++]=_r,fn[pn++]=wr,fn[pn++]=Bi,_r=n.id,wr=n.overflow,Bi=r),r=vh(r,c.children),r.flags|=4096,r)}function Zp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Qc(n.return,r,a)}function _h(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function em(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if($t(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zp(n,a,r);else if(n.tag===19)Zp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),_h(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}_h(r,!0,a,null,p);break;case"together":_h(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ir(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ii(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ii(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function E0(n,r,a){switch(r.tag){case 3:Xp(r),Ks();break;case 5:pp(r);break;case 1:Kt(r.type)&&bl(r);break;case 4:Jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Fl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Jp(n,r,a):(He(Je,Je.current&1),n=Ir(n,r,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return em(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,Gp(n,r,a)}return Ir(n,r,a)}var tm,wh,nm,rm;tm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wh=function(){},nm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Wi(Kn.current);var p=null;switch(a){case"input":d=Si(n,d),c=Si(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=xo(n,d),c=xo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pl)}Lo(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var C=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&C!==T&&(C!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&T[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(p||(p=[]),p.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&We("scroll",n),p||T===C||(p=[])):(p=p||[]).push(U,C))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},rm=function(n,r,a,c){a!==c&&(r.flags|=4)};function ga(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function T0(n,r,a){var c=r.pendingProps;switch(Bc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Kt(r.type)&&Nl(),Ot(r),null;case 3:return c=r.stateNode,Js(),qe(Gt),qe(Dt),th(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bn!==null&&(Nh(bn),bn=null))),wh(n,r),Ot(r),null;case 5:Zc(r);var d=Wi(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)nm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Wi(Kn.current),Ll(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Gn]=r,c[oa]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)We(ra[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":fs(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":ms(c,p),We("invalid",c)}Lo(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var T=p[v];v==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Rl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Rl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":ar(c),el(c,p,!0);break;case"textarea":ar(c),No(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Pl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Gn]=r,n[oa]=c,tm(n,r,!1,!1),r.stateNode=n;e:{switch(v=Mo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)We(ra[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":fs(n,c),d=Si(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),We("invalid",n);break;case"textarea":ms(n,c),d=xo(n,c),We("invalid",n);break;default:d=c}Lo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?Vo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&bo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Lr(n,C):typeof C=="number"&&Lr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&We("scroll",n):C!=null&&ge(n,p,C,v))}switch(a){case"input":ar(n),el(n,c,!1);break;case"textarea":ar(n),No(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ur(n,!!c.multiple,p,!1):c.defaultValue!=null&&ur(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)rm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Wi(ha.current),Wi(Kn.current),Ll(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Rl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Ot(r),null;case 13:if(qe(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)op(),Ks(),r.flags|=98560,p=!1;else if(p=Ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Gn]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else bn!==null&&(Nh(bn),bn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?pt===0&&(pt=3):Vh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Js(),wh(n,r),n===null&&ia(r.stateNode.containerInfo),Ot(r),null;case 10:return Kc(r.type._context),Ot(r),null;case 17:return Kt(r.type)&&Nl(),Ot(r),null;case 19:if(qe(Je),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)ga(p,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Bl(n),v!==null){for(r.flags|=128,ga(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>no&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ga(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ye)return Ot(r),null}else 2*$e()-p.renderingStartTime>no&&a!==1073741824&&(r.flags|=128,c=!0,ga(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Dh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function I0(n,r){switch(Bc(r),r.tag){case 1:return Kt(r.type)&&Nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Js(),qe(Gt),qe(Dt),th(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Zc(r),null;case 13:if(qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Je),null;case 4:return Js(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var Yl=!1,Lt=!1,S0=typeof WeakSet=="function"?WeakSet:Set,se=null;function eo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,r,c)}else a.current=null}function Eh(n,r,a){try{a()}catch(c){tt(n,r,c)}}var im=!1;function A0(n,r){if(Dc=Hr,n=Lf(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,U=0,Q=0,X=n,q=null;t:for(;;){for(var re;X!==a||d!==0&&X.nodeType!==3||(T=v+d),X!==p||c!==0&&X.nodeType!==3||(C=v+c),X.nodeType===3&&(v+=X.nodeValue.length),(re=X.firstChild)!==null;)q=X,X=re;for(;;){if(X===n)break t;if(q===a&&++U===d&&(T=v),q===p&&++Q===c&&(C=v),(re=X.nextSibling)!==null)break;X=q,q=X.parentNode}X=re}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Hr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,rt=oe.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?le:Dn(r.type,le),rt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){tt(r,r.return,Z)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=im,im=!1,oe}function ya(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Eh(r,a,p)}d=d.next}while(d!==c)}}function Jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Th(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function sm(n){var r=n.alternate;r!==null&&(n.alternate=null,sm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[oa],delete r[Fc],delete r[a0],delete r[l0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function om(n){return n.tag===5||n.tag===3||n.tag===4}function am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||om(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,a),n=n.sibling;n!==null;)Ih(n,r,a),n=n.sibling}function Sh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Sh(n,r,a),n=n.sibling;n!==null;)Sh(n,r,a),n=n.sibling}var Rt=null,Vn=!1;function Zr(n,r,a){for(a=a.child;a!==null;)lm(n,r,a),a=a.sibling}function lm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 5:Lt||eo(a,r);case 6:var c=Rt,d=Vn;Rt=null,Zr(n,r,a),Rt=c,Vn=d,Rt!==null&&(Vn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Vn?(n=Rt,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Pn(n)):Mc(Rt,a.stateNode));break;case 4:c=Rt,d=Vn,Rt=a.stateNode.containerInfo,Vn=!0,Zr(n,r,a),Rt=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Eh(a,r,v),d=d.next}while(d!==c)}Zr(n,r,a);break;case 1:if(!Lt&&(eo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){tt(a,r,T)}Zr(n,r,a);break;case 21:Zr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Zr(n,r,a),Lt=c):Zr(n,r,a);break;default:Zr(n,r,a)}}function um(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new S0),r.forEach(function(c){var d=V0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:Rt=T.stateNode,Vn=!1;break e;case 3:Rt=T.stateNode.containerInfo,Vn=!0;break e;case 4:Rt=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(Rt===null)throw Error(t(160));lm(p,v,d),Rt=null,Vn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){tt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)cm(r,n),r=r.sibling}function cm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Xn(n),c&4){try{ya(3,n,n.return),Jl(3,n)}catch(le){tt(n,n.return,le)}try{ya(5,n,n.return)}catch(le){tt(n,n.return,le)}}break;case 1:On(r,n),Xn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(On(r,n),Xn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{Lr(d,"")}catch(le){tt(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Ro(d,p),Mo(T,v);var U=Mo(T,p);for(v=0;v<C.length;v+=2){var Q=C[v],X=C[v+1];Q==="style"?Vo(d,X):Q==="dangerouslySetInnerHTML"?bo(d,X):Q==="children"?Lr(d,X):ge(d,Q,X,U)}switch(T){case"input":Po(d,p);break;case"textarea":gs(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?ur(d,!!p.multiple,re,!1):q!==!!p.multiple&&(p.defaultValue!=null?ur(d,!!p.multiple,p.defaultValue,!0):ur(d,!!p.multiple,p.multiple?[]:"",!1))}d[oa]=p}catch(le){tt(n,n.return,le)}}break;case 6:if(On(r,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(le){tt(n,n.return,le)}}break;case 3:if(On(r,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(le){tt(n,n.return,le)}break;case 4:On(r,n),Xn(n);break;case 13:On(r,n),Xn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ch=$e())),c&4&&um(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||Q,On(r,n),Lt=U):On(r,n),Xn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(se=n,Q=n.child;Q!==null;){for(X=se=Q;se!==null;){switch(q=se,re=q.child,q.tag){case 0:case 11:case 14:case 15:ya(4,q,q.return);break;case 1:eo(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(le){tt(c,a,le)}}break;case 5:eo(q,q.return);break;case 22:if(q.memoizedState!==null){fm(X);continue}}re!==null?(re.return=q,se=re):fm(X)}Q=Q.sibling}e:for(Q=null,X=n;;){if(X.tag===5){if(Q===null){Q=X;try{d=X.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=X.stateNode,C=X.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Do("display",v))}catch(le){tt(n,n.return,le)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(le){tt(n,n.return,le)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:On(r,n),Xn(n),c&4&&um(n);break;case 21:break;default:On(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(om(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Lr(d,""),c.flags&=-33);var p=am(n);Sh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=am(n);Ih(n,T,v);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function k0(n,r,a){se=n,hm(n)}function hm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Yl;if(!v){var T=d.alternate,C=T!==null&&T.memoizedState!==null||Lt;T=Yl;var U=Lt;if(Yl=v,(Lt=C)&&!U)for(se=d;se!==null;)v=se,C=v.child,v.tag===22&&v.memoizedState!==null?pm(d):C!==null?(C.return=v,se=C):pm(d);for(;p!==null;)se=p,hm(p),p=p.sibling;se=d,Yl=T,Lt=U}dm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):dm(n)}}function dm(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&fp(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}fp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&Pn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Th(r)}catch(q){tt(r,r.return,q)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function fm(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function pm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Jl(4,r)}catch(C){tt(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){tt(r,d,C)}}var p=r.return;try{Th(r)}catch(C){tt(r,p,C)}break;case 5:var v=r.return;try{Th(r)}catch(C){tt(r,v,C)}}}catch(C){tt(r,r.return,C)}if(r===n){se=null;break}var T=r.sibling;if(T!==null){T.return=r.return,se=T;break}se=r.return}}var C0=Math.ceil,Zl=we.ReactCurrentDispatcher,Ah=we.ReactCurrentOwner,yn=we.ReactCurrentBatchConfig,Ve=0,Tt=null,ot=null,Pt=0,an=0,to=Kr(0),pt=0,va=null,Gi=0,eu=0,kh=0,_a=null,Xt=null,Ch=0,no=1/0,Sr=null,tu=!1,Rh=null,ei=null,nu=!1,ti=null,ru=0,wa=0,Ph=null,iu=-1,su=0;function Ht(){return(Ve&6)!==0?$e():iu!==-1?iu:iu=$e()}function ni(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Pt!==0?Pt&-Pt:c0.transition!==null?(su===0&&(su=Oi()),su):(n=xe,n!==0||(n=window.event,n=n===void 0?16:Ko(n.type)),n)}function Ln(n,r,a,c){if(50<wa)throw wa=0,Ph=null,Error(t(185));jr(n,a,c),((Ve&2)===0||n!==Tt)&&(n===Tt&&((Ve&2)===0&&(eu|=a),pt===4&&ri(n,Pt)),Yt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(no=$e()+500,Dl&&Xr()))}function Yt(n,r){var a=n.callbackNode;dr(n,r);var c=Vi(n,n===Tt?Pt:0);if(c===0)a!==null&&$o(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&$o(a),r===1)n.tag===0?u0(gm.bind(null,n)):tp(gm.bind(null,n)),s0(function(){(Ve&6)===0&&Xr()}),a=null;else{switch(Br(c)){case 1:a=bi;break;case 4:a=Mr;break;case 16:a=cn;break;case 536870912:a=sl;break;default:a=cn}a=Sm(a,mm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function mm(n,r){if(iu=-1,su=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=Vi(n,n===Tt?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ou(n,c);else{r=c;var d=Ve;Ve|=2;var p=vm();(Tt!==n||Pt!==r)&&(Sr=null,no=$e()+500,Qi(n,r));do try{x0();break}catch(T){ym(n,T)}while(!0);Gc(),Zl.current=p,Ve=d,ot!==null?r=0:(Tt=null,Pt=0,r=pt)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=xh(n,d))),r===1)throw a=va,Qi(n,0),ri(n,c),Yt(n,$e()),a;if(r===6)ri(n,c);else{if(d=n.current.alternate,(c&30)===0&&!R0(d)&&(r=ou(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=xh(n,p))),r===1))throw a=va,Qi(n,0),ri(n,c),Yt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Xi(n,Xt,Sr);break;case 3:if(ri(n,c),(c&130023424)===c&&(r=Ch+500-$e(),10<r)){if(Vi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(Xi.bind(null,n,Xt,Sr),r);break}Xi(n,Xt,Sr);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-zt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*C0(c/1960))-c,10<c){n.timeoutHandle=Lc(Xi.bind(null,n,Xt,Sr),c);break}Xi(n,Xt,Sr);break;case 5:Xi(n,Xt,Sr);break;default:throw Error(t(329))}}}return Yt(n,$e()),n.callbackNode===a?mm.bind(null,n):null}function xh(n,r){var a=_a;return n.current.memoizedState.isDehydrated&&(Qi(n,r).flags|=256),n=ou(n,r),n!==2&&(r=Xt,Xt=a,r!==null&&Nh(r)),n}function Nh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function R0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Nn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ri(n,r){for(r&=~kh,r&=~eu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-zt(r),c=1<<a;n[a]=-1,r&=~c}}function gm(n){if((Ve&6)!==0)throw Error(t(327));ro();var r=Vi(n,0);if((r&1)===0)return Yt(n,$e()),null;var a=ou(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=xh(n,c))}if(a===1)throw a=va,Qi(n,0),ri(n,r),Yt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Xi(n,Xt,Sr),Yt(n,$e()),null}function bh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(no=$e()+500,Dl&&Xr())}}function Ki(n){ti!==null&&ti.tag===0&&(Ve&6)===0&&ro();var r=Ve;Ve|=1;var a=yn.transition,c=xe;try{if(yn.transition=null,xe=1,n)return n()}finally{xe=c,yn.transition=a,Ve=r,(Ve&6)===0&&Xr()}}function Dh(){an=to.current,qe(to)}function Qi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,i0(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Js(),qe(Gt),qe(Dt),th();break;case 5:Zc(c);break;case 4:Js();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:Kc(c.type._context);break;case 22:case 23:Dh()}a=a.return}if(Tt=n,ot=n=ii(n.current,null),Pt=an=r,pt=0,va=null,kh=eu=Gi=0,Xt=_a=null,Hi!==null){for(r=0;r<Hi.length;r++)if(a=Hi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Hi=null}return n}function ym(n,r){do{var a=ot;try{if(Gc(),$l.current=Gl,Hl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Hl=!1}if(qi=0,Et=ft=Ze=null,da=!1,fa=0,Ah.current=null,a===null||a.return===null){pt=1,va=r,ot=null;break}e:{var p=n,v=a.return,T=a,C=r;if(r=Pt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,Q=T,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var q=Q.alternate;q?(Q.updateQueue=q.updateQueue,Q.memoizedState=q.memoizedState,Q.lanes=q.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var re=Bp(v);if(re!==null){re.flags&=-257,$p(re,v,T,p,r),re.mode&1&&zp(p,U,r),r=re,C=U;var oe=r.updateQueue;if(oe===null){var le=new Set;le.add(C),r.updateQueue=le}else oe.add(C);break e}else{if((r&1)===0){zp(p,U,r),Vh();break e}C=Error(t(426))}}else if(Ye&&T.mode&1){var rt=Bp(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),$p(rt,v,T,p,r),Wc(Zs(C,T));break e}}p=C=Zs(C,T),pt!==4&&(pt=2),_a===null?_a=[p]:_a.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Up(p,C,r);dp(p,M);break e;case 1:T=C;var N=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ei===null||!ei.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var Z=jp(p,T,r);dp(p,Z);break e}}p=p.return}while(p!==null)}wm(a)}catch(ue){r=ue,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function vm(){var n=Zl.current;return Zl.current=Gl,n===null?Gl:n}function Vh(){(pt===0||pt===3||pt===2)&&(pt=4),Tt===null||(Gi&268435455)===0&&(eu&268435455)===0||ri(Tt,Pt)}function ou(n,r){var a=Ve;Ve|=2;var c=vm();(Tt!==n||Pt!==r)&&(Sr=null,Qi(n,r));do try{P0();break}catch(d){ym(n,d)}while(!0);if(Gc(),Ve=a,Zl.current=c,ot!==null)throw Error(t(261));return Tt=null,Pt=0,pt}function P0(){for(;ot!==null;)_m(ot)}function x0(){for(;ot!==null&&!rl();)_m(ot)}function _m(n){var r=Im(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?wm(n):ot=r,Ah.current=null}function wm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=T0(a,r,an),a!==null){ot=a;return}}else{if(a=I0(a,r),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ot=null;return}}if(r=r.sibling,r!==null){ot=r;return}ot=r=n}while(r!==null);pt===0&&(pt=5)}function Xi(n,r,a){var c=xe,d=yn.transition;try{yn.transition=null,xe=1,N0(n,r,a,c)}finally{yn.transition=d,xe=c}return null}function N0(n,r,a,c){do ro();while(ti!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===Tt&&(ot=Tt=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||nu||(nu=!0,Sm(cn,function(){return ro(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var v=xe;xe=1;var T=Ve;Ve|=4,Ah.current=null,A0(n,a),cm(a,n),Y_(Vc),Hr=!!Dc,Vc=Dc=null,n.current=a,k0(a),yc(),Ve=T,xe=v,yn.transition=p}else n.current=a;if(nu&&(nu=!1,ti=n,ru=d),p=n.pendingLanes,p===0&&(ei=null),ol(a.stateNode),Yt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(tu)throw tu=!1,n=Rh,Rh=null,n;return(ru&1)!==0&&n.tag!==0&&ro(),p=n.pendingLanes,(p&1)!==0?n===Ph?wa++:(wa=0,Ph=n):wa=0,Xr(),null}function ro(){if(ti!==null){var n=Br(ru),r=yn.transition,a=xe;try{if(yn.transition=null,xe=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,ru=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,se=n.current;se!==null;){var p=se,v=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var U=T[C];for(se=U;se!==null;){var Q=se;switch(Q.tag){case 0:case 11:case 15:ya(8,Q,p)}var X=Q.child;if(X!==null)X.return=Q,se=X;else for(;se!==null;){Q=se;var q=Q.sibling,re=Q.return;if(sm(Q),Q===U){se=null;break}if(q!==null){q.return=re,se=q;break}se=re}}}var oe=p.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var rt=le.sibling;le.sibling=null,le=rt}while(le!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,se=v;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ya(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var N=n.current;for(se=N;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=N;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Jl(9,T)}}catch(ue){tt(T,T.return,ue)}if(T===v){se=null;break e}var Z=T.sibling;if(Z!==null){Z.return=T.return,se=Z;break e}se=T.return}}if(Ve=d,Xr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Di,n)}catch{}c=!0}return c}finally{xe=a,yn.transition=r}}return!1}function Em(n,r,a){r=Zs(a,r),r=Up(n,r,1),n=Jr(n,r,1),r=Ht(),n!==null&&(jr(n,1,r),Yt(n,r))}function tt(n,r,a){if(n.tag===3)Em(n,n,a);else for(;r!==null;){if(r.tag===3){Em(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=Zs(a,n),n=jp(r,n,1),r=Jr(r,n,1),n=Ht(),r!==null&&(jr(r,1,n),Yt(r,n));break}}r=r.return}}function b0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Pt&a)===a&&(pt===4||pt===3&&(Pt&130023424)===Pt&&500>$e()-Ch?Qi(n,0):kh|=a),Yt(n,r)}function Tm(n,r){r===0&&((n.mode&1)===0?r=1:(r=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var a=Ht();n=Er(n,r),n!==null&&(jr(n,r,a),Yt(n,a))}function D0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Tm(n,a)}function V0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Tm(n,a)}var Im;Im=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Gt.current)Qt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Qt=!1,E0(n,r,a);Qt=(n.flags&131072)!==0}else Qt=!1,Ye&&(r.flags&1048576)!==0&&np(r,Ol,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Xl(n,r),n=r.pendingProps;var d=Ws(r,Dt.current);Ys(r,a),d=ih(null,r,c,n,d,a);var p=sh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,bl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=Kl,r.stateNode=d,d._reactInternals=r,hh(r,c,n,a),r=mh(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&zc(r),$t(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Xl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=L0(c),n=Dn(c,n),d){case 0:r=ph(null,r,c,n,a);break e;case 1:r=Qp(null,r,c,n,a);break e;case 11:r=Hp(null,r,c,n,a);break e;case 14:r=Wp(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),ph(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Qp(n,r,c,d,a);case 3:e:{if(Xp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,hp(n,r),zl(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Zs(Error(t(423)),r),r=Yp(n,r,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),r),r=Yp(n,r,c,a,d);break e}else for(on=Gr(r.stateNode.containerInfo.firstChild),sn=r,Ye=!0,bn=null,a=up(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ks(),c===d){r=Ir(n,r,a);break e}$t(n,r,c,a)}r=r.child}return r;case 5:return pp(r),n===null&&Hc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,Oc(c,d)?v=null:p!==null&&Oc(c,p)&&(r.flags|=32),Kp(n,r),$t(n,r,v,a),r.child;case 6:return n===null&&Hc(r),null;case 13:return Jp(n,r,a);case 4:return Jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Qs(r,null,c,a):$t(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Hp(n,r,c,d,a);case 7:return $t(n,r,r.pendingProps,a),r.child;case 8:return $t(n,r,r.pendingProps.children,a),r.child;case 12:return $t(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,He(Fl,c._currentValue),c._currentValue=v,p!==null)if(Nn(p.value,v)){if(p.children===d.children&&!Gt.current){r=Ir(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){v=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=Tr(-1,a&-a),C.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?C.next=C:(C.next=Q.next,Q.next=C),U.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),Qc(p.return,a,r),T.lanes|=a;break}C=C.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),Qc(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}$t(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ys(r,a),d=mn(d),c=c(d),r.flags|=1,$t(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),Wp(n,r,c,d,a);case 15:return qp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Xl(n,r),r.tag=1,Kt(c)?(n=!0,bl(r)):n=!1,Ys(r,a),Mp(r,c,d),hh(r,c,d,a),mh(null,r,c,!0,n,a);case 19:return em(n,r,a);case 22:return Gp(n,r,a)}throw Error(t(156,r.tag))};function Sm(n,r){return Ss(n,r)}function O0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new O0(n,r,a,c)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L0(n){if(typeof n=="function")return Oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===vt)return 14}return 2}function ii(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function au(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")Oh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case R:return Yi(a.children,d,p,r);case I:v=8,d|=8;break;case A:return n=vn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Qe:return n=vn(19,a,r,d),n.elementType=Qe,n.lanes=p,n;case K:return lu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case b:v=9;break e;case V:v=11;break e;case vt:v=14;break e;case ut:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Yi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function lu(n,r,a,c){return n=vn(22,n,c,r),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Lh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function Mh(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function M0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fh(n,r,a,c,d,p,v,T,C){return n=new M0(n,r,a,T,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=vn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(p),n}function F0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Am(n){if(!n)return Qr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Zf(n,a,r)}return r}function km(n,r,a,c,d,p,v,T,C){return n=Fh(a,c,!0,n,d,p,v,T,C),n.context=Am(null),a=n.current,c=Ht(),d=ni(a),p=Tr(c,d),p.callback=r??null,Jr(a,p,d),n.current.lanes=d,jr(n,d,c),Yt(n,c),n}function uu(n,r,a,c){var d=r.current,p=Ht(),v=ni(d);return a=Am(a),r.context===null?r.context=a:r.pendingContext=a,r=Tr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Jr(d,r,v),n!==null&&(Ln(n,d,v,p),jl(n,d,v)),v}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Uh(n,r){Cm(n,r),(n=n.alternate)&&Cm(n,r)}function U0(){return null}var Rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function jh(n){this._internalRoot=n}hu.prototype.render=jh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));uu(n,r,null,null)},hu.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ki(function(){uu(null,n,null,null)}),r[yr]=null}};function hu(n){this._internalRoot=n}hu.prototype.unstable_scheduleHydration=function(n){if(n){var r=hl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<$n.length&&r!==0&&r<$n[a].priority;a++);$n.splice(a,0,n),a===0&&pl(n)}};function zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function j0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=cu(v);p.call(U)}}var v=km(r,c,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=v,n[yr]=v.current,ia(n.nodeType===8?n.parentNode:n),Ki(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=cu(C);T.call(U)}}var C=Fh(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=C,n[yr]=C.current,ia(n.nodeType===8?n.parentNode:n),Ki(function(){uu(r,C,a,c)}),C}function fu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var T=d;d=function(){var C=cu(v);T.call(C)}}uu(r,v,n,d)}else v=j0(a,r,n,d,c);return cu(v)}ul=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fr(r.pendingLanes);a!==0&&(zr(r,a|1),Yt(r,$e()),(Ve&6)===0&&(no=$e()+500,Xr()))}break;case 13:Ki(function(){var c=Er(n,1);if(c!==null){var d=Ht();Ln(c,n,1,d)}}),Uh(n,1)}},Cs=function(n){if(n.tag===13){var r=Er(n,134217728);if(r!==null){var a=Ht();Ln(r,n,134217728,a)}Uh(n,134217728)}},cl=function(n){if(n.tag===13){var r=ni(n),a=Er(n,r);if(a!==null){var c=Ht();Ln(a,n,r,c)}Uh(n,r)}},hl=function(){return xe},dl=function(n,r){var a=xe;try{return xe=n,r()}finally{xe=a}},vs=function(n,r,a){switch(r){case"input":if(Po(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));ds(c),Po(c,d)}}}break;case"textarea":gs(n,a);break;case"select":r=a.value,r!=null&&ur(n,!!a.multiple,r,!1)}},Ri=bh,Uo=Ki;var z0={usingClientEntryPoint:!1,Events:[aa,$s,xl,zn,Fo,bh]},Ea={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Di=pu.inject(B0),en=pu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0,Jt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(r))throw Error(t(200));return F0(n,r,null,a)},Jt.createRoot=function(n,r){if(!zh(n))throw Error(t(299));var a=!1,c="",d=Rm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Fh(n,1,!1,null,null,a,!1,c,d),n[yr]=r.current,ia(n.nodeType===8?n.parentNode:n),new jh(r)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bo(r),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return Ki(n)},Jt.hydrate=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!0,a)},Jt.hydrateRoot=function(n,r,a){if(!zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=Rm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=km(r,null,n,1,a??null,d,!1,p,v),n[yr]=r.current,ia(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new hu(r)},Jt.render=function(n,r,a){if(!du(r))throw Error(t(200));return fu(null,n,r,!1,a)},Jt.unmountComponentAtNode=function(n){if(!du(n))throw Error(t(40));return n._reactRootContainer?(Ki(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Jt.unstable_batchedUpdates=bh,Jt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!du(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fu(n,r,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var Mm;function X0(){if(Mm)return Hh.exports;Mm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Hh.exports=Q0(),Hh.exports}var Fm;function Y0(){if(Fm)return mu;Fm=1;var i=X0();return mu.createRoot=i.createRoot,mu.hydrateRoot=i.hydrateRoot,mu}var J0=Y0();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ew={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=St.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>St.createElement("svg",{ref:y,...ew,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:vy("lucide",o),...m},[...h.map(([_,E])=>St.createElement(_,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(i,e)=>{const t=St.forwardRef(({className:s,...o},u)=>St.createElement(tw,{ref:u,iconNode:e,className:vy(`lucide-${Z0(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Um=Un("CircleAlert",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gh=Un("CircleCheckBig",rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Kh=Un("ClipboardList",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Qh=Un("Info",sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],aw=Un("List",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],uw=Un("Plus",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],jm=Un("Search",cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],dw=Un("SquarePen",hw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],zm=Un("Trash2",fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],mw=Un("User",pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bm=Un("X",gw),yw=()=>{};var $m={};/**
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
 */const _y=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},vw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,E=u>>2,k=(u&3)<<4|m>>4;let x=(m&15)<<2|_>>6,B=_&63;y||(B=64,h||(x=64)),s.push(t[E],t[k],t[x],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_y(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):vw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||k==null)throw new _w;const x=u<<2|m>>4;if(s.push(x),_!==64){const B=m<<4&240|_>>2;if(s.push(B),k!==64){const J=_<<6&192|k;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class _w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(i){const e=_y(i);return wy.encodeByteArray(e,!0)},Du=function(i){return ww(i).replace(/\./g,"")},Ey=function(i){try{return wy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tw=()=>Ew().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof $m>"u")return;const i=$m.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Sw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ey(i[1]);return e&&JSON.parse(e)},Zu=()=>{try{return yw()||Tw()||Iw()||Sw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ty=i=>{var e,t;return(t=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Aw=i=>{const e=Ty(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Iy=()=>{var i;return(i=Zu())===null||i===void 0?void 0:i.config},Sy=i=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class kw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ay(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Cw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Du(JSON.stringify(t)),Du(JSON.stringify(h)),""].join(".")}const Ca={};function Rw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ca))Ca[e]?i.emulator.push(e):i.prod.push(e);return i}function Pw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Hm=!1;function ky(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Ca[i]===e||Ca[i]||Hm)return;Ca[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=Rw().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function y(x,B){x.setAttribute("width","24"),x.setAttribute("id",B),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function _(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Hm=!0,h()},x}function E(x,B){x.setAttribute("id",B),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function k(){const x=Pw(s),B=t("text"),J=document.getElementById(B)||document.createElement("span"),Y=t("learnmore"),W=document.getElementById(Y)||document.createElement("a"),de=t("preprendIcon"),he=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const ge=x.element;m(ge),E(W,Y);const we=_();y(he,de),ge.append(he,J,W,we),document.body.appendChild(ge)}u?(J.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Nw(){var i;const e=(i=Zu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ow(){const i=jt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Lw(){return!Nw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Uw="FirebaseError";class Vr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Uw,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?jw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Vr(o,m,s)}}function jw(i,e){return i.replace(zw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const zw=/\{\$([^}]+)}/g;function Bw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Wm(u)&&Wm(h)){if(!rs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Wm(i){return i!==null&&typeof i=="object"}/**
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
 */function $a(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $w(i,e){const t=new Hw(i,e);return t.subscribe.bind(t)}class Hw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ww(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ww(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Xh(){}/**
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
 */class qw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new kw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gw(i){return i===Ji?void 0:i}function Kw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const Xw={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Yw=Re.INFO,Jw={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},Zw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Jw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=Yw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const eE=(i,e)=>e.some(t=>i instanceof t);let qm,Gm;function tE(){return qm||(qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nE(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cy=new WeakMap,hd=new WeakMap,Ry=new WeakMap,Yh=new WeakMap,Md=new WeakMap;function rE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(di(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Cy.set(t,i)}).catch(()=>{}),Md.set(e,i),e}function iE(i){if(hd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});hd.set(i,e)}let dd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return hd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ry.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function sE(i){dd=i(dd)}function oE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Jh(this),e,...t);return Ry.set(s,e.sort?e.sort():[e]),di(s)}:nE().includes(i)?function(...e){return i.apply(Jh(this),e),di(Cy.get(this))}:function(...e){return di(i.apply(Jh(this),e))}}function aE(i){return typeof i=="function"?oE(i):(i instanceof IDBTransaction&&iE(i),eE(i,tE())?new Proxy(i,dd):i)}function di(i){if(i instanceof IDBRequest)return rE(i);if(Yh.has(i))return Yh.get(i);const e=aE(i);return e!==i&&(Yh.set(i,e),Md.set(e,i)),e}const Jh=i=>Md.get(i);function lE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=di(h);return s&&h.addEventListener("upgradeneeded",y=>{s(di(h.result),y.oldVersion,y.newVersion,di(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const uE=["get","getKey","getAll","getAllKeys","count"],cE=["put","add","delete","clear"],Zh=new Map;function Km(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=cE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return Zh.set(e,u),u}sE(i=>({...i,get:(e,t,s)=>Km(e,t)||i.get(e,t,s),has:(e,t)=>!!Km(e,t)||i.has(e,t)}));/**
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
 */class hE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",Qm="0.13.2";/**
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
 */const Rr=new Ld("@firebase/app"),fE="@firebase/app-compat",pE="@firebase/analytics-compat",mE="@firebase/analytics",gE="@firebase/app-check-compat",yE="@firebase/app-check",vE="@firebase/auth",_E="@firebase/auth-compat",wE="@firebase/database",EE="@firebase/data-connect",TE="@firebase/database-compat",IE="@firebase/functions",SE="@firebase/functions-compat",AE="@firebase/installations",kE="@firebase/installations-compat",CE="@firebase/messaging",RE="@firebase/messaging-compat",PE="@firebase/performance",xE="@firebase/performance-compat",NE="@firebase/remote-config",bE="@firebase/remote-config-compat",DE="@firebase/storage",VE="@firebase/storage-compat",OE="@firebase/firestore",LE="@firebase/ai",ME="@firebase/firestore-compat",FE="firebase",UE="11.10.0";/**
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
 */const pd="[DEFAULT]",jE={[fd]:"fire-core",[fE]:"fire-core-compat",[mE]:"fire-analytics",[pE]:"fire-analytics-compat",[yE]:"fire-app-check",[gE]:"fire-app-check-compat",[vE]:"fire-auth",[_E]:"fire-auth-compat",[wE]:"fire-rtdb",[EE]:"fire-data-connect",[TE]:"fire-rtdb-compat",[IE]:"fire-fn",[SE]:"fire-fn-compat",[AE]:"fire-iid",[kE]:"fire-iid-compat",[CE]:"fire-fcm",[RE]:"fire-fcm-compat",[PE]:"fire-perf",[xE]:"fire-perf-compat",[NE]:"fire-rc",[bE]:"fire-rc-compat",[DE]:"fire-gcs",[VE]:"fire-gcs-compat",[OE]:"fire-fst",[ME]:"fire-fst-compat",[LE]:"fire-vertex","fire-js":"fire-js",[FE]:"fire-js-all"};/**
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
 */const Vu=new Map,zE=new Map,md=new Map;function Xm(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function mo(i){const e=i.name;if(md.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;md.set(e,i);for(const t of Vu.values())Xm(t,i);for(const t of zE.values())Xm(t,i);return!0}function Fd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function _n(i){return i==null?!1:i.settings!==void 0}/**
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
 */const BE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Ba("app","Firebase",BE);/**
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
 */class $E{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const To=UE;function Py(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=Iy()),!t)throw fi.create("no-options");const u=Vu.get(o);if(u){if(rs(t,u.options)&&rs(s,u.config))return u;throw fi.create("duplicate-app",{appName:o})}const h=new Qw(o);for(const y of md.values())h.addComponent(y);const m=new $E(t,s,h);return Vu.set(o,m),m}function xy(i=pd){const e=Vu.get(i);if(!e&&i===pd&&Iy())return Py();if(!e)throw fi.create("no-app",{appName:i});return e}function pi(i,e,t){var s;let o=(s=jE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(m.join(" "));return}mo(new is(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const HE="firebase-heartbeat-database",WE=1,Da="firebase-heartbeat-store";let ed=null;function Ny(){return ed||(ed=lE(HE,WE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Da)}catch(t){console.warn(t)}}}}).catch(i=>{throw fi.create("idb-open",{originalErrorMessage:i.message})})),ed}async function qE(i){try{const t=(await Ny()).transaction(Da),s=await t.objectStore(Da).get(by(i));return await t.done,s}catch(e){if(e instanceof Vr)Rr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function Ym(i,e){try{const s=(await Ny()).transaction(Da,"readwrite");await s.objectStore(Da).put(e,by(i)),await s.done}catch(t){if(t instanceof Vr)Rr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function by(i){return`${i.name}!${i.options.appId}`}/**
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
 */const GE=1024,KE=30;class QE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new YE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Jm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>KE){const h=JE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jm(),{heartbeatsToSend:s,unsentEntries:o}=XE(this._heartbeatsCache.heartbeats),u=Du(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function Jm(){return new Date().toISOString().substring(0,10)}function XE(i,e=GE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Zm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Zm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class YE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Zm(i){return Du(JSON.stringify({version:2,heartbeats:i})).length}function JE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function ZE(i){mo(new is("platform-logger",e=>new hE(e),"PRIVATE")),mo(new is("heartbeat",e=>new QE(e),"PRIVATE")),pi(fd,Qm,i),pi(fd,Qm,"esm2017"),pi("fire-js","")}ZE("");var eT="firebase",tT="11.10.0";/**
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
 */pi(eT,tT,"app");function Ud(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nT=Dy,Vy=new Ba("auth","Firebase",Dy());/**
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
 */const Ou=new Ld("@firebase/auth");function rT(i,...e){Ou.logLevel<=Re.WARN&&Ou.warn(`Auth (${To}): ${i}`,...e)}function Iu(i,...e){Ou.logLevel<=Re.ERROR&&Ou.error(`Auth (${To}): ${i}`,...e)}/**
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
 */function Pr(i,...e){throw jd(i,...e)}function Jn(i,...e){return jd(i,...e)}function Oy(i,e,t){const s=Object.assign(Object.assign({},nT()),{[e]:t});return new Ba("auth","Firebase",s).create(e,{appName:i.name})}function Cr(i){return Oy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Vy.create(i,...e)}function _e(i,e,...t){if(!i)throw jd(e,...t)}function Ar(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Iu(e),new Error(e)}function xr(i,e){i||Ar(e)}/**
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
 */function gd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function iT(){return eg()==="http:"||eg()==="https:"}function eg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function sT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iT()||Dw()||"connection"in navigator)?navigator.onLine:!0}function oT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=xw()||Vw()}get(){return sT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zd(i,e){xr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ly{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uT=new Ha(3e4,6e4);function Wa(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Io(i,e,t,s,o={}){return My(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=$a(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:y},u);return bw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(_.credentials="include"),Ly.fetch()(await Fy(i,i.config.apiHost,t,m),_)})}async function My(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},aT),e);try{const o=new cT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw gu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw gu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Oy(i,E,_);Pr(i,E)}}catch(o){if(o instanceof Vr)throw o;Pr(i,"network-request-failed",{message:String(o)})}}async function Bd(i,e,t,s,o={}){const u=await Io(i,e,t,s,o);return"mfaPendingCredential"in u&&Pr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Fy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?zd(i.config,o):`${i.config.apiScheme}://${o}`;return lT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class cT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),uT.get())})}}function gu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function hT(i,e){return Io(i,"POST","/v1/accounts:delete",e)}async function Lu(i,e){return Io(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ra(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dT(i,e=!1){const t=ln(i),s=await t.getIdToken(e),o=$d(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ra(td(o.auth_time)),issuedAtTime:Ra(td(o.iat)),expirationTime:Ra(td(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function td(i){return Number(i)*1e3}function $d(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ey(t);return o?JSON.parse(o):(Iu("Failed to decode base64 JWT payload"),null)}catch(o){return Iu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function tg(i){const e=$d(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Va(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Vr&&fT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function fT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class pT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Va(i,Lu(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Uy(u.providerUserInfo):[],m=gT(i.providerData,h),y=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=y?_:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new yd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,k)}async function mT(i){const e=ln(i);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Uy(i){return i.map(e=>{var{providerId:t}=e,s=Ud(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yT(i,e){const t=await My(i,{},async()=>{const s=$a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Fy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(y.credentials="include"),Ly.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vT(i,e){return Io(i,"POST","/v2/accounts:revokeToken",Wa(i,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=tg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await yT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Ar("not implemented")}}/**
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
 */function oi(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new yd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Va(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dT(this,e)}reload(){return mT(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await Va(this,hT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,_,E;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,x=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,J=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,W=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,de=(_=t.createdAt)!==null&&_!==void 0?_:void 0,he=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ge,emailVerified:we,isAnonymous:ze,providerData:Ie,stsTokenManager:R}=t;_e(ge&&R,e,"internal-error");const I=uo.fromJSON(this.name,R);_e(typeof ge=="string",e,"internal-error"),oi(k,e.name),oi(x,e.name),_e(typeof we=="boolean",e,"internal-error"),_e(typeof ze=="boolean",e,"internal-error"),oi(B,e.name),oi(J,e.name),oi(Y,e.name),oi(W,e.name),oi(de,e.name),oi(he,e.name);const A=new Mn({uid:ge,auth:e,email:x,emailVerified:we,displayName:k,isAnonymous:ze,photoURL:J,phoneNumber:B,tenantId:Y,stsTokenManager:I,createdAt:de,lastLoginAt:he});return Ie&&Array.isArray(Ie)&&(A.providerData=Ie.map(P=>Object.assign({},P))),W&&(A._redirectEventId=W),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new Mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Mu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Uy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const y=new Mn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new yd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const ng=new Map;function kr(i){xr(i instanceof Function,"Expected a class definition");let e=ng.get(i);return e?(xr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ng.set(i,e),e)}/**
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
 */class jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jy.type="NONE";const rg=jy;/**
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
 */function Su(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Su(this.userKey,o.apiKey,u),this.fullPersistenceKey=Su("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lu(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(kr(rg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||kr(rg);const h=Su(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let k;if(typeof E=="string"){const x=await Lu(e,{idToken:E}).catch(()=>{});if(!x)break;k=await Mn._fromGetAccountInfoResponse(e,x,E)}else k=Mn._fromJSON(e,E);_!==u&&(m=k),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new co(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function ig(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qy(e))return"Blackberry";if(Gy(e))return"Webos";if(By(e))return"Safari";if((e.includes("chrome/")||$y(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zy(i=jt()){return/firefox\//i.test(i)}function By(i=jt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $y(i=jt()){return/crios\//i.test(i)}function Hy(i=jt()){return/iemobile/i.test(i)}function Wy(i=jt()){return/android/i.test(i)}function qy(i=jt()){return/blackberry/i.test(i)}function Gy(i=jt()){return/webos/i.test(i)}function Hd(i=jt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _T(i=jt()){var e;return Hd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wT(){return Ow()&&document.documentMode===10}function Ky(i=jt()){return Hd(i)||Wy(i)||Gy(i)||qy(i)||/windows phone/i.test(i)||Hy(i)}/**
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
 */function Qy(i,e=[]){let t;switch(i){case"Browser":t=ig(jt());break;case"Worker":t=`${ig(jt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${To}/${s}`}/**
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
 */class ET{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function TT(i,e={}){return Io(i,"GET","/v2/passwordPolicy",Wa(i,e))}/**
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
 */const IT=6;class ST{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:IT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class AT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lu(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_n(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Cr(this));const t=e?ln(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TT(this),t=new ST(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await vT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qa(i){return ln(i)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kT(i){Wd=i}function CT(i){return Wd.loadJS(i)}function RT(){return Wd.gapiScript}function PT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xT(i,e){const t=Fd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(rs(u,e??{}))return o;Pr(o,"already-initialized")}return t.initialize({options:e})}function NT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bT(i,e,t){const s=qa(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Xy(e),{host:h,port:m}=DT(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(rs(_,s.config.emulator)&&rs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Eo(h)?(Ay(`${u}//${h}${y}`),ky("Auth",!0)):VT()}function Xy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function DT(i){const e=Xy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:og(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:og(h)}}}function og(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function VT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Yy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ar("not implemented")}_getIdTokenResponse(e){return Ar("not implemented")}_linkToIdToken(e,t){return Ar("not implemented")}_getReauthenticationResolver(e){return Ar("not implemented")}}/**
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
 */async function ho(i,e){return Bd(i,"POST","/v1/accounts:signInWithIdp",Wa(i,e))}/**
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
 */const OT="http://localhost";class ss extends Yy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ud(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ss(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:OT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$a(t)}return e}}/**
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
 */class Jy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends Jy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function LT(i,e){return Bd(i,"POST","/v1/accounts:signUp",Wa(i,e))}/**
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Mn._fromIdTokenResponse(e,s,o),h=ag(s);return new Nr({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ag(s);return new Nr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ag(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function lg(i){var e;if(_n(i.app))return Promise.reject(Cr(i));const t=qa(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Nr({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await LT(t,{returnSecureToken:!0}),o=await Nr._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Fu extends Vr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Fu(e,t,s,o)}}function Zy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(i,u,e,s):u})}async function MT(i,e,t=!1){const s=await Va(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Nr._forOperation(i,"link",s)}/**
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
 */async function FT(i,e,t=!1){const{auth:s}=i;if(_n(s.app))return Promise.reject(Cr(s));const o="reauthenticate";try{const u=await Va(i,Zy(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=$d(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),Nr._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Pr(s,"user-mismatch"),u}}/**
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
 */async function UT(i,e,t=!1){if(_n(i.app))return Promise.reject(Cr(i));const s="signIn",o=await Zy(i,s,e),u=await Nr._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */async function jT(i,e){return Bd(i,"POST","/v1/accounts:signInWithCustomToken",Wa(i,e))}/**
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
 */async function zT(i,e){if(_n(i.app))return Promise.reject(Cr(i));const t=qa(i),s=await jT(t,{token:e,returnSecureToken:!0}),o=await Nr._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}function BT(i,e,t,s){return ln(i).onIdTokenChanged(e,t,s)}function $T(i,e,t){return ln(i).beforeAuthStateChanged(e,t)}function HT(i,e,t,s){return ln(i).onAuthStateChanged(e,t,s)}const Uu="__sak";/**
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
 */class ev{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WT=1e3,qT=10;class tv extends ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ky(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);wT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,qT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tv.type="LOCAL";const GT=tv;/**
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
 */class nv extends ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nv.type="SESSION";const rv=nv;/**
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
 */function KT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ec(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await KT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
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
 */function qd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class QT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=qd("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const x=k;if(x.data.eventId===_)switch(x.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Zn(){return window}function XT(i){Zn().location.href=i}/**
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
 */function iv(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function YT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function ZT(){return iv()?self:null}/**
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
 */const sv="firebaseLocalStorageDb",eI=1,ju="firebaseLocalStorage",ov="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(i,e){return i.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function tI(){const i=indexedDB.deleteDatabase(sv);return new Ka(i).toPromise()}function vd(){const i=indexedDB.open(sv,eI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ju,{keyPath:ov})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ju)?e(s):(s.close(),await tI(),e(await vd()))})})}async function ug(i,e,t){const s=tc(i,!0).put({[ov]:e,value:t});return new Ka(s).toPromise()}async function nI(i,e){const t=tc(i,!1).get(e),s=await new Ka(t).toPromise();return s===void 0?null:s.value}function cg(i,e){const t=tc(i,!0).delete(e);return new Ka(t).toPromise()}const rI=800,iI=3;class av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>iI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(ZT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await YT(),!this.activeServiceWorker)return;this.sender=new QT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await ug(e,Uu,"1"),await cg(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>nI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=tc(o,!1).getAll();return new Ka(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}av.type="LOCAL";const sI=av;new Ha(3e4,6e4);/**
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
 */function oI(i,e){return e?kr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Gd extends Yy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aI(i){return UT(i.auth,new Gd(i),i.bypassAuthState)}function lI(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),FT(t,new Gd(i),i.bypassAuthState)}async function uI(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),MT(t,new Gd(i),i.bypassAuthState)}/**
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
 */class lv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aI;case"linkViaPopup":case"linkViaRedirect":return uI;case"reauthViaPopup":case"reauthViaRedirect":return lI;default:Pr(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cI=new Ha(2e3,1e4);class lo extends lv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cI.get())};e()}}lo.currentPopupAction=null;/**
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
 */const hI="pendingRedirect",Au=new Map;class dI extends lv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await fI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fI(i,e){const t=gI(e),s=mI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function pI(i,e){Au.set(i._key(),e)}function mI(i){return kr(i._redirectPersistence)}function gI(i){return Su(hI,i.config.apiKey,i.name)}async function yI(i,e,t=!1){if(_n(i.app))return Promise.reject(Cr(i));const s=qa(i),o=oI(s,e),h=await new dI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const vI=600*1e3;class _I{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!uv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vI&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function uv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(i);default:return!1}}/**
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
 */async function EI(i,e={}){return Io(i,"GET","/v1/projects",e)}/**
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
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,II=/^https?/;async function SI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await EI(i);for(const t of e)try{if(AI(t))return}catch{}Pr(i,"unauthorized-domain")}function AI(i){const e=gd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!II.test(t))return!1;if(TI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const kI=new Ha(3e4,6e4);function dg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function CI(i){return new Promise((e,t)=>{var s,o,u;function h(){dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dg(),t(Jn(i,"network-request-failed"))},timeout:kI.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Zn().gapi)===null||u===void 0)&&u.load)h();else{const m=PT("iframefcb");return Zn()[m]=()=>{gapi.load?h():t(Jn(i,"network-request-failed"))},CT(`${RT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw ku=null,e})}let ku=null;function RI(i){return ku=ku||CI(i),ku}/**
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
 */const PI=new Ha(5e3,15e3),xI="__/auth/iframe",NI="emulator/auth/iframe",bI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VI(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?zd(e,NI):`https://${i.config.authDomain}/${xI}`,s={apiKey:e.apiKey,appName:i.name,v:To},o=DI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${$a(s).slice(1)}`}async function OI(i){const e=await RI(i),t=Zn().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:VI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},PI.get());function y(){Zn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const LI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MI=500,FI=600,UI="_blank",jI="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(i,e,t,s=MI,o=FI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},LI),{width:s.toString(),height:o.toString(),top:u,left:h}),_=jt().toLowerCase();t&&(m=$y(_)?UI:t),zy(_)&&(e=e||jI,y.scrollbars="yes");const E=Object.entries(y).reduce((x,[B,J])=>`${x}${B}=${J},`,"");if(_T(_)&&m!=="_self")return BI(e||"",m),new fg(null);const k=window.open(e||"",m,E);_e(k,i,"popup-blocked");try{k.focus()}catch{}return new fg(k)}function BI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const $I="__/auth/handler",HI="emulator/auth/handler",WI=encodeURIComponent("fac");async function pg(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:To,eventId:o};if(e instanceof Jy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Bw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,k]of Object.entries({}))h[E]=k}if(e instanceof Ga){const E=e.getScopes().filter(k=>k!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),_=y?`#${WI}=${encodeURIComponent(y)}`:"";return`${qI(i)}?${$a(m).slice(1)}${_}`}function qI({config:i}){return i.emulator?zd(i,HI):`https://${i.authDomain}/${$I}`}/**
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
 */const nd="webStorageSupport";class GI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rv,this._completeRedirectFn=yI,this._overrideRedirectResult=pI}async _openPopup(e,t,s,o){var u;xr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await pg(e,t,s,gd(),o);return zI(e,h,qd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await pg(e,t,s,gd(),o);return XT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await OI(e),s=new _I(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nd,{type:nd},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[nd];h!==void 0&&t(!!h),Pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ky()||By()||Hd()}}const KI=GI;var mg="@firebase/auth",gg="1.10.8";/**
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
 */class QI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YI(i){mo(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qy(i)},_=new AT(s,o,u,y);return NT(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mo(new is("auth-internal",e=>{const t=qa(e.getProvider("auth").getImmediate());return(s=>new QI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(mg,gg,XI(i)),pi(mg,gg,"esm2017")}/**
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
 */const JI=300,ZI=Sy("authIdTokenMaxAge")||JI;let yg=null;const e1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ZI)return;const o=t==null?void 0:t.token;yg!==o&&(yg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function t1(i=xy()){const e=Fd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=xT(i,{popupRedirectResolver:KI,persistence:[sI,GT,rv]}),s=Sy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=e1(u.toString());$T(t,h,()=>h(t.currentUser)),BT(t,m=>h(m))}}const o=Ty("auth");return o&&bT(t,`http://${o}`),t}function n1(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}kT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",n1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YI("Browser");var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,cv;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function A(){}A.prototype=I.prototype,R.D=I.prototype,R.prototype=new A,R.prototype.constructor=R,R.C=function(P,b,V){for(var S=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)S[Qe-2]=arguments[Qe];return I.prototype[b].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,I,A){A||(A=0);var P=Array(16);if(typeof I=="string")for(var b=0;16>b;++b)P[b]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(b=0;16>b;++b)P[b]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=R.g[0],A=R.g[1],b=R.g[2];var V=R.g[3],S=I+(V^A&(b^V))+P[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=V+(b^I&(A^b))+P[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=b+(A^V&(I^A))+P[2]+606105819&4294967295,b=V+(S<<17&4294967295|S>>>15),S=A+(I^b&(V^I))+P[3]+3250441966&4294967295,A=b+(S<<22&4294967295|S>>>10),S=I+(V^A&(b^V))+P[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(b^I&(A^b))+P[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=b+(A^V&(I^A))+P[6]+2821735955&4294967295,b=V+(S<<17&4294967295|S>>>15),S=A+(I^b&(V^I))+P[7]+4249261313&4294967295,A=b+(S<<22&4294967295|S>>>10),S=I+(V^A&(b^V))+P[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(b^I&(A^b))+P[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=b+(A^V&(I^A))+P[10]+4294925233&4294967295,b=V+(S<<17&4294967295|S>>>15),S=A+(I^b&(V^I))+P[11]+2304563134&4294967295,A=b+(S<<22&4294967295|S>>>10),S=I+(V^A&(b^V))+P[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(b^I&(A^b))+P[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=b+(A^V&(I^A))+P[14]+2792965006&4294967295,b=V+(S<<17&4294967295|S>>>15),S=A+(I^b&(V^I))+P[15]+1236535329&4294967295,A=b+(S<<22&4294967295|S>>>10),S=I+(b^V&(A^b))+P[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^b&(I^A))+P[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=b+(I^A&(V^I))+P[11]+643717713&4294967295,b=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(b^V))+P[0]+3921069994&4294967295,A=b+(S<<20&4294967295|S>>>12),S=I+(b^V&(A^b))+P[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^b&(I^A))+P[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=b+(I^A&(V^I))+P[15]+3634488961&4294967295,b=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(b^V))+P[4]+3889429448&4294967295,A=b+(S<<20&4294967295|S>>>12),S=I+(b^V&(A^b))+P[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^b&(I^A))+P[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=b+(I^A&(V^I))+P[3]+4107603335&4294967295,b=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(b^V))+P[8]+1163531501&4294967295,A=b+(S<<20&4294967295|S>>>12),S=I+(b^V&(A^b))+P[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^b&(I^A))+P[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=b+(I^A&(V^I))+P[7]+1735328473&4294967295,b=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(b^V))+P[12]+2368359562&4294967295,A=b+(S<<20&4294967295|S>>>12),S=I+(A^b^V)+P[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^b)+P[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=b+(V^I^A)+P[11]+1839030562&4294967295,b=V+(S<<16&4294967295|S>>>16),S=A+(b^V^I)+P[14]+4259657740&4294967295,A=b+(S<<23&4294967295|S>>>9),S=I+(A^b^V)+P[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^b)+P[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=b+(V^I^A)+P[7]+4139469664&4294967295,b=V+(S<<16&4294967295|S>>>16),S=A+(b^V^I)+P[10]+3200236656&4294967295,A=b+(S<<23&4294967295|S>>>9),S=I+(A^b^V)+P[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^b)+P[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=b+(V^I^A)+P[3]+3572445317&4294967295,b=V+(S<<16&4294967295|S>>>16),S=A+(b^V^I)+P[6]+76029189&4294967295,A=b+(S<<23&4294967295|S>>>9),S=I+(A^b^V)+P[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^b)+P[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=b+(V^I^A)+P[15]+530742520&4294967295,b=V+(S<<16&4294967295|S>>>16),S=A+(b^V^I)+P[2]+3299628645&4294967295,A=b+(S<<23&4294967295|S>>>9),S=I+(b^(A|~V))+P[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~b))+P[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=b+(I^(V|~A))+P[14]+2878612391&4294967295,b=V+(S<<15&4294967295|S>>>17),S=A+(V^(b|~I))+P[5]+4237533241&4294967295,A=b+(S<<21&4294967295|S>>>11),S=I+(b^(A|~V))+P[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~b))+P[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=b+(I^(V|~A))+P[10]+4293915773&4294967295,b=V+(S<<15&4294967295|S>>>17),S=A+(V^(b|~I))+P[1]+2240044497&4294967295,A=b+(S<<21&4294967295|S>>>11),S=I+(b^(A|~V))+P[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~b))+P[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=b+(I^(V|~A))+P[6]+2734768916&4294967295,b=V+(S<<15&4294967295|S>>>17),S=A+(V^(b|~I))+P[13]+1309151649&4294967295,A=b+(S<<21&4294967295|S>>>11),S=I+(b^(A|~V))+P[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~b))+P[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=b+(I^(V|~A))+P[2]+718787259&4294967295,b=V+(S<<15&4294967295|S>>>17),S=A+(V^(b|~I))+P[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(b+(S<<21&4294967295|S>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+V&4294967295}s.prototype.u=function(R,I){I===void 0&&(I=R.length);for(var A=I-this.blockSize,P=this.B,b=this.h,V=0;V<I;){if(b==0)for(;V<=A;)o(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<I;)if(P[b++]=R.charCodeAt(V++),b==this.blockSize){o(this,P),b=0;break}}else for(;V<I;)if(P[b++]=R[V++],b==this.blockSize){o(this,P),b=0;break}}this.h=b,this.o+=I},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;var A=8*this.o;for(I=R.length-8;I<R.length;++I)R[I]=A&255,A/=256;for(this.u(R),R=Array(16),I=A=0;4>I;++I)for(var P=0;32>P;P+=8)R[A++]=this.g[I]>>>P&255;return R};function u(R,I){var A=m;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=I(R)}function h(R,I){this.h=I;for(var A=[],P=!0,b=R.length-1;0<=b;b--){var V=R[b]|0;P&&V==I||(A[b]=V,P=!1)}this.g=A}var m={};function y(R){return-128<=R&&128>R?u(R,function(I){return new h([I|0],0>I?-1:0)}):new h([R|0],0>R?-1:0)}function _(R){if(isNaN(R)||!isFinite(R))return k;if(0>R)return W(_(-R));for(var I=[],A=1,P=0;R>=A;P++)I[P]=R/A|0,A*=4294967296;return new h(I,0)}function E(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return W(E(R.substring(1),I));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(I,8)),P=k,b=0;b<R.length;b+=8){var V=Math.min(8,R.length-b),S=parseInt(R.substring(b,b+V),I);8>V?(V=_(Math.pow(I,V)),P=P.j(V).add(_(S))):(P=P.j(A),P=P.add(_(S)))}return P}var k=y(0),x=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-W(this).m();for(var R=0,I=1,A=0;A<this.g.length;A++){var P=this.i(A);R+=(0<=P?P:4294967296+P)*I,I*=4294967296}return R},i.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(J(this))return"0";if(Y(this))return"-"+W(this).toString(R);for(var I=_(Math.pow(R,6)),A=this,P="";;){var b=we(A,I).g;A=de(A,b.j(I));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(R);if(A=b,J(A))return V+P;for(;6>V.length;)V="0"+V;P=V+P}},i.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function J(R){if(R.h!=0)return!1;for(var I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function Y(R){return R.h==-1}i.l=function(R){return R=de(this,R),Y(R)?-1:J(R)?0:1};function W(R){for(var I=R.g.length,A=[],P=0;P<I;P++)A[P]=~R.g[P];return new h(A,~R.h).add(x)}i.abs=function(){return Y(this)?W(this):this},i.add=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0,b=0;b<=I;b++){var V=P+(this.i(b)&65535)+(R.i(b)&65535),S=(V>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);P=S>>>16,V&=65535,S&=65535,A[b]=S<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function de(R,I){return R.add(W(I))}i.j=function(R){if(J(this)||J(R))return k;if(Y(this))return Y(R)?W(this).j(W(R)):W(W(this).j(R));if(Y(R))return W(this.j(W(R)));if(0>this.l(B)&&0>R.l(B))return _(this.m()*R.m());for(var I=this.g.length+R.g.length,A=[],P=0;P<2*I;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var b=0;b<R.g.length;b++){var V=this.i(P)>>>16,S=this.i(P)&65535,Qe=R.i(b)>>>16,vt=R.i(b)&65535;A[2*P+2*b]+=S*vt,he(A,2*P+2*b),A[2*P+2*b+1]+=V*vt,he(A,2*P+2*b+1),A[2*P+2*b+1]+=S*Qe,he(A,2*P+2*b+1),A[2*P+2*b+2]+=V*Qe,he(A,2*P+2*b+2)}for(P=0;P<I;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=I;P<2*I;P++)A[P]=0;return new h(A,0)};function he(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function ge(R,I){this.g=R,this.h=I}function we(R,I){if(J(I))throw Error("division by zero");if(J(R))return new ge(k,k);if(Y(R))return I=we(W(R),I),new ge(W(I.g),W(I.h));if(Y(I))return I=we(R,W(I)),new ge(W(I.g),I.h);if(30<R.g.length){if(Y(R)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var A=x,P=I;0>=P.l(R);)A=ze(A),P=ze(P);var b=Ie(A,1),V=Ie(P,1);for(P=Ie(P,2),A=Ie(A,2);!J(P);){var S=V.add(P);0>=S.l(R)&&(b=b.add(A),V=S),P=Ie(P,1),A=Ie(A,1)}return I=de(R,b.j(I)),new ge(b,I)}for(b=k;0<=R.l(I);){for(A=Math.max(1,Math.floor(R.m()/I.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),V=_(A),S=V.j(I);Y(S)||0<S.l(R);)A-=P,V=_(A),S=V.j(I);J(V)&&(V=x),b=b.add(V),R=de(R,S)}return new ge(b,R)}i.A=function(R){return we(this,R).h},i.and=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)&R.i(P);return new h(A,this.h&R.h)},i.or=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)|R.i(P);return new h(A,this.h|R.h)},i.xor=function(R){for(var I=Math.max(this.g.length,R.g.length),A=[],P=0;P<I;P++)A[P]=this.i(P)^R.i(P);return new h(A,this.h^R.h)};function ze(R){for(var I=R.g.length+1,A=[],P=0;P<I;P++)A[P]=R.i(P)<<1|R.i(P-1)>>>31;return new h(A,R.h)}function Ie(R,I){var A=I>>5;I%=32;for(var P=R.g.length-A,b=[],V=0;V<P;V++)b[V]=0<I?R.i(V+A)>>>I|R.i(V+A+1)<<32-I:R.i(V+A);return new h(b,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,cv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,mi=h}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hv,Ia,dv,Cu,_d,fv,pv,mv;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],f=f(w),f!=w&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,w=!1,L={next:function(){if(!w&&g<l.length){var j=g++;return{value:f(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,g){return l.call.apply(l.bind,arguments)}function k(l,f,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function x(l,f,g){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:k,x.apply(null,arguments)}function B(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function J(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,L,j){for(var te=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)te[Ue-2]=arguments[Ue];return f.prototype[L].apply(w,te)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=l[w];return g}return[]}function W(l,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const L=l.length||0,j=w.length||0;l.length=L+j;for(let te=0;te<j;te++)l[L+te]=w[te]}else l.push(w)}}class de{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function he(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var ze=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Ie(l,f,g){for(const w in l)f.call(g,l[w],w,l)}function R(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function b(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ne;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Qe{constructor(){this.h=this.g=null}add(f,g){const w=vt.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var vt=new de(()=>new ut,l=>l.reset());class ut{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let K,$=!1,ne=new Qe,ee=()=>{const l=m.Promise.resolve(void 0);K=()=>{l.then(D)}};var D=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){V(g)}var f=vt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Se=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function ke(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ze){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ke.aa.h.call(this)}}J(ke,ae);var Ne={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,g,w,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=L,this.key=++Me,this.da=this.fa=!1}function _t(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ar(l){this.src=l,this.g={},this.h=0}ar.prototype.add=function(l,f,g,w,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var te=Or(l,f,w,L);return-1<te?(f=l[te],g||(f.fa=!1)):(f=new Be(f,this.src,j,!!w,L),f.fa=g,l.push(f)),f};function ds(l,f){var g=f.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(_t(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Or(l,f,g,w){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==w)return L}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),fs={};function Ro(l,f,g,w,L){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Ro(l,f[j],g,w,L);return null}return g=No(g),l&&l[Le]?l.K(f,g,_(w)?!!w.capture:!1,L):Po(l,f,g,!1,w,L)}function Po(l,f,g,w,L,j){if(!f)throw Error("Invalid event type");var te=_(L)?!!L.capture:!!L,Ue=ms(l);if(Ue||(l[Si]=Ue=new ar(l)),g=Ue.add(f,g,w,te,j),g.proxy)return g;if(w=el(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Se||(L=te),L===void 0&&(L=!1),l.addEventListener(f.toString(),w,L);else if(l.attachEvent)l.attachEvent(ur(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function el(){function l(g){return f.call(l.src,l.listener,g)}const f=xo;return l}function ps(l,f,g,w,L){if(Array.isArray(f))for(var j=0;j<f.length;j++)ps(l,f[j],g,w,L);else w=_(w)?!!w.capture:!!w,g=No(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],g=Or(j,g,w,L),-1<g&&(_t(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=ms(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Or(f,g,w,L)),(g=-1<l?f[l]:null)&&lr(g))}function lr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ds(f.i,l);else{var g=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(g,w,l.capture):f.detachEvent?f.detachEvent(ur(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=ms(f))?(ds(g,l),g.h==0&&(g.src=null,f[Si]=null)):_t(l)}}}function ur(l){return l in fs?fs[l]:fs[l]="on"+l}function xo(l,f){if(l.da)l=!0;else{f=new ke(f,this);var g=l.listener,w=l.ha||l.src;l.fa&&lr(l),l=g.call(w,f)}return l}function ms(l){return l=l[Si],l instanceof ar?l:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(l){return typeof l=="function"?l:(l[gs]||(l[gs]=function(f){return l.handleEvent(f)}),l[gs])}function ct(){z.call(this),this.i=new ar(this),this.M=this,this.F=null}J(ct,z),ct.prototype[Le]=!0,ct.prototype.removeEventListener=function(l,f,g,w){ps(this,l,f,g,w)};function ht(l,f){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(w,l),P(f,L)}if(L=!0,g)for(var j=g.length-1;0<=j;j--){var te=f.g=g[j];L=cr(te,w,!0,f)&&L}if(te=f.g=l,L=cr(te,w,!0,f)&&L,L=cr(te,w,!1,f)&&L,g)for(j=0;j<g.length;j++)te=f.g=g[j],L=cr(te,w,!1,f)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],w=0;w<g.length;w++)_t(g[w]);delete l.g[f],l.h--}}this.F=null},ct.prototype.K=function(l,f,g,w){return this.i.add(String(l),f,!1,g,w)},ct.prototype.L=function(l,f,g,w){return this.i.add(String(l),f,!0,g,w)};function cr(l,f,g,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,j=0;j<f.length;++j){var te=f[j];if(te&&!te.da&&te.capture==g){var Ue=te.listener,dt=te.ha||te.src;te.fa&&ds(l.i,te),L=Ue.call(dt,w)!==!1&&L}}return L&&!w.defaultPrevented}function bo(l,f,g){if(typeof l=="function")g&&(l=x(l,g));else if(l&&typeof l.handleEvent=="function")l=x(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Lr(l){l.g=bo(()=>{l.g=null,l.i&&(l.i=!1,Lr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ai extends z{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Lr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(l){z.call(this),this.h=l,this.g={}}J(ki,z);var Do=[];function Vo(l){Ie(l.g,function(f,g){this.g.hasOwnProperty(g)&&lr(f)},l),l.g={}}ki.prototype.N=function(){ki.aa.N.call(this),Vo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=m.JSON.stringify,Lo=m.JSON.parse,Mo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ci(){}Ci.prototype.h=null;function ys(l){return l.h||(l.h=l.i())}function vs(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){ae.call(this,"d")}J(jn,ae);function _s(){ae.call(this,"c")}J(_s,ae);var zn={},Fo=null;function Ri(){return Fo=Fo||new ct}zn.La="serverreachability";function Uo(l){ae.call(this,zn.La,l)}J(Uo,ae);function hr(l){const f=Ri();ht(f,new Uo(f))}zn.STAT_EVENT="statevent";function jo(l,f){ae.call(this,zn.STAT_EVENT,l),this.stat=f}J(jo,ae);function nt(l){const f=Ri();ht(f,new jo(f,l))}zn.Ma="timingevent";function ws(l,f){ae.call(this,zn.Ma,l),this.size=f}J(ws,ae);function Tn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function xi(l,f,g,w,L,j){l.info(function(){if(l.g)if(j)for(var te="",Ue=j.split("&"),dt=0;dt<Ue.length;dt++){var be=Ue[dt].split("=");if(1<be.length){var wt=be[0];be=be[1];var st=wt.split("_");te=2<=st.length&&st[1]=="type"?te+(wt+"="+be+"&"):te+(wt+"=redacted&")}}else te=null;else te=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+f+`
`+g+`
`+te})}function Es(l,f,g,w,L,j,te){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+f+`
`+g+`
`+j+" "+te})}function In(l,f,g,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+gc(l,g)+(w?" "+w:"")})}function zo(l,f){l.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function gc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var te=1;te<L.length;te++)L[te]=""}}}}return Oo(g)}catch{return f}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Ni(){}J(Ni,Ci),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Sn=new Ni;function An(l,f,g,w){this.j=l,this.i=f,this.l=g,this.R=w||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var Bo={},Is={};function Ss(l,f,g){l.L=1,l.v=zr(tn(f)),l.m=g,l.P=!0,$o(l,null)}function $o(l,f){l.F=Date.now(),$e(l),l.A=tn(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),$r(g.i,"t",w),l.C=0,g=l.j.J,l.h=new nl,l.g=wl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Ai(x(l.Y,l,l.g),l.O)),f=l.U,g=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Do[0]=L.toString()),L=Do);for(var j=0;j<L.length;j++){var te=Ro(g,L[j],w||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),hr(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}An.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},An.prototype.Y=function(l){try{if(l==this.g)e:{const st=qt(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Qo(this.g)))){this.J||st!=4||f==7||(f==8||0>=dn?hr(3):hr(2)),bi(this);var g=this.g.Z();this.X=g;t:if(rl(this)){var w=Qo(this.g);l="";var L=w.length,j=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Mr(this);var te="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(j&&f==L-1)});w.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=g==200,Es(this.i,this.u,this.A,this.l,this.R,st,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,dt=this.g;if((Ue=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Ue)){var be=Ue;break t}}be=null}if(g=be)In(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,g);else{this.o=!1,this.s=3,nt(12),cn(this),Mr(this);break e}}if(this.P){g=!0;let rn;for(;!this.J&&this.C<te.length;)if(rn=yc(this,te),rn==Is){st==4&&(this.s=4,nt(14),g=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Bo){this.s=4,nt(15),In(this.i,this.l,te,"[Invalid Chunk]"),g=!1;break}else In(this.i,this.l,rn,null),Ho(this,rn);if(rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||te.length!=0||this.h.h||(this.s=1,nt(16),g=!1),this.o=this.o&&g,!g)In(this.i,this.l,te,"[Invalid Chunked Response]"),cn(this),Mr(this);else if(0<te.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Yo(wt),wt.M=!0,nt(11))}}else In(this.i,this.l,te,null),Ho(this,te);st==4&&cn(this),this.o&&!this.J&&(st==4?Os(this.j,this):(this.o=!1,$e(this)))}else xs(this.g),g==400&&0<te.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),cn(this),Mr(this)}}}catch{}finally{}};function rl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yc(l,f){var g=l.C,w=f.indexOf(`
`,g);return w==-1?Is:(g=Number(f.substring(g,w)),isNaN(g)?Bo:(w+=1,w+g>f.length?Is:(f=f.slice(w,w+g),l.C=w+g,f)))}An.prototype.cancel=function(){this.J=!0,cn(this)};function $e(l){l.S=Date.now()+l.I,il(l,l.I)}function il(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Tn(x(l.ba,l),f)}function bi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}An.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zo(this.i,this.A),this.L!=2&&(hr(),nt(17)),cn(this),this.s=2,Mr(this)):il(this,this.S-l)};function Mr(l){l.j.G==0||l.J||Os(l.j,l)}function cn(l){bi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Vo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ho(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||zt(g.h,l))){if(!l.K&&zt(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Vs(g),xn(g);else break e;Ds(g),nt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Tn(x(g.Za,g),6e3));if(1>=ol(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else gr(g,11)}else if((l.K||g.g==l)&&Vs(g),!he(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let be=L[f];if(g.T=be[0],be=be[1],g.G==2)if(be[0]=="c"){g.K=be[1],g.ia=be[2];const wt=be[3];wt!=null&&(g.la=wt,g.j.info("VER="+g.la));const st=be[4];st!=null&&(g.Aa=st,g.j.info("SVER="+g.Aa));const dn=be[5];dn!=null&&typeof dn=="number"&&0<dn&&(w=1.5*dn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const rn=l.g;if(rn){const Ui=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var j=w.h;j.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Wo(j,j.h),j.h=null))}if(w.D){const Ms=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ms&&(w.ya=Ms,je(w.I,w.D,Ms))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var te=l;if(w.qa=_l(w,w.J?w.ia:null,w.W),te.K){al(w.h,te);var Ue=te,dt=w.L;dt&&(Ue.I=dt),Ue.B&&(bi(Ue),$e(Ue)),w.g=te}else Fi(w);0<g.i.length&&Wn(g)}else be[0]!="stop"&&be[0]!="close"||gr(g,7);else g.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?gr(g,7):Ct(g):be[0]!="noop"&&g.l&&g.l.ta(be),g.v=0)}}hr(4)}catch{}}var sl=class{constructor(l,f){this.g=l,this.map=f}};function Di(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ol(l){return l.h?1:l.g?l.g.size:0}function zt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Wo(l,f){l.g?l.g.add(f):l.h=f}function al(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Di.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ll(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function As(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,w=0;w<g;w++)f.push(l[w]);return f}f=[],g=0;for(w in l)f[g++]=l[w];return f}function ks(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const w in l)f[g++]=w;return f}}}function Fr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ks(l),w=As(l),L=w.length,j=0;j<L;j++)f.call(void 0,w[j],g&&g[j],l)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),L=null;if(0<=w){var j=l[g].substring(0,w);L=l[g].substring(w+1)}else j=l[g];f(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function dr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof dr){this.h=l.h,Oi(this,l.j),this.o=l.o,this.g=l.g,Ur(this,l.s),this.l=l.l;var f=l.i,g=new Bn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),jr(this,g),this.m=l.m}else l&&(f=String(l).match(Vi))?(this.h=!1,Oi(this,f[1]||"",!0),this.o=xe(f[2]||""),this.g=xe(f[3]||"",!0),Ur(this,f[4]),this.l=xe(f[5]||"",!0),jr(this,f[6]||"",!0),this.m=xe(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}dr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Br(f,Cs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Br(f,Cs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Br(g,g.charAt(0)=="/"?hl:cl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Br(g,qo)),l.join("")};function tn(l){return new dr(l)}function Oi(l,f,g){l.j=g?xe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Ur(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function jr(l,f,g){f instanceof Bn?(l.i=f,$n(l.i,l.h)):(g||(f=Br(f,dl)),l.i=new Bn(f,l.h))}function je(l,f,g){l.i.set(f,g)}function zr(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,ul),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ul(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,cl=/[#\?:]/g,hl=/[#\?]/g,dl=/[#\?@]/g,qo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function kt(l){l.g||(l.g=new Map,l.h=0,l.i&&vc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Bn.prototype,i.add=function(l,f){kt(this),this.i=null,l=hn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function kn(l,f){kt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Cn(l,f){return kt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){kt(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(f,L,w,this)},this)},this)},i.na=function(){kt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const L=l[w];for(let j=0;j<L.length;j++)g.push(f[w])}return g},i.V=function(l){kt(this);let f=[];if(typeof l=="string")Cn(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return kt(this),this.i=null,l=hn(this,l),Cn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function $r(l,f,g){kn(l,f),0<g.length&&(l.i=null,l.g.set(hn(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const j=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var L=j;te[w]!==""&&(L+="="+encodeURIComponent(String(te[w]))),l.push(L)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function $n(l,f){f&&!l.j&&(kt(l),l.i=null,l.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(kn(this,w),$r(this,L,g))},l)),l.j=f}function _c(l,f){const g=new Pi;if(m.Image){const w=new Image;w.onload=B(Wt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=B(Wt,g,"TestLoadImage: error",!1,f,w),w.onabort=B(Wt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=B(Wt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function fl(l,f){const g=new Pi,w=new AbortController,L=setTimeout(()=>{w.abort(),Wt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?Wt(g,"TestPingServer: ok",!0,f):Wt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Wt(g,"TestPingServer: error",!1,f)})}function Wt(l,f,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function wc(){this.g=new Mo}function pl(l,f,g){const w=g||"";try{Fr(l,function(L,j){let te=L;_(L)&&(te=Oo(L)),f.push(w+j+"="+encodeURIComponent(te))})}catch(L){throw f.push(w+"type="+encodeURIComponent("_badmap")),L}}function fr(l){this.l=l.Ub||null,this.j=l.eb||!1}J(fr,Ci),fr.prototype.g=function(){return new Li(this.l,this.j)},fr.prototype.i=(function(l){return function(){return l}})({});function Li(l,f){ct.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}J(Li,ct),i=Li.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ml(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ml(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Pn(this),this.readyState==3&&ml(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pr(l){let f="";return Ie(l,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function Hr(l,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=pr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):je(l,f,g))}function Xe(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}J(Xe,ct);var Ec=/^https?$/i,Go=["POST","PUT"];i=Xe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?ys(this.o):ys(Sn),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Mi(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Go,f,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,te]of g)this.g.setRequestHeader(j,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Mi(this,j)}};function Mi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Rs(l),nn(l)}function Rs(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Xe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},i.bb=function(){Ko(this)};function Ko(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)bo(l.Ea,0,l);else if(ht(l,"readystatechange"),qt(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=te===0){var L=String(l.D).match(Vi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!Ec.test(L?L.toLowerCase():"")}g=w}if(g)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var j=2<qt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Rs(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ps(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ht(l,"ready");try{g.onreadystatechange=w}catch{}}}function Ps(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lo(f)}};function Qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function xs(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(he(l[w]))continue;var g=b(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[L]||[];f[L]=j,j.push(g)}R(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Xo(l){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hn("baseRetryDelayMs",5e3,l),this.cb=Hn("retryDelaySeedMs",1e4,l),this.Wa=Hn("forwardChannelMaxRetries",2,l),this.wa=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(l&&l.concurrentRequestLimit),this.Da=new wc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Xo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,w){nt(0),this.W=l,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=_l(this,null,this.W),Wn(this)};function Ct(l){if(Ns(l),l.G==3){var f=l.U++,g=tn(l.I);if(je(g,"SID",l.K),je(g,"RID",f),je(g,"TYPE","terminate"),mr(l,g),f=new An(l,l.j,f),f.L=2,f.v=zr(tn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=wl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}vl(l)}function xn(l){l.g&&(Yo(l),l.g.cancel(),l.g=null)}function Ns(l){xn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Vs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Wn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;K||ee(),$||(K(),$=!0),ne.add(f,l),l.B=0}}function Tc(l,f){return ol(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Tn(x(l.Ga,l,f),yl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new An(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Wr(this,L,f),g=tn(this.I),je(g,"RID",l),je(g,"CVER",22),this.D&&je(g,"X-HTTP-Session-Id",this.D),mr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(pr(j)))+"&"+f:this.m&&Hr(g,this.m,j)),Wo(this.h,L),this.Ua&&je(g,"TYPE","init"),this.P?(je(g,"$req",f),je(g,"SID","null"),L.T=!0,Ss(L,g,null)):Ss(L,g,f),this.G=2}}else this.G==3&&(l?bs(this,l):this.i.length==0||en(this.h)||bs(this))};function bs(l,f){var g;f?g=f.l:g=l.U++;const w=tn(l.I);je(w,"SID",l.K),je(w,"RID",g),je(w,"AID",l.T),mr(l,w),l.m&&l.o&&Hr(w,l.m,l.o),g=new An(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Wr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Wo(l.h,g),Ss(g,w,f)}function mr(l,f){l.H&&Ie(l.H,function(g,w){je(f,w,g)}),l.l&&Fr({},function(g,w){je(f,w,g)})}function Wr(l,f,g){g=Math.min(l.i.length,g);var w=l.l?x(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const te=["count="+g];j==-1?0<g?(j=L[0].g,te.push("ofs="+j)):j=0:te.push("ofs="+j);let Ue=!0;for(let dt=0;dt<g;dt++){let be=L[dt].g;const wt=L[dt].map;if(be-=j,0>be)j=Math.max(0,L[dt].g-100),Ue=!1;else try{pl(wt,te,"req"+be+"_")}catch{w&&w(wt)}}if(Ue){w=te.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,w}function Fi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;K||ee(),$||(K(),$=!0),ne.add(f,l),l.v=0}}function Ds(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Tn(x(l.Fa,l),yl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Tn(x(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),xn(this),gl(this))};function Yo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function gl(l){l.g=new An(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),mr(l,f),l.m&&l.o&&Hr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=zr(tn(f)),g.m=null,g.P=!0,$o(g,l)}i.Za=function(){this.C!=null&&(this.C=null,xn(this),Ds(this),nt(19))};function Vs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Os(l,f){var g=null;if(l.g==f){Vs(l),Yo(l),l.g=null;var w=2}else if(zt(l.h,f))g=f.D,al(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;w=Ri(),ht(w,new ws(w,g)),Wn(l)}else Fi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(w==1&&Tc(l,f)||w==2&&Ds(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:gr(l,5);break;case 4:gr(l,10);break;case 3:gr(l,6);break;default:gr(l,2)}}}function yl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function gr(l,f){if(l.j.info("Error code "+f),f==2){var g=x(l.fb,l),w=l.Xa;const L=!w;w=new dr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Oi(w,"https"),zr(w),L?_c(w.toString(),g):fl(w.toString(),g)}else nt(2);l.G=0,l.l&&l.l.sa(f),vl(l),Ns(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function vl(l){if(l.G=0,l.ka=[],l.l){const f=ll(l.h);(f.length!=0||l.i.length!=0)&&(W(l.ka,f),W(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function _l(l,f,g){var w=g instanceof dr?tn(g):new dr(g);if(w.g!="")f&&(w.g=f+"."+w.g),Ur(w,w.s);else{var L=m.location;w=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var j=new dr(null);w&&Oi(j,w),f&&(j.g=f),L&&Ur(j,L),g&&(j.l=g),w=j}return g=l.D,f=l.ya,g&&f&&je(w,g,f),je(w,"VER",l.la),mr(l,w),w}function wl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new fr({eb:g})):new Xe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jo(){}i=Jo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ls(){}Ls.prototype.g=function(l,f){return new Bt(l,f)};function Bt(l,f){ct.call(this),this.g=new Xo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!he(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!he(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}J(Bt,ct),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Ct(this.g)},Bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Oo(l),l=g);f.i.push(new sl(f.Ya++,l)),f.G==3&&Wn(f)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Bt.aa.N.call(this)};function El(l){jn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}J(El,jn);function Tl(){_s.call(this),this.status=1}J(Tl,_s);function qn(l){this.g=l}J(qn,Jo),qn.prototype.ua=function(){ht(this.g,"a")},qn.prototype.ta=function(l){ht(this.g,new El(l))},qn.prototype.sa=function(l){ht(this.g,new Tl)},qn.prototype.ra=function(){ht(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,mv=function(){return new Ls},pv=function(){return Ri()},fv=zn,_d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Cu=Ts,tl.COMPLETE="complete",dv=tl,vs.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ia=vs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,hv=Xe}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const _g="@firebase/firestore",wg="4.8.0";/**
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
 */const os=new Ld("@firebase/firestore");function io(){return os.logLevel}function ie(i,...e){if(os.logLevel<=Re.DEBUG){const t=e.map(Kd);os.debug(`Firestore (${So}): ${i}`,...t)}}function br(i,...e){if(os.logLevel<=Re.ERROR){const t=e.map(Kd);os.error(`Firestore (${So}): ${i}`,...t)}}function yi(i,...e){if(os.logLevel<=Re.WARN){const t=e.map(Kd);os.warn(`Firestore (${So}): ${i}`,...t)}}function Kd(i){if(typeof i=="string")return i;try{/**
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
 */function ye(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,gv(i,s,t)}function gv(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw br(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||gv(e,o,s)}function Te(i,e){return i}/**
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
 */class yv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ft.UNAUTHENTICATED)))}shutdown(){}}class i1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s1{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new es;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new es,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new es)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new yv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class o1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class a1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new o1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Eg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Eg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Eg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function u1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function vv(){return new TextEncoder}/**
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
 */class Qd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=u1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ae(i,e){return i<e?-1:i>e?1:0}function wd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ae(s,o);{const u=vv(),h=c1(u.encode(Tg(i,t)),u.encode(Tg(e,t)));return h!==0?h:Ae(s,o)}}t+=s>65535?2:1}return Ae(i.length,e.length)}function Tg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function c1(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ae(i[t],e[t]);return Ae(i.length,e.length)}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Ig="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ae(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):wd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mi.fromString(e.substring(4,e.length-2))}}class Ge extends Yn{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const h1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Yn{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return h1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ig}static keyField(){return new Nt([Ig])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ce(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ce(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ce(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ge.fromString(e))}static fromName(e){return new fe(Ge.fromString(e).popFirst(5))}static empty(){return new fe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ge(e.slice()))}}/**
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
 */function _v(i,e,t){if(!t)throw new ce(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function d1(i,e,t,s){if(e===!0&&s===!0)throw new ce(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Sg(i){if(!fe.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ag(i){if(fe.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function wv(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Xd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye(12329,{type:typeof i})}function ts(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(i);throw new ce(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function lt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Qa(i,e){if(!wv(i))throw new ce(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ce(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const kg=-62135596800,Cg=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Cg);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kg)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cg}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-kg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:lt("string",Ke._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ke(0,0))}static max(){return new Ee(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oa=-1;function f1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new vi(o,fe.empty(),e)}function p1(i){return new vi(i.readTime,i.key,Oa)}class vi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vi(Ee.min(),fe.empty(),Oa)}static max(){return new vi(Ee.max(),fe.empty(),Oa)}}function m1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Ae(i.largestBatchId,e.largestBatchId))}/**
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
 */const g1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class y1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ao(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==g1)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function v1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
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
 */const Yd=-1;function rc(i){return i==null}function zu(i){return i===0&&1/i==-1/0}function _1(i){return typeof i=="number"&&Number.isInteger(i)&&!zu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ev="";function w1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Rg(e)),e=E1(i.get(t),e);return Rg(e)}function E1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Ev:t+="";break;default:t+=u}}return t}function Rg(i){return i+Ev+""}/**
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
 */function Pg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ls(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Tv(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??xt.RED,this.left=o??xt.EMPTY,this.right=u??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new xt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xg(this.data.getIterator())}getIteratorFrom(e){return new xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new yt(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Iv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Iv("Invalid base64 string: "+u):u}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const T1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=T1.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function wi(i){return typeof i=="string"?bt.fromBase64String(i):bt.fromUint8Array(i)}/**
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
 */const Sv="server_timestamp",Av="__type__",kv="__previous_value__",Cv="__local_write_time__";function Jd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Av])===null||t===void 0?void 0:t.stringValue)===Sv}function ic(i){const e=i.mapValue.fields[kv];return Jd(e)?ic(e):e}function La(i){const e=_i(i.mapValue.fields[Cv].timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class I1{constructor(e,t,s,o,u,h,m,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E}}const Bu="(default)";class Ma{constructor(e,t){this.projectId=e,this.database=t||Bu}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===Bu}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Rv="__type__",S1="__max__",_u={mapValue:{}},Pv="__vector__",$u="value";function Ei(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Jd(i)?4:k1(i)?9007199254740991:A1(i)?10:11:ye(28295,{value:i})}function sr(i,e){if(i===e)return!0;const t=Ei(i);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=_i(o.timestampValue),m=_i(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return wi(o.bytesValue).isEqual(wi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?zu(h)===zu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Pg(h)!==Pg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!sr(h[y],m[y])))return!1;return!0})(i,e);default:return ye(52216,{left:i})}}function Fa(i,e){return(i.values||[]).find((t=>sr(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ei(i),s=Ei(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=it(u.integerValue||u.doubleValue),y=it(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Ng(i.timestampValue,e.timestampValue);case 4:return Ng(La(i),La(e));case 5:return wd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=wi(u),y=wi(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const E=Ae(m[_],y[_]);if(E!==0)return E}return Ae(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ae(it(u.latitude),it(h.latitude));return m!==0?m:Ae(it(u.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return bg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,y,_,E;const k=u.fields||{},x=h.fields||{},B=(m=k[$u])===null||m===void 0?void 0:m.arrayValue,J=(y=x[$u])===null||y===void 0?void 0:y.arrayValue,Y=Ae(((_=B==null?void 0:B.values)===null||_===void 0?void 0:_.length)||0,((E=J==null?void 0:J.values)===null||E===void 0?void 0:E.length)||0);return Y!==0?Y:bg(B,J)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===_u.mapValue&&h===_u.mapValue)return 0;if(u===_u.mapValue)return 1;if(h===_u.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let k=0;k<y.length&&k<E.length;++k){const x=wd(y[k],E[k]);if(x!==0)return x;const B=yo(m[y[k]],_[E[k]]);if(B!==0)return B}return Ae(y.length,E.length)})(i.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function Ng(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ae(i,e);const t=_i(i),s=_i(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function bg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return Ae(t.length,s.length)}function vo(i){return Ed(i)}function Ed(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=_i(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return wi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ed(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ed(t.fields[h])}`;return o+"}"})(i.mapValue):ye(61005,{value:i})}function Ru(i){switch(Ei(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(i);return e?16+Ru(e):16;case 5:return 2*i.stringValue.length;case 6:return wi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Ru(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ls(s.fields,((u,h)=>{o+=u.length+Ru(h)})),o})(i.mapValue);default:throw ye(13486,{value:i})}}function Td(i){return!!i&&"integerValue"in i}function Zd(i){return!!i&&"arrayValue"in i}function Dg(i){return!!i&&"nullValue"in i}function Vg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Pu(i){return!!i&&"mapValue"in i}function A1(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rv])===null||t===void 0?void 0:t.stringValue)===Pv}function Pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ls(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Pa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function k1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===S1}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Pu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ls(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new wn(Pa(this.value))}}function xv(i){const e=[];return ls(i.fields,((t,s)=>{const o=new Nt([t]);if(Pu(s)){const u=xv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Fn(e)}/**
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
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function Og(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!sr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function C1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Nv{}class mt extends Nv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new P1(e,t,s):t==="array-contains"?new b1(e,s):t==="in"?new D1(e,s):t==="not-in"?new V1(e,s):t==="array-contains-any"?new O1(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new x1(e,s):new N1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class or extends Nv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new or(e,t)}matches(e){return bv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function bv(i){return i.op==="and"}function Dv(i){return R1(i)&&bv(i)}function R1(i){for(const e of i.filters)if(e instanceof or)return!1;return!0}function Id(i){if(i instanceof mt)return i.field.canonicalString()+i.op.toString()+vo(i.value);if(Dv(i))return i.filters.map((e=>Id(e))).join(",");{const e=i.filters.map((t=>Id(t))).join(",");return`${i.op}(${e})`}}function Vv(i,e){return i instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(i,e):i instanceof or?(function(s,o){return o instanceof or&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Vv(h,o.filters[m])),!0):!1})(i,e):void ye(19439)}function Ov(i){return i instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${vo(t.value)}`})(i):i instanceof or?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ov).join(" ,")+"}"})(i):"Filter"}class P1 extends mt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class x1 extends mt{constructor(e,t){super(e,"in",t),this.keys=Lv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class N1 extends mt{constructor(e,t){super(e,"not-in",t),this.keys=Lv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Lv(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class b1 extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zd(t)&&Fa(t.arrayValue,this.value)}}class D1 extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fa(this.value.arrayValue,t)}}class V1 extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fa(this.value.arrayValue,t)}}class O1 extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Fa(this.value.arrayValue,s)))}}/**
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
 */class L1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Mg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new L1(i,e,t,s,o,u,h)}function ef(i){const e=Te(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Id(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>vo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>vo(s))).join(",")),e.Pe=t}return e.Pe}function tf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!C1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Vv(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Lg(i.startAt,e.startAt)&&Lg(i.endAt,e.endAt)}function Sd(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class sc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function M1(i,e,t,s,o,u,h,m){return new sc(i,e,t,s,o,u,h,m)}function nf(i){return new sc(i)}function Fg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function F1(i){return i.collectionGroup!==null}function xa(i){const e=Te(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(Nt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Wu(u,s))})),t.has(Nt.keyField().canonicalString())||e.Te.push(new Wu(Nt.keyField(),s))}return e.Te}function er(i){const e=Te(i);return e.Ie||(e.Ie=U1(e,xa(i))),e.Ie}function U1(i,e){if(i.limitType==="F")return Mg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Wu(o.field,u)}));const t=i.endAt?new Hu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Hu(i.startAt.position,i.startAt.inclusive):null;return Mg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Ad(i,e,t){return new sc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function oc(i,e){return tf(er(i),er(e))&&i.limitType===e.limitType}function Mv(i){return`${ef(er(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Ov(o))).join(", ")}]`),rc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>vo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>vo(o))).join(",")),`Target(${s})`})(er(i))}; limitType=${i.limitType})`}function ac(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of xa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=Og(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,xa(s),o)||s.endAt&&!(function(h,m,y){const _=Og(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,xa(s),o))})(i,e)}function j1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Fv(i){return(e,t)=>{let s=!1;for(const o of xa(i)){const u=z1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function z1(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?yo(y,_):ye(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:i.dir})}}/**
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
 */class us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Tv(this.inner)}size(){return this.innerSize}}/**
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
 */const B1=new et(fe.comparator);function Dr(){return B1}const Uv=new et(fe.comparator);function Sa(...i){let e=Uv;for(const t of i)e=e.insert(t.key,t);return e}function jv(i){let e=Uv;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Zi(){return Na()}function zv(){return Na()}function Na(){return new us((i=>i.toString()),((i,e)=>i.isEqual(e)))}const $1=new et(fe.comparator),H1=new yt(fe.comparator);function Pe(...i){let e=H1;for(const t of i)e=e.add(t);return e}const W1=new yt(Ae);function q1(){return W1}/**
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
 */function rf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function Bv(i){return{integerValue:""+i}}function G1(i,e){return _1(e)?Bv(e):rf(i,e)}/**
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
 */class lc{constructor(){this._=void 0}}function K1(i,e,t){return i instanceof qu?(function(o,u){const h={fields:{[Av]:{stringValue:Sv},[Cv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jd(u)&&(u=ic(u)),u&&(h.fields[kv]=u),{mapValue:h}})(t,e):i instanceof Ua?Hv(i,e):i instanceof ja?Wv(i,e):(function(o,u){const h=$v(o,u),m=Ug(h)+Ug(o.Ee);return Td(h)&&Td(o.Ee)?Bv(m):rf(o.serializer,m)})(i,e)}function Q1(i,e,t){return i instanceof Ua?Hv(i,e):i instanceof ja?Wv(i,e):t}function $v(i,e){return i instanceof Gu?(function(s){return Td(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class qu extends lc{}class Ua extends lc{constructor(e){super(),this.elements=e}}function Hv(i,e){const t=qv(e);for(const s of i.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ja extends lc{constructor(e){super(),this.elements=e}}function Wv(i,e){let t=qv(e);for(const s of i.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class Gu extends lc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Ug(i){return it(i.integerValue||i.doubleValue)}function qv(i){return Zd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function X1(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ua&&o instanceof Ua||s instanceof ja&&o instanceof ja?go(s.elements,o.elements,sr):s instanceof Gu&&o instanceof Gu?sr(s.Ee,o.Ee):s instanceof qu&&o instanceof qu})(i.transform,e.transform)}class Y1{constructor(e,t){this.version=e,this.transformResults=t}}class tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class uc{}function Gv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new sf(i.key,tr.none()):new Xa(i.key,i.data,tr.none());{const t=i.data,s=wn.empty();let o=new yt(Nt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new cs(i.key,s,new Fn(o.toArray()),tr.none())}}function J1(i,e,t){i instanceof Xa?(function(o,u,h){const m=o.value.clone(),y=zg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof cs?(function(o,u,h){if(!xu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=zg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(Kv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ba(i,e,t,s){return i instanceof Xa?(function(u,h,m,y){if(!xu(u.precondition,h))return m;const _=u.value.clone(),E=Bg(u.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof cs?(function(u,h,m,y){if(!xu(u.precondition,h))return m;const _=Bg(u.fieldTransforms,y,h),E=h.data;return E.setAll(Kv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((k=>k.field)))})(i,e,t,s):(function(u,h,m){return xu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function Z1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=$v(s.transform,o||null);u!=null&&(t===null&&(t=wn.empty()),t.set(s.field,u))}return t||null}function jg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>X1(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Xa extends uc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class cs extends uc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Kv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function zg(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Q1(h,m,t[o]))}return s}function Bg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,K1(u,h,e))}return s}class sf extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eS extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&J1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=zv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=Gv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ee.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>jg(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>jg(t,s)))}}class of{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return $1})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new of(e,t,s,o)}}/**
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
 */class nS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,De;function iS(i){switch(i){case G.OK:return ye(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ye(15467,{code:i})}}function Qv(i){if(i===void 0)return br("GRPC error has no .code"),G.UNKNOWN;switch(i){case at.OK:return G.OK;case at.CANCELLED:return G.CANCELLED;case at.UNKNOWN:return G.UNKNOWN;case at.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case at.INTERNAL:return G.INTERNAL;case at.UNAVAILABLE:return G.UNAVAILABLE;case at.UNAUTHENTICATED:return G.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case at.NOT_FOUND:return G.NOT_FOUND;case at.ALREADY_EXISTS:return G.ALREADY_EXISTS;case at.PERMISSION_DENIED:return G.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case at.ABORTED:return G.ABORTED;case at.OUT_OF_RANGE:return G.OUT_OF_RANGE;case at.UNIMPLEMENTED:return G.UNIMPLEMENTED;case at.DATA_LOSS:return G.DATA_LOSS;default:return ye(39323,{code:i})}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const sS=new mi([4294967295,4294967295],0);function $g(i){const e=vv().encode(i),t=new cv;return t.update(e),new Uint8Array(t.digest())}function Hg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new mi([t,s],0),new mi([o,u],0)]}class af{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Aa(`Invalid padding: ${t}`);if(s<0)throw new Aa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=mi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(mi.fromNumber(s)));return o.compare(sS)===1&&(o=new mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=$g(e),[s,o]=Hg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new af(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=$g(e),[s,o]=Hg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new cc(Ee.min(),o,new et(Ae),Dr(),Pe())}}class Ya{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ya(s,t,Pe(),Pe(),Pe())}}/**
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
 */class Nu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Xv{constructor(e,t){this.targetId=e,this.De=t}}class Yv{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Wg{constructor(){this.ve=0,this.Ce=qg(),this.Fe=bt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}})),new Ya(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=qg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class oS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Dr(),this.je=wu(),this.Je=wu(),this.He=new et(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Sd(u))if(s===0){const h=new fe(u.path);this.Xe(t,h,Ut.newNoDocument(h,Ee.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),y=m?this.ut(m,e,h):1;if(y!==0){this.rt(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=wi(s).toUint8Array()}catch(y){if(y instanceof Iv)return yi("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new af(h,o,u)}catch(y){return yi(y instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Sd(m.target)){const y=new fe(m.target.path);this.Tt(y).has(h)||this.It(h,y)||this.Xe(h,y,Ut.newNoDocument(y,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=Pe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.st(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new cc(e,t,this.He,this.ze,s);return this.ze=Dr(),this.je=wu(),this.Je=wu(),this.He=new et(Ae),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Wg,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Wg),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function wu(){return new et(fe.comparator)}function qg(){return new et(fe.comparator)}const aS={asc:"ASCENDING",desc:"DESCENDING"},lS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uS={and:"AND",or:"OR"};class cS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kd(i,e){return i.useProto3Json||rc(e)?e:{value:e}}function Ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function hS(i,e){return Ku(i,e.toTimestamp())}function nr(i){return Fe(!!i,49232),Ee.fromTimestamp((function(t){const s=_i(t);return new Ke(s.seconds,s.nanos)})(i))}function lf(i,e){return Cd(i,e).canonicalString()}function Cd(i,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Zv(i){const e=Ge.fromString(i);return Fe(i_(e),10190,{key:e.toString()}),e}function Rd(i,e){return lf(i.databaseId,e.path)}function rd(i,e){const t=Zv(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(t_(t))}function e_(i,e){return lf(i.databaseId,e)}function dS(i){const e=Zv(i);return e.length===4?Ge.emptyPath():t_(e)}function Pd(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function t_(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Gg(i,e,t){return{name:Rd(i,e),fields:t.value.mapValue.fields}}function fS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),bt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),bt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?G.UNKNOWN:Qv(_.code);return new ce(E,_.message||"")})(h);t=new Yv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=rd(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Ee.min(),m=new wn({mapValue:{fields:s.document.fields}}),y=Ut.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Nu(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=rd(i,s.document),u=s.readTime?nr(s.readTime):Ee.min(),h=Ut.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=rd(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new rS(o,u),m=s.targetId;t=new Xv(m,h)}}return t}function pS(i,e){let t;if(e instanceof Xa)t={update:Gg(i,e.key,e.value)};else if(e instanceof sf)t={delete:Rd(i,e.key)};else if(e instanceof cs)t={update:Gg(i,e.key,e.data),updateMask:IS(e.fieldMask)};else{if(!(e instanceof eS))return ye(16599,{Rt:e.type});t={verify:Rd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof qu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Gu)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:hS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)})(i,e.precondition)),t}function mS(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Ee.min())&&(h=nr(u)),new Y1(h,o.transformResults||[])})(t,e)))):[]}function gS(i,e){return{documents:[e_(i,e.path)]}}function yS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=e_(i,o);const u=(function(_){if(_.length!==0)return r_(or.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(x){return{field:oo(x.field),direction:wS(x.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=kd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function vS(i){let e=dS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(k){const x=n_(k);return x instanceof or&&Dv(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((x=>(function(J){return new Wu(ao(J.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(k){let x;return x=typeof k=="object"?k.value:k,rc(x)?null:x})(t.limit));let y=null;t.startAt&&(y=(function(k){const x=!!k.before,B=k.values||[];return new Hu(B,x)})(t.startAt));let _=null;return t.endAt&&(_=(function(k){const x=!k.before,B=k.values||[];return new Hu(B,x)})(t.endAt)),M1(e,o,h,u,m,"F",y,_)}function _S(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function n_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(i):i.fieldFilter!==void 0?(function(t){return mt.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return or.create(t.compositeFilter.filters.map((s=>n_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(i):ye(30097,{filter:i})}function wS(i){return aS[i]}function ES(i){return lS[i]}function TS(i){return uS[i]}function oo(i){return{fieldPath:i.canonicalString()}}function ao(i){return Nt.fromServerFormat(i.fieldPath)}function r_(i){return i instanceof mt?(function(t){if(t.op==="=="){if(Vg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(Dg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(Dg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:ES(t.op),value:t.value}}})(i):i instanceof or?(function(t){const s=t.getFilters().map((o=>r_(o)));return s.length===1?s[0]:{compositeFilter:{op:TS(t.op),filters:s}}})(i):ye(54877,{filter:i})}function IS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function i_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class hi{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=bt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SS{constructor(e){this.gt=e}}function AS(i){const e=vS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
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
 */class kS{constructor(){this.Dn=new CS}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(vi.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class CS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ge.comparator)).toArray()}}/**
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
 */const Kg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},s_=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(s_,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */const Qg="LruGarbageCollector",RS=1048576;function Xg([i,e],[t,s]){const o=Ae(i,t);return o===0?Ae(e,s):o}class PS{constructor(e){this.Tr=e,this.buffer=new yt(Xg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Qg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?ie(Qg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Rr(3e5)}))}}class NS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(nc.ue);const s=new PS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Kg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o)))).next((k=>(s=k,m=Date.now(),this.removeTargets(e,s,t)))).next((k=>(u=k,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((k=>(_=Date.now(),io()<=Re.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${k} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k}))))}}function bS(i,e){return new NS(i,e)}/**
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
 */class DS{constructor(){this.changes=new us((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ba(s.mutation,o,Fn.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Zi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Sa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Zi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Dr();const h=Na(),m=(function(){return Na()})();return t.forEach(((y,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof cs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),ba(E.mutation,_,E.mutation.getFieldMask(),Ke.now())):h.set(_.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var k;return m.set(_,new VS(E,(k=h.get(_))!==null&&k!==void 0?k:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new et(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let E=s.get(y)||Fn.empty();E=m.applyToLocalView(_,E),s.set(y,E);const k=(o.get(m.batchId)||Pe()).add(y);o=o.insert(m.batchId,k)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,E=y.value,k=zv();E.forEach((x=>{if(!u.has(x)){const B=Gv(t.get(x),s.get(x));B!==null&&k.set(x,B),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,k))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):F1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(Zi());let m=Oa,y=u;return h.next((_=>H.forEach(_,((E,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((x=>{y=y.insert(E,x)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Pe()))).next((E=>({batchId:m,changes:jv(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Sa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Sa();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(y=>{const _=(function(k,x){return new sc(x,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((k,x)=>{h=h.insert(k,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))}));let m=Sa();return h.forEach(((y,_)=>{const E=u.get(y);E!==void 0&&ba(E.mutation,_,Fn.empty(),Ke.now()),ac(t,_)&&(m=m.insert(y,_))})),m}))}}/**
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
 */class LS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:AS(o.bundledQuery),readTime:nr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class MS{constructor(){this.overlays=new et(fe.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Zi();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=Zi(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Zi(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=Zi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return H.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new nS(t,s));let u=this.kr.get(t);u===void 0&&(u=Pe(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class FS{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class uf{constructor(){this.qr=new yt(At.Qr),this.$r=new yt(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new fe(new Ge([])),s=new At(t,e),o=new At(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new fe(new Ge([])),s=new At(t,e),o=new At(t,e+1);let u=Pe();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new At(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return fe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||fe.comparator(e.key,t.key)}}/**
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
 */class US{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(At.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new tS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new At(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Yd:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Ae);return t.forEach((o=>{const u=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new At(new fe(u),0);let m=new yt(Ae);return this.Yr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Hr)),!0)}),h),H.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const u=new At(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new At(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jS{constructor(e){this.ni=e,this.docs=(function(){return new et(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Dr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Dr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||m1(p1(E),s)<=0||(o.has(E.key)||ac(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zS(this)}getSize(e){return H.resolve(this.size)}}class zS extends DS{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class BS{constructor(e){this.persistence=e,this.ii=new us((t=>ef(t)),tf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.si=0,this.oi=new uf,this.targetCount=0,this._i=_o.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new _o(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
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
 */class o_{constructor(e,t){this.ai={},this.overlays={},this.ui=new nc(0),this.ci=!1,this.ci=!0,this.li=new FS,this.referenceDelegate=e(this),this.hi=new BS(this),this.indexManager=new kS,this.remoteDocumentCache=(function(o){return new jS(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new SS(t),this.Ti=new LS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new US(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new $S(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class $S extends y1{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Ai=new uf,this.Ri=null}static Vi(e){return new cf(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=fe.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Qu{constructor(e,t){this.persistence=e,this.gi=new us((s=>w1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=bS(this,t)}static Vi(e,t){return new Qu(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ee.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ru(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new hf(e,t.fromCache,s,o)}}/**
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
 */class HS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Lw()?8:v1(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new HS;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(io()<=Re.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(io()<=Re.DEBUG&&ie("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(io()<=Re.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(t))):H.resolve())}ps(e,t){if(Fg(t))return H.resolve(null);let s=er(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ad(t,null,"F"),s=er(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.bs(t,m);return this.Ds(t,_,h,y.readTime)?this.ps(e,Ad(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ys(e,t,s,o){return Fg(t)||o.isEqual(Ee.min())?H.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?H.resolve(null):(io()<=Re.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.vs(e,h,t,f1(o,Oa)).next((m=>m)))}))}bs(e,t){let s=new yt(Fv(e));return t.forEach(((o,u)=>{ac(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return io()<=Re.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",so(t)),this.gs.getDocumentsMatchingQuery(e,t,vi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const df="LocalStore",qS=3e8;class GS{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Ae),this.Ms=new us((u=>ef(u)),tf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function KS(i,e,t,s){return new GS(i,e,t,s)}async function a_(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Pe();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function QS(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,E){const k=_.batch,x=k.keys();let B=H.resolve();return x.forEach((J=>{B=B.next((()=>E.getEntry(y,J))).next((Y=>{const W=_.docVersions.get(J);Fe(W!==null,48541),Y.version.compareTo(W)<0&&(k.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),E.addEntry(Y)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,k)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Pe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function l_(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function XS(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((E,k)=>{const x=o.get(k);if(!x)return;m.push(t.hi.removeMatchingKeys(u,E.removedDocuments,k).next((()=>t.hi.addMatchingKeys(u,E.addedDocuments,k))));let B=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?B=B.withResumeToken(bt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(k,B),(function(Y,W,de){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=qS?!0:de.addedDocuments.size+de.modifiedDocuments.size+de.removedDocuments.size>0})(x,B,E)&&m.push(t.hi.updateTargetData(u,B))}));let y=Dr(),_=Pe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(YS(u,h,e.documentUpdates).next((E=>{y=E.Ls,_=E.ks}))),!s.isEqual(Ee.min())){const E=t.hi.getLastRemoteSnapshotVersion(u).next((k=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Fs=o,u)))}function YS(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Dr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ee.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie(df,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{Ls:h,ks:o}}))}function JS(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Yd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function ZS(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new hi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function xd(i,e,t){const s=Te(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!ko(h))throw h;ie(df,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Yg(i,e,t){const s=Te(i);let o=Ee.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,E){const k=Te(y),x=k.Ms.get(E);return x!==void 0?H.resolve(k.Fs.get(x)):k.hi.getTargetData(_,E)})(s,h,er(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Pe()))).next((m=>(eA(s,j1(e),m),{documents:m,qs:u})))))}function eA(i,e,t){let s=i.xs.get(e)||Ee.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class Jg{constructor(){this.activeTargetIds=q1()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tA{constructor(){this.Fo=new Jg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Jg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nA{xo(e){}shutdown(){}}/**
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
 */const Zg="ConnectivityMonitor";class ey{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(Zg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(Zg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eu=null;function Nd(){return Eu===null?Eu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Eu++,"0x"+Eu.toString(16)}/**
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
 */const id="RestConnection",rA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Bu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Nd(),m=this.Go(e,t.toUriEncodedString());ie(id,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,o,u);const{host:_}=new URL(m),E=Eo(_);return this.jo(e,m,y,s,E).then((k=>(ie(id,`Received RPC '${e}' ${h}: `,k),k)),(k=>{throw yi(id,`RPC '${e}' ${h} failed with error: `,k,"url: ",m,"request:",s),k}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=rA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class sA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Mt="WebChannelConnection";class oA extends iA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Nd();return new Promise(((m,y)=>{const _=new hv;_.setWithCredentials(!0),_.listenOnce(dv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Cu.NO_ERROR:const k=_.getResponseJson();ie(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(k)),m(k);break;case Cu.TIMEOUT:ie(Mt,`RPC '${e}' ${h} timed out`),y(new ce(G.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const x=_.getStatus();if(ie(Mt,`RPC '${e}' ${h} failed with status:`,x,"response text:",_.getResponseText()),x>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const J=B==null?void 0:B.error;if(J&&J.status&&J.message){const Y=(function(de){const he=de.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(he)>=0?he:G.UNKNOWN})(J.status);y(new ce(Y,J.message))}else y(new ce(G.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ce(G.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ie(Mt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ie(Mt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=Nd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=mv(),m=pv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");ie(Mt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const k=h.createWebChannel(E,y);this.T_(k);let x=!1,B=!1;const J=new sA({Ho:W=>{B?ie(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(x||(ie(Mt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),x=!0),ie(Mt,`RPC '${e}' stream ${o} sending:`,W),k.send(W))},Yo:()=>k.close()}),Y=(W,de,he)=>{W.listen(de,(ge=>{try{he(ge)}catch(we){setTimeout((()=>{throw we}),0)}}))};return Y(k,Ia.EventType.OPEN,(()=>{B||(ie(Mt,`RPC '${e}' stream ${o} transport opened.`),J.s_())})),Y(k,Ia.EventType.CLOSE,(()=>{B||(B=!0,ie(Mt,`RPC '${e}' stream ${o} transport closed`),J.__(),this.I_(k))})),Y(k,Ia.EventType.ERROR,(W=>{B||(B=!0,yi(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),J.__(new ce(G.UNAVAILABLE,"The operation could not be completed")))})),Y(k,Ia.EventType.MESSAGE,(W=>{var de;if(!B){const he=W.data[0];Fe(!!he,16349);const ge=he,we=(ge==null?void 0:ge.error)||((de=ge[0])===null||de===void 0?void 0:de.error);if(we){ie(Mt,`RPC '${e}' stream ${o} received error:`,we);const ze=we.status;let Ie=(function(A){const P=at[A];if(P!==void 0)return Qv(P)})(ze),R=we.message;Ie===void 0&&(Ie=G.INTERNAL,R="Unknown error status: "+ze+" with message "+we.message),B=!0,J.__(new ce(Ie,R)),k.close()}else ie(Mt,`RPC '${e}' stream ${o} received:`,he),J.a_(he)}})),Y(m,fv.STAT_EVENT,(W=>{W.stat===_d.PROXY?ie(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===_d.NOPROXY&&ie(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{J.o_()}),0),J}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function sd(){return typeof document<"u"?document:null}/**
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
 */function hc(i){return new cS(i,!0)}/**
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
 */class u_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const ty="PersistentStream";class c_{constructor(e,t,s,o,u,h,m,y){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new u_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ce(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(ty,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ie(ty,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aA extends c_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=fS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?nr(h.readTime):Ee.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Pd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Sd(y)?{documents:gS(u,y)}:{query:yS(u,y).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Jv(u,h.resumeToken);const _=kd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Ku(u,h.snapshotVersion.toTimestamp());const _=kd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=_S(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Pd(this.serializer),t.removeTarget=e,this.k_(t)}}class lA extends c_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=mS(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Pd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>pS(this.serializer,s)))};this.k_(t)}}/**
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
 */class uA{}class cA extends uA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Cd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(G.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Cd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(G.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class hA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(br(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const as="RemoteStore";class dA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{hs(this)&&(ie(as,"Restarting streams for network reachability change."),await(async function(y){const _=Te(y);_.Ia.add(4),await Ja(_),_.Aa.set("Unknown"),_.Ia.delete(4),await dc(_)})(this))}))})),this.Aa=new hA(s,o)}}async function dc(i){if(hs(i))for(const e of i.da)await e(!0)}async function Ja(i){for(const e of i.da)await e(!1)}function h_(i,e){const t=Te(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),gf(t)?mf(t):Co(t).x_()&&pf(t,e))}function ff(i,e){const t=Te(i),s=Co(t);t.Ta.delete(e),s.x_()&&d_(t,e),t.Ta.size===0&&(s.x_()?s.B_():hs(t)&&t.Aa.set("Unknown"))}function pf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).H_(e)}function d_(i,e){i.Ra.$e(e),Co(i).Y_(e)}function mf(i){i.Ra=new oS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Aa.aa()}function gf(i){return hs(i)&&!Co(i).M_()&&i.Ta.size>0}function hs(i){return Te(i).Ia.size===0}function f_(i){i.Ra=void 0}async function fA(i){i.Aa.set("Online")}async function pA(i){i.Ta.forEach(((e,t)=>{pf(i,e)}))}async function mA(i,e){f_(i),gf(i)?(i.Aa.la(e),mf(i)):i.Aa.set("Unknown")}async function gA(i,e,t){if(i.Aa.set("Online"),e instanceof Yv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){ie(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xu(i,s)}else if(e instanceof Nu?i.Ra.Ye(e):e instanceof Xv?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ee.min()))try{const s=await l_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ta.get(_);E&&u.Ta.set(_,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const E=u.Ta.get(y);if(!E)return;u.Ta.set(y,E.withResumeToken(bt.EMPTY_BYTE_STRING,E.snapshotVersion)),d_(u,y);const k=new hi(E.target,y,_,E.sequenceNumber);pf(u,k)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ie(as,"Failed to raise snapshot:",s),await Xu(i,s)}}async function Xu(i,e,t){if(!ko(e))throw e;i.Ia.add(1),await Ja(i),i.Aa.set("Offline"),t||(t=()=>l_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(as,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await dc(i)}))}function p_(i,e){return e().catch((t=>Xu(i,t,e)))}async function fc(i){const e=Te(i),t=Ti(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Yd;for(;yA(e);)try{const o=await JS(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,vA(e,o)}catch(o){await Xu(e,o)}m_(e)&&g_(e)}function yA(i){return hs(i)&&i.Pa.length<10}function vA(i,e){i.Pa.push(e);const t=Ti(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function m_(i){return hs(i)&&!Ti(i).M_()&&i.Pa.length>0}function g_(i){Ti(i).start()}async function _A(i){Ti(i).na()}async function wA(i){const e=Ti(i);for(const t of i.Pa)e.X_(t.mutations)}async function EA(i,e,t){const s=i.Pa.shift(),o=of.from(s,e,t);await p_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await fc(i)}async function TA(i,e){e&&Ti(i).Z_&&await(async function(s,o){if((function(h){return iS(h)&&h!==G.ABORTED})(o.code)){const u=s.Pa.shift();Ti(s).N_(),await p_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await fc(s)}})(i,e),m_(i)&&g_(i)}async function ny(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),ie(as,"RemoteStore received new credentials");const s=hs(t);t.Ia.add(3),await Ja(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await dc(t)}async function IA(i,e){const t=Te(i);e?(t.Ia.delete(2),await dc(t)):e||(t.Ia.add(2),await Ja(t),t.Aa.set("Unknown"))}function Co(i){return i.Va||(i.Va=(function(t,s,o){const u=Te(t);return u.ia(),new aA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:fA.bind(null,i),e_:pA.bind(null,i),n_:mA.bind(null,i),J_:gA.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),gf(i)?mf(i):i.Aa.set("Unknown")):(await i.Va.stop(),f_(i))}))),i.Va}function Ti(i){return i.ma||(i.ma=(function(t,s,o){const u=Te(t);return u.ia(),new lA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:_A.bind(null,i),n_:TA.bind(null,i),ea:wA.bind(null,i),ta:EA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await fc(i)):(await i.ma.stop(),i.Pa.length>0&&(ie(as,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
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
 */class yf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new yf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(i,e){if(br("AsyncQueue",`${e}: ${i}`),ko(i))return new ce(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class fo{static emptySet(e){return new fo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Sa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ry{constructor(){this.fa=new et(fe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class wo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new wo(e,t,fo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class SA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class AA{constructor(){this.queries=iy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=iy(),u.forEach(((h,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new ce(G.ABORTED,"Firestore shutting down"))}}function iy(){return new us((i=>Mv(i)),oc)}async function kA(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new SA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=vf(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&_f(t)}async function CA(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function RA(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&_f(t)}function PA(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function _f(i){i.Da.forEach((e=>{e.next()}))}var bd,sy;(sy=bd||(bd={})).Fa="default",sy.Cache="cache";class xA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==bd.Cache}}/**
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
 */class y_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class NA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=Fv(e),this.eu=new fo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ry,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,k)=>{const x=o.get(E),B=ac(this.query,k)?k:null,J=!!x&&this.mutatedKeys.has(x.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;x&&B?x.data.isEqual(B.data)?J!==Y&&(s.track({type:3,doc:B}),W=!0):this.iu(x,B)||(s.track({type:2,doc:B}),W=!0,(y&&this.Xa(B,y)>0||_&&this.Xa(B,_)<0)&&(m=!0)):!x&&B?(s.track({type:0,doc:B}),W=!0):x&&!B&&(s.track({type:1,doc:x}),W=!0,(y||_)&&(m=!0)),W&&(B?(h=h.add(B),u=Y?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,k)=>(function(B,J){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:W})}};return Y(B)-Y(J)})(E.type,k.type)||this.Xa(E.doc,k.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],y=this.Za.size===0&&this.current&&!o?1:0,_=y!==this.Ya;return this.Ya=y,h.length!==0||_?{snapshot:new wo(this.query,e.eu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ry,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new v_(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new y_(s))})),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return wo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const wf="SyncEngine";class bA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class DA{constructor(e){this.key=e,this.lu=!1}}class VA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new us((m=>Mv(m)),oc),this.Tu=new Map,this.Iu=new Set,this.du=new et(fe.comparator),this.Eu=new Map,this.Au=new uf,this.Ru={},this.Vu=new Map,this.mu=_o.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function OA(i,e,t=!0){const s=S_(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await __(s,e,t,!0),o}async function LA(i,e){const t=S_(i);await __(t,e,!0,!1)}async function __(i,e,t,s){const o=await ZS(i.localStore,er(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await MA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&h_(i.remoteStore,o),m}async function MA(i,e,t,s,o){i.gu=(k,x,B)=>(async function(Y,W,de,he){let ge=W.view.nu(de);ge.Ds&&(ge=await Yg(Y.localStore,W.query,!1).then((({documents:R})=>W.view.nu(R,ge))));const we=he&&he.targetChanges.get(W.targetId),ze=he&&he.targetMismatches.get(W.targetId)!=null,Ie=W.view.applyChanges(ge,Y.isPrimaryClient,we,ze);return ay(Y,W.targetId,Ie._u),Ie.snapshot})(i,k,x,B);const u=await Yg(i.localStore,e,!0),h=new NA(e,u.qs),m=h.nu(u.documents),y=Ya.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);ay(i,t,_._u);const E=new bA(e,t,h);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),_.snapshot}async function FA(i,e,t){const s=Te(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!oc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await xd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ff(s.remoteStore,o.targetId),Dd(s,o.targetId)})).catch(Ao)):(Dd(s,o.targetId),await xd(s.localStore,o.targetId,!0))}async function UA(i,e){const t=Te(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ff(t.remoteStore,s.targetId))}async function jA(i,e,t){const s=GA(i);try{const o=await(function(h,m){const y=Te(h),_=Ke.now(),E=m.reduce(((B,J)=>B.add(J.key)),Pe());let k,x;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let J=Dr(),Y=Pe();return y.Os.getEntries(B,E).next((W=>{J=W,J.forEach(((de,he)=>{he.isValidDocument()||(Y=Y.add(de))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,J))).next((W=>{k=W;const de=[];for(const he of m){const ge=Z1(he,k.get(he.key).overlayedDocument);ge!=null&&de.push(new cs(he.key,ge,xv(ge.value.mapValue),tr.exists(!0)))}return y.mutationQueue.addMutationBatch(B,_,de,m)})).next((W=>{x=W;const de=W.applyToLocalDocumentSet(k,Y);return y.documentOverlayCache.saveOverlays(B,W.batchId,de)}))})).then((()=>({batchId:x.batchId,changes:jv(k)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Ae)),_=_.insert(m,y),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await Za(s,o.changes),await fc(s.remoteStore)}catch(o){const u=vf(o,"Failed to persist write");t.reject(u)}}async function w_(i,e){const t=Te(i);try{const s=await XS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await Za(t,s,e)}catch(s){await Ao(s)}}function oy(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Te(h);y.onlineState=m;let _=!1;y.queries.forEach(((E,k)=>{for(const x of k.wa)x.va(m)&&(_=!0)})),_&&_f(y)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zA(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new et(fe.comparator);h=h.insert(u,Ut.newNoDocument(u,Ee.min()));const m=Pe().add(u),y=new cc(Ee.min(),new Map,new et(Ae),h,m);await w_(s,y),s.du=s.du.remove(u),s.Eu.delete(e),Ef(s)}else await xd(s.localStore,e,!1).then((()=>Dd(s,e,t))).catch(Ao)}async function BA(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await QS(t.localStore,e);T_(t,s,null),E_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await Ao(o)}}async function $A(i,e,t){const s=Te(i);try{const o=await(function(h,m){const y=Te(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,m).next((k=>(Fe(k!==null,37113),E=k.keys(),y.mutationQueue.removeMutationBatch(_,k)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);T_(s,e,t),E_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await Ao(o)}}function E_(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function T_(i,e,t){const s=Te(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Dd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||I_(i,s)}))}function I_(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(ff(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Ef(i))}function ay(i,e,t){for(const s of t)s instanceof y_?(i.Au.addReference(s.key,e),HA(i,s)):s instanceof v_?(ie(wf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||I_(i,s.key)):ye(19791,{yu:s})}function HA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ie(wf,"New document in limbo: "+t),i.Iu.add(s),Ef(i))}function Ef(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new fe(Ge.fromString(e)),s=i.mu.next();i.Eu.set(s,new DA(t)),i.du=i.du.insert(t,s),h_(i.remoteStore,new hi(er(nf(t.path)),s,"TargetPurposeLimboResolution",nc.ue))}}async function Za(i,e,t){const s=Te(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{h.push(s.gu(y,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const k=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,k?"current":"not-current")}if(_){o.push(_);const k=hf.Es(y.targetId,_);u.push(k)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(y,_){const E=Te(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>H.forEach(_,(x=>H.forEach(x.Is,(B=>E.persistence.referenceDelegate.addReference(k,x.targetId,B))).next((()=>H.forEach(x.ds,(B=>E.persistence.referenceDelegate.removeReference(k,x.targetId,B)))))))))}catch(k){if(!ko(k))throw k;ie(df,"Failed to update sequence numbers: "+k)}for(const k of _){const x=k.targetId;if(!k.fromCache){const B=E.Fs.get(x),J=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(J);E.Fs=E.Fs.insert(x,Y)}}})(s.localStore,u))}async function WA(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){ie(wf,"User change. New user:",e.toKey());const s=await a_(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((y=>{y.reject(new ce(G.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Bs)}}function qA(i,e){const t=Te(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let o=Pe();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function S_(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=w_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zA.bind(null,e),e.hu.J_=RA.bind(null,e.eventManager),e.hu.pu=PA.bind(null,e.eventManager),e}function GA(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$A.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return KS(this.persistence,new WS,e.initialUser,this.serializer)}Du(e){return new o_(cf.Vi,this.serializer)}bu(e){return new tA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class KA extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof Qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new xS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new o_((s=>Qu.Vi(s,t)),this.serializer)}}class Vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>oy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=WA.bind(null,this.syncEngine),await IA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new AA})()}createDatastore(e){const t=hc(e.databaseInfo.databaseId),s=(function(u){return new oA(u)})(e.databaseInfo);return(function(u,h,m,y){return new cA(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new dA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>oy(this.syncEngine,t,0)),(function(){return ey.C()?new ey:new nA})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,E){const k=new VA(o,u,h,m,y,_);return E&&(k.fu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Te(o);ie(as,"RemoteStore shutting down."),u.Ia.add(5),await Ja(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 */class QA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ii="FirestoreClient";class XA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=Qd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(Ii,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Ii,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function od(i,e){i.asyncQueue.verifyOperationInProgress(),ie(Ii,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await a_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{yi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{yi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function ly(i,e){i.asyncQueue.verifyOperationInProgress();const t=await YA(i);ie(Ii,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ny(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ny(e.remoteStore,o))),i._onlineComponents=e}async function YA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(Ii,"Using user provided OfflineComponentProvider");try{await od(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await od(i,new Yu)}}else ie(Ii,"Using default OfflineComponentProvider"),await od(i,new KA(void 0));return i._offlineComponents}async function A_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(Ii,"Using user provided OnlineComponentProvider"),await ly(i,i._uninitializedComponentsProvider._online)):(ie(Ii,"Using default OnlineComponentProvider"),await ly(i,new Vd))),i._onlineComponents}function JA(i){return A_(i).then((e=>e.syncEngine))}async function uy(i){const e=await A_(i),t=e.eventManager;return t.onListen=OA.bind(null,e.syncEngine),t.onUnlisten=FA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=LA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=UA.bind(null,e.syncEngine),t}/**
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
 */function k_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const cy=new Map;/**
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
 */const C_="firestore.googleapis.com",hy=!0;class dy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=C_,this.ssl=hy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=s_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RS)throw new ce(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new r1;switch(s.type){case"firstParty":return new a1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=cy.get(t);s&&(ie("ComponentProvider","Removing Datastore"),cy.delete(t),s.terminate())})(this),Promise.resolve()}}function ZA(i,e,t,s={}){var o;i=ts(i,pc);const u=Eo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(Ay(`https://${y}`),ky("Firestore",!0)),h.host!==C_&&h.host!==y&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!rs(_,m)&&(i._setSettings(_),s.mockUserToken)){let E,k;if(typeof s.mockUserToken=="string")E=s.mockUserToken,k=Ft.MOCK_USER;else{E=Cw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ce(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Ft(x)}i._authCredentials=new i1(new yv(E,k))}}/**
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
 */class mc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mc(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qa(t,gt._jsonSchema))return new gt(e,s||null,new fe(Ge.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:lt("string",gt._jsonSchemaVersion),referencePath:lt("string")};class gi extends mc{constructor(e,t,s){super(e,t,nf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new fe(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function ad(i,e,...t){if(i=ln(i),_v("collection","path",e),i instanceof pc){const s=Ge.fromString(e,...t);return Ag(s),new gi(i,null,s)}{if(!(i instanceof gt||i instanceof gi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Ag(s),new gi(i.firestore,null,s)}}function ld(i,e,...t){if(i=ln(i),arguments.length===1&&(e=Qd.newId()),_v("doc","path",e),i instanceof pc){const s=Ge.fromString(e,...t);return Sg(s),new gt(i,null,new fe(s))}{if(!(i instanceof gt||i instanceof gi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Sg(s),new gt(i.firestore,i instanceof gi?i.converter:null,new fe(s))}}/**
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
 */const fy="AsyncQueue";class py{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new u_(this,"async_queue_retry"),this.oc=()=>{const s=sd();s&&ie(fy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new es;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ko(e))throw e;ie(fy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,br("INTERNAL UNHANDLED ERROR: ",my(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=yf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&ye(47125,{hc:my(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function my(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function gy(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class za extends pc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new py,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function ek(i,e){const t=typeof i=="object"?i:xy(),s=typeof i=="string"?i:Bu,o=Fd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Aw("firestore");u&&ZA(o,...u)}return o}function R_(i){if(i._terminated)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||tk(i),i._firestoreClient}function tk(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,y,_,E){return new I1(m,y,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,k_(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new XA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(bt.fromBase64String(e))}catch(t){throw new ce(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:lt("string",En._jsonSchemaVersion),bytes:lt("string")};/**
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
 */class Tf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class P_{constructor(e){this._methodName=e}}/**
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
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:lt("string",rr._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
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
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ce(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:lt("string",ir._jsonSchemaVersion),vectorValues:lt("object")};/**
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
 */const nk=/^__.*__$/;class rk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}function x_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:i})}}class If{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new If(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ju(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(x_(this.Ec)&&nk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ik{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||hc(e)}Dc(e,t,s,o=!1){return new If({Ec:e,methodName:t,bc:s,path:Nt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sk(i){const e=i._freezeSettings(),t=hc(i._databaseId);return new ik(i._databaseId,!!e.ignoreUndefinedProperties,t)}function ok(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);V_("Data must be an object, but it was:",h,s);const m=b_(s,h);let y,_;if(u.merge)y=new Fn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const k of u.mergeFields){const x=ak(e,k,t);if(!h.contains(x))throw new ce(G.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);uk(E,x)||E.push(x)}y=new Fn(E),_=h.fieldTransforms.filter((k=>y.covers(k.field)))}else y=null,_=h.fieldTransforms;return new rk(new wn(m),y,_)}function N_(i,e){if(D_(i=ln(i)))return V_("Unsupported field value:",e,i),b_(i,e);if(i instanceof P_)return(function(s,o){if(!x_(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=N_(m,o.yc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=ln(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return G1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ke.fromDate(s);return{timestampValue:Ku(o.serializer,u)}}if(s instanceof Ke){const u=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof En)return{bytesValue:Jv(o.serializer,s._byteString)};if(s instanceof gt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:lf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[Rv]:{stringValue:Pv},[$u]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.wc("VectorValues must only contain numeric values.");return rf(m.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Xd(s)}`)})(i,e)}function b_(i,e){const t={};return Tv(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(i,((s,o)=>{const u=N_(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function D_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ke||i instanceof rr||i instanceof En||i instanceof gt||i instanceof P_||i instanceof ir)}function V_(i,e,t){if(!D_(t)||!wv(t)){const s=Xd(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function ak(i,e,t){if((e=ln(e))instanceof Tf)return e._internalPath;if(typeof e=="string")return O_(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const lk=new RegExp("[~\\*/\\[\\]]");function O_(i,e,t){if(e.search(lk)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Tf(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ce(G.INVALID_ARGUMENT,m+i+y)}function uk(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class L_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(M_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ck extends L_{data(){return super.data()}}function M_(i,e){return typeof e=="string"?O_(i,e):e instanceof Tf?e._internalPath:e._delegate._internalPath}/**
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
 */function hk(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dk{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ls(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[$u].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new ir(u)}convertGeoPoint(e){return new rr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=_i(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Fe(i_(s),9688,{name:e});const o=new Ma(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||br(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function fk(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends L_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(M_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ns._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:lt("string",ns._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class bu extends ns{data(e={}){return super.data(e)}}class po{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ka(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new bu(this._firestore,this._userDataWriter,s.key,s,new ka(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ka(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:pk(m.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=po._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:i})}}po._jsonSchemaVersion="firestore/querySnapshot/1.0",po._jsonSchema={type:lt("string",po._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class F_ extends dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function yy(i,e,t){i=ts(i,gt);const s=ts(i.firestore,za),o=fk(i.converter,e);return U_(s,[ok(sk(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,tr.none())])}function mk(i){return U_(ts(i.firestore,za),[new sf(i._key,tr.none())])}function gk(i,...e){var t,s,o;i=ln(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||gy(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(gy(e[h])){const k=e[h];e[h]=(t=k.next)===null||t===void 0?void 0:t.bind(k),e[h+1]=(s=k.error)===null||s===void 0?void 0:s.bind(k),e[h+2]=(o=k.complete)===null||o===void 0?void 0:o.bind(k)}let y,_,E;if(i instanceof gt)_=ts(i.firestore,za),E=nf(i._key.path),y={next:k=>{e[h]&&e[h](yk(_,i,k))},error:e[h+1],complete:e[h+2]};else{const k=ts(i,mc);_=ts(k.firestore,za),E=k._query;const x=new F_(_);y={next:B=>{e[h]&&e[h](new po(_,x,k,B))},error:e[h+1],complete:e[h+2]},hk(i._query)}return(function(x,B,J,Y){const W=new QA(Y),de=new xA(B,W,J);return x.asyncQueue.enqueueAndForget((async()=>kA(await uy(x),de))),()=>{W.Ou(),x.asyncQueue.enqueueAndForget((async()=>CA(await uy(x),de)))}})(R_(_),E,m,y)}function U_(i,e){return(function(s,o){const u=new es;return s.asyncQueue.enqueueAndForget((async()=>jA(await JA(s),o,u))),u.promise})(R_(i),e)}function yk(i,e,t){const s=t.docs.get(e._key),o=new F_(i);return new ns(i,o,e._key,s,new ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){So=o})(To),mo(new is("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new za(new s1(s.getProvider("auth-internal")),new l1(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ce(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(_.options.projectId,E)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),pi(_g,wg,e),pi(_g,wg,"esm2017")})();const vk={apiKey:"AIzaSyD3HNVcLjjsptFnJWsmXwL9_SQvyqtALHs",authDomain:"tcssh-service.firebaseapp.com",projectId:"tcssh-service",storageBucket:"tcssh-service.firebasestorage.app",messagingSenderId:"438628712501",appId:"1:438628712501:web:626754f06fdb088126f17c"},j_=Py(vk),Tu=t1(j_),ud=ek(j_),cd="tcssh-service";function _k(){const[i,e]=St.useState(null),[t,s]=St.useState("form"),[o,u]=St.useState(""),[h,m]=St.useState(1),y=30,[_,E]=St.useState({registrar:"",date:new Date().toISOString().split("T")[0]}),[k,x]=St.useState([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}]),[B,J]=St.useState([]),[Y,W]=St.useState({show:!1,message:"",type:""}),[de,he]=St.useState({show:!1,recordId:null,record:null,action:"",password:""});St.useEffect(()=>{document.title="二中學生愛校服務登記表",(async()=>{try{const ne=typeof window<"u"?window.__initial_auth_token:void 0;if(ne)try{await zT(Tu,ne)}catch(ee){console.warn("自訂權杖不相容，已自動切換至匿名登入模式：",ee),await lg(Tu)}else await lg(Tu)}catch(ne){console.error("初始登入失敗:",ne),R("資料庫連線認證失敗","error")}})();const $=HT(Tu,e);return()=>$()},[]),St.useEffect(()=>{if(!i)return;const K=ad(ud,"artifacts",cd,"public","data","serviceRecords"),$=gk(K,ne=>{const ee=new Date;ee.setFullYear(ee.getFullYear()-1);const D=ne.docs.map(z=>({id:Number(z.id),...z.data()})).filter(z=>new Date(z.date)>=ee);J(D)},ne=>{console.error("讀取資料失敗:",ne),R("無法連接資料庫","error")});return()=>$()},[i]),St.useEffect(()=>{m(1)},[o]);const ge=K=>{const{name:$,value:ne}=K.target;E(ee=>({...ee,[$]:ne}))},we=(K,$,ne)=>{x(k.map(ee=>ee.id===K?{...ee,[$]:ne}:ee))},ze=()=>{x([...k,{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])},Ie=K=>{k.length>1&&x(k.filter($=>$.id!==K))},R=(K,$="success")=>{W({show:!0,message:K,type:$}),setTimeout(()=>{W({show:!1,message:"",type:""})},3e3)},I=async K=>{if(K.preventDefault(),!i){R("資料庫尚未連線，請稍候再試","error");return}if(!_.registrar||!_.date){R("請填寫上方「登記人」與「登記日期」！","error");return}const $=k.filter(z=>z.studentId.trim()!==""||z.name.trim()!==""||z.violationReason.trim()!=="");if($.length===0){R("請至少填寫一筆學生的資料！","error");return}if($.some(z=>!z.studentId.trim()||!z.name.trim()||!z.violationReason.trim())){R("請確認有輸入的列皆已完整填寫「學號」、「姓名」與「違規事件」！","error");return}if($.some(z=>z.studentId.trim().length!==6)){R("請確認輸入的學號皆為 6 碼！","error");return}const D=$.map((z,ae)=>({id:Date.now()-ae,registrar:_.registrar,date:_.date,studentId:z.studentId,name:z.name,serviceCount:Number(z.serviceCount)||1,violationReason:z.violationReason,timestamp:new Date().toLocaleString(),completed:!1}));try{const z=ad(ud,"artifacts",cd,"public","data","serviceRecords");await Promise.all(D.map(ae=>yy(ld(z,ae.id.toString()),ae))),R(`成功登記 ${D.length} 筆資料並儲存至雲端！`,"success"),x([{id:Date.now(),studentId:"",name:"",serviceCount:1,violationReason:""}])}catch(z){console.error("寫入失敗:",z),R("資料庫寫入失敗，請重試！","error")}},A=K=>{he({show:!0,recordId:null,record:K,action:"toggleComplete",password:""})},P=K=>{he({show:!0,recordId:K,record:null,action:"delete",password:""})},b=async()=>{if(i)if(de.password==="22021897"){const K=ad(ud,"artifacts",cd,"public","data","serviceRecords");if(de.action==="delete")try{await mk(ld(K,de.recordId.toString())),R("紀錄已從資料庫徹底刪除","info")}catch($){console.error("刪除失敗:",$),R("資料庫刪除失敗，請重試！","error")}else if(de.action==="toggleComplete"){const $=de.record,ne=!$.completed;try{await yy(ld(K,$.id.toString()),{...$,completed:ne}),R(ne?`已將 ${$.name} 標記為完成！`:`已取消 ${$.name} 的完成狀態`,ne?"success":"info")}catch(ee){console.error("更新完成狀態失敗:",ee),R("雲端更新失敗，請重試！","error")}}he({show:!1,recordId:null,record:null,action:"",password:""})}else R("密碼錯誤，拒絕執行操作！","error")},V=B.filter(K=>{const $=o.toLowerCase();return K.date.toLowerCase().includes($)||K.studentId.toLowerCase().includes($)||K.name.toLowerCase().includes($)||K.registrar.toLowerCase().includes($)}),S=Math.ceil(V.length/y)||1,Qe=h*y,vt=Qe-y,ut=[...V].sort((K,$)=>$.id-K.id).slice(vt,Qe);return O.jsxs("div",{className:"min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 relative selection:bg-blue-600 selection:text-white",children:[O.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none rounded-b-[40px] z-0"}),O.jsxs("div",{className:"relative w-full max-w-5xl mx-auto space-y-8 transition-all duration-300 z-10",children:[O.jsxs("header",{className:"bg-white rounded-3xl shadow-md border border-slate-200/80 p-8 sm:p-12 text-center relative overflow-hidden mt-8 sm:mt-0",children:[O.jsx("div",{className:"absolute top-0 left-0 w-full h-3 bg-blue-600 school-gradient"}),O.jsx("div",{className:"flex justify-center items-center mb-5",children:O.jsx("div",{className:"bg-blue-50 text-blue-700 p-4 rounded-2xl shadow-inner border border-blue-100",children:O.jsx(Kh,{size:44,className:"stroke-[1.8]"})})}),O.jsxs("div",{className:"inline-flex items-center space-x-2 bg-slate-100/90 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 mb-4 border border-slate-200 shadow-sm",children:[O.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-600 animate-pulse"}),O.jsx("span",{children:"臺中二中學務處 生輔組"})]}),O.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none mb-3",children:"二中學生愛校服務登記表"}),O.jsxs("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-center hidden sm:block",children:["依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導",O.jsx("br",{}),"期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"]}),O.jsx("p",{className:"text-slate-900 font-bold max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-left block sm:hidden px-4",children:"依據本校愛校服務實施要點，針對違反生活常規同學，以愛校服務實施輔導，期能引導同學記取錯誤教訓，進而改進其違規行為與生活常規之違規態樣。"})]}),O.jsx("div",{className:"flex justify-center mb-6",children:O.jsxs("div",{className:"bg-slate-200/80 p-1.5 rounded-2xl inline-flex space-x-1 border border-slate-300 shadow-sm",children:[O.jsxs("button",{onClick:()=>s("form"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${t==="form"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-950 hover:bg-white/40"}`,children:[O.jsx(dw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記作業"]}),O.jsxs("button",{onClick:()=>s("list"),className:`flex items-center px-8 py-3 rounded-xl text-sm font-black transition-all duration-250 cursor-pointer ${t==="list"?"bg-white text-blue-800 shadow-md transform scale-[1.02]":"text-slate-800 hover:text-slate-950 hover:bg-white/40"}`,children:[O.jsx(aw,{size:16,className:"mr-2 text-blue-600 stroke-[2.5]"}),"登記名單查詢"]})]})}),Y.show&&O.jsxs("div",{className:`fixed bottom-6 right-6 z-50 flex items-center p-4 rounded-2xl shadow-2xl border-2 transition-all duration-300 transform translate-y-0 opacity-100 ${Y.type==="error"?"bg-red-50 text-red-950 border-red-200 shadow-red-100":Y.type==="info"?"bg-blue-50 text-blue-950 border-blue-200 shadow-blue-100":"bg-emerald-50 text-emerald-950 border-emerald-200 shadow-emerald-100"}`,children:[O.jsx("div",{className:`p-1.5 rounded-lg mr-3 ${Y.type==="error"?"bg-red-100 text-red-700":Y.type==="info"?"bg-blue-100 text-blue-700":"bg-emerald-100 text-emerald-700"}`,children:Y.type==="error"?O.jsx(Um,{size:20,className:"stroke-[2.5]"}):Y.type==="info"?O.jsx(Qh,{size:20,className:"stroke-[2.5]"}):O.jsx(Gh,{size:20,className:"stroke-[2.5]"})}),O.jsx("span",{className:"font-extrabold text-sm",children:Y.message})]}),de.show&&O.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity",children:O.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-slate-200 animate-in zoom-in-95 duration-200",children:[O.jsxs("div",{className:"flex items-center text-red-600 mb-4 bg-red-50/50 p-3 rounded-2xl",children:[O.jsx(Um,{size:24,className:"mr-2 text-red-600 stroke-[2.5]"}),O.jsx("h3",{className:"text-lg font-black text-slate-950",children:de.action==="delete"?"確認刪除紀錄":"確認變更完成狀態"})]}),O.jsx("p",{className:"text-sm text-slate-700 font-bold leading-relaxed mb-5",children:"此操作需要生輔組權限驗證。請輸入管理員密碼："}),O.jsx("input",{type:"password",placeholder:"請輸入密碼",value:de.password,onChange:K=>he($=>({...$,password:K.target.value})),onKeyDown:K=>K.key==="Enter"&&b(),className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 text-slate-950 font-bold outline-none mb-6 placeholder:text-slate-400 font-mono text-center tracking-widest",autoFocus:!0}),O.jsxs("div",{className:"flex justify-end space-x-3",children:[O.jsx("button",{onClick:()=>he({show:!1,recordId:null,record:null,action:"",password:""}),className:"px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors font-extrabold text-sm",children:"取消"}),O.jsx("button",{onClick:b,className:"px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md shadow-red-500/10 transition-colors font-extrabold text-sm",children:"確認確認"})]})]})}),O.jsxs("div",{className:"w-full",children:[t==="form"&&O.jsxs("div",{className:"max-w-5xl mx-auto space-y-6",children:[O.jsxs("form",{onSubmit:I,className:"bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-10",children:[O.jsxs("h2",{className:"text-xl font-black mb-6 flex items-center text-slate-950 border-b pb-4 border-slate-100",children:[O.jsx(mw,{size:22,className:"mr-2.5 text-blue-600 stroke-[2.5]"}),"填寫登記資料"]}),O.jsxs("div",{className:"space-y-6",children:[O.jsxs("div",{className:"p-5 bg-gradient-to-br from-slate-100 to-slate-200/40 border-2 border-slate-300 rounded-2xl space-y-4 shadow-sm",children:[O.jsxs("p",{className:"text-xs text-slate-800 font-black mb-2 flex items-center",children:[O.jsx(Qh,{size:14,className:"mr-1.5 text-blue-600 stroke-[2.5]"})," 以下資料送出後會自動保留"]}),O.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[O.jsxs("div",{children:[O.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記人 (師長/負責幹部) ",O.jsx("span",{className:"text-red-600",children:"*"})]}),O.jsx("input",{type:"text",name:"registrar",placeholder:"例: 林組長",value:_.registrar,onChange:ge,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-slate-950 font-extrabold bg-white placeholder:text-slate-400 shadow-inner"})]}),O.jsxs("div",{children:[O.jsxs("label",{className:"block text-sm font-extrabold text-slate-900 mb-2",children:["登記日期 ",O.jsx("span",{className:"text-red-500",children:"*"})]}),O.jsx("input",{type:"date",name:"date",value:_.date,onChange:ge,className:"w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all text-slate-950 font-extrabold bg-white shadow-inner"})]})]})]}),O.jsxs("div",{className:"space-y-4",children:[O.jsx("div",{className:"flex justify-between items-end mb-1",children:O.jsx("label",{className:"block text-sm font-extrabold text-slate-900",children:"批次學生資料填寫"})}),k.map((K,$)=>O.jsxs("div",{className:"relative p-6 border-2 border-slate-200/80 rounded-2xl bg-white shadow-sm flex flex-col gap-4 group transition-all hover:shadow-md hover:border-slate-300",children:[k.length>1&&O.jsx("button",{type:"button",onClick:()=>Ie(K.id),className:"absolute -top-3 -right-3 bg-white text-slate-500 hover:text-red-600 hover:bg-red-50 border-2 border-slate-200 rounded-full p-1.5 shadow-md transition-colors z-10 cursor-pointer",title:"移除此列",children:O.jsx(Bm,{size:16,className:"stroke-[2.5]"})}),O.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-6 gap-4",children:[O.jsxs("div",{className:"sm:col-span-2",children:[O.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["學號 ",O.jsx("span",{className:"text-red-600",children:"*"})]}),O.jsx("input",{type:"text",placeholder:"例: 110123",maxLength:"6",value:K.studentId,onChange:ne=>we(K.id,"studentId",ne.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-extrabold outline-none placeholder:text-slate-400 font-mono shadow-inner"})]}),O.jsxs("div",{className:"sm:col-span-2",children:[O.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["姓名 ",O.jsx("span",{className:"text-red-600",children:"*"})]}),O.jsx("input",{type:"text",placeholder:"例: 王小明",value:K.name,onChange:ne=>we(K.id,"name",ne.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-extrabold outline-none placeholder:text-slate-400 shadow-inner"})]}),O.jsxs("div",{className:"sm:col-span-2",children:[O.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["次數 ",O.jsx("span",{className:"text-red-600",children:"*"})]}),O.jsx("input",{type:"number",min:"1",value:K.serviceCount,onChange:ne=>we(K.id,"serviceCount",ne.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-black outline-none shadow-inner"})]}),O.jsxs("div",{className:"sm:col-span-6",children:[O.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:["違規事件/事由 ",O.jsx("span",{className:"text-red-600",children:"*"})]}),O.jsx("input",{type:"text",placeholder:"例: 遲到、未交作業",value:K.violationReason,onChange:ne=>we(K.id,"violationReason",ne.target.value),className:"w-full px-4 py-2.5 text-sm border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 text-slate-950 font-extrabold outline-none placeholder:text-slate-400 shadow-inner"})]})]})]},K.id)),O.jsxs("button",{type:"button",onClick:ze,className:"w-full py-4 border-2 border-dashed border-slate-300 text-slate-700 rounded-2xl hover:bg-blue-50/50 hover:text-blue-700 hover:border-blue-450 transition-colors flex items-center justify-center text-sm font-extrabold mt-2 cursor-pointer shadow-sm active:scale-[0.995]",children:[O.jsx(uw,{size:16,className:"mr-1.5 stroke-[3]"})," 新增下一位學生"]})]}),O.jsxs("button",{type:"submit",className:"w-full mt-6 bg-blue-600 hover:school-gradient text-white font-black py-4 px-4 rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-250 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 text-center flex justify-center items-center cursor-pointer text-base",children:[O.jsx(Gh,{size:18,className:"mr-2"})," 送出登記"]})]})]}),O.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border-2 border-blue-100",children:[O.jsxs("h3",{className:"font-extrabold text-blue-900 mb-3 flex items-center text-base",children:[O.jsx(Qh,{size:18,className:"mr-2 text-blue-600 stroke-[2.5]"})," 愛校服務須知"]}),O.jsxs("ul",{className:"text-sm text-blue-900/90 font-bold space-y-2.5 list-none",children:[O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請著整齊校服或運動服進行服務，並請攜帶學生證。"]}),O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 請準時至指定地點集合，遲到將酌減服務時數。"]}),O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 完成服務後，請主動持「愛校服務單」請負責老師簽名。"]}),O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"text-blue-600 mr-2",children:"●"})," 若因故無法出席，請務必提前一天至學務處取消。"]})]})]})]}),t==="list"&&O.jsx("div",{className:"w-full animate-in fade-in duration-300",children:O.jsxs("div",{className:"bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8 min-h-[500px]",children:[O.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b-2 pb-5 gap-4 border-slate-200",children:[O.jsxs("h2",{className:"text-xl font-black text-slate-950 flex items-center shrink-0",children:[O.jsx(Kh,{size:22,className:"mr-2 text-green-700 stroke-[3]"}),"登記名單查詢"]}),O.jsxs("div",{className:"relative flex-grow max-w-sm w-full sm:mx-2",children:[O.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",children:O.jsx(jm,{size:16,className:"text-slate-500 stroke-[2.5]"})}),O.jsx("input",{type:"text",placeholder:"搜尋登記日期、學號、姓名或登記人...",value:o,onChange:K=>u(K.target.value),className:"w-full pl-10 pr-10 py-2 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none text-xs transition-shadow bg-slate-50 focus:bg-white text-slate-950 font-extrabold"}),o&&O.jsx("button",{onClick:()=>u(""),className:"absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-800 focus:outline-none",title:"清除搜尋",children:O.jsx(Bm,{size:16,className:"stroke-[2.5]"})})]}),S>1&&O.jsxs("div",{className:"flex items-center space-x-2 shrink-0 bg-slate-100 border-2 border-slate-300 p-1 rounded-xl shadow-inner",children:[O.jsx("button",{type:"button",onClick:()=>m(K=>Math.max(K-1,1)),disabled:h===1,className:"px-3 py-1.5 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-lg text-[10px] font-black text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all",children:"上一頁"}),O.jsxs("span",{className:"text-[11px] font-black text-slate-950 font-mono px-1",children:[h," / ",S]}),O.jsx("button",{type:"button",onClick:()=>m(K=>Math.min(K+1,S)),disabled:h===S,className:"px-3 py-1.5 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-lg text-[10px] font-black text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all",children:"下一頁"})]}),O.jsxs("span",{className:"text-xs font-black text-blue-900 bg-blue-100 border-2 border-blue-200 px-4 py-1.5 rounded-full shrink-0 shadow-sm",children:["共 ",V.length," 筆紀錄"]})]}),B.length===0?O.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[O.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:O.jsx(Kh,{size:48,className:"text-slate-400 stroke-[1.5]"})}),O.jsx("p",{className:"font-bold",children:"目前尚無登記紀錄，請前往登記作業！"})]}):V.length===0?O.jsxs("div",{className:"flex flex-col items-center justify-center h-72 text-slate-500 space-y-4",children:[O.jsx("div",{className:"p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm",children:O.jsx(jm,{size:48,className:"text-slate-400 stroke-[1.5]"})}),O.jsxs("p",{className:"font-bold",children:["找不到符合「",O.jsx("span",{className:"text-slate-950 font-black",children:o}),"」的紀錄"]}),O.jsx("button",{onClick:()=>u(""),className:"text-blue-600 hover:text-blue-800 text-sm font-extrabold cursor-pointer",children:"清除搜尋條件"})]}):O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"hidden md:block overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-sm",children:O.jsxs("table",{className:"w-full text-left border-collapse whitespace-nowrap",children:[O.jsx("thead",{children:O.jsxs("tr",{className:"bg-slate-100 text-slate-950 text-sm border-b-2 border-slate-200",children:[O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"登記日期"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"學號"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"姓名"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"違規事件 / 事由"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider text-center",children:"次數"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider",children:"登記人"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider text-center",children:"完成"}),O.jsx("th",{className:"py-4.5 px-6 font-black text-slate-950 tracking-wider text-right",children:"操作"})]})}),O.jsx("tbody",{className:"divide-y divide-slate-200 bg-white",children:ut.map(K=>O.jsxs("tr",{className:"hover:bg-blue-50/30 transition-colors group",children:[O.jsx("td",{className:"py-4 px-6 text-sm text-slate-950 font-black font-mono",children:K.date}),O.jsx("td",{className:"py-4 px-6 text-slate-950 font-black font-mono text-base",children:K.studentId}),O.jsx("td",{className:"py-4 px-6 text-slate-950 font-black text-base",children:K.name}),O.jsx("td",{className:"py-4 px-6 text-sm text-slate-950 font-extrabold max-w-xs truncate",title:K.violationReason,children:K.violationReason||"-"}),O.jsx("td",{className:"py-4 px-6 text-center",children:O.jsx("span",{className:"inline-flex items-center justify-center px-3.5 py-1 text-xs font-black leading-none text-red-950 bg-red-100 border-2 border-red-300 rounded-full font-mono shadow-sm",children:K.serviceCount})}),O.jsx("td",{className:"py-4 px-6 text-sm text-slate-950 font-black",children:K.registrar}),O.jsx("td",{className:"py-4 px-6 text-center",children:K.completed?O.jsx(Gh,{size:24,className:"text-emerald-600 fill-emerald-100 cursor-pointer hover:scale-110 active:scale-95 transition-all mx-auto stroke-[2.5]",onClick:()=>A(K),title:"已完成！點擊並驗證密碼來變更為未完成"}):O.jsx("div",{onClick:()=>A(K),className:"w-5 h-5 rounded-full border-2 border-slate-400 hover:border-emerald-600 hover:bg-emerald-50 cursor-pointer transition-all mx-auto flex items-center justify-center",title:"未完成。點擊並驗證密碼來標記為完成"})}),O.jsx("td",{className:"py-4 px-6 text-right",children:O.jsx("button",{onClick:()=>P(K.id),className:"text-slate-450 hover:text-red-500 p-2 rounded-xl hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer",title:"刪除紀錄",children:O.jsx(zm,{size:18,className:"stroke-[2.5]"})})})]},K.id))})]})}),O.jsx("div",{className:"block md:hidden space-y-4",children:ut.map(K=>O.jsxs("div",{className:"p-5 border border-slate-100 bg-slate-50/40 rounded-2xl flex flex-col gap-3 relative shadow-sm",children:[O.jsx("button",{onClick:()=>P(K.id),className:"absolute top-4 right-4 text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-lg transition-colors cursor-pointer",title:"刪除",children:O.jsx(zm,{size:18,className:"stroke-[2.5]"})}),O.jsxs("div",{className:"flex justify-between items-center",children:[O.jsx("span",{className:"text-xs text-slate-500 font-bold font-mono",children:K.date}),O.jsxs("div",{className:"flex items-center space-x-2",children:[O.jsx("button",{onClick:()=>A(K),className:`inline-flex items-center px-2.5 py-0.5 text-[10px] font-black rounded-full transition-all border ${K.completed?"bg-emerald-55 text-emerald-900 border-emerald-300":"bg-slate-100 text-slate-700 border-slate-350"}`,children:K.completed?"已完成":"未完成"}),O.jsxs("span",{className:"inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-bold text-red-800 bg-red-100 rounded-full font-mono",children:[K.serviceCount," 次"]})]})]}),O.jsxs("div",{className:"flex gap-2 items-baseline",children:[O.jsx("h4",{className:"text-base font-extrabold text-slate-950",children:K.name}),O.jsxs("span",{className:"text-xs text-slate-600 font-mono",children:["(",K.studentId,")"]})]}),O.jsxs("div",{className:"text-xs text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 font-extrabold",children:[O.jsx("strong",{className:"text-slate-500 block text-[9px] uppercase font-bold mb-0.5",children:"違規事由"}),K.violationReason||"-"]}),O.jsx("div",{className:"text-[10px] text-slate-500 font-semibold flex items-center justify-between",children:O.jsxs("span",{children:["登記人: ",K.registrar]})})]},K.id))})]})]})})]}),O.jsxs("footer",{className:"text-center text-sm text-slate-500 font-bold py-6 border-t border-slate-200/50",children:["© ",new Date().getFullYear()," 國立臺中第二高級中等學校學務處 生輔組"]})]})]})}J0.createRoot(document.getElementById("root")).render(O.jsx(St.StrictMode,{children:O.jsx(_k,{})}));
