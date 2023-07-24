import { Pipe, PipeTransform } from '@angular/core';
import { ToolParameter } from 'src/app/Core/models/Tool-parameter.model';

@Pipe({
  name: 'parameterValue'
})
export class ParameterValuePipe implements PipeTransform {

  transform(value: ToolParameter): string {
    if (value.measurementUnitSymbol) {
      return `${value.parameterValue} | ${value.measurementUnitSymbol}`;
    } else {
      return `${value.parameterValue}`;
    }
  }

}
