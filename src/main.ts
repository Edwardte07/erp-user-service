import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,       // ignora campos que no están en el DTO
    forbidNonWhitelisted: false,
    transform: true,       // transforma los tipos automáticamente
    errorHttpStatusCode: 400,
  }));
  app.enableCors();
  const port = process.env['PORT'] || 3001;
  await app.listen(port);
  console.log(`User Service corriendo en puerto ${port}`);
}
bootstrap();


