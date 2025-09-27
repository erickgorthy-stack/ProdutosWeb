import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ChartModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  //Atributos
  graficoColunas = signal<Chart>(new Chart());
  graficoDonut = signal<Chart>(new Chart());

  //declarar e instanciar o HttpClient
  private http = inject(HttpClient);

  //Função executada ao abrir o componente
  ngOnInit() {

    //executando a consulta de categoria por quantidade
    this.http.get('http://localhost:5210/api/dashboard/categoria-quatidade')
      .subscribe((data) => {

        const categorias: string[] = [];
        const valores: number[] = [];

        (data as any[]).forEach(item => {
          categorias.push(item.nomeCategoria);
          valores.push(item.totalQuantidade);
        });

        this.graficoColunas.set(new Chart({
          chart: { type: 'column' },
          title: { text: 'Quantidade de produtos por categoria' },
          subtitle: { text: 'Somatório da quantidade de produtos por cada categoria.' },
          xAxis: {
            categories: categorias,
            crosshair: true,
            title: { text: 'Categorias' }
          },
          yAxis: {
            min: 0,
            title: { text: 'Quantidade' }
          },
          plotOptions: {
            column: {
              borderRadius: 5,
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [{
            name: 'Categorias',
            type: 'column',
            data: valores
          }],
          legend: { enabled: false },
          credits: { enabled: false }
        }));

      });

    //executando a consulta de categoria por preço
    this.http.get('http://localhost:5210/api/dashboard/categoria-preco')
      .subscribe((data) => {

        const conteudo: any[] = [];
        (data as any[]).forEach(item => {
          conteudo.push([item.nomeCategoria, item.mediaPreco]);
        });

        this.graficoDonut.set(new Chart({
          chart: { type: 'pie' },
          title: { text: 'Média de preços por categoria' },
          subtitle: { text: 'Média de preço de produtos por cada categoria.' },
          plotOptions: {
            pie: {
              innerSize: '50%',
              dataLabels: { enabled: true }
            }
          },
          series: [{
            data: conteudo,
            type: 'pie',
            name: 'Categorias'
          }],
          legend: { enabled: false },
          credits: { enabled: false }
        }))

      })

  }
}
