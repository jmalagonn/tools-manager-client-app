import { Component, EventEmitter, Output } from '@angular/core';
import { faCheck, faCircleCheck, faCircleXmark, faFilter, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent {
  faFilter = faFilter;
  faCheck = faCircleCheck;
  faX = faCircleXmark;
  inputText?: string;
  showContent: boolean = false;

  @Output() applyFilterEvent = new EventEmitter<string>();

  onClickApply() {
    this.applyFilterEvent.emit(this.inputText);
    this.showContent = false;
  }
  
  onClickCancel() {
    this.inputText = "";
    this.showContent = false;
    this.applyFilterEvent.emit(this.inputText);
  }

  toggleFilterColumn(e: MouseEvent) {
    this.showContent = !this.showContent;
  }
}
