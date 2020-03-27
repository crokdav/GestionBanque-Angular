import { Component, OnInit } from '@angular/core';
import { Operations } from '../models/operations';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-listoperations',
  templateUrl: './listoperations.component.html',
  styleUrls: ['./listoperations.component.css']
})
export class ListoperationsComponent implements OnInit {
  ListOperation : Operations[]=[];
  constructor(private operationService : OperationService) { }

  ngOnInit(): void {
    this.operationService.getAll().subscribe(
      data => {
        this.ListOperation=data;
      }
    )
  }

}