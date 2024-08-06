import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { CountryPipe } from './pipes/country.pipe';
import { JokesComponent } from './Components/jokes/jokes.component';
import { B1Component } from './Components/b1/b1.component';
import { A1Component } from './Components/a1/a1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserProfileComponent,
    CommonModule,
    CountryPipe,
    JokesComponent,
    B1Component,
    A1Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'codebin';
  salary = 123123;
}
