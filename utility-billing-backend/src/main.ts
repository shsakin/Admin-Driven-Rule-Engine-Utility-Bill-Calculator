import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://admin-utility-bill-calculator-rhmc1qrrr.vercel.app',
      'https://admin-utility-bill-calculator.vercel.app',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Auth-Token'],
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
