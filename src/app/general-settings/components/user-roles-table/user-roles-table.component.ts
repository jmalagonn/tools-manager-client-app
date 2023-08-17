import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faEdit, faSave, faX } from '@fortawesome/free-solid-svg-icons';
import { UserRole } from 'src/app/Core/models/User-role.model';

@Component({
  selector: 'app-user-roles-table',
  templateUrl: './user-roles-table.component.html',
  styleUrls: ['./user-roles-table.component.scss']
})
export class UserRolesTableComponent implements OnChanges {
    faEdit = faEdit;
    faX = faX;
    faSave = faSave;
    editableUserRole: EditableUserRole[] = [];
    
    @Input() userRoles?: UserRole[];
    
    ngOnChanges(changes: SimpleChanges): void {
        if (this.userRoles) {
            this.editableUserRole = this.userRoles.map(x => ({
                ...x,
                isEditing: false
            }))
        }
    }

    onClickEditButton(editedUserRole: Partial<UserRole>) {
        const itemIndex = this.editableUserRole.findIndex(x => x.id == editedUserRole.id);
        this.editableUserRole[itemIndex].isEditing = true;
    }

    onClickSaveButton() {

    }

    onClickCancelButton(editedUserRole: Partial<UserRole>) {
        const itemIndex = this.editableUserRole.findIndex(x => x.id == editedUserRole.id);
        this.editableUserRole[itemIndex].isEditing = false;
    }

}

interface EditableUserRole extends UserRole {
    isEditing: boolean;
}
