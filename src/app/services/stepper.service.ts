import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepperConfig } from '../components/stepper/stepper.config';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ValidationErrors } from '@angular/forms';
import { ErrorService } from './erros.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  stepId$ = new BehaviorSubject<number>(1);

  dataForSave: any = {};

  get stepId() {
    return this.stepId$.value;
  }
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  setStepId(id: number) {
    this.stepId$.next(id);
  }

  getCurrentStep() {
    return StepperConfig[this.stepId];
  }

  nextStep(itemText: string | null) {
    this.errorService.setIsShow(true);

    if(this.errorService.errors) {
      return;
    }

    this._saveData(itemText);
    this.moveNextStep(false);
  }
  
  movePreviousStep() {
    const stepNumber = this.stepId - 1;

    if(stepNumber < 1) {
      this.router.navigateByUrl('/profile');
      return;
    }

    this.setStepId(stepNumber);

    // после смены view прячем ошибки
    this.errorService.setIsShow(false);
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

  moveNextStep(isSkip: boolean) {
    if(isSkip) {
      this.errorService.setErrors(null);
    }
    this.setStepId(this.stepId + 1);

    // после смены view прячем ошибки
    this.errorService.setIsShow(false);
  }
}