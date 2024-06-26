import { AuthService } from './auth.service';
import { TelegramService } from '../lib/telegram.service';
import { LoginBody } from './interface/loginBody.interface';
export declare class AuthController {
    private authService;
    private telegramService;
    constructor(authService: AuthService, telegramService: TelegramService);
    auth(loginBody: LoginBody): {
        message: string;
        token: string;
    };
}
