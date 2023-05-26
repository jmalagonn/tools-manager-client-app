import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsOutputRoutingModule } from './tool-output-routing.module';
import { ToolOutputComponent } from './containers/tool-output/tool-output.component';
import { SharedModule } from '../shared/shared.module';
import { OpenToolsOutputListComponent } from './components/open-tools-output-list/open-tools-output-list.component';
import { ToolsOutputDetailComponent } from './containers/tools-output-detail/tools-output-detail.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { ReturnToolsComponent } from './components/return-tools/return-tools.component';


@NgModule({
  declarations: [
    ToolOutputComponent,
    OpenToolsOutputListComponent,
    ToolsOutputDetailComponent,
    ToolsListComponent,
    ReturnToolsComponent
  ],
  imports: [
    CommonModule,
    ToolsOutputRoutingModule,
    SharedModule
  ]
})
export class ToolOutputModule { }
