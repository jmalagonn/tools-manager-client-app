import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.scss']
})
export class BranchesListComponent implements OnChanges {
  filteredBranches?: Branch[];
  faSearch = faSearch;

  @Input() branches?: Branch[];

  constructor(private router: Router) {}
  
  ngOnChanges(): void {
    this.filteredBranches = this.branches ? this.branches : [];
  }
  
  onRowClicked(branch: Branch): void {
    this.router.navigateByUrl(`${RouteConstants.customersPath}/${branch.customerId}/branch/${branch.id}`);
  }

  filterBy(e: any, columnName: string): void {
    if (!e.target.value || e.target.value && e.target.value.length < 3) {
      this.filteredBranches = this.branches!;
      return;
    }

    switch(columnName) {
      case "code":
        this.filteredBranches = this.branches!
          .filter(x => x.code?.toString().includes(e.target.value));
        break;
      case "name":
        this.filteredBranches = this.branches!
          .filter(x => x.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
        break;
    }
  }
}
