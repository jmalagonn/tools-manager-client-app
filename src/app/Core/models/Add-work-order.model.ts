import { WorkItem } from "./Work-item.model";

export interface AddWorkOrder {
    customerId: number;
    branchId: number;
    files: File[];
    workItems: WorkItem[];
    workOrderDescription?: string;
}