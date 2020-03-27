import { Component, OnInit } from '@angular/core';
import { Compte } from '../models/compte';
import { CompteService } from '../services/compte.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.css']
})
export class AddcompteComponent implements OnInit {
newCompte : Compte = new Compte();
listUsers : User[] = [];


  constructor(private compteService : CompteService, private userService : UserService ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers =data
      }
    )
  }

  createCompte() {
   this.compteService.postCompte(this.newCompte).subscribe(
     data =>{ console.log(data)}
    )
  }





}
