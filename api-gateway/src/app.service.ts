import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // codigo que consuma mucha memoria
    const arr = [];
    for (let i = 0; i < 1000000; i++) {
      arr.push(Math.random());
    }

    return 'Hello World!' + Math.random().toString();
  }
}
