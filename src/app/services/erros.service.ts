import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors$ = new BehaviorSubject<ValidationErrors | null>(null);

  isShow$ = new BehaviorSubject<boolean>(false);

  fields = new Map(); // todo как будто мув из нативки. мб есть более лаконичный способ в angular

  get errors() {
    return this.errors$.value;
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
    this.errors$.next(errors)
  }

  setIsShow(isShow: boolean) {
    this.isShow$.next(isShow);
  }

  async enabledShowError(fields: any, callback: Function) {
    this.setIsShow(true);

    const isExistErrors = this._existErrors(fields);
    if(isExistErrors) {
      return;
    }

    await callback();

    // после всех проверок и действий отчищаем данные 
    this.cleanFullData();
  }

  cleanFullData() {
    this.setErrors(null);
    this.fields.clear();
    this.setIsShow(false);
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