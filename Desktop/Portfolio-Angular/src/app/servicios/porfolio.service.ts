import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entidades/persona';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {

  url:string="https://back-porfo.herokuapp.com/persona";

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<Persona> {
    return this.http.get<Persona>(this.url+"/1");
  }

  editarDatosPersona(persona: Persona): Observable<any> {
    return this.http.put(this.url, persona);
  }

  crearPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona)
  }
}
