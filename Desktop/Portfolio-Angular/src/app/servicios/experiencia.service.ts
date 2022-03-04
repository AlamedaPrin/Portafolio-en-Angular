import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entidades/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  constructor(private http: HttpClient) {}

  obtenerDatosExperiencia(): Observable<any> { // este método sirve para bindear los datos de este json en el componente
    return this.http.get('./assets/data/experiencia.json');
  }

  editarDatosExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post('http://localhost:3000/posts', experiencia);
  }
}
