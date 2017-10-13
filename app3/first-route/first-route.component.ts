import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-first-route',
  templateUrl: './first-route.component.html',
  styleUrls: ['./first-route.component.css']
})
export class FirstRouteComponent implements OnInit {

  constructor(private user:UserService) { 
    
      setTimeout(()=>{
        this.result=50;
      },2000)
      
    
      }

  hi='hiiiiiiiii'
  title = 'sanju';
  visible=true;
  ifElse=true;
  counter=0;
  
  myFav={
    'frontend':['html','css','js'],
    'backend':['nodejs','php','python']
  }
  myFavFor=[
    {'name':'html','type':'frontend'},
    {'name':'css','type':'frontend'},
    {'name':'js','type':'frontend'},
    {'name':'angular','type':'frontend'},
    {'name':'nodejs','type':'backend'}
     ]

  toggleDiv(){
  	this.visible=!this.visible;
  }
  toggleLocalVa(){
    this.counter++;
  }
  toggleEvenOdd(){
  	this.ifElse=!this.ifElse;
  	
  }

  result=2;

 
keydoneFunc(event){
    console.log('this is awesome', event);
  }
//two way data binding
username='sanju';
changeUserName(ev){
this.username = ev.target.value;
}

    name='kuch bhi';

  ngOnInit() {
    console.log('is user logged in',this.user.getUserLoggedIn());
    this.name=this.user.username;  
  }

}
