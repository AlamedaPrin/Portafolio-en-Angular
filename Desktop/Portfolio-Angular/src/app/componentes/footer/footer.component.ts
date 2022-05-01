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
  
  proyectoList!: Proyecto[];
  form: FormGroup;
  accion = 'Agregar';
  id: number | undefined;
  usuarioAutenticado: boolean = true; // por defecto debe estar en false

  
  constructor(private miServicio: ProyectosService,private miFormBuilder: FormBuilder)      
   {
    this.form = this.miFormBuilder.group({
      tipoDeProyecto: ['', [Validators.required]], 
    });
  }
 

  ngOnInit(): void {
    this.obtenerProyectos();    
  }

  obtenerProyectos(){
    this.miServicio.getListProyectos().subscribe(data => {
      this.proyectoList = data;
    }, error => {
      console.log(error);
    });
  }

  guardarProyecto() {

    const proyecto: any = {
      tipoDeProyecto: this.form.get('tipoDeProyecto')?.value,

    }

    if (this.id == undefined) {
      this.miServicio.saveProyecto(proyecto).subscribe(data => {
        this.obtenerProyectos();
        this.form.reset();
      }, error => {
        console.log(error);
      })
    } else {
      proyecto.id = this.id;
      this.miServicio.updateProyecto(this.id, proyecto).subscribe(data =>{
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        ;
        this.obtenerProyectos();
      }, error => {
        console.log(error);
      })
    }
  }

  editarProyecto(proyecto: any){ 
    this.accion = 'Editar';
    this.id = proyecto.id;

    this.form.patchValue({
      tipoDeProyecto: proyecto.tipoDeProyecto,
    })
  }
  

  eliminarProyecto(id:number) {
    this.miServicio.deleteProyecto(id).subscribe(data => {
      this.obtenerProyectos();
    })
}
}
