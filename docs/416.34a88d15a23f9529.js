"use strict";(self.webpackChunkToolsManagerClientApp=self.webpackChunkToolsManagerClientApp||[]).push([[416],{5416:(M,u,s)=>{s.r(u),s.d(u,{DashboardModule:()=>p});var m=s(6895),l=s(8869),t=s(1571),h=s(5698),f=s(2771),g=s(3143),v=s(2216);class a{transform(n,o){return n.filter(i=>null==i.userRoles||i.userRoles.some(b=>o.some(x=>x.id==b)))}static#t=this.\u0275fac=function(o){return new(o||a)};static#o=this.\u0275pipe=t.Yjl({name:"filterDashboardRoles",type:a,pure:!0})}const C=function(d){return["/",d]};function Z(d,n){if(1&d&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"a",4),t.TgZ(3,"div",5),t._UZ(4,"fa-icon",6),t.qZA(),t.TgZ(5,"div",7),t._uU(6),t.qZA()()()),2&d){const o=n.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(3,C,o.path)),t.xp6(2),t.Q6J("icon",o.icon),t.xp6(2),t.hij(" ",o.title," ")}}class e{constructor(n){this.accountService=n,this.appConstants=f.$x,n.currentAccount$.pipe((0,h.q)(1)).subscribe(o=>{this.account=o})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(g.B))};static#o=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard-options"]],decls:3,vars:4,consts:[[1,"row","justify-content-center","g-3","mt-3","mb-3"],["class","col-sm-6 col-lg-4",4,"ngFor","ngForOf"],[1,"col-sm-6","col-lg-4"],[1,"option-card"],[3,"routerLink"],[1,"option-card__icon"],[3,"icon"],[1,"option-card__title"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,Z,7,5,"div",1),t.ALo(2,"filterDashboardRoles"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,i.appConstants.MENU_ITEMS,i.account.userRoles)))},dependencies:[m.sg,l.rH,v.BN,a],styles:[".option-card[_ngcontent-%COMP%]{border:1px solid rgba(160,160,160,.2);border-radius:.5rem;padding:1rem;text-align:center;cursor:pointer;box-shadow:0 5px 10px #a0a0a0bf;position:relative}.option-card__icon[_ngcontent-%COMP%]{font-size:2rem}.option-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;left:0;top:0}@media (min-width: 576px){.option-card__icon[_ngcontent-%COMP%]{font-size:3rem}}"]})}class c{static#t=this.\u0275fac=function(o){return new(o||c)};static#o=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-dashboard"]],decls:4,vars:0,consts:[[1,"container"],[1,"mt-3","text-center"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Men\xfa principal"),t.qZA(),t._UZ(3,"app-dashboard-options"),t.qZA())},dependencies:[e]})}const y=[{path:"",component:c}];class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#o=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(y),l.Bz]})}var A=s(6619);class p{static#t=this.\u0275fac=function(o){return new(o||p)};static#o=this.\u0275mod=t.oAB({type:p});static#n=this.\u0275inj=t.cJS({imports:[m.ez,r,A.m]})}}}]);