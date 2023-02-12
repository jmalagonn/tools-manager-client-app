import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  modalRef?: BsModalRef;
  customers?: Customer[];

  constructor(
    private modalService: BsModalService,
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
    this.modalRef = this.modalService.show(AddCustomerModalComponent);
  }

  goToBranch(item: ItemList) {    
    this.router.navigateByUrl(`customers/customer/${item.id}`);
  }
}
