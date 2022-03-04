import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../Entidades/acerca';

@Injectable({
  providedIn: 'root',
})
export class AcercaService {
  constructor(private http: HttpClient) {}

  obtenerDatosAcerca(): Observable<any> {
    return this.http.get('./assets/data/acerca.json');
  }

  editarDatosAcerca(acerca: Acerca): Observable<any> {
    return this.http.post('http://localhost:3000/posts', acerca);
  }
}
