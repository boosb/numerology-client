import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { AuthService } from './auth.service';
import { IAuthUser } from '../interfaces/auth-user.interface';
import { ErrorService } from './erros.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private errorService: ErrorService
  ) {}

  updateUser(user: IUser): Observable<any> {
    return this.http.patch<IUser>(`${this.apiUrl}/user/${ user.id }`, user, {withCredentials: true}).pipe(
      map(user => this.authService.setUser(user))
    );
  }

  registration(user: IAuthUser): Observable<any> {
    console.log(user, ' >>>> user-test');
    return this.http.post<IUser>(`api/${this.apiUrl}/user`, user, {withCredentials: true}).pipe(
      map((user) => this.authService.setUser(user)),
      catchError(error => of(this.errorService.setServerErrorText(error.error.message)))
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