import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get<Role[]>('http://localhost:8080/role/all').pipe()// pipe equivaut au commit de git
  }
  postRole(role : Role) {
    return this.http.post<Role>('http://localhost:8080/role/creat', role).pipe()// entre les pinces croceo cela correspond au type de retour voir Spring
  }
  deleteRole (idRole: number) {
    return this.http.delete<Number>('http://localhost:8080/role/delete/'+idRole).pipe()
  }

}
