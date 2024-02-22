import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString, IsNotEmpty } from "class-validator"

export class LoginBody {

    @ApiProperty({ type: String, required: true })
    @IsString({ message: "nome deve ser uma string" })
    @IsNotEmpty({message: "é obrigatório enviar um nome"})
    nome: string

    @IsOptional()
    @ApiProperty({ type: String, required: false })
    @IsString({ message: "email deve ser uma string" })
    @IsEmail({}, { message: "formato do email inválido" })
    email?: string

}