import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit, faSave, faX } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { UserRole } from 'src/app/Core/models/User-role.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user-roles-table',
  templateUrl: './user-roles-table.component.html',
  styleUrls: ['./user-roles-table.component.scss']
})
export class UserRolesTableComponent implements OnChanges {
    faEdit = faEdit;
    faX = faX;
    faSave = faSave;
    editableUserRoles: EditableUserRole[] = [];
    roleDisplayName?: string;
    
    @Input() userRoles?: UserRole[];

    @Output() userRoleEditedEvent = new EventEmitter<UserRole>();

    constructor(private fb: FormBuilder) {}
    
    ngOnChanges(changes: SimpleChanges): void {
        if (this.userRoles) {
            this.editableUserRoles = this.userRoles.map(x => ({
                ...x,
                isEditing: false
            }))
        }
    }

    onClickEditButton(editedUserRole: Partial<UserRole>) {
        this.roleDisplayName = editedUserRole.displayName;
        const itemIndex = this.editableUserRoles.findIndex(x => x.id == editedUserRole.id);
        this.editableUserRoles[itemIndex].isEditing = true;
    }

    onClickSaveButton(editedUserRole: Partial<UserRole>) {
        const itemIndex = this.editableUserRoles.findIndex(x => x.id == editedUserRole.id);   
        this.editableUserRoles[itemIndex].displayName = this.roleDisplayName!;
        this.editableUserRoles[itemIndex].isEditing = false;
        this.userRoleEditedEvent.emit(this.editableUserRoles[itemIndex]);
    }

    onClickCancelButton(editedUserRole: Partial<UserRole>) {
        const itemIndex = this.editableUserRoles.findIndex(x => x.id == editedUserRole.id);
        this.editableUserRoles[itemIndex].isEditing = false;
    }
}

interface EditableUserRole extends UserRole {
    isEditing: boolean;
}
