import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/Core/models/Branch.model';

@Component({
  selector: 'app-add-work-order-modal',
  templateUrl: './add-work-order-modal.component.html',
  styleUrls: ['./add-work-order-modal.component.scss']
})
export class AddWorkOrderModalComponent {
  branch?: Branch;

  constructor(public bsModalRef: BsModalRef) {}
}
