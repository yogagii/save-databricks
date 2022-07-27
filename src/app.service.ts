import { Injectable } from '@nestjs/common';
import { writeFileSync, readFileSync } from 'fs';

const output = `${process.cwd()}/data/data.json`;

@Injectable()
export class AppService {
  saveAll(data: Array<any>) {
    const exist = JSON.parse(readFileSync(output).toString());
    const date120 = new Date();
    date120.setDate(date120.getDate() - 121);
    const old = exist.filter((item) => {
      const date = new Date(item['Filing Document Ready Date']);
      // date.setMinutes(date.getMinutes() + 480);
      return date.getTime() < date120.getTime();
    });
    console.log('old: ', old);
    const newData = old.concat(data);
    writeFileSync(output, JSON.stringify(newData));
  }

  getAll() {
    const result = JSON.parse(readFileSync(output).toString());
    return result;
  }
}
