import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entidades/persona';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {

  url:string="http://localhost:8080/persona";

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<Persona> {
    return this.http.get<Persona>(this.url+"/1");
  }

  editarDatosPersona(persona: Persona): Observable<any> {
    return this.http.put(this.url, persona);
  }
}
