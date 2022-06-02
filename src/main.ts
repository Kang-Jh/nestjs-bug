import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { MicroserviceModule } from './microservice/microservice.module';

async function bootstrap() {
  const microserviceApp =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      MicroserviceModule,
      {
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    );
  await microserviceApp.listen();

  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
