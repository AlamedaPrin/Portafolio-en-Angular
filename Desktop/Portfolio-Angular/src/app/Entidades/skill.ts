export class Skills {

    public id: number;
    public tipoDeSkill: string;
    public score: number;

    constructor(id: number, tipoDeSkill: string, score: number) 

    {
        this.id = id;
        this.tipoDeSkill = tipoDeSkill;
        this.score = score;
    }
    
}