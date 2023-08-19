import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { ErrorConstants } from 'src/app/Core/constants/app-constants';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { Parameter } from 'src/app/Core/models/Parameter.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-equipment-parameter',
  templateUrl: './add-equipment-parameter.component.html',
  styleUrls: ['./add-equipment-parameter.component.scss']
})
export class AddEquipmentParameterComponent implements OnInit {
  equipmentParameters?: Parameter[];
  selectedItem?: Parameter;
  selectingParameter: boolean = true;
  faCheck = faCheck;
  faX = faX;
  addingNewParameter: boolean = false;
  parameterValue?: number;

  @Output() cancelAddParameterEvent = new EventEmitter<void>();
  @Output() addParameterEvent = new EventEmitter<Parameter>();

  constructor(
    private httpService: HttpService,
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getEquipmentParameters();
  }

  getEquipmentParameters(): void {
    this.httpService.get<Parameter[]>(ApiConstants.equipmentParametersApi)
      .subscribe(response => this.equipmentParameters = response);
  }

  onSelectItem(item: ItemList) {
    this.selectedItem = this.equipmentParameters?.find(x => x.id == item.id);
    this.setSelectingParameter(false);
  }

  setSelectingParameter(value: boolean) {
    this.selectingParameter = value;
  }

  setAddingNewParameter(value: boolean) {
    this.setSelectingParameter(false);
    this.addingNewParameter = value;
  }

  addEquipmentParameter() {
    if (this.parameterValue == undefined) {
      this.toastrService.error(ErrorConstants.equipmentParameterWrongValue);
      return;
    }

    const parameter: Parameter = {
      ...this.selectedItem!,
      parameterValue: this.parameterValue
    };

    this.addParameterEvent.emit(parameter);
  }
}
