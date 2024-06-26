import { TelegramService } from 'src/lib/telegram.service';
import { MessageDTO } from './dto/mensagem.dto';
export declare class TelegramController {
    private readonly telegramService;
    constructor(telegramService: TelegramService);
    create(messageDTO: MessageDTO): Promise<void>;
}
