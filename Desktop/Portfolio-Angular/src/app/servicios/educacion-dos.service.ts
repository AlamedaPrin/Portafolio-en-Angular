import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EducacionDos } from '../Entidades/educacionDos';

@Injectable({
  providedIn: 'root'
})
export class EducacionDosService {

  constructor(private http:HttpClient) { }

  obtenerDatosEducacionDos(): Observable<any> {
    return this.http.get('./assets/data/educacionDos.json');
  } 

  editarDatosEducacionDos(educacionDos: EducacionDos): Observable<any> {
    return this.http.post('http://localhost:3000/posts', educacionDos);
  }

}
