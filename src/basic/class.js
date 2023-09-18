var func = /** @class */ (function () {
    function func(name) {
        this.name = "Riya";
        this.name = name;
    }
    func.prototype.getName = function () {
        return this.name;
    };
    return func;
}());
var a = new func("Rids");
console.warn(a.getName());
