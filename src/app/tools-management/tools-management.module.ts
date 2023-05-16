import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsManagementRoutingModule } from './tools-management-routing.module';
import { ToolsManagementComponent } from './containers/tools-management/tools-management.component';
import { SharedModule } from '../shared/shared.module';
import { AddToolModalComponent } from './components/add-tool-modal/add-tool-modal.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { ToolDetailComponent } from './containers/tool-detail/tool-detail.component';
import { EditToolFormComponent } from './components/edit-tool-form/edit-tool-form.component';
import { QrInfoComponent } from './components/qr-info/qr-info.component';
import { AddNewToolComponent } from './containers/add-new-tool/add-new-tool.component';


@NgModule({
  declarations: [
    ToolsManagementComponent,
    AddToolModalComponent,
    ToolsListComponent,
    ToolDetailComponent,
    EditToolFormComponent,
    QrInfoComponent,
    AddNewToolComponent
  ],
  imports: [
    CommonModule,
    ToolsManagementRoutingModule,
    SharedModule,
  ]
})
export class ToolsManagementModule { }
