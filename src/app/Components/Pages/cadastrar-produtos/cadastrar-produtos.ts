import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar-produtos.html',
  styleUrl: './cadastrar-produtos.css'
})
export class CadastrarProdutos {
Categorias = signal<any[]>([]);

    //Instanciar a classe HttpClient do Angular
    http = inject(HttpClient);

    //Função executada ao abrir a página
    ngOnInit() {
        //Fazendo uma chamada HTTP GET para a API
        this.http.get('http://localhost:5210/api/categorias')
          .subscribe((data) => { //capturando a resposta
            //Armazenar os dados na variável Categorias
            this.Categorias.set(data as any[]);
          });
        }
 //Estrutura do formulário
    formulario = new FormGroup({
      nome : new FormControl('', [Validators.required, Validators.minLength(8)]), //campo vazio
      preco : new FormControl('', [Validators.required, Validators.min(0.01)]), //campo vazio
      quantidade : new FormControl('', [Validators.required, Validators.min(1)]), //campo vazio
      categoriaId : new FormControl('', [Validators.required]) //campo vazio
    });

    //Função para cadastrar um novo produto
    cadastrar() {
      //enviando os dados do formulário para a API
      this.http.post('http://localhost:5210/api/produtos', this.formulario.value)
      .subscribe((data: any) => {//capturando a resposta
        alert(data.mensagem);
        this.formulario.reset(); //limpar o formulário
      });
    }
}
