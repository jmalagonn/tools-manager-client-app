"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[847],{7323:(P,h,a)=>{a.d(h,{G:()=>e});class e{static#e=this.addUserApi="Users/addUser";static#t=this.branchesApi="Branches";static#n=this.customersApi="Customers";static#a=this.equipmentApi="Equipment";static#r=this.equipmentParametersApi="Equipment/parameters";static#o=this.measurementUnitsApi="MeasurementUnits";static#i=this.userApi="Users";static#s=this.userEmployeeApi="Users/employee";static#m=this.userEmployeesApi="Users/employees";static#c=this.userRolesApi="UserRole";static#p=this.workItemActivityLogApi="WorkItem/workItemActivityLog";static#l=this.workItemApi="WorkItem";static#d=this.workOrderApi="WorkOrder";static#_=this.workOrderTypesApi=`${this.workOrderApi}/workOrderTypes`;static#u=this.toolsApi="Tools";static#g=this.toolParametersApi="Tools/parameters";static#h=this.toolOutputsApi="ToolOutputs";static#f=this.workStateApi="WorkState"}},6858:(P,h,a)=>{a.d(h,{O:()=>p});var e=a(529),r=a(2340),_=a(1571);class p{constructor(m){this.httpClient=m,this.api_url=r.N.apiUrl}get(m){return this.httpClient.get(this.api_url+m)}post(m,i){return new e.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+m,i)}put(m,i){return this.httpClient.put(this.api_url+m,i)}postFormData(m,i){const n=new e.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+m,i,{headers:n})}static#e=this.\u0275fac=function(i){return new(i||p)(_.LFG(e.eN))};static#t=this.\u0275prov=_.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}},4028:(P,h,a)=>{a.d(h,{d:()=>C});var e=a(1571),r=a(2687),_=a(6895),p=a(2216),o=a(433),m=a(7323),i=a(6858),n=a(1875),u=a(7281);function g(l,s){if(1&l){const t=e.EpF();e.TgZ(0,"div",14)(1,"app-dropdown",15),e.NdJ("onSelectOptionEvent",function(d){e.CHM(t);const b=e.oxw();return e.KtG(b.onSelectOption(d))}),e.ALo(2,"toDropdownItem"),e.qZA()()}if(2&l){const t=e.oxw();e.xp6(1),e.Q6J("options",e.xi3(2,2,t.measurementUnits,"measurementUnits"))("label","Unidad de medida")}}class f{constructor(s,t){this.fb=s,this.httpService=t,this.faCheck=r.LEp,this.faX=r.EOp,this.cancelEvent=new e.vpe,this.addNewParameterEvent=new e.vpe}ngOnInit(){this.getMeasurementUnits(),this.initForm()}initForm(){this.addParameterForm=this.fb.group({parameterName:[null,o.kI.required],measurementUnitId:[null,o.kI.required],measurementUnitSymbol:[null],parameterValue:[null,o.kI.required]})}getMeasurementUnits(){this.httpService.get(m.G.measurementUnitsApi).subscribe(s=>this.measurementUnits=s)}onSelectOption(s){const t=this.measurementUnits.find(c=>c.measurementUnitId==s.id);this.addParameterForm.patchValue({measurementUnitId:t.measurementUnitId,measurementUnitSymbol:t.symbol})}addNewParameter(){!this.addParameterForm.valid||this.addNewParameterEvent.emit({name:this.addParameterForm.controls.parameterName.value,measurementUnitId:this.addParameterForm.controls.measurementUnitId.value,measurementUnitSymbol:this.addParameterForm.controls.measurementUnitSymbol.value,parameterValue:this.addParameterForm.controls.parameterValue.value})}static#e=this.\u0275fac=function(t){return new(t||f)(e.Y36(o.qu),e.Y36(i.O))};static#t=this.\u0275cmp=e.Xpm({type:f,selectors:[["app-add-new-parameter"]],outputs:{cancelEvent:"cancelEvent",addNewParameterEvent:"addNewParameterEvent"},decls:18,vars:5,consts:[[3,"formGroup"],[1,"row"],[1,"text-center"],[1,"col-lg-3","col-md-5"],["for","parameterName",1,"form-label"],["type","text","id","parameterName","formControlName","parameterName",1,"form-control"],["class","col-md-3",4,"ngIf"],[1,"col-lg-3","col-md-2"],["for","parameterValue",1,"form-label"],["type","text","id","parameterValue","formControlName","parameterValue",1,"form-control"],[1,"col-lg-3","col-md-2","action-buttons"],["type","button",1,"btn","btn-outline-success","me-2",3,"disabled","click"],[3,"icon"],["type","button",1,"btn","btn-outline-danger",3,"click"],[1,"col-md-3"],[3,"options","label","onSelectOptionEvent"]],template:function(t,c){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"h2",2),e._uU(3,"Nuevo par\xe1metero"),e.qZA(),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Nombre del par\xe1metro"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.YNc(8,g,3,5,"div",6),e.TgZ(9,"div",7)(10,"label",8),e._uU(11,"Valor/Descripci\xf3n"),e.qZA(),e._UZ(12,"input",9),e.qZA(),e.TgZ(13,"div",10)(14,"button",11),e.NdJ("click",function(){return c.addNewParameter()}),e._UZ(15,"fa-icon",12),e.qZA(),e.TgZ(16,"button",13),e.NdJ("click",function(){return c.cancelEvent.emit()}),e._UZ(17,"fa-icon",12),e.qZA()()()()),2&t&&(e.Q6J("formGroup",c.addParameterForm),e.xp6(8),e.Q6J("ngIf",c.measurementUnits),e.xp6(6),e.Q6J("disabled",!c.addParameterForm.valid),e.xp6(1),e.Q6J("icon",c.faCheck),e.xp6(2),e.Q6J("icon",c.faX))},dependencies:[_.O5,p.BN,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,n.J,u.s],styles:[".action-buttons[_ngcontent-%COMP%]{padding-top:2rem}"]})}function A(l,s){if(1&l){const t=e.EpF();e.TgZ(0,"form",1)(1,"div",2)(2,"h2",3),e._uU(3,"Configurar par\xe1metero"),e.qZA(),e.TgZ(4,"div",4)(5,"label",5),e._uU(6,"Nombre del par\xe1metro"),e.qZA(),e._UZ(7,"input",6),e.qZA(),e.TgZ(8,"div",7)(9,"label",5),e._uU(10,"Unidad de medida"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.TgZ(12,"div",8)(13,"label",9),e._uU(14,"Valor/Descripci\xf3n"),e.qZA(),e._UZ(15,"input",10),e.qZA(),e.TgZ(16,"div",11)(17,"button",12),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.setParameterValue())}),e._UZ(18,"fa-icon",13),e.qZA(),e.TgZ(19,"button",14),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.cancelEvent.emit())}),e._UZ(20,"fa-icon",13),e.qZA()()()()}if(2&l){const t=e.oxw();e.Q6J("formGroup",t.setParameterForm),e.xp6(7),e.Q6J("value",t.toolParameter.name),e.xp6(4),e.Q6J("value",t.toolParameter.measurementUnitSymbol),e.xp6(6),e.Q6J("disabled",!t.setParameterForm.valid),e.xp6(1),e.Q6J("icon",t.faCheck),e.xp6(2),e.Q6J("icon",t.faX)}}class v{constructor(s){this.fb=s,this.faCheck=r.LEp,this.faX=r.EOp,this.cancelEvent=new e.vpe,this.setParameterEvent=new e.vpe}ngOnInit(){this.initForm()}initForm(){this.setParameterForm=this.fb.group({parameterValue:[null,o.kI.required]})}setParameterValue(){!this.setParameterForm.valid||this.setParameterEvent.emit({id:this.toolParameter.id,measurementUnitId:this.toolParameter.measurementUnitId,measurementUnitSymbol:this.toolParameter.measurementUnitSymbol,name:this.toolParameter.name,parameterValue:this.setParameterForm.controls.parameterValue.value})}static#e=this.\u0275fac=function(t){return new(t||v)(e.Y36(o.qu))};static#t=this.\u0275cmp=e.Xpm({type:v,selectors:[["app-set-parameter"]],inputs:{toolParameter:"toolParameter"},outputs:{cancelEvent:"cancelEvent",setParameterEvent:"setParameterEvent"},decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"row"],[1,"text-center"],[1,"col-lg-3","col-md-5"],[1,"form-label"],["type","text","disabled","",1,"form-control",3,"value"],[1,"col-md-3"],[1,"col-lg-3","col-md-2"],["for","parameterValue",1,"form-label"],["type","text","id","parameterValue","formControlName","parameterValue",1,"form-control"],[1,"col-lg-3","col-md-2","action-buttons"],["type","button",1,"btn","btn-outline-success","me-2",3,"disabled","click"],[3,"icon"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(t,c){1&t&&e.YNc(0,A,21,6,"form",0),2&t&&e.Q6J("ngIf",c.toolParameter)},dependencies:[_.O5,p.BN,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".action-buttons[_ngcontent-%COMP%]{padding-top:2rem}"]})}function T(l,s){if(1&l){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"fa-icon",9),e.NdJ("click",function(){const b=e.CHM(t).$implicit,N=e.oxw(3);return e.KtG(N.onSetParameter(b))}),e.qZA()()()}if(2&l){const t=s.$implicit,c=e.oxw(3);e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.measurementUnitSymbol),e.xp6(2),e.Q6J("icon",c.faPlus)}}function E(l,s){if(1&l&&(e.TgZ(0,"table",7)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"Nombre"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Magnitud"),e.qZA(),e._UZ(7,"th"),e.qZA()(),e.TgZ(8,"tbody"),e.YNc(9,T,7,3,"tr",8),e.qZA()()),2&l){const t=e.oxw(2);e.xp6(9),e.Q6J("ngForOf",t.parametersList)}}function w(l,s){1&l&&(e.TgZ(0,"p"),e._uU(1,"No hay m\xe1s par\xe1metros para agregar."),e.qZA())}function U(l,s){if(1&l){const t=e.EpF();e.ynx(0),e.YNc(1,E,10,1,"table",3),e.TgZ(2,"div"),e.YNc(3,w,2,0,"p",0),e.qZA(),e.TgZ(4,"div",4)(5,"button",5),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.onCreateNewParameter())}),e._uU(6," Crear nuevo par\xe1metro "),e.qZA(),e.TgZ(7,"button",6),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.onCancelAddParameter())}),e._uU(8," Cancelar "),e.qZA()(),e.BQk()}if(2&l){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.parametersList.length),e.xp6(2),e.Q6J("ngIf",!t.parametersList.length)}}function Z(l,s){if(1&l){const t=e.EpF();e.TgZ(0,"app-add-new-parameter",10),e.NdJ("addNewParameterEvent",function(d){e.CHM(t);const b=e.oxw();return e.KtG(b.onNewParameterCreated(d))})("cancelEvent",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.onCancelCreateNewParameter())}),e.qZA()}}function O(l,s){if(1&l){const t=e.EpF();e.TgZ(0,"app-set-parameter",11),e.NdJ("cancelEvent",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.onCancelSetParameter())})("setParameterEvent",function(d){e.CHM(t);const b=e.oxw();return e.KtG(b.parameterWasSet(d))}),e.qZA()}if(2&l){const t=e.oxw();e.Q6J("toolParameter",t.parameterToSet)}}class C{constructor(){this.parametersList=[],this.faPlus=r.r8p,this.isCreatingNewParameter=!1,this.isSettingParameter=!1,this.cancelAddParameterEvent=new e.vpe,this.newParameterAddedEvent=new e.vpe}ngOnChanges(s){this.setParametersList()}setParametersList(){!this.existingParameters||(this.parametersList=this.parametersToFilter&&this.parametersToFilter.length?this.existingParameters.filter(s=>!this.parametersToFilter.some(t=>t.id==s.id)):this.existingParameters)}onCreateNewParameter(){this.isCreatingNewParameter=!0}onCancelCreateNewParameter(){this.isCreatingNewParameter=!1}onCancelAddParameter(){this.cancelAddParameterEvent.emit()}onNewParameterCreated(s){this.isCreatingNewParameter=!1,this.newParameterAddedEvent.emit(s)}onSetParameter(s){this.isSettingParameter=!0,this.parameterToSet=s}onCancelSetParameter(){this.isSettingParameter=!1}parameterWasSet(s){this.isSettingParameter=!1,this.newParameterAddedEvent.emit(s)}static#e=this.\u0275fac=function(t){return new(t||C)};static#t=this.\u0275cmp=e.Xpm({type:C,selectors:[["app-add-parameter"]],inputs:{existingParameters:"existingParameters",parametersToFilter:"parametersToFilter"},outputs:{cancelAddParameterEvent:"cancelAddParameterEvent",newParameterAddedEvent:"newParameterAddedEvent"},features:[e.TTD],decls:3,vars:3,consts:[[4,"ngIf"],[3,"addNewParameterEvent","cancelEvent",4,"ngIf"],[3,"toolParameter","cancelEvent","setParameterEvent",4,"ngIf"],["class","table",4,"ngIf"],[1,"text-center"],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-danger","ms-3",3,"click"],[1,"table"],[4,"ngFor","ngForOf"],["role","button",3,"icon","click"],[3,"addNewParameterEvent","cancelEvent"],[3,"toolParameter","cancelEvent","setParameterEvent"]],template:function(t,c){1&t&&(e.YNc(0,U,9,2,"ng-container",0),e.YNc(1,Z,1,0,"app-add-new-parameter",1),e.YNc(2,O,1,1,"app-set-parameter",2)),2&t&&(e.Q6J("ngIf",c.parametersList&&!c.isCreatingNewParameter&&!c.isSettingParameter),e.xp6(1),e.Q6J("ngIf",c.isCreatingNewParameter),e.xp6(1),e.Q6J("ngIf",c.isSettingParameter))},dependencies:[_.sg,_.O5,p.BN,f,v]})}},1875:(P,h,a)=>{a.d(h,{J:()=>m});var e=a(1571),r=a(6895),_=a(9453);function p(i,n){if(1&i&&(e.TgZ(0,"label",6),e._uU(1),e.qZA()),2&i){const u=e.oxw();e.xp6(1),e.Oqu(u.label)}}function o(i,n){if(1&i){const u=e.EpF();e.TgZ(0,"li",7),e.NdJ("click",function(){const A=e.CHM(u).$implicit,v=e.oxw();return e.KtG(v.onSelectOption(A))}),e.TgZ(1,"p",8),e._uU(2),e.qZA()()}if(2&i){const u=n.$implicit;e.xp6(2),e.Oqu(u.description)}}class m{constructor(){this.buttonText="Seleccionar",this.onSelectOptionEvent=new e.vpe}onSelectOption(n){this.buttonText=n.description,this.onSelectOptionEvent.emit(n)}static#e=this.\u0275fac=function(u){return new(u||m)};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["app-dropdown"]],inputs:{label:"label",buttonText:"buttonText",options:"options"},outputs:{onSelectOptionEvent:"onSelectOptionEvent"},decls:7,vars:3,consts:[["ngbDropdown","",1,"app-dropdown"],["class","form-label",4,"ngIf"],["ngbDropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","app-dropdown--button"],[1,"caret"],["ngbDropdownMenu","","role","menu",1,"app-dropdown--menu"],["class","dp-item","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[1,"form-label"],["ngbDropdownItem","",1,"dp-item",3,"click"],["role","button",1,"m-0","ps-2","pe-2"]],template:function(u,g){1&u&&(e.TgZ(0,"div",0),e.YNc(1,p,2,1,"label",1),e.TgZ(2,"button",2),e._uU(3),e._UZ(4,"span",3),e.qZA(),e.TgZ(5,"ul",4),e.YNc(6,o,3,1,"li",5),e.qZA()()),2&u&&(e.xp6(1),e.Q6J("ngIf",g.label),e.xp6(2),e.hij(" ",g.selectedOption?g.selectedOption.description:g.buttonText," "),e.xp6(3),e.Q6J("ngForOf",g.options))},dependencies:[r.sg,r.O5,_.jt,_.iD,_.Vi,_.TH],styles:[".dp-item[_ngcontent-%COMP%]:hover{background:rgba(200,200,200,.1)}.app-dropdown--button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:1px solid #ced4da;width:100%}.app-dropdown--menu[_ngcontent-%COMP%]{max-height:200px;overflow:auto}"]})}},9993:(P,h,a)=>{a.d(h,{w:()=>i});var e=a(618),r=a(1571),_=a(1481),p=a(9453),o=a(6895);function m(n,u){if(1&n){const g=r.EpF();r.TgZ(0,"img",1),r.NdJ("click",function(){r.CHM(g);const A=r.oxw();return r.KtG(A.onImageClicked())}),r.qZA()}if(2&n){const g=r.oxw();r.Q6J("src",g.imgSrc,r.LSH)}}class i{constructor(u,g){this.sanitizer=u,this.modalService=g}ngOnChanges(){this.generateImageThumbnail()}generateImageThumbnail(){!this.compImage&&!this.appFile||(this.imgSrc=this.appFile?this.appFile.url:this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.compImage)))}onImageClicked(){this.modalService.open(e.M,{centered:!0}).componentInstance.fileUrl=this.imgSrc}static#e=this.\u0275fac=function(g){return new(g||i)(r.Y36(_.H7),r.Y36(p.FF))};static#t=this.\u0275cmp=r.Xpm({type:i,selectors:[["app-image-thumbnail"]],inputs:{compImage:"compImage",appFile:"appFile"},features:[r.TTD],decls:1,vars:1,consts:[["role","button",3,"src","click",4,"ngIf"],["role","button",3,"src","click"]],template:function(g,f){1&g&&r.YNc(0,m,1,1,"img",0),2&g&&r.Q6J("ngIf",f.imgSrc)},dependencies:[o.O5],styles:["img[_ngcontent-%COMP%]{height:9rem;object-fit:contain;border-radius:.5rem}"]})}},618:(P,h,a)=>{a.d(h,{M:()=>_});var e=a(1571),r=a(9453);class _{constructor(o){this.activeModal=o}static#e=this.\u0275fac=function(m){return new(m||_)(e.Y36(r.Kz))};static#t=this.\u0275cmp=e.Xpm({type:_,selectors:[["app-modal-image"]],inputs:{fileUrl:"fileUrl"},decls:7,vars:1,consts:[[1,"modal-header"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","text-center"],[3,"src"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(m,i){1&m&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return i.activeModal.dismiss()}),e.qZA()(),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"button",5),e.NdJ("click",function(){return i.activeModal.close()}),e._uU(6,"Close"),e.qZA()()),2&m&&(e.xp6(3),e.Q6J("src",i.fileUrl,e.LSH))},styles:["img[_ngcontent-%COMP%]{max-width:100%;max-height:90vh;object-fit:contain}"]})}},7281:(P,h,a)=>{a.d(h,{s:()=>r});var e=a(1571);class r{transform(p,o=""){if(!p)return new Array;switch(o){case"user":case"employee":return p.map(n=>({id:n.userId,description:n.name}));case"customer":case"branch":case"equipment":return p.map(n=>({id:n.id,description:n.name}));case"workItemActivityLog":return p.map(n=>({id:n.workItemActivityLogId,description:n.description}));case"measurementUnits":return p.map(n=>({id:n.measurementUnitId,description:"NA"==n.displayName?"NA":`${n.displayName} (${n.symbol})`}));default:const{idPropName:m,descriptionPropName:i}=this.findProperties(p[0]);return p.map(n=>({id:n[m],description:n[i]}))}}findProperties(p){let o="",m="";for(let i in p)i.match(/id/i)?.length&&(o=i),(i.match(/name/i)?.length||i.includes("Description"))&&(m=i);return{idPropName:o,descriptionPropName:m}}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275pipe=e.Yjl({name:"toDropdownItem",type:r,pure:!0})}},2340:(P,h,a)=>{a.d(h,{N:()=>e});const e={production:!0,apiUrl:"https://management.gmcrefrigeracion.com/api/",filesUrl:""}}}]);