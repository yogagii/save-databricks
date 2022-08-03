import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/savedatabricks')
  async saveAll(@Body('data') data: Array<any>) {
    console.log(new Date().toLocaleString(), ' savedatabricks: ', data.length);
    return this.appService.saveAll(data);
  }

  @Post('/savesharepoint')
  async saveOrigin(@Body('data') data: Array<any>) {
    console.log(new Date().toLocaleString(), ' savesharepoint: ', data.length);
    return this.appService.saveOrigin(data);
  }

  @Get('/getdatabricks')
  getAll() {
    console.log(new Date().toLocaleString(), ' getdatabricks: ');
    return this.appService.getAll();
  }
}
