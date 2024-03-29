import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Entidades/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

  url:string = "https://back-porfo.herokuapp.com/proyecto";
  
  constructor(private http: HttpClient) {}  

  getListProyectos(): Observable<Proyecto[]> {               
    return this.http.get<Proyecto[]>(this.url);
  };

  updateProyecto(id:number,proyecto:any):Observable<any> { 
  return this.http.put(this.url+"/"+id, proyecto);
 }

 saveProyecto(proyecto:any): Observable<any> {
   return this.http.post(this.url, proyecto);
 }

 deleteProyecto(id:number): Observable<any> {
   return this.http.delete(this.url+"/"+id);
 }

}
 