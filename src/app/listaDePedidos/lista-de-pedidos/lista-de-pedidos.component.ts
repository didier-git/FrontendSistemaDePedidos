import { ProductoDto } from './../../api/models/producto-dto';
import { PedidoDto } from './../../api/models/pedido-dto';
import { PedidoService } from './../../api/services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent implements OnInit {

  public pedidos! : PedidoDto[]
  public Detalles!: ProductoDto[]|null
  constructor(private api : PedidoService) { }

  ngOnInit(): void {
    this.api.apiPedidoGetListaPedidosGet$Json().subscribe(res=>{
      
      this.pedidos = res;
    })
  
    




  }

  recibirListaDeDetalles(lista : ProductoDto[]|null){
    
    this.Detalles = lista;
    console.log(lista);

  }

}
