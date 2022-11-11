(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var aT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function B0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),lT=Symbol.for("react.portal"),uT=Symbol.for("react.fragment"),cT=Symbol.for("react.strict_mode"),hT=Symbol.for("react.profiler"),dT=Symbol.for("react.provider"),fT=Symbol.for("react.context"),pT=Symbol.for("react.forward_ref"),mT=Symbol.for("react.suspense"),gT=Symbol.for("react.memo"),yT=Symbol.for("react.lazy"),cg=Symbol.iterator;function vT(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,q0={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||V0}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G0(){}G0.prototype=Ls.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=q0,this.updater=n||V0}var jf=zf.prototype=new G0;jf.constructor=zf;H0(jf,Ls.prototype);jf.isPureReactComponent=!0;var hg=Array.isArray,W0=Object.prototype.hasOwnProperty,Bf={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W0.call(e,r)&&!K0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:va,type:t,key:s,ref:o,props:i,_owner:Bf.current}}function wT(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function _T(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dg=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_T(""+t.key):e.toString(36)}function Tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case va:case lT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ih(o,0):r,hg(i)?(n="",t!=null&&(n=t.replace(dg,"$&/")+"/"),Tl(i,e,n,"",function(u){return u})):i!=null&&(Vf(i)&&(i=wT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ih(s,a);o+=Tl(s,e,n,l,i)}else if(l=vT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ih(s,a++),o+=Tl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],i=0;return Tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ST(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Cl={transition:null},ET={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Bf};ce.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=Ls;ce.Fragment=uT;ce.Profiler=hT;ce.PureComponent=zf;ce.StrictMode=cT;ce.Suspense=mT;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ET;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=H0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)W0.call(e,l)&&!K0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:va,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:fT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dT,_context:t},t.Consumer=t};ce.createElement=Q0;ce.createFactory=function(t){var e=Q0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:pT,render:t}};ce.isValidElement=Vf;ce.lazy=function(t){return{$$typeof:yT,_payload:{_status:-1,_result:t},_init:ST}};ce.memo=function(t,e){return{$$typeof:gT,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ce.useContext=function(t){return Mt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ce.useId=function(){return Mt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ce.useRef=function(t){return Mt.current.useRef(t)};ce.useState=function(t){return Mt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Mt.current.useTransition()};ce.version="18.1.0";(function(t){t.exports=ce})(A);const En=B0(A.exports);var rd={},Y0={exports:{}},nn={},X0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var J=F.length;F.push(Y);e:for(;0<J;){var Te=J-1>>>1,j=F[Te];if(0<i(j,Y))F[Te]=Y,F[J]=j,J=Te;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],J=F.pop();if(J!==Y){F[0]=J;e:for(var Te=0,j=F.length,V=j>>>1;Te<V;){var H=2*(Te+1)-1,Z=F[H],I=H+1,he=F[I];if(0>i(Z,J))I<j&&0>i(he,Z)?(F[Te]=he,F[I]=J,Te=I):(F[Te]=Z,F[H]=J,Te=H);else if(I<j&&0>i(he,J))F[Te]=he,F[I]=J,Te=I;else break e}}return Y}function i(F,Y){var J=F.sortIndex-Y.sortIndex;return J!==0?J:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,g=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=F)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function S(F){if(k=!1,_(F),!g)if(n(l)!==null)g=!0,zn(v);else{var Y=n(u);Y!==null&&xt(S,Y.startTime-F)}}function v(F,Y){g=!1,k&&(k=!1,y(b),b=-1),m=!0;var J=f;try{for(_(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||F&&!ne());){var Te=d.callback;if(typeof Te=="function"){d.callback=null,f=d.priorityLevel;var j=Te(d.expirationTime<=Y);Y=t.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&r(l),_(Y)}else r(l);d=n(l)}if(d!==null)var V=!0;else{var H=n(u);H!==null&&xt(S,H.startTime-Y),V=!1}return V}finally{d=null,f=J,m=!1}}var x=!1,w=null,b=-1,U=5,B=-1;function ne(){return!(t.unstable_now()-B<U)}function R(){if(w!==null){var F=t.unstable_now();B=F;var Y=!0;try{Y=w(!0,F)}finally{Y?$():(x=!1,w=null)}}else x=!1}var $;if(typeof p=="function")$=function(){p(R)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,O=D.port2;D.port1.onmessage=R,$=function(){O.postMessage(null)}}else $=function(){C(R,0)};function zn(F){w=F,x||(x=!0,$())}function xt(F,Y){b=C(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,zn(v))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var J=f;f=Y;try{return F()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=f;f=F;try{return Y()}finally{f=J}},t.unstable_scheduleCallback=function(F,Y,J){var Te=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Te+J:Te):J=Te,F){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=J+j,F={id:c++,callback:Y,priorityLevel:F,startTime:J,expirationTime:j,sortIndex:-1},J>Te?(F.sortIndex=J,e(u,F),n(l)===null&&F===n(u)&&(k?(y(b),b=-1):k=!0,xt(S,J-Te))):(F.sortIndex=j,e(l,F),g||m||(g=!0,zn(v))),F},t.unstable_shouldYield=ne,t.unstable_wrapCallback=function(F){var Y=f;return function(){var J=f;f=Y;try{return F.apply(this,arguments)}finally{f=J}}}})(J0);(function(t){t.exports=J0})(X0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0=A.exports,en=X0.exports;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e1=new Set,Fo={};function Pi(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Fo[t]=e,t=0;t<e.length;t++)e1.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=Object.prototype.hasOwnProperty,kT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},pg={};function TT(t){return id.call(pg,t)?!0:id.call(fg,t)?!1:kT.test(t)?pg[t]=!0:(fg[t]=!0,!1)}function CT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IT(t,e,n,r){if(e===null||typeof e>"u"||CT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hf,qf);mt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hf,qf);mt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hf,qf);mt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gf(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IT(e,n,i,r)&&(n=null),r||i===null?TT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=Z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),r1=Symbol.for("react.offscreen"),mg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,sh;function go(t){if(sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sh=e&&e[1]||""}return`
`+sh+t}var oh=!1;function ah(t,e){if(!t||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function xT(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=ah(t.type,!1),t;case 11:return t=ah(t.type.render,!1),t;case 1:return t=ah(t.type,!0),t;default:return""}}function ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Hi:return"Portal";case sd:return"Profiler";case Wf:return"StrictMode";case od:return"Suspense";case ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n1:return(t.displayName||"Context")+".Consumer";case t1:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:ld(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return ld(t(e))}catch{}}return null}function bT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(e);case 8:return e===Wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AT(t){var e=i1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=AT(t))}function s1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=i1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ud(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function gg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o1(t,e){e=e.checked,e!=null&&Gf(t,"checked",e,!1)}function cd(t,e){o1(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&hd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hd(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(yo(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function a1(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,u1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RT=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(t){RT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),To[e]=To[t]})});function c1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||To.hasOwnProperty(t)&&To[t]?(""+e).trim():e+"px"}function h1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=c1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $T=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(t,e){if(e){if($T[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,as=null,ls=null;function _g(t){if(t=Sa(t)){if(typeof yd!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Yu(e),yd(t.stateNode,t.type,e))}}function d1(t){as?ls?ls.push(t):ls=[t]:as=t}function f1(){if(as){var t=as,e=ls;if(ls=as=null,_g(t),e)for(t=0;t<e.length;t++)_g(e[t])}}function p1(t,e){return t(e)}function m1(){}var lh=!1;function g1(t,e,n){if(lh)return t(e,n);lh=!0;try{return p1(t,e,n)}finally{lh=!1,(as!==null||ls!==null)&&(m1(),f1())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var vd=!1;if(Zn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){vd=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{vd=!1}function PT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Co=!1,Ql=null,Yl=!1,wd=null,NT={onError:function(t){Co=!0,Ql=t}};function DT(t,e,n,r,i,s,o,a,l){Co=!1,Ql=null,PT.apply(NT,arguments)}function OT(t,e,n,r,i,s,o,a,l){if(DT.apply(this,arguments),Co){if(Co){var u=Ql;Co=!1,Ql=null}else throw Error(L(198));Yl||(Yl=!0,wd=u)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sg(t){if(Ni(t)!==t)throw Error(L(188))}function LT(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sg(i),t;if(s===r)return Sg(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function v1(t){return t=LT(t),t!==null?w1(t):null}function w1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w1(t);if(e!==null)return e;t=t.sibling}return null}var _1=en.unstable_scheduleCallback,Eg=en.unstable_cancelCallback,MT=en.unstable_shouldYield,UT=en.unstable_requestPaint,He=en.unstable_now,FT=en.unstable_getCurrentPriorityLevel,Xf=en.unstable_ImmediatePriority,S1=en.unstable_UserBlockingPriority,Xl=en.unstable_NormalPriority,zT=en.unstable_LowPriority,E1=en.unstable_IdlePriority,Gu=null,Nn=null;function jT(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:HT,BT=Math.log,VT=Math.LN2;function HT(t){return t>>>=0,t===0?32:31-(BT(t)/VT|0)|0}var Za=64,el=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vo(a):(s&=o,s!==0&&(r=vo(s)))}else o=n&~i,o!==0?r=vo(o):s!==0&&(r=vo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function qT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_n(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=qT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k1(){var t=Za;return Za<<=1,(Za&4194240)===0&&(Za=64),t}function uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function WT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function T1(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var C1,Zf,I1,x1,b1,Sd=!1,tl=[],Tr=null,Cr=null,Ir=null,Bo=new Map,Vo=new Map,pr=[],KT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QT(t,e,n,r,i){switch(e){case"focusin":return Tr=io(Tr,t,e,n,r,i),!0;case"dragenter":return Cr=io(Cr,t,e,n,r,i),!0;case"mouseover":return Ir=io(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,io(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,io(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function A1(t){var e=ti(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=y1(n),e!==null){t.blockedOn=e,b1(t.priority,function(){I1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gd=r,n.target.dispatchEvent(r),gd=null}else return e=Sa(n),e!==null&&Zf(e),t.blockedOn=n,!1;e.shift()}return!0}function Tg(t,e,n){Il(t)&&n.delete(e)}function YT(){Sd=!1,Tr!==null&&Il(Tr)&&(Tr=null),Cr!==null&&Il(Cr)&&(Cr=null),Ir!==null&&Il(Ir)&&(Ir=null),Bo.forEach(Tg),Vo.forEach(Tg)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,Sd||(Sd=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,YT)))}function Ho(t){function e(i){return so(i,t)}if(0<tl.length){so(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&so(Tr,t),Cr!==null&&so(Cr,t),Ir!==null&&so(Ir,t),Bo.forEach(e),Vo.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)A1(n),n.blockedOn===null&&pr.shift()}var us=sr.ReactCurrentBatchConfig,Zl=!0;function XT(t,e,n,r){var i=Se,s=us.transition;us.transition=null;try{Se=1,ep(t,e,n,r)}finally{Se=i,us.transition=s}}function JT(t,e,n,r){var i=Se,s=us.transition;us.transition=null;try{Se=4,ep(t,e,n,r)}finally{Se=i,us.transition=s}}function ep(t,e,n,r){if(Zl){var i=Ed(t,e,n,r);if(i===null)wh(t,e,r,eu,n),kg(t,r);else if(QT(i,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<KT.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&C1(s),s=Ed(t,e,n,r),s===null&&wh(t,e,r,eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wh(t,e,r,null,n)}}var eu=null;function Ed(t,e,n,r){if(eu=null,t=Yf(r),t=ti(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function R1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case Xf:return 1;case S1:return 4;case Xl:case zT:return 16;case E1:return 536870912;default:return 16}default:return 16}}var Er=null,tp=null,xl=null;function $1(){if(xl)return xl;var t,e=tp,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xl=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Cg(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:Cg,this.isPropagationStopped=Cg,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},np=rn(Ms),_a=Le({},Ms,{view:0,detail:0}),ZT=rn(_a),ch,hh,oo,Wu=Le({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(ch=t.screenX-oo.screenX,hh=t.screenY-oo.screenY):hh=ch=0,oo=t),ch)},movementY:function(t){return"movementY"in t?t.movementY:hh}}),Ig=rn(Wu),eC=Le({},Wu,{dataTransfer:0}),tC=rn(eC),nC=Le({},_a,{relatedTarget:0}),dh=rn(nC),rC=Le({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),iC=rn(rC),sC=Le({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oC=rn(sC),aC=Le({},Ms,{data:0}),xg=rn(aC),lC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cC[t])?!!e[t]:!1}function rp(){return hC}var dC=Le({},_a,{key:function(t){if(t.key){var e=lC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fC=rn(dC),pC=Le({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=rn(pC),mC=Le({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),gC=rn(mC),yC=Le({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),vC=rn(yC),wC=Le({},Wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_C=rn(wC),SC=[9,13,27,32],ip=Zn&&"CompositionEvent"in window,Io=null;Zn&&"documentMode"in document&&(Io=document.documentMode);var EC=Zn&&"TextEvent"in window&&!Io,P1=Zn&&(!ip||Io&&8<Io&&11>=Io),Ag=String.fromCharCode(32),Rg=!1;function N1(t,e){switch(t){case"keyup":return SC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function kC(t,e){switch(t){case"compositionend":return D1(e);case"keypress":return e.which!==32?null:(Rg=!0,Ag);case"textInput":return t=e.data,t===Ag&&Rg?null:t;default:return null}}function TC(t,e){if(Gi)return t==="compositionend"||!ip&&N1(t,e)?(t=$1(),xl=tp=Er=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P1&&e.locale!=="ko"?null:e.data;default:return null}}var CC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CC[t.type]:e==="textarea"}function O1(t,e,n,r){d1(r),e=tu(e,"onChange"),0<e.length&&(n=new np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,qo=null;function IC(t){G1(t,0)}function Ku(t){var e=Qi(t);if(s1(e))return t}function xC(t,e){if(t==="change")return e}var L1=!1;if(Zn){var fh;if(Zn){var ph="oninput"in document;if(!ph){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),ph=typeof Pg.oninput=="function"}fh=ph}else fh=!1;L1=fh&&(!document.documentMode||9<document.documentMode)}function Ng(){xo&&(xo.detachEvent("onpropertychange",M1),qo=xo=null)}function M1(t){if(t.propertyName==="value"&&Ku(qo)){var e=[];O1(e,qo,t,Yf(t)),g1(IC,e)}}function bC(t,e,n){t==="focusin"?(Ng(),xo=e,qo=n,xo.attachEvent("onpropertychange",M1)):t==="focusout"&&Ng()}function AC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(qo)}function RC(t,e){if(t==="click")return Ku(e)}function $C(t,e){if(t==="input"||t==="change")return Ku(e)}function PC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:PC;function Go(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!id.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function Dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Og(t,e){var n=Dg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dg(n)}}function U1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F1(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NC(t){var e=F1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U1(n.ownerDocument.documentElement,n)){if(r!==null&&sp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Og(n,s);var o=Og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DC=Zn&&"documentMode"in document&&11>=document.documentMode,Wi=null,kd=null,bo=null,Td=!1;function Lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||Wi==null||Wi!==Kl(r)||(r=Wi,"selectionStart"in r&&sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Go(bo,r)||(bo=r,r=tu(kd,"onSelect"),0<r.length&&(e=new np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ki={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},mh={},z1={};Zn&&(z1=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function Qu(t){if(mh[t])return mh[t];if(!Ki[t])return t;var e=Ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z1)return mh[t]=e[n];return t}var j1=Qu("animationend"),B1=Qu("animationiteration"),V1=Qu("animationstart"),H1=Qu("transitionend"),q1=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){q1.set(t,e),Pi(e,[t])}for(var gh=0;gh<Mg.length;gh++){var yh=Mg[gh],OC=yh.toLowerCase(),LC=yh[0].toUpperCase()+yh.slice(1);qr(OC,"on"+LC)}qr(j1,"onAnimationEnd");qr(B1,"onAnimationIteration");qr(V1,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(H1,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MC=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Ug(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OT(r,e,void 0,t),t.currentTarget=null}function G1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ug(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ug(i,a,u),s=l}}}if(Yl)throw t=wd,Yl=!1,wd=null,t}function xe(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var r=t+"__bubble";n.has(r)||(W1(e,t,2,!1),n.add(r))}function vh(t,e,n){var r=0;e&&(r|=4),W1(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[il]){t[il]=!0,e1.forEach(function(n){n!=="selectionchange"&&(MC.has(n)||vh(n,!1,t),vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,vh("selectionchange",!1,e))}}function W1(t,e,n,r){switch(R1(e)){case 1:var i=XT;break;case 4:i=JT;break;default:i=ep}n=i.bind(null,e,n,t),i=void 0,!vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function wh(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ti(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}g1(function(){var u=s,c=Yf(n),d=[];e:{var f=q1.get(t);if(f!==void 0){var m=np,g=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":m=fC;break;case"focusin":g="focus",m=dh;break;case"focusout":g="blur",m=dh;break;case"beforeblur":case"afterblur":m=dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=tC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gC;break;case j1:case B1:case V1:m=iC;break;case H1:m=vC;break;case"scroll":m=ZT;break;case"wheel":m=_C;break;case"copy":case"cut":case"paste":m=oC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=bg}var k=(e&4)!==0,C=!k&&t==="scroll",y=k?f!==null?f+"Capture":null:f;k=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,y!==null&&(S=jo(p,y),S!=null&&k.push(Ko(p,S,_)))),C)break;p=p.return}0<k.length&&(f=new m(f,g,null,n,c),d.push({event:f,listeners:k}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==gd&&(g=n.relatedTarget||n.fromElement)&&(ti(g)||g[er]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?ti(g):null,g!==null&&(C=Ni(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(k=Ig,S="onMouseLeave",y="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(k=bg,S="onPointerLeave",y="onPointerEnter",p="pointer"),C=m==null?f:Qi(m),_=g==null?f:Qi(g),f=new k(S,p+"leave",m,n,c),f.target=C,f.relatedTarget=_,S=null,ti(c)===u&&(k=new k(y,p+"enter",g,n,c),k.target=_,k.relatedTarget=C,S=k),C=S,m&&g)t:{for(k=m,y=g,p=0,_=k;_;_=zi(_))p++;for(_=0,S=y;S;S=zi(S))_++;for(;0<p-_;)k=zi(k),p--;for(;0<_-p;)y=zi(y),_--;for(;p--;){if(k===y||y!==null&&k===y.alternate)break t;k=zi(k),y=zi(y)}k=null}else k=null;m!==null&&Fg(d,f,m,k,!1),g!==null&&C!==null&&Fg(d,C,g,k,!0)}}e:{if(f=u?Qi(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var v=xC;else if($g(f))if(L1)v=$C;else{v=AC;var x=bC}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(v=RC);if(v&&(v=v(t,u))){O1(d,v,n,c);break e}x&&x(t,f,u),t==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&hd(f,"number",f.value)}switch(x=u?Qi(u):window,t){case"focusin":($g(x)||x.contentEditable==="true")&&(Wi=x,kd=u,bo=null);break;case"focusout":bo=kd=Wi=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,Lg(d,n,c);break;case"selectionchange":if(DC)break;case"keydown":case"keyup":Lg(d,n,c)}var w;if(ip)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Gi?N1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(P1&&n.locale!=="ko"&&(Gi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Gi&&(w=$1()):(Er=c,tp="value"in Er?Er.value:Er.textContent,Gi=!0)),x=tu(u,b),0<x.length&&(b=new xg(b,t,null,n,c),d.push({event:b,listeners:x}),w?b.data=w:(w=D1(n),w!==null&&(b.data=w)))),(w=EC?kC(t,n):TC(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(c=new xg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}G1(d,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jo(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=jo(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=jo(n,s),l!=null&&o.unshift(Ko(n,l,a))):i||(l=jo(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UC=/\r\n?/g,FC=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(UC,`
`).replace(FC,"")}function sl(t,e,n){if(e=zg(e),zg(t)!==e&&n)throw Error(L(425))}function nu(){}var Cd=null,Id=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,zC=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,jC=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(t){return jg.resolve(null).then(t).catch(BC)}:bd;function BC(t){setTimeout(function(){throw t})}function _h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function Vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Rn="__reactFiber$"+Us,Qo="__reactProps$"+Us,er="__reactContainer$"+Us,Ad="__reactEvents$"+Us,VC="__reactListeners$"+Us,HC="__reactHandles$"+Us;function ti(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bg(t);t!==null;){if(n=t[Rn])return n;t=Bg(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[Rn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Yu(t){return t[Qo]||null}var Rd=[],Yi=-1;function Gr(t){return{current:t}}function Ae(t){0>Yi||(t.current=Rd[Yi],Rd[Yi]=null,Yi--)}function Ce(t,e){Yi++,Rd[Yi]=t.current,t.current=e}var Ur={},Ct=Gr(Ur),Wt=Gr(!1),fi=Ur;function vs(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function ru(){Ae(Wt),Ae(Ct)}function Vg(t,e,n){if(Ct.current!==Ur)throw Error(L(168));Ce(Ct,e),Ce(Wt,n)}function K1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,bT(t)||"Unknown",i));return Le({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,fi=Ct.current,Ce(Ct,t),Ce(Wt,Wt.current),!0}function Hg(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=K1(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,Ae(Wt),Ae(Ct),Ce(Ct,t)):Ae(Wt),Ce(Wt,n)}var Bn=null,Xu=!1,Sh=!1;function Q1(t){Bn===null?Bn=[t]:Bn.push(t)}function qC(t){Xu=!0,Q1(t)}function Wr(){if(!Sh&&Bn!==null){Sh=!0;var t=0,e=Se;try{var n=Bn;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,Xu=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),_1(Xf,Wr),i}finally{Se=e,Sh=!1}}return null}var GC=sr.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var su=Gr(null),ou=null,Xi=null,op=null;function ap(){op=Xi=ou=null}function lp(t){var e=su.current;Ae(su),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){ou=t,op=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Gt=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(ou===null)throw Error(L(308));Xi=t,ou.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var vn=null,dr=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,Fw(t)?(t=n.interleaved,t===null?(e.next=e,vn===null?vn=[n]:vn.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jf(t,n)}}function qg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function au(t,e,n,r){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,k=a;switch(f=e,m=n,k.tag){case 1:if(g=k.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=k.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=Le({},d,f);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=d}}function Gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var X1=new Z0.Component().refs;function Pd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Ar(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),xr(t,s),e=cn(t,i,r),e!==null&&Al(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Ar(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),xr(t,s),e=cn(t,i,r),e!==null&&Al(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Ar(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),xr(t,i),e=cn(t,r,n),e!==null&&Al(e,t,r)}};function Wg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function J1(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=Kt(e)?fi:Ct.current,r=e.contextTypes,s=(r=r!=null)?vs(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=X1,up(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=Kt(e)?fi:Ct.current,i.context=vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var Ji=[],Zi=0,lu=null,uu=0,on=[],an=0,pi=null,Hn=1,qn="";function Jr(t,e){Ji[Zi++]=uu,Ji[Zi++]=lu,lu=t,uu=e}function Z1(t,e,n){on[an++]=Hn,on[an++]=qn,on[an++]=pi,pi=t;var r=Hn;t=qn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-_n(e)+i|n<<i|r,qn=s+t}else Hn=1<<s|n<<i|r,qn=t}function cp(t){t.return!==null&&(Jr(t,1),Z1(t,1,0))}function hp(t){for(;t===lu;)lu=Ji[--Zi],Ji[Zi]=null,uu=Ji[--Zi],Ji[Zi]=null;for(;t===pi;)pi=on[--an],on[an]=null,qn=on[--an],on[an]=null,Hn=on[--an],on[an]=null}var Zt=null,Ht=null,Pe=!1,yn=null;function ew(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Ht=Vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:Hn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Ht=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(Pe){var e=Ht;if(e){var n=e;if(!Qg(t,e)){if(Dd(t))throw Error(L(418));e=Vn(n.nextSibling);var r=Zt;e&&Qg(t,e)?ew(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Zt=t)}}else{if(Dd(t))throw Error(L(418));t.flags=t.flags&-4097|2,Pe=!1,Zt=t}}}function Yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function ao(t){if(t!==Zt)return!1;if(!Pe)return Yg(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=Ht)){if(Dd(t)){for(t=Ht;t;)t=Vn(t.nextSibling);throw Error(L(418))}for(;e;)ew(t,e),e=Vn(e.nextSibling)}if(Yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Zt?Vn(t.stateNode.nextSibling):null;return!0}function ws(){Ht=Zt=null,Pe=!1}function dp(t){yn===null?yn=[t]:yn.push(t)}function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===X1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xg(t){var e=t._init;return e(t._payload)}function tw(t){function e(y,p){if(t){var _=y.deletions;_===null?(y.deletions=[p],y.flags|=16):_.push(p)}}function n(y,p){if(!t)return null;for(;p!==null;)e(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(y,p){return y=Fr(y,p),y.index=0,y.sibling=null,y}function s(y,p,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<p?(y.flags|=2,p):_):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,p,_,S){return p===null||p.tag!==6?(p=xh(_,y.mode,S),p.return=y,p):(p=i(p,_),p.return=y,p)}function l(y,p,_,S){var v=_.type;return v===qi?c(y,p,_.props.children,S,_.key):p!==null&&(p.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===hr&&Xg(v)===p.type)?(S=i(p,_.props),S.ref=lo(y,p,_),S.return=y,S):(S=Dl(_.type,_.key,_.props,null,y.mode,S),S.ref=lo(y,p,_),S.return=y,S)}function u(y,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=bh(_,y.mode,S),p.return=y,p):(p=i(p,_.children||[]),p.return=y,p)}function c(y,p,_,S,v){return p===null||p.tag!==7?(p=ai(_,y.mode,S,v),p.return=y,p):(p=i(p,_),p.return=y,p)}function d(y,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xh(""+p,y.mode,_),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ya:return _=Dl(p.type,p.key,p.props,null,y.mode,_),_.ref=lo(y,null,p),_.return=y,_;case Hi:return p=bh(p,y.mode,_),p.return=y,p;case hr:var S=p._init;return d(y,S(p._payload),_)}if(yo(p)||no(p))return p=ai(p,y.mode,_,null),p.return=y,p;ol(y,p)}return null}function f(y,p,_,S){var v=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return v!==null?null:a(y,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return _.key===v?l(y,p,_,S):null;case Hi:return _.key===v?u(y,p,_,S):null;case hr:return v=_._init,f(y,p,v(_._payload),S)}if(yo(_)||no(_))return v!==null?null:c(y,p,_,S,null);ol(y,_)}return null}function m(y,p,_,S,v){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(_)||null,a(p,y,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return y=y.get(S.key===null?_:S.key)||null,l(p,y,S,v);case Hi:return y=y.get(S.key===null?_:S.key)||null,u(p,y,S,v);case hr:var x=S._init;return m(y,p,_,x(S._payload),v)}if(yo(S)||no(S))return y=y.get(_)||null,c(p,y,S,v,null);ol(p,S)}return null}function g(y,p,_,S){for(var v=null,x=null,w=p,b=p=0,U=null;w!==null&&b<_.length;b++){w.index>b?(U=w,w=null):U=w.sibling;var B=f(y,w,_[b],S);if(B===null){w===null&&(w=U);break}t&&w&&B.alternate===null&&e(y,w),p=s(B,p,b),x===null?v=B:x.sibling=B,x=B,w=U}if(b===_.length)return n(y,w),Pe&&Jr(y,b),v;if(w===null){for(;b<_.length;b++)w=d(y,_[b],S),w!==null&&(p=s(w,p,b),x===null?v=w:x.sibling=w,x=w);return Pe&&Jr(y,b),v}for(w=r(y,w);b<_.length;b++)U=m(w,y,b,_[b],S),U!==null&&(t&&U.alternate!==null&&w.delete(U.key===null?b:U.key),p=s(U,p,b),x===null?v=U:x.sibling=U,x=U);return t&&w.forEach(function(ne){return e(y,ne)}),Pe&&Jr(y,b),v}function k(y,p,_,S){var v=no(_);if(typeof v!="function")throw Error(L(150));if(_=v.call(_),_==null)throw Error(L(151));for(var x=v=null,w=p,b=p=0,U=null,B=_.next();w!==null&&!B.done;b++,B=_.next()){w.index>b?(U=w,w=null):U=w.sibling;var ne=f(y,w,B.value,S);if(ne===null){w===null&&(w=U);break}t&&w&&ne.alternate===null&&e(y,w),p=s(ne,p,b),x===null?v=ne:x.sibling=ne,x=ne,w=U}if(B.done)return n(y,w),Pe&&Jr(y,b),v;if(w===null){for(;!B.done;b++,B=_.next())B=d(y,B.value,S),B!==null&&(p=s(B,p,b),x===null?v=B:x.sibling=B,x=B);return Pe&&Jr(y,b),v}for(w=r(y,w);!B.done;b++,B=_.next())B=m(w,y,b,B.value,S),B!==null&&(t&&B.alternate!==null&&w.delete(B.key===null?b:B.key),p=s(B,p,b),x===null?v=B:x.sibling=B,x=B);return t&&w.forEach(function(R){return e(y,R)}),Pe&&Jr(y,b),v}function C(y,p,_,S){if(typeof _=="object"&&_!==null&&_.type===qi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:e:{for(var v=_.key,x=p;x!==null;){if(x.key===v){if(v=_.type,v===qi){if(x.tag===7){n(y,x.sibling),p=i(x,_.props.children),p.return=y,y=p;break e}}else if(x.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===hr&&Xg(v)===x.type){n(y,x.sibling),p=i(x,_.props),p.ref=lo(y,x,_),p.return=y,y=p;break e}n(y,x);break}else e(y,x);x=x.sibling}_.type===qi?(p=ai(_.props.children,y.mode,S,_.key),p.return=y,y=p):(S=Dl(_.type,_.key,_.props,null,y.mode,S),S.ref=lo(y,p,_),S.return=y,y=S)}return o(y);case Hi:e:{for(x=_.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(y,p.sibling),p=i(p,_.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else e(y,p);p=p.sibling}p=bh(_,y.mode,S),p.return=y,y=p}return o(y);case hr:return x=_._init,C(y,p,x(_._payload),S)}if(yo(_))return g(y,p,_,S);if(no(_))return k(y,p,_,S);ol(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(y,p.sibling),p=i(p,_),p.return=y,y=p):(n(y,p),p=xh(_,y.mode,S),p.return=y,y=p),o(y)):n(y,p)}return C}var _s=tw(!0),nw=tw(!1),Ea={},Dn=Gr(Ea),Yo=Gr(Ea),Xo=Gr(Ea);function ni(t){if(t===Ea)throw Error(L(174));return t}function fp(t,e){switch(Ce(Xo,e),Ce(Yo,t),Ce(Dn,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fd(e,t)}Ae(Dn),Ce(Dn,e)}function Ss(){Ae(Dn),Ae(Yo),Ae(Xo)}function rw(t){ni(Xo.current);var e=ni(Dn.current),n=fd(e,t.type);e!==n&&(Ce(Yo,t),Ce(Dn,n))}function pp(t){Yo.current===t&&(Ae(Dn),Ae(Yo))}var De=Gr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eh=[];function mp(){for(var t=0;t<Eh.length;t++)Eh[t]._workInProgressVersionPrimary=null;Eh.length=0}var Rl=sr.ReactCurrentDispatcher,kh=sr.ReactCurrentBatchConfig,mi=0,Oe=null,Ye=null,tt=null,hu=!1,Ao=!1,Jo=0,WC=0;function wt(){throw Error(L(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function yp(t,e,n,r,i,s){if(mi=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?XC:JC,t=n(r,i),Ao){s=0;do{if(Ao=!1,Jo=0,25<=s)throw Error(L(301));s+=1,tt=Ye=null,e.updateQueue=null,Rl.current=ZC,t=n(r,i)}while(Ao)}if(Rl.current=du,e=Ye!==null&&Ye.next!==null,mi=0,tt=Ye=Oe=null,hu=!1,e)throw Error(L(300));return t}function vp(){var t=Jo!==0;return Jo=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Oe.memoizedState=tt=t:tt=tt.next=t,tt}function dn(){if(Ye===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=tt===null?Oe.memoizedState:tt.next;if(e!==null)tt=e,Ye=t;else{if(t===null)throw Error(L(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?Oe.memoizedState=tt=t:tt=tt.next=t}return tt}function Zo(t,e){return typeof e=="function"?e(t):e}function Th(t){var e=dn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Oe.lanes|=c,gi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ch(t){var e=dn(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(Gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iw(){}function sw(t,e){var n=Oe,r=dn(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Gt=!0),r=r.queue,wp(lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,ea(9,aw.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(L(349));(mi&30)!==0||ow(n,e,i)}return i}function ow(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aw(t,e,n,r){e.value=n,e.getSnapshot=r,uw(e)&&cn(t,1,-1)}function lw(t,e,n){return n(function(){uw(e)&&cn(t,1,-1)})}function uw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Jg(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=YC.bind(null,Oe,t),[e.memoizedState,t]}function ea(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cw(){return dn().memoizedState}function $l(t,e,n,r){var i=An();Oe.flags|=t,i.memoizedState=ea(1|e,n,void 0,r===void 0?null:r)}function Zu(t,e,n,r){var i=dn();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&gp(r,o.deps)){i.memoizedState=ea(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=ea(1|e,n,s,r)}function Zg(t,e){return $l(8390656,8,t,e)}function wp(t,e){return Zu(2048,8,t,e)}function hw(t,e){return Zu(4,2,t,e)}function dw(t,e){return Zu(4,4,t,e)}function fw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pw(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,fw.bind(null,e,t),n)}function _p(){}function mw(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gw(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yw(t,e,n){return(mi&21)===0?(t.baseState&&(t.baseState=!1,Gt=!0),t.memoizedState=n):(kn(n,e)||(n=k1(),Oe.lanes|=n,gi|=n,t.baseState=!0),e)}function KC(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=kh.transition;kh.transition={};try{t(!1),e()}finally{Se=n,kh.transition=r}}function vw(){return dn().memoizedState}function QC(t,e,n){var r=Ar(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ww(t)?_w(e,n):(Sw(t,e,n),n=Dt(),t=cn(t,r,n),t!==null&&Ew(t,e,r))}function YC(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ww(t))_w(e,i);else{Sw(t,e,i);var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,o))return}catch{}finally{}n=Dt(),t=cn(t,r,n),t!==null&&Ew(t,e,r)}}function ww(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function _w(t,e){Ao=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sw(t,e,n){Fw(t)?(t=e.interleaved,t===null?(n.next=n,vn===null?vn=[e]:vn.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function Ew(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jf(t,n)}}var du={readContext:hn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},XC={readContext:hn,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:Zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,fw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=An();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=An();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QC.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:_p,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=KC.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=An();if(Pe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Je===null)throw Error(L(349));(mi&30)!==0||ow(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zg(lw.bind(null,r,s,t),[t]),r.flags|=2048,ea(9,aw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=An(),e=Je.identifierPrefix;if(Pe){var n=qn,r=Hn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JC={readContext:hn,useCallback:mw,useContext:hn,useEffect:wp,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:Th,useRef:cw,useState:function(){return Th(Zo)},useDebugValue:_p,useDeferredValue:function(t){var e=dn();return yw(e,Ye.memoizedState,t)},useTransition:function(){var t=Th(Zo)[0],e=dn().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:sw,useId:vw,unstable_isNewReconciler:!1},ZC={readContext:hn,useCallback:mw,useContext:hn,useEffect:wp,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:Ch,useRef:cw,useState:function(){return Ch(Zo)},useDebugValue:_p,useDeferredValue:function(t){var e=dn();return Ye===null?e.memoizedState=t:yw(e,Ye.memoizedState,t)},useTransition:function(){var t=Ch(Zo)[0],e=dn().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:sw,useId:vw,unstable_isNewReconciler:!1};function Sp(t,e){try{var n="",r=e;do n+=xT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var e2=typeof WeakMap=="function"?WeakMap:Map;function kw(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,qd=r),Ld(t,e)},n}function Tw(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ey(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new e2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=f2.bind(null,t,e,n),e.then(t,t))}function ty(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ny(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,xr(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Cw,Md,Iw,xw;Cw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};Iw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(Dn.current);var s=null;switch(n){case"input":i=ud(t,i),r=ud(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=dd(t,i),r=dd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}pd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function t2(t,e,n){var r=e.pendingProps;switch(hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Kt(e.type)&&ru(),_t(e),null;case 3:return r=e.stateNode,Ss(),Ae(Wt),Ae(Ct),mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yn!==null&&(Kd(yn),yn=null))),Md(t,e),_t(e),null;case 5:pp(e);var i=ni(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)Iw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return _t(e),null}if(t=ni(Dn.current),ao(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)xe(wo[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":gg(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":vg(r,s),xe("invalid",r)}pd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,a,t),i=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Xa(r),yg(r,s,!0);break;case"textarea":Xa(r),wg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[Qo]=r,Cw(t,e,!1,!1),e.stateNode=t;e:{switch(o=md(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)xe(wo[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":gg(t,r),i=ud(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),xe("invalid",t);break;case"textarea":vg(t,r),i=dd(t,r),xe("invalid",t);break;default:i=r}pd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?h1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zo(t,l):typeof l=="number"&&zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xe("scroll",t):l!=null&&Gf(t,s,l,o))}switch(n){case"input":Xa(t),yg(t,r,!1);break;case"textarea":Xa(t),wg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?os(t,!!r.multiple,s,!1):r.defaultValue!=null&&os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=ni(Xo.current),ni(Dn.current),ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return _t(e),null;case 13:if(Ae(De),r=e.memoizedState,Pe&&Ht!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=Ht;r;)r=Vn(r.nextSibling);return ws(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=ao(e),t===null){if(!r)throw Error(L(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(L(317));r[Rn]=e}else ws(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return _t(e),null}return yn!==null&&(Kd(yn),yn=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?ao(e):n=t.memoizedState!==null,r!==n&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(De.current&1)!==0?Xe===0&&(Xe=3):xp())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ss(),Md(t,e),t===null&&Wo(e.stateNode.containerInfo),_t(e),null;case 10:return lp(e.type._context),_t(e),null;case 17:return Kt(e.type)&&ru(),_t(e),null;case 19:if(Ae(De),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>Es&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return _t(e),null}else 2*He()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=De.current,Ce(De,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Ip(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Yt&1073741824)!==0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}var n2=sr.ReactCurrentOwner,Gt=!1;function At(t,e,n,r){e.child=t===null?nw(e,null,n,r):_s(e,t.child,n,r)}function ry(t,e,n,r,i){n=n.render;var s=e.ref;return cs(e,i),r=yp(t,e,n,r,s,i),n=vp(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Pe&&n&&cp(e),e.flags|=1,At(t,e,r,i),e.child)}function iy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bw(t,e,s,r,i)):(t=Dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function bw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Go(s,r)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Gt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Ud(t,e,n,r,i)}function Aw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ts,Yt),Yt|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(ts,Yt),Yt|=r;else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(ts,Yt),Yt|=t,null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ce(ts,Yt),Yt|=r;return At(t,e,i,n),e.child}function Rw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ud(t,e,n,r,i){var s=Kt(n)?fi:Ct.current;return s=vs(e,s),cs(e,i),n=yp(t,e,n,r,s,i),r=vp(),t!==null&&!Gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Pe&&r&&cp(e),e.flags|=1,At(t,e,n,i),e.child)}function sy(t,e,n,r,i){if(Kt(n)){var s=!0;iu(e)}else s=!1;if(cs(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),J1(e,n,r),Nd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Kt(n)?fi:Ct.current,u=vs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kg(e,o,r,u),dr=!1;var f=e.memoizedState;o.state=f,au(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Wt.current||dr?(typeof c=="function"&&(Pd(e,n,c,r),l=e.memoizedState),(a=dr||Wg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Y1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=Kt(n)?fi:Ct.current,l=vs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Kg(e,o,r,l),dr=!1,f=e.memoizedState,o.state=f,au(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||Wt.current||dr?(typeof m=="function"&&(Pd(e,n,m,r),g=e.memoizedState),(u=dr||Wg(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Fd(t,e,n,r,s,i)}function Fd(t,e,n,r,i,s){Rw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hg(e,n,!1),tr(t,e,s);r=e.stateNode,n2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&Hg(e,n,!0),e.child}function $w(t){var e=t.stateNode;e.pendingContext?Vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vg(t,e.context,!1),fp(t,e.containerInfo)}function oy(t,e,n,r,i){return ws(),dp(i),e.flags|=256,At(t,e,n,r),e.child}var al={dehydrated:null,treeContext:null,retryLane:0};function ll(t){return{baseLanes:t,cachePool:null,transitions:null}}function ay(t,e){return{baseLanes:t.baseLanes|e,cachePool:null,transitions:t.transitions}}function Pw(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(De,i&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,s?(r=e.mode,s=e.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=yu(i,r,0,null),t=ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ll(n),e.memoizedState=al,t):zd(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(o)return e.flags&256?(e.flags&=-257,ul(t,e,n,Error(L(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yu({mode:"visible",children:r.children},i,0,null),s=ai(s,i,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&_s(e,t.child,null,n),e.child.memoizedState=ll(n),e.memoizedState=al,s);if((e.mode&1)===0)e=ul(t,e,n,null);else if(a.data==="$!")e=ul(t,e,n,Error(L(419)));else if(r=(n&t.childLanes)!==0,Gt||r){if(r=Je,r!==null){switch(n&-n){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}r=(s&(r.suspendedLanes|n))!==0?0:s,r!==0&&r!==i.retryLane&&(i.retryLane=r,cn(t,r,-1))}xp(),e=ul(t,e,n,Error(L(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=p2.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,Ht=Vn(a.nextSibling),Zt=e,Pe=!0,yn=null,n!==null&&(on[an++]=Hn,on[an++]=qn,on[an++]=pi,Hn=n.id,qn=n.overflow,pi=e),e=zd(e,e.pendingProps.children),e.flags|=4096);return e}return s?(r=uy(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?ll(n):ay(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=al,r):(n=ly(t,e,r.children,n),e.memoizedState=null,n)}return s?(r=uy(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?ll(n):ay(i,n),s.childLanes=t.childLanes&~n,e.memoizedState=al,r):(n=ly(t,e,r.children,n),e.memoizedState=null,n)}function zd(t,e){return e=yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ly(t,e,n,r){var i=t.child;return t=i.sibling,n=Fr(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function uy(t,e,n,r,i){var s=e.mode;t=t.child;var o=t.sibling,a={mode:"hidden",children:n};return(s&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=Fr(t,a),n.subtreeFlags=t.subtreeFlags&14680064),o!==null?r=Fr(o,r):(r=ai(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function ul(t,e,n,r){return r!==null&&dp(r),_s(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$d(t.return,e,n)}function Ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=De.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cy(t,n,e);else if(t.tag===19)cy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(De,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ih(e,!0,n,null,s);break;case"together":Ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function r2(t,e,n){switch(e.tag){case 3:$w(e),ws();break;case 5:rw(e);break;case 1:Kt(e.type)&&iu(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(su,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(De,De.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Pw(t,e,n):(Ce(De,De.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Ce(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,Aw(t,e,n)}return tr(t,e,n)}function i2(t,e){switch(hp(e),e.tag){case 1:return Kt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),Ae(Wt),Ae(Ct),mp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(Ae(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(De),null;case 4:return Ss(),null;case 10:return lp(e.type._context),null;case 22:case 23:return Ip(),null;case 24:return null;default:return null}}var cl=!1,St=!1,s2=typeof WeakSet=="function"?WeakSet:Set,q=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function jd(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var hy=!1;function o2(t,e){if(Cd=Zl,t=F1(),sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:t,selectionRange:n},Zl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var k=g.memoizedProps,C=g.memoizedState,y=e.stateNode,p=y.getSnapshotBeforeUpdate(e.elementType===e.type?k:mn(e.type,k),C);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;if(_.nodeType===1)_.textContent="";else if(_.nodeType===9){var S=_.body;S!=null&&(S.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(v){Fe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return g=hy,hy=!1,g}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jd(e,n,s)}i=i.next}while(i!==r)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dw(t){var e=t.alternate;e!==null&&(t.alternate=null,Dw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[Qo],delete e[Ad],delete e[VC],delete e[HC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ow(t){return t.tag===5||t.tag===3||t.tag===4}function dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ow(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}var ut=null,gn=!1;function ur(t,e,n){for(n=n.child;n!==null;)Lw(t,e,n),n=n.sibling}function Lw(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:St||es(n,e);case 6:var r=ut,i=gn;ut=null,ur(t,e,n),ut=r,gn=i,ut!==null&&(gn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(gn?(t=ut,n=n.stateNode,t.nodeType===8?_h(t.parentNode,n):t.nodeType===1&&_h(t,n),Ho(t)):_h(ut,n.stateNode));break;case 4:r=ut,i=gn,ut=n.stateNode.containerInfo,gn=!0,ur(t,e,n),ut=r,gn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&jd(n,e,o),i=i.next}while(i!==r)}ur(t,e,n);break;case 1:if(!St&&(es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,ur(t,e,n),St=r):ur(t,e,n);break;default:ur(t,e,n)}}function fy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new s2),e.forEach(function(r){var i=m2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,gn=!1;break e;case 3:ut=a.stateNode.containerInfo,gn=!0;break e;case 4:ut=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(ut===null)throw Error(L(160));Lw(s,o,i),ut=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mw(e,t),e=e.sibling}function Mw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),bn(t),r&4){try{Ro(3,t,t.return),ec(3,t)}catch(g){Fe(t,t.return,g)}try{Ro(5,t,t.return)}catch(g){Fe(t,t.return,g)}}break;case 1:pn(e,t),bn(t),r&512&&n!==null&&es(n,n.return);break;case 5:if(pn(e,t),bn(t),r&512&&n!==null&&es(n,n.return),t.flags&32){var i=t.stateNode;try{zo(i,"")}catch(g){Fe(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&o1(i,s),md(a,o);var u=md(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?h1(i,d):c==="dangerouslySetInnerHTML"?u1(i,d):c==="children"?zo(i,d):Gf(i,c,d,u)}switch(a){case"input":cd(i,s);break;case"textarea":a1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?os(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?os(i,!!s.multiple,s.defaultValue,!0):os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qo]=s}catch(g){Fe(t,t.return,g)}}break;case 6:if(pn(e,t),bn(t),r&4){if(t.stateNode===null)throw Error(L(162));u=t.stateNode,c=t.memoizedProps;try{u.nodeValue=c}catch(g){Fe(t,t.return,g)}}break;case 3:if(pn(e,t),bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(g){Fe(t,t.return,g)}break;case 4:pn(e,t),bn(t);break;case 13:pn(e,t),bn(t),u=t.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(Tp=He()),r&4&&fy(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||u,pn(e,t),St=c):pn(e,t),bn(t),r&8192){c=t.memoizedState!==null;e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=c1("display",o))}catch(g){Fe(t,t.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Fe(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}if(c&&!u&&(t.mode&1)!==0)for(q=t,t=t.child;t!==null;){for(u=q=t;q!==null;){switch(c=q,d=c.child,c.tag){case 0:case 11:case 14:case 15:Ro(4,c,c.return);break;case 1:if(es(c,c.return),s=c.stateNode,typeof s.componentWillUnmount=="function"){f=c,m=c.return;try{i=f,s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(g){Fe(f,m,g)}}break;case 5:es(c,c.return);break;case 22:if(c.memoizedState!==null){my(u);continue}}d!==null?(d.return=c,q=d):my(u)}t=t.sibling}}break;case 19:pn(e,t),bn(t),r&4&&fy(t);break;case 21:break;default:pn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ow(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zo(i,""),r.flags&=-33);var s=dy(t);Hd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dy(t);Vd(t,a,o);break;default:throw Error(L(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function a2(t,e,n){q=t,Uw(t)}function Uw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||St;a=cl;var u=St;if(cl=o,(St=l)&&!u)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?gy(i):l!==null?(l.return=o,q=l):gy(i);for(;s!==null;)q=s,Uw(s),s=s.sibling;q=i,cl=a,St=u}py(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,q=s):py(t)}}function py(t){for(;q!==null;){var e=q;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:St||ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(L(163))}St||e.flags&512&&Bd(e)}catch(f){Fe(e,e.return,f)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function my(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function gy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Fe(e,i,l)}}var s=e.return;try{Bd(e)}catch(l){Fe(e,s,l)}break;case 5:var o=e.return;try{Bd(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var l2=Math.ceil,fu=sr.ReactCurrentDispatcher,Ep=sr.ReactCurrentOwner,un=sr.ReactCurrentBatchConfig,pe=0,Je=null,We=null,ht=0,Yt=0,ts=Gr(0),Xe=0,ta=null,gi=0,tc=0,kp=0,$o=null,Vt=null,Tp=0,Es=1/0,jn=null,pu=!1,qd=null,br=null,hl=!1,kr=null,mu=0,Po=0,Gd=null,Pl=-1,Nl=0;function Dt(){return(pe&6)!==0?He():Pl!==-1?Pl:Pl=He()}function Ar(t){return(t.mode&1)===0?1:(pe&2)!==0&&ht!==0?ht&-ht:GC.transition!==null?(Nl===0&&(Nl=k1()),Nl):(t=Se,t!==0||(t=window.event,t=t===void 0?16:R1(t.type)),t)}function cn(t,e,n){if(50<Po)throw Po=0,Gd=null,Error(L(185));var r=nc(t,e);return r===null?null:(wa(r,e,n),((pe&2)===0||r!==Je)&&(r===Je&&((pe&2)===0&&(tc|=e),Xe===4&&mr(r,ht)),Qt(r,n),e===1&&pe===0&&(t.mode&1)===0&&(Es=He()+500,Xu&&Wr())),r)}function nc(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Fw(t){return(Je!==null||vn!==null)&&(t.mode&1)!==0&&(pe&2)===0}function Qt(t,e){var n=t.callbackNode;GT(t,e);var r=Jl(t,t===Je?ht:0);if(r===0)n!==null&&Eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Eg(n),e===1)t.tag===0?qC(yy.bind(null,t)):Q1(yy.bind(null,t)),jC(function(){pe===0&&Wr()}),n=null;else{switch(T1(r)){case 1:n=Xf;break;case 4:n=S1;break;case 16:n=Xl;break;case 536870912:n=E1;break;default:n=Xl}n=Ww(n,zw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zw(t,e){if(Pl=-1,Nl=0,(pe&6)!==0)throw Error(L(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var r=Jl(t,t===Je?ht:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=gu(t,r);else{e=r;var i=pe;pe|=2;var s=Bw();(Je!==t||ht!==e)&&(jn=null,Es=He()+500,oi(t,e));do try{h2();break}catch(a){jw(t,a)}while(1);ap(),fu.current=s,pe=i,We!==null?e=0:(Je=null,ht=0,e=Xe)}if(e!==0){if(e===2&&(i=_d(t),i!==0&&(r=i,e=Wd(t,i))),e===1)throw n=ta,oi(t,0),mr(t,r),Qt(t,He()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!u2(i)&&(e=gu(t,r),e===2&&(s=_d(t),s!==0&&(r=s,e=Wd(t,s))),e===1))throw n=ta,oi(t,0),mr(t,r),Qt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Zr(t,Vt,jn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=Tp+500-He(),10<e)){if(Jl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bd(Zr.bind(null,t,Vt,jn),e);break}Zr(t,Vt,jn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*l2(r/1960))-r,10<r){t.timeoutHandle=bd(Zr.bind(null,t,Vt,jn),r);break}Zr(t,Vt,jn);break;case 5:Zr(t,Vt,jn);break;default:throw Error(L(329))}}}return Qt(t,He()),t.callbackNode===n?zw.bind(null,t):null}function Wd(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(oi(t,e).flags|=256),t=gu(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Kd(e)),t}function Kd(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function u2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~kp,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function yy(t){if((pe&6)!==0)throw Error(L(327));hs();var e=Jl(t,0);if((e&1)===0)return Qt(t,He()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=_d(t);r!==0&&(e=r,n=Wd(t,r))}if(n===1)throw n=ta,oi(t,0),mr(t,e),Qt(t,He()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,Vt,jn),Qt(t,He()),null}function Cp(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Es=He()+500,Xu&&Wr())}}function yi(t){kr!==null&&kr.tag===0&&(pe&6)===0&&hs();var e=pe;pe|=1;var n=un.transition,r=Se;try{if(un.transition=null,Se=1,t)return t()}finally{Se=r,un.transition=n,pe=e,(pe&6)===0&&Wr()}}function Ip(){Yt=ts.current,Ae(ts)}function oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zC(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:Ss(),Ae(Wt),Ae(Ct),mp();break;case 5:pp(r);break;case 4:Ss();break;case 13:Ae(De);break;case 19:Ae(De);break;case 10:lp(r.type._context);break;case 22:case 23:Ip()}n=n.return}if(Je=t,We=t=Fr(t.current,null),ht=Yt=e,Xe=0,ta=null,kp=tc=gi=0,Vt=$o=null,vn!==null){for(e=0;e<vn.length;e++)if(n=vn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vn=null}return t}function jw(t,e){do{var n=We;try{if(ap(),Rl.current=du,hu){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hu=!1}if(mi=0,tt=Ye=Oe=null,Ao=!1,Jo=0,Ep.current=null,n===null||n.return===null){Xe=1,ta=e,We=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=ty(o);if(m!==null){m.flags&=-257,ny(m,o,a,s,e),m.mode&1&&ey(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var k=new Set;k.add(l),e.updateQueue=k}else g.add(l);break e}else{if((e&1)===0){ey(s,u,e),xp();break e}l=Error(L(426))}}else if(Pe&&a.mode&1){var C=ty(o);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),ny(C,o,a,s,e),dp(l);break e}}s=l,Xe!==4&&(Xe=2),$o===null?$o=[s]:$o.push(s),l=Sp(l,a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var y=kw(a,l,e);qg(a,y);break e;case 1:s=l;var p=a.type,_=a.stateNode;if((a.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(br===null||!br.has(_)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=Tw(a,s,e);qg(a,S);break e}}a=a.return}while(a!==null)}Hw(n)}catch(v){e=v,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function Bw(){var t=fu.current;return fu.current=du,t===null?du:t}function xp(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Je===null||(gi&268435455)===0&&(tc&268435455)===0||mr(Je,ht)}function gu(t,e){var n=pe;pe|=2;var r=Bw();(Je!==t||ht!==e)&&(jn=null,oi(t,e));do try{c2();break}catch(i){jw(t,i)}while(1);if(ap(),pe=n,fu.current=r,We!==null)throw Error(L(261));return Je=null,ht=0,Xe}function c2(){for(;We!==null;)Vw(We)}function h2(){for(;We!==null&&!MT();)Vw(We)}function Vw(t){var e=Gw(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?Hw(t):We=e,Ep.current=null}function Hw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=t2(n,e,Yt),n!==null){We=n;return}}else{if(n=i2(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,We=null;return}}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Xe===0&&(Xe=5)}function Zr(t,e,n){var r=Se,i=un.transition;try{un.transition=null,Se=1,d2(t,e,n,r)}finally{un.transition=i,Se=r}return null}function d2(t,e,n,r){do hs();while(kr!==null);if((pe&6)!==0)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WT(t,s),t===Je&&(We=Je=null,ht=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||hl||(hl=!0,Ww(Xl,function(){return hs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=un.transition,un.transition=null;var o=Se;Se=1;var a=pe;pe|=4,Ep.current=null,o2(t,n),Mw(n,t),NC(Id),Zl=!!Cd,Id=Cd=null,t.current=n,a2(n),UT(),pe=a,Se=o,un.transition=s}else t.current=n;if(hl&&(hl=!1,kr=t,mu=i),s=t.pendingLanes,s===0&&(br=null),jT(n.stateNode),Qt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)r(e[n]);if(pu)throw pu=!1,t=qd,qd=null,t;return(mu&1)!==0&&t.tag!==0&&hs(),s=t.pendingLanes,(s&1)!==0?t===Gd?Po++:(Po=0,Gd=t):Po=0,Wr(),null}function hs(){if(kr!==null){var t=T1(mu),e=un.transition,n=Se;try{if(un.transition=null,Se=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,mu=0,(pe&6)!==0)throw Error(L(331));var i=pe;for(pe|=4,q=t.current;q!==null;){var s=q,o=s.child;if((q.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:Ro(8,c,s)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var f=c.sibling,m=c.return;if(Dw(c),c===u){q=null;break}if(f!==null){f.return=m,q=f;break}q=m}}}var g=s.alternate;if(g!==null){var k=g.child;if(k!==null){g.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}q=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,q=y;break e}q=s.return}}var p=t.current;for(q=p;q!==null;){o=q;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,q=_;else e:for(o=p;q!==null;){if(a=q,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(v){Fe(a,a.return,v)}if(a===o){q=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,q=S;break e}q=a.return}}if(pe=i,Wr(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Gu,t)}catch{}r=!0}return r}finally{Se=n,un.transition=e}}return!1}function vy(t,e,n){e=Sp(n,e),e=kw(t,e,1),xr(t,e),e=Dt(),t=nc(t,1),t!==null&&(wa(t,1,e),Qt(t,e))}function Fe(t,e,n){if(t.tag===3)vy(t,t,n);else for(;e!==null;){if(e.tag===3){vy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Sp(n,t),t=Tw(e,t,1),xr(e,t),t=Dt(),e=nc(e,1),e!==null&&(wa(e,1,t),Qt(e,t));break}}e=e.return}}function f2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(ht&n)===n&&(Xe===4||Xe===3&&(ht&130023424)===ht&&500>He()-Tp?oi(t,0):kp|=n),Qt(t,e)}function qw(t,e){e===0&&((t.mode&1)===0?e=1:(e=el,el<<=1,(el&130023424)===0&&(el=4194304)));var n=Dt();t=nc(t,e),t!==null&&(wa(t,e,n),Qt(t,n))}function p2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qw(t,n)}function m2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),qw(t,n)}var Gw;Gw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wt.current)Gt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Gt=!1,r2(t,e,n);Gt=(t.flags&131072)!==0}else Gt=!1,Pe&&(e.flags&1048576)!==0&&Z1(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=vs(e,Ct.current);cs(e,n),i=yp(null,e,r,t,i,n);var s=vp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(s=!0,iu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,up(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,Nd(e,r,t,n),e=Fd(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&cp(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=y2(r),t=mn(r,t),i){case 0:e=Ud(null,e,r,t,n);break e;case 1:e=sy(null,e,r,t,n);break e;case 11:e=ry(null,e,r,t,n);break e;case 14:e=iy(null,e,r,mn(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Ud(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),sy(t,e,r,i,n);case 3:e:{if($w(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Y1(t,e),au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Error(L(423)),e=oy(t,e,r,n,i);break e}else if(r!==i){i=Error(L(424)),e=oy(t,e,r,n,i);break e}else for(Ht=Vn(e.stateNode.containerInfo.firstChild),Zt=e,Pe=!0,yn=null,n=nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),r===i){e=tr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return rw(e),t===null&&Od(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xd(r,i)?o=null:s!==null&&xd(r,s)&&(e.flags|=32),Rw(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Od(e),null;case 13:return Pw(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),ry(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ce(su,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!Wt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$d(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cs(e,n),i=hn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),iy(t,e,r,i,n);case 15:return bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Kt(r)?(t=!0,iu(e)):t=!1,cs(e,n),J1(e,r,i),Nd(e,r,i,n),Fd(null,e,r,!0,t,n);case 19:return Nw(t,e,n);case 22:return Aw(t,e,n)}throw Error(L(156,e.tag))};function Ww(t,e){return _1(t,e)}function g2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new g2(t,e,n,r)}function bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y2(t){if(typeof t=="function")return bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Qf)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return ai(n.children,i,s,e);case Wf:o=8,i|=8;break;case sd:return t=ln(12,n,e,i|2),t.elementType=sd,t.lanes=s,t;case od:return t=ln(13,n,e,i),t.elementType=od,t.lanes=s,t;case ad:return t=ln(19,n,e,i),t.elementType=ad,t.lanes=s,t;case r1:return yu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t1:o=10;break e;case n1:o=9;break e;case Kf:o=11;break e;case Qf:o=14;break e;case hr:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ai(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function yu(t,e,n,r){return t=ln(22,t,r,e),t.elementType=r1,t.lanes=n,t.stateNode={},t}function xh(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function bh(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function v2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uh(0),this.expirationTimes=uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,r,i,s,o,a,l){return t=new v2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function w2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Kw(t){if(!t)return Ur;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(Kt(n))return K1(t,n,e)}return e}function Qw(t,e,n,r,i,s,o,a,l){return t=Ap(n,r,!0,t,i,s,o,a,l),t.context=Kw(null),n=t.current,r=Dt(),i=Ar(n),s=Qn(r,i),s.callback=e!=null?e:null,xr(n,s),t.current.lanes=i,wa(t,i,r),Qt(t,r),t}function rc(t,e,n,r){var i=e.current,s=Dt(),o=Ar(i);return n=Kw(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),xr(i,e),t=cn(i,o,s),t!==null&&Al(t,i,o),o}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){wy(t,e),(t=t.alternate)&&wy(t,e)}function _2(){return null}var Yw=typeof reportError=="function"?reportError:function(t){console.error(t)};function $p(t){this._internalRoot=t}ic.prototype.render=$p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));rc(t,e,null,null)};ic.prototype.unmount=$p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){rc(null,t,null,null)}),e[er]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=x1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&A1(t)}};function Pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _y(){}function S2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vu(o);s.call(u)}}var o=Qw(e,r,t,0,null,!1,!1,"",_y);return t._reactRootContainer=o,t[er]=o.current,Wo(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vu(l);a.call(u)}}var l=Ap(t,0,!1,null,null,!1,!1,"",_y);return t._reactRootContainer=l,t[er]=l.current,Wo(t.nodeType===8?t.parentNode:t),yi(function(){rc(e,l,n,r)}),l}function oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vu(o);a.call(l)}}rc(e,o,t,i)}else o=S2(n,e,t,i,r);return vu(o)}C1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(Jf(e,n|1),Qt(e,He()),(pe&6)===0&&(Es=He()+500,Wr()))}break;case 13:var r=Dt();yi(function(){return cn(t,1,r)}),Rp(t,1)}};Zf=function(t){if(t.tag===13){var e=Dt();cn(t,134217728,e),Rp(t,134217728)}};I1=function(t){if(t.tag===13){var e=Dt(),n=Ar(t);cn(t,n,e),Rp(t,n)}};x1=function(){return Se};b1=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};yd=function(t,e,n){switch(e){case"input":if(cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(L(90));s1(r),cd(r,i)}}}break;case"textarea":a1(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};p1=Cp;m1=yi;var E2={usingClientEntryPoint:!1,Events:[Sa,Qi,Yu,d1,f1,Cp]},co={findFiberByHostInstance:ti,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},k2={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v1(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||_2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Gu=dl.inject(k2),Nn=dl}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E2;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pp(e))throw Error(L(200));return w2(t,e,null,n)};nn.createRoot=function(t,e){if(!Pp(t))throw Error(L(299));var n=!1,r="",i=Yw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,Wo(t.nodeType===8?t.parentNode:t),new $p(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=v1(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return yi(t)};nn.hydrate=function(t,e,n){if(!sc(e))throw Error(L(200));return oc(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Pp(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Yw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[er]=e.current,Wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ic(e)};nn.render=function(t,e,n){if(!sc(e))throw Error(L(200));return oc(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!sc(t))throw Error(L(40));return t._reactRootContainer?(yi(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};nn.unstable_batchedUpdates=Cp;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sc(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return oc(t,e,n,!1,r)};nn.version="18.1.0-next-22edb9f77-20220426";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=nn})(Y0);var Sy=Y0.exports;rd.createRoot=Sy.createRoot,rd.hydrateRoot=Sy.hydrateRoot;function wu(){return wu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wu.apply(this,arguments)}var ri;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ri||(ri={}));var Ey=function(t){return t},ky="beforeunload",T2="popstate";function C2(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var w=r.location,b=w.pathname,U=w.search,B=w.hash,ne=i.state||{};return[ne.idx,Ey({pathname:b,search:U,hash:B,state:ne.usr||null,key:ne.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var w=ri.Pop,b=s(),U=b[0],B=b[1];if(m.length){if(U!=null){var ne=c-U;ne&&(o={action:w,location:B,retry:function(){v(ne*-1)}},v(ne))}}else p(w)}}r.addEventListener(T2,a);var l=ri.Pop,u=s(),c=u[0],d=u[1],f=Cy(),m=Cy();c==null&&(c=0,i.replaceState(wu({},i.state,{idx:c}),""));function g(w){return typeof w=="string"?w:Qd(w)}function k(w,b){return b===void 0&&(b=null),Ey(wu({pathname:d.pathname,hash:"",search:""},typeof w=="string"?Di(w):w,{state:b,key:I2()}))}function C(w,b){return[{usr:w.state,key:w.key,idx:b},g(w)]}function y(w,b,U){return!m.length||(m.call({action:w,location:b,retry:U}),!1)}function p(w){l=w;var b=s();c=b[0],d=b[1],f.call({action:l,location:d})}function _(w,b){var U=ri.Push,B=k(w,b);function ne(){_(w,b)}if(y(U,B,ne)){var R=C(B,c+1),$=R[0],D=R[1];try{i.pushState($,"",D)}catch{r.location.assign(D)}p(U)}}function S(w,b){var U=ri.Replace,B=k(w,b);function ne(){S(w,b)}if(y(U,B,ne)){var R=C(B,c),$=R[0],D=R[1];i.replaceState($,"",D),p(U)}}function v(w){i.go(w)}var x={get action(){return l},get location(){return d},createHref:g,push:_,replace:S,go:v,back:function(){v(-1)},forward:function(){v(1)},listen:function(b){return f.push(b)},block:function(b){var U=m.push(b);return m.length===1&&r.addEventListener(ky,Ty),function(){U(),m.length||r.removeEventListener(ky,Ty)}}};return x}function Ty(t){t.preventDefault(),t.returnValue=""}function Cy(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function I2(){return Math.random().toString(36).substr(2,8)}function Qd(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Di(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Np=A.exports.createContext(null),Dp=A.exports.createContext(null),ka=A.exports.createContext({outlet:null,matches:[]});function Tn(t,e){if(!t)throw new Error(e)}function x2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Di(e):e,i=Zw(r.pathname||"/",n);if(i==null)return null;let s=Xw(t);b2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=M2(s[a],i);return o}function Xw(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Tn(!1),o.relativePath=o.relativePath.slice(r.length));let a=Rr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Tn(!1),Xw(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:O2(a,i.index),routesMeta:l})}),e}function b2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:L2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A2=/^:\w+$/,R2=3,$2=2,P2=1,N2=10,D2=-2,Iy=t=>t==="*";function O2(t,e){let n=t.split("/"),r=n.length;return n.some(Iy)&&(r+=D2),e&&(r+=$2),n.filter(i=>!Iy(i)).reduce((i,s)=>i+(A2.test(s)?R2:s===""?P2:N2),r)}function L2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function M2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=U2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Rr([i,c.pathname]),pathnameBase:e_(Rr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Rr([i,c.pathnameBase]))}return s}function U2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=F2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=z2(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function F2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function z2(t,e){try{return decodeURIComponent(t)}catch{return t}}function j2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Di(t):t;return{pathname:n?n.startsWith("/")?n:B2(n,e):e,search:H2(r),hash:q2(i)}}function B2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jw(t,e,n){let r=typeof t=="string"?Di(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=j2(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function V2(t){return t===""||t.pathname===""?"/":typeof t=="string"?Di(t).pathname:t.pathname}function Zw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),e_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),H2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,q2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function G2(t){Fs()||Tn(!1);let{basename:e,navigator:n}=A.exports.useContext(Np),{hash:r,pathname:i,search:s}=t_(t),o=i;if(e!=="/"){let a=V2(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Rr([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Fs(){return A.exports.useContext(Dp)!=null}function zs(){return Fs()||Tn(!1),A.exports.useContext(Dp).location}function or(){Fs()||Tn(!1);let{basename:t,navigator:e}=A.exports.useContext(Np),{matches:n}=A.exports.useContext(ka),{pathname:r}=zs(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=A.exports.useRef(!1);return A.exports.useEffect(()=>{s.current=!0}),A.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Jw(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Rr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function In(){let{matches:t}=A.exports.useContext(ka),e=t[t.length-1];return e?e.params:{}}function t_(t){let{matches:e}=A.exports.useContext(ka),{pathname:n}=zs(),r=JSON.stringify(e.map(i=>i.pathnameBase));return A.exports.useMemo(()=>Jw(t,JSON.parse(r),n),[t,r,n])}function W2(t,e){Fs()||Tn(!1);let{matches:n}=A.exports.useContext(ka),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=zs(),a;if(e){var l;let f=typeof e=="string"?Di(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||Tn(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=x2(t,{pathname:c});return K2(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},i,f.params),pathname:Rr([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:Rr([s,f.pathnameBase])})),n)}function K2(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>A.exports.createElement(ka.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function Yd(t){let{to:e,replace:n,state:r}=t;Fs()||Tn(!1);let i=or();return A.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function Ve(t){Tn(!1)}function Q2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ri.Pop,navigator:s,static:o=!1}=t;Fs()&&Tn(!1);let a=e_(e),l=A.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Di(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,g=A.exports.useMemo(()=>{let k=Zw(u,a);return k==null?null:{pathname:k,search:c,hash:d,state:f,key:m}},[a,u,c,d,f,m]);return g==null?null:A.exports.createElement(Np.Provider,{value:l},A.exports.createElement(Dp.Provider,{children:n,value:{location:g,navigationType:i}}))}function Y2(t){let{children:e,location:n}=t;return W2(Xd(e),n)}function Xd(t){let e=[];return A.exports.Children.forEach(t,n=>{if(!A.exports.isValidElement(n))return;if(n.type===A.exports.Fragment){e.push.apply(e,Xd(n.props.children));return}n.type!==Ve&&Tn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Xd(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jd(){return Jd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jd.apply(this,arguments)}function X2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const J2=["onClick","reloadDocument","replace","state","target","to"];function Z2(t){let{basename:e,children:n,window:r}=t,i=A.exports.useRef();i.current==null&&(i.current=C2({window:r}));let s=i.current,[o,a]=A.exports.useState({action:s.action,location:s.location});return A.exports.useLayoutEffect(()=>s.listen(a),[s]),A.exports.createElement(Q2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function eI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const le=A.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=X2(e,J2),c=G2(l),d=tI(l,{replace:s,state:o,target:a});function f(m){r&&r(m),!m.defaultPrevented&&!i&&d(m)}return A.exports.createElement("a",Jd({},u,{href:c,onClick:f,ref:n,target:a}))});function tI(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=or(),o=zs(),a=t_(t);return A.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!eI(l)){l.preventDefault();let u=!!r||Qd(o)===Qd(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const n_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},r_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},rI=function(t){const e=n_(t);return r_.encodeByteArray(e,!0)},i_=function(t){return rI(t).replace(/\./g,"")},iI=function(t){try{return r_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function o_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){return nt().indexOf("Electron/")>=0}function l_(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return nt().indexOf("MSAppHost/")>=0}function lI(){return typeof indexedDB=="object"}function uI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="FirebaseError";class Kr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cI,Object.setPrototypeOf(this,Kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kr(i,a,r)}}function hI(t,e){return t.replace(dI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dI=/\{\$([^}]+)}/g;function fI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xy(s)&&xy(o)){if(!_u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pI(t,e){const n=new mI(t,e);return n.subscribe.bind(n)}class mI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ah),i.error===void 0&&(i.error=Ah),i.complete===void 0&&(i.complete=Ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ah(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ei="[DEFAULT]";/**
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
 */class yI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vI(t){return t===ei?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
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
 */class _I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const SI={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},EI=ge.INFO,kI={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Op{constructor(e){this.name=e,this._logLevel=EI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const CI=(t,e)=>e.some(n=>t instanceof n);let by,Ay;function II(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xI(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u_=new WeakMap,Zd=new WeakMap,c_=new WeakMap,Rh=new WeakMap,Lp=new WeakMap;function bI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u_.set(n,t)}).catch(()=>{}),Lp.set(e,t),e}function AI(t){if(Zd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zd.set(t,e)}let ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RI(t){ef=t(ef)}function $I(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($h(this),e,...n);return c_.set(r,e.sort?e.sort():[e]),$r(r)}:xI().includes(t)?function(...e){return t.apply($h(this),e),$r(u_.get(this))}:function(...e){return $r(t.apply($h(this),e))}}function PI(t){return typeof t=="function"?$I(t):(t instanceof IDBTransaction&&AI(t),CI(t,II())?new Proxy(t,ef):t)}function $r(t){if(t instanceof IDBRequest)return bI(t);if(Rh.has(t))return Rh.get(t);const e=PI(t);return e!==t&&(Rh.set(t,e),Lp.set(e,t)),e}const $h=t=>Lp.get(t);function NI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$r(o);return r&&o.addEventListener("upgradeneeded",l=>{r($r(o.result),l.oldVersion,l.newVersion,$r(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const DI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],Ph=new Map;function Ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ph.get(e))return Ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ph.set(e,s),s}RI(t=>({...t,get:(e,n,r)=>Ry(e,n)||t.get(e,n,r),has:(e,n)=>!!Ry(e,n)||t.has(e,n)}));/**
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
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tf="@firebase/app",$y="0.7.24";/**
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
 */const Mp=new Op("@firebase/app"),UI="@firebase/app-compat",FI="@firebase/analytics-compat",zI="@firebase/analytics",jI="@firebase/app-check-compat",BI="@firebase/app-check",VI="@firebase/auth",HI="@firebase/auth-compat",qI="@firebase/database",GI="@firebase/database-compat",WI="@firebase/functions",KI="@firebase/functions-compat",QI="@firebase/installations",YI="@firebase/installations-compat",XI="@firebase/messaging",JI="@firebase/messaging-compat",ZI="@firebase/performance",ex="@firebase/performance-compat",tx="@firebase/remote-config",nx="@firebase/remote-config-compat",rx="@firebase/storage",ix="@firebase/storage-compat",sx="@firebase/firestore",ox="@firebase/firestore-compat",ax="firebase",lx="9.8.1";/**
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
 */const h_="[DEFAULT]",ux={[tf]:"fire-core",[UI]:"fire-core-compat",[zI]:"fire-analytics",[FI]:"fire-analytics-compat",[BI]:"fire-app-check",[jI]:"fire-app-check-compat",[VI]:"fire-auth",[HI]:"fire-auth-compat",[qI]:"fire-rtdb",[GI]:"fire-rtdb-compat",[WI]:"fire-fn",[KI]:"fire-fn-compat",[QI]:"fire-iid",[YI]:"fire-iid-compat",[XI]:"fire-fcm",[JI]:"fire-fcm-compat",[ZI]:"fire-perf",[ex]:"fire-perf-compat",[tx]:"fire-rc",[nx]:"fire-rc-compat",[rx]:"fire-gcs",[ix]:"fire-gcs-compat",[sx]:"fire-fst",[ox]:"fire-fst-compat","fire-js":"fire-js",[ax]:"fire-js-all"};/**
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
 */const Su=new Map,nf=new Map;function cx(t,e){try{t.container.addComponent(e)}catch(n){Mp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if(nf.has(e))return Mp.debug(`There were multiple attempts to register component ${e}.`),!1;nf.set(e,t);for(const n of Su.values())cx(n,t);return!0}function ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},wi=new Ta("app","Firebase",hx);/**
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
 */class dx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
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
 */const js=lx;function fx(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:h_,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw wi.create("bad-app-name",{appName:String(r)});const i=Su.get(r);if(i){if(_u(t,i.options)&&_u(n,i.config))return i;throw wi.create("duplicate-app",{appName:r})}const s=new _I(r);for(const a of nf.values())s.addComponent(a);const o=new dx(t,n,s);return Su.set(r,o),o}function Up(t=h_){const e=Su.get(t);if(!e)throw wi.create("no-app",{appName:t});return e}function On(t,e,n){var r;let i=(r=ux[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mp.warn(a.join(" "));return}vi(new zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const px="firebase-heartbeat-database",mx=1,na="firebase-heartbeat-store";let Nh=null;function d_(){return Nh||(Nh=NI(px,mx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(na)}}}).catch(t=>{throw wi.create("storage-open",{originalErrorMessage:t.message})})),Nh}async function gx(t){try{return(await d_()).transaction(na).objectStore(na).get(f_(t))}catch(e){throw wi.create("storage-get",{originalErrorMessage:e.message})}}async function Py(t,e){try{const r=(await d_()).transaction(na,"readwrite");return await r.objectStore(na).put(e,f_(t)),r.done}catch(n){throw wi.create("storage-set",{originalErrorMessage:n.message})}}function f_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yx=1024,vx=30*24*60*60*1e3;class wx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ny();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ny(),{heartbeatsToSend:n,unsentEntries:r}=_x(this._heartbeatsCache.heartbeats),i=i_(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ny(){return new Date().toISOString().substring(0,10)}function _x(t,e=yx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lI()?uI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Py(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dy(t){return i_(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ex(t){vi(new zr("platform-logger",e=>new LI(e),"PRIVATE")),vi(new zr("heartbeat",e=>new wx(e),"PRIVATE")),On(tf,$y,t),On(tf,$y,"esm2017"),On("fire-js","")}Ex("");function Fp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function p_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kx=p_,m_=new Ta("auth","Firebase",p_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new Op("@firebase/auth");function Ol(t,...e){Oy.logLevel<=ge.ERROR&&Oy.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw zp(t,...e)}function Ln(t,...e){return zp(t,...e)}function Tx(t,e,n){const r=Object.assign(Object.assign({},kx()),{[e]:n});return new Ta("auth","Firebase",r).create(e,{appName:t.name})}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return m_.create(t,...e)}function ee(t,e,...n){if(!t)throw zp(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function nr(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;function Wn(t){nr(t instanceof Function,"Expected a class definition");let e=Ly.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ly.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t,e){const n=ac(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_u(s,e!=null?e:{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function Ix(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xx(){return My()==="http:"||My()==="https:"}function My(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xx()||o_()||"connection"in navigator)?navigator.onLine:!0}function Ax(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=s_()||a_()}get(){return bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=new Ia(3e4,6e4);function xa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bs(t,e,n,r,i={}){return y_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ca(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),g_.fetch()(v_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function y_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rx),e);try{const i=new Px(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dh(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dh(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dh(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tx(t,c,u);Cn(t,c)}}catch(i){if(i instanceof Kr)throw i;Cn(t,"network-request-failed")}}async function ba(t,e,n,r,i={}){const s=await Bs(t,e,n,r,i);return"mfaPendingCredential"in s&&Cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function v_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jp(t.config,i):`${t.config.apiScheme}://${i}`}class Px{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),$x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dh(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t,e){return Bs(t,"POST","/v1/accounts:delete",e)}async function Dx(t,e){return Bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ox(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=Bp(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:No(Oh(i.auth_time)),issuedAtTime:No(Oh(i.iat)),expirationTime:No(Oh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oh(t){return Number(t)*1e3}function Bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=iI(n);return i?JSON.parse(i):(Ol("Failed to decode base64 JWT payload"),null)}catch(i){return Ol("Caught error parsing JWT payload as JSON",i),null}}function Lx(t){const e=Bp(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kr&&Mx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _i(t,Dx(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jx(s.providerUserInfo):[],a=zx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new w_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Fx(t){const e=$e(t);await Eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jx(t){return t.map(e=>{var{providerId:n}=e,r=Fp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(t,e){const n=await y_(t,{},async()=>{const r=Ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=v_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",g_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ra;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new w_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ox(this,e)}reload(){return Fx(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _i(this,Nx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:S,isAnonymous:v,providerData:x,stsTokenManager:w}=n;ee(_&&w,e,"internal-error");const b=ra.fromJSON(this.name,w);ee(typeof _=="string",e,"internal-error"),cr(d,e.name),cr(f,e.name),ee(typeof S=="boolean",e,"internal-error"),ee(typeof v=="boolean",e,"internal-error"),cr(m,e.name),cr(g,e.name),cr(k,e.name),cr(C,e.name),cr(y,e.name),cr(p,e.name);const U=new li({uid:_,auth:e,email:f,emailVerified:S,displayName:d,isAnonymous:v,photoURL:g,phoneNumber:m,tenantId:k,stsTokenManager:b,createdAt:y,lastLoginAt:p});return x&&Array.isArray(x)&&(U.providerData=x.map(B=>Object.assign({},B))),C&&(U._redirectEventId=C),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new ra;i.updateFromServerResponse(n);const s=new li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Eu(s),s}}/**
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
 */class __{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}__.type="NONE";const Uy=__;/**
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
 */function Ll(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Wn(Uy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wn(Uy);const o=Ll(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=li._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ds(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C_(e))return"Blackberry";if(I_(e))return"Webos";if(Vp(e))return"Safari";if((e.includes("chrome/")||E_(e))&&!e.includes("edge/"))return"Chrome";if(T_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S_(t=nt()){return/firefox\//i.test(t)}function Vp(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function E_(t=nt()){return/crios\//i.test(t)}function k_(t=nt()){return/iemobile/i.test(t)}function T_(t=nt()){return/android/i.test(t)}function C_(t=nt()){return/blackberry/i.test(t)}function I_(t=nt()){return/webos/i.test(t)}function lc(t=nt()){return/iphone|ipad|ipod/i.test(t)}function Vx(t=nt()){var e;return lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hx(){return l_()&&document.documentMode===10}function x_(t=nt()){return lc(t)||T_(t)||I_(t)||C_(t)||/windows phone/i.test(t)||k_(t)}function qx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t,e=[]){let n;switch(t){case"Browser":n=Fy(nt());break;case"Worker":n=`${Fy(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class Gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zy(this),this.idTokenSubscription=new zy(this),this.beforeStateQueue=new Gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eu(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function uc(t){return $e(t)}class zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=pI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function A_(t,e){return Bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",xa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",xa(t,e))}async function Yx(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",xa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends Hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Kx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qx(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return A_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yx(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",xa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="http://localhost";class Si extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:Xx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zx(t){const e=_o(So(t)).link,n=e?_o(So(e)).deep_link_id:null,r=_o(So(t)).deep_link_id;return(r?_o(So(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,i,s,o,a;const l=_o(So(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Jx((i=l.mode)!==null&&i!==void 0?i:null);ee(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Zx(e);try{return new qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return ee(r,"argument-error"),ia._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Aa extends R_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Aa{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Aa{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Aa{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e){return ba(t,"POST","/v1/accounts:signUp",xa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await li._fromIdTokenResponse(e,r,i),o=jy(r);return new Ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jy(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Kr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ku(e,n,r,i)}}function $_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(t,s,e,r):s})}async function tb(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
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
 */async function nb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _i(t,$_(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Bp(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,e,n=!1){const r="signIn",i=await $_(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rb(t,e){return P_(uc(t),e)}async function ib(t,e,n){const r=uc(t),i=await eb(r,{returnSecureToken:!0,email:e,password:n}),s=await Ei._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function sb(t,e,n){return rb($e(t),Vs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e){return Bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _i(r,ob(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function lb(t,e){return N_($e(t),e,null)}function ub(t,e){return N_($e(t),null,e)}async function N_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await _i(t,A_(r,s));await t._updateTokensIfNecessary(o,!0)}function cb(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function hb(t){return $e(t).signOut()}async function db(t){return $e(t).delete()}const Tu="__sak";/**
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
 */class D_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(){const t=nt();return Vp(t)||lc(t)}const pb=1e3,mb=10;class O_ extends D_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fb()&&qx(),this.fallbackToPolling=x_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Hx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}O_.type="LOCAL";const gb=O_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_ extends D_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}L_.type="SESSION";const M_=L_;/**
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
 */function yb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function wb(t){Mn().location.href=t}/**
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
 */function U_(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function _b(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Eb(){return U_()?self:null}/**
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
 */const F_="firebaseLocalStorageDb",kb=1,Cu="firebaseLocalStorage",z_="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hc(t,e){return t.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function Tb(){const t=indexedDB.deleteDatabase(F_);return new Ra(t).toPromise()}function sf(){const t=indexedDB.open(F_,kb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cu,{keyPath:z_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cu)?e(r):(r.close(),await Tb(),e(await sf()))})})}async function By(t,e,n){const r=hc(t,!0).put({[z_]:e,value:n});return new Ra(r).toPromise()}async function Cb(t,e){const n=hc(t,!1).get(e),r=await new Ra(n).toPromise();return r===void 0?null:r.value}function Vy(t,e){const n=hc(t,!0).delete(e);return new Ra(n).toPromise()}const Ib=800,xb=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(Eb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _b(),!this.activeServiceWorker)return;this.sender=new vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sf();return await By(e,Tu,"1"),await Vy(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>By(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hc(i,!1).getAll();return new Ra(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const bb=j_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ab().appendChild(r)})}function $b(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ia(3e4,6e4);/**
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
 */function Pb(t,e){return e?Wn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wp extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nb(t){return P_(t.auth,new Wp(t),t.bypassAuthState)}function Db(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),nb(n,new Wp(t),t.bypassAuthState)}async function Ob(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),tb(n,new Wp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nb;case"linkViaPopup":case"linkViaRedirect":return Ob;case"reauthViaPopup":case"reauthViaRedirect":return Db;default:Cn(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=new Ia(2e3,1e4);class ns extends B_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Gp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Lb.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="pendingRedirect",Ml=new Map;class Ub extends B_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await Fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fb(t,e){const n=Bb(e),r=jb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zb(t,e){Ml.set(t._key(),e)}function jb(t){return Wn(t._redirectPersistence)}function Bb(t){return Ll(Mb,t.config.apiKey,t.name)}async function Vb(t,e,n=!1){const r=uc(t),i=Pb(r,e),o=await new Ub(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=10*60*1e3;class qb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!V_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hy(e))}saveEventToCache(e){this.cachedEventUids.add(Hy(e)),this.lastProcessedEventTime=Date.now()}}function Hy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function V_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e={}){return Bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qb=/^https?/;async function Yb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wb(t);for(const n of e)try{if(Xb(n))return}catch{}Cn(t,"unauthorized-domain")}function Xb(t){const e=rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Qb.test(n))return!1;if(Kb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Jb=new Ia(3e4,6e4);function qy(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zb(t){return new Promise((e,n)=>{var r,i,s;function o(){qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qy(),n(Ln(t,"network-request-failed"))},timeout:Jb.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const a=$b("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},Rb(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function eA(t){return Ul=Ul||Zb(t),Ul}/**
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
 */const tA=new Ia(5e3,15e3),nA="__/auth/iframe",rA="emulator/auth/iframe",iA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oA(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,rA):`https://${t.config.authDomain}/${nA}`,r={apiKey:e.apiKey,appName:t.name,v:js},i=sA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ca(r).slice(1)}`}async function aA(t){const e=await eA(t),n=Mn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:oA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Mn().setTimeout(()=>{s(o)},tA.get());function l(){Mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const lA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uA=500,cA=600,hA="_blank",dA="http://localhost";class Gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fA(t,e,n,r=uA,i=cA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=nt().toLowerCase();n&&(a=E_(u)?hA:n),S_(u)&&(e=e||dA,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(Vx(u)&&a!=="_self")return pA(e||"",a),new Gy(null);const d=window.open(e||"",a,c);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new Gy(d)}function pA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mA="__/auth/handler",gA="emulator/auth/handler";function Wy(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:i};if(e instanceof R_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Aa){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${yA(t)}?${Ca(a).slice(1)}`}function yA({config:t}){return t.emulator?jp(t,gA):`https://${t.authDomain}/${mA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="webStorageSupport";class vA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M_,this._completeRedirectFn=Vb,this._overrideRedirectResult=zb}async _openPopup(e,n,r,i){var s;nr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Wy(e,n,r,rf(),i);return fA(e,o,Gp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),wb(Wy(e,n,r,rf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aA(e),r=new qb(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lh,{type:Lh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lh];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x_()||Vp()||lc()}}const wA=vA;var Ky="@firebase/auth",Qy="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EA(t){vi(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{ee(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b_(t)},c=new Wx(a,l,u);return Ix(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new zr("auth-internal",e=>{const n=uc(e.getProvider("auth").getImmediate());return(r=>new _A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Ky,Qy,SA(t)),On(Ky,Qy,"esm2017")}/**
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
 */function kA(t=Up()){const e=ac(t,"auth");return e.isInitialized()?e.getImmediate():Cx(t,{popupRedirectResolver:wA,persistence:[bb,gb,M_]})}EA("Browser");var TA="firebase",CA="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(TA,CA,"app");var IA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Kp=Kp||{},te=IA||self;function Iu(){}function of(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $a(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xA(t){return Object.prototype.hasOwnProperty.call(t,Mh)&&t[Mh]||(t[Mh]=++bA)}var Mh="closure_uid_"+(1e9*Math.random()>>>0),bA=0;function AA(t,e,n){return t.call.apply(t.bind,arguments)}function RA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=AA:dt=RA,dt.apply(null,arguments)}function fl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function yt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qr(){this.s=this.s,this.o=this.o}var $A=0;Qr.prototype.s=!1;Qr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),$A!=0)&&xA(this)};Qr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const H_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},q_=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function PA(t){e:{var e=kR;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Yy(t){return Array.prototype.concat.apply([],arguments)}function Qp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function xu(t){return/^[\s\xa0]*$/.test(t)}var Xy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rt(t,e){return t.indexOf(e)!=-1}function Uh(t,e){return t<e?-1:t>e?1:0}var $t;e:{var Jy=te.navigator;if(Jy){var Zy=Jy.userAgent;if(Zy){$t=Zy;break e}}$t=""}function Yp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function G_(t){const e={};for(const n in t)e[n]=t[n];return e}var ev="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ev.length;s++)n=ev[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xp(t){return Xp[" "](t),t}Xp[" "]=Iu;function NA(t){var e=LA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var DA=Rt($t,"Opera"),ks=Rt($t,"Trident")||Rt($t,"MSIE"),K_=Rt($t,"Edge"),af=K_||ks,Q_=Rt($t,"Gecko")&&!(Rt($t.toLowerCase(),"webkit")&&!Rt($t,"Edge"))&&!(Rt($t,"Trident")||Rt($t,"MSIE"))&&!Rt($t,"Edge"),OA=Rt($t.toLowerCase(),"webkit")&&!Rt($t,"Edge");function Y_(){var t=te.document;return t?t.documentMode:void 0}var bu;e:{var Fh="",zh=function(){var t=$t;if(Q_)return/rv:([^\);]+)(\)|;)/.exec(t);if(K_)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OA)return/WebKit\/(\S+)/.exec(t);if(DA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zh&&(Fh=zh?zh[1]:""),ks){var jh=Y_();if(jh!=null&&jh>parseFloat(Fh)){bu=String(jh);break e}}bu=Fh}var LA={};function MA(){return NA(function(){let t=0;const e=Xy(String(bu)).split("."),n=Xy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Uh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Uh(i[2].length==0,s[2].length==0)||Uh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lf;if(te.document&&ks){var tv=Y_();lf=tv||parseInt(bu,10)||void 0}else lf=void 0;var UA=lf,FA=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",Iu,e),te.removeEventListener("test",Iu,e)}catch{}return t}();function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};function sa(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Q_){e:{try{Xp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&sa.Z.h.call(this)}}yt(sa,kt);var zA={2:"touch",3:"pen",4:"mouse"};sa.prototype.h=function(){sa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pa="closure_listenable_"+(1e6*Math.random()|0),jA=0;function BA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++jA,this.ca=this.fa=!1}function dc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cf(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new BA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function uf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=H_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Jp="closure_lm_"+(1e6*Math.random()|0),Bh={};function X_(t,e,n,r,i){if(r&&r.once)return Z_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)X_(t,e[s],n,r,i);return null}return n=tm(n),t&&t[Pa]?t.N(e,n,$a(r)?!!r.capture:!!r,i):J_(t,e,n,!1,r,i)}function J_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=$a(i)?!!i.capture:!!i,a=em(t);if(a||(t[Jp]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=VA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VA(){function t(n){return e.call(t.src,t.listener,n)}var e=HA;return t}function Z_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Z_(t,e[s],n,r,i);return null}return n=tm(n),t&&t[Pa]?t.O(e,n,$a(r)?!!r.capture:!!r,i):J_(t,e,n,!0,r,i)}function eS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eS(t,e[s],n,r,i);else r=$a(r)?!!r.capture:!!r,n=tm(n),t&&t[Pa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cf(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=em(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cf(e,n,r,i)),(n=-1<t?e[t]:null)&&Zp(n))}function Zp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Pa])uf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=em(e))?(uf(n,t),n.h==0&&(n.src=null,e[Jp]=null)):dc(t)}}}function tS(t){return t in Bh?Bh[t]:Bh[t]="on"+t}function HA(t,e){if(t.ca)t=!0;else{e=new sa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Zp(t),t=n.call(r,e)}return t}function em(t){return t=t[Jp],t instanceof fc?t:null}var Vh="__closure_events_fn_"+(1e9*Math.random()>>>0);function tm(t){return typeof t=="function"?t:(t[Vh]||(t[Vh]=function(e){return t.handleEvent(e)}),t[Vh])}function rt(){Qr.call(this),this.i=new fc(this),this.P=this,this.I=null}yt(rt,Qr);rt.prototype[Pa]=!0;rt.prototype.removeEventListener=function(t,e,n,r){eS(this,t,e,n,r)};function ft(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var i=e;e=new kt(r,t),W_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pl(o,r,!0,e)&&i}if(o=e.g=t,i=pl(o,r,!0,e)&&i,i=pl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pl(o,r,!1,e)&&i}rt.prototype.M=function(){if(rt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.I=null};rt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&uf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var nm=te.JSON.stringify;function qA(){var t=rS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GA{constructor(){this.h=this.g=null}add(e,n){const r=nS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var nS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new WA,t=>t.reset());class WA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KA(t){te.setTimeout(()=>{throw t},0)}function rm(t,e){hf||QA(),df||(hf(),df=!0),rS.add(t,e)}var hf;function QA(){var t=te.Promise.resolve(void 0);hf=function(){t.then(YA)}}var df=!1,rS=new GA;function YA(){for(var t;t=qA();){try{t.h.call(t.g)}catch(n){KA(n)}var e=nS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}df=!1}function pc(t,e){rt.call(this),this.h=t||1,this.g=e||te,this.j=dt(this.kb,this),this.l=Date.now()}yt(pc,rt);G=pc.prototype;G.da=!1;G.S=null;G.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ft(this,"tick"),this.da&&(im(this),this.start()))}};G.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function im(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}G.M=function(){pc.Z.M.call(this),im(this),delete this.g};function sm(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function iS(t){t.g=sm(()=>{t.g=null,t.i&&(t.i=!1,iS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XA extends Qr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iS(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(t){Qr.call(this),this.h=t,this.g={}}yt(oa,Qr);var nv=[];function sS(t,e,n,r){Array.isArray(n)||(n&&(nv[0]=n.toString()),n=nv);for(var i=0;i<n.length;i++){var s=X_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oS(t){Yp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zp(e)},t),t.g={}}oa.prototype.M=function(){oa.Z.M.call(this),oS(this)};oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Aa=function(){this.g=!1};function JA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function rs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tR(t,n)+(r?" "+r:"")})}function eR(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function tR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return nm(n)}catch{return e}}var Oi={},rv=null;function gc(){return rv=rv||new rt}Oi.Ma="serverreachability";function aS(t){kt.call(this,Oi.Ma,t)}yt(aS,kt);function aa(t){const e=gc();ft(e,new aS(e))}Oi.STAT_EVENT="statevent";function lS(t,e){kt.call(this,Oi.STAT_EVENT,t),this.stat=e}yt(lS,kt);function Pt(t){const e=gc();ft(e,new lS(e,t))}Oi.Na="timingevent";function uS(t,e){kt.call(this,Oi.Na,t),this.size=e}yt(uS,kt);function Na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var yc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},cS={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function om(){}om.prototype.h=null;function iv(t){return t.h||(t.h=t.i())}function hS(){}var Da={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function am(){kt.call(this,"d")}yt(am,kt);function lm(){kt.call(this,"c")}yt(lm,kt);var ff;function vc(){}yt(vc,om);vc.prototype.g=function(){return new XMLHttpRequest};vc.prototype.i=function(){return{}};ff=new vc;function Oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new oa(this),this.P=nR,t=af?125:void 0,this.W=new pc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new dS}function dS(){this.i=null,this.g="",this.h=!1}var nR=45e3,pf={},Au={};G=Oa.prototype;G.setTimeout=function(t){this.P=t};function mf(t,e,n){t.K=1,t.v=_c(rr(e)),t.s=n,t.U=!0,fS(t,null)}function fS(t,e){t.F=Date.now(),La(t),t.A=rr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),_S(n.h,"t",r),t.C=0,n=t.l.H,t.h=new dS,t.g=zS(t.l,n?e:null,!t.s),0<t.O&&(t.L=new XA(dt(t.Ia,t,t.g),t.O)),sS(t.V,t.g,"readystatechange",t.gb),e=t.H?G_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),aa(),JA(t.j,t.u,t.A,t.m,t.X,t.s)}G.gb=function(t){t=t.target;const e=this.L;e&&Kn(t)==3?e.l():this.Ia(t)};G.Ia=function(t){try{if(t==this.g)e:{const c=Kn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>c)&&(c!=3||af||this.g&&(this.h.h||this.g.ga()||lv(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?aa(3):aa(2)),wc(this);var n=this.g.ba();this.N=n;t:if(pS(this)){var r=lv(this.g);t="";var i=r.length,s=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),Do(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ZA(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xu(a)){var u=a;break t}}u=null}if(n=u)rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gf(this,n);else{this.i=!1,this.o=3,Pt(12),ii(this),Do(this);break e}}this.U?(mS(this,c,o),af&&this.i&&c==3&&(sS(this.V,this.W,"tick",this.fb),this.W.start())):(rs(this.j,this.m,o,null),gf(this,o)),c==4&&ii(this),this.i&&!this.I&&(c==4?LS(this.l,this):(this.i=!1,La(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),ii(this),Do(this)}}}catch{}finally{}};function pS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function mS(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=rR(t,n),i==Au){e==4&&(t.o=4,Pt(14),r=!1),rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pf){t.o=4,Pt(15),rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else rs(t.j,t.m,i,null),gf(t,i);pS(t)&&i!=Au&&i!=pf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ym(e),e.L=!0,Pt(11))):(rs(t.j,t.m,n,"[Invalid Chunked Response]"),ii(t),Do(t))}G.fb=function(){if(this.g){var t=Kn(this.g),e=this.g.ga();this.C<e.length&&(wc(this),mS(this,t,e),this.i&&t!=4&&La(this))}};function rR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Au:(n=Number(e.substring(n,r)),isNaN(n)?pf:(r+=1,r+n>e.length?Au:(e=e.substr(r,n),t.C=r+n,e)))}G.cancel=function(){this.I=!0,ii(this)};function La(t){t.Y=Date.now()+t.P,gS(t,t.P)}function gS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Na(dt(t.eb,t),e)}function wc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}G.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eR(this.j,this.A),this.K!=2&&(aa(),Pt(17)),ii(this),this.o=2,Do(this)):gS(this,this.Y-t)};function Do(t){t.l.G==0||t.I||LS(t.l,t)}function ii(t){wc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,im(t.W),oS(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yf(n.i,t))){if(n.I=t.N,!t.J&&yf(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Nu(n),kc(n);else break e;gm(n),Pt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Na(dt(n.ab,n),6e3));if(1>=kS(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else si(n,11)}else if((t.J||n.g==t)&&Nu(n),!xu(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const d=u[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Rt(g,"spdy")||Rt(g,"quic")||Rt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(hm(s,s.h),s.h=null))}if(r.D){const k=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;k&&(r.sa=k,Ne(r.F,r.D,k))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=FS(r,r.H?r.la:null,r.W),o.J){TS(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(wc(a),La(a)),r.g=o}else DS(r);0<n.l.length&&Tc(n)}else u[0]!="stop"&&u[0]!="close"||si(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?si(n,7):mm(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}aa(4)}catch{}}function iR(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(of(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function um(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(of(t)||typeof t=="string")q_(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(of(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=iR(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Hs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Hs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}G=Hs.prototype;G.R=function(){cm(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};G.T=function(){return cm(this),this.g.concat()};function cm(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ki(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ki(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}G.get=function(t,e){return ki(this.h,t)?this.h[t]:e};G.set=function(t,e){ki(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};G.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ki(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var yS=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ti(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ti){this.g=e!==void 0?e:t.g,Ru(this,t.j),this.s=t.s,$u(this,t.i),Pu(this,t.m),this.l=t.l,e=t.h;var n=new la;n.i=e.i,e.g&&(n.g=new Hs(e.g),n.h=e.h),sv(this,n),this.o=t.o}else t&&(n=String(t).match(yS))?(this.g=!!e,Ru(this,n[1]||"",!0),this.s=Oo(n[2]||""),$u(this,n[3]||"",!0),Pu(this,n[4]),this.l=Oo(n[5]||"",!0),sv(this,n[6]||"",!0),this.o=Oo(n[7]||"")):(this.g=!!e,this.h=new la(null,this.g))}Ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Eo(e,ov,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Eo(e,ov,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Eo(n,n.charAt(0)=="/"?cR:uR,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Eo(n,dR)),t.join("")};function rr(t){return new Ti(t)}function Ru(t,e,n){t.j=n?Oo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $u(t,e,n){t.i=n?Oo(e,!0):e}function Pu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sv(t,e,n){e instanceof la?(t.h=e,fR(t.h,t.g)):(n||(e=Eo(e,hR)),t.h=new la(e,t.g))}function Ne(t,e,n){t.h.set(e,n)}function _c(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oR(t){return t instanceof Ti?rr(t):new Ti(t,void 0)}function aR(t,e,n,r){var i=new Ti(null,void 0);return t&&Ru(i,t),e&&$u(i,e),n&&Pu(i,n),r&&(i.l=r),i}function Oo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Eo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ov=/[#\/\?@]/g,uR=/[#\?:]/g,cR=/[#\?]/g,hR=/[#\?@]/g,dR=/#/g;function la(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yr(t){t.g||(t.g=new Hs,t.h=0,t.i&&sR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=la.prototype;G.add=function(t,e){Yr(this),this.i=null,t=qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vS(t,e){Yr(t),e=qs(t,e),ki(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ki(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&cm(t)))}function wS(t,e){return Yr(t),e=qs(t,e),ki(t.g.h,e)}G.forEach=function(t,e){Yr(this),this.g.forEach(function(n,r){q_(n,function(i){t.call(e,i,r,this)},this)},this)};G.T=function(){Yr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};G.R=function(t){Yr(this);var e=[];if(typeof t=="string")wS(this,t)&&(e=Yy(e,this.g.get(qs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Yy(e,t[n])}return e};G.set=function(t,e){return Yr(this),this.i=null,t=qs(this,t),wS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function _S(t,e,n){vS(t,e),0<n.length&&(t.i=null,t.g.set(qs(t,e),Qp(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fR(t,e){e&&!t.j&&(Yr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(vS(this,r),_S(this,i,n))},t)),t.j=e}var pR=class{constructor(t,e){this.h=t,this.g=e}};function SS(t){this.l=t||mR,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ea&&te.g.Ea()&&te.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mR=10;function ES(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kS(t){return t.h?1:t.g?t.g.size:0}function yf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hm(t,e){t.g?t.g.add(e):t.h=e}function TS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SS.prototype.cancel=function(){if(this.i=CS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function CS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qp(t.i)}function dm(){}dm.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};dm.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function gR(){this.g=new dm}function yR(t,e,n){const r=n||"";try{um(t,function(i,s){let o=i;$a(i)&&(o=nm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function vR(t,e){const n=new mc;if(te.Image){const r=new Image;r.onload=fl(ml,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fl(ml,n,r,"TestLoadImage: error",!1,e),r.onabort=fl(ml,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fl(ml,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ml(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ma(t){this.l=t.$b||null,this.j=t.ib||!1}yt(Ma,om);Ma.prototype.g=function(){return new Sc(this.l,this.j)};Ma.prototype.i=function(t){return function(){return t}}({});function Sc(t,e){rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yt(Sc,rt);var fm=0;G=Sc.prototype;G.open=function(t,e){if(this.readyState!=fm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ua(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ua(this)),this.readyState=fm};G.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ua(this)),this.g&&(this.readyState=3,ua(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;IS(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function IS(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}G.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ua(this):ua(this),this.readyState==3&&IS(this)}};G.Ua=function(t){this.g&&(this.response=this.responseText=t,Ua(this))};G.Ta=function(t){this.g&&(this.response=t,Ua(this))};G.ha=function(){this.g&&Ua(this)};function Ua(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ua(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wR=te.JSON.parse;function Qe(t){rt.call(this),this.headers=new Hs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xS,this.K=this.L=!1}yt(Qe,rt);var xS="",_R=/^https?$/i,SR=["POST","PUT"];G=Qe.prototype;G.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ff.g(),this.C=this.u?iv(this.u):iv(ff),this.g.onreadystatechange=dt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){av(this,s);return}t=n||"";const i=new Hs(this.headers);r&&um(r,function(s,o){i.set(o,s)}),r=PA(i.T()),n=te.FormData&&t instanceof te.FormData,!(0<=H_(SR,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{RS(this),0<this.B&&((this.K=ER(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.pa,this)):this.A=sm(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){av(this,s)}};function ER(t){return ks&&MA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function kR(t){return t.toLowerCase()=="content-type"}G.pa=function(){typeof Kp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function av(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bS(t),Ec(t)}function bS(t){t.D||(t.D=!0,ft(t,"complete"),ft(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Ec(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ec(this,!0)),Qe.Z.M.call(this)};G.Fa=function(){this.s||(this.F||this.v||this.l?AS(this):this.cb())};G.cb=function(){AS(this)};function AS(t){if(t.h&&typeof Kp<"u"&&(!t.C[1]||Kn(t)!=4||t.ba()!=2)){if(t.v&&Kn(t)==4)sm(t.Fa,0,t);else if(ft(t,"readystatechange"),Kn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(yS)[1]||null;if(!i&&te.self&&te.self.location){var s=te.self.location.protocol;i=s.substr(0,s.length-1)}r=!_R.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<Kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",bS(t)}}finally{Ec(t)}}}}function Ec(t,e){if(t.g){RS(t);const n=t.g,r=t.C[0]?Iu:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function RS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}G.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};G.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wR(e)}};function lv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Da=function(){return this.m};G.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function TR(t){let e="";return Yp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function pm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=TR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $S(t){this.za=0,this.l=[],this.h=new mc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ho("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ho("baseRetryDelayMs",5e3,t),this.$a=ho("retryDelaySeedMs",1e4,t),this.Ya=ho("forwardChannelMaxRetries",2,t),this.ra=ho("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new SS(t&&t.concurrentRequestLimit),this.Ca=new gR,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}G=$S.prototype;G.ma=8;G.G=1;function mm(t){if(PS(t),t.G==3){var e=t.V++,n=rr(t.F);Ne(n,"SID",t.J),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Fa(t,n),e=new Oa(t,t.h,e,void 0),e.K=2,e.v=_c(rr(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=zS(e.l,null),e.g.ea(e.v)),e.F=Date.now(),La(e)}US(t)}G.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function kc(t){t.g&&(ym(t),t.g.cancel(),t.g=null)}function PS(t){kc(t),t.u&&(te.clearTimeout(t.u),t.u=null),Nu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Hh(t,e){t.l.push(new pR(t.Za++,e)),t.G==3&&Tc(t)}function Tc(t){ES(t.i)||t.m||(t.m=!0,rm(t.Ha,t),t.C=0)}function CR(t,e){return kS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Na(dt(t.Ha,t,e),MS(t,t.C)),t.C++,!0)}G.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Oa(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=G_(s),W_(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=NS(this,i,e),n=rr(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Fa(this,n),this.o&&s&&pm(n,this.o,s),hm(this.i,i),this.Ra&&Ne(n,"TYPE","init"),this.ja?(Ne(n,"$req",e),Ne(n,"SID","null"),i.$=!0,mf(i,n,null)):mf(i,n,e),this.G=2}}else this.G==3&&(t?uv(this,t):this.l.length==0||ES(this.i)||uv(this))};function uv(t,e){var n;e?n=e.m:n=t.V++;const r=rr(t.F);Ne(r,"SID",t.J),Ne(r,"RID",n),Ne(r,"AID",t.U),Fa(t,r),t.o&&t.s&&pm(r,t.o,t.s),n=new Oa(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=NS(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),hm(t.i,n),mf(n,r,e)}function Fa(t,e){t.j&&um({},function(n,r){Ne(e,r,n)})}function NS(t,e,n){n=Math.min(t.l.length,n);var r=t.j?dt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{yR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function DS(t){t.g||t.u||(t.Y=1,rm(t.Ga,t),t.A=0)}function gm(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Na(dt(t.Ga,t),MS(t,t.A)),t.A++,!0)}G.Ga=function(){if(this.u=null,OS(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Na(dt(this.bb,this),t)}};G.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pt(10),kc(this),OS(this))};function ym(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function OS(t){t.g=new Oa(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=rr(t.oa);Ne(e,"RID","rpc"),Ne(e,"SID",t.J),Ne(e,"CI",t.N?"0":"1"),Ne(e,"AID",t.U),Fa(t,e),Ne(e,"TYPE","xmlhttp"),t.o&&t.s&&pm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=_c(rr(e)),n.s=null,n.U=!0,fS(n,t)}G.ab=function(){this.v!=null&&(this.v=null,kc(this),gm(this),Pt(19))};function Nu(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function LS(t,e){var n=null;if(t.g==e){Nu(t),ym(t),t.g=null;var r=2}else if(yf(t.i,e))n=e.D,TS(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gc(),ft(r,new uS(r,n)),Tc(t)}else DS(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&CR(t,e)||r==2&&gm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:si(t,5);break;case 4:si(t,10);break;case 3:si(t,6);break;default:si(t,2)}}}function MS(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function si(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=dt(t.jb,t);n||(n=new Ti("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Ru(n,"https"),_c(n)),vR(n.toString(),r)}else Pt(2);t.G=0,t.j&&t.j.va(e),US(t),PS(t)}G.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pt(2)):(this.h.info("Failed to ping google.com"),Pt(1))};function US(t){t.G=0,t.I=-1,t.j&&((CS(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Qp(t.l),t.l.length=0),t.j.ua())}function FS(t,e,n){let r=oR(n);if(r.i!="")e&&$u(r,e+"."+r.i),Pu(r,r.m);else{const i=te.location;r=aR(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Yp(t.aa,function(i,s){Ne(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ne(r,e,n),Ne(r,"VER",t.ma),Fa(t,r),r}function zS(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Qe(new Ma({ib:!0})):new Qe(t.qa),e.L=t.H,e}function jS(){}G=jS.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Oa=function(){};function Du(){if(ks&&!(10<=Number(UA)))throw Error("Environmental error: no available transport.")}Du.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){rt.call(this),this.g=new $S(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!xu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gs(this)}yt(tn,rt);tn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),rm(dt(t.hb,t,e))),Pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=FS(t,null,t.W),Tc(t)};tn.prototype.close=function(){mm(this.g)};tn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Hh(this.g,e)}else this.v?(e={},e.__data__=nm(t),Hh(this.g,e)):Hh(this.g,t)};tn.prototype.M=function(){this.g.j=null,delete this.j,mm(this.g),delete this.g,tn.Z.M.call(this)};function BS(t){am.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}yt(BS,am);function VS(){lm.call(this),this.status=1}yt(VS,lm);function Gs(t){this.g=t}yt(Gs,jS);Gs.prototype.xa=function(){ft(this.g,"a")};Gs.prototype.wa=function(t){ft(this.g,new BS(t))};Gs.prototype.va=function(t){ft(this.g,new VS)};Gs.prototype.ua=function(){ft(this.g,"b")};Du.prototype.createWebChannel=Du.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;yc.NO_ERROR=0;yc.TIMEOUT=8;yc.HTTP_ERROR=6;cS.COMPLETE="complete";hS.EventType=Da;Da.OPEN="a";Da.CLOSE="b";Da.ERROR="c";Da.MESSAGE="d";rt.prototype.listen=rt.prototype.N;Qe.prototype.listenOnce=Qe.prototype.O;Qe.prototype.getLastError=Qe.prototype.La;Qe.prototype.getLastErrorCode=Qe.prototype.Da;Qe.prototype.getStatus=Qe.prototype.ba;Qe.prototype.getResponseJson=Qe.prototype.Qa;Qe.prototype.getResponseText=Qe.prototype.ga;Qe.prototype.send=Qe.prototype.ea;var IR=function(){return new Du},xR=function(){return gc()},qh=yc,bR=cS,AR=Oi,cv={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},RR=Ma,gl=hS,$R=Qe;const hv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Op("@firebase/firestore");function dv(){return Ci.logLevel}function K(t,...e){if(Ci.logLevel<=ge.DEBUG){const n=e.map(vm);Ci.debug(`Firestore (${Ws}): ${t}`,...n)}}function jr(t,...e){if(Ci.logLevel<=ge.ERROR){const n=e.map(vm);Ci.error(`Firestore (${Ws}): ${t}`,...n)}}function fv(t,...e){if(Ci.logLevel<=ge.WARN){const n=e.map(vm);Ci.warn(`Firestore (${Ws}): ${t}`,...n)}}function vm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function Ie(t,e){t||ie()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Kr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class DR{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new PR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new jt(e)}}class OR{constructor(e,n,r){this.type="FirstParty",this.user=jt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class LR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new OR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UR{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.p=n.token,new MR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class wm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wm.A=-1;class HS{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Tt(0,0))}static max(){return new ue(new Tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends ca{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const zR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends ca{construct(e,n,r){return new qt(e,n,r)}static isValidIdentifier(e){return zR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(n)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.fields=e,e.sort(qt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new gt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const jR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=jR.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function WS(t){const e=t.mapValue.fields.__previous_value__;return GS(e)?WS(e):e}function da(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){return t==null}function Ou(t){return t===0&&1/t==-1/0}function VR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(be.fromString(e))}static fromName(e){return new Q(be.fromString(e).popFirst(5))}static empty(){return new Q(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new be(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?GS(t)?4:HR(t)?9007199254740991:10:ie()}function Un(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Br(r.timestampValue),o=Br(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Cs(r.bytesValue).isEqual(Cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ge(r.doubleValue),o=Ge(i.doubleValue);return s===o?Ou(s)===Ou(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(pv(s)!==pv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Un(s[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function fa(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=Ii(t),r=Ii(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ge(i.integerValue||i.doubleValue),a=Ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return mv(t.timestampValue,e.timestampValue);case 4:return mv(da(t),da(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Cs(i),a=Cs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=we(o[l],a[l]);if(u!==0)return u}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=we(Ge(i.latitude),Ge(s.latitude));return o!==0?o:we(Ge(i.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=xs(o[l],a[l]);if(u)return u}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===yl.mapValue&&s===yl.mapValue)return 0;if(i===yl.mapValue)return 1;if(s===yl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=we(a[c],u[c]);if(d!==0)return d;const f=xs(o[a[c]],l[u[c]]);if(f!==0)return f}return we(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ie()}}function mv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Br(t),r=Br(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function ps(t){return vf(t)}function vf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Br(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=vf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${vf(r.fields[a])}`;return s+"}"}(t.mapValue):ie();var e,n}function gv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wf(t){return!!t&&"integerValue"in t}function _m(t){return!!t&&"arrayValue"in t}function yv(t){return!!t&&"nullValue"in t}function vv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function Lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=qt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Lo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(Lo(this.value))}}function KS(t){const e=[];return Li(t.fields,(n,r)=>{const i=new qt([n]);if(Fl(r)){const s=KS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ha(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Et(e,0,ue.min(),ue.min(),Xt.empty(),0)}static newFoundDocument(e,n,r){return new Et(e,1,n,ue.min(),r,0)}static newNoDocument(e,n){return new Et(e,2,n,ue.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ue.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function qR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new xi(i,Q.empty(),e)}function GR(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xi(ue.min(),Q.empty(),-1)}static max(){return new xi(ue.max(),Q.empty(),-1)}}function WR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ct.RED,this.left=i!=null?i:ct.EMPTY,this.right=s!=null?s:ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wv(this.data.getIterator())}getIteratorFrom(e){return new wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class KR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function _v(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KR(t,e,n,r,i,s,o)}function Sm(t){const e=oe(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ps(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.P=n}return e.P}function QR(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ps(r.value)}`;var r}).join(", ")}]`),Cc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ps(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ps(n)).join(",")),`Target(${e})`}function Em(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!r$(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Un(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ev(t.startAt,e.startAt)&&Ev(t.endAt,e.endAt)}function _f(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Nt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new YR(e,n,r):n==="array-contains"?new ZR(e,r):n==="in"?new e$(e,r):n==="not-in"?new t$(e,r):n==="array-contains-any"?new n$(e,r):new Nt(e,n,r)}static V(e,n,r){return n==="in"?new XR(e,r):new JR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(xs(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.v(xs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class YR extends Nt{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.v(n)}}class XR extends Nt{constructor(e,n){super(e,"in",n),this.keys=QS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JR extends Nt{constructor(e,n){super(e,"not-in",n),this.keys=QS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class ZR extends Nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _m(n)&&fa(n.arrayValue,this.value)}}class e$ extends Nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class t$ extends Nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class n$ extends Nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_m(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}class Lu{constructor(e,n){this.position=e,this.inclusive=n}}class ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function r$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Sv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ev(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function i$(t,e,n,r,i,s,o,a){return new Ks(t,e,n,r,i,s,o,a)}function km(t){return new Ks(t)}function s$(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cm(t){for(const e of t.filters)if(e.S())return e.field;return null}function YS(t){return t.collectionGroup!==null}function pa(t){const e=oe(t);if(e.D===null){e.D=[];const n=Cm(e),r=Tm(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new ms(n)),e.D.push(new ms(qt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ms(qt.keyField(),s))}}}return e.D}function bi(t){const e=oe(t);if(!e.C)if(e.limitType==="F")e.C=_v(e.path,e.collectionGroup,pa(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of pa(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ms(s.field,o))}const r=e.endAt?new Lu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lu(e.startAt.position,e.startAt.inclusive):null;e.C=_v(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function o$(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return Em(bi(t),bi(e))&&t.limitType===e.limitType}function XS(t){return`${Sm(bi(t))}|lt:${t.limitType}`}function Sf(t){return`Query(target=${QR(bi(t))}; limitType=${t.limitType})`}function Im(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Sv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,pa(n),r)||n.endAt&&!function(i,s,o){const a=Sv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,pa(n),r))}(t,e)}function a$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function JS(t){return(e,n)=>{let r=!1;for(const i of pa(t)){const s=l$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function l$(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?xs(a,l):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ou(e)?"-0":e}}function eE(t){return{integerValue:""+t}}function u$(t,e){return VR(e)?eE(e):ZS(t,e)}/**
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
 */class xc{constructor(){this._=void 0}}function c$(t,e,n){return t instanceof ma?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof bs?nE(t,e):t instanceof As?rE(t,e):function(r,i){const s=tE(r,i),o=kv(s)+kv(r.k);return wf(s)&&wf(r.k)?eE(o):ZS(r.M,o)}(t,e)}function h$(t,e,n){return t instanceof bs?nE(t,e):t instanceof As?rE(t,e):n}function tE(t,e){return t instanceof Mu?wf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ma extends xc{}class bs extends xc{constructor(e){super(),this.elements=e}}function nE(t,e){const n=iE(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class As extends xc{constructor(e){super(),this.elements=e}}function rE(t,e){let n=iE(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class Mu extends xc{constructor(e,n){super(),this.M=e,this.k=n}}function kv(t){return Ge(t.integerValue||t.doubleValue)}function iE(t){return _m(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.field=e,this.transform=n}}function d$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bs&&r instanceof bs||n instanceof As&&r instanceof As?Ts(n.elements,r.elements,Un):n instanceof Mu&&r instanceof Mu?Un(n.k,r.k):n instanceof ma&&r instanceof ma}(t.transform,e.transform)}class f${constructor(e,n){this.version=e,this.transformResults=n}}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function p$(t,e,n){t instanceof Ac?function(r,i,s){const o=r.value.clone(),a=Iv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qs?function(r,i,s){if(!zl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Iv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(sE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ef(t,e,n){t instanceof Ac?function(r,i,s){if(!zl(r.precondition,i))return;const o=r.value.clone(),a=xv(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Cv(i),o).setHasLocalMutations()}(t,e,n):t instanceof Qs?function(r,i,s){if(!zl(r.precondition,i))return;const o=xv(r.fieldTransforms,s,i),a=i.data;a.setAll(sE(r)),a.setAll(o),i.convertToFoundDocument(Cv(i),a).setHasLocalMutations()}(t,e,n):function(r,i){zl(r.precondition,i)&&i.convertToNoDocument(ue.min())}(t,e)}function m$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tE(r.transform,i||null);s!=null&&(n==null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function Tv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ts(n,r,(i,s)=>d$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Cv(t){return t.isFoundDocument()?t.version:ue.min()}class Ac extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Qs extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function sE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Iv(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,h$(o,a,n[i]))}return r}function xv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,c$(s,o,e))}return r}class oE extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class g$ extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,fe;function v$(t){switch(t){default:return ie();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function aE(t){if(t===void 0)return jr("GRPC error has no .code"),N.UNKNOWN;switch(t){case qe.OK:return N.OK;case qe.CANCELLED:return N.CANCELLED;case qe.UNKNOWN:return N.UNKNOWN;case qe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case qe.INTERNAL:return N.INTERNAL;case qe.UNAVAILABLE:return N.UNAVAILABLE;case qe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case qe.NOT_FOUND:return N.NOT_FOUND;case qe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case qe.ABORTED:return N.ABORTED;case qe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case qe.DATA_LOSS:return N.DATA_LOSS;default:return ie()}}(fe=qe||(qe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w$=new it(Q.comparator);function Ai(){return w$}const _$=new it(Q.comparator);function kf(...t){let e=_$;for(const n of t)e=e.insert(n.key,n);return e}function Gh(){return new Ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const S$=new it(Q.comparator),E$=new pt(Q.comparator);function Re(...t){let e=E$;for(const n of t)e=e.add(n);return e}const k$=new pt(we);function lE(){return k$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n)),new Rc(ue.min(),r,lE(),Ai(),Re())}}class za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new za(gt.EMPTY_BYTE_STRING,n,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class uE{constructor(e,n){this.targetId=e,this.$=n}}class cE{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bv{constructor(){this.B=0,this.L=Rv(),this.U=gt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Re(),n=Re(),r=Re();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new za(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Rv()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class T${constructor(e){this.nt=e,this.st=new Map,this.it=Ai(),this.rt=Av(),this.ot=new pt(we)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const s=i.target;if(_f(s))if(r===0){const o=new Q(s.path);this.ct(n,o,Et.newNoDocument(o,ue.min()))}else Ie(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&_f(a.target)){const l=new Q(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.ct(o,l,Et.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=Re();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new Rc(e,n,this.ot,this.it,r);return this.it=Ai(),this.rt=Av(),this.ot=new pt(we),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new bv,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new pt(we),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new bv),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Av(){return new it(Q.comparator)}function Rv(){return new it(Q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),I$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class x${constructor(e,n){this.databaseId=e,this.N=n}}function Uu(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hE(t,e){return t.N?e.toBase64():e.toUint8Array()}function b$(t,e){return Uu(t,e.toTimestamp())}function Xn(t){return Ie(!!t),ue.fromTimestamp(function(e){const n=Br(e);return new Tt(n.seconds,n.nanos)}(t))}function bm(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dE(t){const e=be.fromString(t);return Ie(mE(e)),e}function Tf(t,e){return bm(t.databaseId,e.path)}function Wh(t,e){const n=dE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(fE(n))}function Cf(t,e){return bm(t.databaseId,e)}function A$(t){const e=dE(t);return e.length===4?be.emptyPath():fE(e)}function If(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fE(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $v(t,e,n){return{name:Tf(t,e),fields:n.value.mapValue.fields}}function R$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(Ie(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:aE(l.code);return new W(u,l.message||"")}(o);n=new cE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wh(t,r.document.name),s=Xn(r.document.updateTime),o=new Xt({mapValue:{fields:r.document.fields}}),a=Et.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new jl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wh(t,r.document),s=r.readTime?Xn(r.readTime):ue.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wh(t,r.document),s=r.removedTargetIds||[];n=new jl([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new y$(i),o=r.targetId;n=new uE(o,s)}}return n}function $$(t,e){let n;if(e instanceof Ac)n={update:$v(t,e.key,e.value)};else if(e instanceof oE)n={delete:Tf(t,e.key)};else if(e instanceof Qs)n={update:$v(t,e.key,e.data),updateMask:j$(e.fieldMask)};else{if(!(e instanceof g$))return ie();n={verify:Tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ma)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof As)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mu)return{fieldPath:s.field.canonicalString(),increment:o.k};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:b$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie()}(t,e.precondition)),n}function P$(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Xn(r.updateTime):Xn(i);return s.isEqual(ue.min())&&(s=Xn(i)),new f$(s,r.transformResults||[])}(n,e))):[]}function N$(t,e){return{documents:[Cf(t,e.path)]}}function D$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(d){if(d.op==="=="){if(vv(d.value))return{unaryFilter:{field:ji(d.field),op:"IS_NAN"}};if(yv(d.value))return{unaryFilter:{field:ji(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(vv(d.value))return{unaryFilter:{field:ji(d.field),op:"IS_NOT_NAN"}};if(yv(d.value))return{unaryFilter:{field:ji(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(d.field),op:U$(d.op),value:d.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ji(c.field),direction:M$(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||Cc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function O$(t){let e=A$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=pE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new ms(is(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Cc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new Lu(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new Lu(f,d)}(n.endAt)),i$(e,i,o,s,a,"F",l,u)}function L$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pE(t){return t?t.unaryFilter!==void 0?[z$(t)]:t.fieldFilter!==void 0?[F$(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>pE(e)).reduce((e,n)=>e.concat(n)):ie():[]}function M$(t){return C$[t]}function U$(t){return I$[t]}function ji(t){return{fieldPath:t.canonicalString()}}function is(t){return qt.fromServerFormat(t.fieldPath)}function F$(t){return Nt.create(is(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function z$(t){switch(t.unaryFilter.op){case"IS_NAN":const e=is(t.unaryFilter.field);return Nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=is(t.unaryFilter.field);return Nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=is(t.unaryFilter.field);return Nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=is(t.unaryFilter.field);return Nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function j$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function ja(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&p$(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ef(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ef(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(ue.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>Tv(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>Tv(n,r))}}class Am{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=S$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Am(e,n,r,i)}}/**
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
 */class q${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ui{constructor(e,n,r,i,s=ue.min(),o=ue.min(),a=gt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G${constructor(e){this.Jt=e}}function W$(t){const e=O$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?o$(e,e.limit,"L"):e}/**
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
 */class K${constructor(){this.qe=new Q$}addToCollectionParentIndex(e,n){return this.qe.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(xi.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Q${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Rs(0)}static yn(){return new Rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==B$)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y${constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):YS(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new Q(n)).next(r=>{let i=kf();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let s=kf();return this.indexManager.getCollectionParents(e,i).next(o=>M.forEach(o,a=>{const l=function(u,c){return new Ks(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=Et.newInvalidDocument(l),i=i.insert(l,u)),Ef(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{Im(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=Re(),i=Re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rm(e,n.fromCache,r,i)}}/**
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
 */class J${constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,r,i){return this.ti(e,n).next(s=>s||this.ei(e,n,i,r)).next(s=>s||this.ni(e,n))}ti(e,n){return M.resolve(null)}ei(e,n,r,i){return s$(n)||i.isEqual(ue.min())?this.ni(e,n):this.Zs.Ks(e,r).next(s=>{const o=this.si(n,s);return this.ii(n,o,r,i)?this.ni(e,n):(dv()<=ge.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sf(n)),this.ri(e,o,n,qR(i,-1)))})}si(e,n){let r=new pt(JS(e));return n.forEach((i,s)=>{Im(e,s)&&(r=r.add(s))}),r}ii(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ni(e,n){return dv()<=ge.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Sf(n)),this.Zs.Qs(e,n,xi.min())}ri(e,n,r,i){return this.Zs.Qs(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(e,n,r,i){this.persistence=e,this.oi=n,this.M=i,this.ui=new it(we),this.ai=new Ys(s=>Sm(s),Em),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(r)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new X$(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function eP(t,e,n,r){return new Z$(t,e,n,r)}async function gE(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(s=>(i=s,n.li(e),n.Bs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.fi.Ks(r,l).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function tP(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=M.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(a,m)).next(g=>{const k=l.docVersions.get(m);Ie(k!==null),g.version.compareTo(k)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),f.next(()=>o.Bs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.fi.Ks(r,i))})}function yE(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function nP(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const a=[];e.targetChanges.forEach((u,c)=>{const d=i.get(c);if(!d)return;a.push(n.fs.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.fs.addMatchingKeys(s,u.addedDocuments,c)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?f=f.withResumeToken(gt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(c,f),function(m,g,k){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,f,u)&&a.push(n.fs.updateTargetData(s,f))});let l=Ai();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(rP(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(ue.min())){const u=n.fs.getLastRemoteSnapshotVersion(s).next(c=>n.fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return M.waitFor(a).next(()=>o.apply(s)).next(()=>n.fi.Gs(s,l)).next(()=>l)}).then(s=>(n.ui=i,s))}function rP(t,e,n){let r=Re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=Ai();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(ue.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):K("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function iP(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function sP(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.fs.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.fs.allocateTargetId(r).next(o=>(i=new ui(e,o,0,r.currentSequenceNumber),n.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ui=n.ui.insert(r.targetId,r),n.ai.set(e,r.targetId)),r})}async function xf(t,e,n){const r=oe(t),i=r.ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ja(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ui=r.ui.remove(e),r.ai.delete(i.target)}function Pv(t,e,n){const r=oe(t);let i=ue.min(),s=Re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=oe(a),d=c.ai.get(u);return d!==void 0?M.resolve(c.ui.get(d)):c.fs.getTargetData(l,u)}(r,o,bi(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.oi.Qs(o,e,n?i:ue.min(),n?s:Re())).next(a=>(oP(r,a$(e),a),{documents:a,_i:s})))}function oP(t,e,n){let r=ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ci.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return M.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var r;return this.yi.set(n.id,{id:(r=n).id,version:r.version,createTime:Xn(r.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(r){return{name:r.name,query:W$(r.bundledQuery),readTime:Xn(r.readTime)}}(n)),M.resolve()}}/**
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
 */class lP{constructor(){this.overlays=new it(Q.comparator),this.Ii=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Xt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ii.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ii.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Gh(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new it((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Gh(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Gh(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return M.resolve(a)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const o=this.Ii.get(i.largestBatchId).delete(r.key);this.Ii.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new q$(n,r));let s=this.Ii.get(n);s===void 0&&(s=Re(),this.Ii.set(n,s)),this.Ii.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.Ti=new pt(Ze.Ei),this.Ai=new pt(Ze.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Ti=this.Ti.add(r),this.Ai=this.Ai.add(r)}bi(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Pi(new Ze(e,n))}Vi(e,n){e.forEach(r=>this.removeReference(r,n))}vi(e){const n=new Q(new be([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Ai.forEachInRange([r,i],o=>{this.Pi(o),s.push(o.key)}),s}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new Q(new be([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=Re();return this.Ai.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Ti.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return Q.comparator(e.key,n.key)||we(e.Ci,n.Ci)}static Ri(e,n){return we(e.Ci,n.Ci)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new pt(Ze.Ei)}checkEmpty(e){return M.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const s=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new H$(s,n,r,i);this.Bs.push(o);for(const a of i)this.Ni=this.Ni.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Mi(r),s=i<0?0:i;return M.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return M.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.Ni.forEachInRange([r,i],o=>{const a=this.ki(o.Ci);s.push(a)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(we);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([s,o],a=>{r=r.add(a.Ci)})}),M.resolve(this.Oi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new Q(s),0);let a=new pt(we);return this.Ni.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Ci)),!0)},o),M.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(r=>{const i=this.ki(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let r=this.Ni;return M.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Ni=r})}_n(e){}containsKey(e,n){const r=new Ze(n,0),i=this.Ni.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,M.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.$i=e,this.docs=new it(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.$i(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Ai();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),M.resolve(r)}getAllFromCollection(e,n,r){let i=Ai();const s=new Q(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||WR(GR(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ie()}Bi(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hP(this)}getSize(e){return M.resolve(this.size)}}class hP extends Y${constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.persistence=e,this.Li=new Ys(n=>Sm(n),Em),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Ui=0,this.qi=new $m,this.targetCount=0,this.Ki=Rs.gn()}forEachTarget(e,n){return this.Li.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ui&&(this.Ui=n),M.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tn(n),M.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Li.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Li.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qi.bi(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qi.Vi(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qi.Di(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n){this.Gi={},this.overlays={},this.es=new wm(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new dP(this),this.indexManager=new K$,this.ds=function(r){return new cP(r)}(r=>this.referenceDelegate.Qi(r)),this.M=new G$(n),this._s=new aP(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Gi[e.toKey()];return r||(r=new uP(n,this.referenceDelegate),this.Gi[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new pP(this.es.next());return this.referenceDelegate.ji(),r(i).next(s=>this.referenceDelegate.Wi(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zi(e,n){return M.or(Object.values(this.Gi).map(r=>()=>r.containsKey(e,n)))}}class pP extends V${constructor(e){super(),this.currentSequenceNumber=e}}class Pm{constructor(e){this.persistence=e,this.Hi=new $m,this.Ji=null}static Yi(e){return new Pm(e)}get Xi(){if(this.Ji)return this.Ji;throw ie()}addReference(e,n,r){return this.Hi.addReference(r,n),this.Xi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Hi.removeReference(r,n),this.Xi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(i=>this.Xi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xi,r=>{const i=Q.fromPath(r);return this.Zi(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(r=>{r?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return M.or([()=>M.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Nv{constructor(){this.activeTargetIds=lE()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mP{constructor(){this.Ur=new Nv,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Nv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gP{Kr(e){}shutdown(){}}/**
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
 */class Dv{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ho(e,n);K("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(K("RestConnection","Received: ",l),l),l=>{throw fv("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s){return this.co(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=yP[e];return`${this.uo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new $R;a.listenOnce(bR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qh.NO_ERROR:const u=a.getResponseJson();K("Connection","XHR received:",JSON.stringify(u)),s(u);break;case qh.TIMEOUT:K("Connection",'RPC "'+e+'" timed out'),o(new W(N.DEADLINE_EXCEEDED,"Request time out"));break;case qh.HTTP_ERROR:const c=a.getStatus();if(K("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const f=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(d.status);o(new W(f,d.message))}else o(new W(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(N.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{K("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=IR(),o=xR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new RR({})),this.lo(a.initMessageHeaders,n,r),s_()||a_()||oI()||l_()||aI()||o_()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");K("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const f=new vP({Jr:g=>{d?K("Connection","Not sending because WebChannel is closed:",g):(c||(K("Connection","Opening WebChannel transport."),u.open(),c=!0),K("Connection","WebChannel sending:",g),u.send(g))},Yr:()=>u.close()}),m=(g,k,C)=>{g.listen(k,y=>{try{C(y)}catch(p){setTimeout(()=>{throw p},0)}})};return m(u,gl.EventType.OPEN,()=>{d||K("Connection","WebChannel transport opened.")}),m(u,gl.EventType.CLOSE,()=>{d||(d=!0,K("Connection","WebChannel transport closed"),f.ro())}),m(u,gl.EventType.ERROR,g=>{d||(d=!0,fv("Connection","WebChannel transport errored:",g),f.ro(new W(N.UNAVAILABLE,"The operation could not be completed")))}),m(u,gl.EventType.MESSAGE,g=>{var k;if(!d){const C=g.data[0];Ie(!!C);const y=C,p=y.error||((k=y[0])===null||k===void 0?void 0:k.error);if(p){K("Connection","WebChannel received error:",p);const _=p.status;let S=function(x){const w=qe[x];if(w!==void 0)return aE(w)}(_),v=p.message;S===void 0&&(S=N.INTERNAL,v="Unknown error status: "+_+" with message "+p.message),d=!0,f.ro(new W(S,v)),u.close()}else K("Connection","WebChannel received:",C),f.oo(C)}}),m(o,AR.STAT_EVENT,g=>{g.stat===cv.PROXY?K("Connection","Detected buffering proxy"):g.stat===cv.NOPROXY&&K("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function Kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){return new x$(t,!0)}class vE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Yn=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,r,i,s,o,a,l){this.Yn=e,this.Vo=r,this.vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new vE(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new W(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _P extends wE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.M=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=R$(this.M,e),r=function(i){if(!("targetChange"in i))return ue.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ue.min():s.readTime?Xn(s.readTime):ue.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=If(this.M),n.addTarget=function(i,s){let o;const a=s.target;return o=_f(a)?{documents:N$(i,a)}:{query:D$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=hE(i,s.resumeToken):s.snapshotVersion.compareTo(ue.min())>0&&(o.readTime=Uu(i,s.snapshotVersion.toTimestamp())),o}(this.M,e);const r=L$(this.M,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=If(this.M),n.removeTarget=e,this.Lo(n)}}class SP extends wE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.M=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=P$(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.tu(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=If(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$$(this.M,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.M=i,this.su=!1}iu(){if(this.su)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}_o(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So._o(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class kP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(jr(n),this.uu=!1):K("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.Kr(o=>{r.enqueueAndForget(async()=>{Mi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=oe(a);l.wu.add(4),await Va(l),l.yu.set("Unknown"),l.wu.delete(4),await Pc(l)}(this))})}),this.yu=new kP(r,i)}}async function Pc(t){if(Mi(t))for(const e of t.mu)await e(!0)}async function Va(t){for(const e of t.mu)await e(!1)}function _E(t,e){const n=oe(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Om(n)?Dm(n):Xs(n).Mo()&&Nm(n,e))}function SE(t,e){const n=oe(t),r=Xs(n);n._u.delete(e),r.Mo()&&EE(n,e),n._u.size===0&&(r.Mo()?r.$o():Mi(n)&&n.yu.set("Unknown"))}function Nm(t,e){t.pu.Z(e.targetId),Xs(t).Ho(e)}function EE(t,e){t.pu.Z(e),Xs(t).Jo(e)}function Dm(t){t.pu=new T$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Xs(t).start(),t.yu.au()}function Om(t){return Mi(t)&&!Xs(t).ko()&&t._u.size>0}function Mi(t){return oe(t).wu.size===0}function kE(t){t.pu=void 0}async function CP(t){t._u.forEach((e,n)=>{Nm(t,e)})}async function IP(t,e){kE(t),Om(t)?(t.yu.lu(e),Dm(t)):t.yu.set("Unknown")}async function xP(t,e,n){if(t.yu.set("Online"),e instanceof cE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fu(t,r)}else if(e instanceof jl?t.pu.ut(e):e instanceof uE?t.pu._t(e):t.pu.ht(e),!n.isEqual(ue.min()))try{const r=await yE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(gt.EMPTY_BYTE_STRING,l.snapshotVersion)),EE(i,a);const u=new ui(l.target,a,1,l.sequenceNumber);Nm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Fu(t,r)}}async function Fu(t,e,n){if(!ja(e))throw e;t.wu.add(1),await Va(t),t.yu.set("Offline"),n||(n=()=>yE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Pc(t)})}function TE(t,e){return e().catch(n=>Fu(t,n,e))}async function Nc(t){const e=oe(t),n=Vr(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;bP(e);)try{const i=await iP(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,AP(e,i)}catch(i){await Fu(e,i)}CE(e)&&IE(e)}function bP(t){return Mi(t)&&t.du.length<10}function AP(t,e){t.du.push(e);const n=Vr(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function CE(t){return Mi(t)&&!Vr(t).ko()&&t.du.length>0}function IE(t){Vr(t).start()}async function RP(t){Vr(t).nu()}async function $P(t){const e=Vr(t);for(const n of t.du)e.Zo(n.mutations)}async function PP(t,e,n){const r=t.du.shift(),i=Am.from(r,e,n);await TE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nc(t)}async function NP(t,e){e&&Vr(t).Xo&&await async function(n,r){if(i=r.code,v$(i)&&i!==N.ABORTED){const s=n.du.shift();Vr(n).Fo(),await TE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Nc(n)}var i}(t,e),CE(t)&&IE(t)}async function Ov(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Mi(n);n.wu.add(3),await Va(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Pc(n)}async function DP(t,e){const n=oe(t);e?(n.wu.delete(2),await Pc(n)):e||(n.wu.add(2),await Va(n),n.yu.set("Unknown"))}function Xs(t){return t.Iu||(t.Iu=function(e,n,r){const i=oe(e);return i.iu(),new _P(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Xr:CP.bind(null,t),eo:IP.bind(null,t),zo:xP.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Om(t)?Dm(t):t.yu.set("Unknown")):(await t.Iu.stop(),kE(t))})),t.Iu}function Vr(t){return t.Tu||(t.Tu=function(e,n,r){const i=oe(e);return i.iu(),new SP(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Xr:RP.bind(null,t),eo:NP.bind(null,t),eu:$P.bind(null,t),tu:PP.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Nc(t)):(await t.Tu.stop(),t.du.length>0&&(K("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Lm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mm(t,e){if(jr("AsyncQueue",`${e}: ${t}`),ja(t))return new W(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=kf(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.Eu=new it(Q.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):ie():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class $s{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new $s(e,n,gs.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.Ru=void 0,this.listeners=[]}}class LP{constructor(){this.queries=new Ys(e=>XS(e),Ic),this.onlineState="Unknown",this.bu=new Set}}async function xE(t,e){const n=oe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new OP),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Mm(o,`Initialization of query '${Sf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.Vu(s.Ru)&&Um(n)}async function bE(t,e){const n=oe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function MP(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Ru=i}}r&&Um(n)}function UP(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Um(t){t.bu.forEach(e=>{e.next()})}class AE{constructor(e,n,r){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e){this.key=e}}class $E{constructor(e){this.key=e}}class FP{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Re(),this.mutatedKeys=Re(),this.Gu=JS(e),this.Qu=new gs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Lv,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),m=Im(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;f&&m?f.data.isEqual(m.data)?g!==k&&(r.track({type:3,doc:m}),C=!0):this.Hu(f,m)||(r.track({type:2,doc:m}),C=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),C=!0):f&&!m&&(r.track({type:1,doc:f}),C=!0,(l||u)&&(a=!0)),C&&(m?(o=o.add(m),s=k?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,ii:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(d,f){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return m(d)-m(f)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new $s(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Lv,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Re(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new $E(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new RE(r))}),n}ta(e){this.Uu=e._i,this.Ku=Re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return $s.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class zP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jP{constructor(e){this.key=e,this.na=!1}}class BP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new Ys(a=>XS(a),Ic),this.ra=new Map,this.oa=new Set,this.ua=new it(Q.comparator),this.aa=new Map,this.ca=new $m,this.ha={},this.la=new Map,this.fa=Rs.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function VP(t,e){const n=ZP(t);let r,i;const s=n.ia.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const o=await sP(n.localStore,bi(e));n.isPrimaryClient&&_E(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await HP(n,e,r,a==="current")}return i}async function HP(t,e,n,r){t._a=(c,d,f)=>async function(m,g,k,C){let y=g.view.Wu(k);y.ii&&(y=await Pv(m.localStore,g.query,!1).then(({documents:S})=>g.view.Wu(S,y)));const p=C&&C.targetChanges.get(g.targetId),_=g.view.applyChanges(y,m.isPrimaryClient,p);return Uv(m,g.targetId,_.Xu),_.snapshot}(t,c,d,f);const i=await Pv(t.localStore,e,!0),s=new FP(e,i._i),o=s.Wu(i.documents),a=za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Uv(t,n,l.Xu);const u=new zP(e,n,s);return t.ia.set(e,u),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),l.snapshot}async function qP(t,e){const n=oe(t),r=n.ia.get(e),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter(s=>!Ic(s,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),SE(n.remoteStore,r.targetId),bf(n,r.targetId)}).catch(Ba)):(bf(n,r.targetId),await xf(n.localStore,r.targetId,!0))}async function GP(t,e,n){const r=eN(t);try{const i=await function(s,o){const a=oe(s),l=Tt.now(),u=o.reduce((d,f)=>d.add(f.key),Re());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>a.fi.Ks(d,u).next(f=>{c=f;const m=[];for(const g of o){const k=m$(g,c.get(g.key));k!=null&&m.push(new Qs(g.key,k,KS(k.value.mapValue),Yn.exists(!0)))}return a.Bs.addMutationBatch(d,l,m,o)})).then(d=>(d.applyToLocalDocumentSet(c),{batchId:d.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ha[s.currentUser.toKey()];l||(l=new it(we)),l=l.insert(o,a),s.ha[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ha(r,i.changes),await Nc(r.remoteStore)}catch(i){const s=Mm(i,"Failed to persist write");n.reject(s)}}async function PE(t,e){const n=oe(t);try{const r=await nP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.aa.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.na=!0:i.modifiedDocuments.size>0?Ie(o.na):i.removedDocuments.size>0&&(Ie(o.na),o.na=!1))}),await Ha(n,r,e)}catch(r){await Ba(r)}}function Mv(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ia.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=oe(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Pu(o)&&(l=!0)}),l&&Um(a)}(r.eventManager,e),i.length&&r.sa.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WP(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.aa.get(e),s=i&&i.key;if(s){let o=new it(Q.comparator);o=o.insert(s,Et.newNoDocument(s,ue.min()));const a=Re().add(s),l=new Rc(ue.min(),new Map,new pt(we),o,a);await PE(r,l),r.ua=r.ua.remove(s),r.aa.delete(e),Fm(r)}else await xf(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(Ba)}async function KP(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await tP(n.localStore,e);DE(n,r,null),NE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ha(n,i)}catch(i){await Ba(i)}}async function QP(t,e,n){const r=oe(t);try{const i=await function(s,o){const a=oe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.Bs.lookupMutationBatch(l,o).next(c=>(Ie(c!==null),u=c.keys(),a.Bs.removeMutationBatch(l,c))).next(()=>a.Bs.performConsistencyCheck(l)).next(()=>a.fi.Ks(l,u))})}(r.localStore,e);DE(r,e,n),NE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ha(r,i)}catch(i){await Ba(i)}}function NE(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function DE(t,e,n){const r=oe(t);let i=r.ha[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ha[r.currentUser.toKey()]=i}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ra.get(e))t.ia.delete(r),n&&t.sa.wa(r,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(r=>{t.ca.containsKey(r)||OE(t,r)})}function OE(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(SE(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),Fm(t))}function Uv(t,e,n){for(const r of n)r instanceof RE?(t.ca.addReference(r.key,e),YP(t,r)):r instanceof $E?(K("SyncEngine","Document no longer in limbo: "+r.key),t.ca.removeReference(r.key,e),t.ca.containsKey(r.key)||OE(t,r.key)):ie()}function YP(t,e){const n=e.key,r=n.path.canonicalString();t.ua.get(n)||t.oa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.oa.add(r),Fm(t))}function Fm(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new Q(be.fromString(e)),r=t.fa.next();t.aa.set(r,new jP(n)),t.ua=t.ua.insert(n,r),_E(t.remoteStore,new ui(bi(km(n.path)),r,2,wm.A))}}async function Ha(t,e,n){const r=oe(t),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach((a,l)=>{o.push(r._a(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Rm.Ys(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sa.zo(i),await async function(a,l){const u=oe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>M.forEach(l,d=>M.forEach(d.Hs,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>M.forEach(d.Js,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!ja(c))throw c;K("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.ui.get(d),m=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(m);u.ui=u.ui.insert(d,g)}}}(r.localStore,s))}async function XP(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await gE(n.localStore,e);n.currentUser=e,function(i,s){i.la.forEach(o=>{o.forEach(a=>{a.reject(new W(N.CANCELLED,s))})}),i.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ha(n,r.di)}}function JP(t,e){const n=oe(t),r=n.aa.get(e);if(r&&r.na)return Re().add(r.key);{let i=Re();const s=n.ra.get(e);if(!s)return i;for(const o of s){const a=n.ia.get(o);i=i.unionWith(a.view.ju)}return i}}function ZP(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WP.bind(null,e),e.sa.zo=MP.bind(null,e.eventManager),e.sa.wa=UP.bind(null,e.eventManager),e}function eN(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QP.bind(null,e),e}class tN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=$c(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return eP(this.persistence,new J$,e.initialUser,this.M)}ya(e){return new fP(Pm.Yi,this.M)}ga(e){return new mP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XP.bind(null,this.syncEngine),await DP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LP}createDatastore(e){const n=$c(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new wP(i));var i;return function(s,o,a,l){return new EP(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Mv(this.syncEngine,a,0),o=Dv.vt()?new Dv:new gP,new TP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new BP(r,i,s,o,a,l);return u&&(c.da=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);K("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Va(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class LE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=jt.UNAUTHENTICATED,this.clientId=HS.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{K("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(K("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function iN(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function sN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oN(t);K("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ov(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ov(e.remoteStore,s)),t.onlineComponents=e}async function oN(t){return t.offlineComponents||(K("FirestoreClient","Using default OfflineComponentProvider"),await iN(t,new tN)),t.offlineComponents}async function ME(t){return t.onlineComponents||(K("FirestoreClient","Using default OnlineComponentProvider"),await sN(t,new nN)),t.onlineComponents}function aN(t){return ME(t).then(e=>e.syncEngine)}async function Af(t){const e=await ME(t),n=e.eventManager;return n.onListen=VP.bind(null,e.syncEngine),n.onUnlisten=qP.bind(null,e.syncEngine),n}function lN(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new LE({next:d=>{s.enqueueAndForget(()=>bE(i,c)),d.fromCache&&a.source==="server"?l.reject(new W(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new AE(o,u,{includeMetadataChanges:!0,ku:!0});return xE(i,c)}(await Af(t),t.asyncQueue,e,n,r)),r.promise}const Fv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e,n){if(!n)throw new W(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uN(t,e,n,r){if(e===!0&&r===!0)throw new W(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zv(t){if(!Q.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jv(t){if(Q.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dc(t);throw new W(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bv({}),this._settingsFrozen=!1,e instanceof Is?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(i.options.projectId)}(e))}get app(){if(!this._app)throw new W(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new NR;switch(n.type){case"gapi":const r=n.client;return Ie(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new LR(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fv.get(e);n&&(K("ComponentProvider","Removing Datastore"),Fv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Ui{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class Nr extends Ui{constructor(e,n,r){super(e,n,km(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Q(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function Dr(t,e,...n){if(t=$e(t),UE("collection","path",e),t instanceof zm){const r=be.fromString(e,...n);return jv(r),new Nr(t,null,r)}{if(!(t instanceof Ot||t instanceof Nr))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return jv(r),new Nr(t.firestore,null,r)}}function de(t,e,...n){if(t=$e(t),arguments.length===1&&(e=HS.R()),UE("doc","path",e),t instanceof zm){const r=be.fromString(e,...n);return zv(r),new Ot(t,null,new Q(r))}{if(!(t instanceof Ot||t instanceof Nr))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return zv(r),new Ot(t.firestore,t instanceof Nr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new vE(this,"async_queue_retry"),this.Qa=()=>{const n=Kh();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Kh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Pr;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!ja(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(r=>{this.Ua=r,this.qa=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.qa=!1,r))));return this.Fa=n,n}enqueueAfterDelay(e,n,r){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const i=Lm.createAndSchedule(this,e,n,r,s=>this.Ha(s));return this.La.push(i),i}ja(){this.Ua&&ie()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}function Vv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Hr extends zm{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new cN,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||FE(this),this._firestoreClient.terminate()}}function hN(t=Up()){return ac(t,"firestore").getImmediate()}function jm(t){return t._firestoreClient||FE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function FE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new BR(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new rN(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(gt.fromBase64String(e))}catch(n){throw new W(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=/^__.*__$/;class fN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ac(e,this.data,n,this.fieldTransforms)}}class zE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Lc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nc({path:r,ic:!1});return i.rc(e),i}oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nc({path:r,ic:!1});return i.tc(),i}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return zu(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(jE(this.ec)&&dN.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class pN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||$c(e)}lc(e,n,r,i=!1){return new Lc({ec:e,methodName:n,hc:r,path:qt.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=$c(t._databaseId);return new pN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BE(t,e,n,r,i,s={}){const o=t.lc(s.merge||s.mergeFields?2:0,e,n,i);Hm("Data must be an object, but it was:",o,r);const a=HE(r,o);let l,u;if(s.merge)l=new ha(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Rf(e,d,n);if(!o.contains(f))throw new W(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);GE(c,f)||c.push(f)}l=new ha(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new fN(new Xt(a),l,u)}class Uc extends Js{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}function VE(t,e,n){return new Lc({ec:3,hc:e.settings.hc,methodName:t._methodName,ic:n},e.databaseId,e.M,e.ignoreUndefinedProperties)}class Vm extends Js{_toFieldTransform(e){return new xm(e.path,new ma)}isEqual(e){return e instanceof Vm}}class mN extends Js{constructor(e,n){super(e),this.fc=n}_toFieldTransform(e){const n=VE(this,e,!0),r=this.fc.map(s=>Fi(s,n)),i=new bs(r);return new xm(e.path,i)}isEqual(e){return this===e}}class gN extends Js{constructor(e,n){super(e),this.fc=n}_toFieldTransform(e){const n=VE(this,e,!0),r=this.fc.map(s=>Fi(s,n)),i=new As(r);return new xm(e.path,i)}isEqual(e){return this===e}}function yN(t,e,n,r){const i=t.lc(1,e,n);Hm("Data must be an object, but it was:",i,r);const s=[],o=Xt.empty();Li(r,(l,u)=>{const c=qm(e,l,n);u=$e(u);const d=i.oc(c);if(u instanceof Uc)s.push(c);else{const f=Fi(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new ha(s);return new zE(o,a,i.fieldTransforms)}function vN(t,e,n,r,i,s){const o=t.lc(1,e,n),a=[Rf(e,r,n)],l=[i];if(s.length%2!=0)throw new W(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Rf(e,s[f])),l.push(s[f+1]);const u=[],c=Xt.empty();for(let f=a.length-1;f>=0;--f)if(!GE(u,a[f])){const m=a[f];let g=l[f];g=$e(g);const k=o.oc(m);if(g instanceof Uc)u.push(m);else{const C=Fi(g,k);C!=null&&(u.push(m),c.set(m,C))}}const d=new ha(u);return new zE(c,d,o.fieldTransforms)}function wN(t,e,n,r=!1){return Fi(n,t.lc(r?4:3,e))}function Fi(t,e){if(qE(t=$e(t)))return Hm("Unsupported field value:",e,t),HE(t,e);if(t instanceof Js)return function(n,r){if(!jE(r.ec))throw r.ac(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ac(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Fi(o,r.uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return u$(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Tt.fromDate(n);return{timestampValue:Uu(r.M,i)}}if(n instanceof Tt){const i=new Tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uu(r.M,i)}}if(n instanceof Bm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ps)return{bytesValue:hE(r.M,n._byteString)};if(n instanceof Ot){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ac(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ac(`Unsupported field value: ${Dc(n)}`)}(t,e)}function HE(t,e){const n={};return qS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(t,(r,i)=>{const s=Fi(i,e.sc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof Bm||t instanceof Ps||t instanceof Ot||t instanceof Js)}function Hm(t,e,n){if(!qE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Dc(n);throw r==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+r)}}function Rf(t,e,n){if((e=$e(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return qm(t,e);throw zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const _N=new RegExp("[~\\*/\\[\\]]");function qm(t,e,n){if(e.search(_N)>=0)throw zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oc(...e.split("."))._internalPath}catch{throw zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(N.INVALID_ARGUMENT,a+t+l)}function GE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SN extends WE{data(){return super.data()}}function Fc(t,e){return typeof e=="string"?qm(t,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KE extends WE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends KE{data(e={}){return super.data(e)}}class QE{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ko(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ko(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:EN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class XE{}function ci(t,...e){for(const n of e)t=n._apply(t);return t}class kN extends XE{constructor(e,n,r){super(),this._c=e,this.wc=n,this.mc=r,this.type="where"}_apply(e){const n=Mc(e.firestore),r=function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new W(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Gv(c,u);const m=[];for(const g of c)m.push(qv(a,i,g));d={arrayValue:{values:m}}}else d=qv(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Gv(c,u),d=wN(o,s,c,u==="in"||u==="not-in");const f=Nt.create(l,u,d);return function(m,g){if(g.S()){const C=Cm(m);if(C!==null&&!C.isEqual(g.field))throw new W(N.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${g.field.toString()}'`);const y=Tm(m);y!==null&&JE(m,g.field,y)}const k=function(C,y){for(const p of C.filters)if(y.indexOf(p.op)>=0)return p.op;return null}(m,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(k!==null)throw k===g.op?new W(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new W(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${k.toString()}' filters.`)}(i,f),f}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new Ui(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Ks(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function fr(t,e,n){const r=e,i=Fc("where",t);return new kN(i,r,n)}class TN extends XE{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new W(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new W(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ms(i,s);return function(a,l){if(Tm(a)===null){const u=Cm(a);u!==null&&JE(a,u,l.field)}}(r,o),o}(e._query,this._c,this.gc);return new Ui(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ks(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Hv(t,e="asc"){const n=e,r=Fc("orderBy",t);return new TN(r,n)}function qv(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new W(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!YS(e)&&n.indexOf("/")!==-1)throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!Q.isDocumentKey(r))throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gv(t,new Q(r))}if(n instanceof Ot)return gv(t,n._key);throw new W(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(n)}.`)}function Gv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new W(N.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function JE(t,e,n){if(!n.isEqual(e))throw new W(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const r={};return Li(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Bm(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=WS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Ie(mE(r));const i=new Is(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||jr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Gm extends CN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Vl(t){t=Sn(t,Ui);const e=Sn(t.firestore,Hr),n=jm(e),r=new Gm(e);return YE(t._query),lN(n,t._query).then(i=>new QE(e,r,t,i))}function IN(t,e,n){t=Sn(t,Ot);const r=Sn(t.firestore,Hr),i=ZE(t.converter,e,n);return zc(r,[BE(Mc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yn.none())])}function X(t,e,n,...r){t=Sn(t,Ot);const i=Sn(t.firestore,Hr),s=Mc(i);let o;return o=typeof(e=$e(e))=="string"||e instanceof Oc?vN(s,"updateDoc",t._key,e,n,r):yN(s,"updateDoc",t._key,e),zc(i,[o.toMutation(t._key,Yn.exists(!0))])}function xN(t){return zc(Sn(t.firestore,Hr),[new oE(t._key,Yn.none())])}function Wm(t,e){const n=Sn(t.firestore,Hr),r=de(t),i=ZE(t.converter,e);return zc(n,[BE(Mc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yn.exists(!1))]).then(()=>r)}function ek(t,...e){var n,r,i;t=$e(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vv(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Ot)u=Sn(t.firestore,Hr),c=km(t._key.path),l={next:d=>{e[o]&&e[o](bN(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Sn(t,Ui);u=Sn(d.firestore,Hr),c=d._query;const f=new Gm(u);l={next:m=>{e[o]&&e[o](new QE(u,f,d,m))},error:e[o+1],complete:e[o+2]},YE(t._query)}return function(d,f,m,g){const k=new LE(g),C=new AE(f,k,m);return d.asyncQueue.enqueueAndForget(async()=>xE(await Af(d),C)),()=>{k.Aa(),d.asyncQueue.enqueueAndForget(async()=>bE(await Af(d),C))}}(jm(u),c,a,l)}function zc(t,e){return function(n,r){const i=new Pr;return n.asyncQueue.enqueueAndForget(async()=>GP(await aN(n),r,i)),i.promise}(jm(t),e)}function bN(t,e,n){const r=n.docs.get(e._key),i=new Gm(t);return new KE(t,i,e._key,r,new ko(n.hasPendingWrites,n.fromCache),e.converter)}function tk(){return new Vm("serverTimestamp")}function Lt(...t){return new mN("arrayUnion",t)}function ze(...t){return new gN("arrayRemove",t)}(function(t,e=!0){(function(n){Ws=n})(js),vi(new zr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Hr(i,new DR(n.getProvider("auth-internal")),new UR(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),On(hv,"3.4.9",t),On(hv,"3.4.9","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="firebasestorage.googleapis.com",rk="storageBucket",AN=2*60*1e3,RN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Kr{constructor(e,n){super(Qh(e),`Firebase Storage: ${n} (${Qh(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}_codeEquals(e){return Qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qh(t){return"storage/"+t}function Km(){const t="An unknown error occurred, please check the error payload for server response.";return new je("unknown",t)}function $N(t){return new je("object-not-found","Object '"+t+"' does not exist.")}function PN(t){return new je("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je("unauthenticated",t)}function DN(){return new je("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function ON(t){return new je("unauthorized","User does not have permission to access '"+t+"'.")}function LN(){return new je("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ik(){return new je("canceled","User canceled the upload/download.")}function MN(t){return new je("invalid-url","Invalid URL '"+t+"'.")}function UN(t){return new je("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function FN(){return new je("no-default-bucket","No default bucket found. Did you set the '"+rk+"' property when initializing the app?")}function sk(){return new je("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function zN(){return new je("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function jN(){return new je("no-download-url","The given file does not have any download URLs.")}function $f(t){return new je("invalid-argument",t)}function ok(){return new je("app-deleted","The Firebase app was deleted.")}function BN(t){return new je("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mo(t,e){return new je("invalid-format","String does not match format '"+t+"': "+e)}function fo(t){throw new je("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Jt.makeFromUrl(e,n)}catch{return new Jt(e,"")}if(r.path==="")return r;throw UN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},k=n===nk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",y=new RegExp(`^https?://${k}/${i}/${C}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:m,indices:g,postModify:u},{regex:y,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<_.length;S++){const v=_[S],x=v.regex.exec(e);if(x){const w=x[v.indices.bucket];let b=x[v.indices.path];b||(b=""),r=new Jt(w,b),v.postModify(r);break}}if(r==null)throw MN(e);return r}}class VN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...C){u||(u=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(m,l())},C)}function f(){s&&clearTimeout(s)}function m(C,...y){if(u){f();return}if(C){f(),c.call(null,C,...y);return}if(l()||o){f(),c.call(null,C,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let g=!1;function k(C){g||(g=!0,f(),!u&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function qN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){return t!==void 0}function WN(t){return typeof t=="function"}function KN(t){return typeof t=="object"&&!Array.isArray(t)}function jc(t){return typeof t=="string"||t instanceof String}function Wv(t){return Qm()&&t instanceof Blob}function Qm(){return typeof Blob<"u"}function Kv(t,e,n,r){if(r<e)throw $f(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $f(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ak(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hi||(hi={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i,s,o,a,l,u,c,d){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===hi.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===hi.ABORT;r(!1,new wl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new wl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());GN(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Km();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ok():ik();o(l)}else{const l=LN();o(l)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=HN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function YN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function JN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eD(t,e,n,r,i,s){const o=ak(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return JN(l,e),YN(l,n),XN(l,s),ZN(l,r),new QN(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nD(...t){const e=tD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qm())return new Blob(t);throw new je("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function rD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function iD(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yh{constructor(e,n){this.data=e,this.contentType=n||null}}function sD(t,e){switch(t){case $n.RAW:return new Yh(lk(e));case $n.BASE64:case $n.BASE64URL:return new Yh(uk(t,e));case $n.DATA_URL:return new Yh(aD(e),lD(e))}throw Km()}function lk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oD(t){let e;try{e=decodeURIComponent(t)}catch{throw Mo($n.DATA_URL,"Malformed data URL.")}return lk(e)}function uk(t,e){switch(t){case $n.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Mo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case $n.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Mo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iD(e)}catch{throw Mo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ck{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Mo($n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aD(t){const e=new ck(t);return e.base64?uk($n.BASE64,e.rest):oD(e.rest)}function lD(t){return new ck(t).contentType}function uD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n){let r=0,i="";Wv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Wv(this.data_)){const r=this.data_,i=rD(r,e,n);return i===null?null:new _r(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _r(r,!0)}}static getBlob(...e){if(Qm()){const n=e.map(r=>r instanceof _r?r.data_:r);return new _r(nD.apply(null,n))}else{const n=e.map(o=>jc(o)?sD($n.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new _r(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){let e;try{e=JSON.parse(t)}catch{return null}return KN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function dk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dD}}let _l=null;function fD(t){return!jc(t)||t.length<2?t:dk(t)}function fk(){if(_l)return _l;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return fD(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),_l=t,_l}function pD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pD(r,t),r}function pk(t,e,n){const r=hk(e);return r===null?null:mD(t,r,n)}function gD(t,e,n,r){const i=hk(e);if(i===null||!jc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),m=qa(f,n,r),g=ak({alt:"media",token:u});return m+g})[0]}function mk(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Zs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){if(!t)throw Km()}function Ym(t,e){function n(r,i){const s=pk(t,i,e);return Jn(s!==null),s}return n}function yD(t,e){function n(r,i){const s=pk(t,i,e);return Jn(s!==null),gD(s,i,t.host,t._protocol)}return n}function Ga(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DN():i=NN():n.getStatus()===402?i=PN(t.bucket):n.getStatus()===403?i=ON(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function gk(t){const e=Ga(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=$N(t.path)),s.serverResponse=i.serverResponse,s}return n}function vD(t,e,n){const r=e.fullServerUrl(),i=qa(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zs(i,s,Ym(t,n),o);return a.errorHandler=gk(e),a}function wD(t,e,n){const r=e.fullServerUrl(),i=qa(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Zs(i,s,yD(t,n),o);return a.errorHandler=gk(e),a}function _D(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_D(null,e)),r}function SD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let S=0;S<2;S++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=yk(e,r,i),c=mk(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=_r.getBlob(d,r,f);if(m===null)throw sk();const g={name:u.fullPath},k=qa(s,t.host,t._protocol),C="POST",y=t.maxUploadRetryTime,p=new Zs(k,C,Ym(t,n),y);return p.urlParams=g,p.headers=o,p.body=m.uploadData(),p.errorHandler=Ga(e),p}class ju{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Xm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Jn(!1)}return Jn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function ED(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=yk(e,r,i),a={name:o.fullPath},l=qa(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=mk(o,n),f=t.maxUploadRetryTime;function m(k){Xm(k);let C;try{C=k.getResponseHeader("X-Goog-Upload-URL")}catch{Jn(!1)}return Jn(jc(C)),C}const g=new Zs(l,u,m,f);return g.urlParams=a,g.headers=c,g.body=d,g.errorHandler=Ga(e),g}function kD(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Xm(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Jn(!1)}d||Jn(!1);const f=Number(d);return Jn(!isNaN(f)),new ju(f,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Zs(n,o,s,a);return l.headers=i,l.errorHandler=Ga(e),l}const Qv=256*1024;function TD(t,e,n,r,i,s,o,a){const l=new ju(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw zN();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,f=d+c,g={"X-Goog-Upload-Command":c===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},k=r.slice(d,f);if(k===null)throw sk();function C(S,v){const x=Xm(S,["active","final"]),w=l.current+c,b=r.size();let U;return x==="final"?U=Ym(e,s)(S,v):U=null,new ju(w,b,x==="final",U)}const y="POST",p=e.maxUploadRetryTime,_=new Zs(n,y,C,p);return _.headers=g,_.body=k.uploadData(),_.progressCallback=a||null,_.errorHandler=Ga(t),_}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xh(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n,r){if(WN(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ID{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw fo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xD extends ID{initXhr(){this.xhr_.responseType="text"}}function Vi(){return new xD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=fk(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=ED(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=kD(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Vi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Qv*this._chunkMultiplier,n=new ju(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=TD(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vi,i,s);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Qv*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=vD(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Vi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=SD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ik(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new CD(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Xh(this._state)){case Bt.SUCCESS:Bi(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;Bi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Xh(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&Bi(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&Bi(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&Bi(e.error.bind(e,this._error))();break;default:e.error&&Bi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ri{constructor(e,n){this._service=e,n instanceof Jt?this._location=n:this._location=Jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new Jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dk(this._location.path)}get storage(){return this._service}get parent(){const e=cD(this._location.path);if(e===null)return null;const n=new Jt(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BN(e)}}function AD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new bD(t,new _r(e),n)}function RD(t){t._throwIfRoot("getDownloadURL");const e=wD(t.storage,t._location,fk());return t.storage.makeRequestWithTokens(e,Vi).then(n=>{if(n===null)throw jN();return n})}function $D(t,e){const n=hD(t._location.path,e),r=new Jt(t._location.bucket,n);return new Ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t){return/^[A-Za-z]+:\/\//.test(t)}function ND(t,e){return new Ri(t,e)}function vk(t,e){if(t instanceof Jm){const n=t;if(n._bucket==null)throw FN();const r=new Ri(n,n._bucket);return e!=null?vk(r,e):r}else return e!==void 0?$D(t,e):t}function DD(t,e){if(e&&PD(e)){if(t instanceof Jm)return ND(t,e);throw $f("To use ref(service, url), the first argument must be a Storage instance.")}else return vk(t,e)}function Yv(t,e){const n=e==null?void 0:e[rk];return n==null?null:Jt.makeFromBucketSpec(n,t)}class Jm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AN,this._maxUploadRetryTime=RN,this._requests=new Set,i!=null?this._bucket=Jt.makeFromBucketSpec(i,this._host):this._bucket=Yv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Jt.makeFromBucketSpec(this._url,e):this._bucket=Yv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new VN(ok());{const s=eD(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xv="@firebase/storage",Jv="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="storage";function OD(t,e,n){return t=$e(t),AD(t,e,n)}function Zm(t){return t=$e(t),RD(t)}function eg(t,e){return t=$e(t),DD(t,e)}function LD(t=Up(),e){return t=$e(t),ac(t,wk).getImmediate({identifier:e})}function MD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Jm(n,r,i,e,js)}function UD(){vi(new zr(wk,MD,"PUBLIC").setMultipleInstances(!0)),On(Xv,Jv,""),On(Xv,Jv,"esm2017")}UD();const FD={apiKey:"AIzaSyBkxiwyQQiG1vf5qc4M88yiATNB9dw80No",authDomain:"school-forum-e6228.firebaseapp.com",projectId:"school-forum-e6228",storageBucket:"school-forum-e6228.appspot.com",messagingSenderId:"14878543173",appId:"1:14878543173:web:d94be52652f16a3882422c"};fx(FD);const P=kA(),se=hN(),tg=LD();tk();var Bc={exports:{}},Vc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zD=A.exports,jD=Symbol.for("react.element"),BD=Symbol.for("react.fragment"),VD=Object.prototype.hasOwnProperty,HD=zD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qD={key:!0,ref:!0,__self:!0,__source:!0};function _k(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VD.call(e,r)&&!qD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jD,type:t,key:s,ref:o,props:i,_owner:HD.current}}Vc.Fragment=BD;Vc.jsx=_k;Vc.jsxs=_k;(function(t){t.exports=Vc})(Bc);const wn=Bc.exports.Fragment,h=Bc.exports.jsx,E=Bc.exports.jsxs,Sk=A.exports.createContext(),GD=(t,e)=>{switch(e.type){case"READY_AUTH":return{...t,isAuthReady:!0,user:e.payload};case"LOGIN":return{...t,user:e.payload};case"LOGOUT":return{...t,user:null};default:return t}},WD=({children:t})=>{const[e,n]=A.exports.useReducer(GD,{isAuthReady:!1,user:null,loading:!1});return A.exports.useEffect(()=>{cb(P,i=>{n({type:"READY_AUTH",payload:i})})()},[]),h(Sk.Provider,{value:{...e,dispatch:n},children:t})},xn=()=>{const t=A.exports.useContext(Sk);if(!t)throw Error("useAuthContext must be inside AuthContextProvider");return t},KD=()=>{const[t,e]=A.exports.useState(null),[n,r]=A.exports.useState(!1),{dispatch:i}=xn();return{login:async(o,a)=>{e(null),r(!0);try{const l=await sb(P,o,a);if(!l)throw new Error("could not complete log in");const u=de(se,"users",l.user.uid);await X(u,{online:!0}),i({type:"LOGIN",payload:l.user}),r(!1),e(null)}catch(l){e(l.message),r(!1)}},isPending:n,error:t}},Fn=()=>h(A.exports.Fragment,{children:h("span",{children:"Loading..."})});let QD={data:""},YD=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||QD,XD=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,JD=/\/\*[^]*?\*\/|  +/g,Zv=/\n+/g,Sr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Sr(o,s):s+"{"+Sr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Sr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Sr.p?Sr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},po={},Ek=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+Ek(t[n]);return e}return t},ZD=(t,e,n,r,i)=>{let s=Ek(t),o=po[s]||(po[s]=(a=>{let l=0,u=11;for(;l<a.length;)u=101*u+a.charCodeAt(l++)>>>0;return"go"+u})(s));if(!po[o]){let a=s!==t?t:(l=>{let u,c,d=[{}];for(;u=XD.exec(l.replace(JD,""));)u[4]?d.shift():u[3]?(c=u[3].replace(Zv," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][u[1]]=u[2].replace(Zv," ").trim();return d[0]})(t);po[o]=Sr(i?{["@keyframes "+o]:a}:a,n?"":"."+o)}return((a,l,u)=>{l.data.indexOf(a)==-1&&(l.data=u?a+l.data:l.data+a)})(po[o],e,r),o},e3=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Sr(a,""):a===!1?"":a}return r+i+(o==null?"":o)},"");function Hc(t){let e=this||{},n=t.call?t(e.p):t;return ZD(n.unshift?n.raw?e3(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,YD(e.target),e.g,e.o,e.k)}let kk,Pf,Nf;Hc.bind({g:1});let ir=Hc.bind({k:1});function t3(t,e,n,r){Sr.p=e,kk=t,Pf=n,Nf=r}function Xr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:Pf&&Pf()},a),n.o=/ *go\d+/.test(l),a.className=Hc.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),Nf&&u[0]&&Nf(a),kk(u,a)}return e?e(i):i}}function Ue(){return Ue=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ue.apply(this,arguments)}function It(t,e){return e||(e=t.slice(0)),t.raw=e,t}var n3=function(e){return typeof e=="function"},Bu=function(e,n){return n3(e)?e(n):e},r3=function(){var t=0;return function(){return(++t).toString()}}(),i3=function(e){return function(n){n&&setTimeout(function(){var r=n.getBoundingClientRect();e(r)})}},Tk=function(){var t=void 0;return function(){if(t===void 0&&typeof window<"u"){var e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}}(),s3=20,et;(function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"})(et||(et={}));var Hl=new Map,e0=function(e){if(!Hl.has(e)){var n=setTimeout(function(){Hl.delete(e),di({type:et.REMOVE_TOAST,toastId:e})},1e3);Hl.set(e,n)}},o3=function(e){var n=Hl.get(e);n&&clearTimeout(n)},a3=function t(e,n){switch(n.type){case et.ADD_TOAST:return Ue({},e,{toasts:[n.toast].concat(e.toasts).slice(0,s3)});case et.UPDATE_TOAST:return n.toast.id&&o3(n.toast.id),Ue({},e,{toasts:e.toasts.map(function(o){return o.id===n.toast.id?Ue({},o,n.toast):o})});case et.UPSERT_TOAST:var r=n.toast;return e.toasts.find(function(o){return o.id===r.id})?t(e,{type:et.UPDATE_TOAST,toast:r}):t(e,{type:et.ADD_TOAST,toast:r});case et.DISMISS_TOAST:var i=n.toastId;return i?e0(i):e.toasts.forEach(function(o){e0(o.id)}),Ue({},e,{toasts:e.toasts.map(function(o){return o.id===i||i===void 0?Ue({},o,{visible:!1}):o})});case et.REMOVE_TOAST:return n.toastId===void 0?Ue({},e,{toasts:[]}):Ue({},e,{toasts:e.toasts.filter(function(o){return o.id!==n.toastId})});case et.START_PAUSE:return Ue({},e,{pausedAt:n.time});case et.END_PAUSE:var s=n.time-(e.pausedAt||0);return Ue({},e,{pausedAt:void 0,toasts:e.toasts.map(function(o){return Ue({},o,{pauseDuration:o.pauseDuration+s})})})}},ql=[],Gl={toasts:[],pausedAt:void 0},di=function(e){Gl=a3(Gl,e),ql.forEach(function(n){n(Gl)})},l3={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},u3=function(e){e===void 0&&(e={});var n=A.exports.useState(Gl),r=n[0],i=n[1];A.exports.useEffect(function(){return ql.push(i),function(){var o=ql.indexOf(i);o>-1&&ql.splice(o,1)}},[r]);var s=r.toasts.map(function(o){var a,l,u;return Ue({},e,e[o.type],o,{duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||((l=e)==null?void 0:l.duration)||l3[o.type],style:Ue({},e.style,(u=e[o.type])==null?void 0:u.style,o.style)})});return Ue({},r,{toasts:s})},c3=function(e,n,r){return n===void 0&&(n="blank"),Ue({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0},r,{id:(r==null?void 0:r.id)||r3()})},Wa=function(e){return function(n,r){var i=c3(n,e,r);return di({type:et.UPSERT_TOAST,toast:i}),i.id}},ke=function(e,n){return Wa("blank")(e,n)};ke.error=Wa("error");ke.success=Wa("success");ke.loading=Wa("loading");ke.custom=Wa("custom");ke.dismiss=function(t){di({type:et.DISMISS_TOAST,toastId:t})};ke.remove=function(t){return di({type:et.REMOVE_TOAST,toastId:t})};ke.promise=function(t,e,n){var r=ke.loading(e.loading,Ue({},n,n==null?void 0:n.loading));return t.then(function(i){return ke.success(Bu(e.success,i),Ue({id:r},n,n==null?void 0:n.success)),i}).catch(function(i){ke.error(Bu(e.error,i),Ue({id:r},n,n==null?void 0:n.error))}),t};var h3=function(e){var n=u3(e),r=n.toasts,i=n.pausedAt;A.exports.useEffect(function(){if(!i){var o=Date.now(),a=r.map(function(l){if(l.duration!==1/0){var u=(l.duration||0)+l.pauseDuration-(o-l.createdAt);if(u<0){l.visible&&ke.dismiss(l.id);return}return setTimeout(function(){return ke.dismiss(l.id)},u)}});return function(){a.forEach(function(l){return l&&clearTimeout(l)})}}},[r,i]);var s=A.exports.useMemo(function(){return{startPause:function(){di({type:et.START_PAUSE,time:Date.now()})},endPause:function(){i&&di({type:et.END_PAUSE,time:Date.now()})},updateHeight:function(a,l){return di({type:et.UPDATE_TOAST,toast:{id:a,height:l}})},calculateOffset:function(a,l){var u,c=l||{},d=c.reverseOrder,f=d===void 0?!1:d,m=c.gutter,g=m===void 0?8:m,k=c.defaultPosition,C=r.filter(function(S){return(S.position||k)===(a.position||k)&&S.height}),y=C.findIndex(function(S){return S.id===a.id}),p=C.filter(function(S,v){return v<y&&S.visible}).length,_=(u=C.filter(function(S){return S.visible})).slice.apply(u,f?[p+1]:[0,p]).reduce(function(S,v){return S+(v.height||0)+g},0);return _}}},[r,i]);return{toasts:r,handlers:s}};function Ck(){var t=It([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `,`;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]);return Ck=function(){return t},t}function Ik(){var t=It([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return Ik=function(){return t},t}function xk(){var t=It([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return xk=function(){return t},t}function bk(){var t=It([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return bk=function(){return t},t}var d3=ir(bk()),f3=ir(xk()),p3=ir(Ik()),m3=Xr("div")(Ck(),function(t){return t.primary||"#ff4b4b"},d3,f3,function(t){return t.secondary||"#fff"},p3);function Ak(){var t=It([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return Ak=function(){return t},t}function Rk(){var t=It([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return Rk=function(){return t},t}var g3=ir(Rk()),y3=Xr("div")(Ak(),function(t){return t.secondary||"#e0e0e0"},function(t){return t.primary||"#616161"},g3);function $k(){var t=It([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `,` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `,`;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]);return $k=function(){return t},t}function Pk(){var t=It([`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`]);return Pk=function(){return t},t}function Nk(){var t=It([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return Nk=function(){return t},t}var v3=ir(Nk()),w3=ir(Pk()),_3=Xr("div")($k(),function(t){return t.primary||"#61d345"},v3,w3,function(t){return t.secondary||"#fff"});function Dk(){var t=It([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return Dk=function(){return t},t}function Ok(){var t=It([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return Ok=function(){return t},t}function Lk(){var t=It([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return Lk=function(){return t},t}function Mk(){var t=It([`
  position: absolute;
`]);return Mk=function(){return t},t}var S3=Xr("div")(Mk()),E3=Xr("div")(Lk()),k3=ir(Ok()),T3=Xr("div")(Dk(),k3),C3=function(e){var n=e.toast,r=n.icon,i=n.type,s=n.iconTheme;return r!==void 0?typeof r=="string"?A.exports.createElement(T3,null,r):r:i==="blank"?null:A.exports.createElement(E3,null,A.exports.createElement(y3,Object.assign({},s)),i!=="loading"&&A.exports.createElement(S3,null,i==="error"?A.exports.createElement(m3,Object.assign({},s)):A.exports.createElement(_3,Object.assign({},s))))};function Uk(){var t=It([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return Uk=function(){return t},t}function Fk(){var t=It([`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`]);return Fk=function(){return t},t}var I3=function(e){return`
0% {transform: translate3d(0,`+e*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},x3=function(e){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+e*-150+`%,-1px) scale(.6); opacity:0;}
`},b3="0%{opacity:0;} 100%{opacity:1;}",A3="0%{opacity:1;} 100%{opacity:0;}",R3=Xr("div",A.exports.forwardRef)(Fk()),$3=Xr("div")(Uk()),P3=function(e,n){var r=e.includes("top"),i=r?1:-1,s=Tk()?[b3,A3]:[I3(i),x3(i)],o=s[0],a=s[1];return{animation:n?ir(o)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":ir(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},N3=A.exports.memo(function(t){var e=t.toast,n=t.position,r=t.style,i=t.children,s=e!=null&&e.height?P3(e.position||n||"top-center",e.visible):{opacity:0},o=A.exports.createElement(C3,{toast:e}),a=A.exports.createElement($3,Object.assign({},e.ariaProps),Bu(e.message,e));return A.exports.createElement(R3,{className:e.className,style:Ue({},s,r,e.style)},typeof i=="function"?i({icon:o,message:a}):A.exports.createElement(A.exports.Fragment,null,o,a))});function zk(){var t=It([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return zk=function(){return t},t}t3(A.exports.createElement);var D3=function(e,n){var r=e.includes("top"),i=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return Ue({left:0,right:0,display:"flex",position:"absolute",transition:Tk()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(r?1:-1)+"px)"},i,s)},O3=Hc(zk()),Sl=16,L3=function(e){var n=e.reverseOrder,r=e.position,i=r===void 0?"top-center":r,s=e.toastOptions,o=e.gutter,a=e.children,l=e.containerStyle,u=e.containerClassName,c=h3(s),d=c.toasts,f=c.handlers;return A.exports.createElement("div",{style:Ue({position:"fixed",zIndex:9999,top:Sl,left:Sl,right:Sl,bottom:Sl,pointerEvents:"none"},l),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map(function(m){var g=m.position||i,k=f.calculateOffset(m,{reverseOrder:n,gutter:o,defaultPosition:i}),C=D3(g,k),y=m.height?void 0:i3(function(p){f.updateHeight(m.id,p.height)});return A.exports.createElement("div",{ref:y,className:m.visible?O3:"",key:m.id,style:C},m.type==="custom"?Bu(m.message,m):a?a(m):A.exports.createElement(N3,{toast:m,position:g}))}))},qc={exports:{}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=typeof Symbol=="function"&&Symbol.for,ng=st?Symbol.for("react.element"):60103,rg=st?Symbol.for("react.portal"):60106,Gc=st?Symbol.for("react.fragment"):60107,Wc=st?Symbol.for("react.strict_mode"):60108,Kc=st?Symbol.for("react.profiler"):60114,Qc=st?Symbol.for("react.provider"):60109,Yc=st?Symbol.for("react.context"):60110,ig=st?Symbol.for("react.async_mode"):60111,Xc=st?Symbol.for("react.concurrent_mode"):60111,Jc=st?Symbol.for("react.forward_ref"):60112,Zc=st?Symbol.for("react.suspense"):60113,M3=st?Symbol.for("react.suspense_list"):60120,eh=st?Symbol.for("react.memo"):60115,th=st?Symbol.for("react.lazy"):60116,U3=st?Symbol.for("react.block"):60121,F3=st?Symbol.for("react.fundamental"):60117,z3=st?Symbol.for("react.responder"):60118,j3=st?Symbol.for("react.scope"):60119;function sn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ng:switch(t=t.type,t){case ig:case Xc:case Gc:case Kc:case Wc:case Zc:return t;default:switch(t=t&&t.$$typeof,t){case Yc:case Jc:case th:case eh:case Qc:return t;default:return e}}case rg:return e}}}function jk(t){return sn(t)===Xc}Ee.AsyncMode=ig;Ee.ConcurrentMode=Xc;Ee.ContextConsumer=Yc;Ee.ContextProvider=Qc;Ee.Element=ng;Ee.ForwardRef=Jc;Ee.Fragment=Gc;Ee.Lazy=th;Ee.Memo=eh;Ee.Portal=rg;Ee.Profiler=Kc;Ee.StrictMode=Wc;Ee.Suspense=Zc;Ee.isAsyncMode=function(t){return jk(t)||sn(t)===ig};Ee.isConcurrentMode=jk;Ee.isContextConsumer=function(t){return sn(t)===Yc};Ee.isContextProvider=function(t){return sn(t)===Qc};Ee.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ng};Ee.isForwardRef=function(t){return sn(t)===Jc};Ee.isFragment=function(t){return sn(t)===Gc};Ee.isLazy=function(t){return sn(t)===th};Ee.isMemo=function(t){return sn(t)===eh};Ee.isPortal=function(t){return sn(t)===rg};Ee.isProfiler=function(t){return sn(t)===Kc};Ee.isStrictMode=function(t){return sn(t)===Wc};Ee.isSuspense=function(t){return sn(t)===Zc};Ee.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Gc||t===Xc||t===Kc||t===Wc||t===Zc||t===M3||typeof t=="object"&&t!==null&&(t.$$typeof===th||t.$$typeof===eh||t.$$typeof===Qc||t.$$typeof===Yc||t.$$typeof===Jc||t.$$typeof===F3||t.$$typeof===z3||t.$$typeof===j3||t.$$typeof===U3)};Ee.typeOf=sn;(function(t){t.exports=Ee})(qc);function B3(t){function e(j,V,H,Z,I){for(var he=0,z=0,Me=0,ye=0,_e,ae,ot=0,zt=0,me,vt=me=_e=0,ve=0,at=0,eo=0,lt=0,Ka=H.length,to=Ka-1,fn,re="",Be="",nh="",rh="",lr;ve<Ka;){if(ae=H.charCodeAt(ve),ve===to&&z+ye+Me+he!==0&&(z!==0&&(ae=z===47?10:47),ye=Me=he=0,Ka++,to++),z+ye+Me+he===0){if(ve===to&&(0<at&&(re=re.replace(f,"")),0<re.trim().length)){switch(ae){case 32:case 9:case 59:case 13:case 10:break;default:re+=H.charAt(ve)}ae=59}switch(ae){case 123:for(re=re.trim(),_e=re.charCodeAt(0),me=1,lt=++ve;ve<Ka;){switch(ae=H.charCodeAt(ve)){case 123:me++;break;case 125:me--;break;case 47:switch(ae=H.charCodeAt(ve+1)){case 42:case 47:e:{for(vt=ve+1;vt<to;++vt)switch(H.charCodeAt(vt)){case 47:if(ae===42&&H.charCodeAt(vt-1)===42&&ve+2!==vt){ve=vt+1;break e}break;case 10:if(ae===47){ve=vt+1;break e}}ve=vt}}break;case 91:ae++;case 40:ae++;case 34:case 39:for(;ve++<to&&H.charCodeAt(ve)!==ae;);}if(me===0)break;ve++}switch(me=H.substring(lt,ve),_e===0&&(_e=(re=re.replace(d,"").trim()).charCodeAt(0)),_e){case 64:switch(0<at&&(re=re.replace(f,"")),ae=re.charCodeAt(1),ae){case 100:case 109:case 115:case 45:at=V;break;default:at=zn}if(me=e(V,at,me,ae,I+1),lt=me.length,0<F&&(at=n(zn,re,eo),lr=a(3,me,at,V,$,R,lt,ae,I,Z),re=at.join(""),lr!==void 0&&(lt=(me=lr.trim()).length)===0&&(ae=0,me="")),0<lt)switch(ae){case 115:re=re.replace(x,o);case 100:case 109:case 45:me=re+"{"+me+"}";break;case 107:re=re.replace(p,"$1 $2"),me=re+"{"+me+"}",me=O===1||O===2&&s("@"+me,3)?"@-webkit-"+me+"@"+me:"@"+me;break;default:me=re+me,Z===112&&(me=(Be+=me,""))}else me="";break;default:me=e(V,n(V,re,eo),me,Z,I+1)}nh+=me,me=eo=at=vt=_e=0,re="",ae=H.charCodeAt(++ve);break;case 125:case 59:if(re=(0<at?re.replace(f,""):re).trim(),1<(lt=re.length))switch(vt===0&&(_e=re.charCodeAt(0),_e===45||96<_e&&123>_e)&&(lt=(re=re.replace(" ",":")).length),0<F&&(lr=a(1,re,V,j,$,R,Be.length,Z,I,Z))!==void 0&&(lt=(re=lr.trim()).length)===0&&(re="\0\0"),_e=re.charCodeAt(0),ae=re.charCodeAt(1),_e){case 0:break;case 64:if(ae===105||ae===99){rh+=re+H.charAt(ve);break}default:re.charCodeAt(lt-1)!==58&&(Be+=i(re,_e,ae,re.charCodeAt(2)))}eo=at=vt=_e=0,re="",ae=H.charCodeAt(++ve)}}switch(ae){case 13:case 10:z===47?z=0:1+_e===0&&Z!==107&&0<re.length&&(at=1,re+="\0"),0<F*J&&a(0,re,V,j,$,R,Be.length,Z,I,Z),R=1,$++;break;case 59:case 125:if(z+ye+Me+he===0){R++;break}default:switch(R++,fn=H.charAt(ve),ae){case 9:case 32:if(ye+he+z===0)switch(ot){case 44:case 58:case 9:case 32:fn="";break;default:ae!==32&&(fn=" ")}break;case 0:fn="\\0";break;case 12:fn="\\f";break;case 11:fn="\\v";break;case 38:ye+z+he===0&&(at=eo=1,fn="\f"+fn);break;case 108:if(ye+z+he+D===0&&0<vt)switch(ve-vt){case 2:ot===112&&H.charCodeAt(ve-3)===58&&(D=ot);case 8:zt===111&&(D=zt)}break;case 58:ye+z+he===0&&(vt=ve);break;case 44:z+Me+ye+he===0&&(at=1,fn+="\r");break;case 34:case 39:z===0&&(ye=ye===ae?0:ye===0?ae:ye);break;case 91:ye+z+Me===0&&he++;break;case 93:ye+z+Me===0&&he--;break;case 41:ye+z+he===0&&Me--;break;case 40:if(ye+z+he===0){if(_e===0)switch(2*ot+3*zt){case 533:break;default:_e=1}Me++}break;case 64:z+Me+ye+he+vt+me===0&&(me=1);break;case 42:case 47:if(!(0<ye+he+Me))switch(z){case 0:switch(2*ae+3*H.charCodeAt(ve+1)){case 235:z=47;break;case 220:lt=ve,z=42}break;case 42:ae===47&&ot===42&&lt+2!==ve&&(H.charCodeAt(lt+2)===33&&(Be+=H.substring(lt,ve+1)),fn="",z=0)}}z===0&&(re+=fn)}zt=ot,ot=ae,ve++}if(lt=Be.length,0<lt){if(at=V,0<F&&(lr=a(2,Be,at,j,$,R,lt,Z,I,Z),lr!==void 0&&(Be=lr).length===0))return rh+Be+nh;if(Be=at.join(",")+"{"+Be+"}",O*D!==0){switch(O!==2||s(Be,2)||(D=0),D){case 111:Be=Be.replace(S,":-moz-$1")+Be;break;case 112:Be=Be.replace(_,"::-webkit-input-$1")+Be.replace(_,"::-moz-$1")+Be.replace(_,":-ms-input-$1")+Be}D=0}}return rh+Be+nh}function n(j,V,H){var Z=V.trim().split(C);V=Z;var I=Z.length,he=j.length;switch(he){case 0:case 1:var z=0;for(j=he===0?"":j[0]+" ";z<I;++z)V[z]=r(j,V[z],H).trim();break;default:var Me=z=0;for(V=[];z<I;++z)for(var ye=0;ye<he;++ye)V[Me++]=r(j[ye]+" ",Z[z],H).trim()}return V}function r(j,V,H){var Z=V.charCodeAt(0);switch(33>Z&&(Z=(V=V.trim()).charCodeAt(0)),Z){case 38:return V.replace(y,"$1"+j.trim());case 58:return j.trim()+V.replace(y,"$1"+j.trim());default:if(0<1*H&&0<V.indexOf("\f"))return V.replace(y,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+V}function i(j,V,H,Z){var I=j+";",he=2*V+3*H+4*Z;if(he===944){j=I.indexOf(":",9)+1;var z=I.substring(j,I.length-1).trim();return z=I.substring(0,j).trim()+z+";",O===1||O===2&&s(z,1)?"-webkit-"+z+z:z}if(O===0||O===2&&!s(I,1))return I;switch(he){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(ne,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return z=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+I+"-ms-flex-pack"+z+I;case 1005:return g.test(I)?I.replace(m,":-webkit-")+I.replace(m,":-moz-")+I:I;case 1e3:switch(z=I.substring(13).trim(),V=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(V)){case 226:z=I.replace(v,"tb");break;case 232:z=I.replace(v,"tb-rl");break;case 220:z=I.replace(v,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+z+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(V=(I=j).length-10,z=(I.charCodeAt(V)===33?I.substring(0,V):I).substring(j.indexOf(":",7)+1).trim(),he=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:I=I.replace(z,"-webkit-"+z)+";"+I;break;case 207:case 102:I=I.replace(z,"-webkit-"+(102<he?"inline-":"")+"box")+";"+I.replace(z,"-webkit-"+z)+";"+I.replace(z,"-ms-"+z+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return z=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+z+"-ms-flex-"+z+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(b,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(b,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(B.test(j)===!0)return(z=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?i(j.replace("stretch","fill-available"),V,H,Z).replace(":fill-available",":stretch"):I.replace(z,"-webkit-"+z)+I.replace(z,"-moz-"+z.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,H+Z===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(k,"$1-webkit-$2")+I}return I}function s(j,V){var H=j.indexOf(V===1?":":"{"),Z=j.substring(0,V!==3?H:10);return H=j.substring(H+1,j.length-1),Y(V!==2?Z:Z.replace(U,"$1"),H,V)}function o(j,V){var H=i(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return H!==V+";"?H.replace(w," or ($1)").substring(4):"("+V+")"}function a(j,V,H,Z,I,he,z,Me,ye,_e){for(var ae=0,ot=V,zt;ae<F;++ae)switch(zt=xt[ae].call(c,j,ot,H,Z,I,he,z,Me,ye,_e)){case void 0:case!1:case!0:case null:break;default:ot=zt}if(ot!==V)return ot}function l(j){switch(j){case void 0:case null:F=xt.length=0;break;default:if(typeof j=="function")xt[F++]=j;else if(typeof j=="object")for(var V=0,H=j.length;V<H;++V)l(j[V]);else J=!!j|0}return l}function u(j){return j=j.prefix,j!==void 0&&(Y=null,j?typeof j!="function"?O=1:(O=2,Y=j):O=0),u}function c(j,V){var H=j;if(33>H.charCodeAt(0)&&(H=H.trim()),Te=H,H=[Te],0<F){var Z=a(-1,V,H,H,$,R,0,0,0,0);Z!==void 0&&typeof Z=="string"&&(V=Z)}var I=e(zn,H,V,0,0);return 0<F&&(Z=a(-2,I,H,H,$,R,I.length,0,0,0),Z!==void 0&&(I=Z)),Te="",D=0,R=$=1,I}var d=/^\0+/g,f=/[\0\r\f]/g,m=/: */g,g=/zoo|gra/,k=/([,: ])(transform)/g,C=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,S=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,b=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,ne=/([^-])(image-set\()/,R=1,$=1,D=0,O=1,zn=[],xt=[],F=0,Y=null,J=0,Te="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var V3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function H3(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var q3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,t0=H3(function(t){return q3.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),sg=qc.exports,G3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},og={};og[sg.ForwardRef]=K3;og[sg.Memo]=Bk;function n0(t){return sg.isMemo(t)?Bk:og[t.$$typeof]||G3}var Q3=Object.defineProperty,Y3=Object.getOwnPropertyNames,r0=Object.getOwnPropertySymbols,X3=Object.getOwnPropertyDescriptor,J3=Object.getPrototypeOf,i0=Object.prototype;function Vk(t,e,n){if(typeof e!="string"){if(i0){var r=J3(e);r&&r!==i0&&Vk(t,r,n)}var i=Y3(e);r0&&(i=i.concat(r0(e)));for(var s=n0(t),o=n0(e),a=0;a<i.length;++a){var l=i[a];if(!W3[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=X3(e,l);try{Q3(t,l,u)}catch{}}}}return t}var Z3=Vk;function Pn(){return(Pn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var s0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Df=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!qc.exports.typeOf(t)},Vu=Object.freeze([]),Or=Object.freeze({});function Ns(t){return typeof t=="function"}function o0(t){return t.displayName||t.name||"Component"}function ag(t){return t&&typeof t.styledComponentId=="string"}var Ds=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",lg=typeof window<"u"&&"HTMLElement"in window,eO=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function $i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var tO=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&$i(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Wl=new Map,Hu=new Map,Uo=1,El=function(t){if(Wl.has(t))return Wl.get(t);for(;Hu.has(Uo);)Uo++;var e=Uo++;return Wl.set(t,e),Hu.set(e,t),e},nO=function(t){return Hu.get(t)},rO=function(t,e){e>=Uo&&(Uo=e+1),Wl.set(t,e),Hu.set(e,t)},iO="style["+Ds+'][data-styled-version="5.3.6"]',sO=new RegExp("^"+Ds+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),oO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},aO=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(sO);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(rO(u,l),oO(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},lO=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Hk=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ds))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ds,"active"),r.setAttribute("data-styled-version","5.3.6");var o=lO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},uO=function(){function t(n){var r=this.element=Hk(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}$i(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),cO=function(){function t(n){var r=this.element=Hk(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),hO=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),a0=lg,dO={isServer:!lg,useCSSOMInjection:!eO},qk=function(){function t(n,r,i){n===void 0&&(n=Or),r===void 0&&(r={}),this.options=Pn({},dO,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&lg&&a0&&(a0=!1,function(s){for(var o=document.querySelectorAll(iO),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ds)!=="active"&&(aO(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return El(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Pn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new hO(o):s?new uO(o):new cO(o),new tO(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(El(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(El(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(El(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=nO(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ds+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),fO=/(a)(d)/gi,l0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Of(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=l0(e%52)+n;return(l0(e%52)+n).replace(fO,"$1-$2")}var ss=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Gk=function(t){return ss(5381,t)};function pO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ns(n)&&!ag(n))return!1}return!0}var mO=Gk("5.3.6"),gO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pO(e),this.componentId=n,this.baseHash=ss(mO,n),this.baseStyle=r,qk.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Os(this.rules,e,n,r).join(""),a=Of(ss(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ss(this.baseHash,r.hash),d="",f=0;f<u;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var g=Os(m,e,n,r),k=Array.isArray(g)?g.join(""):g;c=ss(c,k+f),d+=k}}if(d){var C=Of(c>>>0);if(!n.hasNameForId(i,C)){var y=r(d,"."+C,void 0,i);n.insertRules(i,C,y)}s.push(C)}}return s.join(" ")},t}(),yO=/^\s*\/\/.*$/gm,vO=[":","[",".","#"];function wO(t){var e,n,r,i,s=t===void 0?Or:t,o=s.options,a=o===void 0?Or:o,l=s.plugins,u=l===void 0?Vu:l,c=new B3(a),d=[],f=function(k){function C(y){if(y)try{k(y+"}")}catch{}}return function(y,p,_,S,v,x,w,b,U,B){switch(y){case 1:if(U===0&&p.charCodeAt(0)===64)return k(p+";"),"";break;case 2:if(b===0)return p+"/*|*/";break;case 3:switch(b){case 102:case 112:return k(_[0]+p),"";default:return p+(B===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(C)}}}(function(k){d.push(k)}),m=function(k,C,y){return C===0&&vO.indexOf(y[n.length])!==-1||y.match(i)?k:"."+e};function g(k,C,y,p){p===void 0&&(p="&");var _=k.replace(yO,""),S=C&&y?y+" "+C+" { "+_+" }":_;return e=p,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(y||!C?"":C,S)}return c.use([].concat(u,[function(k,C,y){k===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,m))},f,function(k){if(k===-2){var C=d;return d=[],C}}])),g.hash=u.length?u.reduce(function(k,C){return C.name||$i(15),ss(k,C.name)},5381).toString():"",g}var Wk=En.createContext();Wk.Consumer;var Kk=En.createContext(),_O=(Kk.Consumer,new qk),Lf=wO();function SO(){return A.exports.useContext(Wk)||_O}function EO(){return A.exports.useContext(Kk)||Lf}var kO=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Lf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return $i(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Lf),this.name+e.hash},t}(),TO=/([A-Z])/,CO=/([A-Z])/g,IO=/^ms-/,xO=function(t){return"-"+t.toLowerCase()};function u0(t){return TO.test(t)?t.replace(CO,xO).replace(IO,"-ms-"):t}var c0=function(t){return t==null||t===!1||t===""};function Os(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Os(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(c0(t))return"";if(ag(t))return"."+t.styledComponentId;if(Ns(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Os(l,e,n,r)}var u;return t instanceof kO?n?(t.inject(n,r),t.getName(r)):t:Df(t)?function c(d,f){var m,g,k=[];for(var C in d)d.hasOwnProperty(C)&&!c0(d[C])&&(Array.isArray(d[C])&&d[C].isCss||Ns(d[C])?k.push(u0(C)+":",d[C],";"):Df(d[C])?k.push.apply(k,c(d[C],C)):k.push(u0(C)+": "+(m=C,(g=d[C])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||m in V3?String(g).trim():g+"px")+";"));return f?[f+" {"].concat(k,["}"]):k}(t):t.toString()}var h0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function bO(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ns(t)||Df(t)?h0(Os(s0(Vu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:h0(Os(s0(t,n)))}var AO=function(t,e,n){return n===void 0&&(n=Or),t.theme!==n.theme&&t.theme||e||n.theme},RO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$O=/(^-|-$)/g;function Jh(t){return t.replace(RO,"-").replace($O,"")}var PO=function(t){return Of(Gk(t)>>>0)};function kl(t){return typeof t=="string"&&!0}var Mf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},NO=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function DO(t,e,n){var r=t[n];Mf(e)&&Mf(r)?Qk(r,e):t[n]=e}function Qk(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Mf(o))for(var a in o)NO(a)&&DO(t,o[a],a)}return t}var qu=En.createContext();qu.Consumer;function OO(t){var e=A.exports.useContext(qu),n=A.exports.useMemo(function(){return function(r,i){if(!r)return $i(14);if(Ns(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?$i(8):i?Pn({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?En.createElement(qu.Provider,{value:n},t.children):null}var Zh={};function Yk(t,e,n){var r=ag(t),i=!kl(t),s=e.attrs,o=s===void 0?Vu:s,a=e.componentId,l=a===void 0?function(p,_){var S=typeof p!="string"?"sc":Jh(p);Zh[S]=(Zh[S]||0)+1;var v=S+"-"+PO("5.3.6"+S+Zh[S]);return _?_+"-"+v:v}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return kl(p)?"styled."+p:"Styled("+o0(p)+")"}(t):u,d=e.displayName&&e.componentId?Jh(e.displayName)+"-"+e.componentId:e.componentId||l,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(p,_,S){return t.shouldForwardProp(p,_,S)&&e.shouldForwardProp(p,_,S)}:t.shouldForwardProp);var g,k=new gO(n,d,r?t.componentStyle:void 0),C=k.isStatic&&o.length===0,y=function(p,_){return function(S,v,x,w){var b=S.attrs,U=S.componentStyle,B=S.defaultProps,ne=S.foldedComponentIds,R=S.shouldForwardProp,$=S.styledComponentId,D=S.target,O=function(Z,I,he){Z===void 0&&(Z=Or);var z=Pn({},I,{theme:Z}),Me={};return he.forEach(function(ye){var _e,ae,ot,zt=ye;for(_e in Ns(zt)&&(zt=zt(z)),zt)z[_e]=Me[_e]=_e==="className"?(ae=Me[_e],ot=zt[_e],ae&&ot?ae+" "+ot:ae||ot):zt[_e]}),[z,Me]}(AO(v,A.exports.useContext(qu),B)||Or,v,b),zn=O[0],xt=O[1],F=function(Z,I,he,z){var Me=SO(),ye=EO(),_e=I?Z.generateAndInjectStyles(Or,Me,ye):Z.generateAndInjectStyles(he,Me,ye);return _e}(U,w,zn),Y=x,J=xt.$as||v.$as||xt.as||v.as||D,Te=kl(J),j=xt!==v?Pn({},v,{},xt):v,V={};for(var H in j)H[0]!=="$"&&H!=="as"&&(H==="forwardedAs"?V.as=j[H]:(R?R(H,t0,J):!Te||t0(H))&&(V[H]=j[H]));return v.style&&xt.style!==v.style&&(V.style=Pn({},v.style,{},xt.style)),V.className=Array.prototype.concat(ne,$,F!==$?F:null,v.className,xt.className).filter(Boolean).join(" "),V.ref=Y,A.exports.createElement(J,V)}(g,p,_,C)};return y.displayName=c,(g=En.forwardRef(y)).attrs=f,g.componentStyle=k,g.displayName=c,g.shouldForwardProp=m,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Vu,g.styledComponentId=d,g.target=r?t.target:t,g.withComponent=function(p){var _=e.componentId,S=function(x,w){if(x==null)return{};var b,U,B={},ne=Object.keys(x);for(U=0;U<ne.length;U++)b=ne[U],w.indexOf(b)>=0||(B[b]=x[b]);return B}(e,["componentId"]),v=_&&_+"-"+(kl(p)?p:Jh(o0(p)));return Yk(p,Pn({},S,{attrs:f,componentId:v}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Qk({},t.defaultProps,p):p}}),g.toString=function(){return"."+g.styledComponentId},i&&Z3(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Uf=function(t){return function e(n,r,i){if(i===void 0&&(i=Or),!qc.exports.isValidElementType(r))return $i(1,String(r));var s=function(){return n(r,i,bO.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Pn({},i,{},o))},s.attrs=function(o){return e(n,r,Pn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Yk,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Uf[t]=Uf(t)});const T=Uf,LO=T.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`,d0=T.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${t=>t.theme.accent};
	margin-top: 2rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,MO=T.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> div {
		display: flex;
		flex-direction: column;
	}
`,f0=T.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: ${t=>t.theme.darkGray};
`,p0=T.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;

	:focus {
		border: 1px solid ${t=>t.theme.accent};
		outline: none;
	}
`,UO=T(le)`
	color: ${t=>t.theme.accent};
`,FO=()=>{const{login:t,isPending:e,error:n}=KD(),[r,i]=A.exports.useState({email:"",password:""}),{email:s,password:o}=r,a=u=>{i({...r,[u.target.name]:u.target.value})};return E(LO,{children:[h("h2",{children:"Sign in to your account"}),E(MO,{onSubmit:async u=>{u.preventDefault(),await t(s,o)},children:[E("div",{children:[h(f0,{htmlFor:"email-address",children:"Email address"}),h(p0,{id:"email-address",name:"email",type:"email",autoComplete:"email",onChange:a,required:!0,placeholder:"Email address"})]}),E("div",{children:[h(f0,{htmlFor:"password",children:"Password"}),h(p0,{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,placeholder:"Password",onChange:a})]}),E("div",{children:[e?h(d0,{type:"submit",disabled:!0,children:"loading..."}):h(d0,{type:"submit",children:"Sign in"}),n&&h("p",{children:n})]})]}),E("p",{children:["Don't have an account?"," ",h(UO,{to:"/register",children:"Sign Up"})]})]})};var Xk={exports:{}},Jk={exports:{}},Zk={exports:{}};(function(t){(function(e){function n(v,x){var w=(v&65535)+(x&65535),b=(v>>16)+(x>>16)+(w>>16);return b<<16|w&65535}function r(v,x){return v<<x|v>>>32-x}function i(v,x,w,b,U,B){return n(r(n(n(x,v),n(b,B)),U),w)}function s(v,x,w,b,U,B,ne){return i(x&w|~x&b,v,x,U,B,ne)}function o(v,x,w,b,U,B,ne){return i(x&b|w&~b,v,x,U,B,ne)}function a(v,x,w,b,U,B,ne){return i(x^w^b,v,x,U,B,ne)}function l(v,x,w,b,U,B,ne){return i(w^(x|~b),v,x,U,B,ne)}function u(v,x){v[x>>5]|=128<<x%32,v[(x+64>>>9<<4)+14]=x;var w,b,U,B,ne,R=1732584193,$=-271733879,D=-1732584194,O=271733878;for(w=0;w<v.length;w+=16)b=R,U=$,B=D,ne=O,R=s(R,$,D,O,v[w],7,-680876936),O=s(O,R,$,D,v[w+1],12,-389564586),D=s(D,O,R,$,v[w+2],17,606105819),$=s($,D,O,R,v[w+3],22,-1044525330),R=s(R,$,D,O,v[w+4],7,-176418897),O=s(O,R,$,D,v[w+5],12,1200080426),D=s(D,O,R,$,v[w+6],17,-1473231341),$=s($,D,O,R,v[w+7],22,-45705983),R=s(R,$,D,O,v[w+8],7,1770035416),O=s(O,R,$,D,v[w+9],12,-1958414417),D=s(D,O,R,$,v[w+10],17,-42063),$=s($,D,O,R,v[w+11],22,-1990404162),R=s(R,$,D,O,v[w+12],7,1804603682),O=s(O,R,$,D,v[w+13],12,-40341101),D=s(D,O,R,$,v[w+14],17,-1502002290),$=s($,D,O,R,v[w+15],22,1236535329),R=o(R,$,D,O,v[w+1],5,-165796510),O=o(O,R,$,D,v[w+6],9,-1069501632),D=o(D,O,R,$,v[w+11],14,643717713),$=o($,D,O,R,v[w],20,-373897302),R=o(R,$,D,O,v[w+5],5,-701558691),O=o(O,R,$,D,v[w+10],9,38016083),D=o(D,O,R,$,v[w+15],14,-660478335),$=o($,D,O,R,v[w+4],20,-405537848),R=o(R,$,D,O,v[w+9],5,568446438),O=o(O,R,$,D,v[w+14],9,-1019803690),D=o(D,O,R,$,v[w+3],14,-187363961),$=o($,D,O,R,v[w+8],20,1163531501),R=o(R,$,D,O,v[w+13],5,-1444681467),O=o(O,R,$,D,v[w+2],9,-51403784),D=o(D,O,R,$,v[w+7],14,1735328473),$=o($,D,O,R,v[w+12],20,-1926607734),R=a(R,$,D,O,v[w+5],4,-378558),O=a(O,R,$,D,v[w+8],11,-2022574463),D=a(D,O,R,$,v[w+11],16,1839030562),$=a($,D,O,R,v[w+14],23,-35309556),R=a(R,$,D,O,v[w+1],4,-1530992060),O=a(O,R,$,D,v[w+4],11,1272893353),D=a(D,O,R,$,v[w+7],16,-155497632),$=a($,D,O,R,v[w+10],23,-1094730640),R=a(R,$,D,O,v[w+13],4,681279174),O=a(O,R,$,D,v[w],11,-358537222),D=a(D,O,R,$,v[w+3],16,-722521979),$=a($,D,O,R,v[w+6],23,76029189),R=a(R,$,D,O,v[w+9],4,-640364487),O=a(O,R,$,D,v[w+12],11,-421815835),D=a(D,O,R,$,v[w+15],16,530742520),$=a($,D,O,R,v[w+2],23,-995338651),R=l(R,$,D,O,v[w],6,-198630844),O=l(O,R,$,D,v[w+7],10,1126891415),D=l(D,O,R,$,v[w+14],15,-1416354905),$=l($,D,O,R,v[w+5],21,-57434055),R=l(R,$,D,O,v[w+12],6,1700485571),O=l(O,R,$,D,v[w+3],10,-1894986606),D=l(D,O,R,$,v[w+10],15,-1051523),$=l($,D,O,R,v[w+1],21,-2054922799),R=l(R,$,D,O,v[w+8],6,1873313359),O=l(O,R,$,D,v[w+15],10,-30611744),D=l(D,O,R,$,v[w+6],15,-1560198380),$=l($,D,O,R,v[w+13],21,1309151649),R=l(R,$,D,O,v[w+4],6,-145523070),O=l(O,R,$,D,v[w+11],10,-1120210379),D=l(D,O,R,$,v[w+2],15,718787259),$=l($,D,O,R,v[w+9],21,-343485551),R=n(R,b),$=n($,U),D=n(D,B),O=n(O,ne);return[R,$,D,O]}function c(v){var x,w="",b=v.length*32;for(x=0;x<b;x+=8)w+=String.fromCharCode(v[x>>5]>>>x%32&255);return w}function d(v){var x,w=[];for(w[(v.length>>2)-1]=void 0,x=0;x<w.length;x+=1)w[x]=0;var b=v.length*8;for(x=0;x<b;x+=8)w[x>>5]|=(v.charCodeAt(x/8)&255)<<x%32;return w}function f(v){return c(u(d(v),v.length*8))}function m(v,x){var w,b=d(v),U=[],B=[],ne;for(U[15]=B[15]=void 0,b.length>16&&(b=u(b,v.length*8)),w=0;w<16;w+=1)U[w]=b[w]^909522486,B[w]=b[w]^1549556828;return ne=u(U.concat(d(x)),512+x.length*8),c(u(B.concat(ne),512+128))}function g(v){var x="0123456789abcdef",w="",b,U;for(U=0;U<v.length;U+=1)b=v.charCodeAt(U),w+=x.charAt(b>>>4&15)+x.charAt(b&15);return w}function k(v){return unescape(encodeURIComponent(v))}function C(v){return f(k(v))}function y(v){return g(C(v))}function p(v,x){return m(k(v),k(x))}function _(v,x){return g(p(v,x))}function S(v,x,w){return x?w?p(x,v):_(x,v):w?C(v):y(v)}t.exports?t.exports=S:e.md5=S})(aT)})(Zk);var ga={};function zO(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var jO=function(t,e,n,r){e=e||"&",n=n||"=";var i={};if(typeof t!="string"||t.length===0)return i;var s=/\+/g;t=t.split(e);var o=1e3;r&&typeof r.maxKeys=="number"&&(o=r.maxKeys);var a=t.length;o>0&&a>o&&(a=o);for(var l=0;l<a;++l){var u=t[l].replace(s,"%20"),c=u.indexOf(n),d,f,m,g;c>=0?(d=u.substr(0,c),f=u.substr(c+1)):(d=u,f=""),m=decodeURIComponent(d),g=decodeURIComponent(f),zO(i,m)?Array.isArray(i[m])?i[m].push(g):i[m]=[i[m],g]:i[m]=g}return i},mo=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},BO=function(t,e,n,r){return e=e||"&",n=n||"=",t===null&&(t=void 0),typeof t=="object"?Object.keys(t).map(function(i){var s=encodeURIComponent(mo(i))+n;return Array.isArray(t[i])?t[i].map(function(o){return s+encodeURIComponent(mo(o))}).join(e):s+encodeURIComponent(mo(t[i]))}).join(e):r?encodeURIComponent(mo(r))+n+encodeURIComponent(mo(t)):""};ga.decode=ga.parse=jO;ga.encode=ga.stringify=BO;var VO=Zk.exports,HO=ga,qO=/^[0-9a-f]{32}$/;function GO(t){var e={},n={protocol:1,format:1};for(var r in t)n[r]||(e[r]=t[r]);return e}function m0(t,e){if(!!t)return typeof t.protocol=="boolean"?t.protocol:t.protocol==="http"?!1:t.protocol==="https"?!0:void 0}function g0(t){return t=typeof t=="string"?t.trim().toLowerCase():"unspecified",t.match(qO)?t:VO(t)}function y0(t){var e=HO.stringify(GO(t));return e&&"?"+e||""}Jk.exports={url:function(t,e,n){var r="//www.gravatar.com/avatar/";e&&e.cdn?(r=e.cdn+"/avatar/",delete e.cdn):(e&&e.protocol&&(n=m0(e)),typeof n<"u"&&(r=n?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var i=y0(e);return r+g0(t)+i},profile_url:function(t,e,n){var r=e!=null&&e.format!=null?String(e.format):"json",i;if(e&&e.cdn)i=e.cdn+"/",delete e.cdn;else{e&&e.protocol&&(n=m0(e));var i=n&&"https://secure.gravatar.com/"||"http://www.gravatar.com/"}var s=y0(e);return i+g0(t)+"."+r+s}};(function(t){t.exports=Jk.exports})(Xk);const eT=B0(Xk.exports),WO=()=>{const[t,e]=A.exports.useState(null),[n,r]=A.exports.useState(!1),{dispatch:i}=xn();return{signup:async(o,a,l)=>{e(null),r(!0);try{const u=await ib(P,o,a);if(!u)throw new Error("Could not complete signup");const c=eT.url(o,{size:"200",r:"pg",default:"identicon"});await ab(u.user,{displayName:l,photoURL:`https:${c}`}),await IN(de(se,"users",u.user.uid),{displayName:l,photoURL:`https:${c}`,bio:"",online:!0,followers:[],following:[]}),i({type:"LOGIN",payload:u.user}),r(!1),e(null)}catch(u){e(u.message),r(!1)}},error:t,isPending:n}},KO=T.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`,v0=T.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${t=>t.theme.accent};
	margin-top: 2rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,QO=T.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> div {
		display: flex;
		flex-direction: column;
	}
`,ed=T.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: ${t=>t.theme.darkGray};
`,td=T.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;

	:focus {
		border: 1px solid ${t=>t.theme.accent};
		outline: none;
	}
`,YO=T(le)`
	color: ${t=>t.theme.accent};
`,XO=()=>{const[t,e]=A.exports.useState({email:"",displayName:"",password:""}),{email:n,displayName:r,password:i}=t,{signup:s,error:o,isPending:a}=WO(),l=c=>{e({...t,[c.target.name]:c.target.value})};return E(KO,{children:[h("h2",{children:"Sign Up"}),E(QO,{onSubmit:c=>{c.preventDefault(),s(n,i,r)},children:[E("div",{children:[h(ed,{htmlFor:"email-address",children:"Email address"}),h(td,{id:"email-address",name:"email",type:"email",autoComplete:"email",onChange:l,required:!0,placeholder:"Email address"})]}),E("div",{children:[h(ed,{htmlFor:"display-name",children:"Display Name"}),h(td,{id:"display-name",name:"displayName",type:"text",autoComplete:"displayName",onChange:l,required:!0,placeholder:"Display Name"})]}),E("div",{children:[h(ed,{htmlFor:"password",children:"Password"}),h(td,{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,placeholder:"Password",onChange:l})]}),E("div",{children:[a?h(v0,{type:"submit",disabled:!0,children:"loading..."}):h(v0,{type:"submit",children:"Sign in"}),o&&h("p",{children:o})]})]}),E("p",{children:["Already have an account?"," ",h(YO,{to:"/login",children:"Sign In"})]})]})},JO=()=>{const[t,e]=A.exports.useState(!1),[n,r]=A.exports.useState(null),[i,s]=A.exports.useState(!1),{dispatch:o}=xn(),a=async()=>{r(null),s(!0);try{const{uid:l}=P.currentUser;await X(de(se,"users",l),{online:!1}),await hb(P),o({type:"LOGOUT"}),t||(s(!1),r(null))}catch(l){t||(r(l.message),s(!1))}};return A.exports.useEffect(()=>()=>e(!0),[]),{logout:a,error:n,isPending:i}},Ke=(t,e)=>{const[n,r]=A.exports.useState(null),[i,s]=A.exports.useState(null),[o,a]=A.exports.useState(!0);return A.exports.useEffect(()=>{if(e){const l=ek(de(se,t,e),u=>{a(!0),u.data()?(r({...u.data(),id:u.id}),s(null)):s("No such document exists"),a(!1)},u=>{s("failed to get document")});return()=>l()}},[t,e]),{document:n,error:i,isPending:o}};var tT={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w0=En.createContext&&En.createContext(tT),Lr=globalThis&&globalThis.__assign||function(){return Lr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Lr.apply(this,arguments)},ZO=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function nT(t){return t&&t.map(function(e,n){return En.createElement(e.tag,Lr({key:n},e.attr),nT(e.child))})}function Ft(t){return function(e){return h(eL,{...Lr({attr:Lr({},t.attr)},e),children:nT(t.child)})}}function eL(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=ZO(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),E("svg",{...Lr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Lr(Lr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&h("title",{children:s}),t.children]})};return w0!==void 0?h(w0.Consumer,{children:function(n){return e(n)}}):e(tT)}function _0(t){return Ft({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]})(t)}function tL(t){return Ft({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(t)}function S0(t){return Ft({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}}]})(t)}function nL(t){return Ft({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(t)}function rL(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function iL(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"}}]})(t)}function sL(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"}}]})(t)}function rT(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34z"}}]})(t)}function E0(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 006 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM8.07 16c.09-.23.13-.39.91-.69.97-.38 1.99-.56 3.02-.56s2.05.18 3.02.56c.77.3.81.46.91.69H8.07zM12 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}}]})(t)}function k0(t){return Ft({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"}},{tag:"path",attr:{d:"M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"}}]})(t)}function T0(t){return Ft({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"}}]})(t)}function oL(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 7h10v2H7zm0 4h7v2H7z"}},{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"}}]})(t)}function C0(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(t)}function aL(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"}},{tag:"path",attr:{d:"M9 10h2v8H9zm4 0h2v8h-2z"}}]})(t)}const lL=T.div`
	display: flex;
	justify-content: space-between;
	background-color: ${t=>t.theme.primary};
	z-index: 5;
`,uL=T.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;

		h1 {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin: 0 1rem;
			padding: 1rem 1rem;
			font-weight: 700;
			font-size: 1.2rem;
			color: ${t=>t.theme.accent};
			margin-bottom: 1rem;
		}

		> a {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin: 0 1rem;
			padding: 1rem 1rem;
			border-radius: 20px;
			color: ${t=>t.theme.black};
			:hover {
				color: ${t=>t.theme.accent};
				background-color: ${t=>t.theme.primary};
			}
		}
	}
`,cL=T.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 1rem 0;
	background-color: ${t=>t.theme.primary}} 

	> a {
		transform: scale(1.5);
		color: ${t=>t.theme.black};

		:hover {
			color: ${t=>t.theme.accent};
			background-color: ${t=>t.theme.primary};
		}
	}

	@media (min-width: 481px) {
		position: static;
		width: 100%;
		flex-direction: column;
		align-items: center;
		padding: 0 1rem;
		height: 100vh;

		right: initial;
		top: 0;

		> a {
			padding: 2rem 0;
		}
	}

	@media (min-width: 768px) {
		display: none;
	}
`,hL=()=>{const{user:t}=xn();Ke("users",t?t.uid:null);const{logout:e}=JO();return E(lL,{children:[h(uL,{children:t?E(wn,{children:[h("h1",{to:"/",children:"School Forum"}),E(le,{to:"/",children:[h(_0,{})," Home"]}),E(le,{to:`/profile/${t.uid}`,children:[h(S0,{})," Profile"]}),E(le,{to:"/settings/account",children:[h(T0,{})," Settings"]}),E(le,{to:"/groups",children:[h(E0,{})," Groups"]}),E(le,{to:"posts/create",children:[h(k0,{})," Create Post"]}),E(le,{to:"/",onClick:e,children:[h(C0,{}),"Logout"]})]}):E(wn,{children:[h("h1",{children:"School Forum"}),h(le,{to:"/login",children:"Login"}),h(le,{to:"/register",children:"Register"})]})}),h(cL,{children:t?E(wn,{children:[h(le,{to:"/",children:h(_0,{})}),h(le,{to:`/profile/${t.uid}`,children:h(S0,{})}),h(le,{to:"/settings/account",children:h(T0,{})}),h(le,{to:"/groups",children:h(E0,{})}),h(le,{to:"/",children:h(k0,{})}),h(le,{to:"/",children:h(C0,{})})]}):E(wn,{children:[h(le,{to:"/",children:"School Forum"}),h(le,{to:"/login",children:"Login"}),h(le,{to:"/register",children:"Register"})]})})]})},ar=(t,e,n)=>{let[r,i]=A.exports.useState(null),[s,o]=A.exports.useState(null);const a=A.exports.useRef(e).current,l=A.exports.useRef(n).current;return A.exports.useEffect(()=>{let u=Dr(se,t);a&&(u=ci(u,fr(...a))),l&&(u=ci(u,Hv(...l)));const c=ek(u,d=>{let f=[];d.docs.forEach(m=>{f.push({...m.data(),id:m.id})}),i(f),o(null)},d=>{o("could not fetch the data")});return()=>c()},[t,ci,Hv]),{documents:r,error:s}},dL=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,fL=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,pL=T.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	color: ${t=>t.theme.black};

	p {
		font-weight: 700;
		font-size: 1rem;

		:hover {
			color: ${t=>t.theme.accent};
	}
`,I0=T.button`
	padding: 0.8rem 1.5rem;
	background-color: ${t=>t.theme.accent};
	color: white;
	border-radius: 20px;
	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,mL=({profile:t})=>{if(!t)return null;const{user:e}=xn(),{document:n,isPending:r}=Ke("users",e&&e.uid),i=async()=>{const o=de(se,"users",t.id),a=de(se,"users",P.currentUser.uid);await X(o,{followers:Lt(P.currentUser.uid)}),await X(a,{following:Lt(t.id)})},s=async()=>{const o=de(se,"users",t.id),a=de(se,"users",P.currentUser.uid);await X(o,{followers:ze(P.currentUser.uid)}),await X(a,{following:ze(t.id)})};return E(dL,{children:[h(le,{to:`/profile/${t.id}`,children:E(pL,{children:[h("div",{children:h(fL,{src:t.photoURL})}),h("p",{children:t.displayName})]})}),P.currentUser&&(n&&n.following.includes(t.id)?h(I0,{onClick:s,children:"Unfollow"}):h(I0,{onClick:i,children:"Follow"}))]})},gL=T.div`
	margin: 1rem 0;

	> div {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem 0;
	}
`,iT=({profiles:t})=>t?h(gL,{children:h("div",{children:t.map(e=>h(mL,{profile:e},e.id))})}):null,yL=()=>{const{documents:t,error:e}=ar("users");return E("div",{children:[e&&h("p",{children:e.message}),h(iT,{profiles:t})]})},vL=T.div`
	padding: 1rem 0;
	border-radius: 20px;
	background-color: ${t=>t.theme.primary};
	display: flex;
	cursor: pointer;
`,wL=T.div`
	display: flex;
	align-items: center;
	gap: 0.325rem;
	color: ${t=>t.theme.black};
	font-size: 0.9rem;

	a {
		color: ${t=>t.theme.black};

		:hover {
			color: ${t=>t.theme.accent};
		}
	}
`,_L=T.img`
	width: 100%;
	border-radius: 50%;
	width: 1.5rem;
	height: 1.5rem;
`,SL=T.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	color: ${t=>t.theme.black};

	:hover {
		color: ${t=>t.theme.accent};
	}
`,EL=T.div`
	margin: 1rem 0;
	width: 100%;

	color: ${t=>t.theme.black};

	:hover {
		color: ${t=>t.theme.accent};
	}

	> h2 {
		font-size: 1.4rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.1rem;
	}

	> div {
		background-color: #737373;
		margin: 1rem 0;
	}
`,kL=T.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: #595959;
	font-size: 0.9rem;
	color: ${t=>t.theme.gray};
`,TL=T.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	> svg {
		z-index: 1;
		transform: scale(1.5);
	}
`,CL=T.div`
	text-align: center;
	padding: 0 0.5rem;

	> * {
		display: block;
	}
	> svg {
		width: 2.5rem;
		stroke: ${t=>t.theme.neutral};
		fill: ${t=>t.theme.primary};
		transition: all 0.1s ease-in-out;
	}

	> svg:hover {
		stroke: ${t=>t.theme.accent};
		fill: ${t=>t.theme.accent};
	}
`,IL=T.div`
	width: 100%;
	padding-right: 3.5rem;
`,xL=T.img`
	max-width: 20rem;
	width: 100%;
	margin: 0 auto;
`,bL=({post:t})=>{const{document:e}=Ke("users",t.author),{document:n}=Ke("groups",t.group),{documents:r}=ar("comments",["post","==",t.id]);if(!t||!e||!n)return null;const i=async()=>{if(!P.currentUser)return navigate("/login");const o=de(se,"posts",t.id);t.upvotes.some(a=>a===P.currentUser.uid)?X(o,{upvotes:ze(P.currentUser.uid)}):(t.downvotes.some(a=>a===P.currentUser.uid)&&X(o,{downvotes:ze(P.currentUser.uid)}),X(o,{upvotes:Lt(P.currentUser.uid)}))},s=async()=>{if(!P.currentUser)return navigate("/login");const o=de(se,"posts",t.id);t.downvotes.some(a=>a===P.currentUser.uid)?X(o,{downvotes:ze(P.currentUser.uid)}):(t.upvotes.some(a=>a===P.currentUser.uid)&&X(o,{upvotes:ze(P.currentUser.uid)}),X(o,{downvotes:Lt(P.currentUser.uid)}))};return E(vL,{children:[E(CL,{children:[h("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:()=>i(),children:h("path",{d:"m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z",fillRule:"nonzero"})}),h("p",{children:t.upvotes.length-t.downvotes.length}),h("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",onClick:()=>s(),xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z",fillRule:"nonzero"})})]}),E(IL,{children:[E(wL,{children:[h(le,{to:`/group/${t.group}`,children:E(SL,{children:[h(_L,{src:n&&n.photoURL,alt:"avatar"}),E("p",{children:[" ",n&&n.name]})]})}),h("span",{children:"\u2022"}),h("p",{children:" Posted by "}),h(le,{to:`/profile/${e.id}`,children:e&&e.displayName})]}),h(le,{to:`/group/${t.group}/post/${t.id}`,children:E(EL,{children:[h("h2",{children:t.title}),E("p",{children:[`${t.content.substring(0,200)}`,"..."]}),h("div",{children:t.photoURL&&h(xL,{src:t.photoURL})})]})}),h(kL,{children:E(TL,{children:[h(oL,{}),E("p",{children:[r&&r.length," Comments"]})]})})]})]})},AL=T.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 2rem 0;
`,ya=({posts:t})=>t?h(AL,{children:t&&t.map(e=>h(bL,{post:e},e.id))}):null,RL=T.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media (min-width: 768px) {
		flex-direction: row-reverse;

		> :nth-child(1) {
			flex-basis: 35%;
		}
		> :nth-child(2) {
			flex-basis: 65%;
		}
	}
`,$L=T.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background-color: ${t=>t.theme.primary};
	gap: 1rem;

	h3 {
		font-weight: 700;
		font-size: 1.2rem;
	}

	> :nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	> :nth-of-type(4) {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	a {
		color: ${t=>t.theme.black};
		:hover {
			color: ${t=>t.theme.accent};
		}
	}
`,PL=T.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
`,NL=T(le)`
	display: flex;
	align-items: center;
	gap: 0.8rem;

	color: ${t=>t.theme.black};
	:hover {
		color: ${t=>t.theme.accent};
	}

	svg {
		transform: scale(1.5);
	}
`,DL=T.div`
	> h3 {
		font-size: 1.8rem;
		font-weight: 700;
	}
`,OL=()=>{const{id:t}=In(),{document:e,error:n,isPending:r}=Ke("users",t),{documents:i,isPending2:s}=ar("posts",["author","==",t]),o=de(se,"users",t),a=async()=>{const u=de(se,"users",P.currentUser.uid);await X(o,{followers:Lt(P.currentUser.uid)}),await X(u,{following:Lt(t)})},l=async()=>{const u=de(se,"users",P.currentUser.uid);await X(o,{followers:ze(P.currentUser.uid)}),await X(u,{following:ze(t)})};return r||!i?h(Fn,{}):h("div",{children:E(RL,{children:[h("div",{children:h($L,{children:e?E(wn,{children:[h("div",{children:h(PL,{src:e.photoURL,alt:`${e.displayName}'s Profile`})}),E("div",{children:[h("h3",{children:e.displayName}),P.currentUser&&P.currentUser.uid===t&&E(NL,{to:"/settings/profile",children:[h(rT,{}),"Edit Profile"]}),P.currentUser&&P.currentUser.uid!==t&&h(wn,{children:e.followers.some(u=>u===P.currentUser.uid)?h("button",{onClick:l,children:"Unfollow"}):h("button",{onClick:a,children:"Follow"})})]}),h("div",{children:h("p",{children:e.bio===""?"No Bio":e.bio})}),E("div",{children:[h(le,{to:`/profile/${t}/followers`,children:E("p",{children:[h("span",{children:"Followers:"})," ",e.followers.length]})}),h(le,{to:`/profile/${t}/following`,children:E("p",{children:[h("span",{children:"Following:"})," ",e.following.length]})})]}),P.currentUser&&h("div",{children:E("p",{children:[h("span",{children:"Status: "}),e.online?"Online":"Offline"]})})]}):h("p",{children:"document does not exist"})})}),E(DL,{children:[h("h3",{children:P.currentUser&&P.currentUser.uid===e.id?"Your Posts":`${e.displayName}'s Posts`}),n&&h("p",{children:n.message}),h(ya,{posts:i}),i.length===0&&h("p",{children:"no posts"})]})]})})},x0=({Component:t})=>{const{isAuthReady:e,user:n}=xn();return e?n?h(t,{}):h(Yd,{to:"/"}):h(Fn,{})},ug=()=>{const[t,e]=A.exports.useState(null),[n,r]=A.exports.useState(null),[i,s]=A.exports.useState(!1);return{uploadFile:async(a,l)=>new Promise(async(u,c)=>{s(!0),r(void 0);const d=OD(a,l);d.on("state_changed",f=>{e(f)},f=>{s(!1),r(f),u(void 0)},()=>{s(!1),e(void 0),u({ref:d.snapshot.ref})})}),snapshot:t,uploading:i,error:n}},LL=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	> h3 {
		font-size: 1.1rem;
	}
`,ML=T.label`
	border: 1px solid ${t=>t.theme.accent};
	border-radius: 20px;
	display: inline-block;
	padding: 0.7rem 1.5rem;
	cursor: pointer;
	background-color: ${t=>t.theme.accent};
	color: white;

	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		> svg {
			transform: scale(1.3);
		}
	}

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}

	> input {
		display: none;
	}
`,UL=({user_id:t})=>{const[e,n]=A.exports.useState(null),[r,i]=A.exports.useState(null),{uploadFile:s,uploading:o}=ug(),a=async u=>{console.log("handleSaveAvatarChanges");const c=de(se,"users",t),d=eg(tg,`profiles/${t}/${u.name}`);await s(d,u),Zm(d).then(async f=>{await X(c,{photoURL:f})}),ke.success("Profile updated successfully")};return E(LL,{children:[h("h3",{children:"Avatar"}),h("form",{children:E(ML,{children:[E("div",{children:[h(iL,{}),"Change Avatar"]}),h("input",{type:"file",name:"avatar",onChange:u=>{n(null);let c=u.target.files[0];if(!c){i("Please select a file");return}if(!c.type.includes("image")){i("Selected file must be an image");return}if(c.size>1e6){i("Image file size must be less than 100kb");return}i(null),a(c)}}),o&&h("p",{children:"Uploading..."})]})})]})},FL=T.div`
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			font-size: 1.1rem;
		}

		> button {
			background: none;
			padding: 0.8rem 1.5rem;
			border: 1px solid ${t=>t.theme.accent};
			border-radius: 20px;
			:hover {
				background: ${t=>t.theme.accent};
				color: #fff;
			}
		}
	}
`,zL=T.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	> input {
		width: 100%;
		border: 1px solid ${t=>t.theme.black};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;

		:focus {
			border: 1px solid ${t=>t.theme.accent};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
`,b0=T.button`
	cursor: pointer;
	background: none;
	border: 1px solid ${t=>t.theme.accent};
	border-radius: 3px;
	margin-top: 2rem;
	padding: 0.8rem;
	color: ${t=>t.theme.black};
	font-weight: 600;
	font-size: 0.8rem;
	:active {
		outline: 0;
	}
	:hover {
		background: ${t=>t.theme.accent};
		color: #fff;
	}
`,jL=({user_id:t})=>{const[e,n]=A.exports.useState(!1),[r,i]=A.exports.useState("");return E(FL,{children:[E("div",{children:[h("h3",{children:"Bio"}),!e&&h(wn,{children:h("button",{onClick:()=>n(!0),children:"Edit Bio"})})]}),e&&E(zL,{onSubmit:async o=>{console.log("nice"),o.preventDefault();const a=de(se,"users",t);await X(a,{bio:r}),n(!1),ke.success("Profile updated successfully")},children:[h("textarea",{type:"text",name:"bio",onChange:o=>i(()=>o.target.value),value:r,col:"3"}),E("div",{children:[h(b0,{type:"submit",value:"",children:"Save Changes"}),h(b0,{onClick:()=>n(!1),children:"Cancel"})]})]})]})},BL=T.div`
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			font-size: 1.1rem;
		}

		> button {
			background: none;
			padding: 0.8rem 1.5rem;
			border: 1px solid ${t=>t.theme.accent};
			border-radius: 20px;
			:hover {
				background: ${t=>t.theme.accent};
				color: #fff;
			}
		}
	}
`,VL=T.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	> input {
		width: 100%;
		border: 1px solid ${t=>t.theme.black};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;

		:focus {
			border: 1px solid ${t=>t.theme.accent};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
`,A0=T.button`
	cursor: pointer;
	background: none;
	border: 1px solid ${t=>t.theme.accent};
	border-radius: 3px;
	margin-top: 2rem;
	padding: 0.8rem;
	color: ${t=>t.theme.black};
	font-weight: 600;
	font-size: 0.8rem;
	:active {
		outline: 0;
	}
	:hover {
		background: ${t=>t.theme.accent};
		color: #fff;
	}
`,HL=({user_id:t})=>{const[e,n]=A.exports.useState(""),[r,i]=A.exports.useState(!1);return E(BL,{children:[E("div",{children:[h("h3",{children:"Display Name"}),!r&&h(wn,{children:h("button",{onClick:()=>i(!0),children:"Edit Display Name"})})]}),r&&E(VL,{onSubmit:async o=>{console.log("nice"),o.preventDefault();const a=de(se,"users",t);await X(a,{displayName:e}),i(!1),ke.success("Profile updated successfully")},children:[h("input",{type:"text",onChange:o=>n(()=>o.target.value),value:e,placeholder:"Display Name"}),E("div",{children:[h(A0,{type:"submit",children:"Save Changes"}),h(A0,{type:"button",onClick:()=>i(!1),children:"Cancel"})]})]})]})},qL=T.div`
	margin: 2rem;
`,GL=T(le)`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin: 1rem 0;
	font-size: 1.1rem;
	svg {
		transform: scale(1.5);
	}
`,WL=T.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 2rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;

	h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`,KL=()=>{const[t,e]=A.exports.useState({displayName:"",bio:"",avatar:null});or();const{uid:n}=P.currentUser,{document:r,error:i,isPending:s}=Ke("users",n);return A.exports.useEffect(()=>{s||e({displayName:r.displayName,bio:r.bio,avatar:r.photoURL})},[s]),de(se,"users",n),E(qL,{children:[E(GL,{to:`/profile/${P&&P.currentUser.uid}`,children:[h(tL,{}),"Go Back to Profile"]}),E(WL,{children:[E("div",{children:[h("h3",{children:"Change Profile"}),h("p",{children:"This information will be displayed publicly so be careful what you share."})]}),h(HL,{user_id:n}),h(jL,{user_id:n}),h(UL,{user_id:n})]})]})},QL=T.div`
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			font-size: 1.1rem;
		}

		> button {
			background: none;
			padding: 0.8rem 1.5rem;
			border: 1px solid ${t=>t.theme.accent};
			border-radius: 20px;
			:hover {
				background: ${t=>t.theme.accent};
				color: #fff;
			}
		}
	}
`,YL=T.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	> input {
		width: 100%;
		border: 1px solid ${t=>t.theme.black};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;

		:focus {
			border: 1px solid ${t=>t.theme.accent};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
`,R0=T.button`
	cursor: pointer;
	background: none;
	border: 1px solid ${t=>t.theme.accent};
	border-radius: 3px;
	margin-top: 2rem;
	padding: 0.8rem;
	color: ${t=>t.theme.black};
	font-weight: 600;
	font-size: 0.8rem;
	:active {
		outline: 0;
	}
	:hover {
		background: ${t=>t.theme.accent};
		color: #fff;
	}
`,XL=()=>{const[t,e]=A.exports.useState(!1),[n,r]=A.exports.useState("");return E(QL,{children:[E("div",{children:[h("h3",{children:"Email "}),!t&&h("button",{onClick:()=>e(!0),children:"Edit Email"})]}),t&&E(YL,{onSubmit:async s=>{s.preventDefault(),await lb(P.currentUser,n),ke.success("Email updated successfully")},children:[h("input",{type:"email",name:"email",value:n,onChange:s=>r(s.target.value),placeholder:"New Email"}),E("div",{children:[h(R0,{type:"submit",children:"Save Changes"}),h(R0,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})]})},JL=T.div`
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			font-size: 1.1rem;
		}

		> button {
			background: none;
			padding: 0.8rem 1.5rem;
			border: 1px solid ${t=>t.theme.accent};
			border-radius: 20px;
			:hover {
				background: ${t=>t.theme.accent};
				color: #fff;
			}
		}
	}
`,ZL=T.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	> input {
		width: 100%;
		border: 1px solid ${t=>t.theme.black};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;

		:focus {
			border: 1px solid ${t=>t.theme.accent};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
`,$0=T.button`
	cursor: pointer;
	background: none;
	border: 1px solid ${t=>t.theme.accent};
	border-radius: 3px;
	margin-top: 2rem;
	padding: 0.8rem;
	color: ${t=>t.theme.black};
	font-weight: 600;
	font-size: 0.8rem;
	:active {
		outline: 0;
	}
	:hover {
		background: ${t=>t.theme.accent};
		color: #fff;
	}
`,e4=()=>{const[t,e]=A.exports.useState(!1),[n,r]=A.exports.useState("");return E(JL,{children:[E("div",{children:[h("h3",{children:"Password "}),!t&&h("button",{onClick:()=>e(!0),children:"Edit Password"})]}),t&&E(ZL,{onSubmit:async s=>{s.preventDefault(),await ub(P.currentUser,n),ke.success("Password updated successfully")},children:[h("input",{type:"password",name:"password",value:n,onChange:s=>r(s.target.value),placeholder:"New Password"}),E("div",{children:[h($0,{type:"submit",children:"Save Changes"}),h($0,{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})]})},t4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h3 {
		font-size: 1.1rem;
	}

	> button {
		background-color: ${t=>t.theme.accent};
		border-radius: 20px;
		padding: 0.8rem 1.5rem;
		color: white;
		display: flex;
		align-items: center;
		gap: 1rem;

		:hover {
			background-color: ${t=>t.theme.accentHover};
		}

		> svg {
			transform: scale(1.5);
		}
	}
`,n4=()=>{const t=or();return E(t4,{children:[h("h3",{children:"Delete Account"}),E("button",{onClick:async()=>{prompt("Are you sure you want to delete this account? (y/n)").toLowerCase()==="y"&&(db(P.currentUser),ke.success("User deleted successfully"),t("/"))},children:[h(aL,{}),"Delete Account"]})]})},r4=T.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,i4=T.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	h3 {
		font-weight: 600;
	}
`,s4=()=>h(r4,{children:E(i4,{children:[E("div",{children:[h("h2",{children:"Change Account"}),h("p",{children:"Account Settings. Make sure to not forget your email address and password."})]}),h(XL,{}),h(e4,{}),h(n4,{})]})}),o4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
	cursor: pointer;
`,a4=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,l4=T.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	color: ${t=>t.theme.black};

	p {
		margin: 0.5rem;
	}
	p:first-of-type {
		font-weight: 700;
		font-size: 1.2rem;
		:hover {
			color: ${t=>t.theme.accent};
	}

`,P0=T.button`
	padding: 0.8rem 1.5rem;
	background-color: ${t=>t.theme.accent};
	color: white;
	border-radius: 20px;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,u4=({group:t})=>{if(!t)return null;const e=async()=>{const r=de(se,"groups",t.id);X(r,{members:arrayUnion(P.currentUser.uid)}),ke.success(`You joined ${t.name}`)},n=async()=>{const r=de(se,"groups",t.id);X(r,{members:ze(P.currentUser.uid)}),ke.success(`You left ${t.name}`)};return E(o4,{children:[h(le,{to:`/group/${t.id}`,children:E(l4,{children:[h("div",{children:h(a4,{src:t.photoURL,alt:`${t.name}'s Group Photo`})}),E("div",{children:[h("p",{children:t.name}),h("p",{children:t.description})]})]})}),P.currentUser&&(t&&t.members.some(r=>r===P.currentUser.uid)?h(P0,{onClick:n,children:"Leave Group"}):h(P0,{onClick:e,children:"Join Group"}))]})},c4=T.div`
	margin: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 2rem 0;
`,sT=({groups:t})=>t?h(c4,{children:t&&t.map(e=>h(u4,{group:e},e.id))}):null,h4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem 0;

	> h2 {
		font-size: 2rem;
	}

	> a {
		border: 1px solid ${t=>t.theme.accent};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;
		color: ${t=>t.theme.black};

		:hover {
			background: ${t=>t.theme.accent};
			color: #fff;
		}
	}
`,d4=()=>{const{user:t}=xn();console.log(t.uid);const{documents:e,error:n}=ar("groups",["members","array-contains",t.uid]);return E("div",{children:[E(h4,{children:[h("h2",{children:"Groups"}),P.currentUser&&h(le,{to:"/group/create",children:"Create Group"})]}),n&&h("p",{children:n.message}),h(sT,{groups:e})]})},nd=T.button`
	padding: 0.8rem 1.5rem;
	border: 1px solid ${t=>t.theme.accent};
	border-radius: 20px;
	color: ${t=>t.theme.black};
	background: none;

	:hover {
		background-color: ${t=>t.theme.accent};
		color: white;
	}
`,f4=T.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	padding: 2rem 4rem;
	z-index: 3;

	> h1 {
		font-size: 1.5rem;
		text-align: left;
		margin-bottom: 2rem;
	}

	> {
		margin: 0;
	}
`,p4=T.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2;
`,m4=T.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;

	> textarea {
		padding: 1rem 1.5rem;
		width: 20rem;
		border: 1px solid ${t=>t.theme.black};
		border-radius: 20px;

		:active {
			border: 1px solid ${t=>t.theme.black};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;

		> button {
			border-radius: 3px;
			border: 1px solid ${t=>t.theme.accent};
			margin-top: 2rem;
			padding: 0.8rem;
			color: ${t=>t.theme.black};
			font-weight: 600;
			font-size: 0.8rem;
		}
	}
`,g4=({id:t,descriptionValue:e})=>{const[n,r]=A.exports.useState(!1),[i,s]=A.exports.useState(e);return E("div",{children:[h(nd,{onClick:()=>r(!0),children:"Edit Description"}),n&&E(wn,{children:[h(p4,{onClick:()=>r(!1)}),E(f4,{children:[h("h1",{children:"Edit Description"}),E(m4,{onSubmit:async a=>{a.preventDefault();const l=de(se,"groups",t);r(!1),await X(l,{description:i}),ke.success("Group updated successfully")},children:[h("textarea",{type:"text",name:"description",placeholder:"description",value:i,onChange:a=>s(a.target.value)}),E("div",{children:[h(nd,{type:"submit",children:"Save Changes"}),h(nd,{type:"button",onClick:()=>r(!1),children:"Cancel"})]})]})]})]})]})},N0=T.div`
	padding-top: 1rem;
`,Ff=()=>{const{id:t}=In(),{documents:e,error:n}=ar("posts",t?["group","==",t]:null);return t?h("div",{children:E(N0,{children:[n&&h("p",{children:n.message}),h(ya,{posts:e})]})}):h("div",{children:E(N0,{children:[h("div",{}),n&&h("p",{children:n.message}),h(ya,{posts:e})]})})};function oT(t){return Ft({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(t)}const y4=T.label`
	border: 1px solid ${t=>t.theme.accent};
	display: inline-block;
	padding: 0.7rem 1.5rem;
	cursor: pointer;
	border-radius: 20px;
	color: ${t=>t.theme.black};

	:hover {
		background-color: ${t=>t.theme.accent};
		color: #fff;
	}
	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 14px;

		> svg {
			transform: scale(1);
		}
	}

	> input {
		display: none;
	}
`,v4=({group:t})=>{const[e,n]=A.exports.useState(t.photoURL),[r,i]=A.exports.useState(null),{uploadFile:s,uploading:o}=ug(),a=async u=>{const c=de(se,"groups",t.id),d=eg(tg,`groups/${t.id}${u.name}`);await s(d,u),Zm(d).then(async f=>{await X(c,{photoURL:f})}),ke.success("Group Photo updated successfully")};return h("div",{children:h("form",{children:E(y4,{children:[E("div",{children:[h(oT,{}),"Change Avatar"]}),h("input",{type:"file",name:"avatar",onChange:u=>{n(null);let c=u.target.files[0];if(!c){i("Please select a file");return}if(!c.type.includes("image")){i("Selected file must be an image");return}if(c.size>1e6){i("Image file size must be less than 100kb");return}i(null),a(c)}}),o&&h("p",{children:"Uploading..."})]})})})},w4=T.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
	gap: 1rem;
	padding: 1rem;
	background: ${t=>t.theme.primary};
	border-radius: 20px;

	> :last-child {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: right;
	}
`,_4=T.div`
	display: flex;
	gap: 1rem;

	> :first-child {
		width: 5rem;
	}

	> :last-child {
		display: flex;
		flex-direction: column;
	}
	& h2 {
		font-size: 1.8rem;
		font-weight: 700;
		margin: 0;
	}
`,S4=T.img`
	border-radius: 100%;
	width: 5rem;
	height: 5rem;
`,E4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	margin-top: 2rem;
	border-radius: 20px;
	background-color: ${t=>t.theme.primary};
`,k4=T(le)`
	padding: 1rem 2rem;
	width: 100%;
	border-radius: 20px;
	background-color: ${t=>t.theme.neutral};
	color: ${t=>t.theme.black};

	:hover {
		color: ${t=>t.theme.accent};
	}
`,T4=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,D0=T.button`
	padding: 0.8rem 1.5rem;
	background-color: ${t=>t.theme.accent};
	color: white;
	border-radius: 20px;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,C4=()=>{const{id:t}=In(),{document:e,error:n,isPending:r}=Ke("groups",t),{documents:i}=ar("posts");console.log(i);const s=de(se,"groups",t);if(r)return h(Fn,{});const o=async()=>{X(s,{members:Lt(P.currentUser.uid)}),ke.success(`You joined ${e.name}`)},a=async()=>{X(s,{members:ze(P.currentUser.uid)}),ke.success(`You left ${e.name}`)};return h("div",{children:e?E(wn,{children:[E(w4,{children:[E(_4,{children:[h("div",{children:h(S4,{src:e.photoURL})}),E("div",{children:[h("h2",{children:e.name}),h("p",{children:e.description}),h(le,{to:`/group/${e.id}/members`,children:E("p",{children:["Members: ",e.members.length]})})]})]}),E("div",{children:[P.currentUser&&h("div",{children:e.members.some(l=>l===P.currentUser.uid)?h(D0,{onClick:a,children:"Leave"}):h(D0,{onClick:o,children:"Join"})}),P.currentUser&&e.members.some(l=>l===P.currentUser.uid)&&P.currentUser.uid===e.admin&&E(wn,{children:[h(g4,{id:e.id,descriptionValue:e.description}),h(v4,{group:e})]})]})]}),P.currentUser&&e.members.some(l=>l===P.currentUser.uid)&&E(E4,{children:[h("div",{children:h(T4,{src:P.currentUser.photoURL})}),h(k4,{to:`/group/${e.id}/post/create`,children:"Create Post"})]}),h(ya,{posts:i})]}):h("p",{children:"document does not exist"})})},I4=T.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,x4=T.h2`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${t=>t.theme.black};
`,b4=T.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`,O0=T.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: ${t=>t.theme.darkGray};
`,A4=T.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;

	:focus {
		border: 1px solid ${t=>t.theme.accent};
		outline: none;
	}
`,R4=T.textarea`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;
	:focus {
		border: 1px solid ${t=>t.theme.accent}};
		outline: none;
	}
`,$4=T.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${t=>t.theme.accent};
	margin-top: 2rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}

	:active {
		outline: 0;
	}
`,P4=()=>{const[t,e]=A.exports.useState({name:"",description:""}),{name:n,description:r}=t,i=or(),s=l=>{e({...t,[l.target.name]:l.target.value})},o=async l=>{const u=ci(Dr(se,"groups"),fr("name","==",l)),c=await Vl(u);let d=0;return c.forEach(f=>{d+=1}),d>0&&ke.error("Group already exists"),d>0};return E(I4,{children:[h(x4,{children:"Create Group"}),E(b4,{onSubmit:async l=>{l.preventDefault();const u=eT.url(`${n}@group.com`,{size:"200",r:"pg",default:"retro"});if(await o(n))e({...t,name:""}),alert("Group name already used");else{const c=await Wm(Dr(se,"groups"),{name:n,description:r,photoURL:`https:${u}`,members:[P.currentUser.uid],admin:P.currentUser.uid});c&&(ke.success("Group created successfully"),i(`/group/${c.id}`))}},children:[E("div",{children:[h(O0,{htmlFor:"name",children:"Group Name"}),h(A4,{type:"text",name:"name",value:n,onChange:s,placeholder:"Name"})]}),E("div",{children:[h(O0,{htmlFor:"name",children:"Description"}),h(R4,{type:"text",name:"description",value:r,onChange:s,placeholder:"Description"})]}),h($4,{type:"submit",children:"Create Group"})]})]})},N4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,D4=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,O4=T.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	color: ${t=>t.theme.black};

	p {
		font-weight: 700;
		font-size: 1rem;

		:hover {
			color: ${t=>t.theme.accent};
	}
`,L4=T.button`
	padding: 0.8rem 1.5rem;
	background-color: ${t=>t.theme.accent};
	color: white;
	border-radius: 20px;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,M4=({followerId:t})=>{var o;const{document:e,isPending:n}=Ke("users",t),{document:r,isPending:i}=Ke("users",(o=P.currentUser)==null?void 0:o.uid);if(n||i)return h(Fn,{});const s=async()=>{const a=de(se,"users",t),l=de(se,"users",P.currentUser.uid);await X(a,{followers:Lt(P.currentUser.uid)}),await X(l,{following:Lt(t)})};return E(N4,{children:[h(le,{to:`/profile/${e.id}`,children:E(O4,{children:[h("div",{children:h(D4,{src:e.photoURL})}),h("p",{children:e.displayName})]})}),r.following.includes(t)?null:h(L4,{onClick:s,children:"Follow Back"})]})},U4=T.div`
	padding-top: 4rem;

	> h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	> div {
		display: flex;
		flex-direction: column;
	}
`,F4=()=>{const{id:t}=In(),[e,n]=A.exports.useState([]),{document:r,isPending:i}=Ke("users",t);return A.exports.useEffect(()=>{r&&n(r.followers)}),i?h(Fn,{}):e?E(U4,{children:[h("h2",{children:"Followers"}),h("div",{children:e.map(s=>h(M4,{followerId:s},s))}),e.length===0&&h("div",{children:"No followers"})]}):null},z4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,j4=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,B4=T.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	color: ${t=>t.theme.black};

	p {
		font-weight: 700;
		font-size: 1rem;

		:hover {
			color: ${t=>t.theme.accent};
	}
`,V4=T.button`
	padding: 0.8rem 1.5rem;
	background-color: ${t=>t.theme.accent};
	color: white;
	border-radius: 20px;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}
`,H4=({followingId:t})=>{const{document:e,isPending:n}=Ke("users",t);if(n)return h(Fn,{});const r=async()=>{const i=de(se,"users",t),s=de(se,"users",P.currentUser.uid);await X(i,{followers:ze(P.currentUser.uid)}),await X(s,{following:ze(t)})};return E(z4,{children:[h(le,{to:`/profile/${e.id}`,children:E(B4,{children:[h("div",{children:h(j4,{src:e.photoURL})}),h("h2",{children:e.displayName})]})}),h(V4,{onClick:r,children:"Unfollow"})]})},q4=T.div`
	padding-top: 4rem;

	> h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
`,G4=()=>{const{id:t}=In(),[e,n]=A.exports.useState([]),{document:r,isPending:i}=Ke("users",t);return A.exports.useEffect(()=>{r&&n(r.following)}),i?h(Fn,{}):e?E(q4,{children:[h("h2",{children:"Following"}),E("div",{children:[e.map(s=>h(H4,{followingId:s},s)),e.length===0&&h("div",{children:"No following"})]})]}):null},W4=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	padding: 1rem;
	border-radius: 3px;
`,K4=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,Q4=T.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`,L0=T.button`
	padding: 0.8rem 1.5rem;
	background-color: #1c3d52;
	color: white;
	border-radius: 3px;
`,Y4=({memberId:t})=>{const{document:e,isPending:n}=Ke("users",t),{user:r}=xn(),{document:i,isPending:s}=Ke("users",r&&r.uid);if(n)return h(Fn,{});const o=async()=>{const l=de(se,"users",e.id),u=de(se,"users",P.currentUser.uid);await X(l,{followers:Lt(P.currentUser.uid)}),await X(u,{following:Lt(e.id)})},a=async()=>{const l=de(se,"users",e.id),u=de(se,"users",P.currentUser.uid);await X(l,{followers:ze(P.currentUser.uid)}),await X(u,{following:ze(e.id)})};return E(W4,{children:[h(le,{to:`/profile/${e.id}`,children:E(Q4,{children:[h("div",{children:h(K4,{src:e.photoURL})}),h("h2",{children:e.displayName})]})}),P.currentUser&&(i&&i.following.includes(e.id)?h(L0,{onClick:a,children:"Unfollow"}):h(L0,{onClick:o,children:"Follow"}))]})},X4=T.div`
	padding-top: 4rem;

	> div {
		display: flex;
		flex-direction: column;
	}

	> h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`,J4=()=>{const{id:t}=In(),[e,n]=A.exports.useState([]),{document:r,isPending:i}=Ke("groups",t);return A.exports.useEffect(()=>{r&&n(r.members)}),i?h(Fn,{}):e?E(X4,{children:[h("h2",{children:"Members"}),h("div",{children:e.map(s=>h(Y4,{memberId:s},s))})]}):null},Z4=T.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,eM=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`,tM=T.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		> svg {
			width: 1.3rem;
			cursor: pointer;
			:hover {
				color: ${t=>t.theme.accent};
			}
		}
	}
`,nM=T.div`
	> a {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: ${t=>t.theme.black};
		:hover {
			color: ${t=>t.theme.accent};
		}
	}

	& img {
		border-radius: 50%;
		width: 1.7rem;
		height: 1.7rem;
	}
`,rM=({comment:t})=>{const{document:e}=Ke("users",t.user);if(!t||!e)return null;const n=de(se,"comments",t.id),r=async()=>{t.upvotes.some(s=>s===P.currentUser.uid)?X(n,{upvotes:ze(P.currentUser.uid)}):(t.downvotes.some(s=>s===P.currentUser.uid)&&X(n,{downvotes:ze(P.currentUser.uid)}),X(n,{upvotes:Lt(P.currentUser.uid)}))},i=async()=>{t.downvotes.some(s=>s===P.currentUser.uid)?X(n,{downvotes:ze(P.currentUser.uid)}):(t.upvotes.some(s=>s===P.currentUser.uid)&&X(n,{upvotes:ze(P.currentUser.uid)}),X(n,{downvotes:Lt(P.currentUser.uid)}))};return E(Z4,{children:[h("div",{children:h("p",{children:t.content})}),E(eM,{children:[E(tM,{children:[P.currentUser&&E("div",{onClick:r,children:[t.upvotes.some(s=>s===P.currentUser.uid)?h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}),h("p",{children:t.upvotes.length})]}),P.currentUser&&E("div",{onClick:i,children:[t.downvotes.some(s=>s===P.currentUser.uid)?h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}):h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),h("p",{children:t.downvotes.length})]})]}),h(nM,{children:E(le,{to:`/profile/${e.id}`,children:[h("img",{src:e&&e.photoURL,alt:"avatar"}),h("p",{children:e&&e.displayName})]})})]})]})},iM=T.div`
	margin: 2rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`,sM=({comments:t})=>t?h(iM,{children:t&&t.map(e=>h(rM,{comment:e},e.id))}):null,oM=T.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> textarea {
		border-radius: 20px;
		:focus {
			outline: none;
			border: 1px solid ${t=>t.theme.accent};
		}
	}

	> button {
		padding: 1rem 2rem;
		background-color: ${t=>t.theme.accent};
		border-radius: 20px;
		color: white;
		font-weight: 700;

		:hover {
			background-color: ${t=>t.theme.accentHover};
		}
	}
`,aM=({handleNewComment:t})=>{const[e,n]=A.exports.useState("");return E(oM,{onSubmit:i=>{i.preventDefault(),t(e),n("")},children:[h("textarea",{name:"comment",value:e,onChange:i=>n(i.target.value),rows:"6"}),h("button",{type:"submit",children:"Comment"})]})},lM=T.h2`
	font-size: 1.6rem;
	margin-bottom: 1rem;
`,uM=T.div`
	margin: 1.5rem 0;
`,cM=()=>{const{post_id:t}=In(),{documents:e,error:n}=ar("comments",["post","==",t]),r=async i=>{const s={user:P.currentUser.uid,content:i,post:t,upvotes:[],downvotes:[],replies:[]};await Wm(Dr(se,"comments"),s)};return E(uM,{children:[h(lM,{children:"Comments"}),P&&P.currentUser&&h(aM,{handleNewComment:r}),E("div",{children:[n&&h("p",{children:n.message}),h(sM,{comments:e})]})]})},hM=T.div`
	margin: 0 auto;
	margin-top: 2rem;
	padding: 2rem 0;
	border-radius: 20px;
	background-color: ${t=>t.theme.primary};
	display: flex;
	flex-direction: column;
`,dM=T.div`
	display: flex;
`,fM=T.div`
	display: flex;
	align-items: center;
	gap: 0.375rem;
	font-size: 1rem;

	> a {
		color: ${t=>t.theme.black};
	}
	a:hover {
		color: ${t=>t.theme.accent};
	}
`,pM=T.img`
	width: 100%;
	border-radius: 50%;
	width: 1.7rem;
	height: 1.7rem;
`,mM=T.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	color: #262626;

	p {
		color: ${t=>t.theme.black};
	}

	p:hover {
		color: ${t=>t.theme.accent};
	}
`,gM=T.div`
	margin: 1rem 0;
	width: 100%;

	> h2 {
		font-size: 1.6rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.2rem;
	}

	> div {
		background-color: #737373;
		margin: 1rem 0;
	}
`,yM=T.div`
	text-align: center;
	padding: 0 0.7rem;

	> * {
		display: block;
	}

	& svg {
		cursor: pointer;
		width: 2.5rem;
		stroke: ${t=>t.theme.accent};
		fill: ${t=>t.theme.primary};
		transition: all 0.1s ease-in-out;
	}

	& svg:hover {
		stroke: ${t=>t.theme.accent};
		fill: ${t=>t.theme.accent};
	}

	@media (min-width: 768px) {
		& svg {
			width: 2.7rem;
		}
	}
`,vM=T.div`
	width: 100%;
`,wM=T.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	color: ${t=>t.theme.gray};
	font-size: 1rem;

	& svg {
		transform: scale(1.5);
	}

	& p {
		display: none;
	}

	@media (min-width: 768px) {
		& p {
			display: block;
		}
		& a {
			display: flex;
			align-items: center;
			gap: 0.7rem;
			color: ${t=>t.theme.gray};

			:hover {
				color: ${t=>t.theme.accent};
			}
		}
	}
`,_M=T.img`
	max-width: 20rem;
	width: 100%;
	margin: 0 auto;
`,SM=T.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.7rem;
`,EM=()=>{const{group_id:t,post_id:e}=In(),{document:n,error:r,isPending:i}=Ke("posts",e),{document:s}=Ke("users",n&&n.author),{document:o}=Ke("groups",n&&n.group),{documents:a}=ar("comments",["post","==",e]),l=de(se,"posts",e),u=or();if(i)return h(Fn,{});if(!s)return null;const c=async()=>{if(!P.currentUser)return u("/login");n.upvotes.some(m=>m===P.currentUser.uid)?X(l,{upvotes:ze(P.currentUser.uid)}):(n.downvotes.some(m=>m===P.currentUser.uid)&&X(l,{downvotes:ze(P.currentUser.uid)}),X(l,{upvotes:Lt(P.currentUser.uid)}))},d=async()=>{if(!P.currentUser)return u("/login");n.downvotes.some(m=>m===P.currentUser.uid)?X(l,{downvotes:ze(P.currentUser.uid)}):(n.upvotes.some(m=>m===P.currentUser.uid)&&X(l,{upvotes:ze(P.currentUser.uid)}),X(l,{downvotes:Lt(P.currentUser.uid)}))},f=async()=>{await xN(de(se,"posts",e)),u(`/group/${t}/`)};return h("div",{children:n?E("div",{children:[h(hM,{children:E(dM,{children:[E(yM,{children:[E("div",{onClick:c,children:[P.currentUser&&!n.upvotes.some(m=>m===P.currentUser.uid)?h("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z",fillRule:"nonzero"})}):h("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z",fillRule:"nonzero"})}),h("span",{children:n.upvotes.length})]}),E("div",{onClick:d,children:[n.downvotes.some(m=>m===P.currentUser.uid)?h("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z",fillRule:"nonzero"})}):h("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:h("path",{d:"m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z",fillRule:"nonzero"})}),h("span",{children:n.downvotes.length})]})]}),E(vM,{children:[E(fM,{children:[h(le,{to:`/group/${n.group}`,children:E(mM,{children:[h(pM,{src:o&&o.photoURL,alt:"avatar"}),h("p",{children:o&&o.name})]})}),h("span",{children:"\u2022"}),h("p",{children:" posted by "}),h(le,{to:`/profile/${s.id}`,children:h("p",{children:s&&s.displayName})})]}),E(gM,{user:P.currentUser,children:[h("h2",{children:n.title}),h("p",{children:n.content}),n.photoURL&&h("div",{children:h(_M,{src:n.photoURL,alt:n.title})})]}),E(wM,{children:[E(SM,{children:[h(sL,{}),E("p",{children:[a&&a.length," ","Comments"]})]}),P.currentUser&&P.currentUser.uid===n.author&&E(le,{to:`/group/${n.group}/post/${n.id}/edit`,children:[h(rT,{}),h("p",{children:"Edit Post"})]}),P.currentUser&&P.currentUser.uid===n.author&&E("a",{onClick:f,href:"#",children:[h(rL,{}),h("p",{children:"Delete Post"})]})]})]})]})}),h(cM,{})]}):h("p",{children:"document does not exist"})})},kM=T.label`
	border: 1px solid #1c3d52;
	border-radius: 20px;
	display: inline-block;
	padding: 0.7rem 1.5rem;
	cursor: pointer;

	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		> svg {
			transform: scale(1.3);
		}
	}

	:hover {
		background-color: ${t=>t.theme.accent};
	}

	> input {
		display: none;
	}
`,TM=T.img`
	max-width: 100%;
`,CM=({handlePhotoChange:t,photo:e})=>{const[n,r]=A.exports.useState(null),{uploadFile:i,uploading:s}=ug();return In(),E("div",{children:[h(TM,{src:e&&e}),E(kM,{children:[E("div",{children:[h(oT,{}),"Upload File"]}),h("input",{type:"file",name:"avatar",onChange:async a=>{t(null),r(null);let l=a.target.files[0];if(!l){alert("Please select a file");return}if(!l.type.includes("image")){alert("Selected file must be an image");return}if(l.size>1e6){alert("Image file size must be less than 1mb");return}const u=eg(tg,`posts/${l.name}`);await i(u,l),Zm(u).then(c=>{t(c)}),r(l)}})]}),s&&h("p",{children:"Uploading"})]})},IM=T.div`
	text-align: right;
	display: flex;
`,xM=T.div`
	cursor: pointer;
	padding: 1rem 2rem;
	border: 1px solid #000;
	position: relative;
	border: 1px solid ${t=>t.theme.black};
	border-radius: 20px;

	:hover {
		border: 1px solid ${t=>t.theme.accent};
	}
`,bM=T.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 60px;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	text-align: center;

	> div {
		padding: 1rem 2rem;
		position: relative;
		transition: border-bottom 0.2 ease-in-out;

		:hover {
			background-color: ${t=>t.theme.accent};
		}
	}
`;function AM({list:t,value:e,setSelect:n}){const[r,i]=A.exports.useState(!1),[s,o]=A.exports.useState(null);return A.exports.useEffect(()=>{e&&t&&t.find(a=>{a.id===e&&(o(a.name),n(a.id))})},[]),h(IM,{children:E(xM,{onClick:()=>i(a=>!a),children:[h("div",{children:s||"Select Group"}),h(bM,{children:r&&t.map(a=>h("div",{value:a.id,onClick:()=>{n(a.id),o(a.name)},children:a.name},a.id))})]})})}const RM=T.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,$M=T.h2`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${t=>t.theme.black};
`,PM=T.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`,M0=T.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: ${t=>t.theme.darkGray};
`,NM=T.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;

	:focus {
		border: 1px solid ${t=>t.theme.accent};
		outline: none;
	}
`,DM=T.textarea`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;
	:focus {
		border: 1px solid ${t=>t.theme.accent}};
		outline: none;
	}
`,U0=T.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${t=>t.theme.accent};
	margin-top: 2rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}

	:active {
		outline: 0;
	}
`,F0=()=>{const[t,e]=A.exports.useState({title:"",content:"",photo:null}),{group_id:n}=In(),[r,i]=A.exports.useState(n||null),{user:s}=xn(),{documents:o}=ar("groups",["members","array-contains",s.uid]),{title:a,content:l,photo:u}=t,c=or(),d=g=>{e({...t,[g.target.name]:g.target.value})};return h("div",{children:E(RM,{children:[h($M,{children:"Create a Post"}),h("div",{}),h(AM,{setSelect:i,value:r,list:o&&o}),E(PM,{onSubmit:async g=>{g.preventDefault();const k=await Wm(Dr(se,"posts"),{title:a,content:l,photoURL:u,author:P.currentUser.uid,group:r,upvotes:[],downvotes:[],created_at:tk()});k&&(ke.success("Post created successfully"),c(`/group/${r}/post/${k.id}`))},children:[E("div",{children:[h(M0,{children:"Title"}),h(NM,{type:"text",name:"title",value:a,onChange:d,autocomplete:"off"})]}),E("div",{children:[h(M0,{children:"Content"}),h(DM,{type:"text",name:"content",value:l,onChange:d,autocomplete:"off"})]}),h("div",{children:h(CM,{handlePhotoChange:g=>{e({...t,photo:g})},photo:u})}),h("div",{children:r?h(U0,{type:"submit",children:"Create Post"}):h(U0,{disabled:!0,type:"submit",children:"Create Post"})})]})]})})},OM=T.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;
`,LM=T.h2`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${t=>t.theme.black};
`,MM=T.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`,z0=T.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: ${t=>t.theme.darkGray};
`,UM=T.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;

	:focus {
		border: 1px solid ${t=>t.theme.accent};
		outline: none;
	}
`,FM=T.textarea`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;
	:focus {
		border: 1px solid ${t=>t.theme.accent}};
		outline: none;
	}
`,zM=T.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${t=>t.theme.accent};
	margin-top: 2rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-weight: 600;

	:hover {
		background-color: ${t=>t.theme.accentHover};
	}

	:active {
		outline: 0;
	}
`,jM=()=>{const[t,e]=A.exports.useState({title:"",content:""}),{group_id:n,post_id:r}=In(),{document:i,error:s,isPending:o}=Ke("posts",r),a=or();A.exports.useEffect(()=>{i&&e({title:i.title,content:i.content})},[i]);const{title:l,content:u}=t,c=f=>{e({...t,[f.target.name]:f.target.value})};return E(OM,{children:[h(LM,{children:"Edit Post"}),E(MM,{onSubmit:async f=>{f.preventDefault(),await X(de(se,"posts",r),{title:l,content:u}).then(()=>{ke.success("Post updated successfully"),a(`/group/${n}/post/${r}`)})},children:[E("div",{children:[h(z0,{htmlFor:"",children:"Title"}),h(UM,{type:"text",name:"title",value:l,onChange:c,placeholder:"Title"})]}),E("div",{children:[h(z0,{htmlFor:"",children:"Content"}),h(FM,{type:"text",name:"content",value:u,onChange:c})]}),h("div",{children:h(zM,{type:"submit",children:"Edit Post"})})]})]})};const BM=T.form`
	display: grid;
	grid-template-columns: 1fr;
	position: relative;
	align-items: center;
	width: 12rem;

	@media (min-width: 481px) {
		width: 18rem;
	}

	@media screen and (min-width: 48rem) {
		width: 26rem;
		margin: 0;
	}
`,VM=T.input`
	border: ${t=>t.theme.primary}} ;
	border-radius: 20px;
	background-color: ${t=>t.theme.primary}} 
	padding: 0.8rem 1rem;
	padding-left: calc(1rem + 2rem);
	grid-column: 1/1;

	&:focus {
		outline: none;
		border: 1px solid ${t=>t.theme.accent}};
	}
`,HM=T(nL)`
	position: absolute;
	left: 15px;
	grid-column: 1/1;
`;function qM(){const[t,e]=En.useState(""),n=or();return E(BM,{onSubmit:i=>(i.preventDefault(),n(t?`/search/?query=${t}`:"/")),children:[h(VM,{type:"text",placeholder:"Search",onChange:i=>e(i.target.value)}),h(HM,{})]})}const GM=T.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	margin-top: 2rem;
	border-radius: 20px;
	background-color: ${t=>t.theme.primary};
`,WM=T(le)`
	padding: 1rem 2rem;
	width: 100%;
	border-radius: 20px;
	background-color: ${t=>t.theme.accent};
	color: ${t=>t.theme.neutral};
	font-weight: 700;

	:hover {
		color: ${t=>t.theme.accentHover};
	}
`,KM=T.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`,QM=T.div``;function YM(){const{user:t}=xn();return E("div",{children:[h("div",{children:t&&E(GM,{children:[h(QM,{children:h(KM,{src:t.photoURL})}),h(WM,{to:"/posts/create",children:"Create Post"})]})}),h(Ff,{})]})}function XM(){const{search:t}=zs();return En.useMemo(()=>new URLSearchParams(t),[t])}const JM=T.ul`
	display: flex;
	align-items: center;
	gap: 1rem;
	list-style: none;
	background-color: ${t=>t.theme.primary};
	border-radius: 20px;

	> li {
		padding: 1.5rem 2rem;
		cursor: pointer;
		position: relative;

		:hover::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 4px;
			border-radius: 4px;
			background-color: ${t=>t.theme.accent};
			bottom: 0;
			left: 0;
		}
	}
`;function ZM({groups:t,posts:e,profiles:n}){const[r,i]=A.exports.useState("posts");return E("div",{children:[E(JM,{children:[h("li",{onClick:()=>i("posts"),children:"Posts"}),h("li",{onClick:()=>i("groups"),children:"Groups"}),h("li",{onClick:()=>i("profiles"),children:"Profiles"})]}),E("div",{children:[r==="posts"&&h(ya,{posts:e}),r==="groups"&&h(sT,{groups:t}),r==="profiles"&&h(iT,{profiles:n})]})]})}const eU=T.h2`
	font-size: 1.6rem;
	margin-bottom: 2rem;
`,tU=T.div``;function nU(){let t=XM();const[e,n]=A.exports.useState(t.get("query")),[r,i]=A.exports.useState([]),[s,o]=A.exports.useState([]),[a,l]=A.exports.useState([]),{search:u}=zs();A.exports.useEffect(()=>{c().catch(),d().catch(),f().catch()},[]),A.exports.useEffect(()=>{n(t.get("query")),c().catch(),d().catch(),f().catch()},[u,r]);const c=async()=>{const m=[],g=ci(Dr(se,"posts"),fr("title",">=",e),fr("title","<=",e+"\uF8FF"));(await Vl(g)).forEach(C=>{m.push({id:C.id,...C.data()})}),i(m)},d=async()=>{const m=[],g=ci(Dr(se,"groups"),fr("name",">=",e),fr("name","<=",e+"\uF8FF"));(await Vl(g)).forEach(C=>{m.push({id:C.id,...C.data()})}),o(m)},f=async()=>{const m=[],g=ci(Dr(se,"users"),fr("displayName",">=",e),fr("displayName","<=",e+"\uF8FF"));(await Vl(g)).forEach(C=>{m.push({id:C.id,...C.data()})}),l(m)};return h("div",{children:E(tU,{children:[h(eU,{children:"Search Results"}),h(ZM,{posts:r,groups:s,profiles:a})]})})}const rU=T.div`
	padding: 1rem 2rem;
	margin: 1rem auto;

	& a {
		:hover {
			color: #1c3d52;
		}
	}

	@media (min-width: 768px) {
		padding: 0 10rem;
	}
`;function j0({children:t}){return h(rU,{children:t})}const iU=T.div`
	display: flex;
	flex-direction: column-reverse;

	@media (min-width: 481px) {
		flex-direction: row;

		> :nth-child(1) {
			flex: 1 1 15%;
		}
		> :nth-child(2) {
			flex: 1 1 85%;
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;

		> :nth-child(1) {
			flex: 1 1 20%;
		}
		> :nth-child(2) {
			flex: 1 1 80%;
		}
	}
`,sU=T.div`
	background-color: ${t=>t.theme.neutral};
`;T.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 100%;
	gap: 1rem;

	> :nth-child(1) {
	}
	> :nth-child(2) {
	}
`;const oU=()=>{const{isAuthReady:t,user:e}=xn();return h(iU,{children:t&&E(Z2,{children:[h(hL,{}),E(sU,{children:[h(j0,{children:h(qM,{})}),h(j0,{children:E(Y2,{children:[h(Ve,{exact:!0,path:"/",element:h(YM,{})}),"Auth",h(Ve,{path:"login",element:e?h(Yd,{to:"/"}):h(FO,{})}),h(Ve,{path:"register",element:e?h(Yd,{to:"/"}):h(XO,{})}),h(Ve,{path:"/profiles",element:h(yL,{})}),h(Ve,{path:"/profile/:id",element:h(OL,{})}),h(Ve,{path:"/profile/:id/followers",element:h(F4,{})}),h(Ve,{path:"/profile/:id/following",element:h(G4,{})}),h(Ve,{path:"/groups",element:h(d4,{})}),h(Ve,{path:"/posts",element:h(Ff,{})}),h(Ve,{path:"/group/:id",element:h(C4,{})}),h(Ve,{path:"/group/:id/members",element:h(J4,{})}),h(Ve,{path:"/group/:id/posts",element:h(Ff,{})}),h(Ve,{path:"/group/:group_id/post/:post_id",element:h(EM,{})}),h(Ve,{path:"/search",element:h(nU,{})}),h(Ve,{path:"/settings/profile",element:h(x0,{Component:KL})}),h(Ve,{path:"/settings/account",element:h(x0,{Component:s4})}),h(Ve,{path:"/group/create",element:h(P4,{})}),h(Ve,{path:"/group/:group_id/post/create",element:h(F0,{})}),h(Ve,{path:"/posts/create",element:h(F0,{})}),h(Ve,{path:"/group/:group_id/post/:post_id/edit",element:h(jM,{})})]})})]}),h(L3,{})]})})};const aU=rd.createRoot(document.getElementById("root")),lU={neutral:"#eeeeee",black:"#111111",primary:"#ffffff",accent:"#98A8F8",accentHover:"#BCCEF8",lightGray:"#dddddd",gray:"#777777",darkGray:"#555555"};aU.render(h(En.StrictMode,{children:h(WD,{children:h(OO,{theme:lU,children:h(oU,{})})})}));
