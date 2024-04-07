import { Module } from '@nestjs/common';
import { SpreadSheetsService } from 'src/lib/spreadsheet.service';
import { TelegramService } from 'src/lib/telegram.service';
import { TelegramController } from './telegram.controller';

@Module({
  controllers: [TelegramController],
  providers: [TelegramService, SpreadSheetsService],
})
export class TelegramModule {}