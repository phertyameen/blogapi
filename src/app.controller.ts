import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/** entire App controller */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
