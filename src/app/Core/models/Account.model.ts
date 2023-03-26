import { UserRole } from "./User-role.model";

export interface Account {
    email: string;
    name: string;
    token: string;
    userRoles: UserRole[];
}