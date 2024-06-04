import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';


@NgModule({
  declarations: [
    UserSettingsComponent,
  ],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
  ],
})
export class UserSettingsModule {
}
