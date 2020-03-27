import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operations } from '../models/operations';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get<Operations[]>('http://localhost:8080/operation/all').pipe()// pipe equivaut au commit de git
  }
  postOperation(operation : Operations) {
    return this.http.post<Operations>('http://localhost:8080/operation/creat', operation).pipe()// entre les pinces croceo cela correspond au type de retour voir Spring
  }

}
