import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scenario3';
  public userInput="";
  getValue(value){
    this.userInput=value;
  }
}
