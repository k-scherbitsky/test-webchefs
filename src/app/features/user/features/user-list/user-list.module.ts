import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';


@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
  ],
})
export class UserListModule {
}
