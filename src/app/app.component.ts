import { Component } from '@angular/core';
//Componentes
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { VitrinaComponent } from './vitrina/vitrina.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ClasificadosComponent } from './clasificados/clasificados.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { BarraInferiorComponent } from './barra-inferior/barra-inferior.component';
//Servicios
import {ManagerService} from './manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManagerService]
})
export class AppComponent {
  title = 'app works!';
}
