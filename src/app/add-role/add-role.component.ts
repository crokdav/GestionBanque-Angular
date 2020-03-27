import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role : Role = new Role();

  constructor(private roleService : RoleService)  { }

  ngOnInit(): void {
  }


  createRole(){
    this.roleService.postRole(this.role).subscribe(
      data => {
        console.log(data)}
    )
  }


}