import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { RmqService } from './rabbit-mq/rabbit-mq.service';
import { setupApp } from './setup-app';
import { setupMicroservice } from './setup-microservice';

async function bootstrap() {
  // Config App
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  setupApp(app);

  // Config TCP Connection
  const microserviceAppTCP =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0', // esto es necesario para k8s
        port: configService.getOrThrow<number>('PORT'),
      },
    });
  setupMicroservice(microserviceAppTCP);
  app.connectMicroservice(microserviceAppTCP);
  await microserviceAppTCP.listen();

  // Config RMQ Connection
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('ECOMMERCE_MS'));

  // Run Microservices and Apps
  app.startAllMicroservices();
}
bootstrap();
