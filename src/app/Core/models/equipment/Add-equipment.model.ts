import { Parameter } from "../Parameter.model";

export interface AddEquipment {
    branchId: number;
    customerId: number;
    description?: string;
    name: string;
    parameters: Parameter[];
}