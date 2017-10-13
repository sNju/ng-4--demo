import {Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
    selector:'[changeColor]'
})

export class customDirective{

        constructor(element: ElementRef){
            element.nativeElement.style.color='blue';

        }

        @HostListener('click') onClickOfUser(){
            alert('this alert is coming from hostlistener');
        }

}