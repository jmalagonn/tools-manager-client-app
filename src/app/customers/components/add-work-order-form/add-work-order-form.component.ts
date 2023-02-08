import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Branch } from 'src/app/Core/models/Branch.model';
import { WorkItemType } from 'src/app/Core/models/Work-item-type';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-work-order-form',
  templateUrl: './add-work-order-form.component.html',
  styleUrls: ['./add-work-order-form.component.scss']
})
export class AddWorkOrderFormComponent implements OnInit {  
  faPlus = faPlus;
  faSave = faSave;
  faTrash = faTrash;
  workItemTypes?: WorkItemType[];

  @Input() branch?: Branch;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getWorkItemTypes();
  }

  getWorkItemTypes() {
    this.httpService.get<WorkItemType[]>('WorkItem/workItemTypes').subscribe(
      workItemTypes => this.workItemTypes = workItemTypes
    );
  }
}
