import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PointsRanklistComponent } from './ranklists/points/points.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'ranklists/points',
      component: PointsRanklistComponent,
    },
    {
      path: 'ranklists/consecutive',
      component: PointsRanklistComponent,
    },
    {
      path: 'ranklists/teams',
      component: PointsRanklistComponent,
    },
    {
      path: 'matches',
      component: MatchesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
