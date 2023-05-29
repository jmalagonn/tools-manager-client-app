import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants, ErrorConstants } from 'src/app/Core/constants/app-constants';
import { EquipmentParameter } from 'src/app/Core/models/Equipment-parameter.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-equipment-parameter',
  templateUrl: './add-equipment-parameter.component.html',
  styleUrls: ['./add-equipment-parameter.component.scss']
})
export class AddEquipmentParameterComponent implements OnInit {
  equipmentParameters?: EquipmentParameter[];
  selectedItem?: EquipmentParameter;
  selectingParameter: boolean = true;
  faCheck = faCheck;
  faX = faX;
  addingNewParameter: boolean = false;
  parameterValue?: number;

  @Output() cancelAddParameterEvent = new EventEmitter<void>();
  @Output() addParameterEvent = new EventEmitter<EquipmentParameter>();

  constructor(
    private httpService: HttpService,
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getEquipmentParameters();
  }

  getEquipmentParameters(): void {
    this.httpService.get<EquipmentParameter[]>(ApiConstants.equipmentParametersApi)
      .subscribe(response => this.equipmentParameters = response);
  }

  onSelectItem(item: ItemList) {
    this.selectedItem = this.equipmentParameters?.find(x => x.equipmentParameterId == item.id);
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

    const parameter: EquipmentParameter = {
      ...this.selectedItem!,
      equipmentParameterEquipmentId: this.selectedItem!.equipmentParameterEquipmentId || 0,
      parameterValue: this.parameterValue
    };

    this.addParameterEvent.emit(parameter);
  }
}
