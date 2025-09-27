import { Routes } from '@angular/router';
import { CadastrarProdutos } from './Components/Pages/cadastrar-produtos/cadastrar-produtos';
import { ConsultarProdutos } from './Components/Pages/consultar-produtos/consultar-produtos';
import { Dashboard } from './Components/Pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'cadastrar-produtos', //rota
        component: CadastrarProdutos //componente
    },
    {
        path: 'consultar-produtos', //rota
        component: ConsultarProdutos //componente
    },
    {
        path: 'dashboard', //rota
        component: Dashboard //componente
    },
    {
        path: '', pathMatch: 'full', //página inicial do projeto
        redirectTo: '/dashboard' //redirecionamento
    }

];
