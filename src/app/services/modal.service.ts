import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

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
  
    errorText$ = new BehaviorSubject<string>('');

    showDlg(dlgType: string) {
        this.setType(dlgType);
        this._setIsShow();
    }
  
    closeDlg() {
        this.isShow$.next(false);
        this.setErrorText();
    }

    setErrorText(errorText: string = '') {
        this.errorText$.next(errorText);
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