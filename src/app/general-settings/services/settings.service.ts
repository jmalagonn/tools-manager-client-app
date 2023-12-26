import { Injectable, Type } from '@angular/core';
import { WorkOrderTypesComponent } from '../components/work-order-types/work-order-types.component';
import { MeasurementUnitsComponent } from '../components/measurement-units/measurement-units.component';
import { ToolParametersComponent } from '../components/tool-parameters/tool-parameters.component';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  getSettings() {
    return [
      {
        component: WorkOrderTypesComponent,
      },
      {
        component: MeasurementUnitsComponent,
      },
      {
        component: ToolParametersComponent,
      }
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}
