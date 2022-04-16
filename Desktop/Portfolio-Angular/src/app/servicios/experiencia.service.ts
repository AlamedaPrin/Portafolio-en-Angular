import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entidades/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {

  url:string="http://localhost:8080/experiencia"


  constructor(private http: HttpClient) {}

  obtenerDatosExperiencia(): Observable<any> { // este método sirve para bindear los datos de este json en el componente
    return this.http.get(this.url+"/1");
  }

  editarDatosExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put(this.url, experiencia);
  }
}
