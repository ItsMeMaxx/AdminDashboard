import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'timestampToDatePipe'
})
export class TimestampToDatePipe extends DatePipe implements PipeTransform {

  override transform(value: any, ...args: any[]): any {
    return super.transform(value, 'EEEE, dd.MM.YYYY HH:mm');
  }

}
