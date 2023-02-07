import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Customer } from 'src/app/Core/models/Customer.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { HttpService } from 'src/app/services/http.service';
import { AddBranchModalComponent } from '../../components/add-branch-modal/add-branch-modal.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  modalRef?: BsModalRef;
  customer!: Customer;

  constructor(    
    private route: ActivatedRoute,
    private httpService: HttpService,    
    private modalService: BsModalService,
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
    const initialState: ModalOptions<AddBranchModalComponent> = {
      initialState: {
        customerId: this.customer.customerId!
      }
    };

    this.modalRef = this.modalService.show(AddBranchModalComponent, initialState);
  }

  goToBranch(item: ItemList) {
    this.router.navigateByUrl(`customers/${this.customer.customerId}/${item.id}`);
  }
}
