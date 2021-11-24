import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecomendacaoService } from '../recomendacao.service';
import { Recomendacao } from '../recomendacao.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-recomendacoes',
  templateUrl: './cadastro-recomendacoes.component.html',
  styleUrls: ['./cadastro-recomendacoes.component.css']
})
export class CadastroRecomendacoesComponent implements OnInit {

  constructor(
    private recomendacaoService: RecomendacaoService,
    private route: ActivatedRoute,
  ) { 

  }

  private modo: string = 'criar'
  private idRecomendacao: string
  public recomendacao: Recomendacao
  

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      if (paramMap.has('idRecomedacao')) {
        this.modo = 'editar'
        this.idRecomendacao = paramMap.get('idRecomendacao')
        this.recomendacaoService.getRecomendacao(this.idRecomendacao).subscribe(dadosRec => {
          this.recomendacao = {
            id: dadosRec._id,
            corpo: dadosRec.corpo,
            tempo: dadosRec.tempo
          }
        })
      }
      else {
        this.modo="criar"
        this.idRecomendacao = null
      }
    })
  }

  onSalvarRecomendacao(form: NgForm) {
    if (form.invalid) return
    if (this.modo === 'criar') {
      this.recomendacaoService.adicionarRecomendacao(
        form.value.corpo,
        new Date()
      )
    }
    else {
      //console.log(form.value.corpo)
      //this.recomendacaoService.atualizarRecomendacao(
      //  this.idRecomendacao,
      //  form.value.corpo
      //)
    }
    form.resetForm()
  }
}
