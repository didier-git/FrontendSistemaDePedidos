import { ProductoDto } from './../../api/models/producto-dto';

import {
  Component, EventEmitter, Input, OnChanges,
  OnInit,
  DoCheck,
  SimpleChanges,
  Output,
} from '@angular/core';


declare var $: any;
@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements
  OnInit
  {

  @Input() producto: ProductoDto = {
    cantidad: null
  }
  public cantidad!: number ;
 
  @Output() Quantity = new EventEmitter<number>();
  @Output() Detalle = new EventEmitter<ProductoDto>();

  constructor() {

  }

  ngOnInit(): void {

  }



  emitiendoDetalle(){
    if(this.cantidad!=0){
      this.producto.cantidad = this.cantidad;
      this.Detalle.emit(this.producto);
    }

  }









}
