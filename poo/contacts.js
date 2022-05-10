import { Person } from "./person.js";
export class Contacts
{
    constructor ()
    {
        this.myArray= [new Person("rojo",1.80,80,"Roberto","hombre",1985,["videojuegos","futbol","musica"]),new Person("negro",1.70,80,"felix","hombre",1962,["politica","futbol","redes"])];

        
    }
    printPerson()
    {
        console.log (this.myArray);

    }
}
let contactos = new Contacts();
contactos.printPerson();