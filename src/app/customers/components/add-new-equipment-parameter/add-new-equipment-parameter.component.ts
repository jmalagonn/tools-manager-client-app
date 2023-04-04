import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-new-equipment-parameter',
  templateUrl: './add-new-equipment-parameter.component.html',
  styleUrls: ['./add-new-equipment-parameter.component.scss']
})
export class AddNewEquipmentParameterComponent implements OnInit {
  measurementUnits?: MeasurementUnit[];
  faCheck = faCheck;
  faX = faX;

  @Output() cancelAddNewParameterEvent = new EventEmitter<void>();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getMeasurementUnits();
  }

  getMeasurementUnits() {
    this.httpService.get<MeasurementUnit[]>(ApiConstants.measurementUnitsApi)
      .subscribe(response => this.measurementUnits = response);
  }
}
