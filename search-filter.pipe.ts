import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args:any):any {
    if(!value) return null;
    if(!args) return value;


    args = args.toLowerCase();
    debugger;
    return value.filter( (res:any) =>{

      return JSON.stringify(res).toLowerCase().includes(args);

    }
    )
  }

}
