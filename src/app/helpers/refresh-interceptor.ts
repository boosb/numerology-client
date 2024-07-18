import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RefreshInterceptor implements HttpInterceptor {
    // TODO ток если честно я хз как протестить данный функционал

    constructor(
        private authService: AuthService,
    ) {}

    private isRefreshing = false;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*const copiedReq = request.clone({
            withCredentials: true
        });*/
    
        return next.handle(request).pipe(
            catchError(error => {
                if(
                    error instanceof HttpErrorResponse && 
                    request.url.includes('auth/log-in') && 
                    error.status === 401
                ) {
                    return this._handle401Error(request, next)
                }
                return throwError(() => error)
            })
        );
    }

    _handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
      
            if (this.authService.isLoggedIn()) {
              return this.authService.refreshToken().pipe(
                switchMap(() => {
                  this.isRefreshing = false;
      
                  return next.handle(request);
                }),
                catchError((error) => {
                  this.isRefreshing = false;
      
                  if (error.status == '403') {
                    //this.eventBusService.emit(new EventData('logout', null));
                    // todo тут при выпадении 403 ошибки надо выходить из системы (!)
                  }
      
                  return throwError(() => error);
                })
              );
            }
          }
      
          return next.handle(request);
    }
}