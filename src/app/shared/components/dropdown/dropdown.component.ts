import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DropdownItem } from 'src/app/Core/models/Dropdown-item.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {
  selectedOption?: DropdownItem;

  @Input() label?: string;
  @Input() buttonText: string = "Seleccionar";
  @Input() options?: DropdownItem[];
  @Input() selectedOptionId?: number;
  
  @Output() onSelectOptionEvent = new EventEmitter<DropdownItem>(); 

  ngOnChanges(): void {
    if (this.selectedOptionId && this.options) {
      this.selectedOption = this.options.find(x => x.id == this.selectedOptionId);
    }
  }

  onSelectOption(option: DropdownItem) {
    this.selectedOption = option;
    this.onSelectOptionEvent.emit(option);
  }
}
