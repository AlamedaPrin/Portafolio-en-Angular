export class Persona{

    id: number;
    fullName:string;   
    position:string;
    ubication:string;
    image:string;

    constructor(id: number, fullName:string, position:string, ubication:string, image:string) 
    {
        this.id = id;
        this.fullName=fullName;       
        this.position=position;
        this.ubication=ubication;
        this.image=image;
    }
}