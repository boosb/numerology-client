import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements OnInit {
  errors$ = new BehaviorSubject<ValidationErrors | null>(null);

  isShow$ = new BehaviorSubject<boolean>(false);

  get errors() {
    return this.errors$.value;
  }

  setErrors(errors: ValidationErrors | null) {
    this.errors$.next(errors)
  }

  setIsShow(isShow: boolean) {
    this.isShow$.next(isShow);
  }

  // todo Мы мож
  ngOnInit(): void {

    // todo следим за изменен
   /*this.errors$.subscribe(errors => {
        if(!errors) {
            this.isShow$.next(false);
        }
    })*/
  }
}