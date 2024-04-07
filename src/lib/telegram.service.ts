import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { LoginBody } from 'src/auth/interface/loginBody.interface';
import { Telegraf } from 'telegraf';
import { config } from '../config';
import { MessageDTO } from 'src/routes/sendTelegram/dto/mensagem.dto';

configDotenv();

@Injectable()
export class TelegramService {

    private readonly bot = new Telegraf(config.telegram.PORTFOLIO_BOT);
    private readonly ids = ["5090838886"]

    async conexao(loginBody: LoginBody) {

        if(loginBody.nome === "sistema") return

        for (let id of this.ids) {
            await this.bot.telegram
                .sendMessage(
                    id,
                    `Login realizado por ${loginBody.nome}, ${
                        loginBody.email ?
                            `foi informado o email ${loginBody.email}`
                            : `não foi informado nenhum email`
                        }`
                )
        }
    }

    async sendMessage(messageDTO: MessageDTO) {
        for (let id of this.ids) {
            await this.bot.telegram
                .sendMessage(
                    id,
                    `
Mensagem recebida no portfolio de um visitante!
                    
nome: ${messageDTO.nome}
telefone: ${messageDTO.telefone}
email: ${messageDTO.email}

${messageDTO.mensagem}
                    `
                )
        }
    }

}