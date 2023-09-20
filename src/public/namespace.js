"use strict";
/// <reference path="./namespaceSecond.ts" />
var UserUtils;
(function (UserUtils) {
    class Users extends UserUtils.Parent {
        getName() {
            return this.name;
        }
    }
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
let user = new UserUtils.Users();
user.setName("Riya");
console.warn(user.getName());
