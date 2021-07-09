import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../../models/person.model";

@Component({
  selector: 'listComponent',
 templateUrl: './listComponent.component.html',
  styleUrls: ['./listComponent.component.css']

})
export class listComponentComponent {
  @Input() title: string = '';

  @Input() People: Person[] = [];

}
