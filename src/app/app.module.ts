import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
//Componentes
import { AppComponent } from './app.component';
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
import { LogService } from './log.service';
import {HttpService} from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    CarritoComponent,
    VitrinaComponent,
    LoginComponent,
    BarraInferiorComponent,
    ProductoDetallesComponent,
    LogoutComponent,
    HomeComponent,
    ProductosComponent,
    ClasificadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
