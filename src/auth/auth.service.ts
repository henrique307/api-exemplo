import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginBody } from './interface/loginBody.interface';


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    login(loginBody: LoginBody) {
        return {
            message: `Olá ${loginBody.nome}, seja bem-vindo!`,
            token: this.jwtService.sign(loginBody)
        }
    }
}
