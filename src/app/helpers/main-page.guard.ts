import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ 
    providedIn: 'root' 
})
export class MainPageGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // если пользователь авторизован, то перенаправляем его на страницу профиля
        if (this.authService.currentUser) {
            this.router.navigate(['/profile'], { queryParams: { returnUrl: state.url } });
            return false;
        }

        return true;
    }
}