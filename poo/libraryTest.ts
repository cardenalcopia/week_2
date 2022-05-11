import { Book } from "./book";
import { library } from "./Typescript/library";
let libros =[new Book("El señor de los anillos",1000,"tolk-123","Tolkien","laquesea"),new Book("El lazarillo",200,"torme-345","Anonimo","barco de vapor")];
let libreria = new library(libros,"madrid","roberto");
console.log(libreria.getBooks());
console.log (libreria.toString());
console.log("El numero de libros en la biblioteca son : "+libreria.getNumberOfBooks());
console.log(libreria.findByAuthor("Anonimo"));

