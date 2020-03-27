import { Component, OnInit } from '@angular/core';
import { Operations } from '../models/operations';
import { Compte } from '../models/compte';
import { CompteService } from '../services/compte.service';
import { OperationService } from '../services/operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addoperation',
  templateUrl: './addoperation.component.html',
  styleUrls: ['./addoperation.component.css']
})
export class AddoperationComponent implements OnInit {
  newOpe : Operations = new Operations();
  ListComptes : Compte[] = [];
  
  
    constructor(private operationService : OperationService, private compteService : CompteService ) { }
  
    ngOnInit(): void {
      this.compteService.getAll().subscribe(
        data => {
          this.ListComptes =data
        }
      )
    }
  
    createOpe() {
      this.operationService.postOperation(this.newOpe).subscribe(
        data => {
          if (data['idOperation'] == 0) {
  
          }else if (data['idOperation']) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Opération effectué, retour à la page compte',
          showConfirmButton: false,
          timer: 1500
        }).then ( () => {
          window.location.href="http://localhost:4200/compte"
        })
    }
      
  }
      )
}
  
}