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
      Proyecto: ['', [Validators.minLength(20)]],
    });
  }

  
  get Proyectos() {
    return this.formProyecto.get('Proyectos');
  }

  ngOnInit(): void {
    this.datosProyectos.obtenerDatosProyectos().subscribe((data) => {
      console.log(data);
      this.miPorfolioProyecto=data;
    });
  }

  guardarProyecto() {
    if (this.formProyecto.valid) {
      let Proyectos = this.formProyecto.controls['Proyectos'].value;

      let proyectoEditar = new Proyecto(Proyectos);

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
    this.formProyecto.controls['Proyectos'].setValue(
      this.miPorfolioProyecto.proyecto
    );
  }

  eliminarProyectos() {
    document.getElementById('proyectId')?.remove();
  }
}
