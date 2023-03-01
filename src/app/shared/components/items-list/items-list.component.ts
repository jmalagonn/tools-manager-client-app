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
  @Input() items?: ItemList[];  
  @Input() actions?: ListActions[];
  @Input() headers: string[] = AppConstants.itemsListDefault;

  @Output() rowClickedEvent = new EventEmitter<ItemList>();
  @Output() actionButtonClickedEvent = new EventEmitter<object>();

  constructor() {}

  onRowClicked(e: MouseEvent, item: ItemList) {
    if ((e.composedPath() as HTMLElement[]).some(x => x.tagName === "svg")) return;    
    this.rowClickedEvent.emit(item);
  }

  actionButtonClicked(action: ListActions, item: ItemList) {
    this.actionButtonClickedEvent.emit({action, item});
  }
}
