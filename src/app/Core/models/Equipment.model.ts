import { EquipmentParameter } from "./Equipment-parameter.model";

export interface Equipment {
    equipmentId: number;
    equipmentName: string;
    equipmentDescription?: string;
    customerId?: number;
    customerName?: string;
    branchId?: number;
    branchName?: string;
    equipmentParameters: EquipmentParameter[]; 
}