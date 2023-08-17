"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[949],{1949:(A,p,o)=>{o.r(p),o.d(p,{GeneralSettingsModule:()=>g});var r=o(6895),C=o(6619),d=o(9127),a=o(8869),t=o(1571),i=o(2771),c=o(6858),u=o(2687),x=o(2216);function R(l,n){if(1&l){const e=t.EpF();t.ynx(0),t.TgZ(1,"td")(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"td",7)(5,"fa-icon",8),t.NdJ("click",function(){t.CHM(e);const T=t.oxw().$implicit,U=t.oxw(2);return t.KtG(U.onClickEditButton(T))}),t.qZA()(),t.BQk()}if(2&l){const e=t.oxw().$implicit,s=t.oxw(2);t.xp6(3),t.Oqu(e.displayName),t.xp6(2),t.Q6J("icon",s.faEdit)}}function v(l,n){if(1&l){const e=t.EpF();t.TgZ(0,"td"),t._UZ(1,"input",9),t.qZA(),t.TgZ(2,"td",7)(3,"fa-icon",8),t.NdJ("click",function(){t.CHM(e);const T=t.oxw().$implicit,U=t.oxw(2);return t.KtG(U.onClickCancelButton(T))}),t.qZA()()}if(2&l){const e=t.oxw().$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("value",e.displayName),t.xp6(2),t.Q6J("icon",s.faX)}}function Z(l,n){if(1&l&&(t.TgZ(0,"tr")(1,"td",4),t._uU(2),t.qZA(),t.YNc(3,R,6,2,"ng-container",5),t.YNc(4,v,4,2,"ng-template",null,6,t.W1O),t.qZA()),2&l){const e=n.$implicit,s=t.MAs(5);t.xp6(2),t.Oqu(e.id),t.xp6(1),t.Q6J("ngIf",!e.isEditing)("ngIfElse",s)}}function b(l,n){if(1&l&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr")(3,"th",2),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th",2),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"th",2),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,Z,6,3,"tr",3),t.qZA()()),2&l){const e=t.oxw();t.xp6(9),t.Q6J("ngForOf",e.editableUserRole)}}class m{constructor(){this.faEdit=u.Xcf,this.faX=u.EOp,this.faSave=u.r6l,this.editableUserRole=[]}ngOnChanges(n){this.userRoles&&(this.editableUserRole=this.userRoles.map(e=>({...e,isEditing:!1})))}onClickEditButton(n){const e=this.editableUserRole.findIndex(s=>s.id==n.id);this.editableUserRole[e].isEditing=!0}onClickSaveButton(){}onClickCancelButton(n){const e=this.editableUserRole.findIndex(s=>s.id==n.id);this.editableUserRole[e].isEditing=!1}static#t=this.\u0275fac=function(e){return new(e||m)};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-user-roles-table"]],inputs:{userRoles:"userRoles"},features:[t.TTD],decls:1,vars:1,consts:[["class","table",4,"ngIf"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[4,"ngIf","ngIfElse"],["isEditingRole",""],[1,"text-center"],["role","button",3,"icon","click"],["type","text",1,"form-control",3,"value"]],template:function(e,s){1&e&&t.YNc(0,b,10,1,"table",0),2&e&&t.Q6J("ngIf",s.editableUserRole.length)},dependencies:[r.sg,r.O5,x.BN],styles:[".form-control[_ngcontent-%COMP%]{padding-top:.2rem;padding-bottom:.2rem;height:1.3125rem;font-size:.8rem}fa-icon[_ngcontent-%COMP%]{color:#adb5bd}fa-icon[_ngcontent-%COMP%]:hover{color:#0d6efd}"]})}class h{constructor(n){this.httpService=n}ngOnInit(){this.getUserRoles()}getUserRoles(){this.httpService.get(i.G8.userRolesApi).subscribe(n=>this.userRoles=n)}static#t=this.\u0275fac=function(e){return new(e||h)(t.Y36(c.O))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-user-roles"]],decls:4,vars:1,consts:[[3,"userRoles"]],template:function(e,s){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Roles de usuario"),t.qZA(),t.TgZ(2,"div"),t._UZ(3,"app-user-roles-table",0),t.qZA()),2&e&&(t.xp6(3),t.Q6J("userRoles",s.userRoles))},dependencies:[m]})}class f{static#t=this.\u0275fac=function(e){return new(e||f)};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-general-settings"]],decls:6,vars:0,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"row"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Configuraci\xf3n general"),t.qZA(),t.TgZ(3,"section")(4,"div",2),t._UZ(5,"app-user-roles"),t.qZA()()())},dependencies:[h]})}const E=[{path:"",component:f}];class _{static#t=this.\u0275fac=function(e){return new(e||_)};static#e=this.\u0275mod=t.oAB({type:_});static#n=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(E),a.Bz]})}class g{static#t=this.\u0275fac=function(e){return new(e||g)};static#e=this.\u0275mod=t.oAB({type:g});static#n=this.\u0275inj=t.cJS({imports:[r.ez,_,C.m,d.I]})}},6858:(A,p,o)=>{o.d(p,{O:()=>a});var r=o(529),C=o(2340),d=o(1571);class a{constructor(i){this.httpClient=i,this.api_url=C.N.apiUrl}get(i){return this.httpClient.get(this.api_url+i)}post(i,c){return new r.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+i,c)}put(i,c){return this.httpClient.put(this.api_url+i,c)}postFormData(i,c){const u=new r.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+i,c,{headers:u})}static#t=this.\u0275fac=function(c){return new(c||a)(d.LFG(r.eN))};static#e=this.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}},2340:(A,p,o)=>{o.d(p,{N:()=>r});const r={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);