import { ProductoDto } from './../../api/models/producto-dto';
import { PedidoDto } from './../../api/models/pedido-dto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
  styleUrls: ['./pedido-item.component.css']
})
export class PedidoItemComponent implements OnInit {

  @Input() pedido : PedidoDto = {
    
  }

  @Output() ListaDeDetalles = new EventEmitter<ProductoDto[]|null>();
  constructor() { }

  ngOnInit(): void {



  }


  emitirDetalles(){

    this.ListaDeDetalles.emit(this.pedido.detalle);

  }

}
