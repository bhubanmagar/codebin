import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country',
  standalone: true,
})
export class CountryPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return 'hi' + value;
  }
}
