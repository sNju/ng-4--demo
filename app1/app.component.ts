import { Component,OnInit} from '@angular/core';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // value : any;
  // constructor(private _httpService: HttpService){}
  isActive:boolean=true;
  title : string = 'this is title'
  pipeText:string='abcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghiabcdefghi';

  ngOnInit(){
  // return this._httpService.getData().subscribe((value) => ( this.value = value)));

  }

  divClicked($event){
    
    alert('div clicked');
    console.log($event);
  }

  buttonClicked($event){
  $event.stopPropagation()//for stop bubbling 
    
    alert('button clicked');
    console.log($event);//we can get more things of it
    console.log($event.offsetX);
  }

  onKeyUp($event){
    console.log($event)
    if($event.keyCode == 13){
      alert('enter was pressed');
    }
    //getting the current value
    console.log($event.target.value);
  }

  onKeyDown($event){
      alert('enter was pressed');
  }

  onKeyUpNew(email){
    console.log(email)
  }

  //two way data binding
  data='asdf';
  keyUp(){
    console.log(this.data)
  }

}

