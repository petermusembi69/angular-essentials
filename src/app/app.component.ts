import { Component, Input } from '@angular/core';

import "lodash";
import { element } from 'protractor';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials ' + name;
  // @Input() number = 0;
  // name;
  rootItems = ['pipi','popo'];

  addElement(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  // onIncrease() {
  //   this.number = this.number + _.random(1, 10);
  // }
  // onUserInput(event) {
  //  this.name = event.target.value;
  // }
}
