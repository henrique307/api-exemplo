import { Post, Body } from '@nestjs/common'
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TelegramService } from '../lib/telegram.service';
import { LoginBody } from './interface/loginBody.interface';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Authenticated, BadResquest } from './interface/apiResponse.interfaces';

@ApiTags("Autenticação")
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private telegramService: TelegramService
    ) { }

    @ApiOperation({
        summary: "endpoint de autenticação",
        description: "Retorna um token para ser usado ao fazer requisição para as rotas protegidas",
    })
    @ApiResponse({description: "Retorna uma mensagem de autenticação e o token", status:200, type: Authenticated})
    @ApiResponse({description: "Resposta ao falhar a authenticação", status:401, type: BadResquest})
    @Post()
    auth(@Body() loginBody: LoginBody): { message: string, token: string } {
        this.telegramService.conexao(loginBody)
        return this.authService.login(loginBody)
    }
}
