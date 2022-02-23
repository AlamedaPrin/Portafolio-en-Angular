import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  miPorfolioAcerca:any;
  formAcerca:FormGroup;

  constructor(private datosPorfolio:PorfolioService, private acercaFormBuilder:FormBuilder) {
    this.formAcerca = this.acercaFormBuilder.group({
      AcercaDe:['', [Validators.minLength(20)]]
    })
   }

   get campoAcercaDe(){
     return this.formAcerca.get("campoAcercaDe"); 
   }

  ngOnInit(): void { 
    this.datosPorfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.miPorfolioAcerca=data;
  });
  }



  guardarAcercaDe(){    
    if (this.formAcerca.valid){ 
      this.formAcerca.reset();   
    document.getElementById("cerrarModalAcerca")?.click();
  }
  else {    
    alert("El campo debe contener mínimo 20 caracteres");
    this.formAcerca.markAllAsTouched();
  }

}

salirAcercaDe(){ 
  this.formAcerca.reset();   
}
}
