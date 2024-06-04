import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SubMenuComponent } from 'src/app/components/left-menu/components/sub-menu/sub-menu.component';
import { LeftMenuConfig } from 'src/app/components/left-menu/config/left-menu.config';
import { MenuItem } from 'src/app/components/left-menu/models/menu-item';
import { LeftMenuService } from 'src/app/services/left-menu.service';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    SubMenuComponent,
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent {

  public readonly currentDate: Date = new Date();
  public readonly menuItems: MenuItem[] = LeftMenuConfig.MENU_ITEMS;


  constructor(
    private router: Router,
    public leftMenuService: LeftMenuService,
  ) {
  }

  public isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  public onToggleClick(): void {
    this.leftMenuService.showMenu = false;
  }
}
