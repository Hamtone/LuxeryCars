import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor() {}
  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  isAuthentificated(): boolean {
    return this.loggedIn.getValue();
  }
}
