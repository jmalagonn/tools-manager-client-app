import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ItemList } from 'src/app/Core/models/Item-list.model';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})
export class DropdownInputComponent implements OnChanges {
  componentId = Math.random().toString(36).slice(-6);
  filteredOptions?: ItemList[];
  showDropdownList: boolean = false;

  @Input() label?: string;
  @Input() buttonText?: string;
  @Input() options?: ItemList[]; 
  @Input() showAddNewItemButton: boolean = false; 
  @Input() showAddNewItemButtonText?: string; 

  @Output() selectItemEvent = new EventEmitter<ItemList>();
  @Output() addNewItemEvent = new EventEmitter<void>();

  ngOnChanges(): void {
    if (this.options)
      this.filteredOptions = this.options;
  }
 
  filterParameters(e: any): void {
    if (!e.target.value || e.target.value.length < 2) {
      this.filteredOptions = this.options;
      return;
    }     
    this.filteredOptions = this.options?.filter(x => x.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
  }

  toggleShowDropdownList() {
    this.showDropdownList = !this.showDropdownList;
  }
}
