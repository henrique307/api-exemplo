import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SpreadSheetsService } from 'src/lib/spreadsheet.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, SpreadSheetsService],
})
export class UsersModule {}