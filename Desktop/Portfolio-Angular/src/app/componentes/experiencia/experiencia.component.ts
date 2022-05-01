import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/Entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  experienciaList!: Experiencia[];
  form: FormGroup;
  accion = 'Agregar';
  id: number | undefined;
  usuarioAutenticado:boolean=true;

  constructor(private miServicio:ExperienciaService, private miFormBuilder:FormBuilder) { 
    this.form = this.miFormBuilder.group({
      tipoDeExperiencia: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.obtenerExperiencia();
  }

  obtenerExperiencia(){
    this.miServicio.getListExperiencia().subscribe(data => {
      this.experienciaList = data;
    }, error => {
      console.log(error);
    });
  }

  guardarExperiencia() {  
      
      const experiencia: any = {
      tipoDeExperiencia: this.form.get('tipoDeExperiencia')?.value,          
        
      }

    

    if (this.id == undefined) {
      // Agregamos una nueva educacion
        this.miServicio.saveExperiencia(experiencia).subscribe(data => {
         
          this.obtenerExperiencia();
          this.form.reset();
        }, error => {
          
          console.log(error);
        })
  } else {
  
    experiencia.id = this.id;
    // Editamos educacion
      this.miServicio.updateExperiencia(this.id,experiencia).subscribe(data => {
      this.form.reset();
      this.accion = 'Agregar';
      this.id = undefined;
     ;
      this.obtenerExperiencia();
    }, error => {
      console.log(error);
    })
  }
}

editarExperiencia(experiencia: any) {
  this.accion = 'Editar';
  this.id = experiencia.id;
  

  this.form.patchValue({
    tipoDeExperiencia: experiencia.tipoDeExperiencia,
  })
}

eliminarExperiencia(id: number){
    
  this.miServicio.deleteExperiencia(id).subscribe(data=>{
   
    this.obtenerExperiencia ();
  })
}
}
