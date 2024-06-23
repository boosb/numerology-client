import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepperConfig } from '../components/stepper/stepper.config';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ValidationErrors } from '@angular/forms';
import { ErrorService } from './erros.service';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  stepId$ = new BehaviorSubject<number>(1);

  // todo ну и нужно впилить валидацию на каждый шаг
  dataForSave: any = {};
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private errorService: ErrorService
  ) {}

  setStepId(id: number) {
    this.stepId$.next(id);
  }

  getCurrentStep() {
    const { value } = this.stepId$;
    return StepperConfig[value];
  }

  nextStep(itemText: string | null) {
    this.errorService.setIsShow(true);

    if(this.errorService.errors) {
      return;
    }

    this._saveData(itemText);
    this.moveNextStep(false);
    this.errorService.setIsShow(false);
  }
  
  movePreviousStep() {
    const { value } = this.stepId$;
    const stepNumber = value - 1;

    if(stepNumber < 1) {
      return;
    }

    this.stepId$.next(stepNumber);
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
    const { value } = this.stepId$;
    this.stepId$.next(value + 1);
  }
}