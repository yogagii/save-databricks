import { Injectable } from '@nestjs/common';
import { writeFileSync, readFileSync } from 'fs';

@Injectable()
export class AppService {
  saveAll(data: Array<any>) {
    const output = `${process.cwd()}/data/data.json`;
    writeFileSync(output, JSON.stringify(data));
  }

  getAll() {
    let result = readFileSync(`${process.cwd()}/data/data.json`).toString();
    result = JSON.parse(result);
    return result;
  }
}
