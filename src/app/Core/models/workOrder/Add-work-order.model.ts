export interface AddWorkOrder {
    assignedUserId: string;
    branchId: string;
    customerId: string;
    customerCode?: string;
    equipmentId?: string;
    internalCode?: string;
    workOrderTypeId: string;
    workOrderDescription?: string;
    files?: File[];
}