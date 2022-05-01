export class Educacion {

    id: number;
    school: string;
    career: string;    
    comienzo:string;
    fin:string;
    imgEdu: string;
    idPersona: number;

    constructor(id: number, school:string,career:string, imgEdu:string, comienzo:string, fin:string, idPersona:number) 

    {
        this.id = id;
        this.school = school;
        this.career = career;
        this.imgEdu = imgEdu;
        this.comienzo = comienzo;
        this.fin = fin;
        this.idPersona = idPersona
        
    }
}