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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ message: "É necessário informar um nome." }),
    (0, swagger_1.ApiProperty)({ type: String, description: "Seu nome." }),
    (0, class_validator_1.Matches)(/^[^=+-@]+$/, { message: "os caracteres: '=', '+', '-', e '@' não são permitidos na planilha." }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Email inválido" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[^=+-]*$/, { message: "os caracteres: '=', '+' e '-' não são permitidos na planilha." }),
    (0, swagger_1.ApiProperty)({ type: String, description: "Seu email" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[^=+-@]+$/, { message: "os caracteres: '=', '+', '-', e '@' não são permitidos na planilha." }),
    (0, swagger_1.ApiProperty)({ type: String, description: "Uma mensagem que gostaria de adicionar a planilha" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "recado", void 0);
//# sourceMappingURL=create-user.dto.js.map