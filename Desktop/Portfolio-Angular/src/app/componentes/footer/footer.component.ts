import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/servicios/proyectos.service'; // Importo este servicio a mano si había otro asignado

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //Atributos
  miPorfolioProyecto:any;
  formProyecto:FormGroup;

  //Contructor de clase
  constructor(private datosProyectos:ProyectosService, private proyectosFormBuilder: FormBuilder) { 
    this.formProyecto = this.proyectosFormBuilder.group({
      Proyecto:['',[Validators.minLength(20)]]
    })
  }

  //Getter
  get campoProyecto()
  {
    return this.formProyecto.get("campoProyecto");
  }

  ngOnInit(): void {  
    this.datosProyectos.obtenerDatosProyectos().subscribe(data => {
      console.log(data);
      this.miPorfolioProyecto = data;
    })
    

  }

  guardarProyecto(){
    if (this.formProyecto.valid){
      this.formProyecto.reset();
      document.getElementById("cerrarModalProy")?.click();
    }
    else{
      alert("El campo debe contener un mínimo de 20 caracteres")
      this.formProyecto.markAllAsTouched();
    }

  }

  salirProyecto(){
    this.formProyecto.reset();
  }

}
