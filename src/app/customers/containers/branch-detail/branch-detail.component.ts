import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/Core/models/Branch.model';
import { ItemList } from 'src/app/Core/models/Item-list.model';
import { HttpService } from 'src/app/services/http.service';
import { AddEquipmentModalComponent } from '../../components/add-equipment-modal/add-equipment-modal.component';
import { AddWorkOrderModalComponent } from '../../components/add-work-order-modal/add-work-order-modal.component';

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.scss']
})
export class BranchDetailComponent implements OnInit {
  branch?: Branch;
  modalRef?: NgbModalRef;

  constructor (
    private route: ActivatedRoute,
    private httpService: HttpService,    
    private modalService: NgbModal,
    private router: Router) {}

  ngOnInit(): void {
    this.getBranch();
  }

  getBranch() {
    const branchId = this.route.snapshot.paramMap.get('branchId');

    this.httpService.get<Branch>(`Branches?branchId=${branchId}`)
      .subscribe(response => this.branch = response);
  }

  onOpenAddEquipmentModal() {
    this.modalRef = this.modalService.open(AddEquipmentModalComponent);
    this.modalRef.componentInstance.branch = this.branch!;
    this.modalRef.closed.subscribe(result => result && this.getBranch());
  }

  onOpenAddWorkOrder() {
    this.modalRef = this.modalService.open(AddWorkOrderModalComponent, { size: 'lg' });
    this.modalRef.componentInstance.branch = this.branch!;
    this.modalRef.closed.subscribe(result => result && this.getBranch());
  }

  navigateToEquipment(equipment: ItemList) {
    this.router.navigateByUrl(`customers/equipment/${equipment.id}`);
  }
}
