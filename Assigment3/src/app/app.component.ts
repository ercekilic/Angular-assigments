import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assigment3';

  holder = false;
  counter = 0;
  counterArray: number[] = [];
  
  onClick(){

    this.holder = true;

    this.counter = this.counter+ 1;
    
    this.counterArray.push(this.counter);
  }
  
}
