import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProdutos } from './consultar-produtos';

describe('ConsultarProdutos', () => {
  let component: ConsultarProdutos;
  let fixture: ComponentFixture<ConsultarProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
