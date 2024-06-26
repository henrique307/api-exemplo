import { JwtService } from '@nestjs/jwt';
import { LoginBody } from './interface/loginBody.interface';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(loginBody: LoginBody): {
        message: string;
        token: string;
    };
}
