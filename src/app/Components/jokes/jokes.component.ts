import { Component } from '@angular/core';
import { JokesService } from '../../Services/jokes.service';
import { HighlightsDirective } from '../../directives/highlights.directive';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [HighlightsDirective],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent {
  jokes = 'loading';
  constructor(private jokesservice: JokesService) {}

  ngOnInit() {
    this.getAnotherJokes();
  }
  getAnotherJokes() {
    this.jokesservice.getJokes().subscribe(
      // (data: any) => (this.jokes = data.value),
      // (err) => {
      //   console.log('error:', err);
      // }
      {
        next: (data: any) => {
          this.jokes = data.value;
        },
        error: (err) => {
          console.log('Error', err);
        },
      }
    );
  }
}
