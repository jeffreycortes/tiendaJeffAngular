import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import {LogService} from '../log.service';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'vitrina',
  templateUrl: './vitrina.component.html',
  styleUrls: ['./vitrina.component.css'],
})

export class VitrinaComponent implements OnInit {
  constructor(private logService: LogService, private managerService: ManagerService) {
  }

  ngOnInit() {

  }
}
