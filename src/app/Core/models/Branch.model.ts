import { Base } from "./Base.model";
import { Customer } from "./Customer.model";
import { Equipment } from "./Equipment.model";
import { WorkOrder } from "./workOrder/Work-order.model";

export interface Branch extends Base {
    code?: string;
    customerName?: string;
    customerId?: number;
    equipment?: Equipment[];
    workOrders?: WorkOrder[];
}