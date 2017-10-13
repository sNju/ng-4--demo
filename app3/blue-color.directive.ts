import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColor]'//this is the name of directive
})
export class BlueColorDirective {

  constructor(element: ElementRef) { //here we define element and ElementRef and inject it at the top 
  element.nativeElement.style.color="red"; //here nativeElement refer current element
  }


  //@HostListener is used for event we can make any types of event
  //and function name could be anything

  // @HostListener('click') couldBeAnyThingName(){
  // 	alert(`wowwwwwww it's awesome`);
  // }

  // @HostListener('mouseenter') mouseenter(){
  // 	alert(`mouse entered`);
  // }

  //  @HostListener('mouseleave') mouseleave(){
  // 	alert(`mouse leaved`);
  // }

  // @HostListener('target:EVENT', [args]);


  //  @HostListener('document:click',['$event']) //if we click on document this will run and if we remove document then this will run only text clik 
  //  couldBeAnyThingName(elem){
	// 	console.log('clicked', elem);
  // }

}
