import { Pipe, PipeTransform } from '@angular/core';

/* 
  DynamicSortPipe orders alphabetically an array of objects
   by a value of a property. 
   It can order in ascendent or descendant way
*/
@Pipe({
  name: 'dynamicSort'
})
export class DynamicSortPipe implements PipeTransform {

  compareValues(property, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(property) || !b.hasOwnProperty(property)) {
        // property doesn't exist on either object
          return 0; 
      }
  
      const varA = (typeof a[property] === 'string') ? 
        a[property].toUpperCase() : a[property];
      const varB = (typeof b[property] === 'string') ? 
        b[property].toUpperCase() : b[property];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

    /**
   * @list = object from array
   * @property = property on which to sort
   * @order = ascendent or descendent order ( 'asc' by default )
   */
  transform(list, property, order='asc') {
   return ( (order == 'desc') ? list.sort(this.compareValues(property,'desc')) : list.sort(this.compareValues(property)) );
  }

}
