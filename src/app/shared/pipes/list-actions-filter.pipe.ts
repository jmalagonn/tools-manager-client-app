import { Pipe, PipeTransform } from '@angular/core';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';

@Pipe({
  name: 'listActionsFilter'
})
export class ListActionsFilterPipe implements PipeTransform {

  transform(listActions: ListActions[], action: ListActions): boolean {
    return listActions && listActions.includes(action);
  }

}
