import { Branch } from "./Branch.model";

export interface Customer {
    customerId: number;
    customerName: string;
    branches: Branch[];
}