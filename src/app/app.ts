import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'This is app title';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'This is app title after 1 second';
    // },  1000);  
  }
}
