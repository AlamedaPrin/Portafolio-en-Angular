import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/Entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service'; // este servicio lo importé 'a mano' una vez creado

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {

  miPorfolioExp:any;
  formExp:FormGroup;
  usuarioAutenticadoExperiencia:boolean = true; // por defecto debe estar en false

  constructor(private datosExperienciaPorfolio:ExperienciaService, private experienciaFormBuilder:FormBuilder) { 
    this.formExp = this.experienciaFormBuilder.group({
      experiencia1:['',[Validators.minLength(20)]],
      experiencia2:['',[Validators.minLength(20)]]
    })
  }

  get experiencia1()
  {
    return this.formExp.get("experiencia1")
  }

  get experiencia2()
  {
    return this.formExp.get("experiencia2")
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

    let experiencia1 = this.formExp.controls["experiencia1"].value;
    let experiencia2 = this.formExp.controls["experiencia2"].value;

    let experienciaEditar = new Experiencia (experiencia1, experiencia2)

    this.datosExperienciaPorfolio.editarDatosExperiencia(experienciaEditar).subscribe(data => {
      this.miPorfolioExp=experienciaEditar;
      this.formExp.reset();
      document.getElementById("cerrarModalExp")?.click();
    },
    error => {
      alert("No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador")
    });   
    
      
    }

    else 

    {      
      this.formExp.markAllAsTouched();
    }

    

    }

    mostrarDatosExperiencia(){

      this.formExp.controls["experiencia1"].setValue(this.miPorfolioExp.experiencia1);
      this.formExp.controls["experiencia2"].setValue(this.miPorfolioExp.experiencia2);
      
         
    }

    salirExperiencia(){
      this.formExp.reset()
    }

  



}
