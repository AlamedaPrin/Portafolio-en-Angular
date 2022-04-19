import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionDos } from '../Entidades/educacionDos';

@Injectable({
  providedIn: 'root'
})
export class EducacionDosService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:8080/educacion';

  obtenerDatosEducacionDos(): Observable<EducacionDos[]> {
    return this.http.get<EducacionDos[]>(this.url);
  } 

  editarDatosEducacionDos(educacionDos:any):Observable<any> {
    return this.http.put(this.url + "/",educacionDos);
  }

  eliminarDatosEducacionDos(id: number): Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }

  crearEducacionDos(educacion: any): Observable<any>{
    return this.http.post(this.url, educacion)
  }

}
