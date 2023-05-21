import { ToolParameter } from "./ToolParameter.model";
import { ToolState } from "./ToolState.model";

export interface Tool {
    toolId: number;
    toolName: string;
    toolGuid: string;
    toolState: ToolState;
    returnDateTime?: Date;
    toolParameters?: ToolParameter[];
}