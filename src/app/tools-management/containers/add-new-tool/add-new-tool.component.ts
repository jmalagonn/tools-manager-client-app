import { Component } from '@angular/core';
import { ItemList } from 'src/app/Core/models/Item-list.model';

@Component({
  selector: 'app-add-new-tool',
  templateUrl: './add-new-tool.component.html',
  styleUrls: ['./add-new-tool.component.scss']
})
export class AddNewToolComponent {
  isAddingAdditionalInfo = false;
  items: ItemList[] = [
    {
      id: 1,
      name: "Test"
    },
    {
      id: 2,
      name: "Test2"
    },
    {
      id: 3,
      name: "Test3"
    }
  ];

  setIsAddingAdditionalInfo(value: boolean) {
    this.isAddingAdditionalInfo = value;
  }
}
