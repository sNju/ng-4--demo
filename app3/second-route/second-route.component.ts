import { Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.css']
})
export class SecondRouteComponent implements OnInit {

  @ViewChild('myInputText') inputText;


  constructor(private user:UserService, ) { 

    setInterval(()=>{this.send2server();},2000);
  }

    send2server(){
      let data=this.inputText.nativeElement;
      console.log(data.value);
    }

  ngOnInit() {
  }

}
