import { Vector } from "./vector";
let miarray = new Vector(5,10);
miarray.print();
let miarray2 = new Vector(5,4);
miarray2.print();
let vector3 = new Vector (1,1)
vector3 =miarray.add(miarray2);
vector3.print();
vector3=miarray.subs(miarray2);
vector3.print();
vector3=miarray.multi(miarray2);
vector3.print();
vector3=miarray.multNumber(5);
vector3.print();