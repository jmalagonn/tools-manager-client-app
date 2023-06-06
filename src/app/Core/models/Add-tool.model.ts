import { ToolParameter } from "./Tool-parameter.model";

export interface AddTool {
    name: string;
    toolParameters: ToolParameter[];
    files: File[];
}