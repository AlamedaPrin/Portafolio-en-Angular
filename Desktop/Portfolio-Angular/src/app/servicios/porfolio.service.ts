import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }

   obtenerDatos():Observable<any>{
     return this.http.get('./assets/data/data.json');    
   }    

   editarDatosPersona(persona:Persona):Observable<any>{
     return this.http.post('http://localhost:3000/posts', persona)
   }
}



 