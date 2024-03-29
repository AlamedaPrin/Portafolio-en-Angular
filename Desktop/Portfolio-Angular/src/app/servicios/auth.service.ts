import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginDto } from '../Entidades/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string="https://back-porfo.herokuapp.com/login"

  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(this.url, credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "franco");
      })
    );
  }
  
  public logout() {
    sessionStorage.removeItem("user");
  }
  
  public usuarioAutenticado():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
