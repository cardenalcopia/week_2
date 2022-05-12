import { Person } from "./person";
export class contacs 
{
   people :Person[];

    constructor()
    {
        this.people = [new Person("Mar",60,"herencia"),new Person("Felix",59,"toledo")];
    
    }
    public printCalendar()
    {
        console.log(this.people);
    }
}
let contacto = new contacs();
contacto.printCalendar();
