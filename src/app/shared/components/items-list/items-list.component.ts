import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppConstants } from 'src/app/Core/constants/app-constants';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { ItemList } from 'src/app/Core/models/Item-list.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  appConstants = AppConstants;

  @Input() items?: ItemList[];  
  @Input() actions?: ListActions[];
  @Input() headers?: string[];

  @Output() rowClickedEvent = new EventEmitter<ItemList>();

  constructor() {}

  onRowClicked(item: ItemList) {
    this.rowClickedEvent.emit(item);
  }
}
