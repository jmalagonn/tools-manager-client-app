import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/Core/models/Equipment.model';
import { WorkItem } from 'src/app/Core/models/Work-item.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  equipment?: Equipment;
  workItems?: WorkItem[];

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEquipment();
  }

  getEquipment() {
    const equipmentId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<Equipment>(`Equipment/${equipmentId}`)
      .subscribe(response => {
        this.equipment = response;
        this.getWorkItems();
      });
  }

  getWorkItems() {
    this.httpService.get<WorkItem[]>(`WorkItem/equipment?equipmentId=${this.equipment!.equipmentId}`)
      .subscribe(workItems => this.workItems = workItems);
  }

  navigateToWo(item: WorkItem) {
    this.router.navigateByUrl(`customers/work-order/${item.workOrderId}`);
  }
}
