import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { IAuthUser } from '../interfaces/auth-user.interface';
import { ModalService } from './modal.service';
import { ErrorService } from './erros.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

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

  get token() {
    // @ts-ignore
    return localStorage.getItem('token');
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  login(user: IAuthUser): Observable<any> {
    return this.http.post<IUser>(`${this.apiUrl}/auth/log-in`, user, {withCredentials: true}).pipe(
      map(user => {
        this.setUser(user);
        this.token = user.token;
        this.modalService.closeDlg();
        this.router.navigateByUrl('/profile');
      }),
      catchError(error => of(this.errorService.setServerErrorText(error.error.message)))
    );
  }

  logout(): Observable<any> {
    return this.http.post<IUser>(`${this.apiUrl}/auth/log-out`, {}, {withCredentials: true}).pipe(
      map(() => {
        this.setUser(null);
        this.token = '';
        this.router.navigateByUrl('/');
      }),
      catchError(error => of(this.errorService.setServerErrorText(error.error.message)))
    );
  }

  refreshToken(): Observable<any> {
    console.log(this.token, ' >>>> user$')
    return this.http.post<any>(`${this.apiUrl}/auth/refresh`, {}, {withCredentials: true})
      .pipe(
        map(user => {
          console.log(user, ' >>>> user')
          this.user$.next(user);
          this.startRefreshTokenTimer();
         // return user;
        }),
        catchError(error =>{
          console.log(error, ' >>>> error')
          return  of(this.errorService.setServerErrorText(error.error.message))
        })
      );
  }

  confirmedEmail(token: string): Observable<any> {
    return this.http.get<IUser>(`${this.apiUrl}/auth/confirmed?token=${token}`)
      .pipe(
        map(user => {
          this.setUser(user);
          this.router.navigateByUrl('/profile');
        })
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