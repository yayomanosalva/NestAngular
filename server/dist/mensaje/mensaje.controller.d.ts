import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajeService } from './mensaje.service';
export declare class MensajeController {
    private mensajeService;
    constructor(mensajeService: MensajeService);
    create(createMensajeDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    update(updateMensajeDto: CreateMensajeDto, response: any, idMensaje: any): void;
    delete(response: any, idMensaje: any): void;
}
