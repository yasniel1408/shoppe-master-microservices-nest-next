import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    for (let i = 0; i < 100000; i++) {
      console.log('Hello World!' + i);
    }
    return 'Hello World!' + Math.random().toString();
  }
}
