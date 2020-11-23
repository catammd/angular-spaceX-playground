import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {
  transform(value: any[], order = '', column: string = ''): any[] {
    // No array
    if (!value || order === '' || !order) {
      return value;
    }
    // Array with only one item
    if (value.length <= 1) {
      return value;
    }
    // Sort one dimensional array
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    }
    return orderBy(value, [column], [order]);
  }
}
