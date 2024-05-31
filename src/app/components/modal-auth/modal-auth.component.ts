import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../../services/app.service';

export const TYPES = {
  refistration: 'refistration',
  login: 'login'
}

@Component({
  selector: 'app-modal-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-auth.component.html',
  styleUrl: './modal-auth.component.scss'
})
export class ModalAuthComponent {
  title: string = '';

  authForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  get email() {
    return this.authForm.controls.email as FormControl;
  }

  get password() {
    return this.authForm.controls.password as FormControl;
  }
  
  constructor(
    public authService: AuthService,
    public appService: AppService
  ) {
    this._setTtitle();
  }

  submit() {
    const { value } = this.authService.dlgType$;
    console.log(value, ' >>> this.type')
    switch(value) {
      case TYPES.refistration:
        this._sendLink();
        break;
      case TYPES.login:
        this._login();
        break;
      default:
        break;
    }
  }

  _sendLink() {
    this.authService.registration({
      email: this.authForm.value.email as string,
      password: this.authForm.value.password as string
    }).subscribe()
  }

  _login() {
    this.authService.login({
      email: this.authForm.value.email as string,
      password: this.authForm.value.password as string
    }).subscribe(user => {
      console.log(user,  ' >>> USER')
      this.appService.setUser(user);
      this.authService.closeDlg();
    })
  }

  _setTtitle() {
    const { value } = this.authService.dlgType$;
    console.log(value, ' >>> this.type----1111')
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
}