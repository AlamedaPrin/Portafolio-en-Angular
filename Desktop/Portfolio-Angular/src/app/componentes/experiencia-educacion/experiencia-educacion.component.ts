import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css']
})
export class ExperienciaEducacionComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosEducacionPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosEducacionPorfolio.obtenerDatosEducacion().subscribe(data => {
      console.log(data);
      this.miPorfolio=data;
    })
  }

}
