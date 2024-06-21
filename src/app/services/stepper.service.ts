import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepperConfig } from '../components/stepper/stepper.config';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  stepId$ = new BehaviorSubject<number>(1);

  // todo ну и нужно впилить валидацию на каждый шаг
  dataForSave: any = {};

  // ошибка валидации
  //validateErrorText$ = new BehaviorSubject<string>('');

  errors: ValidationErrors | null

  /*get errorText() {
    return this.validateErrorText$.value;
  }*/
/*
  setValidateErrorText(text: string) {
    this.validateErrorText$.next(text);
  }*/

  setStepId(id: number) {
    this.stepId$.next(id);
  }

  getCurrentStep() {
    const { value } = this.stepId$;
    return StepperConfig[value];
  }

  nextStep(itemText: string | null) {
    // перед переходом проверяем данные
    const isValidate = this._validateData(itemText);
    if(!isValidate) {
      return;
    }

    this._saveData(itemText);
    this.moveNextStep();
  }
  
  previousStep() {
    const { value } = this.stepId$;
    const stepNumber = value - 1;

    if(stepNumber < 1) {
      return;
    }

    this.stepId$.next(stepNumber);

    // после переходо отчищаем ошибку 
   // this.setValidateErrorText('');
  }

  getTotalCountStep() {
    const stepKeys = Object.keys(StepperConfig);
    return stepKeys.length;
  }

  _saveData(itemText: string | null) {
    const step = this.getCurrentStep();
    this.dataForSave[step.fieldForUpdate] = itemText;

    // todo валидация на все шаги
    const saveObj = {
      ...this.authService.currentUser, 
      ...this.dataForSave
    };

    console.log(saveObj, ' >>> saveObj')

    this.userService.updateUser(saveObj).subscribe();
  }

  moveNextStep() {
    const { value } = this.stepId$;
    this.stepId$.next(value + 1);

    // после переходо отчищаем ошибку 
    //this.setValidateErrorText('');
  }

  _validateData(itemText: string | null) {
    const step = this.getCurrentStep();
    const isExistData = !!this.dataForSave[step.fieldForUpdate];
    console.log(this.errors, ' >>>>> SUPER_PUPER_TEST');
    switch(step.id) {
      // для всех шагов с stepper-view-item
      case 1:
      case 5:
      case 6:
      case 7: 
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return !!itemText;
      case 2:
        //this.setValidateErrorText(isExistData ? '' : 'Введите дату рождения');
        return !this.errors;
      case 4:
        
        return !this.errors;
      default:
        return true;
    }
  }
}