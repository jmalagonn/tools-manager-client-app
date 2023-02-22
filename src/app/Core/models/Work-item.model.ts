import { Equipment } from "./Equipment.model";
import { WorkItemActivityLog } from "./Work-item-activity-log.model";
import { WorkItemType } from "./Work-item-type";

export interface WorkItem {
    createdOn?: Date | string;
    workItemId?: number;
    workItemDescription?: string;
    workItemType: WorkItemType;
    equipment: Equipment;
    workOrderId?: number;
    workItemActivityLogs?: WorkItemActivityLog[];
}