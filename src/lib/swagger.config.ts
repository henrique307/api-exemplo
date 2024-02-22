import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const swaggerConfig = new DocumentBuilder()
    .setTitle("Portfolio API")
    .setDescription("API exemplo de integração com sheets do google, também é possível utiliza-la no meu portfolio: https://henrique307.github.io/portfolio/")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

export const document = (app: any) => SwaggerModule.createDocument(app, swaggerConfig)