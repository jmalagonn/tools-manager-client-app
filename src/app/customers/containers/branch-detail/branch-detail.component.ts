import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  modalRef?: BsModalRef;

  constructor (
    private route: ActivatedRoute,
    private httpService: HttpService,    
    private modalService: BsModalService,
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
    const initialState: ModalOptions<AddEquipmentModalComponent> = {
      initialState: {
        branchId: this.branch!.branchId!
      }
    };

    this.modalRef = this.modalService.show(AddEquipmentModalComponent, initialState);
  }

  onOpenAddWorkOrder() {
    const initialState: ModalOptions<AddWorkOrderModalComponent> = {
      initialState: {
        branch: this.branch!
      },
      class: "modal-lg"
    };

    this.modalRef = this.modalService.show(AddWorkOrderModalComponent, initialState);
  }

  navigateToEquipment(equipment: ItemList) {
    this.router.navigateByUrl(`customers/equipment/${equipment.id}`);
  }
}
