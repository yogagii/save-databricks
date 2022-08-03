import { Injectable } from '@nestjs/common';
import { writeFileSync, readFileSync } from 'fs';

const output = `${process.cwd()}/data/data.json`;
const input = `${process.cwd()}/data/list.json`;

@Injectable()
export class AppService {
  saveAll(data: Array<any>) {
    const exist = JSON.parse(readFileSync(output).toString());
    const date120 = new Date();
    date120.setDate(date120.getDate() - 121);
    console.log('date120 point: ', date120);
    const old = exist.filter((item) => {
      const date = new Date(item['Filing Document Ready Date']);
      date.setMinutes(date.getMinutes() + 480);
      if (date.getTime() < date120.getTime()) {
        console.log('before120data: ', item);
        return true;
      }
      return false;
    });
    const newData = old.concat(data);
    writeFileSync(output, JSON.stringify(newData));
  }

  saveOrigin(data: Array<any>) {
    writeFileSync(input, JSON.stringify(data));
  }

  getAll() {
    const result = JSON.parse(readFileSync(output).toString());
    console.log(result.length);
    return result;
  }
}
