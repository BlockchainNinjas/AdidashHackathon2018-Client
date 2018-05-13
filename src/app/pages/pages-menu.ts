import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Ranklists',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'By points',
        link: '/pages/ranklists/points',
      },
      {
        title: 'By consecutive maches',
        link: '/pages/ranklists/consecutive',
      },
      {
        title: 'By team',
        link: '/pages/ranklists/teams',
      },
    ],
  },
  {
    title: 'Matches',
    icon: 'nb-home',
    link: '/pages/matches',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
