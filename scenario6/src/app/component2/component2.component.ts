import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output()public comp2Event=new EventEmitter();

  saveInput(value){
    this.comp2Event.emit(value);
  }

}
