"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[592],{9127:(d,m,o)=>{o.d(m,{I:()=>p});var t=o(6895),r=o(1571);class p{static#t=this.\u0275fac=function(e){return new(e||p)};static#e=this.\u0275mod=r.oAB({type:p});static#n=this.\u0275inj=r.cJS({imports:[t.ez]})}},860:(d,m,o)=>{o.d(m,{D:()=>t});var t=(()=>{return(r=t||(t={}))[r.info=0]="info",r[r.check=1]="check",r[r.warning=2]="warning",r[r.trash=3]="trash",r[r.edit=4]="edit",t;var r})()},2368:(d,m,o)=>{o.d(m,{Y:()=>a});var t=o(1458),r=o(5698),p=o(1571),i=o(3143);class a{constructor(s){this.accountService=s,this.accountService.currentAccount$.pipe((0,r.q)(1)).subscribe(n=>this.user=n)}transform(s){return!!this.user&&(!!this.user.userRoles.some(n=>n.userRoleId==t.v.AppAdmin||n.userRoleId==t.v.CompanyAdmin)||this.user.userRoles.some(n=>n.userRoleId==s))}static#t=this.\u0275fac=function(n){return new(n||a)(p.Y36(i.B,16))};static#e=this.\u0275pipe=p.Yjl({name:"userRoles",type:a,pure:!0})}},6858:(d,m,o)=>{o.d(m,{O:()=>i});var t=o(529),r=o(2340),p=o(1571);class i{constructor(e){this.httpClient=e,this.api_url=r.N.apiUrl}get(e){return this.httpClient.get(this.api_url+e)}post(e,s){return new t.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+e,s)}put(e,s){return this.httpClient.put(this.api_url+e,s)}postFormData(e,s){const n=new t.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+e,s,{headers:n})}static#t=this.\u0275fac=function(s){return new(s||i)(p.LFG(t.eN))};static#e=this.\u0275prov=p.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}},1875:(d,m,o)=>{o.d(m,{J:()=>e});var t=o(1571),r=o(6895),p=o(9453);function i(s,n){if(1&s&&(t.TgZ(0,"label",6),t._uU(1),t.qZA()),2&s){const u=t.oxw();t.xp6(1),t.Oqu(u.label)}}function a(s,n){if(1&s){const u=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const C=t.CHM(u).$implicit,E=t.oxw();return t.KtG(E.onSelectOption(C))}),t.TgZ(1,"p",8),t._uU(2),t.qZA()()}if(2&s){const u=n.$implicit;t.xp6(2),t.Oqu(u.description)}}class e{constructor(){this.buttonText="Seleccionar",this.onSelectOptionEvent=new t.vpe}onSelectOption(n){this.buttonText=n.description,this.onSelectOptionEvent.emit(n)}static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dropdown"]],inputs:{label:"label",buttonText:"buttonText",options:"options"},outputs:{onSelectOptionEvent:"onSelectOptionEvent"},decls:7,vars:3,consts:[["ngbDropdown","",1,"app-dropdown"],["class","form-label",4,"ngIf"],["ngbDropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","app-dropdown--button"],[1,"caret"],["ngbDropdownMenu","","role","menu",1,"app-dropdown--menu"],["class","dp-item","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[1,"form-label"],["ngbDropdownItem","",1,"dp-item",3,"click"],["role","button",1,"m-0","ps-2","pe-2"]],template:function(u,h){1&u&&(t.TgZ(0,"div",0),t.YNc(1,i,2,1,"label",1),t.TgZ(2,"button",2),t._uU(3),t._UZ(4,"span",3),t.qZA(),t.TgZ(5,"ul",4),t.YNc(6,a,3,1,"li",5),t.qZA()()),2&u&&(t.xp6(1),t.Q6J("ngIf",h.label),t.xp6(2),t.hij(" ",h.selectedOption?h.selectedOption.description:h.buttonText," "),t.xp6(3),t.Q6J("ngForOf",h.options))},dependencies:[r.sg,r.O5,p.jt,p.iD,p.Vi,p.TH],styles:[".dp-item[_ngcontent-%COMP%]:hover{background:rgba(200,200,200,.1)}.app-dropdown--button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:1px solid #ced4da;width:100%}.app-dropdown--menu[_ngcontent-%COMP%]{max-height:200px;overflow:auto}"]})}},3741:(d,m,o)=>{o.d(m,{D:()=>i});var t=o(2687),r=o(1571),p=o(2216);class i{constructor(){this.faEdit=t.Xcf}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275cmp=r.Xpm({type:i,selectors:[["app-edit-model"]],decls:1,vars:1,consts:[["role","button",1,"ms-3",3,"icon"]],template:function(s,n){1&s&&r._UZ(0,"fa-icon",0),2&s&&r.Q6J("icon",n.faEdit)},dependencies:[p.BN],styles:["[_nghost-%COMP%]{display:inline-flex}fa-icon[_ngcontent-%COMP%]{color:#64646480;font-size:1rem}fa-icon[_ngcontent-%COMP%]:hover{color:#0d6efd}"]})}},9993:(d,m,o)=>{o.d(m,{w:()=>a});var t=o(1571),r=o(1481),p=o(6895);function i(e,s){if(1&e&&t._UZ(0,"img",1),2&e){const n=t.oxw();t.Q6J("src",n.imgSrc,t.LSH)}}class a{constructor(s){this.sanitizer=s}ngOnChanges(){this.generateImageThumbnail()}generateImageThumbnail(){!this.compImage&&!this.appFile||(this.imgSrc=this.appFile?this.appFile.url:this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.compImage)))}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(r.H7))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-image-thumbnail"]],inputs:{compImage:"compImage",appFile:"appFile"},features:[t.TTD],decls:1,vars:1,consts:[[3,"src",4,"ngIf"],[3,"src"]],template:function(n,u){1&n&&t.YNc(0,i,1,1,"img",0),2&n&&t.Q6J("ngIf",u.imgSrc)},dependencies:[p.O5],styles:["img[_ngcontent-%COMP%]{height:9rem;object-fit:contain;border-radius:.5rem}"]})}},8073:(d,m,o)=>{o.d(m,{H:()=>g});var t=o(1571),r=o(2771),p=o(6895),i=o(2216),a=o(2687),e=o(860);class s{constructor(){this.listActions=e.D,this.faEdit=a.Xcf}transform(l){return a.Xcf}static#t=this.\u0275fac=function(c){return new(c||s)};static#e=this.\u0275pipe=t.Yjl({name:"listActionIcon",type:s,pure:!0})}function n(_,l){if(1&_&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&_){const c=l.$implicit;t.xp6(1),t.hij(" ",c," ")}}function u(_,l){1&_&&(t.TgZ(0,"th"),t._uU(1," Acciones "),t.qZA())}function h(_,l){if(1&_){const c=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){const P=t.CHM(c).$implicit,I=t.oxw(2).$implicit,O=t.oxw(2);return t.KtG(O.actionButtonClicked(P,I))}),t._UZ(1,"fa-icon",9),t.ALo(2,"listActionIcon"),t.qZA()}if(2&_){const c=l.$implicit;t.xp6(1),t.Q6J("icon",t.lcZ(2,1,c))}}function T(_,l){if(1&_&&(t.TgZ(0,"td"),t.YNc(1,h,3,3,"button",7),t.qZA()),2&_){const c=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",c.actions)}}function C(_,l){if(1&_){const c=t.EpF();t.TgZ(0,"tr",6),t.NdJ("click",function(b){const I=t.CHM(c).$implicit,O=t.oxw(2);return t.KtG(O.onRowClicked(b,I))}),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.YNc(5,T,2,1,"td",4),t.qZA()}if(2&_){const c=l.$implicit,f=t.oxw(2);t.xp6(2),t.hij(" ",c.id," "),t.xp6(2),t.hij(" ",c.name," "),t.xp6(1),t.Q6J("ngIf",f.actions)}}function E(_,l){if(1&_&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr"),t.YNc(3,n,2,1,"th",3),t.YNc(4,u,2,0,"th",4),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,C,6,3,"tr",5),t.qZA()()),2&_){const c=t.oxw();t.xp6(3),t.Q6J("ngForOf",c.headers),t.xp6(1),t.Q6J("ngIf",c.actions),t.xp6(2),t.Q6J("ngForOf",c.items)}}function M(_,l){1&_&&(t.TgZ(0,"p",10),t._uU(1," No se encontraron elementos\n"),t.qZA())}class g{constructor(){this.headers=r.$x.itemsListDefault,this.rowClickedEvent=new t.vpe,this.actionButtonClickedEvent=new t.vpe}onRowClicked(l,c){l.composedPath().some(f=>"svg"===f.tagName)||this.rowClickedEvent.emit(c)}actionButtonClicked(l,c){this.actionButtonClickedEvent.emit({action:l,item:c})}static#t=this.\u0275fac=function(c){return new(c||g)};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-items-list"]],inputs:{items:"items",actions:"actions",headers:"headers"},outputs:{rowClickedEvent:"rowClickedEvent",actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table table-hover",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"],["class","action-button","type","button",3,"click",4,"ngFor","ngForOf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-center"]],template:function(c,f){1&c&&(t.YNc(0,E,7,3,"table",0),t.YNc(1,M,2,0,"p",1)),2&c&&(t.Q6J("ngIf",f.items&&f.items.length),t.xp6(1),t.Q6J("ngIf",f.items&&!f.items.length))},dependencies:[p.sg,p.O5,i.BN,s],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}.action-button[_ngcontent-%COMP%]:hover{color:#000}"]})}},7129:(d,m,o)=>{o.d(m,{$:()=>r});var t=o(1571);class r{transform(i,a=6){return i.slice(-1*a)}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275pipe=t.Yjl({name:"lastCharacters",type:r,pure:!0})}},7281:(d,m,o)=>{o.d(m,{s:()=>r});var t=o(1571);class r{transform(i,a=""){if(!i)return new Array;switch(a){case"user":case"employee":return i.map(n=>({id:n.userId,description:n.name}));case"customer":return i.map(n=>({id:n.customerId,description:n.customerName}));case"branch":return i.map(n=>({id:n.branchId,description:n.branchName}));case"equipment":return i.map(n=>({id:n.equipmentId,description:n.equipmentName}));case"workItemActivityLog":return i.map(n=>({id:n.workItemActivityLogId,description:n.description}));case"equipmentParameter":return i.map(n=>({id:n.equipmentParameterId,description:`${n.name} | Magnitud: ${n.measurementUnitSymbol}`}));case"measurementUnits":return i.map(n=>({id:n.measurementUnitId,description:"NA"==n.displayName?"NA":`${n.displayName} (${n.symbol})`}));default:const{idPropName:e,descriptionPropName:s}=this.findProperties(i[0]);return i.map(n=>({id:n[e],description:n[s]}))}}findProperties(i){let a="",e="";for(let s in i)s.match(/id/i)?.length&&(a=s),(s.match(/name/i)?.length||s.includes("Description"))&&(e=s);return{idPropName:a,descriptionPropName:e}}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275pipe=t.Yjl({name:"toDropdownItem",type:r,pure:!0})}},5090:(d,m,o)=>{o.d(m,{R:()=>r});var t=o(1571);class r{transform(i,a){if(!i)return new Array;switch(a){case"user":return i.map(e=>({id:e.userId,name:e.name}));case"customer":return i.map(e=>({id:e.customerId,name:e.customerName}));case"branch":return i.map(e=>({id:e.branchId,name:e.branchName}));case"equipment":return i.map(e=>({id:e.equipmentId,name:e.equipmentName}));case"workItemActivityLog":return i.map(e=>({id:e.workItemActivityLogId,name:e.description}));case"equipmentParameter":return i.map(e=>({id:e.equipmentParameterId,name:`${e.name} | Magnitud: ${e.measurementUnitSymbol}`}));case"measurementUnits":return i.map(e=>({id:e.measurementUnitId,name:`${e.displayName} (${e.symbol})`}));case"toolParameter":return i.map(e=>({id:e.id,name:e.measurementUnitSymbol?`${e.name} | Magnitud: ${e.measurementUnitSymbol}`:`${e.name}`}));case"tool":return i.map(e=>({id:e.toolGuid.slice(-6),name:e.toolName}));default:return new Array}}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275pipe=t.Yjl({name:"toItemList",type:r,pure:!0})}},1066:(d,m,o)=>{o.d(m,{$:()=>r});var t=o(1571);class r{transform(i){if(!i)return"";switch(i.workStateId){case 1:return"Abierta";case 2:return"En proceso";case 3:return"Cerrada";default:return""}}static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275pipe=t.Yjl({name:"workState",type:r,pure:!0})}},2340:(d,m,o)=>{o.d(m,{N:()=>t});const t={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);