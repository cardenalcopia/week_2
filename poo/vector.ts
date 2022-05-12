
export class Vector
{
    private elements :number[]=[];
    constructor(n:number,k:number)
    {
        let num:number;
        for(let i =0;i<n;i++)
        {
            num =Math.round(Math.random()*k);
            this.elements.push(num);
        }
  
    
    }
    public print()
    {
       console.log(this.elements);
    }
    public add(v1:Vector):Vector
    {
        let num:number []=[];
        for ( let i=0;i<this.elements.length;i++)
        {
            num.push(this.elements[i]+v1.elements[i]);   

        }
       let vector2 =new Vector(this.elements.length,1);
      vector2.elements=num;
      return vector2;
    }
    public subs(v1:Vector):Vector
    {
        let num:number []=[];
        for ( let i=0;i<this.elements.length;i++)
        {
            num.push(this.elements[i]-v1.elements[i]);   

        }
       let vector2 =new Vector(this.elements.length,1);
      vector2.elements=num;
      return vector2;
    }
    public multi(v1:Vector):Vector
    {
        let num:number []=[];
        for ( let i=0;i<this.elements.length;i++)
        {
            num.push(this.elements[i]*v1.elements[i]);   

        }
       let vector2 =new Vector(this.elements.length,1);
      vector2.elements=num;
      return vector2;
    }
    public multNumber(n:number):Vector
    {
        let num :number[]=[];
        for (let i=0;i<this.elements.length;i++)
        {
            num.push(this.elements[i]*n);
           
        }
         let vector2 =new Vector(this.elements.length,1);
        vector2.elements=num;
        return vector2;
    }

    
}

