import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../services/erros.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit, OnDestroy {

  errorsSubs: Subscription;

  errors: ValidationErrors | null;

  constructor(
    public errorService: ErrorService
  ) {}

  ngOnDestroy(): void {
    this.errorsSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.errorsSubs = this.errorService.errors$.subscribe(errors => {
      this.errors = errors;

      if(!errors) {
        this.errorService.setIsShow(false);
      }
    });
  }
}
