


import { ProductoService } from './../../api/services/producto.service';
import { ProductoDto } from './../../api/models/producto-dto';
import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { getButtonListOpts } from 'sweetalert/typings/modules/options/buttons';

declare var $: any

@Component({
  selector: 'app-form-create-producto',
  templateUrl: './form-create-producto.component.html',
  styleUrls: ['./form-create-producto.component.css']
})
export class FormCreateProductoComponent implements OnInit {

  ProductoForm = new FormGroup({
    code : new FormControl(0),
    name : new FormControl(''),
    price : new FormControl(0)
  });
  public producto!: ProductoDto
  public codigo = ""
  public nombre = ""
  public precio = ""


  constructor(private api: ProductoService,private builder : FormBuilder) { 
    
  }


  


  ngOnInit(): void {
    $(() => {
      $("#btnCrearProducto").on("click", () => {

        this.producto = {
          codigo: parseInt(this.codigo) ,
          nombre: this.nombre,
          precio: parseInt(this.precio)
        }
        this.api.apiProductoCreateProductoPost$Json({ body: this.producto }).subscribe(res => {
          
          if(res!= null){


            this.probandoSwal(); 


          }

          
        });
   
      })

     
    
    })

  }

  probandoSwal(){

    Swal.fire({
      title: "El producto ha sido guardo con exito!",
      text: "Da click en el boton para continuar agregando productos!",
      icon: "success",
      allowOutsideClick: false,
      showConfirmButton : true
    }).then((result)=>{

      if(result.isConfirmed){
        location.reload();
      }
    })
    
  }

}
