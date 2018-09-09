import { Pipe, PipeTransform } from '@angular/core';

/* 
  TextFilterPipe filters an array of objects by a
  term's search.
  The search term can match with every properties
  values of the objects
*/
@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  /**
   * @array = object from array
   * @term = term's search
   */
  transform(array: any, term: any): any {

    // to don't edit the original array
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
