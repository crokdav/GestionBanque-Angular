import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsers : User[] = [];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers = data;
      }
    )

}

deletUser(idUser : number){
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
      this.userService.deleteUser(idUser).subscribe()
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      window.location.href="http://localhost:4200/user"
    }
  })
    
}






}