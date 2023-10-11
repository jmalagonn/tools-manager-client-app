import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  filteredData: any[] = [];
  sortingType: SortingType = SortingType.ascending;

  @Input() tableData?: any[];

  @Output() rowClickedEvent = new EventEmitter<any>();
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tableData) return;

    this.filteredData = this.tableData;
  }

  onFilterApplied(text: string, propName: any) {
    if (!text || !text.length)
    {
      this.filteredData = this.tableData!;
      return;
    }
    
    this.filteredData = this.filteredData.filter(x => {
      if (!x[propName])
        return false;
      
      return x[propName].toString().toLocaleLowerCase().includes(text.toLocaleLowerCase());
    })
  }

  sortBy(e: any, propName: any) {
    this.sortingType = this.sortingType == SortingType.ascending 
      ? SortingType.descending
      : SortingType.ascending;

    if (this.sortingType == SortingType.ascending) {
      this.filteredData!.sort((a, b) => a[propName].localeCompare(b[propName]));
    }
    else {
      this.filteredData!.sort((a, b) => b[propName].localeCompare(a[propName]));
    }
  }
}

enum SortingType {
  ascending = 0,
  descending
}

