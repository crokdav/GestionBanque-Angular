import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
ListRole : Role[] = [];
  constructor(private roleService : RoleService) { }

  ngOnInit(): void {
    this.roleService.getAll().subscribe(
      data => {
        this.ListRole = data;
      }
    )

}
deletRole(idRole : number){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      this.roleService.deleteRole(idRole).subscribe()
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      window.location.href="http://localhost:4200/role"
    }
  })
    
}




}