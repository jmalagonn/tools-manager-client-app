import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEdit, faSave, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { MeasurementUnit } from 'src/app/Core/models/MeasurementUnit.model';
import { HttpService } from 'src/app/services/http.service';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-measurement-units',
  templateUrl: './measurement-units.component.html',
  styleUrls: ['./measurement-units.component.scss']
})
export class MeasurementUnitsComponent implements OnInit {
  measurementUnits: EditableMeasurementUnit[] = [];
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faX = faX;

  newData: 
    { name: string; symbol?: string; magnitude?: string } = {
    name: "",
    symbol: "",
    magnitude: ""
  };

  constructor(
    private httpService: HttpService,
    private modalService: NgbModal,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getMeasurementUnits();
  }

  getMeasurementUnits() {
    this.httpService.get<MeasurementUnit[]>(ApiConstants.measurementUnitsApi)
      .subscribe((response) => {
        response.map(x => this.measurementUnits.push({...x, isEditing: false}));
      });
  }

  onClickEditButton(element: EditableMeasurementUnit) {
    this.newData.name = element.displayName;
    this.newData.symbol = element.symbol;
    this.newData.magnitude = element.magnitude;
    element.isEditing = true;
  }

  onClickTrashButton(element: EditableMeasurementUnit) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.closed.subscribe(result => result && this.deleteElement(element));
  }

  onClickSaveButton(element: EditableMeasurementUnit) {}

  onClickCancelButton(element: EditableMeasurementUnit) {
    element.isEditing = false;
  }

  deleteElement(element: EditableMeasurementUnit) {
    this.httpService.delete<boolean>(`${ApiConstants.measurementUnitsApi}/${element.measurementUnitId}`)
      .subscribe(() => {
        this.toastr.info("Eliminación realizada con éxito.")
        this.getMeasurementUnits();
      });  
  }
}

interface EditableMeasurementUnit extends MeasurementUnit {
  isEditing: boolean;
}
