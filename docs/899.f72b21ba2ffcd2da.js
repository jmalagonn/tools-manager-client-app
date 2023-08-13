"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[899],{6858:(R,f,n)=>{n.d(f,{O:()=>m});var l=n(529),p=n(2340),c=n(1571);class m{constructor(u){this.httpClient=u,this.api_url=p.N.apiUrl}get(u){return this.httpClient.get(this.api_url+u)}post(u,d){return new l.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+u,d)}put(u,d){return this.httpClient.put(this.api_url+u,d)}postFormData(u,d){const g=new l.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+u,d,{headers:g})}static#t=this.\u0275fac=function(d){return new(d||m)(c.LFG(l.eN))};static#e=this.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}},4899:(R,f,n)=>{n.r(f),n.d(f,{UsersManagementModule:()=>x});var l=n(6895),p=n(8869),c=n(2771),m=n(1458),t=n(1571),u=n(6858),d=n(2687),g=n(2216);function F(o,s){1&o&&(t.TgZ(0,"th"),t._uU(1," Acciones "),t.qZA())}function E(o,s){if(1&o&&(t.TgZ(0,"button",7),t._UZ(1,"fa-icon",6),t.qZA()),2&o){const e=t.oxw(4);t.xp6(1),t.Q6J("icon",e.faCircleInfo)}}const y=function(o){return["/tools-output",o]};function O(o,s){if(1&o&&(t.TgZ(0,"td"),t.YNc(1,E,2,1,"button",5),t.TgZ(2,"a",4),t._UZ(3,"fa-icon",6),t.qZA()()),2&o){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.actions),t.xp6(1),t.Q6J("routerLink",t.VKq(3,y,e.toolOutputId)),t.xp6(1),t.Q6J("icon",i.faCircleInfo)}}function J(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td")(2,"a",4),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.YNc(9,O,4,5,"td",1),t.qZA()),2&o){const e=s.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("routerLink","/"+i.routeConstants.toolOutput+"/"+e.toolOutputId),t.xp6(1),t.hij(" ",e.toolOutputId," "),t.xp6(2),t.hij(" ",t.lcZ(6,5,e.outputDateTime)," "),t.xp6(3),t.hij(" ","open"==e.toolOutputState.toolOutputStateName.toLowerCase()?"Abierto":"Cerrado"," "),t.xp6(1),t.Q6J("ngIf",i.actions)}}function w(o,s){if(1&o&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4," Id "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Fecha de salida "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Estado "),t.qZA(),t.YNc(9,F,2,0,"th",1),t.qZA()(),t.TgZ(10,"tbody"),t.YNc(11,J,10,7,"tr",3),t.qZA()()),2&o){const e=t.oxw();t.xp6(9),t.Q6J("ngIf",e.actions),t.xp6(2),t.Q6J("ngForOf",e.outputsTool)}}function M(o,s){1&o&&(t.TgZ(0,"p"),t._uU(1," No se encontraron salidas de herramienta\n"),t.qZA())}class v{constructor(){this.faCircleInfo=d.DBf,this.routeConstants=c.p7}static#t=this.\u0275fac=function(e){return new(e||v)};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["output-tool-list"]],inputs:{outputsTool:"outputsTool",actions:"actions"},decls:2,vars:2,consts:[["class","table",4,"ngIf"],[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],[3,"routerLink"],["class","action-button",4,"ngIf"],[1,"text-primary",3,"icon"],[1,"action-button"]],template:function(e,i){1&e&&(t.YNc(0,w,12,2,"table",0),t.YNc(1,M,2,0,"p",1)),2&e&&(t.Q6J("ngIf",i.outputsTool&&i.outputsTool.length),t.xp6(1),t.Q6J("ngIf",i.outputsTool&&!i.outputsTool.length))},dependencies:[l.sg,l.O5,g.BN,p.rH,l.uU]})}function N(o,s){if(1&o&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.hij(" ",e.displayName," ")}}function q(o,s){if(1&o&&(t.TgZ(0,"div",1)(1,"div",2)(2,"p")(3,"b"),t._uU(4,"Nombre: "),t.qZA(),t._uU(5),t.qZA()(),t.TgZ(6,"div",3)(7,"p")(8,"b"),t._uU(9,"Roles:"),t.qZA()(),t.TgZ(10,"ul"),t.YNc(11,N,2,1,"li",4),t.qZA()()()),2&o){const e=t.oxw();t.xp6(5),t.hij(" ",e.user.name,""),t.xp6(6),t.Q6J("ngForOf",e.user.userRoles)}}class U{static#t=this.\u0275fac=function(e){return new(e||U)};static#e=this.\u0275cmp=t.Xpm({type:U,selectors:[["app-user-detail-view"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","row mt-3 g-2",4,"ngIf"],[1,"row","mt-3","g-2"],[1,"col-12"],[1,"col"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&t.YNc(0,q,12,2,"div",0),2&e&&t.Q6J("ngIf",i.user)},dependencies:[l.sg,l.O5]})}var a=n(433);function k(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"li")(1,"div",18)(2,"input",19),t.NdJ("change",function(r){t.CHM(e);const _=t.oxw(2);return t.KtG(_.setUserRoleValue(r))}),t.qZA(),t.TgZ(3,"label",20),t._uU(4),t.qZA()()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Q6J("value",e.userRoleId)("id","userRoles-"+e.userRoleId)("checked",e.isActive),t.xp6(1),t.uIk("for","userRoles-"+e.userRoleId),t.xp6(1),t.hij(" ",e.displayName," ")}}function S(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"form",2),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.editForm.valid&&r.onSubmit())}),t.TgZ(2,"div",3)(3,"div",4)(4,"label",5),t._uU(5,"Nombre"),t.qZA(),t._UZ(6,"input",6),t.qZA(),t.TgZ(7,"div",4)(8,"label",7),t._uU(9,"Email"),t.qZA(),t._UZ(10,"input",8),t.qZA(),t.TgZ(11,"div",4)(12,"label",9),t._uU(13,"Identificaci\xf3n"),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",11)(16,"p",12),t._uU(17,"Roles"),t.qZA(),t.TgZ(18,"ul",13),t.YNc(19,k,5,5,"li",14),t.qZA()()(),t.TgZ(20,"div",15)(21,"button",16),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.cancelEditEvent.emit())}),t._uU(22,"Cancelar"),t.qZA(),t.TgZ(23,"button",17),t._uU(24,"Guardar"),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.editForm),t.xp6(18),t.Q6J("ngForOf",e.userRoles),t.xp6(4),t.Q6J("disabled",!e.editForm.dirty&&e.editForm.valid)}}class Z{constructor(s,e){this.fb=s,this.httpService=e,this.cancelEditEvent=new t.vpe,this.userUpdatedEvent=new t.vpe}ngOnChanges(){this.initform(),this.filterActiveUserRoles()}initform(){!this.user||(this.editForm=this.fb.group({name:[this.user.name,a.kI.required],email:[this.user.email],idCard:[this.user.idCard,a.kI.required],userRoles:[null]}))}filterActiveUserRoles(){!this.userRoles||!this.user||(this.userRoles=this.userRoles.map(s=>(s.isActive=!!this.user.userRoles.some(e=>e.userRoleId==s.userRoleId),s)),this.filterUserRoleFormValues())}setUserRoleValue(s){const e=this.userRoles.findIndex(i=>i.userRoleId==s.target.value);this.userRoles[e].isActive=s.target.checked,this.editForm.markAsDirty(),this.filterUserRoleFormValues()}filterUserRoleFormValues(){this.editForm?.patchValue({userRoles:this.userRoles.filter(s=>s.isActive).map(s=>s.userRoleId)})}onSubmit(){const s={company:this.user.company,email:this.editForm.controls.email.value,idCard:this.editForm.controls.idCard.value,name:this.editForm.controls.name.value,userId:this.user.userId,userRoles:this.editForm.controls.userRoles.value.map(e=>({userRoleId:e}))};this.httpService.put(c.G8.userApi,s).subscribe(()=>this.userUpdatedEvent.emit())}static#t=this.\u0275fac=function(e){return new(e||Z)(t.Y36(a.qu),t.Y36(u.O))};static#e=this.\u0275cmp=t.Xpm({type:Z,selectors:[["app-user-detail-edit"]],inputs:{user:"user",userRoles:"userRoles"},outputs:{cancelEditEvent:"cancelEditEvent",userUpdatedEvent:"userUpdatedEvent"},features:[t.TTD],decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"mt-3",3,"formGroup","ngSubmit"],[1,"row","g-2"],[1,"col-md-6"],["for","name",1,"form-label","fw-bold"],["type","text","id","name","formControlName","name",1,"form-control"],["for","email",1,"form-label","fw-bold"],["type","email","id","email","formControlName","email",1,"form-control"],["for","idCard",1,"form-label","fw-bold"],["type","text","id","idCard","formControlName","idCard",1,"form-control"],[1,"col-12"],[1,"fw-bold"],[1,"list-unstyled"],[4,"ngFor","ngForOf"],[1,"form-actions","d-flex","justify-content-center","mt-3"],["type","button",1,"btn","btn-outline-danger","me-2",3,"click"],["type","submit",1,"btn","btn-outline-primary",3,"disabled"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"value","id","checked","change"],[1,"form-check-label"]],template:function(e,i){1&e&&t.YNc(0,S,25,3,"div",0),2&e&&t.Q6J("ngIf",i.user&&i.editForm)},dependencies:[l.sg,l.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u]})}var Y=n(1066),D=n(2368);function Q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",7)(1,"button",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.setIsEditing(!0))}),t._uU(2,"Editar usuario"),t.qZA()()}}function L(o,s){if(1&o&&t._UZ(0,"app-user-detail-view",9),2&o){const e=t.oxw(2);t.Q6J("user",e.user)}}function G(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"app-user-detail-edit",10),t.NdJ("cancelEditEvent",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.setIsEditing(!1))})("userUpdatedEvent",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.userUpdated())}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("user",e.user)("userRoles",e.userRoles)}}function j(o,s){if(1&o&&(t.TgZ(0,"tr")(1,"td")(2,"a",15),t._uU(3),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"workState"),t.qZA()()),2&o){const e=s.$implicit,i=t.oxw(3);t.xp6(2),t.Q6J("routerLink","/"+i.routeConstants.workOrderPath+"/"+e.workOrderId),t.xp6(1),t.hij(" ",e.workOrderId," "),t.xp6(2),t.hij(" ",t.lcZ(6,4,e.createdOn)," "),t.xp6(3),t.hij(" ",t.lcZ(9,6,e.workState)," ")}}function V(o,s){if(1&o&&(t.TgZ(0,"div",11)(1,"h4",12),t._uU(2,"Trabajos asignados"),t.qZA(),t.TgZ(3,"table",13)(4,"thead")(5,"tr")(6,"th"),t._uU(7,"Id"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Fecha de creaci\xf3n"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Estado"),t.qZA()()(),t.TgZ(12,"tbody"),t.YNc(13,j,10,8,"tr",14),t.qZA()()()),2&o){const e=t.oxw(2);t.xp6(13),t.Q6J("ngForOf",e.user.assignedWorkOrders)}}function K(o,s){if(1&o&&(t.TgZ(0,"div",11)(1,"h4",12),t._uU(2,"Salidas de herramienta"),t.qZA(),t._UZ(3,"output-tool-list",16),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.Q6J("outputsTool",e.user.outputsTool)}}function $(o,s){if(1&o&&(t.TgZ(0,"div",1)(1,"h2",2),t._uU(2,"Detalle de usuario"),t.qZA(),t.YNc(3,Q,3,0,"div",3),t.ALo(4,"userRoles"),t.YNc(5,L,1,1,"app-user-detail-view",4),t.YNc(6,G,1,2,"app-user-detail-edit",5),t.YNc(7,V,14,1,"div",6),t.YNc(8,K,4,1,"div",6),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",t.lcZ(4,5,e.userRolesEnum.UsersAdmin)&&!e.isEditing),t.xp6(2),t.Q6J("ngIf",!e.isEditing),t.xp6(1),t.Q6J("ngIf",e.isEditing),t.xp6(1),t.Q6J("ngIf",null==e.user.assignedWorkOrders?null:e.user.assignedWorkOrders.length),t.xp6(1),t.Q6J("ngIf",e.user.outputsTool&&e.user.outputsTool.length)}}class T{constructor(s,e){this.route=s,this.httpService=e,this.isEditing=!1,this.routeConstants=c.p7,this.userRolesEnum=m.v}ngOnInit(){this.getUser(),this.getUserRoles()}getUser(){const s=this.route.snapshot.paramMap.get("id");this.httpService.get(`${c.G8.userEmployeeApi}/${s}`).subscribe(e=>this.user=e)}getUserRoles(){this.httpService.get(`${c.G8.userRolesApi}`).subscribe(s=>this.userRoles=s)}setIsEditing(s){this.isEditing=s}userUpdated(){this.setIsEditing(!1),this.getUser()}static#t=this.\u0275fac=function(e){return new(e||T)(t.Y36(p.gz),t.Y36(u.O))};static#e=this.\u0275cmp=t.Xpm({type:T,selectors:[["app-users-management-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"text-center","mt-3"],["class","d-flex justify-content-center",4,"ngIf"],[3,"user",4,"ngIf"],[3,"user","userRoles","cancelEditEvent","userUpdatedEvent",4,"ngIf"],["class","row mt-3",4,"ngIf"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-outline-primary",3,"click"],[3,"user"],[3,"user","userRoles","cancelEditEvent","userUpdatedEvent"],[1,"row","mt-3"],[1,"text-center","mb-3"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"outputsTool"]],template:function(e,i){1&e&&t.YNc(0,$,9,7,"div",0),2&e&&t.Q6J("ngIf",i.user)},dependencies:[l.sg,l.O5,p.rH,v,U,Z,l.uU,Y.$,D.Y]})}var H=n(5698),I=n(9453),B=n(3143);function P(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"li")(1,"div",21)(2,"input",22),t.NdJ("change",function(r){t.CHM(e);const _=t.oxw(2);return t.KtG(_.setUserRoleValue(r))}),t.qZA(),t.TgZ(3,"label",23),t._uU(4),t.qZA()()()}if(2&o){const e=s.$implicit;t.xp6(2),t.Q6J("value",e.userRoleId)("id","userRoles-"+e.userRoleId),t.xp6(1),t.uIk("for","userRoles-"+e.userRoleId),t.xp6(1),t.hij(" ",e.displayName," ")}}function z(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"form",9),t.NdJ("ngSubmit",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addUserForm.valid&&r.onSubmit())}),t.TgZ(1,"div",10)(2,"div",11)(3,"label",12),t._uU(4,"Nombre"),t.qZA(),t._UZ(5,"input",13),t.qZA(),t.TgZ(6,"div",11)(7,"label",14),t._uU(8,"Email"),t.qZA(),t._UZ(9,"input",15),t.qZA(),t.TgZ(10,"div",11)(11,"label",16),t._uU(12,"Identificaci\xf3n"),t.qZA(),t._UZ(13,"input",17),t.qZA(),t.TgZ(14,"div",18)(15,"p"),t._uU(16,"Roles"),t.qZA(),t.TgZ(17,"ul",19),t.YNc(18,P,5,4,"li",20),t.qZA()()()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.addUserForm),t.xp6(18),t.Q6J("ngForOf",e.userRoles)}}class A{constructor(s,e,i,r){this.activeModal=s,this.fb=e,this.httpService=i,this.accoutService=r,this.UserAddedEvent=new t.vpe,this.accoutService.currentAccount$.pipe((0,H.q)(1)).subscribe(_=>this.user=_)}ngOnInit(){this.initForm()}initForm(){this.addUserForm=this.fb.group({name:["",a.kI.required],email:[null],idCard:["",a.kI.required],userRoles:[null,this.rolesLengthValidator]})}onSubmit(){const s={companyId:this.user.companyId,email:this.addUserForm.controls.email.value,idCard:parseInt(this.addUserForm.controls.idCard.value),name:this.addUserForm.controls.name.value,userRoles:this.addUserForm.controls.userRoles.value.map(e=>({userRoleId:e}))};this.httpService.post(c.G8.addUserApi,s).subscribe(e=>{this.activeModal.close(!0)})}setUserRoleValue(s){const e=this.userRoles.findIndex(i=>i.userRoleId==s.target.value);this.userRoles[e].isActive=s.target.checked,this.filterUserRoleFormValues()}filterUserRoleFormValues(){this.addUserForm?.patchValue({userRoles:this.userRoles.filter(s=>s.isActive).map(s=>s.userRoleId)})}rolesLengthValidator(s){return s.value&&s.value.length?null:{invalidCustomValue:!0}}static#t=this.\u0275fac=function(e){return new(e||A)(t.Y36(I.Kz),t.Y36(a.qu),t.Y36(u.O),t.Y36(B.B))};static#e=this.\u0275cmp=t.Xpm({type:A,selectors:[["app-add-user-modal"]],inputs:{userRoles:"userRoles"},outputs:{UserAddedEvent:"UserAddedEvent"},decls:13,vars:2,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-danger",3,"click"],[1,"btn","btn-outline-primary",3,"disabled","click"],[3,"formGroup","ngSubmit"],[1,"row","g-2"],[1,"col-md-6"],["for","name",1,"form-label"],["type","text","formControlName","name",1,"form-control"],["for","email",1,"form-label"],["type","email","formControlName","email",1,"form-control"],["for","idCard",1,"form-label"],["type","text","formControlName","idCard",1,"form-control"],[1,"col-12"],[1,"list-unstyled"],[4,"ngFor","ngForOf"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"value","id","change"],[1,"form-check-label"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Agregar Nuevo Usuario"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return i.activeModal.close(!1)}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,z,19,2,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return i.activeModal.dismiss()}),t._uU(10,"Cancelar"),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){return i.onSubmit()}),t._uU(12,"Enviar"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",i.addUserForm),t.xp6(4),t.Q6J("disabled",!i.addUserForm.valid))},dependencies:[l.sg,l.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u]})}class h{constructor(s){this.httpService=s}getUserRoles(){return this.httpService.get(c.G8.userRolesApi)}static#t=this.\u0275fac=function(e){return new(e||h)(t.LFG(u.O))};static#e=this.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}var W=n(8073),X=n(5090);class b{constructor(s,e,i,r){this.modalService=s,this.httpService=e,this.router=i,this.usersService=r}ngOnInit(){this.getUsersList(),this.getUserRoles()}onOpenAddUserModal(){this.modalRef=this.modalService.open(A,{size:"lg"}),this.modalRef.componentInstance.userRoles=this.userRoles,this.modalRef.closed.subscribe(s=>s&&this.getUsersList())}getUsersList(){this.httpService.get("Users/employees").subscribe(s=>this.users=s)}onUserClicked(s){this.router.navigateByUrl(`/${c.p7.usersManagement}/${s.id}`)}getUserRoles(){this.usersService.getUserRoles().subscribe(s=>this.userRoles=s)}static#t=this.\u0275fac=function(e){return new(e||b)(t.Y36(I.FF),t.Y36(u.O),t.Y36(p.F0),t.Y36(h))};static#e=this.\u0275cmp=t.Xpm({type:b,selectors:[["app-users-management"]],decls:10,vars:4,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"items","rowClickedEvent"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Administraci\xf3n de usuarios"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return i.onOpenAddUserModal()}),t._uU(5,"Agregar usuario"),t.qZA()(),t.TgZ(6,"h4",1),t._uU(7,"Lista de usuarios"),t.qZA(),t.TgZ(8,"app-items-list",3),t.NdJ("rowClickedEvent",function(_){return i.onUserClicked(_)}),t.ALo(9,"toItemList"),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("items",t.xi3(9,1,i.users,"user")))},dependencies:[W.H,X.R]})}const tt=[{path:"",component:b},{path:":id",component:T}];class C{static#t=this.\u0275fac=function(e){return new(e||C)};static#e=this.\u0275mod=t.oAB({type:C});static#s=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(tt),p.Bz]})}var et=n(6619),st=n(9127);class x{static#t=this.\u0275fac=function(e){return new(e||x)};static#e=this.\u0275mod=t.oAB({type:x});static#s=this.\u0275inj=t.cJS({imports:[l.ez,C,et.m,st.I]})}},2340:(R,f,n)=>{n.d(f,{N:()=>l});const l={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);