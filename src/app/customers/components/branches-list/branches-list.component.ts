import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/Core/constants/app-constants';
import { Branch } from 'src/app/Core/models/Branch.model';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.scss']
})
export class BranchesListComponent implements OnInit {
  @Input() branches: Branch[] = [];

  constructor(private router: Router) {}
  
  ngOnInit(): void {}
  
  onRowClicked(branch: Branch) {
    this.router.navigateByUrl(`${RouteConstants.customersPath}/${branch.customerId}/branch/${branch.id}`);
  }
}
