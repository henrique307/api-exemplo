"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const telegraf_1 = require("telegraf");
const config_1 = require("../config");
(0, dotenv_1.configDotenv)();
let TelegramService = class TelegramService {
    constructor() {
        this.bot = new telegraf_1.Telegraf(config_1.config.telegram.PORTFOLIO_BOT);
        this.ids = ["5090838886"];
    }
    async conexao(loginBody) {
        if (loginBody.nome === "sistema")
            return;
        for (let id of this.ids) {
            await this.bot.telegram
                .sendMessage(id, `Login realizado por ${loginBody.nome}, ${loginBody.email ?
                `foi informado o email ${loginBody.email}`
                : `não foi informado nenhum email`}`);
        }
    }
    async sendMessage(messageDTO) {
        for (let id of this.ids) {
            await this.bot.telegram
                .sendMessage(id, `
Mensagem recebida no portfolio de um visitante!
                    
nome: ${messageDTO.nome}
telefone: ${messageDTO.telefone}
email: ${messageDTO.email}

${messageDTO.mensagem}
                    `);
        }
    }
};
exports.TelegramService = TelegramService;
exports.TelegramService = TelegramService = __decorate([
    (0, common_1.Injectable)()
], TelegramService);
//# sourceMappingURL=telegram.service.js.map