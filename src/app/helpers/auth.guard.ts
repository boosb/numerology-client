import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ 
    providedIn: 'root' 
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // todo если пользователь зарегался, но не подтвердил емеил, то ему надо где-то показывать инфу 
        const { currentUser } = this.authService;
        if (currentUser && currentUser.isConfirmed) {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    }
}