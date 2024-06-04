import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/app/features/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'edit',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () => import('./features/user-list/user-list.module').then(m => m.UserListModule),
      },
      {
        path: 'edit',
        loadChildren: () => import('./features/user-edit/user-edit.module').then(m => m.UserEditModule),
      },
      {
        path: 'roles-permissions',
        loadChildren: () => import('./features/user-roles-permissions/user-roles-permissions.module').then(m => m.UserRolesPermissionsModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/user-settings/user-settings.module').then(m => m.UserSettingsModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
