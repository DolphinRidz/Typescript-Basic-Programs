"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.test = function () {
        console.warn("Test function working");
    };
    return Hello;
}());
var a1 = new Hello();
a1.test();
