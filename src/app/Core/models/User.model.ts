import { Company } from "./Company.model";
import { ToolOutput } from "./Tool-output.model";
import { UserRole } from "./User-role.model";
import { WorkOrder } from "./workOrder/Work-order.model";

export interface User {
    address?: string;
    assignedWorkOrders?: WorkOrder[];
    company: Company;
    email: string;
    idCard: string;
    name: string;
    phone?: string;
    userId: number;
    userRoles: UserRole[];
    outputsTool?: ToolOutput[];
}