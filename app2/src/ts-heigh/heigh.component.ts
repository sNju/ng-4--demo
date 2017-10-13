import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heigh',
  templateUrl: './heigh.component.html',
  styleUrls: ['./heigh.component.css']
})
export class HeighComponent implements OnInit {
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
