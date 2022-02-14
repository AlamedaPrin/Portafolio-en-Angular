import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPorfolio:any;
  form:FormGroup;
  usuarioAutenticado:boolean = true; // por defecto debe estar en false

  constructor (private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) { 
    this.form=this.miFormBuilder.group({
      fullName: ['',[Validators.required, Validators.minLength(5)]],
      position: ['',[Validators.required]],
      ubication: ['',[Validators.required]],
      url: ['https://',[Validators.required]],
    })
  }    
  
  get fullName()
  {   
    return this.form.get("fullName");
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    });
  }

  guardarEncabezado(){    
    if(this.form.valid){     
      this.form.reset(); // esto es para resetear el formulario despues de darle a guardar
      document.getElementById("cerrarModalEncabezado")?.click(); // esto es para que despues de darle a guardar se cierre la ventana. Copié la misma funcionalida de bootstrap que tenía el boton "cerrar"
    }
    else 
  {
    
    this.form.markAllAsTouched();
  }


  }
}
