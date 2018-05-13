import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { RanklistsComponent } from './ranklists.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    RanklistsComponent,
  ],
})
export class RanklistsModule { }
