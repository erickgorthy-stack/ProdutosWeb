import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-produtos',
  imports: [
     CommonModule,
     FormsModule,
     ReactiveFormsModule],
  templateUrl: './consultar-produtos.html',
  styleUrl: './consultar-produtos.css'
})
export class ConsultarProdutos {
  //Objeto para realizar requisições na API backend
  private http = inject(HttpClient);

  //Criando um formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
//Função para consultar produtos no backend
  consultar() {
   //Fazendo uma requisição do tipo GET para o endpoint /produtos
   this.http.get('http://localhost:5210/api/produtos?nome=' + this.formulario.value.nome)
   .subscribe(
     (data) => { console.log(data);}
   );
  }

}
