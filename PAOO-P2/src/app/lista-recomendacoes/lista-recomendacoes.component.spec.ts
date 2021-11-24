import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecomendacoesComponent } from './lista-recomendacoes.component';

describe('ListaRecomendacoesComponent', () => {
  let component: ListaRecomendacoesComponent;
  let fixture: ComponentFixture<ListaRecomendacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRecomendacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecomendacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
