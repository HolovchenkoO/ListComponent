import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../models/person.model";


@Component({
  selector: 'listItemComponent',
  templateUrl: './listItemComponent.component.html',
  styleUrls: ['./listItemComponent.component.css']
 })

export class listItemComponentComponent implements OnInit {
  @Input() title: string = '';
  @Output() btnClickEvent = new EventEmitter();


  @Input() People: Person []= [];

  /*@Input() person: Person = {
    firstName: 'FirstName 1',
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
*/



  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() age: number = 0;
  constructor() { }

  ngOnInit() {

  }

  onBtnClick(idx: number) {

this.People.splice(idx, 1)


  }
}
