import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cualidades',
  templateUrl: './cualidades.component.html',
  styleUrls: ['./cualidades.component.css']
})
export class CualidadesComponent implements OnInit {

  usuarioAutenticado:boolean = true; // por defecto debe estar en false

  constructor() { }

  ngOnInit(): void {
  }

 

  

}
