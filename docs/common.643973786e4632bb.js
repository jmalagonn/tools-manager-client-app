"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[592],{860:(_,d,r)=>{r.d(d,{D:()=>t});var t=(()=>{return(i=t||(t={}))[i.info=0]="info",i[i.check=1]="check",i[i.warning=2]="warning",i[i.trash=3]="trash",i[i.edit=4]="edit",t;var i})()},6858:(_,d,r)=>{r.d(d,{O:()=>o});var t=r(2340),i=r(1571),u=r(529);class o{constructor(e){this.httpClient=e,this.api_url=t.N.apiUrl}get(e){return this.httpClient.get(this.api_url+e)}post(e,c){return this.httpClient.post(this.api_url+e,c)}put(e,c){return this.httpClient.put(this.api_url+e,c)}postWithOptions(e,c,n){return this.httpClient.post(this.api_url+e,c,n)}static#t=this.\u0275fac=function(c){return new(c||o)(i.LFG(u.eN))};static#e=this.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}},1875:(_,d,r)=>{r.d(d,{J:()=>a});var t=r(1571),i=r(6895),u=r(9453);function o(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"li",5),t.NdJ("click",function(){const g=t.CHM(n).$implicit,b=t.oxw();return t.KtG(b.onSelectOption(g))}),t.TgZ(1,"p",6),t._uU(2),t.qZA()()}if(2&e){const n=c.$implicit;t.xp6(2),t.Oqu(n.description)}}class a{constructor(){this.label="Seleccionar",this.onSelectOptionEvent=new t.vpe}onSelectOption(c){this.label=c.description,this.onSelectOptionEvent.emit(c)}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-dropdown"]],inputs:{label:"label",options:"options"},outputs:{onSelectOptionEvent:"onSelectOptionEvent"},decls:6,vars:2,consts:[["ngbDropdown","",1,"app-dropdown"],["ngbDropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","app-dropdown--button"],[1,"caret"],["ngbDropdownMenu","","role","menu",1,"app-dropdown--menu"],["class","dp-item","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],["ngbDropdownItem","",1,"dp-item",3,"click"],["role","button",1,"m-0","ps-2","pe-2"]],template:function(n,h){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2),t._UZ(3,"span",2),t.qZA(),t.TgZ(4,"ul",3),t.YNc(5,o,3,1,"li",4),t.qZA()()),2&n&&(t.xp6(2),t.hij(" ",h.selectedOption?h.selectedOption.description:h.label," "),t.xp6(3),t.Q6J("ngForOf",h.options))},dependencies:[i.sg,u.jt,u.iD,u.Vi,u.TH],styles:[".dp-item[_ngcontent-%COMP%]:hover{background:rgba(200,200,200,.1)}.app-dropdown--button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:1px solid #ced4da;width:100%}.app-dropdown--menu[_ngcontent-%COMP%]{max-height:200px;overflow:auto}"]})}},8073:(_,d,r)=>{r.d(d,{H:()=>f});var t=r(1571),i=r(3131),u=r(6895),o=r(2216),a=r(2687),e=r(860);class c{constructor(){this.listActions=e.D,this.faEdit=a.Xcf}transform(m){return a.Xcf}static#t=this.\u0275fac=function(s){return new(s||c)};static#e=this.\u0275pipe=t.Yjl({name:"listActionIcon",type:c,pure:!0})}function n(p,m){if(1&p&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&p){const s=m.$implicit;t.xp6(1),t.hij(" ",s," ")}}function h(p,m){1&p&&(t.TgZ(0,"th"),t._uU(1," Acciones "),t.qZA())}function w(p,m){if(1&p){const s=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){const E=t.CHM(s).$implicit,C=t.oxw(2).$implicit,I=t.oxw(2);return t.KtG(I.actionButtonClicked(E,C))}),t._UZ(1,"fa-icon",9),t.ALo(2,"listActionIcon"),t.qZA()}if(2&p){const s=m.$implicit;t.xp6(1),t.Q6J("icon",t.lcZ(2,1,s))}}function g(p,m){if(1&p&&(t.TgZ(0,"td"),t.YNc(1,w,3,3,"button",7),t.qZA()),2&p){const s=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",s.actions)}}function b(p,m){if(1&p){const s=t.EpF();t.TgZ(0,"tr",6),t.NdJ("click",function(O){const C=t.CHM(s).$implicit,I=t.oxw(2);return t.KtG(I.onRowClicked(O,C))}),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.YNc(5,g,2,1,"td",4),t.qZA()}if(2&p){const s=m.$implicit,l=t.oxw(2);t.xp6(2),t.hij(" ",s.id," "),t.xp6(2),t.hij(" ",s.name," "),t.xp6(1),t.Q6J("ngIf",l.actions)}}function T(p,m){if(1&p&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr"),t.YNc(3,n,2,1,"th",3),t.YNc(4,h,2,0,"th",4),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,b,6,3,"tr",5),t.qZA()()),2&p){const s=t.oxw();t.xp6(3),t.Q6J("ngForOf",s.headers),t.xp6(1),t.Q6J("ngIf",s.actions),t.xp6(2),t.Q6J("ngForOf",s.items)}}function y(p,m){1&p&&(t.TgZ(0,"p",10),t._uU(1," No se encontraron elementos\n"),t.qZA())}class f{constructor(){this.headers=i.$x.itemsListDefault,this.rowClickedEvent=new t.vpe,this.actionButtonClickedEvent=new t.vpe}onRowClicked(m,s){m.composedPath().some(l=>"svg"===l.tagName)||this.rowClickedEvent.emit(s)}actionButtonClicked(m,s){this.actionButtonClickedEvent.emit({action:m,item:s})}static#t=this.\u0275fac=function(s){return new(s||f)};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-items-list"]],inputs:{items:"items",actions:"actions",headers:"headers"},outputs:{rowClickedEvent:"rowClickedEvent",actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table table-hover",4,"ngIf"],["class","text-center mt-3",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"],["class","action-button","type","button",3,"click",4,"ngFor","ngForOf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-center","mt-3"]],template:function(s,l){1&s&&(t.YNc(0,T,7,3,"table",0),t.YNc(1,y,2,0,"p",1)),2&s&&(t.Q6J("ngIf",l.items&&l.items.length),t.xp6(1),t.Q6J("ngIf",l.items&&!l.items.length))},dependencies:[u.sg,u.O5,o.BN,c],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}.action-button[_ngcontent-%COMP%]:hover{color:#000}"]})}},7129:(_,d,r)=>{r.d(d,{$:()=>i});var t=r(1571);class i{transform(o,a=6){return o.slice(-1*a)}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275pipe=t.Yjl({name:"lastCharacters",type:i,pure:!0})}},7281:(_,d,r)=>{r.d(d,{s:()=>i});var t=r(1571);class i{transform(o,a=""){if(!o)return new Array;switch(a){case"user":case"employee":return o.map(n=>({id:n.userId,description:n.name}));case"customer":return o.map(n=>({id:n.customerId,description:n.customerName}));case"branch":return o.map(n=>({id:n.branchId,description:n.branchName}));case"equipment":return o.map(n=>({id:n.equipmentId,description:n.equipmentName}));case"workItemActivityLog":return o.map(n=>({id:n.workItemActivityLogId,description:n.description}));case"equipmentParameter":return o.map(n=>({id:n.equipmentParameterId,description:`${n.name} | Magnitud: ${n.measurementUnitSymbol}`}));case"measurementUnits":return o.map(n=>({id:n.measurementUnitId,description:`${n.displayName} (${n.symbol})`}));default:const{idPropName:e,descriptionPropName:c}=this.findProperties(o[0]);return o.map(n=>({id:n[e],description:n[c]}))}}findProperties(o){let a="",e="";for(let c in o)c.includes("Id")&&(a=c),(c.includes("Name")||c.includes("Description"))&&(e=c);return{idPropName:a,descriptionPropName:e}}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275pipe=t.Yjl({name:"toDropdownItem",type:i,pure:!0})}},5090:(_,d,r)=>{r.d(d,{R:()=>i});var t=r(1571);class i{transform(o,a){if(!o)return new Array;switch(a){case"user":return o.map(e=>({id:e.userId,name:e.name}));case"customer":return o.map(e=>({id:e.customerId,name:e.customerName}));case"branch":return o.map(e=>({id:e.branchId,name:e.branchName}));case"equipment":return o.map(e=>({id:e.equipmentId,name:e.equipmentName}));case"workItemActivityLog":return o.map(e=>({id:e.workItemActivityLogId,name:e.description}));case"equipmentParameter":return o.map(e=>({id:e.equipmentParameterId,name:`${e.name} | Magnitud: ${e.measurementUnitSymbol}`}));case"measurementUnits":return o.map(e=>({id:e.measurementUnitId,name:`${e.displayName} (${e.symbol})`}));default:return new Array}}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275pipe=t.Yjl({name:"toItemList",type:i,pure:!0})}},2340:(_,d,r)=>{r.d(d,{N:()=>t});const t={production:!0,apiUrl:"https://toolsmanagerwebapi.azurewebsites.net/api/",filesUrl:""}}}]);