import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service'; // este servicio lo importé 'a mano' una vez creado

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {

  miPorfolioExp:any;
  formExp:FormGroup;

  constructor(private datosExperienciaPorfolio:ExperienciaService, private experienciaFormBuilder:FormBuilder) { 
    this.formExp = this.experienciaFormBuilder.group({
      Experiencia:['',[Validators.minLength(20)]]
    })
  }

  get campoExperiencia(){
    return this.formExp.get("campoExperiencia")
  }

  ngOnInit(): void {
    this.datosExperienciaPorfolio.obtenerDatosExperiencia().subscribe(data => 
      {
      console.log(data);
      this.miPorfolioExp=data;
      });
  }   

  guardarExperiencia(){
    if (this.formExp.valid){
      this.formExp.reset();
      document.getElementById("cerrarModalExp")?.click();
    }
    else {
      alert("El campo debe contener un mínimo de 20 caracteres");
      this.formExp.markAllAsTouched();
    }
  }

  salirExperiencia(){
    this.miPorfolioExp.reset()
  }



}
