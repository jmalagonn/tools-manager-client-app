import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Tool } from 'src/app/Core/models/Tool.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-tool-modal',
  templateUrl: './add-tool-modal.component.html',
  styleUrls: ['./add-tool-modal.component.scss']
})
export class AddToolModalComponent implements OnInit {
  addToolForm?: FormGroup;

  @Output() toolAddedEvent = new EventEmitter<Tool>();

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    public httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addToolForm = this.fb.group({
      toolName: ['', Validators.required]
    });
  }

  onSubmit() {
    const body = {
      toolName: this.addToolForm?.controls["toolName"].value
    };

    this.httpService.post<Tool>('Tools', body)
      .subscribe(() => this.activeModal.close(true));
  }
}

