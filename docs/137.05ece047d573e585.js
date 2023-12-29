"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[137],{7323:(A,h,a)=>{a.d(h,{G:()=>e});class e{static#t=this.accountLogin="Account/login";static#o=this.addUserApi="Users/addUser";static#e=this.branchesApi="Branches";static#n=this.customersApi="Customers";static#i=this.equipmentApi="Equipment";static#s=this.equipmentParametersApi="Equipment/parameters";static#c=this.measurementUnitsApi="MeasurementUnits";static#a=this.userApi="Users";static#r=this.userEmployeeApi="Users/employee";static#l=this.userEmployeesApi="Users/employees";static#u=this.userRolesApi="UserRole";static#p=this.workItemApi="WorkItem";static#m=this.workOrderApi="WorkOrder";static#d=this.workOrderActivity=`${this.workOrderApi}/activity`;static#_=this.workOrderTypesApi=`${this.workOrderApi}/workOrderTypes`;static#h=this.workOrderTypeApi=`${this.workOrderApi}/workOrderType`;static#f=this.workOrderFilesApi=`${this.workOrderApi}/workOrderFiles`;static#g=this.toolsApi="Tools";static#T=this.toolParametersApi="Tools/parameters";static#b=this.toolOutputsApi="ToolOutputs";static#C=this.workStateApi="WorkState"}},860:(A,h,a)=>{a.d(h,{D:()=>e});var e=(()=>{return(l=e||(e={}))[l.info=0]="info",l[l.check=1]="check",l[l.warning=2]="warning",l[l.trash=3]="trash",l[l.edit=4]="edit",e;var l})()},5307:(A,h,a)=>{a.d(h,{O:()=>u});var e=a(529);var f=a(1571);class u{constructor(i){this.httpClient=i,this.api_url="/api/"}get(i){return this.httpClient.get(this.api_url+i)}post(i,_){return this.httpClient.post(this.api_url+i,_)}postFormData(i,_){const v=new e.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+i,_,{headers:v})}put(i,_){return this.httpClient.put(this.api_url+i,_)}delete(i){return this.httpClient.delete(this.api_url+i)}static#t=this.\u0275fac=function(_){return new(_||u)(f.LFG(e.eN))};static#o=this.\u0275prov=f.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}},8073:(A,h,a)=>{a.d(h,{H:()=>b});var e=a(1571),l=a(2771),f=a(6895),u=a(2216),t=a(2687),i=a(860);class _{constructor(){this.listActions=i.D,this.faEdit=t.Xcf}transform(m){return t.Xcf}static#t=this.\u0275fac=function(r){return new(r||_)};static#o=this.\u0275pipe=e.Yjl({name:"listActionIcon",type:_,pure:!0})}function v(p,m){if(1&p&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&p){const r=m.$implicit;e.xp6(1),e.hij(" ",r," ")}}function E(p,m){1&p&&(e.TgZ(0,"th"),e._uU(1," Acciones "),e.qZA())}function C(p,m){if(1&p){const r=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const I=e.CHM(r).$implicit,x=e.oxw(2).$implicit,O=e.oxw(2);return e.KtG(O.actionButtonClicked(I,x))}),e._UZ(1,"fa-icon",9),e.ALo(2,"listActionIcon"),e.qZA()}if(2&p){const r=m.$implicit;e.xp6(1),e.Q6J("icon",e.lcZ(2,1,r))}}function k(p,m){if(1&p&&(e.TgZ(0,"td"),e.YNc(1,C,3,3,"button",7),e.qZA()),2&p){const r=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",r.actions)}}function Z(p,m){if(1&p){const r=e.EpF();e.TgZ(0,"tr",6),e.NdJ("click",function(y){const x=e.CHM(r).$implicit,O=e.oxw(2);return e.KtG(O.onRowClicked(y,x))}),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.YNc(5,k,2,1,"td",4),e.qZA()}if(2&p){const r=m.$implicit,g=e.oxw(2);e.xp6(2),e.hij(" ",r.id," "),e.xp6(2),e.hij(" ",r.name," "),e.xp6(1),e.Q6J("ngIf",g.actions)}}function w(p,m){if(1&p&&(e.TgZ(0,"table",2)(1,"thead")(2,"tr"),e.YNc(3,v,2,1,"th",3),e.YNc(4,E,2,0,"th",4),e.qZA()(),e.TgZ(5,"tbody"),e.YNc(6,Z,6,3,"tr",5),e.qZA()()),2&p){const r=e.oxw();e.xp6(3),e.Q6J("ngForOf",r.headers),e.xp6(1),e.Q6J("ngIf",r.actions),e.xp6(2),e.Q6J("ngForOf",r.items)}}function Y(p,m){1&p&&(e.TgZ(0,"p",10),e._uU(1," No se encontraron elementos\n"),e.qZA())}class b{constructor(){this.headers=l.$x.itemsListDefault,this.rowClickedEvent=new e.vpe,this.actionButtonClickedEvent=new e.vpe}onRowClicked(m,r){m.composedPath().some(g=>"svg"===g.tagName)||this.rowClickedEvent.emit(r)}actionButtonClicked(m,r){this.actionButtonClickedEvent.emit({action:m,item:r})}static#t=this.\u0275fac=function(r){return new(r||b)};static#o=this.\u0275cmp=e.Xpm({type:b,selectors:[["app-items-list"]],inputs:{items:"items",actions:"actions",headers:"headers"},outputs:{rowClickedEvent:"rowClickedEvent",actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table table-hover",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[4,"ngIf"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"],["class","action-button","type","button",3,"click",4,"ngFor","ngForOf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-center"]],template:function(r,g){1&r&&(e.YNc(0,w,7,3,"table",0),e.YNc(1,Y,2,0,"p",1)),2&r&&(e.Q6J("ngIf",g.items&&g.items.length),e.xp6(1),e.Q6J("ngIf",g.items&&!g.items.length))},dependencies:[f.sg,f.O5,u.BN,_],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}.action-button[_ngcontent-%COMP%]:hover{color:#000}"]})}},5090:(A,h,a)=>{a.d(h,{R:()=>l});var e=a(1571);class l{transform(u,t){if(!u)return new Array;switch(t){case"user":return u.map(i=>({id:i.userId,name:i.name}));case"customer":case"branch":case"equipment":return u.map(i=>({id:i.id,name:i.name}));case"workOrderActivity":return u.map(i=>({id:i.id,name:i.description}));case"equipmentParameter":return u.map(i=>({id:i.id,name:`${i.name} | Magnitud: ${i.measurementUnitSymbol}`}));case"measurementUnits":return u.map(i=>({id:i.measurementUnitId,name:`${i.displayName} (${i.symbol})`}));case"toolParameter":return u.map(i=>({id:i.id,name:i.measurementUnitSymbol?`${i.name} | Magnitud: ${i.measurementUnitSymbol}`:`${i.name}`}));case"tool":return u.map(i=>({id:i.toolGuid.slice(-6),name:i.toolName}));default:return new Array}}static#t=this.\u0275fac=function(t){return new(t||l)};static#o=this.\u0275pipe=e.Yjl({name:"toItemList",type:l,pure:!0})}},8137:(A,h,a)=>{a.r(h),a.d(h,{ToolOutputModule:()=>L});var e=a(6895),l=a(8869),f=a(860),u=a(2687),t=a(1571),i=a(18),_=a(2216);function v(c,n){1&c&&(t.TgZ(0,"p"),t._uU(1,"No hay herramientas prestadas"),t.qZA())}function E(c,n){if(1&c&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",14)(4,"button",15),t._UZ(5,"fa-icon",16),t.qZA(),t.TgZ(6,"button",17),t._UZ(7,"fa-icon",16),t.qZA()()()),2&c){const o=n.$implicit,s=t.oxw();t.xp6(2),t.Oqu(o.toolName),t.xp6(3),t.Q6J("icon",s.faCheck),t.xp6(2),t.Q6J("icon",s.faTriangleExclamation)}}class C{constructor(n){this.bsModalRef=n,this.faCheck=u.LEp,this.faTriangleExclamation=u.ik8}static#t=this.\u0275fac=function(o){return new(o||C)(t.Y36(i.UZ))};static#o=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-return-tools"]],decls:25,vars:2,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"text-center"],[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],[1,"text-center","mb-3"],[1,"btn","btn-outline-primary","btn-sm"],[1,"modal-footer"],["type","button","disabled","",1,"btn","btn-outline-primary"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"text-end"],["type","button",1,"btn","btn-sm","btn-success","rounded-circle","me-2"],[3,"icon"],["type","button",1,"btn","btn-sm","btn-warning","rounded-circle","text-white"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Devolver herramientas"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return s.bsModalRef.hide()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"h5",5),t._uU(8," Herramientas Prestadas "),t.qZA(),t.YNc(9,v,2,0,"p",6),t.TgZ(10,"table",7)(11,"tbody"),t.YNc(12,E,8,3,"tr",8),t.qZA()(),t.TgZ(13,"div",9)(14,"button",10),t._uU(15,"Devolver todo sin novedad"),t.qZA()(),t.TgZ(16,"h5",5),t._uU(17," Herramientas a devolver "),t.qZA(),t.TgZ(18,"p",5),t._uU(19,"No hay herramientas devueltas"),t.qZA()(),t.TgZ(20,"div",11)(21,"button",12),t._uU(22,"Guardar"),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return s.bsModalRef.hide()}),t._uU(24,"Cerrar"),t.qZA()()),2&o&&(t.xp6(9),t.Q6J("ngIf",s.outputTool&&!s.outputTool.tools.length),t.xp6(3),t.Q6J("ngForOf",null==s.outputTool?null:s.outputTool.tools))},dependencies:[e.sg,e.O5,_.BN]})}var k=a(2771),Z=a(7323),w=a(5307),Y=a(7129);class b{transform(n,o){return n&&n.includes(o)}static#t=this.\u0275fac=function(o){return new(o||b)};static#o=this.\u0275pipe=t.Yjl({name:"listActionsFilter",type:b,pure:!0})}function p(c,n){1&c&&(t.TgZ(0,"th"),t._uU(1,"Acciones"),t.qZA())}function m(c,n){if(1&c){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const d=t.oxw(2).$implicit,T=t.oxw(2);return t.KtG(T.actionButtonClicked(d,T.listActions.info))}),t._UZ(1,"fa-icon",7),t.qZA()}if(2&c){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faCircleInfo)}}function r(c,n){if(1&c){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const d=t.oxw(2).$implicit,T=t.oxw(2);return t.KtG(T.actionButtonClicked(d,T.listActions.check))}),t._UZ(1,"fa-icon",8),t.qZA()}if(2&c){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faCircleCheck)}}function g(c,n){if(1&c){const o=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(o);const d=t.oxw(2).$implicit,T=t.oxw(2);return t.KtG(T.actionButtonClicked(d,T.listActions.warning))}),t._UZ(1,"fa-icon",9),t.qZA()}if(2&c){const o=t.oxw(4);t.xp6(1),t.Q6J("icon",o.faTriangleExclamation)}}function y(c,n){if(1&c&&(t.TgZ(0,"td"),t.YNc(1,m,2,1,"button",5),t.ALo(2,"listActionsFilter"),t.YNc(3,r,2,1,"button",5),t.ALo(4,"listActionsFilter"),t.YNc(5,g,2,1,"button",5),t.ALo(6,"listActionsFilter"),t.qZA()),2&c){const o=t.oxw(3);t.xp6(1),t.Q6J("ngIf",t.xi3(2,3,o.actions,o.listActions.info)),t.xp6(2),t.Q6J("ngIf",t.xi3(4,6,o.actions,o.listActions.check)),t.xp6(2),t.Q6J("ngIf",t.xi3(6,9,o.actions,o.listActions.warning))}}function I(c,n){if(1&c&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"lastCharacters"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.YNc(6,y,7,12,"td",3),t.qZA()),2&c){const o=n.$implicit,s=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,3,o.toolGuid)),t.xp6(3),t.Oqu(o.toolName),t.xp6(1),t.Q6J("ngIf",s.actions)}}function x(c,n){if(1&c&&(t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Nombre"),t.qZA(),t.YNc(7,p,2,0,"th",3),t.qZA()(),t.TgZ(8,"tbody"),t.YNc(9,I,7,5,"tr",4),t.qZA()()),2&c){const o=t.oxw();t.xp6(7),t.Q6J("ngIf",o.actions),t.xp6(2),t.Q6J("ngForOf",o.tools)}}function O(c,n){1&c&&(t.TgZ(0,"p",10),t._uU(1,"No hay herramientas"),t.qZA())}class U{constructor(){this.faCircleInfo=u.DBf,this.faCircleCheck=u.fV7,this.faTriangleExclamation=u.ik8,this.listActions=f.D,this.actionButtonClickedEvent=new t.vpe}actionButtonClicked(n,o){this.actionButtonClickedEvent.emit({tool:n,action:o})}static#t=this.\u0275fac=function(o){return new(o||U)};static#o=this.\u0275cmp=t.Xpm({type:U,selectors:[["tools-list"]],inputs:{tools:"tools",actions:"actions"},outputs:{actionButtonClickedEvent:"actionButtonClickedEvent"},decls:2,vars:2,consts:[["class","table",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"table"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","action-button","type","button",3,"click",4,"ngIf"],["type","button",1,"action-button",3,"click"],[1,"text-primary",3,"icon"],[1,"text-success",3,"icon"],[1,"text-warning",3,"icon"],[1,"text-center"]],template:function(o,s){1&o&&(t.YNc(0,x,10,2,"table",0),t.YNc(1,O,2,0,"p",1)),2&o&&(t.Q6J("ngIf",s.tools&&s.tools.length),t.xp6(1),t.Q6J("ngIf",s.tools&&!s.tools.length))},dependencies:[e.sg,e.O5,_.BN,Y.$,b],styles:[".action-button[_ngcontent-%COMP%]{padding:0;background:transparent;border:none;margin-right:.5rem}.action-button[_ngcontent-%COMP%]:last-child{margin-right:none}"]})}var $=a(8073),B=a(5090);function M(c,n){if(1&c){const o=t.EpF();t.TgZ(0,"div",10)(1,"button",11),t.NdJ("click",function(){t.CHM(o);const d=t.oxw(2);return t.KtG(d.returnToolsWithNoIssues())}),t._uU(2,"Devolver todo sin novedad"),t.qZA()()}}function Q(c,n){if(1&c){const o=t.EpF();t.TgZ(0,"div",1)(1,"h2",2),t._uU(2,"Registro de salida de herramienta - Detalle"),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li")(7,"p")(8,"b"),t._uU(9,"Fecha de creaci\xf3n:"),t.qZA(),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"li")(13,"p")(14,"b"),t._uU(15,"Responsable: "),t.qZA(),t.TgZ(16,"a",6),t._uU(17),t.qZA()()(),t.TgZ(18,"li")(19,"p")(20,"b"),t._uU(21,"Estado: "),t.qZA(),t._uU(22),t.qZA()()()()(),t.TgZ(23,"div",3)(24,"div",4)(25,"h4",2),t._uU(26,"Herramientas prestadas"),t.qZA(),t.TgZ(27,"tools-list",7),t.NdJ("actionButtonClickedEvent",function(d){t.CHM(o);const T=t.oxw();return t.KtG(T.actionButtonClicked(d))}),t.qZA(),t.YNc(28,M,3,0,"div",8),t.qZA()(),t.TgZ(29,"div",3)(30,"div",4)(31,"h4",2),t._uU(32,"Herramientas devueltas"),t.qZA(),t.TgZ(33,"app-items-list",9),t.NdJ("rowClickedEvent",function(d){t.CHM(o);const T=t.oxw();return t.KtG(T.returnedToolRowClicked(d))}),t.ALo(34,"toItemList"),t.qZA()()()()}if(2&c){const o=t.oxw();t.xp6(10),t.hij(" ",t.xi3(11,8,o.toolOutput.outputDateTime,"dd/MM/YYYY"),""),t.xp6(6),t.Q6J("routerLink","/"+o.routeConstants.usersManagement+"/"+o.toolOutput.responsible.userId),t.xp6(1),t.Oqu(o.toolOutput.responsible.name),t.xp6(5),t.hij(" ","open"==o.toolOutput.toolOutputState.toolOutputStateName.toLowerCase()?"Abierto":"Cerrado"," "),t.xp6(5),t.Q6J("tools",o.lentTools)("actions",o.listActions),t.xp6(1),t.Q6J("ngIf",null==o.lentTools?null:o.lentTools.length),t.xp6(5),t.Q6J("items",t.xi3(34,11,o.availableTools,"tool"))}}class N{constructor(n,o,s,d){this.modalService=n,this.route=o,this.router=s,this.httpService=d,this.listActions=[f.D.info,f.D.check,f.D.warning],this.routeConstants=k.p7}ngOnInit(){this.getOutputTool()}getOutputTool(){const n=this.route.snapshot.paramMap.get("id");this.httpService.get(`${Z.G.toolOutputsApi}/${n}`).subscribe(o=>{this.toolOutput=o,this.lentTools=this.toolOutput.tools.filter(s=>!s.returnDateTime),this.availableTools=this.toolOutput.tools.filter(s=>s.returnDateTime)})}openReturnToolsModal(){this.modalRef=this.modalService.show(C,{initialState:{outputTool:this.toolOutput}})}returnToolsWithNoIssues(){this.httpService.post(`${Z.G.toolOutputsApi}/return-tools-with-no-issues/${this.toolOutput.toolOutputId}`,{}).subscribe()}returnToolWithIssues(n){this.httpService.post(`${Z.G.toolOutputsApi}/return-tool-with-news`,{outputToolId:this.toolOutput.toolOutputId,toolNewsDto:{toolId:n.toolId}}).subscribe(s=>{console.log(s)})}returnToolWithNoIssues(n){this.httpService.post(`${Z.G.toolOutputsApi}/return-tool-with-no-issues/${this.toolOutput.toolOutputId}/${n.toolId}`,{}).subscribe(o=>{console.log(o)})}actionButtonClicked(n){switch(n.action){case f.D.info:this.router.navigateByUrl(`/tools-management/${n.tool.toolId}`);break;case f.D.check:this.returnToolWithNoIssues(n.tool)}}returnedToolRowClicked(n){const o=this.availableTools.find(s=>s.toolName.toLowerCase()==n.name.toLowerCase());o&&this.router.navigateByUrl(`${k.p7.toolsPath}/${o.toolId}`)}static#t=this.\u0275fac=function(o){return new(o||N)(t.Y36(i.tT),t.Y36(l.gz),t.Y36(l.F0),t.Y36(w.O))};static#o=this.\u0275cmp=t.Xpm({type:N,selectors:[["app-tools-output-detail"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"text-center","mt-3"],[1,"row","mt-3"],[1,"col"],[1,"list-unstyled"],[3,"routerLink"],[3,"tools","actions","actionButtonClickedEvent"],["class","text-center",4,"ngIf"],[3,"items","rowClickedEvent"],[1,"text-center"],[1,"btn","btn-outline-primary","btn-sm",3,"click"]],template:function(o,s){1&o&&t.YNc(0,Q,35,14,"div",0),2&o&&t.Q6J("ngIf",s.toolOutput)},dependencies:[e.O5,l.rH,U,$.H,e.uU,B.R]})}function D(c,n){1&c&&(t.TgZ(0,"p",5),t._uU(1,"No se encontraron registros de salida de equipos"),t.qZA())}function R(c,n){if(1&c&&(t.TgZ(0,"div",3),t.YNc(1,D,2,0,"p",4),t.qZA()),2&c){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.outputTools.length)}}class q{constructor(){this.faCircleInfo=u.DBf}static#t=this.\u0275fac=function(o){return new(o||q)};static#o=this.\u0275cmp=t.Xpm({type:q,selectors:[["app-open-tools-output-list"]],inputs:{outputTools:"outputTools"},decls:4,vars:1,consts:[[1,"row"],[1,"mt-4","text-center"],["class","col",4,"ngIf"],[1,"col"],["class","text-center",4,"ngIf"],[1,"text-center"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Registro de salidas de equipos"),t.qZA(),t.YNc(3,R,2,1,"div",2),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngIf",s.outputTools))},dependencies:[e.O5]})}class F{constructor(n,o){this.modalService=n,this.httpService=o}ngOnInit(){this.getOutputToolsRegisters()}onOpenAddToolModal(){}getOutputToolsRegisters(){this.httpService.get("OutputTools").subscribe(n=>{this.toolOutputsRegisters=n,this.openToolOutputs=this.toolOutputsRegisters.filter(o=>"Open"==o.toolOutputState.toolOutputStateName),this.closedToolOutputs=this.toolOutputsRegisters.filter(o=>"Open"!=o.toolOutputState.toolOutputStateName)})}static#t=this.\u0275fac=function(o){return new(o||F)(t.Y36(i.tT),t.Y36(w.O))};static#o=this.\u0275cmp=t.Xpm({type:F,selectors:[["app-tool-output"]],decls:7,vars:1,consts:[[1,"container"],[1,"mt-3","text-center"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[3,"outputTools"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Salida e ingreso de equipos y herramienta"),t.qZA(),t.TgZ(3,"div",2)(4,"button",3),t.NdJ("click",function(){return s.onOpenAddToolModal()}),t._uU(5,"Registrar nueva salida"),t.qZA()(),t._UZ(6,"app-open-tools-output-list",4),t.qZA()),2&o&&(t.xp6(6),t.Q6J("outputTools",s.toolOutputsRegisters))},dependencies:[q]})}const S=[{path:"",component:F},{path:":id",component:N}];class J{static#t=this.\u0275fac=function(o){return new(o||J)};static#o=this.\u0275mod=t.oAB({type:J});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(S),l.Bz]})}var G=a(6619);class L{static#t=this.\u0275fac=function(o){return new(o||L)};static#o=this.\u0275mod=t.oAB({type:L});static#e=this.\u0275inj=t.cJS({imports:[e.ez,J,G.m]})}}}]);