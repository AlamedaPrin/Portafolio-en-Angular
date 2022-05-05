import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/Entidades/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url:string="http://localhost:8080/skills";

  constructor(private http: HttpClient) {}

  getListSkill(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.url);
  }

  updateSkill(id:number, skill:any):Observable<any> {
    return this.http.put(this.url +"/"+id, skill);
  }

  saveSkill(skill:any):Observable<any> {
    return this.http.post(this.url, skill);
  }

  deleteSkill(id:number):Observable<any> {
    return this.http.delete(this.url+"/"+id);
  }  
    
  }
