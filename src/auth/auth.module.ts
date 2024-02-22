import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { TelegramService } from '../lib/telegram.service';
import { JwtStrategy } from './jwt.strategy';
import { config } from '../config';

configDotenv();

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: config.application.SECRET,
            signOptions: {expiresIn: '1d'}
        })
    ],
  providers: [AuthService, TelegramService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
