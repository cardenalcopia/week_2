import { Book } from "../book";
export class library 
{
   books1:Book[];

    constructor(private books:Book[],private addres :string,private manager : string)
    {
        this.books= books;
        this.addres=addres;
        this.manager= manager;
       
    }
    public getBooks ():Book[]
    {
        return this.books;
    }
    public getAddress ():string
    {
        return this.addres;
    }
    public getManager ():string
    {
        return this.manager;
    }
    public toString ():string
    {
        let resultado :string;
        for (let i =0; i<this.books.length;i++)
        {
            resultado+= "Book "+ (i+1)+":\n"+ this.books[i]+"\n";
        }
        return resultado;
    }
    public getNumberOfBooks():number
    {
        return this.books.length;
    }
    public findByAuthor(autho:string):Book[]
    {
        
        let miautor:Book[] =[]
        for (let i=0; i<this.books.length;i++)
        {
           if(this.books[i].getauthor() == autho)
           {
             miautor.push(this.books[i]);


           }

        }
        
    return miautor;
}

}
