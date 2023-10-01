import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import { ApiConstants } from 'src/app/Core/constants/api-constants';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-new-work-order-activity',
  templateUrl: './new-work-order-activity.component.html',
  styleUrls: ['./new-work-order-activity.component.scss']
})
export class NewWorkOrderActivityComponent implements OnInit {
  activityForm?: FormGroup;

  @Input() workOrderId?: number;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if (!this.workOrderId) return;

    this.activityForm = this.fb.group({
      description: ['', Validators.required],
      workOrderId: [this.workOrderId, Validators.required]
    });
  }

  onSubmit() {
    if (!this.activityForm || !this.activityForm.valid) return;

    const body = {
      description: this.activityForm.controls["description"].value,
      workOrderId: this.activityForm.controls["workOrderId"].value
    }

    this.httpService.post(`${ApiConstants.workOrderActivity}`, body)
      .subscribe(() => {
        this.activeModal.close(true);
      });
  }
}
