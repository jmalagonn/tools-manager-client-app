import { Company } from "./Company.model";
import { OutputTool } from "./Output-tool.model";
import { UserRole } from "./User-role.model";

export interface User {
    company: Company;
    email: string;
    idCard: string;
    name: string;
    userId: number;
    userRoles: UserRole[];
    outputsTool?: OutputTool[];
}