import { Router } from "@angular/router";
import { Categoria } from "./../categoria.model";
import { CategoriaService } from "./../categoria.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-categoria-create",
  templateUrl: "./categoria-create.component.html",
  styleUrls: ["./categoria-create.component.css"],
})
export class CategoriaCreateComponent implements OnInit {
  
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  
  isLinear = false;

  categoria: Categoria = {
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriaService,
    private router: Router,
    private _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  nome = new FormControl("", [Validators.minLength(3)]);
  descricao = new FormControl("", [Validators.minLength(10)]);

  salvar(): void {
    this.service.salvar(this.categoria).subscribe(
      (resposta) => {
        this.router.navigate(["categorias"]);
        this.service.mensagem("Categoria salva com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.erros.length; i++) {
          this.service.mensagem(err.error.erros[i].mensage);
        }
      }
    );
  }

  cancelar(): void {
    this.router.navigate(["categorias"]);
  }

  getMessage() {
    if (this.nome.invalid) {
      return "O campo NOME deve conter entre 3 a 50 caracteres";
    }

    if (this.descricao.invalid) {
      return "O campo DESCRIÇÃO deve conter entre 10 a 100 caracteres";
    }

    return false;
  }
}
