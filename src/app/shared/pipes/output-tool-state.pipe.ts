import { Pipe, PipeTransform } from '@angular/core';
import { ToolOutputState } from 'src/app/Core/models/Tool-output-state.model';

@Pipe({
  name: 'outputToolState'
})
export class OutputToolStatePipe implements PipeTransform {

  transform(value: ToolOutputState, ...args: unknown[]): string {
    return value.toolOutputStateId == 1
      ? "Abierto"
      : "Cerrado";
  }

}
