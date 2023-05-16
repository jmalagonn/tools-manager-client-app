import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsOutputDetailComponent } from './containers/tools-output-detail/tools-output-detail.component';
import { ToolOutputComponent } from './containers/tool-output/tool-output.component';

const routes: Routes = [
  {
    path: '',
    component: ToolOutputComponent
  },
  {
    path: ':id',
    component: ToolsOutputDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsOutputRoutingModule { }
