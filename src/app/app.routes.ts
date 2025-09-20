import { Routes } from '@angular/router';
import { CadastrarProdutos } from './Components/Pages/cadastrar-produtos/cadastrar-produtos';
import { ConsultarProdutos } from './Components/Pages/consultar-produtos/consultar-produtos';

export const routes: Routes = [
    {
        path: 'cadastrar-produtos', //rota
        component: CadastrarProdutos //componente
    },
    {
        path: 'consultar-produtos', //rota
        component: ConsultarProdutos //componente
    }
];
