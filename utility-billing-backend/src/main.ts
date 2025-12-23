import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173'], // Vite dev server
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'x-admin-key'],
  });

  await app.listen(3000);
}
bootstrap();
