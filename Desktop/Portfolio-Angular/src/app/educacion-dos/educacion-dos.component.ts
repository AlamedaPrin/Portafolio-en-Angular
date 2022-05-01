import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionDos } from '../Entidades/educacionDos';
import { EducacionDosService } from '../servicios/educacion-dos.service';

@Component({
  selector: 'app-educacion-dos',
  templateUrl: './educacion-dos.component.html',
  styleUrls: ['./educacion-dos.component.css']
})
export class EducacionDosComponent implements OnInit {

  educacionList!:EducacionDos[];
  form:FormGroup;
  accion = 'Agregar';
  id: number | undefined;
  usuarioAutenticado: boolean = true; // por defecto debe estar en false
  
  constructor(private miServicio:EducacionDosService, private miFormBuilder: FormBuilder ) { 
    this.form = this.miFormBuilder.group({
      career: ['', [Validators.required]],
      comienzo:['',[Validators.required]],
      fin:['',[Validators.required]],
      url:['https://', [Validators.required]],
      school: ['', [Validators.required]],    
      
    });
  }
  


  ngOnInit(): void {
    this.obtenerEducacion();    
  }

  obtenerEducacion(){
    this.miServicio.obtenerDatosEducacionDos().subscribe(data => {
      this.educacionList = data;
    }, error => {
      console.log(error);
    })
  }

  guardarEducacion(){  //ver donde va este metodo
  
    const educacion:any = {
      career: this.form.get('career')?.value,
      comienzo: this.form.get('comienzo')?.value,
      fin: this.form.get('fin')?.value,
      imgEdu: this.form.get('url')?.value,
      school: this.form.get('school')?.value,
    }

    if (this.id == undefined) {
      //Creacion Educación
      this.miServicio.crearEducacionDos(educacion).subscribe(data => {

        this.obtenerEducacion();
        this.form.reset();
      }, error => {
        console.log(error);
      })
    } else {

      educacion.id = this.id
       //Edición Educación
       this.miServicio.editarDatosEducacionDos(this.id, educacion).subscribe(data => {
         this.form.reset();
         this.accion = 'Agregar';
         this.id = undefined;
         ;
         this.obtenerEducacion();
       }, error => {
         console.log(error);
       })
    }
  }

  //Editar

  editarEducacion(educacion: any) {
    this.accion = 'Editar';
    this.id = educacion.id;


    this.form.patchValue({
      career: educacion.career,
      comienzo: educacion.comienzo,
      fin: educacion.fin,
      imgEdu: educacion.imgEdu,
      school: educacion.school,
    })
  }

  //Eliminar

  eliminarEducacion(id: number){
    this.miServicio.eliminarDatosEducacionDos(id).subscribe(data => {
      this.obtenerEducacion();
    })
  }
}

 
