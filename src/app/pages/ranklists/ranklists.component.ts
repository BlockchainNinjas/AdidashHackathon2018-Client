import { UserModel } from './../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../@core/data/users.service';

@Component({
  selector: 'ngx-ranklists',
  styleUrls: ['./ranklists.component.scss'],
  templateUrl: './ranklists.component.html',
})
export class RanklistsComponent implements OnInit, OnDestroy {

  pointsGlobalRanklist: UserModel[];
  consecutiveRanklist: UserModel[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: UserModel[]) => {
        this.pointsGlobalRanklist = users.slice().sort((a, b) => b.points - a.points);
        this.consecutiveRanklist = users.slice().sort((a, b) => b.consecutiveEvents - a.consecutiveEvents);
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
