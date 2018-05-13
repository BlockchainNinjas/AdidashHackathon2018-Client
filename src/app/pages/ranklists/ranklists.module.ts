import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { PointsRanklistComponent } from './points/points.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PointsRanklistComponent,
  ],
})
export class RanklistsModule { }
