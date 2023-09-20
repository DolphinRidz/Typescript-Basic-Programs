"use strict";
class User {
    // name = "";
    // age = 0;
    // email = "";
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        // this.name = name;
        // this.age = age;
        // this.email = email;
    }
    display() {
        console.log(this.name, this.age, this.email);
    }
}
let u1 = new User("Luffy", 20, "MonkeyDLuffy@eastsea.com");
u1.display();
