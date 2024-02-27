import { ApiProperty } from "@nestjs/swagger";

export class BasicUserResponse {
    @ApiProperty({ example: "Ação executada com sucesso!" })
    message: string
}