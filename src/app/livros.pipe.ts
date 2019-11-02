import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'livros'
})
export class LivrosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
