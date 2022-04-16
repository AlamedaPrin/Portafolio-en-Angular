export class Persona{

    id: number;
    fullName:string;   
    position:string;
    ubication:string;
    url:string;

    constructor(id: number, fullName:string, position:string, ubication:string, url:string) 
    {
        this.id = id;
        this.fullName=fullName;       
        this.position=position;
        this.ubication=ubication;
        this.url=url;
    }
}