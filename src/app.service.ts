import { Injectable } from '@nestjs/common';
import { writeFileSync, readFileSync } from 'fs';
import * as data from '../data/data.json';

@Injectable()
export class AppService {
  saveAll(data: Array<any>) {
    const output = `${process.cwd()}/data/data.json`;
    writeFileSync(output, JSON.stringify(data));
  }

  getAll(): string {
    const result = readFileSync(`${process.cwd()}/data/data.txt`).toString();
    console.log(typeof result);
    console.log('data:', result);
    return result;
  }
}
