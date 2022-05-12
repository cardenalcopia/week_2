import { Person } from "./person";
let persona1 = new Person("Ana",34,"cadiz");
persona1.printName();
console.log(persona1.yearOfBirth(2022));
persona1.setAddress("San Fernando");
console.log (persona1);
console.log(persona1.getAddress());