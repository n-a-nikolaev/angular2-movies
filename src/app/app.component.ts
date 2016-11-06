import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
   .active {
     background-color: gray;
     color: white;
   }
  `],
  template: `
    <navigation></navigation>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
