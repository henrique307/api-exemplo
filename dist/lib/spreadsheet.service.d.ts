import { CreateUserDto } from 'src/routes/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/routes/users/dto/update-user.dto';
export declare class SpreadSheetsService {
    private readonly _sheets;
    private readonly _spreadsheet_id;
    private readonly range;
    addVisitor(createUserDto: CreateUserDto): Promise<{
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
    private findID;
}
