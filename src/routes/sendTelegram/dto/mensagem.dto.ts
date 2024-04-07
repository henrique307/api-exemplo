import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, isNotEmpty } from "class-validator"

export class MessageDTO {
    @IsNotEmpty({ message: "É necessário informar um nome." })
    @IsString()
    nome: string

    @IsEmail({}, { message: "Email inválido" })
    @IsNotEmpty({ message: "É necessário informar um email." })
    email: string

    @IsNotEmpty({ message: "É necessário informar um nome." })
    @Matches(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/, { message: "telefone inválido; Exemplos válidos: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888" })
    telefone: string

    @IsNotEmpty({ message: "é necessário enviar uma mensagem" })
    @IsString()
    mensagem: string
}
