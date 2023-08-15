"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[137],{6858:(O,m,s)=>{s.d(m,{O:()=>u});var c=s(529),_=s(2340),d=s(1571);class u{constructor(a){this.httpClient=a,this.api_url=_.N.apiUrl}get(a){return this.httpClient.get(this.api_url+a)}post(a,p){return new c.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+a,p)}put(a,p){return this.httpClient.put(this.api_url+a,p)}postFormData(a,p){const T=new c.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+a,p,{headers:T})}static#t=this.\u0275fac=function(p){return new(p||u)(d.LFG(c.eN))};static#o=this.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}},8137:(O,m,s)=>{s.r(m),s.d(m,{ToolOutputModule:()=>x});var c=s(6895),_=s(8869),d=s(860),u=s(2687),t=s(1571),a=s(18),p=s(2216);function T(i,e){1&i&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas prestadas"),t.qZA())}function U(i,e){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",14)(4,"button",15),t._UZ(5,"fa-icon",16),t.qZA(),t.TgZ(6,"button",17),t._UZ(7,"fa-icon",16),t.qZA()()()),2&i){const o=e.$implicit,n=t.oxw();t.xp6(2),t.Oqu(o.toolName),t.xp6(3),t.Q6J("icon",n.faCheck),t.xp6(2),t.Q6J("icon",n.faTriangleExclamation)}}class f{constructor(e){this.bsModalRef=e,this.faCheck=u.LEp,this.faTriangleExclamation=u.ik8}static#t=this.\u0275fac=function(o){return new(o||f)(t.Y36(a.UZ))};static#o=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-return-tools"]],decls:25,vars:2,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"text-center"],[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],[1,"text-center","mb-3"],[1,"btn","btn-outline-primary","btn-sm"],[1,"modal-footer"],["type","button","disabled","",1,"btn","btn-outline-primary"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"text-end"],["type","button",1,"btn","btn-sm","btn-success","rounded-circle","me-2"],[3,"icon"],["type","button",1,"btn","btn-sm","btn-warning","rounded-circle","text-white"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Devolver herramientas"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"h5",5),t._uU(8," Herramientas Prestadas "),t.qZA(),t.YNc(9,T,2,0,"p",6),t.TgZ(10,"table",7)(11,"tbody"),t.YNc(12,U,8,3,"tr",8),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t._uU(15,"Devolver todo sin novedad"),t.qZA()(),t.TgZ(16,"h5",5),t._uU(17," Herramientas a devolver "),t.qZA(),t.TgZ(18,"p",5),t._uU(19,"No hay herramientas devueltas"),t.qZA()(),t.TgZ(20,"div",11)(21,"button",12),t._uU(22,"Guardar"),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return n.bsModalRef.hide()}),t._uU(24,"Cerrar"),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("ngIf",n.outputTool&&!n.outputTool.tools.length),t.xp6(3),t.Q6J("ngForOf",null==n.outputTool?null:n.outputTool.tools))},dependencies:[c.sg,c.O5,p.BN]})}var h=s(2771),I=s(6858),w=s(7129);class g{transform(e,o){return e&&e.includes(o)}static#t=this.\u0275fac=function(o){return new(o||g)};static#o=this.\u0275pipe=t.Yjl({name:"listActionsFilter",type:g,pure:!0})}function y(i,e){1&i&&(t.TgZ(0,"th"),t._uU(1,"Acciones"),t.qZA())}function N(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2).$implicit,r=t.oxw(2);return t.KtG(r.actionButtonClicked(l,r.listActions.info))}),t._UZ(1,"fa-icon",7),t.qZA()}if(2&i){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faCircleInfo)}}function k(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2).$implicit,r=t.oxw(2);return t.KtG(r.actionButtonClicked(l,r.listActions.check))}),t._UZ(1,"fa-icon",8),t.qZA()}if(2&i){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faCircleCheck)}}function q(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2).$implicit,r=t.oxw(2);return t.KtG(r.actionButtonClicked(l,r.listActions.warning))}),t._UZ(1,"fa-icon",9),t.qZA()}if(2&i){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faTriangleExclamation)}}function J(i,e){if(1&i&&(t.TgZ(0,"td"),t.YNc(1,N,2,1,"button",5),t.ALo(2,"listActionsFilter"),t.YNc(3,k,2,1,"button",5),t.ALo(4,"listActionsFilter"),t.YNc(5,q,2,1,"button",5),t.ALo(6,"listActionsFilter"),t.qZA()),2&i){const o=t.oxw(3);t.xp6(1),t.Q6J("ngIf",t.xi3(2,3,o.actions,o.listActions.info)),t.xp6(2),t.Q6J("ngIf",t.xi3(4,6,o.actions,o.listActions.check)),t.xp6(2),t.Q6J("ngIf",t.xi3(6,9,o.actions,o.listActions.warning))}}function L(i,e){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.YNc(6,J,7,12,"td",3),t.qZA()),2&i){const o=e.$implicit,n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,3,o.toolGuid)),t.xp6(3),t.Oqu(o.toolName),t.xp6(1),t.Q6J("ngIf",n.actions)}}function D(i,e){if(1&i&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.YNc(7,y,2,0,"th",3),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,L,7,5,"tr",4),t.qZA()()),2&i){const o=t.oxw();t.xp6(7),t.Q6J("ngIf",o.actions),t.xp6(2),t.Q6J("ngForOf",o.tools)}}function E(i,e){1&i&&(t.TgZ(0,"p",10),t._uU(1,"No hay herramientas"),t.qZA())}class b{constructor(){this.faCircleInfo=u.DBf,this.faCircleCheck=u.fV7,this.faTriangleExclamation=u.ik8,this.listActions=d.D,this.actionButtonClickedEvent=new t.vpe}actionButtonClicked(e,o){this.actionButtonClickedEvent.emit({tool:e,action:o})}static#t=this.\u0275fac=function(o){return new(o||b)};static#o=this.\u0275cmp=t.Xpm({type:b,selectors:[["tools-list"]],inputs:{tools:"tools",actions:"actions"},outputs:{actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","action-button","type","button",3,"click",4,"ngIf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-success",3,"icon"],[1,"text-warning",3,"icon"],[1,"text-center"]],template:function(o,n){1&o&&(t.YNc(0,D,10,2,"table",0),t.YNc(1,E,2,0,"p",1)),2&o&&(t.Q6J("ngIf",n.tools&&n.tools.length),t.xp6(1),t.Q6J("ngIf",n.tools&&!n.tools.length))},dependencies:[c.sg,c.O5,p.BN,w.$,g],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}"]})}var M=s(8073),F=s(5090);function R(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div",10)(1,"button",11),t.NdJ("click",function(){t.CHM(o);const l=t.oxw(2);return t.KtG(l.returnToolsWithNoIssues())}),t._uU(2,"Devolver todo sin novedad"),t.qZA()()}}function Y(i,e){if(1&i){const o=t.EpF();t.TgZ(0,"div",1)(1,"h2",2),t._uU(2,"Registro de salida de herramienta - Detalle"),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li")(7,"p")(8,"b"),t._uU(9,"Fecha de creaci\xf3n:"),t.qZA(),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"li")(13,"p")(14,"b"),t._uU(15,"Responsable: "),t.qZA(),t.TgZ(16,"a",6),t._uU(17),t.qZA()()(),t.TgZ(18,"li")(19,"p")(20,"b"),t._uU(21,"Estado: "),t.qZA(),t._uU(22),t.qZA()()()()(),t.TgZ(23,"div",3)(24,"div",4)(25,"h4",2),t._uU(26,"Herramientas prestadas"),t.qZA(),t.TgZ(27,"tools-list",7),t.NdJ("actionButtonClickedEvent",function(l){t.CHM(o);const r=t.oxw();return t.KtG(r.actionButtonClicked(l))}),t.qZA(),t.YNc(28,R,3,0,"div",8),t.qZA()(),t.TgZ(29,"div",3)(30,"div",4)(31,"h4",2),t._uU(32,"Herramientas devueltas"),t.qZA(),t.TgZ(33,"app-items-list",9),t.NdJ("rowClickedEvent",function(l){t.CHM(o);const r=t.oxw();return t.KtG(r.returnedToolRowClicked(l))}),t.ALo(34,"toItemList"),t.qZA()()()()}if(2&i){const o=t.oxw();t.xp6(10),t.hij(" ",t.xi3(11,8,o.toolOutput.outputDateTime,"dd/MM/YYYY"),""),t.xp6(6),t.Q6J("routerLink","/"+o.routeConstants.usersManagement+"/"+o.toolOutput.responsible.userId),t.xp6(1),t.Oqu(o.toolOutput.responsible.name),t.xp6(5),t.hij(" ","open"==o.toolOutput.toolOutputState.toolOutputStateName.toLowerCase()?"Abierto":"Cerrado"," "),t.xp6(5),t.Q6J("tools",o.lentTools)("actions",o.listActions),t.xp6(1),t.Q6J("ngIf",null==o.lentTools?null:o.lentTools.length),t.xp6(5),t.Q6J("items",t.xi3(34,11,o.availableTools,"tool"))}}class Z{constructor(e,o,n,l){this.modalService=e,this.route=o,this.router=n,this.httpService=l,this.listActions=[d.D.info,d.D.check,d.D.warning],this.routeConstants=h.p7}ngOnInit(){this.getOutputTool()}getOutputTool(){const e=this.route.snapshot.paramMap.get("id");this.httpService.get(`${h.G8.toolOutputsApi}/${e}`).subscribe(o=>{this.toolOutput=o,this.lentTools=this.toolOutput.tools.filter(n=>!n.returnDateTime),this.availableTools=this.toolOutput.tools.filter(n=>n.returnDateTime)})}openReturnToolsModal(){this.modalRef=this.modalService.show(f,{initialState:{outputTool:this.toolOutput}})}returnToolsWithNoIssues(){this.httpService.post(`${h.G8.toolOutputsApi}/return-tools-with-no-issues/${this.toolOutput.toolOutputId}`,{}).subscribe()}returnToolWithIssues(e){this.httpService.post(`${h.G8.toolOutputsApi}/return-tool-with-news`,{outputToolId:this.toolOutput.toolOutputId,toolNewsDto:{toolId:e.toolId}}).subscribe(n=>{console.log(n)})}returnToolWithNoIssues(e){this.httpService.post(`${h.G8.toolOutputsApi}/return-tool-with-no-issues/${this.toolOutput.toolOutputId}/${e.toolId}`,{}).subscribe(o=>{console.log(o)})}actionButtonClicked(e){switch(e.action){case d.D.info:this.router.navigateByUrl(`/tools-management/${e.tool.toolId}`);break;case d.D.check:this.returnToolWithNoIssues(e.tool)}}returnedToolRowClicked(e){const o=this.availableTools.find(n=>n.toolName.toLowerCase()==e.name.toLowerCase());o&&this.router.navigateByUrl(`${h.p7.toolsPath}/${o.toolId}`)}static#t=this.\u0275fac=function(o){return new(o||Z)(t.Y36(a.tT),t.Y36(_.gz),t.Y36(_.F0),t.Y36(I.O))};static#o=this.\u0275cmp=t.Xpm({type:Z,selectors:[["app-tools-output-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"text-center","mt-3"],[1,"row","mt-3"],[1,"col"],[1,"list-unstyled"],[3,"routerLink"],[3,"tools","actions","actionButtonClickedEvent"],["class","text-center",4,"ngIf"],[3,"items","rowClickedEvent"],[1,"text-center"],[1,"btn","btn-outline-primary","btn-sm",3,"click"]],template:function(o,n){1&o&&t.YNc(0,Y,35,14,"div",0),2&o&&t.Q6J("ngIf",n.toolOutput)},dependencies:[c.O5,_.rH,b,M.H,c.uU,F.R]})}function B(i,e){1&i&&(t.TgZ(0,"p",5),t._uU(1,"No se encontraron registros de salida de equipos"),t.qZA())}function Q(i,e){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,B,2,0,"p",4),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.outputTools.length)}}class v{constructor(){this.faCircleInfo=u.DBf}static#t=this.\u0275fac=function(o){return new(o||v)};static#o=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-open-tools-output-list"]],inputs:{outputTools:"outputTools"},decls:4,vars:1,consts:[[1,"row"],[1,"mt-4","text-center"],["class","col",4,"ngIf"],[1,"col"],["class","text-center",4,"ngIf"],[1,"text-center"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registro de salidas de equipos"),t.qZA(),t.YNc(3,Q,2,1,"div",2),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngIf",n.outputTools))},dependencies:[c.O5]})}class C{constructor(e,o){this.modalService=e,this.httpService=o}ngOnInit(){this.getOutputToolsRegisters()}onOpenAddToolModal(){}getOutputToolsRegisters(){this.httpService.get("OutputTools").subscribe(e=>{this.toolOutputsRegisters=e,this.openToolOutputs=this.toolOutputsRegisters.filter(o=>"Open"==o.toolOutputState.toolOutputStateName),this.closedToolOutputs=this.toolOutputsRegisters.filter(o=>"Open"!=o.toolOutputState.toolOutputStateName)})}static#t=this.\u0275fac=function(o){return new(o||C)(t.Y36(a.tT),t.Y36(I.O))};static#o=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-tool-output"]],decls:7,vars:1,consts:[[1,"container"],[1,"mt-3","text-center"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"outputTools"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Salida e ingreso de equipos y herramienta"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return n.onOpenAddToolModal()}),t._uU(5,"Registrar nueva salida"),t.qZA()(),t._UZ(6,"app-open-tools-output-list",4),t.qZA()),2&o&&(t.xp6(6),t.Q6J("outputTools",n.toolOutputsRegisters))},dependencies:[v]})}const S=[{path:"",component:C},{path:":id",component:Z}];class A{static#t=this.\u0275fac=function(o){return new(o||A)};static#o=this.\u0275mod=t.oAB({type:A});static#e=this.\u0275inj=t.cJS({imports:[_.Bz.forChild(S),_.Bz]})}var $=s(6619);class x{static#t=this.\u0275fac=function(o){return new(o||x)};static#o=this.\u0275mod=t.oAB({type:x});static#e=this.\u0275inj=t.cJS({imports:[c.ez,A,$.m]})}},2340:(O,m,s)=>{s.d(m,{N:()=>c});const c={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);