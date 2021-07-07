import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(value: any, serachTerm : any): any {
    if(!value){
      return null;
    }
    if(!serachTerm){
      return value;
    }

    return value.filter((data: any) => {
      return data.productName.toLowerCase().indexOf(
        serachTerm.toLowerCase()) > -1;
    })
  }
}
