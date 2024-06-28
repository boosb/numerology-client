import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { UserService } from './user.service';
import { IUser } from '../interfaces/user.interface';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { IForecast } from '../interfaces/forecast.interface';

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

    forecast$ = new BehaviorSubject<IForecast|null>(null);
    
    get forecastType() {
        return this.forecastType$.value;
    }

    get currentForecast() {
        return this.forecast$.value;
    }

    constructor(
        private http: HttpClient,
        private userService: UserService,
        private authService: AuthService
    ) {}

    setForecastType(type: string) {
        this.forecastType$.next(type);
    }

    setForecast(forecast: IForecast | null) {
        this.forecast$.next(forecast);
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
        if(!currentUser) {
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
        console.log(currentUser, ' >>>> currentUser')
        const newBalance = this._getNewBalance(currentUser);

        const saveObj = {
            ...currentUser, 
            balance: newBalance
        };

        this.createForecast({
            userId: currentUser.id, // todo убрать в интерфейсе ? (здесь выдает ошибку, поэтому пока что поставил)
            forecastId: 1
        }).subscribe();
        console.log(saveObj, ' >>>> saveObj')
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

    createForecast(forecast: IForecast) {
        return this.http.post<IForecast>('http://localhost:3000/forecast', forecast, {withCredentials: true})
            .pipe(
                map(forecast => this.setForecast(forecast))
                // todo сюда можно добавить обработку ошибок, пока нет необходимости
            );
    }

    getForecast(userId: number) {
        console.log('HI')
        return this.http.get<IForecast>(`http://localhost:3000/forecast/${userId}`);
    }
}