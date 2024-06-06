import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

export const PAGES = {
  MAIN: 'main',
  SETTINGS: 'settings'
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
    // todo можно еще реализовать, чтобы он слушал маршрут
    page$ = new BehaviorSubject<string|null>(PAGES.MAIN);

    constructor(

    ) {

    }

    setPage(page: string) {
      this.page$.next(page);
    }
}