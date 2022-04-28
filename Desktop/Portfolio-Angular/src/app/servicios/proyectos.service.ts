import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Entidades/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  
  constructor(private http: HttpClient) {}

  url:string = "http://localhost:8080/proyecto";

  obtenerDatosProyectos(): Observable<Proyecto> {               //funciona
    return this.http.get<Proyecto>(this.url+"/1");
  };

  editarDatosProyectos(proyecto:Proyecto):Observable<Proyecto> { //funciona
  return this.http.put<Proyecto>(this.url, proyecto)
 }

 crearProyecto(proyecto:Proyecto):Observable<Proyecto> {
   return this.http.post<Proyecto>(this.url, proyecto);
 }

 eliminarProyecto(id: number): Observable<any> {
   return this.http.delete(this.url+"/"+id)
 }

}
 