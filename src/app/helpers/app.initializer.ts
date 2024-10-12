import { catchError, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

export function appInitializer(authService: AuthService) {

    // todo почитать. Хорошая ли практика использовать тут промис? Сомневаюсь
    return () => new Promise((resolve: any) => {
        // attempt to refresh token on app start up to auto authenticate
        console.log(resolve, ' >>> resolve')
        authService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}