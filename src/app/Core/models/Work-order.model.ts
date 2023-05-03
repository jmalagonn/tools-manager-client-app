import { WorkItem } from "./Work-item.model";
import { WorkState } from "./Work-state.model";

export interface WorkOrder {
    workOrderId?: number;
    workOrderDescription?: string;
    customerId: number;
    customerName?: string;
    branchId: number;
    branchName?: string;
    workItems: WorkItem[];
    createdOn?: Date;
    workState?: WorkState;
}