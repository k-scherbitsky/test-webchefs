import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LeftMenuService } from 'src/app/services/left-menu.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {

  constructor(
    public leftMenuService: LeftMenuService,
  ) {
  }

  public onToggleClick(): void {
    this.leftMenuService.showMenu = true;
  }
}
