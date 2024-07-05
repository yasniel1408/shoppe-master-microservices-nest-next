import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { DatabaseModule } from 'src/databases/databases.module';
import { RabbitMQModule } from 'src/rabbit-mq/rabbit-mq.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, RabbitMQModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
