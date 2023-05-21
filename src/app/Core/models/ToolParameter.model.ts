export interface ToolParameter {
    id?: number;
    name: string;
    measurementUnitId: number;
    measurementUnitSymbol: string;
    parameterId?: number; 
    parameterValue?: number;
    toolId?: number;
}