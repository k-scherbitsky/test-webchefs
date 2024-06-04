import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AttachFormStructure } from 'src/app/features/user/features/user-edit/models/attach-form-structure';
import { AttachmentFormRequest } from 'src/app/features/user/features/user-edit/models/attachment-form-request';

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
    const value: Partial<AttachmentFormRequest> = this.attachForm.value;

    alert('Form has been saved! Check log in console');
    console.log('[SAVED FORM] - ', value);
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
    });
  }
}
