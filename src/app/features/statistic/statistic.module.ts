import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatisticComponent } from 'src/app/features/statistic/statistic.component';

import { StatisticRoutingModule } from './statistic-routing.module';


@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule,
  ],
})
export class StatisticModule {
}
