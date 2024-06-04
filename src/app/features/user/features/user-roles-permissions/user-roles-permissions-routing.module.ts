import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRolesPermissionsComponent } from 'src/app/features/user/features/user-roles-permissions/user-roles-permissions.component';

const routes: Routes = [{
  path: '',
  component: UserRolesPermissionsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRolesPermissionsRoutingModule {
}
