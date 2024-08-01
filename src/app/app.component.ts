import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { CountryPipe } from './pipes/country.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule, CountryPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'codebin';
  salary = 123123;
}
