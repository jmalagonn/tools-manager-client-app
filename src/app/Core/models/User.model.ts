import { OutputTool } from "./Output-tool.model";

export interface User {
    email: string;
    idCard: string;
    name: string;
    userId: number;
    outputsTool?: OutputTool[];
}