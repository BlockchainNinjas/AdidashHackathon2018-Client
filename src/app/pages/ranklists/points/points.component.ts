import { UserModel } from '../../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-points',
  styleUrls: ['./points.component.scss'],
  templateUrl: './points.component.html',
})
export class PointsRanklistComponent implements OnInit, OnDestroy {

  globalRanklist: UserModel[];
  localRanklist: UserModel[];
  myTeamRanklist: UserModel[];
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
        this.globalRanklist = users.slice().sort((a, b) => b.points - a.points);
        this.localRanklist = users.slice().sort((a, b) => b.points - a.points);
        this.myTeamRanklist = users.slice().filter(u => u.club === 'Real Madrid').sort((a, b) => b.points - a.points);
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
