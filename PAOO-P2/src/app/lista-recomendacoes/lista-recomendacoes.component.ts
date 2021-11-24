import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recomendacao } from '../recomendacao.model';
import { RecomendacaoService } from '../recomendacao.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lista-recomendacoes',
  templateUrl: './lista-recomendacoes.component.html',
  styleUrls: ['./lista-recomendacoes.component.css']
})
export class ListaRecomendacoesComponent implements OnInit, OnDestroy {

  recomendacoes: Recomendacao [] = []
  private recomendacaoSubscription: Subscription
  
  constructor(private recomendacaoService: RecomendacaoService) {

   }

  ngOnInit(): void {
    this.recomendacaoService.getRecomendacoes()
    this.recomendacaoSubscription = this.recomendacaoService.getListaDeRecomendacoesAtualizadaObservable()
    .subscribe((recomendacoes: Recomendacao[])=> {
      this.recomendacoes = recomendacoes
    })
  }

  ngOnDestroy(): void {
    this.recomendacaoSubscription.unsubscribe()
  }

  onDelete(id: string): void {
    this.recomendacaoService.removerRecomendacao(id)
  }


}
