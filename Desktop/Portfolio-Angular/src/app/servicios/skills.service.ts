import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/Entidades/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url:string="http://localhost:8080/acerca";

  constructor(private http: HttpClient) {}

  getListSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url);
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
