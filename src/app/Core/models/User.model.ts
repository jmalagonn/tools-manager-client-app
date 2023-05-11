import { Company } from "./Company.model";
import { OutputTool } from "./Output-tool.model";
import { UserRole } from "./User-role.model";
import { WorkItem } from "./Work-item.model";

export interface User {
    address?: string;
    assignedWorkItems?: WorkItem[];
    company: Company;
    email: string;
    idCard: string;
    name: string;
    phone?: string;
    userId: number;
    userRoles: UserRole[];
    outputsTool?: OutputTool[];
}