import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to Angular Two way data binding Feature';

  userName: string = 'pankiba';
  clearName() {
    this.userName = '';
  }

  userNameOne: string = 'pankiba';
  clearNameOne() {
    this.userNameOne = '';
  }

  userNameTwo: string = 'pankiba';
  userNameTwoChanged(event){
    console.log("userNameTwo  argument " + event + "  component " + this.userNameTwo);
  }


  initialCount: number = 10;
  count: number = 0;
  
  clearCount() {
    this.count = 0;
  }

}
