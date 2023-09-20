/// <reference path="./namespaceSecond.ts" />
namespace UserUtils{
    export class Users extends Parent implements userType{
        getName(){
            return this.name
        }
    }
}

let user = new UserUtils.Users();
user.setName("Riya");
console.warn(user.getName());