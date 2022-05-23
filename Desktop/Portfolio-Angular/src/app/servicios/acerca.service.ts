import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AcercaDe } from '../Entidades/acerca';

@Injectable({
  providedIn: 'root',
})
export class AcercaService {

  url:string="https://back-porfo.herokuapp.com/acerca";

  constructor(private http: HttpClient) {}

  obtenerDatosAcerca(): Observable<any>{
    return this.http.get(this.url+"/1");
  }

  editarDatosAcerca(acerca: AcercaDe): Observable<any> {
    return this.http.put(this.url, acerca);
  }

  crearAcercaDe(acerca: AcercaDe): Observable<any> {
    return this.http.post(this.url, acerca);
  }

  eliminarAcercaDe(id:number): Observable<any> {
   return this.http.delete(this.url+"/"+id)
  }


}


