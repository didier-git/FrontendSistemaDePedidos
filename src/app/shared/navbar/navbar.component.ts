import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active="nav-item active"
  constructor() { 

    
  }

  ngOnInit(): void {

    $(()=>{

     $("#navLink1").on("click",()=>{
     const link = $("#navLink1");
     console.log(link);
     link.addClass(this.active)
     })
      
    });

  }

}
