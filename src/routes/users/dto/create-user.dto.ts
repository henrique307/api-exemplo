import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString({message: "É necessário informar um nome."})
    @ApiProperty({type: String, description: "Seu nome."})
    @Matches(/^[^=+-@]+$/, {message: "os caracteres: '=', '+', '-', e '@' não são permitidos na planilha."})
    nome: string

    @IsEmail({}, {message: "Email inválido"})
    @IsNotEmpty()
    @Matches(/^[^=+-]*$/, {message: "os caracteres: '=', '+' e '-' não são permitidos na planilha."})
    @ApiProperty({type: String, description: "Seu email"})
    email: string

    @IsOptional()
    @IsString()
    @Matches(/^[^=+-@]+$/, {message: "os caracteres: '=', '+', '-', e '@' não são permitidos na planilha."})
    @ApiProperty({type: String, description: "Uma mensagem que gostaria de adicionar a planilha"})
    recado?: string
}
