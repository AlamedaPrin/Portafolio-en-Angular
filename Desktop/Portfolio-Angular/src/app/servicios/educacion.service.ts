import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Entidades/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private http: HttpClient) {}

  url:string = 'http://localhost:8080/educacion';

  getListEducacion(): Observable<Educacion[]> {  
    return this.http.get<Educacion[]>(this.url);
  } 

  updateEducacion(id:number, educacion:any):Observable<any> {
    return this.http.put(this.url +"/"+id, educacion);
  }

  deleteEducacion(id:number): Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }

  saveEducacion(educacion: any): Observable<any>{
    return this.http.post(this.url,educacion)
  }

}
