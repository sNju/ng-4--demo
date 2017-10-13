import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() firstInput;
//or we can do like this
//@Input('firstInput') haha;

@Output() myOutValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.firstInput,'fuckkkk');
  //  console.log(this.haha,'another way');
  
  this.myOutValue.emit('hello this is from child');
  
    
  }

}
