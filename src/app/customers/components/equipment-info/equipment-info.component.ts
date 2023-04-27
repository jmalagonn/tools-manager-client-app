import { Component, Input } from '@angular/core';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { Equipment } from 'src/app/Core/models/Equipment.model';

@Component({
  selector: 'app-equipment-info',
  templateUrl: './equipment-info.component.html',
  styleUrls: ['./equipment-info.component.scss']
})
export class EquipmentInfoComponent {
  routeConstants = RouteConstants;
  
  @Input() equipment?: Equipment;
}
