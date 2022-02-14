import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosProyectos:PorfolioService) { }

  ngOnInit(): void {  
    this.datosProyectos.obtenerDatosProyectos().subscribe(data => {
      console.log(data);
      this.miPorfolio = data;
    })
    

  }

}
