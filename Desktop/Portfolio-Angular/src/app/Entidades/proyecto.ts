export class Proyecto {
  id: number;
  proyecto: String;
  idPersona: number;
  constructor(id:number, proyecto: String, idPersona: number) {
    this.id = id;
    this.proyecto = proyecto;
    this.idPersona = idPersona;
  }
}
