import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepperConfig } from '../components/stepper/stepper.config';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  constructor() {}

  stepId$ = new BehaviorSubject<number>(17);

  setStepId(id: number) {
    this.stepId$.next(id);
  }

  getCurrentStep() {
    const { value } = this.stepId$;
    return StepperConfig[value];
  }

  nextStep() {
    const { value } = this.stepId$;
    this.stepId$.next(value + 1);
  }
  
  previousStep() {
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
}