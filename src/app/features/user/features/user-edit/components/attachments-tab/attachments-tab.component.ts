import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface FormStructure {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  birthday: FormControl<Date>;
  citizenship: FormControl<string[]>;
  instagram: FormControl<string>;
  tweeter: FormControl<string>;
  facebook: FormControl<string>;
  files: FormControl<File[]>;
}

@Component({
  selector: 'app-attachments-tab',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './attachments-tab.component.html',
  styleUrl: './attachments-tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttachmentsTabComponent {

  public form: FormGroup<FormStructure>;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group<FormStructure>({
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
