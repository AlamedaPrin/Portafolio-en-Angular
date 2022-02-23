import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service'

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  //Atributos
  miPorfolioEdu:any;
  formEducacion:FormGroup;

//constructor de clase
  constructor(private datosEducacionPorfolio:EducacionService, private educacionFormBuilder:FormBuilder) {
    this.formEducacion = this.educacionFormBuilder.group({
      Educacion1:['',[Validators.minLength(20)]],
      Educacion2:['',[Validators.minLength(20)]]
    })
   }

   // Getters
   get campoEducacion1(){ 
     return this.formEducacion.get("campoEducacion1");
   }

   get campoEducacion2(){
     return this.formEducacion.get("campoEducacion2");
   }

  
  ngOnInit(): void {
    this.datosEducacionPorfolio.obtenerDatosEducacion().subscribe(data => {
      console.log(data);
      this.miPorfolioEdu=data;
    })
  }

   //métodos
  guardarEducacion(){
    if (this.formEducacion.valid){
      this.formEducacion.reset();
      document.getElementById("cerrarModalEdu")?.click();
    }
    else {
      alert("El campo debe contener un mínimo de 20 caracteres");
      this.formEducacion.markAllAsTouched();
    }
  }

  salirEducacion()
  {
  this.formEducacion.reset();
  }





}
