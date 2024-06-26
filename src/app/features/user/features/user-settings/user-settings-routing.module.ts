import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from 'src/app/features/user/features/user-settings/user-settings.component';

const routes: Routes = [{
  path: '',
  component: UserSettingsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {
}
