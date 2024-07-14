import { Component, OnDestroy, OnInit } from '@angular/core';
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

  serverErrorTextSubs: Subscription;

  errors: ValidationErrors | null;

  serverErrorText: string | null;

  constructor(
    public errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.errorsSubs = this.errorService.errors$.subscribe(errors => {
      this.errors = errors;
      this.serverErrorText = null;
      this.errorService.setIsShow();
    });
    this.serverErrorTextSubs = this.errorService.serverErrorText$.subscribe(error => {
      this.serverErrorText = error;
      this.errorService.setIsShow();
    });
  }

  ngOnDestroy(): void {
    this.errorsSubs.unsubscribe();
    this.serverErrorTextSubs.unsubscribe();
  }
}
