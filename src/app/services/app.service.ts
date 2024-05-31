import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    user$ = new Subject<IUser>()

    constructor(

    ) {

    }

    setUser(user: IUser) {
        this.user$.next(user);
    }
}