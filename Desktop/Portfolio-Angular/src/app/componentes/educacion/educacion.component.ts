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

  //Atributos
  miPorfolioEdu: any;
  formEducacion: FormGroup;
  isUserLogged: boolean = true; // por defecto debe estar en false

  //constructor de clase

  constructor(
    private datosEducacionPorfolio: EducacionService,
    private educacionFormBuilder: FormBuilder
  ) {
    this.formEducacion = this.educacionFormBuilder.group({
      descripcion1: ['', [Validators.minLength(20)]],
      descripcion2: ['', [Validators.minLength(20)]],
    });
  }

  // Getters
  get descripcion1() {
    return this.formEducacion.get('descripcion1');
  }

  get descripcion2() {
    return this.formEducacion.get('descripcion2');
  }

  ngOnInit(): void {
    this.datosEducacionPorfolio.obtenerDatosEducacion().subscribe((data) => {
      console.log(data);
      this.miPorfolioEdu = data;
    });
    
  }

  //métodos

  guardarEducacion() {
    if (this.formEducacion.valid) {
      
      let descripcion1 = this.formEducacion.controls['descripcion1'].value;
      let descripcion2 = this.formEducacion.controls['descripcion2'].value;

      let educacionEditar = new Educacion(descripcion1, descripcion2);

      this.datosEducacionPorfolio
        .editarDatosEducacion(educacionEditar)
        .subscribe(
          (data) => {
            this.miPorfolioEdu = educacionEditar;
            this.formEducacion.reset();
            document.getElementById('cerrarModalEdu')?.click();
          },
          (error) => {
            alert(
              'No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador'
            );
          }
        );
    } else {
      this.formEducacion.markAllAsTouched();
    }
  }

  mostrarDatosEducacion() {
    this.formEducacion.controls['descripcion1'].setValue(
      this.miPorfolioEdu.descripcion1
    );
    this.formEducacion.controls['descripcion2'].setValue(
      this.miPorfolioEdu.descripcion2
    );
  }

  salirEducacion() {
    this.formEducacion.reset();
  }

  eliminarEducacion() {
    document.getElementById('educId')?.remove();
  }
}
