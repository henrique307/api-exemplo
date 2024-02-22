import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SpreadSheetsService } from 'src/lib/spreadsheet.service';

@Injectable()
export class UsersService {
  constructor(private readonly googleService: SpreadSheetsService) {}

  create(createUserDto: CreateUserDto) {
    return this.googleService.addVisitor(createUserDto);
  }

  findAll() {
    return this.googleService.findAll();
  }

  findOne(id: number) {
    return this.googleService.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.googleService.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.googleService.remove(id);
  }
}
