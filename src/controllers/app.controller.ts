import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('hello')
  postHello(@Body() body: { chave: string; valor: string }): any {
    return { body, method: 'POST' };
  }
}
