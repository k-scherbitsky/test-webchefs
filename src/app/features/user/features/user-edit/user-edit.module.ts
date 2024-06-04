import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AttachmentsTabComponent } from 'src/app/features/user/features/user-edit/components/attachments-tab/attachments-tab.component';
import { PermissionTabComponent } from 'src/app/features/user/features/user-edit/components/permission-tab/permission-tab.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';


@NgModule({
  declarations: [
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    ButtonComponent,
    PermissionTabComponent,
    AttachmentsTabComponent,
  ],
})
export class UserEditModule {
}
