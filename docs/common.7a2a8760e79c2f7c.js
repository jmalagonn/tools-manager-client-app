"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[592],{860:(a,s,o)=>{o.d(s,{D:()=>t});var t=(()=>{return(n=t||(t={}))[n.info=0]="info",n[n.check=1]="check",n[n.warning=2]="warning",n[n.trash=3]="trash",n[n.edit=4]="edit",t;var n})()},6858:(a,s,o)=>{o.d(s,{O:()=>i});var t=o(2340),n=o(1571),c=o(529);class i{constructor(e){this.httpClient=e,this.api_url=t.N.apiUrl}get(e){return this.httpClient.get(this.api_url+e)}post(e,r){return this.httpClient.post(this.api_url+e,r)}put(e,r){return this.httpClient.put(this.api_url+e,r)}postWithOptions(e,r,p){return this.httpClient.post(this.api_url+e,r,p)}static#t=this.\u0275fac=function(r){return new(r||i)(n.LFG(c.eN))};static#n=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}},1875:(a,s,o)=>{o.d(s,{J:()=>e});var t=o(1571),n=o(6895),c=o(3077);function i(r,p){if(1&r){const _=t.EpF();t.TgZ(0,"li",6),t.NdJ("click",function(){const d=t.CHM(_).$implicit,m=t.oxw(2);return t.KtG(m.onSelectOption(d))}),t.TgZ(1,"p",7),t._uU(2),t.qZA()()}if(2&r){const _=p.$implicit;t.xp6(2),t.Oqu(_.description)}}function l(r,p){if(1&r&&(t.TgZ(0,"ul",4),t.YNc(1,i,3,1,"li",5),t.qZA()),2&r){const _=t.oxw();t.xp6(1),t.Q6J("ngForOf",_.options)}}class e{constructor(){this.onSelectOptionEvent=new t.vpe}onSelectOption(p){this.label=p.description,this.onSelectOptionEvent.emit(p)}static#t=this.\u0275fac=function(_){return new(_||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dropdown"]],inputs:{label:"label",options:"options"},outputs:{onSelectOptionEvent:"onSelectOptionEvent"},decls:5,vars:1,consts:[["dropdown","",1,"btn-group"],["dropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","btn-outline-dark","dropdown-toggle"],[1,"caret"],["class","dropdown-menu","role","menu",4,"dropdownMenu"],["role","menu",1,"dropdown-menu"],["role","menuitem","class","dp-item",3,"click",4,"ngFor","ngForOf"],["role","menuitem",1,"dp-item",3,"click"],["role","button",1,"m-0","ps-2","pe-2"]],template:function(_,u){1&_&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2),t._UZ(3,"span",2),t.qZA(),t.YNc(4,l,2,1,"ul",3),t.qZA()),2&_&&(t.xp6(2),t.hij(" ",u.selectedOption?u.selectedOption.description:u.label," "))},dependencies:[n.sg,c.Hz,c.Mq,c.TO],styles:[".dp-item[_ngcontent-%COMP%]:hover{background:rgba(200,200,200,.1)}"]})}},7129:(a,s,o)=>{o.d(s,{$:()=>n});var t=o(1571);class n{transform(i,l=6){return i.slice(-1*l)}static#t=this.\u0275fac=function(l){return new(l||n)};static#n=this.\u0275pipe=t.Yjl({name:"lastCharacters",type:n,pure:!0})}},7281:(a,s,o)=>{o.d(s,{s:()=>n});var t=o(1571);class n{transform(i,...l){const e=l[0],r=l[1];return i.map(p=>({id:p[e],description:p[r]}))}static#t=this.\u0275fac=function(l){return new(l||n)};static#n=this.\u0275pipe=t.Yjl({name:"toDropdownItem",type:n,pure:!0})}},2340:(a,s,o)=>{o.d(s,{N:()=>t});const t={production:!0,apiUrl:"https://toolsmanagerwebapi.azurewebsites.net/api/",filesUrl:""}}}]);