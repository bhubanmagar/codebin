import { HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = 0;

  constructor() {}
  getCounter() {
    return this.counter;
  }

  incrementCounter() {
    return (this.counter = this.counter + 1);
  }
}
