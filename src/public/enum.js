"use strict";
var Days;
(function (Days) {
    // mon=10,tue,wed
    Days["thu"] = "Thursday";
    Days["fri"] = "Friday";
})(Days || (Days = {}));
// let weekday:Days;
// weekday=Days.thu
function weekday(day) {
    return day;
}
console.warn(weekday(Days.fri));
