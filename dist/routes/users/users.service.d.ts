import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SpreadSheetsService } from 'src/lib/spreadsheet.service';
export declare class UsersService {
    private readonly googleService;
    constructor(googleService: SpreadSheetsService);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<{}>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
