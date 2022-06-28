import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  buscarTodosOsLivrosPorCategoria(id_cat: String): Observable<Livro[]>{
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.get<Livro[]>(url)
  }
}
