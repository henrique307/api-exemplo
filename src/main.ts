import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { config } from './config';
import * as cors from 'cors';
import { SwaggerModule } from '@nestjs/swagger';
import { document } from './lib/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (erros) => new HttpException({message: 'Erro de validação', erros }, HttpStatus.BAD_REQUEST),
      whitelist: true
    })
  )

  app.use(cors());

  SwaggerModule.setup('api/swagger', app, document(app))

  await app.listen(config.application.PORT);
}
bootstrap();
