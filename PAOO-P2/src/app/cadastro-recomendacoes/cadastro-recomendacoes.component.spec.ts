import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRecomendacoesComponent } from './cadastro-recomendacoes.component';

describe('CadastroRecomendacoesComponent', () => {
  let component: CadastroRecomendacoesComponent;
  let fixture: ComponentFixture<CadastroRecomendacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroRecomendacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRecomendacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
