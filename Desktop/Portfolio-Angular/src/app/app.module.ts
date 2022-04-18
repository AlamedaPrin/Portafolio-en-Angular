import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaEducacionComponent } from './componentes/experiencia-educacion/experiencia-educacion.component';
import { CualidadesComponent } from './componentes/cualidades/cualidades.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PorfolioService } from './servicios/porfolio.service'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EducacionDosComponent } from './educacion-dos/educacion-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaEducacionComponent,
    CualidadesComponent,
    FooterComponent,
    EducacionComponent,
    EducacionDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
