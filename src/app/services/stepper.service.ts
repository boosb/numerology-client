import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepperConfig } from '../components/stepper/stepper.config';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
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
    const step = this.getCurrentStep();
    
    // если получили текст из item, то записываем его в объект для сохранения
    if(itemText) {
      this.dataForSave[step.fieldForUpdate] = itemText;
    }
    // TODO на данный момент логика такова, что если пользователь нричего не выбирает на шаге который можно пропустить, то в БД остаются старые данные, а не перезаписывается новый null
    this._saveData();
    this.moveNextStep(false);
  }
  
  movePreviousStep() {
    const stepNumber = this.stepId - 1;

    if(stepNumber < 1) {
      this.router.navigateByUrl('/profile');
      return;
    }

    this.setStepId(stepNumber);
  }

  getTotalCountStep() {
    const stepKeys = Object.keys(StepperConfig);
    return stepKeys.length;
  }

  _saveData() {
    const saveObj = {
      ...this.authService.currentUser, 
      ...this.dataForSave
    };

    this.userService.updateUser(saveObj).subscribe();
  }

  moveNextStep(isSkip: boolean) {
    this.setStepId(this.stepId + 1);

    // если скипаем шаг, то отчищаем данные в errorServise
    if(isSkip) {
      this.errorService.cleanFieldError();
    }
  }
}