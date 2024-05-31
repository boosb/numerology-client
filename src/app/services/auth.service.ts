import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  isShow$ = new BehaviorSubject<boolean>(false);

  dlgType$ = new BehaviorSubject<string>('');

  showDlg() {
    this.isShow$.next(true);
  }

  closeDlg() {
    this.isShow$.next(false);
  }

  setType(type: string) {
    this.dlgType$.next(type);
    console.log(this.dlgType$.value, ' >>> VALUE')
  }

  login(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/auth/log-in', user);
  }

  registration(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/user', user);
  }
}