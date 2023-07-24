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
import { AddToolsOutputModalComponent } from './components/add-tools-output-modal/add-tools-output-modal.component';
import { SelectedToolsListComponent } from './components/selected-tools-list/selected-tools-list.component';
import { AvailableToolsListComponent } from './components/available-tools-list/available-tools-list.component';
import { ToolOutputsListComponent } from './components/tool-outputs-list/tool-outputs-list.component';
import { ParameterValuePipe } from './pipes/parameter-value.pipe';


@NgModule({
  declarations: [
    ToolsManagementComponent,
    AddToolModalComponent,
    ToolsListComponent,
    ToolDetailComponent,
    EditToolFormComponent,
    QrInfoComponent,
    AddNewToolComponent,
    AddToolsOutputModalComponent,
    SelectedToolsListComponent,
    AvailableToolsListComponent,
    ToolOutputsListComponent,
    ParameterValuePipe,
  ],
  imports: [
    CommonModule,
    ToolsManagementRoutingModule,
    SharedModule,
  ]
})
export class ToolsManagementModule { }
