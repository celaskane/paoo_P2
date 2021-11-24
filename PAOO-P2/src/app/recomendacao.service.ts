import { Recomendacao } from './recomendacao.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable ({
    providedIn: 'root'
})

export class RecomendacaoService{
    constructor (private httpClient: HttpClient){

    }

    private listaRecomendacoesAtualizada = new Subject <Recomendacao[]> ()
    private recomendacoes: Recomendacao [] = []

    getRecomendacoes(): void{
        this.httpClient.get<{mensagem: string, recomendacoes: any}>('http://localhost:3000/api/recomendacoes')
        .pipe(map((dados) => {
            return dados.recomendacoes.map(recomendacao => {
                return {
                    id: recomendacao._id,
                    corpo: recomendacao.corpo,
                    tempo: recomendacao.tempo
                    //tempo: new Date()
                }
            })
        }))
        .subscribe(recomendacoes => {
            this.recomendacoes = recomendacoes
            this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
        })
    }

    adicionarRecomendacao (corpo: string, tempo: Date) {
        const recomendacao: Recomendacao = {
            corpo, 
            tempo: new Date()
        }
        this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/api/recomendacoes', recomendacao)
        .subscribe(dados => {
            console.log(dados.mensagem)
            recomendacao.id = dados.id
            this.recomendacoes.push(recomendacao)
            this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
        })
    }

    getRecomendacao (idRecomendacao: string) {
        return this.httpClient.get<{_id:string, corpo: string, tempo: Date}>(`http://localhost:3000/api/recomendacoes/${idRecomendacao}`)
    }

   // atualizarRecomendacao(id:string, corpo: string){
   //     const tempo = new Date();
   //     const recomendacao: Recomendacao ={
   //         id, corpo, tempo
   //     }
   //     this.httpClient.put(`http://localhost:3000/api/recomendacoes/${id}`, recomendacao)
     //   .subscribe(res => {
    //        const copia = [...this.recomendacoes];
     //       const indice = copia.findIndex(rec => rec.id === recomendacao.id)
    //        copia[indice] = recomendacao
    //        this.recomendacoes = copia
    //        this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
    //    })
    //}

    removerRecomendacao(id:string): any{
        this.httpClient.delete(`http://localhost:3000/api/recomendacoes/${id}`)
        .subscribe(
            () => {
                this.recomendacoes = this.recomendacoes.filter(rec=>rec.id!==id)
                this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
            }
        )
    }

    getListaDeRecomendacoesAtualizadaObservable(){
        return this.listaRecomendacoesAtualizada.asObservable()
    }
}

