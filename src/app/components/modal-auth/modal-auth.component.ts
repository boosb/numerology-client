import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorComponent } from '../error/error.component';
import { ErrorService } from '../../services/erros.service';
import { ImgService } from '../../services/img.service';
import { CommonModule } from '@angular/common';
import { ModalService, TYPES } from '../../services/modal.service';
import { UserService } from '../../services/user.service';

export const PASS_TYPES = {
  pass: 'password',
  text: 'text'
}

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

  dlgTypes = TYPES;

  typeSubs: Subscription;

  userSubs: Subscription;

  passwordType: string = PASS_TYPES.pass;

  passwordIconPath: string = this.imgService.paths['EYE_OFF'];

  isSentConfirmationLink: boolean = false;

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
    private authService: AuthService,
    private userService: UserService,
    public modalService: ModalService,
    public errorService: ErrorService,
    public imgService: ImgService
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => this.isSentConfirmationLink = !!user);
    this.typeSubs = this.modalService.dlgType$.subscribe(dlgType => this.title = this.modalService.getTitle(dlgType));
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
    this.typeSubs.unsubscribe();
  }

  submit() {
    const { value } = this.modalService.dlgType$;

    this.errorService.enabledShowError(
      this.authForm.controls,
      () => {
        switch(value) {
          case TYPES.registration:
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

  toggleState(dlgType: string) {
    this.errorService.cleanAllError();
    this.modalService.setType(dlgType);
  }

  _sendAuthLink() {
    this.userService.registration({
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

  @HostListener('window:keydown.esc', ['$event'])
  onEscKeyDown(event: KeyboardEvent) {
    this.modalService.closeDlg();
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
