import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { IUser } from '../interfaces/user.interface';
import { AuthService } from './auth.service';

export const forecastConst = {
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
        private userService: UserService,
        private authService: AuthService
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

    // todo при покупке прогноза так же должен создаваться соотвествующий объект в БД, так что надо еще сюда добавить взаимодействие с беком
    // todo так же нужно сохранять купленный прогноз на определеннное время. И выдавать его (уже сохраненный прогноз) без новой покупки.
    buyForecast(forecastType: string) {
        const { currentUser } = this.authService;
        if(!currentUser || !currentUser.balance) {
            return;
        }

        // устанавливаем тип прогноза
        this.setForecastType(forecastType);

        // производим валидацию данных
        const isValidation = this._purchaseValidation(currentUser.balance);
        if(!isValidation) {
            return;
        }

        // покупаем прогноз, если прошли все проверки
        this._buyForecast(currentUser);
    }

    _getForecastValue() {
        const { DAILY, WEEKLY } = forecastConst;
        switch(this.forecastType) {
            case DAILY:
                return 10;
            case WEEKLY:
                return 100;
            default:
                return 0;
        }
    }

    _buyForecast(currentUser: IUser) {
        const newBalance = this._getNewBalance(currentUser);

        const saveObj = {
            ...currentUser, 
            balance: newBalance
        };
  
        this.userService.updateUser(saveObj).subscribe();
    }

    _getNewBalance(currentUser: IUser) {
        const { balance } = currentUser;
        const forecastValue = this._getForecastValue();
        return balance ? balance - forecastValue : 0;
    }

    _purchaseValidation(balance: number) {
        const { NO_CASH, NO_DATA } = forecastConst;

        // если стоимость проноза больше остатка средств
        const forecastValue = this._getForecastValue();
        if(forecastValue > balance) {
            this.setForecastType(NO_CASH);
            return false;
        }

        // должна быть проверка на заполнение данных 
        const isFilled = this.userService.isMainDataFilled();
        if(!isFilled) {
            this.setForecastType(NO_DATA);
            return false;
        }

        return true;
    }
}