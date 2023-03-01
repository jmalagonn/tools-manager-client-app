import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ListActions } from 'src/app/Core/enums/List-actions.enum';

@Pipe({
  name: 'listActionIcon'
})
export class ListActionIconPipe implements PipeTransform {
  listActions = ListActions;
  faEdit = faEdit;

  transform(value: ListActions): IconProp {
    switch(value) {
      case ListActions.edit: 
        return faEdit; 
      default:
        return faEdit;
    }
  }

}
