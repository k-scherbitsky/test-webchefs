import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {

  @Input() title: string;

  @Output() yes: EventEmitter<void> = new EventEmitter();
  @Output() no: EventEmitter<void> = new EventEmitter();


  public onClickYes(): void {
    this.yes.emit();
  }

  public onClickNo(): void {
    this.no.emit();
  }
}
