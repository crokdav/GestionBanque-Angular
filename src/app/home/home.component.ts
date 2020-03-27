import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user : Login = new Login();
  userLoggedIn : User;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.user).subscribe(
      data =>{ 
        if (data) {
        this.userLoggedIn = data;
        localStorage.setItem("user",this.userLoggedIn.pseudo);
        localStorage.setItem("role", this.userLoggedIn.role.role);
        localStorage.setItem("nom", this.userLoggedIn.nom);
        window.location.href = "http://localhost:4200/compte"
        }
      }
     )
   }

   logOut() {
     localStorage.clear();
   }


}
