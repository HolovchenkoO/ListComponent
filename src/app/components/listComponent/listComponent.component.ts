import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../models/person.model";

@Component({
  selector: 'listComponent',
  templateUrl: './listComponent.component.html',
  styleUrls: ['./listComponent.component.css']
})
export class listComponentComponent {
  @Input() title: string = '';
  //@Output() btnClickEvent = new EventEmitter();
  @Input() items: string[] = [];
  @Input() person: Person = {
    firstName:  'FirstName 1',
    lastName: 'LastName 2',
    age: 23
  };


  obBtnClick() {
    console.log('Click from child');
    //this.btnClickEvent.emit();

    this.title = 'Hello';
  }
}
