import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { IUser } from '../interfaces/user.interface';

const forecastConst = {
    DAILY: 'daily',
    WEEKLY: 'weekly',
    NO_CASH: 'no-cash',
    NO_DATA: 'no-data'
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
    // todo должны быть варианты "daily", "weekly", "no-data", "no-cash"
    forecastType$ = new BehaviorSubject<string>(forecastConst.NO_CASH);
    
    get forecastType() {
        return this.forecastType$.value;
    }

    constructor(
        private userService: UserService
    ) {}

    setForecastType(type: string) {
        this.forecastType$.next(type);
    }

    isDaily() {
        return this.forecastType === forecastConst.DAILY;
    }

    isWeekly() {
        return this.forecastType === forecastConst.WEEKLY;
    }

    isNoData() {
        return this.forecastType === forecastConst.NO_DATA;
    }

    isNoCash() {
        return this.forecastType === forecastConst.NO_CASH;
    }

    // todo как будто сюда надо добавить тип прогноза, по типу определять его цену. И уже от этого отталкиваться
    // пока сделаю более общий вариант покупки
    // todo так же надо добавить валидацию на покупку
    buyForecast(currentUser: IUser) {
        if(!currentUser.balance) {
            return;
        }
        const newBalance = currentUser.balance - 10;

        console.log(newBalance, ' >>>> newBalance')
        // todo валидация на все шаги
        const saveObj = {
            ...currentUser, 
            balance: newBalance
        };
  
        this.userService.updateUser(saveObj).subscribe();
        this.setForecastType(forecastConst.DAILY)
    }
}