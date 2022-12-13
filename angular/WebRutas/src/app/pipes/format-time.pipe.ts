import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): unknown {
    
    return (value < 10) ? '0' + value : value ;
  }

}
