import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from 'src/app/features/user/features/user-edit/user-edit.component';

const routes: Routes = [{
  path: '',
  component: UserEditComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditRoutingModule {
}
