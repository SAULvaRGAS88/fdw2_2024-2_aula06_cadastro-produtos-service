import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'produtos', component: ListCardProdutosComponent },
  { path: 'cadastro-produtos', component: FormProdutosComponent },
  { path: 'edit/:id', component: FormProdutosComponent },
  { path: 'tabela-produtos', component: TabelaProdutosComponent },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
