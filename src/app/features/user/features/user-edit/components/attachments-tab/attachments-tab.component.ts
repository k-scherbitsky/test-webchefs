import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AttachFormStructure } from 'src/app/features/user/features/user-edit/models/attach-form-structure';

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
  @Input({ required: true }) public form: FormGroup<AttachFormStructure>;
}
