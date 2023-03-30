import { Company } from "./Company.model";
import { UserRole } from "./User-role.model";

export interface Account {
    email: string;
    name: string;
    token: string;
    company: Company;
    userRoles: UserRole[];
}