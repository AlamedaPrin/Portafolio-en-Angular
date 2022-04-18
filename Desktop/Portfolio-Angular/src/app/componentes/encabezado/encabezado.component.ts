import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Entidades/persona';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  miPorfolioEncabezado!: Persona;
  form: FormGroup;
  usuarioAutenticado: boolean = true; // por defecto debe estar en false

  constructor(
    private datosPorfolio: PorfolioService,
    private miFormBuilder: FormBuilder
  ) {
    this.form = this.miFormBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      position: ['', [Validators.required]],
      ubication: ['', [Validators.required]],
      url: ['https://'],
    });
  }

  get fullName() {
    return this.form.get('fullName');
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.miPorfolioEncabezado = data;
    });
  }

  guardarEncabezado() {
    if (this.form.valid) {
      
      let fullName  = this.form.controls['fullName'].value;
      let ubication = this.form.controls['ubication'].value;
      let position  = this.form.controls['position'].value;
      let url       = this.form.controls['url'].value;

      let personaEditar = new Persona(this.miPorfolioEncabezado.id, fullName, ubication, position, url)

      this.datosPorfolio.editarDatosPersona(personaEditar).subscribe(
        (data) => {
          this.miPorfolioEncabezado = personaEditar;
          this.form.reset(); // esto es para resetear el formulario despues de darle a guardar
          document.getElementById('cerrarModalEncabezado')?.click(); // esto es para que despues de darle a guardar se cierre la ventana. Copié la misma funcionalida de bootstrap que tenía el boton "cerrar"
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

  mostrarDatosEncabezado() {
    
    this.form.controls['position'].setValue(this.miPorfolioEncabezado.position);
    this.form.controls['fullName'].setValue(this.miPorfolioEncabezado.fullName);
    this.form.controls['ubication'].setValue(this.miPorfolioEncabezado.ubication);
    this.form.controls['url'].setValue(this.miPorfolioEncabezado.url);
    
  }

  eliminarEncabezado(){
    document.getElementById('encabId')?.remove();
  }
}
