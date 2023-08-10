export interface AddWorkOrder {
    assignedUserId: string;
    branchId: string;
    customerId: string;
    equipmentId: string;
    workOrderTypeId: string;
    workOrderDescription?: string;
    files?: File[];
}