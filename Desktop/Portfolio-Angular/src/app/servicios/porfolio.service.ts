import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http: HttpClient) { }

   obtenerDatos():Observable<any>{
     return this.http.get('./assets/data/data.json');    
   }  

   obtenerDatosEducacion():Observable<any>
   {
     return this.http.get('./assets/data/educación.json')
   }

   obtenerDatosProyectos():Observable<any>
   {
     return this.http.get('./assets/data/proyectos.json')
   }
}

 