import { Movie } from "./imdb";
import { imdb } from "./imdbTest2";
let pelicula1 = new Movie("Fight club",1999,"Brad Pitt ","USA","flinch","flinch","english","Netflix",false,"Brad pitt","coppola","Fox","Action");
let pelicula2 = new Movie("El señor de los anillos",2002,"Ian Mcklein y Vigo Mortensen","USA","Peter Jackson","Tolkien","English","HBO",false,"Frodo","Warner","Warner","Adventure");
let imdb1 = new imdb([pelicula1,pelicula2]);
