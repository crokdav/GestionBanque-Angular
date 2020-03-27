import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ) { }
  getAll() {
    return this.http.get<User[]>('http://localhost:8080/user/all').pipe()// pipe equivaut au commit de git
  }
  postUser(user : User) {
    return this.http.post<User>('http://localhost:8080/user/creat', user).pipe()// entre les pinces croceo cela correspond au type de retour voir Spring
  }
  deleteUser (idUser: number) {
    return this.http.delete<Number>('http://localhost:8080/user/delete/'+idUser).pipe()
  }

login (login : Login) {
  return this.http.post<User>('http://localhost:8080/user/login', login).pipe();
}




}
