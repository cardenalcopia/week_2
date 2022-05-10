export class Person
{
    constructor(parametro1,altura,peso,nombre,sexo,yearOfBirth,hobbies)
    {
        this.pelo = parametro1;
        this.peso = peso;
        this.altura = altura;
        this.nombre = nombre;
        this.sexo = sexo;
        this.yearOfBirth = yearOfBirth;
        this.hobbies= hobbies;

    }

    
    // Metodos
    calImc()
    {
        return this.peso /(Math.pow(this.altura,2));

    }
    calEdad()
    {
        return 2022-this.yearOfBirth;
    }
    printAll()
    {
       let result ="";
        for (let v in roberto )
       {
            console.log(`${v}-${roberto[v]}`);
       }
    }
    printHobbies()
    {
        console.log (this.hobbies);
    }

}

let roberto = new Person("rojo",1.80,80,"Roberto","hombre",1985,["videojuegos","futbol","musica"]);
console.log (roberto.calImc());
console.log("La edad es "+roberto.calEdad());
roberto.printAll();
roberto.printHobbies();



