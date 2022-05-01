export class Proyecto {

  id: number;
  tipoDeProyecto: String;
  idPersona: number;

  constructor(id:number, tipoDeProyecto: String, idPersona: number)

   {
    this.id = id;
    this.tipoDeProyecto = tipoDeProyecto;
    this.idPersona = idPersona;
   }
   
}
