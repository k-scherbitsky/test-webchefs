import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableData } from 'src/app/features/user/features/user-edit/config/table-data.config';
import { Permission } from 'src/app/features/user/features/user-edit/models/permission';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-permission-tab',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './permission-tab.component.html',
  styleUrl: './permission-tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionTabComponent {

  public readonly tableData: Permission[] = TableData.ROW_DATA;

}
