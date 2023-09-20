"use strict";
class Parent {
    constructor() {
        this.name = "TypeScript";
    }
    setName(name) {
        this.name = name;
    }
}
class Child extends Parent {
    getname() {
        return this.name;
    }
}
let c1 = new Child();
c1.setName("Riya");
console.log(c1.getname());
