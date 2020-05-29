import { Component } from '@angular/core';

@Component ({
  selector : 'user-root',
  template: `
  <p> hello musembi</p>
  <p> {{username}}</p>
  `
})

export class UserComponent {
  username= " Peter Musembi"
}

