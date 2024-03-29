import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../Core/core.module';
import { GeneralSettingsRoutingModule } from './general-settings.routing.module';
import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { GeneralSettingsComponent } from './containers/general-settings/general-settings.component';
import { UserRolesTableComponent } from './components/user-roles-table/user-roles-table.component';
import { WorkOrderTypesComponent } from './components/work-order-types/work-order-types.component';
import { MeasurementUnitsComponent } from './components/measurement-units/measurement-units.component';
import { AddMeasurementUnitComponent } from './components/add-measurement-unit/add-measurement-unit.component';
import { ToolParametersComponent } from './components/tool-parameters/tool-parameters.component';
import { ToolParametersTableComponent } from './components/tool-parameters-table/tool-parameters-table.component';
import { CreateToolParameterComponent } from './components/create-tool-parameter/create-tool-parameter.component';

@NgModule({
  declarations: [
    GeneralSettingsComponent,
    UserRolesComponent,
    UserRolesTableComponent,
    WorkOrderTypesComponent,
    MeasurementUnitsComponent,
    AddMeasurementUnitComponent,
    ToolParametersComponent,
    ToolParametersTableComponent,
    CreateToolParameterComponent,
  ],
  imports: [
    CommonModule,
    GeneralSettingsRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class GeneralSettingsModule { }