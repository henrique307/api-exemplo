import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExcludeEndpoint()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
