import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ type: String, description: "Seu nome" })
    nome?: string;

    @ApiProperty({ type: String, description: "Seu email" })
    email?: string;
    
    @ApiProperty({ type: String, description: "Uma mensagem que gostaria de enviar" })
    recado?: string;
}
