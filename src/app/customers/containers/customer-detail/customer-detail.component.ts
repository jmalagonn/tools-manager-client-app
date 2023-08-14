import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Core/models/Customer.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { HttpService } from 'src/app/services/http.service';
import { AddBranchModalComponent } from '../../components/add-branch-modal/add-branch-modal.component';
import { ApiConstants } from 'src/app/Core/constants/app-constants';
import { UserRoles } from 'src/app/Core/enums/User-roles.enum';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  modalRef?: NgbModalRef;
  customer!: Customer;
  editingCustomer = false;
  userRoles = UserRoles;

  constructor(    
    private route: ActivatedRoute,
    private httpService: HttpService,    
    private modalService: NgbModal,
    private router: Router) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    const customerId = this.route.snapshot.paramMap.get('id');

    this.httpService.get<Customer>(`Customers/${customerId}`)
      .subscribe(response => this.customer = response);
  }

  onOpenAddBranchModal() {
    this.modalRef = this.modalService.open(AddBranchModalComponent);
    this.modalRef!.componentInstance.customer = this.customer!;
    this.modalRef.closed.subscribe((response) => response && this.getCustomer());
  }  

  setEditingCustomer(value: boolean) {
    this.editingCustomer = value;
  }

  onUpdateCustomer(customer: Customer) {
    this.httpService.put<Customer>(`${ApiConstants.customersApi}/${customer.id}`, customer)
      .subscribe(() => {
        this.getCustomer();
        this.setEditingCustomer(false);
      });
  }
}
