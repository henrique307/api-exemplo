import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const swaggerConfig = new DocumentBuilder()
    .setTitle("Portfolio API")
    .setDescription(
        `API integrada à minha planilha no google sheets, utilizada para alterar dinamicamente os valores da planilha, também é possível utiliza-la no meu portfolio. para acessar seus endpoints você deve primeiro autenticar-se na rota /auth com seu nome e email para gerar um token JWT utiliza-lo em 'Authorize'

        Planilha:
        https://docs.google.com/spreadsheets/d/1XaNeCEZYG9A0GJtdCvM2RqTKlbJqjNiAI267TZN-RYU

        Portfolio:
        https://henrique307.github.io/portfolio-react/
        `
    )
    .setVersion("1.0")
    .addBearerAuth()
    .build();

export const document = (app: any) => SwaggerModule.createDocument(app, swaggerConfig)