import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  /**
   * @array = object from array
   * @term = term's search
   */
  transform(array: any, term: any): any {
    const items = JSON.parse(JSON.stringify(array));
    if (term === undefined) return items;

    return items.filter(function(item) {
      for(let property in item){
        if (item[property] === null){
          continue;
        }
        if(item[property].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
        }
      }
      return false;
    });
  }
}
