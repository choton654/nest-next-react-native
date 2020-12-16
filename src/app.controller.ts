import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NextResponse } from 'nest-next-module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  index(@Res() res: NextResponse) {
    return res.nextRender('/index');
  }

  @Get('api/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
