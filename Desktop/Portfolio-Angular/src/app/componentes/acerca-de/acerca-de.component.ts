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
  form: FormGroup;
  formAgregarAcerca: FormGroup;
  usuarioAutenticado: boolean = true; // Se muestran los botones. Por defecto debe estar en false

  constructor(
    private miServicio: AcercaService,
    private miFormBuilder: FormBuilder
  ) {
    this.form = this.miFormBuilder.group({
      acercaDe: [''],      
    });
    this.formAgregarAcerca = this.miFormBuilder.group({
      acerc: [''],
    })
  }

  get acercaDe() {
    return this.form.get('acercaDe');
  }

  ngOnInit(): void {
    this.obtenerAcerca();
  }

  obtenerAcerca() {
    this.miServicio.obtenerDatosAcerca().subscribe(data => {
      this.miPorfolioAcerca = data;
    }, error => {
      console.log(error);
    });
  }



  agregarAcercaDe() { 

    let id = this.miPorfolioAcerca.acerca
    let acerca = this.miPorfolioAcerca.acerca
         

    let acercaNueva = new AcercaDe (id, acerca) 

    this.miServicio.crearAcercaDe(acercaNueva).subscribe(data => {
     this.miPorfolioAcerca = acercaNueva;
    })     
  }
  
  

 
     

  guardarAcercaDe() {
    if (this.form.valid) {
      
      let acercaDe = this.form.controls['acercaDe'].value;

      let acercaEditar = new AcercaDe (this.miPorfolioAcerca.id,acercaDe);

      this.miServicio.editarDatosAcerca(acercaEditar).subscribe(
        (data) => {
          this.miPorfolioAcerca = acercaEditar;
          this.form.reset();
          document.getElementById('cerrarModalAcerca')?.click();
        },
        (error) => {
          alert(
            'No se pudo actualizar el registro. Por favor, intente nuevamente o contacte al administrador'
          );
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

  salirAcercaDe() {
    this.form.reset();
  }

  mostrarDatosAcerca() {
    this.form.controls['acercaDe'].setValue(this.miPorfolioAcerca.acerca);
          
  }
 
  

  

    

  
}
