"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[909],{7323:(w,g,a)=>{a.d(g,{G:()=>i});class i{static#t=this.accountLogin="Account/login";static#e=this.addUserApi="Users/addUser";static#r=this.branchesApi="Branches";static#o=this.customersApi="Customers";static#n=this.equipmentApi="Equipment";static#i=this.equipmentParametersApi="Equipment/parameters";static#s=this.measurementUnitsApi="MeasurementUnits";static#c=this.userApi="Users";static#a=this.userEmployeeApi="Users/employee";static#d=this.userEmployeesApi="Users/employees";static#l=this.userRolesApi="UserRole";static#p=this.workItemApi="WorkItem";static#u=this.workOrderApi="WorkOrder";static#m=this.workOrderActivity=`${this.workOrderApi}/activity`;static#h=this.workOrderTypesApi=`${this.workOrderApi}/workOrderTypes`;static#_=this.toolsApi="Tools";static#f=this.toolParametersApi="Tools/parameters";static#g=this.toolOutputsApi="ToolOutputs";static#O=this.workStateApi="WorkState"}},5307:(w,g,a)=>{a.d(g,{O:()=>m});var i=a(529);var f=a(1571);class m{constructor(s){this.httpClient=s,this.api_url="https://management.gmcrefrigeracion.com/api/"}get(s){return this.httpClient.get(this.api_url+s)}post(s,t){return new i.WM({"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}),this.httpClient.post(this.api_url+s,t)}put(s,t){return this.httpClient.put(this.api_url+s,t)}postFormData(s,t){const u=new i.WM({"Content-Type":"multipart/form-data"});return this.httpClient.post(this.api_url+s,t,{headers:u})}static#t=this.\u0275fac=function(t){return new(t||m)(f.LFG(i.eN))};static#e=this.\u0275prov=f.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}},1875:(w,g,a)=>{a.d(g,{J:()=>s});var i=a(1571),_=a(6895),f=a(9453);function m(t,u){if(1&t&&(i.TgZ(0,"label",6),i._uU(1),i.qZA()),2&t){const h=i.oxw();i.xp6(1),i.Oqu(h.label)}}function p(t,u){if(1&t){const h=i.EpF();i.TgZ(0,"li",7),i.NdJ("click",function(){const I=i.CHM(h).$implicit,E=i.oxw();return i.KtG(E.onSelectOption(I))}),i.TgZ(1,"p",8),i._uU(2),i.qZA()()}if(2&t){const h=u.$implicit;i.xp6(2),i.Oqu(h.description)}}class s{constructor(){this.buttonText="Seleccionar",this.onSelectOptionEvent=new i.vpe}ngOnChanges(){this.selectedOptionId&&this.options&&(this.selectedOption=this.options.find(u=>u.id==this.selectedOptionId))}onSelectOption(u){this.selectedOption=u,this.onSelectOptionEvent.emit(u)}static#t=this.\u0275fac=function(h){return new(h||s)};static#e=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-dropdown"]],inputs:{label:"label",buttonText:"buttonText",options:"options",selectedOptionId:"selectedOptionId"},outputs:{onSelectOptionEvent:"onSelectOptionEvent"},features:[i.TTD],decls:7,vars:3,consts:[["ngbDropdown","",1,"app-dropdown"],["class","form-label",4,"ngIf"],["ngbDropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","app-dropdown--button"],[1,"caret"],["ngbDropdownMenu","","role","menu",1,"app-dropdown--menu","p-0"],["class","dp-item","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[1,"form-label"],["ngbDropdownItem","",1,"dp-item",3,"click"],["role","button",1,"m-0","ps-2","pe-2"]],template:function(h,c){1&h&&(i.TgZ(0,"div",0),i.YNc(1,m,2,1,"label",1),i.TgZ(2,"button",2),i._uU(3),i._UZ(4,"span",3),i.qZA(),i.TgZ(5,"ul",4),i.YNc(6,p,3,1,"li",5),i.qZA()()),2&h&&(i.xp6(1),i.Q6J("ngIf",c.label),i.xp6(2),i.hij(" ",c.selectedOption?c.selectedOption.description:c.buttonText," "),i.xp6(3),i.Q6J("ngForOf",c.options))},dependencies:[_.sg,_.O5,f.jt,f.iD,f.Vi,f.TH],styles:[".dp-item[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;border-bottom:1px solid rgba(200,200,200,.75)}.dp-item[_ngcontent-%COMP%]:hover{background:rgba(200,200,200,.1)}.dp-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.app-dropdown--button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border:1px solid #ced4da;width:100%}.app-dropdown--menu[_ngcontent-%COMP%]{max-height:200px;overflow:auto}"]})}},7281:(w,g,a)=>{a.d(g,{s:()=>f});var i=a(1066),_=a(1571);class f{transform(p,s=""){if(!p)return new Array;switch(s){case"user":case"employee":return p.map(c=>({id:c.userId,description:c.name}));case"customer":case"branch":case"equipment":return p.map(c=>({id:c.id,description:c.name}));case"workOrderActivity":return p.map(c=>({id:c.id,description:c.description}));case"measurementUnits":return p.map(c=>({id:c.measurementUnitId,description:"NA"==c.displayName?"NA":`${c.displayName} (${c.symbol})`}));case"workState":const t=new i.$;return p.map(c=>({id:c.id,description:t.transform(c)}));default:const{idPropName:u,descriptionPropName:h}=this.findProperties(p[0]);return p.map(c=>({id:c[u],description:c[h]}))}}findProperties(p){let s="",t="";for(let u in p)u.match(/^id$/i)?.length&&(s=u),(u.match(/^name$/i)?.length||u.includes("Description"))&&(t=u);return{idPropName:s,descriptionPropName:t}}static#t=this.\u0275fac=function(s){return new(s||f)};static#e=this.\u0275pipe=_.Yjl({name:"toDropdownItem",type:f,pure:!0})}},1066:(w,g,a)=>{a.d(g,{$:()=>_});var i=a(1571);class _{transform(m){if(!m)return"";switch(m.id){case 1:return"Abierta";case 2:return"En proceso";case 3:return"Cerrada";default:return""}}static#t=this.\u0275fac=function(p){return new(p||_)};static#e=this.\u0275pipe=i.Yjl({name:"workState",type:_,pure:!0})}},2909:(w,g,a)=>{a.r(g),a.d(g,{WorkOrderstModule:()=>F});var i=a(6895),_=a(6619),f=a(9127),m=a(8869),p=a(7323),s=a(433),t=a(1571),u=a(9453),h=a(5307),c=a(1875),M=a(7281);function I(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-dropdown",18),t.NdJ("onSelectOptionEvent",function(d){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onSelectItem(d,l.workOrderProperties.customer))}),t.ALo(1,"toDropdownItem"),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("label","Cliente")("options",t.lcZ(1,2,e.customers))}}function E(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"app-dropdown",18),t.NdJ("onSelectOptionEvent",function(d){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onSelectItem(d,l.workOrderProperties.branch))}),t.ALo(2,"toDropdownItem"),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("label","Sucursal")("options",t.lcZ(2,2,e.branches))}}function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"app-dropdown",18),t.NdJ("onSelectOptionEvent",function(d){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onSelectItem(d,l.workOrderProperties.equipment))}),t.ALo(2,"toDropdownItem"),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("label","Equipo")("options",t.lcZ(2,2,e.equipment))}}function x(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"app-dropdown",18),t.NdJ("onSelectOptionEvent",function(d){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onSelectItem(d,l.workOrderProperties.user))}),t.ALo(2,"toDropdownItem"),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("label","Asignado a")("options",t.xi3(2,2,e.users,"employee"))}}function U(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"app-dropdown",18),t.NdJ("onSelectOptionEvent",function(d){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onSelectItem(d,l.workOrderProperties.workOrderType))}),t.ALo(2,"toDropdownItem"),t.qZA()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("label","Tipo de trabajo")("options",t.lcZ(2,2,e.workOrderTypes))}}function S(n,r){if(1&n&&(t.TgZ(0,"form",8)(1,"div",9)(2,"div",10),t.YNc(3,I,2,4,"app-dropdown",11),t.qZA(),t.YNc(4,E,3,4,"div",12),t.YNc(5,N,3,4,"div",12),t.YNc(6,x,3,5,"div",12),t.YNc(7,U,3,4,"div",12),t.TgZ(8,"div",10)(9,"label",13),t._uU(10,"C\xf3digo GMC"),t.qZA(),t._UZ(11,"input",14),t.qZA(),t.TgZ(12,"div",10)(13,"label",13),t._uU(14,"C\xf3digo cliente"),t.qZA(),t._UZ(15,"input",15),t.qZA(),t.TgZ(16,"div",16)(17,"label",13),t._uU(18,"Trabajo a realizar:"),t.qZA(),t._UZ(19,"textarea",17),t.qZA()()()),2&n){const e=t.oxw();t.Q6J("formGroup",e.workOrderForm),t.xp6(3),t.Q6J("ngIf",e.customers&&e.customers.length),t.xp6(1),t.Q6J("ngIf",e.branches&&e.branches.length),t.xp6(1),t.Q6J("ngIf",e.equipment&&e.equipment.length),t.xp6(1),t.Q6J("ngIf",e.users&&e.users.length),t.xp6(1),t.Q6J("ngIf",e.workOrderTypes&&e.workOrderTypes.length)}}class T{constructor(r,e,o){this.activeModal=r,this.fb=e,this.httpService=o,this.workOrderProperties=C}ngOnInit(){this.initForm(),this.getCustomers(),this.getUsers(),this.getWorkOrderTypes()}initForm(){this.workOrderForm=this.fb.group({customerId:[null,s.kI.required],branchId:[null,s.kI.required],equipmentId:[null],userId:[null,s.kI.required],workOrderTypeId:[null,s.kI.required],internalCode:[""],customerCode:[""],description:[""]})}onSelectItem(r,e){if(this.workOrderForm)switch(e){case C.customer:this.workOrderForm.patchValue({customerId:r.id}),this.getBranches();break;case C.branch:this.workOrderForm.patchValue({branchId:r.id}),this.getEquipment();break;case C.equipment:this.workOrderForm.patchValue({equipmentId:r.id});break;case C.workOrderType:this.workOrderForm.patchValue({workOrderTypeId:r.id});break;case C.user:this.workOrderForm.patchValue({userId:r.id})}}saveWorkOrder(){if(!this.workOrderForm||!this.workOrderForm.valid)return;const r=new FormData;r.append("assignedUserId",this.workOrderForm.controls.userId.value.toString()),r.append("branchId",this.workOrderForm.controls.branchId.value.toString()),r.append("customerId",this.workOrderForm.controls.customerId.value.toString()),r.append("workOrderTypeId",this.workOrderForm.controls.workOrderTypeId.value.toString()),r.append("internalCode",this.workOrderForm.controls.internalCode.value.toString()),r.append("customerCode",this.workOrderForm.controls.customerCode.value.toString()),r.append("workOrderDescription",this.workOrderForm.controls.description.value.toString()),this.httpService.post(p.G.workOrderApi,r).subscribe()}getUsers(){this.httpService.get(p.G.userEmployeesApi).subscribe(r=>this.users=r)}getCustomers(){this.httpService.get(p.G.customersApi).subscribe(r=>this.customers=r)}getWorkOrderTypes(){this.httpService.get(p.G.workOrderTypesApi).subscribe(r=>this.workOrderTypes=r)}getBranches(){!this.workOrderForm||this.httpService.get(`${p.G.branchesApi}/${this.workOrderForm.controls.customerId.value}`).subscribe(r=>this.branches=r)}getEquipment(){!this.workOrderForm||this.httpService.get(`${p.G.equipmentApi}?branchId=${this.workOrderForm.controls.branchId.value}`).subscribe(r=>this.equipment=r)}static#t=this.\u0275fac=function(e){return new(e||T)(t.Y36(u.Kz),t.Y36(s.qu),t.Y36(h.O))};static#e=this.\u0275cmp=t.Xpm({type:T,selectors:[["app-add-work-order"]],decls:11,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[3,"formGroup",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],["type","button",1,"btn","btn-outline-primary",3,"click"],[3,"formGroup"],[1,"row","g-3"],[1,"col-lg-3","col-sm-6"],[3,"label","options","onSelectOptionEvent",4,"ngIf"],["class","col-lg-3 col-sm-6",4,"ngIf"],[1,"form-label"],["type","text","formControlName","internalCode",1,"form-control"],["type","text","formControlName","customerCode",1,"form-control"],[1,"col-12"],["formControlName","description",1,"form-control"],[3,"label","options","onSelectOptionEvent"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"Nueva orden de trabajo"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return o.activeModal.dismiss("Cross click")}),t.qZA()(),t.TgZ(4,"div",3),t.YNc(5,S,20,6,"form",4),t.qZA(),t.TgZ(6,"div",5)(7,"button",6),t.NdJ("click",function(){return o.activeModal.close("Close click")}),t._uU(8,"Cerrar"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.saveWorkOrder()}),t._uU(10,"Guardar"),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",o.workOrderForm))},dependencies:[i.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.J,M.s]})}var C=(()=>{return(n=C||(C={}))[n.customer=0]="customer",n[n.branch=1]="branch",n[n.equipment=2]="equipment",n[n.workOrderType=3]="workOrderType",n[n.user=4]="user",C;var n})(),P=a(2771),W=a(2687),J=a(2216);class b{constructor(r){this.el=r,this.leftClass="left"}ngOnInit(){this.el.nativeElement.getBoundingClientRect().x<0&&this.el.nativeElement.classList.add(this.leftClass)}static#t=this.\u0275fac=function(e){return new(e||b)(t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:b,selectors:[["","leftPositionElement",""]]})}function q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"input",5),t.NdJ("ngModelChange",function(d){t.CHM(e);const l=t.oxw();return t.KtG(l.inputText=d)}),t.qZA(),t.TgZ(3,"fa-icon",6),t.NdJ("click",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.onClickApply())}),t.qZA(),t.TgZ(4,"fa-icon",7),t.NdJ("click",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.onClickCancel())}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.inputText),t.xp6(1),t.Q6J("icon",e.faCheck),t.xp6(1),t.Q6J("icon",e.faX)}}class v{constructor(){this.faFilter=W.G_j,this.faCheck=W.fV7,this.faX=W.WA2,this.showContent=!1,this.applyFilterEvent=new t.vpe}onClickApply(){this.applyFilterEvent.emit(this.inputText),this.showContent=!1}onClickCancel(){this.inputText="",this.showContent=!1,this.applyFilterEvent.emit(this.inputText)}toggleFilterColumn(r){this.showContent=!this.showContent}static#t=this.\u0275fac=function(e){return new(e||v)};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-column-filter"]],outputs:{applyFilterEvent:"applyFilterEvent"},decls:3,vars:2,consts:[[1,"container-box"],["role","button",3,"icon","click"],["class","content","leftPositionElement","",4,"ngIf"],["leftPositionElement","",1,"content"],[1,"form-area","d-flex","align-items-center"],["type","text","placeholder","Buscar",1,"form-control",3,"ngModel","ngModelChange"],["role","button",1,"text-success",3,"icon","click"],["role","button",1,"text-danger",3,"icon","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"fa-icon",1),t.NdJ("click",function(l){return o.toggleFilterColumn(l)}),t.qZA(),t.YNc(2,q,5,3,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("icon",o.faFilter),t.xp6(1),t.Q6J("ngIf",o.showContent))},dependencies:[i.O5,J.BN,s.Fj,s.JJ,s.On,b],styles:[".container-box[_ngcontent-%COMP%]{position:relative}.container-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;background:white;right:0;width:13rem;border-radius:.375rem;padding:.5rem;box-shadow:0 2px 5px #727272}.container-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]{gap:.3rem}.container-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-area[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.25rem}.container-box[_ngcontent-%COMP%]   .content.left[_ngcontent-%COMP%]{right:auto;left:0}"]})}var D=a(1066);function B(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr",1),t.NdJ("click",function(){const l=t.CHM(e).$implicit,Q=t.oxw(2);return t.KtG(Q.navigateToWorkOrder(l))}),t.TgZ(1,"td")(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p"),t._uU(6),t.ALo(7,"workState"),t.qZA()(),t.TgZ(8,"td")(9,"p"),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"p"),t._uU(13),t.qZA()(),t.TgZ(14,"td")(15,"p"),t._uU(16),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(3),t.Oqu(e.internalCode?e.internalCode:e.workOrderId),t.xp6(3),t.Oqu(t.lcZ(7,5,e.workState)),t.xp6(4),t.Oqu(e.customerName),t.xp6(3),t.Oqu(e.branchName),t.xp6(3),t.Oqu(e.assignedUserName)}}function L(n,r){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,B,17,7,"tr",5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.filteredWorkOrders)}}class A{constructor(r){this.router=r,this.columns=k,this.filteredCodes="",this.filteredCustomer="",this.filteredBranch="",this.filteredUser=""}ngOnChanges(){this.workOrders&&this.initWorkOrders()}navigateToWorkOrder(r){this.router.navigateByUrl(`/${P.p7.workOrderPath}/${r.workOrderId}`)}onApplyFilter(r,e){if(this.workOrders){switch(e){case this.columns.code:this.filteredCodes=r.toLocaleLowerCase();break;case this.columns.customer:this.filteredCustomer=r.toLocaleLowerCase();break;case this.columns.branch:this.filteredBranch=r.toLocaleLowerCase();break;case this.columns.user:this.filteredUser=r.toLocaleLowerCase()}this.filterWorkOrders()}}initWorkOrders(){this.filteredWorkOrders=this.workOrders,this.sortBy(k.code)}filterWorkOrders(){!this.workOrders||(this.filteredWorkOrders=this.workOrders.filter(r=>{let e=!1;return e=!this.filteredCodes.length||(r.internalCode?r.internalCode.toString().includes(this.filteredCodes):r.workOrderId.toString().includes(this.filteredCodes)),!e||(e=!this.filteredCustomer.length||r.customerName.toLocaleLowerCase().includes(this.filteredCustomer),!e)||(e=!this.filteredBranch.length||r.branchName.toLocaleLowerCase().includes(this.filteredBranch),!e)||(e=!this.filteredUser.length||r.assignedUserName.toLocaleLowerCase().includes(this.filteredUser)),e}))}sortBy(r){switch((!this.sortingType||this.sortedBy!=r)&&(this.sortingType=O.ascending),this.sortedBy==r&&(this.sortingType=this.sortingType==O.ascending?O.descending:O.ascending),console.log(r,this.sortingType),this.sortedBy=r,r){case k.code:this.filteredWorkOrders.sort(this.sortingType==O.ascending?(e,o)=>e.internalCode&&o.internalCode?e.internalCode-o.internalCode:e.internalCode&&!o.internalCode?-1:!e.internalCode&&o.internalCode?1:e.workOrderId-o.workOrderId:(e,o)=>e.internalCode&&o.internalCode?o.internalCode-e.internalCode:e.internalCode&&!o.internalCode?1:!e.internalCode&&o.internalCode?-1:o.workOrderId-e.workOrderId);break;case k.state:this.filteredWorkOrders.sort(this.sortingType==O.ascending?(e,o)=>e.workState.id-o.workState.id:(e,o)=>o.workState.id-e.workState.id);break;case k.customer:this.filteredWorkOrders.sort(this.sortingType==O.ascending?(e,o)=>e.customerName.localeCompare(o.customerName):(e,o)=>o.customerName.localeCompare(e.customerName));break;case k.branch:this.filteredWorkOrders.sort(this.sortingType==O.ascending?(e,o)=>e.branchName.localeCompare(o.branchName):(e,o)=>o.branchName.localeCompare(e.branchName));break;case k.user:this.filteredWorkOrders.sort(this.sortingType==O.ascending?(e,o)=>e.assignedUserName.localeCompare(o.assignedUserName):(e,o)=>o.assignedUserName.localeCompare(e.assignedUserName))}}static#t=this.\u0275fac=function(e){return new(e||A)(t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:A,selectors:[["work-orders-table"]],inputs:{workOrders:"workOrders"},features:[t.TTD],decls:28,vars:1,consts:[[1,"table","table-hover"],[3,"click"],[1,"d-flex","justify-content-between","gap-2"],[3,"applyFilterEvent"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),t.NdJ("click",function(){return o.sortBy(o.columns.code)}),t.TgZ(4,"div",2)(5,"p"),t._uU(6,"C\xf3digo"),t.qZA(),t.TgZ(7,"app-column-filter",3),t.NdJ("applyFilterEvent",function(l){return o.onApplyFilter(l,o.columns.code)}),t.qZA()()(),t.TgZ(8,"th",1),t.NdJ("click",function(){return o.sortBy(o.columns.state)}),t.TgZ(9,"div",2)(10,"p"),t._uU(11,"Estado"),t.qZA()()(),t.TgZ(12,"th",1),t.NdJ("click",function(){return o.sortBy(o.columns.customer)}),t.TgZ(13,"div",2)(14,"p"),t._uU(15,"Cliente"),t.qZA(),t.TgZ(16,"app-column-filter",3),t.NdJ("applyFilterEvent",function(l){return o.onApplyFilter(l,o.columns.customer)}),t.qZA()()(),t.TgZ(17,"th",1),t.NdJ("click",function(){return o.sortBy(o.columns.branch)}),t.TgZ(18,"div",2)(19,"p"),t._uU(20,"Sucursal"),t.qZA(),t.TgZ(21,"app-column-filter",3),t.NdJ("applyFilterEvent",function(l){return o.onApplyFilter(l,o.columns.branch)}),t.qZA()()(),t.TgZ(22,"th",1),t.NdJ("click",function(){return o.sortBy(o.columns.user)}),t.TgZ(23,"div",2)(24,"p"),t._uU(25,"Asignado a"),t.qZA(),t.TgZ(26,"app-column-filter",3),t.NdJ("applyFilterEvent",function(l){return o.onApplyFilter(l,o.columns.user)}),t.qZA()()()()(),t.YNc(27,L,2,1,"tbody",4),t.qZA()),2&e&&(t.xp6(27),t.Q6J("ngIf",o.filteredWorkOrders&&o.filteredWorkOrders.length))},dependencies:[i.sg,i.O5,v,D.$],styles:["[_nghost-%COMP%]{display:block;width:100%;overflow:auto}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{cursor:pointer}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:pointer}@media screen and (min-width: 992px){[_nghost-%COMP%]{overflow:visible}}"]})}var k=(()=>{return(n=k||(k={}))[n.code=0]="code",n[n.state=1]="state",n[n.customer=2]="customer",n[n.branch=3]="branch",n[n.user=4]="user",k;var n})(),O=(()=>{return(n=O||(O={}))[n.ascending=0]="ascending",n[n.descending=1]="descending",O;var n})();class y{constructor(r,e){this.httpService=r,this.modalService=e}ngOnInit(){this.getWorkOrders()}getWorkOrders(){this.httpService.get(`${p.G.workOrderApi}`).subscribe(r=>this.workOrders=r)}openAddWorkOrderModal(){this.modalService.open(T,{size:"xl"})}static#t=this.\u0275fac=function(e){return new(e||y)(t.Y36(h.O),t.Y36(u.FF))};static#e=this.\u0275cmp=t.Xpm({type:y,selectors:[["app-work-orders"]],decls:10,vars:1,consts:[[1,"container"],[1,"text-center","mt-3"],[1,"btn","btn-outline-primary",3,"click"],[1,"row","mt-3"],[1,"col-12"],[3,"workOrders"],[1,"d-flex","justify-content-center","align-items-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"\xd3RDENES DE TRABAJO"),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return o.openAddWorkOrderModal()}),t._uU(5,"A\xf1adir nueva \xf3rden de trabajo"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4),t._UZ(8,"work-orders-table",5),t.qZA()()(),t._UZ(9,"div",6)),2&e&&(t.xp6(8),t.Q6J("workOrders",o.workOrders))},dependencies:[A]})}const G=[{path:"",component:y}];class Z{static#t=this.\u0275fac=function(e){return new(e||Z)};static#e=this.\u0275mod=t.oAB({type:Z});static#r=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(G),m.Bz]})}class F{static#t=this.\u0275fac=function(e){return new(e||F)};static#e=this.\u0275mod=t.oAB({type:F});static#r=this.\u0275inj=t.cJS({imports:[i.ez,Z,_.m,f.I]})}}}]);