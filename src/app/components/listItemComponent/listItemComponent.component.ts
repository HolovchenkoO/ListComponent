import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../models/person.model";


@Component({
  selector: 'listItemComponent',
  templateUrl: './listItemComponent.component.html',
  styleUrls: ['./listItemComponent.component.css']
 })

export class listItemComponentComponent implements OnInit {
  @Input() title: string = '';

  @Input() People: Person[] = [];

  constructor() { }

  ngOnInit() {

  }

  onBtnClick(idx: number) {

this.People.splice(idx, 1)


  }
}
