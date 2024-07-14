import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ErrorService } from "./erros.service";

export const TYPES = {
    registration: 'registration',
    login: 'login'
  }

@Injectable({
    providedIn: 'root'
})
export class ModalService {
  
    isShow$ = new BehaviorSubject<boolean>(false);
    
    dlgType$ = new BehaviorSubject<string>('');

    constructor(
        private errorService: ErrorService
    ) {}

    showDlg(dlgType: string) {
        this.setType(dlgType);
        this._setIsShow();
    }
  
    closeDlg() {
        this.isShow$.next(false);
        this.errorService.cleanAllError();
    }

    getTitle(dlgType: string) {
        switch(dlgType) {
          case TYPES.registration:
            return 'Регистрация';
          case TYPES.login:
            return 'Авторизация';
          default:
            return '';
        }
    }

    setType(type: string) {
        this.dlgType$.next(type);
    }
  
    _setIsShow() {
        this.isShow$.next(true);
    }
}