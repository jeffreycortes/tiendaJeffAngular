import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {VitrinaComponent} from './vitrina/vitrina.component';
import {CarritoComponent} from './carrito/carrito.component';
import {LogoutComponent} from './logout/logout.component';
import {ProductoDetallesComponent} from './producto-detalles/producto-detalles.component';
import {ClasificadosComponent} from './clasificados/clasificados.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' }
  ,{ path: 'Login', component: LoginComponent }
  ,{ path: 'Home', component: HomeComponent }
  ,{ path: 'Vitrina', component: VitrinaComponent }
  ,{ path: 'Vitrina/Producto/:id', component: ProductoDetallesComponent }
  ,{ path: 'Carrito', component: CarritoComponent }
  ,{ path: 'Logout', component: LogoutComponent }
  ,{ path: 'Clasificados', component: ClasificadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,exports: [RouterModule]
  ,providers: []
})

export class AppRoutingModule {}
