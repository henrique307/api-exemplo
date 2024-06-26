import { LoginBody } from 'src/auth/interface/loginBody.interface';
import { MessageDTO } from 'src/routes/sendTelegram/dto/mensagem.dto';
export declare class TelegramService {
    private readonly bot;
    private readonly ids;
    conexao(loginBody: LoginBody): Promise<void>;
    sendMessage(messageDTO: MessageDTO): Promise<void>;
}
