import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {UserAccount} from '../models/userAccount';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserAccountService {
  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:3000/user';

  signUp(user: UserAccount) {
    const body = JSON.stringify(user);
    console.log(body);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url, body, {headers: headers})
      .catch(error => Observable.throw(error));
  }

  signIn(user: UserAccount) {
    const body = JSON.stringify(user);
    const signin = '/signin';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.url}${signin}`, body, {headers: headers})
      .catch(error => Observable.throw(error));
  }

  logOut() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
