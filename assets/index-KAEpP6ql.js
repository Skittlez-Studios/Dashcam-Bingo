import{createClient as pe}from"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const M=globalThis,O=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,N=Symbol(),Y=new WeakMap;let se=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==N)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(O&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Y.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Y.set(t,e))}return e}toString(){return this.cssText}};const ue=o=>new se(typeof o=="string"?o:o+"",void 0,N),b=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new se(t,o,N)},me=(o,e)=>{if(O)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=M.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)}},G=O?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ue(t)})(o):o;const{is:ge,defineProperty:fe,getOwnPropertyDescriptor:be,getOwnPropertyNames:ve,getOwnPropertySymbols:xe,getPrototypeOf:we}=Object,R=globalThis,F=R.trustedTypes,ye=F?F.emptyScript:"",ke=R.reactiveElementPolyfillSupport,_=(o,e)=>o,U={toAttribute(o,e){switch(e){case Boolean:o=o?ye:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ae=(o,e)=>!ge(o,e),X={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol("metadata"),R.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&fe(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=be(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const c=i?.call(this);n?.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=we(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,r=[...ve(t),...xe(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(G(i))}else e!==void 0&&t.push(G(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const n=(r.converter?.toAttribute!==void 0?r.converter:U).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=r.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:U;this._$Em=i;const c=s.fromAttribute(t,n.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,r,i=!1,n){if(e!==void 0){const s=this.constructor;if(i===!1&&(n=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??ae)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r){const{wrapped:s}=n,c=this[i];s!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,n,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[_("elementProperties")]=new Map,E[_("finalized")]=new Map,ke?.({ReactiveElement:E}),(R.reactiveElementVersions??=[]).push("2.1.2");const I=globalThis,J=o=>o,L=I.trustedTypes,Z=L?L.createPolicy("lit-html",{createHTML:o=>o}):void 0,le="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+w,$e=`<${de}>`,$=document,A=()=>$.createComment(""),B=o=>o===null||typeof o!="object"&&typeof o!="function",W=Array.isArray,Ce=o=>W(o)||typeof o?.[Symbol.iterator]=="function",H=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,ee=/>/g,y=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,re=/"/g,ce=/^(?:script|style|textarea|title)$/i,Ee=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),l=Ee(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ie=new WeakMap,k=$.createTreeWalker($,129);function he(o,e){if(!W(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(e):e}const Se=(o,e)=>{const t=o.length-1,r=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=T;for(let c=0;c<t;c++){const h=o[c];let d,u,a=-1,m=0;for(;m<h.length&&(s.lastIndex=m,u=s.exec(h),u!==null);)m=s.lastIndex,s===T?u[1]==="!--"?s=Q:u[1]!==void 0?s=ee:u[2]!==void 0?(ce.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=y):u[3]!==void 0&&(s=y):s===y?u[0]===">"?(s=i??T,a=-1):u[1]===void 0?a=-2:(a=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?y:u[3]==='"'?re:te):s===re||s===te?s=y:s===Q||s===ee?s=T:(s=y,i=void 0);const v=s===y&&o[c+1].startsWith("/>")?" ":"";n+=s===T?h+$e:a>=0?(r.push(d),h.slice(0,a)+le+h.slice(a)+w+v):h+w+(a===-2?c:v)}return[he(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class j{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0;const c=e.length-1,h=this.parts,[d,u]=Se(e,t);if(this.el=j.createElement(d,r),k.currentNode=this.el.content,t===2||t===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=k.nextNode())!==null&&h.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(le)){const m=u[s++],v=i.getAttribute(a).split(w),C=/([.?@])?(.*)/.exec(m);h.push({type:1,index:n,name:C[2],strings:v,ctor:C[1]==="."?Te:C[1]==="?"?_e:C[1]==="@"?Ae:D}),i.removeAttribute(a)}else a.startsWith(w)&&(h.push({type:6,index:n}),i.removeAttribute(a));if(ce.test(i.tagName)){const a=i.textContent.split(w),m=a.length-1;if(m>0){i.textContent=L?L.emptyScript:"";for(let v=0;v<m;v++)i.append(a[v],A()),k.nextNode(),h.push({type:2,index:++n});i.append(a[m],A())}}}else if(i.nodeType===8)if(i.data===de)h.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(w,a+1))!==-1;)h.push({type:7,index:n}),a+=w.length-1}n++}}static createElement(e,t){const r=$.createElement("template");return r.innerHTML=e,r}}function z(o,e,t=o,r){if(e===S)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl;const n=B(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=z(o,i._$AS(o,e.values),i,r)),e}class ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??$).importNode(t,!0);k.currentNode=i;let n=k.nextNode(),s=0,c=0,h=r[0];for(;h!==void 0;){if(s===h.index){let d;h.type===2?d=new P(n,n.nextSibling,this,e):h.type===1?d=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(d=new Be(n,this,e)),this._$AV.push(d),h=r[++c]}s!==h?.index&&(n=k.nextNode(),s++)}return k.currentNode=$,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),B(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=j.createElement(he(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const n=new ze(i,this),s=n.u(this.options);n.p(t),this.T(s),this._$AH=n}}_$AC(e){let t=ie.get(e.strings);return t===void 0&&ie.set(e.strings,t=new j(e)),t}k(e){W(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new P(this.O(A()),this.O(A()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=J(e).nextSibling;J(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,i){const n=this.strings;let s=!1;if(n===void 0)e=z(this,e,t,0),s=!B(e)||e!==this._$AH&&e!==S,s&&(this._$AH=e);else{const c=e;let h,d;for(e=n[0],h=0;h<n.length-1;h++)d=z(this,c[r+h],t,h),d===S&&(d=this._$AH[h]),s||=!B(d)||d!==this._$AH[h],d===g?e=g:e!==g&&(e+=(d??"")+n[h+1]),this._$AH[h]=d}s&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class _e extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ae extends D{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=z(this,e,t,0)??g)===S)return;const r=this._$AH,i=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const je=I.litHtmlPolyfillSupport;je?.(j,P),(I.litHtmlVersions??=[]).push("3.3.2");const Pe=(o,e,t)=>{const r=t?.renderBefore??e;let i=r._$litPart$;if(i===void 0){const n=t?.renderBefore??null;r._$litPart$=i=new P(e.insertBefore(A(),n),n,void 0,t??{})}return i._$AI(o),i};const K=globalThis;class f extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}}f._$litElement$=!0,f.finalized=!0,K.litElementHydrateSupport?.({LitElement:f});const Me=K.litElementPolyfillSupport;Me?.({LitElement:f});(K.litElementVersions??=[]).push("4.2.2");const Le=b`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --muted-foreground: #94a3b8;
        --foreground: #f1f5f9;
        --primary: #3b82f6;
        --primary-foreground: #ffffff;
        --border: rgba(71, 85, 105, 0.5);
        --accent: #475569;
        --radius: 0.75rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.5rem;
        width: min(90vw, 600px);
        max-width: 600px;
        aspect-ratio: 1;
        margin: 0 auto;
        padding: 1rem;
        background: var(--card);
        border-radius: var(--radius);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
        box-sizing: border-box;
    }

    .tile-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
    }

    .tooltip {
        position: absolute;
        bottom: calc(100% + 0.5rem);
        background: rgba(15, 23, 42, 0.98);
        color: #f1f5f9;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.4;
        max-width: 250px;
        min-width: 180px;
        width: max-content;
        text-align: center;
        z-index: 1000;
        pointer-events: none;
        border: 1px solid rgba(59, 130, 246, 0.5);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
        animation: tooltip-appear 0.2s ease;
        white-space: normal;
        word-wrap: break-word;
    }

    /* Positionering varianten */
    .tooltip-left {
        left: 0%;
        transform: translateX(0%) translateY(0);
    }

    .tooltip-left::after {
        left: 20%;
    }

    .tooltip-left-center {
        left: 50%;
        transform: translateX(-25%) translateY(0);
    }

    .tooltip-left-center::after {
        left: 35%;
    }

    .tooltip-center {
        left: 50%;
        transform: translateX(-50%) translateY(0);
    }

    .tooltip-center::after {
        left: 50%;
    }

    .tooltip-right-center {
        left: 50%;
        transform: translateX(-75%) translateY(0);
    }

    .tooltip-right-center::after {
        left: 65%;
    }

    .tooltip-right {
        right: 0%;
        left: auto;
        transform: translateX(0%) translateY(0);
    }

    .tooltip-right::after {
        left: 80%;
    }

    @keyframes tooltip-appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Pijltje onder tooltip */
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        transform: translateX(-50%);
        border: 0.5rem solid transparent;
        border-top-color: rgba(15, 23, 42, 0.98);
    }

    .tile {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        font-size: clamp(0.7rem, 1.8vw, 0.875rem);
        font-weight: 500;
        text-align: center;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--foreground);
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;

        /* Voorkom text selectie en blauw highlight */
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        /* Voorkom context menu op lang indrukken */
        touch-action: manipulation;
    }

    /* Hover alleen voor devices met pointer (desktop) */
    @media (hover: hover) and (pointer: fine) {
        .tile:not(.free):hover {
            background: var(--accent);
            border-color: var(--muted-foreground);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }
    }

    /* Long-press effect voor touch devices */
    .tile:not(.free).long-pressing {
        background: var(--accent);
        border-color: var(--muted-foreground);
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }

    .tile:not(.free):active {
        transform: translateY(0);
    }

    .tile.marked:not(.free) {
        background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
        border-color: #34d399;
        color: var(--primary-foreground);
        box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
    }

    @media (hover: hover) and (pointer: fine) {
        .tile.marked:not(.free):hover {
            background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
            box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
        }
    }

    .tile.marked:not(.free).long-pressing {
        background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
        box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
    }

    .tile.free {
        background: linear-gradient(to bottom right, var(--primary), #2563eb);
        color: var(--primary-foreground);
        font-weight: 600;
        font-size: clamp(0.95rem, 2.5vw, 1.25rem);
        border-color: #60a5fa;
        box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        cursor: default;
    }

    .tile-text {
        position: relative;
        z-index: 1;
        line-height: 1.2;
        word-break: break-word;
        hyphens: auto;
        padding: 0.125rem;
        width: 100%;
        /* Extra bescherming tegen selectie */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkmark {
        position: absolute;
        top: 0.25rem;
        right: 0.25rem;
        width: 1.1rem;
        height: 1.1rem;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 2;
        animation: checkmark-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        /* Voorkom selectie van checkmark */
        pointer-events: none;
    }

    .checkmark svg {
        width: 0.7rem;
        height: 0.7rem;
        color: #059669;
    }

    @keyframes checkmark-pop {
        0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        section {
            width: calc(100vw - 1rem);
            max-width: calc(100vw - 1rem);
            gap: 0.25rem;
            padding: 0.5rem;
            margin: 0 0.5rem;
        }

        .tile {
            font-size: clamp(0.7rem, 2vw, 0.7rem);
            padding: 0.2rem;
            border-width: 1.5px;
            border-radius: 0.4rem;
        }

        .tile.free {
            font-size: clamp(0.8rem, 2.8vw, 0.95rem);
        }

        .checkmark {
            width: 0.85rem;
            height: 0.85rem;
            top: 0.15rem;
            right: 0.15rem;
        }

        .checkmark svg {
            width: 0.55rem;
            height: 0.55rem;
        }

        .tile-text {
            line-height: 1.1;
            padding: 0.1rem;
        }

        .tooltip {
            max-width: 200px;
            min-width: 150px;
            font-size: 0.8125rem;
            padding: 0.625rem 0.875rem;
        }

        .tooltip::after {
            border-width: 0.4rem;
        }
    }

    @media (max-width: 400px) {
        section {
            width: calc(100vw - 0.5rem);
            max-width: calc(100vw - 0.5rem);
            gap: 0.2rem;
            padding: 0.4rem;
            margin: 0 0.25rem;
        }

        .tile {
            font-size: clamp(0.6rem, 1.8vw, 0.6rem);
            padding: 0.15rem;
            border-width: 1px;
        }

        .tile.free {
            font-size: clamp(0.7rem, 2.5vw, 0.85rem);
        }

        .checkmark {
            width: 0.75rem;
            height: 0.75rem;
            top: 0.1rem;
            right: 0.1rem;
        }

        .checkmark svg {
            width: 0.5rem;
            height: 0.5rem;
        }

        .tooltip {
            max-width: 180px;
            min-width: 130px;
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
        }

        .tooltip::after {
            border-width: 0.375rem;
        }
    }
`;class Re{constructor(){this.sounds={},this.enabled=this.loadEnabledState(),this.volume=.7,this.loadSounds()}loadEnabledState(){const e=localStorage.getItem("soundEnabled");return e===null?!0:e==="true"}saveEnabledState(){localStorage.setItem("soundEnabled",this.enabled.toString())}loadSounds(){this.loadAudioFile("click","/sounds/click.wav"),this.loadAudioFile("tick","/sounds/tick.wav"),this.loadAudioFile("win","/sounds/win.wav"),this.loadAudioFile("check","/sounds/check.mp3"),this.loadAudioFile("uncheck","/sounds/uncheck.mp3"),this.loadAudioFile("pling","/sounds/pling.wav")}loadAudioFile(e,t){const r=new Audio(t);r.volume=this.volume,r.preload="auto",r.setAttribute("controlsList","nodownload"),r.setAttribute("disablepictureinpicture",""),r.removeAttribute("controls"),r.addEventListener("error",i=>{console.error(`❌ Failed to load sound "${e}" from ${t}`),console.error("Error details:",{error:i,src:r.src,networkState:r.networkState,readyState:r.readyState})}),this.sounds[e]=()=>{if(!this.enabled)return;const i=r.cloneNode();i.volume=this.volume,i.setAttribute("controlsList","nodownload"),i.setAttribute("disablepictureinpicture",""),i.removeAttribute("controls"),i.play().catch(n=>console.log("Audio play failed:",n)),i.addEventListener("ended",()=>{i.remove()})}}play(e){this.sounds[e]&&this.sounds[e]()}toggle(){return this.enabled=!this.enabled,this.saveEnabledState(),window.dispatchEvent(new CustomEvent("sound-toggled",{detail:{enabled:this.enabled}})),this.enabled}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}isEnabled(){return this.enabled}}const p=new Re;class De{constructor(){this.enabled=!0}vibrate(e){this.enabled&&navigator.vibrate&&navigator.vibrate(e)}pattern(e){this.enabled&&navigator.vibrate&&navigator.vibrate(e)}toggle(){this.enabled=!this.enabled}}const oe=new De;class He extends f{static styles=[Le];static properties={items:{type:Array},marked:{type:Set},difficulty:{type:String},hasWon:{type:Boolean},longPressIndex:{type:Number},longPressTimer:{type:Number,state:!0},wasLongPress:{type:Boolean,state:!0},customCard:{type:Object},bingoCount:{type:Number,state:!0}};constructor(){super(),this.items=[],this.marked=new Set([12]),this.difficulty="single",this.hasWon=!1,this.longPressIndex=null,this.longPressTimer=null,this.wasLongPress=!1,this.customCard=null,this.bingoCount=0}async firstUpdated(){this.customCard||await this.loadItems()}updated(e){e.has("customCard")&&(this.customCard?this.loadCustomCard():e.get("customCard")!==void 0&&this.loadItems())}loadCustomCard(){const e=this.customCard.items;if(e.length===24){const t=[...e];t.splice(12,0,{title:"Gratis",description:"Gratis vakje!"}),this.items=t,this.marked=new Set([12])}else if(e.length===25)this.items=e,this.marked=new Set;else{console.error("Invalid card: must have 24 or 25 items");return}this.hasWon=!1,this.requestUpdate()}async loadItems(){try{const t=await(await fetch(new URL("/assets/temp-3tmcDoLV.json",import.meta.url))).json(),r=this.getRandomItems(t.easy,10),i=this.getRandomItems(t.medium,10),n=this.getRandomItems(t.hard,4),s=[...r,...i,...n],c=this.shuffleArray(s);c.splice(12,0,{title:"Gratis",description:"Gratis vakje!"}),this.items=c,this.marked=new Set([12])}catch(e){console.error("Failed to load bingo items:",e)}}getRandomItems(e,t){return!e||e.length===0?(console.warn("Array is empty or undefined"),[]):e.length<=t?[...e]:this.shuffleArray([...e]).slice(0,t)}shuffleArray(e){const t=[...e];for(let r=t.length-1;r>0;r--){const i=Math.floor(Math.random()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t}reset(){this.customCard=null,this.bingoCount=0,this.items.length===25&&this.items[12]?.title==="Gratis"?this.marked=new Set([12]):this.marked=new Set,this.hasWon=!1,this.loadItems(),this.requestUpdate()}getTooltipClass(e){const t=e%5;return t===0?"tooltip-left":t===1?"tooltip-left-center":t===3?"tooltip-right-center":t===4?"tooltip-right":"tooltip-center"}handlePressStart(e,t){this.items[e]?.title!=="Gratis"&&(this.wasLongPress=!1,this.longPressTimer=setTimeout(()=>{this.wasLongPress=!0,this.longPressIndex=e,this.requestUpdate()},150))}handlePressEnd(e,t){this.items[e]?.title!=="Gratis"&&(this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),setTimeout(()=>{this.longPressIndex=null,this.wasLongPress=!1,this.requestUpdate()},50))}handlePressMove(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressIndex=null,this.wasLongPress=!1,this.requestUpdate()}toggleSquare(e,t){if(this.items[e]?.title!=="Gratis"){if(this.wasLongPress){t.preventDefault();return}this.marked.has(e)?(oe.vibrate(5),p.play("uncheck"),this.marked.delete(e)):(p.play("check"),oe.vibrate(10),this.marked.add(e)),this.requestUpdate(),this.checkWin()}}checkWin(){if(this.difficulty==="marathon"){const t=this.countCompletedLines();t!==this.bingoCount&&(t>this.bingoCount&&p.play("pling"),this.bingoCount=t,this.dispatchEvent(new CustomEvent("bingo-count-update",{detail:{count:this.bingoCount},bubbles:!0,composed:!0})),this.requestUpdate());return}const e=this.hasValidBingo();e&&!this.hasWon&&(this.hasWon=!0,p.play("win"),this.announceWin()),!e&&this.hasWon&&(this.hasWon=!1)}countCompletedLines(){let e=0;for(let i=0;i<5;i++)[i*5,i*5+1,i*5+2,i*5+3,i*5+4].every(s=>this.marked.has(s))&&e++;for(let i=0;i<5;i++)[i,i+5,i+10,i+15,i+20].every(s=>this.marked.has(s))&&e++;const t=[0,6,12,18,24],r=[4,8,12,16,20];return t.every(i=>this.marked.has(i))&&e++,r.every(i=>this.marked.has(i))&&e++,e}hasValidBingo(){const e=this.countCompletedLines();switch(this.difficulty){case"single":return e>=1;case"double":return e>=2;case"full":return this.marked.size===25;case"marathon":return!1;default:return!1}}announceWin(){this.dispatchEvent(new CustomEvent("win",{bubbles:!0,composed:!0}))}render(){return l`
            <section>
                ${this.items.map((e,t)=>{const r=this.marked.has(t),i=e?.title==="Gratis",n=this.longPressIndex===t,s=typeof e=="string"?e:e.title,c=typeof e=="string"?"":e.description,h=this.getTooltipClass(t);return l`
                        <div class="tile-container">
                            ${n&&c?l`
                                <div class="tooltip ${h}">
                                    ${c}
                                </div>
                            `:""}
                            <button
                                class="tile ${i?"free":""} ${r?"marked":""} ${n?"long-pressing":""}"
                                @click=${d=>this.toggleSquare(t,d)}
                                @mousedown=${d=>this.handlePressStart(t,d)}
                                @mouseup=${d=>this.handlePressEnd(t,d)}
                                @mouseleave=${()=>this.handlePressMove()}
                                @touchstart=${d=>this.handlePressStart(t,d)}
                                @touchend=${d=>this.handlePressEnd(t,d)}
                                @touchmove=${()=>this.handlePressMove()}
                                @contextmenu=${d=>d.preventDefault()}
                                ?disabled=${i}
                            >
                                ${r&&!i?l`
                                    <span class="checkmark">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                `:""}
                                <span class="tile-text">${s}</span>
                            </button>
                        </div>
                    `})}
            </section>
        `}}customElements.define("bingo-grid",He);const Ue=b`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --muted: #334155;
        --radius: 0.75rem;

        /* Progressieve moeilijkheidskleuren: groen → oranje → rood */
        --easy-light: #10b981;
        --easy-dark: #059669;

        --medium-light: #f59e0b;
        --medium-dark: #d97706;

        --hard-light: #ef4444;
        --hard-dark: #dc2626;

        --marathon-light: #a855f7;
        --marathon-dark: #7e22ce;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        padding: 1rem;
        animation: fade-in 0.2s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem;
        max-width: 900px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        margin-top: 4rem;
        max-height: calc(100vh - 5rem);
        overflow-y: auto;
    }

    @keyframes slide-up {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    h1 {
        color: var(--foreground);
        font-size: 2rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        text-align: center;
    }

    h2 {
        color: var(--foreground);
        font-size: 1rem;
        font-weight: 400;
        margin: 0 0 0.5rem 0;
        text-align: center;
    }

    .subtitle {
        color: var(--muted-foreground);
        margin: 0 0 2rem 0;
        text-align: center;
        font-size: 1rem;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .difficulty-btn {
        all: unset;
        display: grid;
        grid-template-rows: auto auto auto; /* Icon, title, description */
        align-items: center;
        justify-items: center;
        gap: 0.75rem;
        padding: 2rem 1.5rem;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
        color: var(--foreground);
    }

    .icon-wrapper {
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        flex-shrink: 0;
    }

    /* Groen = Makkelijk */
    .icon-wrapper-green {
        background: linear-gradient(135deg, var(--easy-light) 0%, var(--easy-dark) 100%);
    }

    /* Oranje = Gemiddeld */
    .icon-wrapper-orange {
        background: linear-gradient(135deg, var(--medium-light) 0%, var(--medium-dark) 100%);
    }

    /* Rood = Moeilijk */
    .icon-wrapper-red {
        background: linear-gradient(135deg, var(--hard-light) 0%, var(--hard-dark) 100%);
    }

    /* Paars = Marathon (infinite) */
    .icon-wrapper-purple {
        background: linear-gradient(135deg, var(--marathon-light) 0%, var(--marathon-dark) 100%);
    }

    .icon {
        width: 3.5rem;
        height: 3.5rem;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .difficulty-btn:hover {
            background: #475569;
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
        }

        .difficulty-btn:hover .icon-wrapper {
            transform: scale(1.1);
        }

        .difficulty-btn:hover .icon-wrapper-green {
            box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-orange {
            box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-red {
            box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-purple {
            box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.6);
        }
    }

    .difficulty-btn:active {
        transform: translateY(-2px);
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--foreground);
        text-align: center;
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    }

    .description {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-align: center;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        line-height: 1.4;
        padding: 0 0.5rem;
    }

    .custom-card-banner {
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 0.5rem;
        padding: 0.625rem 0.875rem 0.625rem 1rem;
        margin: 0 auto 1.5rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: fit-content;
        position: relative;
    }

    .banner-icon {
        width: 1.125rem;
        height: 1.125rem;
        color: #10b981;
        flex-shrink: 0;
    }

    .banner-text {
        font-size: 0.9375rem;
        color: var(--muted-foreground);
        white-space: nowrap;
    }

    .banner-text strong {
        color: #10b981;
        font-weight: 700;
        font-family: 'Courier New', monospace;
        letter-spacing: 0.05em;
    }

    .remove-card-btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;
        flex-shrink: 0;
        opacity: 0.6;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .remove-card-btn svg {
        width: 1rem;
        height: 1rem;
        color: #94a3b8;
        transition: color 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        .remove-card-btn:hover {
            opacity: 1;
            background: rgba(239, 68, 68, 0.1);
        }

        .remove-card-btn:hover svg {
            color: #ef4444;
        }
    }

    .remove-card-btn:active,
    .remove-card-btn.pressing {
        transform: scale(0.9);
        opacity: 1;
    }

    .remove-card-btn.pressing svg {
        color: #ef4444;
    }

    /* ✅ Mobile breakpoint (768px) */
    @media (max-width: 768px) {
        .modal {
            max-width: 600px;
            padding: 1.5rem; /* ✅ Kleiner */
            margin-top: 5rem;
        }

        h1 {
            font-size: 1.5rem; /* ✅ Kleiner */
        }

        .subtitle {
            font-size: 0.875rem; /* ✅ Kleiner */
            margin-bottom: 1.25rem;
        }

        .buttons {
            grid-template-columns: 1fr;
            gap: 0.625rem; /* ✅ Kleiner */
        }

        .difficulty-btn {
            padding: 1.125rem; /* ✅ Compacter */
            grid-template-columns: auto 1fr;
            grid-template-rows: auto auto;
            column-gap: 1rem; /* ✅ Kleiner */
            row-gap: 0.375rem;
            align-items: center;
            justify-items: start;
        }

        .icon-wrapper {
            width: 3.25rem; /* ✅ Kleiner */
            height: 3.25rem;
            min-width: 3.25rem;
            grid-row: 1 / 3;
            grid-column: 1;
            border-radius: 0.625rem;
        }

        .icon {
            width: 2.25rem; /* ✅ Kleiner */
            height: 2.25rem;
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
            height: auto;
            font-size: 1rem; /* ✅ Kleiner */
        }

        .description {
            grid-row: 2;
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
            align-items: flex-start;
            height: auto;
            font-size: 0.75rem; /* ✅ Kleiner */
            padding: 0;
            line-height: 1.3;
        }

        .custom-card-banner {
            padding: 0.5rem 0.75rem;
            margin-bottom: 1rem;
        }

        .banner-icon {
            width: 1rem;
            height: 1rem;
        }

        .banner-text {
            font-size: 0.8125rem; /* ✅ Kleiner */
        }

        .remove-card-btn {
            width: 1.125rem;
            height: 1.125rem;
        }

        .remove-card-btn svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }

    /* ✅ Extra small screens */
    @media (max-width: 400px) {
        .modal {
            padding: 1.25rem;
            margin-top: 4.5rem;
        }

        h1 {
            font-size: 1.375rem;
        }

        .difficulty-btn {
            padding: 1rem;
            column-gap: 0.875rem;
        }

        .icon-wrapper {
            width: 3rem;
            height: 3rem;
            min-width: 3rem;
        }

        .icon {
            width: 2rem;
            height: 2rem;
        }

        .title {
            font-size: 0.9375rem;
        }

        .description {
            font-size: 0.6875rem;
        }
    }
`,x=b`
    .touch-interactive {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        touch-action: manipulation;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (hover: hover) and (pointer: fine) {
        .touch-interactive:hover:not(:disabled) {
            opacity: 0.8;
            transform: translateY(-2px);
        }
    }

    .touch-interactive.pressing:not(:disabled) {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;class Oe extends f{static styles=[Ue,x];static properties={pressingButton:{type:String,state:!0},customCard:{type:Object}};constructor(){super(),this.pressingButton=null,this.customCard=null}selectDifficulty(e){p.play("click"),this.dispatchEvent(new CustomEvent("difficulty-selected",{detail:{difficulty:e},bubbles:!0,composed:!0}))}handleRemoveCard(e){e.stopPropagation(),p.play("click"),this.dispatchEvent(new CustomEvent("remove-custom-card",{bubbles:!0,composed:!0}))}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return l`
            <div class="backdrop">
                <div class="modal" data-nosnippet>
                    <h1>${this.customCard?"Welkom bij Dashcam Bing":"Kies je moeilijkheidsgraad"}</h1>
                    <h2 class="subtitle">Kies je moeilijkheidsgraad en streep verkeersgekte af</h2>
                    ${this.customCard?l`
                    <div class="custom-card-banner">
                        <svg class="banner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span class="banner-text">Eigen kaart geladen: <strong>${this.customCard.code}</strong></span>
                        <button 
                                class="remove-card-btn touch-interactive ${this.pressingButton==="remove"?"pressing":""}"
                                @click=${this.handleRemoveCard}
                                @touchstart=${()=>this.handleTouchStart("remove")}
                                @touchend=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                title="Verwijder kaart"
                                aria-label="Verwijder kaart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                    </div>
                `:""}

                    <div class="buttons">
                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton==="single"?"pressing":""}"
                                @click=${()=>this.selectDifficulty("single")}
                                @touchstart=${()=>this.handleTouchStart("single")}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-green">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Enkele Rij</span>
                            <span class="description">Win door 1 rij horizontaal, verticaal of diagonaal af te vinken</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton==="double"?"pressing":""}"
                                @click=${()=>this.selectDifficulty("double")}
                                @touchstart=${()=>this.handleTouchStart("double")}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-orange">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Dubbele Rij</span>
                            <span class="description">Win door 2 rijen horizontaal, verticaal of diagonaal af te vinken</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton==="full"?"pressing":""}"
                                @click=${()=>this.selectDifficulty("full")}
                                @touchstart=${()=>this.handleTouchStart("full")}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-red">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>
                                    <circle cx="6" cy="22" r="2.5" fill="white"/>
                                    <circle cx="14" cy="22" r="2.5" fill="white"/>
                                    <circle cx="22" cy="22" r="2.5" fill="white"/>
                                </svg>
                            </div>
                            <span class="title">Volle Kaart</span>
                            <span class="description">Win door alle vakjes af te vinken en de bingo kaart compleet te maken</span>                        
                        </button>
                        <button
                            class="difficulty-btn touch-interactive ${this.pressingButton==="marathon"?"pressing":""}"
                            @click=${()=>this.selectDifficulty("marathon")}
                            @touchstart=${()=>this.handleTouchStart("marathon")}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-purple">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="6" cy="22" r="2.5" fill="white"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="white"/>
                            </div>
                            <span class="title">Bingo Teller</span>
                            <span class="description">Verzamel zo veel mogelijk bingos met de automatische bingoteller</span>
                        </button>
                    </div>
                </div>
            </div>
        `}}customElements.define("difficulty-selector",Oe);const Ne=b`
    :host {
        --muted: #334155;
        --foreground: #f1f5f9;
        --border: rgba(71, 85, 105, 0.5);
        --radius: 0.75rem;
    }

    .reset-btn {
        all: unset;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        color: var(--foreground);
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .reset-btn:hover {
            background: #475569;
            border-color: #64748b;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }

        .reset-btn:hover .icon {
            transform: rotate(-180deg);
        }
    }

    .reset-btn:active {
        transform: scale(0.98);
    }

    .icon {
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.5s ease;
    }
`;class Ie extends f{static styles=[Ne,x];static properties={pressing:{type:Boolean,state:!0}};constructor(){super(),this.pressing=!1}handleClick(){p.play("click"),this.dispatchEvent(new CustomEvent("reset-requested",{bubbles:!0,composed:!0}))}handleTouchStart(){this.pressing=!0}handleTouchEnd(){this.pressing=!1}render(){return l`
            <button 
                class="reset-btn touch-interactive ${this.pressing?"pressing":""}"
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${e=>e.preventDefault()}
            >
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Probeer Opnieuw</span>
            </button>
        `}}customElements.define("reset-button",Ie);const We=b`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --destructive: #ef4444;
        --radius: 0.75rem;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
        animation: fade-in 0.2s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem;
        max-width: 400px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes slide-up {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    h3 {
        color: var(--foreground);
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
    }

    p {
        color: var(--muted-foreground);
        margin: 0 0 1.5rem 0;
        line-height: 1.5;
    }

    .buttons {
        display: flex;
        gap: 0.75rem;
        flex-direction: column-reverse;
    }

    .btn {
        all: unset;
        padding: 0.75rem 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    .btn-cancel {
        background: #334155;
        border: 2px solid var(--border);
        color: var(--foreground);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover {
            background: #475569;
        }
    }

    .btn-confirm {
        background: var(--destructive);
        border: 2px solid transparent;
        color: white;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-confirm:hover {
            background: #dc2626;
            box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.4);
        }
    }

    .btn:active {
        transform: scale(0.98);
    }

    @media (min-width: 640px) {
        .buttons {
            flex-direction: row;
            justify-content: flex-end;
        }
    }
`;class Ke extends f{static styles=[We,x];static properties={open:{type:Boolean},pressingButton:{type:String,state:!0}};constructor(){super(),this.open=!1,this.pressingButton=null}handleConfirm(){p.play("click"),this.dispatchEvent(new CustomEvent("confirm",{detail:{confirmed:!0},bubbles:!0,composed:!0}))}handleCancel(){p.play("click"),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleCancel()}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return this.open?l`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal">
          <h3>Weet je het zeker?</h3>
          <p>Je huidige voortgang gaat verloren en het spel wordt gereset.</p>
          
          <div class="buttons">
            <button 
                class="btn btn-cancel touch-interactive ${this.pressingButton==="cancel"?"pressing":""}"
                @click=${this.handleCancel}
                @touchstart=${()=>this.handleTouchStart("cancel")}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${e=>e.preventDefault()}
            >
                Nee, annuleren
            </button>
            <button 
                class="btn btn-confirm touch-interactive ${this.pressingButton==="confirm"?"pressing":""}"
                @click=${this.handleConfirm}
                @touchstart=${()=>this.handleTouchStart("confirm")}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${e=>e.preventDefault()}
            >
                Ja, opnieuw beginnen
            </button>
          </div>
        </div>
      </div>
    `:l``}}customElements.define("confirmation-modal",Ke);const Ve=b`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --success: #10b981;
        --success-dark: #059669;
        --radius: 0.75rem;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
        animation: fade-in 0.3s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal {
        background: linear-gradient(to bottom right, #1e293b, #0f172a);
        border: 3px solid var(--success);
        border-radius: calc(var(--radius) * 1.5);
        padding: 3rem 2rem 2rem;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.6),
        0 0 100px rgba(16, 185, 129, 0.3);
        animation: winner-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        position: relative;
        text-align: center;
    }

    @keyframes winner-pop {
        0% {
            transform: scale(0.3) rotate(-10deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.05) rotate(2deg);
        }
        100% {
            transform: scale(1) rotate(0);
            opacity: 1;
        }
    }

    .icon-container {
        position: absolute;
        top: -3rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .trophy-icon {
        font-size: 6rem;
        animation: trophy-bounce 1s ease infinite;
        filter: drop-shadow(0 10px 20px rgba(255, 215, 0, 0.5));
    }

    @keyframes trophy-bounce {
        0%, 100% {
            transform: translateY(0) rotate(-5deg);
        }
        50% {
            transform: translateY(-10px) rotate(5deg);
        }
    }

    h2 {
        color: var(--success);
        font-size: clamp(2.5rem, 6vw, 3.5rem);
        font-weight: 900;
        margin: 0 0 0.5rem 0;
        letter-spacing: 0.1em;
        text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        animation: bingo-flash 1.5s ease infinite;
    }

    @keyframes bingo-flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.8;
            text-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
        }
    }

    .congrats {
        color: var(--foreground);
        font-size: 1.25rem;
        margin: 0 0 2.5rem 0;
        line-height: 1.5;
    }

    .buttons {
        display: flex;
        gap: 0.75rem;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        font-weight: 600;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    .btn .icon {
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.3s ease;
    }

    .btn-view {
        background: #334155;
        border: 2px solid var(--border);
        color: var(--foreground);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-view:hover {
            background: #475569;
            border-color: var(--primary);
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        }

        .btn-view:hover .icon {
            transform: scale(1.1);
        }
    }

    .btn-play-again {
        background: linear-gradient(to right, var(--success), var(--success-dark));
        border: 2px solid transparent;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.4);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-play-again:hover {
            background: linear-gradient(to right, #34d399, var(--success));
            box-shadow: 0 8px 12px -1px rgba(16, 185, 129, 0.6);
            transform: translateY(-2px);
        }

        .btn-play-again:hover .icon {
            transform: rotate(-180deg);
        }
    }

    .btn:active {
        transform: scale(0.98);
    }

    @media (min-width: 640px) {
        .buttons {
            flex-direction: row;
        }
    }

    @media (max-width: 640px) {
        .modal {
            padding: 2.5rem 1.5rem 1.5rem;
        }

        .trophy-icon {
            font-size: 4.5rem;
        }

        .icon-container {
            top: -2.5rem;
        }

        h2 {
            font-size: 2.5rem;
        }

        .congrats {
            font-size: 1rem;
        }
    }
`;class qe extends f{static styles=[Ve,x];static properties={open:{type:Boolean},pressingButton:{type:String,state:!0}};constructor(){super(),this.open=!1,this.pressingButton=null}handleClose(){p.play("click"),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handlePlayAgain(){p.play("click"),this.dispatchEvent(new CustomEvent("play-again",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose()}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return this.open?l`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <div class="icon-container">
                        <div class="trophy-icon">🏆</div>
                    </div>
                    
                    <h2>BINGO!</h2>
                    <p class="congrats">Gefeliciteerd! Je hebt gewonnen!</p>
                    
                    <div class="buttons">
                        <button 
                            class="btn btn-view touch-interactive ${this.pressingButton==="view"?"pressing":""}"
                            @click=${this.handleClose}
                            @touchstart=${()=>this.handleTouchStart("view")}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${e=>e.preventDefault()}
                        >
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>Open Kaart</span>
                        </button>
                        <button 
                            class="btn btn-play-again touch-interactive ${this.pressingButton==="play-again"?"pressing":""}"
                            @click=${this.handlePlayAgain}
                            @touchstart=${()=>this.handleTouchStart("play-again")}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${e=>e.preventDefault()}
                        >
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Opnieuw Spelen</span>
                        </button>
                    </div>
                </div>
            </div>
        `:l``}}customElements.define("winner-modal",qe);const Ye=b`
    :host {
        /* ❌ VERWIJDERD - geen fixed positioning meer
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
        */
        display: block;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .icon {
        width: 1.8rem;
        height: 1.8rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        button:hover .icon {
            transform: scale(1.1);
        }
    }

    button:active {
        transform: scale(0.95);
    }

    button.disabled {
        opacity: 0.6;
    }

    button.disabled .icon {
        color: #ef4444;
    }

    @media (max-width: 640px) {

        button {
            width: 3rem;
            height: 3rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;class Ge extends f{static styles=[Ye,x];static properties={enabled:{type:Boolean,state:!0},pressing:{type:Boolean,state:!0}};constructor(){super(),this.enabled=p.isEnabled(),this.pressing=!1,this.handleSoundToggle=this.handleSoundToggle.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("sound-toggled",this.handleSoundToggle)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sound-toggled",this.handleSoundToggle)}handleSoundToggle(e){this.enabled=e.detail.enabled}toggle(){this.enabled=p.toggle(),this.enabled&&p.play("click")}handleTouchStart(){this.pressing=!0}handleTouchEnd(){this.pressing=!1}render(){return l`
            <button 
                @click=${this.toggle}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchcancel=${this.handleTouchEnd}
                class="touch-interactive ${this.enabled?"":"disabled"} ${this.pressing?"pressing":""}"
                title="${this.enabled?"Geluid uitschakelen":"Geluid inschakelen"}"
                aria-label="${this.enabled?"Geluid uitschakelen":"Geluid inschakelen"}"
            >
                ${this.enabled?l`
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                `:l`
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                `}
            </button>
        `}}customElements.define("sound-toggle",Ge);const Fe=b`
    :host {
        display: block;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .icon {
        width: 1.9rem;
        height: 1.9rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        button:hover .icon {
            transform: scale(1.1) rotate(15deg);
        }
    }

    button:active,
    button.pressing {
        transform: scale(0.95);
    }

    @media (max-width: 640px) {

        button {
            width: 3rem;
            height: 3rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;class Xe extends f{static styles=[Fe,x];static properties={pressing:{type:Boolean,state:!0}};constructor(){super(),this.pressing=!1}handleClick(){p.play("click"),this.dispatchEvent(new CustomEvent("help-requested",{bubbles:!0,composed:!0}))}handleTouchStart(){this.pressing=!0}handleTouchEnd(){this.pressing=!1}render(){return l`
            <button 
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchcancel=${this.handleTouchEnd}
                class="touch-interactive ${this.pressing?"pressing":""}"
                aria-label="Help"
                title="Help">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <circle cx="12" cy="17" r="0.5" fill="currentColor"></circle>
                </svg>
            </button>
        `}}customElements.define("help-button",Xe);const Je=b`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --radius: 0.75rem;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 1rem;
        animation: fade-in 0.2s ease;
        overflow-y: auto;
    }

    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem 2rem 2rem;
        max-width: 37.5rem;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
    }

    @keyframes slide-up {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .close-btn {
        all: unset;
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--muted-foreground);
        border-radius: 0.5rem;
        transition: all 0.2s ease;
    }

    .close-btn svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover {
            background: rgba(71, 85, 105, 0.3);
            color: var(--foreground);
        }
    }

    .icon-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .help-icon {
        width: 4rem;
        height: 4rem;
        color: var(--primary);
    }

    h2 {
        color: var(--foreground);
        font-size: 1.875rem;
        font-weight: 700;
        margin: 0 0 1.5rem 0;
        text-align: center;
    }

    .content {
        height: 26rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        overflow-y: auto;
    }

    section {
        background: rgba(51, 65, 85, 0.3);
        padding: 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        border: 1px solid var(--border);
        animation: fade-in 0.3s ease;
    }

    h3 {
        color: var(--foreground);
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1rem 0;
    }

    p {
        color: var(--muted-foreground);
        line-height: 1.6;
        margin: 0;
    }

    ol, ul {
        color: var(--muted-foreground);
        line-height: 1.8;
        margin: 0.75rem 0 0 0;
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    ul ul {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
    }

    /* Link styling */
    .link-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-left: 0;
        list-style: none;
    }

    .link-list li {
        margin: 0;
    }

    .link-list a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        color: #60a5fa;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        overflow-wrap: break-word;
        word-break: break-word;
    }

    .link-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        color: #ef4444;
    }

    @media (hover: hover) and (pointer: fine) {
        .link-list a:hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            color: #93c5fd;
            transform: translateX(4px);
        }

        .link-list a:hover .link-icon {
            color: #f87171;
        }
    }

    .link-list a:active {
        transform: scale(0.98);
    }

    strong {
        color: var(--foreground);
        font-weight: 600;
    }

    .badge {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 700;
        font-size: 0.875rem;
    }

    .badge.green {
        background: rgba(16, 185, 129, 0.2);
        color: #10b981;
    }

    .badge.orange {
        background: rgba(245, 158, 11, 0.2);
        color: #f59e0b;
    }

    .badge.red {
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
    }

    .badge.purple {
        background: rgba(139, 92, 246, 0.2);
        color: #8b5cf6;
    }

    .warning {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        background: rgba(239, 68, 68, 0.1);
        border: 2px solid rgba(239, 68, 68, 0.3);
        padding: 1rem;
        border-radius: 0.5rem;
        color: #fca5a5;
        margin-bottom: 1.5rem;
    }

    .warning svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #ef4444;
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    /* Pagination */
    .pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .nav-btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        cursor: pointer;
        color: var(--primary);
        transition: all 0.2s ease;
        flex-shrink: 0;
    }

    .nav-btn svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    .nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
        .nav-btn:not(:disabled):hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            transform: scale(1.05);
        }
    }

    .nav-btn:active:not(:disabled) {
        transform: scale(0.95);
    }

    .page-indicator {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: rgba(148, 163, 184, 0.3);
        transition: all 0.3s ease;
    }

    .dot.active {
        background: var(--primary);
        width: 2rem;
        border-radius: 0.25rem;
    }

    .btn-close-bottom {
        all: unset;
        display: block;
        width: 100%;
        padding: 1rem;
        background: var(--primary);
        color: white;
        text-align: center;
        font-weight: 600;
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-close-bottom:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        }
    }

    .btn-close-bottom:active {
        transform: scale(0.98);
    }

    @media (max-width: 640px) {
        .modal {
            padding: 1.7rem 1.5rem 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.125rem;
        }

        section {
            padding: 1rem;
        }

        .help-icon {
            width: 3rem;
            height: 3rem;
        }

        .link-list a {
            padding: 0.625rem 0.75rem;
            font-size: 0.875rem;
        }

        .link-icon {
            width: 1rem;
            height: 1rem;
        }

        .content {
            height: 24rem;
        }

        .nav-btn {
            width: 2.25rem;
            height: 2.25rem;
        }

        .nav-btn svg {
            width: 1.125rem;
            height: 1.125rem;
        }
    }

    @media (max-width: 400px) {
        .content {
            height: 20rem;
        }
    }
`;class Ze extends f{static styles=Je;static properties={open:{type:Boolean},currentPage:{type:Number,state:!0},touchStartX:{type:Number,state:!0},touchEndX:{type:Number,state:!0}};constructor(){super(),this.open=!1,this.currentPage=0,this.pages=["intro","what-are-dashcams","rules","where-to-find"],this.touchStartX=0,this.touchEndX=0}updated(e){e.has("open")&&this.open&&(this.currentPage=0)}handleClose(){p.play("click"),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose()}nextPage(){p.play("click"),this.currentPage<this.pages.length-1&&this.currentPage++}prevPage(){p.play("click"),this.currentPage>0&&this.currentPage--}handleTouchStart(e){this.touchStartX=e.changedTouches[0].screenX}handleTouchEnd(e){this.touchEndX=e.changedTouches[0].screenX,this.handleSwipe()}handleSwipe(){const t=this.touchStartX-this.touchEndX;Math.abs(t)>75&&(t>0?this.nextPage():this.prevPage())}renderPage(){switch(this.pages[this.currentPage]){case"intro":return l`
                    <section>
                        <h3>Wat is Dashcam Bingo?</h3>
                        <p>Het is de bedoeling dat Dashcam Bingo gespeeld wordt tijdens het kijken van dashcamvideo's. Het doel is om zo snel mogelijk <strong>bingo</strong> te krijgen.</p>
                        <br>
                        <p>Bingo behaal je door goed op te letten tijdens een dashcamvideo. Je start met een bingokaart vol met verschillende verkeersacties. Als je tijdens het kijken een van die acties ziet plaatsvinden, vink je dat vakje af.</p>
                        <br>
                        <p>Voordat je begint, kies je een moeilijkheidsgraad. Als je alle vakjes van de bijbehorende moeilijkheidsgraad hebt afgevinkt, heb je <strong>bingo</strong>.</p>
                        <br>
                        <p>Dashcam Bingo speel je het beste samen.</p>
                    </section>
                `;case"what-are-dashcams":return l`
                    <section>
                        <h3>Wat zijn dashcam videos?</h3>
                        <p>Dashcam video’s zijn beelden die zijn opgenomen met een kleine camera die achter de voorruit (of soms achterruit) van een auto is gemonteerd.</p>
                        <br>
                        <p>De dashcam begint automatisch met filmen zodra de auto start. De camera slaat beelden op in korte fragmenten. Wanneer een gebruiker een moment handmatig markeert — of wanneer de camera zelf een botsing detecteert — wordt dit fragment beveiligd opgeslagen zodat het later teruggekeken kan worden.</p>
                        <br>
                        <p>Veel van deze beelden belanden online in zogenaamde compilatievideo's. Dit gebeurt vaak om asociaal weggedrag aan de kaak te stellen of puur ter vermaak.</p>
                    </section>
                `;case"rules":return l`
                    <section>
                        <h3>Spelregels</h3>
                        <ol>
                            <li><strong>Kies je moeilijkheidsgraad:</strong>
                                <ul>
                                    <li><span class="badge green">I</span> Enkele Rij - 1 rij om bingo te halen</li>
                                    <li><span class="badge orange">II</span> Dubbele Rij - 2 rijen om bingo te halen</li>
                                    <li><span class="badge red">III</span> Volle Kaart - Alle vakjes om bingo te halen</li>
                                    <li><span class="badge purple">V</span> Bingo Teller - Scoor zoveel mogelijk bingo's</li>
                                </ul>
                            </li>
                            <li><strong>Start een dashcam video</strong> op een ander scherm</li>
                            <li><strong>Vink de verkeersacties af</strong> van jouw bingokaart</li>
                            <li><strong>Bingo!</strong> wanneer je het doel hebt gehaald</li>
                        </ol>
                    </section>
                `;case"where-to-find":return l`
                    <section>
                        <h3>Waar vind ik dashcam videos?</h3>
                        <p>Zoek op YouTube naar "dashcam videos" of "dashcam compilatie", of kijk een video van een van de kanalen hieronder:</p>
                        <ul class="link-list">
                            <li>
                                <a href="https://www.youtube.com/@Dashcam-Nederland" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dashcam Nederland
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@DutchDashcam" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dutch Dashcam
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/playlist?list=PLMe_6SSHyqcY0-mRCiQseShc4uY3KPPYt" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dumpert Dashcam Playlist
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@DASHCAMIDIOTSNEDERLAND/featured" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dashcam Idiots Nederland
                                </a>
                            </li>
                        </ul>
                    </section>
                `}}render(){return this.open?l`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <button class="close-btn" @click=${this.handleClose} aria-label="Sluiten">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="icon-container">
                        <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <h2>Uitleg Dashcam Bingo</h2>

                    <div 
                        class="content"
                        @touchstart=${this.handleTouchStart}
                        @touchend=${this.handleTouchEnd}
                    >
                        ${this.renderPage()}
                    </div>

                    <div class="pagination">
                        <button 
                            class="nav-btn" 
                            @click=${this.prevPage}
                            ?disabled=${this.currentPage===0}
                            aria-label="Vorige pagina"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div class="page-indicator">
                            ${this.pages.map((e,t)=>l`
                                <span class="dot ${t===this.currentPage?"active":""}"></span>
                            `)}
                        </div>

                        <button 
                            class="nav-btn" 
                            @click=${this.nextPage}
                            ?disabled=${this.currentPage===this.pages.length-1}
                            aria-label="Volgende pagina"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <button class="btn-close-bottom" @click=${this.handleClose}>
                        Begrepen, laten we spelen!
                    </button>
                </div>
            </div>
        `:l``}}customElements.define("help-modal",Ze);const Qe=b`
    :host {
        display: block;
    }

    .buttons-container {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .btn .icon {
        width: 1.8rem;
        height: 1.8rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        .btn:hover .icon {
            transform: scale(1.1);
        }
    }

    .btn:active,
    .btn.pressing {
        transform: scale(0.95);
    }

    @media (max-width: 640px) {
        .buttons-container {
            gap: 0.5rem;
        }

        .btn {
            width: 3rem;
            height: 3rem;
        }

        .btn .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;class et extends f{static styles=[Qe,x];static properties={pressingButton:{type:String,state:!0}};constructor(){super(),this.pressingButton=null}handleCreateCard(){p.play("click"),this.dispatchEvent(new CustomEvent("open-create-modal",{bubbles:!0,composed:!0}))}handleLoadCard(){p.play("click"),this.dispatchEvent(new CustomEvent("open-load-modal",{bubbles:!0,composed:!0}))}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return l`
            <div class="buttons-container">
                <button
                        class="btn touch-interactive ${this.pressingButton==="load"?"pressing":""}"
                        @click=${this.handleLoadCard}
                        @touchstart=${()=>this.handleTouchStart("load")}
                        @touchend=${this.handleTouchEnd}
                        @touchcancel=${this.handleTouchEnd}
                        title="Laad Kaart">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
                <button
                        class="btn touch-interactive ${this.pressingButton==="create"?"pressing":""}"
                        @click=${this.handleCreateCard}
                        @touchstart=${()=>this.handleTouchStart("create")}
                        @touchend=${this.handleTouchEnd}
                        @touchcancel=${this.handleTouchEnd}
                        title="Maak Kaart">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        `}}customElements.define("header-buttons",et);const tt=b`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --foreground: #f1f5f9;
        --primary: #3b82f6;
        --border: rgba(71, 85, 105, 0.5);
        --error: #ef4444;
        --radius: 0.75rem;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: fadeIn 0.2s ease;
        overflow: hidden;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .error-popup {
        position: fixed;
        top: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--error);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        animation: slideDown 0.3s ease;
        max-width: 90vw;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    .error-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    .error-popup strong {
        display: block;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .error-popup p {
        margin: 0;
        font-size: 0.875rem;
        opacity: 0.9;
    }

    .modal {
        background: var(--card);
        border-radius: var(--radius);
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
        overflow: hidden;
        box-sizing: border-box;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        box-sizing: border-box;
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: var(--foreground);
        font-weight: 700;
    }

    .close-btn {
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--foreground);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        line-height: 1;
        padding: 0;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover {
            background: var(--muted);
        }
    }

    .modal-body {
        padding: 1.5rem;
        overflow-y: auto;
        overflow-x: hidden;
        flex: 1;
        box-sizing: border-box;
    }

    .tiles-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        box-sizing: border-box;
    }

    .tile-item {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        border-bottom: 1px solid var(--border);
        padding-bottom: 1.25rem;
        box-sizing: border-box;
    }

    .tile-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .tile-item.disabled {
        opacity: 0.7;
    }

    .tile-number-badge {
        background: var(--primary);
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.875rem;
        flex-shrink: 0;
        margin-top: 0.25rem;
    }

    .tile-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 0;
    }

    .tile-title-row {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .input-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        min-width: 0;
    }

    .title-input {
        width: 100%;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 0.375rem;
        padding: 0.625rem 0.875rem;
        font-family: inherit;
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--foreground);
        transition: border-color 0.2s;
        box-sizing: border-box;
    }

    .title-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .title-input.input-error,
    .description-input.textarea-error {
        border-color: var(--error);
    }

    .title-input.input-error:focus,
    .description-input.textarea-error:focus {
        border-color: var(--error);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
    }

    .title-input:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .error-message {
        color: var(--error);
        font-size: 0.75rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        word-break: break-word;
    }

    .free-badge {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--primary);
        white-space: nowrap;
        flex-shrink: 0;
    }

    .description-row {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        margin-left: 1rem;
    }

    .connector-line {
        width: 20px;
        height: 100%;
        position: relative;
        flex-shrink: 0;
    }

    .connector-line::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 2px;
        height: 12px;
        background: var(--primary);
        opacity: 0.5;
    }

    .connector-line::after {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 20px;
        height: 2px;
        background: var(--primary);
        opacity: 0.5;
    }

    .description-input {
        width: 100%;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 0.375rem;
        padding: 0.625rem 0.875rem;
        font-family: inherit;
        font-size: 0.875rem;
        color: var(--foreground);
        transition: border-color 0.2s;
        resize: vertical;
        min-height: 60px;
        box-sizing: border-box;
    }

    .description-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .description-input:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal-footer {
        padding: 1.5rem;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        flex-shrink: 0;
        box-sizing: border-box;
    }

    .btn-cancel,
    .btn-create {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        border: none;
        font-family: inherit;
    }

    .btn-cancel {
        background: var(--muted);
        color: var(--foreground);
    }

    .btn-create {
        background: var(--primary);
        color: white;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover {
            background: var(--muted);
            opacity: 0.8;
        }

        .btn-create:hover {
            background: #2563eb;
        }
    }

    @media (max-width: 640px) {
        .modal-backdrop {
            padding: 0.5rem;
        }

        .error-popup {
            top: 0.75rem;
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
            max-width: calc(100vw - 2rem);
        }

        .error-icon {
            width: 20px;
            height: 20px;
        }

        .error-popup strong {
            font-size: 0.875rem;
        }

        .error-popup p {
            font-size: 0.8125rem;
        }

        .modal {
            max-height: 85vh;
            max-width: 90%;
        }

        .modal-header {
            padding: 1rem;
        }

        .modal-header h2 {
            font-size: 1.125rem;
        }

        .modal-body {
            padding: 1rem;
        }

        .tiles-list {
            gap: 0.875rem;
        }

        .tile-item {
            padding-bottom: 0.875rem;
            gap: 0.75rem;
        }

        .tile-number-badge {
            width: 28px;
            height: 28px;
            font-size: 0.75rem;
        }

        .tile-title-row {
            gap: 0.5rem;
        }

        .title-input {
            font-size: 0.875rem;
            padding: 0.5rem 0.75rem;
        }

        .description-row {
            margin-left: 0.5rem;
            gap: 0.5rem;
        }

        .connector-line {
            width: 16px;
        }

        .connector-line::after {
            width: 16px;
        }

        .description-input {
            font-size: 0.8125rem;
            padding: 0.5rem 0.75rem;
            min-height: 50px;
        }

        .error-message {
            font-size: 0.6875rem;
        }

        .free-badge {
            font-size: 0.75rem;
        }

        .modal-footer {
            padding: 1rem;
            flex-direction: column-reverse;
            gap: 0.5rem;
        }

        .btn-cancel,
        .btn-create {
            width: 100%;
            padding: 0.625rem 1rem;
            font-size: 0.8125rem;
        }
    }

    @media (max-width: 400px) {
        .modal-backdrop {
            padding: 0.25rem;
        }

        .error-popup {
            top: 0.5rem;
            padding: 0.625rem 0.875rem;
        }

        .modal-header h2 {
            font-size: 1rem;
        }

        .tile-number-badge {
            width: 24px;
            height: 24px;
            font-size: 0.6875rem;
        }
    }

    .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(4px);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: var(--radius);
    }

    .loading-overlay p {
        color: var(--foreground);
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
    }

    .spinner {
        width: 48px;
        height: 48px;
        border: 4px solid var(--muted);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .btn-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        display: inline-block;
        animation: spin 0.6s linear infinite;
        margin-right: 0.5rem;
    }

    .btn-create {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .free-tile-toggle-row {
        margin-bottom: 0.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--border);
    }

    .toggle-label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        user-select: none;
    }

    .toggle-checkbox {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: relative;
        width: 44px;
        height: 24px;
        background: var(--muted);
        border-radius: 12px;
        transition: background 0.3s;
        flex-shrink: 0;
    }

    .toggle-slider::before {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        left: 3px;
        top: 3px;
        background: white;
        border-radius: 50%;
        transition: transform 0.3s;
    }

    .toggle-checkbox:checked + .toggle-slider {
        background: var(--primary);
    }

    .toggle-checkbox:checked + .toggle-slider::before {
        transform: translateX(20px);
    }

    .toggle-checkbox:disabled + .toggle-slider {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .toggle-text {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--foreground);
    }

    .tile-item.disabled .tile-content {
        opacity: 0.5;
    }

    .tile-item.disabled .title-input,
    .tile-item.disabled .description-input {
        background: var(--muted);
        cursor: not-allowed;
    }
`,V="https://tkyibdfrvbusttfiomws.supabase.co",q="sb_publishable_faH9S0uqLXDKV0dYCQfwHg_X_dqDQJz";pe(V,q);async function rt(o){const e=await fetch(`${V}/functions/v1/quick-responder`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${q}`},body:JSON.stringify({items:o})});if(!e.ok){const t=await e.json();throw new Error(t.error||"Er ging iets mis")}return e.json()}async function it(o){const e=await fetch(`${V}/functions/v1/get-card?code=${o}`,{method:"GET",headers:{Authorization:`Bearer ${q}`}});if(!e.ok){const t=await e.json();throw new Error(t.error||"Kaart niet gevonden")}return e.json()}class ot extends f{static styles=[tt,x];static properties={open:{type:Boolean,reflect:!0},tiles:{type:Array,state:!0},pressingButton:{type:String,state:!0},errors:{type:Object,state:!0},showErrorPopup:{type:Boolean,state:!0},errorMessage:{type:String,state:!0},hasFreeTile:{type:Boolean,state:!0},isSubmitting:{type:Boolean,state:!0}};constructor(){super(),this.open=!1,this.tiles=this.initializeTiles(),this.pressingButton=null,this.errors={},this.showErrorPopup=!1,this.errorMessage="",this.hasFreeTile=!0,this.isSubmitting=!1}initializeTiles(){return Array(25).fill(null).map((e,t)=>({title:"",description:"",disabled:!1}))}handleFreeTileToggle(e,t){p.play("click");const r=this.tiles[e];r.disabled=t.target.checked,r.disabled&&(r.title="",r.description="",delete this.errors[`${e}-title`],delete this.errors[`${e}-description`]),this.requestUpdate()}handleBackdropClick(e){e.target.classList.contains("modal-backdrop")&&(p.play("click"),this.open=!1,this.resetErrors(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))}handleCloseButton(){p.play("click"),this.open=!1,this.resetErrors(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}resetErrors(){this.errors={},this.showErrorPopup=!1,this.errorMessage="",this.tiles=this.initializeTiles()}validateTile(e,t,r){const i={title:40,description:100},n=`${e}-${t}`;return this.tiles[e].disabled?(delete this.errors[n],!0):r.trim()?r.length>i[t]?(this.errors[n]=`Max ${i[t]} karakters (${r.length}/${i[t]})`,!1):(delete this.errors[n],!0):(this.errors[n]=`${t==="title"?"Titel":"Beschrijving"} mag niet leeg zijn`,!1)}handleInput(e,t,r){const i=r.target.value;this.tiles[e][t]=i,this.validateTile(e,t,i),this.requestUpdate()}validateAllTiles(){let e=!0;const t={};return this.tiles.forEach((r,i)=>{r.disabled||(r.title.trim()?r.title.length>40&&(t[`${i}-title`]=`Max 40 karakters (${r.title.length}/40)`,e=!1):(t[`${i}-title`]="Titel mag niet leeg zijn",e=!1),r.description.trim()?r.description.length>100&&(t[`${i}-description`]=`Max 100 karakters (${r.description.length}/100)`,e=!1):(t[`${i}-description`]="Beschrijving mag niet leeg zijn",e=!1))}),this.errors=t,e}async handleCreate(){if(p.play("click"),!this.validateAllTiles()){this.errorMessage="Vul alle velden correct in",this.showErrorPopup=!0,setTimeout(()=>{this.showErrorPopup=!1},4e3),this.scrollToFirstError();return}this.isSubmitting=!0;try{const e=this.tiles.filter(r=>!r.disabled).map(r=>({title:r.title.trim(),description:r.description.trim()})),t=await rt(e);this.open=!1,this.tiles=this.initializeTiles(),this.resetErrors(),this.isSubmitting=!1,this.dispatchEvent(new CustomEvent("card-created",{detail:{code:t.code},bubbles:!0,composed:!0}))}catch(e){console.error("Error creating card:",e),this.errorMessage=e.message,this.showErrorPopup=!0,this.isSubmitting=!1,setTimeout(()=>{this.showErrorPopup=!1},4e3)}}scrollToFirstError(){setTimeout(()=>{const e=this.shadowRoot.querySelector(".input-error, .textarea-error");e&&e.scrollIntoView({behavior:"smooth",block:"center"})},100)}handleKeydown(e){e.key==="Escape"&&this.open&&!this.isSubmitting&&this.handleCloseButton()}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeydown)}getErrorMessage(e,t){return this.errors[`${e}-${t}`]}hasError(e,t){return!!this.errors[`${e}-${t}`]}render(){if(!this.open)return l``;const e=Object.keys(this.errors).length;return l`
            <div class="modal-backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    ${this.isSubmitting?l`
                        <div class="loading-overlay">
                            <div class="spinner"></div>
                            <p>Kaart wordt aangemaakt...</p>
                        </div>
                    `:""}

                    ${this.showErrorPopup?l`
                        <div class="error-popup">
                            <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <div>
                                <strong>Aanmaken mislukt</strong>
                                <p>${this.errorMessage||`${e} ${e===1?"veld bevat een fout":"velden bevatten fouten"}`}</p>
                            </div>
                        </div>
                    `:""}

                    <div class="modal-header">
                        <h2>Maak je eigen Bingo Kaart</h2>
                        <button
                            class="close-btn touch-interactive ${this.pressingButton==="close"?"pressing":""}"
                            @click=${this.handleCloseButton}
                            @touchstart=${()=>this.handleTouchStart("close")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isSubmitting}
                            aria-label="Sluiten">
                            ×
                        </button>
                    </div>

                    <div class="modal-body">
                        <div class="tiles-list">
                            ${this.tiles.map((t,r)=>{const i=r===12;return l`
                                    <div class="tile-item ${t.disabled?"disabled":""}">
                                        <div class="tile-number-badge ${t.disabled?"free":""}">${t.disabled?"🎉":r+1}</div>

                                        <div class="tile-content">
                                            ${i?l`
                                                <div class="free-tile-toggle-row">
                                                    <label class="toggle-label">
                                                        <input
                                                            type="checkbox"
                                                            class="toggle-checkbox"
                                                            .checked=${t.disabled}
                                                            @change=${n=>this.handleFreeTileToggle(r,n)}
                                                            ?disabled=${this.isSubmitting}
                                                        />
                                                        <span class="toggle-slider"></span>
                                                        <span class="toggle-text">Gratis vakje</span>
                                                    </label>
                                                </div>
                                            `:""}

                                            <div class="tile-title-row">
                                                <div class="input-wrapper">
                                                    <input
                                                        type="text"
                                                        class="title-input ${this.hasError(r,"title")?"input-error":""}"
                                                        placeholder="${t.disabled?"Gratis vakje (niet invullen)":"Titel..."}"
                                                        .value=${t.title}
                                                        ?disabled=${t.disabled||this.isSubmitting}
                                                        @input=${n=>this.handleInput(r,"title",n)}
                                                        maxlength="50"
                                                    />
                                                    ${this.hasError(r,"title")?l`
                                                        <span class="error-message">${this.getErrorMessage(r,"title")}</span>
                                                    `:""}
                                                </div>
                                            </div>

                                            <div class="description-row">
                                                <div class="connector-line"></div>
                                                <div class="input-wrapper">
                                                    <textarea
                                                        class="description-input ${this.hasError(r,"description")?"textarea-error":""}"
                                                        placeholder="${t.disabled?"Automatisch ingevuld":"Beschrijving..."}"
                                                        .value=${t.description}
                                                        ?disabled=${t.disabled||this.isSubmitting}
                                                        @input=${n=>this.handleInput(r,"description",n)}
                                                        rows="2"
                                                        maxlength="150"
                                                    ></textarea>
                                                    ${this.hasError(r,"description")?l`
                                                        <span class="error-message">${this.getErrorMessage(r,"description")}</span>
                                                    `:""}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `})}
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button
                            class="btn-cancel touch-interactive ${this.pressingButton==="cancel"?"pressing":""}"
                            @click=${this.handleCloseButton}
                            @touchstart=${()=>this.handleTouchStart("cancel")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isSubmitting}>
                            Annuleren
                        </button>
                        <button
                            class="btn-create touch-interactive ${this.pressingButton==="create"?"pressing":""}"
                            @click=${this.handleCreate}
                            @touchstart=${()=>this.handleTouchStart("create")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isSubmitting}>
                            ${this.isSubmitting?l`
                                <span class="btn-spinner"></span>
                                Maken...
                            `:"Maken"}
                        </button>
                    </div>
                </div>
            </div>
        `}}customElements.define("create-card-modal",ot);const nt=b`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --foreground: #f1f5f9;
        --success: #10b981;
        --warning: #f59e0b;
        --border: rgba(71, 85, 105, 0.5);
        --radius: 0.75rem;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: fadeIn 0.2s ease;
        overflow: hidden;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border-radius: var(--radius);
        max-width: 500px;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
        position: relative;
        box-sizing: border-box;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .modal-header {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid var(--border);
        position: relative;
    }

    .success-icon {
        width: 64px;
        height: 64px;
        color: var(--success);
        animation: scaleIn 0.5s ease;
    }

    @keyframes scaleIn {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.75rem;
        color: var(--foreground);
        font-weight: 700;
        text-align: center;
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--foreground);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        line-height: 1;
        padding: 0;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover {
            background: var(--muted);
        }
    }

    .modal-body {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
    }

    .success-text {
        margin: 0;
        color: var(--foreground);
        text-align: center;
        font-size: 1rem;
        line-height: 1.6;
    }

    .code-display {
        background: var(--background);
        border: 2px solid var(--success);
        border-radius: 0.5rem;
        padding: 1.5rem 2rem;
        width: 100%;
        box-sizing: border-box;
    }

    .code {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--success);
        letter-spacing: 0.25rem;
        font-family: 'Courier New', monospace;
        display: block;
        text-align: center;
    }

    .btn-copy {
        background: var(--success);
        color: white;
        border: none;
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: inherit;
        transition: all 0.2s;
        width: 100%;
        justify-content: center;
    }

    .btn-copy .icon {
        width: 20px;
        height: 20px;
    }

    .btn-copy.copied {
        background: var(--success);
        opacity: 0.9;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-copy:hover {
            background: #059669;
        }
    }

    .info-box {
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        width: 100%;
        box-sizing: border-box;
    }

    .info-icon {
        width: 24px;
        height: 24px;
        color: #3b82f6;
        flex-shrink: 0;
    }

    .info-box > div > strong {
        display: block;
        color: var(--foreground);
        margin-bottom: 0.25rem;
        font-size: 0.9375rem;
    }

    .info-box p {
        margin: 0;
        color: var(--foreground);
        opacity: 0.9;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .info-box p strong {
        display: inline;
        white-space: nowrap;
    }

    .warning-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(4px);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        border-radius: var(--radius);
        animation: fadeIn 0.2s ease;
    }

    .warning-box {
        background: var(--card);
        border: 2px solid var(--warning);
        border-radius: 0.5rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
    }

    .warning-icon {
        width: 48px;
        height: 48px;
        color: var(--warning);
    }

    .warning-box h3 {
        margin: 0;
        color: var(--warning);
        font-size: 1.5rem;
        font-weight: 700;
    }

    .warning-box p {
        margin: 0;
        color: var(--foreground);
        text-align: center;
        line-height: 1.6;
    }

    .warning-subtext {
        font-weight: 600;
        color: var(--warning);
    }

    .warning-buttons {
        display: flex;
        gap: 0.75rem;
        width: 100%;
        margin-top: 0.5rem;
    }

    .btn-warning-cancel,
    .btn-warning-confirm {
        flex: 1;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        border: none;
        font-family: inherit;
    }

    .btn-warning-cancel {
        background: var(--muted);
        color: var(--foreground);
    }

    .btn-warning-confirm {
        background: var(--warning);
        color: white;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-warning-cancel:hover {
            opacity: 0.8;
        }

        .btn-warning-confirm:hover {
            background: #d97706;
        }
    }

    @media (max-width: 640px) {
        .modal-backdrop {
            padding: 0.5rem;
        }

        .modal-header {
            padding: 1.5rem 1rem;
        }

        .modal-header h2 {
            font-size: 1.5rem;
        }

        .success-icon {
            width: 48px;
            height: 48px;
        }

        .modal-body {
            padding: 1.5rem 1rem;
        }

        .code {
            font-size: 2rem;
            letter-spacing: 0.15rem;
        }

        .warning-box {
            padding: 1.25rem;
        }

        .warning-icon {
            width: 40px;
            height: 40px;
        }

        .warning-box h3 {
            font-size: 1.25rem;
        }

        .warning-buttons {
            flex-direction: column-reverse;
        }
    }
`;class st extends f{static styles=[nt,x];static properties={open:{type:Boolean,reflect:!0},code:{type:String},pressingButton:{type:String,state:!0},copied:{type:Boolean,state:!0},showWarning:{type:Boolean,state:!0}};constructor(){super(),this.open=!1,this.code="",this.pressingButton=null,this.copied=!1,this.showWarning=!1}async handleCopyCode(){p.play("click");try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(this.code),this.copied=!0):this.fallbackCopyToClipboard(this.code),setTimeout(()=>{this.copied=!1},2e3)}catch(e){console.error("Copy failed, trying fallback:",e),this.fallbackCopyToClipboard(this.code)}}fallbackCopyToClipboard(e){const t=document.createElement("textarea");if(t.value=e,t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.setAttribute("readonly",""),t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),navigator.userAgent.match(/ipad|iphone/i)){const r=document.createRange();r.selectNodeContents(t);const i=window.getSelection();i.removeAllRanges(),i.addRange(r),t.setSelectionRange(0,999999)}try{document.execCommand("copy")&&(this.copied=!0,setTimeout(()=>{this.copied=!1},2e3))}catch(r){console.error("Fallback copy failed:",r),alert(`Kon niet automatisch kopiëren. Code: ${e}`)}document.body.removeChild(t)}handleCloseAttempt(){p.play("click"),this.showWarning=!0}handleConfirmClose(){p.play("click"),this.open=!1,this.showWarning=!1,this.copied=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleCancelClose(){p.play("click"),this.showWarning=!1}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return this.open?l`
            <div class="modal-backdrop">
                <div class="modal">
                    ${this.showWarning?l`
                        <div class="warning-overlay">
                            <div class="warning-box">
                                <svg class="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <circle cx="12" cy="17" r="0.5" fill="currentColor"></circle>
                                </svg>
                                <h3>Let op!</h3>
                                <p>Nadat je dit scherm sluit, kun je de code <strong>niet meer ophalen</strong>. Je moet dan een nieuwe kaart maken.</p>
                                <p class="warning-subtext">Zorg dat je de code hebt gekopieerd!</p>
                                <div class="warning-buttons">
                                    <button
                                        class="btn-warning-cancel touch-interactive ${this.pressingButton==="warning-cancel"?"pressing":""}"
                                        @click=${this.handleCancelClose}
                                        @touchstart=${()=>this.handleTouchStart("warning-cancel")}
                                        @touchend=${this.handleTouchEnd}
                                        @touchcancel=${this.handleTouchEnd}>
                                        Terug
                                    </button>
                                    <button
                                        class="btn-warning-confirm touch-interactive ${this.pressingButton==="warning-confirm"?"pressing":""}"
                                        @click=${this.handleConfirmClose}
                                        @touchstart=${()=>this.handleTouchStart("warning-confirm")}
                                        @touchend=${this.handleTouchEnd}
                                        @touchcancel=${this.handleTouchEnd}>
                                        Toch sluiten
                                    </button>
                                </div>
                            </div>
                        </div>
                    `:""}

                    <div class="modal-header">
                        <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h2>Kaart aangemaakt!</h2>
                        <button
                            class="close-btn touch-interactive ${this.pressingButton==="close"?"pressing":""}"
                            @click=${this.handleCloseAttempt}
                            @touchstart=${()=>this.handleTouchStart("close")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            aria-label="Sluiten">
                            ×
                        </button>
                    </div>

                    <div class="modal-body">
                        <p class="success-text">Je kaart is succesvol aangemaakt! Gebruik deze code om je kaart te delen:</p>
                        
                        <div class="code-display">
                            <span class="code">${this.code}</span>
                        </div>

                        <button
                            class="btn-copy touch-interactive ${this.pressingButton==="copy"?"pressing":""} ${this.copied?"copied":""}"
                            @click=${this.handleCopyCode}
                            @touchstart=${()=>this.handleTouchStart("copy")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}>
                            ${this.copied?l`
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Gekopieerd!
                            `:l`
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                Kopieer Code
                            `}
                        </button>

                        <div class="info-box">
                            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <div>
                                <strong>Let op:</strong>
                                <p>Deze kaart wordt automatisch verwijderd na <strong>1&nbsp;maand</strong>.</p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `:l``}}customElements.define("success-modal",st);const at=b`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --foreground: #f1f5f9;
        --primary: #3b82f6;
        --border: rgba(71, 85, 105, 0.5);
        --error: #ef4444;
        --radius: 0.75rem;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border-radius: var(--radius);
        max-width: 450px;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
        position: relative;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(4px);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: var(--radius);
    }

    .loading-overlay p {
        color: var(--foreground);
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
    }

    .spinner {
        width: 48px;
        height: 48px;
        border: 4px solid var(--muted);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--border);
        position: relative;
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: var(--foreground);
        font-weight: 700;
        padding-right: 2rem;
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--foreground);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        line-height: 1;
        padding: 0;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover:not(:disabled) {
            background: var(--muted);
        }
    }

    .close-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .modal-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .instructions {
        margin: 0;
        color: var(--foreground);
        font-size: 1rem;
        line-height: 1.5;
        text-align: center;
    }

    .code-input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .code-input {
        width: 100%;
        padding: 1rem;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.5rem;
        text-align: center;
        background: var(--background);
        border: 2px solid var(--border);
        border-radius: 0.5rem;
        color: var(--foreground);
        font-family: 'Courier New', monospace;
        box-sizing: border-box;
        transition: border-color 0.2s;
    }

    .code-input:focus {
        outline: none;
        border-color: var(--primary);
    }

    .code-input.error {
        border-color: var(--error);
    }

    .code-input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .code-input::placeholder {
        color: var(--muted);
        opacity: 0.5;
    }

    .error-message {
        color: var(--error);
        font-size: 0.875rem;
        font-weight: 500;
        text-align: center;
    }

    .info-box {
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .info-icon {
        width: 24px;
        height: 24px;
        color: var(--primary);
        flex-shrink: 0;
    }

    .info-box p {
        margin: 0;
        color: var(--foreground);
        opacity: 0.9;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .modal-footer {
        padding: 1.5rem;
        border-top: 1px solid var(--border);
        display: flex;
        gap: 0.75rem;
    }

    .btn-cancel,
    .btn-load {
        flex: 1;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        border: none;
        font-family: inherit;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .btn-cancel {
        background: var(--muted);
        color: var(--foreground);
    }

    .btn-load {
        background: var(--primary);
        color: white;
    }

    .btn-load:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover:not(:disabled) {
            opacity: 0.8;
        }

        .btn-load:hover:not(:disabled) {
            background: #2563eb;
        }
    }

    .btn-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
    }

    @media (max-width: 640px) {
        .modal-backdrop {
            padding: 0.5rem;
        }

        .modal-header {
            padding: 1.25rem 1rem;
        }

        .modal-header h2 {
            font-size: 1.25rem;
        }

        .modal-body {
            padding: 1.25rem 1rem;
        }

        .code-input {
            font-size: 1.75rem;
            letter-spacing: 0.35rem;
        }

        .modal-footer {
            padding: 1.25rem 1rem;
            flex-direction: column-reverse;
        }
    }
`;class lt extends f{static styles=[at,x];static properties={open:{type:Boolean,reflect:!0},code:{type:String,state:!0},pressingButton:{type:String,state:!0},error:{type:String,state:!0},isLoading:{type:Boolean,state:!0}};constructor(){super(),this.open=!1,this.code="",this.pressingButton=null,this.error="",this.isLoading=!1}handleBackdropClick(e){e.target.classList.contains("modal-backdrop")&&!this.isLoading&&(p.play("click"),this.close())}handleCloseButton(){this.isLoading||(p.play("click"),this.close())}close(){this.open=!1,this.code="",this.error="",this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleInput(e){let t=e.target.value.replace(/\D/g,"");t.length>6&&(t=t.slice(0,6)),this.code=t,this.error=""}async handleLoad(){if(p.play("click"),this.code.length!==6){this.error="Code moet 6 cijfers zijn";return}this.isLoading=!0,this.error="";try{const e=await it(this.code);this.isLoading=!1,this.open=!1,this.dispatchEvent(new CustomEvent("card-loaded",{detail:{items:e.items,code:e.code},bubbles:!0,composed:!0})),this.code="",this.error=""}catch(e){console.error("Error loading card:",e),this.error=e.message,this.isLoading=!1}}handleKeydown(e){e.key==="Escape"&&this.open&&!this.isLoading&&this.handleCloseButton(),e.key==="Enter"&&this.code.length===6&&!this.isLoading&&this.handleLoad()}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeydown)}render(){return this.open?l`
            <div class="modal-backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    ${this.isLoading?l`
                        <div class="loading-overlay">
                            <div class="spinner"></div>
                            <p>Kaart wordt geladen...</p>
                        </div>
                    `:""}

                    <div class="modal-header">
                        <h2>Laad je Bingo Kaart</h2>
                        <button
                            class="close-btn touch-interactive ${this.pressingButton==="close"?"pressing":""}"
                            @click=${this.handleCloseButton}
                            @touchstart=${()=>this.handleTouchStart("close")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isLoading}
                            aria-label="Sluiten">
                            ×
                        </button>
                    </div>

                    <div class="modal-body">
                        <p class="instructions">Voer je 6-cijferige kaart code in:</p>

                        <div class="code-input-wrapper">
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                class="code-input ${this.error?"error":""}"
                                placeholder="000000"
                                .value=${this.code}
                                @input=${this.handleInput}
                                maxlength="6"
                                ?disabled=${this.isLoading}
                                autofocus
                            />
                            ${this.error?l`
                                <span class="error-message">${this.error}</span>
                            `:""}
                        </div>

                        <div class="info-box">
                            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <p>Deze code heb je gekregen na het aanmaken van een eigen kaart.</p>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button
                            class="btn-cancel touch-interactive ${this.pressingButton==="cancel"?"pressing":""}"
                            @click=${this.handleCloseButton}
                            @touchstart=${()=>this.handleTouchStart("cancel")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isLoading}>
                            Annuleren
                        </button>
                        <button
                            class="btn-load touch-interactive ${this.pressingButton==="load"?"pressing":""}"
                            @click=${this.handleLoad}
                            @touchstart=${()=>this.handleTouchStart("load")}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isLoading||this.code.length!==6}>
                            ${this.isLoading?l`
                                <span class="btn-spinner"></span>
                                Laden...
                            `:"Laden"}
                        </button>
                    </div>
                </div>
            </div>
        `:l``}}customElements.define("load-card-modal",lt);class dt extends f{static styles=b`
        :host {
            display: flex;
            font-family: system-ui;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            height: 100dvh;
            background: #0f172a;
            overflow: hidden;
            box-sizing: border-box;
            padding: 1rem;
            padding-top: max(1rem, env(safe-area-inset-top));
        }

        .left-buttons {
            position: absolute;
            top: 1rem;
            left: 1rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            z-index: 100;
            margin-top: env(safe-area-inset-top, 0);
        }

        .right-buttons {
            position: absolute;
            top: 1rem;
            right: 1rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            z-index: 100;
            margin-top: env(safe-area-inset-top, 0);
        }

        .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .title-container {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        h1 {
            text-align: center;
            margin: 0;
            flex-shrink: 0;
            font-size: 2.25rem;
            font-weight: 700;
            color: #f1f5f9;
            letter-spacing: -0.025em;
        }

        .title-underline {
            width: 120px;
            height: 3px;
            background: linear-gradient(90deg,
            transparent 0%,
            #3b82f6 50%,
            transparent 100%
            );
            border-radius: 2px;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        @media (max-width: 640px) {
            :host {
                padding: 0.5rem;
            }

            .left-buttons {
                top: 0.5rem;
                left: 0.5rem;
            }

            .right-buttons {
                top: 0.5rem;
                right: 0.5rem;
            }

            .content-wrapper {
                gap: 1rem;
            }

            h1 {
                font-size: 1.75rem;
            }

            .title-underline {
                width: 100px;
                height: 2.5px;
            }

            .game-container {
                gap: 0.75rem;
            }
        }

        @media (max-width: 400px) {
            :host {
                padding: 0.25rem;
            }

            .content-wrapper {
                gap: 0.75rem;
            }

            h1 {
                font-size: 1.5rem;
            }

            .title-underline {
                width: 80px;
                height: 2px;
            }

            .game-container {
                gap: 0.5rem;
            }
        }

        .card-indicator {
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
            margin: 0 auto;
        }

        .card-label {
            font-size: 1.5rem;
            font-weight: 500;
            color: #94a3b8;
        }

        .card-code {
            font-size: 1.5rem;
            font-weight: 700;
            color: #10b981;
            font-family: 'Courier New', monospace;
            letter-spacing: 0.1em;
        }

        @media (max-width: 640px) {
            .card-label {
                font-size: 1.2rem;
            }

            .card-code {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 400px) {
            .card-label {
                font-size: 1rem;
            }

            .card-code {
                font-size: 1rem;
            }
        }

        .bingo-counter {
            position: absolute;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
        }

        .counter-label {
            font-size: 1.25rem;
            font-weight: 500;
            color: #94a3b8;
        }

        .counter-value {
            font-size: 1.25rem;
            font-weight: 700;
            color: #10b981;
            font-family: 'Courier New', monospace;
            letter-spacing: 0.1em;
        }

        @media (max-width: 640px) {
            h1 {
                font-size: 1.75rem;
            }

            .bingo-counter {
                position: static;
                justify-content: center;
                margin-top: 0.25rem;
            }

            .title-row {
                flex-direction: column;
                align-items: center;
            }

            .counter-label {
                font-size: 1.125rem;
            }

            .counter-value {
                font-size: 1.125rem;
            }
        }

        @media (max-width: 400px) {
            h1 {
                font-size: 1.5rem;
            }

            .counter-label {
                font-size: 1rem;
            }

            .counter-value {
                font-size: 1rem;
            }
        }
    `;static properties={gameStarted:{type:Boolean},difficulty:{type:String},showConfirmation:{type:Boolean},showWinner:{type:Boolean},showHelp:{type:Boolean},showCreateModal:{type:Boolean},showSuccessModal:{type:Boolean},cardCode:{type:String},showLoadModal:{type:Boolean},loadedCard:{type:Object},bingoCount:{type:Number}};constructor(){super(),this.gameStarted=!1,this.difficulty="",this.showConfirmation=!1,this.showWinner=!1,this.showHelp=!1,this.showCreateModal=!1,this.showSuccessModal=!1,this.cardCode="",this.showLoadModal=!1,this.loadedCard=null,this.bingoCount=0}connectedCallback(){super.connectedCallback(),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",document.body.style.margin="0",document.body.style.padding="0",document.body.style.width="100%",document.body.style.height="100%",this.addEventListener("open-create-modal",this.handleOpenCreateModal),this.addEventListener("card-created",this.handleCardCreated),this.addEventListener("open-load-modal",this.handleOpenLoadModal),this.addEventListener("card-loaded",this.handleCardLoaded),this.addEventListener("remove-custom-card",this.handleRemoveCustomCard),this.addEventListener("bingo-count-update",this.handleBingoCountUpdate)}disconnectedCallback(){super.disconnectedCallback(),document.body.style.overflow="",document.documentElement.style.overflow=""}handleBingoCountUpdate(e){this.bingoCount=e.detail.count}handleCardCreated(e){this.cardCode=e.detail.code,this.showSuccessModal=!0,this.showCreateModal=!1}handleSuccessModalClose(){this.showSuccessModal=!1,this.cardCode="";const e=this.shadowRoot.querySelector("create-card-modal");e&&(e.open=!1,e.resetErrors())}handleOpenCreateModal(){this.showCreateModal=!0}handleCreateModalClose(){this.showCreateModal=!1}handleOpenLoadModal(){this.showLoadModal=!0}handleCardLoaded(e){this.showLoadModal=!1,this.loadedCard=e.detail,this.gameStarted=!1}handleRemoveCustomCard(){this.loadedCard=null,this.gameStarted=!1,this.difficulty="";const e=this.shadowRoot.querySelector("bingo-grid");e&&(e.customCard=null,e.reset()),this.requestUpdate()}handleDifficultySelect(e){this.difficulty=e.detail.difficulty,this.gameStarted=!0,this.loadedCard&&setTimeout(()=>{const t=this.shadowRoot.querySelector("bingo-grid");t&&(t.customCard=this.loadedCard)},0)}handleResetRequest(){this.showConfirmation=!0}handleConfirmReset(e){e.detail.confirmed&&this.resetGame(),this.showConfirmation=!1}handleCancelReset(){this.showConfirmation=!1}handleWin(){this.showWinner=!0}handleCloseWinner(){this.showWinner=!1}handlePlayAgain(){this.showWinner=!1,this.resetGame()}handleHelpOpen(){this.showHelp=!0}handleHelpClose(){this.showHelp=!1}resetGame(){this.gameStarted=!1,this.difficulty="",this.loadedCard=null,this.bingoCount=0,this.shadowRoot.querySelector("bingo-grid")?.reset()}render(){return l`
            <div class="left-buttons">
                <help-button @help-requested=${this.handleHelpOpen}></help-button>
                <sound-toggle></sound-toggle>
            </div>

            <div class="right-buttons">
                <header-buttons></header-buttons>
            </div>

            <div class="content-wrapper">
                <div class="title-container">
                    <div class="title-row">
                        <h1>Dashcam Bingo</h1>
                        ${this.gameStarted&&this.difficulty==="marathon"?l`
                            <div class="bingo-counter">
                                <span class="counter-label">Bingos:</span>
                                <span class="counter-value">${this.bingoCount}</span>
                            </div>
                        `:""}
                    </div>
                    <div class="title-underline"></div>
                </div>

                ${this.gameStarted&&this.loadedCard?l`
                    <div class="card-indicator">
                        <span class="card-label">Kaart:</span>
                        <span class="card-code">${this.loadedCard.code}</span>
                    </div>
                `:""}
                <div class="game-container">
                    <bingo-grid
                            .difficulty=${this.difficulty}
                            .customCard=${this.loadedCard}
                            @win=${this.handleWin}>
                    </bingo-grid>
                    ${this.gameStarted?l`
                        <reset-button @reset-requested=${this.handleResetRequest}></reset-button>
                    `:""}
                </div>
            </div>

            ${this.gameStarted?"":l`
                <difficulty-selector
                        .customCard=${this.loadedCard}
                        @difficulty-selected=${this.handleDifficultySelect}>
                </difficulty-selector>
            `}

            <help-modal
                    .open=${this.showHelp}
                    @close=${this.handleHelpClose}>
            </help-modal>

            <confirmation-modal
                    ?open=${this.showConfirmation}
                    @confirm=${this.handleConfirmReset}
                    @cancel=${this.handleCancelReset}>
            </confirmation-modal>

            <winner-modal
                    ?open=${this.showWinner}
                    @close=${this.handleCloseWinner}
                    @play-again=${this.handlePlayAgain}>
            </winner-modal>

            <create-card-modal
                    ?open=${this.showCreateModal}
                    @close=${this.handleCreateModalClose}>
            </create-card-modal>

            <load-card-modal
                    ?open=${this.showLoadModal}
                    @close=${()=>this.showLoadModal=!1}>
            </load-card-modal>

            <success-modal
                    ?open=${this.showSuccessModal}
                    .code=${this.cardCode}
                    @close=${this.handleSuccessModalClose}>
            </success-modal>
        `}}customElements.define("dashcam-app",dt);const ct="modulepreload",ht=function(o){return"/"+o},ne={},pt=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let h=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");i=h(t.map(d=>{if(d=ht(d),d in ne)return;ne[d]=!0;const u=d.endsWith(".css"),a=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${a}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":ct,u||(m.as="script"),m.crossOrigin="",m.href=d,c&&m.setAttribute("nonce",c),document.head.appendChild(m),u)return new Promise((v,C)=>{m.addEventListener("load",v),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return i.then(s=>{for(const c of s||[])c.status==="rejected"&&n(c.reason);return e().catch(n)})};function ut(o={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:i,onRegisteredSW:n,onRegisterError:s}=o;let c,h;const d=async(a=!0)=>{await h};async function u(){if("serviceWorker"in navigator){if(c=await pt(async()=>{const{Workbox:a}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:a}},[]).then(({Workbox:a})=>new a("/sw.js",{scope:"/",type:"classic"})).catch(a=>{s?.(a)}),!c)return;c.addEventListener("activated",a=>{(a.isUpdate||a.isExternal)&&window.location.reload()}),c.addEventListener("installed",a=>{a.isUpdate||r?.()}),c.register({immediate:e}).then(a=>{n?n("/sw.js",a):i?.(a)}).catch(a=>{s?.(a)})}}return h=u(),d}ut({immediate:!0});window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),window.deferredPrompt=o});
