import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject, Subscription, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';

// todo как будто хочется разбить на два сервиса (аус и сервис модалки)
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  user$ = new BehaviorSubject<IUser|null>(null);

  isShow$ = new BehaviorSubject<boolean>(false);

  dlgType$ = new BehaviorSubject<string>('');

  errorText$ = new BehaviorSubject<string>('');

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
    return this.http.post<IUser>('http://localhost:3000/auth/log-in', user).pipe(
      map(user => {
        console.log(user,  ' >>> USER')
        this.setUser(user);
        this.closeDlg();
      }),
      catchError(error => of(this.setErrorText(error.error.message)))
    );
  }

  logout(userId: number): Observable<any> {
    return this.http.post<IUser>('http://localhost:3000/auth/log-out', {userId}).pipe(
      map(() => this.setUser(null)),
      catchError(error => of(this.setErrorText(error.error.message)))
    );
  }

  registration(user: IUser): Observable<any> { // todo вынести в соответствующий сервис
    return this.http.post<IUser>('http://localhost:3000/user', user).pipe(
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

  refreshToken(): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/auth/refresh', {
      withCredentials: true
    });
  }
}