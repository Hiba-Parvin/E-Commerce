import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: String, propertyName: any): any {
    //Initializing An Empty Array To Store Filtered Products
    const result: any = []
    if (!value || filterString == "" || propertyName == "") {
      return value
    }
    else {
      value.forEach((item:any)=>{
        if(item[propertyName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
