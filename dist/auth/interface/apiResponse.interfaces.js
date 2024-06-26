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
exports.Unauthorized = exports.BadResquest = exports.Authenticated = void 0;
const swagger_1 = require("@nestjs/swagger");
class Authenticated {
}
exports.Authenticated = Authenticated;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], Authenticated.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], Authenticated.prototype, "token", void 0);
class BadResquest {
}
exports.BadResquest = BadResquest;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, isArray: true }),
    __metadata("design:type", Array)
], BadResquest.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], BadResquest.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], BadResquest.prototype, "statusCode", void 0);
class Unauthorized {
}
exports.Unauthorized = Unauthorized;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], Unauthorized.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], Unauthorized.prototype, "statusCode", void 0);
//# sourceMappingURL=apiResponse.interfaces.js.map