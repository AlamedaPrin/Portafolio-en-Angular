export class EducacionDos {

    id: number;
    school: string;
    career: string;
    img: string;
    comienzo:string;
    fin:string;
    idPersona: number;

   constructor(id: number, school:string,career:string, img:string, comienzo:string, fin:string, idPersona:number)

    {
        this.id = id;
        this.school = school;
        this.career = career;
        this.img = img;
        this.comienzo = comienzo;
        this.fin = fin;
        this.idPersona = idPersona
         
    }


}