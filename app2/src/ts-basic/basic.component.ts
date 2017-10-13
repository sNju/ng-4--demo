import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public typeName:string;
  public observerRef:any;

  constructor(private route:ActivatedRoute) {
    //this.typeName=route.snapshot.params['checkParams'];
    this.observerRef=route.params.subscribe(params=>{
      this.typeName=params['checkParams'];
    })
  }

  ngOnInit() {
  }

}
