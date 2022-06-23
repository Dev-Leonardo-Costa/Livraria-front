import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  buscarTodas():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

  salvar(categoria: Categoria):Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url,categoria);
  }

  mensagem(mensagemErro: String): void{
    this._snack.open(`${mensagemErro}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
