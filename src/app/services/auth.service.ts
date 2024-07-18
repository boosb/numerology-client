import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { IAuthUser } from '../interfaces/auth-user.interface';
import { ModalService } from './modal.service';
import { ErrorService } from './erros.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<IUser|null>(null);
  
  refreshTokenTimeout: any;

  get currentUser() {
    return this.user$.value;
  }
    
  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: ModalService,
    private errorService: ErrorService
  ) {}

  setUser(user: IUser|null) {
    this.user$.next(user);
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  login(user: IAuthUser): Observable<any> {
    return this.http.post<IUser>('http://localhost:3000/auth/log-in', user, {withCredentials: true}).pipe(
      map(user => {
        this.setUser(user);
        this.modalService.closeDlg();
        this.router.navigateByUrl('/profile');
      }),
      catchError(error => of(this.errorService.setServerErrorText(error.error.message)))
    );
  }

  logout(): Observable<any> {
    return this.http.post<IUser>('http://localhost:3000/auth/log-out', {}, {withCredentials: true}).pipe(
      map(() => {
        this.setUser(null);
        this.router.navigateByUrl('/');
      }),
      catchError(error => of(this.errorService.setServerErrorText(error.error.message)))
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

  // todo чет вкинул метод, но не оч разобрался (!)
  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    if(this.currentUser && this.currentUser.token) {
      const jwtToken = JSON.parse(atob(this.currentUser.token.split('.')[1]));

      // set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }
  }
}