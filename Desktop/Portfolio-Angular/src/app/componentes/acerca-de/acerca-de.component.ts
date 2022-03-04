import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Acerca } from 'src/app/Entidades/acerca';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  miPorfolioAcerca:any;
  formAcerca:FormGroup;
  usuarioAutenticadoAcerca:boolean = true; // Se muestran los botones. Por defecto debe estar en false

  constructor(private datosAcercaPorfolio:AcercaService, private acercaFormBuilder:FormBuilder) {
    this.formAcerca = this.acercaFormBuilder.group({
      AcercaDe:['', [Validators.minLength(20)]]
    })
   }

   get AcercaDe()
   {
     return this.formAcerca.get("AcercaDe"); 
   }

  ngOnInit(): void { 
    this.datosAcercaPorfolio.obtenerDatosAcerca().subscribe(data => {
    console.log(data);
    this.miPorfolioAcerca=data;
  });
  }



  guardarAcercaDe(){    
    if (this.formAcerca.valid){ 

       let AcercaDe = this.formAcerca.controls["AcercaDe"].value;

       let acercaEditar = new Acerca (AcercaDe);

      this.datosAcercaPorfolio.editarDatosAcerca(acercaEditar).subscribe(data => {
        this.miPorfolioAcerca=acercaEditar;
        this.formAcerca.reset();   
        document.getElementById("cerrarModalAcerca")?.click();
      },
      error => {
      alert("No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador")
    });
      
      
  }
  else 
    {      
    this.formAcerca.markAllAsTouched();
    }

}



salirAcercaDe(){ 
  this.formAcerca.reset();   
}


mostrarDatosAcerca(){
  this.formAcerca.controls["AcercaDe"].setValue(this.miPorfolioAcerca.AcercaDe);
}

eliminarAcerca(){

  document.getElementById("acercaId")?.remove();
  
}
}
