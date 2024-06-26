"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
const cors = require("cors");
const swagger_1 = require("@nestjs/swagger");
const swagger_config_1 = require("./lib/swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (erros) => new common_1.HttpException({ message: 'Erro de validação', erros }, common_1.HttpStatus.BAD_REQUEST),
        whitelist: true
    }));
    app.use(cors());
    swagger_1.SwaggerModule.setup('api/swagger', app, (0, swagger_config_1.document)(app));
    await app.listen(config_1.config.application.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map