"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const telegram_service_1 = require("../lib/telegram.service");
const loginBody_interface_1 = require("./interface/loginBody.interface");
const swagger_1 = require("@nestjs/swagger");
const apiResponse_interfaces_1 = require("./interface/apiResponse.interfaces");
let AuthController = class AuthController {
    constructor(authService, telegramService) {
        this.authService = authService;
        this.telegramService = telegramService;
    }
    auth(loginBody) {
        this.telegramService.conexao(loginBody);
        return this.authService.login(loginBody);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: "endpoint de autenticação",
        description: "Retorna um token para ser usado ao fazer requisição para as rotas protegidas",
    }),
    (0, swagger_1.ApiResponse)({ description: "Retorna uma mensagem de autenticação e o token", status: 200, type: apiResponse_interfaces_1.Authenticated }),
    (0, swagger_1.ApiResponse)({ description: "Resposta ao falhar a authenticação", status: 401, type: apiResponse_interfaces_1.BadResquest }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginBody_interface_1.LoginBody]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "auth", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Autenticação"),
    (0, common_2.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        telegram_service_1.TelegramService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map