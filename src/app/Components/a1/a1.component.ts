import { Component } from '@angular/core';
import { CounterService } from '../../Services/counter.service';

@Component({
  selector: 'app-a1',
  standalone: true,
  imports: [],
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.css',
})
export class A1Component {
  constructor(private counterService: CounterService) {}
  getCount() {
    return this.counterService.getCounter();
  }

  increment() {
    return this.counterService.incrementCounter();
  }
}
