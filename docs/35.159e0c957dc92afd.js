"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[35],{7323:(U,p,o)=>{o.d(p,{G:()=>l});class l{static#t=this.addUserApi="Users/addUser";static#e=this.branchesApi="Branches";static#s=this.customersApi="Customers";static#i=this.equipmentApi="Equipment";static#o=this.equipmentParametersApi="Equipment/parameters";static#n=this.measurementUnitsApi="MeasurementUnits";static#r=this.userApi="Users";static#l=this.userEmployeeApi="Users/employee";static#a=this.userEmployeesApi="Users/employees";static#c=this.userRolesApi="UserRole";static#p=this.workItemActivityLogApi="WorkItem/workItemActivityLog";static#d=this.workItemApi="WorkItem";static#u=this.workOrderApi="WorkOrder";static#m=this.workOrderTypesApi=`${this.workOrderApi}/workOrderTypes`;static#_=this.toolsApi="Tools";static#h=this.toolParametersApi="Tools/parameters";static#f=this.toolOutputsApi="ToolOutputs";static#g=this.workStateApi="WorkState"}},7035:(U,p,o)=>{o.r(p),o.d(p,{GeneralSettingsModule:()=>T});var l=o(6895),m=o(6619),_=o(9127),d=o(8869),t=o(1571),n=o(7323);class a{static#t=this.roleNameUpdated="El nombre del rol ha sido actualizado."}var h=o(6858),v=o(7185),E=o(2687),f=o(433),x=o(2216);function b(r,s){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"td")(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"td",7)(5,"fa-icon",8),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.onClickEditButton(u))}),t.qZA()(),t.BQk()}if(2&r){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(3),t.Oqu(e.displayName),t.xp6(2),t.Q6J("icon",i.faEdit)}}function y(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"td")(1,"input",9),t.NdJ("ngModelChange",function(u){t.CHM(e);const c=t.oxw(3);return t.KtG(c.roleDisplayName=u)}),t.qZA()(),t.TgZ(2,"td",7)(3,"fa-icon",10),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.onClickSaveButton(u))}),t.qZA(),t.TgZ(4,"fa-icon",8),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.onClickCancelButton(u))}),t.qZA()()}if(2&r){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("value",e.displayName)("ngModel",i.roleDisplayName),t.uIk("id","role-"+e.id),t.xp6(2),t.Q6J("icon",i.faSave),t.xp6(1),t.Q6J("icon",i.faX)}}function O(r,s){if(1&r&&(t.TgZ(0,"tr")(1,"td",4),t._uU(2),t.qZA(),t.YNc(3,b,6,2,"ng-container",5),t.YNc(4,y,5,5,"ng-template",null,6,t.W1O),t.qZA()),2&r){const e=s.$implicit,i=t.MAs(5);t.xp6(2),t.Oqu(e.id),t.xp6(1),t.Q6J("ngIf",!e.isEditing)("ngIfElse",i)}}function Z(r,s){if(1&r&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr")(3,"th",2),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th",2),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"th",2),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,O,6,3,"tr",3),t.qZA()()),2&r){const e=t.oxw();t.xp6(9),t.Q6J("ngForOf",e.editableUserRoles)}}class g{constructor(s){this.fb=s,this.faEdit=E.Xcf,this.faX=E.EOp,this.faSave=E.r6l,this.editableUserRoles=[],this.userRoleEditedEvent=new t.vpe}ngOnChanges(s){this.userRoles&&(this.editableUserRoles=this.userRoles.map(e=>({...e,isEditing:!1})))}onClickEditButton(s){this.roleDisplayName=s.displayName;const e=this.editableUserRoles.findIndex(i=>i.id==s.id);this.editableUserRoles[e].isEditing=!0}onClickSaveButton(s){const e=this.editableUserRoles.findIndex(i=>i.id==s.id);this.editableUserRoles[e].displayName=this.roleDisplayName,this.editableUserRoles[e].isEditing=!1,this.userRoleEditedEvent.emit(this.editableUserRoles[e])}onClickCancelButton(s){const e=this.editableUserRoles.findIndex(i=>i.id==s.id);this.editableUserRoles[e].isEditing=!1}static#t=this.\u0275fac=function(e){return new(e||g)(t.Y36(f.qu))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-user-roles-table"]],inputs:{userRoles:"userRoles"},outputs:{userRoleEditedEvent:"userRoleEditedEvent"},features:[t.TTD],decls:1,vars:1,consts:[["class","table",4,"ngIf"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[4,"ngIf","ngIfElse"],["isEditingRole",""],[1,"text-center"],["role","button",3,"icon","click"],["type","text",1,"form-control",3,"value","ngModel","ngModelChange"],["role","button",1,"me-2",3,"icon","click"]],template:function(e,i){1&e&&t.YNc(0,Z,10,1,"table",0),2&e&&t.Q6J("ngIf",i.editableUserRoles.length)},dependencies:[l.sg,l.O5,x.BN,f.Fj,f.JJ,f.On],styles:[".form-control[_ngcontent-%COMP%]{padding-top:.2rem;padding-bottom:.2rem;height:1.3125rem;font-size:.8rem}fa-icon[_ngcontent-%COMP%]{color:#adb5bd}fa-icon[_ngcontent-%COMP%]:hover{color:#0d6efd}"]})}class A{constructor(s,e){this.httpService=s,this.toastr=e}ngOnInit(){this.getUserRoles()}getUserRoles(){this.httpService.get(n.G.userRolesApi).subscribe(s=>this.userRoles=s)}onUserRoleEdited(s){if(!this.userRoles)return;const e=this.userRoles.findIndex(i=>i.id==s.id);this.httpService.put(n.G.userRolesApi,s).subscribe(i=>{this.userRoles[e]=i,this.toastr.success(a.roleNameUpdated)})}static#t=this.\u0275fac=function(e){return new(e||A)(t.Y36(h.O),t.Y36(v._W))};static#e=this.\u0275cmp=t.Xpm({type:A,selectors:[["app-user-roles"]],decls:4,vars:1,consts:[[3,"userRoles","userRoleEditedEvent"]],template:function(e,i){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Roles de usuario"),t.qZA(),t.TgZ(2,"div")(3,"app-user-roles-table",0),t.NdJ("userRoleEditedEvent",function(c){return i.onUserRoleEdited(c)}),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("userRoles",i.userRoles))},dependencies:[g]})}class C{static#t=this.\u0275fac=function(e){return new(e||C)};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-general-settings"]],decls:6,vars:0,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"row"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Configuraci\xf3n general"),t.qZA(),t.TgZ(3,"section")(4,"div",2),t._UZ(5,"app-user-roles"),t.qZA()()())},dependencies:[A]})}const I=[{path:"",component:C}];class R{static#t=this.\u0275fac=function(e){return new(e||R)};static#e=this.\u0275mod=t.oAB({type:R});static#s=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(I),d.Bz]})}class T{static#t=this.\u0275fac=function(e){return new(e||T)};static#e=this.\u0275mod=t.oAB({type:T});static#s=this.\u0275inj=t.cJS({imports:[l.ez,R,m.m,_.I]})}},6858:(U,p,o)=>{o.d(p,{O:()=>d});var l=o(529),m=o(2340),_=o(1571);class d{constructor(n){this.httpClient=n,this.api_url=m.N.apiUrl}get(n){return this.httpClient.get(this.api_url+n)}post(n,a){return new l.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+n,a)}put(n,a){return this.httpClient.put(this.api_url+n,a)}postFormData(n,a){const h=new l.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+n,a,{headers:h})}static#t=this.\u0275fac=function(a){return new(a||d)(_.LFG(l.eN))};static#e=this.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}},2340:(U,p,o)=>{o.d(p,{N:()=>l});const l={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);