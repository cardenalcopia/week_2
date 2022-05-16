export class Professional 
{
    constructor(public name:string,public age:number,public genre:string,public weight:number,public height:number,public haircolor:string,public eyecolor:string,public race:string,public isRetire:boolean,public nationality:string,public oscarsNumber:number,public profession:string)
    {
        this.name=name;
        this.age=age;
        this.genre=genre;
        this.weight=weight;
        this.height=height;
        this.haircolor=haircolor;
        this.race=race;
        this.isRetire=isRetire;
        this.nationality=nationality;
        this.oscarsNumber=oscarsNumber;
        this.profession=profession;
    }
    public printProfessional ()
    {
        console.log(this.name+ "\n"+this.age+ "\n"+this.genre+ "\n"+ this.weight+ "\n"+this.height+ "\n"+this.haircolor+ "\n"+this.eyecolor+ "\n"+this.race+ "\n"+this.isRetire+ "\n"+this.nationality+ "\n"+this.oscarsNumber+ "\n"+this.profession+ "\n")
    }
}