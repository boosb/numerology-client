import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { ErrorService } from '../../services/erros.service';
import { ImgService } from '../../services/img.service';
import { CommonModule } from '@angular/common';

export const TYPES = {
  refistration: 'refistration',
  login: 'login'
}

export const PASS_TYPES = {
  pass: 'password',
  text: 'text'
}

/// todo ВОпрос знатокам! Лучше описать менеджмент внутри компонента для логина/регистрации или сделать два компонента для каждой цели?
@Component({
  selector: 'app-modal-auth',
  standalone: true,
  imports: [
    CommonModule,
    ErrorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './modal-auth.component.html',
  styleUrl: './modal-auth.component.scss'
})
export class ModalAuthComponent implements OnInit, OnDestroy {
  title: string = '';

  private errorTextSubs: Subscription;

  serverErrorText: string = '';

  passwordType: string = PASS_TYPES.pass;

  passwordIconPath: string = this.imgService.paths['EYE_OFF'];

  authForm = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ])
  });

  get email() {
    return this.authForm.controls.email as FormControl;
  }

  get password() {
    return this.authForm.controls.password as FormControl;
  }
  
  constructor(
    public authService: AuthService,
    public errorService: ErrorService,
    public imgService: ImgService
  ) {}

  ngOnInit(): void {
    this._setTitle();
    this.errorTextSubs = this.authService.errorText$.subscribe(errorText => this.serverErrorText = errorText);
  }

  ngOnDestroy(): void {
    this.errorTextSubs.unsubscribe();
  }

  submit() {
    const { value } = this.authService.dlgType$;

    this.errorService.enabledShowError(
      this.authForm.controls,
      () => {
        switch(value) {
          case TYPES.refistration:
            this._sendAuthLink();
            break;
          case TYPES.login:
            this._login();
            break;
          default:
            break;
        }
      }
    );
  }

  _sendAuthLink() {
    this.authService.registration({
      email: this.authForm.value.email as string,
      password: this.authForm.value.password as string
    }).subscribe();
  }

  _login() {
    this.authService.login({
      email: this.authForm.value.email as string,
      password: this.authForm.value.password as string
    }).subscribe();
  }

  _setTitle() {
    const { value } = this.authService.dlgType$;
    switch(value) {
      case TYPES.refistration:
        this.title = 'Регистрация';
        break;
      case TYPES.login:
        this.title = 'Авторизация';
        break;
      default:
        break;
    }
  }

  @HostListener('window:keydown.esc', ['$event'])
  onEscKeyDown(event: KeyboardEvent) {
    this.authService.closeDlg();
  }

  onToggleShowPass() {
    this._toggleType();
    this._toggleIcon();
  }

  _toggleType() {
    const { text, pass } = PASS_TYPES;
    const isPass = this.passwordType === pass;
    this.passwordType = isPass ? text : pass;
  }

  _toggleIcon() {
    const { paths } = this.imgService;
    const isPass = this.passwordType === PASS_TYPES.pass;
    this.passwordIconPath = isPass ? paths['EYE_OFF'] : paths['EYE'];
  }
}
