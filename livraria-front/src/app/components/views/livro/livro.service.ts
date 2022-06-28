import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar
    ) { }

  buscarTodosOsLivrosPorCategoria(id_cat: String): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url)
  }

  salvar(livro: Livro, id_cat: String): Observable<Livro>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro)
  }

  mensagem(mensagemErro: String): void {
    this._snack.open(`${mensagemErro}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}