export interface Parameter {
    id?: number;
    name: string;
    measurementUnitId: number;
    measurementUnitSymbol: string;
    parameterValue?: number | string;
}