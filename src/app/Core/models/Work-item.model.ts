import { Equipment } from "./Equipment.model";
import { WorkItemActivityLog } from "./Work-item-activity-log.model";

export interface WorkItem {
    assignedUserId: number;
    assignedUserName?: string;
    closedOn?: Date | string;
    createdOn?: Date | string;
    equipment: Equipment;
    workItemId?: number;
    workItemDescription: string;
    workItemTypeId: number;
    workItemTypeName?: string;
    workOrderId: number;
    workItemActivityLogs?: WorkItemActivityLog[];
}