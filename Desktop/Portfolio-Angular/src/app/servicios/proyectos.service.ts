import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Entidades/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  // paso el valor 'http' como parametro del constructor para poder luego usarlo como atributo y utlizar sus métodos
  constructor(private http: HttpClient) {}

  url:string = "http://localhost:8080/proyecto";

  obtenerDatosProyectos(): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url+"/1");
  };

  editarDatosProyectos(proyecto:Proyecto):Observable<any> {
  return this.http.post('http://localhost:3000/posts', proyecto)
 }

}
 