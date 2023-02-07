import { Customer } from "./Customer.model";
import { Equipment } from "./Equipment.model";
import { WorkOrder } from "./Work-order.model";

export interface Branch {
    branchId?: number;
    branchName: string;
    customer?: Customer;
    customerId?: number;
    equipment?: Equipment[];
    workOrders?: WorkOrder[];
}