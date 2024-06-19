import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject, Subscription, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';

// todo как будто хочется разбить на два сервиса (аус и сервис модалки)
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  user$ = new BehaviorSubject<IUser|null>(null);

  isShow$ = new BehaviorSubject<boolean>(false);

  dlgType$ = new BehaviorSubject<string>('');

  errorText$ = new BehaviorSubject<string>('');

  refreshTokenTimeout: any;

  setUser(user: IUser|null) {
    this.user$.next(user);
  }

  isLoggedIn() {
    return !!this.user$.value;
  }

  showDlg() {
    this.isShow$.next(true);
  }

  closeDlg() {
    this.isShow$.next(false);
    this.setErrorText();
  }

  setType(type: string) {
    this.dlgType$.next(type);
  }

  setErrorText(errorText: string = '') {
    this.errorText$.next(errorText);
  }

  login(user: IUser): Observable<any> {
    return this.http.post<IUser>('http://localhost:3000/auth/log-in', user, {withCredentials: true}).pipe(
      map(user => {
        console.log(user,  ' >>> USER')
        this.setUser(user);
        this.closeDlg();
        this.router.navigateByUrl('/profile');
      }),
      catchError(error => of(this.setErrorText(error.error.message)))
    );
  }

  logout(): Observable<any> {
    return this.http.post<IUser>('http://localhost:3000/auth/log-out', {}, {withCredentials: true}).pipe(
      map(() => this.setUser(null)),
      catchError(error => of(this.setErrorText(error.error.message)))
    );
  }

  registration(user: IUser): Observable<any> { // todo вынести в соответствующий сервис
    return this.http.post<IUser>('http://localhost:3000/user', user, {withCredentials: true}).pipe(
      catchError(error => of(this.setErrorText(error.error.message)))
    );
  }

  getAllUsers(): Observable<IUser[]> { // todo вынести в соответствующий сервис
    return this.http.get<IUser[]>('http://localhost:3000/user').pipe(
      map((users) => {
        console.log(users)
        return users;
      })
    );
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/refresh', {}, {withCredentials: true})
      .pipe(
        map(user => {
          this.user$.next(user);
          this.startRefreshTokenTimer();
          return user;
        }),
        catchError(error => of(error.error.message))
      );
  }

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    if(this.user$.value && this.user$.value.token) {
      const jwtToken = JSON.parse(atob(this.user$.value.token.split('.')[1]));
      console.log(jwtToken, ' >>> jwtToken')
      // set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }
}
}