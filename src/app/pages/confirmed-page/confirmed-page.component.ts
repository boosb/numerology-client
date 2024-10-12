import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirmed-page',
  standalone: true,
  imports: [],
  templateUrl: './confirmed-page.component.html',
  styleUrl: './confirmed-page.component.scss'
})
export class ConfirmedPageComponent implements OnInit, OnDestroy {
  private _token: string;

  private _querySubscription: Subscription;

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  get querySubscription() {
    return this._querySubscription;
  }

  set querySubscription(querySubscription) {
    this._querySubscription = querySubscription;
  }

  constructor(
    private _route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.querySubscription = this._route.queryParams.subscribe(queryParam => {
      this.token = queryParam.token;

      if(this.token) {
        this.authService.confirmedEmail(this.token).subscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
