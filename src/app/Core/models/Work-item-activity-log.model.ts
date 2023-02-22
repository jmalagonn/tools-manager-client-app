import { AppFile } from "./AppFile.model";

export interface WorkItemActivityLog {
    workItemActivityLogId?: number;
    description: string;
    createdOn?: Date;
    workItem?: any;
    workItemId: number;
    files?: AppFile[];
}