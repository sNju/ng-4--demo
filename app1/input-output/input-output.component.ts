import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  @Input() InputData:boolean=true;

  constructor() { }

  ngOnInit() {
  }



}
