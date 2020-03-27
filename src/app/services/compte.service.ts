import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Compte[]>('http://localhost:8080/compte/all').pipe()// pipe equivaut au commit de git
  }
  postCompte(compte : Compte) {
    return this.http.post<Compte>('http://localhost:8080/compte/creat', compte).pipe()// entre les pinces croceo cela correspond au type de retour voir Spring
  }
  deleteCompte (idCompte: number) {
    return this.http.delete<Number>('http://localhost:8080/compte/delete/'+idCompte).pipe()
  }
}
