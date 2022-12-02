"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[243],{243:(B,w,r)=>{r.r(w),r.d(w,{ToolsOutputModule:()=>A});var c=r(6895),m=r(8184),t=r(1571),C=r(2750);class T{constructor(e,o){this.route=e,this.httpService=o}ngOnInit(){this.getOutputTool()}getOutputTool(){const e=this.route.snapshot.paramMap.get("id");this.httpService.get(`OutputTools/${e}`).subscribe(o=>this.outputTool=o)}static#t=this.\u0275fac=function(o){return new(o||T)(t.Y36(m.gz),t.Y36(C.O))};static#o=this.\u0275cmp=t.Xpm({type:T,selectors:[["app-tools-output-detail"]],decls:5,vars:0,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"row"],[1,"col"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Detalle de registro de salida de herramienta"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"div",3),t.qZA()())}})}var p=r(433),S=r(18),q=r(3077);function F(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"li",6),t.NdJ("click",function(){const l=t.CHM(o).$implicit,d=t.oxw(2);return t.KtG(d.onSelectOption(l))}),t.TgZ(1,"p",7),t._uU(2),t.qZA()()}if(2&n){const o=e.$implicit;t.xp6(2),t.Oqu(o.description)}}function U(n,e){if(1&n&&(t.TgZ(0,"ul",4),t.YNc(1,F,3,1,"li",5),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.options)}}class _{constructor(){this.onSelectOptionEvent=new t.vpe}onSelectOption(e){this.label=e.description,this.onSelectOptionEvent.emit(e)}static#t=this.\u0275fac=function(o){return new(o||_)};static#o=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-dropdown"]],inputs:{label:"label",options:"options"},outputs:{onSelectOptionEvent:"onSelectOptionEvent"},decls:5,vars:1,consts:[["dropdown","",1,"btn-group"],["dropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","btn-outline-dark","dropdown-toggle"],[1,"caret"],["class","dropdown-menu","role","menu",4,"dropdownMenu"],["role","menu",1,"dropdown-menu"],["role","menuitem","class","dp-item",3,"click",4,"ngFor","ngForOf"],["role","menuitem",1,"dp-item",3,"click"],["role","button",1,"m-0","ps-2","pe-2"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2),t._UZ(3,"span",2),t.qZA(),t.YNc(4,U,2,1,"ul",3),t.qZA()),2&o&&(t.xp6(2),t.hij(" ",s.selectedOption?s.selectedOption.description:s.label," "))},dependencies:[c.sg,q.Hz,q.Mq,q.TO],styles:[".dp-item[_ngcontent-%COMP%]:hover{background:rgba(200,200,200,.1)}"]})}var a=r(2687),y=r(2216);class u{transform(e,o){return e.slice(-1*o)}static#t=this.\u0275fac=function(o){return new(o||u)};static#o=this.\u0275pipe=t.Yjl({name:"lastCharacters",type:u,pure:!0})}function I(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas disponibles"),t.qZA())}function J(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._UZ(7,"fa-icon",4),t.TgZ(8,"fa-icon",5),t.NdJ("click",function(){const l=t.CHM(o).$implicit,d=t.oxw(2);return t.KtG(d.onSelectTool(l))}),t.qZA()()()}if(2&n){const o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,4,o.toolGuid,6)),t.xp6(3),t.Oqu(o.toolName),t.xp6(2),t.Q6J("icon",s.faCircleInfo),t.xp6(1),t.Q6J("icon",s.faPlus)}}function N(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,J,9,7,"tr",3),t.qZA()()),2&n){const o=t.oxw();t.xp6(10),t.Q6J("ngForOf",o.tools)}}class f{constructor(){this.faPlus=a.r8p,this.faCircleInfo=a.DBf,this.selectToolEvent=new t.vpe}onSelectTool(e){this.selectToolEvent.emit(e)}static#t=this.\u0275fac=function(o){return new(o||f)};static#o=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-available-tools-list"]],inputs:{tools:"tools"},outputs:{selectToolEvent:"selectToolEvent"},decls:2,vars:2,consts:[[4,"ngIf"],["class","table",4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],["role","button",1,"me-2",3,"icon"],["role","button",1,"text-primary",3,"icon","click"]],template:function(o,s){1&o&&(t.YNc(0,I,2,0,"p",0),t.YNc(1,N,11,1,"table",1)),2&o&&(t.Q6J("ngIf",s.tools&&!s.tools.length),t.xp6(1),t.Q6J("ngIf",s.tools&&s.tools.length))},dependencies:[c.sg,c.O5,y.BN,u]})}function M(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas seleccionadas"),t.qZA())}function E(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._UZ(7,"fa-icon",4),t.TgZ(8,"fa-icon",5),t.NdJ("click",function(){const l=t.CHM(o).$implicit,d=t.oxw(2);return t.KtG(d.onDeleteTool(l))}),t.qZA()()()}if(2&n){const o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,4,o.toolGuid,6)),t.xp6(3),t.Oqu(o.toolName),t.xp6(2),t.Q6J("icon",s.faCircleInfo),t.xp6(1),t.Q6J("icon",s.faTrash)}}function R(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,E,9,7,"tr",3),t.qZA()()),2&n){const o=t.oxw();t.xp6(10),t.Q6J("ngForOf",o.tools)}}class g{constructor(){this.faTrash=a.$aW,this.faCircleInfo=a.DBf,this.deleteToolEvent=new t.vpe}onDeleteTool(e){this.deleteToolEvent.emit(e)}static#t=this.\u0275fac=function(o){return new(o||g)};static#o=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-selected-tools-list"]],inputs:{tools:"tools"},outputs:{deleteToolEvent:"deleteToolEvent"},decls:2,vars:2,consts:[[4,"ngIf"],["class","table",4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],["role","button",1,"me-2",3,"icon"],["role","button",1,"text-danger",3,"icon","click"]],template:function(o,s){1&o&&(t.YNc(0,M,2,0,"p",0),t.YNc(1,R,11,1,"table",1)),2&o&&(t.Q6J("ngIf",!s.tools||s.tools&&!s.tools.length),t.xp6(1),t.Q6J("ngIf",s.tools&&s.tools.length))},dependencies:[c.sg,c.O5,y.BN,u]})}class h{transform(e,...o){const s=o[0],i=o[1];return e.map(l=>({id:l[s],description:l[i]}))}static#t=this.\u0275fac=function(o){return new(o||h)};static#o=this.\u0275pipe=t.Yjl({name:"toDropdownItem",type:h,pure:!0})}function Y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",15)(1,"div",11)(2,"label",16),t._uU(3,"Responsable"),t.qZA(),t.TgZ(4,"app-dropdown",17),t.NdJ("onSelectOptionEvent",function(i){t.CHM(o);const l=t.oxw(2);return t.KtG(l.onSelectResponsible(i))}),t.ALo(5,"toDropdownItem"),t.qZA()()()}if(2&n){const o=t.oxw(2);t.xp6(4),t.Q6J("label","Responsable")("options",t.Dn7(5,2,o.employees,"userId","name"))}}function Q(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.registerOutputForm.valid&&i.registerOutput())}),t.YNc(1,Y,6,6,"div",9),t.TgZ(2,"div",10)(3,"div",11)(4,"h5"),t._uU(5,"Herramientas seleccionadas"),t.qZA(),t.TgZ(6,"app-selected-tools-list",12),t.NdJ("deleteToolEvent",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.onDeleteTool(i))}),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"h5"),t._uU(10,"Listado de herramientas"),t.qZA(),t.TgZ(11,"app-available-tools-list",13),t.NdJ("selectToolEvent",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.onSelectTool(i))}),t.qZA()()(),t.TgZ(12,"div")(13,"button",14),t._uU(14,"Registrar salida"),t.qZA()()()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.registerOutputForm),t.xp6(1),t.Q6J("ngIf",o.employees),t.xp6(5),t.Q6J("tools",o.selectedTools),t.xp6(5),t.Q6J("tools",o.availableTools),t.xp6(2),t.Q6J("disabled",!o.registerOutputForm.valid)}}class b{constructor(e,o,s){this.bsModalRef=e,this.httpService=o,this.fb=s,this.availableTools=[],this.selectedTools=[]}ngOnInit(){this.initForm(),this.getEmployees(),this.getTools()}getEmployees(){this.httpService.get("Users/employees").subscribe(e=>this.employees=e)}getTools(){this.httpService.get("Tools/available-tools").subscribe(e=>this.availableTools=e)}onSelectTool(e){this.availableTools=this.availableTools?.filter(o=>o.toolId!=e.toolId),this.selectedTools?.push(e),this.registerOutputForm.controls.tools.patchValue(this.selectedTools)}onDeleteTool(e){this.selectedTools=this.selectedTools.filter(o=>o.toolId!=e.toolId),this.availableTools.push(e),this.registerOutputForm.controls.tools.patchValue(this.selectedTools)}initForm(){this.registerOutputForm=this.fb.group({responsible:[null,p.kI.required],tools:[null,p.kI.required]})}registerOutput(){this.httpService.post("OutputTools",this.registerOutputForm?.value).subscribe(e=>{this.bsModalRef.hide(),console.log(e)})}onSelectResponsible(e){this.responsible=this.employees.find(o=>o.userId==e.id),this.registerOutputForm.controls.responsible.setValue({...this.responsible})}static#t=this.\u0275fac=function(o){return new(o||b)(t.Y36(S.UZ),t.Y36(C.O),t.Y36(p.qu))};static#o=this.\u0275cmp=t.Xpm({type:b,selectors:[["app-register-output-modal"]],decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],["class","row",4,"ngIf"],[1,"row","mt-3"],[1,"col"],[3,"tools","deleteToolEvent"],[3,"tools","selectToolEvent"],[1,"btn","btn-outline-primary",3,"disabled"],[1,"row"],["for","responsible",1,"form-label"],[1,"d-block",3,"label","options","onSelectOptionEvent"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registrar nueva salida"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return s.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,Q,15,5,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return s.bsModalRef.hide()}),t._uU(10,"Cerrar"),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("ngIf",s.registerOutputForm))},dependencies:[c.O5,p._Y,p.JL,p.sg,_,f,g,h]})}class Z{transform(e,...o){return 1==e.outputToolStateId?"Abierto":"Cerrado"}static#t=this.\u0275fac=function(o){return new(o||Z)};static#o=this.\u0275pipe=t.Yjl({name:"outputToolState",type:Z,pure:!0})}const L=function(n){return[n]};function k(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"outputToolState"),t.qZA(),t.TgZ(9,"td")(10,"a",6),t._UZ(11,"fa-icon",7),t.qZA()()()),2&n){const o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,5,o.outputDateTime,"dd/MM/YYYY")),t.xp6(3),t.Oqu(o.responsible.name),t.xp6(2),t.hij(" ",t.lcZ(8,8,o.outputToolState)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,L,o.outputToolId)),t.xp6(1),t.Q6J("icon",s.faCircleInfo)}}function D(n,e){if(1&n&&(t.TgZ(0,"table",4)(1,"thead")(2,"tr")(3,"th"),t._uU(4," Fecha de salida "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Responsable "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Estado "),t.qZA(),t.TgZ(9,"th"),t._uU(10," Acciones "),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,k,12,12,"tr",5),t.qZA()()),2&n){const o=t.oxw();t.xp6(12),t.Q6J("ngForOf",o.outputTools)}}class v{constructor(){this.faCircleInfo=a.DBf}static#t=this.\u0275fac=function(o){return new(o||v)};static#o=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-open-tools-output-list"]],inputs:{outputTools:"outputTools"},decls:5,vars:1,consts:[[1,"row"],[1,"mt-4","text-center"],[1,"col"],["class","table mt-4",4,"ngIf"],[1,"table","mt-4"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"text-primary",3,"icon"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registro de salidas de equipos"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,D,13,1,"table",3),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",s.outputTools))},dependencies:[c.sg,c.O5,m.rH,y.BN,c.uU,Z]})}class O{constructor(e,o){this.modalService=e,this.httpService=o}ngOnInit(){this.getOutputToolsRegisters()}onOpenAddToolModal(){this.modalRef=this.modalService.show(b)}getOutputToolsRegisters(){this.httpService.get("OutputTools").subscribe(e=>{this.outputToolsRegisters=e,this.openOutputTools=this.outputToolsRegisters.filter(o=>"Open"==o.outputToolState.outputToolStateName),this.closedOutputTools=this.outputToolsRegisters.filter(o=>"Open"!=o.outputToolState.outputToolStateName)})}static#t=this.\u0275fac=function(o){return new(o||O)(t.Y36(S.tT),t.Y36(C.O))};static#o=this.\u0275cmp=t.Xpm({type:O,selectors:[["app-tools-output"]],decls:7,vars:1,consts:[[1,"container"],[1,"mt-3","text-center"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"outputTools"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Salida e ingreso de equipos y herramienta"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return s.onOpenAddToolModal()}),t._uU(5,"Registrar nueva salida"),t.qZA()(),t._UZ(6,"app-open-tools-output-list",4),t.qZA()),2&o&&(t.xp6(6),t.Q6J("outputTools",s.openOutputTools))},dependencies:[v]})}const G=[{path:"",component:O},{path:":id",component:T}];class x{static#t=this.\u0275fac=function(o){return new(o||x)};static#o=this.\u0275mod=t.oAB({type:x});static#e=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(G),m.Bz]})}var H=r(4466);class A{static#t=this.\u0275fac=function(o){return new(o||A)};static#o=this.\u0275mod=t.oAB({type:A});static#e=this.\u0275inj=t.cJS({imports:[c.ez,x,H.m]})}}}]);