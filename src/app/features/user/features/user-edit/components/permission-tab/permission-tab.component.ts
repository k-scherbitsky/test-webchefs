import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableData } from 'src/app/features/user/features/user-edit/config/table-data.config';
import { AttachFormStructure, PermissionFormStructure } from 'src/app/features/user/features/user-edit/models/attach-form-structure';
import { Permission } from 'src/app/features/user/features/user-edit/models/permission';
import { ButtonComponent } from 'src/app/shared/button/button.component';

type ActionType = 'create' | 'read' | 'update' | 'delete';

@Component({
  selector: 'app-permission-tab',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './permission-tab.component.html',
  styleUrl: './permission-tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionTabComponent implements OnInit {

  @Input({ required: true }) form: FormGroup<AttachFormStructure>;

  public readonly tableData: Permission[] = TableData.ROW_DATA;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.intiForm();
  }

  public onClickAction(id: number, action: ActionType, flag: boolean): void {
    this.tableData.forEach((data) => {
      if (data.id === id) {
        data[action] = !flag;
      }
    });

    this.form.controls.permissions.controls.forEach((form, index) => {
      if (form.controls.id.value === id) {
        form.patchValue({
          [action]: !form.controls[action].value,
        });
      }
    });
  }

  private intiForm(): void {
    this.tableData.forEach((value: Permission) => {
      this.form.controls.permissions.controls.push(this.fb.group<PermissionFormStructure>({
        id: new FormControl(value.id),
        objectName: new FormControl(value.objectName),
        create: new FormControl(value.create),
        read: new FormControl(value.read),
        update: new FormControl(value.update),
        delete: new FormControl(value.delete),
      }));
    });
  }
}
