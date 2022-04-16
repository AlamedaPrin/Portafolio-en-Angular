import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../Entidades/acerca';

@Injectable({
  providedIn: 'root',
})
export class AcercaService {

  url:string="http://localhost:8080/acerca";

  constructor(private http: HttpClient) {}

  obtenerDatosAcerca(): Observable<AcercaDe> {
    return this.http.get<AcercaDe>(this.url+"/1");
  }

  editarDatosAcerca(acerca: AcercaDe): Observable<any> {
    return this.http.put(this.url, acerca);
  }
}
