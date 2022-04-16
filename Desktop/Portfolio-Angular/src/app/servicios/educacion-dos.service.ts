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

  editarDatosEducacionDos(educacionDos: EducacionDos): Observable<any> {
    return this.http.post('http://localhost:3000/posts', educacionDos);
  }

  eliminarDatosEducacionDos(id: number): Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }

}
