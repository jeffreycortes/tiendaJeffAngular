import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})

export class BarraSuperiorComponent implements OnInit {
  numItems: number = 0;

  constructor(private managerService: ManagerService) {

  }

  ngOnInit() {
    this.numItems = this.managerService.getNumItems();
  }

  updateItems(){
    this.numItems = this.managerService.getNumItems();
  }
}
