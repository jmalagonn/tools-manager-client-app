"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[137],{7323:(O,h,s)=>{s.d(h,{G:()=>c});class c{static#t=this.accountLogin="Account/login";static#o=this.addUserApi="Users/addUser";static#e=this.branchesApi="Branches";static#n=this.customersApi="Customers";static#i=this.equipmentApi="Equipment";static#s=this.equipmentParametersApi="Equipment/parameters";static#l=this.measurementUnitsApi="MeasurementUnits";static#c=this.userApi="Users";static#a=this.userEmployeeApi="Users/employee";static#r=this.userEmployeesApi="Users/employees";static#u=this.userRolesApi="UserRole";static#p=this.workItemApi="WorkItem";static#d=this.workOrderApi="WorkOrder";static#_=this.workOrderActivity=`${this.workOrderApi}/activity`;static#h=this.workOrderTypesApi=`${this.workOrderApi}/workOrderTypes`;static#m=this.toolsApi="Tools";static#T=this.toolParametersApi="Tools/parameters";static#f=this.toolOutputsApi="ToolOutputs";static#g=this.workStateApi="WorkState"}},5307:(O,h,s)=>{s.d(h,{O:()=>r});var c=s(529);var d=s(1571);class r{constructor(a){this.httpClient=a,this.api_url="https://management.gmcrefrigeracion.com/api/"}get(a){return this.httpClient.get(this.api_url+a)}post(a,p){return new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+a,p)}put(a,p){return this.httpClient.put(this.api_url+a,p)}postFormData(a,p){const m=new c.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+a,p,{headers:m})}static#t=this.\u0275fac=function(p){return new(p||r)(d.LFG(c.eN))};static#o=this.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}},8137:(O,h,s)=>{s.r(h),s.d(h,{ToolOutputModule:()=>x});var c=s(6895),_=s(8869),d=s(860),r=s(2687),t=s(1571),a=s(18),p=s(2216);function m(i,e){1&i&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas prestadas"),t.qZA())}function y(i,e){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",14)(4,"button",15),t._UZ(5,"fa-icon",16),t.qZA(),t.TgZ(6,"button",17),t._UZ(7,"fa-icon",16),t.qZA()()()),2&i){const o=e.$implicit,n=t.oxw();t.xp6(2),t.Oqu(o.toolName),t.xp6(3),t.Q6J("icon",n.faCheck),t.xp6(2),t.Q6J("icon",n.faTriangleExclamation)}}class T{constructor(e){this.bsModalRef=e,this.faCheck=r.LEp,this.faTriangleExclamation=r.ik8}static#t=this.\u0275fac=function(o){return new(o||T)(t.Y36(a.UZ))};static#o=this.\u0275cmp=t.Xpm({type:T,selectors:[["app-return-tools"]],decls:25,vars:2,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"text-center"],[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],[1,"text-center","mb-3"],[1,"btn","btn-outline-primary","btn-sm"],[1,"modal-footer"],["type","button","disabled","",1,"btn","btn-outline-primary"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"text-end"],["type","button",1,"btn","btn-sm","btn-success","rounded-circle","me-2"],[3,"icon"],["type","button",1,"btn","btn-sm","btn-warning","rounded-circle","text-white"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Devolver herramientas"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"h5",5),t._uU(8," Herramientas Prestadas "),t.qZA(),t.YNc(9,m,2,0,"p",6),t.TgZ(10,"table",7)(11,"tbody"),t.YNc(12,y,8,3,"tr",8),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t._uU(15,"Devolver todo sin novedad"),t.qZA()(),t.TgZ(16,"h5",5),t._uU(17," Herramientas a devolver "),t.qZA(),t.TgZ(18,"p",5),t._uU(19,"No hay herramientas devueltas"),t.qZA()(),t.TgZ(20,"div",11)(21,"button",12),t._uU(22,"Guardar"),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return n.bsModalRef.hide()}),t._uU(24,"Cerrar"),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("ngIf",n.outputTool&&!n.outputTool.tools.length),t.xp6(3),t.Q6J("ngForOf",null==n.outputTool?null:n.outputTool.tools))},dependencies:[c.sg,c.O5,p.BN]})}var k=s(2771),f=s(7323),w=s(5307),U=s(7129);class g{transform(e,o){return e&&e.includes(o)}static#t=this.\u0275fac=function(o){return new(o||g)};static#o=this.\u0275pipe=t.Yjl({name:"listActionsFilter",type:g,pure:!0})}function I(i,e){1&i&&(t.TgZ(0,"th"),t._uU(1,"Acciones"),t.qZA())}function N(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2).$implicit,u=t.oxw(2);return t.KtG(u.actionButtonClicked(l,u.listActions.info))}),t._UZ(1,"fa-icon",7),t.qZA()}if(2&i){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faCircleInfo)}}function q(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2).$implicit,u=t.oxw(2);return t.KtG(u.actionButtonClicked(l,u.listActions.check))}),t._UZ(1,"fa-icon",8),t.qZA()}if(2&i){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faCircleCheck)}}function J(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2).$implicit,u=t.oxw(2);return t.KtG(u.actionButtonClicked(l,u.listActions.warning))}),t._UZ(1,"fa-icon",9),t.qZA()}if(2&i){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faTriangleExclamation)}}function L(i,e){if(1&i&&(t.TgZ(0,"td"),t.YNc(1,N,2,1,"button",5),t.ALo(2,"listActionsFilter"),t.YNc(3,q,2,1,"button",5),t.ALo(4,"listActionsFilter"),t.YNc(5,J,2,1,"button",5),t.ALo(6,"listActionsFilter"),t.qZA()),2&i){const o=t.oxw(3);t.xp6(1),t.Q6J("ngIf",t.xi3(2,3,o.actions,o.listActions.info)),t.xp6(2),t.Q6J("ngIf",t.xi3(4,6,o.actions,o.listActions.check)),t.xp6(2),t.Q6J("ngIf",t.xi3(6,9,o.actions,o.listActions.warning))}}function F(i,e){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.YNc(6,L,7,12,"td",3),t.qZA()),2&i){const o=e.$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,3,o.toolGuid)),t.xp6(3),t.Oqu(o.toolName),t.xp6(1),t.Q6J("ngIf",n.actions)}}function Y(i,e){if(1&i&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.YNc(7,I,2,0,"th",3),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,F,7,5,"tr",4),t.qZA()()),2&i){const o=t.oxw();t.xp6(7),t.Q6J("ngIf",o.actions),t.xp6(2),t.Q6J("ngForOf",o.tools)}}function R(i,e){1&i&&(t.TgZ(0,"p",10),t._uU(1,"No hay herramientas"),t.qZA())}class A{constructor(){this.faCircleInfo=r.DBf,this.faCircleCheck=r.fV7,this.faTriangleExclamation=r.ik8,this.listActions=d.D,this.actionButtonClickedEvent=new t.vpe}actionButtonClicked(e,o){this.actionButtonClickedEvent.emit({tool:e,action:o})}static#t=this.\u0275fac=function(o){return new(o||A)};static#o=this.\u0275cmp=t.Xpm({type:A,selectors:[["tools-list"]],inputs:{tools:"tools",actions:"actions"},outputs:{actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","action-button","type","button",3,"click",4,"ngIf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-success",3,"icon"],[1,"text-warning",3,"icon"],[1,"text-center"]],template:function(o,n){1&o&&(t.YNc(0,Y,10,2,"table",0),t.YNc(1,R,2,0,"p",1)),2&o&&(t.Q6J("ngIf",n.tools&&n.tools.length),t.xp6(1),t.Q6J("ngIf",n.tools&&!n.tools.length))},dependencies:[c.sg,c.O5,p.BN,U.$,g],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}"]})}var D=s(8073),E=s(5090);function M(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div",10)(1,"button",11),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2);return t.KtG(l.returnToolsWithNoIssues())}),t._uU(2,"Devolver todo sin novedad"),t.qZA()()}}function B(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div",1)(1,"h2",2),t._uU(2,"Registro de salida de herramienta - Detalle"),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li")(7,"p")(8,"b"),t._uU(9,"Fecha de creaci\xf3n:"),t.qZA(),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"li")(13,"p")(14,"b"),t._uU(15,"Responsable: "),t.qZA(),t.TgZ(16,"a",6),t._uU(17),t.qZA()()(),t.TgZ(18,"li")(19,"p")(20,"b"),t._uU(21,"Estado: "),t.qZA(),t._uU(22),t.qZA()()()()(),t.TgZ(23,"div",3)(24,"div",4)(25,"h4",2),t._uU(26,"Herramientas prestadas"),t.qZA(),t.TgZ(27,"tools-list",7),t.NdJ("actionButtonClickedEvent",function(l){t.CHM(o);const u=t.oxw();return t.KtG(u.actionButtonClicked(l))}),t.qZA(),t.YNc(28,M,3,0,"div",8),t.qZA()(),t.TgZ(29,"div",3)(30,"div",4)(31,"h4",2),t._uU(32,"Herramientas devueltas"),t.qZA(),t.TgZ(33,"app-items-list",9),t.NdJ("rowClickedEvent",function(l){t.CHM(o);const u=t.oxw();return t.KtG(u.returnedToolRowClicked(l))}),t.ALo(34,"toItemList"),t.qZA()()()()}if(2&i){const o=t.oxw();t.xp6(10),t.hij(" ",t.xi3(11,8,o.toolOutput.outputDateTime,"dd/MM/YYYY"),""),t.xp6(6),t.Q6J("routerLink","/"+o.routeConstants.usersManagement+"/"+o.toolOutput.responsible.userId),t.xp6(1),t.Oqu(o.toolOutput.responsible.name),t.xp6(5),t.hij(" ","open"==o.toolOutput.toolOutputState.toolOutputStateName.toLowerCase()?"Abierto":"Cerrado"," "),t.xp6(5),t.Q6J("tools",o.lentTools)("actions",o.listActions),t.xp6(1),t.Q6J("ngIf",null==o.lentTools?null:o.lentTools.length),t.xp6(5),t.Q6J("items",t.xi3(34,11,o.availableTools,"tool"))}}class b{constructor(e,o,n,l){this.modalService=e,this.route=o,this.router=n,this.httpService=l,this.listActions=[d.D.info,d.D.check,d.D.warning],this.routeConstants=k.p7}ngOnInit(){this.getOutputTool()}getOutputTool(){const e=this.route.snapshot.paramMap.get("id");this.httpService.get(`${f.G.toolOutputsApi}/${e}`).subscribe(o=>{this.toolOutput=o,this.lentTools=this.toolOutput.tools.filter(n=>!n.returnDateTime),this.availableTools=this.toolOutput.tools.filter(n=>n.returnDateTime)})}openReturnToolsModal(){this.modalRef=this.modalService.show(T,{initialState:{outputTool:this.toolOutput}})}returnToolsWithNoIssues(){this.httpService.post(`${f.G.toolOutputsApi}/return-tools-with-no-issues/${this.toolOutput.toolOutputId}`,{}).subscribe()}returnToolWithIssues(e){this.httpService.post(`${f.G.toolOutputsApi}/return-tool-with-news`,{outputToolId:this.toolOutput.toolOutputId,toolNewsDto:{toolId:e.toolId}}).subscribe(n=>{console.log(n)})}returnToolWithNoIssues(e){this.httpService.post(`${f.G.toolOutputsApi}/return-tool-with-no-issues/${this.toolOutput.toolOutputId}/${e.toolId}`,{}).subscribe(o=>{console.log(o)})}actionButtonClicked(e){switch(e.action){case d.D.info:this.router.navigateByUrl(`/tools-management/${e.tool.toolId}`);break;case d.D.check:this.returnToolWithNoIssues(e.tool)}}returnedToolRowClicked(e){const o=this.availableTools.find(n=>n.toolName.toLowerCase()==e.name.toLowerCase());o&&this.router.navigateByUrl(`${k.p7.toolsPath}/${o.toolId}`)}static#t=this.\u0275fac=function(o){return new(o||b)(t.Y36(a.tT),t.Y36(_.gz),t.Y36(_.F0),t.Y36(w.O))};static#o=this.\u0275cmp=t.Xpm({type:b,selectors:[["app-tools-output-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"text-center","mt-3"],[1,"row","mt-3"],[1,"col"],[1,"list-unstyled"],[3,"routerLink"],[3,"tools","actions","actionButtonClickedEvent"],["class","text-center",4,"ngIf"],[3,"items","rowClickedEvent"],[1,"text-center"],[1,"btn","btn-outline-primary","btn-sm",3,"click"]],template:function(o,n){1&o&&t.YNc(0,B,35,14,"div",0),2&o&&t.Q6J("ngIf",n.toolOutput)},dependencies:[c.O5,_.rH,A,D.H,c.uU,E.R]})}function Q(i,e){1&i&&(t.TgZ(0,"p",5),t._uU(1,"No se encontraron registros de salida de equipos"),t.qZA())}function S(i,e){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,Q,2,0,"p",4),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.outputTools.length)}}class Z{constructor(){this.faCircleInfo=r.DBf}static#t=this.\u0275fac=function(o){return new(o||Z)};static#o=this.\u0275cmp=t.Xpm({type:Z,selectors:[["app-open-tools-output-list"]],inputs:{outputTools:"outputTools"},decls:4,vars:1,consts:[[1,"row"],[1,"mt-4","text-center"],["class","col",4,"ngIf"],[1,"col"],["class","text-center",4,"ngIf"],[1,"text-center"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registro de salidas de equipos"),t.qZA(),t.YNc(3,S,2,1,"div",2),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngIf",n.outputTools))},dependencies:[c.O5]})}class v{constructor(e,o){this.modalService=e,this.httpService=o}ngOnInit(){this.getOutputToolsRegisters()}onOpenAddToolModal(){}getOutputToolsRegisters(){this.httpService.get("OutputTools").subscribe(e=>{this.toolOutputsRegisters=e,this.openToolOutputs=this.toolOutputsRegisters.filter(o=>"Open"==o.toolOutputState.toolOutputStateName),this.closedToolOutputs=this.toolOutputsRegisters.filter(o=>"Open"!=o.toolOutputState.toolOutputStateName)})}static#t=this.\u0275fac=function(o){return new(o||v)(t.Y36(a.tT),t.Y36(w.O))};static#o=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-tool-output"]],decls:7,vars:1,consts:[[1,"container"],[1,"mt-3","text-center"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"outputTools"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Salida e ingreso de equipos y herramienta"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return n.onOpenAddToolModal()}),t._uU(5,"Registrar nueva salida"),t.qZA()(),t._UZ(6,"app-open-tools-output-list",4),t.qZA()),2&o&&(t.xp6(6),t.Q6J("outputTools",n.toolOutputsRegisters))},dependencies:[Z]})}const $=[{path:"",component:v},{path:":id",component:b}];class C{static#t=this.\u0275fac=function(o){return new(o||C)};static#o=this.\u0275mod=t.oAB({type:C});static#e=this.\u0275inj=t.cJS({imports:[_.Bz.forChild($),_.Bz]})}var G=s(6619);class x{static#t=this.\u0275fac=function(o){return new(o||x)};static#o=this.\u0275mod=t.oAB({type:x});static#e=this.\u0275inj=t.cJS({imports:[c.ez,C,G.m]})}}}]);