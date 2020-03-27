import { Component, OnInit } from '@angular/core';
import { Compte } from '../models/compte';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-listcomptes',
  templateUrl: './listcomptes.component.html',
  styleUrls: ['./listcomptes.component.css']
})
export class ListcomptesComponent implements OnInit {
ListComptes : Compte[]=[];
  constructor(private compteService : CompteService) { }

  ngOnInit(): void {
    this.compteService.getAll().subscribe(
      data => {
        this.ListComptes=data;
      }
    )
  }

}
