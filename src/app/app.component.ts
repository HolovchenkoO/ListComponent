import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import {Person} from "./models/person.model";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ListComponent';

 /*  person: Person = {
    firstName:  'FirstName1',
    lastName: 'LastName2',
     age: 23
};
constructor() { }
*/
ngOnInit() {

}
}
