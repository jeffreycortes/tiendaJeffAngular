import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit, OnDestroy {
  id: string;
  productos: any[] = [];
  private sub: any;

  constructor(private route: ActivatedRoute, private managerService: ManagerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });
    this.productos = this.managerService.getStockItems("/id", this.id);
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
