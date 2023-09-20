"use strict";
var UserUtils;
(function (UserUtils) {
    class Parent {
        setName(name) {
            return this.name = name;
        }
    }
    UserUtils.Parent = Parent;
})(UserUtils || (UserUtils = {}));
