import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightsDirective } from '../../directives/highlights.directive';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, HighlightsDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  name = 'bhuban';

  bgColor = 'red';
  inputValue = 'test';
  phonenumber = 234234243;

  @ViewChild('heading') heading!: ElementRef;

  constructor() {
    console.log('constructor called ', this.name);
    console.log('Viewachild  called ', this.heading);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }

  ngOnInit() {
    console.log('ng oninit called', this.name);
  }
  ngAfterViewInit() {
    console.log('Viewachild  called ', this.heading.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log('destroy is not implemented.');
  }
  // onChange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputValue = value;
  // }
}
