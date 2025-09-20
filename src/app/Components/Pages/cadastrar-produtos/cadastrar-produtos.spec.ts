import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProdutos } from './cadastrar-produtos';

describe('CadastrarProdutos', () => {
  let component: CadastrarProdutos;
  let fixture: ComponentFixture<CadastrarProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
