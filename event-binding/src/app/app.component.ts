import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to Angular Event Binding Feature';

  clickCount: number = 0;

  handleClick() {
    console.log(' button clicked ');
    this.clickCount++;
  }

  value: string;
  handleInput(event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  valueOne: string;
  handleInputOne(element) {
    this.valueOne = element.value;
  }

  valueTwo: string;

  valueThree: string;

  valueFour: string;

}
