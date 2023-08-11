import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { UserRoles } from 'src/app/Core/enums/User-roles.enum';
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
  editingEquipment = false;
  routeConstants = RouteConstants;
  userRoles = UserRoles;

  constructor (
    private httpService: HttpService,
    private route: ActivatedRoute,
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
    this.httpService.get<WorkItem[]>(`WorkItem/equipment?equipmentId=${this.equipment!.id}`)
      .subscribe(workItems => this.workItems = workItems);
  }

  setEditingEquipment(value: boolean) {
    this.editingEquipment = value;
  }

  onEquipmentUpdated() {
    this.setEditingEquipment(false);
    this.getEquipment();
  }
}
