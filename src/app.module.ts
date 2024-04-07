import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './routes/users/users.module';
import { AuthModule } from './auth/auth.module';
import { TelegramModule } from './routes/sendTelegram/telegram.module';

@Module({
  imports: [UsersModule, AuthModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
