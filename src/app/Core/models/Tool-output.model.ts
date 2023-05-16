import { ToolOutputState } from "./Tool-output-state.model";
import { Tool } from "./Tool.model";
import { User } from "./User.model";

export interface ToolOutput {
    outputDateTime: Date;
    toolOutputId: number;
    toolOutputState: ToolOutputState;
    responsible: User;
    tools: Tool[];
}