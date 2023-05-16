import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolDetailComponent } from './containers/tool-detail/tool-detail.component';
import { ToolsManagementComponent } from './containers/tools-management/tools-management.component';
import { AddNewToolComponent } from './containers/add-new-tool/add-new-tool.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsManagementComponent
  },  
  {
    path: 'add-tool',
    component: AddNewToolComponent
  },
  {
    path: ':id',
    component: ToolDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsManagementRoutingModule { }
