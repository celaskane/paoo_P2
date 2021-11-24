import { Pipe, PipeTransform } from '@angular/core';
import sortBy from 'sort-by';
import { Recomendacao } from './recomendacao.model';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(recomendacoes: Array<string>, args: string): Array<string> {
    if(typeof args[0] ==="undefined") {
      return recomendacoes;
    }

    let direction = args[0][0]; 
    let column = args [0].slice(1);

    recomendacoes.sort((a:any, b:any)=> {
      let left = Number(new Date(a[column]));
      let right = Number(new Date(b[column]));
      return (direction ==="-") ? right - left : left - right;
    });

    return recomendacoes;
  }

}
