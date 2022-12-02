"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[26],{6026:(F,h,s)=>{s.r(h),s.d(h,{ToolsManagementModule:()=>p});var r=s(6895),T=s(8184),t=s(1571),l=s(433),g=s(18),b=s(2750);function v(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.addToolForm.valid&&a.onSubmit())}),t.TgZ(1,"div",9)(2,"label",10),t._uU(3,"Nombre"),t.qZA(),t._UZ(4,"input",11),t.qZA(),t.TgZ(5,"button",12),t._uU(6,"Enviar"),t.qZA()()}if(2&i){const o=t.oxw();t.Q6J("formGroup",o.addToolForm),t.xp6(5),t.Q6J("disabled",!o.addToolForm.valid)}}class c{constructor(e,o,n){this.bsModalRef=e,this.fb=o,this.httpService=n,this.toolAddedEvent=new t.vpe}ngOnInit(){this.initForm()}initForm(){this.addToolForm=this.fb.group({toolName:["",l.kI.required]})}onSubmit(){this.httpService.post("Tools",{toolName:this.addToolForm?.controls.toolName.value}).subscribe(o=>{this.bsModalRef.hide(),this.bsModalRef.onHide.emit(o)})}static#t=this.\u0275fac=function(o){return new(o||c)(t.Y36(g.UZ),t.Y36(l.qu),t.Y36(b.O))};static#o=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-add-tool-modal"]],outputs:{toolAddedEvent:"toolAddedEvent"},decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","toolName",1,"form-label"],["type","text","id","toolName","formControlName","toolName",1,"form-control"],[1,"btn","btn-outline-primary",3,"disabled"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Agregar Nueva herramienta"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,v,7,2,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return n.bsModalRef.hide()}),t._uU(10,"Cerrar"),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("ngIf",n.addToolForm))},dependencies:[r.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u]})}var f=s(2687),Z=s(2216);function A(i,e){1&i&&(t.TgZ(0,"p",5),t._uU(1,"No se han registrado usuarios a\xfan."),t.qZA())}function _(i,e){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"fa-icon",8)(7,"fa-icon",8)(8,"fa-icon",9),t.qZA()()),2&i){const o=e.$implicit,n=t.oxw(3);t.xp6(2),t.hij(" ",o.toolName," "),t.xp6(2),t.hij(" ",o.toolState.toolStateName," "),t.xp6(2),t.Q6J("icon",n.faCircleInfo),t.xp6(1),t.Q6J("icon",n.faPen),t.xp6(1),t.Q6J("icon",n.faTrash)}}function x(i,e){if(1&i&&(t.TgZ(0,"table",6)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Estado"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,_,9,5,"tr",7),t.qZA()()),2&i){const o=t.oxw(2);t.xp6(10),t.Q6J("ngForOf",o.tools)}}function C(i,e){if(1&i&&(t.TgZ(0,"div",1)(1,"div",2),t.YNc(2,A,2,0,"p",3),t.YNc(3,x,11,1,"table",4),t.qZA()()),2&i){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",!o.tools.length),t.xp6(1),t.Q6J("ngIf",o.tools.length)}}class d{constructor(){this.faPen=f.IwR,this.faTrash=f.$aW,this.faCircleInfo=f.DBf}static#t=this.\u0275fac=function(o){return new(o||d)};static#o=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-tools-list"]],inputs:{tools:"tools"},decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col"],["class","text-center",4,"ngIf"],["class","table",4,"ngIf"],[1,"text-center"],[1,"table"],[4,"ngFor","ngForOf"],["role","button",1,"me-3","text-primary",3,"icon"],["role","button",1,"me-3","text-danger",3,"icon"]],template:function(o,n){1&o&&t.YNc(0,C,4,2,"div",0),2&o&&t.Q6J("ngIf",n.tools)},dependencies:[r.sg,r.O5,Z.BN]})}class m{constructor(e,o){this.modalService=e,this.httpService=o}ngOnInit(){this.getToolsList()}onOpenAddToolModal(){this.modalRef=this.modalService.show(c),this.modalRef?.onHide&&this.modalRef.onHide.subscribe(e=>{!e.toolGuid||this.getToolsList()})}getToolsList(){this.httpService.get("Tools").subscribe(e=>this.tools=e)}static#t=this.\u0275fac=function(o){return new(o||m)(t.Y36(g.tT),t.Y36(b.O))};static#o=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-tools-management"]],decls:9,vars:1,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"tools"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Administraci\xf3n de equipos y herramienta"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return n.onOpenAddToolModal()}),t._uU(5,"Agregar herramienta"),t.qZA()(),t.TgZ(6,"h4",1),t._uU(7,"Inventario de herramienta"),t.qZA(),t._UZ(8,"app-tools-list",3),t.qZA()),2&o&&(t.xp6(8),t.Q6J("tools",n.tools))},dependencies:[d]})}const N=[{path:"",component:m}];class u{static#t=this.\u0275fac=function(o){return new(o||u)};static#o=this.\u0275mod=t.oAB({type:u});static#e=this.\u0275inj=t.cJS({imports:[T.Bz.forChild(N),T.Bz]})}var y=s(4466);class p{static#t=this.\u0275fac=function(o){return new(o||p)};static#o=this.\u0275mod=t.oAB({type:p});static#e=this.\u0275inj=t.cJS({imports:[r.ez,u,y.m]})}}}]);