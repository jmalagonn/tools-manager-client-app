export interface ToolParameter {
    id?: number;
    name: string;
    measurementUnitId: number;
    measurementUnitSymbol: string;
    parameterValue?: number;
    toolParameterToolId?: number;
}