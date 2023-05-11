import { UserRole } from "./User-role.model";

export interface Account {
    companyId: number;
    email: string;
    name: string;
    token: string;
    userId: number;
    userRoles: UserRole[];  
}