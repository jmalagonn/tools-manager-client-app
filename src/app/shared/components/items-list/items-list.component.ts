import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { ItemList } from 'src/app/Core/models/Item-list.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() items?: ItemList[];  
  @Input() actions?: ListActions[];

  @Output() rowClickedEvent = new EventEmitter<ItemList>();

  onRowClicked(item: ItemList) {
    this.rowClickedEvent.emit(item);
  }
}
