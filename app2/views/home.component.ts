import { Component } from '@angular/core';

@Component({
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})

export class HomeComponent {
  propertyBinding: string = 'property binding';
  ifTrue: boolean = true;
  className: string = 'adding class based on condition if true';
  styleBinding: string = 'changing style based on condition if true';

  addStyle: object ={
    'color':'red',
    'background-color':'black',
    'display':'inline-block'
  }
  
  limit: string = 'this is a custom pipe we re making a limitTo pipe here max limit 20 char';
  money: number = 50;

}
