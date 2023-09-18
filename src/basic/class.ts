class func{
    name="Riya";
    constructor (name:string){
        this.name=name
    }
    getName(){
        return this.name;
    }
}

let a= new func("Rids");
console.warn(a.getName())