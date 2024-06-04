import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRolesPermissionsRoutingModule } from './user-roles-permissions-routing.module';
import { UserRolesPermissionsComponent } from './user-roles-permissions.component';


@NgModule({
  declarations: [
    UserRolesPermissionsComponent,
  ],
  imports: [
    CommonModule,
    UserRolesPermissionsRoutingModule,
  ],
})
export class UserRolesPermissionsModule {
}
