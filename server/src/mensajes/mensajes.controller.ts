import {
    Controller,
    Body,
    Post,
    Get,
    Put,
    Delete,
    Res,
    HttpStatus,
    Param,
  } from '@nestjs/common';
  import { CreateMensajeDto } from './dto/create-mensaje-dto';
  import { MensajesService } from './mensajes.service';
  import { response } from 'express';
  import { Mensaje } from './entities/mensaje.entity';
  
  @Controller('mensaje')
  export class MensajesController {
    constructor(private mensajeService: MensajesService) {}
  
    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response: any) {
      this.mensajeService
        .createMensaje(createMensajeDto)
        .then(mensaje => {
          response.status(HttpStatus.CREATED).json(mensaje);
        })
        .catch(() => {
          response
            .status(HttpStatus.FORBIDDEN)
            .json({ mensaje: 'error en la creación del mensaje' });
        });
    }
  
    @Get()
    getAll(@Res() response) {
      this.mensajeService
        .getAll()
        .then(mensajeList => {
          response.status(HttpStatus.OK).json(mensajeList);
        })
        .catch(() => {
          response
            .status(HttpStatus.FORBIDDEN)
            .json({ mensaje: 'error al obtener los mensajes' });
        });
    }
  
    @Put(':id')
    update(
      @Body() updateMensajeDto: CreateMensajeDto,
      @Res() response,
      @Param('id') idMensaje,
    ) {
      this.mensajeService
        .updateMensaje(idMensaje, updateMensajeDto)
        .then(mensaje => {
          response.status(HttpStatus.OK).json(mensaje);
        })
        .catch(() => {
          response
            .status(HttpStatus.FORBIDDEN)
            .json({ mensaje: 'error al actualizar el mensaje' });
        });
    }
  
    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje) {
      this.mensajeService
        .delectMensaje(idMensaje)
        .then(res => {
          response.status(HttpStatus.OK).json(res);
        })
        .catch(() => {
          response
            .status(HttpStatus.FORBIDDEN)
            .json({ mensaje: 'error al eliminar el mensaje' });
        });
    }
  }