import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString({message: "É necessário informar um nome"})
    @ApiProperty({type: String, description: "Seu nome"})
    nome: string

    @IsEmail({}, {message: "Email inválido"})
    @IsNotEmpty()
    @ApiProperty({type: String, description: "Seu email"})
    email: string

    @IsOptional()
    @IsString()
    @ApiProperty({type: String, description: "Uma mensagem que gostaria de adicionar a planilha"})
    recado?: string
}
