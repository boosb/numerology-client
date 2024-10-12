import { catchError, finalize } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { Observable, throwError } from "rxjs";

export function appInitializer(authService: AuthService) {

    // todo почитать. Хорошая ли практика использовать тут промис? Сомневаюсь
    return () => authService.refreshToken().subscribe();
}