import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AttachFormStructure, PermissionFormStructure } from 'src/app/features/user/features/user-edit/models/attach-form-structure';
import { AttachmentFormRequest } from 'src/app/features/user/features/user-edit/models/attachment-form-request';
import { Permission } from 'src/app/features/user/features/user-edit/models/permission';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent {
  public attachForm: FormGroup<AttachFormStructure>;

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildAttachForm();
  }

  public onSaveAttachForm(): void {
    const request: AttachmentFormRequest = {
      birthday: this.attachForm.controls.birthday.value,
      citizenship: this.attachForm.controls.citizenship.value,
      email: this.attachForm.controls.email.value,
      facebook: this.attachForm.controls.facebook.value,
      files: this.attachForm.controls.files.value,
      firstName: this.attachForm.controls.firstName.value,
      instagram: this.attachForm.controls.instagram.value,
      lastName: this.attachForm.controls.lastName.value,
      tweeter: this.attachForm.controls.tweeter.value,
      permissions: this.attachForm.controls.permissions.controls.map(form => ({
        id: form.controls.id.value,
        objectName: form.controls.id.value,
        create: form.controls.create.value,
        read: form.controls.read.value,
        update: form.controls.update.value,
        delete: form.controls.delete.value,
      } as unknown as Permission)),
    };

    alert('Form has been saved! Check log in console');
    console.log('[SAVED FORM] - ', request);
  }

  private buildAttachForm(): void {
    this.attachForm = this.fb.group<AttachFormStructure>({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      birthday: new FormControl(),
      citizenship: new FormControl(),
      instagram: new FormControl(),
      tweeter: new FormControl(),
      facebook: new FormControl(),
      files: new FormControl(),
      permissions: new FormArray<FormGroup<PermissionFormStructure>>([]),
    });
  }
}
