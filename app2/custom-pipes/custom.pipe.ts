import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})

export class CustomPipe implements PipeTransform {

  transform(value: string, limit?: number) {

    let actualLimit=(limit)?limit:50;

    if(!value){
      return null;
    }
    else{
      return value.substr(0,actualLimit) + '...';
    }

  }

}
