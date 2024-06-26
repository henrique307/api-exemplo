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
exports.UsersController = void 0;
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const apiResponse_interfaces_1 = require("../../auth/interface/apiResponse.interfaces");
const basic_user_response_dto_1 = require("./dto/basic-user-response.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Adiciona um 'visitante' a planilha" }),
    (0, swagger_1.ApiResponse)({ description: "usuário adicionado com sucesso!", type: basic_user_response_dto_1.BasicUserResponse, isArray: false, status: 200 }),
    (0, swagger_1.ApiResponse)({ description: "não autorizado", type: apiResponse_interfaces_1.Unauthorized, status: 401 }),
    (0, request_mapping_decorator_1.Post)(),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Tras todos os 'visitantes' da planilha" }),
    (0, swagger_1.ApiResponse)({ description: "tras todos os visitantes da planilha", type: create_user_dto_1.CreateUserDto, isArray: true, status: 200 }),
    (0, swagger_1.ApiResponse)({ description: "não autorizado", type: apiResponse_interfaces_1.Unauthorized, status: 401 }),
    (0, request_mapping_decorator_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Tras a 'visitante' do 'id' informado da planilha" }),
    (0, swagger_1.ApiResponse)({ description: "tras o 'visitante' do 'id' informado da planilha", type: create_user_dto_1.CreateUserDto, status: 200 }),
    (0, swagger_1.ApiResponse)({ description: "não autorizado", type: apiResponse_interfaces_1.Unauthorized, status: 401 }),
    (0, request_mapping_decorator_1.Get)(':id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Altera o 'visitante' do 'id' informado na planilha" }),
    (0, swagger_1.ApiResponse)({ description: "visitante alterado com sucesso!", type: basic_user_response_dto_1.BasicUserResponse, status: 200 }),
    (0, swagger_1.ApiResponse)({ description: "não autorizado", type: apiResponse_interfaces_1.Unauthorized, status: 401 }),
    (0, request_mapping_decorator_1.Patch)(':id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __param(1, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Deleta o 'visitante' do 'id' informado da planilha" }),
    (0, swagger_1.ApiResponse)({ description: "Visitante deletado com sucesso!", type: basic_user_response_dto_1.BasicUserResponse, status: 200 }),
    (0, swagger_1.ApiResponse)({ description: "não autorizado", type: apiResponse_interfaces_1.Unauthorized, status: 401 }),
    (0, request_mapping_decorator_1.Delete)(':id'),
    __param(0, (0, route_params_decorator_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiResponse)({ description: "não autorizado", type: apiResponse_interfaces_1.Unauthorized, status: 401 }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, swagger_1.ApiTags)("Integração dinânica com Planilhas do google"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map