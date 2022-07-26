import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/savedatabricks')
  async saveAll(@Body('data') data: Array<any>) {
    console.log('savedatabricks: ', data);
    return this.appService.saveAll(data);
  }

  @Get('/getdatabricks')
  getAll() {
    return this.appService.getAll();
  }
}
