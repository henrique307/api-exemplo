import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Controller } from '@nestjs/common';
import { TelegramService } from 'src/lib/telegram.service';
import { MessageDTO } from './dto/mensagem.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) { }

  @Post()
  create(@Body() messageDTO: MessageDTO) {
    return this.telegramService.sendMessage(messageDTO);
  }

}
