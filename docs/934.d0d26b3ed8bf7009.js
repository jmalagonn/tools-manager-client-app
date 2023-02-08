"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[934],{3934:(st,N,a)=>{a.r(N),a.d(N,{ToolsOutputModule:()=>q});var c=a(6895),d=a(2590),u=(()=>{return(n=u||(u={}))[n.info=0]="info",n[n.check=1]="check",n[n.warning=2]="warning",n[n.trash=3]="trash",n[n.edit=4]="edit",u;var n})(),r=a(2687),t=a(1571),T=a(18),_=a(2216);function w(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas prestadas"),t.qZA())}function J(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",14)(4,"button",15),t._UZ(5,"fa-icon",16),t.qZA(),t.TgZ(6,"button",17),t._UZ(7,"fa-icon",16),t.qZA()()()),2&n){const o=e.$implicit,s=t.oxw();t.xp6(2),t.Oqu(o.toolName),t.xp6(3),t.Q6J("icon",s.faCheck),t.xp6(2),t.Q6J("icon",s.faTriangleExclamation)}}class m{constructor(e){this.bsModalRef=e,this.faCheck=r.LEp,this.faTriangleExclamation=r.ik8}static#t=this.\u0275fac=function(o){return new(o||m)(t.Y36(T.UZ))};static#o=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-return-tools"]],decls:25,vars:2,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"text-center"],[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],[1,"text-center","mb-3"],[1,"btn","btn-outline-primary","btn-sm"],[1,"modal-footer"],["type","button","disabled","",1,"btn","btn-outline-primary"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"text-end"],["type","button",1,"btn","btn-sm","btn-success","rounded-circle","me-2"],[3,"icon"],["type","button",1,"btn","btn-sm","btn-warning","rounded-circle","text-white"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Devolver herramientas"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return s.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"h5",5),t._uU(8," Herramientas Prestadas "),t.qZA(),t.YNc(9,w,2,0,"p",6),t.TgZ(10,"table",7)(11,"tbody"),t.YNc(12,J,8,3,"tr",8),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t._uU(15,"Devolver todo sin novedad"),t.qZA()(),t.TgZ(16,"h5",5),t._uU(17," Herramientas a devolver "),t.qZA(),t.TgZ(18,"p",5),t._uU(19,"No hay herramientas devueltas"),t.qZA()(),t.TgZ(20,"div",11)(21,"button",12),t._uU(22,"Guardar"),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return s.bsModalRef.hide()}),t._uU(24,"Cerrar"),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("ngIf",s.outputTool&&!s.outputTool.tools.length),t.xp6(3),t.Q6J("ngForOf",null==s.outputTool?null:s.outputTool.tools))},dependencies:[c.sg,c.O5,_.BN]})}var U=a(5307),I=a(7129);class f{transform(e,o){return e&&e.includes(o)}static#t=this.\u0275fac=function(o){return new(o||f)};static#o=this.\u0275pipe=t.Yjl({name:"listActionsFilter",type:f,pure:!0})}function k(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.actionButtonClicked(i,l.listActions.info))}),t._UZ(1,"fa-icon",6),t.qZA()}if(2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("icon",o.faCircleInfo)}}function F(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.actionButtonClicked(i,l.listActions.check))}),t._UZ(1,"fa-icon",7),t.qZA()}if(2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("icon",o.faCircleCheck)}}function S(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.actionButtonClicked(i,l.listActions.warning))}),t._UZ(1,"fa-icon",8),t.qZA()}if(2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("icon",o.faTriangleExclamation)}}function Q(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t.YNc(7,k,2,1,"button",4),t.ALo(8,"listActionsFilter"),t.YNc(9,F,2,1,"button",4),t.ALo(10,"listActionsFilter"),t.YNc(11,S,2,1,"button",4),t.ALo(12,"listActionsFilter"),t.qZA()()),2&n){const o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,5,o.toolGuid)),t.xp6(3),t.Oqu(o.toolName),t.xp6(2),t.Q6J("ngIf",t.xi3(8,7,s.actions,s.listActions.info)),t.xp6(2),t.Q6J("ngIf",t.xi3(10,10,s.actions,s.listActions.check)),t.xp6(2),t.Q6J("ngIf",t.xi3(12,13,s.actions,s.listActions.warning))}}function R(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,Q,13,16,"tr",3),t.qZA()()),2&n){const o=t.oxw();t.xp6(10),t.Q6J("ngForOf",o.tools)}}function E(n,e){1&n&&(t.TgZ(0,"p",9),t._uU(1,"No hay herramientas"),t.qZA())}class h{constructor(){this.faCircleInfo=r.DBf,this.faCircleCheck=r.fV7,this.faTriangleExclamation=r.ik8,this.listActions=u,this.actionButtonClickedEvent=new t.vpe}actionButtonClicked(e,o){this.actionButtonClickedEvent.emit({tool:e,action:o})}static#t=this.\u0275fac=function(o){return new(o||h)};static#o=this.\u0275cmp=t.Xpm({type:h,selectors:[["tools-list"]],inputs:{tools:"tools",actions:"actions"},outputs:{actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],["class","action-button","type","button",3,"click",4,"ngIf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-success",3,"icon"],[1,"text-warning",3,"icon"],[1,"text-center"]],template:function(o,s){1&o&&(t.YNc(0,R,11,1,"table",0),t.YNc(1,E,2,0,"p",1)),2&o&&(t.Q6J("ngIf",s.tools&&s.tools.length),t.xp6(1),t.Q6J("ngIf",s.tools&&!s.tools.length))},dependencies:[c.sg,c.O5,_.BN,I.$,f],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}"]})}function Y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",9)(1,"button",10),t.NdJ("click",function(){t.CHM(o);const i=t.oxw(2);return t.KtG(i.returnToolsWithNoIssues())}),t._uU(2,"Devolver todo sin novedad"),t.qZA()()}}function M(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",1)(1,"h2",2),t._uU(2,"Registro de salida de herramienta - Detalle"),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li")(7,"p")(8,"b"),t._uU(9,"Fecha de creaci\xf3n:"),t.qZA(),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"li")(13,"p")(14,"b"),t._uU(15,"Responsable:"),t.qZA(),t._uU(16),t.qZA()(),t.TgZ(17,"li")(18,"p")(19,"b"),t._uU(20,"Estado:"),t.qZA(),t._uU(21),t.qZA()()()()(),t.TgZ(22,"div",3)(23,"div",4)(24,"h4",2),t._uU(25,"Herramientas prestadas"),t.qZA(),t.TgZ(26,"tools-list",6),t.NdJ("actionButtonClickedEvent",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.actionButtonClicked(i))}),t.qZA(),t.YNc(27,Y,3,0,"div",7),t.qZA()(),t.TgZ(28,"div",3)(29,"div",4)(30,"h4",2),t._uU(31,"Herramientas devueltas"),t.qZA(),t._UZ(32,"tools-list",8),t.qZA()()()}if(2&n){const o=t.oxw();t.xp6(10),t.hij(" ",t.xi3(11,7,o.outputTool.outputDateTime,"medium"),""),t.xp6(6),t.hij(" ",o.outputTool.responsible.name,""),t.xp6(5),t.hij(" ","open"==o.outputTool.outputToolState.outputToolStateName.toLowerCase()?"Abierto":"Cerrado",""),t.xp6(5),t.Q6J("tools",o.lentTools)("actions",o.listActions),t.xp6(1),t.Q6J("ngIf",null==o.lentTools?null:o.lentTools.length),t.xp6(5),t.Q6J("tools",o.availableTools)}}class g{constructor(e,o,s,i){this.modalService=e,this.route=o,this.router=s,this.httpService=i,this.listActions=[u.info,u.check,u.warning]}ngOnInit(){this.getOutputTool()}getOutputTool(){const e=this.route.snapshot.paramMap.get("id");this.httpService.get(`OutputTools/${e}`).subscribe(o=>{this.outputTool=o,this.lentTools=this.outputTool.tools.filter(s=>!s.returnDateTime),this.availableTools=this.outputTool.tools.filter(s=>s.returnDateTime)})}openReturnToolsModal(){this.modalRef=this.modalService.show(m,{initialState:{outputTool:this.outputTool}})}returnToolsWithNoIssues(){this.httpService.post(`OutputTools/return-tools-with-no-issues/${this.outputTool.outputToolId}`,{}).subscribe()}returnToolWithIssues(e){this.httpService.post("OutputTools/return-tool-with-news",{outputToolId:this.outputTool.outputToolId,toolNewsDto:{toolId:e.toolId}}).subscribe(s=>{console.log(s)})}returnToolWithNoIssues(e){this.httpService.post(`OutputTools/return-tool-with-no-issues/${this.outputTool.outputToolId}/${e.toolId}`,{}).subscribe(o=>{console.log(o)})}actionButtonClicked(e){switch(e.action){case u.info:this.router.navigateByUrl(`/tools-management/${e.tool.toolId}`);break;case u.check:this.returnToolWithNoIssues(e.tool)}}static#t=this.\u0275fac=function(o){return new(o||g)(t.Y36(T.tT),t.Y36(d.gz),t.Y36(d.F0),t.Y36(U.O))};static#o=this.\u0275cmp=t.Xpm({type:g,selectors:[["app-tools-output-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"text-center","mt-3"],[1,"row","mt-3"],[1,"col"],[1,"list-unstyled"],[3,"tools","actions","actionButtonClickedEvent"],["class","text-center",4,"ngIf"],[3,"tools"],[1,"text-center"],[1,"btn","btn-outline-primary","btn-sm",3,"click"]],template:function(o,s){1&o&&t.YNc(0,M,33,10,"div",0),2&o&&t.Q6J("ngIf",s.outputTool)},dependencies:[c.O5,h,c.uU]})}var p=a(433),L=a(1875);function B(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas disponibles"),t.qZA())}function D(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._UZ(7,"fa-icon",4),t.TgZ(8,"fa-icon",5),t.NdJ("click",function(){const l=t.CHM(o).$implicit,y=t.oxw(2);return t.KtG(y.onSelectTool(l))}),t.qZA()()()}if(2&n){const o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,4,o.toolGuid,6)),t.xp6(3),t.Oqu(o.toolName),t.xp6(2),t.Q6J("icon",s.faCircleInfo),t.xp6(1),t.Q6J("icon",s.faPlus)}}function $(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,D,9,7,"tr",3),t.qZA()()),2&n){const o=t.oxw();t.xp6(10),t.Q6J("ngForOf",o.tools)}}class b{constructor(){this.faPlus=r.r8p,this.faCircleInfo=r.DBf,this.selectToolEvent=new t.vpe}onSelectTool(e){this.selectToolEvent.emit(e)}static#t=this.\u0275fac=function(o){return new(o||b)};static#o=this.\u0275cmp=t.Xpm({type:b,selectors:[["app-available-tools-list"]],inputs:{tools:"tools"},outputs:{selectToolEvent:"selectToolEvent"},decls:2,vars:2,consts:[[4,"ngIf"],["class","table",4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],["role","button",1,"me-2",3,"icon"],["role","button",1,"text-primary",3,"icon","click"]],template:function(o,s){1&o&&(t.YNc(0,B,2,0,"p",0),t.YNc(1,$,11,1,"table",1)),2&o&&(t.Q6J("ngIf",s.tools&&!s.tools.length),t.xp6(1),t.Q6J("ngIf",s.tools&&s.tools.length))},dependencies:[c.sg,c.O5,_.BN,I.$]})}function G(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas seleccionadas"),t.qZA())}function H(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._UZ(7,"fa-icon",4),t.TgZ(8,"fa-icon",5),t.NdJ("click",function(){const l=t.CHM(o).$implicit,y=t.oxw(2);return t.KtG(y.onDeleteTool(l))}),t.qZA()()()}if(2&n){const o=e.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,4,o.toolGuid,6)),t.xp6(3),t.Oqu(o.toolName),t.xp6(2),t.Q6J("icon",s.faCircleInfo),t.xp6(1),t.Q6J("icon",s.faTrash)}}function K(n,e){if(1&n&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Acciones"),t.qZA()()(),t.TgZ(9,"tbody"),t.YNc(10,H,9,7,"tr",3),t.qZA()()),2&n){const o=t.oxw();t.xp6(10),t.Q6J("ngForOf",o.tools)}}class Z{constructor(){this.faTrash=r.$aW,this.faCircleInfo=r.DBf,this.deleteToolEvent=new t.vpe}onDeleteTool(e){this.deleteToolEvent.emit(e)}static#t=this.\u0275fac=function(o){return new(o||Z)};static#o=this.\u0275cmp=t.Xpm({type:Z,selectors:[["app-selected-tools-list"]],inputs:{tools:"tools"},outputs:{deleteToolEvent:"deleteToolEvent"},decls:2,vars:2,consts:[[4,"ngIf"],["class","table",4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],["role","button",1,"me-2",3,"icon"],["role","button",1,"text-danger",3,"icon","click"]],template:function(o,s){1&o&&(t.YNc(0,G,2,0,"p",0),t.YNc(1,K,11,1,"table",1)),2&o&&(t.Q6J("ngIf",!s.tools||s.tools&&!s.tools.length),t.xp6(1),t.Q6J("ngIf",s.tools&&s.tools.length))},dependencies:[c.sg,c.O5,_.BN,I.$]})}var j=a(7281);function X(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",15)(1,"div",11)(2,"label",16),t._uU(3,"Responsable"),t.qZA(),t.TgZ(4,"app-dropdown",17),t.NdJ("onSelectOptionEvent",function(i){t.CHM(o);const l=t.oxw(2);return t.KtG(l.onSelectResponsible(i))}),t.ALo(5,"toDropdownItem"),t.qZA()()()}if(2&n){const o=t.oxw(2);t.xp6(4),t.Q6J("label","Responsable")("options",t.Dn7(5,2,o.employees,"userId","name"))}}function W(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.registerOutputForm.valid&&i.registerOutput())}),t.YNc(1,X,6,6,"div",9),t.TgZ(2,"div",10)(3,"div",11)(4,"h5"),t._uU(5,"Herramientas seleccionadas"),t.qZA(),t.TgZ(6,"app-selected-tools-list",12),t.NdJ("deleteToolEvent",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.onDeleteTool(i))}),t.qZA()()(),t.TgZ(7,"div",10)(8,"div",11)(9,"h5"),t._uU(10,"Listado de herramientas"),t.qZA(),t.TgZ(11,"app-available-tools-list",13),t.NdJ("selectToolEvent",function(i){t.CHM(o);const l=t.oxw();return t.KtG(l.onSelectTool(i))}),t.qZA()()(),t.TgZ(12,"div")(13,"button",14),t._uU(14,"Registrar salida"),t.qZA()()()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.registerOutputForm),t.xp6(1),t.Q6J("ngIf",o.employees),t.xp6(5),t.Q6J("tools",o.selectedTools),t.xp6(5),t.Q6J("tools",o.availableTools),t.xp6(2),t.Q6J("disabled",!o.registerOutputForm.valid)}}class v{constructor(e,o,s){this.bsModalRef=e,this.httpService=o,this.fb=s,this.availableTools=[],this.selectedTools=[]}ngOnInit(){this.initForm(),this.getEmployees(),this.getTools()}getEmployees(){this.httpService.get("Users/employees").subscribe(e=>this.employees=e)}getTools(){this.httpService.get("Tools/available-tools").subscribe(e=>this.availableTools=e)}onSelectTool(e){this.availableTools=this.availableTools?.filter(o=>o.toolId!=e.toolId),this.selectedTools?.push(e),this.registerOutputForm.controls.tools.patchValue(this.selectedTools)}onDeleteTool(e){this.selectedTools=this.selectedTools.filter(o=>o.toolId!=e.toolId),this.availableTools.push(e),this.registerOutputForm.controls.tools.patchValue(this.selectedTools)}initForm(){this.registerOutputForm=this.fb.group({responsible:[null,p.kI.required],tools:[null,p.kI.required]})}registerOutput(){this.httpService.post("OutputTools",this.registerOutputForm?.value).subscribe(e=>{this.bsModalRef.hide(),console.log(e)})}onSelectResponsible(e){this.responsible=this.employees.find(o=>o.userId==e.id),this.registerOutputForm.controls.responsible.setValue({...this.responsible})}static#t=this.\u0275fac=function(o){return new(o||v)(t.Y36(T.UZ),t.Y36(U.O),t.Y36(p.qu))};static#o=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-register-output-modal"]],decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"formGroup","ngSubmit"],["class","row",4,"ngIf"],[1,"row","mt-3"],[1,"col"],[3,"tools","deleteToolEvent"],[3,"tools","selectToolEvent"],[1,"btn","btn-outline-primary",3,"disabled"],[1,"row"],["for","responsible",1,"form-label"],[1,"d-block",3,"label","options","onSelectOptionEvent"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registrar nueva salida"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return s.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4),t.YNc(7,W,15,5,"form",5),t.qZA(),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return s.bsModalRef.hide()}),t._uU(10,"Cerrar"),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("ngIf",s.registerOutputForm))},dependencies:[c.O5,p._Y,p.JL,p.sg,L.J,b,Z,j.s]})}class x{transform(e,...o){return 1==e.outputToolStateId?"Abierto":"Cerrado"}static#t=this.\u0275fac=function(o){return new(o||x)};static#o=this.\u0275pipe=t.Yjl({name:"outputToolState",type:x,pure:!0})}function P(n,e){1&n&&(t.TgZ(0,"p",6),t._uU(1,"No se encontraron registros de salida de equipos"),t.qZA())}const V=function(n){return[n]};function z(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"outputToolState"),t.qZA(),t.TgZ(9,"td")(10,"a",9),t._UZ(11,"fa-icon",10),t.qZA()()()),2&n){const o=e.$implicit,s=t.oxw(3);t.xp6(2),t.Oqu(t.xi3(3,5,o.outputDateTime,"dd/MM/YYYY")),t.xp6(3),t.Oqu(o.responsible.name),t.xp6(2),t.hij(" ",t.lcZ(8,8,o.outputToolState)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,V,o.outputToolId)),t.xp6(1),t.Q6J("icon",s.faCircleInfo)}}function tt(n,e){if(1&n&&(t.TgZ(0,"table",7)(1,"thead")(2,"tr")(3,"th"),t._uU(4," Fecha de salida "),t.qZA(),t.TgZ(5,"th"),t._uU(6," Responsable "),t.qZA(),t.TgZ(7,"th"),t._uU(8," Estado "),t.qZA(),t._UZ(9,"th"),t.qZA()(),t.TgZ(10,"tbody"),t.YNc(11,z,12,12,"tr",8),t.qZA()()),2&n){const o=t.oxw(2);t.xp6(11),t.Q6J("ngForOf",o.outputTools)}}function ot(n,e){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,P,2,0,"p",4),t.YNc(2,tt,12,1,"table",5),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.outputTools.length),t.xp6(1),t.Q6J("ngIf",o.outputTools.length)}}class A{constructor(){this.faCircleInfo=r.DBf}static#t=this.\u0275fac=function(o){return new(o||A)};static#o=this.\u0275cmp=t.Xpm({type:A,selectors:[["app-open-tools-output-list"]],inputs:{outputTools:"outputTools"},decls:4,vars:1,consts:[[1,"row"],[1,"mt-4","text-center"],["class","col",4,"ngIf"],[1,"col"],["class","text-center",4,"ngIf"],["class","table mt-4",4,"ngIf"],[1,"text-center"],[1,"table","mt-4"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"text-primary",3,"icon"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registro de salidas de equipos"),t.qZA(),t.YNc(3,ot,3,2,"div",2),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngIf",s.outputTools))},dependencies:[c.sg,c.O5,d.rH,_.BN,c.uU,x]})}class C{constructor(e,o){this.modalService=e,this.httpService=o}ngOnInit(){this.getOutputToolsRegisters()}onOpenAddToolModal(){this.modalRef=this.modalService.show(v)}getOutputToolsRegisters(){this.httpService.get("OutputTools").subscribe(e=>{this.outputToolsRegisters=e,this.openOutputTools=this.outputToolsRegisters.filter(o=>"Open"==o.outputToolState.outputToolStateName),this.closedOutputTools=this.outputToolsRegisters.filter(o=>"Open"!=o.outputToolState.outputToolStateName)})}static#t=this.\u0275fac=function(o){return new(o||C)(t.Y36(T.tT),t.Y36(U.O))};static#o=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-tools-output"]],decls:7,vars:1,consts:[[1,"container"],[1,"mt-3","text-center"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"outputTools"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Salida e ingreso de equipos y herramienta"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return s.onOpenAddToolModal()}),t._uU(5,"Registrar nueva salida"),t.qZA()(),t._UZ(6,"app-open-tools-output-list",4),t.qZA()),2&o&&(t.xp6(6),t.Q6J("outputTools",s.outputToolsRegisters))},dependencies:[A]})}const et=[{path:"",component:C},{path:":id",component:g}];class O{static#t=this.\u0275fac=function(o){return new(o||O)};static#o=this.\u0275mod=t.oAB({type:O});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(et),d.Bz]})}var nt=a(8748);class q{static#t=this.\u0275fac=function(o){return new(o||q)};static#o=this.\u0275mod=t.oAB({type:q});static#e=this.\u0275inj=t.cJS({imports:[c.ez,O,nt.m]})}}}]);