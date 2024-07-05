import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: `./${process.env.NODE_ENV}.env`,
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class ConfigModule {}
