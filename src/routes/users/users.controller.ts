import { Get, Post, Patch, Delete } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Unauthorized } from 'src/auth/interface/apiResponse.interfaces';
import { BasicUserResponse } from './dto/basic-user-response.dto';
@ApiResponse({ description: "não autorizado", type: Unauthorized, status: 401 })


@UseGuards(AuthGuard("jwt"))
@ApiTags("Integração dinânica com Planilhas do google")
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiOperation({ summary: "Adiciona um 'visitante' a planilha" })
  @ApiResponse({ description: "usuário adicionado com sucesso!", type: BasicUserResponse, isArray: false, status: 200 })
  @ApiResponse({ description: "não autorizado", type: Unauthorized, status: 401 })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "Tras todos os 'visitantes' da planilha" })
  @ApiResponse({ description: "tras todos os visitantes da planilha", type: CreateUserDto, isArray: true, status: 200 })
  @ApiResponse({ description: "não autorizado", type: Unauthorized, status: 401 })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "Tras a 'visitante' do 'id' informado da planilha" })
  @ApiResponse({ description: "tras o 'visitante' do 'id' informado da planilha", type: CreateUserDto, status: 200 })
  @ApiResponse({ description: "não autorizado", type: Unauthorized, status: 401 })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: "Altera o 'visitante' do 'id' informado na planilha" })
  @ApiResponse({ description: "visitante alterado com sucesso!", type: BasicUserResponse, status: 200 })
  @ApiResponse({ description: "não autorizado", type: Unauthorized, status: 401 })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Deleta o 'visitante' do 'id' informado da planilha" })
  @ApiResponse({ description: "Visitante deletado com sucesso!", type: BasicUserResponse, status: 200 })
  @ApiResponse({ description: "não autorizado", type: Unauthorized, status: 401 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
