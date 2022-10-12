import { PedidoService } from './../../api/services/pedido.service';
import { PedidoDto } from './../../api/models/pedido-dto';

import { ProductoDto } from './../../api/models/producto-dto';
import { ProductoService } from './../../api/services/producto.service';


import { Component, OnInit} from '@angular/core';

declare var $: any;
declare var productosElegidos: any
@Component({
  selector: 'app-form-create-pedido',
  templateUrl: './form-create-pedido.component.html',
  styleUrls: ['./form-create-pedido.component.css']
})
export class FormCreatePedidoComponent implements OnInit {

  public productos!: ProductoDto[]
  public direccion!: string;
  public identificacion!: string;
  public nombre !:string;
  public telefono!:string;
  public productosElegidos = []
  public detallesDePedido!: ProductoDto[] 
  public pedido!: PedidoDto;

  // , private apiPedido : PedidoService
  public constructor(private api: ProductoService, private apiPedido : PedidoService) {
  }

  cantidad! : number;
  Detalle !: ProductoDto;

  ngOnInit(): void {

    this.traerDatos();
   

  }

  traerDatos() {

    this.api.apiProductoGetListaDeProductosGet$Json().subscribe(res => {
    this.productos = res;

    })
  }



  CrearPedido(){

    this.pedido = {
      identificacion : this.identificacion,
      nombre : this.nombre,
      direccion: this.direccion,
      telefono : this.telefono,
      detalle : this.detallesDePedido
    }
    this.apiPedido.apiPedidoCreatePedidoPost$Json({body: this.pedido}).
    subscribe(res=> console.log(res));
  }

  recibiendoDetalle(detalleRecibido : ProductoDto){
    this.Detalle = detalleRecibido;
    if(this.detallesDePedido===undefined){
      this.detallesDePedido = []
      this.detallesDePedido.push(this.Detalle);
      //console.log(this.detallesDePedido);
    }else if(!this.detallesDePedido.includes(this.Detalle)){
      this.detallesDePedido.push(this.Detalle)
      //console.log(this.detallesDePedido)
    }
  }
}
