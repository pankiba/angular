import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to Angular Interpolation Feature';

  getTitle() {
    return this.title;
  }

  giveMeColor = 'red';

  scriptTag = '<script>alert("You are hacked")</script>'

  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

  person = new Person('pankiba', new Date(1980, 3, 12));

  personWithNullName = new Person(null, new Date(1980, 3, 12));

}
