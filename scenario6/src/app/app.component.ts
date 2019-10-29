import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scenario6';

  public userInput;
 
  parentMethod(value){
    this.userInput=value;
    console.log(this.userInput);
  }
}
