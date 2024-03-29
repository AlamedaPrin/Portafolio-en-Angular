import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entidades/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {

  url:string="https://back-porfo.herokuapp.com/experiencia"


  constructor(private http: HttpClient) {}

  getListExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url);
  }

  updateExperiencia(id:number,experiencia:any): Observable<any> {
    return this.http.put(this.url+"/"+id,experiencia);
  }

  saveExperiencia(experiencia:any): Observable<any> {
    return this.http.post(this.url,experiencia);
  }

  deleteExperiencia(id:number): Observable<any> {
    return this.http.delete(this.url+"/"+id)
  }
}
