const Hu="modulepreload",ju=function(e){return"/RenderDoc/"+e},Hl={},v=function(n,t,a){if(!t||t.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=ju(o),o in Hl)return;Hl[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!a)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===o&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Hu,l||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),l)return new Promise((u,d)=>{p.addEventListener("load",u),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})};function Go(e,n){const t=Object.create(null),a=e.split(",");for(let s=0;s<a.length;s++)t[a[s]]=!0;return n?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const De={},Tt=[],_n=()=>{},qu=()=>!1,Wu=/^on[^a-z]/,Aa=e=>Wu.test(e),$o=e=>e.startsWith("onUpdate:"),Le=Object.assign,No=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Ku=Object.prototype.hasOwnProperty,fe=(e,n)=>Ku.call(e,n),Q=Array.isArray,la=e=>ks(e)==="[object Map]",Yu=e=>ks(e)==="[object Set]",se=e=>typeof e=="function",ge=e=>typeof e=="string",gs=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",_c=e=>(Pe(e)||se(e))&&se(e.then)&&se(e.catch),Xu=Object.prototype.toString,ks=e=>Xu.call(e),Zu=e=>ks(e).slice(8,-1),Ju=e=>ks(e)==="[object Object]",Uo=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ia=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_s=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Qu=/-(\w)/g,vn=_s(e=>e.replace(Qu,(n,t)=>t?t.toUpperCase():"")),ed=/\B([A-Z])/g,qt=_s(e=>e.replace(ed,"-$1").toLowerCase()),Ba=_s(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rs=_s(e=>e?`on${Ba(e)}`:""),vt=(e,n)=>!Object.is(e,n),Fs=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},os=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},nd=e=>{const n=parseFloat(e);return isNaN(n)?e:n},td=e=>{const n=ge(e)?Number(e):NaN;return isNaN(n)?e:n};let jl;const ro=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rt(e){if(Q(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],s=ge(a)?ld(a):Rt(a);if(s)for(const o in s)n[o]=s[o]}return n}else if(ge(e)||Pe(e))return e}const ad=/;(?![^(]*\))/g,sd=/:([^]+)/,od=/\/\*[^]*?\*\//g;function ld(e){const n={};return e.replace(od,"").split(ad).forEach(t=>{if(t){const a=t.split(sd);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Da(e){let n="";if(ge(e))n=e;else if(Q(e))for(let t=0;t<e.length;t++){const a=Da(e[t]);a&&(n+=a+" ")}else if(Pe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cd=Go(id);function bc(e){return!!e||e===""}let nn;class rd{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nn,!n&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=nn;try{return nn=this,n()}finally{nn=t}}}on(){nn=this}off(){nn=this.parent}stop(n){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pd(e,n=nn){n&&n.active&&n.effects.push(e)}function Ec(){return nn}function ud(e){nn&&nn.cleanups.push(e)}const zo=e=>{const n=new Set(e);return n.w=0,n.n=0,n},yc=e=>(e.w&Zn)>0,wc=e=>(e.n&Zn)>0,dd=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Zn},vd=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const s=n[a];yc(s)&&!wc(s)?s.delete(e):n[t++]=s,s.w&=~Zn,s.n&=~Zn}n.length=t}},ls=new WeakMap;let sa=0,Zn=1;const po=30;let gn;const rt=Symbol(""),uo=Symbol("");class Ho{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,pd(this,a)}run(){if(!this.active)return this.fn();let n=gn,t=Yn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=gn,gn=this,Yn=!0,Zn=1<<++sa,sa<=po?dd(this):ql(this),this.fn()}finally{sa<=po&&vd(this),Zn=1<<--sa,gn=this.parent,Yn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gn===this?this.deferStop=!0:this.active&&(ql(this),this.onStop&&this.onStop(),this.active=!1)}}function ql(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Yn=!0;const Ac=[];function Wt(){Ac.push(Yn),Yn=!1}function Kt(){const e=Ac.pop();Yn=e===void 0?!0:e}function Ze(e,n,t){if(Yn&&gn){let a=ls.get(e);a||ls.set(e,a=new Map);let s=a.get(t);s||a.set(t,s=zo()),Bc(s)}}function Bc(e,n){let t=!1;sa<=po?wc(e)||(e.n|=Zn,t=!yc(e)):t=!e.has(gn),t&&(e.add(gn),gn.deps.push(e))}function Fn(e,n,t,a,s,o){const l=ls.get(e);if(!l)return;let c=[];if(n==="clear")c=[...l.values()];else if(t==="length"&&Q(e)){const r=Number(a);l.forEach((p,u)=>{(u==="length"||!gs(u)&&u>=r)&&c.push(p)})}else switch(t!==void 0&&c.push(l.get(t)),n){case"add":Q(e)?Uo(t)&&c.push(l.get("length")):(c.push(l.get(rt)),la(e)&&c.push(l.get(uo)));break;case"delete":Q(e)||(c.push(l.get(rt)),la(e)&&c.push(l.get(uo)));break;case"set":la(e)&&c.push(l.get(rt));break}if(c.length===1)c[0]&&vo(c[0]);else{const r=[];for(const p of c)p&&r.push(...p);vo(zo(r))}}function vo(e,n){const t=Q(e)?e:[...e];for(const a of t)a.computed&&Wl(a);for(const a of t)a.computed||Wl(a)}function Wl(e,n){(e!==gn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function md(e,n){var t;return(t=ls.get(e))==null?void 0:t.get(n)}const fd=Go("__proto__,__v_isRef,__isVue"),Dc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gs)),Kl=hd();function hd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=ce(this);for(let o=0,l=this.length;o<l;o++)Ze(a,"get",o+"");const s=a[n](...t);return s===-1||s===!1?a[n](...t.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Wt();const a=ce(this)[n].apply(this,t);return Kt(),a}}),e}function gd(e){const n=ce(this);return Ze(n,"has",e),n.hasOwnProperty(e)}class Tc{constructor(n=!1,t=!1){this._isReadonly=n,this._shallow=t}get(n,t,a){const s=this._isReadonly,o=this._shallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw"&&a===(s?o?Sd:Cc:o?Sc:Ic).get(n))return n;const l=Q(n);if(!s){if(l&&fe(Kl,t))return Reflect.get(Kl,t,a);if(t==="hasOwnProperty")return gd}const c=Reflect.get(n,t,a);return(gs(t)?Dc.has(t):fd(t))||(s||Ze(n,"get",t),o)?c:Re(c)?l&&Uo(t)?c:c.value:Pe(c)?s?mt(c):Ta(c):c}}class Pc extends Tc{constructor(n=!1){super(!1,n)}set(n,t,a,s){let o=n[t];if(Ft(o)&&Re(o)&&!Re(a))return!1;if(!this._shallow&&(!is(a)&&!Ft(a)&&(o=ce(o),a=ce(a)),!Q(n)&&Re(o)&&!Re(a)))return o.value=a,!0;const l=Q(n)&&Uo(t)?Number(t)<n.length:fe(n,t),c=Reflect.set(n,t,a,s);return n===ce(s)&&(l?vt(a,o)&&Fn(n,"set",t,a):Fn(n,"add",t,a)),c}deleteProperty(n,t){const a=fe(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&a&&Fn(n,"delete",t,void 0),s}has(n,t){const a=Reflect.has(n,t);return(!gs(t)||!Dc.has(t))&&Ze(n,"has",t),a}ownKeys(n){return Ze(n,"iterate",Q(n)?"length":rt),Reflect.ownKeys(n)}}class kd extends Tc{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const _d=new Pc,bd=new kd,Ed=new Pc(!0),jo=e=>e,bs=e=>Reflect.getPrototypeOf(e);function Ua(e,n,t=!1,a=!1){e=e.__v_raw;const s=ce(e),o=ce(n);t||(vt(n,o)&&Ze(s,"get",n),Ze(s,"get",o));const{has:l}=bs(s),c=a?jo:t?Ko:ma;if(l.call(s,n))return c(e.get(n));if(l.call(s,o))return c(e.get(o));e!==s&&e.get(n)}function za(e,n=!1){const t=this.__v_raw,a=ce(t),s=ce(e);return n||(vt(e,s)&&Ze(a,"has",e),Ze(a,"has",s)),e===s?t.has(e):t.has(e)||t.has(s)}function Ha(e,n=!1){return e=e.__v_raw,!n&&Ze(ce(e),"iterate",rt),Reflect.get(e,"size",e)}function Yl(e){e=ce(e);const n=ce(this);return bs(n).has.call(n,e)||(n.add(e),Fn(n,"add",e,e)),this}function Xl(e,n){n=ce(n);const t=ce(this),{has:a,get:s}=bs(t);let o=a.call(t,e);o||(e=ce(e),o=a.call(t,e));const l=s.call(t,e);return t.set(e,n),o?vt(n,l)&&Fn(t,"set",e,n):Fn(t,"add",e,n),this}function Zl(e){const n=ce(this),{has:t,get:a}=bs(n);let s=t.call(n,e);s||(e=ce(e),s=t.call(n,e)),a&&a.call(n,e);const o=n.delete(e);return s&&Fn(n,"delete",e,void 0),o}function Jl(){const e=ce(this),n=e.size!==0,t=e.clear();return n&&Fn(e,"clear",void 0,void 0),t}function ja(e,n){return function(a,s){const o=this,l=o.__v_raw,c=ce(l),r=n?jo:e?Ko:ma;return!e&&Ze(c,"iterate",rt),l.forEach((p,u)=>a.call(s,r(p),r(u),o))}}function qa(e,n,t){return function(...a){const s=this.__v_raw,o=ce(s),l=la(o),c=e==="entries"||e===Symbol.iterator&&l,r=e==="keys"&&l,p=s[e](...a),u=t?jo:n?Ko:ma;return!n&&Ze(o,"iterate",r?uo:rt),{next(){const{value:d,done:m}=p.next();return m?{value:d,done:m}:{value:c?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function $n(e){return function(...n){return e==="delete"?!1:this}}function yd(){const e={get(o){return Ua(this,o)},get size(){return Ha(this)},has:za,add:Yl,set:Xl,delete:Zl,clear:Jl,forEach:ja(!1,!1)},n={get(o){return Ua(this,o,!1,!0)},get size(){return Ha(this)},has:za,add:Yl,set:Xl,delete:Zl,clear:Jl,forEach:ja(!1,!0)},t={get(o){return Ua(this,o,!0)},get size(){return Ha(this,!0)},has(o){return za.call(this,o,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:ja(!0,!1)},a={get(o){return Ua(this,o,!0,!0)},get size(){return Ha(this,!0)},has(o){return za.call(this,o,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:ja(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=qa(o,!1,!1),t[o]=qa(o,!0,!1),n[o]=qa(o,!1,!0),a[o]=qa(o,!0,!0)}),[e,t,n,a]}const[wd,Ad,Bd,Dd]=yd();function qo(e,n){const t=n?e?Dd:Bd:e?Ad:wd;return(a,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(fe(t,s)&&s in a?t:a,s,o)}const Td={get:qo(!1,!1)},Pd={get:qo(!1,!0)},Id={get:qo(!0,!1)},Ic=new WeakMap,Sc=new WeakMap,Cc=new WeakMap,Sd=new WeakMap;function Cd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Od(e){return e.__v_skip||!Object.isExtensible(e)?0:Cd(Zu(e))}function Ta(e){return Ft(e)?e:Wo(e,!1,_d,Td,Ic)}function Oc(e){return Wo(e,!1,Ed,Pd,Sc)}function mt(e){return Wo(e,!0,bd,Id,Cc)}function Wo(e,n,t,a,s){if(!Pe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const l=Od(e);if(l===0)return e;const c=new Proxy(e,l===2?a:t);return s.set(e,c),c}function Pt(e){return Ft(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function is(e){return!!(e&&e.__v_isShallow)}function Lc(e){return Pt(e)||Ft(e)}function ce(e){const n=e&&e.__v_raw;return n?ce(n):e}function xc(e){return os(e,"__v_skip",!0),e}const ma=e=>Pe(e)?Ta(e):e,Ko=e=>Pe(e)?mt(e):e;function Yo(e){Yn&&gn&&(e=ce(e),Bc(e.dep||(e.dep=zo())))}function Xo(e,n){e=ce(e);const t=e.dep;t&&vo(t)}function Re(e){return!!(e&&e.__v_isRef===!0)}function q(e){return Rc(e,!1)}function Ne(e){return Rc(e,!0)}function Rc(e,n){return Re(e)?e:new Ld(e,n)}class Ld{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:ce(n),this._value=t?n:ma(n)}get value(){return Yo(this),this._value}set value(n){const t=this.__v_isShallow||is(n)||Ft(n);n=t?n:ce(n),vt(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:ma(n),Xo(this))}}function pt(e){return Re(e)?e.value:e}const xd={get:(e,n,t)=>pt(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const s=e[n];return Re(s)&&!Re(t)?(s.value=t,!0):Reflect.set(e,n,t,a)}};function Fc(e){return Pt(e)?e:new Proxy(e,xd)}class Rd{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:a}=n(()=>Yo(this),()=>Xo(this));this._get=t,this._set=a}get value(){return this._get()}set value(n){this._set(n)}}function Vc(e){return new Rd(e)}class Fd{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return md(ce(this._object),this._key)}}class Vd{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Yt(e,n,t){return Re(e)?e:se(e)?new Vd(e):Pe(e)&&arguments.length>1?Md(e,n,t):q(e)}function Md(e,n,t){const a=e[n];return Re(a)?a:new Fd(e,n,t)}class Gd{constructor(n,t,a,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ho(n,()=>{this._dirty||(this._dirty=!0,Xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const n=ce(this);return Yo(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function $d(e,n,t=!1){let a,s;const o=se(e);return o?(a=e,s=_n):(a=e.get,s=e.set),new Gd(a,s,o||!s,t)}function Xn(e,n,t,a){let s;try{s=a?e(...a):e()}catch(o){Pa(o,n,t)}return s}function dn(e,n,t,a){if(se(e)){const o=Xn(e,n,t,a);return o&&_c(o)&&o.catch(l=>{Pa(l,n,t)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(dn(e[o],n,t,a));return s}function Pa(e,n,t,a=!0){const s=n?n.vnode:null;if(n){let o=n.parent;const l=n.proxy,c=t;for(;o;){const p=o.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](e,l,c)===!1)return}o=o.parent}const r=n.appContext.config.errorHandler;if(r){Xn(r,null,10,[e,l,c]);return}}Nd(e,t,s,a)}function Nd(e,n,t,a=!0){console.error(e)}let fa=!1,mo=!1;const Ue=[];let Pn=0;const It=[];let Rn=null,lt=0;const Mc=Promise.resolve();let Zo=null;function et(e){const n=Zo||Mc;return e?n.then(this?e.bind(this):e):n}function Ud(e){let n=Pn+1,t=Ue.length;for(;n<t;){const a=n+t>>>1,s=Ue[a],o=ha(s);o<e||o===e&&s.pre?n=a+1:t=a}return n}function Es(e){(!Ue.length||!Ue.includes(e,fa&&e.allowRecurse?Pn+1:Pn))&&(e.id==null?Ue.push(e):Ue.splice(Ud(e.id),0,e),Gc())}function Gc(){!fa&&!mo&&(mo=!0,Zo=Mc.then($c))}function zd(e){const n=Ue.indexOf(e);n>Pn&&Ue.splice(n,1)}function Hd(e){Q(e)?It.push(...e):(!Rn||!Rn.includes(e,e.allowRecurse?lt+1:lt))&&It.push(e),Gc()}function Ql(e,n=fa?Pn+1:0){for(;n<Ue.length;n++){const t=Ue[n];t&&t.pre&&(Ue.splice(n,1),n--,t())}}function cs(e){if(It.length){const n=[...new Set(It)];if(It.length=0,Rn){Rn.push(...n);return}for(Rn=n,Rn.sort((t,a)=>ha(t)-ha(a)),lt=0;lt<Rn.length;lt++)Rn[lt]();Rn=null,lt=0}}const ha=e=>e.id==null?1/0:e.id,jd=(e,n)=>{const t=ha(e)-ha(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function $c(e){mo=!1,fa=!0,Ue.sort(jd);const n=_n;try{for(Pn=0;Pn<Ue.length;Pn++){const t=Ue[Pn];t&&t.active!==!1&&Xn(t,null,14)}}finally{Pn=0,Ue.length=0,cs(),fa=!1,Zo=null,(Ue.length||It.length)&&$c()}}function qd(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||De;let s=t;const o=n.startsWith("update:"),l=o&&n.slice(7);if(l&&l in a){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:d,trim:m}=a[u]||De;m&&(s=t.map(f=>ge(f)?f.trim():f)),d&&(s=t.map(nd))}let c,r=a[c=Rs(n)]||a[c=Rs(vn(n))];!r&&o&&(r=a[c=Rs(qt(n))]),r&&dn(r,e,6,s);const p=a[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,dn(p,e,6,s)}}function Nc(e,n,t=!1){const a=n.emitsCache,s=a.get(e);if(s!==void 0)return s;const o=e.emits;let l={},c=!1;if(!se(e)){const r=p=>{const u=Nc(p,n,!0);u&&(c=!0,Le(l,u))};!t&&n.mixins.length&&n.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!o&&!c?(Pe(e)&&a.set(e,null),null):(Q(o)?o.forEach(r=>l[r]=null):Le(l,o),Pe(e)&&a.set(e,l),l)}function ys(e,n){return!e||!Aa(n)?!1:(n=n.slice(2).replace(/Once$/,""),fe(e,n[0].toLowerCase()+n.slice(1))||fe(e,qt(n))||fe(e,n))}let ze=null,Uc=null;function rs(e){const n=ze;return ze=e,Uc=e&&e.type.__scopeId||null,n}function Wd(e,n=ze,t){if(!n||e._n)return e;const a=(...s)=>{a._d&&ui(-1);const o=rs(n);let l;try{l=e(...s)}finally{rs(o),a._d&&ui(1)}return l};return a._n=!0,a._c=!0,a._d=!0,a}function Vs(e){const{type:n,vnode:t,proxy:a,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:r,emit:p,render:u,renderCache:d,data:m,setupState:f,ctx:g,inheritAttrs:b}=e;let B,y;const T=rs(e);try{if(t.shapeFlag&4){const D=s||a;B=hn(u.call(D,D,d,o,f,m,g)),y=r}else{const D=n;B=hn(D.length>1?D(o,{attrs:r,slots:c,emit:p}):D(o,null)),y=n.props?r:Kd(r)}}catch(D){pa.length=0,Pa(D,e,1),B=Ie(sn)}let E=B;if(y&&b!==!1){const D=Object.keys(y),{shapeFlag:R}=E;D.length&&R&7&&(l&&D.some($o)&&(y=Yd(y,l)),E=Jn(E,y))}return t.dirs&&(E=Jn(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),B=E,rs(T),B}const Kd=e=>{let n;for(const t in e)(t==="class"||t==="style"||Aa(t))&&((n||(n={}))[t]=e[t]);return n},Yd=(e,n)=>{const t={};for(const a in e)(!$o(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function Xd(e,n,t){const{props:a,children:s,component:o}=e,{props:l,children:c,patchFlag:r}=n,p=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&r>=0){if(r&1024)return!0;if(r&16)return a?ei(a,l,p):!!l;if(r&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(l[m]!==a[m]&&!ys(p,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:a===l?!1:a?l?ei(a,l,p):!0:!!l;return!1}function ei(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(n[o]!==e[o]&&!ys(t,o))return!0}return!1}function Zd({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Jd=e=>e.__isSuspense;function zc(e,n){n&&n.pendingBranch?Q(e)?n.effects.push(...e):n.effects.push(e):Hd(e)}function Hc(e,n){return Jo(e,null,n)}const Wa={};function re(e,n,t){return Jo(e,n,t)}function Jo(e,n,{immediate:t,deep:a,flush:s,onTrack:o,onTrigger:l}=De){var c;const r=Ec()===((c=xe)==null?void 0:c.scope)?xe:null;let p,u=!1,d=!1;if(Re(e)?(p=()=>e.value,u=is(e)):Pt(e)?(p=()=>e,a=!0):Q(e)?(d=!0,u=e.some(D=>Pt(D)||is(D)),p=()=>e.map(D=>{if(Re(D))return D.value;if(Pt(D))return At(D);if(se(D))return Xn(D,r,2)})):se(e)?n?p=()=>Xn(e,r,2):p=()=>{if(!(r&&r.isUnmounted))return m&&m(),dn(e,r,3,[f])}:p=_n,n&&a){const D=p;p=()=>At(D())}let m,f=D=>{m=T.onStop=()=>{Xn(D,r,4)}},g;if(Gt)if(f=_n,n?t&&dn(n,r,3,[p(),d?[]:void 0,f]):p(),s==="sync"){const D=q0();g=D.__watcherHandles||(D.__watcherHandles=[])}else return _n;let b=d?new Array(e.length).fill(Wa):Wa;const B=()=>{if(T.active)if(n){const D=T.run();(a||u||(d?D.some((R,C)=>vt(R,b[C])):vt(D,b)))&&(m&&m(),dn(n,r,3,[D,b===Wa?void 0:d&&b[0]===Wa?[]:b,f]),b=D)}else T.run()};B.allowRecurse=!!n;let y;s==="sync"?y=B:s==="post"?y=()=>Ye(B,r&&r.suspense):(B.pre=!0,r&&(B.id=r.uid),y=()=>Es(B));const T=new Ho(p,y);n?t?B():b=T.run():s==="post"?Ye(T.run.bind(T),r&&r.suspense):T.run();const E=()=>{T.stop(),r&&r.scope&&No(r.scope.effects,T)};return g&&g.push(E),E}function Qd(e,n,t){const a=this.proxy,s=ge(e)?e.includes(".")?jc(a,e):()=>a[e]:e.bind(a,a);let o;se(n)?o=n:(o=n.handler,t=n);const l=xe;Mt(this);const c=Jo(s,o.bind(a),t);return l?Mt(l):dt(),c}function jc(e,n){const t=n.split(".");return()=>{let a=e;for(let s=0;s<t.length&&a;s++)a=a[t[s]];return a}}function At(e,n){if(!Pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Re(e))At(e.value,n);else if(Q(e))for(let t=0;t<e.length;t++)At(e[t],n);else if(Yu(e)||la(e))e.forEach(t=>{At(t,n)});else if(Ju(e))for(const t in e)At(e[t],n);return e}function Tn(e,n,t,a){const s=e.dirs,o=n&&n.dirs;for(let l=0;l<s.length;l++){const c=s[l];o&&(c.oldValue=o[l].value);let r=c.dir[a];r&&(Wt(),dn(r,t,8,[e.el,c,e,n]),Kt())}}const qn=Symbol("_leaveCb"),Ka=Symbol("_enterCb");function qc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ue(()=>{e.isMounted=!0}),el(()=>{e.isUnmounting=!0}),e}const cn=[Function,Array],Wc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},e0={name:"BaseTransition",props:Wc,setup(e,{slots:n}){const t=nt(),a=qc();let s;return()=>{const o=n.default&&Qo(n.default(),!0);if(!o||!o.length)return;let l=o[0];if(o.length>1){for(const b of o)if(b.type!==sn){l=b;break}}const c=ce(e),{mode:r}=c;if(a.isLeaving)return Ms(l);const p=ni(l);if(!p)return Ms(l);const u=ga(p,c,a,t);ka(p,u);const d=t.subTree,m=d&&ni(d);let f=!1;const{getTransitionKey:g}=p.type;if(g){const b=g();s===void 0?s=b:b!==s&&(s=b,f=!0)}if(m&&m.type!==sn&&(!it(p,m)||f)){const b=ga(m,c,a,t);if(ka(m,b),r==="out-in")return a.isLeaving=!0,b.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&t.update()},Ms(l);r==="in-out"&&p.type!==sn&&(b.delayLeave=(B,y,T)=>{const E=Kc(a,m);E[String(m.key)]=m,B[qn]=()=>{y(),B[qn]=void 0,delete u.delayedLeave},u.delayedLeave=T})}return l}}},n0=e0;function Kc(e,n){const{leavingVNodes:t}=e;let a=t.get(n.type);return a||(a=Object.create(null),t.set(n.type,a)),a}function ga(e,n,t,a){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:r,onAfterEnter:p,onEnterCancelled:u,onBeforeLeave:d,onLeave:m,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:b,onAppear:B,onAfterAppear:y,onAppearCancelled:T}=n,E=String(e.key),D=Kc(t,e),R=(S,N)=>{S&&dn(S,a,9,N)},C=(S,N)=>{const z=N[1];R(S,N),Q(S)?S.every(ee=>ee.length<=1)&&z():S.length<=1&&z()},V={mode:o,persisted:l,beforeEnter(S){let N=c;if(!t.isMounted)if(s)N=b||c;else return;S[qn]&&S[qn](!0);const z=D[E];z&&it(e,z)&&z.el[qn]&&z.el[qn](),R(N,[S])},enter(S){let N=r,z=p,ee=u;if(!t.isMounted)if(s)N=B||r,z=y||p,ee=T||u;else return;let U=!1;const ne=S[Ka]=Te=>{U||(U=!0,Te?R(ee,[S]):R(z,[S]),V.delayedLeave&&V.delayedLeave(),S[Ka]=void 0)};N?C(N,[S,ne]):ne()},leave(S,N){const z=String(e.key);if(S[Ka]&&S[Ka](!0),t.isUnmounting)return N();R(d,[S]);let ee=!1;const U=S[qn]=ne=>{ee||(ee=!0,N(),ne?R(g,[S]):R(f,[S]),S[qn]=void 0,D[z]===e&&delete D[z])};D[z]=e,m?C(m,[S,U]):U()},clone(S){return ga(S,n,t,a)}};return V}function Ms(e){if(Ia(e))return e=Jn(e),e.children=null,e}function ni(e){return Ia(e)?e.children?e.children[0]:void 0:e}function ka(e,n){e.shapeFlag&6&&e.component?ka(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Qo(e,n=!1,t){let a=[],s=0;for(let o=0;o<e.length;o++){let l=e[o];const c=t==null?l.key:String(t)+String(l.key!=null?l.key:o);l.type===qe?(l.patchFlag&128&&s++,a=a.concat(Qo(l.children,n,c))):(n||l.type!==sn)&&a.push(c!=null?Jn(l,{key:c}):l)}if(s>1)for(let o=0;o<a.length;o++)a[o].patchFlag=-2;return a}/*! #__NO_SIDE_EFFECTS__ */function F(e,n){return se(e)?(()=>Le({name:e.name},n,{setup:e}))():e}const St=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function _(e){se(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:a,delay:s=200,timeout:o,suspensible:l=!0,onError:c}=e;let r=null,p,u=0;const d=()=>(u++,r=null,m()),m=()=>{let f;return r||(f=r=n().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((b,B)=>{c(g,()=>b(d()),()=>B(g),u+1)});throw g}).then(g=>f!==r&&r?r:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),p=g,g)))};return F({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return p},setup(){const f=xe;if(p)return()=>Gs(p,f);const g=T=>{r=null,Pa(T,f,13,!a)};if(l&&f.suspense||Gt)return m().then(T=>()=>Gs(T,f)).catch(T=>(g(T),()=>a?Ie(a,{error:T}):null));const b=q(!1),B=q(),y=q(!!s);return s&&setTimeout(()=>{y.value=!1},s),o!=null&&setTimeout(()=>{if(!b.value&&!B.value){const T=new Error(`Async component timed out after ${o}ms.`);g(T),B.value=T}},o),m().then(()=>{b.value=!0,f.parent&&Ia(f.parent.vnode)&&Es(f.parent.update)}).catch(T=>{g(T),B.value=T}),()=>{if(b.value&&p)return Gs(p,f);if(B.value&&a)return Ie(a,{error:B.value});if(t&&!y.value)return Ie(t)}}})}function Gs(e,n){const{ref:t,props:a,children:s,ce:o}=n.vnode,l=Ie(e,a,s);return l.ref=t,l.ce=o,delete n.vnode.ce,l}const Ia=e=>e.type.__isKeepAlive;function t0(e,n){Yc(e,"a",n)}function a0(e,n){Yc(e,"da",n)}function Yc(e,n,t=xe){const a=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ws(n,a,t),t){let s=t.parent;for(;s&&s.parent;)Ia(s.parent.vnode)&&s0(a,n,t,s),s=s.parent}}function s0(e,n,t,a){const s=ws(n,e,a,!0);ft(()=>{No(a[n],s)},t)}function ws(e,n,t=xe,a=!1){if(t){const s=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...l)=>{if(t.isUnmounted)return;Wt(),Mt(t);const c=dn(n,t,e,l);return dt(),Kt(),c});return a?s.unshift(o):s.push(o),o}}const Gn=e=>(n,t=xe)=>(!Gt||e==="sp")&&ws(e,(...a)=>n(...a),t),o0=Gn("bm"),ue=Gn("m"),l0=Gn("bu"),Xc=Gn("u"),el=Gn("bum"),ft=Gn("um"),i0=Gn("sp"),c0=Gn("rtg"),r0=Gn("rtc");function p0(e,n=xe){ws("ec",e,n)}const Zc="components";function tn(e,n){return d0(Zc,e,!0,n)||e}const u0=Symbol.for("v-ndc");function d0(e,n,t=!0,a=!1){const s=ze||xe;if(s){const o=s.type;if(e===Zc){const c=z0(o,!1);if(c&&(c===n||c===vn(n)||c===Ba(vn(n))))return o}const l=ti(s[e]||o[e],n)||ti(s.appContext[e],n);return!l&&a?o:l}}function ti(e,n){return e&&(e[n]||e[vn(n)]||e[Ba(vn(n))])}function v0(e,n,t={},a,s){if(ze.isCE||ze.parent&&St(ze.parent)&&ze.parent.isCE)return n!=="default"&&(t.name=n),Ie("slot",t,a&&a());let o=e[n];o&&o._c&&(o._d=!1),As();const l=o&&Jc(o(t)),c=pr(qe,{key:t.key||l&&l.key||`_${n}`},l||(a?a():[]),l&&e._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),o&&o._c&&(o._d=!0),c}function Jc(e){return e.some(n=>vs(n)?!(n.type===sn||n.type===qe&&!Jc(n.children)):!0)?e:null}const fo=e=>e?vr(e)?ol(e)||e.proxy:fo(e.parent):null,ca=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fo(e.parent),$root:e=>fo(e.root),$emit:e=>e.emit,$options:e=>nl(e),$forceUpdate:e=>e.f||(e.f=()=>Es(e.update)),$nextTick:e=>e.n||(e.n=et.bind(e.proxy)),$watch:e=>Qd.bind(e)}),$s=(e,n)=>e!==De&&!e.__isScriptSetup&&fe(e,n),m0={get({_:e},n){const{ctx:t,setupState:a,data:s,props:o,accessCache:l,type:c,appContext:r}=e;let p;if(n[0]!=="$"){const f=l[n];if(f!==void 0)switch(f){case 1:return a[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if($s(a,n))return l[n]=1,a[n];if(s!==De&&fe(s,n))return l[n]=2,s[n];if((p=e.propsOptions[0])&&fe(p,n))return l[n]=3,o[n];if(t!==De&&fe(t,n))return l[n]=4,t[n];ho&&(l[n]=0)}}const u=ca[n];let d,m;if(u)return n==="$attrs"&&Ze(e,"get",n),u(e);if((d=c.__cssModules)&&(d=d[n]))return d;if(t!==De&&fe(t,n))return l[n]=4,t[n];if(m=r.config.globalProperties,fe(m,n))return m[n]},set({_:e},n,t){const{data:a,setupState:s,ctx:o}=e;return $s(s,n)?(s[n]=t,!0):a!==De&&fe(a,n)?(a[n]=t,!0):fe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:s,propsOptions:o}},l){let c;return!!t[l]||e!==De&&fe(e,l)||$s(n,l)||(c=o[0])&&fe(c,l)||fe(a,l)||fe(ca,l)||fe(s.config.globalProperties,l)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:fe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function ai(e){return Q(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ho=!0;function f0(e){const n=nl(e),t=e.proxy,a=e.ctx;ho=!1,n.beforeCreate&&si(n.beforeCreate,e,"bc");const{data:s,computed:o,methods:l,watch:c,provide:r,inject:p,created:u,beforeMount:d,mounted:m,beforeUpdate:f,updated:g,activated:b,deactivated:B,beforeDestroy:y,beforeUnmount:T,destroyed:E,unmounted:D,render:R,renderTracked:C,renderTriggered:V,errorCaptured:S,serverPrefetch:N,expose:z,inheritAttrs:ee,components:U,directives:ne,filters:Te}=n;if(p&&h0(p,a,null),l)for(const te in l){const Y=l[te];se(Y)&&(a[te]=Y.bind(t))}if(s){const te=s.call(t,t);Pe(te)&&(e.data=Ta(te))}if(ho=!0,o)for(const te in o){const Y=o[te],Se=se(Y)?Y.bind(t,t):se(Y.get)?Y.get.bind(t,t):_n,An=!se(Y)&&se(Y.set)?Y.set.bind(t):_n,ln=w({get:Se,set:An});Object.defineProperty(a,te,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Ve=>ln.value=Ve})}if(c)for(const te in c)Qc(c[te],a,t,te);if(r){const te=se(r)?r.call(t):r;Reflect.ownKeys(te).forEach(Y=>{an(Y,te[Y])})}u&&si(u,e,"c");function W(te,Y){Q(Y)?Y.forEach(Se=>te(Se.bind(t))):Y&&te(Y.bind(t))}if(W(o0,d),W(ue,m),W(l0,f),W(Xc,g),W(t0,b),W(a0,B),W(p0,S),W(r0,C),W(c0,V),W(el,T),W(ft,D),W(i0,N),Q(z))if(z.length){const te=e.exposed||(e.exposed={});z.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>t[Y],set:Se=>t[Y]=Se})})}else e.exposed||(e.exposed={});R&&e.render===_n&&(e.render=R),ee!=null&&(e.inheritAttrs=ee),U&&(e.components=U),ne&&(e.directives=ne)}function h0(e,n,t=_n){Q(e)&&(e=go(e));for(const a in e){const s=e[a];let o;Pe(s)?"default"in s?o=pe(s.from||a,s.default,!0):o=pe(s.from||a):o=pe(s),Re(o)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):n[a]=o}}function si(e,n,t){dn(Q(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Qc(e,n,t,a){const s=a.includes(".")?jc(t,a):()=>t[a];if(ge(e)){const o=n[e];se(o)&&re(s,o)}else if(se(e))re(s,e.bind(t));else if(Pe(e))if(Q(e))e.forEach(o=>Qc(o,n,t,a));else{const o=se(e.handler)?e.handler.bind(t):n[e.handler];se(o)&&re(s,o,e)}}function nl(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,c=o.get(n);let r;return c?r=c:!s.length&&!t&&!a?r=n:(r={},s.length&&s.forEach(p=>ps(r,p,l,!0)),ps(r,n,l)),Pe(n)&&o.set(n,r),r}function ps(e,n,t,a=!1){const{mixins:s,extends:o}=n;o&&ps(e,o,t,!0),s&&s.forEach(l=>ps(e,l,t,!0));for(const l in n)if(!(a&&l==="expose")){const c=g0[l]||t&&t[l];e[l]=c?c(e[l],n[l]):n[l]}return e}const g0={data:oi,props:li,emits:li,methods:oa,computed:oa,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:oa,directives:oa,watch:_0,provide:oi,inject:k0};function oi(e,n){return n?e?function(){return Le(se(e)?e.call(this,this):e,se(n)?n.call(this,this):n)}:n:e}function k0(e,n){return oa(go(e),go(n))}function go(e){if(Q(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function je(e,n){return e?[...new Set([].concat(e,n))]:n}function oa(e,n){return e?Le(Object.create(null),e,n):n}function li(e,n){return e?Q(e)&&Q(n)?[...new Set([...e,...n])]:Le(Object.create(null),ai(e),ai(n??{})):n}function _0(e,n){if(!e)return n;if(!n)return e;const t=Le(Object.create(null),e);for(const a in n)t[a]=je(e[a],n[a]);return t}function er(){return{app:null,config:{isNativeTag:qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b0=0;function E0(e,n){return function(a,s=null){se(a)||(a=Le({},a)),s!=null&&!Pe(s)&&(s=null);const o=er(),l=new WeakSet;let c=!1;const r=o.app={_uid:b0++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:W0,get config(){return o.config},set config(p){},use(p,...u){return l.has(p)||(p&&se(p.install)?(l.add(p),p.install(r,...u)):se(p)&&(l.add(p),p(r,...u))),r},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),r},component(p,u){return u?(o.components[p]=u,r):o.components[p]},directive(p,u){return u?(o.directives[p]=u,r):o.directives[p]},mount(p,u,d){if(!c){const m=Ie(a,s);return m.appContext=o,u&&n?n(m,p):e(m,p,d),c=!0,r._container=p,p.__vue_app__=r,ol(m.component)||m.component.proxy}},unmount(){c&&(e(null,r._container),delete r._container.__vue_app__)},provide(p,u){return o.provides[p]=u,r},runWithContext(p){us=r;try{return p()}finally{us=null}}};return r}}let us=null;function an(e,n){if(xe){let t=xe.provides;const a=xe.parent&&xe.parent.provides;a===t&&(t=xe.provides=Object.create(a)),t[e]=n}}function pe(e,n,t=!1){const a=xe||ze;if(a||us){const s=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:us._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return t&&se(n)?n.call(a&&a.proxy):n}}function y0(e,n,t,a=!1){const s={},o={};os(o,Bs,1),e.propsDefaults=Object.create(null),nr(e,n,s,o);for(const l in e.propsOptions[0])l in s||(s[l]=void 0);t?e.props=a?s:Oc(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function w0(e,n,t,a){const{props:s,attrs:o,vnode:{patchFlag:l}}=e,c=ce(s),[r]=e.propsOptions;let p=!1;if((a||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(ys(e.emitsOptions,m))continue;const f=n[m];if(r)if(fe(o,m))f!==o[m]&&(o[m]=f,p=!0);else{const g=vn(m);s[g]=ko(r,c,g,f,e,!1)}else f!==o[m]&&(o[m]=f,p=!0)}}}else{nr(e,n,s,o)&&(p=!0);let u;for(const d in c)(!n||!fe(n,d)&&((u=qt(d))===d||!fe(n,u)))&&(r?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=ko(r,c,d,void 0,e,!0)):delete s[d]);if(o!==c)for(const d in o)(!n||!fe(n,d))&&(delete o[d],p=!0)}p&&Fn(e,"set","$attrs")}function nr(e,n,t,a){const[s,o]=e.propsOptions;let l=!1,c;if(n)for(let r in n){if(ia(r))continue;const p=n[r];let u;s&&fe(s,u=vn(r))?!o||!o.includes(u)?t[u]=p:(c||(c={}))[u]=p:ys(e.emitsOptions,r)||(!(r in a)||p!==a[r])&&(a[r]=p,l=!0)}if(o){const r=ce(t),p=c||De;for(let u=0;u<o.length;u++){const d=o[u];t[d]=ko(s,r,d,p[d],e,!fe(p,d))}}return l}function ko(e,n,t,a,s,o){const l=e[t];if(l!=null){const c=fe(l,"default");if(c&&a===void 0){const r=l.default;if(l.type!==Function&&!l.skipFactory&&se(r)){const{propsDefaults:p}=s;t in p?a=p[t]:(Mt(s),a=p[t]=r.call(null,n),dt())}else a=r}l[0]&&(o&&!c?a=!1:l[1]&&(a===""||a===qt(t))&&(a=!0))}return a}function tr(e,n,t=!1){const a=n.propsCache,s=a.get(e);if(s)return s;const o=e.props,l={},c=[];let r=!1;if(!se(e)){const u=d=>{r=!0;const[m,f]=tr(d,n,!0);Le(l,m),f&&c.push(...f)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!r)return Pe(e)&&a.set(e,Tt),Tt;if(Q(o))for(let u=0;u<o.length;u++){const d=vn(o[u]);ii(d)&&(l[d]=De)}else if(o)for(const u in o){const d=vn(u);if(ii(d)){const m=o[u],f=l[d]=Q(m)||se(m)?{type:m}:Le({},m);if(f){const g=pi(Boolean,f.type),b=pi(String,f.type);f[0]=g>-1,f[1]=b<0||g<b,(g>-1||fe(f,"default"))&&c.push(d)}}}const p=[l,c];return Pe(e)&&a.set(e,p),p}function ii(e){return e[0]!=="$"}function ci(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function ri(e,n){return ci(e)===ci(n)}function pi(e,n){return Q(n)?n.findIndex(t=>ri(t,e)):se(n)&&ri(n,e)?0:-1}const ar=e=>e[0]==="_"||e==="$stable",tl=e=>Q(e)?e.map(hn):[hn(e)],A0=(e,n,t)=>{if(n._n)return n;const a=Wd((...s)=>tl(n(...s)),t);return a._c=!1,a},sr=(e,n,t)=>{const a=e._ctx;for(const s in e){if(ar(s))continue;const o=e[s];if(se(o))n[s]=A0(s,o,a);else if(o!=null){const l=tl(o);n[s]=()=>l}}},or=(e,n)=>{const t=tl(n);e.slots.default=()=>t},B0=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ce(n),os(n,"_",t)):sr(n,e.slots={})}else e.slots={},n&&or(e,n);os(e.slots,Bs,1)},D0=(e,n,t)=>{const{vnode:a,slots:s}=e;let o=!0,l=De;if(a.shapeFlag&32){const c=n._;c?t&&c===1?o=!1:(Le(s,n),!t&&c===1&&delete s._):(o=!n.$stable,sr(n,s)),l=n}else n&&(or(e,n),l={default:1});if(o)for(const c in s)!ar(c)&&l[c]==null&&delete s[c]};function ds(e,n,t,a,s=!1){if(Q(e)){e.forEach((m,f)=>ds(m,n&&(Q(n)?n[f]:n),t,a,s));return}if(St(a)&&!s)return;const o=a.shapeFlag&4?ol(a.component)||a.component.proxy:a.el,l=s?null:o,{i:c,r}=e,p=n&&n.r,u=c.refs===De?c.refs={}:c.refs,d=c.setupState;if(p!=null&&p!==r&&(ge(p)?(u[p]=null,fe(d,p)&&(d[p]=null)):Re(p)&&(p.value=null)),se(r))Xn(r,c,12,[l,u]);else{const m=ge(r),f=Re(r);if(m||f){const g=()=>{if(e.f){const b=m?fe(d,r)?d[r]:u[r]:r.value;s?Q(b)&&No(b,o):Q(b)?b.includes(o)||b.push(o):m?(u[r]=[o],fe(d,r)&&(d[r]=u[r])):(r.value=[o],e.k&&(u[e.k]=r.value))}else m?(u[r]=l,fe(d,r)&&(d[r]=l)):f&&(r.value=l,e.k&&(u[e.k]=l))};l?(g.id=-1,Ye(g,t)):g()}}}let Nn=!1;const Ya=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Xa=e=>e.nodeType===8;function T0(e){const{mt:n,p:t,o:{patchProp:a,createText:s,nextSibling:o,parentNode:l,remove:c,insert:r,createComment:p}}=e,u=(E,D)=>{if(!D.hasChildNodes()){t(null,E,D),cs(),D._vnode=E;return}Nn=!1,d(D.firstChild,E,null,null,null),cs(),D._vnode=E,Nn&&console.error("Hydration completed but contains mismatches.")},d=(E,D,R,C,V,S=!1)=>{const N=Xa(E)&&E.data==="[",z=()=>b(E,D,R,C,V,N),{type:ee,ref:U,shapeFlag:ne,patchFlag:Te}=D;let Be=E.nodeType;D.el=E,Te===-2&&(S=!1,D.dynamicChildren=null);let W=null;switch(ee){case Vt:Be!==3?D.children===""?(r(D.el=s(""),l(E),E),W=E):W=z():(E.data!==D.children&&(Nn=!0,E.data=D.children),W=o(E));break;case sn:if(Be!==8||N)if(E.tagName.toLowerCase()==="template"){const te=D.el.content.firstChild;y(te,E,R),D.el=E=te,W=o(E)}else W=z();else W=o(E);break;case ra:if(N&&(E=o(E),Be=E.nodeType),Be===1||Be===3){W=E;const te=!D.children.length;for(let Y=0;Y<D.staticCount;Y++)te&&(D.children+=W.nodeType===1?W.outerHTML:W.data),Y===D.staticCount-1&&(D.anchor=W),W=o(W);return N?o(W):W}else z();break;case qe:N?W=g(E,D,R,C,V,S):W=z();break;default:if(ne&1)(Be!==1||D.type.toLowerCase()!==E.tagName.toLowerCase())&&!T(E)?W=z():W=m(E,D,R,C,V,S);else if(ne&6){D.slotScopeIds=V;const te=l(E);if(N?W=B(E):Xa(E)&&E.data==="teleport start"?W=B(E,E.data,"teleport end"):W=o(E),n(D,te,null,R,C,Ya(te),S),St(D)){let Y;N?(Y=Ie(qe),Y.anchor=W?W.previousSibling:te.lastChild):Y=E.nodeType===3?dr(""):Ie("div"),Y.el=E,D.component.subTree=Y}}else ne&64?Be!==8?W=z():W=D.type.hydrate(E,D,R,C,V,S,e,f):ne&128&&(W=D.type.hydrate(E,D,R,C,Ya(l(E)),V,S,e,d))}return U!=null&&ds(U,null,C,D),W},m=(E,D,R,C,V,S)=>{S=S||!!D.dynamicChildren;const{type:N,props:z,patchFlag:ee,shapeFlag:U,dirs:ne,transition:Te}=D,Be=N==="input"&&ne||N==="option";if(Be||ee!==-1){if(ne&&Tn(D,null,R,"created"),z)if(Be||!S||ee&48)for(const Y in z)(Be&&Y.endsWith("value")||Aa(Y)&&!ia(Y))&&a(E,Y,null,z[Y],!1,void 0,R);else z.onClick&&a(E,"onClick",null,z.onClick,!1,void 0,R);let W;(W=z&&z.onVnodeBeforeMount)&&rn(W,R,D);let te=!1;if(T(E)){te=lr(C,Te)&&R&&R.vnode.props&&R.vnode.props.appear;const Y=E.content.firstChild;te&&Te.beforeEnter(Y),y(Y,E,R),D.el=E=Y}if(ne&&Tn(D,null,R,"beforeMount"),((W=z&&z.onVnodeMounted)||ne||te)&&zc(()=>{W&&rn(W,R,D),te&&Te.enter(E),ne&&Tn(D,null,R,"mounted")},C),U&16&&!(z&&(z.innerHTML||z.textContent))){let Y=f(E.firstChild,D,E,R,C,V,S);for(;Y;){Nn=!0;const Se=Y;Y=Y.nextSibling,c(Se)}}else U&8&&E.textContent!==D.children&&(Nn=!0,E.textContent=D.children)}return E.nextSibling},f=(E,D,R,C,V,S,N)=>{N=N||!!D.dynamicChildren;const z=D.children,ee=z.length;for(let U=0;U<ee;U++){const ne=N?z[U]:z[U]=hn(z[U]);if(E)E=d(E,ne,C,V,S,N);else{if(ne.type===Vt&&!ne.children)continue;Nn=!0,t(null,ne,R,null,C,V,Ya(R),S)}}return E},g=(E,D,R,C,V,S)=>{const{slotScopeIds:N}=D;N&&(V=V?V.concat(N):N);const z=l(E),ee=f(o(E),D,z,R,C,V,S);return ee&&Xa(ee)&&ee.data==="]"?o(D.anchor=ee):(Nn=!0,r(D.anchor=p("]"),z,ee),ee)},b=(E,D,R,C,V,S)=>{if(Nn=!0,D.el=null,S){const ee=B(E);for(;;){const U=o(E);if(U&&U!==ee)c(U);else break}}const N=o(E),z=l(E);return c(E),t(null,D,z,N,R,C,Ya(z),V),N},B=(E,D="[",R="]")=>{let C=0;for(;E;)if(E=o(E),E&&Xa(E)&&(E.data===D&&C++,E.data===R)){if(C===0)return o(E);C--}return E},y=(E,D,R)=>{const C=D.parentNode;C&&C.replaceChild(E,D);let V=R;for(;V;)V.vnode.el===D&&(V.vnode.el=E,V.subTree.el=E),V=V.parent},T=E=>E.nodeType===1&&E.tagName.toLowerCase()==="template";return[u,d]}const Ye=zc;function P0(e){return I0(e,T0)}function I0(e,n){const t=ro();t.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:l,createText:c,createComment:r,setText:p,setElementText:u,parentNode:d,nextSibling:m,setScopeId:f=_n,insertStaticContent:g}=e,b=(h,k,A,P=null,O=null,L=null,H=!1,M=null,$=!!k.dynamicChildren)=>{if(h===k)return;h&&!it(h,k)&&(P=I(h),Ve(h,O,L,!0),h=null),k.patchFlag===-2&&($=!1,k.dynamicChildren=null);const{type:x,ref:Z,shapeFlag:K}=k;switch(x){case Vt:B(h,k,A,P);break;case sn:y(h,k,A,P);break;case ra:h==null&&T(k,A,P,H);break;case qe:U(h,k,A,P,O,L,H,M,$);break;default:K&1?R(h,k,A,P,O,L,H,M,$):K&6?ne(h,k,A,P,O,L,H,M,$):(K&64||K&128)&&x.process(h,k,A,P,O,L,H,M,$,G)}Z!=null&&O&&ds(Z,h&&h.ref,L,k||h,!k)},B=(h,k,A,P)=>{if(h==null)a(k.el=c(k.children),A,P);else{const O=k.el=h.el;k.children!==h.children&&p(O,k.children)}},y=(h,k,A,P)=>{h==null?a(k.el=r(k.children||""),A,P):k.el=h.el},T=(h,k,A,P)=>{[h.el,h.anchor]=g(h.children,k,A,P,h.el,h.anchor)},E=({el:h,anchor:k},A,P)=>{let O;for(;h&&h!==k;)O=m(h),a(h,A,P),h=O;a(k,A,P)},D=({el:h,anchor:k})=>{let A;for(;h&&h!==k;)A=m(h),s(h),h=A;s(k)},R=(h,k,A,P,O,L,H,M,$)=>{H=H||k.type==="svg",h==null?C(k,A,P,O,L,H,M,$):N(h,k,O,L,H,M,$)},C=(h,k,A,P,O,L,H,M)=>{let $,x;const{type:Z,props:K,shapeFlag:J,transition:ae,dirs:oe}=h;if($=h.el=l(h.type,L,K&&K.is,K),J&8?u($,h.children):J&16&&S(h.children,$,null,P,O,L&&Z!=="foreignObject",H,M),oe&&Tn(h,null,P,"created"),V($,h,h.scopeId,H,P),K){for(const _e in K)_e!=="value"&&!ia(_e)&&o($,_e,null,K[_e],L,h.children,P,O,Ce);"value"in K&&o($,"value",null,K.value),(x=K.onVnodeBeforeMount)&&rn(x,P,h)}oe&&Tn(h,null,P,"beforeMount");const ye=lr(O,ae);ye&&ae.beforeEnter($),a($,k,A),((x=K&&K.onVnodeMounted)||ye||oe)&&Ye(()=>{x&&rn(x,P,h),ye&&ae.enter($),oe&&Tn(h,null,P,"mounted")},O)},V=(h,k,A,P,O)=>{if(A&&f(h,A),P)for(let L=0;L<P.length;L++)f(h,P[L]);if(O){let L=O.subTree;if(k===L){const H=O.vnode;V(h,H,H.scopeId,H.slotScopeIds,O.parent)}}},S=(h,k,A,P,O,L,H,M,$=0)=>{for(let x=$;x<h.length;x++){const Z=h[x]=M?Wn(h[x]):hn(h[x]);b(null,Z,k,A,P,O,L,H,M)}},N=(h,k,A,P,O,L,H)=>{const M=k.el=h.el;let{patchFlag:$,dynamicChildren:x,dirs:Z}=k;$|=h.patchFlag&16;const K=h.props||De,J=k.props||De;let ae;A&&st(A,!1),(ae=J.onVnodeBeforeUpdate)&&rn(ae,A,k,h),Z&&Tn(k,h,A,"beforeUpdate"),A&&st(A,!0);const oe=O&&k.type!=="foreignObject";if(x?z(h.dynamicChildren,x,M,A,P,oe,L):H||Y(h,k,M,null,A,P,oe,L,!1),$>0){if($&16)ee(M,k,K,J,A,P,O);else if($&2&&K.class!==J.class&&o(M,"class",null,J.class,O),$&4&&o(M,"style",K.style,J.style,O),$&8){const ye=k.dynamicProps;for(let _e=0;_e<ye.length;_e++){const Oe=ye[_e],mn=K[Oe],kt=J[Oe];(kt!==mn||Oe==="value")&&o(M,Oe,mn,kt,O,h.children,A,P,Ce)}}$&1&&h.children!==k.children&&u(M,k.children)}else!H&&x==null&&ee(M,k,K,J,A,P,O);((ae=J.onVnodeUpdated)||Z)&&Ye(()=>{ae&&rn(ae,A,k,h),Z&&Tn(k,h,A,"updated")},P)},z=(h,k,A,P,O,L,H)=>{for(let M=0;M<k.length;M++){const $=h[M],x=k[M],Z=$.el&&($.type===qe||!it($,x)||$.shapeFlag&70)?d($.el):A;b($,x,Z,null,P,O,L,H,!0)}},ee=(h,k,A,P,O,L,H)=>{if(A!==P){if(A!==De)for(const M in A)!ia(M)&&!(M in P)&&o(h,M,A[M],null,H,k.children,O,L,Ce);for(const M in P){if(ia(M))continue;const $=P[M],x=A[M];$!==x&&M!=="value"&&o(h,M,x,$,H,k.children,O,L,Ce)}"value"in P&&o(h,"value",A.value,P.value)}},U=(h,k,A,P,O,L,H,M,$)=>{const x=k.el=h?h.el:c(""),Z=k.anchor=h?h.anchor:c("");let{patchFlag:K,dynamicChildren:J,slotScopeIds:ae}=k;ae&&(M=M?M.concat(ae):ae),h==null?(a(x,A,P),a(Z,A,P),S(k.children,A,Z,O,L,H,M,$)):K>0&&K&64&&J&&h.dynamicChildren?(z(h.dynamicChildren,J,A,O,L,H,M),(k.key!=null||O&&k===O.subTree)&&ir(h,k,!0)):Y(h,k,A,Z,O,L,H,M,$)},ne=(h,k,A,P,O,L,H,M,$)=>{k.slotScopeIds=M,h==null?k.shapeFlag&512?O.ctx.activate(k,A,P,H,$):Te(k,A,P,O,L,H,$):Be(h,k,$)},Te=(h,k,A,P,O,L,H)=>{const M=h.component=M0(h,P,O);if(Ia(h)&&(M.ctx.renderer=G),G0(M),M.asyncDep){if(O&&O.registerDep(M,W),!h.el){const $=M.subTree=Ie(sn);y(null,$,k,A)}return}W(M,h,k,A,O,L,H)},Be=(h,k,A)=>{const P=k.component=h.component;if(Xd(h,k,A))if(P.asyncDep&&!P.asyncResolved){te(P,k,A);return}else P.next=k,zd(P.update),P.update();else k.el=h.el,P.vnode=k},W=(h,k,A,P,O,L,H)=>{const M=()=>{if(h.isMounted){let{next:Z,bu:K,u:J,parent:ae,vnode:oe}=h,ye=Z,_e;st(h,!1),Z?(Z.el=oe.el,te(h,Z,H)):Z=oe,K&&Fs(K),(_e=Z.props&&Z.props.onVnodeBeforeUpdate)&&rn(_e,ae,Z,oe),st(h,!0);const Oe=Vs(h),mn=h.subTree;h.subTree=Oe,b(mn,Oe,d(mn.el),I(mn),h,O,L),Z.el=Oe.el,ye===null&&Zd(h,Oe.el),J&&Ye(J,O),(_e=Z.props&&Z.props.onVnodeUpdated)&&Ye(()=>rn(_e,ae,Z,oe),O)}else{let Z;const{el:K,props:J}=k,{bm:ae,m:oe,parent:ye}=h,_e=St(k);if(st(h,!1),ae&&Fs(ae),!_e&&(Z=J&&J.onVnodeBeforeMount)&&rn(Z,ye,k),st(h,!0),K&&ve){const Oe=()=>{h.subTree=Vs(h),ve(K,h.subTree,h,O,null)};_e?k.type.__asyncLoader().then(()=>!h.isUnmounted&&Oe()):Oe()}else{const Oe=h.subTree=Vs(h);b(null,Oe,A,P,h,O,L),k.el=Oe.el}if(oe&&Ye(oe,O),!_e&&(Z=J&&J.onVnodeMounted)){const Oe=k;Ye(()=>rn(Z,ye,Oe),O)}(k.shapeFlag&256||ye&&St(ye.vnode)&&ye.vnode.shapeFlag&256)&&h.a&&Ye(h.a,O),h.isMounted=!0,k=A=P=null}},$=h.effect=new Ho(M,()=>Es(x),h.scope),x=h.update=()=>$.run();x.id=h.uid,st(h,!0),x()},te=(h,k,A)=>{k.component=h;const P=h.vnode.props;h.vnode=k,h.next=null,w0(h,k.props,P,A),D0(h,k.children,A),Wt(),Ql(),Kt()},Y=(h,k,A,P,O,L,H,M,$=!1)=>{const x=h&&h.children,Z=h?h.shapeFlag:0,K=k.children,{patchFlag:J,shapeFlag:ae}=k;if(J>0){if(J&128){An(x,K,A,P,O,L,H,M,$);return}else if(J&256){Se(x,K,A,P,O,L,H,M,$);return}}ae&8?(Z&16&&Ce(x,O,L),K!==x&&u(A,K)):Z&16?ae&16?An(x,K,A,P,O,L,H,M,$):Ce(x,O,L,!0):(Z&8&&u(A,""),ae&16&&S(K,A,P,O,L,H,M,$))},Se=(h,k,A,P,O,L,H,M,$)=>{h=h||Tt,k=k||Tt;const x=h.length,Z=k.length,K=Math.min(x,Z);let J;for(J=0;J<K;J++){const ae=k[J]=$?Wn(k[J]):hn(k[J]);b(h[J],ae,A,null,O,L,H,M,$)}x>Z?Ce(h,O,L,!0,!1,K):S(k,A,P,O,L,H,M,$,K)},An=(h,k,A,P,O,L,H,M,$)=>{let x=0;const Z=k.length;let K=h.length-1,J=Z-1;for(;x<=K&&x<=J;){const ae=h[x],oe=k[x]=$?Wn(k[x]):hn(k[x]);if(it(ae,oe))b(ae,oe,A,null,O,L,H,M,$);else break;x++}for(;x<=K&&x<=J;){const ae=h[K],oe=k[J]=$?Wn(k[J]):hn(k[J]);if(it(ae,oe))b(ae,oe,A,null,O,L,H,M,$);else break;K--,J--}if(x>K){if(x<=J){const ae=J+1,oe=ae<Z?k[ae].el:P;for(;x<=J;)b(null,k[x]=$?Wn(k[x]):hn(k[x]),A,oe,O,L,H,M,$),x++}}else if(x>J)for(;x<=K;)Ve(h[x],O,L,!0),x++;else{const ae=x,oe=x,ye=new Map;for(x=oe;x<=J;x++){const en=k[x]=$?Wn(k[x]):hn(k[x]);en.key!=null&&ye.set(en.key,x)}let _e,Oe=0;const mn=J-oe+1;let kt=!1,Nl=0;const ea=new Array(mn);for(x=0;x<mn;x++)ea[x]=0;for(x=ae;x<=K;x++){const en=h[x];if(Oe>=mn){Ve(en,O,L,!0);continue}let Dn;if(en.key!=null)Dn=ye.get(en.key);else for(_e=oe;_e<=J;_e++)if(ea[_e-oe]===0&&it(en,k[_e])){Dn=_e;break}Dn===void 0?Ve(en,O,L,!0):(ea[Dn-oe]=x+1,Dn>=Nl?Nl=Dn:kt=!0,b(en,k[Dn],A,null,O,L,H,M,$),Oe++)}const Ul=kt?S0(ea):Tt;for(_e=Ul.length-1,x=mn-1;x>=0;x--){const en=oe+x,Dn=k[en],zl=en+1<Z?k[en+1].el:P;ea[x]===0?b(null,Dn,A,zl,O,L,H,M,$):kt&&(_e<0||x!==Ul[_e]?ln(Dn,A,zl,2):_e--)}}},ln=(h,k,A,P,O=null)=>{const{el:L,type:H,transition:M,children:$,shapeFlag:x}=h;if(x&6){ln(h.component.subTree,k,A,P);return}if(x&128){h.suspense.move(k,A,P);return}if(x&64){H.move(h,k,A,G);return}if(H===qe){a(L,k,A);for(let K=0;K<$.length;K++)ln($[K],k,A,P);a(h.anchor,k,A);return}if(H===ra){E(h,k,A);return}if(P!==2&&x&1&&M)if(P===0)M.beforeEnter(L),a(L,k,A),Ye(()=>M.enter(L),O);else{const{leave:K,delayLeave:J,afterLeave:ae}=M,oe=()=>a(L,k,A),ye=()=>{K(L,()=>{oe(),ae&&ae()})};J?J(L,oe,ye):ye()}else a(L,k,A)},Ve=(h,k,A,P=!1,O=!1)=>{const{type:L,props:H,ref:M,children:$,dynamicChildren:x,shapeFlag:Z,patchFlag:K,dirs:J}=h;if(M!=null&&ds(M,null,A,h,!0),Z&256){k.ctx.deactivate(h);return}const ae=Z&1&&J,oe=!St(h);let ye;if(oe&&(ye=H&&H.onVnodeBeforeUnmount)&&rn(ye,k,h),Z&6)Bn(h.component,A,P);else{if(Z&128){h.suspense.unmount(A,P);return}ae&&Tn(h,null,k,"beforeUnmount"),Z&64?h.type.remove(h,k,A,O,G,P):x&&(L!==qe||K>0&&K&64)?Ce(x,k,A,!1,!0):(L===qe&&K&384||!O&&Z&16)&&Ce($,k,A),P&&Qe(h)}(oe&&(ye=H&&H.onVnodeUnmounted)||ae)&&Ye(()=>{ye&&rn(ye,k,h),ae&&Tn(h,null,k,"unmounted")},A)},Qe=h=>{const{type:k,el:A,anchor:P,transition:O}=h;if(k===qe){Sn(A,P);return}if(k===ra){D(h);return}const L=()=>{s(A),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(h.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:M}=O,$=()=>H(A,L);M?M(h.el,L,$):$()}else L()},Sn=(h,k)=>{let A;for(;h!==k;)A=m(h),s(h),h=A;s(k)},Bn=(h,k,A)=>{const{bum:P,scope:O,update:L,subTree:H,um:M}=h;P&&Fs(P),O.stop(),L&&(L.active=!1,Ve(H,h,k,A)),M&&Ye(M,k),Ye(()=>{h.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},Ce=(h,k,A,P=!1,O=!1,L=0)=>{for(let H=L;H<h.length;H++)Ve(h[H],k,A,P,O)},I=h=>h.shapeFlag&6?I(h.component.subTree):h.shapeFlag&128?h.suspense.next():m(h.anchor||h.el),j=(h,k,A)=>{h==null?k._vnode&&Ve(k._vnode,null,null,!0):b(k._vnode||null,h,k,null,null,null,A),Ql(),cs(),k._vnode=h},G={p:b,um:Ve,m:ln,r:Qe,mt:Te,mc:S,pc:Y,pbc:z,n:I,o:e};let X,ve;return n&&([X,ve]=n(G)),{render:j,hydrate:X,createApp:E0(j,X)}}function st({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function lr(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ir(e,n,t=!1){const a=e.children,s=n.children;if(Q(a)&&Q(s))for(let o=0;o<a.length;o++){const l=a[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=Wn(s[o]),c.el=l.el),t||ir(l,c)),c.type===Vt&&(c.el=l.el)}}function S0(e){const n=e.slice(),t=[0];let a,s,o,l,c;const r=e.length;for(a=0;a<r;a++){const p=e[a];if(p!==0){if(s=t[t.length-1],e[s]<p){n[a]=s,t.push(a);continue}for(o=0,l=t.length-1;o<l;)c=o+l>>1,e[t[c]]<p?o=c+1:l=c;p<e[t[o]]&&(o>0&&(n[a]=t[o-1]),t[o]=a)}}for(o=t.length,l=t[o-1];o-- >0;)t[o]=l,l=n[l];return t}const C0=e=>e.__isTeleport,qe=Symbol.for("v-fgt"),Vt=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),pa=[];let kn=null;function As(e=!1){pa.push(kn=e?null:[])}function O0(){pa.pop(),kn=pa[pa.length-1]||null}let _a=1;function ui(e){_a+=e}function cr(e){return e.dynamicChildren=_a>0?kn||Tt:null,O0(),_a>0&&kn&&kn.push(e),e}function rr(e,n,t,a,s,o){return cr(ut(e,n,t,a,s,o,!0))}function pr(e,n,t,a,s){return cr(Ie(e,n,t,a,s,!0))}function vs(e){return e?e.__v_isVNode===!0:!1}function it(e,n){return e.type===n.type&&e.key===n.key}const Bs="__vInternal",ur=({key:e})=>e??null,ss=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Re(e)||se(e)?{i:ze,r:e,k:n,f:!!t}:e:null);function ut(e,n=null,t=null,a=0,s=null,o=e===qe?0:1,l=!1,c=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ur(n),ref:n&&ss(n),scopeId:Uc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return c?(al(r,t),o&128&&e.normalize(r)):t&&(r.shapeFlag|=ge(t)?8:16),_a>0&&!l&&kn&&(r.patchFlag>0||o&6)&&r.patchFlag!==32&&kn.push(r),r}const Ie=L0;function L0(e,n=null,t=null,a=0,s=null,o=!1){if((!e||e===u0)&&(e=sn),vs(e)){const c=Jn(e,n,!0);return t&&al(c,t),_a>0&&!o&&kn&&(c.shapeFlag&6?kn[kn.indexOf(e)]=c:kn.push(c)),c.patchFlag|=-2,c}if(H0(e)&&(e=e.__vccOpts),n){n=x0(n);let{class:c,style:r}=n;c&&!ge(c)&&(n.class=Da(c)),Pe(r)&&(Lc(r)&&!Q(r)&&(r=Le({},r)),n.style=Rt(r))}const l=ge(e)?1:Jd(e)?128:C0(e)?64:Pe(e)?4:se(e)?2:0;return ut(e,n,t,a,s,l,o,!0)}function x0(e){return e?Lc(e)||Bs in e?Le({},e):e:null}function Jn(e,n,t=!1){const{props:a,ref:s,patchFlag:o,children:l}=e,c=n?R0(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ur(c),ref:n&&n.ref?t&&s?Q(s)?s.concat(ss(n)):[s,ss(n)]:ss(n):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==qe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jn(e.ssContent),ssFallback:e.ssFallback&&Jn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function dr(e=" ",n=0){return Ie(Vt,null,e,n)}function Rh(e,n){const t=Ie(ra,null,e);return t.staticCount=n,t}function Fh(e="",n=!1){return n?(As(),pr(sn,null,e)):Ie(sn,null,e)}function hn(e){return e==null||typeof e=="boolean"?Ie(sn):Q(e)?Ie(qe,null,e.slice()):typeof e=="object"?Wn(e):Ie(Vt,null,String(e))}function Wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jn(e)}function al(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(Q(n))t=16;else if(typeof n=="object")if(a&65){const s=n.default;s&&(s._c&&(s._d=!1),al(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!(Bs in n)?n._ctx=ze:s===3&&ze&&(ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else se(n)?(n={default:n,_ctx:ze},t=32):(n=String(n),a&64?(t=16,n=[dr(n)]):t=8);e.children=n,e.shapeFlag|=t}function R0(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const s in a)if(s==="class")n.class!==a.class&&(n.class=Da([n.class,a.class]));else if(s==="style")n.style=Rt([n.style,a.style]);else if(Aa(s)){const o=n[s],l=a[s];l&&o!==l&&!(Q(o)&&o.includes(l))&&(n[s]=o?[].concat(o,l):l)}else s!==""&&(n[s]=a[s])}return n}function rn(e,n,t,a=null){dn(e,n,7,[t,a])}const F0=er();let V0=0;function M0(e,n,t){const a=e.type,s=(n?n.appContext:e.appContext)||F0,o={uid:V0++,vnode:e,type:a,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tr(a,s),emitsOptions:Nc(a,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:a.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=qd.bind(null,o),e.ce&&e.ce(o),o}let xe=null;const nt=()=>xe||ze;let sl,_t,di="__VUE_INSTANCE_SETTERS__";(_t=ro()[di])||(_t=ro()[di]=[]),_t.push(e=>xe=e),sl=e=>{_t.length>1?_t.forEach(n=>n(e)):_t[0](e)};const Mt=e=>{sl(e),e.scope.on()},dt=()=>{xe&&xe.scope.off(),sl(null)};function vr(e){return e.vnode.shapeFlag&4}let Gt=!1;function G0(e,n=!1){Gt=n;const{props:t,children:a}=e.vnode,s=vr(e);y0(e,t,s,n),B0(e,a);const o=s?$0(e,n):void 0;return Gt=!1,o}function $0(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=xc(new Proxy(e.ctx,m0));const{setup:a}=t;if(a){const s=e.setupContext=a.length>1?U0(e):null;Mt(e),Wt();const o=Xn(a,e,0,[e.props,s]);if(Kt(),dt(),_c(o)){if(o.then(dt,dt),n)return o.then(l=>{vi(e,l,n)}).catch(l=>{Pa(l,e,0)});e.asyncDep=o}else vi(e,o,n)}else mr(e,n)}function vi(e,n,t){se(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Pe(n)&&(e.setupState=Fc(n)),mr(e,t)}let mi;function mr(e,n,t){const a=e.type;if(!e.render){if(!n&&mi&&!a.render){const s=a.template||nl(e).template;if(s){const{isCustomElement:o,compilerOptions:l}=e.appContext.config,{delimiters:c,compilerOptions:r}=a,p=Le(Le({isCustomElement:o,delimiters:c},l),r);a.render=mi(s,p)}}e.render=a.render||_n}{Mt(e),Wt();try{f0(e)}finally{Kt(),dt()}}}function N0(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Ze(e,"get","$attrs"),n[t]}}))}function U0(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return N0(e)},slots:e.slots,emit:e.emit,expose:n}}function ol(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fc(xc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ca)return ca[t](e)},has(n,t){return t in n||t in ca}}))}function z0(e,n=!0){return se(e)?e.displayName||e.name:e.name||n&&e.__name}function H0(e){return se(e)&&"__vccOpts"in e}const w=(e,n)=>$d(e,n,Gt);function i(e,n,t){const a=arguments.length;return a===2?Pe(n)&&!Q(n)?vs(n)?Ie(e,null,[n]):Ie(e,n):Ie(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&vs(t)&&(t=[t]),Ie(e,n,t))}const j0=Symbol.for("v-scx"),q0=()=>pe(j0),W0="3.3.7",K0="http://www.w3.org/2000/svg",ct=typeof document<"u"?document:null,fi=ct&&ct.createElement("template"),Y0={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const s=n?ct.createElementNS(K0,e):ct.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,s,o){const l=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{fi.innerHTML=a?`<svg>${e}</svg>`:e;const c=fi.content;if(a){const r=c.firstChild;for(;r.firstChild;)c.appendChild(r.firstChild);c.removeChild(r)}n.insertBefore(c,t)}return[l?l.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Un="transition",na="animation",$t=Symbol("_vtc"),Qn=(e,{slots:n})=>i(n0,hr(e),n);Qn.displayName="Transition";const fr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},X0=Qn.props=Le({},Wc,fr),ot=(e,n=[])=>{Q(e)?e.forEach(t=>t(...n)):e&&e(...n)},hi=e=>e?Q(e)?e.some(n=>n.length>1):e.length>1:!1;function hr(e){const n={};for(const U in e)U in fr||(n[U]=e[U]);if(e.css===!1)return n;const{name:t="v",type:a,duration:s,enterFromClass:o=`${t}-enter-from`,enterActiveClass:l=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:r=o,appearActiveClass:p=l,appearToClass:u=c,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=e,g=Z0(s),b=g&&g[0],B=g&&g[1],{onBeforeEnter:y,onEnter:T,onEnterCancelled:E,onLeave:D,onLeaveCancelled:R,onBeforeAppear:C=y,onAppear:V=T,onAppearCancelled:S=E}=n,N=(U,ne,Te)=>{jn(U,ne?u:c),jn(U,ne?p:l),Te&&Te()},z=(U,ne)=>{U._isLeaving=!1,jn(U,d),jn(U,f),jn(U,m),ne&&ne()},ee=U=>(ne,Te)=>{const Be=U?V:T,W=()=>N(ne,U,Te);ot(Be,[ne,W]),gi(()=>{jn(ne,U?r:o),On(ne,U?u:c),hi(Be)||ki(ne,a,b,W)})};return Le(n,{onBeforeEnter(U){ot(y,[U]),On(U,o),On(U,l)},onBeforeAppear(U){ot(C,[U]),On(U,r),On(U,p)},onEnter:ee(!1),onAppear:ee(!0),onLeave(U,ne){U._isLeaving=!0;const Te=()=>z(U,ne);On(U,d),kr(),On(U,m),gi(()=>{U._isLeaving&&(jn(U,d),On(U,f),hi(D)||ki(U,a,B,Te))}),ot(D,[U,Te])},onEnterCancelled(U){N(U,!1),ot(E,[U])},onAppearCancelled(U){N(U,!0),ot(S,[U])},onLeaveCancelled(U){z(U),ot(R,[U])}})}function Z0(e){if(e==null)return null;if(Pe(e))return[Ns(e.enter),Ns(e.leave)];{const n=Ns(e);return[n,n]}}function Ns(e){return td(e)}function On(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[$t]||(e[$t]=new Set)).add(n)}function jn(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const t=e[$t];t&&(t.delete(n),t.size||(e[$t]=void 0))}function gi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let J0=0;function ki(e,n,t,a){const s=e._endId=++J0,o=()=>{s===e._endId&&a()};if(t)return setTimeout(o,t);const{type:l,timeout:c,propCount:r}=gr(e,n);if(!l)return a();const p=l+"end";let u=0;const d=()=>{e.removeEventListener(p,m),o()},m=f=>{f.target===e&&++u>=r&&d()};setTimeout(()=>{u<r&&d()},c+1),e.addEventListener(p,m)}function gr(e,n){const t=window.getComputedStyle(e),a=g=>(t[g]||"").split(", "),s=a(`${Un}Delay`),o=a(`${Un}Duration`),l=_i(s,o),c=a(`${na}Delay`),r=a(`${na}Duration`),p=_i(c,r);let u=null,d=0,m=0;n===Un?l>0&&(u=Un,d=l,m=o.length):n===na?p>0&&(u=na,d=p,m=r.length):(d=Math.max(l,p),u=d>0?l>p?Un:na:null,m=u?u===Un?o.length:r.length:0);const f=u===Un&&/\b(transform|all)(,|$)/.test(a(`${Un}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:f}}function _i(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,a)=>bi(t)+bi(e[a])))}function bi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function kr(){return document.body.offsetHeight}function Q0(e,n,t){const a=e[$t];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const e1=Symbol("_vod");function n1(e,n,t){const a=e.style,s=ge(t);if(t&&!s){if(n&&!ge(n))for(const o in n)t[o]==null&&_o(a,o,"");for(const o in t)_o(a,o,t[o])}else{const o=a.display;s?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),e1 in e&&(a.display=o)}}const Ei=/\s*!important$/;function _o(e,n,t){if(Q(t))t.forEach(a=>_o(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=t1(e,n);Ei.test(t)?e.setProperty(qt(a),t.replace(Ei,""),"important"):e[a]=t}}const yi=["Webkit","Moz","ms"],Us={};function t1(e,n){const t=Us[n];if(t)return t;let a=vn(n);if(a!=="filter"&&a in e)return Us[n]=a;a=Ba(a);for(let s=0;s<yi.length;s++){const o=yi[s]+a;if(o in e)return Us[n]=o}return n}const wi="http://www.w3.org/1999/xlink";function a1(e,n,t,a,s){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(wi,n.slice(6,n.length)):e.setAttributeNS(wi,n,t);else{const o=cd(n);t==null||o&&!bc(t)?e.removeAttribute(n):e.setAttribute(n,o?"":t)}}function s1(e,n,t,a,s,o,l){if(n==="innerHTML"||n==="textContent"){a&&l(a,s,o),e[n]=t??"";return}const c=e.tagName;if(n==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=t;const p=c==="OPTION"?e.getAttribute("value"):e.value,u=t??"";p!==u&&(e.value=u),t==null&&e.removeAttribute(n);return}let r=!1;if(t===""||t==null){const p=typeof e[n];p==="boolean"?t=bc(t):t==null&&p==="string"?(t="",r=!0):p==="number"&&(t=0,r=!0)}try{e[n]=t}catch{}r&&e.removeAttribute(n)}function o1(e,n,t,a){e.addEventListener(n,t,a)}function l1(e,n,t,a){e.removeEventListener(n,t,a)}const Ai=Symbol("_vei");function i1(e,n,t,a,s=null){const o=e[Ai]||(e[Ai]={}),l=o[n];if(a&&l)l.value=a;else{const[c,r]=c1(n);if(a){const p=o[n]=u1(a,s);o1(e,c,p,r)}else l&&(l1(e,c,l,r),o[n]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function c1(e){let n;if(Bi.test(e)){n={};let a;for(;a=e.match(Bi);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qt(e.slice(2)),n]}let zs=0;const r1=Promise.resolve(),p1=()=>zs||(r1.then(()=>zs=0),zs=Date.now());function u1(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;dn(d1(a,t.value),n,5,[a])};return t.value=e,t.attached=p1(),t}function d1(e,n){if(Q(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>s=>!s._stopped&&a&&a(s))}else return n}const Di=/^on[a-z]/,v1=(e,n,t,a,s=!1,o,l,c,r)=>{n==="class"?Q0(e,a,s):n==="style"?n1(e,t,a):Aa(n)?$o(n)||i1(e,n,t,a,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):m1(e,n,a,s))?s1(e,n,a,o,l,c,r):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),a1(e,n,a,s))};function m1(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&Di.test(n)&&se(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Di.test(n)&&ge(t)?!1:n in e}const _r=new WeakMap,br=new WeakMap,ms=Symbol("_moveCb"),Ti=Symbol("_enterCb"),Er={name:"TransitionGroup",props:Le({},X0,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=nt(),a=qc();let s,o;return Xc(()=>{if(!s.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!b1(s[0].el,t.vnode.el,l))return;s.forEach(g1),s.forEach(k1);const c=s.filter(_1);kr(),c.forEach(r=>{const p=r.el,u=p.style;On(p,l),u.transform=u.webkitTransform=u.transitionDuration="";const d=p[ms]=m=>{m&&m.target!==p||(!m||/transform$/.test(m.propertyName))&&(p.removeEventListener("transitionend",d),p[ms]=null,jn(p,l))};p.addEventListener("transitionend",d)})}),()=>{const l=ce(e),c=hr(l);let r=l.tag||qe;s=o,o=n.default?Qo(n.default()):[];for(let p=0;p<o.length;p++){const u=o[p];u.key!=null&&ka(u,ga(u,c,a,t))}if(s)for(let p=0;p<s.length;p++){const u=s[p];ka(u,ga(u,c,a,t)),_r.set(u,u.el.getBoundingClientRect())}return Ie(r,null,o)}}},f1=e=>delete e.mode;Er.props;const h1=Er;function g1(e){const n=e.el;n[ms]&&n[ms](),n[Ti]&&n[Ti]()}function k1(e){br.set(e,e.el.getBoundingClientRect())}function _1(e){const n=_r.get(e),t=br.get(e),a=n.left-t.left,s=n.top-t.top;if(a||s){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${a}px,${s}px)`,o.transitionDuration="0s",e}}function b1(e,n,t){const a=e.cloneNode(),s=e[$t];s&&s.forEach(c=>{c.split(/\s+/).forEach(r=>r&&a.classList.remove(r))}),t.split(/\s+/).forEach(c=>c&&a.classList.add(c)),a.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(a);const{hasTransform:l}=gr(a);return o.removeChild(a),l}const E1=Le({patchProp:v1},Y0);let Hs,Pi=!1;function y1(){return Hs=Pi?Hs:P0(E1),Pi=!0,Hs}const w1=(...e)=>{const n=y1().createApp(...e),{mount:t}=n;return n.mount=a=>{const s=A1(a);if(s)return t(s,!0,s instanceof SVGElement)},n};function A1(e){return ge(e)?document.querySelector(e):e}const B1={"v-8daa1a0e":()=>v(()=>import("./index.html-8c6e944c.js"),[]).then(({data:e})=>e),"v-103999a8":()=>v(()=>import("./01Swap.html-2b0a6b15.js"),[]).then(({data:e})=>e),"v-70bc2959":()=>v(()=>import("./index.html-f68fafaa.js"),[]).then(({data:e})=>e),"v-ec514ab0":()=>v(()=>import("./index.html-4184a5de.js"),[]).then(({data:e})=>e),"v-5969763f":()=>v(()=>import("./index.html-8997035e.js"),[]).then(({data:e})=>e),"v-067b5137":()=>v(()=>import("./01selectionSort1.html-654b1510.js"),[]).then(({data:e})=>e),"v-c30cb95a":()=>v(()=>import("./02bubbleSort.html-3f025be1.js"),[]).then(({data:e})=>e),"v-392830ea":()=>v(()=>import("./index.html-a9fd4a36.js"),[]).then(({data:e})=>e),"v-392c5935":()=>v(()=>import("./index.html-70138f8b.js"),[]).then(({data:e})=>e),"v-422331e2":()=>v(()=>import("./index.html-edc4b4e9.js"),[]).then(({data:e})=>e),"v-59764534":()=>v(()=>import("./demo.html-7f01918a.js"),[]).then(({data:e})=>e),"v-01c2d25b":()=>v(()=>import("./1-gitignore.html-8b8dce7c.js"),[]).then(({data:e})=>e),"v-6ac7e2aa":()=>v(()=>import("./2-repo-tool.html-caf46977.js"),[]).then(({data:e})=>e),"v-212109a4":()=>v(()=>import("./3-commit-message.html-63554f76.js"),[]).then(({data:e})=>e),"v-3d983470":()=>v(()=>import("./4-submodule.html-c4a09ce5.js"),[]).then(({data:e})=>e),"v-9c10cf40":()=>v(()=>import("./5-path-problem.html-5b4ea5f8.js"),[]).then(({data:e})=>e),"v-ec184d2e":()=>v(()=>import("./6-rebase-merge.html-76689255.js"),[]).then(({data:e})=>e),"v-245d9bec":()=>v(()=>import("./index.html-db9d4341.js"),[]).then(({data:e})=>e),"v-eb0f2802":()=>v(()=>import("./1-download-huge-project-from-github.html-f106417b.js"),[]).then(({data:e})=>e),"v-7728bea7":()=>v(()=>import("./2-switch-multiple-github-accounts.html-b1178f4b.js"),[]).then(({data:e})=>e),"v-c7e4751c":()=>v(()=>import("./3-sync-a-fork.html-eba6eed4.js"),[]).then(({data:e})=>e),"v-e5fa9af4":()=>v(()=>import("./4-ssh-push-failed.html-abeb2244.js"),[]).then(({data:e})=>e),"v-1ba8957d":()=>v(()=>import("./5-autoaction.html-c3fb89ea.js"),[]).then(({data:e})=>e),"v-0b69c61f":()=>v(()=>import("./index.html-ad684aac.js"),[]).then(({data:e})=>e),"v-a4588a60":()=>v(()=>import("./1-errors.html-1413b36e.js"),[]).then(({data:e})=>e),"v-4e3a3e2e":()=>v(()=>import("./2-poddoc.html-b8eb35ea.js"),[]).then(({data:e})=>e),"v-5de88dbc":()=>v(()=>import("./index.html-11e31969.js"),[]).then(({data:e})=>e),"v-792ac5f1":()=>v(()=>import("./1-classtool.html-a8f39b43.js"),[]).then(({data:e})=>e),"v-9be2b5e8":()=>v(()=>import("./index.html-e95c5285.js"),[]).then(({data:e})=>e),"v-2ed462fa":()=>v(()=>import("./1-errors.html-0bc976f8.js"),[]).then(({data:e})=>e),"v-0aab6ed5":()=>v(()=>import("./2-fix-todo-highlight-links.html-beb8e2ea.js"),[]).then(({data:e})=>e),"v-350b14b8":()=>v(()=>import("./index.html-a92ed823.js"),[]).then(({data:e})=>e),"v-5aa2c605":()=>v(()=>import("./index.html-22022060.js"),[]).then(({data:e})=>e),"v-a839441a":()=>v(()=>import("./vuepress-add-comp.html-c1d6b418.js"),[]).then(({data:e})=>e),"v-483f6eb7":()=>v(()=>import("./1-Gameplay.html-660c311b.js"),[]).then(({data:e})=>e),"v-9f505d48":()=>v(()=>import("./10-GameSave.html-0bb29a3a.js"),[]).then(({data:e})=>e),"v-aaba400c":()=>v(()=>import("./10.1-JsonTOString.html-7d660fa8.js"),[]).then(({data:e})=>e),"v-10f4f7c9":()=>v(()=>import("./2-GameMode.html-3b231f1d.js"),[]).then(({data:e})=>e),"v-2304f0b0":()=>v(()=>import("./3-Singleton.html-c72bb2b8.js"),[]).then(({data:e})=>e),"v-0d5dfba3":()=>v(()=>import("./4-Subsystem.html-2f55d273.js"),[]).then(({data:e})=>e),"v-d167da6a":()=>v(()=>import("./4.1-SubsystemUse.html-126575cb.js"),[]).then(({data:e})=>e),"v-43889d7a":()=>v(()=>import("./4.2-EnhancedInput.html-316fbe3f.js"),[]).then(({data:e})=>e),"v-cbf14a10":()=>v(()=>import("./5-Interface.html-cae3cadf.js"),[]).then(({data:e})=>e),"v-347c1406":()=>v(()=>import("./6-Delegate.html-2da0a4d3.js"),[]).then(({data:e})=>e),"v-88753b6a":()=>v(()=>import("./6.1-DelegateUse.html-acfcc463.js"),[]).then(({data:e})=>e),"v-9c7552aa":()=>v(()=>import("./7-GameFeature.html-f68f1553.js"),[]).then(({data:e})=>e),"v-5fc23eb5":()=>v(()=>import("./8-GAS.html-d5946236.js"),[]).then(({data:e})=>e),"v-35a3a78f":()=>v(()=>import("./9-Spectating.html-a25dc781.js"),[]).then(({data:e})=>e),"v-3d686d76":()=>v(()=>import("./01Build Fail.html-713a5341.js"),[]).then(({data:e})=>e),"v-5d651e98":()=>v(()=>import("./02ClassRedirects.html-9254977b.js"),[]).then(({data:e})=>e),"v-0357c5b0":()=>v(()=>import("./03CreateSessionError.html-0ef54caf.js"),[]).then(({data:e})=>e),"v-63c0fb6b":()=>v(()=>import("./04EncodeError.html-dae7919f.js"),[]).then(({data:e})=>e),"v-0dc93dd0":()=>v(()=>import("./05GameFeatureError.html-b9f07384.js"),[]).then(({data:e})=>e),"v-9cb8d68c":()=>v(()=>import("./06Mouse.html-96c2a67a.js"),[]).then(({data:e})=>e),"v-283ae959":()=>v(()=>import("./07SubsystemError.html-58527d1d.js"),[]).then(({data:e})=>e),"v-2327fc34":()=>v(()=>import("./08TObjectPtrError.html-06a7b6bd.js"),[]).then(({data:e})=>e),"v-9edab39e":()=>v(()=>import("./09SkeletalMeshAnimError.html-e0737fd6.js"),[]).then(({data:e})=>e),"v-c0277cb6":()=>v(()=>import("./1-GoodJob.html-d1cfa7ef.js"),[]).then(({data:e})=>e),"v-00d42220":()=>v(()=>import("./2-Blueprint2CPP.html-21e7bbeb.js"),[]).then(({data:e})=>e),"v-0c3c87db":()=>v(()=>import("./3-Blueprint2CPP-1.html-df511554.js"),[]).then(({data:e})=>e),"v-8a7ae01e":()=>v(()=>import("./4-BPShowCVariables.html-555b3efb.js"),[]).then(({data:e})=>e),"v-cc3e1e92":()=>v(()=>import("./5-EventFunctionMacro.html-6d1be1ab.js"),[]).then(({data:e})=>e),"v-faa905da":()=>v(()=>import("./1-XXXAPI.html-b1a4b19d.js"),[]).then(({data:e})=>e),"v-e7c7e0c8":()=>v(()=>import("./10-PTRINUE.html-378c05ad.js"),[]).then(({data:e})=>e),"v-0aa4c588":()=>v(()=>import("./11-Getactorofclass.html-8ed891de.js"),[]).then(({data:e})=>e),"v-8ea03774":()=>v(()=>import("./12-CE_KE.html-00b148a0.js"),[]).then(({data:e})=>e),"v-6ef0fadf":()=>v(()=>import("./13-BeginPlay.html-d1d0d992.js"),[]).then(({data:e})=>e),"v-7f6ffa27":()=>v(()=>import("./14-SpawnActorfromClass.html-f65107a6.js"),[]).then(({data:e})=>e),"v-35e6b090":()=>v(()=>import("./15-LoadAsset.html-40a02a21.js"),[]).then(({data:e})=>e),"v-5b1b53c4":()=>v(()=>import("./2-GENERATED_BODY.html-ba518299.js"),[]).then(({data:e})=>e),"v-7983a964":()=>v(()=>import("./3-EditorUsing.html-d46236ca.js"),[]).then(({data:e})=>e),"v-6e5edac0":()=>v(()=>import("./4-UPARAM.html-d082a859.js"),[]).then(({data:e})=>e),"v-e761d962":()=>v(()=>import("./5-UPROPERTY.html-3e16f835.js"),[]).then(({data:e})=>e),"v-07eefa62":()=>v(()=>import("./6-UEnum.html-d911de5a.js"),[]).then(({data:e})=>e),"v-0eb61f2d":()=>v(()=>import("./7-UStruct.html-111fc86f.js"),[]).then(({data:e})=>e),"v-62325f58":()=>v(()=>import("./8-TMap.html-be7dfd31.js"),[]).then(({data:e})=>e),"v-4b0f28af":()=>v(()=>import("./9-Iterator.html-9e95d119.js"),[]).then(({data:e})=>e),"v-a6a0843a":()=>v(()=>import("./1-lyra.html-2f05d628.js"),[]).then(({data:e})=>e),"v-318a2cdb":()=>v(()=>import("./2-ImproveCommonUI.html-225f496e.js"),[]).then(({data:e})=>e),"v-e010eba6":()=>v(()=>import("./3-lyraSubtitle.html-88696203.js"),[]).then(({data:e})=>e),"v-0cd6d45f":()=>v(()=>import("./1-Data.html-ed2aa7b1.js"),[]).then(({data:e})=>e),"v-1ad79dbc":()=>v(()=>import("./2-HTTP.html-25cde576.js"),[]).then(({data:e})=>e),"v-55ca86ff":()=>v(()=>import("./3-GamePlayNetWork.html-0e6f682d.js"),[]).then(({data:e})=>e),"v-1ba5c8ed":()=>v(()=>import("./4-GamePlayNetWorkUse.html-ff38247e.js"),[]).then(({data:e})=>e),"v-c4c01c70":()=>v(()=>import("./1-HPBar.html-eeb5f5f4.js"),[]).then(({data:e})=>e),"v-e95e6264":()=>v(()=>import("./2-BRDF.html-cad3e098.js"),[]).then(({data:e})=>e),"v-391766bc":()=>v(()=>import("./3-图片投影.html-f90f8904.js"),[]).then(({data:e})=>e),"v-2111666e":()=>v(()=>import("./0-where use a semicolon.html-adcd2647.js"),[]).then(({data:e})=>e),"v-bf12b7b0":()=>v(()=>import("./1-function Declaration_ Definition.html-0933b729.js"),[]).then(({data:e})=>e),"v-175bf425":()=>v(()=>import("./10-Functor.html-8d304e32.js"),[]).then(({data:e})=>e),"v-5b7ab8a5":()=>v(()=>import("./2-Variable Declaration_ Definition.html-84a2bc69.js"),[]).then(({data:e})=>e),"v-9a31f9f4":()=>v(()=>import("./3-Forward declaration.html-6442eef6.js"),[]).then(({data:e})=>e),"v-be08ce20":()=>v(()=>import("./4-VariablePassbyValue _ Reference.html-ae52244d.js"),[]).then(({data:e})=>e),"v-7f051d34":()=>v(()=>import("./4-function brace initialization.html-908c04ba.js"),[]).then(({data:e})=>e),"v-622a641a":()=>v(()=>import("./5-copymode.html-f7608aad.js"),[]).then(({data:e})=>e),"v-43101723":()=>v(()=>import("./7-i__and__i.html-1e7fda5d.js"),[]).then(({data:e})=>e),"v-02010851":()=>v(()=>import("./8-operator.html-82ab61c2.js"),[]).then(({data:e})=>e),"v-191531e6":()=>v(()=>import("./9-Big Four.html-cc95e78c.js"),[]).then(({data:e})=>e),"v-8db588aa":()=>v(()=>import("./1-Sington.html-a1812ad4.js"),[]).then(({data:e})=>e),"v-4c4aa776":()=>v(()=>import("./2-SimpleFactory.html-52fe62c4.js"),[]).then(({data:e})=>e),"v-070726ff":()=>v(()=>import("./3-FactoryPattern.html-347f0f15.js"),[]).then(({data:e})=>e),"v-59d63626":()=>v(()=>import("./1-Keywords continue_ break.html-76b05cd3.js"),[]).then(({data:e})=>e),"v-2266983e":()=>v(()=>import("./2-Keywords inline.html-8a78a2a4.js"),[]).then(({data:e})=>e),"v-2ee2573a":()=>v(()=>import("./3-Keywords new-delete-malloc-free.html-cf49b897.js"),[]).then(({data:e})=>e),"v-3152f788":()=>v(()=>import("./4-Modifiers- public-protected-private.html-c0f7f553.js"),[]).then(({data:e})=>e),"v-8f64b8dc":()=>v(()=>import("./5-Diamond Inheritance.html-40960668.js"),[]).then(({data:e})=>e),"v-7244b256":()=>v(()=>import("./6-Keywords friend.html-69a2ef0a.js"),[]).then(({data:e})=>e),"v-6427f58a":()=>v(()=>import("./7-Modifiers-Constants-Static.html-0bd2497a.js"),[]).then(({data:e})=>e),"v-6e77ac4e":()=>v(()=>import("./8-Keywords sizeof.html-add116ab.js"),[]).then(({data:e})=>e),"v-0dc2bc3e":()=>v(()=>import("./1-Namespace scope.html-1288904c.js"),[]).then(({data:e})=>e),"v-1700a216":()=>v(()=>import("./2-Lvalues and Rvalues.html-9aee3430.js"),[]).then(({data:e})=>e),"v-287bdc3a":()=>v(()=>import("./3-lambda.html-5c6e718d.js"),[]).then(({data:e})=>e),"v-5ab892c7":()=>v(()=>import("./1-template.html-66b6b5d1.js"),[]).then(({data:e})=>e),"v-61e080a6":()=>v(()=>import("./10-Pair.html-551fcf28.js"),[]).then(({data:e})=>e),"v-3f3ef6ee":()=>v(()=>import("./11-Map.html-a2cb00f9.js"),[]).then(({data:e})=>e),"v-c27c08f6":()=>v(()=>import("./2-stl.html-daa062c3.js"),[]).then(({data:e})=>e),"v-6d26eac0":()=>v(()=>import("./3-vector.html-65b002ee.js"),[]).then(({data:e})=>e),"v-a0ecd5a4":()=>v(()=>import("./4-deque.html-ae40eae7.js"),[]).then(({data:e})=>e),"v-905736f2":()=>v(()=>import("./5-fstream.html-074ec91f.js"),[]).then(({data:e})=>e),"v-d991c5f8":()=>v(()=>import("./6-stack.html-4d68174e.js"),[]).then(({data:e})=>e),"v-d7dbcd0c":()=>v(()=>import("./7-queue.html-dfdddaa3.js"),[]).then(({data:e})=>e),"v-df70076c":()=>v(()=>import("./8-List.html-a8c05546.js"),[]).then(({data:e})=>e),"v-44c7c3a7":()=>v(()=>import("./9-Set.html-d48cb107.js"),[]).then(({data:e})=>e),"v-5308490b":()=>v(()=>import("./index.html-462b8fd0.js"),[]).then(({data:e})=>e),"v-655fc6a7":()=>v(()=>import("./nature.html-a42a4345.js"),[]).then(({data:e})=>e),"v-b42c01e2":()=>v(()=>import("./object.html-42daa0db.js"),[]).then(({data:e})=>e),"v-362d81bf":()=>v(()=>import("./people.html-1f6f5066.js"),[]).then(({data:e})=>e),"v-997aa906":()=>v(()=>import("./place.html-27b11504.js"),[]).then(({data:e})=>e),"v-43388754":()=>v(()=>import("./symbol.html-2a506890.js"),[]).then(({data:e})=>e),"v-9f6d9e56":()=>v(()=>import("./1-CommonUI.html-d9426bc9.js"),[]).then(({data:e})=>e),"v-7ed2134c":()=>v(()=>import("./1-editortoolPlugin.html-64bffd9f.js"),[]).then(({data:e})=>e),"v-31ce0ca7":()=>v(()=>import("./1-editortoolBP.html-5b55fa23.js"),[]).then(({data:e})=>e),"v-199bd790":()=>v(()=>import("./2-editortoolBP2.html-fba64ab0.js"),[]).then(({data:e})=>e),"v-0b07c9e6":()=>v(()=>import("./NameSlot.html-8dd848a3.js"),[]).then(({data:e})=>e),"v-f0640946":()=>v(()=>import("./SafeZone.html-8a1fd174.js"),[]).then(({data:e})=>e),"v-1f9cc682":()=>v(()=>import("./0insidePtrgy.html-d215a0e2.js"),[]).then(({data:e})=>e),"v-51adada9":()=>v(()=>import("./1-insidePtr.html-6be80d64.js"),[]).then(({data:e})=>e),"v-9fddc778":()=>v(()=>import("./2-constModifierPtr.html-04e24ae8.js"),[]).then(({data:e})=>e),"v-87bc0582":()=>v(()=>import("./3-Ptr-Array.html-94a8e5a6.js"),[]).then(({data:e})=>e),"v-7f79f4e6":()=>v(()=>import("./4-Ptr-Struct.html-efeab160.js"),[]).then(({data:e})=>e),"v-1a7bf9fb":()=>v(()=>import("./5-Ptr-Enum.html-02757c62.js"),[]).then(({data:e})=>e),"v-6526b1c5":()=>v(()=>import("./6-Ptr-Function.html-a9612430.js"),[]).then(({data:e})=>e),"v-26ee6f20":()=>v(()=>import("./7-Ptr-this.html-1636b276.js"),[]).then(({data:e})=>e),"v-3706649a":()=>v(()=>import("./404.html-4b689dee.js"),[]).then(({data:e})=>e),"v-60097c7a":()=>v(()=>import("./index.html-aee6c435.js"),[]).then(({data:e})=>e),"v-58f42cfe":()=>v(()=>import("./index.html-780bdb3e.js"),[]).then(({data:e})=>e),"v-d440f426":()=>v(()=>import("./index.html-daa2075a.js"),[]).then(({data:e})=>e),"v-55047a00":()=>v(()=>import("./index.html-2893fc87.js"),[]).then(({data:e})=>e),"v-0032fec0":()=>v(()=>import("./index.html-9e50744c.js"),[]).then(({data:e})=>e),"v-78839b60":()=>v(()=>import("./index.html-9bcb3da3.js"),[]).then(({data:e})=>e),"v-152344c8":()=>v(()=>import("./index.html-896c8254.js"),[]).then(({data:e})=>e),"v-66b522c4":()=>v(()=>import("./index.html-9f794301.js"),[]).then(({data:e})=>e),"v-fad1f858":()=>v(()=>import("./index.html-0282155a.js"),[]).then(({data:e})=>e),"v-e8ed0444":()=>v(()=>import("./index.html-36ab61c6.js"),[]).then(({data:e})=>e),"v-42f011af":()=>v(()=>import("./index.html-42371a29.js"),[]).then(({data:e})=>e),"v-23beedfa":()=>v(()=>import("./index.html-54b4c075.js"),[]).then(({data:e})=>e),"v-ae020dc8":()=>v(()=>import("./index.html-4c1378e8.js"),[]).then(({data:e})=>e),"v-4b176715":()=>v(()=>import("./index.html-5a1ce00a.js"),[]).then(({data:e})=>e),"v-2a0eb5bc":()=>v(()=>import("./index.html-fe3e9a02.js"),[]).then(({data:e})=>e),"v-02dc146e":()=>v(()=>import("./index.html-f827297a.js"),[]).then(({data:e})=>e),"v-93384616":()=>v(()=>import("./index.html-f07973aa.js"),[]).then(({data:e})=>e),"v-a272608e":()=>v(()=>import("./index.html-b02723f3.js"),[]).then(({data:e})=>e),"v-7b816dfa":()=>v(()=>import("./index.html-a440917f.js"),[]).then(({data:e})=>e),"v-58bf29c6":()=>v(()=>import("./index.html-5bfec9fa.js"),[]).then(({data:e})=>e),"v-5bc93818":()=>v(()=>import("./index.html-fafd358b.js"),[]).then(({data:e})=>e),"v-744d024e":()=>v(()=>import("./index.html-5d80b82d.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>v(()=>import("./index.html-5496d2a3.js"),[]).then(({data:e})=>e),"v-154dc4c4":()=>v(()=>import("./index.html-616159c4.js"),[]).then(({data:e})=>e),"v-01560935":()=>v(()=>import("./index.html-9f84ea35.js"),[]).then(({data:e})=>e),"v-dc8c5890":()=>v(()=>import("./index.html-c752ca2d.js"),[]).then(({data:e})=>e),"v-3927256c":()=>v(()=>import("./index.html-8bfc4a1c.js"),[]).then(({data:e})=>e),"v-6e680040":()=>v(()=>import("./index.html-86406998.js"),[]).then(({data:e})=>e),"v-a0ba2788":()=>v(()=>import("./index.html-2c0421ef.js"),[]).then(({data:e})=>e),"v-65eddd24":()=>v(()=>import("./index.html-016e08ff.js"),[]).then(({data:e})=>e),"v-b314c74c":()=>v(()=>import("./index.html-baf22513.js"),[]).then(({data:e})=>e),"v-65f2474f":()=>v(()=>import("./index.html-6ef2ead1.js"),[]).then(({data:e})=>e),"v-b30bf2f6":()=>v(()=>import("./index.html-70b8f450.js"),[]).then(({data:e})=>e),"v-d37ff7f0":()=>v(()=>import("./index.html-8e9e44c2.js"),[]).then(({data:e})=>e),"v-484552dc":()=>v(()=>import("./index.html-de8afeac.js"),[]).then(({data:e})=>e),"v-65efd6b5":()=>v(()=>import("./index.html-497924a0.js"),[]).then(({data:e})=>e),"v-6e3697e9":()=>v(()=>import("./index.html-f79dcc82.js"),[]).then(({data:e})=>e),"v-fd3344d8":()=>v(()=>import("./index.html-c3a60ca4.js"),[]).then(({data:e})=>e),"v-2d6f94ee":()=>v(()=>import("./index.html-c6342827.js"),[]).then(({data:e})=>e),"v-87d841e6":()=>v(()=>import("./index.html-2db700e5.js"),[]).then(({data:e})=>e),"v-bedc0d68":()=>v(()=>import("./index.html-28d45492.js"),[]).then(({data:e})=>e),"v-9591de7e":()=>v(()=>import("./index.html-211fc768.js"),[]).then(({data:e})=>e),"v-b310d42a":()=>v(()=>import("./index.html-171689f9.js"),[]).then(({data:e})=>e),"v-132a6ac4":()=>v(()=>import("./index.html-535ad095.js"),[]).then(({data:e})=>e),"v-a9f0a7a6":()=>v(()=>import("./index.html-f2d917d1.js"),[]).then(({data:e})=>e),"v-0caeae7a":()=>v(()=>import("./index.html-cb323561.js"),[]).then(({data:e})=>e),"v-43d7543a":()=>v(()=>import("./index.html-e6bfc2ae.js"),[]).then(({data:e})=>e),"v-6f740e4b":()=>v(()=>import("./index.html-3ef58ea6.js"),[]).then(({data:e})=>e),"v-65f60bd2":()=>v(()=>import("./index.html-d3b62d02.js"),[]).then(({data:e})=>e),"v-200c1937":()=>v(()=>import("./index.html-da030e1f.js"),[]).then(({data:e})=>e),"v-ed16b278":()=>v(()=>import("./index.html-75928ffe.js"),[]).then(({data:e})=>e),"v-5963f54c":()=>v(()=>import("./index.html-c357ddc0.js"),[]).then(({data:e})=>e),"v-3891cf12":()=>v(()=>import("./index.html-79a1f752.js"),[]).then(({data:e})=>e)},D1=JSON.parse('{"base":"/RenderDoc/","lang":"zh-CN","title":"RenderDoc","description":"斯高和的文档","head":[["link",{"rel":"icon","href":"/RenderDoc/favicon.ico"}],["link",{"rel":"icon","href":"/RenderDoc/assets/icon/chrome-mask-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/RenderDoc/assets/icon/chrome-mask-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/RenderDoc/assets/icon/chrome-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/RenderDoc/assets/icon/chrome-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"manifest","href":"/RenderDoc/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"/RenderDoc/assets/icon/apple-icon-152.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"/RenderDoc/assets/icon/ms-icon-144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{}}');var T1=([e,n,t])=>e==="meta"&&n.name?`${e}.${n.name}`:["title","base"].includes(e)?e:e==="template"&&n.id?`${e}.${n.id}`:JSON.stringify([e,n,t]),P1=e=>{const n=new Set,t=[];return e.forEach(a=>{const s=T1(a);n.has(s)||(n.add(s),t.push(a))}),t},I1=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,S1=e=>e.startsWith("ftp://"),ht=e=>/^(https?:)?\/\//.test(e),C1=/.md((\?|#).*)?$/,ba=(e,n="/")=>!!(ht(e)||S1(e)||e.startsWith("/")&&!e.startsWith(n)&&!C1.test(e)),yr=e=>/^mailto:/.test(e),O1=e=>/^tel:/.test(e),Sa=e=>Object.prototype.toString.call(e)==="[object Object]",ll=e=>e[e.length-1]==="/"?e.slice(0,-1):e,wr=e=>e[0]==="/"?e.slice(1):e,L1=(e,n)=>{const t=Object.keys(e).sort((a,s)=>{const o=s.split("/").length-a.split("/").length;return o!==0?o:s.length-a.length});for(const a of t)if(n.startsWith(a))return a;return"/"};const Ar={"v-8daa1a0e":_(()=>v(()=>import("./index.html-b5ba6e1b.js"),[])),"v-103999a8":_(()=>v(()=>import("./01Swap.html-3a08dc55.js"),[])),"v-70bc2959":_(()=>v(()=>import("./index.html-bb7d5cc9.js"),[])),"v-ec514ab0":_(()=>v(()=>import("./index.html-d95c96e7.js"),[])),"v-5969763f":_(()=>v(()=>import("./index.html-d7980c45.js"),[])),"v-067b5137":_(()=>v(()=>import("./01selectionSort1.html-f11ed0f7.js"),[])),"v-c30cb95a":_(()=>v(()=>import("./02bubbleSort.html-13c49ec6.js"),[])),"v-392830ea":_(()=>v(()=>import("./index.html-ebc3f638.js"),[])),"v-392c5935":_(()=>v(()=>import("./index.html-694c2349.js"),[])),"v-422331e2":_(()=>v(()=>import("./index.html-ae632b9d.js"),[])),"v-59764534":_(()=>v(()=>import("./demo.html-f137419b.js"),[])),"v-01c2d25b":_(()=>v(()=>import("./1-gitignore.html-3baae76e.js"),[])),"v-6ac7e2aa":_(()=>v(()=>import("./2-repo-tool.html-be7d603b.js"),[])),"v-212109a4":_(()=>v(()=>import("./3-commit-message.html-39b8dc92.js"),[])),"v-3d983470":_(()=>v(()=>import("./4-submodule.html-23d95af1.js"),[])),"v-9c10cf40":_(()=>v(()=>import("./5-path-problem.html-333ade52.js"),[])),"v-ec184d2e":_(()=>v(()=>import("./6-rebase-merge.html-4c86850d.js"),[])),"v-245d9bec":_(()=>v(()=>import("./index.html-ce37ea1e.js"),[])),"v-eb0f2802":_(()=>v(()=>import("./1-download-huge-project-from-github.html-21a5361f.js"),[])),"v-7728bea7":_(()=>v(()=>import("./2-switch-multiple-github-accounts.html-5dcac0ec.js"),[])),"v-c7e4751c":_(()=>v(()=>import("./3-sync-a-fork.html-c6b1bf15.js"),[])),"v-e5fa9af4":_(()=>v(()=>import("./4-ssh-push-failed.html-0f3885de.js"),["assets/4-ssh-push-failed.html-0f3885de.js","assets/ssh-e3fc873c.js"])),"v-1ba8957d":_(()=>v(()=>import("./5-autoaction.html-58091604.js"),["assets/5-autoaction.html-58091604.js","assets/ssh-e3fc873c.js"])),"v-0b69c61f":_(()=>v(()=>import("./index.html-f05e5459.js"),[])),"v-a4588a60":_(()=>v(()=>import("./1-errors.html-1dc42f19.js"),[])),"v-4e3a3e2e":_(()=>v(()=>import("./2-poddoc.html-8f2462f1.js"),[])),"v-5de88dbc":_(()=>v(()=>import("./index.html-bda099f4.js"),[])),"v-792ac5f1":_(()=>v(()=>import("./1-classtool.html-117dfa0a.js"),[])),"v-9be2b5e8":_(()=>v(()=>import("./index.html-63d922f6.js"),[])),"v-2ed462fa":_(()=>v(()=>import("./1-errors.html-d7b6cd64.js"),[])),"v-0aab6ed5":_(()=>v(()=>import("./2-fix-todo-highlight-links.html-4ba22e52.js"),[])),"v-350b14b8":_(()=>v(()=>import("./index.html-bee181c6.js"),[])),"v-5aa2c605":_(()=>v(()=>import("./index.html-b8ac5524.js"),[])),"v-a839441a":_(()=>v(()=>import("./vuepress-add-comp.html-fabc4db3.js"),[])),"v-483f6eb7":_(()=>v(()=>import("./1-Gameplay.html-cba5538d.js"),["assets/1-Gameplay.html-cba5538d.js","assets/gamemodeinclue-310fc6c6.js","assets/libexpcpp-97f4e187.js"])),"v-9f505d48":_(()=>v(()=>import("./10-GameSave.html-79006da3.js"),[])),"v-aaba400c":_(()=>v(()=>import("./10.1-JsonTOString.html-04f51c62.js"),[])),"v-10f4f7c9":_(()=>v(()=>import("./2-GameMode.html-0f52d9e1.js"),["assets/2-GameMode.html-0f52d9e1.js","assets/gamemodeinclue-310fc6c6.js"])),"v-2304f0b0":_(()=>v(()=>import("./3-Singleton.html-6b969182.js"),["assets/3-Singleton.html-6b969182.js","assets/cdosingleton-5a6b4b1c.js"])),"v-0d5dfba3":_(()=>v(()=>import("./4-Subsystem.html-a480d28e.js"),["assets/4-Subsystem.html-a480d28e.js","assets/subsst-3dd7cd85.js","assets/cdosingleton-5a6b4b1c.js"])),"v-d167da6a":_(()=>v(()=>import("./4.1-SubsystemUse.html-a23e1cf5.js"),["assets/4.1-SubsystemUse.html-a23e1cf5.js","assets/subsst-3dd7cd85.js"])),"v-43889d7a":_(()=>v(()=>import("./4.2-EnhancedInput.html-5b1a7858.js"),[])),"v-cbf14a10":_(()=>v(()=>import("./5-Interface.html-f58202b6.js"),[])),"v-347c1406":_(()=>v(()=>import("./6-Delegate.html-6f0a2c51.js"),[])),"v-88753b6a":_(()=>v(()=>import("./6.1-DelegateUse.html-c9bf3ed8.js"),[])),"v-9c7552aa":_(()=>v(()=>import("./7-GameFeature.html-ee58e652.js"),["assets/7-GameFeature.html-ee58e652.js","assets/perfect-03020c38.js"])),"v-5fc23eb5":_(()=>v(()=>import("./8-GAS.html-905814ab.js"),[])),"v-35a3a78f":_(()=>v(()=>import("./9-Spectating.html-ce551cec.js"),[])),"v-3d686d76":_(()=>v(()=>import("./01Build Fail.html-dc565dbf.js"),[])),"v-5d651e98":_(()=>v(()=>import("./02ClassRedirects.html-c315be2c.js"),[])),"v-0357c5b0":_(()=>v(()=>import("./03CreateSessionError.html-8ae835b4.js"),[])),"v-63c0fb6b":_(()=>v(()=>import("./04EncodeError.html-dc3888d3.js"),[])),"v-0dc93dd0":_(()=>v(()=>import("./05GameFeatureError.html-a429e628.js"),["assets/05GameFeatureError.html-a429e628.js","assets/perfect-03020c38.js"])),"v-9cb8d68c":_(()=>v(()=>import("./06Mouse.html-992d3cfe.js"),[])),"v-283ae959":_(()=>v(()=>import("./07SubsystemError.html-2940d19a.js"),[])),"v-2327fc34":_(()=>v(()=>import("./08TObjectPtrError.html-44bfd0c3.js"),[])),"v-9edab39e":_(()=>v(()=>import("./09SkeletalMeshAnimError.html-a4627007.js"),[])),"v-c0277cb6":_(()=>v(()=>import("./1-GoodJob.html-4f2ad41f.js"),[])),"v-00d42220":_(()=>v(()=>import("./2-Blueprint2CPP.html-f581bf76.js"),[])),"v-0c3c87db":_(()=>v(()=>import("./3-Blueprint2CPP-1.html-01f1efab.js"),["assets/3-Blueprint2CPP-1.html-01f1efab.js","assets/libexpcpp-97f4e187.js","assets/uparam-ref-9b053090.js"])),"v-8a7ae01e":_(()=>v(()=>import("./4-BPShowCVariables.html-ca3b93d6.js"),[])),"v-cc3e1e92":_(()=>v(()=>import("./5-EventFunctionMacro.html-9753f705.js"),[])),"v-faa905da":_(()=>v(()=>import("./1-XXXAPI.html-9acd8271.js"),[])),"v-e7c7e0c8":_(()=>v(()=>import("./10-PTRINUE.html-78302d34.js"),[])),"v-0aa4c588":_(()=>v(()=>import("./11-Getactorofclass.html-522302cd.js"),[])),"v-8ea03774":_(()=>v(()=>import("./12-CE_KE.html-ef1c2224.js"),[])),"v-6ef0fadf":_(()=>v(()=>import("./13-BeginPlay.html-80f3ff63.js"),[])),"v-7f6ffa27":_(()=>v(()=>import("./14-SpawnActorfromClass.html-9a1ab303.js"),["assets/14-SpawnActorfromClass.html-9a1ab303.js","assets/spwanActor-aee20b67.js"])),"v-35e6b090":_(()=>v(()=>import("./15-LoadAsset.html-6de48314.js"),[])),"v-5b1b53c4":_(()=>v(()=>import("./2-GENERATED_BODY.html-af74dfa0.js"),[])),"v-7983a964":_(()=>v(()=>import("./3-EditorUsing.html-11384660.js"),[])),"v-6e5edac0":_(()=>v(()=>import("./4-UPARAM.html-8bad24e0.js"),["assets/4-UPARAM.html-8bad24e0.js","assets/uparam-ref-9b053090.js"])),"v-e761d962":_(()=>v(()=>import("./5-UPROPERTY.html-662e4f33.js"),[])),"v-07eefa62":_(()=>v(()=>import("./6-UEnum.html-d129b820.js"),["assets/6-UEnum.html-d129b820.js","assets/classadd-1a0a77d4.js"])),"v-0eb61f2d":_(()=>v(()=>import("./7-UStruct.html-8b422218.js"),["assets/7-UStruct.html-8b422218.js","assets/classadd-1a0a77d4.js"])),"v-62325f58":_(()=>v(()=>import("./8-TMap.html-fba8e2fc.js"),[])),"v-4b0f28af":_(()=>v(()=>import("./9-Iterator.html-9f0409ef.js"),[])),"v-a6a0843a":_(()=>v(()=>import("./1-lyra.html-c49bdc6c.js"),[])),"v-318a2cdb":_(()=>v(()=>import("./2-ImproveCommonUI.html-02e7df91.js"),[])),"v-e010eba6":_(()=>v(()=>import("./3-lyraSubtitle.html-10f6f6da.js"),[])),"v-0cd6d45f":_(()=>v(()=>import("./1-Data.html-fe51a338.js"),[])),"v-1ad79dbc":_(()=>v(()=>import("./2-HTTP.html-b1b961ee.js"),[])),"v-55ca86ff":_(()=>v(()=>import("./3-GamePlayNetWork.html-0a1ce277.js"),["assets/3-GamePlayNetWork.html-0a1ce277.js","assets/spwanActor-aee20b67.js"])),"v-1ba5c8ed":_(()=>v(()=>import("./4-GamePlayNetWorkUse.html-afcecd2a.js"),[])),"v-c4c01c70":_(()=>v(()=>import("./1-HPBar.html-9ec2807a.js"),[])),"v-e95e6264":_(()=>v(()=>import("./2-BRDF.html-bb826d6a.js"),[])),"v-391766bc":_(()=>v(()=>import("./3-图片投影.html-8a3baf3b.js"),[])),"v-2111666e":_(()=>v(()=>import("./0-where use a semicolon.html-5d7994ae.js"),[])),"v-bf12b7b0":_(()=>v(()=>import("./1-function Declaration_ Definition.html-66238763.js"),[])),"v-175bf425":_(()=>v(()=>import("./10-Functor.html-13f8d1b6.js"),[])),"v-5b7ab8a5":_(()=>v(()=>import("./2-Variable Declaration_ Definition.html-598e66d1.js"),[])),"v-9a31f9f4":_(()=>v(()=>import("./3-Forward declaration.html-b0b0d8a1.js"),[])),"v-be08ce20":_(()=>v(()=>import("./4-VariablePassbyValue _ Reference.html-e8d00d80.js"),[])),"v-7f051d34":_(()=>v(()=>import("./4-function brace initialization.html-0c0a11e2.js"),[])),"v-622a641a":_(()=>v(()=>import("./5-copymode.html-ff983b87.js"),[])),"v-43101723":_(()=>v(()=>import("./7-i__and__i.html-ea86c7a8.js"),[])),"v-02010851":_(()=>v(()=>import("./8-operator.html-219faf50.js"),[])),"v-191531e6":_(()=>v(()=>import("./9-Big Four.html-8eaf2d4c.js"),[])),"v-8db588aa":_(()=>v(()=>import("./1-Sington.html-417d7dd0.js"),[])),"v-4c4aa776":_(()=>v(()=>import("./2-SimpleFactory.html-a2e1fddb.js"),[])),"v-070726ff":_(()=>v(()=>import("./3-FactoryPattern.html-e3354a62.js"),[])),"v-59d63626":_(()=>v(()=>import("./1-Keywords continue_ break.html-77875873.js"),[])),"v-2266983e":_(()=>v(()=>import("./2-Keywords inline.html-301bcd80.js"),[])),"v-2ee2573a":_(()=>v(()=>import("./3-Keywords new-delete-malloc-free.html-3170bfb3.js"),[])),"v-3152f788":_(()=>v(()=>import("./4-Modifiers- public-protected-private.html-9aa5d271.js"),[])),"v-8f64b8dc":_(()=>v(()=>import("./5-Diamond Inheritance.html-6887d8fc.js"),["assets/5-Diamond Inheritance.html-6887d8fc.js","assets/cdcodedircheck-70ea68da.js"])),"v-7244b256":_(()=>v(()=>import("./6-Keywords friend.html-8f572617.js"),[])),"v-6427f58a":_(()=>v(()=>import("./7-Modifiers-Constants-Static.html-029b51ed.js"),[])),"v-6e77ac4e":_(()=>v(()=>import("./8-Keywords sizeof.html-b2cc2aef.js"),["assets/8-Keywords sizeof.html-b2cc2aef.js","assets/cdcodedircheck-70ea68da.js"])),"v-0dc2bc3e":_(()=>v(()=>import("./1-Namespace scope.html-00b86e30.js"),[])),"v-1700a216":_(()=>v(()=>import("./2-Lvalues and Rvalues.html-328f7a00.js"),[])),"v-287bdc3a":_(()=>v(()=>import("./3-lambda.html-4613b76d.js"),[])),"v-5ab892c7":_(()=>v(()=>import("./1-template.html-8eb8f82d.js"),[])),"v-61e080a6":_(()=>v(()=>import("./10-Pair.html-b57ad30f.js"),[])),"v-3f3ef6ee":_(()=>v(()=>import("./11-Map.html-df25c826.js"),[])),"v-c27c08f6":_(()=>v(()=>import("./2-stl.html-65a296b8.js"),[])),"v-6d26eac0":_(()=>v(()=>import("./3-vector.html-a763fd23.js"),[])),"v-a0ecd5a4":_(()=>v(()=>import("./4-deque.html-6df46cb0.js"),[])),"v-905736f2":_(()=>v(()=>import("./5-fstream.html-97524c5e.js"),[])),"v-d991c5f8":_(()=>v(()=>import("./6-stack.html-261e6c2d.js"),[])),"v-d7dbcd0c":_(()=>v(()=>import("./7-queue.html-3f0ee827.js"),[])),"v-df70076c":_(()=>v(()=>import("./8-List.html-22532aac.js"),[])),"v-44c7c3a7":_(()=>v(()=>import("./9-Set.html-cdfac1fa.js"),[])),"v-5308490b":_(()=>v(()=>import("./index.html-95968722.js"),[])),"v-655fc6a7":_(()=>v(()=>import("./nature.html-f96b477b.js"),[])),"v-b42c01e2":_(()=>v(()=>import("./object.html-63129722.js"),[])),"v-362d81bf":_(()=>v(()=>import("./people.html-bdd98946.js"),[])),"v-997aa906":_(()=>v(()=>import("./place.html-0f29fa38.js"),[])),"v-43388754":_(()=>v(()=>import("./symbol.html-e3cde007.js"),[])),"v-9f6d9e56":_(()=>v(()=>import("./1-CommonUI.html-42c45aa1.js"),[])),"v-7ed2134c":_(()=>v(()=>import("./1-editortoolPlugin.html-6204853c.js"),[])),"v-31ce0ca7":_(()=>v(()=>import("./1-editortoolBP.html-b5a570ed.js"),["assets/1-editortoolBP.html-b5a570ed.js","assets/abutton-24fc08f2.js"])),"v-199bd790":_(()=>v(()=>import("./2-editortoolBP2.html-5d264700.js"),["assets/2-editortoolBP2.html-5d264700.js","assets/abutton-24fc08f2.js"])),"v-0b07c9e6":_(()=>v(()=>import("./NameSlot.html-320d712e.js"),[])),"v-f0640946":_(()=>v(()=>import("./SafeZone.html-6482f522.js"),[])),"v-1f9cc682":_(()=>v(()=>import("./0insidePtrgy.html-985ae387.js"),[])),"v-51adada9":_(()=>v(()=>import("./1-insidePtr.html-8a83d32a.js"),[])),"v-9fddc778":_(()=>v(()=>import("./2-constModifierPtr.html-e5b7d45f.js"),[])),"v-87bc0582":_(()=>v(()=>import("./3-Ptr-Array.html-36bf5849.js"),[])),"v-7f79f4e6":_(()=>v(()=>import("./4-Ptr-Struct.html-ddd1ab78.js"),[])),"v-1a7bf9fb":_(()=>v(()=>import("./5-Ptr-Enum.html-273b657f.js"),[])),"v-6526b1c5":_(()=>v(()=>import("./6-Ptr-Function.html-8f5dc530.js"),[])),"v-26ee6f20":_(()=>v(()=>import("./7-Ptr-this.html-eaaf8cdf.js"),[])),"v-3706649a":_(()=>v(()=>import("./404.html-6a650e67.js"),[])),"v-60097c7a":_(()=>v(()=>import("./index.html-1b8e2210.js"),[])),"v-58f42cfe":_(()=>v(()=>import("./index.html-5c9adac6.js"),[])),"v-d440f426":_(()=>v(()=>import("./index.html-11b07d93.js"),[])),"v-55047a00":_(()=>v(()=>import("./index.html-4038d293.js"),[])),"v-0032fec0":_(()=>v(()=>import("./index.html-bffbef5a.js"),[])),"v-78839b60":_(()=>v(()=>import("./index.html-be9ac30e.js"),[])),"v-152344c8":_(()=>v(()=>import("./index.html-9dae758e.js"),[])),"v-66b522c4":_(()=>v(()=>import("./index.html-3985dad5.js"),[])),"v-fad1f858":_(()=>v(()=>import("./index.html-ac1a77ff.js"),[])),"v-e8ed0444":_(()=>v(()=>import("./index.html-aee3b79a.js"),[])),"v-42f011af":_(()=>v(()=>import("./index.html-5513f80b.js"),[])),"v-23beedfa":_(()=>v(()=>import("./index.html-e0081391.js"),[])),"v-ae020dc8":_(()=>v(()=>import("./index.html-04e14c21.js"),[])),"v-4b176715":_(()=>v(()=>import("./index.html-e959bc9d.js"),[])),"v-2a0eb5bc":_(()=>v(()=>import("./index.html-66535c72.js"),[])),"v-02dc146e":_(()=>v(()=>import("./index.html-f37ca941.js"),[])),"v-93384616":_(()=>v(()=>import("./index.html-a4901498.js"),[])),"v-a272608e":_(()=>v(()=>import("./index.html-228ba16a.js"),[])),"v-7b816dfa":_(()=>v(()=>import("./index.html-f415bcd5.js"),[])),"v-58bf29c6":_(()=>v(()=>import("./index.html-fc4fe69a.js"),[])),"v-5bc93818":_(()=>v(()=>import("./index.html-284aeb8e.js"),[])),"v-744d024e":_(()=>v(()=>import("./index.html-7f41424c.js"),[])),"v-e52c881c":_(()=>v(()=>import("./index.html-06ba6bdf.js"),[])),"v-154dc4c4":_(()=>v(()=>import("./index.html-11883f18.js"),[])),"v-01560935":_(()=>v(()=>import("./index.html-9e331071.js"),[])),"v-dc8c5890":_(()=>v(()=>import("./index.html-6ff13bc3.js"),[])),"v-3927256c":_(()=>v(()=>import("./index.html-95169469.js"),[])),"v-6e680040":_(()=>v(()=>import("./index.html-9e338fe5.js"),[])),"v-a0ba2788":_(()=>v(()=>import("./index.html-669db1d9.js"),[])),"v-65eddd24":_(()=>v(()=>import("./index.html-a1c652bf.js"),[])),"v-b314c74c":_(()=>v(()=>import("./index.html-0413d125.js"),[])),"v-65f2474f":_(()=>v(()=>import("./index.html-9623926f.js"),[])),"v-b30bf2f6":_(()=>v(()=>import("./index.html-20765705.js"),[])),"v-d37ff7f0":_(()=>v(()=>import("./index.html-9ded391a.js"),[])),"v-484552dc":_(()=>v(()=>import("./index.html-8db8a91a.js"),[])),"v-65efd6b5":_(()=>v(()=>import("./index.html-5a9ed1b3.js"),[])),"v-6e3697e9":_(()=>v(()=>import("./index.html-182ee60a.js"),[])),"v-fd3344d8":_(()=>v(()=>import("./index.html-f9fe0795.js"),[])),"v-2d6f94ee":_(()=>v(()=>import("./index.html-5f6ad574.js"),[])),"v-87d841e6":_(()=>v(()=>import("./index.html-fecf239a.js"),[])),"v-bedc0d68":_(()=>v(()=>import("./index.html-43deb55b.js"),[])),"v-9591de7e":_(()=>v(()=>import("./index.html-f8030c0d.js"),[])),"v-b310d42a":_(()=>v(()=>import("./index.html-cabe541e.js"),[])),"v-132a6ac4":_(()=>v(()=>import("./index.html-487a2deb.js"),[])),"v-a9f0a7a6":_(()=>v(()=>import("./index.html-537c37b0.js"),[])),"v-0caeae7a":_(()=>v(()=>import("./index.html-d55f049c.js"),[])),"v-43d7543a":_(()=>v(()=>import("./index.html-46e44092.js"),[])),"v-6f740e4b":_(()=>v(()=>import("./index.html-2278dedf.js"),[])),"v-65f60bd2":_(()=>v(()=>import("./index.html-fd007572.js"),[])),"v-200c1937":_(()=>v(()=>import("./index.html-71423dfe.js"),[])),"v-ed16b278":_(()=>v(()=>import("./index.html-a041ac79.js"),[])),"v-5963f54c":_(()=>v(()=>import("./index.html-1afb2a52.js"),[])),"v-3891cf12":_(()=>v(()=>import("./index.html-ab4e2b74.js"),[]))};var x1=Symbol(""),Br=Symbol(""),R1=mt({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),le=()=>{const e=pe(Br);if(!e)throw new Error("pageData() is called without provider.");return e},Dr=Symbol(""),Ee=()=>{const e=pe(Dr);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},Tr=Symbol(""),F1=()=>{const e=pe(Tr);if(!e)throw new Error("usePageHead() is called without provider.");return e},V1=Symbol(""),Pr=Symbol(""),il=()=>{const e=pe(Pr);if(!e)throw new Error("usePageLang() is called without provider.");return e},Ir=Symbol(""),M1=()=>{const e=pe(Ir);if(!e)throw new Error("usePageLayout() is called without provider.");return e},G1=q(B1),cl=Symbol(""),wn=()=>{const e=pe(cl);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Bt=q(D1),Sr=()=>Bt,Cr=Symbol(""),Xt=()=>{const e=pe(Cr);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},$1=Symbol(""),N1="Layout",U1="NotFound",Ln=Ta({resolveLayouts:e=>e.reduce((n,t)=>({...n,...t.layouts}),{}),resolvePageData:async e=>{const n=G1.value[e];return await(n==null?void 0:n())??R1},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,n,t)=>{const a=ge(n.description)?n.description:t.description,s=[...Q(n.head)?n.head:[],...t.head,["title",{},e],["meta",{name:"description",content:a}]];return P1(s)},resolvePageHeadTitle:(e,n)=>[e.title,n.title].filter(t=>!!t).join(" | "),resolvePageLang:(e,n)=>e.lang||n.lang||"en-US",resolvePageLayout:(e,n)=>{let t;if(e.path){const a=e.frontmatter.layout;ge(a)?t=a:t=N1}else t=U1;return n[t]},resolveRouteLocale:(e,n)=>L1(e,n),resolveSiteLocaleData:(e,n)=>({...e,...e.locales[n]})}),Ds=F({name:"ClientOnly",setup(e,n){const t=q(!1);return ue(()=>{t.value=!0}),()=>{var a,s;return t.value?(s=(a=n.slots).default)==null?void 0:s.call(a):null}}}),Or=F({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const n=le(),t=w(()=>Ar[e.pageKey||n.value.key]);return()=>t.value?i(t.value):i("div","404 Not Found")}}),Je=(e={})=>e,we=e=>ht(e)?e:`/RenderDoc/${wr(e)}`;const z1={};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yt=typeof window<"u";function H1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ke=Object.assign;function js(e,n){const t={};for(const a in n){const s=n[a];t[a]=En(s)?s.map(e):e(s)}return t}const ua=()=>{},En=Array.isArray,j1=/\/$/,q1=e=>e.replace(j1,"");function qs(e,n,t="/"){let a,s={},o="",l="";const c=n.indexOf("#");let r=n.indexOf("?");return c<r&&c>=0&&(r=-1),r>-1&&(a=n.slice(0,r),o=n.slice(r+1,c>-1?c:n.length),s=e(o)),c>-1&&(a=a||n.slice(0,c),l=n.slice(c,n.length)),a=X1(a??n,t),{fullPath:a+(o&&"?")+o+l,path:a,query:s,hash:l}}function W1(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Ii(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function K1(e,n,t){const a=n.matched.length-1,s=t.matched.length-1;return a>-1&&a===s&&Nt(n.matched[a],t.matched[s])&&Lr(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Nt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Lr(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Y1(e[t],n[t]))return!1;return!0}function Y1(e,n){return En(e)?Si(e,n):En(n)?Si(n,e):e===n}function Si(e,n){return En(n)?e.length===n.length&&e.every((t,a)=>t===n[a]):e.length===1&&e[0]===n}function X1(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let o=t.length-1,l,c;for(l=0;l<a.length;l++)if(c=a[l],c!==".")if(c==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+a.slice(l-(l===a.length?1:0)).join("/")}var Ea;(function(e){e.pop="pop",e.push="push"})(Ea||(Ea={}));var da;(function(e){e.back="back",e.forward="forward",e.unknown=""})(da||(da={}));function Z1(e){if(!e)if(yt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),q1(e)}const J1=/^[^#]+#/;function Q1(e,n){return e.replace(J1,"#")+n}function ev(e,n){const t=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-t.left-(n.left||0),top:a.top-t.top-(n.top||0)}}const Ts=()=>({left:window.pageXOffset,top:window.pageYOffset});function nv(e){let n;if("el"in e){const t=e.el,a=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;n=ev(s,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ci(e,n){return(history.state?history.state.position-n:-1)+e}const bo=new Map;function tv(e,n){bo.set(e,n)}function av(e){const n=bo.get(e);return bo.delete(e),n}let sv=()=>location.protocol+"//"+location.host;function xr(e,n){const{pathname:t,search:a,hash:s}=n,o=e.indexOf("#");if(o>-1){let c=s.includes(e.slice(o))?e.slice(o).length:1,r=s.slice(c);return r[0]!=="/"&&(r="/"+r),Ii(r,"")}return Ii(t,e)+a+s}function ov(e,n,t,a){let s=[],o=[],l=null;const c=({state:m})=>{const f=xr(e,location),g=t.value,b=n.value;let B=0;if(m){if(t.value=f,n.value=m,l&&l===g){l=null;return}B=b?m.position-b.position:0}else a(f);s.forEach(y=>{y(t.value,g,{delta:B,type:Ea.pop,direction:B?B>0?da.forward:da.back:da.unknown})})};function r(){l=t.value}function p(m){s.push(m);const f=()=>{const g=s.indexOf(m);g>-1&&s.splice(g,1)};return o.push(f),f}function u(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Ts()}),"")}function d(){for(const m of o)m();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:r,listen:p,destroy:d}}function Oi(e,n,t,a=!1,s=!1){return{back:e,current:n,forward:t,replaced:a,position:window.history.length,scroll:s?Ts():null}}function lv(e){const{history:n,location:t}=window,a={value:xr(e,t)},s={value:n.state};s.value||o(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(r,p,u){const d=e.indexOf("#"),m=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+r:sv()+e+r;try{n[u?"replaceState":"pushState"](p,"",m),s.value=p}catch(f){console.error(f),t[u?"replace":"assign"](m)}}function l(r,p){const u=ke({},n.state,Oi(s.value.back,r,s.value.forward,!0),p,{position:s.value.position});o(r,u,!0),a.value=r}function c(r,p){const u=ke({},s.value,n.state,{forward:r,scroll:Ts()});o(u.current,u,!0);const d=ke({},Oi(a.value,r,null),{position:u.position+1},p);o(r,d,!1),a.value=r}return{location:a,state:s,push:c,replace:l}}function iv(e){e=Z1(e);const n=lv(e),t=ov(e,n.state,n.location,n.replace);function a(o,l=!0){l||t.pauseListeners(),history.go(o)}const s=ke({location:"",base:e,go:a,createHref:Q1.bind(null,e)},n,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>n.state.value}),s}function cv(e){return typeof e=="string"||e&&typeof e=="object"}function Rr(e){return typeof e=="string"||typeof e=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fr=Symbol("");var Li;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Li||(Li={}));function Ut(e,n){return ke(new Error,{type:e,[Fr]:!0},n)}function Cn(e,n){return e instanceof Error&&Fr in e&&(n==null||!!(e.type&n))}const xi="[^/]+?",rv={sensitive:!1,strict:!1,start:!0,end:!0},pv=/[.+*?^${}()[\]/\\]/g;function uv(e,n){const t=ke({},rv,n),a=[];let s=t.start?"^":"";const o=[];for(const p of e){const u=p.length?[]:[90];t.strict&&!p.length&&(s+="/");for(let d=0;d<p.length;d++){const m=p[d];let f=40+(t.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(pv,"\\$&"),f+=40;else if(m.type===1){const{value:g,repeatable:b,optional:B,regexp:y}=m;o.push({name:g,repeatable:b,optional:B});const T=y||xi;if(T!==xi){f+=10;try{new RegExp(`(${T})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+D.message)}}let E=b?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(E=B&&p.length<2?`(?:/${E})`:"/"+E),B&&(E+="?"),s+=E,f+=20,B&&(f+=-8),b&&(f+=-20),T===".*"&&(f+=-50)}u.push(f)}a.push(u)}if(t.strict&&t.end){const p=a.length-1;a[p][a[p].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const l=new RegExp(s,t.sensitive?"":"i");function c(p){const u=p.match(l),d={};if(!u)return null;for(let m=1;m<u.length;m++){const f=u[m]||"",g=o[m-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function r(p){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of m)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:b,optional:B}=f,y=g in p?p[g]:"";if(En(y)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=En(y)?y.join("/"):y;if(!T)if(B)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:l,score:a,keys:o,parse:c,stringify:r}}function dv(e,n){let t=0;for(;t<e.length&&t<n.length;){const a=n[t]-e[t];if(a)return a;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function vv(e,n){let t=0;const a=e.score,s=n.score;for(;t<a.length&&t<s.length;){const o=dv(a[t],s[t]);if(o)return o;t++}if(Math.abs(s.length-a.length)===1){if(Ri(a))return 1;if(Ri(s))return-1}return s.length-a.length}function Ri(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const mv={type:0,value:""},fv=/[a-zA-Z0-9_]/;function hv(e){if(!e)return[[]];if(e==="/")return[[mv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(f){throw new Error(`ERR (${t})/"${p}": ${f}`)}let t=0,a=t;const s=[];let o;function l(){o&&s.push(o),o=[]}let c=0,r,p="",u="";function d(){p&&(t===0?o.push({type:0,value:p}):t===1||t===2||t===3?(o.length>1&&(r==="*"||r==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:u,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):n("Invalid state to consume buffer"),p="")}function m(){p+=r}for(;c<e.length;){if(r=e[c++],r==="\\"&&t!==2){a=t,t=4;continue}switch(t){case 0:r==="/"?(p&&d(),l()):r===":"?(d(),t=1):m();break;case 4:m(),t=a;break;case 1:r==="("?t=2:fv.test(r)?m():(d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--);break;case 2:r===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+r:t=3:u+=r;break;case 3:d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${p}"`),d(),l(),s}function gv(e,n,t){const a=uv(hv(e.path),t),s=ke(a,{record:e,parent:n,children:[],alias:[]});return n&&!s.record.aliasOf==!n.record.aliasOf&&n.children.push(s),s}function kv(e,n){const t=[],a=new Map;n=Mi({strict:!1,end:!0,sensitive:!1},n);function s(u){return a.get(u)}function o(u,d,m){const f=!m,g=_v(u);g.aliasOf=m&&m.record;const b=Mi(n,u),B=[g];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of E)B.push(ke({},g,{components:m?m.record.components:g.components,path:D,aliasOf:m?m.record:g}))}let y,T;for(const E of B){const{path:D}=E;if(d&&D[0]!=="/"){const R=d.record.path,C=R[R.length-1]==="/"?"":"/";E.path=d.record.path+(D&&C+D)}if(y=gv(E,d,b),m?m.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),f&&u.name&&!Vi(y)&&l(u.name)),g.children){const R=g.children;for(let C=0;C<R.length;C++)o(R[C],y,m&&m.children[C])}m=m||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&r(y)}return T?()=>{l(T)}:ua}function l(u){if(Rr(u)){const d=a.get(u);d&&(a.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&a.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function c(){return t}function r(u){let d=0;for(;d<t.length&&vv(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Vr(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!Vi(u)&&a.set(u.record.name,u)}function p(u,d){let m,f={},g,b;if("name"in u&&u.name){if(m=a.get(u.name),!m)throw Ut(1,{location:u});b=m.record.name,f=ke(Fi(d.params,m.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&Fi(u.params,m.keys.map(T=>T.name))),g=m.stringify(f)}else if("path"in u)g=u.path,m=t.find(T=>T.re.test(g)),m&&(f=m.parse(g),b=m.record.name);else{if(m=d.name?a.get(d.name):t.find(T=>T.re.test(d.path)),!m)throw Ut(1,{location:u,currentLocation:d});b=m.record.name,f=ke({},d.params,u.params),g=m.stringify(f)}const B=[];let y=m;for(;y;)B.unshift(y.record),y=y.parent;return{name:b,path:g,params:f,matched:B,meta:Ev(B)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:p,removeRoute:l,getRoutes:c,getRecordMatcher:s}}function Fi(e,n){const t={};for(const a of n)a in e&&(t[a]=e[a]);return t}function _v(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:bv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function bv(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const a in e.components)n[a]=typeof t=="object"?t[a]:t;return n}function Vi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ev(e){return e.reduce((n,t)=>ke(n,t.meta),{})}function Mi(e,n){const t={};for(const a in e)t[a]=a in n?n[a]:e[a];return t}function Vr(e,n){return n.children.some(t=>t===e||Vr(e,t))}const Mr=/#/g,yv=/&/g,wv=/\//g,Av=/=/g,Bv=/\?/g,Gr=/\+/g,Dv=/%5B/g,Tv=/%5D/g,$r=/%5E/g,Pv=/%60/g,Nr=/%7B/g,Iv=/%7C/g,Ur=/%7D/g,Sv=/%20/g;function rl(e){return encodeURI(""+e).replace(Iv,"|").replace(Dv,"[").replace(Tv,"]")}function Cv(e){return rl(e).replace(Nr,"{").replace(Ur,"}").replace($r,"^")}function Eo(e){return rl(e).replace(Gr,"%2B").replace(Sv,"+").replace(Mr,"%23").replace(yv,"%26").replace(Pv,"`").replace(Nr,"{").replace(Ur,"}").replace($r,"^")}function Ov(e){return Eo(e).replace(Av,"%3D")}function Lv(e){return rl(e).replace(Mr,"%23").replace(Bv,"%3F")}function xv(e){return e==null?"":Lv(e).replace(wv,"%2F")}function fs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Rv(e){const n={};if(e===""||e==="?")return n;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<a.length;++s){const o=a[s].replace(Gr," "),l=o.indexOf("="),c=fs(l<0?o:o.slice(0,l)),r=l<0?null:fs(o.slice(l+1));if(c in n){let p=n[c];En(p)||(p=n[c]=[p]),p.push(r)}else n[c]=r}return n}function Gi(e){let n="";for(let t in e){const a=e[t];if(t=Ov(t),a==null){a!==void 0&&(n+=(n.length?"&":"")+t);continue}(En(a)?a.map(o=>o&&Eo(o)):[a&&Eo(a)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function Fv(e){const n={};for(const t in e){const a=e[t];a!==void 0&&(n[t]=En(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return n}const Vv=Symbol(""),$i=Symbol(""),Ps=Symbol(""),pl=Symbol(""),yo=Symbol("");function ta(){let e=[];function n(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Kn(e,n,t,a,s){const o=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const r=d=>{d===!1?c(Ut(4,{from:t,to:n})):d instanceof Error?c(d):cv(d)?c(Ut(2,{from:n,to:d})):(o&&a.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),l())},p=e.call(a&&a.instances[s],n,t,r);let u=Promise.resolve(p);e.length<3&&(u=u.then(r)),u.catch(d=>c(d))})}function Ws(e,n,t,a){const s=[];for(const o of e)for(const l in o.components){let c=o.components[l];if(!(n!=="beforeRouteEnter"&&!o.instances[l]))if(Mv(c)){const p=(c.__vccOpts||c)[n];p&&s.push(Kn(p,t,a,o,l))}else{let r=c();s.push(()=>r.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const u=H1(p)?p.default:p;o.components[l]=u;const m=(u.__vccOpts||u)[n];return m&&Kn(m,t,a,o,l)()}))}}return s}function Mv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wo(e){const n=pe(Ps),t=pe(pl),a=w(()=>n.resolve(pt(e.to))),s=w(()=>{const{matched:r}=a.value,{length:p}=r,u=r[p-1],d=t.matched;if(!u||!d.length)return-1;const m=d.findIndex(Nt.bind(null,u));if(m>-1)return m;const f=Ni(r[p-2]);return p>1&&Ni(u)===f&&d[d.length-1].path!==f?d.findIndex(Nt.bind(null,r[p-2])):m}),o=w(()=>s.value>-1&&Uv(t.params,a.value.params)),l=w(()=>s.value>-1&&s.value===t.matched.length-1&&Lr(t.params,a.value.params));function c(r={}){return Nv(r)?n[pt(e.replace)?"replace":"push"](pt(e.to)).catch(ua):Promise.resolve()}return{route:a,href:w(()=>a.value.href),isActive:o,isExactActive:l,navigate:c}}const Gv=F({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wo,setup(e,{slots:n}){const t=Ta(wo(e)),{options:a}=pe(Ps),s=w(()=>({[Ui(e.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[Ui(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&n.default(t);return e.custom?o:i("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},o)}}}),$v=Gv;function Nv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Uv(e,n){for(const t in n){const a=n[t],s=e[t];if(typeof a=="string"){if(a!==s)return!1}else if(!En(s)||s.length!==a.length||a.some((o,l)=>o!==s[l]))return!1}return!0}function Ni(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ui=(e,n,t)=>e??n??t,zv=F({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const a=pe(yo),s=w(()=>e.route||a.value),o=pe($i,0),l=w(()=>{let p=pt(o);const{matched:u}=s.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),c=w(()=>s.value.matched[l.value]);an($i,w(()=>l.value+1)),an(Vv,c),an(yo,s);const r=q();return re(()=>[r.value,c.value,e.name],([p,u,d],[m,f,g])=>{u&&(u.instances[d]=p,f&&f!==u&&p&&p===m&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),p&&u&&(!f||!Nt(u,f)||!m)&&(u.enterCallbacks[d]||[]).forEach(b=>b(p))},{flush:"post"}),()=>{const p=s.value,u=e.name,d=c.value,m=d&&d.components[u];if(!m)return zi(t.default,{Component:m,route:p});const f=d.props[u],g=f?f===!0?p.params:typeof f=="function"?f(p):f:null,B=i(m,ke({},g,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[u]=null)},ref:r}));return zi(t.default,{Component:B,route:p})||B}}});function zi(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const zr=zv;function Hv(e){const n=kv(e.routes,e),t=e.parseQuery||Rv,a=e.stringifyQuery||Gi,s=e.history,o=ta(),l=ta(),c=ta(),r=Ne(xn);let p=xn;yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=js.bind(null,I=>""+I),d=js.bind(null,xv),m=js.bind(null,fs);function f(I,j){let G,X;return Rr(I)?(G=n.getRecordMatcher(I),X=j):X=I,n.addRoute(X,G)}function g(I){const j=n.getRecordMatcher(I);j&&n.removeRoute(j)}function b(){return n.getRoutes().map(I=>I.record)}function B(I){return!!n.getRecordMatcher(I)}function y(I,j){if(j=ke({},j||r.value),typeof I=="string"){const A=qs(t,I,j.path),P=n.resolve({path:A.path},j),O=s.createHref(A.fullPath);return ke(A,P,{params:m(P.params),hash:fs(A.hash),redirectedFrom:void 0,href:O})}let G;if("path"in I)G=ke({},I,{path:qs(t,I.path,j.path).path});else{const A=ke({},I.params);for(const P in A)A[P]==null&&delete A[P];G=ke({},I,{params:d(A)}),j.params=d(j.params)}const X=n.resolve(G,j),ve=I.hash||"";X.params=u(m(X.params));const h=W1(a,ke({},I,{hash:Cv(ve),path:X.path})),k=s.createHref(h);return ke({fullPath:h,hash:ve,query:a===Gi?Fv(I.query):I.query||{}},X,{redirectedFrom:void 0,href:k})}function T(I){return typeof I=="string"?qs(t,I,r.value.path):ke({},I)}function E(I,j){if(p!==I)return Ut(8,{from:j,to:I})}function D(I){return V(I)}function R(I){return D(ke(T(I),{replace:!0}))}function C(I){const j=I.matched[I.matched.length-1];if(j&&j.redirect){const{redirect:G}=j;let X=typeof G=="function"?G(I):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=T(X):{path:X},X.params={}),ke({query:I.query,hash:I.hash,params:"path"in X?{}:I.params},X)}}function V(I,j){const G=p=y(I),X=r.value,ve=I.state,h=I.force,k=I.replace===!0,A=C(G);if(A)return V(ke(T(A),{state:typeof A=="object"?ke({},ve,A.state):ve,force:h,replace:k}),j||G);const P=G;P.redirectedFrom=j;let O;return!h&&K1(a,X,G)&&(O=Ut(16,{to:P,from:X}),ln(X,X,!0,!1)),(O?Promise.resolve(O):z(P,X)).catch(L=>Cn(L)?Cn(L,2)?L:An(L):Y(L,P,X)).then(L=>{if(L){if(Cn(L,2))return V(ke({replace:k},T(L.to),{state:typeof L.to=="object"?ke({},ve,L.to.state):ve,force:h}),j||P)}else L=U(P,X,!0,k,ve);return ee(P,X,L),L})}function S(I,j){const G=E(I,j);return G?Promise.reject(G):Promise.resolve()}function N(I){const j=Sn.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(I):I()}function z(I,j){let G;const[X,ve,h]=jv(I,j);G=Ws(X.reverse(),"beforeRouteLeave",I,j);for(const A of X)A.leaveGuards.forEach(P=>{G.push(Kn(P,I,j))});const k=S.bind(null,I,j);return G.push(k),Ce(G).then(()=>{G=[];for(const A of o.list())G.push(Kn(A,I,j));return G.push(k),Ce(G)}).then(()=>{G=Ws(ve,"beforeRouteUpdate",I,j);for(const A of ve)A.updateGuards.forEach(P=>{G.push(Kn(P,I,j))});return G.push(k),Ce(G)}).then(()=>{G=[];for(const A of h)if(A.beforeEnter)if(En(A.beforeEnter))for(const P of A.beforeEnter)G.push(Kn(P,I,j));else G.push(Kn(A.beforeEnter,I,j));return G.push(k),Ce(G)}).then(()=>(I.matched.forEach(A=>A.enterCallbacks={}),G=Ws(h,"beforeRouteEnter",I,j),G.push(k),Ce(G))).then(()=>{G=[];for(const A of l.list())G.push(Kn(A,I,j));return G.push(k),Ce(G)}).catch(A=>Cn(A,8)?A:Promise.reject(A))}function ee(I,j,G){c.list().forEach(X=>N(()=>X(I,j,G)))}function U(I,j,G,X,ve){const h=E(I,j);if(h)return h;const k=j===xn,A=yt?history.state:{};G&&(X||k?s.replace(I.fullPath,ke({scroll:k&&A&&A.scroll},ve)):s.push(I.fullPath,ve)),r.value=I,ln(I,j,G,k),An()}let ne;function Te(){ne||(ne=s.listen((I,j,G)=>{if(!Bn.listening)return;const X=y(I),ve=C(X);if(ve){V(ke(ve,{replace:!0}),X).catch(ua);return}p=X;const h=r.value;yt&&tv(Ci(h.fullPath,G.delta),Ts()),z(X,h).catch(k=>Cn(k,12)?k:Cn(k,2)?(V(k.to,X).then(A=>{Cn(A,20)&&!G.delta&&G.type===Ea.pop&&s.go(-1,!1)}).catch(ua),Promise.reject()):(G.delta&&s.go(-G.delta,!1),Y(k,X,h))).then(k=>{k=k||U(X,h,!1),k&&(G.delta&&!Cn(k,8)?s.go(-G.delta,!1):G.type===Ea.pop&&Cn(k,20)&&s.go(-1,!1)),ee(X,h,k)}).catch(ua)}))}let Be=ta(),W=ta(),te;function Y(I,j,G){An(I);const X=W.list();return X.length?X.forEach(ve=>ve(I,j,G)):console.error(I),Promise.reject(I)}function Se(){return te&&r.value!==xn?Promise.resolve():new Promise((I,j)=>{Be.add([I,j])})}function An(I){return te||(te=!I,Te(),Be.list().forEach(([j,G])=>I?G(I):j()),Be.reset()),I}function ln(I,j,G,X){const{scrollBehavior:ve}=e;if(!yt||!ve)return Promise.resolve();const h=!G&&av(Ci(I.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return et().then(()=>ve(I,j,h)).then(k=>k&&nv(k)).catch(k=>Y(k,I,j))}const Ve=I=>s.go(I);let Qe;const Sn=new Set,Bn={currentRoute:r,listening:!0,addRoute:f,removeRoute:g,hasRoute:B,getRoutes:b,resolve:y,options:e,push:D,replace:R,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:o.add,beforeResolve:l.add,afterEach:c.add,onError:W.add,isReady:Se,install(I){const j=this;I.component("RouterLink",$v),I.component("RouterView",zr),I.config.globalProperties.$router=j,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(r)}),yt&&!Qe&&r.value===xn&&(Qe=!0,D(s.location).catch(ve=>{}));const G={};for(const ve in xn)Object.defineProperty(G,ve,{get:()=>r.value[ve],enumerable:!0});I.provide(Ps,j),I.provide(pl,Oc(G)),I.provide(yo,r);const X=I.unmount;Sn.add(I),I.unmount=function(){Sn.delete(I),Sn.size<1&&(p=xn,ne&&ne(),ne=null,r.value=xn,Qe=!1,te=!1),X()}}};function Ce(I){return I.reduce((j,G)=>j.then(()=>N(G)),Promise.resolve())}return Bn}function jv(e,n){const t=[],a=[],s=[],o=Math.max(n.matched.length,e.matched.length);for(let l=0;l<o;l++){const c=n.matched[l];c&&(e.matched.find(p=>Nt(p,c))?a.push(c):t.push(c));const r=e.matched[l];r&&(n.matched.find(p=>Nt(p,r))||s.push(r))}return[t,a,s]}function He(){return pe(Ps)}function In(){return pe(pl)}var We=Uint8Array,Dt=Uint16Array,qv=Int32Array,Hr=new We([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),jr=new We([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Wv=new We([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qr=function(e,n){for(var t=new Dt(31),a=0;a<31;++a)t[a]=n+=1<<e[a-1];for(var s=new qv(t[30]),a=1;a<30;++a)for(var o=t[a];o<t[a+1];++o)s[o]=o-t[a]<<5|a;return{b:t,r:s}},Wr=qr(Hr,2),Kr=Wr.b,Kv=Wr.r;Kr[28]=258,Kv[258]=28;var Yv=qr(jr,0),Xv=Yv.b,Ao=new Dt(32768);for(var Ae=0;Ae<32768;++Ae){var zn=(Ae&43690)>>1|(Ae&21845)<<1;zn=(zn&52428)>>2|(zn&13107)<<2,zn=(zn&61680)>>4|(zn&3855)<<4,Ao[Ae]=((zn&65280)>>8|(zn&255)<<8)>>1}var va=function(e,n,t){for(var a=e.length,s=0,o=new Dt(n);s<a;++s)e[s]&&++o[e[s]-1];var l=new Dt(n);for(s=1;s<n;++s)l[s]=l[s-1]+o[s-1]<<1;var c;if(t){c=new Dt(1<<n);var r=15-n;for(s=0;s<a;++s)if(e[s])for(var p=s<<4|e[s],u=n-e[s],d=l[e[s]-1]++<<u,m=d|(1<<u)-1;d<=m;++d)c[Ao[d]>>r]=p}else for(c=new Dt(a),s=0;s<a;++s)e[s]&&(c[s]=Ao[l[e[s]-1]++]>>15-e[s]);return c},Ca=new We(288);for(var Ae=0;Ae<144;++Ae)Ca[Ae]=8;for(var Ae=144;Ae<256;++Ae)Ca[Ae]=9;for(var Ae=256;Ae<280;++Ae)Ca[Ae]=7;for(var Ae=280;Ae<288;++Ae)Ca[Ae]=8;var Yr=new We(32);for(var Ae=0;Ae<32;++Ae)Yr[Ae]=5;var Zv=va(Ca,9,1),Jv=va(Yr,5,1),Ks=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},fn=function(e,n,t){var a=n/8|0;return(e[a]|e[a+1]<<8)>>(n&7)&t},Ys=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Qv=function(e){return(e+7)/8|0},ul=function(e,n,t){return(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length),new We(e.subarray(n,t))},em=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pn=function(e,n,t){var a=new Error(n||em[e]);if(a.code=e,Error.captureStackTrace&&Error.captureStackTrace(a,pn),!t)throw a;return a},nm=function(e,n,t,a){var s=e.length,o=a?a.length:0;if(!s||n.f&&!n.l)return t||new We(0);var l=!t,c=l||n.i!=2,r=n.i;l&&(t=new We(s*3));var p=function(ve){var h=t.length;if(ve>h){var k=new We(Math.max(h*2,ve));k.set(t),t=k}},u=n.f||0,d=n.p||0,m=n.b||0,f=n.l,g=n.d,b=n.m,B=n.n,y=s*8;do{if(!f){u=fn(e,d,1);var T=fn(e,d+1,3);if(d+=3,T)if(T==1)f=Zv,g=Jv,b=9,B=5;else if(T==2){var C=fn(e,d,31)+257,V=fn(e,d+10,15)+4,S=C+fn(e,d+5,31)+1;d+=14;for(var N=new We(S),z=new We(19),ee=0;ee<V;++ee)z[Wv[ee]]=fn(e,d+ee*3,7);d+=V*3;for(var U=Ks(z),ne=(1<<U)-1,Te=va(z,U,1),ee=0;ee<S;){var Be=Te[fn(e,d,ne)];d+=Be&15;var E=Be>>4;if(E<16)N[ee++]=E;else{var W=0,te=0;for(E==16?(te=3+fn(e,d,3),d+=2,W=N[ee-1]):E==17?(te=3+fn(e,d,7),d+=3):E==18&&(te=11+fn(e,d,127),d+=7);te--;)N[ee++]=W}}var Y=N.subarray(0,C),Se=N.subarray(C);b=Ks(Y),B=Ks(Se),f=va(Y,b,1),g=va(Se,B,1)}else pn(1);else{var E=Qv(d)+4,D=e[E-4]|e[E-3]<<8,R=E+D;if(R>s){r&&pn(0);break}c&&p(m+D),t.set(e.subarray(E,R),m),n.b=m+=D,n.p=d=R*8,n.f=u;continue}if(d>y){r&&pn(0);break}}c&&p(m+131072);for(var An=(1<<b)-1,ln=(1<<B)-1,Ve=d;;Ve=d){var W=f[Ys(e,d)&An],Qe=W>>4;if(d+=W&15,d>y){r&&pn(0);break}if(W||pn(2),Qe<256)t[m++]=Qe;else if(Qe==256){Ve=d,f=null;break}else{var Sn=Qe-254;if(Qe>264){var ee=Qe-257,Bn=Hr[ee];Sn=fn(e,d,(1<<Bn)-1)+Kr[ee],d+=Bn}var Ce=g[Ys(e,d)&ln],I=Ce>>4;Ce||pn(3),d+=Ce&15;var Se=Xv[I];if(I>3){var Bn=jr[I];Se+=Ys(e,d)&(1<<Bn)-1,d+=Bn}if(d>y){r&&pn(0);break}c&&p(m+131072);var j=m+Sn;if(m<Se){var G=o-Se,X=Math.min(Se,j);for(G+m<0&&pn(3);m<X;++m)t[m]=a[G+m]}for(;m<j;++m)t[m]=t[m-Se]}}n.l=f,n.p=Ve,n.b=m,n.f=u,f&&(u=1,n.m=b,n.d=g,n.n=B)}while(!u);return m!=t.length&&l?ul(t,0,m):t.subarray(0,m)},tm=new We(0),am=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&pn(6,"invalid zlib data"),(e[1]>>5&1)==+!n&&pn(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function sm(e,n){return nm(e.subarray(am(e,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var Hi=typeof TextEncoder<"u"&&new TextEncoder,Bo=typeof TextDecoder<"u"&&new TextDecoder,om=0;try{Bo.decode(tm,{stream:!0}),om=1}catch{}var lm=function(e){for(var n="",t=0;;){var a=e[t++],s=(a>127)+(a>223)+(a>239);if(t+s>e.length)return{s:n,r:ul(e,t-1)};s?s==3?(a=((a&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|a>>10,56320|a&1023)):s&1?n+=String.fromCharCode((a&31)<<6|e[t++]&63):n+=String.fromCharCode((a&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(a)}};function im(e,n){if(n){for(var t=new We(e.length),a=0;a<e.length;++a)t[a]=e.charCodeAt(a);return t}if(Hi)return Hi.encode(e);for(var s=e.length,o=new We(e.length+(e.length>>1)),l=0,c=function(u){o[l++]=u},a=0;a<s;++a){if(l+5>o.length){var r=new We(l+8+(s-a<<1));r.set(o),o=r}var p=e.charCodeAt(a);p<128||n?c(p):p<2048?(c(192|p>>6),c(128|p&63)):p>55295&&p<57344?(p=65536+(p&1047552)|e.charCodeAt(++a)&1023,c(240|p>>18),c(128|p>>12&63),c(128|p>>6&63),c(128|p&63)):(c(224|p>>12),c(128|p>>6&63),c(128|p&63))}return ul(o,0,l)}function cm(e,n){if(n){for(var t="",a=0;a<e.length;a+=16384)t+=String.fromCharCode.apply(null,e.subarray(a,a+16384));return t}else{if(Bo)return Bo.decode(e);var s=lm(e),o=s.s,t=s.r;return t.length&&pn(8),o}}const de=({name:e="",color:n="currentColor"},{slots:t})=>{var a;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:n,"aria-label":`${e} icon`},(a=t.default)==null?void 0:a.call(t))};de.displayName="IconBase";const dl=({size:e=48,stroke:n=4,wrapper:t=!0,height:a=2*e})=>{const s=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${a}px`},s):s};dl.displayName="LoadingIcon";const Xr=(e,{slots:n})=>{var t;return(t=n.default)==null?void 0:t.call(n)},vl=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const n=Date.parse(e.toString());if(!Number.isNaN(n))return new Date(n)}return null},Is=(e,n)=>{let t=1;for(let a=0;a<e.length;a++)t+=e.charCodeAt(a),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%n},Zr=Array.isArray,rm=e=>typeof e=="function",pm=e=>typeof e=="string";var um=e=>e.startsWith("ftp://"),ml=e=>/^(https?:)?\/\//.test(e),dm=/.md((\?|#).*)?$/,vm=(e,n="/")=>!!(ml(e)||um(e)||e.startsWith("/")&&!e.startsWith(n)&&!dm.test(e)),Jr=e=>Object.prototype.toString.call(e)==="[object Object]";function mm(){const e=q(!1);return nt()&&ue(()=>{e.value=!0}),e}function fm(e){return mm(),w(()=>!!e())}const Vn=e=>typeof e=="string",zt=(e,n)=>Vn(e)&&e.startsWith(n),bt=(e,n)=>Vn(e)&&e.endsWith(n),Oa=Object.entries,hm=Object.fromEntries,on=Object.keys,gm=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),Qr=e=>{const[n,t=""]=e.split("#");return n?`${gm(n)}${t?`#${t}`:""}`:e},ji=e=>Jr(e)&&Vn(e.name),ya=(e,n=!1)=>e?Zr(e)?e.map(t=>Vn(t)?{name:t}:ji(t)?t:null).filter(t=>t!==null):Vn(e)?[{name:e}]:ji(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n?"":"| false"} | undefined\`, but got`,e),[]):[],ep=(e,n)=>{if(e){if(Zr(e)&&e.every(Vn))return e;if(Vn(e))return[e];console.error(`Expect ${n||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},np=e=>ep(e,"category"),tp=e=>ep(e,"tag"),Ss=e=>zt(e,"/");let km=class{constructor(){this.messageElements={};const n="message-container",t=document.getElementById(n);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=n,document.body.appendChild(this.containerElement))}pop(n,t=2e3){const a=document.createElement("div"),s=Date.now();return a.className="message move-in",a.innerHTML=n,this.containerElement.appendChild(a),this.messageElements[s]=a,t>0&&setTimeout(()=>{this.close(s)},t),s}close(n){if(n){const t=this.messageElements[n];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[n]})}else on(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const ap=/#.*$/u,_m=e=>{const n=ap.exec(e);return n?n[0]:""},qi=e=>decodeURI(e).replace(ap,"").replace(/(index)?\.(md|html)$/,""),fl=(e,n)=>{if(n===void 0)return!1;const t=qi(e.path),a=qi(n),s=_m(n);return s?s===e.hash&&(!a||t===a):t===a},Wi=e=>{const n=atob(e);return cm(sm(im(n,!0)))},bm=e=>ml(e)?e:`https://github.com/${e}`,sp=e=>!ml(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Ht=(e,...n)=>{const t=e.resolve(...n),a=t.matched[t.matched.length-1];if(!(a!=null&&a.redirect))return t;const{redirect:s}=a,o=rm(s)?s(t):s,l=pm(o)?{path:o}:o;return Ht(e,{hash:t.hash,query:t.query,params:t.params,...l})},Em=e=>{var n;if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&((n=e.currentTarget.getAttribute("target"))!=null&&n.match(/\b_blank\b/i))))return e.preventDefault(),!0},Me=({to:e="",class:n="",...t},{slots:a})=>{var l;const s=He(),o=(c={})=>Em(c)?s.push(e).catch():Promise.resolve();return i("a",{...t,class:["vp-link",n],href:we(Qr(e)),onClick:o},(l=a.default)==null?void 0:l.call(a))};Me.displayName="VPLink";const op=()=>i(de,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));op.displayName="GitHubIcon";const lp=()=>i(de,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));lp.displayName="GitLabIcon";const ip=()=>i(de,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));ip.displayName="GiteeIcon";const cp=()=>i(de,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));cp.displayName="BitbucketIcon";const rp=()=>i(de,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));rp.displayName="SourceIcon";const bn=(e,n)=>{const t=n?n._instance:nt();return Jr(t==null?void 0:t.appContext.components)&&(e in t.appContext.components||vn(e)in t.appContext.components||Ba(vn(e))in t.appContext.components)},ym=()=>fm(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),wm=()=>{const e=ym();return w(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},La=e=>{const n=wn();return w(()=>e[n.value])};function Ki(e,n){var t;const a=Ne();return Hc(()=>{a.value=e()},{...n,flush:(t=n==null?void 0:n.flush)!=null?t:"sync"}),mt(a)}function hl(e,n){let t,a,s;const o=q(!0),l=()=>{o.value=!0,s()};re(e,l,{flush:"sync"});const c=typeof n=="function"?n:n.get,r=typeof n=="function"?void 0:n.set,p=Vc((u,d)=>(a=u,s=d,{get(){return o.value&&(t=c(),o.value=!1),a(),t},set(m){r==null||r(m)}}));return Object.isExtensible(p)&&(p.trigger=l),p}function Zt(e){return Ec()?(ud(e),!0):!1}function $e(e){return typeof e=="function"?e():pt(e)}const xa=typeof window<"u"&&typeof document<"u",Am=Object.prototype.toString,Bm=e=>Am.call(e)==="[object Object]",Mn=()=>{},Do=Dm();function Dm(){var e;return xa&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function gl(e,n){function t(...a){return new Promise((s,o)=>{Promise.resolve(e(()=>n.apply(this,a),{fn:n,thisArg:this,args:a})).then(s).catch(o)})}return t}const pp=e=>e();function Tm(e,n={}){let t,a,s=Mn;const o=c=>{clearTimeout(c),s(),s=Mn};return c=>{const r=$e(e),p=$e(n.maxWait);return t&&o(t),r<=0||p!==void 0&&p<=0?(a&&(o(a),a=null),Promise.resolve(c())):new Promise((u,d)=>{s=n.rejectOnCancel?d:u,p&&!a&&(a=setTimeout(()=>{t&&o(t),a=null,u(c())},p)),t=setTimeout(()=>{a&&o(a),a=null,u(c())},r)})}}function Pm(e,n=!0,t=!0,a=!1){let s=0,o,l=!0,c=Mn,r;const p=()=>{o&&(clearTimeout(o),o=void 0,c(),c=Mn)};return d=>{const m=$e(e),f=Date.now()-s,g=()=>r=d();return p(),m<=0?(s=Date.now(),g()):(f>m&&(t||!l)?(s=Date.now(),g()):n&&(r=new Promise((b,B)=>{c=a?B:b,o=setTimeout(()=>{s=Date.now(),l=!0,b(g()),p()},Math.max(0,m-f))})),!t&&!o&&(o=setTimeout(()=>l=!0,m)),l=!1,r)}}function Im(e=pp){const n=q(!0);function t(){n.value=!1}function a(){n.value=!0}const s=(...o)=>{n.value&&e(...o)};return{isActive:mt(n),pause:t,resume:a,eventFilter:s}}function Sm(...e){if(e.length!==1)return Yt(...e);const n=e[0];return typeof n=="function"?mt(Vc(()=>({get:n,set:Mn}))):q(n)}function Cm(e,n=200,t={}){return gl(Tm(n,t),e)}function Om(e,n=200,t=!1,a=!0,s=!1){return gl(Pm(n,t,a,s),e)}function Lm(e,n,t={}){const{eventFilter:a=pp,...s}=t;return re(e,gl(a,n),s)}function xm(e,n,t={}){const{eventFilter:a,...s}=t,{eventFilter:o,pause:l,resume:c,isActive:r}=Im(a);return{stop:Lm(e,n,{...s,eventFilter:o}),pause:l,resume:c,isActive:r}}function up(e,n=!0){nt()?ue(e):n?e():et(e)}function Rm(e){nt()&&ft(e)}function Fm(e,n,t={}){const{immediate:a=!0}=t,s=q(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function c(){s.value=!1,l()}function r(...p){l(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=null,e(...p)},$e(n))}return a&&(s.value=!0,xa&&r()),Zt(c),{isPending:mt(s),start:r,stop:c}}function To(e=!1,n={}){const{truthyValue:t=!0,falsyValue:a=!1}=n,s=Re(e),o=q(e);function l(c){if(arguments.length)return o.value=c,o.value;{const r=$e(t);return o.value=o.value===r?$e(a):r,o.value}}return s?l:[o,l]}function un(e){var n;const t=$e(e);return(n=t==null?void 0:t.$el)!=null?n:t}const yn=xa?window:void 0,dp=xa?window.document:void 0,Vm=xa?window.navigator:void 0;function Fe(...e){let n,t,a,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,a,s]=e,n=yn):[n,t,a,s]=e,!n)return Mn;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},c=(u,d,m,f)=>(u.addEventListener(d,m,f),()=>u.removeEventListener(d,m,f)),r=re(()=>[un(n),$e(s)],([u,d])=>{if(l(),!u)return;const m=Bm(d)?{...d}:d;o.push(...t.flatMap(f=>a.map(g=>c(u,f,g,m))))},{immediate:!0,flush:"post"}),p=()=>{r(),l()};return Zt(p),p}let Yi=!1;function Mm(e,n,t={}){const{window:a=yn,ignore:s=[],capture:o=!0,detectIframe:l=!1}=t;if(!a)return;Do&&!Yi&&(Yi=!0,Array.from(a.document.body.children).forEach(m=>m.addEventListener("click",Mn)),a.document.documentElement.addEventListener("click",Mn));let c=!0;const r=m=>s.some(f=>{if(typeof f=="string")return Array.from(a.document.querySelectorAll(f)).some(g=>g===m.target||m.composedPath().includes(g));{const g=un(f);return g&&(m.target===g||m.composedPath().includes(g))}}),u=[Fe(a,"click",m=>{const f=un(e);if(!(!f||f===m.target||m.composedPath().includes(f))){if(m.detail===0&&(c=!r(m)),!c){c=!0;return}n(m)}},{passive:!0,capture:o}),Fe(a,"pointerdown",m=>{const f=un(e);f&&(c=!m.composedPath().includes(f)&&!r(m))},{passive:!0}),l&&Fe(a,"blur",m=>{setTimeout(()=>{var f;const g=un(e);((f=a.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(g!=null&&g.contains(a.document.activeElement))&&n(m)},0)})].filter(Boolean);return()=>u.forEach(m=>m())}function Gm(){const e=q(!1);return nt()&&ue(()=>{e.value=!0}),e}function Cs(e){const n=Gm();return w(()=>(n.value,!!e()))}function vp(e,n={}){const{window:t=yn}=n,a=Cs(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let s;const o=q(!1),l=p=>{o.value=p.matches},c=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",l):s.removeListener(l))},r=Hc(()=>{a.value&&(c(),s=t.matchMedia($e(e)),"addEventListener"in s?s.addEventListener("change",l):s.addListener(l),o.value=s.matches)});return Zt(()=>{r(),c(),s=void 0}),o}function $m(e={}){const{navigator:n=Vm,read:t=!1,source:a,copiedDuring:s=1500,legacy:o=!1}=e,l=Cs(()=>n&&"clipboard"in n),c=w(()=>l.value||o),r=q(""),p=q(!1),u=Fm(()=>p.value=!1,s);function d(){l.value?n.clipboard.readText().then(b=>{r.value=b}):r.value=g()}c.value&&t&&Fe(["copy","cut"],d);async function m(b=$e(a)){c.value&&b!=null&&(l.value?await n.clipboard.writeText(b):f(b),r.value=b,p.value=!0,u.start())}function f(b){const B=document.createElement("textarea");B.value=b??"",B.style.position="absolute",B.style.opacity="0",document.body.appendChild(B),B.select(),document.execCommand("copy"),B.remove()}function g(){var b,B,y;return(y=(B=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:B.toString())!=null?y:""}return{isSupported:c,text:r,copied:p,copy:m}}const Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ja="__vueuse_ssr_handlers__",Nm=Um();function Um(){return Ja in Za||(Za[Ja]=Za[Ja]||{}),Za[Ja]}function zm(e,n){return Nm[e]||n}function Hm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const jm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Xi="vueuse-storage";function gt(e,n,t,a={}){var s;const{flush:o="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:r=!0,mergeDefaults:p=!1,shallow:u,window:d=yn,eventFilter:m,onError:f=S=>{console.error(S)}}=a,g=(u?Ne:q)(n);if(!t)try{t=zm("getDefaultStorage",()=>{var S;return(S=yn)==null?void 0:S.localStorage})()}catch(S){f(S)}if(!t)return g;const b=$e(n),B=Hm(b),y=(s=a.serializer)!=null?s:jm[B],{pause:T,resume:E}=xm(g,()=>D(g.value),{flush:o,deep:l,eventFilter:m});return d&&c&&(Fe(d,"storage",V),Fe(d,Xi,C)),V(),g;function D(S){try{if(S==null)t.removeItem(e);else{const N=y.write(S),z=t.getItem(e);z!==N&&(t.setItem(e,N),d&&d.dispatchEvent(new CustomEvent(Xi,{detail:{key:e,oldValue:z,newValue:N,storageArea:t}})))}}catch(N){f(N)}}function R(S){const N=S?S.newValue:t.getItem(e);if(N==null)return r&&b!==null&&t.setItem(e,y.write(b)),b;if(!S&&p){const z=y.read(N);return typeof p=="function"?p(z,b):B==="object"&&!Array.isArray(z)?{...b,...z}:z}else return typeof N!="string"?N:y.read(N)}function C(S){V(S.detail)}function V(S){if(!(S&&S.storageArea!==t)){if(S&&S.key==null){g.value=b;return}if(!(S&&S.key!==e)){T();try{(S==null?void 0:S.newValue)!==y.write(g.value)&&(g.value=R(S))}catch(N){f(N)}finally{S?et(E):E()}}}}}function qm(e){return vp("(prefers-color-scheme: dark)",e)}function Wm(e,n,t={}){const{window:a=yn,...s}=t;let o;const l=Cs(()=>a&&"ResizeObserver"in a),c=()=>{o&&(o.disconnect(),o=void 0)},r=w(()=>Array.isArray(e)?e.map(d=>un(d)):[un(e)]),p=re(r,d=>{if(c(),l.value&&a){o=new ResizeObserver(n);for(const m of d)m&&o.observe(m,s)}},{immediate:!0,flush:"post",deep:!0}),u=()=>{c(),p()};return Zt(u),{isSupported:l,stop:u}}function Km(e,n={width:0,height:0},t={}){const{window:a=yn,box:s="content-box"}=t,o=w(()=>{var r,p;return(p=(r=un(e))==null?void 0:r.namespaceURI)==null?void 0:p.includes("svg")}),l=q(n.width),c=q(n.height);return Wm(e,([r])=>{const p=s==="border-box"?r.borderBoxSize:s==="content-box"?r.contentBoxSize:r.devicePixelContentBoxSize;if(a&&o.value){const u=un(e);if(u){const d=a.getComputedStyle(u);l.value=Number.parseFloat(d.width),c.value=Number.parseFloat(d.height)}}else if(p){const u=Array.isArray(p)?p:[p];l.value=u.reduce((d,{inlineSize:m})=>d+m,0),c.value=u.reduce((d,{blockSize:m})=>d+m,0)}else l.value=r.contentRect.width,c.value=r.contentRect.height},t),re(()=>un(e),r=>{l.value=r?n.width:0,c.value=r?n.height:0}),{width:l,height:c}}const Zi=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function kl(e,n={}){const{document:t=dp,autoExit:a=!1}=n,s=w(()=>{var y;return(y=un(e))!=null?y:t==null?void 0:t.querySelector("html")}),o=q(!1),l=w(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>t&&y in t||s.value&&y in s.value)),c=w(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>t&&y in t||s.value&&y in s.value)),r=w(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>t&&y in t||s.value&&y in s.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>t&&y in t),u=Cs(()=>s.value&&t&&l.value!==void 0&&c.value!==void 0&&r.value!==void 0),d=()=>p?(t==null?void 0:t[p])===s.value:!1,m=()=>{if(r.value){if(t&&t[r.value]!=null)return t[r.value];{const y=s.value;if((y==null?void 0:y[r.value])!=null)return!!y[r.value]}}return!1};async function f(){if(!(!u.value||!o.value)){if(c.value)if((t==null?void 0:t[c.value])!=null)await t[c.value]();else{const y=s.value;(y==null?void 0:y[c.value])!=null&&await y[c.value]()}o.value=!1}}async function g(){if(!u.value||o.value)return;m()&&await f();const y=s.value;l.value&&(y==null?void 0:y[l.value])!=null&&(await y[l.value](),o.value=!0)}async function b(){await(o.value?f():g())}const B=()=>{const y=m();(!y||y&&d())&&(o.value=y)};return Fe(t,Zi,B,!1),Fe(()=>un(s),Zi,B,!1),a&&Zt(f),{isSupported:u,isFullscreen:o,enter:g,exit:f,toggle:b}}function Xs(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function Mh(e,n,t={}){const{window:a=yn}=t;return gt(e,n,a==null?void 0:a.localStorage,t)}function Zs(e,n=Mn,t={}){const{immediate:a=!0,manual:s=!1,type:o="text/javascript",async:l=!0,crossOrigin:c,referrerPolicy:r,noModule:p,defer:u,document:d=dp,attrs:m={}}=t,f=q(null);let g=null;const b=T=>new Promise((E,D)=>{const R=S=>(f.value=S,E(S),S);if(!d){E(!1);return}let C=!1,V=d.querySelector(`script[src="${$e(e)}"]`);V?V.hasAttribute("data-loaded")&&R(V):(V=d.createElement("script"),V.type=o,V.async=l,V.src=$e(e),u&&(V.defer=u),c&&(V.crossOrigin=c),p&&(V.noModule=p),r&&(V.referrerPolicy=r),Object.entries(m).forEach(([S,N])=>V==null?void 0:V.setAttribute(S,N)),C=!0),V.addEventListener("error",S=>D(S)),V.addEventListener("abort",S=>D(S)),V.addEventListener("load",()=>{V.setAttribute("data-loaded","true"),n(V),R(V)}),C&&(V=d.head.appendChild(V)),T||R(V)}),B=(T=!0)=>(g||(g=b(T)),g),y=()=>{if(!d)return;g=null,f.value&&(f.value=null);const T=d.querySelector(`script[src="${$e(e)}"]`);T&&d.head.removeChild(T)};return a&&!s&&up(B),s||Rm(y),{scriptTag:f,load:B,unload:y}}function mp(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientWidth<e.scrollWidth||n.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const t=e.parentNode;return!t||t.tagName==="BODY"?!1:mp(t)}}function Ym(e){const n=e||window.event,t=n.target;return mp(t)?!1:n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)}function _l(e,n=!1){const t=q(n);let a=null,s;re(Sm(e),c=>{const r=Xs($e(c));if(r){const p=r;s=p.style.overflow,t.value&&(p.style.overflow="hidden")}},{immediate:!0});const o=()=>{const c=Xs($e(e));!c||t.value||(Do&&(a=Fe(c,"touchmove",r=>{Ym(r)},{passive:!1})),c.style.overflow="hidden",t.value=!0)},l=()=>{const c=Xs($e(e));!c||!t.value||(Do&&(a==null||a()),c.style.overflow=s,t.value=!1)};return Zt(l),w({get(){return t.value},set(c){c?o():l()}})}function fp(e,n,t={}){const{window:a=yn}=t;return gt(e,n,a==null?void 0:a.sessionStorage,t)}function Xm(e={}){const{window:n=yn}=e;if(!n)return{x:q(0),y:q(0)};const t=q(n.scrollX),a=q(n.scrollY);return Fe(n,"scroll",()=>{t.value=n.scrollX,a.value=n.scrollY},{capture:!1,passive:!0}),{x:t,y:a}}function Zm(e={}){const{window:n=yn,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:a=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:o=!0}=e,l=q(t),c=q(a),r=()=>{n&&(o?(l.value=n.innerWidth,c.value=n.innerHeight):(l.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};if(r(),up(r),Fe("resize",r,{passive:!0}),s){const p=vp("(orientation: portrait)");re(p,()=>r())}return{width:l,height:c}}const hp=({type:e="info",text:n="",vertical:t,color:a},{slots:s})=>{var o;return i("span",{class:["vp-badge",e,{diy:a}],style:{verticalAlign:t??!1,backgroundColor:a??!1}},((o=s.default)==null?void 0:o.call(s))||n)};hp.displayName="Badge";var Jm=F({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const n=w(()=>{const a=["font-icon icon"],s=`fas fa-${e.icon}`;return a.push("fa-fw fa-sm"),a.push(e.icon.includes(" ")?e.icon:s),a}),t=w(()=>{const a={};return e.color&&(a.color=e.color),e.size&&(a["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),on(a).length?a:null});return()=>e.icon?i("span",{key:e.icon,class:n.value,style:t.value}):null}});const gp=()=>i(de,{name:"back-to-top"},()=>[i("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),i("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);gp.displayName="BackToTopIcon";var Qm=F({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const n=Ee(),t=La({"/":{backToTop:"返回顶部"}}),a=Ne(),{height:s}=Km(a),{height:o}=Zm(),{y:l}=Xm(),c=w(()=>n.value.backToTop!==!1&&l.value>e.threshold),r=w(()=>l.value/(s.value-o.value));return ue(()=>{a.value=document.body}),()=>i(Qn,{name:"fade"},()=>c.value?i("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:i("svg",{class:"vp-scroll-progress"},i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*r.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),i(gp)]):null)}});const e2=Je({enhance:({app:e})=>{bn("Badge")||e.component("Badge",hp),bn("FontIcon")||e.component("FontIcon",Jm)},setup:()=>{Zs("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),Zs("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),Zs("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>i(Qm,{})]});function n2(e,n,t){var a,s,o;n===void 0&&(n=50),t===void 0&&(t={});var l=(a=t.isImmediate)!=null&&a,c=(s=t.callback)!=null&&s,r=t.maxWait,p=Date.now(),u=[];function d(){if(r!==void 0){var f=Date.now()-p;if(f+n>=r)return r-f}return n}var m=function(){var f=[].slice.call(arguments),g=this;return new Promise(function(b,B){var y=l&&o===void 0;if(o!==void 0&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,p=Date.now(),!l){var E=e.apply(g,f);c&&c(E),u.forEach(function(D){return(0,D.resolve)(E)}),u=[]}},d()),y){var T=e.apply(g,f);return c&&c(T),b(T)}u.push({resolve:b,reject:B})})};return m.cancel=function(f){o!==void 0&&clearTimeout(o),u.forEach(function(g){return(0,g.reject)(f)}),u=[]},m}const t2=({headerLinkSelector:e,headerAnchorSelector:n,delay:t,offset:a=5})=>{const s=He(),l=n2(()=>{var b,B;const c=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(c-0)<a){Ji(s,"");return}const p=window.innerHeight+c,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(u-p)<a,m=Array.from(document.querySelectorAll(e)),g=Array.from(document.querySelectorAll(n)).filter(y=>m.some(T=>T.hash===y.hash));for(let y=0;y<g.length;y++){const T=g[y],E=g[y+1],D=c>=(((b=T.parentElement)==null?void 0:b.offsetTop)??0)-a,R=!E||c<(((B=E.parentElement)==null?void 0:B.offsetTop)??0)-a;if(!(D&&R))continue;const V=decodeURIComponent(s.currentRoute.value.hash),S=decodeURIComponent(T.hash);if(V===S)return;if(d){for(let N=y+1;N<g.length;N++)if(V===decodeURIComponent(g[N].hash))return}Ji(s,S);return}},t);ue(()=>{window.addEventListener("scroll",l)}),el(()=>{window.removeEventListener("scroll",l)})},Ji=async(e,n)=>{const{scrollBehavior:t}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:n}).finally(()=>e.options.scrollBehavior=t)},a2=".vp-sidebar-link, .toc-link",s2=".header-anchor",o2=200,l2=5,i2=Je({setup(){t2({headerLinkSelector:a2,headerAnchorSelector:s2,delay:o2,offset:l2})}});let kp=()=>null;const _p=Symbol(""),c2=e=>{kp=e},r2=()=>pe(_p),p2=e=>{e.provide(_p,kp)};var u2=F({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const n=r2(),t=La({"/":{title:"目录",empty:"暂无目录"}}),a=le(),s=He(),o=Sr(),l=d=>d?i(n,{icon:d}):null,c=({title:d,path:m,icon:f,class:g})=>i(Me,{class:g,to:m},()=>[l(f),d||m]),r=d=>{const m=d.I;return typeof m>"u"||m},p=()=>{const d=e.base||a.value.path.replace(/\/[^/]+$/,"/"),m=s.getRoutes(),f=[];return m.filter(({meta:g,path:b})=>{if(!zt(b,d)||b===d)return!1;if(d==="/"){const B=on(o.value.locales).filter(y=>y!=="/");if(b==="/404.html"||B.some(y=>zt(b,y)))return!1}return(bt(b,".html")&&!bt(b,"/index.html")||bt(b,"/"))&&r(g)}).map(({path:g,meta:b})=>{const B=g.substring(d.length).split("/").length;return{title:b.t||"",icon:b.i||null,base:g.replace(/\/[^/]+\/?$/,"/"),order:b.O||null,level:bt(g,"/")?B-1:B,path:g}}).filter(({title:g,level:b})=>g&&b<=e.level).sort(({title:g,level:b,path:B,order:y},{title:T,level:E,path:D,order:R})=>b-E||(bt(B,"/index.html")?-1:bt(D,"/index.html")?1:y===null?R===null?g.localeCompare(T):R:R===null?y:y>0?R>0?y-R:-1:R<0?y-R:1)).forEach(g=>{var y;const{base:b,level:B}=g;switch(B){case 1:f.push(g);break;case 2:{const T=f.find(E=>E.path===b);T&&(T.children??(T.children=[])).push(g);break}default:{const T=f.find(E=>E.path===b.replace(/\/[^/]+\/$/,"/"));if(T){const E=(y=T.children)==null?void 0:y.find(D=>D.path===b);E&&(E.children??(E.children=[])).push(g)}}}}),f},u=w(()=>p());return()=>{const d=u.value.some(f=>f.children),m=u.value.map(({children:f=[],icon:g,path:b,title:B})=>{const y=c({title:B,path:b,icon:g,class:"vp-catalog-title"});return d?[i("h3",{id:B,class:["vp-catalog-child-title",{"has-children":f.length}]},[i("a",{href:`#${B}`,class:"header-anchor","aria-hidden":!0},"#"),y]),f.length?i(e.index?"ol":"ul",{class:"vp-child-catalogs"},f.map(({children:T=[],icon:E,path:D,title:R})=>i("li",{class:"vp-child-catalog"},[i("div",{class:["vp-catalog-sub-title",{"has-children":T.length}]},[i("a",{href:`#${R}`,class:"header-anchor"},"#"),i(c,{title:R,path:D,icon:E,class:"vp-catalog-title"})]),T.length?i(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},T.map(({icon:C,path:V,title:S})=>{const N=i(c,{title:S,path:V,icon:C,class:""});return e.index?i("li",{class:"vp-sub-catalog"},N):i(c,{title:S,path:V,icon:C,class:"vp-sub-catalog-link"})})):null]))):null]:i("div",{class:"vp-catalog-child-title"},y)});return i("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:i("h2",{class:"vp-catalog-main-title"},t.value.title),u.value.length?e.index?i("ol",{class:"vp-catalogs"},m.map(f=>i("li",{class:"vp-catalog"},f))):m:i("p",{class:"vp-empty-catalog"},t.value.empty)])}}}),d2=Je({enhance:({app:e})=>{p2(e),bn("AutoCatalog",e)||e.component("AutoCatalog",u2)}});const v2=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),bp=F({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const n=wn(),t=w(()=>e.locales[n.value]??{openInNewWindow:"open in new window"});return()=>i("span",[v2,i("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}}),m2={},f2=Je({enhance({app:e}){e.component("ExternalLinkIcon",i(bp,{locales:m2}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const me={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const n=me.isStarted();e=Js(e,me.settings.minimum,1),me.status=e===1?null:e;const t=me.render(!n),a=t.querySelector(me.settings.barSelector),s=me.settings.speed,o=me.settings.easing;return t.offsetWidth,h2(l=>{Qa(a,{transform:"translate3d("+Qi(e)+"%,0,0)",transition:"all "+s+"ms "+o}),e===1?(Qa(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){Qa(t,{transition:"all "+s+"ms linear",opacity:"0"}),setTimeout(function(){me.remove(),l()},s)},s)):setTimeout(()=>l(),s)}),me},isStarted:()=>typeof me.status=="number",start:()=>{me.status||me.set(0);const e=()=>{setTimeout(()=>{me.status&&(me.trickle(),e())},me.settings.trickleSpeed)};return me.settings.trickle&&e(),me},done:e=>!e&&!me.status?me:me.inc(.3+.5*Math.random()).set(1),inc:e=>{let n=me.status;return n?(typeof e!="number"&&(e=(1-n)*Js(Math.random()*n,.1,.95)),n=Js(n+e,0,.994),me.set(n)):me.start()},trickle:()=>me.inc(Math.random()*me.settings.trickleRate),render:e=>{if(me.isRendered())return document.getElementById("nprogress");ec(document.documentElement,"nprogress-busy");const n=document.createElement("div");n.id="nprogress",n.innerHTML=me.settings.template;const t=n.querySelector(me.settings.barSelector),a=e?"-100":Qi(me.status||0),s=document.querySelector(me.settings.parent);return Qa(t,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),s!==document.body&&ec(s,"nprogress-custom-parent"),s==null||s.appendChild(n),n},remove:()=>{nc(document.documentElement,"nprogress-busy"),nc(document.querySelector(me.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&g2(e)},isRendered:()=>!!document.getElementById("nprogress")},Js=(e,n,t)=>e<n?n:e>t?t:e,Qi=e=>(-1+e)*100,h2=function(){const e=[];function n(){const t=e.shift();t&&t(n)}return function(t){e.push(t),e.length===1&&n()}}(),Qa=function(){const e=["Webkit","O","Moz","ms"],n={};function t(l){return l.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,r){return r.toUpperCase()})}function a(l){const c=document.body.style;if(l in c)return l;let r=e.length;const p=l.charAt(0).toUpperCase()+l.slice(1);let u;for(;r--;)if(u=e[r]+p,u in c)return u;return l}function s(l){return l=t(l),n[l]??(n[l]=a(l))}function o(l,c,r){c=s(c),l.style[c]=r}return function(l,c){for(const r in c){const p=c[r];p!==void 0&&Object.prototype.hasOwnProperty.call(c,r)&&o(l,r,p)}}}(),Ep=(e,n)=>(typeof e=="string"?e:bl(e)).indexOf(" "+n+" ")>=0,ec=(e,n)=>{const t=bl(e),a=t+n;Ep(t,n)||(e.className=a.substring(1))},nc=(e,n)=>{const t=bl(e);if(!Ep(e,n))return;const a=t.replace(" "+n+" "," ");e.className=a.substring(1,a.length-1)},bl=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),g2=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const k2=()=>{ue(()=>{const e=He(),n=new Set;n.add(e.currentRoute.value.path),e.beforeEach(t=>{n.has(t.path)||me.start()}),e.afterEach(t=>{n.add(t.path),me.done()})})},_2=Je({setup(){k2()}}),b2=JSON.parse('{"encrypt":{"config":{"/tools/github/5-autoaction.html":["$2a$10$vjpdKN9y5KQu6jISVKdbMenZvF2z33u/pNbdrcMhFi57N8mI4tv.u"]}},"darkmode":"toggle","fullscreen":true,"author":{"name":"Mr.Si","url":"https://rendertool.github.io/RenderDoc/"},"logo":"./logo.svg","repo":"RenderTool/RenderDoc","docsBranch":"master","docsDir":"src","displayFooter":true,"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/","/preface/","/unreal/",{"text":"开发语言","icon":"signs-post","prefix":"/language/","children":["markdown/","lua/","cpp/"]},{"text":"开发工具","icon":"screwdriver-wrench","prefix":"/tools/","children":["git/","github/","vscode/","vuepress/","rider/","visualstudio/"]},{"text":"3D工具","icon":"cube","prefix":"/3Dtools/","children":["vray/","3dsmax"]},"/algorithm/","/timeline/"],"sidebar":{"/":[{"text":"目录","prefix":"Fontend/","link":"Fontend/","children":"structure"}],"/language/":[{"text":"目录","prefix":"","link":"","children":"structure"}],"/tools/":[{"text":"目录","prefix":"","link":"","children":"structure"}],"/unreal/":[{"text":"目录","prefix":"","link":"","children":"structure"}],"/3Dtools/":[{"text":"目录","prefix":"","link":"","children":"structure"}],"/algorithm/":[{"text":"目录","prefix":"","link":"","children":"structure"}]}}}}'),E2=q(b2),yp=()=>E2,wp=Symbol(""),y2=()=>{const e=pe(wp);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},w2=(e,n)=>{const{locales:t,...a}=e;return{...a,...t==null?void 0:t[n]}},A2=Je({enhance({app:e}){const n=yp(),t=e._context.provides[cl],a=w(()=>w2(n.value,t.value));e.provide(wp,a),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return a.value}}})}});const B2={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.243/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.243/templates/giscus/dark.css",repo:"RenderTool/RenderDoc",repoId:"R_kgDOKnzR2g",category:"Announcements",categoryId:"DIC_kwDOKnzR2s4Cam3R"};let D2=B2;const Ap=Symbol(""),Bp=()=>pe(Ap),T2=Bp,P2=e=>{e.provide(Ap,D2)},tc=["ar","ca","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var I2=F({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(e){const n=T2(),t=!!(n.repo&&n.repoId&&n.category&&n.categoryId),{repo:a,repoId:s,category:o,categoryId:l}=n,c=q(!1),r=w(()=>{const u=il().value;if(tc.includes(u))return u;const d=u.split("-")[0];return tc.includes(d)?d:"en"}),p=w(()=>({repo:a,repoId:s,category:o,categoryId:l,lang:r.value,theme:e.darkmode?n.darkTheme||"dark":n.lightTheme||"light",mapping:n.mapping||"pathname",term:e.identifier,inputPosition:n.inputPosition||"top",reactionsEnabled:n.reactionsEnabled===!1?"0":"1",strict:n.strict===!1?"0":"1",loading:n.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return ue(async()=>{await v(()=>import("./giscus-0b7adcf8.js"),[]),c.value=!0}),()=>t?i("div",{id:"comment",class:["giscus-wrapper",{"input-top":n.inputPosition!=="bottom"}]},c.value?i("giscus-widget",p.value):i(dl)):null}}),S2=F({name:"CommentService",props:{darkmode:Boolean},setup(e){const n=Bp(),t=le(),a=Ee(),s=n.comment!==!1,o=w(()=>a.value.comment||s&&a.value.comment!==!1);return()=>i(I2,{identifier:a.value.commentID||t.value.path,darkmode:e.darkmode,style:{display:o.value?"block":"none"}})}}),C2=Je({enhance:({app:e})=>{P2(e),e.component("CommentService",S2)}});const O2=800,L2=2e3,x2={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},R2=!1,F2=['.theme-hope-content div[class*="language-"] pre'],ac=!1,Qs=new Map,V2=()=>{const{copy:e}=$m({legacy:!0}),n=La(x2),t=le(),a=wm(),s=c=>{if(!c.hasAttribute("copy-code-registered")){const r=document.createElement("button");r.type="button",r.classList.add("copy-code-button"),r.innerHTML='<div class="copy-icon" />',r.setAttribute("aria-label",n.value.copy),r.setAttribute("data-copied",n.value.copied),c.parentElement&&c.parentElement.insertBefore(r,c),c.setAttribute("copy-code-registered","")}},o=()=>et().then(()=>new Promise(c=>{setTimeout(()=>{F2.forEach(r=>{document.querySelectorAll(r).forEach(s)}),c()},O2)})),l=(c,r,p)=>{let{innerText:u=""}=r;/language-(shellscript|shell|bash|sh|zsh)/.test(c.classList.toString())&&(u=u.replace(/^ *(\$|>) /gm,"")),e(u).then(()=>{p.classList.add("copied"),clearTimeout(Qs.get(p));const d=setTimeout(()=>{p.classList.remove("copied"),p.blur(),Qs.delete(p)},L2);Qs.set(p,d)})};ue(()=>{(!a.value||ac)&&o(),Fe("click",c=>{const r=c.target;if(r.matches('div[class*="language-"] > button.copy')){const p=r.parentElement,u=r.nextElementSibling;u&&l(p,u,r)}else if(r.matches('div[class*="language-"] div.copy-icon')){const p=r.parentElement,u=p.parentElement,d=p.nextElementSibling;d&&l(u,d,p)}}),re(()=>t.value.path,()=>{(!a.value||ac)&&o()})})};var M2=Je({setup:()=>{V2()}});const Dp=({title:e,desc:n="",logo:t="",color:a="",link:s=""})=>{const o=[i("img",{class:"vp-card-logo",src:we(t)}),i("div",{class:"vp-card-content"},[i("div",{class:"vp-card-title",innerHTML:e}),i("hr"),i("div",{class:"vp-card-desc",innerHTML:n})])],l={class:"vp-card"};return a&&(l.style={background:a}),ba(s)?i("a",{href:s,target:"_blank",...l},o):i(Me,{to:s,...l},()=>o)};Dp.displayName="VPCard";const es=gt("VUEPRESS_CODE_TAB_STORE",{});var G2=F({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:n}){const t=q(e.active),a=Ne([]),s=()=>{e.tabId&&(es.value[e.tabId]=e.data[t.value].id)},o=(p=t.value)=>{t.value=p<a.value.length-1?p+1:0,a.value[t.value].focus()},l=(p=t.value)=>{t.value=p>0?p-1:a.value.length-1,a.value[t.value].focus()},c=(p,u)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),t.value=u):p.key==="ArrowRight"?(p.preventDefault(),o()):p.key==="ArrowLeft"&&(p.preventDefault(),l()),e.tabId&&(es.value[e.tabId]=e.data[t.value].id)},r=()=>{if(e.tabId){const p=e.data.findIndex(({id:u})=>es.value[e.tabId]===u);if(p!==-1)return p}return e.active};return ue(()=>{t.value=r(),re(()=>es.value[e.tabId],(p,u)=>{if(e.tabId&&p!==u){const d=e.data.findIndex(({id:m})=>m===p);d!==-1&&(t.value=d)}})}),()=>e.data.length?i("div",{class:"vp-code-tabs"},[i("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:p},u)=>{const d=u===t.value;return i("button",{type:"button",ref:m=>{m&&(a.value[u]=m)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${e.id}-${u}`,"aria-selected":d,onClick:()=>{t.value=u,s()},onKeydown:m=>c(m,u)},n[`title${u}`]({value:p,isActive:d}))})),e.data.map(({id:p},u)=>{const d=u===t.value;return i("div",{class:["vp-code-tab",{active:d}],id:`codetab-${e.id}-${u}`,role:"tabpanel","aria-expanded":d},n[`tab${u}`]({value:p,isActive:d}))})]):null}});const Tp=({active:e=!1},{slots:n})=>{var t;return i("div",{class:["code-group-item",{active:e}],"aria-selected":e},(t=n.default)==null?void 0:t.call(n))};Tp.displayName="CodeGroupItem";const $2=F({name:"CodeGroup",slots:Object,setup(e,{slots:n}){const t=q(-1),a=Ne([]),s=(c=t.value)=>{t.value=c<a.value.length-1?c+1:0,a.value[t.value].focus()},o=(c=t.value)=>{t.value=c>0?c-1:a.value.length-1,a.value[t.value].focus()},l=(c,r)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=r):c.key==="ArrowRight"?(c.preventDefault(),s(r)):c.key==="ArrowLeft"&&(c.preventDefault(),o(r))};return()=>{var r;const c=(((r=n.default)==null?void 0:r.call(n))||[]).filter(p=>p.type.name==="CodeGroupItem").map(p=>(p.props===null&&(p.props={}),p));return c.length===0?null:(t.value<0||t.value>c.length-1?(t.value=c.findIndex(p=>"active"in p.props),t.value===-1&&(t.value=0)):c.forEach((p,u)=>{p.props.active=u===t.value}),i("div",{class:"code-group"},[i("div",{class:"code-group-nav"},c.map((p,u)=>{const d=u===t.value;return i("button",{type:"button",ref:m=>{m&&(a.value[u]=m)},class:["code-group-nav-tab",{active:d}],"aria-pressed":d,"aria-expanded":d,onClick:()=>{t.value=u},onKeydown:m=>l(m,u)},p.props.title)})),c]))}}});const N2='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',U2='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',z2='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';const eo={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},sc={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},H2=(e,n,t)=>{const a=document.createElement(e);return Sa(n)&&on(n).forEach(s=>{if(s.indexOf("data"))a[s]=n[s];else{const o=s.replace("data","");a.dataset[o]=n[s]}}),t&&t.forEach(s=>{a.appendChild(s)}),a},El=e=>({...eo,...e,jsLib:Array.from(new Set([...eo.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...eo.cssLib||[],...e.cssLib||[]]))}),Ct=(e,n)=>{if(e[n]!==void 0)return e[n];const t=new Promise(a=>{var o;const s=document.createElement("script");s.src=n,(o=document.querySelector("body"))==null||o.appendChild(s),s.onload=()=>{a()}});return e[n]=t,t},j2=(e,n)=>{if(n.css&&Array.from(e.childNodes).every(t=>t.nodeName!=="STYLE")){const t=H2("style",{innerHTML:n.css});e.appendChild(t)}},q2=(e,n,t)=>{const a=t.getScript();if(a&&Array.from(n.childNodes).every(s=>s.nodeName!=="SCRIPT")){const s=document.createElement("script");s.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${a}}`)),n.appendChild(s)}},W2=e=>{const n=on(e),t={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(a=>{const s=n.filter(o=>sc[a].types.includes(o));if(s.length){const o=s[0];t[a]=[e[o].replace(/^\n|\n$/g,""),sc[a].map[o]||o]}}),t.isLegal=(!t.html.length||t.html[1]==="none")&&(!t.js.length||t.js[1]==="none")&&(!t.css.length||t.css[1]==="none"),t},Pp=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Ip=e=>`<div id="app">
${Pp(e)}
</div>`,K2=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,Y2=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Sp=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,X2=(e,n)=>{const t=El(n),a=e.js[0]||"";return{...t,html:Pp(e.html[0]||""),js:a,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var s;return t.useBabel?((s=window.Babel.transform(a,{presets:["es2015"]}))==null?void 0:s.code)||"":a}}},Z2=/<template>([\s\S]+)<\/template>/u,J2=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,Q2=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,ef=(e,n)=>{const t=El(n),a=e.html[0]||"",s=Z2.exec(a),o=J2.exec(a),l=Q2.exec(a),c=s?s[1].replace(/^\n|\n$/g,""):"",[r="",p=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[u="",d=""]=l?[l[4].replace(/^\n|\n$/g,""),l[3]]:[],m=p===""&&(d===""||d==="css");return{...t,html:Ip(c),js:Y2(r),css:u,isLegal:m,jsLib:[t.vue,...t.jsLib],getScript:()=>{var g,b;const f=n.useBabel?((b=(g=window.Babel)==null?void 0:g.transform(r,{presets:["es2015"]}))==null?void 0:b.code)||"":r.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Sp(f)};appOptions.template=\`${c.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},nf=(e,n)=>{const t=El(n);return{...t,html:Ip(""),js:K2(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[t.react,t.reactDOM,...t.jsLib],jsx:!0,getScript:()=>{var s,o;const a=((o=(s=window.Babel)==null?void 0:s.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Sp(a)}))`}}},Ot={},tf=e=>Promise.all([Ct(Ot,e.babel),Ct(Ot,e.react),Ct(Ot,e.reactDOM)]),af=e=>{const n=[Ct(Ot,e.vue)];return e.useBabel&&n.push(Ct(Ot,e.babel)),Promise.all(n)},sf=e=>e.useBabel?Ct(Ot,e.babel):Promise.resolve();var of=F({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:n}){const[t,a]=To(!1),s=Ne(),o=Ne(),l=q("0"),c=q(!1),r=w(()=>JSON.parse(e.config?Wi(e.config):"{}")),p=w(()=>{const g=JSON.parse(Wi(e.code));return W2(g)}),u=w(()=>e.type==="react"?nf(p.value,r.value):e.type==="vue"?ef(p.value,r.value):X2(p.value,r.value)),d=w(()=>u.value.isLegal),m=(g=!1)=>{const b=s.value.attachShadow({mode:"open"}),B=document.createElement("div");B.classList.add("code-demo-app"),b.appendChild(B),d.value?(g&&(B.innerHTML=u.value.html),j2(b,u.value),q2(e.id,b,u.value),l.value="0"):l.value="auto",c.value=!0},f=()=>{switch(e.type){case"react":return tf(u.value).then(()=>m());case"vue":return af(u.value).then(()=>m());default:return sf(u.value).then(()=>m(!0))}};return ue(()=>{setTimeout(()=>{f()},800)}),()=>{var g;return i("div",{class:"vp-code-demo",id:e.id},[i("div",{class:"vp-code-demo-header"},[u.value.isLegal?i("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",t.value?"down":"end"],onClick:()=>{l.value=t.value?"0":`${o.value.clientHeight+13.8}px`,a()}}):null,e.title?i("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,u.value.isLegal&&u.value.jsfiddle!==!1?i("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[i("input",{type:"hidden",name:"html",value:u.value.html}),i("input",{type:"hidden",name:"js",value:u.value.js}),i("input",{type:"hidden",name:"css",value:u.value.css}),i("input",{type:"hidden",name:"wrap",value:"1"}),i("input",{type:"hidden",name:"panel_js",value:"3"}),i("input",{type:"hidden",name:"resources",value:[...u.value.cssLib,...u.value.jsLib].join(",")}),i("button",{type:"submit",class:"jsfiddle-button",innerHTML:U2,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!u.value.isLegal||u.value.codepen!==!1?i("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[i("input",{type:"hidden",name:"data",value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(";"),css_external:u.value.cssLib.join(";"),layout:u.value.codepenLayout,html_pre_processor:p.value?p.value.html[1]:"none",js_pre_processor:p.value?p.value.js[1]:u.value.jsx?"babel":"none",css_pre_processor:p.value?p.value.css[1]:"none",editors:u.value.codepenEditors})}),i("button",{type:"submit",innerHTML:N2,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),c.value?null:i(dl,{class:"vp-code-demo-loading"}),i("div",{ref:s,class:"vp-code-demo-display",style:{display:d.value&&c.value?"block":"none"}}),i("div",{class:"vp-code-demo-code-wrapper",style:{height:l.value}},i("div",{ref:o,class:"vp-code-demo-codes"},(g=n.default)==null?void 0:g.call(n)))])}}});var lf=F({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(e){return()=>[i("div",{class:"vp-playground"},[i("div",{class:"vp-playground-header"},[e.title?i("div",{class:"vp-playground-title"},decodeURIComponent(e.title)):null,i("div",{class:"vp-playground-actions"},[i("a",{class:"vp-playground-action",href:decodeURIComponent(e.link),target:"_blank",innerHTML:z2})])]),i("div",{class:"vp-playground-container"},i("iframe",{src:decodeURIComponent(e.link)}))])]}});const no=gt("VUEPRESS_TAB_STORE",{});var cf=F({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:n}){const t=q(e.active),a=Ne([]),s=()=>{e.tabId&&(no.value[e.tabId]=e.data[t.value].id)},o=(p=t.value)=>{t.value=p<a.value.length-1?p+1:0,a.value[t.value].focus()},l=(p=t.value)=>{t.value=p>0?p-1:a.value.length-1,a.value[t.value].focus()},c=(p,u)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),t.value=u):p.key==="ArrowRight"?(p.preventDefault(),o()):p.key==="ArrowLeft"&&(p.preventDefault(),l()),s()},r=()=>{if(e.tabId){const p=e.data.findIndex(({id:u})=>no.value[e.tabId]===u);if(p!==-1)return p}return e.active};return ue(()=>{t.value=r(),re(()=>no.value[e.tabId],(p,u)=>{if(e.tabId&&p!==u){const d=e.data.findIndex(({id:m})=>m===p);d!==-1&&(t.value=d)}})}),()=>e.data.length?i("div",{class:"vp-tabs"},[i("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:p},u)=>{const d=u===t.value;return i("button",{type:"button",ref:m=>{m&&(a.value[u]=m)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${e.id}-${u}`,"aria-selected":d,onClick:()=>{t.value=u,s()},onKeydown:m=>c(m,u)},n[`title${u}`]({value:p,isActive:d}))})),e.data.map(({id:p},u)=>{const d=u===t.value;return i("div",{class:["vp-tab",{active:d}],id:`tab-${e.id}-${u}`,role:"tabpanel","aria-expanded":d},n[`tab${u}`]({value:p,isActive:d}))})]):null}});const rf=Je({enhance:({app:e})=>{e.component("VPCard",Dp),e.component("CodeTabs",G2),bn("CodeGroup",e)||e.component("CodeGroup",$2),bn("CodeGroupItem",e)||e.component("CodeGroupItem",Tp),e.component("CodeDemo",of),e.component("Playground",lf),e.component("Tabs",cf)},setup:()=>{}});let pf={};const Cp=Symbol(""),uf=()=>pe(Cp),df=e=>{e.provide(Cp,pf)};const vf=".theme-hope-content :not(a) > img:not([no-view])",mf={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},ff=800,hf='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',gf=e=>ge(e)?Array.from(document.querySelectorAll(e)):e.map(n=>Array.from(document.querySelectorAll(n))).flat(),Op=e=>new Promise((n,t)=>{e.complete?n({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>n(Op(e)),e.onerror=a=>t(a))}),kf=()=>{const{isSupported:e,toggle:n}=kl(),t=uf(),a=La(mf),s=le();let o;const l=r=>{r.on("uiRegister",()=>{e&&r.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{n()}}),r.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(p,u)=>{p.setAttribute("download",""),p.setAttribute("target","_blank"),p.setAttribute("rel","noopener"),u.on("change",()=>{p.setAttribute("href",u.currSlide.data.src)})}}),r.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(p,u)=>{const d=[];let m=-1;for(let f=0;f<u.getNumItems();f++){const g=document.createElement("div");g.className="photo-swipe-bullet",g.onclick=b=>{u.goTo(d.indexOf(b.target))},d.push(g),p.appendChild(g)}u.on("change",()=>{m>=0&&d[m].classList.remove("active"),d[u.currIndex].classList.add("active"),m=u.currIndex})}})})},c=()=>Promise.all([v(()=>import("./photoswipe.esm-1464cdb9.js"),[]),et().then(()=>new Promise(r=>setTimeout(r,ff)).then(()=>gf(vf)))]).then(([{default:r},p])=>{const u=p.map(d=>({html:hf,element:d,msrc:d.src}));p.forEach((d,m)=>{const f=()=>{o=new r({preloaderDelay:0,showHideAnimationType:"zoom",...a.value,...t,dataSource:u,index:m,closeOnVerticalDrag:!0,wheelToZoom:!1}),l(o),o.addFilter("thumbEl",()=>d),o.addFilter("placeholderSrc",()=>d.src),o.init()};d.style.cursor="zoom-in",d.addEventListener("click",()=>{f()}),d.addEventListener("keypress",({key:g})=>{g==="Enter"&&f()})}),p.forEach((d,m)=>{Op(d).then(f=>{u.splice(m,1,f),o==null||o.refreshSlideContent(m)})})});ue(()=>{Fe("wheel",()=>{o==null||o.close()}),re(()=>s.value.path,c,{immediate:!0})})};var _f=Je({enhance:({app:e})=>{df(e)},setup:()=>{kf()}});function bf(e){return{all:e=e||new Map,on:function(n,t){var a=e.get(n);a?a.push(t):e.set(n,[t])},off:function(n,t){var a=e.get(n);a&&(t?a.splice(a.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var a=e.get(n);a&&a.slice().map(function(s){s(t)}),(a=e.get("*"))&&a.slice().map(function(s){s(n,t)})}}}const Ef=Symbol(""),yf=()=>{navigator.serviceWorker.getRegistration().then(e=>{e&&e.active&&(e==null||e.addEventListener("updatefound",()=>{window.location.reload(!0)}))})},wf=async(e,n={},t=!0)=>{const{register:a}=await v(()=>import("./index-e32a7948.js"),[]);a(e,{ready(s){var o;t&&console.info("[Service Worker]: active"),(o=n.ready)==null||o.call(n,s)},registered(s){var o;t&&console.log("[Service Worker]: registered"),(o=n.registered)==null||o.call(n,s)},cached(s){var o;t&&console.log("[Service Worker]: cached"),(o=n.cached)==null||o.call(n,s)},async updatefound(s){var o;await navigator.serviceWorker.getRegistration()&&(t&&console.log("[Service Worker]: update found"),(o=n.updatefound)==null||o.call(n,s))},updated(s){var o;t&&console.log("[Service Worker]: updated"),(o=n.updated)==null||o.call(n,s)},offline(){var s;t&&console.log("[Service Worker]: offline"),(s=n.offline)==null||s.call(n)},error(s){var o;t&&console.error("[Service Worker]: ",s),(o=n.error)==null||o.call(n,s)}})},Af=async e=>wf(we("service-worker.js"),{ready(n){e.emit("ready",n)},registered(n){e.emit("registered",n)},cached(n){e.emit("cached",n)},updatefound(n){e.emit("updatefound",n)},updated(n){const t="service-worker-version",a=Number(localStorage.getItem(t)||0);localStorage.setItem(t,(a+1).toString()),localStorage.removeItem("manifest"),e.emit("updated",n)},offline(){e.emit("offline")},error(n){e.emit("error",n)}}),Bf=()=>{const e=bf();an(Ef,e),ue(async()=>{var t;let n=!1;(t=navigator.serviceWorker)!=null&&t.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{n||(n=!0,window.location.reload())}),yf(),await Af(e)})},Df=Je({setup:()=>{Bf()},rootComponents:[]}),Lp=()=>{const e=le();return w(()=>e.value.readingTime??null)},Po=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},xp=(e,n)=>{const{minutes:t,words:a}=e,{less1Minute:s,word:o,time:l}=n;return{time:t<1?s:l.replace("$time",Math.round(t).toString()),words:o.replace("$word",a.toString())}},oc={words:"",time:""},Rp=()=>Po?La(Po):w(()=>null),Tf=()=>{if(typeof Po>"u")return w(()=>oc);const e=Lp(),n=Rp();return w(()=>e.value&&n.value?xp(e.value,n.value):oc)},tt=()=>yp(),ie=()=>y2(),Jt=()=>w(()=>!!tt().value.pure);var to=F({name:"EmptyComponent",setup:()=>()=>null});const Pf="719px",If="1440px",Sf="false",yl={mobileBreakPoint:Pf,pcBreakPoint:If,enableThemeColor:Sf,"vp-action":"_vp-action_10kx9_20","vp-hero-info-wrapper":"_vp-hero-info-wrapper_10kx9_24","vp-hero-infos":"_vp-hero-infos_10kx9_28","search-pro-box":"_search-pro-box_10kx9_35","vp-sidebar":"_vp-sidebar_10kx9_39","vp-blogger-info":"_vp-blogger-info_10kx9_43","vp-article-type":"_vp-article-type_10kx9_47"},wl={"/Fontend/":[],"/language/":[{text:"c++",prefix:"cpp/",collapsible:!0,icon:"c",children:["",{text:"Base Guide[基础概念]",prefix:"BaseGuide_基础概念_/",collapsible:!0,children:["/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/0-where%20use%20a%20semicolon.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/1-function%20Declaration_%20Definition.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/2-Variable%20Declaration_%20Definition.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/3-Forward%20declaration.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/4-function%20brace%20initialization.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/4-VariablePassbyValue%20_%20Reference.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/5-copymode.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/7-i__and__i.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/8-operator.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/9-Big%20Four.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/10-Functor.html",{text:"Ptr[指针]",prefix:"ptr_指针_/",collapsible:!0,children:["/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/0insidePtrgy.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/1-insidePtr.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/2-constModifierPtr.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/3-Ptr-Array.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/5-Ptr-Enum.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/4-Ptr-Struct.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/6-Ptr-Function.html","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/7-Ptr-this.html"]}]},{text:"Designer[设计模式]",prefix:"designer_设计模式_/",collapsible:!0,children:["/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/1-Sington.html","/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/2-SimpleFactory.html","/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/3-FactoryPattern.html"]},{text:"Keywords[关键字]",prefix:"keywords_关键字_/",collapsible:!0,children:["/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/1-Keywords%20continue_%20break.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/2-Keywords%20inline.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/3-Keywords%20new-delete-malloc-free.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/4-Modifiers-%20public-protected-private.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/5-Diamond%20Inheritance.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/6-Keywords%20friend.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/7-Modifiers-Constants-Static.html","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/8-Keywords%20sizeof.html"]},{text:"New[新特性]",prefix:"new_新特性_/",collapsible:!0,children:["/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/1-Namespace%20scope.html","/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/2-Lvalues%20and%20Rvalues.html","/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/3-lambda.html"]},{text:"Stl[标准模板]",prefix:"stl_标准模板_/",collapsible:!0,children:["/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/1-template.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/2-stl.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/3-vector.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/4-deque.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/5-fstream.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/6-stack.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/7-queue.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/8-List.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/9-Set.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/10-Pair.html","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/11-Map.html"]}]},{text:"lua",prefix:"lua/",collapsible:!0,icon:"l",children:[""]},{text:"Markdown",prefix:"markdown/",collapsible:!0,icon:"fab fa-markdown",children:["","demo",{text:"Emoji 列表",prefix:"emoji/",collapsible:!0,icon:"face-smile",children:["","people","place","object","symbol","nature"]}]}],"/tools/":[{text:"visual Studio",prefix:"visualstudio/",collapsible:!0,icon:"code",children:["","1-classtool"]},{text:"VSCode",prefix:"vscode/",collapsible:!0,icon:"code",children:["","1-errors","2-fix-todo-highlight-links"]},{text:"VuePress",prefix:"vuepress/",collapsible:!0,icon:"fab fa-vuejs",children:["","vuepress-add-comp"]},{text:"Rider",prefix:"rider/",collapsible:!0,icon:"r",children:["","1-errors","2-poddoc"]},{text:"Git",prefix:"git/",collapsible:!0,icon:"code-compare",children:["","1-gitignore","2-repo-tool","3-commit-message","4-submodule","5-path-problem","6-rebase-merge"]},{text:"Github",prefix:"github/",collapsible:!0,icon:"fab fa-github",children:["","1-download-huge-project-from-github","2-switch-multiple-github-accounts","3-sync-a-fork","4-ssh-push-failed","5-autoaction"]}],"/unreal/":["",{text:"Core[核心]",prefix:"core_核心_/",collapsible:!0,children:["/unreal/core_%E6%A0%B8%E5%BF%83_/1-Gameplay.html","/unreal/core_%E6%A0%B8%E5%BF%83_/2-GameMode.html","/unreal/core_%E6%A0%B8%E5%BF%83_/3-Singleton.html","/unreal/core_%E6%A0%B8%E5%BF%83_/4-Subsystem.html","/unreal/core_%E6%A0%B8%E5%BF%83_/4.1-SubsystemUse.html","/unreal/core_%E6%A0%B8%E5%BF%83_/4.2-EnhancedInput.html","/unreal/core_%E6%A0%B8%E5%BF%83_/5-Interface.html","/unreal/core_%E6%A0%B8%E5%BF%83_/6-Delegate.html","/unreal/core_%E6%A0%B8%E5%BF%83_/6.1-DelegateUse.html","/unreal/core_%E6%A0%B8%E5%BF%83_/7-GameFeature.html","/unreal/core_%E6%A0%B8%E5%BF%83_/8-GAS.html","/unreal/core_%E6%A0%B8%E5%BF%83_/9-Spectating.html","/unreal/core_%E6%A0%B8%E5%BF%83_/10-GameSave.html","/unreal/core_%E6%A0%B8%E5%BF%83_/10.1-JsonTOString.html"]},{text:"Error[错误]",prefix:"error_错误_/",collapsible:!0,children:["/unreal/error_%E9%94%99%E8%AF%AF_/01Build%20Fail.html","/unreal/error_%E9%94%99%E8%AF%AF_/02ClassRedirects.html","/unreal/error_%E9%94%99%E8%AF%AF_/03CreateSessionError.html","/unreal/error_%E9%94%99%E8%AF%AF_/04EncodeError.html","/unreal/error_%E9%94%99%E8%AF%AF_/05GameFeatureError.html","/unreal/error_%E9%94%99%E8%AF%AF_/06Mouse.html","/unreal/error_%E9%94%99%E8%AF%AF_/07SubsystemError.html","/unreal/error_%E9%94%99%E8%AF%AF_/08TObjectPtrError.html","/unreal/error_%E9%94%99%E8%AF%AF_/09SkeletalMeshAnimError.html"]},{text:"Exp[经验]",prefix:"exp_经验_/",collapsible:!0,children:["/unreal/exp_%E7%BB%8F%E9%AA%8C_/1-GoodJob.html","/unreal/exp_%E7%BB%8F%E9%AA%8C_/2-Blueprint2CPP.html","/unreal/exp_%E7%BB%8F%E9%AA%8C_/3-Blueprint2CPP-1.html","/unreal/exp_%E7%BB%8F%E9%AA%8C_/4-BPShowCVariables.html","/unreal/exp_%E7%BB%8F%E9%AA%8C_/5-EventFunctionMacro.html"]},{text:"Function[函数]",prefix:"function_函数_/",collapsible:!0,children:["/unreal/function_%E5%87%BD%E6%95%B0_/1-XXXAPI.html","/unreal/function_%E5%87%BD%E6%95%B0_/2-GENERATED_BODY.html","/unreal/function_%E5%87%BD%E6%95%B0_/3-EditorUsing.html","/unreal/function_%E5%87%BD%E6%95%B0_/4-UPARAM.html","/unreal/function_%E5%87%BD%E6%95%B0_/5-UPROPERTY.html","/unreal/function_%E5%87%BD%E6%95%B0_/6-UEnum.html","/unreal/function_%E5%87%BD%E6%95%B0_/7-UStruct.html","/unreal/function_%E5%87%BD%E6%95%B0_/8-TMap.html","/unreal/function_%E5%87%BD%E6%95%B0_/9-Iterator.html","/unreal/function_%E5%87%BD%E6%95%B0_/10-PTRINUE.html","/unreal/function_%E5%87%BD%E6%95%B0_/11-Getactorofclass.html","/unreal/function_%E5%87%BD%E6%95%B0_/12-CE_KE.html","/unreal/function_%E5%87%BD%E6%95%B0_/13-BeginPlay.html","/unreal/function_%E5%87%BD%E6%95%B0_/14-SpawnActorfromClass.html","/unreal/function_%E5%87%BD%E6%95%B0_/15-LoadAsset.html"]},{text:"Lyra[天秤座]",prefix:"lyra_天秤座_/",collapsible:!0,children:["/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/1-lyra.html","/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/2-ImproveCommonUI.html","/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/3-lyraSubtitle.html"]},{text:"Network[网络]",prefix:"network_网络_/",collapsible:!0,children:["/unreal/network_%E7%BD%91%E7%BB%9C_/1-Data.html","/unreal/network_%E7%BD%91%E7%BB%9C_/2-HTTP.html","/unreal/network_%E7%BD%91%E7%BB%9C_/3-GamePlayNetWork.html","/unreal/network_%E7%BD%91%E7%BB%9C_/4-GamePlayNetWorkUse.html"]},{text:"Shader[着色器]",prefix:"shader_着色器_/",collapsible:!0,children:["/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/1-HPBar.html","/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/2-BRDF.html","/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/3-%E5%9B%BE%E7%89%87%E6%8A%95%E5%BD%B1.html"]},{text:"Ui[界面]",prefix:"ui_界面_/",collapsible:!0,children:[{text:"Commonui[ui框架]",prefix:"commonui_ui框架_/",collapsible:!0,children:["/unreal/ui_%E7%95%8C%E9%9D%A2_/commonui_ui%E6%A1%86%E6%9E%B6_/1-CommonUI.html"]},{text:"Slate[ui框架]",prefix:"slate_ui框架_/",collapsible:!0,children:["/unreal/ui_%E7%95%8C%E9%9D%A2_/slate_ui%E6%A1%86%E6%9E%B6_/1-editortoolPlugin.html"]},{text:"Umg[ui框架]",prefix:"umg_ui框架_/",collapsible:!0,children:["/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/1-editortoolBP.html","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/2-editortoolBP2.html","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/NameSlot.html","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/SafeZone.html"]}]}],"/3Dtools/":[],"/algorithm/":["","01Swap",{text:"Sort[排序]",prefix:"sort_排序_/",collapsible:!0,children:["/algorithm/sort_%E6%8E%92%E5%BA%8F_/01selectionSort1.html","/algorithm/sort_%E6%8E%92%E5%BA%8F_/02bubbleSort.html"]}]},Fp=e=>{const{icon:n="",color:t,size:a}=e,s={};return t&&(s.color=t),a&&(s.height=Number.isNaN(Number(a))?a:`${a}px`),ht(n)?i("img",{class:"icon",src:n,"no-view":"",style:s}):Ss(n)?i("img",{class:"icon",src:we(n),"no-view":"",style:s}):i(tn("FontIcon"),e)};Fp.displayName="HopeIcon";var Ke=Fp,be=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(be||{}),Vp=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(Vp||{});const Lt=(e,n,t=!1)=>{let a=Ht(e,Qr(encodeURI(n)));a.name==="404"&&(a=Ht(e,n));const{fullPath:s,meta:o,name:l}=a;return{text:!t&&o[be.shortTitle]?o[be.shortTitle]:o[be.title]||n,link:l==="404"?n:s,...o[be.icon]?{icon:o[be.icon]}:{}}},Ra=()=>{const e=He(),n=In();return t=>{if(t)if(Ss(t))n.path!==t&&e.push(t);else if(ht(t)||yr(t))window&&window.open(t);else{const a=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${a}/${encodeURI(t)}`)}}},Mp=()=>{const e=ie(),n=Ee();return w(()=>{const{author:t}=n.value;return t?ya(t):t===!1?[]:ya(e.value.author,!1)})},Cf=()=>{const e=Ee();return w(()=>np(e.value.category).map(n=>{var t,a;return{name:n,path:((a=(t=pe(Symbol.for("categoryMap")))==null?void 0:t.value.map[n])==null?void 0:a.path)||""}}))},Of=()=>{const e=Ee();return w(()=>tp(e.value.tag).map(n=>{var t,a;return{name:n,path:((a=(t=pe(Symbol.for("tagMap")))==null?void 0:t.value.map[n])==null?void 0:a.path)||""}}))},Lf=()=>{const e=Ee(),n=le();return w(()=>{const t=vl(e.value.date);if(t)return t;const{createdTime:a}=n.value.git||{};return a?new Date(a):null})},xf=()=>{const e=ie(),n=le(),t=Ee(),a=Mp(),s=Cf(),o=Of(),l=Lf(),c=Lp(),r=Tf(),p=w(()=>({author:a.value,category:s.value,date:l.value,localizedDate:n.value.localizedDate,tag:o.value,isOriginal:t.value.isOriginal||!1,readingTime:c.value,readingTimeLocale:r.value,pageview:"pageview"in t.value?t.value.pageview:!0})),u=w(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:p,items:u}},{mobileBreakPoint:Rf,pcBreakPoint:Ff}=yl,lc=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Fa=()=>{const e=q(!1),n=q(!1),t=()=>{e.value=window.innerWidth<=(lc(Rf)??719),n.value=window.innerWidth>=(lc(Ff)??1440)};return ue(()=>{t(),Fe("resize",t,!1),Fe("orientationchange",t,!1)}),{isMobile:e,isPC:n}},Gp=Symbol(""),Va=()=>{const e=pe(Gp);if(!e)throw new Error("useDarkmode() is called without provider.");return e},Vf=e=>{const n=tt(),t=qm(),a=gt("vuepress-theme-hope-scheme","auto"),s=w(()=>n.value.darkmode||"switch"),o=w(()=>{const c=s.value;return c==="disable"?!1:c==="enable"?!0:c==="auto"?t.value:c==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&t.value}),l=w(()=>{const c=s.value;return c==="switch"||c==="toggle"});e.provide(Gp,{canToggle:l,config:s,isDarkmode:o,status:a}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},Mf=()=>{const{isDarkmode:e}=Va(),n=(t=e.value)=>document.documentElement.setAttribute("data-theme",t?"dark":"light");ue(()=>{re(e,n,{immediate:!0})})};var Xe=F({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:n,emit:t,slots:a}){const s=In(),o=Sr(),l=Yt(e,"config"),c=w(()=>ht(l.value.link)),r=w(()=>yr(l.value.link)||O1(l.value.link)),p=w(()=>r.value?void 0:l.value.target||(c.value?"_blank":void 0)),u=w(()=>p.value==="_blank"),d=w(()=>!c.value&&!r.value&&!u.value),m=w(()=>r.value?void 0:l.value.rel||(u.value?"noopener noreferrer":void 0)),f=w(()=>l.value.ariaLabel||l.value.text),g=w(()=>{if(e.exact)return!1;const B=on(o.value.locales);return B.length?B.every(y=>y!==l.value.link):l.value.link!=="/"}),b=w(()=>d.value?l.value.activeMatch?new RegExp(l.value.activeMatch).test(s.path):g.value?zt(s.path,l.value.link):s.path===l.value.link:!1);return()=>{const{before:B,after:y,default:T}=a,{text:E,icon:D,link:R}=l.value;return d.value?i(Me,{to:R,"aria-label":f.value,...n,class:["nav-link",{active:b.value},n.class],onFocusout:()=>t("focusout")},()=>T?T():[B?B():i(Ke,{icon:D}),E,y==null?void 0:y()]):i("a",{href:R,rel:m.value,target:p.value,"aria-label":f.value,...n,class:["nav-link",n.class],onFocusout:()=>t("focusout")},T?T():[B?B():i(Ke,{icon:D}),E,e.noExternalLinkIcon?null:i(bp),y==null?void 0:y()])}}});const jt=(e,n,t=!1)=>"activeMatch"in n?new RegExp(n.activeMatch).test(e.path):fl(e,n.link)?!0:n.children&&!t?n.children.some(a=>jt(e,a)):!1,$p=(e,n)=>n.type==="group"?n.children.some(t=>t.type==="group"?$p(e,t):t.type==="page"&&jt(e,t,!0))||"prefix"in n&&fl(e,n.prefix):!1,Np=(e,n)=>ge(e.link)?i(Xe,{...n,config:e}):i("p",n,[i(Ke,{icon:e.icon}),e.text]),Up=e=>{const n=In();return e?i("ul",{class:"vp-sidebar-sub-headers"},e.map(t=>{const a=jt(n,t,!0);return i("li",{class:"vp-sidebar-sub-header"},[Np(t,{class:["vp-sidebar-link","vp-heading",{active:a}]}),Up(t.children)])})):null},ao=(e="",n="")=>Ss(n)?n:`${I1(e)}${n}`,Gf=(e,n)=>{const t=le();return{type:"heading",text:e.title,link:`${t.value.path}#${e.slug}`,children:Al(e.children,n)}},Al=(e,n)=>n>0?e.map(t=>Gf(t,n-1)):[],zp=e=>{const n=le();return Al(n.value.headers,e)},Io=(e,n,t="")=>{const a=He(),s=le(),o=(l,c=t)=>{var p;const r=ge(l)?Lt(a,ao(c,l)):l.link?{...l,...ba(l.link)?{}:{link:Lt(a,ao(c,l.link)).link}}:l;if("children"in r){const u=ao(c,r.prefix),d=r.children==="structure"?wl[u]:r.children;return{type:"group",...r,prefix:u,children:d.map(m=>o(m,u))}}return{type:"page",...r,children:r.link===s.value.path?Al(((p=s.value.headers[0])==null?void 0:p.level)===1?s.value.headers[0].children:s.value.headers,n):[]}};return e.map(l=>o(l))},$f=(e,n)=>{const t=le(),a=on(e).sort((s,o)=>o.length-s.length);for(const s of a)if(zt(decodeURI(t.value.path),s)){const o=e[s];return o?Io(o==="structure"?wl[s]:o==="heading"?zp(n):o,n,s):[]}return console.warn(`${t.value.path} is missing sidebar config.`),[]},Nf=(e,n)=>{const t=wn();return e===!1?[]:e==="heading"?zp(n):e==="structure"?Io(wl[t.value],n,t.value):Q(e)?Io(e,n):Sa(e)?$f(e,n):[]},Hp=Symbol(""),Uf=()=>{const e=Ee(),n=ie(),t=le(),a=w(()=>e.value.home?!1:e.value.sidebar??n.value.sidebar??"structure"),s=w(()=>e.value.headerDepth??n.value.headerDepth??2),o=hl(()=>[a.value,s.value,t.value.path,null],()=>Nf(a.value,s.value));an(Hp,o)},Bl=()=>{const e=pe(Hp);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var zf=F({name:"PageFooter",setup(){const e=Ee(),n=ie(),t=Mp(),a=w(()=>{const{copyright:l,footer:c}=e.value;return c!==!1&&!!(l||c||n.value.displayFooter)}),s=w(()=>{const{footer:l}=e.value;return l===!1?!1:ge(l)?l:n.value.footer||""}),o=w(()=>"copyright"in e.value?e.value.copyright:"copyright"in n.value?n.value.copyright:t.value.length?`Copyright © ${new Date().getFullYear()} ${t.value[0].name}`:!1);return()=>a.value?i("footer",{class:"vp-footer-wrapper"},[s.value?i("div",{class:"vp-footer",innerHTML:s.value}):null,o.value?i("div",{class:"vp-copyright",innerHTML:o.value}):null]):null}}),Hf=F({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:n}){const t=le(),a=Yt(e,"config"),s=w(()=>a.value.ariaLabel||a.value.text),o=q(!1);re(()=>t.value.path,()=>{o.value=!1});const l=c=>{c.detail===0&&(o.value=!o.value)};return()=>{var c;return i("div",{class:["dropdown-wrapper",{open:o.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":s.value,onClick:l},[((c=n.title)==null?void 0:c.call(n))||i("span",{class:"title"},[i(Ke,{icon:a.value.icon}),e.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},a.value.children.map((r,p)=>{const u=p===a.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in r?[i("h4",{class:"dropdown-subtitle"},r.link?i(Xe,{config:r,onFocusout:()=>{r.children.length===0&&u&&(o.value=!1)}}):i("span",r.text)),i("ul",{class:"dropdown-subitem-wrapper"},r.children.map((d,m)=>i("li",{class:"dropdown-subitem"},i(Xe,{config:d,onFocusout:()=>{m===r.children.length-1&&u&&(o.value=!1)}}))))]:i(Xe,{config:r,onFocusout:()=>{u&&(o.value=!1)}}))}))])])}}});const jp=(e,n,t="")=>ge(n)?Lt(e,`${t}${n}`):"children"in n?{...n,...n.link&&!ba(n.link)?Lt(e,`${t}${n.link}`):{},children:n.children.map(a=>jp(e,a,`${t}${n.prefix||""}`))}:{...n,link:ba(n.link)?n.link:Lt(e,`${t}${n.link}`).link},qp=()=>{const e=ie(),n=He(),t=()=>(e.value.navbar||[]).map(a=>jp(n,a));return hl(()=>e.value.navbar,()=>t())},jf=()=>{const e=ie(),n=w(()=>e.value.repo||null),t=w(()=>n.value?bm(n.value):null),a=w(()=>n.value?sp(n.value):null),s=w(()=>t.value?e.value.repoLabel??(a.value===null?"Source":a.value):null);return w(()=>!t.value||!s.value||e.value.repoDisplay===!1?null:{type:a.value||"Source",label:s.value,link:t.value})};var qf=F({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const n=le(),t=Yt(e,"config"),a=w(()=>t.value.ariaLabel||t.value.text),s=q(!1);re(()=>n.value.path,()=>{s.value=!1});const o=(l,c)=>c[c.length-1]===l;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:s.value}],"aria-label":a.value,onClick:()=>{s.value=!s.value}},[i("span",{class:"title"},[i(Ke,{icon:t.value.icon}),e.config.text]),i("span",{class:["arrow",s.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!s.value}]},t.value.children.map(l=>i("li",{class:"dropdown-item"},"children"in l?[i("h4",{class:"dropdown-subtitle"},l.link?i(Xe,{config:l,onFocusout:()=>{o(l,t.value.children)&&l.children.length===0&&(s.value=!1)}}):i("span",l.text)),i("ul",{class:"dropdown-subitem-wrapper"},l.children.map(c=>i("li",{class:"dropdown-subitem"},i(Xe,{config:c,onFocusout:()=>{o(c,l.children)&&o(l,t.value.children)&&(s.value=!1)}}))))]:i(Xe,{config:l,onFocusout:()=>{o(l,t.value.children)&&(s.value=!1)}}))))]}}),Wf=F({name:"NavScreenLinks",setup(){const e=qp();return()=>e.value.length?i("nav",{class:"nav-screen-links"},e.value.map(n=>i("div",{class:"navbar-links-item"},"children"in n?i(qf,{config:n}):i(Xe,{config:n})))):null}});const Wp=()=>i(de,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Wp.displayName="DarkIcon";const Kp=()=>i(de,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Kp.displayName="LightIcon";const Yp=()=>i(de,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Yp.displayName="AutoIcon";const Xp=()=>i(de,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Xp.displayName="EnterFullScreenIcon";const Zp=()=>i(de,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Zp.displayName="CancelFullScreenIcon";const Jp=()=>i(de,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Jp.displayName="OutlookIcon";var Qp=F({name:"AppearanceSwitch",setup(){const{config:e,status:n}=Va(),t=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"};return()=>i("button",{type:"button",id:"appearance-switch",onClick:()=>t()},[i(Yp,{style:{display:n.value==="auto"?"block":"none"}}),i(Wp,{style:{display:n.value==="dark"?"block":"none"}}),i(Kp,{style:{display:n.value==="light"?"block":"none"}})])}}),Kf=F({name:"AppearanceMode",setup(){const e=ie(),{canToggle:n}=Va(),t=w(()=>e.value.outlookLocales.darkmode);return()=>n.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},t.value),i(Qp)]):null}});const so="VUEPRESS_THEME_COLOR";var Yf=F({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const n=(t="")=>{const a=document.documentElement.classList,s=on(e.themeColor);if(!t){localStorage.removeItem(so),a.remove(...s);return}a.remove(...s.filter(o=>o!==t)),a.add(t),localStorage.setItem(so,t)};return ue(()=>{const t=localStorage.getItem(so);t&&n(t)}),()=>i("ul",{id:"theme-color-picker"},[i("li",i("span",{class:"theme-color",onClick:()=>n()})),Oa(e.themeColor).map(([t,a])=>i("li",i("span",{style:{background:a},onClick:()=>n(t)})))])}});const xt=yl.enableThemeColor==="true",Xf=xt?hm(Oa(yl).filter(([e])=>e.startsWith("theme-"))):{};var Zf=F({name:"ThemeColor",setup(){const e=ie(),n=w(()=>e.value.outlookLocales.themeColor);return()=>xt?i("div",{class:"theme-color-wrapper"},[i("label",{class:"theme-color-title",for:"theme-color-picker"},n.value),i(Yf,{themeColor:Xf})]):null}}),eu=F({name:"ToggleFullScreenButton",setup(){const e=ie(),{isSupported:n,isFullscreen:t,toggle:a}=kl(),s=w(()=>e.value.outlookLocales.fullscreen);return()=>n?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},s.value),i("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>a()},t.value?i(Zp):i(Xp))]):null}}),nu=F({name:"OutlookSettings",setup(){const e=tt(),n=Jt(),t=w(()=>!n.value&&e.value.fullscreen);return()=>i(Ds,()=>[xt?i(Zf):null,i(Kf),t.value?i(eu):null])}}),Jf=F({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:n,slots:t}){const a=le(),{isMobile:s}=Fa(),o=Ne(),l=_l(o);return ue(()=>{o.value=document.body,re(s,c=>{!c&&e.show&&(l.value=!1,n("close"))}),re(()=>a.value.path,()=>{l.value=!1,n("close")})}),ft(()=>{l.value=!1}),()=>i(Qn,{name:"fade",onEnter:()=>{l.value=!0},onAfterLeave:()=>{l.value=!1}},()=>{var c,r;return e.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(c=t.before)==null?void 0:c.call(t),i(Wf),i("div",{class:"vp-outlook-wrapper"},i(nu)),(r=t.after)==null?void 0:r.call(t)])):null})}}),Qf=F({name:"NavbarBrand",setup(){const e=wn(),n=Xt(),t=ie(),a=w(()=>t.value.home||e.value),s=w(()=>n.value.title),o=w(()=>t.value.navTitle??s.value),l=w(()=>t.value.logo?we(t.value.logo):null),c=w(()=>t.value.logoDark?we(t.value.logoDark):null);return()=>i(Me,{to:a.value,class:"vp-brand"},()=>[l.value?i("img",{class:["vp-nav-logo",{light:!!c.value}],src:l.value,alt:s.value}):null,c.value?i("img",{class:["vp-nav-logo dark"],src:c.value,alt:s.value}):null,o.value?i("span",{class:["vp-site-name",{"hide-in-pad":l.value&&t.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),e5=F({name:"NavbarLinks",setup(){const e=qp();return()=>e.value.length?i("nav",{class:"vp-nav-links"},e.value.map(n=>i("div",{class:"nav-item hide-in-mobile"},"children"in n?i(Hf,{config:n}):i(Xe,{config:n})))):null}}),n5=F({name:"RepoLink",components:{BitbucketIcon:cp,GiteeIcon:ip,GitHubIcon:op,GitLabIcon:lp,SourceIcon:rp},setup(){const e=jf();return()=>e.value?i("div",{class:"nav-item vp-repo"},i("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},i(tn(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const tu=({active:e=!1},{emit:n})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>n("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));tu.displayName="ToggleNavbarButton";var t5=tu;const So=(e,{emit:n})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>n("toggle")},i("span",{class:"icon"}));So.displayName="ToggleSidebarButton",So.emits=["toggle"];var a5=So,s5=F({name:"OutlookButton",setup(){const{isSupported:e}=kl(),n=tt(),t=Jt(),a=le(),{canToggle:s}=Va(),o=q(!1),l=w(()=>!t.value&&n.value.fullscreen&&e);return re(()=>a.value.path,()=>{o.value=!1}),()=>s.value||l.value||xt?i("div",{class:"nav-item hide-in-mobile"},s.value&&!l.value&&!xt?i(Qp):l.value&&!s.value&&!xt?i(eu):i("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[i(Jp),i("div",{class:"outlook-dropdown"},i(nu))])):null}}),o5=F({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:n,slots:t}){const a=ie(),{isMobile:s}=Fa(),o=q(!1),l=w(()=>{const{navbarAutoHide:u="mobile"}=a.value;return u!=="none"&&(u==="always"||s.value)}),c=w(()=>a.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),r={Brand:Qf,Language:to,Links:e5,Repo:n5,Outlook:s5,Search:bn("Docsearch")?tn("Docsearch"):bn("SearchBox")?tn("SearchBox"):to},p=u=>r[u]??(bn(u)?tn(u):to);return()=>{var u,d,m,f,g,b;return[i("header",{id:"navbar",class:["vp-navbar",{"auto-hide":l.value,"hide-icon":a.value.navbarIcon===!1}]},[i("div",{class:"vp-navbar-start"},[i(a5,{onToggle:()=>{o.value&&(o.value=!1),n("toggleSidebar")}}),(u=t.startBefore)==null?void 0:u.call(t),(c.value.start||[]).map(B=>i(p(B))),(d=t.startAfter)==null?void 0:d.call(t)]),i("div",{class:"vp-navbar-center"},[(m=t.centerBefore)==null?void 0:m.call(t),(c.value.center||[]).map(B=>i(p(B))),(f=t.centerAfter)==null?void 0:f.call(t)]),i("div",{class:"vp-navbar-end"},[(g=t.endBefore)==null?void 0:g.call(t),(c.value.end||[]).map(B=>i(p(B))),(b=t.endAfter)==null?void 0:b.call(t),i(t5,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),i(Jf,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var B;return(B=t.screenTop)==null?void 0:B.call(t)},after:()=>{var B;return(B=t.screenBottom)==null?void 0:B.call(t)}})]}}}),l5=F({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const n=In();return()=>[Np(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:jt(n,e.config,!0)}],exact:!0}),Up(e.config.children)]}}),i5=F({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:n}){const t=In(),a=w(()=>jt(t,e.config)),s=w(()=>jt(t,e.config,!0));return()=>{const{collapsible:o,children:l=[],icon:c,prefix:r,link:p,text:u}=e.config;return i("section",{class:"vp-sidebar-group"},[i(o?"button":"p",{class:["vp-sidebar-heading",{clickable:o||p,exact:s.value,active:a.value}],...o?{type:"button",onClick:()=>n("toggle"),onKeydown:d=>{d.key==="Enter"&&n("toggle")}}:{}},[i(Ke,{icon:c}),p?i(Xe,{class:"vp-sidebar-title",config:{text:u,link:p},noExternalLinkIcon:!0}):i("span",{class:"vp-sidebar-title"},u),o?i("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!o?i(au,{key:r,config:l}):null])}}}),au=F({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const n=In(),t=q(-1),a=s=>{t.value=s===t.value?-1:s};return re(()=>n.path,()=>{const s=e.config.findIndex(o=>$p(n,o));t.value=s},{immediate:!0,flush:"post"}),()=>i("ul",{class:"vp-sidebar-links"},e.config.map((s,o)=>i("li",s.type==="group"?i(i5,{config:s,open:o===t.value,onToggle:()=>a(o)}):i(l5,{config:s}))))}}),c5=F({name:"SideBar",slots:Object,setup(e,{slots:n}){const t=In(),a=ie(),s=Bl(),o=Ne();return ue(()=>{re(()=>t.hash,l=>{const c=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${l}"]`);if(!c)return;const{top:r,height:p}=o.value.getBoundingClientRect(),{top:u,height:d}=c.getBoundingClientRect();u<r?c.scrollIntoView(!0):u+d>r+p&&c.scrollIntoView(!1)},{immediate:!0})}),()=>{var l,c,r;return i("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":a.value.sidebarIcon===!1}]},[(l=n.top)==null?void 0:l.call(n),((c=n.default)==null?void 0:c.call(n))||i(au,{config:s.value}),(r=n.bottom)==null?void 0:r.call(n)])}}}),Dl=F({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:n}){const t=He(),a=le(),s=Ee(),o=ie(),{isMobile:l,isPC:c}=Fa(),[r,p]=To(!1),[u,d]=To(!1),m=Bl(),f=q(!1),g=w(()=>e.noNavbar||s.value.navbar===!1||o.value.navbar===!1?!1:!!(a.value.title||o.value.logo||o.value.repo||o.value.navbar)),b=w(()=>e.noSidebar?!1:s.value.sidebar!==!1&&m.value.length!==0&&!s.value.home),B=w(()=>e.noToc||s.value.home?!1:s.value.toc||o.value.toc!==!1&&s.value.toc!==!1),y={x:0,y:0},T=C=>{y.x=C.changedTouches[0].clientX,y.y=C.changedTouches[0].clientY},E=C=>{const V=C.changedTouches[0].clientX-y.x,S=C.changedTouches[0].clientY-y.y;Math.abs(V)>Math.abs(S)*1.5&&Math.abs(V)>40&&(V>0&&y.x<=80?p(!0):p(!1))},D=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let R=0;return Fe("scroll",Om(()=>{const C=D();C<=58||C<R?f.value=!1:R+200<C&&!r.value&&(f.value=!0),R=C},300,!0)),re(l,C=>{C||p(!1)}),ue(()=>{const C=_l(document.body);re(r,S=>{C.value=S});const V=t.afterEach(()=>{p(!1)});ft(()=>{C.value=!1,V()})}),()=>i(bn("GlobalEncrypt")?tn("GlobalEncrypt"):Xr,()=>i("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!b.value&&!(n.sidebar||n.sidebarTop||n.sidebarBottom),"has-toc":B.value,"hide-navbar":f.value,"sidebar-collapsed":!l.value&&!c.value&&u.value,"sidebar-open":l.value&&r.value},e.containerClass,s.value.containerClass||""],onTouchStart:T,onTouchEnd:E},[g.value?i(o5,{onToggleSidebar:()=>p()},{startBefore:()=>{var C;return(C=n.navbarStartBefore)==null?void 0:C.call(n)},startAfter:()=>{var C;return(C=n.navbarStartAfter)==null?void 0:C.call(n)},centerBefore:()=>{var C;return(C=n.navbarCenterBefore)==null?void 0:C.call(n)},centerAfter:()=>{var C;return(C=n.navbarCenterAfter)==null?void 0:C.call(n)},endBefore:()=>{var C;return(C=n.navbarEndBefore)==null?void 0:C.call(n)},endAfter:()=>{var C;return(C=n.navbarEndAfter)==null?void 0:C.call(n)},screenTop:()=>{var C;return(C=n.navScreenTop)==null?void 0:C.call(n)},screenBottom:()=>{var C;return(C=n.navScreenBottom)==null?void 0:C.call(n)}}):null,i(Qn,{name:"fade"},()=>r.value?i("div",{class:"vp-sidebar-mask",onClick:()=>p(!1)}):null),i(Qn,{name:"fade"},()=>l.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},i("span",{class:["arrow",u.value?"end":"start"]}))),i(c5,{},{...n.sidebar?{default:()=>n.sidebar()}:{},top:()=>{var C;return(C=n.sidebarTop)==null?void 0:C.call(n)},bottom:()=>{var C;return(C=n.sidebarBottom)==null?void 0:C.call(n)}}),n.default(),i(zf)]))}}),he=F({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:n}){const t=s=>{s.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,s.style.transform="translateY(-20px)",s.style.opacity="0"},a=s=>{s.style.transform="translateY(0)",s.style.opacity="1"};return()=>i(e.type==="single"?Qn:h1,{name:"drop",appear:e.appear,onAppear:t,onAfterAppear:a,onEnter:t,onAfterEnter:a,onBeforeLeave:t},()=>n.default())}});const Co=({custom:e})=>i(Or,{class:["theme-hope-content",{custom:e}]});Co.displayName="MarkdownContent",Co.props={custom:Boolean};var Tl=Co;const su=()=>i(de,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));su.displayName="AuthorIcon";const ou=()=>i(de,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));ou.displayName="CalendarIcon";const lu=()=>i(de,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));lu.displayName="CategoryIcon";const iu=()=>i(de,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));iu.displayName="PrintIcon";const cu=()=>i(de,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));cu.displayName="TagIcon";const ru=()=>i(de,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));ru.displayName="TimerIcon";const pu=()=>i(de,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);pu.displayName="WordIcon";const at=()=>{const e=ie();return w(()=>e.value.metaLocales)};var r5=F({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const n=at();return()=>e.author.length?i("span",{class:"page-author-info","aria-label":`${n.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(su),i("span",e.author.map(t=>t.url?i("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):i("span",{class:"page-author-item"},t.name))),i("span",{property:"author",content:e.author.map(t=>t.name).join(", ")})]):null}}),p5=F({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const n=He(),t=le(),a=at(),s=(o,l="")=>{l&&t.value.path!==l&&(o.preventDefault(),n.push(l))};return()=>e.category.length?i("span",{class:"page-category-info","aria-label":`${a.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(lu),e.category.map(({name:o,path:l})=>i("span",{class:["page-category-item",{[`category${Is(o,9)}`]:!e.pure,clickable:l}],role:l?"navigation":"",onClick:c=>s(c,l)},o)),i("meta",{property:"articleSection",content:e.category.map(({name:o})=>o).join(",")})]):null}}),u5=F({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const n=il(),t=at();return()=>e.date?i("span",{class:"page-date-info","aria-label":`${t.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(ou),i("span",i(Ds,()=>e.localizedDate||e.date.toLocaleDateString(n.value))),i("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),d5=F({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const n=at();return()=>e.isOriginal?i("span",{class:"page-original-info"},n.value.origin):null}}),v5=F({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=at(),t=w(()=>{if(!e.readingTime)return null;const{minutes:a}=e.readingTime;return a<1?"PT1M":`PT${Math.round(a)}M`});return()=>{var a,s;return(a=e.readingTimeLocale)!=null&&a.time?i("span",{class:"page-reading-time-info","aria-label":`${n.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(ru),i("span",(s=e.readingTimeLocale)==null?void 0:s.time),i("meta",{property:"timeRequired",content:t.value})]):null}}}),m5=F({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const n=He(),t=le(),a=at(),s=(o,l="")=>{l&&t.value.path!==l&&(o.preventDefault(),n.push(l))};return()=>e.tag.length?i("span",{class:"page-tag-info","aria-label":`${a.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(cu),e.tag.map(({name:o,path:l})=>i("span",{class:["page-tag-item",{[`tag${Is(o,9)}`]:!e.pure,clickable:l}],role:l?"navigation":"",onClick:c=>s(c,l)},o)),i("meta",{property:"keywords",content:e.tag.map(({name:o})=>o).join(",")})]):null}}),f5=F({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=at();return()=>{var t,a,s;return(t=e.readingTimeLocale)!=null&&t.words?i("span",{class:"page-word-info","aria-label":`${n.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(pu),i("span",(a=e.readingTimeLocale)==null?void 0:a.words),i("meta",{property:"wordCount",content:(s=e.readingTime)==null?void 0:s.words})]):null}}}),uu=F({name:"PageInfo",components:{AuthorInfo:r5,CategoryInfo:p5,DateInfo:u5,OriginalInfo:d5,PageViewInfo:()=>null,ReadingTimeInfo:v5,TagInfo:m5,WordInfo:f5},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const n=Jt();return()=>e.items?i("div",{class:"page-info"},e.items.map(t=>i(tn(`${t}Info`),{...e.info,pure:n.value}))):null}}),h5=F({name:"PrintButton",setup(){const e=tt(),n=ie();return()=>e.value.print===!1?null:i("button",{type:"button",class:"print-button",title:n.value.metaLocales.print,onClick:()=>{window.print()}},i(iu))}});const g5=({title:e,level:n,slug:t})=>i(Me,{to:`#${t}`,class:["toc-link",`level${n}`]},()=>e),Oo=(e,n)=>{const t=In();return e.length&&n>0?i("ul",{class:"toc-list"},e.map(a=>{const s=Oo(a.children,n-1);return[i("li",{class:["toc-item",{active:fl(t,`#${a.slug}`)}]},g5(a)),s?i("li",s):null]})):null};var du=F({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:n}){const t=In(),a=le(),s=at(),o=Ne(),l=q("-1.7rem"),c=p=>{var u;(u=o.value)==null||u.scrollTo({top:p,behavior:"smooth"})},r=()=>{if(o.value){const p=document.querySelector(".toc-item.active");p?l.value=`${p.getBoundingClientRect().top-o.value.getBoundingClientRect().top+o.value.scrollTop}px`:l.value="-1.7rem"}else l.value="-1.7rem"};return ue(()=>{re(()=>t.hash,p=>{if(o.value){const u=document.querySelector(`#toc a.toc-link[href$="${p}"]`);if(!u)return;const{top:d,height:m}=o.value.getBoundingClientRect(),{top:f,height:g}=u.getBoundingClientRect();f<d?c(o.value.scrollTop+f-d):f+g>d+m&&c(o.value.scrollTop+f+g-d-m)}}),re(()=>t.fullPath,r,{flush:"post",immediate:!0})}),()=>{var u,d;const p=e.items.length?Oo(e.items,e.headerDepth):a.value.headers?Oo(a.value.headers,e.headerDepth):null;return p?i("div",{class:"toc-place-holder"},[i("aside",{id:"toc"},[(u=n.before)==null?void 0:u.call(n),i("div",{class:"toc-header"},[s.value.toc,i(h5)]),i("div",{class:"toc-wrapper",ref:o},[p,i("div",{class:"toc-marker",style:{top:l.value}})]),(d=n.after)==null?void 0:d.call(n)])]):null}}}),Pl=F({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const n=le(),t=ie(),a=Ne(),s=({target:o})=>{const l=document.querySelector(o.hash);if(l){const c=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",c)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",c),l.focus(),window.scrollTo(0,0)}};return ue(()=>{re(()=>n.value.path,()=>a.value.focus())}),()=>[i("span",{ref:a,tabindex:"-1"}),i("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:s},t.value.routeLocales.skipToContent)]}});let oo=null,aa=null;const k5={wait:()=>oo,pending:()=>{oo=new Promise(e=>aa=e)},resolve:()=>{aa==null||aa(),oo=null,aa=null}},vu=()=>k5;var mu=F({name:"FadeSlideY",slots:Object,setup(e,{slots:n}){const{resolve:t,pending:a}=vu();return()=>i(Qn,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:a},()=>{var s;return(s=n.default)==null?void 0:s.call(n)})}});const _5=(e,n)=>{const t=e.replace(n,"/").split("/"),a=[];let s=ll(n);return t.forEach((o,l)=>{l!==t.length-1?(s+=`${o}/`,a.push({link:s,name:o||"Home"})):o!==""&&(s+=o,a.push({link:s,name:o}))}),a},fu=(e,{slots:n})=>{var d,m;const{bgImage:t,bgImageDark:a,bgImageStyle:s,color:o,description:l,image:c,imageDark:r,header:p,features:u=[]}=e;return i("div",{class:"vp-feature-wrapper"},[t?i("div",{class:["vp-feature-bg",{light:a}],style:[{"background-image":`url(${t})`},s]}):null,a?i("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${a})`},s]}):null,i("div",{class:"vp-feature",style:o?{color:o}:{}},[((d=n.image)==null?void 0:d.call(n,e))||[c?i("img",{class:["vp-feature-image",{light:r}],src:we(c),alt:p}):null,r?i("img",{class:"vp-feature-image dark",src:we(r),alt:p}):null],((m=n.info)==null?void 0:m.call(n,e))||[p?i("h2",{class:"vp-feature-header"},p):null,l?i("p",{class:"vp-feature-description",innerHTML:l}):null],u.length?i("div",{class:"vp-features"},u.map(({icon:f,title:g,details:b,link:B})=>{const y=[i("h3",{class:"vp-feature-title"},[i(Ke,{icon:f}),i("span",{innerHTML:g})]),i("p",{class:"vp-feature-details",innerHTML:b})];return B?ba(B)?i("a",{class:"vp-feature-item link",href:B,role:"navigation","aria-label":g,target:"_blank"},y):i(Me,{class:"vp-feature-item link",to:B,role:"navigation","aria-label":g},()=>y):i("div",{class:"vp-feature-item"},y)})):null])])};fu.displayName="FeaturePanel";var ic=fu,b5=F({name:"HeroInfo",slots:Object,setup(e,{slots:n}){const t=Ee(),a=Xt(),s=w(()=>t.value.heroFullScreen??!1),o=w(()=>{const{heroText:p,tagline:u}=t.value;return{text:p??a.value.title??"Hello",tagline:u??a.value.description??"",isFullScreen:s.value}}),l=w(()=>{const{heroText:p,heroImage:u,heroImageDark:d,heroAlt:m,heroImageStyle:f}=t.value;return{image:u?we(u):null,imageDark:d?we(d):null,heroStyle:f,alt:m||p||"hero image",isFullScreen:s.value}}),c=w(()=>{const{bgImage:p,bgImageDark:u,bgImageStyle:d}=t.value;return{image:Vn(p)?we(p):null,imageDark:Vn(u)?we(u):null,bgStyle:d,isFullScreen:s.value}}),r=w(()=>t.value.actions??[]);return()=>{var p,u,d;return i("header",{class:["vp-hero-info-wrapper",{fullscreen:s.value}]},[((p=n.heroBg)==null?void 0:p.call(n,c.value))||[c.value.image?i("div",{class:["vp-hero-mask",{light:c.value.imageDark}],style:[{"background-image":`url(${c.value.image})`},c.value.bgStyle]}):null,c.value.imageDark?i("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${c.value.imageDark})`},c.value.bgStyle]}):null],i("div",{class:"vp-hero-info"},[((u=n.heroImage)==null?void 0:u.call(n,l.value))||i(he,{appear:!0,type:"group"},()=>[l.value.image?i("img",{key:"light",class:["vp-hero-image",{light:l.value.imageDark}],style:l.value.heroStyle,src:l.value.image,alt:l.value.alt}):null,l.value.imageDark?i("img",{key:"dark",class:"vp-hero-image dark",style:l.value.heroStyle,src:l.value.imageDark,alt:l.value.alt}):null]),((d=n.heroInfo)==null?void 0:d.call(n,o.value))??i("div",{class:"vp-hero-infos"},[o.value.text?i(he,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?i(he,{appear:!0,delay:.08},()=>i("p",{class:"vp-description",innerHTML:o.value.tagline})):null,r.value.length?i(he,{appear:!0,delay:.12},()=>i("p",{class:"vp-actions"},r.value.map(m=>i(Xe,{class:["vp-action",m.type||"default"],config:m,noExternalLinkIcon:!0})))):null])])])}}});const hu=(e,{slots:n})=>{var m,f,g;const{bgImage:t,bgImageDark:a,bgImageStyle:s,color:o,description:l,image:c,imageDark:r,header:p,highlights:u=[],type:d="un-order"}=e;return i("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[t?i("div",{class:["vp-highlight-bg",{light:a}],style:[{"background-image":`url(${t})`},s]}):null,a?i("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${a})`},s]}):null,i("div",{class:"vp-highlight"},[((m=n.image)==null?void 0:m.call(n,e))||[c?i("img",{class:["vp-highlight-image",{light:r}],src:we(c),alt:p}):null,r?i("img",{class:"vp-highlight-image dark",src:we(r),alt:p}):null],((f=n.info)==null?void 0:f.call(n,e))||[i("div",{class:"vp-highlight-info-wrapper"},i("div",{class:"vp-highlight-info"},[p?i("h2",{class:"vp-highlight-header",innerHTML:p}):null,l?i("p",{class:"vp-highlight-description",innerHTML:l}):null,((g=n.highlights)==null?void 0:g.call(n,u))||i(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},u.map(({icon:b,title:B,details:y,link:T})=>{const E=[i(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[b?i(Ke,{class:"vp-highlight-icon",icon:b}):null,i("span",{innerHTML:B})]),y?i(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:y}):null];return i(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:T}]},T?vm(T)?i("a",{class:"vp-highlight-item link",href:T,role:"navigation","aria-label":B,target:"_blank"},E):i(Me,{class:"vp-highlight-item link",to:T,role:"navigation","aria-label":B},()=>E):i("div",{class:"vp-highlight-item"},E))}))]))]])])};hu.displayName="HighlightPanel";var E5=hu,y5=F({name:"HomePage",slots:Object,setup(e,{slots:n}){const t=Jt(),a=Ee(),s=w(()=>{const{features:l}=a.value;return Q(l)?l:null}),o=w(()=>{const{highlights:l}=a.value;return Q(l)?l:null});return()=>{var l,c,r,p;return i("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":a.value.heroText===null?"":"main-title"},[(l=n.top)==null?void 0:l.call(n),i(b5),((c=o.value)==null?void 0:c.map(u=>"features"in u?i(ic,u):i(E5,u)))||(s.value?i(he,{appear:!0,delay:.24},()=>i(ic,{features:s.value})):null),(r=n.center)==null?void 0:r.call(n),i(he,{appear:!0,delay:.32},()=>i(Tl)),(p=n.bottom)==null?void 0:p.call(n)])}}}),w5=F({name:"BreadCrumb",setup(){const e=He(),n=le(),t=wn(),a=Ee(),s=ie(),o=Ne([]),l=w(()=>(a.value.breadcrumb||a.value.breadcrumb!==!1&&s.value.breadcrumb!==!1)&&o.value.length>1),c=w(()=>a.value.breadcrumbIcon||a.value.breadcrumbIcon!==!1&&s.value.breadcrumbIcon!==!1),r=()=>{const p=e.getRoutes(),u=_5(n.value.path,t.value).map(({link:d,name:m})=>{const f=p.find(g=>g.path===d);if(f){const{meta:g,path:b}=Ht(e,f.path);return{title:g[be.shortTitle]||g[be.title]||m,icon:g[be.icon],path:b}}return null}).filter(d=>d!==null);u.length>1&&(o.value=u)};return ue(()=>{re(()=>n.value.path,r,{immediate:!0})}),()=>i("nav",{class:["vp-breadcrumb",{disable:!l.value}]},l.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},o.value.map((p,u)=>i("li",{class:{"is-active":o.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[i(Me,{to:p.path,property:"item",typeof:"WebPage"},()=>[c.value?i(Ke,{icon:p.icon}):null,i("span",{property:"name"},p.title||"Unknown")]),i("meta",{property:"position",content:u+1})]))):[])}});const cc=e=>{const n=He();return e===!1?!1:ge(e)?Lt(n,e,!0):Sa(e)?e:null},Lo=(e,n,t)=>{const a=e.findIndex(s=>s.link===n);if(a!==-1){const s=e[a+t];return s!=null&&s.link?s:null}for(const s of e)if(s.children){const o=Lo(s.children,n,t);if(o)return o}return null};var A5=F({name:"PageNav",setup(){const e=ie(),n=Ee(),t=Bl(),a=le(),s=Ra(),o=w(()=>{const c=cc(n.value.prev);return c===!1?null:c||(e.value.prevLink===!1?null:Lo(t.value,a.value.path,-1))}),l=w(()=>{const c=cc(n.value.next);return c===!1?null:c||(e.value.nextLink===!1?null:Lo(t.value,a.value.path,1))});return Fe("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?l.value&&(s(l.value.link),c.preventDefault()):c.key==="ArrowLeft"&&o.value&&(s(o.value.link),c.preventDefault()))}),()=>o.value||l.value?i("nav",{class:"vp-page-nav"},[o.value?i(Xe,{class:"prev",config:o.value},()=>{var c,r;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),e.value.metaLocales.prev]),i("div",{class:"link"},[i(Ke,{icon:(c=o.value)==null?void 0:c.icon}),(r=o.value)==null?void 0:r.text])]}):null,l.value?i(Xe,{class:"next",config:l.value},()=>{var c,r;return[i("div",{class:"hint"},[e.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(c=l.value)==null?void 0:c.text,i(Ke,{icon:(r=l.value)==null?void 0:r.icon})])]}):null]):null}});const B5={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},D5=({docsRepo:e,docsBranch:n,docsDir:t,filePathRelative:a,editLinkPattern:s})=>{if(!a)return null;const o=sp(e);let l;return s?l=s:o!==null&&(l=B5[o]),l?l.replace(/:repo/,ht(e)?e:`https://github.com/${e}`).replace(/:branch/,n).replace(/:path/,wr(`${ll(t)}/${a}`)):null},T5=()=>{const e=ie(),n=le(),t=Ee();return w(()=>{const{repo:a,docsRepo:s=a,docsBranch:o="main",docsDir:l="",editLink:c,editLinkPattern:r=""}=e.value;if(!(t.value.editLink??c??!0)||!s)return null;const p=D5({docsRepo:s,docsBranch:o,docsDir:l,editLinkPattern:r,filePathRelative:n.value.filePathRelative});return p?{text:e.value.metaLocales.editLink,link:p}:null})},P5=()=>{const e=Xt(),n=ie(),t=le(),a=Ee();return w(()=>{var s,o;return!(a.value.lastUpdated??n.value.lastUpdated??!0)||!((s=t.value.git)!=null&&s.updatedTime)?null:new Date((o=t.value.git)==null?void 0:o.updatedTime).toLocaleString(e.value.lang)})},I5=()=>{const e=ie(),n=le(),t=Ee();return w(()=>{var a;return t.value.contributors??e.value.contributors??!0?((a=n.value.git)==null?void 0:a.contributors)??null:null})};var S5=F({name:"PageTitle",setup(){const e=le(),n=Ee(),t=ie(),{info:a,items:s}=xf();return()=>i("div",{class:"vp-page-title"},[i("h1",[t.value.titleIcon===!1?null:i(Ke,{icon:n.value.icon}),e.value.title]),i(uu,{info:a.value,...s.value===null?{}:{items:s.value}}),i("hr")])}});const gu=()=>i(de,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);gu.displayName="EditIcon";var C5=F({name:"PageMeta",setup(){const e=ie(),n=T5(),t=P5(),a=I5();return()=>{const{metaLocales:s}=e.value;return i("footer",{class:"page-meta"},[n.value?i("div",{class:"meta-item edit-link"},i(Xe,{class:"label",config:n.value},{before:()=>i(gu)})):null,i("div",{class:"meta-item git-info"},[t.value?i("div",{class:"update-time"},[i("span",{class:"label"},`${s.lastUpdated}: `),i(Ds,()=>i("span",{class:"info"},t.value))]):null,a.value&&a.value.length?i("div",{class:"contributors"},[i("span",{class:"label"},`${s.contributors}: `),a.value.map(({email:o,name:l},c)=>[i("span",{class:"contributor",title:`email: ${o}`},l),c!==a.value.length-1?",":""])]):null])])}}}),O5=F({name:"NormalPage",slots:Object,setup(e,{slots:n}){const t=Ee(),a=le(),{isDarkmode:s}=Va(),o=ie(),l=w(()=>t.value.toc||t.value.toc!==!1&&o.value.toc!==!1);return()=>i("main",{id:"main-content",class:"vp-page"},i(bn("LocalEncrypt")?tn("LocalEncrypt"):Xr,()=>{var c,r,p,u;return[(c=n.top)==null?void 0:c.call(n),t.value.cover?i("img",{class:"page-cover",src:we(t.value.cover),alt:a.value.title,"no-view":""}):null,i(w5),i(S5),l.value?i(du,{headerDepth:t.value.headerDepth??o.value.headerDepth??2},{before:()=>{var d;return(d=n.tocBefore)==null?void 0:d.call(n)},after:()=>{var d;return(d=n.tocAfter)==null?void 0:d.call(n)}}):null,(r=n.contentBefore)==null?void 0:r.call(n),i(Tl),(p=n.contentAfter)==null?void 0:p.call(n),i(C5),i(A5),bn("CommentService")?i(tn("CommentService"),{darkmode:s.value}):null,(u=n.bottom)==null?void 0:u.call(n)]}))}}),L5=F({name:"Layout",setup(){const e=tt(),n=ie(),t=le(),a=Ee(),{isMobile:s}=Fa(),o=w(()=>{var l,c;return((l=n.value.blog)==null?void 0:l.sidebarDisplay)||((c=e.value.blog)==null?void 0:c.sidebarDisplay)||"mobile"});return()=>[i(Pl),i(Dl,{},{default:()=>a.value.home?i(y5):i(mu,()=>i(O5,{key:t.value.path})),...o.value!=="none"?{navScreenBottom:()=>i(tn("BloggerInfo"))}:{},...!s.value&&o.value==="always"?{sidebar:()=>i(tn("BloggerInfo"))}:{}})]}}),x5=F({name:"NotFoundHint",setup(){const e=ie(),n=()=>{const t=e.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},n())])}}),R5=F({name:"NotFound",slots:Object,setup(e,{slots:n}){const t=wn(),a=ie(),{navigate:s}=wo({to:a.value.home??t.value});return()=>[i(Pl),i(Dl,{noSidebar:!0},()=>{var o;return i("main",{id:"main-content",class:"vp-page not-found"},((o=n.default)==null?void 0:o.call(n))||[i(x5),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>s()},a.value.routeLocales.home)])])})]}});const F5={},V5={category:{"/":{path:"/category/",map:{algorithm:{path:"/category/algorithm/",keys:["v-067b5137","v-c30cb95a","v-103999a8"]},unreal:{path:"/category/unreal/",keys:["v-f0640946","v-391766bc","v-e95e6264","v-0cd6d45f","v-1ba5c8ed","v-1ad79dbc","v-55ca86ff","v-c4c01c70","v-a6a0843a","v-318a2cdb","v-e010eba6","v-7ed2134c","v-31ce0ca7","v-199bd790","v-0b07c9e6","v-9f6d9e56","v-5969763f"]},"c++":{path:"/category/c__/",keys:["v-8db588aa","v-4c4aa776","v-070726ff","v-175bf425","v-61e080a6","v-3f3ef6ee","v-d991c5f8","v-d7dbcd0c","v-df70076c","v-44c7c3a7","v-8f64b8dc","v-7244b256","v-6427f58a","v-6e77ac4e","v-a0ecd5a4","v-905736f2","v-9a31f9f4","v-7f051d34","v-5ab892c7","v-c27c08f6","v-6d26eac0","v-43101723","v-02010851","v-191531e6","v-0dc2bc3e","v-1700a216","v-287bdc3a","v-6526b1c5","v-26ee6f20","v-7f79f4e6","v-1a7bf9fb","v-2111666e","v-bf12b7b0","v-5b7ab8a5","v-be08ce20","v-622a641a","v-59d63626","v-2266983e","v-2ee2573a","v-3152f788","v-1f9cc682","v-51adada9","v-9fddc778","v-87bc0582","v-392830ea"]},lua:{path:"/category/lua/",keys:["v-392c5935"]},Markdown:{path:"/category/markdown/",keys:["v-422331e2","v-59764534","v-655fc6a7","v-b42c01e2","v-362d81bf","v-997aa906","v-43388754"]},Git:{path:"/category/git/",keys:["v-ec184d2e","v-9c10cf40","v-01c2d25b","v-6ac7e2aa","v-212109a4","v-3d983470","v-245d9bec"]},Github:{path:"/category/github/",keys:["v-1ba8957d","v-eb0f2802","v-7728bea7","v-c7e4751c","v-e5fa9af4","v-0b69c61f"]},rider:{path:"/category/rider/",keys:["v-4e3a3e2e","v-a4588a60","v-5de88dbc"]},visualstudio:{path:"/category/visualstudio/",keys:["v-792ac5f1"]},visualStudio:{path:"/category/visualstudio/",keys:["v-9be2b5e8"]},vscode:{path:"/category/vscode/",keys:["v-2ed462fa","v-0aab6ed5","v-350b14b8"]},vuepress:{path:"/category/vuepress/",keys:["v-5aa2c605","v-a839441a"]},"u++":{path:"/category/u__/",keys:["v-3d686d76","v-5d651e98","v-0357c5b0","v-63c0fb6b","v-0dc93dd0","v-9cb8d68c","v-283ae959","v-2327fc34","v-9edab39e","v-9f505d48","v-aaba400c","v-35e6b090","v-483f6eb7","v-10f4f7c9","v-2304f0b0","v-0d5dfba3","v-d167da6a","v-43889d7a","v-cbf14a10","v-347c1406","v-88753b6a","v-9c7552aa","v-5fc23eb5","v-35a3a78f","v-faa905da","v-e7c7e0c8","v-0aa4c588","v-8ea03774","v-6ef0fadf","v-7f6ffa27","v-5b1b53c4","v-7983a964","v-6e5edac0","v-e761d962","v-07eefa62","v-0eb61f2d","v-62325f58","v-4b0f28af","v-c0277cb6","v-00d42220","v-0c3c87db","v-8a7ae01e","v-cc3e1e92"]}}}},tag:{"/":{path:"/tag/",map:{unreal:{path:"/tag/unreal/",keys:["v-5969763f"]},介绍:{path:"/tag/%E4%BB%8B%E7%BB%8D/",keys:["v-9be2b5e8","v-392830ea","v-5de88dbc","v-392c5935","v-5aa2c605","v-245d9bec","v-0b69c61f","v-350b14b8","v-422331e2"]},"c++":{path:"/tag/c__/",keys:["v-392830ea"]},lua:{path:"/tag/lua/",keys:["v-392c5935"]},Markdown:{path:"/tag/markdown/",keys:["v-422331e2","v-59764534","v-655fc6a7","v-b42c01e2","v-362d81bf","v-997aa906","v-43388754"]},示例:{path:"/tag/%E7%A4%BA%E4%BE%8B/",keys:["v-59764534"]},husky:{path:"/tag/husky/",keys:["v-212109a4"]},踩坑记录:{path:"/tag/%E8%B8%A9%E5%9D%91%E8%AE%B0%E5%BD%95/",keys:["v-ec184d2e","v-9c10cf40","v-1ba8957d","v-eb0f2802","v-7728bea7","v-c7e4751c","v-e5fa9af4"]},Git:{path:"/tag/git/",keys:["v-245d9bec"]},Github:{path:"/tag/github/",keys:["v-0b69c61f"]},rider:{path:"/tag/rider/",keys:["v-5de88dbc"]},visualStudio:{path:"/tag/visualstudio/",keys:["v-9be2b5e8"]},VSCode:{path:"/tag/vscode/",keys:["v-350b14b8"]},VuePress:{path:"/tag/vuepress/",keys:["v-5aa2c605"]},Specifiers:{path:"/tag/specifiers/",keys:["v-faa905da","v-e7c7e0c8","v-5b1b53c4","v-7983a964","v-6e5edac0","v-e761d962"]},Emoji:{path:"/tag/emoji/",keys:["v-655fc6a7","v-b42c01e2","v-362d81bf","v-997aa906","v-43388754"]}}}}},M5={article:{"/":{path:"/article/",keys:["v-3d686d76","v-5d651e98","v-0357c5b0","v-63c0fb6b","v-0dc93dd0","v-9cb8d68c","v-283ae959","v-2327fc34","v-9edab39e","v-9f505d48","v-aaba400c","v-f0640946","v-391766bc","v-e95e6264","v-35e6b090","v-0cd6d45f","v-1ba5c8ed","v-1ad79dbc","v-55ca86ff","v-483f6eb7","v-10f4f7c9","v-2304f0b0","v-0d5dfba3","v-d167da6a","v-43889d7a","v-cbf14a10","v-347c1406","v-88753b6a","v-9c7552aa","v-5fc23eb5","v-35a3a78f","v-faa905da","v-e7c7e0c8","v-0aa4c588","v-8ea03774","v-6ef0fadf","v-7f6ffa27","v-5b1b53c4","v-7983a964","v-6e5edac0","v-e761d962","v-07eefa62","v-0eb61f2d","v-62325f58","v-4b0f28af","v-4e3a3e2e","v-c4c01c70","v-792ac5f1","v-9be2b5e8","v-8db588aa","v-4c4aa776","v-070726ff","v-175bf425","v-61e080a6","v-3f3ef6ee","v-d991c5f8","v-d7dbcd0c","v-df70076c","v-44c7c3a7","v-8f64b8dc","v-7244b256","v-6427f58a","v-6e77ac4e","v-a0ecd5a4","v-905736f2","v-9a31f9f4","v-7f051d34","v-5ab892c7","v-c27c08f6","v-6d26eac0","v-a6a0843a","v-318a2cdb","v-e010eba6","v-43101723","v-02010851","v-191531e6","v-0dc2bc3e","v-1700a216","v-287bdc3a","v-7ed2134c","v-31ce0ca7","v-199bd790","v-0b07c9e6","v-6526b1c5","v-26ee6f20","v-9f6d9e56","v-c0277cb6","v-00d42220","v-0c3c87db","v-8a7ae01e","v-7f79f4e6","v-1a7bf9fb","v-067b5137","v-c30cb95a","v-a4588a60","v-2ed462fa","v-cc3e1e92","v-2111666e","v-bf12b7b0","v-5b7ab8a5","v-be08ce20","v-622a641a","v-59d63626","v-2266983e","v-2ee2573a","v-3152f788","v-1f9cc682","v-51adada9","v-9fddc778","v-87bc0582","v-103999a8","v-70bc2959","v-392830ea","v-5de88dbc","v-ec184d2e","v-392c5935","v-9c10cf40","v-1ba8957d","v-5aa2c605","v-a839441a","v-5969763f","v-01c2d25b","v-6ac7e2aa","v-212109a4","v-3d983470","v-eb0f2802","v-7728bea7","v-c7e4751c","v-e5fa9af4","v-0aab6ed5","v-245d9bec","v-0b69c61f","v-350b14b8","v-422331e2","v-59764534","v-655fc6a7","v-b42c01e2","v-362d81bf","v-997aa906","v-43388754"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-3d686d76","v-5d651e98","v-0357c5b0","v-63c0fb6b","v-0dc93dd0","v-9cb8d68c","v-283ae959","v-2327fc34","v-9edab39e","v-9f505d48","v-aaba400c","v-f0640946","v-391766bc","v-e95e6264","v-35e6b090","v-0cd6d45f","v-1ba5c8ed","v-1ad79dbc","v-55ca86ff","v-483f6eb7","v-10f4f7c9","v-2304f0b0","v-0d5dfba3","v-d167da6a","v-43889d7a","v-cbf14a10","v-347c1406","v-88753b6a","v-9c7552aa","v-5fc23eb5","v-35a3a78f","v-faa905da","v-e7c7e0c8","v-0aa4c588","v-8ea03774","v-6ef0fadf","v-7f6ffa27","v-5b1b53c4","v-7983a964","v-6e5edac0","v-e761d962","v-07eefa62","v-0eb61f2d","v-62325f58","v-4b0f28af","v-4e3a3e2e","v-c4c01c70","v-792ac5f1","v-9be2b5e8","v-8db588aa","v-4c4aa776","v-070726ff","v-175bf425","v-61e080a6","v-3f3ef6ee","v-d991c5f8","v-d7dbcd0c","v-df70076c","v-44c7c3a7","v-8f64b8dc","v-7244b256","v-6427f58a","v-6e77ac4e","v-a0ecd5a4","v-905736f2","v-9a31f9f4","v-7f051d34","v-5ab892c7","v-c27c08f6","v-6d26eac0","v-a6a0843a","v-318a2cdb","v-e010eba6","v-43101723","v-02010851","v-191531e6","v-0dc2bc3e","v-1700a216","v-287bdc3a","v-7ed2134c","v-31ce0ca7","v-199bd790","v-0b07c9e6","v-6526b1c5","v-26ee6f20","v-9f6d9e56","v-c0277cb6","v-00d42220","v-0c3c87db","v-8a7ae01e","v-7f79f4e6","v-1a7bf9fb","v-067b5137","v-c30cb95a","v-a4588a60","v-2ed462fa","v-cc3e1e92","v-2111666e","v-bf12b7b0","v-5b7ab8a5","v-be08ce20","v-622a641a","v-59d63626","v-2266983e","v-2ee2573a","v-3152f788","v-1f9cc682","v-51adada9","v-9fddc778","v-87bc0582","v-103999a8","v-70bc2959","v-392830ea","v-5de88dbc","v-ec184d2e","v-392c5935","v-9c10cf40","v-1ba8957d","v-5aa2c605","v-a839441a","v-5969763f","v-01c2d25b","v-6ac7e2aa","v-212109a4","v-3d983470","v-eb0f2802","v-7728bea7","v-c7e4751c","v-e5fa9af4","v-0aab6ed5","v-245d9bec","v-0b69c61f","v-350b14b8","v-422331e2","v-59764534","v-655fc6a7","v-b42c01e2","v-362d81bf","v-997aa906","v-43388754"]}}},rc=q(V5),ku=(e="")=>{const n=le(),t=He(),a=wn();return w(()=>{var r;const s=e||((r=Ee().value.blog)==null?void 0:r.key)||"";if(!s)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const o=t.getRoutes();if(!rc.value[s])throw new Error(`useBlogCategory: key ${s} is invalid`);const l=rc.value[s][a.value],c={path:l.path,map:{}};for(const p in l.map){const u=l.map[p];c.map[p]={path:u.path,items:[]};for(const d of u.keys){const m=o.find(({name:f})=>f===d);if(m){const f=Ht(t,m.path);c.map[p].items.push({path:f.path,info:f.meta})}}n.value.path===u.path&&(c.currentItems=c.map[p].items)}return c})},pc=q(M5),Os=(e="")=>{const n=He(),t=wn();return w(()=>{var c;const a=e||((c=Ee().value.blog)==null?void 0:c.key)||"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!pc.value[a])throw new Error(`useBlogType: key ${e} is invalid`);const s=n.getRoutes(),o=pc.value[a][t.value],l={path:o.path,items:[]};for(const r of o.keys){const p=s.find(({name:u})=>u===r);if(p){const u=Ht(n,p.path);l.items.push({path:u.path,info:u.meta})}}return l})};const G5="/RenderDoc/assets/hero-197a9d2d.jpg",_u=Symbol.for("categoryMap"),Ma=()=>{const e=pe(_u);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},$5=()=>{const e=ku("category");an(_u,e)},Ga=()=>{const e=tt(),n=ie();return w(()=>({...e.value.blog,...n.value.blog}))},bu=Symbol.for("tagMap"),$a=()=>{const e=pe(bu);if(!e)throw new Error("useTagMap() is called without provider.");return e},N5=()=>{const e=ku("tag");an(bu,e)},U5=e=>{const n=ie();return w(()=>{const{[be.author]:t}=e.value;return t?ya(t):t===!1?[]:ya(n.value.author,!1)})},z5=e=>{const n=Ma();return w(()=>np(e.value[be.category]).map(t=>({name:t,path:n.value.map[t].path})))},H5=e=>{const n=$a();return w(()=>tp(e.value[be.tag]).map(t=>({name:t,path:n.value.map[t].path})))},j5=e=>w(()=>{const{[be.date]:n}=e.value;return vl(n)}),q5=e=>{const n=Yt(e,"info"),t=Ga(),a=U5(n),s=z5(n),o=H5(n),l=j5(n),c=Rp(),r=w(()=>({author:a.value,category:s.value,date:l.value,localizedDate:n.value[be.localizedDate]||"",tag:o.value,isOriginal:n.value[be.isOriginal]||!1,readingTime:n.value[be.readingTime]||null,readingTimeLocale:n.value[be.readingTime]&&c.value?xp(n.value[be.readingTime],c.value):null,pageview:e.path})),p=w(()=>t.value.articleInfo);return{info:r,items:p}},Eu=Symbol(""),Na=()=>{const e=pe(Eu);if(!e)throw new Error("useArticles() is called without provider.");return e},W5=()=>{const e=Os("article");an(Eu,e)},yu=Symbol(""),Il=()=>{const e=pe(yu);if(!e)throw new Error("useStars() is called without provider.");return e},K5=()=>{const e=Os("star");an(yu,e)},wu=Symbol(""),Sl=()=>{const e=pe(wu);if(!e)throw new Error("useTimelines() is called without provider.");return e},Y5=()=>{const e=Os("timeline"),n=w(()=>{const t=[];return e.value.items.forEach(({info:a,path:s})=>{const o=vl(a[be.date]),l=o==null?void 0:o.getFullYear(),c=o?o.getMonth()+1:null,r=o==null?void 0:o.getDate();l&&c&&r&&((!t[0]||t[0].year!==l)&&t.unshift({year:l,items:[]}),t[0].items.push({date:`${c}/${r}`,info:a,path:s}))}),{...e.value,config:t.reverse()}});an(wu,n)},X5=()=>{W5(),$5(),K5(),N5(),Y5()};var Z5=F({name:"SocialMedia",setup(){const e=Ga(),n=Jt(),t=w(()=>{const a=e.value.medias;return a?Oa(a).map(([s,o])=>({name:s,icon:F5[s],url:o})):[]});return()=>t.value.length?i("div",{class:"vp-social-medias"},t.value.map(({name:a,icon:s,url:o})=>i("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":a,...n.value?{}:{"data-balloon-pos":"up"},innerHTML:s}))):null}}),Cl=F({name:"BloggerInfo",setup(){const e=Ga(),n=Xt(),t=ie(),a=Na(),s=Ma(),o=$a(),l=Sl(),c=Ra(),r=w(()=>{var m;return e.value.name||((m=ya(t.value.author)[0])==null?void 0:m.name)||n.value.title}),p=w(()=>e.value.avatar||t.value.logo),u=w(()=>t.value.blogLocales),d=w(()=>e.value.intro);return()=>{const{article:m,category:f,tag:g,timeline:b}=u.value,B=[[a.value.path,a.value.items.length,m],[s.value.path,on(s.value.map).length,f],[o.value.path,on(o.value.map).length,g],[l.value.path,l.value.items.length,b]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":u.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>c(d.value)}:{}},[p.value?i("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:we(p.value),property:"image",alt:"Blogger Avatar"}):null,r.value?i("div",{class:"vp-blogger-name",property:"name"},r.value):null,e.value.description?i("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,d.value?i("meta",{property:"url",content:we(d.value)}):null]),i("div",{class:"vp-blog-counts"},B.map(([y,T,E])=>i(Me,{class:"vp-blog-count",to:y},()=>[i("div",{class:"count"},T),i("div",E)]))),i(Z5)])}}});const xo=()=>i(de,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));xo.displayName="CategoryIcon";const Ro=()=>i(de,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Ro.displayName="TagIcon";const Ol=()=>i(de,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Ol.displayName="TimelineIcon";const Au=()=>i(de,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Au.displayName="SlideIcon";const Bu=()=>i(de,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Bu.displayName="StickyIcon";const hs=()=>i(de,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));hs.displayName="ArticleIcon";const Du=()=>i(de,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Du.displayName="BookIcon";const Tu=()=>i(de,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));Tu.displayName="LinkIcon";const Pu=()=>i(de,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Pu.displayName="ProjectIcon";const Iu=()=>i(de,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Iu.displayName="FriendIcon";const Fo=()=>i(de,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Fo.displayName="SlideDownIcon";const Su=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Su.displayName="EmptyIcon";const Cu=()=>i(de,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Cu.displayName="LockIcon";var J5=F({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:n}){const t=Yt(e,"info"),{info:a,items:s}=q5(e);return()=>{var m,f,g;const{[be.title]:o,[be.type]:l,[be.isEncrypted]:c=!1,[be.cover]:r,[be.excerpt]:p,[be.sticky]:u}=t.value,d=a.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((m=n.cover)==null?void 0:m.call(n,{cover:r}))||(r?[i("img",{class:"vp-article-cover",src:we(r)}),i("meta",{property:"image",content:we(r)})]:[]),u?i(Bu):null,i(Me,{to:e.path},()=>{var b;return((b=n.title)==null?void 0:b.call(n,{title:o,isEncrypted:c,type:l}))||i("header",{class:"vp-article-title"},[c?i(Cu):null,l===Vp.slide?i(Au):null,i("span",{property:"headline"},o)])}),((f=n.excerpt)==null?void 0:f.call(n,{excerpt:p}))||(p?i("div",{class:"vp-article-excerpt",innerHTML:p}):null),i("hr",{class:"vp-article-hr"}),((g=n.info)==null?void 0:g.call(n,{info:d}))||i(uu,{info:d,...s.value?{items:s.value}:{}})]))}}}),Q5=F({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:n}){let t;const a=ie(),s=q(""),o=w(()=>a.value.paginationLocales),l=w(()=>Math.ceil(e.total/e.perPage)),c=w(()=>!!l.value&&l.value!==1),r=w(()=>l.value<7?!1:e.current>4),p=w(()=>l.value<7?!1:e.current<l.value-3),u=w(()=>{const{current:f}=e;let g=1,b=l.value;const B=[];l.value>=7&&(f<=4&&f<l.value-3?(g=1,b=5):f>4&&f>=l.value-3?(b=l.value,g=l.value-4):l.value>7&&(g=f-2,b=f+2));for(let y=g;y<=b;y++)B.push(y);return B}),d=f=>n("updateCurrentPage",f),m=f=>{const g=parseInt(f);g<=l.value&&g>0?d(g):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/g,l.value.toString())}`)};return ue(()=>{t=new km}),()=>i("div",{class:"vp-pagination"},c.value?i("div",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[e.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(e.current-1)},o.value.prev):null,r.value?[i("div",{role:"navigation",onClick:()=>d(1)},1),i("div",{class:"ellipsis"},"...")]:null,u.value.map(f=>i("div",{key:f,class:{active:e.current===f},role:"navigation",onClick:()=>d(f)},f)),p.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>d(l.value)},l.value)]:null,e.current<l.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(e.current+1)},o.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${o.value.navigate}: `),i("input",{id:"navigation-text",value:s.value,onInput:({target:f})=>{s.value=f.value},onKeydown:f=>{f.key==="Enter"&&(f.preventDefault(),m(s.value))}}),i("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>m(s.value)},o.value.action)])]):[])}}),Ll=F({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const n=In(),t=He(),a=Ga(),s=q(1),o=w(()=>a.value.articlePerPage||10),l=w(()=>e.items.slice((s.value-1)*o.value,s.value*o.value)),c=async r=>{s.value=r;const p={...n.query};!(p.page===r.toString()||r===1&&!p.page)&&(r===1?delete p.page:p.page=r.toString(),await t.push({path:n.path,query:p}))};return ue(()=>{const{page:r}=n.query;c(r?Number(r):1),re(s,()=>{const p=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,p)},100)})}),()=>i("div",{id:"article-list",class:"vp-article-list"},l.value.length?[...l.value.map(({info:r,path:p},u)=>i(he,{appear:!0,delay:u*.04},()=>i(J5,{key:p,info:r,path:p}))),i(Q5,{current:s.value,perPage:o.value,total:e.items.length,onUpdateCurrentPage:c})]:i(Su))}}),xl=F({name:"CategoryList",setup(){const e=le(),n=Ma();return()=>i("ul",{class:"vp-category-list"},Oa(n.value.map).map(([t,{path:a,items:s}])=>i("li",{class:["vp-category",`vp-category${Is(t,9)}`,{active:a===e.value.path}]},i(Me,{to:a},()=>[t,i("span",{class:"count"},s.length)]))))}}),Rl=F({name:"TagList",setup(){const e=Ee(),n=$a(),t=a=>{var s;return a===((s=e.value.blog)==null?void 0:s.name)};return()=>i("ul",{class:"tag-list-wrapper"},Oa(n.value.map).map(([a,{path:s,items:o}])=>i("li",{class:["tag",`tag${Is(a,9)}`,{active:t(a)}]},i(Me,{to:s},()=>[a,i("span",{class:"tag-num"},o.length)]))))}}),e3=F({name:"TimelineList",setup(){const e=ie(),n=Sl(),t=Ra(),a=w(()=>e.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>t(n.value.path)},[i(Ol),i("span",{class:"num"},n.value.items.length),a.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},n.value.config.map(({year:s,items:o},l)=>i(he,{appear:!0,delay:.08*(l+1)},()=>i("li",[i("h3",{class:"timeline-year"},s),i("ul",{class:"timeline-year-wrapper"},o.map(({date:c,info:r,path:p})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Me,{class:"timeline-title",to:p},()=>r[be.title])])))])))))])}}),Ou=F({name:"InfoList",setup(){const e=ie(),n=Na(),t=Ma(),a=w(()=>on(t.value.map).length),s=Il(),o=$a(),l=w(()=>on(o.value.map).length),c=Ra(),r=q("article"),p=w(()=>e.value.blogLocales),u=[["article",hs],["category",xo],["tag",Ro],["timeline",Ol]];return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},u.map(([d,m])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{r.value=d}},i("div",{class:["icon-wrapper",{active:r.value===d}],"aria-label":p.value[d],"data-balloon-pos":"up"},i(m))))),i(he,()=>r.value==="article"?i("div",{class:"vp-sticky-article-wrapper"},[i("div",{class:"title",onClick:()=>c(n.value.path)},[i(hs),i("span",{class:"num"},n.value.items.length),p.value.article]),i("hr"),i("ul",{class:"vp-sticky-articles"},s.value.items.map(({info:d,path:m},f)=>i(he,{appear:!0,delay:.08*(f+1)},()=>i("li",{class:"vp-sticky-article"},i(Me,{to:m},()=>d[be.title])))))]):r.value==="category"?i("div",{class:"vp-category-wrapper"},[a.value?i("div",{class:"title",onClick:()=>c(t.value.path)},[i(xo),i("span",{class:"num"},a.value),p.value.category]):null,i("hr"),i(he,{delay:.04},()=>i(xl))]):r.value==="tag"?i("div",{class:"vp-tag-wrapper"},[l.value?i("div",{class:"title",onClick:()=>c(o.value.path)},[i(Ro),i("span",{class:"num"},l.value),p.value.tag]):null,i("hr"),i(he,{delay:.04},()=>i(Rl))]):i(he,()=>i(e3)))])}}),Ls=F({name:"BlogWrapper",slots:Object,setup(e,{slots:n}){const{isMobile:t}=Fa();return()=>[i(Pl),i(Dl,{noSidebar:!0,noToc:!0},{default:()=>n.default(),navScreenBottom:()=>i(Cl),...t.value?{sidebar:()=>i(Ou)}:{}})]}});const Lu=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(he,()=>i(Cl)),i(he,{delay:.04},()=>i(Ou))]);Lu.displayName="InfoPanel";var xs=Lu,n3=F({name:"BlogPage",components:{CategoryList:xl,TagList:Rl},setup(){const e=le(),n=Ee(),t=Ma(),a=$a(),s=w(()=>n.value.blog||{}),o=w(()=>{const{key:c=""}=s.value;return c==="category"?"CategoryList":c==="tag"?"TagList":null}),l=w(()=>{const{name:c="",key:r=""}=s.value;return r==="category"?c?t.value.map[c].items:[]:r==="tag"?c?a.value.map[c].items:[]:[]});return()=>i(Ls,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(he,()=>o.value?i(tn(o.value)):null),s.value.name?i(he,{appear:!0,delay:.24},()=>i(Ll,{key:e.value.path,items:l.value})):null]),i(he,{delay:.16},()=>i(xs,{key:"blog"}))])))}}),t3=F({name:"BlogHero",slots:Object,setup(e,{slots:n}){const t=Ee(),a=Xt(),s=Ne(),o=w(()=>t.value.heroFullScreen??!1),l=w(()=>{const{heroText:r,heroImage:p,heroImageDark:u,heroAlt:d,heroImageStyle:m,tagline:f}=t.value;return{text:r??a.value.title??"Hello",image:p?we(p):null,imageDark:u?we(u):null,heroStyle:m,alt:d||r||"hero image",tagline:f??"",isFullScreen:o.value}}),c=w(()=>{const{bgImage:r,bgImageDark:p,bgImageStyle:u}=t.value;return{image:ge(r)?we(r):r===!1?null:G5,imageDark:ge(p)?we(p):null,bgStyle:u,isFullScreen:o.value}});return()=>{var r,p;return t.value.hero===!1?null:i("div",{ref:s,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!c.value.image}]},[((r=n.heroBg)==null?void 0:r.call(n,c.value))||[c.value.image?i("div",{class:["vp-blog-mask",{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null,c.value.imageDark?i("div",{class:"vp-blog-mask dark",style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.bgStyle]}):null],((p=n.heroInfo)==null?void 0:p.call(n,l.value))||[i(he,{appear:!0,type:"group",delay:.04},()=>[l.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:l.value.imageDark}],style:l.value.heroStyle,src:l.value.image,alt:l.value.alt}):null,l.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:l.value.heroStyle,src:l.value.imageDark,alt:l.value.alt}):null]),i(he,{appear:!0,delay:.08},()=>l.value.text?i("h1",{class:"vp-blog-hero-title"},l.value.text):null),i(he,{appear:!0,delay:.12},()=>l.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:l.value.tagline}):null)],l.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:s.value.clientHeight,behavior:"smooth"})}},[i(Fo),i(Fo)]):null])}}});const a3=["link","article","book","project","friend"];var s3=F({name:"ProjectPanel",components:{ArticleIcon:hs,BookIcon:Du,FriendIcon:Iu,LinkIcon:Tu,ProjectIcon:Pu},setup(){const e=Ee(),n=Jt(),t=Ra(),a=(s="",o="icon")=>a3.includes(s)?i(tn(`${s}-icon`)):ht(s)?i("img",{class:"vp-project-image",src:s,alt:o}):Ss(s)?i("img",{class:"vp-project-image",src:we(s),alt:o}):i(Ke,{icon:s});return()=>{var s;return(s=e.value.projects)!=null&&s.length?i("div",{class:"vp-project-panel"},e.value.projects.map(({icon:o,link:l,name:c,desc:r},p)=>i("div",{class:["vp-project-card",{[`project${p%9}`]:!n.value}],onClick:()=>t(l)},[a(o,c),i("div",{class:"vp-project-name"},c),i("div",{class:"vp-project-desc"},r)]))):null}}}),o3=F({name:"BlogHome",setup(){const e=Na();return()=>i("div",{class:"vp-page vp-blog"},[i(t3),i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(he,{appear:!0,delay:.16},()=>i(s3)),i(he,{appear:!0,delay:.24},()=>i(Ll,{items:e.value.items}))]),i(he,{appear:!0,delay:.16},()=>i(xs,{key:"blog"}))]),i(he,{appear:!0,delay:.28},()=>i(Tl))])}}),l3=F({name:"BlogHome",setup(){return()=>i(Ls,()=>i(o3))}}),xu=F({name:"ArticleType",setup(){const e=le(),n=wn(),t=ie(),a=Na(),s=Il(),o=w(()=>{const l=t.value.blogLocales;return[{text:l.all,path:a.value.path},{text:l.star,path:s.value.path},...[].map(({key:c,path:r})=>({text:l[c],path:r.replace(/^\//,n.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},o.value.map(l=>i("li",{class:["vp-article-type",{active:l.path===e.value.path}]},i(Me,{to:l.path},()=>l.text))))}}),i3=F({name:"BlogPage",setup(){const e=Os(),n=Ee(),t=le(),a=Na(),s=Il(),o=w(()=>{const{key:l="",type:c}=n.value.blog||{};return l==="star"?s.value.items:c==="type"&&l?e.value.items:a.value.items});return()=>i(Ls,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(he,()=>i(xu)),i(he,{appear:!0,delay:.24},()=>i(Ll,{key:t.value.path,items:o.value}))]),i(he,{delay:.16},()=>i(xs,{key:"blog"}))])))}}),c3=F({name:"TimelineItems",setup(){const e=Ga(),n=ie(),t=Sl(),a=w(()=>e.value.timeline||n.value.blogLocales.timelineTitle),s=w(()=>t.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(he,()=>i("li",{class:"motto"},a.value)),i(du,{items:s.value}),t.value.config.map(({year:o,items:l},c)=>i(he,{appear:!0,delay:.08*(c+1),type:"group"},()=>[i("h3",{key:"title",id:o,class:"timeline-year-title"},i("span",o)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},l.map(({date:r,info:p,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},r),i(Me,{class:"timeline-title",to:u},()=>p[be.title])])))])]))]))}}),r3=F({name:"Timeline",components:{ArticleType:xu,CategoryList:xl,TagList:Rl},setup(){return()=>i(Ls,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(he,{appear:!0,delay:.24},()=>i(c3))]),i(he,{delay:.16},()=>i(xs,{key:"blog"}))])))}});const Et="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),lo=Array.from({length:64},(e,n)=>n),ns=e=>Array(e).fill(-1),Hn=[...ns(46),0,1,...lo.slice(54,64),...ns(7),...lo.slice(2,28),...ns(6),...lo.slice(28,54),...ns(5)],uc=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],dc=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],Ru=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Vo=(e,n)=>{if(n<=0||n>e.length)throw Error(`Illegal len: ${n}`);let t=0,a,s;const o=[];for(;t<n;){if(a=e[t++]&255,o.push(Et[a>>2&63]),a=(a&3)<<4,t>=n){o.push(Et[a&63]);break}if(s=e[t++]&255,a|=s>>4&15,o.push(Et[a&63]),a=(s&15)<<2,t>=n){o.push(Et[a&63]);break}s=e[t++]&255,a|=s>>6&3,o.push(Et[a&63]),o.push(Et[s&63])}return o.join("")},p3=(e,n)=>{if(n<=0)throw Error(`Illegal len: ${n}`);const t=e.length;let a=0,s=0,o,l,c,r,p,u;const d=[];for(;a<t-1&&s<n&&(u=e.charCodeAt(a++),o=u<Hn.length?Hn[u]:-1,u=e.charCodeAt(a++),l=u<Hn.length?Hn[u]:-1,!(o==-1||l==-1||(p=o<<2>>>0,p|=(l&48)>>4,d.push(String.fromCharCode(p)),++s>=n||a>=t)||(u=e.charCodeAt(a++),c=u<Hn.length?Hn[u]:-1,c==-1)||(p=(l&15)<<4>>>0,p|=(c&60)>>2,d.push(String.fromCharCode(p)),++s>=n||a>=t)));)u=e.charCodeAt(a++),r=u<Hn.length?Hn[u]:-1,p=(c&3)<<6>>>0,p|=r,d.push(String.fromCharCode(p)),++s;return d.map(m=>m.charCodeAt(0))},u3=(e,n)=>{let t=null;for(typeof e=="number"&&(t=e,e=()=>null);t!==null||(t=e())!==null;)t<128?n(t&127):t<2048?(n(t>>6&31|192),n(t&63|128)):t<65536?(n(t>>12&15|224),n(t>>6&63|128),n(t&63|128)):(n(t>>18&7|240),n(t>>12&63|128),n(t>>6&63|128),n(t&63|128)),t=null},d3=(e,n)=>{let t,a=null;for(;(t=a!==null?a:e())!==null;){if(t>=55296&&t<=57343&&(a=e())!==null&&a>=56320&&a<=57343){n((t-55296)*1024+a-56320+65536),a=null;continue}n(t)}a!==null&&n(a)},v3=(e,n)=>{d3(e,function(t){u3(t,n)})},m3=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,f3=e=>{const n=[];let t=0;return v3(()=>t>=e.length?null:e.charCodeAt(t++),a=>{n.push(a)}),n},wa=(e,n,t,a)=>{let s,o=e[n],l=e[n+1];return o^=t[0],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[1],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[2],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[3],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[4],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[5],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[6],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[7],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[8],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[9],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[10],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[11],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[12],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[13],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[14],s=a[o>>>24],s+=a[256|o>>16&255],s^=a[512|o>>8&255],s+=a[768|o&255],l^=s^t[15],s=a[l>>>24],s+=a[256|l>>16&255],s^=a[512|l>>8&255],s+=a[768|l&255],o^=s^t[16],e[n]=l^t[16+1],e[n+1]=o,e},wt=(e,n)=>{let t=0;for(let a=0;a<4;++a)t=t<<8|e[n]&255,n=(n+1)%e.length;return{key:t,offp:n}},vc=(e,n,t)=>{const a=n.length,s=t.length;let o=0,l=[0,0],c;for(let r=0;r<a;r++)c=wt(e,o),o=c.offp,n[r]=n[r]^c.key;for(let r=0;r<a;r+=2)l=wa(l,0,n,t),n[r]=l[0],n[r+1]=l[1];for(let r=0;r<s;r+=2)l=wa(l,0,n,t),t[r]=l[0],t[r+1]=l[1]},h3=(e,n,t,a)=>{const s=t.length,o=a.length;let l=0,c=[0,0],r;for(let p=0;p<s;p++)r=wt(n,l),l=r.offp,t[p]=t[p]^r.key;l=0;for(let p=0;p<s;p+=2)r=wt(e,l),l=r.offp,c[0]^=r.key,r=wt(e,l),l=r.offp,c[1]^=r.key,c=wa(c,0,t,a),t[p]=c[0],t[p+1]=c[1];for(let p=0;p<o;p+=2)r=wt(e,l),l=r.offp,c[0]^=r.key,r=wt(e,l),l=r.offp,c[1]^=r.key,c=wa(c,0,t,a),a[p]=c[0],a[p+1]=c[1]},mc=(e,n,t,a,s)=>{const o=Ru.slice(),l=o.length;if(t<4||t>31){const m=new Error(`Illegal number of rounds (4-31): ${t}`);if(a===!1)return Promise.reject(m);throw m}if(n.length!==16){const m=new Error(`Illegal salt length: ${n.length} != 16`);if(a===!1)return Promise.reject(m);throw m}t=1<<t>>>0;let c,r,p=0,u;Int32Array?(c=new Int32Array(uc),r=new Int32Array(dc)):(c=uc.slice(),r=dc.slice()),h3(n,e,c,r);const d=()=>{if(s&&s(p/t),p<t){const m=Date.now();for(;p<t&&(p=p+1,vc(e,c,r),vc(n,c,r),!(Date.now()-m>100)););}else{for(p=0;p<64;p++)for(u=0;u<l>>1;u++)wa(o,u<<1,c,r);const m=[];for(p=0;p<l;p++)m.push((o[p]>>24&255)>>>0),m.push((o[p]>>16&255)>>>0),m.push((o[p]>>8&255)>>>0),m.push((o[p]&255)>>>0);return a===!1?Promise.resolve(m):m}if(a===!1)return new Promise(m=>m3(()=>{d().then(m)}))};if(a===!1)return d();{let m;for(;;)if(typeof(m=d())<"u")return m||[]}},g3=e=>{var n;try{const{crypto:t,msCrypto:a}=window,s=new Uint32Array(e);return(n=t||a)==null||n.getRandomValues(s),Array.from(s)}catch{throw Error("WebCryptoAPI is not available")}},k3=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const n=[];return n.push("$2a$"),e<10&&n.push("0"),n.push(e.toString()),n.push("$"),n.push(Vo(g3(16),16)),n.join("")};function _3(e,n,t,a){if(typeof e!="string"||typeof n!="string"){const f=new Error("Invalid string / salt: Not a string");if(t===!1)return Promise.reject(f);throw f}let s,o;if(n.charAt(0)!=="$"||n.charAt(1)!=="2"){const f=new Error("Invalid salt version: "+n.substring(0,2));if(t===!1)return Promise.reject(f);throw f}if(n.charAt(2)==="$")s=String.fromCharCode(0),o=3;else{if(s=n.charAt(2),s!=="a"&&s!=="b"&&s!=="y"||n.charAt(3)!=="$"){const f=Error("Invalid salt revision: "+n.substring(2,4));if(t===!1)return Promise.reject(f);throw f}o=4}if(n.charAt(o+2)>"$"){const f=new Error("Missing salt rounds");if(t===!1)return Promise.reject(f);throw f}const l=parseInt(n.substring(o,o+1),10)*10,c=parseInt(n.substring(o+1,o+2),10),r=l+c,p=n.substring(o+3,o+25);e+=s>="a"?"\0":"";const u=f3(e),d=p3(p,16),m=f=>{const g=[];return g.push("$2"),s>="a"&&g.push(s),g.push("$"),r<10&&g.push("0"),g.push(r.toString()),g.push("$"),g.push(Vo(d,d.length)),g.push(Vo(f,Ru.length*4-1)),g.join("")};return t===!1?mc(u,d,r,!1,a).then(f=>m(f)):m(mc(u,d,r,!0,a))}const b3=(e,n=10)=>{if(typeof n=="number"&&(n=k3(n)),typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return _3(e,n,!0)},Mo=(e,n)=>{if(typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return n.length!==60?!1:b3(e,n.substring(0,n.length-31))===n},Fu=()=>i(de,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Fu.displayName="LockIcon";var Vu=F({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:n}){const t=Ee(),a=ie(),s=q(""),o=q(!1),l=q(!1),c=w(()=>a.value.encryptLocales);let r=null;const p=()=>{r&&clearTimeout(r),o.value=!1,n("verify",s.value,l.value),et().then(()=>{o.value=!0,r=setTimeout(()=>{o.value=!1},1e3)})};return()=>i("div",{class:["vp-decrypt-layer",{expand:e.full||t.value.home}]},i("div",{class:"vp-decrypt-modal"},[i("div",{class:["vp-decrypt-hint",{tried:o.value}]},o.value?c.value.errorHint:i(Fu,{"aria-label":c.value.iconLabel})),i("div",{class:"vp-decrypt-input"},[i("input",{type:"password",value:s.value,placeholder:c.value.placeholder,onInput:({target:u})=>{s.value=u.value},onKeydown:({key:u})=>{u==="Enter"&&p()}})]),i("div",{class:"vp-remember-password"},[i("input",{type:"checkbox",value:l.value,onChange:()=>l.value=!l.value}),c.value.remember]),i("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>p()},"OK")]))}});const Mu=()=>{const e=tt();return w(()=>e.value.encrypt||{})},fc="VUEPRESS_HOPE_GLOBAL_TOKEN",E3=()=>{const e=Mu(),n=gt(fc,""),t=fp(fc,""),a=w(()=>{const{global:o=!1,admin:l=[]}=e.value;return o&&l.length>0}),s=w(()=>{if(a.value){if(n.value)return e.value.admin.some(o=>Mo(n.value,o));if(t.value)return e.value.admin.some(o=>Mo(t.value,o))}return!1});return{isEncrypted:a,isDecrypted:s,validate:(o,l=!1)=>{(l?n:t).value=o}}},io=(e="",n)=>!!e&&Mo(e,n),hc="VUEPRESS_HOPE_PATH_TOKEN",y3=()=>{const e=le(),n=Mu(),t=gt(hc,{}),a=fp(hc,{}),s=l=>Sa(n.value.config)?on(n.value.config).filter(c=>zt(decodeURI(l),c)).sort((c,r)=>r.length-c.length):[],o=l=>{const c=s(l);if(c.length>0){const{config:r={}}=n.value;return{isEncrypted:!0,isDecrypted:c.some(p=>t.value[p]&&r[p].some(u=>io(t.value[p],u))||a.value[p]&&r[p].some(u=>io(a.value[p],u)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:w(()=>o(e.value.path)),getStatus:o,validate:(l,c=!1)=>{const{config:r={}}=n.value,p=s(e.value.path);for(const u of p)if(r[u].filter(d=>io(l,d))){(c?t:a).value[u]=l;break}}}};var w3=F({name:"GlobalEncrypt",slots:Object,setup(e,{slots:n}){const{isDecrypted:t,isEncrypted:a,validate:s}=E3(),o=q(!1);return ue(()=>{o.value=!0}),()=>i(mu,()=>a.value?o.value?t.value?n.default():i(Vu,{full:!0,onVerify:s}):null:n.default())}}),A3=F({name:"LocalEncrypt",slots:Object,setup(e,{slots:n}){const{status:t,validate:a}=y3(),s=q(!1);return ue(()=>{s.value=!0}),()=>{const{isEncrypted:o,isDecrypted:l}=t.value;return o?s.value?l?n.default()||null:i(Vu,{full:!0,onVerify:a}):null:n.default()||null}}});c2(Ke);const B3=Je({enhance:({app:e,router:n})=>{const{scrollBehavior:t}=n.options;n.options.scrollBehavior=async(...a)=>(await vu().wait(),t(...a)),Vf(e),e.component("HopeIcon",Ke),e.component("VPLink",Me),e.component("BloggerInfo",Cl),e.component("GlobalEncrypt",w3),e.component("LocalEncrypt",A3)},setup:()=>{Mf(),Uf(),X5()},layouts:{Layout:L5,NotFound:R5,BlogCategory:n3,BlogHome:l3,BlogType:i3,Timeline:r3}}),Qt=({name:e="",color:n="currentColor"},{slots:t})=>{var a;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:n,"aria-label":`${e} icon`},(a=t.default)==null?void 0:a.call(t))};Qt.displayName="IconBase";const D3=e=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(n=>n.test(e)),T3=e=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(n=>n.test(e)),P3=e=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(n=>n.test(e));function I3(){const e=q(!1);return nt()&&ue(()=>{e.value=!0}),e}function S3(e){return I3(),w(()=>!!e())}const C3=e=>typeof e=="string",O3=(e,n)=>C3(e)&&e.startsWith(n),L3=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),x3=e=>{const[n,t=""]=e.split("#");return n?`${L3(n)}${t?`#${t}`:""}`:e},R3=e=>{var n;if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&((n=e.currentTarget.getAttribute("target"))!=null&&n.match(/\b_blank\b/i))))return e.preventDefault(),!0},F3=({to:e="",class:n="",...t},{slots:a})=>{var l;const s=He(),o=(c={})=>R3(c)?s.push(e).catch():Promise.resolve();return i("a",{...t,class:["vp-link",n],href:we(x3(e)),onClick:o},(l=a.default)==null?void 0:l.call(a))};F3.displayName="VPLink";const V3=()=>S3(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),M3=()=>{const e=V3();return w(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Fl=e=>{const n=wn();return w(()=>e[n.value])},G3=()=>i(Qt,{name:"heading"},()=>i("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));G3.displayName="HeadingIcon";const $3=()=>i(Qt,{name:"heart"},()=>i("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));$3.displayName="HeartIcon";const N3=()=>i(Qt,{name:"history"},()=>i("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));N3.displayName="HistoryIcon";const U3=()=>i(Qt,{name:"title"},()=>i("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));U3.displayName="TitleIcon";const Vl=()=>i(Qt,{name:"search"},()=>i("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));Vl.displayName="SearchIcon";const Gu=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[i("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},i("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},i("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},i("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Gu.displayName="LoadingIcon";const $u=({hint:e})=>i("div",{class:"search-pro-result-wrapper loading"},[i(Gu),e]);$u.displayName="SearchLoading";const z3='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',Ml={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro.worker.js"},Gh={},Nu=Ml.hotKeys,Gl={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",searching:"搜索中",defaultTitle:"文档",select:"选择",navigate:"切换",autocomplete:"自动补全",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}};new URL("data:application/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBDLGdldFN0b3JlZEZpZWxkcyBhcyBSLGF1dG9TdWdnZXN0IGFzIFQsbG9hZEpTT05JbmRleCBhcyB3fWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0ICQgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4IjtpbXBvcnR7ZW50cmllcyBhcyBFfWZyb20idnVlcHJlc3Mtc2hhcmVkL2NsaWVudCI7Y29uc3QgeD0obCxlKT0+e2NvbnN0IG49bC50b0xvd2VyQ2FzZSgpLHM9ZS50b0xvd2VyQ2FzZSgpLG89W107bGV0IHQ9MCxyPTA7Y29uc3QgaT0oYyxnPSExKT0+e2xldCBwPSIiO3I9PT0wP3A9Yy5sZW5ndGg+MjA/YOKApiAke2Muc2xpY2UoLTIwKX1gOmM6Zz9wPWMubGVuZ3RoK3I+MTAwP2Ake2Muc2xpY2UoMCwxMDAtcil94oCmIGA6YzpwPWMubGVuZ3RoPjIwP2Ake2Muc2xpY2UoMCwyMCl9IOKApiAke2Muc2xpY2UoLTIwKX1gOmMscCYmby5wdXNoKHApLHIrPXAubGVuZ3RoLGd8fChvLnB1c2goWyJtYXJrIixlXSkscis9ZS5sZW5ndGgscj49MTAwJiZvLnB1c2goIiDigKYiKSl9O2xldCBoPW4uaW5kZXhPZihzLHQpO2lmKGg9PT0tMSlyZXR1cm4gbnVsbDtmb3IoO2g+PTA7KXtjb25zdCBjPWgrcy5sZW5ndGg7aWYoaShsLnNsaWNlKHQsaCkpLHQ9YyxyPjEwMClicmVhaztoPW4uaW5kZXhPZihzLHQpfXJldHVybiByPDEwMCYmaShsLnNsaWNlKHQpLCEwKSxvfSxTPS9bXHU0ZTAwLVx1OWZhNV0vZyxNPShsPXt9KT0+KHtmdXp6eTouMixwcmVmaXg6ITAscHJvY2Vzc1Rlcm06ZT0+e2NvbnN0IG49ZS5tYXRjaChTKXx8W10scz1lLnJlcGxhY2UoUywiIikudG9Mb3dlckNhc2UoKTtyZXR1cm4gcz9bcywuLi5uXTpbLi4ubl19LC4uLmx9KSxGPShsLGUpPT5lLmNvbnRlbnRzLnJlZHVjZSgobixbLHNdKT0+bitzLDApLWwuY29udGVudHMucmVkdWNlKChuLFssc10pPT5uK3MsMCksXz0obCxlKT0+TWF0aC5tYXgoLi4uZS5jb250ZW50cy5tYXAoKFssbl0pPT5uKSktTWF0aC5tYXgoLi4ubC5jb250ZW50cy5tYXAoKFssbl0pPT5uKSksTz0obCxlLG49e30pPT57Y29uc3Qgcz17fTtyZXR1cm4gQyhlLGwsTSh7Ym9vc3Q6e2g6Mix0OjEsYzo0fSwuLi5ufSkpLmZvckVhY2gobz0+e2NvbnN0e2lkOnQsdGVybXM6cixzY29yZTppfT1vLGg9dC5pbmNsdWRlcygiQCIpLGM9dC5pbmNsdWRlcygiIyIpLFtnLHBdPXQuc3BsaXQoL1sjQF0vKSxtPXIuc29ydCgodSxhKT0+dS5sZW5ndGgtYS5sZW5ndGgpLmZpbHRlcigodSxhKT0+ci5zbGljZShhKzEpLmV2ZXJ5KGY9PiFmLmluY2x1ZGVzKHUpKSkse2NvbnRlbnRzOmR9PXNbZ10/Pz17dGl0bGU6IiIsY29udGVudHM6W119O2lmKGgpZC5wdXNoKFt7dHlwZToiY3VzdG9tRmllbGQiLGtleTpnLGluZGV4OnAsZGlzcGxheTptLm1hcCh1PT5vLmMubWFwKGE9PngoYSx1KSkpLmZsYXQoKS5maWx0ZXIodT0+dSE9PW51bGwpfSxpXSk7ZWxzZXtjb25zdCB1PW0ubWFwKGE9Pngoby5oLGEpKS5maWx0ZXIoYT0+YSE9PW51bGwpO2lmKHUubGVuZ3RoJiZkLnB1c2goW3t0eXBlOmM/ImhlYWRpbmciOiJ0aXRsZSIsa2V5OmcsLi4uYyYme2FuY2hvcjpwfSxkaXNwbGF5OnV9LGldKSwidCJpbiBvKWZvcihjb25zdCBhIG9mIG8udCl7Y29uc3QgZj1tLm1hcCh5PT54KGEseSkpLmZpbHRlcih5PT55IT09bnVsbCk7Zi5sZW5ndGgmJmQucHVzaChbe3R5cGU6InRleHQiLGtleTpnLC4uLmMmJnthbmNob3I6cH0sZGlzcGxheTpmfSxpXSl9fX0pLEUocykuc29ydCgoWyxvXSxbLHRdKT0+U0VBUkNIX1BST19TT1JUX1NUUkFURUdZPT09InRvdGFsIj9GKG8sdCk6XyhvLHQpKS5tYXAoKFtvLHt0aXRsZTp0LGNvbnRlbnRzOnJ9XSk9PntpZighdCl7Y29uc3QgaT1SKGUsbyk7aSYmKHQ9aS5oKX1yZXR1cm57dGl0bGU6dCxjb250ZW50czpyLm1hcCgoW2ldKT0+aSl9fSl9LGs9KGwsZSxuPXt9KT0+VChlLGwsTShuKSkubWFwKCh7c3VnZ2VzdGlvbjpzfSk9PnMpO3NlbGYub25tZXNzYWdlPWFzeW5jKHtkYXRhOnt0eXBlOmw9ImFsbCIscXVlcnk6ZSxsb2NhbGU6bixvcHRpb25zOnN9fSk9Pntjb25zdHtkZWZhdWx0Om99PWF3YWl0ICRbbl0oKSx0PXcobyx7ZmllbGRzOlsiaCIsInQiLCJjIl0sc3RvcmVGaWVsZHM6WyJoIiwidCIsImMiXX0pO2w9PT0ic3VnZ2VzdCI/c2VsZi5wb3N0TWVzc2FnZShrKGUsdCxzKSk6bD09PSJzZWFyY2giP3NlbGYucG9zdE1lc3NhZ2UoTyhlLHQscykpOnNlbGYucG9zdE1lc3NhZ2Uoe3N1Z2dlc3Rpb25zOmsoZSx0LHMpLHJlc3VsdHM6TyhlLHQscyl9KX07Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcAo=",self.location);let H3={};const Uu=Symbol(""),j3=()=>pe(Uu),q3=e=>{e.provide(Uu,H3)},W3=()=>{const e=new Worker(`/RenderDoc/${Ml.worker}`,{}),n=[];return e.addEventListener("message",({data:t})=>{const{resolve:a}=n.shift();a(t)}),{search:t=>new Promise((a,s)=>{e.postMessage(t),n.push({resolve:a,reject:s})}),terminate:()=>{e.terminate(),n.forEach(({reject:t})=>t(new Error("Worker has been terminated.")))}}};const K3=(e,n=!1)=>{const t=q(0),a=w(()=>e.value[t.value]),s=()=>{t.value=t.value>0?t.value-1:e.value.length-1},o=()=>{t.value=t.value<e.value.length-1?t.value+1:0};return re(e,()=>{n||(t.value=0)}),{index:t,item:a,prev:s,next:o}},$l=Symbol(""),Y3=()=>{const e=q(!1);an($l,e)},X3=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Z3=e=>Nu.some(n=>{const{key:t,ctrl:a=!1,shift:s=!1,alt:o=!1,meta:l=!1}=n;return t===e.key&&a===e.ctrlKey&&s===e.shiftKey&&o===e.altKey&&l===e.metaKey}),J3='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',Q3='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',eh='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',nh='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',th=e=>{const n=q([]);{const t=j3(),a=wn();ue(()=>{const s=Cm(c=>{c?o({type:"suggest",query:c,locale:a.value,options:t}).then(r=>{n.value=r.length?O3(r[0],c)&&!r[0].slice(c.length).includes(" ")?r:[c,...r]:[]}).catch(r=>{console.error(r)}):n.value=[]},Ml.suggestDelay),{search:o,terminate:l}=W3();re([e,a],()=>s(e.value),{immediate:!0}),ft(()=>{l()})})}return{suggestions:n}},co=Nu[0];var ah=F({name:"SearchBox",setup(){const e=Fl(Gl),n=pe($l),t=q(!1),a=w(()=>co?[(t.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((s,o)=>co[["ctrl","shift","alt","meta"][o]]),co.key.toUpperCase()]:null);return Fe("keydown",s=>{!n.value&&Z3(s)&&!X3(s.target)&&(s.preventDefault(),n.value=!0)}),ue(()=>{const{userAgent:s}=navigator;t.value=P3(s)||T3(s)||D3(s)}),()=>[i("button",{type:"button",class:"search-pro-button",role:"search","aria-label":e.value.search,onClick:()=>{n.value=!0}},[i(Vl),i("div",{class:"search-pro-placeholder"},e.value.search),a.value?i("div",{class:"search-pro-key-hints"},a.value.map(s=>i("kbd",{class:"search-pro-key"},s))):null])]}});const sh=_({loader:()=>v(()=>import("./SearchResult-bb8805ce.js"),[]),loadingComponent:()=>{const e=Fl(Gl);return i($u,{hint:e.value.loading})}});var oh=F({name:"SearchModal",setup(){const e=pe($l),n=Xt(),t=M3(),a=Fl(Gl),s=q(""),{suggestions:o}=th(s),l=q(!1),{index:c,prev:r,next:p}=K3(o),u=Ne(),d=Ne(),m=(f=c.value)=>{s.value=o.value[f],l.value=!1};return Fe("keydown",f=>{l.value?f.key==="ArrowUp"?r():f.key==="ArrowDown"?p():f.key==="Enter"?m():f.key==="Escape"&&(l.value=!1):f.key==="Escape"&&(e.value=!1)}),ue(()=>{const f=_l(document.body);re(e,async g=>{var b;f.value=g,g&&(await et(),(b=u.value)==null||b.focus())}),Mm(d,()=>{l.value=!1}),ft(()=>{f.value=!1})}),()=>e.value?i("div",{class:"search-pro-modal-wrapper"},[i("div",{class:"search-pro-mask",onClick:()=>{e.value=!1,s.value=""}}),i("div",{class:"search-pro-modal"},[i("div",{class:"search-pro-box"},[i("form",[i("label",{for:"search-pro","aria-label":a.value.search},i(Vl)),i("input",{ref:u,type:"search",class:"search-pro-input",id:"search-pro",placeholder:a.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${n.value.title}-search`,value:s.value,"aria-controls":"search-pro-results",onKeydown:f=>{const{key:g}=f;o.value.length&&(g==="Tab"?(m(),f.preventDefault()):(g==="ArrowDown"||g==="ArrowUp"||g==="Escape")&&f.preventDefault())},onInput:({target:f})=>{s.value=f.value,l.value=!0,c.value=0}}),s.value?i("button",{type:"reset",class:"search-pro-clear-button",innerHTML:z3,onClick:()=>{s.value=""}}):null,l.value&&o.value.length?i("ul",{class:"search-pro-suggestions",ref:d},o.value.map((f,g)=>i("li",{class:["search-pro-suggestion",{active:g===c.value}],onClick:()=>{m(g)}},[i("kbd",{class:"search-pro-auto-complete",title:`Tab ${a.value.autocomplete}`},"Tab"),f]))):null]),i("button",{type:"button",class:"search-pro-close-button",onClick:()=>{e.value=!1,s.value=""}},a.value.cancel)]),i(sh,{query:s.value,isFocusing:!l.value,onClose:()=>{e.value=!1},onUpdateQuery:f=>{s.value=f}}),t.value?null:i("div",{class:"search-pro-hints"},[i("span",{class:"search-pro-hint"},[i("kbd",{innerHTML:J3}),a.value.select]),i("span",{class:"search-pro-hint"},[i("kbd",{innerHTML:eh}),i("kbd",{innerHTML:Q3}),a.value.navigate]),i("span",{class:"search-pro-hint"},[i("kbd",{innerHTML:nh}),a.value.exit])])])]):null}}),lh=Je({enhance({app:e}){q3(e),e.component("SearchBox",ah)},setup(){Y3()},rootComponents:[oh]});const zu=(e,n)=>{const t=e.__vccOpts||e;for(const[a,s]of n)t[a]=s;return t},ih={props:{avatar:String,avatarWidth:Number,alignLeft:Boolean}},ch={class:"avatar"},rh=["src"],ph={class:"message"};function uh(e,n,t,a,s,o){return As(),rr("div",{class:Da(["chat-message",{"align-left":t.alignLeft}])},[ut("div",ch,[ut("img",{src:t.avatar,style:Rt({width:t.avatarWidth+"px"}),alt:"头像"},null,12,rh)]),ut("div",ph,[v0(e.$slots,"default",{},void 0,!0)])],2)}const dh=zu(ih,[["render",uh],["__scopeId","data-v-069fa571"],["__file","chatmessage.vue"]]);let ts;const vh=new Uint8Array(16);function mh(){if(!ts&&(ts=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ts))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ts(vh)}const Ge=[];for(let e=0;e<256;++e)Ge.push((e+256).toString(16).slice(1));function fh(e,n=0){return Ge[e[n+0]]+Ge[e[n+1]]+Ge[e[n+2]]+Ge[e[n+3]]+"-"+Ge[e[n+4]]+Ge[e[n+5]]+"-"+Ge[e[n+6]]+Ge[e[n+7]]+"-"+Ge[e[n+8]]+Ge[e[n+9]]+"-"+Ge[e[n+10]]+Ge[e[n+11]]+Ge[e[n+12]]+Ge[e[n+13]]+Ge[e[n+14]]+Ge[e[n+15]]}const hh=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gc={randomUUID:hh};function gh(e,n,t){if(gc.randomUUID&&!n&&!e)return gc.randomUUID();e=e||{};const a=e.random||(e.rng||mh)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,n){t=t||0;for(let s=0;s<16;++s)n[t+s]=a[s];return n}return fh(a)}const kh={props:{src:String,buttonBackground:String},data(){return{isPlaying:!1,uniqueId:gh()}},methods:{togglePlay(){this.play()},play(){this.isPlaying=!0,this.$refs.gifContainer.src=this.$refs.gifContainer.src+"?"+this.uniqueId,setTimeout(()=>{this.isPlaying=!1},300)}}},_h={class:"boxstyle"},bh=["src"];function Eh(e,n,t,a,s,o){return As(),rr("div",_h,[ut("img",{ref:"gifContainer",src:t.src,alt:"GIF",class:Da({playing:s.isPlaying}),style:Rt({opacity:s.isPlaying?0:1})},null,14,bh),ut("a",{onClick:n[0]||(n[0]=(...l)=>o.togglePlay&&o.togglePlay(...l)),style:Rt({backgroundImage:"url("+t.buttonBackground+")",opacity:s.isPlaying?0:1})},null,4)])}const yh=zu(kh,[["render",Eh],["__scopeId","data-v-5ddf46c5"],["__file","gifwithbutton.vue"]]),wh=Je({enhance:({app:e,router:n,siteData:t})=>{e.component("chatmessage",dh),e.component("gifwithbutton",yh)}}),as=[z1,e2,i2,d2,f2,_2,A2,C2,M2,rf,_f,Df,B3,lh,wh],Ah=[["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/README.md"]],["v-103999a8","/algorithm/01Swap.html",{d:1699973702e3,c:["algorithm"],e:`<h3> 交换函数</h3>
<p><code>swap</code> 是一个用于交换两个变量值的常见算法。在 C++ 中，可以通过以下两种方式实现 <code>swap</code> 函数：</p>
<ol>
<li>
<p><strong>传统的交换方式：</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">T</span><span class="token operator">&gt;</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span>T<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> T<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    T temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Before swap: x = "</span> <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token string">", y = "</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"After swap: x = "</span> <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token string">", y = "</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:.65,words:195},y:"a",t:"Swap|交换函数",O:1},[":md"]],["v-70bc2959","/algorithm/",{d:1699973702e3,e:`<h1> 算法</h1>
<h2> 数据结构</h2>
<iframe src="//player.bilibili.com/player.html?aid=833445598&amp;bvid=BV1hg4y1Q74x&amp;cid=1331191342&amp;p=2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"> </iframe>
`,r:{minutes:.11,words:32},y:"a",t:"算法"},["/algorithm/README.md"]],["v-ec514ab0","/preface/",{y:"p",t:"写在前面",i:"lightbulb"},["/preface/README.md"]],["v-5969763f","/unreal/",{d:1698994095e3,c:["unreal"],g:["unreal"],e:`<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>
<h2> UnrealEngine</h2>
<p>虚幻引擎（英语：Unreal Engine）是一款由Epic Games开发的游戏引擎。</p>

<h2> 前言</h2>
<p>工欲善其事必先利其器。</p>
<h2> 软件下载</h2>
<ol>
<li><a href="/RenderDoc/unreal/%22https:/www.unrealengine.com/zh-CN/" target="blank">中文官网</a></li>
</ol>`,r:{minutes:2.02,words:606},y:"a",t:"unreal",i:"u",O:2},["/unreal/README.md"]],["v-067b5137","/algorithm/sort_%E6%8E%92%E5%BA%8F_/01selectionSort1.html",{d:170073813e4,c:["algorithm"],e:`<h2> 选择排序 (Selection Sort)</h2>

`,r:{minutes:.82,words:245},y:"a",t:"Sort|选择排序(Selection Sort)",O:1},["/algorithm/sort_排序_/01selectionSort1.html","/algorithm/sort[排序]/01selectionSort1.html","/algorithm/sort%5B%E6%8E%92%E5%BA%8F%5D/01selectionSort1.html","/algorithm/sort[排序]/01selectionSort1.md","/algorithm/sort%5B%E6%8E%92%E5%BA%8F%5D/01selectionSort1.md"]],["v-c30cb95a","/algorithm/sort_%E6%8E%92%E5%BA%8F_/02bubbleSort.html",{d:170073813e4,c:["algorithm"],e:`<h2> 冒泡排序 (Bubble Sort)</h2>

<h3> 实现步骤</h3>
<ol>
<li>第一次，左边开始两两对比,如果左边的值大于右边的值,就交换它们，对比结束时末尾是最大数字</li>
<li>第二次，剔除末尾，重复步骤1。</li>
<li>依此类推，进行第三次、第四次，直到整个数组有序。</li>
</ol>

`,r:{minutes:1.23,words:370},y:"a",t:"Sort|冒泡排序 (Bubble Sort)",O:2},["/algorithm/sort_排序_/02bubbleSort.html","/algorithm/sort[排序]/02bubbleSort.html","/algorithm/sort%5B%E6%8E%92%E5%BA%8F%5D/02bubbleSort.html","/algorithm/sort[排序]/02bubbleSort.md","/algorithm/sort%5B%E6%8E%92%E5%BA%8F%5D/02bubbleSort.md"]],["v-392830ea","/language/cpp/",{d:1699887822e3,c:["c++"],g:["介绍","c++"],e:`<figure><figcaption></figcaption></figure>
<h2> 须知</h2>
<blockquote>
<p>万丈高楼平地起,这是U++的基石，这里许多演示都是基于UE蓝图/C++加深理解。</p>
</blockquote>
<h2> c++</h2>
<p>C++是一种被广泛使用的计算机程序设计语言。它是一种通用程序设计语言，支持多重编程范式，例如过程化程序设计、面向对象程序设计、泛型程序设计和函数式程序设计等。</p>

`,r:{minutes:18.88,words:5665},y:"a",t:"c++",i:"c",O:1},["/language/cpp/README.md"]],["v-392c5935","/language/lua/",{d:1699270024e3,c:["lua"],g:["介绍","lua"],e:`<figure><figcaption></figcaption></figure>
<h2> 须知</h2>
<blockquote>
<p>本站只是简单介绍一下lua基础，具体入门还是看大佬教程吧，重点还是关注我自己的项目问题。</p>
</blockquote>
<h2> lua</h2>
<p>Lua 是一种轻量小巧的脚本语言，用标准C语言编写并以源代码形式开放，
其设计目的是为了嵌入应用程序中，比如我们的主角<a href="%22https://www.unrealengine.com/zh-CN/download%22">unreal engine</a></p>

`,r:{minutes:6.79,words:2038},y:"a",t:"lua",i:"l",O:1},["/language/lua/README.md"]],["v-422331e2","/language/markdown/",{d:1698921358e3,c:["Markdown"],g:["介绍","Markdown"],e:`<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>
<h2> Markdown</h2>
<p>Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p>

`,r:{minutes:19.2,words:5761},y:"a",t:"Markdown",i:"fab fa-markdown",O:2},["/language/markdown/README.md"]],["v-59764534","/language/markdown/demo.html",{d:1698921358e3,c:["Markdown"],g:["示例","Markdown"],e:`<!-- markdownlint-disable -->
<h1 style="display: block;"> 一级标题</h1>
<!-- markdownlint-restore -->
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.98,words:894},y:"a",t:"Markdown 示例",i:"fab fa-markdown",O:2},[":md"]],["v-01c2d25b","/tools/git/1-gitignore.html",{d:1698994095e3,c:["Git"],e:`<h2> 忽略规则</h2>
<blockquote>
<p>首先你需要在项目根目录下新建一个 <code>.gitignore</code> 文件</p>
</blockquote>
<ul>
<li>空格不匹配任何文件，可以作为分隔符号</li>
<li>以 <code>#</code> 开始的为注释</li>
<li><code>\\</code> 表示转义符</li>
<li><code>!</code> 开始的表示否定，也就是开启跟踪</li>
<li><code>/</code> 开始的表示项目根目录</li>
<li><code>/</code> 结尾的表示某个文件夹，但是不匹配该文件</li>
<li><code>**</code> 表示多级，其位置可在开始，中间，结束</li>
<li><code>?</code> 表示单个字符</li>
<li><code>[]</code> 表示单个字符列表</li>
</ul>`,r:{minutes:1.68,words:503},y:"a",t:"Git-1.忽略跟踪的文件",O:1},[":md"]],["v-6ac7e2aa","/tools/git/2-repo-tool.html",{d:1698994095e3,c:["Git"],e:`<h2> 前言</h2>
<p>有个小任务，拉取 <a href="https://www.chromium.org/chromium-os/quick-start-guide" target="_blank" rel="noopener noreferrer">Chromium OS</a> 的代码：</p>
<h2> 实践</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.35,words:104},y:"a",t:"Git-2.多仓库工具 Repo",O:2},[":md"]],["v-212109a4","/tools/git/3-commit-message.html",{d:1698994095e3,c:["Git"],g:["husky"],e:`<h2> 前言</h2>
<p>规范的 commit message 有助于团队其它人员 review<a href="https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0" target="_blank" rel="noopener noreferrer">Angular 规范</a>。</p>
<h2> 规范(commit)</h2>
<p>Commit message 包括三个部分：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span> <span class="token comment"># 必填</span>
<span class="token operator">&lt;</span>BLANK LINE<span class="token operator">&gt;</span> <span class="token comment"># 空一行</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span> <span class="token comment"># 可选</span>
<span class="token operator">&lt;</span>BLANK LINE<span class="token operator">&gt;</span> <span class="token comment"># 空一行</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span> <span class="token comment"># 可选</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.77,words:832},y:"a",t:"Git-3.规范 Git 提交信息并生成日志",O:3},[":md"]],["v-3d983470","/tools/git/4-submodule.html",{d:1698994095e3,c:["Git"],e:`<p>当希望某个项目依赖于另外一个项目，虽然有 lerna 的方案可以选择，但若希望它具有独立的 <code>issue</code>、<code>feature</code> 管理，那么可能需要 <code>multi-repo</code> 的形式。</p>
<p>而 <code>submodule</code> 可以做到该行为。</p>
<h2> 使用 submodule</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token parameter variable">-h</span>

<span class="token function">git</span> submodule <span class="token punctuation">[</span>--quiet<span class="token punctuation">]</span> <span class="token function">add</span> <span class="token punctuation">[</span>-b <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token operator">|</span>--force<span class="token punctuation">]</span> <span class="token punctuation">[</span>--name <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--reference <span class="token operator">&lt;</span>repository<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token operator">&lt;</span>repository<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.47,words:142},y:"a",t:"Git-4.使用子模块",O:4},[":md"]],["v-9c10cf40","/tools/git/5-path-problem.html",{d:1699253815e3,c:["Git"],g:["踩坑记录"],e:`<h2> 问题详情</h2>

<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>
<h2> 解决思路</h2>
<blockquote>
<ol>
<li>本地开发环境和部署服务器环境之间的路径解析方式不同所致。</li>
</ol>
</blockquote>
<div class="language-html line-numbers-mode" data-ext="html"><pre html="" class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chatmessage</span> <span class="token attr-name">avatar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/assets/emoji/blzt.png<span class="token punctuation">"</span></span> <span class="token attr-name">:avatarWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
处于项目的根目录，所以相对路径 blzt.png 可以直接找到图片。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chatmessage</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.01,words:304},y:"a",t:"Git-5.路径引发的思考",O:5},[":md"]],["v-ec184d2e","/tools/git/6-rebase-merge.html",{d:1699373749e3,c:["Git"],g:["踩坑记录"],e:`<h2> 问题详情</h2>

<h2> 解析</h2>
<ol>
<li>
<p><strong>合并（Merge）：</strong></p>
<ul>
<li>合并是将两个分支的历史记录合并在一起，创建一个新的合并提交来整合两者的修改。</li>
<li>合并会保留原分支的完整历史记录，因此可以清晰地看到哪些修改来自于哪个分支。</li>
<li>合并会创建一个新的合并提交，这个提交有多个父节点，指向被合并的分支的最新提交和合并分支的最新提交。</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>o---o---o---o---o---o   (分支A)
 \\         /
  o---o---o   (分支B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>合并后：</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>o---o---o---o---o---o---o   (合并提交)
 \\         /           /
  o---o---o   (分支A)   (分支B)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:1.51,words:454},y:"a",t:"Git-6.变基(rebase)和合并(merge)区别？",O:6},[":md"]],["v-245d9bec","/tools/git/",{d:1698921635e3,c:["Git"],g:["介绍","Git"],e:`<h2> 版本控制工具 Git</h2>
<figure><figcaption></figcaption></figure>
<p><a href="%22https://git-scm.com/%22">Git</a>是世界上先进的开源「分布式的版本控制系统」，而SVN是「集中式的版本控制系统」，SVN对于版本的管理集中于中央服务器中，而Git对于版本的管理可以在本地。</p>
<h2> 安装</h2>
<p>工欲善其事必先利其器。<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">下载地址</a></p>`,r:{minutes:6.09,words:1827},y:"a",t:"Git",i:"code-compare"},["/tools/git/README.md"]],["v-eb0f2802","/tools/github/1-download-huge-project-from-github.html",{d:1698994095e3,c:["Github"],g:["踩坑记录"],e:`<h2> 问题详情</h2>
<p>每次下载的项目大一点就很慢。</p>
<h2> 解决方案</h2>
<h3> 1. 梯子</h3>
<blockquote>
<p>国内比较敏感，这个就自己解决吧。</p>
</blockquote>
<h3> 2. 使用 Gitee（码云）</h3>
<blockquote>
<p>Gitee提供了下载 Github 项目的服务。</p>
</blockquote>
<figure><figcaption>github上复制代码</figcaption></figure>
<figure><figcaption>码云上同步</figcaption></figure>`,r:{minutes:.33,words:99},y:"a",t:"Github-1.仓库文件下载慢",O:1},[":md"]],["v-7728bea7","/tools/github/2-switch-multiple-github-accounts.html",{d:1698994095e3,c:["Github"],g:["踩坑记录"],e:`<h2> 问题详情</h2>
<p>有时候要对多个 github 账号进行切换。</p>
<h2> 解决思路</h2>
<h3> 前置准备</h3>
<table>
<thead>
<tr>
<th>账户名</th>
<th>邮箱</th>
</tr>
</thead>
<tbody>
<tr>
<td>username-1</td>
<td>your_email_a@example.com</td>
</tr>
<tr>
<td>username-n</td>
<td>your_email_n@example.com</td>
</tr>
</tbody>
</table>
<div id="section1">
</div>`,r:{minutes:2.08,words:624},y:"a",t:"Github-2.切换多个账号",O:2},[":md"]],["v-c7e4751c","/tools/github/3-sync-a-fork.html",{d:1698994095e3,c:["Github"],g:["踩坑记录"],e:`<h2> 问题详情</h2>
<p>如何同步一个fork?</p>
<h2> 解决思路</h2>
<h3> 1. 配置 upstream</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment"># 以 \`ant-design-vue\` 示例</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/vueComponent/ant-design-vue.git
<span class="token function">git</span> remote <span class="token parameter variable">-v</span> <span class="token comment"># 验证</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.28,words:84},y:"a",t:"Github-3.同步一个 fork",O:3},[":md"]],["v-e5fa9af4","/tools/github/4-ssh-push-failed.html",{d:1698994095e3,c:["Github"],g:["踩坑记录"],e:`<h2> 问题详情</h2>
<p>本着能用一个IDE来完成各自的想法，尝试用<em>Rider</em>开发前端，结果一开始Push就出问题了。</p>
<blockquote>
<ol>
<li>远程空仓库已经建立</li>
</ol>
</blockquote>
<figure><figcaption>无法推送</figcaption></figure>
<blockquote>
<ol start="2">
<li>无法推送项目</li>
</ol>
</blockquote>
<p>git@github.com: Permission denied (publickey). fatal: Could not read from remote...</p>`,r:{minutes:.59,words:178},y:"a",t:"Github-4.ssh key引发的push failed",O:4},[":md"]],["v-1ba8957d","/tools/github/5-autoaction.html",{d:1699224774e3,c:["Github"],g:["踩坑记录"],n:!0,r:{minutes:.34,words:101},y:"a",t:"Github-5.自动部署",O:5},[":md"]],["v-0b69c61f","/tools/github/",{d:1698921635e3,c:["Github"],g:["介绍","Github"],e:`<h2> Github</h2>
<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>
<p><a href="https://help.github.com/cn" target="_blank" rel="noopener noreferrer">Github</a> 是一个基于 web 的代码托管平台，它提供了版本控制和协作功能，使得开发者可以在项目中共同合作、管理和分享代码。</p>
<h2> 参考资料</h2>
<ol>
<li><a href="https://help.github.com/cn" target="_blank" rel="noopener noreferrer">Github</a></li>
</ol>`,r:{minutes:.27,words:80},y:"a",t:"Github",i:"fab fa-github"},["/tools/github/README.md"]],["v-a4588a60","/tools/rider/1-errors.html",{d:170073813e4,c:["rider"],e:`<h2> 修复Rider在UE5.2报错找不到DirectX符号问题</h2>
<h2> 问题复现</h2>

<figure><figcaption></figcaption></figure>
<h2> 解决思路</h2>
<figure><figcaption></figcaption></figure>
<h3> 1.下载文件</h3>
<blockquote>
<p>UE5.2的源码Github中下载<a href="https://github.com/EpicGames/UnrealEngine/blob/5.2/Engine/Source/ThirdParty/Windows/DirectX/DirectX.Build.cs" target="_blank" rel="noopener noreferrer">DirectX.Build.cs</a><br>
放入<span style="color : red ;">UE_5.2(UE根目录)\\Engine\\Source\\ThirdParty\\Windows\\DirectX</span></p>
</blockquote>`,r:{minutes:.84,words:253},y:"a",t:"Rider-1.修复在UE5.2报错找不到DirectX符号问题",O:1},[":md"]],["v-4e3a3e2e","/tools/rider/2-poddoc.html",{d:1704191403e3,c:["rider"],e:`<h2> word转md</h2>


<h2> 1.下载pandoc.exe</h2>
<p><a href="https://github.com/jgm/pandoc/tree/3.1.9" target="_blank" rel="noopener noreferrer">https://github.com/jgm/pandoc/tree/3.1.9</a></p>
<h2> 2.安装</h2>
<figure><figcaption></figcaption></figure>
<h2> 3. Powershell或者CMD</h2>

<figure><figcaption></figcaption></figure>`,r:{minutes:.64,words:193},y:"a",t:"Rider-2.Word转MD",O:2},[":md"]],["v-5de88dbc","/tools/rider/",{d:1699887822e3,c:["rider"],g:["介绍","rider"],e:`<h2> Rider</h2>
<figure><figcaption></figcaption></figure>
<p><a href="https://www.jetbrains.com/zh-cn/rider/" target="_blank" rel="noopener noreferrer">Rider</a>
Rider 是一个成熟的跨平台 .NET IDE。 Rider 可以打开，管理，构建和调试各种基于 .NET Framework，Mono 和 .NET Core 的解决方案，并为 .NET 开发中使用的大多数语言提供编辑支持：C#, VB.NET, ASP.NET 语法，XAML, XML, JavaScript, TypeScript, JSON, HTML, CSS, 和 SQL。</p>`,r:{minutes:.31,words:94},y:"a",t:"Rider",i:"r",O:4},["/tools/rider/README.md"]],["v-792ac5f1","/tools/visualstudio/1-classtool.html",{d:1703391495e3,c:["visualstudio"],e:`<h2> 类图查看工具</h2>
<h3> 打开installer</h3>
<figure><figcaption></figcaption></figure>
<h3> 安装类设计器</h3>
<figure><figcaption></figcaption></figure>
<h3> 启动一个UE项目</h3>
<figure><figcaption></figcaption></figure>
<h3> 任意一个类右键——点击查看类图</h3>
`,r:{minutes:.18,words:54},y:"a",t:"vs-1.类图查看工具",O:1},[":md"]],["v-9be2b5e8","/tools/visualstudio/",{d:1703391495e3,c:["visualStudio"],g:["介绍","visualStudio"],e:`<h2> VisualStudio</h2>
<figure><figcaption></figcaption></figure>
`,r:{minutes:.06,words:18},y:"a",t:"visual Studio",i:"code",O:3},["/tools/visualstudio/README.md"]],["v-2ed462fa","/tools/vscode/1-errors.html",{d:170073813e4,c:["vscode"],e:`<h2> 无法监视文件变化</h2>
<p>其实这个问题存在已久，但是一直没有去处理。</p>
<p>当 VSCode 弹出该提示时会给一个对应的<a href="https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc" target="_blank" rel="noopener noreferrer">链接</a>，执行它提供的命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/sys/fs/inotify/max_user_watches <span class="token comment"># 19200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.97,words:291},y:"a",t:"vscode-1.处理 VSCode 错误",O:1},[":md"]],["v-0aab6ed5","/tools/vscode/2-fix-todo-highlight-links.html",{d:1698994095e3,c:["vscode"],e:`<p><a href="https://github.com/wayou/vscode-todo-highlight" target="_blank" rel="noopener noreferrer">VSCODE-TODO-HIGHLIGHT</a> 在 linux 平台下输出所有事项时对路径进行了编码，导致跳转失败。</p>
<h2> 修复</h2>
<p>由于作者许久未维护且不想发包，所以本地进行修改即可，打开插件安装位置 <code>~/.vscode/extensions</code>，找到 <code>vscode-todo-highlight</code> 的 <code>util</code> 文件：</p>`,r:{minutes:.39,words:118},y:"a",t:"vscode-2.修复 TODO HIGHLIGHT 的链接",O:2},[":md"]],["v-350b14b8","/tools/vscode/",{d:1698921635e3,c:["vscode"],g:["介绍","VSCode"],e:`<h2> VSCode</h2>
<figure><figcaption></figcaption></figure>
<p><a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>（简称 VS Code）是一款由微软开发且跨平台的免费源代码编辑器。
如果部署Rider开发UEc++更好真的极力推荐使用。</p>
<h2> 下载 VSCode</h2>
<p><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">下载地址</a></p>`,r:{minutes:2.35,words:706},y:"a",t:"VSCode",i:"code",O:3},["/tools/vscode/README.md"]],["v-5aa2c605","/tools/vuepress/",{d:1699224774e3,c:["vuepress"],g:["介绍","VuePress"],e:`<h2> VuePress</h2>
<figure><figcaption></figcaption></figure>
<p><a href="%22https://v2.vuepress.vuejs.org/%22">VuePress</a> 是一个以 Markdown 为中心的静态网站生成器。你可以使用 <a href="https://zh.wikipedia.org/wiki/Markdown" target="_blank" rel="noopener noreferrer">Markdown</a> 来书写内容 (如文档、博客等) ，然后 VuePress 会帮助你生成一个静态网站来展示它们。
<br>我们这里使用的是<a href="%22https://theme-hope.vuejs.press/zh/%22">VuePress Theme Hope</a> 版本。</p>
`,r:{minutes:.32,words:95},y:"a",t:"VuePress",i:"fab fa-vuejs",O:3},["/tools/vuepress/README.md"]],["v-a839441a","/tools/vuepress/vuepress-add-comp.html",{d:1699224774e3,c:["vuepress"],e:`<h2> 问题描述</h2>
<p>vuepress添加自定义组件-以实现聊天气泡为例。</p>
<h2> 实现目标</h2>

<h2> 实现思路</h2>
<h3> 方案1：Markdown镶嵌HTML</h3>
<h4> 1. 添加到 VuePress 项目中的 Markdown 文件中：</h4>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chat-container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chat-message<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ width: avatarWidth + 'px' }<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>头像<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这是一条聊天消息。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.9,words:569},y:"a",t:"vuepress-1.添加自定义组件",O:1},[":md"]],["v-483f6eb7","/unreal/core_%E6%A0%B8%E5%BF%83_/1-Gameplay.html",{d:1704306851e3,c:["u++"],e:`<blockquote>
<p>天地除开，诞生了第一缕<code>UObject</code>，各自进化成Actor+Component、Level、World、WorldContext、GameInstance等。<br>
有这么一天，UEngine大佬出现自称为帝，掌管所有UObject，还给各种UObject划分职责。有的管理游戏逻辑、有的管理游戏表现、有的管理游戏数据。</p>
</blockquote>
`,r:{minutes:13.95,words:4184},y:"a",t:"c1.GamePlay|导言",O:1},["/unreal/core_核心_/1-Gameplay.html","/unreal/core[核心]/1-Gameplay.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/1-Gameplay.html","/unreal/core[核心]/1-Gameplay.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/1-Gameplay.md"]],["v-9f505d48","/unreal/core_%E6%A0%B8%E5%BF%83_/10-GameSave.html",{d:17059468e5,c:["u++"],e:`
<h3> JSON</h3>
<p><strong>1. 安装官方插件</strong></p>
<figure><figcaption></figcaption></figure>
<p><strong>2. Build.cs</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>PrivateDependencyModuleNames<span class="token punctuation">.</span><span class="token function">AddRange</span><span class="token punctuation">(</span><span class="token keyword">new</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">"JsonUtilities"</span> <span class="token punctuation">,</span><span class="token string">"Json"</span><span class="token punctuation">,</span> <span class="token string">"JsonBlueprintUtilities"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.91,words:273},y:"a",t:"c10.GameLoad&Save",O:1e3},["/unreal/core_核心_/10-GameSave.html","/unreal/core[核心]/10-GameSave.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/10-GameSave.html","/unreal/core[核心]/10-GameSave.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/10-GameSave.md"]],["v-aaba400c","/unreal/core_%E6%A0%B8%E5%BF%83_/10.1-JsonTOString.html",{d:17059468e5,c:["u++"],e:`
<figure><figcaption></figcaption></figure>
<h3> 1.找到定义</h3>
<figure><figcaption></figcaption></figure>
<h3> 2. 发现是宏函数，使用了通配符，所以要找到具体的定义函数cpp</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code> P_NATIVE_BEGIN
    bResult <span class="token operator">=</span> <span class="token class-name">FJsonObjectConverter</span><span class="token double-colon punctuation">::</span><span class="token function">UStructToJsonObjectString</span><span class="token punctuation">(</span>StructProperty<span class="token operator">-&gt;</span>Struct<span class="token punctuation">,</span> ValuePtr<span class="token punctuation">,</span> OutJsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    P_NATIVE_END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.43,words:130},y:"a",t:"c11.JsonToString",O:1e3},["/unreal/core_核心_/10.1-JsonTOString.html","/unreal/core[核心]/10.1-JsonTOString.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/10.1-JsonTOString.html","/unreal/core[核心]/10.1-JsonTOString.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/10.1-JsonTOString.md"]],["v-10f4f7c9","/unreal/core_%E6%A0%B8%E5%BF%83_/2-GameMode.html",{d:1704306851e3,c:["u++"],e:`
<h2> 1. 新建GameMode类</h2>
<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>
<table>
<thead>
<tr>
<th>类别</th>
<th>类名</th>
<th>用途</th>
</tr>
</thead>
<tbody>
<tr>
<td>APawn class</td>
<td>游戏中的角色</td>
<td>代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。</td>
</tr>
<tr>
<td>AHUD class</td>
<td>Heads-Up Display (HUD)</td>
<td>用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。</td>
</tr>
<tr>
<td>APlayerController class</td>
<td>玩家控制器</td>
<td>处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。</td>
</tr>
<tr>
<td>AGameState class</td>
<td>游戏状态</td>
<td>负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。</td>
</tr>
<tr>
<td>APlayerState class</td>
<td>玩家状态</td>
<td>保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。</td>
</tr>
<tr>
<td>ASpectatorPawn class</td>
<td>观察者角色</td>
<td>允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。</td>
</tr>
</tbody>
</table>`,r:{minutes:1.47,words:440},y:"a",t:"c2.GameMode|游戏模式",O:200},["/unreal/core_核心_/2-GameMode.html","/unreal/core[核心]/2-GameMode.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/2-GameMode.html","/unreal/core[核心]/2-GameMode.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/2-GameMode.md"]],["v-2304f0b0","/unreal/core_%E6%A0%B8%E5%BF%83_/3-Singleton.html",{d:1704306851e3,c:["u++"],e:`




<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>  
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MyClass<span class="token operator">*</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//Do Someting</span>
    <span class="token keyword">delete</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.73,words:2019},y:"a",t:"c3.Singleton|单例",O:300},["/unreal/core_核心_/3-Singleton.html","/unreal/core[核心]/3-Singleton.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/3-Singleton.html","/unreal/core[核心]/3-Singleton.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/3-Singleton.md"]],["v-0d5dfba3","/unreal/core_%E6%A0%B8%E5%BF%83_/4-Subsystem.html",{d:1704306851e3,c:["u++"],e:`

<figure><figcaption></figcaption></figure>

<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/** Subsystems are auto instanced classes that share the lifetime of certain engine constructs
 * 
 *	Currently supported Subsystem lifetimes are:
 *		Engine		 -&gt; inherit UEngineSubsystem
 *		Editor		 -&gt; inherit UEditorSubsystem
 *		GameInstance -&gt; inherit UGameInstanceSubsystem
 *		World		 -&gt; inherit UWorldSubsystem
 *		LocalPlayer	 -&gt; inherit ULocalPlayerSubsystem
 *
 *
 *	Normal Example:
 *		class UMySystem : public UGameInstanceSubsystem
 *	Which can be accessed by:
 *		UGameInstance* GameInstance = ...;
 *		UMySystem* MySystem = GameInstance-&gt;GetSubsystem&lt;UMySystem&gt;();
 *
 *	or the following if you need protection from a null GameInstance
 *		UGameInstance* GameInstance = ...;
 *		UMyGameSubsystem* MySubsystem = UGameInstance::GetSubsystem&lt;MyGameSubsystem&gt;(GameInstance);
 *
 *
 *	You can get also define interfaces that can have multiple implementations.
 *	Interface Example :
 *      MySystemInterface
 *    With 2 concrete derivative classes:
 *      MyA : public MySystemInterface
 *      MyB : public MySystemInterface
 *
 *	Which can be accessed by:
 *		UGameInstance* GameInstance = ...;
 *		const TArray&lt;UMyGameSubsystem*&gt;&amp; MySubsystems = GameInstance-&gt;GetSubsystemArray&lt;MyGameSubsystem&gt;();
 *
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.05,words:2714},y:"a",t:"c4.Subsystem|子系统",O:400},["/unreal/core_核心_/4-Subsystem.html","/unreal/core[核心]/4-Subsystem.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/4-Subsystem.html","/unreal/core[核心]/4-Subsystem.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/4-Subsystem.md"]],["v-d167da6a","/unreal/core_%E6%A0%B8%E5%BF%83_/4.1-SubsystemUse.html",{d:1704306851e3,c:["u++"],e:`<h2> Subsystem|实践</h2>

<h3> 1. 继承对应的子系统</h3>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 引擎		-&gt; 继承 UEngineSubsystem
<span class="token list punctuation">-</span> 编辑器		-&gt; 继承 UEditorSubsystem
<span class="token list punctuation">-</span> 游戏实例	-&gt; 继承 UGameInstanceSubsystem
<span class="token list punctuation">-</span> 世界		-&gt; 继承 UWorldSubsystem
<span class="token list punctuation">-</span> 本地玩家	-&gt; 继承 ULocalPlayerSubsystem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.81,words:243},y:"a",t:"c4.1Subsystem|实践",O:401},["/unreal/core_核心_/4.1-SubsystemUse.html","/unreal/core[核心]/4.1-SubsystemUse.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/4.1-SubsystemUse.html","/unreal/core[核心]/4.1-SubsystemUse.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/4.1-SubsystemUse.md"]],["v-43889d7a","/unreal/core_%E6%A0%B8%E5%BF%83_/4.2-EnhancedInput.html",{d:1704306851e3,c:["u++"],e:`<h3> 导读</h3>

<h2> EnhancedInput|增强输入系统</h2>

<h3> 1.插件</h3>

<figure><figcaption></figcaption></figure>
<h3> 2.项目设置</h3>

<figure><figcaption></figcaption></figure>
<h3> 3.输入动作（Input Actions）</h3>

<figure><figcaption></figcaption></figure>


<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>`,r:{minutes:8.55,words:2564},y:"a",t:"c4.2EnhancedInput",O:402},["/unreal/core_核心_/4.2-EnhancedInput.html","/unreal/core[核心]/4.2-EnhancedInput.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/4.2-EnhancedInput.html","/unreal/core[核心]/4.2-EnhancedInput.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/4.2-EnhancedInput.md"]],["v-cbf14a10","/unreal/core_%E6%A0%B8%E5%BF%83_/5-Interface.html",{d:1704306851e3,c:["u++"],e:`


<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>    <span class="token keyword">class</span> <span class="token class-name">IMyInterface</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">MyMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 实现接口的类</span>
    <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">IMyInterface</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">MyMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 实现接口方法的具体逻辑</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.27,words:381},y:"a",t:"c5.Interface|接口",O:500},["/unreal/core_核心_/5-Interface.html","/unreal/core[核心]/5-Interface.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/5-Interface.html","/unreal/core[核心]/5-Interface.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/5-Interface.md"]],["v-347c1406","/unreal/core_%E6%A0%B8%E5%BF%83_/6-Delegate.html",{d:1704306851e3,c:["u++"],e:`<h2> 委托|Delegate</h2>


<figure><figcaption></figcaption></figure>


<ol>
<li>
<p><strong>泛型但类型安全的方式：</strong></p>
<ul>
<li>委托是一种泛型但类型安全的机制，允许在运行时动态绑定到对象的成员函数。这意味着你可以在不知道对象类型的情况下，安全地调用其成员函数。</li>
</ul>
</li>
<li>
<p><strong>动态绑定到任意对象的成员函数：</strong></p>
<ul>
<li>委托允许你动态地绑定到任意对象的成员函数。这种灵活性使得在运行时能够决定要调用的函数，而不需要在编译时就确定。</li>
</ul>
</li>
<li>
<p><strong>安全地复制委托对象：</strong></p>
<ul>
<li>复制委托对象是安全的。这意味着你可以创建一个委托的副本，而不会影响原始委托的状态。每个委托对象都独立于其他委托对象。</li>
</ul>
</li>
<li>
<p><strong>值传递委托需要在堆上分配内存：</strong></p>
<ul>
<li>值传递委托，即通过值传递委托对象，需要在堆上分配内存。这样的操作相对较慢，因此通常不推荐。最好通过引用传递委托，以避免额外的内存分配。</li>
</ul>
</li>
<li>
<p><strong>尽量通过引用传递委托：</strong></p>
<ul>
<li>为了避免性能开销，推荐通过引用传递委托，而不是通过值传递。这样可以避免在堆上分配内存，提高代码执行效率。</li>
</ul>
</li>
</ol>`,r:{minutes:14.9,words:4471},y:"a",t:"c6.Delegate|委托",O:600},["/unreal/core_核心_/6-Delegate.html","/unreal/core[核心]/6-Delegate.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/6-Delegate.html","/unreal/core[核心]/6-Delegate.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/6-Delegate.md"]],["v-88753b6a","/unreal/core_%E6%A0%B8%E5%BF%83_/6.1-DelegateUse.html",{d:1704306851e3,c:["u++"],e:`<h2> 单播委托</h2>
<h3> 1. <strong>声明委托：</strong></h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">DECLARE_DELEGATE</span><span class="token punctuation">(</span>FMyDelegate<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//无参数</span>
<span class="token function">DECLARE_DELEGATE_OneParam</span><span class="token punctuation">(</span>FMyDelegateOneParam<span class="token punctuation">,</span>int32<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//带参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.78,words:1134},y:"a",t:"c6.1Delegate|实践",O:601},["/unreal/core_核心_/6.1-DelegateUse.html","/unreal/core[核心]/6.1-DelegateUse.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/6.1-DelegateUse.html","/unreal/core[核心]/6.1-DelegateUse.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/6.1-DelegateUse.md"]],["v-9c7552aa","/unreal/core_%E6%A0%B8%E5%BF%83_/7-GameFeature.html",{d:1704306851e3,c:["u++"],e:`<h2> GameplayFeature</h2>
<p>游戏功能（Game Features） 和 模块化Gameplay（Modular Gameplay） 插件可以帮助开发人员为项目创建独立功能。</p>
<h3> 概念</h3>


<figure><figcaption></figcaption></figure>


<h2> 实践</h2>
<h3> 1.插件</h3>
<figure><figcaption></figcaption></figure>
<h3> 2.错误提示</h3>
<figure><figcaption></figcaption></figure>
<h3> 3. 根据游戏模式设置特性</h3>`,r:{minutes:2.57,words:772},y:"a",t:"c7.GF|GameplayFeature",O:700},["/unreal/core_核心_/7-GameFeature.html","/unreal/core[核心]/7-GameFeature.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/7-GameFeature.html","/unreal/core[核心]/7-GameFeature.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/7-GameFeature.md"]],["v-5fc23eb5","/unreal/core_%E6%A0%B8%E5%BF%83_/8-GAS.html",{d:1704306851e3,c:["u++"],e:`<h2> GAS概述</h2>
<p>Gameplay技能系统（Gameplay Ability System） 是构建Actor可以拥有和触发的技能和交互的一种框架。</p>
<p>TODO</p>
<h2> 参考链接</h2>
<p><a href="https://docs.unrealengine.com/5.0/zh-CN/getting-started-with-the-gameplay-ability-system-in-unreal-engine/" target="_blank" rel="noopener noreferrer">官网</a></p>
<p><a href="https://github.com/BillEliot/GASDocumentation_Chinese" target="_blank" rel="noopener noreferrer">GITHUB</a></p>`,r:{minutes:.21,words:64},y:"a",t:"c8.GAS|Gameplay Ability System",O:800},["/unreal/core_核心_/8-GAS.html","/unreal/core[核心]/8-GAS.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/8-GAS.html","/unreal/core[核心]/8-GAS.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/8-GAS.md"]],["v-35a3a78f","/unreal/core_%E6%A0%B8%E5%BF%83_/9-Spectating.html",{d:1704306851e3,c:["u++"],e:`<h2> Spectating System</h2>
<p>观战系统直观的分为两类，一类是主动观战系统比如比赛、观战模式。一类则是被动的，比如死亡观战。</p>


<h3> 1.观战类|SpectatorPawn</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UMySpectatorPawnr <span class="token operator">:</span> <span class="token keyword">public</span> APawn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.68,words:203},y:"a",t:"c9.Spectating System|观战系统",O:900},["/unreal/core_核心_/9-Spectating.html","/unreal/core[核心]/9-Spectating.html","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/9-Spectating.html","/unreal/core[核心]/9-Spectating.md","/unreal/core%5B%E6%A0%B8%E5%BF%83%5D/9-Spectating.md"]],["v-3d686d76","/unreal/error_%E9%94%99%E8%AF%AF_/01Build%20Fail.html",{d:1706221621e3,c:["u++"],e:`
<figure><figcaption></figcaption></figure>
<h2> 解决思路</h2>
<ol>
<li>
<p><strong>检查代码中的拼写和语法错误</strong>：</p>
<ul>
<li>确保代码中没有拼写错误或语法错误，可能导致编译器无法识别符号。</li>
</ul>
</li>
<li>
<p><strong>检查头文件和库的包含路径</strong>：</p>
<ul>
<li>确保你在项目中正确包含了所需的头文件和库文件。</li>
</ul>
</li>
<li>
<p><strong>确保依赖项正确链接</strong>：</p>
<ul>
<li>确保项目正确链接了所需的库文件，一般情况下都是对应的<code>xxx.build.cs</code>没有引入模块依赖。</li>
</ul>
</li>
</ol>`,r:{minutes:.82,words:247},y:"a",t:"无法解析外部符号，无法解析外部命令 和命令“xxx”已退出。",O:1,s:"Error1.无法解析外部符号..."},["/unreal/error_错误_/01Build Fail.html","/unreal/error[错误]/01Build Fail.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/01Build%20Fail.html","/unreal/error[错误]/01Build Fail.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/01Build%20Fail.md"]],["v-5d651e98","/unreal/error_%E9%94%99%E8%AF%AF_/02ClassRedirects.html",{d:1706221621e3,c:["u++"],e:`
<figure><figcaption></figcaption></figure>
<h2> 问题复现</h2>

<figure><figcaption></figcaption></figure>
<h2> 解决思路</h2>
<h3> 1. DefaultEngine/Game.ini添加对应类的重定向</h3>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">CoreRedirects</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">+ClassRedirects</span><span class="token punctuation">=</span><span class="token value attr-value">(OldName="/Script/Lyra.GameUIPolicy(旧项目名.类)",NewName="/Script/NEW.GameUIPolicy(新项目名.类)")</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.53,words:160},y:"a",t:"Error2.项目迁移蓝图父类重定向",O:2},["/unreal/error_错误_/02ClassRedirects.html","/unreal/error[错误]/02ClassRedirects.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/02ClassRedirects.html","/unreal/error[错误]/02ClassRedirects.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/02ClassRedirects.md"]],["v-0357c5b0","/unreal/error_%E9%94%99%E8%AF%AF_/03CreateSessionError.html",{d:1706221621e3,c:["u++"],e:`
<h3> 解决思路</h3>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">/Script/Engine.GameEngine</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">+NetDriverDefinitions</span><span class="token punctuation">=</span><span class="token value attr-value">(DefName="GameNetDriver",DriverClassName="OnlineSubsystemSteam.SteamNetDriver",DriverClassNameFallback="OnlineSubsystemUtils.IpNetDriver")</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">OnlineSubsystem</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">DefaultPlatformService</span><span class="token punctuation">=</span><span class="token value attr-value">Steam</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">OnlineSubsystemSteam</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bEnabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">SteamDevAppId</span><span class="token punctuation">=</span><span class="token value attr-value">480</span>
<span class="token comment">;这一行必须的</span>
<span class="token key attr-name">bInitServerOnClient</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">/Script/OnlineSubsystemSteam.SteamNetDriver</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">NetConnectionClassName</span><span class="token punctuation">=</span><span class="token value attr-value">OnlineSubsystemSteam.SteamNetConnection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.3,words:89},y:"a",t:"Error3.会话创建失败问题",O:3},["/unreal/error_错误_/03CreateSessionError.html","/unreal/error[错误]/03CreateSessionError.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/03CreateSessionError.html","/unreal/error[错误]/03CreateSessionError.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/03CreateSessionError.md"]],["v-63c0fb6b","/unreal/error_%E9%94%99%E8%AF%AF_/04EncodeError.html",{d:1706221621e3,c:["u++"],e:`

<h3> 解决思路</h3>
<figure><figcaption></figcaption></figure>

<h3> 扩展阅读</h3>

<table>
<thead>
<tr>
<th>术语</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>字符集</td>
<td>一组字符的集合，每个字符有唯一的数值（码点）和表示方式。常见有ASCII、ISO-8859、UTF-8等。</td>
</tr>
<tr>
<td>Unicode</td>
<td>全球字符编码标准，为世界上各种语言和符号提供唯一的数字代码，每个字符有唯一的码点。</td>
</tr>
<tr>
<td>UTF-8</td>
<td>一种变长的字符编码方式，用于存储Unicode字符，兼容ASCII，使用1到4个字节表示不同范围的字符。</td>
</tr>
<tr>
<td>UTF-16</td>
<td>Unicode字符编码的变体，使用16位编码单元表示字符，使用1或2个16位编码单元表示不同范围的字符。</td>
</tr>
<tr>
<td>字符编码</td>
<td>规定字符如何映射到数字编码的规则，决定了字符在计算机内存和文本文件中的表示方式。常见有ASCII、ISO-8859、UTF-8、UTF-16等。</td>
</tr>
<tr>
<td>乱码</td>
<td>使用不同字符编码读取或显示文本时导致的问题，表现为预期的字符无法正确显示或被错误解释。</td>
</tr>
</tbody>
</table>`,r:{minutes:1.44,words:432},y:"a",t:"Error4.编码格式导致的中文乱码",O:4},["/unreal/error_错误_/04EncodeError.html","/unreal/error[错误]/04EncodeError.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/04EncodeError.html","/unreal/error[错误]/04EncodeError.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/04EncodeError.md"]],["v-0dc93dd0","/unreal/error_%E9%94%99%E8%AF%AF_/05GameFeatureError.html",{d:1706221621e3,c:["u++"],e:`
<figure><figcaption></figcaption></figure>

<h3> 解决思路</h3>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>
`,r:{minutes:.48,words:143},y:"a",t:"Error5.GameplayFeature不显示插件目录",O:5},["/unreal/error_错误_/05GameFeatureError.html","/unreal/error[错误]/05GameFeatureError.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/05GameFeatureError.html","/unreal/error[错误]/05GameFeatureError.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/05GameFeatureError.md"]],["v-9cb8d68c","/unreal/error_%E9%94%99%E8%AF%AF_/06Mouse.html",{d:1706221621e3,c:["u++"],e:`
<h3> 解决思路</h3>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<blockquote>
<p>编辑器中</p>
</blockquote>
<figure><figcaption></figcaption></figure>

<blockquote>
<p>独立运行</p>
</blockquote>
<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>`,r:{minutes:.82,words:247},y:"a",t:"Error6.增强输入优先级",O:6},["/unreal/error_错误_/06Mouse.html","/unreal/error[错误]/06Mouse.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/06Mouse.html","/unreal/error[错误]/06Mouse.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/06Mouse.md"]],["v-283ae959","/unreal/error_%E9%94%99%E8%AF%AF_/07SubsystemError.html",{d:1706221621e3,c:["u++"],e:`
<figure><figcaption></figcaption></figure>

<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	InventorySubsystem <span class="token operator">=</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetGameInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UExorcistInventorySubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">check</span><span class="token punctuation">(</span>InventorySubsystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	ExtensionSubsystem <span class="token operator">=</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetGameInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UUIExtensionSubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">check</span><span class="token punctuation">(</span>ExtensionSubsystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.34,words:101},y:"a",t:"Error7.TSubsystemClass must be derived from TBaseType",O:7},["/unreal/error_错误_/07SubsystemError.html","/unreal/error[错误]/07SubsystemError.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/07SubsystemError.html","/unreal/error[错误]/07SubsystemError.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/07SubsystemError.md"]],["v-2327fc34","/unreal/error_%E9%94%99%E8%AF%AF_/08TObjectPtrError.html",{d:1706221621e3,c:["u++"],e:`
<figure><figcaption>functionerror001.png</figcaption></figure>
<ol>
<li>目前只有属性中可以使用TObjectPtr</li>
</ol>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UPROPERTY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
TObjectPtr<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> MYActor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.38,words:114},y:"a",t:"Error8.UFunctions cannot take a TObjectPtr as a parameter.",O:8},["/unreal/error_错误_/08TObjectPtrError.html","/unreal/error[错误]/08TObjectPtrError.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/08TObjectPtrError.html","/unreal/error[错误]/08TObjectPtrError.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/08TObjectPtrError.md"]],["v-9edab39e","/unreal/error_%E9%94%99%E8%AF%AF_/09SkeletalMeshAnimError.html",{d:1706221621e3,c:["u++"],e:`


<figure><figcaption></figcaption></figure>

`,r:{minutes:1.91,words:572},y:"a",t:"Error9.骨骼网格体动画天坑！",O:9},["/unreal/error_错误_/09SkeletalMeshAnimError.html","/unreal/error[错误]/09SkeletalMeshAnimError.html","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/09SkeletalMeshAnimError.html","/unreal/error[错误]/09SkeletalMeshAnimError.md","/unreal/error%5B%E9%94%99%E8%AF%AF%5D/09SkeletalMeshAnimError.md"]],["v-c0277cb6","/unreal/exp_%E7%BB%8F%E9%AA%8C_/1-GoodJob.html",{d:1701100984e3,c:["u++"],e:`
<h2> 操作记录</h2>
<h3> 1.归档</h3>
<figure><figcaption></figcaption></figure>
<h3> 2.备份</h3>

<figure><figcaption></figcaption></figure>
`,r:{minutes:.29,words:86},y:"a",t:"EXP1.保存|归档|备份",O:1},["/unreal/exp_经验_/1-GoodJob.html","/unreal/exp[经验]/1-GoodJob.html","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/1-GoodJob.html","/unreal/exp[经验]/1-GoodJob.md","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/1-GoodJob.md"]],["v-00d42220","/unreal/exp_%E7%BB%8F%E9%AA%8C_/2-Blueprint2CPP.html",{d:1701100984e3,c:["u++"],e:`
<h2> 实践</h2>
<h3> 1. 创建对应的蓝图版本</h3>

<figure><figcaption></figcaption></figure>
<h3> 2.  蓝图实现一遍功能，前往定义查看C++</h3>

<figure><figcaption></figcaption></figure>
<h3> 3. 使用GPT。</h3>

<figure><figcaption></figcaption></figure>
<h3> 4. 代码补全插件</h3>

<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>`,r:{minutes:.91,words:273},y:"a",t:"EXP2.蓝图节点对应C++源码",O:2},["/unreal/exp_经验_/2-Blueprint2CPP.html","/unreal/exp[经验]/2-Blueprint2CPP.html","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/2-Blueprint2CPP.html","/unreal/exp[经验]/2-Blueprint2CPP.md","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/2-Blueprint2CPP.md"]],["v-0c3c87db","/unreal/exp_%E7%BB%8F%E9%AA%8C_/3-Blueprint2CPP-1.html",{d:1701100984e3,c:["u++"],e:`
<h2> 实践</h2>
<h3> 1. 新建一个蓝图函数库类</h3>

<figure><figcaption></figcaption></figure>
<h3> 2. Const控制</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category <span class="token operator">=</span><span class="token string">"TEST"</span><span class="token punctuation">,</span>meta <span class="token operator">=</span> <span class="token punctuation">(</span> tooltip <span class="token operator">=</span> <span class="token string">"值传递"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">PassbyValue</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>ACameraActor<span class="token operator">*</span><span class="token operator">&gt;</span>Camera<span class="token punctuation">,</span> int32 test<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category <span class="token operator">=</span><span class="token string">"TEST"</span><span class="token punctuation">,</span>meta <span class="token operator">=</span> <span class="token punctuation">(</span> tooltip <span class="token operator">=</span> <span class="token string">"值引用"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">PassbyConstReference</span><span class="token punctuation">(</span><span class="token keyword">const</span> TArray<span class="token operator">&lt;</span>ACameraActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> Camera<span class="token punctuation">,</span> <span class="token keyword">const</span> int32 test<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category <span class="token operator">=</span><span class="token string">"TEST"</span><span class="token punctuation">,</span>meta <span class="token operator">=</span> <span class="token punctuation">(</span> tooltip <span class="token operator">=</span> <span class="token string">"const修饰的值引用"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">PassbyReference</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>ACameraActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> Camera<span class="token punctuation">,</span>int32 <span class="token operator">&amp;</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.64,words:192},y:"a",t:"EXP3.C++控制蓝图节点输入输出",O:3},["/unreal/exp_经验_/3-Blueprint2CPP-1.html","/unreal/exp[经验]/3-Blueprint2CPP-1.html","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/3-Blueprint2CPP-1.html","/unreal/exp[经验]/3-Blueprint2CPP-1.md","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/3-Blueprint2CPP-1.md"]],["v-8a7ae01e","/unreal/exp_%E7%BB%8F%E9%AA%8C_/4-BPShowCVariables.html",{d:1701100984e3,c:["u++"],e:`<h2> 问题描述</h2>

<h2> 解决思路</h2>
<h3> 点击齿轮图标——显示继承的变量即可。</h3>
<figure><figcaption></figcaption></figure>
`,r:{minutes:.19,words:57},y:"a",t:"EXP4.C++变量在蓝图中显示",O:4},["/unreal/exp_经验_/4-BPShowCVariables.html","/unreal/exp[经验]/4-BPShowCVariables.html","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/4-BPShowCVariables.html","/unreal/exp[经验]/4-BPShowCVariables.md","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/4-BPShowCVariables.md"]],["v-cc3e1e92","/unreal/exp_%E7%BB%8F%E9%AA%8C_/5-EventFunctionMacro.html",{d:170073813e4,c:["u++"],e:`
<h2> 执行引脚</h2>

<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>
<h2> delay节点</h2>
<figure><figcaption><a href="https://space.bilibili.com/304436074" target="_blank" rel="noopener noreferrer">图片作者</a></figcaption></figure>
<h2> 总结</h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>事件</th>
<th>宏</th>
<th>函数</th>
</tr>
</thead>
<tbody>
<tr>
<td>执行时机</td>
<td>立即执行</td>
<td>等待执行结束</td>
<td>手动调用</td>
</tr>
<tr>
<td>输入引脚</td>
<td>一个</td>
<td>可以有多个</td>
<td>两个</td>
</tr>
<tr>
<td>输出引脚</td>
<td>一个</td>
<td>一个</td>
<td>一个</td>
</tr>
<tr>
<td>延迟执行</td>
<td>否</td>
<td>是</td>
<td>否</td>
</tr>
<tr>
<td>调用方式</td>
<td>事件触发</td>
<td>明确调用</td>
<td>手动调用</td>
</tr>
</tbody>
</table>`,r:{minutes:.64,words:193},y:"a",t:"EXP5.函数|事件|宏函数",O:5},["/unreal/exp_经验_/5-EventFunctionMacro.html","/unreal/exp[经验]/5-EventFunctionMacro.html","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/5-EventFunctionMacro.html","/unreal/exp[经验]/5-EventFunctionMacro.md","/unreal/exp%5B%E7%BB%8F%E9%AA%8C%5D/5-EventFunctionMacro.md"]],["v-faa905da","/unreal/function_%E5%87%BD%E6%95%B0_/1-XXXAPI.html",{d:1704306851e3,c:["u++"],g:["Specifiers"],e:`


<figure><figcaption></figcaption></figure>





<h2> 模块（项目）名_API</h2>




<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"CoreMinimal.h"</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"Kismet/BlueprintFunctionLibrary.h"</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"TEST.generated.h"</span></span>

<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MYGame_API</span> UTEST <span class="token operator">:</span> <span class="token keyword">public</span> UBlueprintFunctionLibrary
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
<span class="token keyword">public</span><span class="token operator">:</span>
	
	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category <span class="token operator">=</span><span class="token string">"TEST"</span><span class="token punctuation">)</span>
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.53,words:1060},y:"a",t:"F1.模块（项目）名_API",O:1},["/unreal/function_函数_/1-XXXAPI.html","/unreal/function[函数]/1-XXXAPI.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/1-XXXAPI.html","/unreal/function[函数]/1-XXXAPI.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/1-XXXAPI.md"]],["v-e7c7e0c8","/unreal/function_%E5%87%BD%E6%95%B0_/10-PTRINUE.html",{d:1704306851e3,c:["u++"],g:["Specifiers"],e:`<h3> 类和对象</h3>


<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    string Name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> Age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.66,words:1099},y:"a",t:"F10.Class&OBJ|类和对象",O:10},["/unreal/function_函数_/10-PTRINUE.html","/unreal/function[函数]/10-PTRINUE.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/10-PTRINUE.html","/unreal/function[函数]/10-PTRINUE.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/10-PTRINUE.md"]],["v-0aa4c588","/unreal/function_%E5%87%BD%E6%95%B0_/11-Getactorofclass.html",{d:1704306851e3,c:["u++"],e:`<h2> GetActorOfClass</h2>
<h3> 节点介绍</h3>

<figure><figcaption></figcaption></figure>
<h3> 节点案例</h3>
`,r:{minutes:5.29,words:1587},y:"a",t:"F11.GetActorOfClass",O:11},["/unreal/function_函数_/11-Getactorofclass.html","/unreal/function[函数]/11-Getactorofclass.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/11-Getactorofclass.html","/unreal/function[函数]/11-Getactorofclass.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/11-Getactorofclass.md"]],["v-8ea03774","/unreal/function_%E5%87%BD%E6%95%B0_/12-CE_KE.html",{d:1704306851e3,c:["u++"],e:`

<blockquote>
<p><strong>语法：CE+函数名+空格+参数</strong></p>
</blockquote>
`,r:{minutes:.48,words:144},y:"a",t:"F12.CE|KE",O:12},["/unreal/function_函数_/12-CE_KE.html","/unreal/function[函数]/12-CE&KE.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/12-CE&KE.html","/unreal/function[函数]/12-CE&KE.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/12-CE&KE.md"]],["v-6ef0fadf","/unreal/function_%E5%87%BD%E6%95%B0_/13-BeginPlay.html",{d:1704306851e3,c:["u++"],e:`
<figure><figcaption></figcaption></figure>

<blockquote>
<p>新建一个测试actor</p>
</blockquote>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"CoreMinimal.h"</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"GameFramework/Actor.h"</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"MyTest.generated.h"</span></span>

<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">EXORCIST_API</span> AMyTest <span class="token operator">:</span> <span class="token keyword">public</span> AActor
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// Sets default values for this actor's properties</span>
	<span class="token function">AMyTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">protected</span><span class="token operator">:</span>
	<span class="token comment">// Called when the game starts or when spawned</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span><span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
	<span class="token comment">// Called every frame</span>
	<span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">Tick</span><span class="token punctuation">(</span><span class="token keyword">float</span> DeltaTime<span class="token punctuation">)</span> <span class="token keyword">override</span><span class="token punctuation">;</span>
		
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.38,words:713},y:"a",t:"F13.BeginPlay",O:13},["/unreal/function_函数_/13-BeginPlay.html","/unreal/function[函数]/13-BeginPlay.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/13-BeginPlay.html","/unreal/function[函数]/13-BeginPlay.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/13-BeginPlay.md"]],["v-7f6ffa27","/unreal/function_%E5%87%BD%E6%95%B0_/14-SpawnActorfromClass.html",{d:1704306851e3,c:["u++"],e:`
<figure><figcaption></figcaption></figure>
<h3> 简单实例</h3>
<blockquote>
<p>角色按1生成一个球</p>
</blockquote>
<figure><figcaption></figcaption></figure>
<iframe src="https://blueprintue.com/render/tabw8zu8/" width="100%" height="500" scrolling="no" allowfullscreen=""></iframe>
<h3> cpp</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	<span class="token comment">//获取玩家ActorforwardVector</span>
	FVector forwardVector <span class="token operator">=</span> <span class="token function">GetActorForwardVector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//获取玩家ActorLocation</span>
	FVector location <span class="token operator">=</span> <span class="token function">GetActorLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//ForwardVector*200+Location</span>
	FVector <span class="token keyword">const</span> spawnLocation <span class="token operator">=</span>forwardVector <span class="token operator">*</span> <span class="token number">200</span> <span class="token operator">+</span> location<span class="token punctuation">;</span>

	UWorld<span class="token operator">*</span> <span class="token keyword">const</span> World <span class="token operator">=</span> <span class="token function">GetWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//断言</span>
	<span class="token function">check</span><span class="token punctuation">(</span>World<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	 World<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">SpawnActor</span><span class="token generic class-name"><span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>CurrentTarget<span class="token punctuation">,</span>spawnLocation<span class="token punctuation">,</span>FRotator<span class="token double-colon punctuation">::</span>ZeroRotator<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.33,words:99},y:"a",t:"F14.SpawnActorFromClass",O:14},["/unreal/function_函数_/14-SpawnActorfromClass.html","/unreal/function[函数]/14-SpawnActorfromClass.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/14-SpawnActorfromClass.html","/unreal/function[函数]/14-SpawnActorfromClass.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/14-SpawnActorfromClass.md"]],["v-35e6b090","/unreal/function_%E5%87%BD%E6%95%B0_/15-LoadAsset.html",{d:1704872551e3,c:["u++"],e:`
<h2> 前置</h2>

<h2> 异步</h2>
<figure><figcaption></figcaption></figure>

<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//定义句柄</span>
TSharedPtr<span class="token operator">&lt;</span>FStreamableHandle<span class="token operator">&gt;</span> Handle<span class="token punctuation">;</span>

TSoftObjectPtr<span class="token operator">&lt;</span>UInventorySubConfig<span class="token operator">&gt;</span> SubConfig<span class="token punctuation">;</span><span class="token comment">//如果是软引用，需要先ToSoftObjectPath()，使用需要先ToSoftObjectPath重载版本</span>

<span class="token keyword">const</span> UInventoryTotalConfig<span class="token operator">*</span> SubConfig<span class="token punctuation">;</span><span class="token comment">//如果是对象指针，可以直接放进去,会有对应的重载版本</span>

<span class="token comment">//委托</span>
FStreamableDelegate SubConfigLoadDelegate <span class="token operator">=</span> <span class="token class-name">FStreamableDelegate</span><span class="token double-colon punctuation">::</span><span class="token function">CreateUObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>你的类<span class="token double-colon punctuation">::</span>回调函数<span class="token punctuation">,</span> Index<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//异步加载</span>
Handle <span class="token operator">=</span> <span class="token class-name">UAssetManager</span><span class="token double-colon punctuation">::</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetStreamableManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RequestAsyncLoad</span><span class="token punctuation">(</span>SubConfig<span class="token punctuation">,</span> SubConfigLoadDelegate<span class="token punctuation">)</span><span class="token punctuation">;</span>

Handle<span class="token punctuation">.</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//是否有效</span>
Handle<span class="token operator">-&gt;</span><span class="token function">HasLoadCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//进度 </span>
Handle<span class="token punctuation">.</span><span class="token function">GetLoadedAsset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取资源</span>
Handle<span class="token punctuation">.</span><span class="token function">ReleaseHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放句柄</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.93,words:578},y:"a",t:"F15.AssetLoad的几种方法",O:15},["/unreal/function_函数_/15-LoadAsset.html","/unreal/function[函数]/15-LoadAsset.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/15-LoadAsset.html","/unreal/function[函数]/15-LoadAsset.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/15-LoadAsset.md"]],["v-5b1b53c4","/unreal/function_%E5%87%BD%E6%95%B0_/2-GENERATED_BODY.html",{d:1704306851e3,c:["u++"],g:["Specifiers"],e:`

`,r:{minutes:.13,words:40},y:"a",t:"F2.GENERATED_BODY()",O:2},["/unreal/function_函数_/2-GENERATED_BODY.html","/unreal/function[函数]/2-GENERATED_BODY.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/2-GENERATED_BODY.html","/unreal/function[函数]/2-GENERATED_BODY.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/2-GENERATED_BODY.md"]],["v-7983a964","/unreal/function_%E5%87%BD%E6%95%B0_/3-EditorUsing.html",{d:1704306851e3,c:["u++"],g:["Specifiers"],e:`<h2> 导读</h2>
<table>
<thead>
<tr>
<th>特征</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>WITH_EDITORONLY_DATA</code></td>
<td>用于标记在头文件中的成员变量，仅在编辑器中可见，游戏运行时被忽略。</td>
</tr>
<tr>
<td><code>WITH_EDITOR</code></td>
<td>用于标记在 CPP 文件中的代码块，该代码块在构建编辑器时应被编译。</td>
</tr>
<tr>
<td><code>GIsEditor</code></td>
<td>全局布尔变量，用于判断当前是否在虚幻编辑器中运行。</td>
</tr>
</tbody>
</table>`,r:{minutes:3.65,words:1096},y:"a",t:"F3.WITH_EDITOR",O:3},["/unreal/function_函数_/3-EditorUsing.html","/unreal/function[函数]/3-EditorUsing.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/3-EditorUsing.html","/unreal/function[函数]/3-EditorUsing.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/3-EditorUsing.md"]],["v-6e5edac0","/unreal/function_%E5%87%BD%E6%95%B0_/4-UPARAM.html",{d:1704306851e3,c:["u++"],g:["Specifiers"],e:`


<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>	<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> BlueprintCosmetic<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">"Global UI Extensions"</span><span class="token punctuation">)</span>
	<span class="token keyword">static</span> UCommonActivatableWidget<span class="token operator">*</span> <span class="token function">PushContentToLayer_ForPlayer</span><span class="token punctuation">(</span><span class="token keyword">const</span> ULocalPlayer<span class="token operator">*</span> LocalPlayer<span class="token punctuation">,</span> <span class="token function">UPARAM</span><span class="token punctuation">(</span>meta <span class="token operator">=</span> <span class="token punctuation">(</span>Categories <span class="token operator">=</span> <span class="token string">"UI.Layer"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> FGameplayTag LayerName<span class="token punctuation">,</span> <span class="token function">UPARAM</span><span class="token punctuation">(</span>meta <span class="token operator">=</span> <span class="token punctuation">(</span>AllowAbstract <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span> TSubclassOf<span class="token operator">&lt;</span>UCommonActivatableWidget<span class="token operator">&gt;</span> WidgetClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.24,words:373},y:"a",t:"F4.UPARAM",O:4},["/unreal/function_函数_/4-UPARAM.html","/unreal/function[函数]/4-UPARAM.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/4-UPARAM.html","/unreal/function[函数]/4-UPARAM.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/4-UPARAM.md"]],["v-e761d962","/unreal/function_%E5%87%BD%E6%95%B0_/5-UPROPERTY.html",{d:1704306851e3,c:["u++"],g:["Specifiers"],e:`
<h3> UPROPERTY定义</h3>




<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//声明一个变量</span>
int32 MyInt<span class="token punctuation">;</span>
<span class="token comment">//定义一个变量</span>
int32 MyInt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.75,words:826},y:"a",t:"F5.UPROPERTY",O:5},["/unreal/function_函数_/5-UPROPERTY.html","/unreal/function[函数]/5-UPROPERTY.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/5-UPROPERTY.html","/unreal/function[函数]/5-UPROPERTY.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/5-UPROPERTY.md"]],["v-07eefa62","/unreal/function_%E5%87%BD%E6%95%B0_/6-UEnum.html",{d:1704306851e3,c:["u++"],e:`

<h3> 常规</h3>
<ol>
<li>Rider添加一个类</li>
</ol>
<figure><figcaption></figcaption></figure>
<ol start="2">
<li>添加代码</li>
</ol>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UENUM</span><span class="token punctuation">(</span>Meta <span class="token operator">=</span> <span class="token punctuation">(</span>Bitflags<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">enum</span> <span class="token keyword">class</span> <span class="token class-name">EColorBits</span>
<span class="token punctuation">{</span>
    ECB_Red<span class="token punctuation">,</span>
    ECB_Green<span class="token punctuation">,</span>
    ECB_Blue
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.27,words:80},y:"a",t:"F6.UEnum|枚举",O:6},["/unreal/function_函数_/6-UEnum.html","/unreal/function[函数]/6-UEnum.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/6-UEnum.html","/unreal/function[函数]/6-UEnum.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/6-UEnum.md"]],["v-0eb61f2d","/unreal/function_%E5%87%BD%E6%95%B0_/7-UStruct.html",{d:1704306851e3,c:["u++"],e:`

<ol>
<li>Rider添加一个类</li>
</ol>
<figure><figcaption></figcaption></figure>
<ol start="2">
<li>添加如下函数</li>
</ol>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"CoreMinimal.h"</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"MyStruct.generated.h"</span></span>

<span class="token function">USTRUCT</span><span class="token punctuation">(</span>BlueprintType<span class="token punctuation">)</span>
<span class="token keyword">struct</span>  <span class="token class-name">FMyStruct</span> 
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.32,words:96},y:"a",t:"F7.UStruct|结构体",O:7},["/unreal/function_函数_/7-UStruct.html","/unreal/function[函数]/7-UStruct.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/7-UStruct.html","/unreal/function[函数]/7-UStruct.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/7-UStruct.md"]],["v-62325f58","/unreal/function_%E5%87%BD%E6%95%B0_/8-TMap.html",{d:1704306851e3,c:["u++"],e:`
<h3> 定义</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">KeyType</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">ValueType</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">KeyFuncs</span> <span class="token operator">=</span> DefaultKeyFuncs<span class="token operator">&lt;</span>KeyType<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">Allocator</span> <span class="token operator">=</span> FDefaultAllocator<span class="token operator">&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">TMap</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.01,words:602},y:"a",t:"F8.TMap|映射表",O:8},["/unreal/function_函数_/8-TMap.html","/unreal/function[函数]/8-TMap.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/8-TMap.html","/unreal/function[函数]/8-TMap.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/8-TMap.md"]],["v-4b0f28af","/unreal/function_%E5%87%BD%E6%95%B0_/9-Iterator.html",{d:1704306851e3,c:["u++"],e:`
<ol>
<li>
<p><strong>TArray 迭代器：</strong></p>
<ul>
<li><code>TArray</code> 是UE中用于动态数组的模板类。它提供了多种迭代器，如 <code>TArray&lt;T&gt;::Iterator</code>，<code>TArray&lt;T&gt;::ConstIterator</code> 等。使用迭代器可以循环遍历数组中的元素。</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TArray<span class="token operator">&lt;</span>int32<span class="token operator">&gt;</span> MyArray<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> It <span class="token operator">=</span> MyArray<span class="token punctuation">.</span><span class="token function">CreateIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    int32<span class="token operator">&amp;</span> Element <span class="token operator">=</span> <span class="token operator">*</span>It<span class="token punctuation">;</span>
    <span class="token comment">// 对 Element 进行操作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>TMap 迭代器：</strong></p>
<ul>
<li><code>TMap</code> 是UE用于映射的模板类。它提供了多种迭代器，如 <code>TMap&lt;KeyType, ValueType&gt;::TIterator</code>，<code>TMap&lt;KeyType, ValueType&gt;::TConstIterator</code> 等。</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TMap<span class="token operator">&lt;</span>FString<span class="token punctuation">,</span> int32<span class="token operator">&gt;</span> MyMap<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> It <span class="token operator">=</span> MyMap<span class="token punctuation">.</span><span class="token function">CreateIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> FString<span class="token operator">&amp;</span> Key <span class="token operator">=</span> It<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    int32<span class="token operator">&amp;</span> Value <span class="token operator">=</span> It<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 对 Key 和 Value 进行操作</span>
<span class="token punctuation">}</span>

<span class="token comment">//传统写法</span>
TMap<span class="token operator">&lt;</span>FString<span class="token punctuation">,</span> int32<span class="token operator">&gt;</span> MyMap<span class="token punctuation">;</span>
<span class="token keyword">for</span> TMap<span class="token operator">&lt;</span>FString<span class="token punctuation">,</span> int32<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>Iterator <span class="token function">It</span><span class="token punctuation">(</span>MyMap<span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> FString<span class="token operator">&amp;</span> Key <span class="token operator">=</span> It<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    int32<span class="token operator">&amp;</span> Value <span class="token operator">=</span> It<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>TSet 迭代器：</strong></p>
<ul>
<li><code>TSet</code> 是UE中用于集合的模板类。它提供了多种迭代器，如 <code>TSet&lt;T&gt;::TIterator</code>，<code>TSet&lt;T&gt;::TConstIterator</code> 等。</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>TSet<span class="token operator">&lt;</span>int32<span class="token operator">&gt;</span> MySet<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> It <span class="token operator">=</span> MySet<span class="token punctuation">.</span><span class="token function">CreateIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    int32<span class="token operator">&amp;</span> Element <span class="token operator">=</span> <span class="token operator">*</span>It<span class="token punctuation">;</span>
    <span class="token comment">// 对 Element 进行操作</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>TActorIterator：</strong></p>
<ul>
<li><code>TActorIterator</code> 是用于迭代关卡中的Actor的迭代器。</li>
</ul>
</li>
</ol>`,r:{minutes:1.82,words:546},y:"a",t:"F9.Iterator|迭代器",O:9},["/unreal/function_函数_/9-Iterator.html","/unreal/function[函数]/9-Iterator.html","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/9-Iterator.html","/unreal/function[函数]/9-Iterator.md","/unreal/function%5B%E5%87%BD%E6%95%B0%5D/9-Iterator.md"]],["v-a6a0843a","/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/1-lyra.html",{d:1701724009e3,c:["unreal"],e:`
<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>


<figure><figcaption></figcaption></figure>`,r:{minutes:4.18,words:1255},y:"a",t:"LY1.Lyra初见",O:1},["/unreal/lyra_天秤座_/1-lyra.html","/unreal/lyra[天秤座]/1-lyra.html","/unreal/lyra%5B%E5%A4%A9%E7%A7%A4%E5%BA%A7%5D/1-lyra.html","/unreal/lyra[天秤座]/1-lyra.md","/unreal/lyra%5B%E5%A4%A9%E7%A7%A4%E5%BA%A7%5D/1-lyra.md"]],["v-318a2cdb","/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/2-ImproveCommonUI.html",{d:1701724009e3,c:["unreal"],e:`<h2> 导读</h2>

<h2> 前置条件</h2>
<blockquote>
<p>安装插件CommonUI</p>
</blockquote>
<h2> 实践</h2>
<blockquote>
<p>日常心血来潮，想给我的游戏菜单背景加一个角色查看功能，即：可以操作UI的同时控制游戏模型（比如旋转、缩放等）。</p>
</blockquote>

<figure><figcaption></figcaption></figure>
<blockquote>
<p>悲剧发生了！</p>
</blockquote>

`,r:{minutes:6.73,words:2020},y:"a",t:"LY2.Inputmode的封装。",O:2},["/unreal/lyra_天秤座_/2-ImproveCommonUI.html","/unreal/lyra[天秤座]/2-ImproveCommonUI.html","/unreal/lyra%5B%E5%A4%A9%E7%A7%A4%E5%BA%A7%5D/2-ImproveCommonUI.html","/unreal/lyra[天秤座]/2-ImproveCommonUI.md","/unreal/lyra%5B%E5%A4%A9%E7%A7%A4%E5%BA%A7%5D/2-ImproveCommonUI.md"]],["v-e010eba6","/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/3-lyraSubtitle.html",{d:1701724009e3,c:["unreal"],e:`<h3> 介绍</h3>
<h3> 依赖插件：GameSubtitles</h3>
<figure><figcaption></figcaption></figure>
<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>


<figure><figcaption></figcaption></figure>`,r:{minutes:1.03,words:310},y:"a",t:"LY3.Lyra-字幕插件",O:3},["/unreal/lyra_天秤座_/3-lyraSubtitle.html","/unreal/lyra[天秤座]/3-lyraSubtitle.html","/unreal/lyra%5B%E5%A4%A9%E7%A7%A4%E5%BA%A7%5D/3-lyraSubtitle.html","/unreal/lyra[天秤座]/3-lyraSubtitle.md","/unreal/lyra%5B%E5%A4%A9%E7%A7%A4%E5%BA%A7%5D/3-lyraSubtitle.md"]],["v-0cd6d45f","/unreal/network_%E7%BD%91%E7%BB%9C_/1-Data.html",{d:1704764565e3,c:["unreal"],e:`<h2> 第一印象</h2>


<ol>
<li>要有一个Actor类，用于承载药水</li>
<li>一个角色类。。。。</li>
</ol>


<figure><figcaption></figcaption></figure>
<ol>
<li>角色碰到球形触发器显示对应的UI</li>
<li>可能存在同时触碰多个触发的情况，所以我设计了一个附近列表</li>
<li>用户拖拽附近列表或者交互按键直接拾取最近的触碰对象。</li>
<li>装备记录数据到背包组件中。</li>
</ol>

<h2> 数据结构</h2>
<h3> 结构体</h3>


<figure><figcaption></figcaption></figure>`,r:{minutes:8.47,words:2541},y:"a",t:"NT1.Data|数据结构从背包开始",O:1},["/unreal/network_网络_/1-Data.html","/unreal/network[网络]/1-Data.html","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/1-Data.html","/unreal/network[网络]/1-Data.md","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/1-Data.md"]],["v-1ad79dbc","/unreal/network_%E7%BD%91%E7%BB%9C_/2-HTTP.html",{d:1704341332e3,c:["unreal"],e:`

<h2> HTTP</h2>
<table>
<thead>
<tr>
<th>协议</th>
<th>全称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>HTTP</td>
<td>Hyper Text Transfer Protocol</td>
<td>用于从服务器传输超文本到本地浏览器的传送协议。</td>
</tr>
<tr>
<td>HTTPS</td>
<td>HyperText Transfer Protocol Secure</td>
<td>一种通过计算机网络进行安全通信的传输协议，利用 SSL/TLS 加密数据包，提供身份认证和保护隐私与完整性。</td>
</tr>
<tr>
<td>默认端口</td>
<td>80</td>
<td>443</td>
</tr>
<tr>
<td>URL 示例</td>
<td>http://</td>
<td>https://</td>
</tr>
</tbody>
</table>`,r:{minutes:5.73,words:1720},y:"a",t:"NT-2.HTTP",O:20},["/unreal/network_网络_/2-HTTP.html","/unreal/network[网络]/2-HTTP.html","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/2-HTTP.html","/unreal/network[网络]/2-HTTP.md","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/2-HTTP.md"]],["v-55ca86ff","/unreal/network_%E7%BD%91%E7%BB%9C_/3-GamePlayNetWork.html",{d:1704341332e3,c:["unreal"],e:`<h2> 导读</h2>



<blockquote>
<p>按数字1可以Spawn生成Actor</p>
</blockquote>
<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<h2> Replication|复制</h2>
<blockquote>
<p>复制是服务器将信息/数据传递给客户端的行为。</p>
</blockquote>

<figure><figcaption>中文</figcaption></figure>`,r:{minutes:7.97,words:2392},y:"a",t:"NT-3.网络复制|TODO",O:30},["/unreal/network_网络_/3-GamePlayNetWork.html","/unreal/network[网络]/3-GamePlayNetWork.html","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/3-GamePlayNetWork.html","/unreal/network[网络]/3-GamePlayNetWork.md","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/3-GamePlayNetWork.md"]],["v-1ba5c8ed","/unreal/network_%E7%BD%91%E7%BB%9C_/4-GamePlayNetWorkUse.html",{d:1704764565e3,c:["unreal"],e:`<h2> 实践</h2>

<h2> 前置头文件</h2>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code> <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"Net/UnrealNetwork.h"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.11,words:933},y:"a",t:"NT-3.1网络复制|实践",O:31},["/unreal/network_网络_/4-GamePlayNetWorkUse.html","/unreal/network[网络]/4-GamePlayNetWorkUse.html","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/4-GamePlayNetWorkUse.html","/unreal/network[网络]/4-GamePlayNetWorkUse.md","/unreal/network%5B%E7%BD%91%E7%BB%9C%5D/4-GamePlayNetWorkUse.md"]],["v-c4c01c70","/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/1-HPBar.html",{d:1704030488e3,c:["unreal"],e:`<h2> 导读</h2>

<figure><figcaption></figcaption></figure>


<figure><figcaption></figcaption></figure>
<hr>


<figure><figcaption></figcaption></figure>
<hr>


<figure><figcaption></figcaption></figure>
<hr>


<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>


<figure><figcaption></figcaption></figure>`,r:{minutes:13.79,words:4137},y:"a",t:"SD1.从血条材质开始",O:1},["/unreal/shader_着色器_/1-HPBar.html","/unreal/shader[着色器]/1-HPBar.html","/unreal/shader%5B%E7%9D%80%E8%89%B2%E5%99%A8%5D/1-HPBar.html","/unreal/shader[着色器]/1-HPBar.md","/unreal/shader%5B%E7%9D%80%E8%89%B2%E5%99%A8%5D/1-HPBar.md"]],["v-e95e6264","/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/2-BRDF.html",{d:1705333518e3,c:["unreal"],e:`<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>本章不讨论PBR材质系统的实现细节，而是一些基础的知识普及，具体到实时渲染那个专栏会深入研究。</p>
</div>

<h3> PBR</h3>

<blockquote>
<p>对计算机图形学感兴趣的朋友可以去阅读<a href="https://www.pbrt.org/" target="_blank" rel="noopener noreferrer">《PBRT》</a>这本书</p>
</blockquote>
<figure><figcaption></figcaption></figure>`,r:{minutes:5.58,words:1674},y:"a",t:"SD2.PBR材质系统",O:1},["/unreal/shader_着色器_/2-BRDF.html","/unreal/shader[着色器]/2-BRDF.html","/unreal/shader%5B%E7%9D%80%E8%89%B2%E5%99%A8%5D/2-BRDF.html","/unreal/shader[着色器]/2-BRDF.md","/unreal/shader%5B%E7%9D%80%E8%89%B2%E5%99%A8%5D/2-BRDF.md"]],["v-391766bc","/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/3-%E5%9B%BE%E7%89%87%E6%8A%95%E5%BD%B1.html",{d:1705366539e3,c:["unreal"],e:`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
PS图层样式投影效果
	@param {UVs}						texture coordinate
	@param {Texture}					texture object
	@param {TextureSize}				纹理大小（x, y）
	@param {ShadowRGBA}					投影颜色与不透明度
	@param {ShadowRotate}				投影角度
	@param {ShadowLength}				投影距离
	@param {ShadowSize}					投影大小
	@param {BorderThreshold}			边界UVs阈值（左, 上, 右, 下）
*/</span>
float4 <span class="token function">Shadow</span><span class="token punctuation">(</span>float2 UVs<span class="token punctuation">,</span> Texture2D Texture<span class="token punctuation">,</span> float2 TextureSize<span class="token punctuation">,</span> float4 ShadowRGBA<span class="token punctuation">,</span> <span class="token keyword">float</span> ShadowRotate<span class="token punctuation">,</span> half ShadowLength<span class="token punctuation">,</span> half ShadowSize<span class="token punctuation">,</span> float4 BorderThreshold<span class="token operator">=</span><span class="token number">0.001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token keyword">float</span> PI <span class="token operator">=</span> <span class="token function">acos</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 单位像素</span>
	float2 TexturePixel <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> TextureSize<span class="token punctuation">;</span>
	<span class="token comment">// 角度</span>
	<span class="token keyword">float</span> Angle <span class="token operator">=</span> <span class="token number">360</span> <span class="token operator">*</span> ShadowRotate<span class="token punctuation">;</span>
	<span class="token comment">// 弧度</span>
	<span class="token keyword">float</span> Degrees <span class="token operator">=</span> Angle <span class="token operator">/</span> <span class="token number">180</span> <span class="token operator">*</span> PI<span class="token punctuation">;</span>
	<span class="token comment">// 阴影反向方位（单位向量）</span>
	float2 Direction <span class="token operator">=</span> TexturePixel <span class="token operator">*</span> <span class="token function">float2</span><span class="token punctuation">(</span><span class="token function">cos</span><span class="token punctuation">(</span>Degrees<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sin</span><span class="token punctuation">(</span>Degrees<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">class</span> <span class="token class-name">Function</span> <span class="token punctuation">{</span>
		Texture2D Texture<span class="token punctuation">;</span>
		SamplerState TextureSampler<span class="token punctuation">;</span>
		float4 ShadowRGBA<span class="token punctuation">;</span>
		float2 Position<span class="token punctuation">;</span>
		<span class="token keyword">float</span> BorderThresholdLeft<span class="token punctuation">;</span>
		<span class="token keyword">float</span> BorderThresholdTop<span class="token punctuation">;</span>
		<span class="token keyword">float</span> BorderThresholdRight<span class="token punctuation">;</span>
		<span class="token keyword">float</span> BorderThresholdBottom<span class="token punctuation">;</span>
		
		<span class="token keyword">float</span> PI<span class="token punctuation">;</span>
		float2 TexturePixel<span class="token punctuation">;</span>
		
		<span class="token comment">// 阴影颜色</span>
		float3 <span class="token function">ShadowColor</span><span class="token punctuation">(</span>float3 Color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果需要与颜色混合，在此修改返回值，如下式 正片叠底。</span>
			<span class="token comment">//	return this.ShadowRGBA.rgb * Color;</span>
			<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ShadowRGBA<span class="token punctuation">.</span>rgb<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token comment">// 混合</span>
		float3 <span class="token function">Blend</span><span class="token punctuation">(</span>float3 base<span class="token punctuation">,</span> float3 blend<span class="token punctuation">,</span> <span class="token keyword">float</span> alpha<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果使用了混合模式，把 blend 按混合公式计算一次，如下式 正片叠底。</span>
			<span class="token comment">//	blend = base * blend;</span>
			<span class="token keyword">return</span> <span class="token function">lerp</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> blend<span class="token punctuation">,</span> alpha<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token comment">// 纹理采样</span>
		float4 <span class="token function">TextureSample</span><span class="token punctuation">(</span>float2 UVs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果需要 alpha 通道反向，在此修改。</span>
			<span class="token keyword">return</span> <span class="token function">Texture2DSampleLevel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>Texture<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>TextureSampler<span class="token punctuation">,</span> UVs<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>xyzw<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		float4 <span class="token function">GetShadowRGBA</span><span class="token punctuation">(</span>float2 UVs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前像素点 RGBA</span>
			float4 TextureRGBA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">TextureSample</span><span class="token punctuation">(</span>UVs<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 阴影反向方位 UVs</span>
			float2 PositionUVs <span class="token operator">=</span> UVs <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>Position<span class="token punctuation">;</span>
			<span class="token comment">// 阴影反向方位 UVs 超出了 0 - 1 的范围则不计算</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>PositionUVs<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdLeft <span class="token operator">||</span> PositionUVs<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdRight <span class="token operator">||</span> PositionUVs<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdTop <span class="token operator">||</span> PositionUVs<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdBottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> TextureRGBA<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 阴影反向方位像素点RGBA</span>
			float4 PositionRGBA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">TextureSample</span><span class="token punctuation">(</span>PositionUVs<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 阴影透明度</span>
			<span class="token keyword">float</span> ShadowOpacity <span class="token operator">=</span> PositionRGBA<span class="token punctuation">.</span>a <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ShadowRGBA<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>ShadowOpacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> TextureRGBA<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 当前像素点混合后的结果色</span>
			<span class="token comment">//	this.ShadowRGBA.rgb 为 base 固有色</span>
			<span class="token comment">//	TextureRGBA.rgb 为 blend 固有色</span>
			<span class="token comment">//	TextureRGBA.a 为 alpha</span>
			float3 ShadowBlendColor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">Blend</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ShadowColor</span><span class="token punctuation">(</span>PositionRGBA<span class="token punctuation">.</span>rgb<span class="token punctuation">)</span> <span class="token operator">*</span> ShadowOpacity<span class="token punctuation">,</span> TextureRGBA<span class="token punctuation">.</span>rgb<span class="token punctuation">,</span> TextureRGBA<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 当前像素点混合后的透明度</span>
			<span class="token keyword">float</span> ShadowBlendOpacity <span class="token operator">=</span> ShadowOpacity <span class="token operator">+</span> TextureRGBA<span class="token punctuation">.</span>a <span class="token operator">-</span> ShadowOpacity <span class="token operator">*</span> TextureRGBA<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
			<span class="token comment">// 当前像素点混合后的RGBA</span>
			<span class="token keyword">return</span> <span class="token function">float4</span><span class="token punctuation">(</span>ShadowBlendColor <span class="token operator">/</span> ShadowBlendOpacity<span class="token punctuation">,</span> ShadowBlendOpacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		<span class="token keyword">float</span> <span class="token function">Calculate1DGaussian</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token function">exp</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.5</span> <span class="token operator">*</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PI <span class="token operator">*</span> x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		
		float4 <span class="token function">GetShadowSizeRGBA</span><span class="token punctuation">(</span>float2 UVs<span class="token punctuation">,</span> half ShadowSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前像素点 RGBA</span>
			float4 TextureRGBA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">TextureSample</span><span class="token punctuation">(</span>UVs<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 投影大小范围内像素颜色累加</span>
			float4 RGBASum <span class="token operator">=</span> <span class="token function">float4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 投影大小范围内像素的权重</span>
			<span class="token keyword">float</span> WeightSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span>half x <span class="token operator">=</span> <span class="token operator">-</span>ShadowSize<span class="token punctuation">;</span> x <span class="token operator">&lt;=</span> ShadowSize<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span>half y <span class="token operator">=</span> <span class="token operator">-</span>ShadowSize<span class="token punctuation">;</span> y <span class="token operator">&lt;=</span> ShadowSize<span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">float</span> Weight <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">Calculate1DGaussian</span><span class="token punctuation">(</span>x <span class="token operator">/</span> ShadowSize<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">Calculate1DGaussian</span><span class="token punctuation">(</span>y <span class="token operator">/</span> ShadowSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
					WeightSum <span class="token operator">+=</span> Weight<span class="token punctuation">;</span>
					<span class="token comment">// 阴影偏移 UVs</span>
					float2 OffsetUVs <span class="token operator">=</span> UVs <span class="token operator">+</span> <span class="token function">float2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>TexturePixel <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>Position<span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>OffsetUVs<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdLeft <span class="token operator">||</span> OffsetUVs<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdRight <span class="token operator">||</span> OffsetUVs<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdTop <span class="token operator">||</span> OffsetUVs<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>BorderThresholdBottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">continue</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token comment">// 阴影偏移像素点 RGBA</span>
					float4 OffsetRGBA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">TextureSample</span><span class="token punctuation">(</span>OffsetUVs<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 阴影透明度</span>
					<span class="token keyword">float</span> Opacity <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ShadowRGBA<span class="token punctuation">.</span>a <span class="token operator">*</span> OffsetRGBA<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>Opacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">continue</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token comment">// 阴影结果色</span>
					float4 RGBA <span class="token operator">=</span> <span class="token function">float4</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">ShadowColor</span><span class="token punctuation">(</span>OffsetRGBA<span class="token punctuation">.</span>rgb<span class="token punctuation">)</span><span class="token punctuation">,</span> Opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
					RGBASum <span class="token operator">+=</span> RGBA <span class="token operator">*</span> Weight<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 模糊后的 RGBA</span>
			float4 BlurRGBA <span class="token operator">=</span> RGBASum <span class="token operator">/</span> WeightSum<span class="token punctuation">;</span>
			<span class="token comment">// 当前像素点混合后的结果色</span>
			float3 Color <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">Blend</span><span class="token punctuation">(</span>BlurRGBA<span class="token punctuation">.</span>rgb <span class="token operator">*</span> BlurRGBA<span class="token punctuation">.</span>a<span class="token punctuation">,</span> TextureRGBA<span class="token punctuation">.</span>rgb<span class="token punctuation">,</span> TextureRGBA<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 当前像素点混合后的透明度</span>
			<span class="token keyword">float</span> Opacity <span class="token operator">=</span> BlurRGBA<span class="token punctuation">.</span>a <span class="token operator">+</span> TextureRGBA<span class="token punctuation">.</span>a <span class="token operator">-</span> BlurRGBA<span class="token punctuation">.</span>a <span class="token operator">*</span> TextureRGBA<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
			<span class="token comment">// 当前像素点混合后的RGBA</span>
			<span class="token keyword">return</span> <span class="token function">float4</span><span class="token punctuation">(</span>Color <span class="token operator">/</span> Opacity<span class="token punctuation">,</span> Opacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>		<span class="token comment">// 注意要加分号</span>
	
	<span class="token comment">// Function func;</span>
	<span class="token comment">// func.Texture = Texture;</span>
	<span class="token comment">// func.TextureSampler = TextureSampler;</span>
	<span class="token comment">// func.ShadowRGBA = ShadowRGBA;</span>
	<span class="token comment">// func.Position = ShadowLength * Direction;</span>
	<span class="token comment">// func.BorderThresholdLeft = BorderThreshold.x;</span>
	<span class="token comment">// func.BorderThresholdTop = BorderThreshold.y;</span>
	<span class="token comment">// func.BorderThresholdRight = 1 - BorderThreshold.z;</span>
	<span class="token comment">// func.BorderThresholdBottom = 1 - BorderThreshold.w;</span>
	<span class="token comment">// func.PI = PI;</span>
	<span class="token comment">// func.TexturePixel = TexturePixel;</span>
	Function func <span class="token operator">=</span> <span class="token punctuation">{</span> Texture<span class="token punctuation">,</span> TextureSampler<span class="token punctuation">,</span> ShadowRGBA<span class="token punctuation">,</span> ShadowLength <span class="token operator">*</span> Direction<span class="token punctuation">,</span> BorderThreshold<span class="token punctuation">.</span>x<span class="token punctuation">,</span> BorderThreshold<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">-</span> BorderThreshold<span class="token punctuation">.</span>z<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">-</span> BorderThreshold<span class="token punctuation">.</span>w<span class="token punctuation">,</span> PI<span class="token punctuation">,</span> TexturePixel <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ShadowSize <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> func<span class="token punctuation">.</span><span class="token function">GetShadowRGBA</span><span class="token punctuation">(</span>UVs<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> func<span class="token punctuation">.</span><span class="token function">GetShadowSizeRGBA</span><span class="token punctuation">(</span>UVs<span class="token punctuation">,</span> <span class="token function">round</span><span class="token punctuation">(</span>ShadowSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.94,words:1483},y:"a",t:"SD2.图片仿PS投影Shader",O:1},["/unreal/shader_着色器_/3-图片投影.html","/unreal/shader[着色器]/3-图片投影.html","/unreal/shader%5B%E7%9D%80%E8%89%B2%E5%99%A8%5D/3-%E5%9B%BE%E7%89%87%E6%8A%95%E5%BD%B1.html","/unreal/shader[着色器]/3-图片投影.md","/unreal/shader%5B%E7%9D%80%E8%89%B2%E5%99%A8%5D/3-%E5%9B%BE%E7%89%87%E6%8A%95%E5%BD%B1.md"]],["v-2111666e","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/0-where%20use%20a%20semicolon.html",{d:170073813e4,c:["c++"],e:`

<ol>
<li>
<p><strong>表达式结束：</strong> 在赋值、函数调用、算术运算等表达式结束时，需要使用分号。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 赋值语句</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello, World!"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span> <span class="token comment">// 函数调用语句</span>
x <span class="token operator">=</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span> <span class="token comment">// 算术表达式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>控制结构：</strong> 在条件语句（if、else等）、循环语句（for、while等）以及其他控制结构的主体部分结束时，需要使用分号。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 代码块</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"x是正数"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 代码块</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"x不是正数"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 循环体</span>
    cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">" "</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>类定义：</strong> 在类的定义中，每个成员函数的实现都需要用分号结束。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数体</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello from MyClass!"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> myVariable<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 注意类定义结束时有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>结构体：</strong> 在类的定义中，每个成员函数的实现都需要用分号结束。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
   <span class="token keyword">int</span> myVariable<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 函数体</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Hello from MyClass!"</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 注意结构体定义结束时有分号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:1.17,words:351},y:"a",t:'c++0.什么地方用";"',O:1},["/language/cpp/BaseGuide_基础概念_/0-where use a semicolon.html","/language/cpp/BaseGuide[基础概念]/0-where use a semicolon.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/0-where%20use%20a%20semicolon.html","/language/cpp/BaseGuide[基础概念]/0-where use a semicolon.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/0-where%20use%20a%20semicolon.md"]],["v-bf12b7b0","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/1-function%20Declaration_%20Definition.html",{d:170073813e4,c:["c++"],e:`
<h2> 概念</h2>
<blockquote>
<p>在C++中，<br>
函数声明：为了告诉编译器函数的存在、名称和参数列表。<br>
函数定义：提供函数的具体实现。</p>
</blockquote>
<p><strong>函数声明（Function Declaration）:</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 函数声明，告诉编译器这个函数存在，但并没有提供具体实现</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.24,words:372},y:"a",t:"c++1.函数声明和定义",O:1},["/language/cpp/BaseGuide_基础概念_/1-function Declaration_ Definition.html","/language/cpp/BaseGuide[基础概念]/1-function Declaration& Definition.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/1-function%20Declaration&%20Definition.html","/language/cpp/BaseGuide[基础概念]/1-function Declaration& Definition.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/1-function%20Declaration&%20Definition.md"]],["v-175bf425","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/10-Functor.html",{d:1703335047e3,c:["c++"],e:`
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 函数对象类</span>
<span class="token keyword">class</span> <span class="token class-name">MultiplyBy</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MultiplyBy</span><span class="token punctuation">(</span><span class="token keyword">int</span> factor<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">factor</span><span class="token punctuation">(</span>factor<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 重载 () 运算符</span>
    <span class="token keyword">int</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> factor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> factor<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MultiplyBy <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用函数对象</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 相当于调用 multiplyBy2.operator()(5);</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Result: "</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.6,words:180},y:"a",t:"c++10.Functor",O:10},["/language/cpp/BaseGuide_基础概念_/10-Functor.html","/language/cpp/BaseGuide[基础概念]/10-Functor.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/10-Functor.html","/language/cpp/BaseGuide[基础概念]/10-Functor.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/10-Functor.md"]],["v-5b7ab8a5","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/2-Variable%20Declaration_%20Definition.html",{d:170073813e4,c:["c++"],e:`
<h2> 概念</h2>
<blockquote>
<p>在C++中，变量声明和定义：</p>
</blockquote>
<p><strong>变量声明（Variable Declaration）：</strong> 变量声明是指通知编译器变量的存在，但不进行实际的分配。例如：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">extern</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>  <span class="token comment">//这是一个变量声明：（通过使用extern关键字，可以声明变量名而不定义它）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.04,words:613},y:"a",t:"c++2.变量声明和定义",O:2},["/language/cpp/BaseGuide_基础概念_/2-Variable Declaration_ Definition.html","/language/cpp/BaseGuide[基础概念]/2-Variable Declaration& Definition.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/2-Variable%20Declaration&%20Definition.html","/language/cpp/BaseGuide[基础概念]/2-Variable Declaration& Definition.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/2-Variable%20Declaration&%20Definition.md"]],["v-9a31f9f4","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/3-Forward%20declaration.html",{d:1701893836e3,c:["c++"],e:`
<ol>
<li>
<p><strong>解决循环依赖：</strong> 当两个或多个头文件相互包含时，可能会导致循环依赖的问题。通过使用前置声明，可以在一个头文件中声明另一个头文件中的类或函数，而不需要包含整个定义。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 文件 A.h</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">A_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">A_H</span></span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">;</span>  <span class="token comment">// 前置声明，避免循环依赖</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span>B<span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 文件 B.h</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">B_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">B_H</span></span>

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">;</span>  <span class="token comment">// 前置声明，避免循环依赖</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">bar</span><span class="token punctuation">(</span>A<span class="token operator">*</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>编译时间优化：</strong> 前置声明可以减少头文件的依赖性，从而降低编译时间。当一个头文件只需要知道某个标识符的存在而不需要知道其具体定义时，前置声明可以提高编译效率。</p>
</li>
<li>
<p><strong>减小编译单元之间的耦合性：</strong> 如果某个编译单元只需要了解另一个编译单元中的某个标识符，而不需要知道其具体实现细节，前置声明可以减小它们之间的耦合性。</p>
</li>
<li>
<p><strong>降低头文件的依赖性：</strong> 使用前置声明可以减少头文件之间的直接依赖关系，从而降低了代码的耦合性，使得代码更容易维护和理解。</p>
</li>
<li>
<p><strong>提高代码的可读性：</strong> 在头文件中只包含必要的信息，通过前置声明将不需要详细了解的信息推迟到实现文件中，有助于提高代码的可读性。</p>
</li>
</ol>`,r:{minutes:1.59,words:477},y:"a",t:"c++3.声明前置",O:3},["/language/cpp/BaseGuide_基础概念_/3-Forward declaration.html","/language/cpp/BaseGuide[基础概念]/3-Forward declaration.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/3-Forward%20declaration.html","/language/cpp/BaseGuide[基础概念]/3-Forward declaration.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/3-Forward%20declaration.md"]],["v-be08ce20","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/4-VariablePassbyValue%20_%20Reference.html",{d:170073813e4,c:["c++"],e:`
<h3> 值传递</h3>
<ol>
<li>
<p><strong>传递方式：</strong> 通过将实际参数的值复制给形式参数，函数得到的是实际数据的副本。</p>
</li>
<li>
<p><strong>对实参的影响：</strong> 在函数内对形式参数的修改不会影响实际参数的值。</p>
</li>
<li>
<p><strong>内存开销：</strong> 由于复制了实际参数的值，可能会产生额外的内存开销，尤其是对于大型对象或数据结构。</p>
</li>
<li>
<p><strong>使用时机：</strong> 适用于简单的数据类型或对象，或者当函数不需要修改实际参数的值时。</p>
</li>
</ol>`,r:{minutes:4.94,words:1481},y:"a",t:"c++5.参数传递",O:5},["/language/cpp/BaseGuide_基础概念_/4-VariablePassbyValue _ Reference.html","/language/cpp/BaseGuide[基础概念]/4-VariablePassbyValue & Reference.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/4-VariablePassbyValue%20&%20Reference.html","/language/cpp/BaseGuide[基础概念]/4-VariablePassbyValue & Reference.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/4-VariablePassbyValue%20&%20Reference.md"]],["v-7f051d34","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/4-function%20brace%20initialization.html",{d:1701893836e3,c:["c++"],e:`
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">UHttpBlueprintFunctionLibrary</span><span class="token double-colon punctuation">::</span><span class="token function">MakeRequestHeader</span><span class="token punctuation">(</span><span class="token keyword">const</span> TMap<span class="token operator">&lt;</span>FString<span class="token punctuation">,</span> FString<span class="token operator">&gt;</span><span class="token operator">&amp;</span> Headers<span class="token punctuation">,</span> FHttpHeader<span class="token operator">&amp;</span> OutHeader<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	OutHeader <span class="token operator">=</span> FHttpHeader<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">SetHeaders</span><span class="token punctuation">(</span>Headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.44,words:1333},y:"a",t:"c++4.函数花括号初始化",O:4},["/language/cpp/BaseGuide_基础概念_/4-function brace initialization.html","/language/cpp/BaseGuide[基础概念]/4-function brace initialization.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/4-function%20brace%20initialization.html","/language/cpp/BaseGuide[基础概念]/4-function brace initialization.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/4-function%20brace%20initialization.md"]],["v-622a641a","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/5-copymode.html",{d:170073813e4,c:["c++"],e:`
<h3> 概念</h3>
<p>浅拷贝是对相同数据的共享引用，一个修改会影响到另一个。</p>

<p>而深拷贝是创建一个原始数据的独立副本，修改一个不会影响另一个。</p>

<h4> 浅拷贝：</h4>
<ul>
<li>
<p><strong>定义：</strong> 浅拷贝是指对对象进行复制，仅复制对象的值，而不复制对象所指向的内容。</p>
</li>
<li>
<p><strong>判断：</strong> 当类中只包含简单数据类型的成员变量时，进行默认的复制构造函数或赋值操作符重载会产生浅拷贝。</p>
</li>
<li>
<p><strong>示例：</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">ShallowCopyExample</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span><span class="token operator">*</span> data<span class="token punctuation">;</span>

    <span class="token function">ShallowCopyExample</span><span class="token punctuation">(</span><span class="token keyword">const</span> ShallowCopyExample<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> other<span class="token punctuation">.</span>data<span class="token punctuation">;</span>  <span class="token comment">// 浅拷贝，只复制指针值，不复制内容</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:2.06,words:619},y:"a",t:"c++6.浅拷贝|深拷贝",O:6},["/language/cpp/BaseGuide_基础概念_/5-copymode.html","/language/cpp/BaseGuide[基础概念]/5-copymode.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/5-copymode.html","/language/cpp/BaseGuide[基础概念]/5-copymode.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/5-copymode.md"]],["v-43101723","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/7-i__and__i.html",{d:1701724009e3,c:["c++"],e:`

<h3> 直接使用时</h3>
`,r:{minutes:1.94,words:582},y:"a",t:"c++7.i++|++i区别",O:7},["/language/cpp/BaseGuide_基础概念_/7-i__and__i.html","/language/cpp/BaseGuide[基础概念]/7-i++and++i.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/7-i++and++i.html","/language/cpp/BaseGuide[基础概念]/7-i++and++i.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/7-i++and++i.md"]],["v-02010851","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/8-operator.html",{d:1701724009e3,c:["c++"],e:`

<h3> 运算符</h3>
<ol>
<li>
<p><strong>算术运算符：</strong></p>
<ul>
<li><code>+</code>（加法）</li>
<li><code>-</code>（减法）</li>
<li><code>*</code>（乘法）</li>
<li><code>/</code>（除法）</li>
<li><code>%</code>（取模）</li>
</ul>
</li>
<li>
<p><strong>关系运算符：</strong></p>
<ul>
<li><code>==</code>（等于）</li>
<li><code>!=</code>（不等于）</li>
<li><code>&lt;</code>（小于）</li>
<li><code>&gt;</code>（大于）</li>
<li><code>&lt;=</code>（小于等于）</li>
<li><code>&gt;=</code>（大于等于）</li>
</ul>
</li>
<li>
<p><strong>逻辑运算符：</strong></p>
<ul>
<li><code>&amp;&amp;</code>（逻辑与）</li>
<li><code>||</code>（逻辑或）</li>
<li><code>!</code>（逻辑非）</li>
</ul>
</li>
<li>
<p><strong>位运算符：</strong></p>
<ul>
<li><code>&amp;</code>（按位与）</li>
<li><code>|</code>（按位或）</li>
<li><code>^</code>（按位异或）</li>
<li><code>~</code>（按位取反）</li>
<li><code>&lt;&lt;</code>（左移）</li>
<li><code>&gt;&gt;</code>（右移）</li>
</ul>
</li>
<li>
<p><strong>赋值运算符：</strong></p>
<ul>
<li><code>=</code>（赋值）</li>
<li><code>+=</code>（加法赋值）</li>
<li><code>-=</code>（减法赋值）</li>
<li><code>*=</code>（乘法赋值）</li>
<li><code>/=</code>（除法赋值）</li>
<li><code>%=</code>（取模赋值）</li>
<li><code>&amp;=</code>（按位与赋值）</li>
<li><code>|=</code>（按位或赋值）</li>
<li><code>^=</code>（按位异或赋值）</li>
<li><code>&lt;&lt;=</code>（左移赋值）</li>
<li><code>&gt;&gt;=</code>（右移赋值）</li>
</ul>
</li>
<li>
<p><strong>递增和递减运算符：</strong></p>
<ul>
<li><code>++</code>（递增）</li>
<li><code>--</code>（递减）</li>
</ul>
</li>
<li>
<p><strong>成员访问运算符：</strong></p>
<ul>
<li><code>-&gt;</code>（成员访问）</li>
<li><code>-&gt;*</code>（成员指针访问）</li>
</ul>
</li>
<li>
<p><strong>函数调用运算符：</strong></p>
<ul>
<li><code>()</code>（函数调用）</li>
</ul>
</li>
<li>
<p><strong>下标运算符：</strong></p>
<ul>
<li><code>[]</code>（下标访问）</li>
</ul>
</li>
<li>
<p><strong>其他运算符：</strong></p>
</li>
</ol>`,r:{minutes:2.85,words:856},y:"a",t:"c++8.运算符重载",O:8},["/language/cpp/BaseGuide_基础概念_/8-operator.html","/language/cpp/BaseGuide[基础概念]/8-operator.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/8-operator.html","/language/cpp/BaseGuide[基础概念]/8-operator.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/8-operator.md"]],["v-191531e6","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/9-Big%20Four.html",{d:1701724009e3,c:["c++"],e:`
<ol>
<li>
<p><strong>默认构造函数 (Default Constructor):</strong> 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 <code>MyClass obj;</code>。</p>
</li>
<li>
<p><strong>析构函数 (Destructor):</strong> 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 <code>~</code>，如 <code>~MyClass()</code>。</p>
</li>
<li>
<p><strong>拷贝构造函数 (Copy Constructor):</strong> 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 <code>MyClass obj1; MyClass obj2 = obj1;</code>。</p>
</li>
<li>
<p><strong>拷贝赋值运算符 (Copy Assignment Operator):</strong> 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 <code>MyClass obj1, obj2; obj2 = obj1;</code>。</p>
</li>
</ol>`,r:{minutes:2.03,words:609},y:"a",t:"c++9.Big Four",O:9},["/language/cpp/BaseGuide_基础概念_/9-Big Four.html","/language/cpp/BaseGuide[基础概念]/9-Big Four.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/9-Big%20Four.html","/language/cpp/BaseGuide[基础概念]/9-Big Four.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/9-Big%20Four.md"]],["v-8db588aa","/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/1-Sington.html",{d:1703391495e3,c:["c++"],e:`<h3> Singleton|单例</h3>

<h3> 懒汉式（Lazy Initialization）</h3>
<ol>
<li>
<p><strong>懒汉式单例模式：</strong></p>
<ul>
<li><strong>实例创建时机：</strong> 懒汉式在第一次被调用时才创建实例，即在需要的时候才进行初始化。</li>
<li><strong>线程安全性：</strong> 如果不进行特殊处理，懒汉式可能在多线程环境下引发竞态条件，导致多个线程同时检测到实例为<code>nullptr</code>，然后都尝试创建实例。为了解决这个问题，可以使用双重检查锁定（Double-Checked Locking）或者其他线程安全的机制。</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">LazySingleton</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">static</span> LazySingleton<span class="token operator">*</span> instance<span class="token punctuation">;</span>
    <span class="token function">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 私有构造函数</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">static</span> LazySingleton<span class="token operator">*</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在cpp文件中初始化静态成员变量</span>
LazySingleton<span class="token operator">*</span> LazySingleton<span class="token double-colon punctuation">::</span>instance <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:1.9,words:569},y:"a",t:"DS1.Singleton|单例",O:1},["/language/cpp/designer_设计模式_/1-Sington.html","/language/cpp/designer[设计模式]/1-Sington.html","/language/cpp/designer%5B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%5D/1-Sington.html","/language/cpp/designer[设计模式]/1-Sington.md","/language/cpp/designer%5B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%5D/1-Sington.md"]],["v-4c4aa776","/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/2-SimpleFactory.html",{d:1703391495e3,c:["c++"],e:`<h3> SimpleFactory简单工厂</h3>

<figure><figcaption></figcaption></figure>
<h3> Simple Factory 模式的核心组件：</h3>
<ol>
<li>
<p><strong>定义接口或抽象类：</strong> 创建一个表示产品的接口或抽象类，其中包含产品的通用方法（例如，<code>operate</code>）。</p>
</li>
<li>
<p><strong>创建具体产品类：</strong> 实现产品接口或继承抽象类，定义具体的产品类，每个类负责实现产品接口中的方法。</p>
</li>
<li>
<p><strong>定义工厂类：</strong> 创建一个工厂类，其中包含一个用于创建产品对象的方法。这个方法可能是静态的，用于根据客户端的需求创建具体产品对象。</p>
</li>
<li>
<p><strong>客户端使用工厂类：</strong> 客户端代码通过调用工厂类的方法来获取产品对象，而不是直接实例化具体产品类。这有助于降低客户端与具体产品类之间的耦合度。</p>
</li>
</ol>`,r:{minutes:2.11,words:632},y:"a",t:"DS2.SimpleFactory|简单工厂",O:2},["/language/cpp/designer_设计模式_/2-SimpleFactory.html","/language/cpp/designer[设计模式]/2-SimpleFactory.html","/language/cpp/designer%5B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%5D/2-SimpleFactory.html","/language/cpp/designer[设计模式]/2-SimpleFactory.md","/language/cpp/designer%5B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%5D/2-SimpleFactory.md"]],["v-070726ff","/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/3-FactoryPattern.html",{d:1703391495e3,c:["c++"],e:`<h3> FactoryPattern</h3>

<h3> 工厂方法模式（Factory Method Pattern）：</h3>
<ol>
<li>
<p><strong>定义：</strong> 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。</p>
</li>
<li>
<p><strong>组成部分：</strong></p>
<ul>
<li><strong>抽象产品类（Abstract Product）：</strong> 声明了产品的接口。</li>
<li><strong>具体产品类（Concrete Product）：</strong> 实现了抽象产品接口的具体类。</li>
<li><strong>抽象工厂类（Creator）：</strong> 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。</li>
<li><strong>具体工厂类（Concrete Creator）：</strong> 实现了抽象工厂类，实际负责创建产品的具体工厂。</li>
</ul>
</li>
<li>
<p><strong>示例代码：</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体产品 A 的操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token comment">// 具体产品 B 的操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">virtual</span> Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteCreatorA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Creator</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConcreteCreatorB</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Creator</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:3.79,words:1138},y:"a",t:"DS3.FactoryPattern|工厂模式",O:3},["/language/cpp/designer_设计模式_/3-FactoryPattern.html","/language/cpp/designer[设计模式]/3-FactoryPattern.html","/language/cpp/designer%5B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%5D/3-FactoryPattern.html","/language/cpp/designer[设计模式]/3-FactoryPattern.md","/language/cpp/designer%5B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%5D/3-FactoryPattern.md"]],["v-59d63626","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/1-Keywords%20continue_%20break.html",{d:170073813e4,c:["c++"],e:`
<h2> 实践</h2>
<h3> 1. <strong><code>break</code> 关键字：</strong></h3>
<figure><figcaption>整个蓝图块的过程为for循环</figcaption></figure>
<ul>
<li>
<p><strong>作用：</strong> 当 <code>break</code> 关键字出现在循环体内时，它会立即终止当前循环，跳出循环体，不再执行循环内尚未执行完的语句。</p>
</li>
<li>
<p><strong>用法：</strong> 通常用于在满足某个条件时提前结束循环，无论循环条件是否达到结束条件。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 当 i 等于 5 时，终止循环</span>
  <span class="token punctuation">}</span>
  std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token string">" "</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，当 <code>i</code> 等于 5 时，<code>break</code> 将立即终止循环。</p>
</li>
</ul>`,r:{minutes:1.24,words:373},y:"a",t:"c++1.continue|break",O:1},["/language/cpp/keywords_关键字_/1-Keywords continue_ break.html","/language/cpp/keywords[关键字]/1-Keywords continue& break.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/1-Keywords%20continue&%20break.html","/language/cpp/keywords[关键字]/1-Keywords continue& break.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/1-Keywords%20continue&%20break.md"]],["v-2266983e","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/2-Keywords%20inline.html",{d:170073813e4,c:["c++"],e:`
<h3> 内联函数</h3>

<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 定义内联函数</span>
<span class="token keyword">inline</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">// 调用内联函数</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Result: "</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.76,words:528},y:"a",t:"c++2.inline[内联]",O:2},["/language/cpp/keywords_关键字_/2-Keywords inline.html","/language/cpp/keywords[关键字]/2-Keywords inline.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/2-Keywords%20inline.html","/language/cpp/keywords[关键字]/2-Keywords inline.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/2-Keywords%20inline.md"]],["v-2ee2573a","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/3-Keywords%20new-delete-malloc-free.html",{d:170073813e4,c:["c++"],e:`
<h3> <code>new</code> 和 <code>delete</code>（C++ 中使用）</h3>
<ol>
<li>
<p><strong><code>new</code>：</strong></p>
<ul>
<li>
<p><code>new</code> 是 C++ 中的关键字，用于在堆上动态分配内存，并返回分配的内存的地址。<code>new</code> 还会调用对象的构造函数，用于在分配的内存中创建对象。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span><span class="token operator">*</span> myInt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 int</span>
<span class="token keyword">int</span><span class="token operator">*</span> myArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 int 数组</span>
MyClass<span class="token operator">*</span> myObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 动态分配一个 MyClass 对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong><code>delete</code>：</strong></p>
<ul>
<li>
<p><code>delete</code> 用于释放使用 <code>new</code> 分配的内存，同时调用对象的析构函数以进行清理。如果忘记使用 <code>delete</code>，可能导致内存泄漏。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">delete</span> myInt<span class="token punctuation">;</span>      <span class="token comment">// 释放动态分配的 int</span>
<span class="token keyword">delete</span> myObject<span class="token punctuation">;</span>   <span class="token comment">// 释放动态分配的 MyClass 对象</span>
<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> myArray<span class="token punctuation">;</span>  <span class="token comment">// 数组的delete格式比较特殊</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>`,r:{minutes:3.03,words:910},y:"a",t:"c++3.new|delete|malloc|free",O:3},["/language/cpp/keywords_关键字_/3-Keywords new-delete-malloc-free.html","/language/cpp/keywords[关键字]/3-Keywords new-delete-malloc-free.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/3-Keywords%20new-delete-malloc-free.html","/language/cpp/keywords[关键字]/3-Keywords new-delete-malloc-free.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/3-Keywords%20new-delete-malloc-free.md"]],["v-3152f788","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/4-Modifiers-%20public-protected-private.html",{d:170073813e4,c:["c++"],e:`
<h2> 类(class)中</h2>
<h3> 访问控制</h3>

<figure><figcaption></figcaption></figure>
<blockquote>
<p><strong>Private自己可见|Protected自己和好友可见|Public所有人可见</strong></p>
</blockquote>
<ol>
<li><strong>Public（公共）:</strong>
<ul>
<li>成员声明为 <code>public</code> 的，可以在类的内部和外部访问。</li>
<li>对于类的用户来说，<code>public</code> 成员是可见的，可以直接访问。</li>
</ul>
</li>
</ol>`,r:{minutes:2.87,words:861},y:"a",t:"c++4.public|protected|private",O:4},["/language/cpp/keywords_关键字_/4-Modifiers- public-protected-private.html","/language/cpp/keywords[关键字]/4-Modifiers- public-protected-private.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/4-Modifiers-%20public-protected-private.html","/language/cpp/keywords[关键字]/4-Modifiers- public-protected-private.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/4-Modifiers-%20public-protected-private.md"]],["v-8f64b8dc","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/5-Diamond%20Inheritance.html",{d:1703074087e3,c:["c++"],e:`
<h2> 菱形继承</h2>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> dataA<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">A</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
<span class="token keyword">int</span> dataB<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">A</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
<span class="token keyword">int</span> dataC<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">B</span><span class="token punctuation">,</span> <span class="token keyword">public</span> <span class="token class-name">C</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
<span class="token keyword">int</span> dataD<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.26,words:3977},y:"a",t:"c++5.virtual-菱形继承|多态",O:5},["/language/cpp/keywords_关键字_/5-Diamond Inheritance.html","/language/cpp/keywords[关键字]/5-Diamond Inheritance.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/5-Diamond%20Inheritance.html","/language/cpp/keywords[关键字]/5-Diamond Inheritance.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/5-Diamond%20Inheritance.md"]],["v-7244b256","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/6-Keywords%20friend.html",{d:1703074087e3,c:["c++"],e:`





<ol>
<li>
<p><strong>访问私有成员：</strong> 如果有一些与类密切相关的非成员函数需要访问类的私有成员，
但这些函数不适合成为类的成员函数，可以将它们声明为友元函数，以便访问类的私有部分。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateData<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">privateData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 友元函数的声明</span>
    <span class="token keyword">friend</span> <span class="token keyword">void</span> <span class="token function">displayPrivateData</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 友元函数的定义</span>
<span class="token keyword">void</span> <span class="token function">displayPrivateData</span><span class="token punctuation">(</span><span class="token keyword">const</span> MyClass<span class="token operator">&amp;</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Private Data: "</span> <span class="token operator">&lt;&lt;</span> obj<span class="token punctuation">.</span>privateData <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>提高效率：</strong> 有时，为了提高效率，需要使用非成员函数来执行某些操作，而这些操作需要访问类的私有成员。通过将这些函数声明为友元，可以避免将所有操作都包装成成员函数。</p>
</li>
<li>
<p><strong>重载运算符：</strong> 重载某些运算符时，可能需要直接访问类的私有成员。友元函数允许非成员函数重载类的运算符并访问类的私有部分。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Complex</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">double</span> real<span class="token punctuation">;</span>
    <span class="token keyword">double</span> imag<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">Complex</span><span class="token punctuation">(</span><span class="token keyword">double</span> r<span class="token punctuation">,</span> <span class="token keyword">double</span> i<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">real</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">imag</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 友元函数的声明</span>
    <span class="token keyword">friend</span> Complex <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 友元函数的定义</span>
Complex <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Complex</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>real <span class="token operator">+</span> b<span class="token punctuation">.</span>real<span class="token punctuation">,</span> a<span class="token punctuation">.</span>imag <span class="token operator">+</span> b<span class="token punctuation">.</span>imag<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:2.06,words:619},y:"a",t:"c++6.friend",O:6},["/language/cpp/keywords_关键字_/6-Keywords friend.html","/language/cpp/keywords[关键字]/6-Keywords friend.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/6-Keywords%20friend.html","/language/cpp/keywords[关键字]/6-Keywords friend.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/6-Keywords%20friend.md"]],["v-6427f58a","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/7-Modifiers-Constants-Static.html",{d:1703074087e3,c:["c++"],e:`<h3> 前置知识</h3>
<table>
<thead>
<tr>
<th>区域</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>代码区 (Code)</td>
<td>存放函数体的二进制代码，只读，由操作系统管理。</td>
</tr>
<tr>
<td>全局/静态存储区 (Global/Static Storage)</td>
<td>存放全局变量、静态变量和常量，在程序启动时分配，程序结束时释放。</td>
</tr>
<tr>
<td>栈区 (Stack)</td>
<td>存放函数的局部变量、函数参数值等，由编译器自动分配释放，与函数调用相关。</td>
</tr>
<tr>
<td>堆区 (Heap)</td>
<td>程序员可以通过 new 和 delete（或 malloc 和 free）用于动态内存管理，需要手动管理内存的生命周期。</td>
</tr>
</tbody>
</table>`,r:{minutes:3.68,words:1103},y:"a",t:"c++7.const|static|#defined",O:7},["/language/cpp/keywords_关键字_/7-Modifiers-Constants-Static.html","/language/cpp/keywords[关键字]/7-Modifiers-Constants-Static.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/7-Modifiers-Constants-Static.html","/language/cpp/keywords[关键字]/7-Modifiers-Constants-Static.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/7-Modifiers-Constants-Static.md"]],["v-6e77ac4e","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/8-Keywords%20sizeof.html",{d:1703074087e3,c:["c++"],e:`
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> publicVar<span class="token punctuation">;</span>
    <span class="token keyword">char</span> charVar<span class="token punctuation">;</span>
    <span class="token keyword">double</span> doubleVar<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> derivedVar<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.17,words:652},y:"a",t:"c++8.sizeof和内存对齐",O:8},["/language/cpp/keywords_关键字_/8-Keywords sizeof.html","/language/cpp/keywords[关键字]/8-Keywords sizeof.html","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/8-Keywords%20sizeof.html","/language/cpp/keywords[关键字]/8-Keywords sizeof.md","/language/cpp/keywords%5B%E5%85%B3%E9%94%AE%E5%AD%97%5D/8-Keywords%20sizeof.md"]],["v-0dc2bc3e","/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/1-Namespace%20scope.html",{d:1701724009e3,c:["c++"],e:`
<ol>
<li>
<p>每个命名空间定义引入一个作用范围，包含该命名空间的所有内容。</p>
</li>
<li>
<p>重新声明或特化的部分也在该范围内。</p>
</li>
<li>
<p>全局作用域是整个程序的作用范围。</p>
</li>
</ol>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">namespace</span> Q <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span> V <span class="token punctuation">{</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">void</span> <span class="token class-name">V</span><span class="token double-colon punctuation">::</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">// in the scope of V</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.77,words:230},y:"a",t:"c++1.Namespace作用域",O:1},["/language/cpp/new_新特性_/1-Namespace scope.html","/language/cpp/new[新特性]/1-Namespace scope.html","/language/cpp/new%5B%E6%96%B0%E7%89%B9%E6%80%A7%5D/1-Namespace%20scope.html","/language/cpp/new[新特性]/1-Namespace scope.md","/language/cpp/new%5B%E6%96%B0%E7%89%B9%E6%80%A7%5D/1-Namespace%20scope.md"]],["v-1700a216","/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/2-Lvalues%20and%20Rvalues.html",{d:1701724009e3,c:["c++"],e:`
<h2> 左值和右值</h2>
<h3> 直觉判断</h3>
<p>C++98已经出现，字面理解表达式等号左边的值为左值，右边的右值。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//a是左值，1是右值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.96,words:589},y:"a",t:"c++2.理解左右值和移动语义TODO",O:2},["/language/cpp/new_新特性_/2-Lvalues and Rvalues.html","/language/cpp/new[新特性]/2-Lvalues and Rvalues.html","/language/cpp/new%5B%E6%96%B0%E7%89%B9%E6%80%A7%5D/2-Lvalues%20and%20Rvalues.html","/language/cpp/new[新特性]/2-Lvalues and Rvalues.md","/language/cpp/new%5B%E6%96%B0%E7%89%B9%E6%80%A7%5D/2-Lvalues%20and%20Rvalues.md"]],["v-287bdc3a","/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/3-lambda.html",{d:1701724009e3,c:["c++"],e:`



<h2> 函数式编程</h2>
<blockquote>
<p>函数式编程（Functional Programming）是一种编程范式，它将计算视为数学函数的求值，并避免了可变状态和可变数据。
函数式编程强调函数的纯粹性、不可变性和无副作用，这些特性使得程序更容易推理、测试和并行化。</p>
</blockquote>
<figure><figcaption></figcaption></figure>

<h2> lambda表达式</h2>
<h3> 定义</h3>

<h3> 语法</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token punctuation">[</span>capture<span class="token punctuation">]</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> return_type <span class="token punctuation">{</span>
    <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.14,words:942},y:"a",t:"c++3.lambda表达式",O:3},["/language/cpp/new_新特性_/3-lambda.html","/language/cpp/new[新特性]/3-lambda.html","/language/cpp/new%5B%E6%96%B0%E7%89%B9%E6%80%A7%5D/3-lambda.html","/language/cpp/new[新特性]/3-lambda.md","/language/cpp/new%5B%E6%96%B0%E7%89%B9%E6%80%A7%5D/3-lambda.md"]],["v-5ab892c7","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/1-template.html",{d:1701893836e3,c:["c++"],e:`
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//这是普通函数写法</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//函数重载</span>
<span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">double</span> a <span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.52,words:1355},y:"a",t:"c++1.template",O:1},["/language/cpp/stl_标准模板_/1-template.html","/language/cpp/stl[标准模板]/1-template.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/1-template.html","/language/cpp/stl[标准模板]/1-template.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/1-template.md"]],["v-61e080a6","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/10-Pair.html",{d:1703335047e3,c:["c++"],e:`<h3> Pair</h3>

<h3> 定义：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;utility&gt;</span></span>

std<span class="token double-colon punctuation">::</span>pair<span class="token operator">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token operator">&gt;</span> myPair<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.93,words:278},y:"a",t:"c++10.Pair容器",O:10},["/language/cpp/stl_标准模板_/10-Pair.html","/language/cpp/stl[标准模板]/10-Pair.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/10-Pair.html","/language/cpp/stl[标准模板]/10-Pair.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/10-Pair.md"]],["v-3f3ef6ee","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/11-Map.html",{d:1703335047e3,c:["c++"],e:`<h3> Map|MutiMap</h3>

<h3> 定义：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;map&gt;</span></span>

std<span class="token double-colon punctuation">::</span>map<span class="token operator">&lt;</span>KeyType<span class="token punctuation">,</span> ValueType<span class="token operator">&gt;</span> myMap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.34,words:403},y:"a",t:"c++11.Map/MutiMap容器",O:11},["/language/cpp/stl_标准模板_/11-Map.html","/language/cpp/stl[标准模板]/11-Map.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/11-Map.html","/language/cpp/stl[标准模板]/11-Map.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/11-Map.md"]],["v-c27c08f6","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/2-stl.html",{d:1701893836e3,c:["c++"],e:`<h3> STL</h3>

<h3> 核心组件</h3>
<table>
<thead>
<tr>
<th>类别</th>
<th>组件</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>容器（Containers）</td>
<td>vector</td>
<td>动态数组，支持快速随机访问和尾部插入操作。</td>
</tr>
<tr>
<td></td>
<td>list</td>
<td>双向链表，支持在任意位置插入和删除操作。</td>
</tr>
<tr>
<td></td>
<td>deque</td>
<td>双端队列，支持在两端快速插入和删除操作。</td>
</tr>
<tr>
<td></td>
<td>queue</td>
<td>队列，先进先出（FIFO）数据结构。</td>
</tr>
<tr>
<td></td>
<td>stack</td>
<td>栈，后进先出（LIFO）数据结构。</td>
</tr>
<tr>
<td></td>
<td>set</td>
<td>集合，元素唯一，有序。</td>
</tr>
<tr>
<td></td>
<td>map</td>
<td>映射，键-值对的集合，键唯一，有序。</td>
</tr>
<tr>
<td></td>
<td>unordered_set</td>
<td>无序集合，元素唯一。</td>
</tr>
<tr>
<td></td>
<td>unordered_map</td>
<td>无序映射，键-值对的集合，键唯一。</td>
</tr>
<tr>
<td></td>
<td>stack</td>
<td>栈，后进先出（LIFO）数据结构。</td>
</tr>
<tr>
<td>迭代器（Iterators）</td>
<td>input_iterator</td>
<td>用于遍历序列的输入迭代器。</td>
</tr>
<tr>
<td></td>
<td>output_iterator</td>
<td>用于向序列写入的输出迭代器。</td>
</tr>
<tr>
<td></td>
<td>forward_iterator</td>
<td>单向遍历序列的迭代器，支持逐个增加。</td>
</tr>
<tr>
<td></td>
<td>bidirectional_iterator</td>
<td>双向遍历序列的迭代器，支持逐个增加或逐个减少。</td>
</tr>
<tr>
<td></td>
<td>random_access_iterator</td>
<td>随机访问序列的迭代器，支持直接跳跃访问。</td>
</tr>
<tr>
<td>算法（Algorithms）</td>
<td>sort</td>
<td>对序列进行排序。</td>
</tr>
<tr>
<td></td>
<td>find</td>
<td>在序列中查找特定元素。</td>
</tr>
<tr>
<td></td>
<td>transform</td>
<td>对序列进行变换操作。</td>
</tr>
<tr>
<td></td>
<td>accumulate</td>
<td>计算序列元素的累积值。</td>
</tr>
<tr>
<td></td>
<td>for_each</td>
<td>对序列的每个元素执行指定操作。</td>
</tr>
<tr>
<td>适配器（Adapters）</td>
<td>stack</td>
<td>适配器，将栈的操作添加到其他容器上。</td>
</tr>
<tr>
<td></td>
<td>queue</td>
<td>适配器，将队列的操作添加到其他容器上。</td>
</tr>
<tr>
<td></td>
<td>priority_queue</td>
<td>适配器，将优先队列的操作添加到其他容器上。</td>
</tr>
<tr>
<td>仿函数（Functors）</td>
<td>less</td>
<td>二元谓词，用于比较两个元素。</td>
</tr>
<tr>
<td></td>
<td>greater</td>
<td>二元谓词，用于比较两个元素。</td>
</tr>
<tr>
<td></td>
<td>plus</td>
<td>二元函数对象，实现加法。</td>
</tr>
<tr>
<td></td>
<td>minus</td>
<td>二元函数对象，实现减法。</td>
</tr>
<tr>
<td></td>
<td>negate</td>
<td>一元函数对象，实现取反。</td>
</tr>
<tr>
<td>空间配置器（Allocators）</td>
<td>allocator</td>
<td>分配和释放内存的对象。</td>
</tr>
<tr>
<td></td>
<td>allocator_traits</td>
<td>提供对分配器属性和操作的访问。</td>
</tr>
</tbody>
</table>`,r:{minutes:1.79,words:536},y:"a",t:"c++2.stl模板概述",O:2},["/language/cpp/stl_标准模板_/2-stl.html","/language/cpp/stl[标准模板]/2-stl.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/2-stl.html","/language/cpp/stl[标准模板]/2-stl.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/2-stl.md"]],["v-6d26eac0","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/3-vector.html",{d:1701893836e3,c:["c++"],e:`<h3> vector</h3>



<ol>
<li>
<p><strong>静态空间 vs. 动态扩展</strong>：</p>
<ul>
<li><strong>数组</strong>：在定义时，数组的大小就已经固定，它占据静态的空间，无法在运行时改变大小。数组的大小是在编译时确定的。</li>
<li><strong><code>std::vector</code></strong>：<code>std::vector</code> 是一个动态数组的实现，它可以在运行时动态扩展。这意味着 <code>std::vector</code> 的大小可以根据需要动态增加或减少，而不需要手动管理内存。</li>
</ul>
</li>
<li>
<p><strong>动态扩展的实现</strong>：</p>
<ul>
<li>当 <code>std::vector</code> 的容量不足以容纳新元素时，它会请求更大的内存块。这通常涉及到分配一块新的内存空间，将原有元素拷贝到新的内存中，然后释放原有的内存。这个过程确保了内存的连续性，有助于提高访问效率。</li>
<li>遵循左闭右开原则</li>
</ul>
</li>
</ol>`,r:{minutes:5.28,words:1583},y:"a",t:"c++3.vector容器",O:3},["/language/cpp/stl_标准模板_/3-vector.html","/language/cpp/stl[标准模板]/3-vector.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/3-vector.html","/language/cpp/stl[标准模板]/3-vector.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/3-vector.md"]],["v-a0ecd5a4","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/4-deque.html",{d:1703074087e3,c:["c++"],e:`<h3> deque</h3>


<figure><figcaption></figcaption></figure>
<h3> <code>std::deque</code> 定义：</h3>




<figure><figcaption></figcaption></figure>


<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;deque&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> myDeque <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用迭代器遍历</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>deque<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator it <span class="token operator">=</span> myDeque<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> myDeque<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>it<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it <span class="token operator">&lt;&lt;</span> <span class="token string">" "</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.34,words:1003},y:"a",t:"c++4.deque容器",O:4},["/language/cpp/stl_标准模板_/4-deque.html","/language/cpp/stl[标准模板]/4-deque.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/4-deque.html","/language/cpp/stl[标准模板]/4-deque.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/4-deque.md"]],["v-905736f2","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/5-fstream.html",{d:1703074087e3,c:["c++"],e:`

<table>
<thead>
<tr>
<th>数据类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>ofstream</td>
<td>输出文件流，用于创建文件并向文件写入信息。</td>
</tr>
<tr>
<td>ifstream</td>
<td>输入文件流，用于从文件读取信息。</td>
</tr>
<tr>
<td>fstream</td>
<td>文件流，同时具有 ofstream 和 ifstream 功能，可以创建文件，向文件写入信息，从文件读取信息。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>步骤</th>
<th>操作</th>
<th>代码示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>包含头文件</td>
<td><code>#include &lt;fstream&gt;</code></td>
</tr>
<tr>
<td>2</td>
<td>打开文件（文件输入流）</td>
<td><code>std::ifstream inputFile("input.txt");</code></td>
</tr>
<tr>
<td>3</td>
<td>打开文件（文件输出流）</td>
<td><code>std::ofstream outputFile("output.txt");</code></td>
</tr>
<tr>
<td>4</td>
<td>打开文件（文件输入和输出流）</td>
<td>\`std::fstream file("data.txt", std::ios::in</td>
</tr>
<tr>
<td>5</td>
<td>检查文件是否成功打开</td>
<td><code>if (inputFile.is_open()) { /* 文件成功打开，进行读取操作 */ }</code></td>
</tr>
<tr>
<td>6</td>
<td>读取操作（从文件中读取数据）</td>
<td><code>int value; inputFile &gt;&gt; value;</code></td>
</tr>
<tr>
<td>7</td>
<td>写入操作（向文件中写入数据）</td>
<td><code>outputFile &lt;&lt; "Hello, File!";</code></td>
</tr>
<tr>
<td>8</td>
<td>读写操作（文件输入和输出流的读写操作）</td>
<td><code>file &gt;&gt; value; file &lt;&lt; "Data";</code></td>
</tr>
<tr>
<td>9</td>
<td>关闭文件流</td>
<td><code>inputFile.close(); outputFile.close(); file.close();</code></td>
</tr>
</tbody>
</table>`,r:{minutes:3.23,words:969},y:"a",t:"c++5.fstream|文件操作",O:5},["/language/cpp/stl_标准模板_/5-fstream.html","/language/cpp/stl[标准模板]/5-fstream.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/5-fstream.html","/language/cpp/stl[标准模板]/5-fstream.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/5-fstream.md"]],["v-d991c5f8","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/6-stack.html",{d:1703335047e3,c:["c++"],e:`<h3> stack</h3>

<blockquote>
<p><code>std::stack</code> 是 C++ 标准模板库中的容器适配器（container adapter），它基于某个底层容器（默认是 <code>std::deque</code>，
但也可以是 <code>std::vector</code> 或 <code>std::list</code>）提供了栈（stack）的功能。</p>
</blockquote>
<figure><figcaption></figcaption></figure>
<h3> 定义：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stack&gt;</span></span>

std<span class="token double-colon punctuation">::</span>stack<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> Container<span class="token operator">&gt;</span> myStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.92,words:576},y:"a",t:"c++6.stack容器",O:6},["/language/cpp/stl_标准模板_/6-stack.html","/language/cpp/stl[标准模板]/6-stack.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/6-stack.html","/language/cpp/stl[标准模板]/6-stack.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/6-stack.md"]],["v-d7dbcd0c","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/7-queue.html",{d:1703335047e3,c:["c++"],e:`<h3> queue</h3>

<figure><figcaption></figcaption></figure>
<blockquote>
<p><code>std::queue</code> 是 C++ 标准模板库中的容器适配器（container adapter），它基于某个底层容器（默认是 <code>std::deque</code>，
但也可以是 <code>std::list</code> 或 <code>std::vector</code>）提供了队列（queue）的功能。</p>
</blockquote>
<h3> 定义：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>

std<span class="token double-colon punctuation">::</span>queue<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> Container<span class="token operator">&gt;</span> myQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.6,words:480},y:"a",t:"c++7.queue容器",O:7},["/language/cpp/stl_标准模板_/7-queue.html","/language/cpp/stl[标准模板]/7-queue.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/7-queue.html","/language/cpp/stl[标准模板]/7-queue.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/7-queue.md"]],["v-df70076c","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/8-List.html",{d:1703335047e3,c:["c++"],e:`<h3> List</h3>
<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>
<h3> 定义：</h3>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;list&gt;</span></span>

std<span class="token double-colon punctuation">::</span>list<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> myList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.86,words:558},y:"a",t:"c++8.List容器",O:8},["/language/cpp/stl_标准模板_/8-List.html","/language/cpp/stl[标准模板]/8-List.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/8-List.html","/language/cpp/stl[标准模板]/8-List.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/8-List.md"]],["v-44c7c3a7","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/9-Set.html",{d:1703335047e3,c:["c++"],e:`<h3> Set/Multiset</h3>

<p>这两者的主要区别在于 <code>std::set</code> 中不允许重复的元素，而 <code>std::multiset</code> 允许重复的元素。</p>
<h3> <code>std::set</code> 定义和概念：</h3>
<h4> 定义：</h4>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;set&gt;</span></span>

std<span class="token double-colon punctuation">::</span>set<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> mySet<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.17,words:650},y:"a",t:"c++9.Set/Multiset容器",O:9},["/language/cpp/stl_标准模板_/9-Set.html","/language/cpp/stl[标准模板]/9-Set.html","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/9-Set.html","/language/cpp/stl[标准模板]/9-Set.md","/language/cpp/stl%5B%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF%5D/9-Set.md"]],["v-5308490b","/language/markdown/emoji/",{y:"p",t:"Emoji 列表",i:"face-smile",O:3},["/language/markdown/emoji/README.md"]],["v-655fc6a7","/language/markdown/emoji/nature.html",{d:1698921358e3,c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>☀️ <code>:sunny:</code></li>
<li>☔ <code>:umbrella:</code></li>
<li>☁️ <code>:cloud:</code></li>
<li>❄️ <code>:snowflake:</code></li>
<li>⛄ <code>:snowman:</code></li>
<li>⚡ <code>:zap:</code></li>
<li>🌀 <code>:cyclone:</code></li>
<li>🌁 <code>:foggy:</code></li>
<li>🌊 <code>:ocean:</code></li>
<li>🐱 <code>:cat:</code></li>
<li>🐶 <code>:dog:</code></li>
<li>🐭 <code>:mouse:</code></li>
<li>🐹 <code>:hamster:</code></li>
<li>🐰 <code>:rabbit:</code></li>
<li>🐺 <code>:wolf:</code></li>
<li>🐸 <code>:frog:</code></li>
<li>🐯 <code>:tiger:</code></li>
<li>🐨 <code>:koala:</code></li>
<li>🐻 <code>:bear:</code></li>
<li>🐷 <code>:pig:</code></li>
<li>🐽 <code>:pig_nose:</code></li>
<li>🐮 <code>:cow:</code></li>
<li>🐗 <code>:boar:</code></li>
<li>🐵 <code>:monkey_face:</code></li>
<li>🐒 <code>:monkey:</code></li>
<li>🐴 <code>:horse:</code></li>
<li>🐎 <code>:racehorse:</code></li>
<li>🐫 <code>:camel:</code></li>
<li>🐑 <code>:sheep:</code></li>
<li>🐘 <code>:elephant:</code></li>
<li>🐼 <code>:panda_face:</code></li>
<li>🐍 <code>:snake:</code></li>
<li>🐦 <code>:bird:</code></li>
<li>🐤 <code>:baby_chick:</code></li>
<li>🐥 <code>:hatched_chick:</code></li>
<li>🐣 <code>:hatching_chick:</code></li>
<li>🐔 <code>:chicken:</code></li>
<li>🐧 <code>:penguin:</code></li>
<li>🐢 <code>:turtle:</code></li>
<li>🐛 <code>:bug:</code></li>
<li>🐝 <code>:honeybee:</code></li>
<li>🐜 <code>:ant:</code></li>
<li>🪲 <code>:beetle:</code></li>
<li>🐌 <code>:snail:</code></li>
<li>🐙 <code>:octopus:</code></li>
<li>🐠 <code>:tropical_fish:</code></li>
<li>🐟 <code>:fish:</code></li>
<li>🐳 <code>:whale:</code></li>
<li>🐋 <code>:whale2:</code></li>
<li>🐬 <code>:dolphin:</code></li>
<li>🐄 <code>:cow2:</code></li>
<li>🐏 <code>:ram:</code></li>
<li>🐀 <code>:rat:</code></li>
<li>🐃 <code>:water_buffalo:</code></li>
<li>🐅 <code>:tiger2:</code></li>
<li>🐇 <code>:rabbit2:</code></li>
<li>🐉 <code>:dragon:</code></li>
<li>🐐 <code>:goat:</code></li>
<li>🐓 <code>:rooster:</code></li>
<li>🐕 <code>:dog2:</code></li>
<li>🐖 <code>:pig2:</code></li>
<li>🐁 <code>:mouse2:</code></li>
<li>🐂 <code>:ox:</code></li>
<li>🐲 <code>:dragon_face:</code></li>
<li>🐡 <code>:blowfish:</code></li>
<li>🐊 <code>:crocodile:</code></li>
<li>🐪 <code>:dromedary_camel:</code></li>
<li>🐆 <code>:leopard:</code></li>
<li>🐈 <code>:cat2:</code></li>
<li>🐩 <code>:poodle:</code></li>
<li>🐾 <code>:paw_prints:</code></li>
<li>💐 <code>:bouquet:</code></li>
<li>🌸 <code>:cherry_blossom:</code></li>
<li>🌷 <code>:tulip:</code></li>
<li>🍀 <code>:four_leaf_clover:</code></li>
<li>🌹 <code>:rose:</code></li>
<li>🌻 <code>:sunflower:</code></li>
<li>🌺 <code>:hibiscus:</code></li>
<li>🍁 <code>:maple_leaf:</code></li>
<li>🍃 <code>:leaves:</code></li>
<li>🍂 <code>:fallen_leaf:</code></li>
<li>🌿 <code>:herb:</code></li>
<li>🍄 <code>:mushroom:</code></li>
<li>🌵 <code>:cactus:</code></li>
<li>🌴 <code>:palm_tree:</code></li>
<li>🌲 <code>:evergreen_tree:</code></li>
<li>🌳 <code>:deciduous_tree:</code></li>
<li>🌰 <code>:chestnut:</code></li>
<li>🌱 <code>:seedling:</code></li>
<li>🌼 <code>:blossom:</code></li>
<li>🌾 <code>:ear_of_rice:</code></li>
<li>🐚 <code>:shell:</code></li>
<li>🌐 <code>:globe_with_meridians:</code></li>
<li>🌞 <code>:sun_with_face:</code></li>
<li>🌝 <code>:full_moon_with_face:</code></li>
<li>🌚 <code>:new_moon_with_face:</code></li>
<li>🌑 <code>:new_moon:</code></li>
<li>🌒 <code>:waxing_crescent_moon:</code></li>
<li>🌓 <code>:first_quarter_moon:</code></li>
<li>🌔 <code>:waxing_gibbous_moon:</code></li>
<li>🌕 <code>:full_moon:</code></li>
<li>🌖 <code>:waning_gibbous_moon:</code></li>
<li>🌗 <code>:last_quarter_moon:</code></li>
<li>🌘 <code>:waning_crescent_moon:</code></li>
<li>🌜 <code>:last_quarter_moon_with_face:</code></li>
<li>🌛 <code>:first_quarter_moon_with_face:</code></li>
<li>🌙 <code>:crescent_moon:</code></li>
<li>🌍 <code>:earth_africa:</code></li>
<li>🌎 <code>:earth_americas:</code></li>
<li>🌏 <code>:earth_asia:</code></li>
<li>🌋 <code>:volcano:</code></li>
<li>🌌 <code>:milky_way:</code></li>
<li>⛅ <code>:partly_sunny:</code></li>
</ul>`,r:{minutes:.79,words:237},y:"a",t:"自然 Emoji",i:"tree"},[":md"]],["v-b42c01e2","/language/markdown/emoji/object.html",{d:1698921358e3,c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>🎍 <code>:bamboo:</code></li>
<li>💝 <code>:gift_heart:</code></li>
<li>🎎 <code>:dolls:</code></li>
<li>🎒 <code>:school_satchel:</code></li>
<li>🎓 <code>:mortar_board:</code></li>
<li>🎏 <code>:flags:</code></li>
<li>🎆 <code>:fireworks:</code></li>
<li>🎇 <code>:sparkler:</code></li>
<li>🎐 <code>:wind_chime:</code></li>
<li>🎑 <code>:rice_scene:</code></li>
<li>🎃 <code>:jack_o_lantern:</code></li>
<li>👻 <code>:ghost:</code></li>
<li>🎅 <code>:santa:</code></li>
<li>🎄 <code>:christmas_tree:</code></li>
<li>🎁 <code>:gift:</code></li>
<li>🔔 <code>:bell:</code></li>
<li>🔕 <code>:no_bell:</code></li>
<li>🎋 <code>:tanabata_tree:</code></li>
<li>🎉 <code>:tada:</code></li>
<li>🎊 <code>:confetti_ball:</code></li>
<li>🎈 <code>:balloon:</code></li>
<li>🔮 <code>:crystal_ball:</code></li>
<li>💿 <code>:cd:</code></li>
<li>📀 <code>:dvd:</code></li>
<li>💾 <code>:floppy_disk:</code></li>
<li>📷 <code>:camera:</code></li>
<li>📹 <code>:video_camera:</code></li>
<li>🎥 <code>:movie_camera:</code></li>
<li>💻 <code>:computer:</code></li>
<li>📺 <code>:tv:</code></li>
<li>📱 <code>:iphone:</code></li>
<li>☎️ <code>:phone:</code></li>
<li>☎️ <code>:telephone:</code></li>
<li>📞 <code>:telephone_receiver:</code></li>
<li>📟 <code>:pager:</code></li>
<li>📠 <code>:fax:</code></li>
<li>💽 <code>:minidisc:</code></li>
<li>📼 <code>:vhs:</code></li>
<li>🔉 <code>:sound:</code></li>
<li>🔈 <code>:speaker:</code></li>
<li>🔇 <code>:mute:</code></li>
<li>📢 <code>:loudspeaker:</code></li>
<li>📣 <code>:mega:</code></li>
<li>⌛ <code>:hourglass:</code></li>
<li>⏳ <code>:hourglass_flowing_sand:</code></li>
<li>⏰ <code>:alarm_clock:</code></li>
<li>⌚ <code>:watch:</code></li>
<li>📻 <code>:radio:</code></li>
<li>📡 <code>:satellite:</code></li>
<li>➿ <code>:loop:</code></li>
<li>🔍 <code>:mag:</code></li>
<li>🔎 <code>:mag_right:</code></li>
<li>🔓 <code>:unlock:</code></li>
<li>🔒 <code>:lock:</code></li>
<li>🔏 <code>:lock_with_ink_pen:</code></li>
<li>🔐 <code>:closed_lock_with_key:</code></li>
<li>🔑 <code>:key:</code></li>
<li>💡 <code>:bulb:</code></li>
<li>🔦 <code>:flashlight:</code></li>
<li>🔆 <code>:high_brightness:</code></li>
<li>🔅 <code>:low_brightness:</code></li>
<li>🔌 <code>:electric_plug:</code></li>
<li>🔋 <code>:battery:</code></li>
<li>📲 <code>:calling:</code></li>
<li>📧 <code>:email:</code></li>
<li>📫 <code>:mailbox:</code></li>
<li>📮 <code>:postbox:</code></li>
<li>🛀 <code>:bath:</code></li>
<li>🛁 <code>:bathtub:</code></li>
<li>🚿 <code>:shower:</code></li>
<li>🚽 <code>:toilet:</code></li>
<li>🔧 <code>:wrench:</code></li>
<li>🔩 <code>:nut_and_bolt:</code></li>
<li>🔨 <code>:hammer:</code></li>
<li>💺 <code>:seat:</code></li>
<li>💰 <code>:moneybag:</code></li>
<li>💴 <code>:yen:</code></li>
<li>💵 <code>:dollar:</code></li>
<li>💷 <code>:pound:</code></li>
<li>💶 <code>:euro:</code></li>
<li>💳 <code>:credit_card:</code></li>
<li>💸 <code>:money_with_wings:</code></li>
<li>📧 <code>:e-mail:</code></li>
<li>📥 <code>:inbox_tray:</code></li>
<li>📤 <code>:outbox_tray:</code></li>
<li>✉️ <code>:envelope:</code></li>
<li>📨 <code>:incoming_envelope:</code></li>
<li>📯 <code>:postal_horn:</code></li>
<li>📪 <code>:mailbox_closed:</code></li>
<li>📬 <code>:mailbox_with_mail:</code></li>
<li>📭 <code>:mailbox_with_no_mail:</code></li>
<li>📦 <code>:package:</code></li>
<li>🚪 <code>:door:</code></li>
<li>🚬 <code>:smoking:</code></li>
<li>💣 <code>:bomb:</code></li>
<li>🔫 <code>:gun:</code></li>
<li>🔪 <code>:hocho:</code></li>
<li>💊 <code>:pill:</code></li>
<li>💉 <code>:syringe:</code></li>
<li>📄 <code>:page_facing_up:</code></li>
<li>📃 <code>:page_with_curl:</code></li>
<li>📑 <code>:bookmark_tabs:</code></li>
<li>📊 <code>:bar_chart:</code></li>
<li>📈 <code>:chart_with_upwards_trend:</code></li>
<li>📉 <code>:chart_with_downwards_trend:</code></li>
<li>📜 <code>:scroll:</code></li>
<li>📋 <code>:clipboard:</code></li>
<li>📆 <code>:calendar:</code></li>
<li>📅 <code>:date:</code></li>
<li>📇 <code>:card_index:</code></li>
<li>📁 <code>:file_folder:</code></li>
<li>📂 <code>:open_file_folder:</code></li>
<li>✂️ <code>:scissors:</code></li>
<li>📌 <code>:pushpin:</code></li>
<li>📎 <code>:paperclip:</code></li>
<li>✒️ <code>:black_nib:</code></li>
<li>✏️ <code>:pencil2:</code></li>
<li>📏 <code>:straight_ruler:</code></li>
<li>📐 <code>:triangular_ruler:</code></li>
<li>📕 <code>:closed_book:</code></li>
<li>📗 <code>:green_book:</code></li>
<li>📘 <code>:blue_book:</code></li>
<li>📙 <code>:orange_book:</code></li>
<li>📓 <code>:notebook:</code></li>
<li>📔 <code>:notebook_with_decorative_cover:</code></li>
<li>📒 <code>:ledger:</code></li>
<li>📚 <code>:books:</code></li>
<li>🔖 <code>:bookmark:</code></li>
<li>📛 <code>:name_badge:</code></li>
<li>🔬 <code>:microscope:</code></li>
<li>🔭 <code>:telescope:</code></li>
<li>📰 <code>:newspaper:</code></li>
<li>🏈 <code>:football:</code></li>
<li>🏀 <code>:basketball:</code></li>
<li>⚽ <code>:soccer:</code></li>
<li>⚾ <code>:baseball:</code></li>
<li>🎾 <code>:tennis:</code></li>
<li>🎱 <code>:8ball:</code></li>
<li>🏉 <code>:rugby_football:</code></li>
<li>🎳 <code>:bowling:</code></li>
<li>⛳ <code>:golf:</code></li>
<li>🚵 <code>:mountain_bicyclist:</code></li>
<li>🚴 <code>:bicyclist:</code></li>
<li>🏇 <code>:horse_racing:</code></li>
<li>🏂 <code>:snowboarder:</code></li>
<li>🏊 <code>:swimmer:</code></li>
<li>🏄 <code>:surfer:</code></li>
<li>🎿 <code>:ski:</code></li>
<li>♠️ <code>:spades:</code></li>
<li>♥️ <code>:hearts:</code></li>
<li>♣️ <code>:clubs:</code></li>
<li>♦️ <code>:diamonds:</code></li>
<li>💎 <code>:gem:</code></li>
<li>💍 <code>:ring:</code></li>
<li>🏆 <code>:trophy:</code></li>
<li>🎼 <code>:musical_score:</code></li>
<li>🎹 <code>:musical_keyboard:</code></li>
<li>🎻 <code>:violin:</code></li>
<li>👾 <code>:space_invader:</code></li>
<li>🎮 <code>:video_game:</code></li>
<li>🃏 <code>:black_joker:</code></li>
<li>🎴 <code>:flower_playing_cards:</code></li>
<li>🎲 <code>:game_die:</code></li>
<li>🎯 <code>:dart:</code></li>
<li>🀄 <code>:mahjong:</code></li>
<li>🎬 <code>:clapper:</code></li>
<li>📝 <code>:memo:</code></li>
<li>📝 <code>:pencil:</code></li>
<li>📖 <code>:book:</code></li>
<li>🎨 <code>:art:</code></li>
<li>🎤 <code>:microphone:</code></li>
<li>🎧 <code>:headphones:</code></li>
<li>🎺 <code>:trumpet:</code></li>
<li>🎷 <code>:saxophone:</code></li>
<li>🎸 <code>:guitar:</code></li>
<li>👞 <code>:shoe:</code></li>
<li>👡 <code>:sandal:</code></li>
<li>👠 <code>:high_heel:</code></li>
<li>💄 <code>:lipstick:</code></li>
<li>👢 <code>:boot:</code></li>
<li>👕 <code>:shirt:</code></li>
<li>👕 <code>:tshirt:</code></li>
<li>👔 <code>:necktie:</code></li>
<li>👚 <code>:womans_clothes:</code></li>
<li>👗 <code>:dress:</code></li>
<li>🎽 <code>:running_shirt_with_sash:</code></li>
<li>👖 <code>:jeans:</code></li>
<li>👘 <code>:kimono:</code></li>
<li>👙 <code>:bikini:</code></li>
<li>🎀 <code>:ribbon:</code></li>
<li>🎩 <code>:tophat:</code></li>
<li>👑 <code>:crown:</code></li>
<li>👒 <code>:womans_hat:</code></li>
<li>👞 <code>:mans_shoe:</code></li>
<li>🌂 <code>:closed_umbrella:</code></li>
<li>💼 <code>:briefcase:</code></li>
<li>👜 <code>:handbag:</code></li>
<li>👝 <code>:pouch:</code></li>
<li>👛 <code>:purse:</code></li>
<li>👓 <code>:eyeglasses:</code></li>
<li>🎣 <code>:fishing_pole_and_fish:</code></li>
<li>☕ <code>:coffee:</code></li>
<li>🍵 <code>:tea:</code></li>
<li>🍶 <code>:sake:</code></li>
<li>🍼 <code>:baby_bottle:</code></li>
<li>🍺 <code>:beer:</code></li>
<li>🍻 <code>:beers:</code></li>
<li>🍸 <code>:cocktail:</code></li>
<li>🍹 <code>:tropical_drink:</code></li>
<li>🍷 <code>:wine_glass:</code></li>
<li>🍴 <code>:fork_and_knife:</code></li>
<li>🍕 <code>:pizza:</code></li>
<li>🍔 <code>:hamburger:</code></li>
<li>🍟 <code>:fries:</code></li>
<li>🍗 <code>:poultry_leg:</code></li>
<li>🍖 <code>:meat_on_bone:</code></li>
<li>🍝 <code>:spaghetti:</code></li>
<li>🍛 <code>:curry:</code></li>
<li>🍤 <code>:fried_shrimp:</code></li>
<li>🍱 <code>:bento:</code></li>
<li>🍣 <code>:sushi:</code></li>
<li>🍥 <code>:fish_cake:</code></li>
<li>🍙 <code>:rice_ball:</code></li>
<li>🍘 <code>:rice_cracker:</code></li>
<li>🍚 <code>:rice:</code></li>
<li>🍜 <code>:ramen:</code></li>
<li>🍲 <code>:stew:</code></li>
<li>🍢 <code>:oden:</code></li>
<li>🍡 <code>:dango:</code></li>
<li>🥚 <code>:egg:</code></li>
<li>🍞 <code>:bread:</code></li>
<li>🍩 <code>:doughnut:</code></li>
<li>🍮 <code>:custard:</code></li>
<li>🍦 <code>:icecream:</code></li>
<li>🍨 <code>:ice_cream:</code></li>
<li>🍧 <code>:shaved_ice:</code></li>
<li>🎂 <code>:birthday:</code></li>
<li>🍰 <code>:cake:</code></li>
<li>🍪 <code>:cookie:</code></li>
<li>🍫 <code>:chocolate_bar:</code></li>
<li>🍬 <code>:candy:</code></li>
<li>🍭 <code>:lollipop:</code></li>
<li>🍯 <code>:honey_pot:</code></li>
<li>🍎 <code>:apple:</code></li>
<li>🍏 <code>:green_apple:</code></li>
<li>🍊 <code>:tangerine:</code></li>
<li>🍋 <code>:lemon:</code></li>
<li>🍒 <code>:cherries:</code></li>
<li>🍇 <code>:grapes:</code></li>
<li>🍉 <code>:watermelon:</code></li>
<li>🍓 <code>:strawberry:</code></li>
<li>🍑 <code>:peach:</code></li>
<li>🍈 <code>:melon:</code></li>
<li>🍌 <code>:banana:</code></li>
<li>🍐 <code>:pear:</code></li>
<li>🍍 <code>:pineapple:</code></li>
<li>🍠 <code>:sweet_potato:</code></li>
<li>🍆 <code>:eggplant:</code></li>
<li>🍅 <code>:tomato:</code></li>
<li>🌽 <code>:corn:</code></li>
</ul>`,r:{minutes:1.78,words:534},y:"a",t:"对象 Emoji",i:"object-group"},[":md"]],["v-362d81bf","/language/markdown/emoji/people.html",{d:1698921358e3,c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>😄 <code>:smile:</code></li>
<li>😆 <code>:laughing:</code></li>
<li>😊 <code>:blush:</code></li>
<li>😃 <code>:smiley:</code></li>
<li>😏 <code>:smirk:</code></li>
<li>😍 <code>:heart_eyes:</code></li>
<li>😘 <code>:kissing_heart:</code></li>
<li>😚 <code>:kissing_closed_eyes:</code></li>
<li>😳 <code>:flushed:</code></li>
<li>😌 <code>:relieved:</code></li>
<li>😆 <code>:satisfied:</code></li>
<li>😁 <code>:grin:</code></li>
<li>😉 <code>:wink:</code></li>
<li>😜 <code>:stuck_out_tongue_winking_eye:</code></li>
<li>😝 <code>:stuck_out_tongue_closed_eyes:</code></li>
<li>😀 <code>:grinning:</code></li>
<li>😗 <code>:kissing:</code></li>
<li>😙 <code>:kissing_smiling_eyes:</code></li>
<li>😛 <code>:stuck_out_tongue:</code></li>
<li>😴 <code>:sleeping:</code></li>
<li>😟 <code>:worried:</code></li>
<li>😦 <code>:frowning:</code></li>
<li>😧 <code>:anguished:</code></li>
<li>😮 <code>:open_mouth:</code></li>
<li>😬 <code>:grimacing:</code></li>
<li>😕 <code>:confused:</code></li>
<li>😯 <code>:hushed:</code></li>
<li>😑 <code>:expressionless:</code></li>
<li>😒 <code>:unamused:</code></li>
<li>😅 <code>:sweat_smile:</code></li>
<li>😓 <code>:sweat:</code></li>
<li>😥 <code>:disappointed_relieved:</code></li>
<li>😩 <code>:weary:</code></li>
<li>😔 <code>:pensive:</code></li>
<li>😞 <code>:disappointed:</code></li>
<li>😖 <code>:confounded:</code></li>
<li>😨 <code>:fearful:</code></li>
<li>😰 <code>:cold_sweat:</code></li>
<li>😣 <code>:persevere:</code></li>
<li>😢 <code>:cry:</code></li>
<li>😭 <code>:sob:</code></li>
<li>😂 <code>:joy:</code></li>
<li>😲 <code>:astonished:</code></li>
<li>😱 <code>:scream:</code></li>
<li>😫 <code>:tired_face:</code></li>
<li>😠 <code>:angry:</code></li>
<li>😡 <code>:rage:</code></li>
<li>😤 <code>:triumph:</code></li>
<li>😪 <code>:sleepy:</code></li>
<li>😋 <code>:yum:</code></li>
<li>😷 <code>:mask:</code></li>
<li>😎 <code>:sunglasses:</code></li>
<li>😵 <code>:dizzy_face:</code></li>
<li>👿 <code>:imp:</code></li>
<li>😈 <code>:smiling_imp:</code></li>
<li>😐 <code>:neutral_face:</code></li>
<li>😶 <code>:no_mouth:</code></li>
<li>😇 <code>:innocent:</code></li>
<li>👽 <code>:alien:</code></li>
<li>💛 <code>:yellow_heart:</code></li>
<li>💙 <code>:blue_heart:</code></li>
<li>💜 <code>:purple_heart:</code></li>
<li>❤️ <code>:heart:</code></li>
<li>💚 <code>:green_heart:</code></li>
<li>💔 <code>:broken_heart:</code></li>
<li>💓 <code>:heartbeat:</code></li>
<li>💗 <code>:heartpulse:</code></li>
<li>💕 <code>:two_hearts:</code></li>
<li>💞 <code>:revolving_hearts:</code></li>
<li>💘 <code>:cupid:</code></li>
<li>💖 <code>:sparkling_heart:</code></li>
<li>✨ <code>:sparkles:</code></li>
<li>⭐ <code>:star:</code></li>
<li>🌟 <code>:star2:</code></li>
<li>💫 <code>:dizzy:</code></li>
<li>💥 <code>:boom:</code></li>
<li>💥 <code>:collision:</code></li>
<li>💢 <code>:anger:</code></li>
<li>❗ <code>:exclamation:</code></li>
<li>❓ <code>:question:</code></li>
<li>❕ <code>:grey_exclamation:</code></li>
<li>❔ <code>:grey_question:</code></li>
<li>💤 <code>:zzz:</code></li>
<li>💨 <code>:dash:</code></li>
<li>💦 <code>:sweat_drops:</code></li>
<li>🎶 <code>:notes:</code></li>
<li>🎵 <code>:musical_note:</code></li>
<li>🔥 <code>:fire:</code></li>
<li>💩 <code>:hankey:</code></li>
<li>💩 <code>:poop:</code></li>
<li>💩 <code>:shit:</code></li>
<li>👍 <code>:+1:</code></li>
<li>👍 <code>:thumbsup:</code></li>
<li>👎 <code>:-1:</code></li>
<li>👎 <code>:thumbsdown:</code></li>
<li>👌 <code>:ok_hand:</code></li>
<li>👊 <code>:punch:</code></li>
<li>👊 <code>:facepunch:</code></li>
<li>✊ <code>:fist:</code></li>
<li>✌️ <code>:v:</code></li>
<li>👋 <code>:wave:</code></li>
<li>✋ <code>:hand:</code></li>
<li>✋ <code>:raised_hand:</code></li>
<li>👐 <code>:open_hands:</code></li>
<li>☝️ <code>:point_up:</code></li>
<li>👇 <code>:point_down:</code></li>
<li>👈 <code>:point_left:</code></li>
<li>👉 <code>:point_right:</code></li>
<li>🙌 <code>:raised_hands:</code></li>
<li>🙏 <code>:pray:</code></li>
<li>👆 <code>:point_up_2:</code></li>
<li>👏 <code>:clap:</code></li>
<li>💪 <code>:muscle:</code></li>
<li>🤘 <code>:metal:</code></li>
<li>🖕 <code>:fu:</code></li>
<li>🏃 <code>:runner:</code></li>
<li>🏃 <code>:running:</code></li>
<li>👫 <code>:couple:</code></li>
<li>👪 <code>:family:</code></li>
<li>👬 <code>:two_men_holding_hands:</code></li>
<li>👭 <code>:two_women_holding_hands:</code></li>
<li>💃 <code>:dancer:</code></li>
<li>👯 <code>:dancers:</code></li>
<li>🙆‍♀️ <code>:ok_woman:</code></li>
<li>🙅 <code>:no_good:</code></li>
<li>💁 <code>:information_desk_person:</code></li>
<li>🙋 <code>:raising_hand:</code></li>
<li>👰‍♀️ <code>:bride_with_veil:</code></li>
<li>:person_with_pouting_face: <code>:person_with_pouting_face:</code></li>
<li>:person_frowning: <code>:person_frowning:</code></li>
<li>🙇 <code>:bow:</code></li>
<li>💑 <code>:couple_with_heart:</code></li>
<li>💆 <code>:massage:</code></li>
<li>💇 <code>:haircut:</code></li>
<li>💅 <code>:nail_care:</code></li>
<li>👦 <code>:boy:</code></li>
<li>👧 <code>:girl:</code></li>
<li>👩 <code>:woman:</code></li>
<li>👨 <code>:man:</code></li>
<li>👶 <code>:baby:</code></li>
<li>👵 <code>:older_woman:</code></li>
<li>👴 <code>:older_man:</code></li>
<li>:person_with_blond_hair: <code>:person_with_blond_hair:</code></li>
<li>👲 <code>:man_with_gua_pi_mao:</code></li>
<li>👳‍♂️ <code>:man_with_turban:</code></li>
<li>👷 <code>:construction_worker:</code></li>
<li>👮 <code>:cop:</code></li>
<li>👼 <code>:angel:</code></li>
<li>👸 <code>:princess:</code></li>
<li>😺 <code>:smiley_cat:</code></li>
<li>😸 <code>:smile_cat:</code></li>
<li>😻 <code>:heart_eyes_cat:</code></li>
<li>😽 <code>:kissing_cat:</code></li>
<li>😼 <code>:smirk_cat:</code></li>
<li>🙀 <code>:scream_cat:</code></li>
<li>😿 <code>:crying_cat_face:</code></li>
<li>😹 <code>:joy_cat:</code></li>
<li>😾 <code>:pouting_cat:</code></li>
<li>👹 <code>:japanese_ogre:</code></li>
<li>👺 <code>:japanese_goblin:</code></li>
<li>🙈 <code>:see_no_evil:</code></li>
<li>🙉 <code>:hear_no_evil:</code></li>
<li>🙊 <code>:speak_no_evil:</code></li>
<li>💂‍♂️ <code>:guardsman:</code></li>
<li>💀 <code>:skull:</code></li>
<li>🐾 <code>:feet:</code></li>
<li>👄 <code>:lips:</code></li>
<li>💋 <code>:kiss:</code></li>
<li>💧 <code>:droplet:</code></li>
<li>👂 <code>:ear:</code></li>
<li>👀 <code>:eyes:</code></li>
<li>👃 <code>:nose:</code></li>
<li>👅 <code>:tongue:</code></li>
<li>💌 <code>:love_letter:</code></li>
<li>👤 <code>:bust_in_silhouette:</code></li>
<li>👥 <code>:busts_in_silhouette:</code></li>
<li>💬 <code>:speech_balloon:</code></li>
<li>💭 <code>:thought_balloon:</code></li>
</ul>`,r:{minutes:1.22,words:367},y:"a",t:"人物 Emoji",i:"person"},[":md"]],["v-997aa906","/language/markdown/emoji/place.html",{d:1698921358e3,c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>🏠 <code>:house:</code></li>
<li>🏡 <code>:house_with_garden:</code></li>
<li>🏫 <code>:school:</code></li>
<li>🏢 <code>:office:</code></li>
<li>🏣 <code>:post_office:</code></li>
<li>🏥 <code>:hospital:</code></li>
<li>🏦 <code>:bank:</code></li>
<li>🏪 <code>:convenience_store:</code></li>
<li>🏩 <code>:love_hotel:</code></li>
<li>🏨 <code>:hotel:</code></li>
<li>💒 <code>:wedding:</code></li>
<li>⛪ <code>:church:</code></li>
<li>🏬 <code>:department_store:</code></li>
<li>🏤 <code>:european_post_office:</code></li>
<li>🌇 <code>:city_sunrise:</code></li>
<li>🌆 <code>:city_sunset:</code></li>
<li>🏯 <code>:japanese_castle:</code></li>
<li>🏰 <code>:european_castle:</code></li>
<li>⛺ <code>:tent:</code></li>
<li>🏭 <code>:factory:</code></li>
<li>🗼 <code>:tokyo_tower:</code></li>
<li>🗾 <code>:japan:</code></li>
<li>🗻 <code>:mount_fuji:</code></li>
<li>🌄 <code>:sunrise_over_mountains:</code></li>
<li>🌅 <code>:sunrise:</code></li>
<li>🌠 <code>:stars:</code></li>
<li>🗽 <code>:statue_of_liberty:</code></li>
<li>🌉 <code>:bridge_at_night:</code></li>
<li>🎠 <code>:carousel_horse:</code></li>
<li>🌈 <code>:rainbow:</code></li>
<li>🎡 <code>:ferris_wheel:</code></li>
<li>⛲ <code>:fountain:</code></li>
<li>🎢 <code>:roller_coaster:</code></li>
<li>🚢 <code>:ship:</code></li>
<li>🚤 <code>:speedboat:</code></li>
<li>⛵ <code>:boat:</code></li>
<li>⛵ <code>:sailboat:</code></li>
<li>🚣 <code>:rowboat:</code></li>
<li>⚓ <code>:anchor:</code></li>
<li>🚀 <code>:rocket:</code></li>
<li>✈️ <code>:airplane:</code></li>
<li>🚁 <code>:helicopter:</code></li>
<li>🚂 <code>:steam_locomotive:</code></li>
<li>🚊 <code>:tram:</code></li>
<li>🚞 <code>:mountain_railway:</code></li>
<li>🚲 <code>:bike:</code></li>
<li>🚡 <code>:aerial_tramway:</code></li>
<li>🚟 <code>:suspension_railway:</code></li>
<li>🚠 <code>:mountain_cableway:</code></li>
<li>🚜 <code>:tractor:</code></li>
<li>🚙 <code>:blue_car:</code></li>
<li>🚘 <code>:oncoming_automobile:</code></li>
<li>🚗 <code>:car:</code></li>
<li>🚗 <code>:red_car:</code></li>
<li>🚕 <code>:taxi:</code></li>
<li>🚖 <code>:oncoming_taxi:</code></li>
<li>🚛 <code>:articulated_lorry:</code></li>
<li>🚌 <code>:bus:</code></li>
<li>🚍 <code>:oncoming_bus:</code></li>
<li>🚨 <code>:rotating_light:</code></li>
<li>🚓 <code>:police_car:</code></li>
<li>🚔 <code>:oncoming_police_car:</code></li>
<li>🚒 <code>:fire_engine:</code></li>
<li>🚑 <code>:ambulance:</code></li>
<li>🚐 <code>:minibus:</code></li>
<li>🚚 <code>:truck:</code></li>
<li>🚋 <code>:train:</code></li>
<li>🚉 <code>:station:</code></li>
<li>🚆 <code>:train2:</code></li>
<li>🚅 <code>:bullettrain_front:</code></li>
<li>🚄 <code>:bullettrain_side:</code></li>
<li>🚈 <code>:light_rail:</code></li>
<li>🚝 <code>:monorail:</code></li>
<li>🚃 <code>:railway_car:</code></li>
<li>🚎 <code>:trolleybus:</code></li>
<li>🎫 <code>:ticket:</code></li>
<li>⛽ <code>:fuelpump:</code></li>
<li>🚦 <code>:vertical_traffic_light:</code></li>
<li>🚥 <code>:traffic_light:</code></li>
<li>⚠️ <code>:warning:</code></li>
<li>🚧 <code>:construction:</code></li>
<li>🔰 <code>:beginner:</code></li>
<li>🏧 <code>:atm:</code></li>
<li>🎰 <code>:slot_machine:</code></li>
<li>🚏 <code>:busstop:</code></li>
<li>💈 <code>:barber:</code></li>
<li>♨️ <code>:hotsprings:</code></li>
<li>🏁 <code>:checkered_flag:</code></li>
<li>🎌 <code>:crossed_flags:</code></li>
<li>🏮 <code>:izakaya_lantern:</code></li>
<li>🗿 <code>:moyai:</code></li>
<li>🎪 <code>:circus_tent:</code></li>
<li>🎭 <code>:performing_arts:</code></li>
<li>📍 <code>:round_pushpin:</code></li>
<li>🚩 <code>:triangular_flag_on_post:</code></li>
</ul>`,r:{minutes:.67,words:201},y:"a",t:"地点 Emoji",i:"city"},[":md"]],["v-43388754","/language/markdown/emoji/symbol.html",{d:1698921358e3,c:["Markdown"],g:["Markdown","Emoji"],e:`<ul>
<li>1️⃣ <code>:one:</code></li>
<li>2️⃣ <code>:two:</code></li>
<li>3️⃣ <code>:three:</code></li>
<li>4️⃣ <code>:four:</code></li>
<li>5️⃣ <code>:five:</code></li>
<li>6️⃣ <code>:six:</code></li>
<li>7️⃣ <code>:seven:</code></li>
<li>8️⃣ <code>:eight:</code></li>
<li>9️⃣ <code>:nine:</code></li>
<li>🔟 <code>:keycap_ten:</code></li>
<li>🔢 <code>:1234:</code></li>
<li>0️⃣ <code>:zero:</code></li>
<li>#️⃣ <code>:hash:</code></li>
<li>🔣 <code>:symbols:</code></li>
<li>◀️ <code>:arrow_backward:</code></li>
<li>⬇️ <code>:arrow_down:</code></li>
<li>▶️ <code>:arrow_forward:</code></li>
<li>⬅️ <code>:arrow_left:</code></li>
<li>🔠 <code>:capital_abcd:</code></li>
<li>🔡 <code>:abcd:</code></li>
<li>🔤 <code>:abc:</code></li>
<li>↙️ <code>:arrow_lower_left:</code></li>
<li>↘️ <code>:arrow_lower_right:</code></li>
<li>➡️ <code>:arrow_right:</code></li>
<li>⬆️ <code>:arrow_up:</code></li>
<li>↖️ <code>:arrow_upper_left:</code></li>
<li>↗️ <code>:arrow_upper_right:</code></li>
<li>⏬ <code>:arrow_double_down:</code></li>
<li>⏫ <code>:arrow_double_up:</code></li>
<li>🔽 <code>:arrow_down_small:</code></li>
<li>⤵️ <code>:arrow_heading_down:</code></li>
<li>⤴️ <code>:arrow_heading_up:</code></li>
<li>↩️ <code>:leftwards_arrow_with_hook:</code></li>
<li>↪️ <code>:arrow_right_hook:</code></li>
<li>↔️ <code>:left_right_arrow:</code></li>
<li>↕️ <code>:arrow_up_down:</code></li>
<li>🔼 <code>:arrow_up_small:</code></li>
<li>🔃 <code>:arrows_clockwise:</code></li>
<li>🔄 <code>:arrows_counterclockwise:</code></li>
<li>⏪ <code>:rewind:</code></li>
<li>⏩ <code>:fast_forward:</code></li>
<li>ℹ️ <code>:information_source:</code></li>
<li>🆗 <code>:ok:</code></li>
<li>🔀 <code>:twisted_rightwards_arrows:</code></li>
<li>🔁 <code>:repeat:</code></li>
<li>🔂 <code>:repeat_one:</code></li>
<li>🆕 <code>:new:</code></li>
<li>🔝 <code>:top:</code></li>
<li>🆙 <code>:up:</code></li>
<li>🆒 <code>:cool:</code></li>
<li>🆓 <code>:free:</code></li>
<li>🆖 <code>:ng:</code></li>
<li>🎦 <code>:cinema:</code></li>
<li>🈁 <code>:koko:</code></li>
<li>📶 <code>:signal_strength:</code></li>
<li>🈂️ <code>:sa:</code></li>
<li>🚻 <code>:restroom:</code></li>
<li>🚹 <code>:mens:</code></li>
<li>🚺 <code>:womens:</code></li>
<li>🚼 <code>:baby_symbol:</code></li>
<li>🚭 <code>:no_smoking:</code></li>
<li>🅿️ <code>:parking:</code></li>
<li>♿ <code>:wheelchair:</code></li>
<li>🚇 <code>:metro:</code></li>
<li>🛄 <code>:baggage_claim:</code></li>
<li>🉑 <code>:accept:</code></li>
<li>🚾 <code>:wc:</code></li>
<li>🚰 <code>:potable_water:</code></li>
<li>🚮 <code>:put_litter_in_its_place:</code></li>
<li>㊙️ <code>:secret:</code></li>
<li>㊗️ <code>:congratulations:</code></li>
<li>Ⓜ️ <code>:m:</code></li>
<li>🛂 <code>:passport_control:</code></li>
<li>🛅 <code>:left_luggage:</code></li>
<li>🛃 <code>:customs:</code></li>
<li>🉐 <code>:ideograph_advantage:</code></li>
<li>🆑 <code>:cl:</code></li>
<li>🆘 <code>:sos:</code></li>
<li>🆔 <code>:id:</code></li>
<li>🚫 <code>:no_entry_sign:</code></li>
<li>🔞 <code>:underage:</code></li>
<li>📵 <code>:no_mobile_phones:</code></li>
<li>🚯 <code>:do_not_litter:</code></li>
<li>🚱 <code>:non-potable_water:</code></li>
<li>🚳 <code>:no_bicycles:</code></li>
<li>🚷 <code>:no_pedestrians:</code></li>
<li>🚸 <code>:children_crossing:</code></li>
<li>⛔ <code>:no_entry:</code></li>
<li>✳️ <code>:eight_spoked_asterisk:</code></li>
<li>❇️ <code>:sparkle:</code></li>
<li>✴️ <code>:eight_pointed_black_star:</code></li>
<li>💟 <code>:heart_decoration:</code></li>
<li>🆚 <code>:vs:</code></li>
<li>📳 <code>:vibration_mode:</code></li>
<li>📴 <code>:mobile_phone_off:</code></li>
<li>💹 <code>:chart:</code></li>
<li>💱 <code>:currency_exchange:</code></li>
<li>♈ <code>:aries:</code></li>
<li>♉ <code>:taurus:</code></li>
<li>♊ <code>:gemini:</code></li>
<li>♋ <code>:cancer:</code></li>
<li>♌ <code>:leo:</code></li>
<li>♍ <code>:virgo:</code></li>
<li>♎ <code>:libra:</code></li>
<li>♏ <code>:scorpius:</code></li>
<li>♐ <code>:sagittarius:</code></li>
<li>♑ <code>:capricorn:</code></li>
<li>♒ <code>:aquarius:</code></li>
<li>♓ <code>:pisces:</code></li>
<li>⛎ <code>:ophiuchus:</code></li>
<li>🔯 <code>:six_pointed_star:</code></li>
<li>❎ <code>:negative_squared_cross_mark:</code></li>
<li>🅰️ <code>:a:</code></li>
<li>🅱️ <code>:b:</code></li>
<li>🆎 <code>:ab:</code></li>
<li>🅾️ <code>:o2:</code></li>
<li>💠 <code>:diamond_shape_with_a_dot_inside:</code></li>
<li>♻️ <code>:recycle:</code></li>
<li>🔚 <code>:end:</code></li>
<li>🔙 <code>:back:</code></li>
<li>🔛 <code>:on:</code></li>
<li>🔜 <code>:soon:</code></li>
<li>🕐 <code>:clock1:</code></li>
<li>🕜 <code>:clock130:</code></li>
<li>🕙 <code>:clock10:</code></li>
<li>🕥 <code>:clock1030:</code></li>
<li>🕚 <code>:clock11:</code></li>
<li>🕦 <code>:clock1130:</code></li>
<li>🕛 <code>:clock12:</code></li>
<li>🕧 <code>:clock1230:</code></li>
<li>🕑 <code>:clock2:</code></li>
<li>🕝 <code>:clock230:</code></li>
<li>🕒 <code>:clock3:</code></li>
<li>🕞 <code>:clock330:</code></li>
<li>🕓 <code>:clock4:</code></li>
<li>🕟 <code>:clock430:</code></li>
<li>🕔 <code>:clock5:</code></li>
<li>🕠 <code>:clock530:</code></li>
<li>🕕 <code>:clock6:</code></li>
<li>🕡 <code>:clock630:</code></li>
<li>🕖 <code>:clock7:</code></li>
<li>🕢 <code>:clock730:</code></li>
<li>🕗 <code>:clock8:</code></li>
<li>🕣 <code>:clock830:</code></li>
<li>🕘 <code>:clock9:</code></li>
<li>🕤 <code>:clock930:</code></li>
<li>💲 <code>:heavy_dollar_sign:</code></li>
<li>©️ <code>:copyright:</code></li>
<li>®️ <code>:registered:</code></li>
<li>™️ <code>:tm:</code></li>
<li>❌ <code>:x:</code></li>
<li>❗ <code>:heavy_exclamation_mark:</code></li>
<li>‼️ <code>:bangbang:</code></li>
<li>⁉️ <code>:interrobang:</code></li>
<li>⭕ <code>:o:</code></li>
<li>✖️ <code>:heavy_multiplication_x:</code></li>
<li>➕ <code>:heavy_plus_sign:</code></li>
<li>➖ <code>:heavy_minus_sign:</code></li>
<li>➗ <code>:heavy_division_sign:</code></li>
<li>💮 <code>:white_flower:</code></li>
<li>💯 <code>:100:</code></li>
<li>✔️ <code>:heavy_check_mark:</code></li>
<li>☑️ <code>:ballot_box_with_check:</code></li>
<li>🔘 <code>:radio_button:</code></li>
<li>🔗 <code>:link:</code></li>
<li>➰ <code>:curly_loop:</code></li>
<li>〰️ <code>:wavy_dash:</code></li>
<li>〽️ <code>:part_alternation_mark:</code></li>
<li>🔱 <code>:trident:</code></li>
<li>▪️ <code>:black_small_square:</code></li>
<li>▫️ <code>:white_small_square:</code></li>
<li>◾ <code>:black_medium_small_square:</code></li>
<li>◽ <code>:white_medium_small_square:</code></li>
<li>◼️ <code>:black_medium_square:</code></li>
<li>◻️ <code>:white_medium_square:</code></li>
<li>⬛ <code>:black_large_square:</code></li>
<li>⬜ <code>:white_large_square:</code></li>
<li>✅ <code>:white_check_mark:</code></li>
<li>🔲 <code>:black_square_button:</code></li>
<li>🔳 <code>:white_square_button:</code></li>
<li>⚫ <code>:black_circle:</code></li>
<li>⚪ <code>:white_circle:</code></li>
<li>🔴 <code>:red_circle:</code></li>
<li>🔵 <code>:large_blue_circle:</code></li>
<li>🔷 <code>:large_blue_diamond:</code></li>
<li>🔶 <code>:large_orange_diamond:</code></li>
<li>🔹 <code>:small_blue_diamond:</code></li>
<li>🔸 <code>:small_orange_diamond:</code></li>
<li>🔺 <code>:small_red_triangle:</code></li>
<li>🔻 <code>:small_red_triangle_down:</code></li>
</ul>`,r:{minutes:1.31,words:394},y:"a",t:"符号 Emoji",i:"circle-right"},[":md"]],["v-9f6d9e56","/unreal/ui_%E7%95%8C%E9%9D%A2_/commonui_ui%E6%A1%86%E6%9E%B6_/1-CommonUI.html",{d:1701200797e3,c:["unreal"],e:`<h3> 插件概述</h3>
<p>common UI 的设计目的是解决重叠UI的交互问题，并在不同平台上提供统一的用户界面，以确保游戏在各种环境下都能够提供良好的用户体验。</p>
<h3> 插件特色</h3>
<ol>
<li>重叠UI的交互限制：通过使用common UI，可以确保在上层菜单存在时，阻止玩家与背景UI进行互动。这是通过在上层菜单上设置遮罩或拦截事件的方式实现的，从而保证了游戏界面的交互性和用户体验。</li>
<li>多平台适用性：common UI 被设计为适用于不同平台和控制器，包括PC和主机。它能够响应不同的输入方式，例如在PC上通过光标点击，而在主机上通过控制方向和按钮点击。通过将这些输入事件抽象化，common UI 可以使游戏在不同平台上都能够提供一致的用户交互体验。</li>
</ol>`,r:{minutes:.97,words:291},y:"a",t:"CUI1.模块介绍",O:1},["/unreal/ui_界面_/commonui_ui框架_/1-CommonUI.html","/unreal/ui[界面]/commonui[ui框架]/1-CommonUI.html","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/commonui%5Bui%E6%A1%86%E6%9E%B6%5D/1-CommonUI.html","/unreal/ui[界面]/commonui[ui框架]/1-CommonUI.md","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/commonui%5Bui%E6%A1%86%E6%9E%B6%5D/1-CommonUI.md"]],["v-7ed2134c","/unreal/ui_%E7%95%8C%E9%9D%A2_/slate_ui%E6%A1%86%E6%9E%B6_/1-editortoolPlugin.html",{d:1701724009e3,c:["unreal"],e:`<h2> 闲聊</h2>




<figure><figcaption></figcaption></figure>




<h2> 新建插件开始</h2>

<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>

<blockquote>
<p>等待IED编译后点击窗口-就能看到你创建的插件了</p>
</blockquote>
<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>`,r:{minutes:10.34,words:3101},y:"a",t:"Slate1.编辑器工具插件TODO",O:1},["/unreal/ui_界面_/slate_ui框架_/1-editortoolPlugin.html","/unreal/ui[界面]/slate[ui框架]/1-editortoolPlugin.html","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/slate%5Bui%E6%A1%86%E6%9E%B6%5D/1-editortoolPlugin.html","/unreal/ui[界面]/slate[ui框架]/1-editortoolPlugin.md","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/slate%5Bui%E6%A1%86%E6%9E%B6%5D/1-editortoolPlugin.md"]],["v-31ce0ca7","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/1-editortoolBP.html",{d:1701724009e3,c:["unreal"],e:`





<figure><figcaption></figcaption></figure>


<figure><figcaption></figcaption></figure>
<blockquote>
<p><a href="https://docs.unrealengine.com/5.1/zh-CN/scripted-actions-in-unreal-engine/" target="_blank" rel="noopener noreferrer">摘自官方文档</a></p>
</blockquote>
<ol>
<li>决定是在 内容浏览器 中选择的资产上，还是在 关卡视口 或 世界大纲视图 中选择的Actor上执行脚本化操作。</li>
</ol>`,r:{minutes:3.18,words:954},y:"a",t:"Umg1.编辑器工具蓝图|控件",O:1},["/unreal/ui_界面_/umg_ui框架_/1-editortoolBP.html","/unreal/ui[界面]/umg[ui框架]/1-editortoolBP.html","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/1-editortoolBP.html","/unreal/ui[界面]/umg[ui框架]/1-editortoolBP.md","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/1-editortoolBP.md"]],["v-199bd790","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/2-editortoolBP2.html",{d:1701724009e3,c:["unreal"],e:`<figure><figcaption>本章概要</figcaption></figure>


<h3> 编辑器工具控件</h3>

<figure><figcaption>咱做的</figcaption></figure>
<figure><figcaption>官方的</figcaption></figure>

<h2> DetailsView</h2>

<figure><figcaption></figcaption></figure>



<figure><figcaption></figcaption></figure>



<figure><figcaption></figcaption></figure>`,r:{minutes:5.2,words:1561},y:"a",t:"Umg2.编辑器工具控件样式DetailsView",O:2},["/unreal/ui_界面_/umg_ui框架_/2-editortoolBP2.html","/unreal/ui[界面]/umg[ui框架]/2-editortoolBP2.html","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/2-editortoolBP2.html","/unreal/ui[界面]/umg[ui框架]/2-editortoolBP2.md","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/2-editortoolBP2.md"]],["v-0b07c9e6","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/NameSlot.html",{d:1701724009e3,c:["unreal"],e:`<h2> 导读</h2>

<h2> 实现目标</h2>
`,r:{minutes:.78,words:235},y:"a",t:"Umg3.NameSlot",O:3},["/unreal/ui_界面_/umg_ui框架_/NameSlot.html","/unreal/ui[界面]/umg[ui框架]/NameSlot.html","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/NameSlot.html","/unreal/ui[界面]/umg[ui框架]/NameSlot.md","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/NameSlot.md"]],["v-f0640946","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/SafeZone.html",{d:17059468e5,c:["unreal"],e:`<h2> 导读</h2>

<figure><figcaption></figcaption></figure>
<h2> 参考链接</h2>
<p><a href="https://docs.unrealengine.com/4.26/zh-CN/InteractiveExperiences/UMG/UserGuide/UMGSafeZones/" target="_blank" rel="noopener noreferrer">官网</a></p>
`,r:{minutes:.28,words:83},y:"a",t:"Umg4.SaveZone",O:4},["/unreal/ui_界面_/umg_ui框架_/SafeZone.html","/unreal/ui[界面]/umg[ui框架]/SafeZone.html","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/SafeZone.html","/unreal/ui[界面]/umg[ui框架]/SafeZone.md","/unreal/ui%5B%E7%95%8C%E9%9D%A2%5D/umg%5Bui%E6%A1%86%E6%9E%B6%5D/SafeZone.md"]],["v-1f9cc682","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/0insidePtrgy.html",{d:170073813e4,c:["c++"],e:`<h2> inside指针</h2>
<h3> 纲要</h3>
<ol>
<li>
<p><strong>指针基础：</strong></p>
<ul>
<li>指针和数组</li>
<li>指针和结构体</li>
<li>指针和函数</li>
<li>指针和枚举</li>
<li>指针和类
<ul>
<li>this指针</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>智能指针：</strong></p>
<ul>
<li><code>std::shared_ptr</code>、<code>std::unique_ptr</code> 和 <code>std::weak_ptr</code> 的概念和使用。</li>
<li>智能指针的底层实现和引用计数机制。</li>
<li>智能指针的优势和使用场景。</li>
</ul>
</li>
<li>
<p><strong>内存管理和RAII：</strong></p>
<ul>
<li>资源获取即初始化（Resource Acquisition Is Initialization，RAII）的概念。</li>
<li>使用智能指针进行资源管理。</li>
<li>自定义智能指针。</li>
</ul>
</li>
<li>
<p><strong>指针和多线程：</strong></p>
<ul>
<li>多线程环境下的指针操作。</li>
<li>指针和线程安全的数据结构。</li>
</ul>
</li>
<li>
<p><strong>指针和性能：</strong></p>
<ul>
<li>指针操作对性能的影响。</li>
<li>避免指针操作的常见技巧。</li>
</ul>
</li>
<li>
<p><strong>深入理解内存模型：</strong></p>
<ul>
<li>栈内存和堆内存的概念。</li>
<li>内存布局和对齐。</li>
<li>内存模型和内存屏障。</li>
</ul>
</li>
</ol>`,r:{minutes:.76,words:229},y:"a",t:"c++inside指针纲要",O:1},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/0insidePtrgy.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/0insidePtrgy.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/0insidePtrgy.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/0insidePtrgy.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/0insidePtrgy.md"]],["v-51adada9","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/1-insidePtr.html",{d:170073813e4,c:["c++"],e:`<h2> inside指针</h2>


<h2> 概念</h2>
<p>语法：type* var_name;</p>
<figure><figcaption></figcaption></figure>
<ol>
<li><strong>指针是个存储地址的变量：</strong></li>
</ol>
<p>指针是一种特殊类型的变量，它存储的是内存地址，这个地址指向存储器中的某个数据。</p>
<ol start="2">
<li>
<p><strong>指针有两大能力：</strong></p>
<ul>
<li><strong>指针有修改指向（某个变量）的值的能力：</strong>
通过指针，你可以访问和修改所指向内存地址上的数据。例如，如果有一个指向整数的指针，你可以通过解引用操作符 <code>*</code> 来获取或修改该整数的值。</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
<span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>  <span class="token comment">// 修改了ptr指向的地址上的值，即修改了num的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>指针是个变量有修改本身指向地址的能力：</strong>
你可以改变指针本身存储的地址，使其指向不同的内存位置。这是通过给指针赋予一个新的地址来实现的。</li>
</ul>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num1<span class="token punctuation">;</span>  <span class="token comment">// ptr指向num1的地址</span>
ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num2<span class="token punctuation">;</span>       <span class="token comment">// 修改了ptr本身存储的地址，使其指向num2的地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:2.58,words:775},y:"a",t:"c++指针是什么？",O:2},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/1-insidePtr.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/1-insidePtr.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/1-insidePtr.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/1-insidePtr.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/1-insidePtr.md"]],["v-9fddc778","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/2-constModifierPtr.html",{d:170073813e4,c:["c++"],e:`


<figure><figcaption></figcaption></figure>

<figure><figcaption></figcaption></figure>
<h2> <code>const</code> 修饰指针</h2>
<h4> 底层 const（Low-level const）:常量指针</h4>
<ol>
<li><code>const int* p</code>: 这表示 <code>p</code> 是一个指向常量整数的指针。这意味着通过指针 <code>p</code> 可以访问整数，但不能通过 <code>p</code> 修改所指向的整数的值。</li>
</ol>`,r:{minutes:2.23,words:669},y:"a",t:"c++常量指针|指针常量",O:3},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/2-constModifierPtr.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/2-constModifierPtr.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/2-constModifierPtr.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/2-constModifierPtr.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/2-constModifierPtr.md"]],["v-87bc0582","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/3-Ptr-Array.html",{d:170073813e4,c:["c++"],e:`
<h2> 概念</h2>
<h2> 指针数组</h2>



<figure><figcaption></figcaption></figure>

<blockquote>
<p>UE中一堆<code>对象指针</code>组成的<code>数组</code>就是<code>指针数组</code>例如：TArray&lt;ACameraActor*&gt;Camera。（多直观易懂）</p>
</blockquote>
<figure><figcaption></figcaption></figure>
<blockquote>
<p><strong>语法：<code>typename* ArrayName[arraySize]</code>;</strong></p>
</blockquote>`,r:{minutes:5.03,words:1509},y:"a",t:"c++数组指针|指针数组",O:4},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/3-Ptr-Array.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/3-Ptr-Array.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/3-Ptr-Array.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/3-Ptr-Array.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/3-Ptr-Array.md"]],["v-7f79f4e6","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/4-Ptr-Struct.html",{d:1701100984e3,c:["c++"],e:`

<blockquote>
<p>语法：struct 结构体名称 { 成员列表 };</p>
</blockquote>
<figure><figcaption></figcaption></figure>
<h2> 结构体指针</h2>

<blockquote>
<p>语法： struct 结构体名称 * 指针变量名 = &amp; 结构体对象;</p>
</blockquote>
<figure><figcaption></figcaption></figure>
<h3> 结构体指针定义方法</h3>
<hr>
<h4> <strong>1. struct 结构体名称 * 指针变量名 = &amp; 结构体对象;</strong></h4>`,r:{minutes:3.58,words:1073},y:"a",t:"c++结构体指针|类指针",O:5},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/4-Ptr-Struct.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/4-Ptr-Struct.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/4-Ptr-Struct.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/4-Ptr-Struct.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/4-Ptr-Struct.md"]],["v-1a7bf9fb","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/5-Ptr-Enum.html",{d:1701100984e3,c:["c++"],e:`


<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">enum</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>
    RED<span class="token punctuation">,</span>
    GREEN<span class="token punctuation">,</span>
    BLUE
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Color myColor <span class="token operator">=</span> GREEN<span class="token punctuation">;</span>

    <span class="token comment">// 使用指向枚举变量的指针</span>
    Color<span class="token operator">*</span> pColor <span class="token operator">=</span> <span class="token operator">&amp;</span>myColor<span class="token punctuation">;</span>

    <span class="token comment">// 输出枚举值</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Current color: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>pColor <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.04,words:313},y:"a",t:"c++枚举指针?",O:5},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/5-Ptr-Enum.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/5-Ptr-Enum.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/5-Ptr-Enum.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/5-Ptr-Enum.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/5-Ptr-Enum.md"]],["v-6526b1c5","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/6-Ptr-Function.html",{d:1701724009e3,c:["c++"],e:`

<figure><figcaption>C Primer Plus（第6版）中文版</figcaption></figure>
<h3> 函数指针的语法</h3>
<ol>
<li>
<p><strong>声明函数指针：</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">returnType</span> <span class="token punctuation">(</span><span class="token operator">*</span>pointerName<span class="token punctuation">)</span><span class="token punctuation">(</span>parameterType1<span class="token punctuation">,</span> parameterType2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里：</p>
<ul>
<li><code>returnType</code> 是函数返回类型。</li>
<li><code>pointerName</code> 是函数指针的名称。</li>
<li><code>parameterType1, parameterType2, ...</code> 是函数参数类型。</li>
</ul>
</li>
<li>
<p><strong>初始化函数指针：</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>pointerName <span class="token operator">=</span> <span class="token operator">&amp;</span>functionName<span class="token punctuation">;</span>
<span class="token comment">// 或者简写为</span>
pointerName <span class="token operator">=</span> functionName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>functionName</code> 是一个已经声明的函数，其返回类型和参数类型要与函数指针声明中的类型匹配。</p>
</li>
<li>
<p><strong>使用函数指针调用函数：</strong></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>returnType result <span class="token operator">=</span> <span class="token function">pointerName</span><span class="token punctuation">(</span>argument1<span class="token punctuation">,</span> argument2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//或者</span>
returnType result <span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>pointerName<span class="token punctuation">)</span><span class="token punctuation">(</span>argument1<span class="token punctuation">,</span> argument2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>argument1, argument2, ...</code> 是传递给函数的实际参数。</p>
</li>
<li>
<p><strong>函数地址：</strong>
函数指针地址很简单，就是函数名<code>**去掉()**</code></p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//获取函数地址</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of add: "</span> <span class="token operator">&lt;&lt;</span> add <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
<span class="token comment">//Address of add: 00007FF65AC81474</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>函数指针地址：</strong></p>
</li>
</ol>`,r:{minutes:1.38,words:413},y:"a",t:"c++函数指针",O:6},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/6-Ptr-Function.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/6-Ptr-Function.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/6-Ptr-Function.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/6-Ptr-Function.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/6-Ptr-Function.md"]],["v-26ee6f20","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/7-Ptr-this.html",{d:1701724009e3,c:["c++"],e:`



<ol>
<li><strong>区分同名变量：</strong> 如果成员函数中存在与成员变量同名的局部变量或参数，那么在没有 <code>this</code> 指针的情况下，无法直接访问成员变量。<code>this</code> 指针允许明确指定使用对象的成员。</li>
</ol>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 使用this指针</span>
<span class="token keyword">class</span> <span class="token class-name">MyClassWithThis</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用this指针区分成员变量和局部变量</span>
        <span class="token keyword">this</span><span class="token operator">-&gt;</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.83,words:1750},y:"a",t:"c++this指针",O:7},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/7-Ptr-this.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/7-Ptr-this.html","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/7-Ptr-this.html","/language/cpp/BaseGuide[基础概念]/ptr[指针]/7-Ptr-this.md","/language/cpp/BaseGuide%5B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%5D/ptr%5B%E6%8C%87%E9%92%88%5D/7-Ptr-this.md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-60097c7a","/algorithm/sort_%E6%8E%92%E5%BA%8F_/",{y:"p",t:"Sort 排序"},["/algorithm/sort_排序_/"]],["v-58f42cfe","/language/",{y:"p",t:"Language"},[]],["v-d440f426","/tools/",{y:"p",t:"Tools"},[]],["v-55047a00","/unreal/core_%E6%A0%B8%E5%BF%83_/",{y:"p",t:"Core 核心"},["/unreal/core_核心_/"]],["v-0032fec0","/unreal/error_%E9%94%99%E8%AF%AF_/",{y:"p",t:"Error 错误"},["/unreal/error_错误_/"]],["v-78839b60","/unreal/exp_%E7%BB%8F%E9%AA%8C_/",{y:"p",t:"Exp 经验"},["/unreal/exp_经验_/"]],["v-152344c8","/unreal/function_%E5%87%BD%E6%95%B0_/",{y:"p",t:"Function 函数"},["/unreal/function_函数_/"]],["v-66b522c4","/unreal/lyra_%E5%A4%A9%E7%A7%A4%E5%BA%A7_/",{y:"p",t:"Lyra 天秤座"},["/unreal/lyra_天秤座_/"]],["v-fad1f858","/unreal/network_%E7%BD%91%E7%BB%9C_/",{y:"p",t:"Network 网络"},["/unreal/network_网络_/"]],["v-e8ed0444","/unreal/shader_%E7%9D%80%E8%89%B2%E5%99%A8_/",{y:"p",t:"Shader 着色器"},["/unreal/shader_着色器_/"]],["v-42f011af","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/",{y:"p",t:"Base Guide 基础概念"},["/language/cpp/BaseGuide_基础概念_/"]],["v-23beedfa","/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/",{y:"p",t:"Designer 设计模式"},["/language/cpp/designer_设计模式_/"]],["v-ae020dc8","/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/",{y:"p",t:"Keywords 关键字"},["/language/cpp/keywords_关键字_/"]],["v-4b176715","/language/cpp/new_%E6%96%B0%E7%89%B9%E6%80%A7_/",{y:"p",t:"New 新特性"},["/language/cpp/new_新特性_/"]],["v-2a0eb5bc","/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/",{y:"p",t:"Stl 标准模板"},["/language/cpp/stl_标准模板_/"]],["v-02dc146e","/unreal/ui_%E7%95%8C%E9%9D%A2_/commonui_ui%E6%A1%86%E6%9E%B6_/",{y:"p",t:"Commonui Ui框架"},["/unreal/ui_界面_/commonui_ui框架_/"]],["v-93384616","/unreal/ui_%E7%95%8C%E9%9D%A2_/",{y:"p",t:"Ui 界面"},["/unreal/ui_界面_/"]],["v-a272608e","/unreal/ui_%E7%95%8C%E9%9D%A2_/slate_ui%E6%A1%86%E6%9E%B6_/",{y:"p",t:"Slate Ui框架"},["/unreal/ui_界面_/slate_ui框架_/"]],["v-7b816dfa","/unreal/ui_%E7%95%8C%E9%9D%A2_/umg_ui%E6%A1%86%E6%9E%B6_/",{y:"p",t:"Umg Ui框架"},["/unreal/ui_界面_/umg_ui框架_/"]],["v-58bf29c6","/language/cpp/BaseGuide_%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5_/ptr_%E6%8C%87%E9%92%88_/",{y:"p",t:"Ptr 指针"},["/language/cpp/BaseGuide_基础概念_/ptr_指针_/"]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},[]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},[]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},[]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},[]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},[]],["v-dc8c5890","/category/algorithm/",{y:"p",t:"algorithm 分类",I:0},[]],["v-3927256c","/tag/unreal/",{y:"p",t:"标签: unreal",I:0},[]],["v-6e680040","/category/unreal/",{y:"p",t:"unreal 分类",I:0},[]],["v-a0ba2788","/tag/%E4%BB%8B%E7%BB%8D/",{y:"p",t:"标签: 介绍",I:0},["/tag/介绍/"]],["v-65eddd24","/category/c__/",{y:"p",t:"c++ 分类",I:0},[]],["v-b314c74c","/tag/c__/",{y:"p",t:"标签: c++",I:0},[]],["v-65f2474f","/category/lua/",{y:"p",t:"lua 分类",I:0},[]],["v-b30bf2f6","/tag/lua/",{y:"p",t:"标签: lua",I:0},[]],["v-d37ff7f0","/category/markdown/",{y:"p",t:"Markdown 分类",I:0},[]],["v-484552dc","/tag/markdown/",{y:"p",t:"标签: Markdown",I:0},[]],["v-65efd6b5","/category/git/",{y:"p",t:"Git 分类",I:0},[]],["v-6e3697e9","/tag/%E7%A4%BA%E4%BE%8B/",{y:"p",t:"标签: 示例",I:0},["/tag/示例/"]],["v-fd3344d8","/category/github/",{y:"p",t:"Github 分类",I:0},[]],["v-2d6f94ee","/tag/husky/",{y:"p",t:"标签: husky",I:0},[]],["v-87d841e6","/category/rider/",{y:"p",t:"rider 分类",I:0},[]],["v-bedc0d68","/tag/%E8%B8%A9%E5%9D%91%E8%AE%B0%E5%BD%95/",{y:"p",t:"标签: 踩坑记录",I:0},["/tag/踩坑记录/"]],["v-9591de7e","/category/visualstudio/",{y:"p",t:"visualstudio 分类",I:0},[]],["v-b310d42a","/tag/git/",{y:"p",t:"标签: Git",I:0},[]],["v-132a6ac4","/tag/github/",{y:"p",t:"标签: Github",I:0},[]],["v-a9f0a7a6","/category/vscode/",{y:"p",t:"vscode 分类",I:0},[]],["v-0caeae7a","/tag/rider/",{y:"p",t:"标签: rider",I:0},[]],["v-43d7543a","/category/vuepress/",{y:"p",t:"vuepress 分类",I:0},[]],["v-6f740e4b","/tag/visualstudio/",{y:"p",t:"标签: visualStudio",I:0},[]],["v-65f60bd2","/category/u__/",{y:"p",t:"u++ 分类",I:0},[]],["v-200c1937","/tag/vscode/",{y:"p",t:"标签: VSCode",I:0},[]],["v-ed16b278","/tag/vuepress/",{y:"p",t:"标签: VuePress",I:0},[]],["v-5963f54c","/tag/specifiers/",{y:"p",t:"标签: Specifiers",I:0},[]],["v-3891cf12","/tag/emoji/",{y:"p",t:"标签: Emoji",I:0},[]]];var kc=F({name:"Vuepress",setup(){const e=M1();return()=>i(e.value)}}),Bh=()=>Ah.reduce((e,[n,t,a,s])=>(e.push({name:n,path:t,component:kc,meta:a},{path:t.endsWith("/")?t+"index.html":t.substring(0,t.length-5),redirect:t},...s.map(o=>({path:o===":md"?t.substring(0,t.length-5)+".md":o,redirect:t}))),e),[{name:"404",path:"/:catchAll(.*)",component:kc}]),Dh=iv,Th=()=>{const e=Hv({history:Dh(ll("/RenderDoc/")),routes:Bh(),scrollBehavior:(n,t,a)=>a||(n.hash?{el:n.hash}:{top:0})});return e.beforeResolve(async(n,t)=>{var a;(n.path!==t.path||t===xn)&&([n.meta._data]=await Promise.all([Ln.resolvePageData(n.name),(a=Ar[n.name])==null?void 0:a.__asyncLoader()]))}),e},Ph=e=>{e.component("ClientOnly",Ds),e.component("Content",Or)},Ih=(e,n,t)=>{const a=Ki(()=>n.currentRoute.value.path),s=Ki(()=>Ln.resolveRouteLocale(Bt.value.locales,a.value)),o=hl(a,()=>n.currentRoute.value.meta._data),l=w(()=>Ln.resolveLayouts(t)),c=w(()=>Ln.resolveSiteLocaleData(Bt.value,s.value)),r=w(()=>Ln.resolvePageFrontmatter(o.value)),p=w(()=>Ln.resolvePageHeadTitle(o.value,c.value)),u=w(()=>Ln.resolvePageHead(p.value,r.value,c.value)),d=w(()=>Ln.resolvePageLang(o.value,c.value)),m=w(()=>Ln.resolvePageLayout(o.value,l.value));return e.provide(x1,l),e.provide(Br,o),e.provide(Dr,r),e.provide(V1,p),e.provide(Tr,u),e.provide(Pr,d),e.provide(Ir,m),e.provide(cl,s),e.provide(Cr,c),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>r.value},$head:{get:()=>u.value},$headTitle:{get:()=>p.value},$lang:{get:()=>d.value},$page:{get:()=>o.value},$routeLocale:{get:()=>s.value},$site:{get:()=>Bt.value},$siteLocale:{get:()=>c.value},$withBase:{get:()=>we}}),{layouts:l,pageData:o,pageFrontmatter:r,pageHead:u,pageHeadTitle:p,pageLang:d,pageLayout:m,routeLocale:s,siteData:Bt,siteLocaleData:c}},Sh=()=>{const e=F1(),n=il(),t=q([]),a=()=>{e.value.forEach(o=>{const l=Ch(o);l&&t.value.push(l)})},s=()=>{document.documentElement.lang=n.value,t.value.forEach(o=>{o.parentNode===document.head&&document.head.removeChild(o)}),t.value.splice(0,t.value.length),e.value.forEach(o=>{const l=Oh(o);l!==null&&(document.head.appendChild(l),t.value.push(l))})};an($1,s),ue(()=>{a(),s(),re(()=>e.value,s)})},Ch=([e,n,t=""])=>{const a=Object.entries(n).map(([c,r])=>ge(r)?`[${c}=${JSON.stringify(r)}]`:r===!0?`[${c}]`:"").join(""),s=`head > ${e}${a}`;return Array.from(document.querySelectorAll(s)).find(c=>c.innerText===t)||null},Oh=([e,n,t])=>{if(!ge(e))return null;const a=document.createElement(e);return Sa(n)&&Object.entries(n).forEach(([s,o])=>{ge(o)?a.setAttribute(s,o):o===!0&&a.setAttribute(s,"")}),ge(t)&&a.appendChild(document.createTextNode(t)),a},Lh=w1,xh=async()=>{var t;const e=Lh({name:"VuepressApp",setup(){var a;Sh();for(const s of as)(a=s.setup)==null||a.call(s);return()=>[i(zr),...as.flatMap(({rootComponents:s=[]})=>s.map(o=>i(o)))]}}),n=Th();Ph(e),Ih(e,n,as);for(const a of as)await((t=a.enhance)==null?void 0:t.call(a,{app:e,router:n,siteData:Bt}));return e.use(n),{app:e,router:n}};xh().then(({app:e,router:n})=>{n.isReady().then(()=>{e.mount("#app")})});export{$3 as A,Ne as B,ue as C,ft as D,ge as E,Gh as F,Sa as G,Ml as H,Cm as I,v as J,W3 as O,j3 as R,Fl as X,zu as _,ut as a,dr as b,rr as c,xh as createVueApp,Ie as d,Rh as e,Fh as f,F as g,He as h,wn as i,Gl as j,q as k,w as l,Fe as m,re as n,As as o,i as p,N3 as q,tn as r,z3 as s,Yt as t,Mh as u,F3 as v,Wd as w,$u as x,U3 as y,G3 as z};
