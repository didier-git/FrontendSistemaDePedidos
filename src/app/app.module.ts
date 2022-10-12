import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormCreateProductoComponent } from './formCreateProducto/form-create-producto/form-create-producto.component';
import { FormCreatePedidoComponent } from './formCreatePedido/form-create-pedido/form-create-pedido.component';
import { ListaDePedidosComponent } from './listaDePedidos/lista-de-pedidos/lista-de-pedidos.component';
import { DetalleDePedidoComponent } from './detalleDePedido/detalle-de-pedido/detalle-de-pedido.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductoItemComponent } from './productoItem/producto-item/producto-item.component';
import { PedidoItemComponent } from './pedidoItem/pedido-item/pedido-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormCreateProductoComponent,
    FormCreatePedidoComponent,
    ListaDePedidosComponent,
    DetalleDePedidoComponent,
    ProductoItemComponent,
  
    PedidoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
