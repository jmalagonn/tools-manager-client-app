"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[803],{2803:(Ge,yt,m)=>{m.r(yt),m.d(yt,{ToolsManagementModule:()=>L});var y=m(6895),T=m(2220),n=m(1571),q=m(5307),f=m(433);function $t(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.editToolForm.valid&&i.onSubmit())}),n.TgZ(1,"div",2)(2,"label",3),n._uU(3,"Nombre"),n.qZA(),n._UZ(4,"input",4),n.qZA(),n.TgZ(5,"div")(6,"button",5),n._uU(7,"Guardar"),n.qZA(),n.TgZ(8,"button",6),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.onCancel())}),n._uU(9,"Cancelar"),n.qZA()()()}if(2&t){const o=n.oxw();n.Q6J("formGroup",o.editToolForm),n.xp6(6),n.Q6J("disabled",!o.editToolForm.valid)}}class x{constructor(e){this.fb=e,this.updatedToolEvent=new n.vpe,this.cancelUpdateToolEvent=new n.vpe}ngOnInit(){this.initForm()}initForm(){!this.tool||(this.editToolForm=this.fb.group({toolId:[this.tool.toolId,f.kI.required],toolName:[this.tool.toolName,f.kI.required]}))}onSubmit(){this.updatedToolEvent.emit(this.editToolForm?.value)}onCancel(){this.cancelUpdateToolEvent.emit()}static#t=this.\u0275fac=function(o){return new(o||x)(n.Y36(f.qu))};static#e=this.\u0275cmp=n.Xpm({type:x,selectors:[["app-edit-tool-form"]],inputs:{tool:"tool"},outputs:{updatedToolEvent:"updatedToolEvent",cancelUpdateToolEvent:"cancelUpdateToolEvent"},decls:1,vars:1,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","toolName",1,"form-label","fw-bold"],["type","text","id","toolName","formControlName","toolName",1,"form-control"],["type","submit",1,"btn","btn-outline-primary",3,"disabled"],["type","button",1,"btn","btn-outline-dark","ms-3",3,"click"]],template:function(o,r){1&o&&n.YNc(0,$t,10,2,"form",0),2&o&&n.Q6J("ngIf",r.editToolForm)},dependencies:[y.O5,f._Y,f.Fj,f.JJ,f.JL,f.sg,f.u]})}function bt(t,e,o,r,i,s,l){try{var a=t[s](l),c=a.value}catch(h){return void o(h)}a.done?e(c):Promise.resolve(c).then(r,i)}function u(t){return function(){var e=this,o=arguments;return new Promise(function(r,i){var s=t.apply(e,o);function l(c){bt(s,r,i,l,a,"next",c)}function a(c){bt(s,r,i,l,a,"throw",c)}l(void 0)})}}var b=m(2687),P=m(8246);function Mt(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const o=document.implementation.createHTMLDocument(),r=o.createElement("base"),i=o.createElement("a");return o.head.appendChild(r),o.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}const kt=(()=>{let t=0;return()=>(t+=1,`u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${t}`)})();function g(t){const e=[];for(let o=0,r=t.length;o<r;o++)e.push(t[o]);return e}function v(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function Tt(t,e={}){const o=e.width||function Jt(t){const e=v(t,"border-left-width"),o=v(t,"border-right-width");return t.clientWidth+e+o}(t),r=e.height||function Dt(t){const e=v(t,"border-top-width"),o=v(t,"border-bottom-width");return t.clientHeight+e+o}(t);return{width:o,height:r}}function Ot(){let t,e;try{e=process}catch{}const o=e&&e.env?e.env.devicePixelRatio:null;return o&&(t=parseInt(o,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const p=16384;function Gt(t){(t.width>p||t.height>p)&&(t.width>p&&t.height>p?t.width>t.height?(t.height*=p/t.width,t.width=p):(t.width*=p/t.height,t.height=p):t.width>p?(t.height*=p/t.width,t.width=p):(t.width*=p/t.height,t.height=p))}function Qt(t,e={}){return new Promise(t.toBlob?o=>{t.toBlob(o,e.type?e.type:"image/png",e.quality?e.quality:1)}:o=>{const r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,s=new Uint8Array(i);for(let l=0;l<i;l+=1)s[l]=r.charCodeAt(l);o(new Blob([s],{type:e.type?e.type:"image/png"}))})}function S(t){return new Promise((e,o)=>{const r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=o,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}function Ht(t){return $.apply(this,arguments)}function $(){return($=u(function*(t){return Promise.resolve().then(()=>(new XMLSerializer).serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)})).apply(this,arguments)}function Nt(t,e,o){return M.apply(this,arguments)}function M(){return(M=u(function*(t,e,o){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),s=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${e}`),i.setAttribute("height",`${o}`),i.setAttribute("viewBox",`0 0 ${e} ${o}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),i.appendChild(s),s.appendChild(t),Ht(i)})).apply(this,arguments)}const d=(t,e)=>{if(t instanceof e)return!0;const o=Object.getPrototypeOf(t);return null!==o&&(o.constructor.name===e.name||d(o,e))};function xt(t,e,o){const r=window.getComputedStyle(t,o),i=r.getPropertyValue("content");if(""===i||"none"===i)return;const s=kt();try{e.className=`${e.className} ${s}`}catch{return}const l=document.createElement("style");l.appendChild(function jt(t,e,o){const r=`.${t}:${e}`,i=o.cssText?function Bt(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}(o):function Vt(t){return g(t).map(e=>`${e}: ${t.getPropertyValue(e)}${t.getPropertyPriority(e)?" !important":""};`).join(" ")}(o);return document.createTextNode(`${r}{${i}}`)}(s,o,r)),e.appendChild(l)}const vt="application/font-woff",St="image/jpeg",Yt={woff:vt,woff2:vt,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:St,jpeg:St,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function k(t){const e=function zt(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return Yt[e]||""}function Xt(t){return t.split(/,/)[1]}function J(t){return-1!==t.search(/^(data:)/)}function Ct(t,e){return`data:${e};base64,${t}`}function wt(t,e,o){return D.apply(this,arguments)}function D(){return(D=u(function*(t,e,o){const r=yield fetch(t,e);if(404===r.status)throw new Error(`Resource "${r.url}" not found`);const i=yield r.blob();return new Promise((s,l)=>{const a=new FileReader;a.onerror=l,a.onloadend=()=>{try{s(o({res:r,result:a.result}))}catch(c){l(c)}},a.readAsDataURL(i)})})).apply(this,arguments)}const O={};function Kt(t,e,o){let r=t.replace(/\?.*/,"");return o&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}function G(t,e,o){return Q.apply(this,arguments)}function Q(){return(Q=u(function*(t,e,o){const r=Kt(t,e,o.includeQueryParams);if(null!=O[r])return O[r];let i;o.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());try{i=Ct(yield wt(t,o.fetchRequestInit,({res:l,result:a})=>(e||(e=l.headers.get("Content-Type")||""),Xt(a))),e)}catch(s){i=o.imagePlaceholder||"";let l=`Failed to fetch resource: ${t}`;s&&(l="string"==typeof s?s:s.message),l&&console.warn(l)}return O[r]=i,i})).apply(this,arguments)}function te(t){return H.apply(this,arguments)}function H(){return(H=u(function*(t){const e=t.toDataURL();return"data:,"===e?t.cloneNode(!1):S(e)})).apply(this,arguments)}function ee(t,e){return N.apply(this,arguments)}function N(){return(N=u(function*(t,e){if(t.currentSrc){const s=document.createElement("canvas"),l=s.getContext("2d");return s.width=t.clientWidth,s.height=t.clientHeight,l?.drawImage(t,0,0,s.width,s.height),S(s.toDataURL())}const o=t.poster,r=k(o);return S(yield G(o,r,e))})).apply(this,arguments)}function ne(t){return B.apply(this,arguments)}function B(){return(B=u(function*(t){var e;try{if(null!==(e=t?.contentDocument)&&void 0!==e&&e.body)return yield C(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)})).apply(this,arguments)}function oe(t,e){return V.apply(this,arguments)}function V(){return(V=u(function*(t,e){return d(t,HTMLCanvasElement)?te(t):d(t,HTMLVideoElement)?ee(t,e):d(t,HTMLIFrameElement)?ne(t):t.cloneNode(!1)})).apply(this,arguments)}const re=t=>null!=t.tagName&&"SLOT"===t.tagName.toUpperCase();function ie(t,e,o){return j.apply(this,arguments)}function j(){return(j=u(function*(t,e,o){var r,i;let s=[];return s=re(t)&&t.assignedNodes?g(t.assignedNodes()):d(t,HTMLIFrameElement)&&(null===(r=t.contentDocument)||void 0===r?void 0:r.body)?g(t.contentDocument.body.childNodes):g((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes),0===s.length||d(t,HTMLVideoElement)||(yield s.reduce((l,a)=>l.then(()=>C(a,o)).then(c=>{c&&e.appendChild(c)}),Promise.resolve())),e})).apply(this,arguments)}function ce(t,e){return d(e,Element)&&(function se(t,e){const o=e.style;if(!o)return;const r=window.getComputedStyle(t);r.cssText?(o.cssText=r.cssText,o.transformOrigin=r.transformOrigin):g(r).forEach(i=>{let s=r.getPropertyValue(i);"font-size"===i&&s.endsWith("px")&&(s=Math.floor(parseFloat(s.substring(0,s.length-2)))-.1+"px"),d(t,HTMLIFrameElement)&&"display"===i&&"inline"===s&&(s="block"),"d"===i&&e.getAttribute("d")&&(s=`path(${e.getAttribute("d")})`),o.setProperty(i,s,r.getPropertyPriority(i))})}(t,e),function Wt(t,e){xt(t,e,":before"),xt(t,e,":after")}(t,e),function le(t,e){d(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),d(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function ae(t,e){if(d(t,HTMLSelectElement)){const r=Array.from(e.children).find(i=>t.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}(t,e)),e}function ue(t,e){return W.apply(this,arguments)}function W(){return(W=u(function*(t,e){const o=t.querySelectorAll?t.querySelectorAll("use"):[];if(0===o.length)return t;const r={};for(let s=0;s<o.length;s++){const a=o[s].getAttribute("xlink:href");if(a){const c=t.querySelector(a),h=document.querySelector(a);!c&&h&&!r[a]&&(r[a]=yield C(h,e,!0))}}const i=Object.values(r);if(i.length){const s="http://www.w3.org/1999/xhtml",l=document.createElementNS(s,"svg");l.setAttribute("xmlns",s),l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.overflow="hidden",l.style.display="none";const a=document.createElementNS(s,"defs");l.appendChild(a);for(let c=0;c<i.length;c++)a.appendChild(i[c]);t.appendChild(l)}return t})).apply(this,arguments)}function C(t,e,o){return Y.apply(this,arguments)}function Y(){return(Y=u(function*(t,e,o){return o||!e.filter||e.filter(t)?Promise.resolve(t).then(r=>oe(r,e)).then(r=>ie(t,r,e)).then(r=>ce(t,r)).then(r=>ue(r,e)):null})).apply(this,arguments)}const Et=/url\((['"]?)([^'"]+?)\1\)/g,fe=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,me=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function de(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function pe(t){const e=[];return t.replace(Et,(o,r,i)=>(e.push(i),o)),e.filter(o=>!J(o))}function he(t,e,o,r,i){return z.apply(this,arguments)}function z(){return(z=u(function*(t,e,o,r,i){try{const s=o?Mt(e,o):e,l=k(e);let a;return a=i?Ct(yield i(s),l):yield G(s,l,r),t.replace(de(e),`$1${a}$3`)}catch{}return t})).apply(this,arguments)}function ge(t,{preferredFontFormat:e}){return e?t.replace(me,o=>{for(;;){const[r,,i]=fe.exec(o)||[];if(!i)return"";if(i===e)return`src: ${r};`}}):t}function At(t){return-1!==t.search(Et)}function Rt(t,e,o){return X.apply(this,arguments)}function X(){return(X=u(function*(t,e,o){if(!At(t))return t;const r=ge(t,o);return pe(r).reduce((s,l)=>s.then(a=>he(a,l,e,o)),Promise.resolve(r))})).apply(this,arguments)}function w(t,e,o){return K.apply(this,arguments)}function K(){return(K=u(function*(t,e,o){var r;const i=null===(r=e.style)||void 0===r?void 0:r.getPropertyValue(t);if(i){const s=yield Rt(i,null,o);return e.style.setProperty(t,s,e.style.getPropertyPriority(t)),!0}return!1})).apply(this,arguments)}function _e(t,e){return tt.apply(this,arguments)}function tt(){return(tt=u(function*(t,e){(yield w("background",t,e))||(yield w("background-image",t,e)),(yield w("mask",t,e))||(yield w("mask-image",t,e))})).apply(this,arguments)}function ye(t,e){return et.apply(this,arguments)}function et(){return(et=u(function*(t,e){const o=d(t,HTMLImageElement);if((!o||J(t.src))&&(!d(t,SVGImageElement)||J(t.href.baseVal)))return;const r=o?t.src:t.href.baseVal,i=yield G(r,k(r),e);yield new Promise((s,l)=>{t.onload=s,t.onerror=l;const a=t;a.decode&&(a.decode=s),"lazy"===a.loading&&(a.loading="eager"),o?(t.srcset="",t.src=i):t.href.baseVal=i})})).apply(this,arguments)}function be(t,e){return nt.apply(this,arguments)}function nt(){return(nt=u(function*(t,e){const r=g(t.childNodes).map(i=>Zt(i,e));yield Promise.all(r).then(()=>t)})).apply(this,arguments)}function Zt(t,e){return ot.apply(this,arguments)}function ot(){return(ot=u(function*(t,e){d(t,Element)&&(yield _e(t,e),yield ye(t,e),yield be(t,e))})).apply(this,arguments)}function Te(t,e){const{style:o}=t;e.backgroundColor&&(o.backgroundColor=e.backgroundColor),e.width&&(o.width=`${e.width}px`),e.height&&(o.height=`${e.height}px`);const r=e.style;return null!=r&&Object.keys(r).forEach(i=>{o[i]=r[i]}),t}const It={};function Ut(t){return rt.apply(this,arguments)}function rt(){return(rt=u(function*(t){let e=It[t];return null!=e||(e={url:t,cssText:yield(yield fetch(t)).text()},It[t]=e),e})).apply(this,arguments)}function Ft(t,e){return it.apply(this,arguments)}function it(){return it=u(function*(t,e){let o=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,s=(o.match(/url\([^)]+\)/g)||[]).map(function(){var l=u(function*(a){let c=a.replace(r,"$1");return c.startsWith("https://")||(c=new URL(c,t.url).href),wt(c,e.fetchRequestInit,({result:h})=>(o=o.replace(a,`url(${h})`),[a,h]))});return function(a){return l.apply(this,arguments)}}());return Promise.all(s).then(()=>o)}),it.apply(this,arguments)}function Lt(t){if(null==t)return[];const e=[];let r=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=i.exec(r);if(null===c)break;e.push(c[0])}r=r.replace(i,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let c=s.exec(r);if(null===c){if(c=a.exec(r),null===c)break;s.lastIndex=a.lastIndex}else a.lastIndex=s.lastIndex;e.push(c[0])}return e}function xe(t,e){return st.apply(this,arguments)}function st(){return(st=u(function*(t,e){const o=[],r=[];return t.forEach(i=>{if("cssRules"in i)try{g(i.cssRules||[]).forEach((s,l)=>{if(s.type===CSSRule.IMPORT_RULE){let a=l+1;const h=Ut(s.href).then(_=>Ft(_,e)).then(_=>Lt(_).forEach(_t=>{try{i.insertRule(_t,_t.startsWith("@import")?a+=1:i.cssRules.length)}catch(Oe){console.error("Error inserting rule from remote css",{rule:_t,error:Oe})}})).catch(_=>{console.error("Error loading remote css",_.toString())});r.push(h)}})}catch(s){const l=t.find(a=>null==a.href)||document.styleSheets[0];null!=i.href&&r.push(Ut(i.href).then(a=>Ft(a,e)).then(a=>Lt(a).forEach(c=>{l.insertRule(c,i.cssRules.length)})).catch(a=>{console.error("Error loading remote stylesheet",a)})),console.error("Error inlining remote css file",s)}}),Promise.all(r).then(()=>(t.forEach(i=>{if("cssRules"in i)try{g(i.cssRules||[]).forEach(s=>{o.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${i.href}`,s)}}),o))})).apply(this,arguments)}function ve(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>At(e.style.getPropertyValue("src")))}function Se(t,e){return lt.apply(this,arguments)}function lt(){return(lt=u(function*(t,e){if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");const o=g(t.ownerDocument.styleSheets);return ve(yield xe(o,e))})).apply(this,arguments)}function Ce(t,e){return at.apply(this,arguments)}function at(){return(at=u(function*(t,e){const o=yield Se(t,e);return(yield Promise.all(o.map(i=>Rt(i.cssText,i.parentStyleSheet?i.parentStyleSheet.href:null,e)))).join("\n")})).apply(this,arguments)}function we(t,e){return ct.apply(this,arguments)}function ct(){return(ct=u(function*(t,e){const o=null!=e.fontEmbedCSS?e.fontEmbedCSS:e.skipFonts?null:yield Ce(t,e);if(o){const r=document.createElement("style"),i=document.createTextNode(o);r.appendChild(i),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}})).apply(this,arguments)}function Ee(t){return ut.apply(this,arguments)}function ut(){return(ut=u(function*(t,e={}){const{width:o,height:r}=Tt(t,e),i=yield C(t,e,!0);return yield we(i,e),yield Zt(i,e),Te(i,e),yield Nt(i,o,r)})).apply(this,arguments)}function E(t){return ft.apply(this,arguments)}function ft(){return(ft=u(function*(t,e={}){const{width:o,height:r}=Tt(t,e),i=yield Ee(t,e),s=yield S(i),l=document.createElement("canvas"),a=l.getContext("2d"),c=e.pixelRatio||Ot(),h=e.canvasWidth||o,_=e.canvasHeight||r;return l.width=h*c,l.height=_*c,e.skipAutoScale||Gt(l),l.style.width=`${h}`,l.style.height=`${_}`,e.backgroundColor&&(a.fillStyle=e.backgroundColor,a.fillRect(0,0,l.width,l.height)),a.drawImage(s,0,0,l.width,l.height),l})).apply(this,arguments)}function ht(){return(ht=u(function*(t,e={}){const o=yield E(t,e);return yield Qt(o)})).apply(this,arguments)}var Re=m(7185),qt=m(2216),Ze=m(7129);class A{constructor(e){this.toastrService=e,this.qrCodeElementType=P.TT.IMG,this.qrCodeErrorCorrectionLevel=P.Jk.HIGH,this.faImage=b.VmB,this.faSave=b.r6l}copyOrSaveQRInfo(e=!0){var o=this;return u(function*(){const r=document.getElementById("tool-qr-info"),i=r.firstChild;i.innerHTML=o.tool.toolName;const s=yield function Ae(t){return ht.apply(this,arguments)}(r,{backgroundColor:"white"});e?yield navigator.clipboard.write([new ClipboardItem({"image/png":s})]):o.saveQrInfo(s),i.innerHTML="C\xf3digo QR",o.toastrService.success("Imagen copiada al portapapeles")})()}saveQrInfo(e){var o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=`${this.tool.toolName}.png`,r.click(),r.remove()}static#t=this.\u0275fac=function(o){return new(o||A)(n.Y36(Re._W))};static#e=this.\u0275cmp=n.Xpm({type:A,selectors:[["app-qr-info"]],inputs:{tool:"tool"},decls:15,vars:8,consts:[["id","tool-qr-info"],[1,"text-center","tool-qr-info--name"],[1,"qr-card"],[1,"text-center",3,"elementType","value","errorCorrectionLevel"],[1,"text-center"],[1,"d-flex","justify-content-center"],[1,"btn","btn-sm","btn-outline-primary",3,"click"],[3,"icon"],[1,"btn","btn-sm","btn-outline-primary","ms-2",3,"click"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0)(1,"h6",1),n._uU(2,"C\xf3digo QR"),n.qZA(),n.TgZ(3,"div",2),n._UZ(4,"ngx-qrcode",3),n.TgZ(5,"p",4),n._uU(6),n.ALo(7,"lastCharacters"),n.qZA()()(),n.TgZ(8,"div",5)(9,"button",6),n.NdJ("click",function(){return r.copyOrSaveQRInfo()}),n._uU(10,"Copiar "),n._UZ(11,"fa-icon",7),n.qZA(),n.TgZ(12,"button",8),n.NdJ("click",function(){return r.copyOrSaveQRInfo(!1)}),n._uU(13,"Guardar "),n._UZ(14,"fa-icon",7),n.qZA()()),2&o&&(n.xp6(4),n.Q6J("elementType",r.qrCodeElementType)("value",r.tool.toolGuid)("errorCorrectionLevel",r.qrCodeErrorCorrectionLevel),n.xp6(2),n.Oqu(n.lcZ(7,6,r.tool.toolGuid)),n.xp6(5),n.Q6J("icon",r.faImage),n.xp6(3),n.Q6J("icon",r.faSave))},dependencies:[qt.BN,P.zF,Ze.$]})}function Ie(t,e){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ul",10)(2,"li")(3,"p")(4,"b"),n._uU(5,"Nombre:"),n.qZA(),n._uU(6),n.qZA()(),n.TgZ(7,"li")(8,"p")(9,"b"),n._uU(10,"Estado:"),n.qZA(),n._uU(11),n.qZA()()(),n.TgZ(12,"div",11)(13,"button",12),n.NdJ("click",function(){n.CHM(o);const i=n.oxw(2);return n.KtG(i.setUpdatingTool(!0))}),n._uU(14,"Editar herramienta"),n.qZA()(),n.BQk()}if(2&t){const o=n.oxw(2);n.xp6(6),n.hij(" ",o.tool.toolName,""),n.xp6(5),n.hij(" ",o.tool.toolState.toolStateName,"")}}function Ue(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"app-edit-tool-form",13),n.NdJ("cancelUpdateToolEvent",function(){n.CHM(o);const i=n.oxw(2);return n.KtG(i.setUpdatingTool(!1))})("updatedToolEvent",function(i){n.CHM(o);const s=n.oxw(2);return n.KtG(s.onToolUpdated(i))}),n.qZA()}if(2&t){const o=n.oxw(2);n.Q6J("tool",o.tool)}}function Fe(t,e){if(1&t&&(n.TgZ(0,"div",1)(1,"h4",2),n._uU(2),n.qZA(),n.TgZ(3,"div",3)(4,"div",4),n._UZ(5,"app-qr-info",5),n.qZA(),n.TgZ(6,"div",6)(7,"h6",7),n._uU(8,"Informaci\xf3n general"),n.qZA(),n.YNc(9,Ie,15,2,"ng-container",8),n.YNc(10,Ue,1,1,"app-edit-tool-form",9),n.qZA()()()),2&t){const o=n.oxw();n.xp6(2),n.Oqu(o.tool.toolName),n.xp6(3),n.Q6J("tool",o.tool),n.xp6(4),n.Q6J("ngIf",!o.updatingTool),n.xp6(1),n.Q6J("ngIf",o.updatingTool)}}class R{constructor(e,o){this.route=e,this.httpService=o,this.updatingTool=!1}ngOnInit(){this.getTool()}getTool(){const e=this.route.snapshot.paramMap.get("id");this.httpService.get(`Tools/${e}`).subscribe(o=>this.tool=o)}setUpdatingTool(e){this.updatingTool=e}onToolUpdated(e){this.httpService.put("Tools",e).subscribe(o=>{this.tool=o,this.updatingTool=!1})}static#t=this.\u0275fac=function(o){return new(o||R)(n.Y36(T.gz),n.Y36(q.O))};static#e=this.\u0275cmp=n.Xpm({type:R,selectors:[["app-tool-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"text-center","mt-3"],[1,"row","mt-3"],[1,"col-sm-4"],[3,"tool"],[1,"col-sm-8"],[1,"text-center"],[4,"ngIf"],[3,"tool","cancelUpdateToolEvent","updatedToolEvent",4,"ngIf"],[1,"list-unstyled"],[1,"mt-3"],["type","button",1,"btn","btn-outline-primary",3,"click"],[3,"tool","cancelUpdateToolEvent","updatedToolEvent"]],template:function(o,r){1&o&&n.YNc(0,Fe,11,4,"div",0),2&o&&n.Q6J("ngIf",r.tool)},dependencies:[y.O5,x,A]})}var Pt=m(18);function Le(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"form",8),n.NdJ("ngSubmit",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.addToolForm.valid&&i.onSubmit())}),n.TgZ(1,"div",9)(2,"label",10),n._uU(3,"Nombre"),n.qZA(),n._UZ(4,"input",11),n.qZA(),n.TgZ(5,"button",12),n._uU(6,"Guardar"),n.qZA()()}if(2&t){const o=n.oxw();n.Q6J("formGroup",o.addToolForm),n.xp6(5),n.Q6J("disabled",!o.addToolForm.valid)}}class Z{constructor(e,o,r){this.bsModalRef=e,this.fb=o,this.httpService=r,this.toolAddedEvent=new n.vpe}ngOnInit(){this.initForm()}initForm(){this.addToolForm=this.fb.group({toolName:["",f.kI.required]})}onSubmit(){this.httpService.post("Tools",{toolName:this.addToolForm?.controls.toolName.value}).subscribe(o=>{this.bsModalRef.hide(),this.bsModalRef.onHide.emit(o)})}static#t=this.\u0275fac=function(o){return new(o||Z)(n.Y36(Pt.UZ),n.Y36(f.qu),n.Y36(q.O))};static#e=this.\u0275cmp=n.Xpm({type:Z,selectors:[["app-add-tool-modal"]],outputs:{toolAddedEvent:"toolAddedEvent"},decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","toolName",1,"form-label"],["type","text","id","toolName","formControlName","toolName",1,"form-control"],[1,"btn","btn-outline-primary",3,"disabled"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0)(1,"h4",1),n._uU(2,"Agregar Nueva herramienta"),n.qZA(),n.TgZ(3,"button",2),n.NdJ("click",function(){return r.bsModalRef.hide()}),n.TgZ(4,"span",3),n._uU(5,"\xd7"),n.qZA()()(),n.TgZ(6,"div",4),n.YNc(7,Le,7,2,"form",5),n.qZA(),n.TgZ(8,"div",6)(9,"button",7),n.NdJ("click",function(){return r.bsModalRef.hide()}),n._uU(10,"Cerrar"),n.qZA()()),2&o&&(n.xp6(7),n.Q6J("ngIf",r.addToolForm))},dependencies:[y.O5,f._Y,f.Fj,f.JJ,f.JL,f.sg,f.u]})}function qe(t,e){1&t&&(n.TgZ(0,"p",5),n._uU(1,"No se han registrado usuarios a\xfan."),n.qZA())}const Pe=function(t){return[t]};function $e(t,e){if(1&t&&(n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td")(6,"a",8),n._UZ(7,"fa-icon",9),n.qZA()()()),2&t){const o=e.$implicit,r=n.oxw(3);n.xp6(2),n.hij(" ",o.toolName," "),n.xp6(2),n.hij(" ",o.toolState.toolStateName," "),n.xp6(2),n.Q6J("routerLink",n.VKq(4,Pe,o.toolId)),n.xp6(1),n.Q6J("icon",r.faCircleInfo)}}function Me(t,e){if(1&t&&(n.TgZ(0,"table",6)(1,"thead")(2,"tr")(3,"th"),n._uU(4,"Nombre"),n.qZA(),n.TgZ(5,"th"),n._uU(6,"Estado"),n.qZA(),n._UZ(7,"th"),n.qZA()(),n.TgZ(8,"tbody"),n.YNc(9,$e,8,6,"tr",7),n.qZA()()),2&t){const o=n.oxw(2);n.xp6(9),n.Q6J("ngForOf",o.tools)}}function ke(t,e){if(1&t&&(n.TgZ(0,"div",1)(1,"div",2),n.YNc(2,qe,2,0,"p",3),n.YNc(3,Me,10,1,"table",4),n.qZA()()),2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngIf",!o.tools.length),n.xp6(1),n.Q6J("ngIf",o.tools.length)}}class I{constructor(){this.faPen=b.IwR,this.faTrash=b.$aW,this.faCircleInfo=b.DBf}static#t=this.\u0275fac=function(o){return new(o||I)};static#e=this.\u0275cmp=n.Xpm({type:I,selectors:[["app-tools-list"]],inputs:{tools:"tools"},decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col"],["class","text-center",4,"ngIf"],["class","table",4,"ngIf"],[1,"text-center"],[1,"table"],[4,"ngFor","ngForOf"],[3,"routerLink"],["role","button",1,"me-2","text-primary",3,"icon"]],template:function(o,r){1&o&&n.YNc(0,ke,4,2,"div",0),2&o&&n.Q6J("ngIf",r.tools)},dependencies:[y.sg,y.O5,T.rH,qt.BN]})}class U{constructor(e,o){this.modalService=e,this.httpService=o}ngOnInit(){this.getToolsList()}onOpenAddToolModal(){this.modalRef=this.modalService.show(Z),this.modalRef?.onHide&&this.modalRef.onHide.subscribe(e=>{!e.toolGuid||this.getToolsList()})}getToolsList(){this.httpService.get("Tools").subscribe(e=>this.tools=e)}static#t=this.\u0275fac=function(o){return new(o||U)(n.Y36(Pt.tT),n.Y36(q.O))};static#e=this.\u0275cmp=n.Xpm({type:U,selectors:[["app-tools-management"]],decls:9,vars:1,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"tools"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2,"Administraci\xf3n de equipos y herramienta"),n.qZA(),n.TgZ(3,"div",1)(4,"button",2),n.NdJ("click",function(){return r.onOpenAddToolModal()}),n._uU(5,"Agregar herramienta"),n.qZA()(),n.TgZ(6,"h4",1),n._uU(7,"Inventario de herramienta"),n.qZA(),n._UZ(8,"app-tools-list",3),n.qZA()),2&o&&(n.xp6(8),n.Q6J("tools",r.tools))},dependencies:[I]})}const Je=[{path:"",component:U},{path:":id",component:R}];class F{static#t=this.\u0275fac=function(o){return new(o||F)};static#e=this.\u0275mod=n.oAB({type:F});static#n=this.\u0275inj=n.cJS({imports:[T.Bz.forChild(Je),T.Bz]})}var De=m(8748);class L{static#t=this.\u0275fac=function(o){return new(o||L)};static#e=this.\u0275mod=n.oAB({type:L});static#n=this.\u0275inj=n.cJS({imports:[y.ez,F,De.m]})}}}]);