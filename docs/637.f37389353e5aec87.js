"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[637],{7323:(U,p,i)=>{i.d(p,{G:()=>r});class r{static#t=this.addUserApi="Users/addUser";static#e=this.branchesApi="Branches";static#i=this.customersApi="Customers";static#s=this.equipmentApi="Equipment";static#o=this.equipmentParametersApi="Equipment/parameters";static#n=this.measurementUnitsApi="MeasurementUnits";static#r=this.userApi="Users";static#a=this.userEmployeeApi="Users/employee";static#c=this.userEmployeesApi="Users/employees";static#u=this.userRolesApi="UserRole";static#l=this.workItemActivityLogApi="WorkItem/workItemActivityLog";static#p=this.workItemApi="WorkItem";static#d=this.workOrderApi="WorkOrder";static#m=this.workOrderTypesApi=`${this.workOrderApi}/workOrderTypes`;static#f=this.toolsApi="Tools";static#_=this.toolParametersApi="Tools/parameters";static#h=this.toolOutputsApi="ToolOutputs";static#g=this.workStateApi="WorkState"}},637:(U,p,i)=>{i.r(p),i.d(p,{ProfileModule:()=>A});var r=i(6895),m=i(2687),f=i(5698),d=i(7323),t=i(1571),a=i(3143),l=i(6858),_=i(3741);function E(o,s){if(1&o&&(t.TgZ(0,"div",1)(1,"div",2)(2,"p")(3,"b"),t._uU(4,"Nombre: "),t.qZA(),t._uU(5),t.qZA()(),t.TgZ(6,"div",2)(7,"p")(8,"b"),t._uU(9,"Email: "),t.qZA(),t._uU(10),t.qZA()(),t.TgZ(11,"div",2)(12,"p")(13,"b"),t._uU(14,"Identificaci\xf3n: "),t.qZA(),t._uU(15),t.qZA()(),t.TgZ(16,"div",2)(17,"p")(18,"b"),t._uU(19,"Direcci\xf3n: "),t.qZA(),t._uU(20),t.qZA()(),t.TgZ(21,"div",2)(22,"p")(23,"b"),t._uU(24,"Tel\xe9fono: "),t.qZA(),t._uU(25),t.qZA()(),t.TgZ(26,"div",2)(27,"p")(28,"b"),t._uU(29,"Empresa: "),t.qZA(),t._uU(30),t.qZA()()()),2&o){const e=t.oxw();t.xp6(5),t.Oqu(e.user.name),t.xp6(5),t.Oqu(e.user.email),t.xp6(5),t.Oqu(e.user.idCard),t.xp6(5),t.Oqu(e.user.address||"-"),t.xp6(5),t.Oqu(e.user.phone||"-"),t.xp6(5),t.Oqu(e.user.company.companyName)}}class h{static#t=this.\u0275fac=function(e){return new(e||h)};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-user-info"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","row mt-3 g-2",4,"ngIf"],[1,"row","mt-3","g-2"],[1,"col-lg-4","col-sm-6"]],template:function(e,n){1&e&&t.YNc(0,E,31,6,"div",0),2&e&&t.Q6J("ngIf",n.user)},dependencies:[r.O5]})}var c=i(433);function C(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.onSubmit())}),t.TgZ(1,"div",2)(2,"div",3)(3,"label",4),t._uU(4,"Nombre"),t.qZA(),t._UZ(5,"input",5),t.qZA(),t.TgZ(6,"div",3)(7,"label",6),t._uU(8,"No. de identificaci\xf3n"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",3)(11,"label",8),t._uU(12,"Email"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",3)(15,"label",10),t._uU(16,"Direcci\xf3n"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",3)(19,"label",12),t._uU(20,"Tel\xe9fono"),t.qZA(),t._UZ(21,"input",13),t.qZA()(),t.TgZ(22,"div",14)(23,"button",15),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.cancelEditEvent.emit())}),t._uU(24,"Cancelar"),t.qZA(),t.TgZ(25,"button",16),t._uU(26,"Guardar"),t.qZA()()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.userForm),t.xp6(25),t.Q6J("disabled",!e.userForm.dirty&&e.userForm.valid)}}class g{constructor(s,e){this.fb=s,this.httpService=e,this.cancelEditEvent=new t.vpe,this.updatedUserEvent=new t.vpe}ngOnInit(){this.initForm()}initForm(){this.userForm=this.fb.group({address:[this.user.address],email:[this.user.email,c.kI.required],idCard:[this.user.idCard,c.kI.required],name:[this.user.name,c.kI.required],phone:[this.user.phone]})}onSubmit(){this.userForm.valid&&this.httpService.put(d.G.userApi,{address:this.userForm.controls.address.value,company:this.user.company,email:this.userForm.controls.email.value,idCard:this.userForm.controls.idCard.value,name:this.userForm.controls.name.value,phone:this.userForm.controls.phone.value,userId:this.user.userId}).subscribe(()=>this.updatedUserEvent.emit())}static#t=this.\u0275fac=function(e){return new(e||g)(t.Y36(c.qu),t.Y36(l.O))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-edit-user-info"]],inputs:{user:"user"},outputs:{cancelEditEvent:"cancelEditEvent",updatedUserEvent:"updatedUserEvent"},decls:1,vars:1,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row","g-2"],[1,"col-lg-4","col-sm-6"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name",1,"form-control"],["for","idCard",1,"form-label"],["type","number","id","idCard","formControlName","idCard",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","formControlName","email",1,"form-control"],["for","address",1,"form-label"],["type","text","id","address","formControlName","address",1,"form-control"],["for","phone",1,"form-label"],["type","text","id","phone","formControlName","phone",1,"form-control"],[1,"action-buttons","d-flex","justify-content-center","mt-3"],["type","button",1,"btn","btn-outline-danger","me-2",3,"click"],["type","submit",1,"btn","btn-outline-primary",3,"disabled"]],template:function(e,n){1&e&&t.YNc(0,C,27,2,"form",0),2&e&&t.Q6J("ngIf",n.userForm)},dependencies:[r.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u]})}function Z(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-edit-model",5),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.setEditingProfile(!0))}),t.qZA()}}function T(o,s){if(1&o&&t._UZ(0,"app-user-info",6),2&o){const e=t.oxw();t.Q6J("user",e.user)}}function b(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-edit-user-info",7),t.NdJ("cancelEditEvent",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.setEditingProfile(!1))})("updatedUserEvent",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.onUpdateUser())}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("user",e.user)}}class v{constructor(s,e){this.accountService=s,this.httpService=e,this.faEdit=m.Xcf,this.editingProfile=!1,this.accountService.currentAccount$.pipe((0,f.q)(1)).subscribe(n=>this.account=n)}ngOnInit(){this.getUser()}getUser(){this.httpService.get(`${d.G.userApi}/${this.account.userId}`).subscribe(s=>this.user=s)}setEditingProfile(s){this.editingProfile=s}onUpdateUser(){this.setEditingProfile(!1),this.getUser()}static#t=this.\u0275fac=function(e){return new(e||v)(t.Y36(a.B),t.Y36(l.O))};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-profile"]],decls:8,vars:3,consts:[[1,"container","mt-3"],[1,"d-flex","justify-content-center","align-items-center"],["class","d-inline-flex",3,"click",4,"ngIf"],[3,"user",4,"ngIf","ngIfElse"],["editingUserProfile",""],[1,"d-inline-flex",3,"click"],[3,"user"],[3,"user","cancelEditEvent","updatedUserEvent"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"h1",1)(2,"span"),t._uU(3,"Perfil"),t.qZA(),t.YNc(4,Z,1,0,"app-edit-model",2),t.qZA(),t.YNc(5,T,1,1,"app-user-info",3),t.YNc(6,b,1,1,"ng-template",null,4,t.W1O),t.qZA()),2&e){const u=t.MAs(7);t.xp6(4),t.Q6J("ngIf",!n.editingProfile),t.xp6(1),t.Q6J("ngIf",!n.editingProfile)("ngIfElse",u)}},dependencies:[r.O5,_.D,h,g]})}var x=i(8869),y=i(6619);const I=[{path:"",component:v}];class A{static#t=this.\u0275fac=function(e){return new(e||A)};static#e=this.\u0275mod=t.oAB({type:A});static#i=this.\u0275inj=t.cJS({imports:[r.ez,x.Bz.forChild(I),y.m]})}},6858:(U,p,i)=>{i.d(p,{O:()=>d});var r=i(529),m=i(2340),f=i(1571);class d{constructor(a){this.httpClient=a,this.api_url=m.N.apiUrl}get(a){return this.httpClient.get(this.api_url+a)}post(a,l){return new r.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+a,l)}put(a,l){return this.httpClient.put(this.api_url+a,l)}postFormData(a,l){const _=new r.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+a,l,{headers:_})}static#t=this.\u0275fac=function(l){return new(l||d)(f.LFG(r.eN))};static#e=this.\u0275prov=f.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}},2340:(U,p,i)=>{i.d(p,{N:()=>r});const r={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);