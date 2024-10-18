class Animal{
    constructor(name,legcount,speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks =speaks; 
    }
    static myType(){
        console.log("ANIMAL")
    }
      speak(){
        console.log("hi there " + this.speaks);
    }
    
 } 
 console.log(Animal.myType())
 let dog = new Animal("dog",4,"bhow bhow");//create object
 dog.speak();//call function to object