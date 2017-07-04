import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private managerService: ManagerService) {

  }

  ngOnInit() {
      this.productos = this.managerService.getStockItems();
  }

  onSearch(value){
    if(value.length > 0){
      this.productos = this.managerService.getStockItems("/search", value);
    }
    else{
      this.productos = this.managerService.getStockItems();
    }
  }

  addItem(id, nombre, unidades, precio, imagen){
    if(unidades > 0){
      let item = {id: id, nombre: nombre, unidades: unidades, precio: precio, imagen:imagen};
      this.managerService.addItem(item);
      alert(`El Producto ${nombre} fue agregado al carrito con ${unidades} unidades!`);
    }
  }
}
