import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators, } from '@angular/forms';   
import { AcercaDe } from 'src/app/Entidades/acerca';
import { AcercaService } from 'src/app/servicios/acerca.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  miPorfolioAcerca!: AcercaDe;
  formAcerca: FormGroup;
  formAgregarAcerca: FormGroup;
  usuarioAutenticadoAcerca: boolean = true; // Se muestran los botones. Por defecto debe estar en false

  constructor(
    private datosAcercaPorfolio: AcercaService,
    private acercaFormBuilder: FormBuilder
  ) {
    this.formAcerca = this.acercaFormBuilder.group({
      acercaDe: [''],      
    });
    this.formAgregarAcerca = this.acercaFormBuilder.group({
      acerc: [''],
    })
  }

  get acercaDe() {
    return this.formAcerca.get('acercaDe');
  }

  ngOnInit(): void {
    this.datosAcercaPorfolio.obtenerDatosAcerca().subscribe((data) => {
      console.log(data);
      this.miPorfolioAcerca = data;
    });
  }

  agregarAcercaDe() { 
    if (this.formAgregarAcerca.valid) {

    let agregarAcer = this.formAgregarAcerca.controls['acerc'].value;

    let acercaNuevo = new AcercaDe (agregarAcer); 

    this.datosAcercaPorfolio.crearAcercaDe(acercaNuevo).subscribe(data => {
      this.miPorfolioAcerca = acercaNuevo;      
      document.getElementById('cerrarModalAgregarAcerca')?.click();      
    })
  }
  }     


  eliminarAcercaDe(){}   
     

  guardarAcercaDe() {
    if (this.formAcerca.valid) {
      
      let acercaDe = this.formAcerca.controls['acercaDe'].value;

      let acercaEditar = new AcercaDe (acercaDe);

      this.datosAcercaPorfolio.editarDatosAcerca(acercaEditar).subscribe(
        (data) => {
          this.miPorfolioAcerca = acercaEditar;
          this.formAcerca.reset();
          document.getElementById('cerrarModalAcerca')?.click();
        },
        (error) => {
          alert(
            'No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador'
          );
        }
      );
    } else {
      this.formAcerca.markAllAsTouched();
    }
  }

  salirAcercaDe() {
    this.formAcerca.reset();
  }

  mostrarDatosAcerca() {
    this.formAcerca.controls['acercaDe'].setValue(this.miPorfolioAcerca.acerca);
          
  }

  mostrarDatosAgregarAcerca(){
    this.formAgregarAcerca.controls['acerc'].setValue(this.miPorfolioAcerca.acerca);
  }
  

  eliminarAcerca() {
    document.getElementById('campoAcerca')?.remove();
  }

    

  
}
