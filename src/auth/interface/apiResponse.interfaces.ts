import { ApiProperty } from "@nestjs/swagger";

export class Authenticated {
    @ApiProperty({ type: String })
    message: string

    @ApiProperty({ type: String })
    token: string
}


export class BadResquest {
    @ApiProperty({ type: String, isArray: true })
    message: string[]

    @ApiProperty({ type: String })
    error: string

    @ApiProperty({ type: Number })
    statusCode: number
}

export class Unauthorized {
    @ApiProperty({ type: String })
    message: string
    
    @ApiProperty({ type: Number })
    statusCode: number
}