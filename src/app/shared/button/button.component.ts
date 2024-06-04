import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input({ required: true }) public color: string;
  @Input({ required: true }) public title: string;
  @Input() public size: 'small' | 'medium' | 'large' = 'medium';

  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();

  public onClick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
