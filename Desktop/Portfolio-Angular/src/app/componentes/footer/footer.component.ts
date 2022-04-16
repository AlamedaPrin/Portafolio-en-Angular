import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/Entidades/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service'; // Importo este servicio a mano si había otro asignado

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  
  miPorfolioProyecto!: Proyecto;
  formProyecto: FormGroup;
  usuarioAutenticadoProyecto: boolean = true; // por defecto debe estar en false

  
  constructor(
    private datosProyectos: ProyectosService,
    private proyectosFormBuilder: FormBuilder
  ) {
    this.formProyecto = this.proyectosFormBuilder.group({
      Proyectos: [''],  //1
    });
  }

  
  get Proyectos() {   //2
    return this.formProyecto.get('Proyectos'); //3
  }

  ngOnInit(): void {
    this.datosProyectos.obtenerDatosProyectos().subscribe((data) => {
      console.log(data);
      this.miPorfolioProyecto=data;
    });
  }

  guardarProyecto() {
    if (this.formProyecto.valid) {

      let Proyectos = this.formProyecto.controls['Proyectos'].value;   //4

      let proyectoEditar = new Proyecto(this.miPorfolioProyecto.id, Proyectos); //5

      this.datosProyectos.editarDatosProyectos(proyectoEditar).subscribe(
        (data) => {
          this.miPorfolioProyecto = proyectoEditar;
          this.formProyecto.reset();
          document.getElementById('cerrarModalProy')?.click();
        },
        (error) => {
          alert(
            'No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador'
          );
        }
      );
    } else {
      alert('El campo debe contener un mínimo de 20 caracteres');
      this.formProyecto.markAllAsTouched();
    }
  }

  salirProyecto() {
    this.formProyecto.reset();
  }

  mostrarDatosProyecto() {

    this.formProyecto.controls['proyecto'].setValue(this.miPorfolioProyecto.proyecto);      
    
  }

  eliminarProyectos() {
    document.getElementById('proyectId')?.remove();
  }
}
