import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioAutenticado = this.authService.usuarioAutenticado();
  }

  logout(): void {
    this.authService.logout();
    this.usuarioAutenticado = false;
    window.location.reload();
  }

}
