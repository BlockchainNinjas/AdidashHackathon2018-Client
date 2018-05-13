import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserModel } from '../../pages/models/user.model';

let counter = 0;

@Injectable()
export class UserService {

  private users: UserModel[] = [
    { name: 'Cvetozar Kalchev', picture: 'assets/images/nick.png', club: 'Liverpool', points: 2301, consecutiveEvents: 26 },
    { name: 'Borislav Borisov', picture: 'assets/images/alan.png', club: 'Barcelona', points: 2672, consecutiveEvents: 27 },
    { name: 'Petko Chepishev', picture: 'assets/images/jack.png', club: 'Real Madrid', points: 2430, consecutiveEvents: 24 },
    { name: 'Vladimir Voev', picture: 'assets/images/lee.png', club: 'Juventus', points: 2211, consecutiveEvents: 22 },
    { name: 'Stefan Ludzhev', picture: 'assets/images/eva.png', club: 'Atletico Madrid', points: 1996, consecutiveEvents: 18 },
    { name: 'Kate Bosch', picture: 'assets/images/kate.png', club: 'Liverpool', points: 1995, consecutiveEvents: 19 },
  ] as UserModel[];

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<UserModel[]> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
