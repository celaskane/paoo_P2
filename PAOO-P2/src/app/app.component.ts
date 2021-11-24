import { Component } from '@angular/core';
import { Recomendacao } from './recomendacao.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recomendacoes: Recomendacao[] = []
  onRecomendacaoAdicionada (recomendacao){
    this.recomendacoes = [...this.recomendacoes, recomendacao]
  }
}
