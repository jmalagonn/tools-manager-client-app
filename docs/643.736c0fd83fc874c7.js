"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[643],{9643:(dt,y,m)=>{m.r(y),m.d(y,{CustomersModule:()=>F});var a=m(6895),d=m(2220),s=m(433),t=m(1571),u=m(18),p=m(5307);function J(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addEquipmentForm.valid&&i.onSubmit())}),t.TgZ(1,"div",9)(2,"label",10),t._uU(3,"Nombre"),t.qZA(),t._UZ(4,"input",11),t.qZA(),t.TgZ(5,"button",12),t._uU(6,"Guardar"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.addEquipmentForm),t.xp6(5),t.Q6J("disabled",!e.addEquipmentForm.valid)}}class g{constructor(o,e,r){this.bsModalRef=o,this.fb=e,this.httpService=r}ngOnInit(){this.initForm()}initForm(){this.addEquipmentForm=this.fb.group({equipmentName:["",s.kI.required]})}onSubmit(){this.httpService.post("Equipment",{equipmentName:this.addEquipmentForm.controls.equipmentName.value,branchId:this.branchId}).subscribe(e=>{this.bsModalRef.hide(),this.bsModalRef.onHide.emit(e)})}static#t=this.\u0275fac=function(e){return new(e||g)(t.Y36(u.UZ),t.Y36(s.qu),t.Y36(p.O))};static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-add-equipment-modal"]],decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","equipmentName",1,"form-label"],["type","text","id","equipmentName","formControlName","equipmentName",1,"form-control"],[1,"btn","btn-outline-primary",3,"disabled"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Agregar Nuevo equipo"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return r.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,J,7,2,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return r.bsModalRef.hide()}),t._uU(10,"Cerrar"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",r.addEquipmentForm))},dependencies:[a.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]})}var N=m(2687),S=m(2216),E=m(1875);function M(n,o){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e," ")}}function W(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.equipment.equipmentName," ")}}function Y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr",4),t.NdJ("click",function(){const c=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onRowClicked(c))}),t.YNc(1,W,2,1,"td",5),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",e.equipment),t.xp6(2),t.hij(" ",e.workItemType.workItemTypeName," "),t.xp6(2),t.hij(" ",e.workItemDescription?e.workItemDescription:"No se agreg\xf3 descripci\xf3n."," ")}}function D(n,o){if(1&n&&(t.TgZ(0,"table",1)(1,"thead")(2,"tr"),t.YNc(3,M,2,1,"th",2),t.qZA()(),t.TgZ(4,"tbody"),t.YNc(5,Y,6,3,"tr",3),t.qZA()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",e.columns),t.xp6(2),t.Q6J("ngForOf",e.workItems)}}class l{constructor(){this.columns=["Equipo","Tipo de mantenimiento","Descripci\xf3n"],this.rowClickedEvent=new t.vpe}onRowClicked(o){this.rowClickedEvent.emit(o)}static#t=this.\u0275fac=function(e){return new(e||l)};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-work-items-list"]],inputs:{workItems:"workItems",columns:"columns"},outputs:{rowClickedEvent:"rowClickedEvent"},decls:1,vars:1,consts:[["class","table table-hover",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"],[4,"ngIf"]],template:function(e,r){1&e&&t.YNc(0,D,6,2,"table",0),2&e&&t.Q6J("ngIf",r.workItems&&r.workItems.length)},dependencies:[a.sg,a.O5]})}var Q=m(7281);function j(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"p",4)(3,"b"),t._uU(4,"Cliente:"),t.qZA(),t._uU(5),t.qZA(),t.TgZ(6,"p")(7,"b"),t._uU(8,"Sucursal:"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"form",5)(11,"div",6),t._UZ(12,"textarea",7),t.TgZ(13,"label",8),t._uU(14,"Descripci\xf3n general"),t.qZA()()(),t.TgZ(15,"div",9)(16,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.setAddingItem(!0))}),t._UZ(17,"fa-icon",11),t._uU(18," A\xf1adir \xedtem "),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(5),t.hij(" ",e.branch.customerName,""),t.xp6(4),t.hij(" ",e.branch.branchName,""),t.xp6(1),t.Q6J("formGroup",e.workOrderForm),t.xp6(6),t.Q6J("disabled",e.addingItem),t.xp6(1),t.Q6J("icon",e.faPlus)}}function G(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-dropdown",13),t.NdJ("onSelectOptionEvent",function(i){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onSelectItem(i,2))}),t.ALo(1,"toDropdownItem"),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("label","Tipo de trabajo")("options",t.Dn7(1,2,e.workItemTypes,"workItemTypeId","workItemTypeName"))}}function B(n,o){if(1&n&&(t.TgZ(0,"form",20)(1,"div",6),t._UZ(2,"textarea",21),t.TgZ(3,"label",22),t._uU(4,"Descripci\xf3n del trabajo"),t.qZA()()()),2&n){const e=t.oxw(2);t.Q6J("formGroup",e.workItemForm)}}function L(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",3)(2,"app-dropdown",13),t.NdJ("onSelectOptionEvent",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.onSelectItem(i,1))}),t.ALo(3,"toDropdownItem"),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,G,2,6,"app-dropdown",14),t.qZA(),t.TgZ(6,"div",15),t.YNc(7,B,5,1,"form",16),t.qZA(),t.TgZ(8,"div",17)(9,"button",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSaveWorkItem())}),t._UZ(10,"fa-icon",11),t._uU(11," Guardar "),t.qZA(),t.TgZ(12,"button",19),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.setAddingItem(!1))}),t._UZ(13,"fa-icon",11),t._uU(14," Cancelar "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("label","Seleccionar equipo")("options",t.Dn7(3,7,e.branch.equipment,"equipmentId","equipmentName")),t.xp6(3),t.Q6J("ngIf",e.workItemTypes),t.xp6(2),t.Q6J("ngIf",e.workItemForm),t.xp6(2),t.Q6J("disabled",e.workItemForm.invalid),t.xp6(1),t.Q6J("icon",e.faSave),t.xp6(3),t.Q6J("icon",e.faTrash)}}function R(n,o){if(1&n&&(t.TgZ(0,"div",12)(1,"div",3),t._UZ(2,"app-work-items-list",23),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("workItems",e.tempWorkItems)}}class f{constructor(o,e){this.httpService=o,this.fb=e,this.faPlus=N.r8p,this.faSave=N.r6l,this.faTrash=N.$aW,this.addingItem=!1,this.tempWorkItems=[],this.woEvent=new t.vpe}ngOnInit(){this.initWorkOrderForm(),this.getWorkItemTypes()}getWorkItemTypes(){this.httpService.get("WorkItem/workItemTypes").subscribe(o=>this.workItemTypes=o)}initWorkOrderForm(){this.workOrderForm=this.fb.group({workOrderDescription:[""]})}initWorkItemForm(){this.workItemForm=this.fb.group({equipmentId:[null,s.kI.required],workItemDescription:[""],workItemTypeId:[null,s.kI.required]})}setAddingItem(o){this.addingItem=o,this.addingItem&&this.initWorkItemForm()}onSelectItem(o,e){this.workItemForm?.patchValue(1==e?{equipmentId:o.id}:{workItemTypeId:o.id})}onSaveWorkItem(){this.tempWorkItems.push({createdOn:(new Date).toISOString(),equipment:this.branch.equipment.find(o=>o.equipmentId==this.workItemForm.controls.equipmentId.value),workItemDescription:this.workItemForm.controls.workItemDescription.value,workItemId:Date.now(),workItemType:this.workItemTypes.find(o=>o.workItemTypeId==this.workItemForm.controls.workItemTypeId.value)}),this.setAddingItem(!1)}emitWOInfo(){const o={workOrderId:Date.now(),workOrderDescription:this.workOrderForm?.controls.workOrderDescription.value,customerId:this.branch.customerId,customerName:this.branch.customerName,branchId:this.branch.branchId,branchName:this.branch.branchName,workItems:this.tempWorkItems.map(e=>({equipment:e.equipment,workItemDescription:e.workItemDescription,workItemType:e.workItemType}))};this.woEvent.emit(o)}static#t=this.\u0275fac=function(e){return new(e||f)(t.Y36(p.O),t.Y36(s.qu))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-add-work-order-form"]],inputs:{branch:"branch"},outputs:{woEvent:"woEvent"},decls:3,vars:3,consts:[["class","row",4,"ngIf"],["class","row mt-3",4,"ngIf"],[1,"row"],[1,"col"],[1,"mb-1"],[1,"mb-3",3,"formGroup"],[1,"form-floating"],["placeholder","Descripci\xf3n general","id","workOrderDescription","formControlName","workOrderDescription",1,"form-control"],["for","workOrderDescription"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-sm","btn-outline-primary",3,"disabled","click"],[1,"me-1",3,"icon"],[1,"row","mt-3"],[3,"label","options","onSelectOptionEvent"],[3,"label","options","onSelectOptionEvent",4,"ngIf"],[1,"col-12","mt-2"],[3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-center","mt-2"],["type","button",1,"btn","btn-sm","btn-outline-primary","me-2",3,"disabled","click"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[3,"formGroup"],["placeholder","Descripci\xf3n del trabajo","id","workItemDescription","formControlName","workItemDescription",1,"form-control"],["for","workItemDescription"],[3,"workItems"]],template:function(e,r){1&e&&(t.YNc(0,j,19,5,"div",0),t.YNc(1,L,15,11,"div",1),t.YNc(2,R,3,1,"div",1)),2&e&&(t.Q6J("ngIf",r.branch),t.xp6(1),t.Q6J("ngIf",r.branch&&r.addingItem),t.xp6(1),t.Q6J("ngIf",r.tempWorkItems.length))},dependencies:[a.O5,S.BN,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,E.J,l,Q.s]})}var $=m(7185);class k{constructor(o,e,r){this.bsModalRef=o,this.toastr=e,this.httpService=r}onSaveWO(o){o.workItems.length?this.httpService.post("WorkOrder",{workOrderDescription:o.workOrderDescription,customerId:o.customerId,branchId:o.branchId,workItems:o.workItems}).subscribe(r=>{console.log(r)}):this.toastr.error("Debe agregar al menos un \xedtem de trabajo.")}static#t=this.\u0275fac=function(e){return new(e||k)(t.Y36(u.UZ),t.Y36($._W),t.Y36(p.O))};static#e=this.\u0275cmp=t.Xpm({type:k,selectors:[["app-add-work-order-modal"]],viewQuery:function(e,r){if(1&e&&t.Gf(f,5),2&e){let i;t.iGM(i=t.CRH())&&(r.addWorkOrderForm=i.first)}},decls:13,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"branch","woEvent"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Nueva Orden de trabajo"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return r.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"app-add-work-order-form",5),t.NdJ("woEvent",function(c){return r.onSaveWO(c)}),t.qZA()(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return r.addWorkOrderForm.emitWOInfo()}),t._uU(10,"Guardar OT"),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){return r.bsModalRef.hide()}),t._uU(12,"Cerrar"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("branch",r.branch))},dependencies:[f]})}function H(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr",4),t.NdJ("click",function(){const c=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onRowClicked(c))}),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(2),t.hij(" ",e.id," "),t.xp6(2),t.hij(" ",e.name," ")}}function K(n,o){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4," Id "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Nombre "),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,H,5,2,"tr",3),t.qZA()()),2&n){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",e.items)}}function X(n,o){1&n&&(t.TgZ(0,"p",5),t._uU(1," No se encontraron elementos\n"),t.qZA())}class _{constructor(){this.rowClickedEvent=new t.vpe}onRowClicked(o){this.rowClickedEvent.emit(o)}static#t=this.\u0275fac=function(e){return new(e||_)};static#e=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-items-list"]],inputs:{items:"items",actions:"actions"},outputs:{rowClickedEvent:"rowClickedEvent"},decls:2,vars:2,consts:[["class","table table-hover",4,"ngIf"],["class","text-center mt-3",4,"ngIf"],[1,"table","table-hover"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"],[1,"text-center","mt-3"]],template:function(e,r){1&e&&(t.YNc(0,K,9,1,"table",0),t.YNc(1,X,2,0,"p",1)),2&e&&(t.Q6J("ngIf",r.items&&r.items.length),t.xp6(1),t.Q6J("ngIf",r.items&&!r.items.length))},dependencies:[a.sg,a.O5]})}function z(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr",4),t.NdJ("click",function(){const c=t.CHM(e).$implicit,b=t.oxw(2);return t.KtG(b.onRowClicked(c))}),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t._UZ(6,"td"),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(2),t.hij(" ",e.workOrderId," "),t.xp6(2),t.hij(" ",t.lcZ(5,2,e.createdOn)," ")}}function P(n,o){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4," Id "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Fecha de creaci\xf3n "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Estado "),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,z,7,4,"tr",3),t.qZA()()),2&n){const e=t.oxw();t.xp6(10),t.Q6J("ngForOf",e.items)}}function V(n,o){1&n&&(t.TgZ(0,"p",5),t._uU(1," No se encontraron elementos\n"),t.qZA())}class w{constructor(o){this.router=o}onRowClicked(o){this.router.navigateByUrl(`customers/work-order/${o.workOrderId}`)}static#t=this.\u0275fac=function(e){return new(e||w)(t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:w,selectors:[["app-work-orders-table"]],inputs:{items:"items"},decls:2,vars:2,consts:[["class","table table-hover",4,"ngIf"],["class","text-center mt-3",4,"ngIf"],[1,"table","table-hover"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"],[1,"text-center","mt-3"]],template:function(e,r){1&e&&(t.YNc(0,P,11,1,"table",0),t.YNc(1,V,2,0,"p",1)),2&e&&(t.Q6J("ngIf",r.items&&r.items.length),t.xp6(1),t.Q6J("ngIf",r.items&&!r.items.length))},dependencies:[a.sg,a.O5,a.uU]})}class h{transform(o,e){if(!o)return new Array;switch(e){case"customer":return o.map(r=>({id:r.customerId,name:r.customerName}));case"branch":return o.map(r=>({id:r.branchId,name:r.branchName}));case"equipment":return o.map(r=>({id:r.equipmentId,name:r.equipmentName}))}return new Array}static#t=this.\u0275fac=function(e){return new(e||h)};static#e=this.\u0275pipe=t.Yjl({name:"toItemList",type:h,pure:!0})}function tt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"h4",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"h5",3),t._uU(6,"Equipos"),t.qZA(),t.TgZ(7,"div",5)(8,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onOpenAddEquipmentModal())}),t._uU(9,"Agregar nuevo equipo"),t.qZA()(),t.TgZ(10,"app-items-list",7),t.NdJ("rowClickedEvent",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.navigateToEquipment(i))}),t.ALo(11,"toItemList"),t.qZA()(),t.TgZ(12,"div",4)(13,"h5",3),t._uU(14,"\xd3rdenes de trabajo"),t.qZA(),t.TgZ(15,"div",5)(16,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onOpenAddWorkOrder())}),t._uU(17,"Agregar nueva OT"),t.qZA()(),t._UZ(18,"app-work-orders-table",8),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Oqu(e.branch.branchName),t.xp6(7),t.Q6J("items",t.xi3(11,3,e.branch.equipment,"equipment")),t.xp6(8),t.Q6J("items",e.branch.workOrders)}}class v{constructor(o,e,r,i){this.route=o,this.httpService=e,this.modalService=r,this.router=i}ngOnInit(){this.getBranch()}getBranch(){const o=this.route.snapshot.paramMap.get("branchId");this.httpService.get(`Branches?branchId=${o}`).subscribe(e=>this.branch=e)}onOpenAddEquipmentModal(){this.modalRef=this.modalService.show(g,{initialState:{branchId:this.branch.branchId}})}onOpenAddWorkOrder(){this.modalRef=this.modalService.show(k,{initialState:{branch:this.branch},class:"modal-lg"})}navigateToEquipment(o){this.router.navigateByUrl(`customers/equipment/${o.id}`)}static#t=this.\u0275fac=function(e){return new(e||v)(t.Y36(d.gz),t.Y36(p.O),t.Y36(u.tT),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-branch-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row","mt-3"],[1,"text-center"],[1,"col-lg-6","mt-3"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"items","rowClickedEvent"],[3,"items"]],template:function(e,r){1&e&&t.YNc(0,tt,19,6,"div",0),2&e&&t.Q6J("ngIf",r.branch)},dependencies:[a.O5,_,w,h]})}function et(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addBranchForm.valid&&i.onSubmit())}),t.TgZ(1,"div",9)(2,"label",10),t._uU(3,"Nombre"),t.qZA(),t._UZ(4,"input",11),t.qZA(),t.TgZ(5,"button",12),t._uU(6,"Guardar"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.addBranchForm),t.xp6(5),t.Q6J("disabled",!e.addBranchForm.valid)}}class I{constructor(o,e,r){this.bsModalRef=o,this.fb=e,this.httpService=r}ngOnInit(){this.initForm()}initForm(){this.addBranchForm=this.fb.group({branchName:["",s.kI.required]})}onSubmit(){this.httpService.post("Branches",{branchName:this.addBranchForm.controls.branchName.value,customerId:this.customerId}).subscribe(e=>{this.bsModalRef.hide(),this.bsModalRef.onHide.emit(e)})}static#t=this.\u0275fac=function(e){return new(e||I)(t.Y36(u.UZ),t.Y36(s.qu),t.Y36(p.O))};static#e=this.\u0275cmp=t.Xpm({type:I,selectors:[["app-add-branch-modal"]],decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","branchName",1,"form-label"],["type","text","id","branchName","formControlName","branchName",1,"form-control"],[1,"btn","btn-outline-primary",3,"disabled"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Agregar Nueva sucursal"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return r.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,et,7,2,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return r.bsModalRef.hide()}),t._uU(10,"Cerrar"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",r.addBranchForm))},dependencies:[a.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]})}function ot(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"h4",3),t._uU(3),t.qZA(),t.TgZ(4,"div",4)(5,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onOpenAddBranchModal())}),t._uU(6,"Agregar nueva sucursal"),t.qZA()(),t.TgZ(7,"div",6)(8,"app-items-list",7),t.NdJ("rowClickedEvent",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.goToBranch(i))}),t.ALo(9,"toItemList"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Oqu(e.customer.customerName),t.xp6(5),t.Q6J("items",t.xi3(9,2,e.customer.branches,"branch"))}}class Z{constructor(o,e,r,i){this.route=o,this.httpService=e,this.modalService=r,this.router=i}ngOnInit(){this.getCustomer()}getCustomer(){const o=this.route.snapshot.paramMap.get("id");this.httpService.get(`Customers/${o}`).subscribe(e=>this.customer=e)}onOpenAddBranchModal(){this.modalRef=this.modalService.show(I,{initialState:{customerId:this.customer.customerId}})}goToBranch(o){this.router.navigateByUrl(`customers/customer/${this.customer.customerId}/branch/${o.id}`)}static#t=this.\u0275fac=function(e){return new(e||Z)(t.Y36(d.gz),t.Y36(p.O),t.Y36(u.tT),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:Z,selectors:[["app-customer-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row","mt-3"],[1,"text-center"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[1,"col","mt-3"],[3,"items","rowClickedEvent"]],template:function(e,r){1&e&&t.YNc(0,ot,10,5,"div",0),2&e&&t.Q6J("ngIf",r.customer)},dependencies:[a.O5,_,h]})}function rt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addCustomerForm.valid&&i.onSubmit())}),t.TgZ(1,"div",9)(2,"label",10),t._uU(3,"Nombre"),t.qZA(),t._UZ(4,"input",11),t.qZA(),t.TgZ(5,"button",12),t._uU(6,"Guardar"),t.qZA()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.addCustomerForm),t.xp6(5),t.Q6J("disabled",!e.addCustomerForm.valid)}}class T{constructor(o,e,r){this.bsModalRef=o,this.fb=e,this.httpService=r}ngOnInit(){this.initForm()}initForm(){this.addCustomerForm=this.fb.group({customerName:["",s.kI.required]})}onSubmit(){this.httpService.post("Customers",{customerName:this.addCustomerForm.controls.customerName.value}).subscribe(e=>{this.bsModalRef.hide(),this.bsModalRef.onHide.emit(e)})}static#t=this.\u0275fac=function(e){return new(e||T)(t.Y36(u.UZ),t.Y36(s.qu),t.Y36(p.O))};static#e=this.\u0275cmp=t.Xpm({type:T,selectors:[["app-add-customer-modal"]],decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","customerName",1,"form-label"],["type","text","id","customerName","formControlName","customerName",1,"form-control"],[1,"btn","btn-outline-primary",3,"disabled"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Agregar Nuevo cliente"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return r.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,rt,7,2,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return r.bsModalRef.hide()}),t._uU(10,"Cerrar"),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngIf",r.addCustomerForm))},dependencies:[a.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]})}class C{constructor(o,e,r){this.modalService=o,this.httpService=e,this.router=r}ngOnInit(){this.getCustomers()}getCustomers(){this.httpService.get("Customers").subscribe(o=>this.customers=o)}onOpenAddCustomerModal(){this.modalRef=this.modalService.show(T)}goToBranch(o){this.router.navigateByUrl(`customers/customer/${o.id}`)}static#t=this.\u0275fac=function(e){return new(e||C)(t.Y36(u.tT),t.Y36(p.O),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-customers"]],decls:10,vars:4,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[1,"row","mt-3"],[1,"col"],[3,"items","rowClickedEvent"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Clientes"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return r.onOpenAddCustomerModal()}),t._uU(5,"Agregar nuevo cliente"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"app-items-list",5),t.NdJ("rowClickedEvent",function(c){return r.goToBranch(c)}),t.ALo(9,"toItemList"),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("items",t.xi3(9,1,r.customers,"customer")))},dependencies:[_,h]})}const nt=function(){return["Tipo de mantenimiento","Descripci\xf3n"]};function it(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"h4",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"p")(6,"b"),t._uU(7,"Cliente: "),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p")(10,"b"),t._uU(11,"Sucursal: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"b"),t._uU(15,"Descripci\xf3n: "),t.qZA(),t._uU(16),t.qZA()()(),t.TgZ(17,"div",3)(18,"h5",5),t._uU(19,"\xcdtems asociados"),t.qZA(),t.TgZ(20,"app-work-items-list",6),t.NdJ("rowClickedEvent",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.navigateToWo(i))}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.equipment.equipmentName),t.xp6(6),t.hij(" ",e.equipment.customerName,""),t.xp6(4),t.hij(" ",e.equipment.branchName,""),t.xp6(4),t.hij(" ",e.equipment.equipmentDescription?e.equipment.equipmentDescription:"No se ingres\xf3 descripci\xf3n del equipo.",""),t.xp6(4),t.Q6J("workItems",e.workItems)("columns",t.DdM(6,nt))}}class q{constructor(o,e,r){this.httpService=o,this.route=e,this.router=r}ngOnInit(){this.getEquipment()}getEquipment(){const o=this.route.snapshot.paramMap.get("id");this.httpService.get(`Equipment/${o}`).subscribe(e=>{this.equipment=e,this.getWorkItems()})}getWorkItems(){this.httpService.get(`WorkItem/equipment?equipmentId=${this.equipment.equipmentId}`).subscribe(o=>this.workItems=o)}navigateToWo(o){this.router.navigateByUrl(`customers/work-order/${o.workOrderId}`)}static#t=this.\u0275fac=function(e){return new(e||q)(t.Y36(p.O),t.Y36(d.gz),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:q,selectors:[["app-equipment"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"mt-3","text-center"],[1,"row","mt-3"],[1,"col"],[1,"text-center"],[3,"workItems","columns","rowClickedEvent"]],template:function(e,r){1&e&&t.YNc(0,it,21,7,"div",0),2&e&&t.Q6J("ngIf",r.equipment)},dependencies:[a.O5,l]})}var U=m(2771);function st(n,o){if(1&n&&(t.TgZ(0,"div",1)(1,"h4",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"p")(6,"b"),t._uU(7,"Orden de trabajo: "),t.qZA(),t.TgZ(8,"a",5),t._uU(9),t.qZA()(),t.TgZ(10,"p")(11,"b"),t._uU(12,"Cliente: "),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p")(15,"b"),t._uU(16,"Sucursal: "),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"p")(19,"b"),t._uU(20,"Fecha de creaci\xf3n: "),t.qZA(),t._uU(21),t.ALo(22,"date"),t.qZA(),t.TgZ(23,"p")(24,"b"),t._uU(25,"Descripci\xf3n: "),t.qZA(),t._uU(26),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(2),t.hij("\xcdtem de trabajo: ",e.workItem.workItemId,""),t.xp6(6),t.Q6J("routerLink","/"+e.routeConstants.workOrderPath+"/"+e.workItem.workOrderId),t.xp6(1),t.Oqu(e.workItem.workOrderId),t.xp6(4),t.hij(" ",e.workItem.equipment.customerName,""),t.xp6(4),t.hij(" ",e.workItem.equipment.branchName,""),t.xp6(4),t.hij(" ",t.lcZ(22,7,e.workItem.createdOn),""),t.xp6(5),t.hij(" ",e.workItem.workItemDescription?e.workItem.workItemDescription:"No se ingres\xf3 descripci\xf3n de la OT.","")}}class A{constructor(o,e){this.httpService=o,this.route=e,this.routeConstants=U.p7}ngOnInit(){this.getWorkItem()}getWorkItem(){const o=this.route.snapshot.paramMap.get("id");this.httpService.get(`WorkItem/${o}`).subscribe(e=>{this.workItem=e})}static#t=this.\u0275fac=function(e){return new(e||A)(t.Y36(p.O),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:A,selectors:[["app-work-item"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"mt-3","text-center"],[1,"row","mt-3"],[1,"col"],[3,"routerLink"]],template:function(e,r){1&e&&t.YNc(0,st,27,9,"div",0),2&e&&t.Q6J("ngIf",r.workItem)},dependencies:[a.O5,d.rH,a.uU]})}function ct(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"h4",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"p")(6,"b"),t._uU(7,"Cliente: "),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"p")(10,"b"),t._uU(11,"Sucursal: "),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"b"),t._uU(15,"Fecha de creaci\xf3n: "),t.qZA(),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"p")(19,"b"),t._uU(20,"Descripci\xf3n: "),t.qZA(),t._uU(21),t.qZA()()(),t.TgZ(22,"div",3)(23,"h5",5),t._uU(24,"\xcdtems"),t.qZA(),t.TgZ(25,"app-work-items-list",6),t.NdJ("rowClickedEvent",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.navigateToWi(i))}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.hij("Orden de trabajo: ",e.workOrder.workOrderId,""),t.xp6(6),t.hij(" ",e.workOrder.customerName,""),t.xp6(4),t.hij(" ",e.workOrder.branchName,""),t.xp6(4),t.hij(" ",t.lcZ(17,6,e.workOrder.createdOn),""),t.xp6(5),t.hij(" ",e.workOrder.workOrderDescription?e.workOrder.workOrderDescription:"No se ingres\xf3 descripci\xf3n de la OT.",""),t.xp6(4),t.Q6J("workItems",e.workOrder.workItems)}}class x{constructor(o,e,r){this.httpService=o,this.route=e,this.router=r}ngOnInit(){this.getWorkOrder()}getWorkOrder(){const o=this.route.snapshot.paramMap.get("id");this.httpService.get(`${U.G8.workOrderApi}/${o}`).subscribe(e=>this.workOrder=e)}navigateToWi(o){this.router.navigateByUrl(`${U.p7.workItemPath}/${o.workItemId}`)}static#t=this.\u0275fac=function(e){return new(e||x)(t.Y36(p.O),t.Y36(d.gz),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-work-order"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"mt-3","text-center"],[1,"row","mt-3"],[1,"col"],[1,"text-center"],[3,"workItems","rowClickedEvent"]],template:function(e,r){1&e&&t.YNc(0,ct,26,8,"div",0),2&e&&t.Q6J("ngIf",r.workOrder)},dependencies:[a.O5,l,a.uU]})}const at=[{path:"",component:C},{path:"customer",children:[{path:":id",component:Z},{path:":customerId/branch/:branchId",component:v}]},{path:"work-order/:id",component:x},{path:"equipment/:id",component:q},{path:"work-item/:id",component:A}];class O{static#t=this.\u0275fac=function(e){return new(e||O)};static#e=this.\u0275mod=t.oAB({type:O});static#o=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(at),d.Bz]})}var mt=m(8748);class F{static#t=this.\u0275fac=function(e){return new(e||F)};static#e=this.\u0275mod=t.oAB({type:F});static#o=this.\u0275inj=t.cJS({imports:[a.ez,O,mt.m]})}}}]);