import { ActivatedRoute, Router } from "@angular/router";
import { CategoriaService } from "./../categoria.service";
import { Observable } from "rxjs";
import { Categoria } from "./../categoria.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  atualizar(): void{
    this.service.atualizar(this.categoria).subscribe(resposta => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria atualizada com sucesso!')
    }, err => {
      this.service.mensagem('validar se todos os campos estão preenchidos corretamente!')
    })
  }

  cancelar(): void{
    this.router.navigate(['categorias'])
  }
}
