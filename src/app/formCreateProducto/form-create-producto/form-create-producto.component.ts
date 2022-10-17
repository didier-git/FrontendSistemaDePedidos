


import { ProductoService } from './../../api/services/producto.service';
import { ProductoDto } from './../../api/models/producto-dto';
import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


declare var $: any

@Component({
  selector: 'app-form-create-producto',
  templateUrl: './form-create-producto.component.html',
  styleUrls: ['./form-create-producto.component.css']
})
export class FormCreateProductoComponent implements OnInit {

  public producto!: ProductoDto
  
  constructor(private api: ProductoService,private builder : FormBuilder) { 
    
  }

  ProductoForm = this.builder.group({
     codigo : [0,Validators.required],
     nombre : [''],
     precio: [0]

  })

  ngOnInit(): void {
    $(() => {
      $("#btnCrearProducto").on("click", () => {

        this.producto = {
          codigo: this.ProductoForm.controls.codigo.value?.valueOf(),
          nombre: this.ProductoForm.controls.nombre.value,
          precio: this.ProductoForm.controls.precio.value?.valueOf()
        }

       
        this.api.apiProductoCreateProductoPost$Json({ body: this.producto }).subscribe(res => {
          
          if(res!= null){


            this.probandoSwal(); 


          }

          

          
        });

       
        
   
      })

     
    
    })
    console.log(this.ProductoForm.controls.codigo.errors);
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
        this.ProductoForm.reset();
      }
    })
    
  }

}
