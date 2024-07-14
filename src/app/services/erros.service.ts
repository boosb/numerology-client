import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors$ = new BehaviorSubject<ValidationErrors | null>(null);

  // текст ошибки, который пришел с сервера
  serverErrorText$ = new BehaviorSubject<string | null>(null);

  isShow$ = new BehaviorSubject<boolean>(false);

  fields = new Map();

  get errors() {
    return this.errors$.value;
  }

  get serverErrorText() {
    return this.serverErrorText$.value;
  }

  get isShow() {
    return this.isShow$.value;
  }

  getBorderRed(field: string) {
    if(this.fields.has(field)) {
      return !!this.errors$.value;
    }
    return false; 
  }

  setErrors(errors: ValidationErrors | null) {
    this.errors$.next(errors);
  }

  setServerErrorText(errorText: string | null) {
    this.serverErrorText$.next(errorText);
  }

  setIsShow() {
    if(this.serverErrorText || this.errors) {
      this.isShow$.next(true);
    } else {
      this.isShow$.next(false);
    }
  }

  // метод проверяет наличие ошибок в заполненных полях
  // если есть ошибки устанавливает их, иначе выполняет callback
  async enabledShowError(fields: any, callback: Function) {
    const isExistErrors = this._existErrors(fields);
    if(isExistErrors) {
      return;
    }

    await callback();

    // после всех проверок и действий очищаем данные 
    this.cleanFieldError();
  }

  cleanAllError() {
    this.setServerErrorText(null);
    this.cleanFieldError();
  }

  cleanFieldError() {
    this.setErrors(null);
    this.fields.clear();
  }

  _existErrors(fields: any) {
    const keys = Object.keys(fields);
    let result = false;

    keys.forEach((key) => {
      const field = fields[key];
      this._populateFields(key, field);

      if(field.errors) {
        this.setErrors(field.errors);
        result = true;
      }
    });

    return result;
  }

  _populateFields(key: string, field: FormControl) {
    if(field.errors) {
      this.fields.set(key, field);
    } else {
      this.fields.delete(key)
    }
  }
}