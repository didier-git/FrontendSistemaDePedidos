import { AppComponent } from './app.component';
import { DetalleDePedidoComponent } from './detalleDePedido/detalle-de-pedido/detalle-de-pedido.component';
import { ListaDePedidosComponent } from './listaDePedidos/lista-de-pedidos/lista-de-pedidos.component';
import { FormCreatePedidoComponent } from './formCreatePedido/form-create-pedido/form-create-pedido.component';
import { FormCreateProductoComponent } from './formCreateProducto/form-create-producto/form-create-producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', component : FormCreateProductoComponent },
  {path:'form-create-producto', component : FormCreateProductoComponent },
  {path:'form-create-pedido', component : FormCreatePedidoComponent },
  {path:'lista-de-pedidos', component : ListaDePedidosComponent },
  {path:'detalle-de-pedido', component : DetalleDePedidoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
