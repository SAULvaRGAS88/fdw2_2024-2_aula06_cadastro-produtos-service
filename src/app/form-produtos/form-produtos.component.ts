import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto = new Produto();
  id?: number;
  botaoAcao = "CADASTRAR";
  
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.id = +this.route.snapshot.params['id'];
      if(this.id) {
        this.botaoAcao = "EDITAR";
        this.produto = this.produtoService.buscarPorId(this.id);
      }

  }

  salvar() {
    if(this.id){
      this.produtoService.editar(this.id, this.produto);
      alert("Produto editado com sucesso!")
      this.router.navigate(['/tabela-produtos']);
    }
    else {
      this.produtoService.inserir(this.produto);
      alert("Produto cadastrado com sucesso!")
      this.produto = new Produto();
      this.router.navigate(['/tabela-produtos']);
    }
  }
  voltar() {
    this.router.navigate(['/tabela-produtos']);
  }
}
