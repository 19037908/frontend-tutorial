import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
   private router : Router
    ){}

  
  buscarID(id:number){
   
      this.router.navigate(['buscar/',id]);
  }

  valorVacio(){
   
      this.router.navigate(['/']);
    
  
  }
  
  }
  

