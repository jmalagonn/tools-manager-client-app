import { AppFile } from "./AppFile.model";
import { ToolParameter } from "./Tool-parameter.model";
import { ToolState } from "./Tool-state.model";

export interface Tool {
    files?: AppFile[];
    returnDateTime?: Date;
    toolGuid: string;
    toolId: number;
    toolName: string;
    toolParameters?: ToolParameter[];
    toolState: ToolState;
}