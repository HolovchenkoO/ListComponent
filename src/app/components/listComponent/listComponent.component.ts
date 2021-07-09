import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../models/person.model";

@Component({
  selector: 'listComponent',
 templateUrl: './listComponent.component.html',
  styleUrls: ['./listComponent.component.css']
 /* template: `<ul class="people">
    <li *ngFor="let person of People">
      <div class="badge">{{person.firstName}}</div>
      <div>{{person.lastName}}</div>
      <div>{{person.age}}</div>
    </li>
  </ul>`*/
})
export class listComponentComponent {
  @Input() title: string = '';
  //@Output() btnClickEvent = new EventEmitter();
  @Input() People: Person[] = [];
  i: number = 0;
 /* @Input() person: Person = {
    firstName:  'FirstName 1',
    lastName: 'LastName 2',
    age: 23
  };*/
 /* @Output() People: Person[] = [
    { firstName: 'FirstName 1', lastName: 'LastName 1', age: 23 },
    { firstName: 'FirstName 2', lastName: 'LastName 2', age: 35 },
    { firstName: 'FirstName 3', lastName: 'LastName 3', age: 30 },
    { firstName: 'FirstName 4', lastName: 'LastName 4', age: 18 },
    { firstName: 'FirstName 5', lastName: 'LastName 5', age: 40 },
    { firstName: 'FirstName 6', lastName: 'LastName 6', age: 43 },
    { firstName: 'FirstName 7', lastName: 'LastName 7', age: 56 },
    { firstName: 'FirstName 8', lastName: 'LastName 8', age: 28 },
    { firstName: 'FirstName 9', lastName: 'LastName 9', age: 77 },
    { firstName: 'FirstName 10', lastName: 'LastName 10', age: 33 }
  ];

  people = this.People;
*/

  obBtnClick() {
    console.log('Click from child');
    //this.btnClickEvent.emit();

    this.title = 'Hello';
  }
}
