import { catchError, finalize } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import { Observable, throwError } from "rxjs";

export function appInitializer(authService: AuthService) {

    // todo почитать. Хорошая ли практика использовать тут промис? Сомневаюсь
    return () => {
        return new Promise<void>((resolve, reject) => {
            authService.refreshToken().pipe(
                catchError(error => {
                    console.error('Ошибка при обновлении токена:', error);
                    // В зависимости от логики приложения можно либо отклонить промис, либо выполнить другие действия
                    reject(error);
                    return throwError(() => error); // можно убрать, если не нужно продолжать с ошибкой
                }),
                finalize(() => resolve())
            ).subscribe();
        });
    };
}