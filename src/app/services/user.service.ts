import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject, Subscription, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  updateUser(user: IUser): Observable<any> {
    return this.http.patch<IUser>(`http://localhost:3000/user/${ user.id }`, user, {withCredentials: true}).pipe(
      map(user => this.authService.setUser(user)),
      //catchError(error => of(this.setErrorText(error.error.message)))
    );
  }

  isMainDataFilled() {
    const fieldNames = ['gender', 'dateBirth', 'familyStatus', 'goodZodiacSigns', 'favoriteActivity', 'name'];
    const { currentUser } = this.authService;

    if(!currentUser) {
      return;
    }

    const isNoData = fieldNames.find(name => {
      const userField = currentUser[name as keyof IUser];
      return !userField;
    });

    return !isNoData;
  }
}