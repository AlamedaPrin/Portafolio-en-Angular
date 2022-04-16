import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/Entidades/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service'; // este servicio lo importé 'a mano' una vez creado

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css'],
})
export class ExperienciaEducacionComponent implements OnInit {
  miPorfolioExp: any;
  formExp: FormGroup;
  usuarioAutenticadoExperiencia: boolean = true; // por defecto debe estar en false

  constructor(
    private datosExperienciaPorfolio: ExperienciaService,
    private experienciaFormBuilder: FormBuilder
  ) {
    this.formExp = this.experienciaFormBuilder.group({
      experienciaUno: [''],
      experienciaDos: [''],
      experienciaTres: [''],
      experienciaCuatro: [''],
    });
  }

  get experiencia1() {
    return this.formExp.get('experienciaUno');
  }

  get experiencia2() {
    return this.formExp.get('experienciaDos');
  }
  
  get experiencia3() {
    return this.formExp.get('experienciaTres');
  }

  get experiencia4() {
    return this.formExp.get('experienciaCuatro');
  }
  
  ngOnInit(): void {
    this.datosExperienciaPorfolio
      .obtenerDatosExperiencia()
      .subscribe((data) => {
        console.log(data);
        this.miPorfolioExp = data;
      });
  }

  guardarExperiencia() {
    if (this.formExp.valid) {

      let experienciaUno = this.formExp.controls['experienciaUno'].value;
      let experienciaDos = this.formExp.controls['experienciaDos'].value;
      let experienciaTres = this.formExp.controls['experienciaTres'].value;
      let experienciaCuatro = this.formExp.controls['experienciaCuatro'].value;      


      let experienciaEditar = new Experiencia(this.miPorfolioExp.id, experienciaUno, experienciaDos, experienciaTres, experienciaCuatro);

      this.datosExperienciaPorfolio
        .editarDatosExperiencia(experienciaEditar)
        .subscribe(
          (data) => {
            this.miPorfolioExp = experienciaEditar;
            this.formExp.reset();
            document.getElementById('cerrarModalExp')?.click();
          },
          (error) => {
            alert(
              'No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador'
            );
          }
        );
    } else {
      this.formExp.markAllAsTouched();
    }
  }

  mostrarDatosExperiencia() {

    this.formExp.controls['experienciaUno'].setValue(this.miPorfolioExp.experienciaUno);      
    this.formExp.controls['experienciaDos'].setValue(this.miPorfolioExp.experienciaDos);        
    this.formExp.controls['experienciaTres'].setValue(this.miPorfolioExp.experienciaTres);        
    this.formExp.controls['experienciaCuatro'].setValue(this.miPorfolioExp.experienciaCuatro);     
    
  }

  salirExperiencia() {
    this.formExp.reset();
  }

  eliminarExperiencia() {
    document.getElementById('experId')?.remove();
  }
}
