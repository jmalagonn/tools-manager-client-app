import { AppFile } from "../AppFile.model";
import { WorkState } from "../Work-state.model";

export interface WorkOrder {
    assignedUserId: number;
    assignedUserName: string;
    branchId: number;
    branchName?: string;
    closedOn?: Date;
    createdOn?: Date;
    customerCode?: number;
    customerId: number;
    customerName?: string;
    equipmentId: number;
    equipmentName: string;
    files: AppFile[];
    internalCode?: number;
    workOrderDescription?: string;
    workOrderId?: number;
    workOrderTypeId: number;
    workOrderTypeName: string;
    workState?: WorkState;
}