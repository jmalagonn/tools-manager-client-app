import { Component, OnInit } from '@angular/core';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tool-parameters',
  templateUrl: './tool-parameters.component.html',
  styleUrls: ['./tool-parameters.component.scss']
})
export class ToolParametersComponent implements OnInit {
  toolParameters?: Parameter[];
  measurementUnits?: MeasurementUnit[];
  isCreatingNewItem = false;

  constructor (private httpService: HttpService) {}
  
  ngOnInit(): void {
    this.getToolParameters();
    this.getMeasurementUnits();
  }

  getToolParameters(): void {
    this.httpService.get<Parameter[]>(ApiConstants.toolParametersApi)
      .subscribe(response => this.toolParameters = response);
  }

  getMeasurementUnits(): void {
    this.httpService.get<MeasurementUnit[]>(ApiConstants.measurementUnitsApi)
      .subscribe((response) => this.measurementUnits = response);
  }

  setIsCreatingNewItem(value: boolean) {
    this.isCreatingNewItem = value;
  }

  onParameterCreated(): void {
    this.setIsCreatingNewItem(false);
    this.getToolParameters();
  }
}
