import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from '../Entidades/educacion';
import { EducacionDos } from '../Entidades/educacionDos';
import { EducacionDosService } from '../servicios/educacion-dos.service';

@Component({
  selector: 'app-educacion-dos',
  templateUrl: './educacion-dos.component.html',
  styleUrls: ['./educacion-dos.component.css']
})
export class EducacionDosComponent implements OnInit {

  educacionDos!:EducacionDos[];
  formEducacionDos:FormGroup;
  usuarioAutenticadoEducacionDos: boolean = true; // por defecto debe estar en false
  educacionEdit!: EducacionDos;

  constructor(private datosEducacionDosPorfolio:EducacionDosService, private educacionDosFormBuilder: FormBuilder) { 
    this.formEducacionDos = this.educacionDosFormBuilder.group({
      school: ['', [Validators.minLength(5)]],
      career: ['', [Validators.minLength(10)]],
      comienzo:[''],
      fin:['']
    });
  }

  //Getters

  get school(){
    return this.formEducacionDos.get('school');
  }

  get career(){
    return this.formEducacionDos.get('career');
  }

  get comienzo(){
    return this.formEducacionDos.get('comienzo');
  }

  get fin(){
    return this.formEducacionDos.get('fin');
  }


  ngOnInit(): void {
    this.datosEducacionDosPorfolio.obtenerDatosEducacionDos().subscribe(data => {
      this.educacionDos=data
    });
  }

  // Métodos

  editarDatosEducacionDos(item: EducacionDos) {
    this.educacionEdit=item;    
  }

  guardarEducacionDos() {

    if (this.formEducacionDos.valid) {

      
      let school  =  this.formEducacionDos.controls['school'].value;
      let career  =  this.formEducacionDos.controls['career'].value;
      let img     =  this.formEducacionDos.controls['img'].value;
      let comienzo   =  this.formEducacionDos.controls['comienzo'].value;
      let fin     =  this.formEducacionDos.controls['fin'].value;
      let idPersona =  this.formEducacionDos.controls['idPersona'].value;

      let educacionDosEditar = new EducacionDos(this.educacionEdit.id, school, career, img, comienzo, fin, idPersona);
 
      this.datosEducacionDosPorfolio.editarDatosEducacionDos(educacionDosEditar).subscribe((data) => {
       //this.educacionDos.filter(this.educacionEdit => this.educacionEdit.id == educacionDosEditar.id); 
        this.formEducacionDos.reset();
        document.getElementById('cerrarModalEduDos')?.click();
      },
      (error) => {
        alert(
          'No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador'
        );
       }      
      );
    } else {
      this.formEducacionDos.markAllAsTouched();
    }
  }

  //eliminarEducacionDos(item:EducacionDos)
  //{
  //  alert(item.id);
  //  this.datosEducacionDosPorfolio.eliminarDatosEducacionDos(item.id).subscribe(data =>{
  //    this.educacionDos.splice(this.educacionDos.indexOf(data),1);
  //  })
  //  }



  salirEducacionDos() {
    this.formEducacionDos.reset();
  }

  

}
