export{}
interface userType{
    name : string,
    age : number,
    getName:()=>string
}

let user: userType = {
    name: "Riya",
    age: 26,
    getName: function(){
        return "Typescript";
    }
}

console.warn(user.getName());