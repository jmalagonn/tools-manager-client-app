import { Base } from "./Base.model";
import { Parameter } from "./Parameter.model";

export interface Equipment extends Base {
    description?: string;
    customerId?: number;
    customerName?: string;
    branchId?: number;
    branchName?: string;
    equipmentParameters: Parameter[]; 
}