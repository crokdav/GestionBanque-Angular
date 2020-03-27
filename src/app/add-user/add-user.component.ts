import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser : User = new User();
  ListRole : Role[] = [];
  constructor(private userService : UserService, private roleService : RoleService)  { }

  ngOnInit(): void {
    this.roleService.getAll().subscribe(
      data => {
        this.ListRole = data;
      }
    )

}


  createUser(){
    this.userService.postUser(this.newUser).subscribe(
      data => {
        if (data['idUser'] == 0) {
    
        }else if (data['idUser']) {
Swal.fire(
  'utilisateur ajoutée!',
 this.newUser.pseudo+ ' a bien été ajouté!',
  'success'
).then( () => {
  window.location.href = "http://localhost:4200/user"
})
        }
      }
    )
  }


}