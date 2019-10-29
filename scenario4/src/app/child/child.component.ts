import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public userInput="hv";
  @Output()public childEvent=new EventEmitter();
  saveInput(value){
    
    this.userInput=value;
    console.log(this.userInput);
    this.childEvent.emit(this.userInput);
  }

  constructor() { }

  ngOnInit() {
  }

}
