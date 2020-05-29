import { Component, Input } from '@angular/core';

@Component ({
  selector : 'user-root',
  template: `
  <p> hello musembi</p>
  <p> {{username}}</p>
  <p> {{age}}</p>
  `,
})

export class UserComponent {
  @Input() username= " Peter Musembi";
  @Input() age = 10;


}

