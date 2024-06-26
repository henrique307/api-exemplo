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
exports.MessageDTO = void 0;
const class_validator_1 = require("class-validator");
class MessageDTO {
}
exports.MessageDTO = MessageDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "É necessário informar um nome." }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Email inválido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "É necessário informar um email." }),
    __metadata("design:type", String)
], MessageDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "É necessário informar um nome." }),
    (0, class_validator_1.Matches)(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, { message: "telefone inválido; Exemplos válidos: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888" }),
    __metadata("design:type", String)
], MessageDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "é necessário enviar uma mensagem" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDTO.prototype, "mensagem", void 0);
//# sourceMappingURL=mensagem.dto.js.map