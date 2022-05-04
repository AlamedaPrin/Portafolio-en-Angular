import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/Entidades/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  
  educacionList!: Educacion[];
  form: FormGroup;
  accion = 'Agregar';
  id: number | undefined;
  usuarioAutenticado: boolean = true; // por defecto debe estar en false

  
  constructor(private miServicio:EducacionService, private miFormBuilder:FormBuilder)
  
  {
    this.form = this.miFormBuilder.group({
      career: ['', [Validators.required]],
      comienzo: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      url: ['https://', [Validators.required]],
      school: ['', [Validators.required]],

    });
  }
  

  ngOnInit(): void {
    this.obtenerEducacion();
    
  }

  obtenerEducacion(){
     this.miServicio.getListEducacion().subscribe(data => {
       this.educacionList = data;
     }, error =>{
       console.log(error);
     });  
  }  

     guardarEducacion() {
    
        const educacion: any = {

        career: this.form.get('career')?.value,
        comienzo: this.form.get('comienzo')?.value,
        fin: this.form.get('fin')?.value,
        imgEdu: this.form.get('url')?.value,
        school: this.form.get('school')?.value, 

        }

  if (this.id == undefined) {

    this.miServicio.saveEducacion(educacion).subscribe(data => {
      this.obtenerEducacion();
      this.form.reset();
      document.getElementById('cerrarModalEducacion')?.click();
    }, error => {
      console.log(error);
    });
  } else {

    educacion.id = this.id;

    this.miServicio.updateEducacion(this.id, educacion).subscribe(data => {
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

 editarEducacion(educacion: any) {
   this.accion = 'Editar';
   this.id = educacion.id;


   this.form.patchValue({
    career: educacion.career,
    comienzo: educacion.comienzo,
    fin: educacion.fin,
    imgEdu: educacion.imgEdu,
    school: educacion.school
   })
 }


 eliminarEducacion(id: number) {
   this.miServicio.deleteEducacion(id).subscribe(data => {
     this.obtenerEducacion();
   })
 }
}
