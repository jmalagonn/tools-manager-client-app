import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent {
  workItem?: WorkItem;
  routeConstants = RouteConstants;

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getWorkItem();
  }

  getWorkItem() {
    const workItemId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<WorkItem>(`WorkItem/${workItemId}`)
      .subscribe(response => {
        this.workItem = response;
      });
  }
}
