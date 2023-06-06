import { ToolParameter } from "./Tool-parameter.model";
import { ToolState } from "./Tool-state.model";

export interface Tool {
    toolId: number;
    toolName: string;
    toolGuid: string;
    toolState: ToolState;
    returnDateTime?: Date;
    toolParameters?: ToolParameter[];
}