import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroRecomendacoesComponent } from './cadastro-recomendacoes/cadastro-recomendacoes.component';
import { ListaRecomendacoesComponent } from './lista-recomendacoes/lista-recomendacoes.component';

const routes: Routes = [
  {path: '', component: ListaRecomendacoesComponent},
  {path: 'criar', component: CadastroRecomendacoesComponent},
  {path: 'editar/:iidRecomendacao', component: CadastroRecomendacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
