export class Book 
{
constructor(private title :string,private nPages:number,private isbn: string,private author : string,private editorial:string)
{
    this.title=title;
    this.nPages=nPages;
    this.isbn=isbn;
    this.editorial=editorial;

}
public setTitle(titulo:string):void
{
    this.title = titulo;

}
public setnPages(paginas:number):void
{
    this.nPages = paginas;
    
}
public setisbn(codigo:string):void
{
    this.isbn = codigo;
    
}
public setauthor(autor:string):void
{
    this.author = autor;
    
}
public setEditorial(edit:string):void
{
    this.editorial = edit;
    
}
public getTitle ():string
{
    return this.title;
}
public getnPages ():number
{
    return this.nPages;
}
public getisbn():string
{
    return this.isbn;
}
public getauthor():string
{
    return this.author;
}
public geteditorial():string
{
    return this.editorial;
}
public toString():string
{
   let resultado:string; 
   
   {
      resultado = "Title -"+ this.title +"\n nPAges -"+this.nPages+ "\n isbn -"+this.isbn +"\n author -"+this.author+"\n editorial -"+this.editorial;
    
   }
   return resultado;
}
}
//let libro = new book("introduccion a Javascipt",233,"2344433-bc2333","Joseph Smith","Now editions");
//console.log(libro.toString());