import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //activar las validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//elimina propiedades que no esten el el dto
    forbidNonWhitelisted: true, // lanza eror en caso en que se traigan  en el 
                               //body atrubutos o propiedades que no este definidasen el dto
    transform: true, //convierte los tipos de body a los tipos del dto
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
