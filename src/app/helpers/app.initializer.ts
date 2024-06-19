import { AuthService } from "../services/auth.service";

export function appInitializer(authService: AuthService) {
    return () => new Promise((resolve: any) => {
        // attempt to refresh token on app start up to auto authenticate
        authService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}