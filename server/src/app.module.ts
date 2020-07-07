import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajeController } from './mensaje/mensaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeService } from './mensaje/mensaje.service';
import { Mensaje } from './mensaje/entities/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje]),
  ],
  controllers: [AppController, MensajeController],
  providers: [AppService, MensajeService],
})
export class AppModule {}
