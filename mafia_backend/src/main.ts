import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());
  
  // Enable CORS for your frontend
  app.enableCors({
    origin: 'http://localhost:5173', // allow requests from Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // if you need cookies
  });
  
  await app.listen(5000);
  console.log('Application is running on: http://localhost:5000');
}
bootstrap();
