import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  // paso el valor 'http' como parametro del constructor para poder luego usarlo como atributo y utlizar sus métodos
  constructor(private http: HttpClient) { }

  obtenerDatosProyectos():Observable<any>
  {
   return this.http.get('./assets/data/proyectos.json')  
  }

  
}
