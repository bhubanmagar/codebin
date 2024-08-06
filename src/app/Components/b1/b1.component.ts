import { Component } from '@angular/core';
import { CounterService } from '../../Services/counter.service';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css',
})
export class B1Component {
  constructor(private counterService: CounterService) {}
  getCount() {
    return this.counterService.getCounter();
  }

  increment() {
    return this.counterService.incrementCounter();
  }
}
