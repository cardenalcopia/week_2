 export class Person
{
constructor( public name : string,public age : number, private address: string)
{
    this.name = name;
    this.age= age;
    this.address=address;
}
printName():void
{
    console.log(this.name);
}
yearOfBirth(currentYear:number):number
{
  let resultado :number;
  resultado = currentYear-this.age;
    return  resultado;
}
public setAddress(adress:string):void
{
    this.address=adress;
}
public getAddress():string
{
    return this.address;
}
}
let nombre =new Person("Roberto",36,"Madrid");
nombre.printName();
console.log(nombre.yearOfBirth(2022));
nombre.setAddress("Cadiz");
console.log (nombre);
console.log(nombre.getAddress());
