import { ToolParameter } from "../Tool-parameter.model";

export interface UpdateTool {
    id: number;
    name: string;
    toolParameters: ToolParameter[];
    deletedFileIds: number[]; 
    addedFiles: File[];
}