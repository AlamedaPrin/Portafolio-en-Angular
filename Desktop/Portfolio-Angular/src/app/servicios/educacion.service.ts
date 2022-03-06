import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Entidades/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private http: HttpClient) {}

  obtenerDatosEducacion(): Observable<any> {
    return this.http.get('./assets/data/educacion.json');
  } 

  editarDatosEducacion(educacion: Educacion): Observable<any> {
    return this.http.post('http://localhost:3000/posts', educacion);
  }
}
