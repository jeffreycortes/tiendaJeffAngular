import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  precio: number = 0.00;
  numItems: number = 0;
  productos: any[] = [];

  constructor(private managerService: ManagerService) {

  }

  ngOnInit() {
    this.numItems = this.managerService.getNumItems();
    this.precio = this.managerService.getPriceFullItems();
    this.productos = this.managerService.getAllItems();
  }

  limpiarCarrito(){
    if(confirm("¿Está a punto de vaciar el carrito. Desea continuar?")){
      this.managerService.emptyItems();
      window.location.href = "./Vitrina";
    }
  }

  pagarItems(){
    this.managerService.buyItems();
    alert("Compra realizada con éxito. Será redireccionado a la vitrina para actualizar los productos!");
    this.managerService.emptyItems();
    window.location.href = "./Vitrina";
  }
}
