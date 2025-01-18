import { Injectable } from '@nestjs/common';

/** this getHello function is no longer in part of the code */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
