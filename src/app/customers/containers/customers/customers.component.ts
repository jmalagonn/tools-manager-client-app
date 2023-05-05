import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';
import { Customer } from 'src/app/Core/models/Customer.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { HttpService } from 'src/app/services/http.service';
import { AddCustomerModalComponent } from '../../components/add-customer-modal/add-customer-modal.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  modalRef?: NgbModalRef;
  customers?: Customer[];
  listActions = ListActions;

  constructor(
    private modalService: NgbModal,
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.httpService.get<Customer[]>('Customers')
      .subscribe(customers => this.customers = customers);
  }
    
  onOpenAddCustomerModal() {
    this.modalRef = this.modalService.open(AddCustomerModalComponent);
    this.modalRef.closed.subscribe(result => result && this.getCustomers());
  }

  goToBranch(item: ItemList) {    
    this.router.navigateByUrl(`customers/customer/${item.id}`);
  }

  updateCustomers(customer: Customer) {
    if(!customer) return;

    const index = this.customers!.findIndex(x => x.customerId == customer.customerId);
    this.customers?.splice(index, 1, customer);

    this.customers = Object.assign([], this.customers);
  }
}
