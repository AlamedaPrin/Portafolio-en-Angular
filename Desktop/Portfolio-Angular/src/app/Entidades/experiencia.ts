export class Experiencia {

    id: number;
    experienciaUno:string;
    experienciaDos:string; 
    experienciaTres:string;
    experienciaCuatro:string; 
    idPersona:number;    
  
    constructor(id:number, experienciaUno:string, experienciaDos:string, experienciaTres:string, experienciaCuatro:string, idPersona:number) 

    {
        this.id = id;
        this.experienciaUno = experienciaUno;
        this.experienciaDos = experienciaDos; 
        this.experienciaTres = experienciaTres; 
        this.experienciaCuatro = experienciaCuatro;   
        this.idPersona = idPersona; 
        
    }
}