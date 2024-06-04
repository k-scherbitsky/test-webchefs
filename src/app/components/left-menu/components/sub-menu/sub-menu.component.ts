import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/components/left-menu/models/menu-item';

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [
    NgForOf,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubMenuComponent {
  @Input() public menu: MenuItem;

}
