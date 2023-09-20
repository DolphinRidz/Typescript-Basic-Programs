enum Days{
    // mon=10,tue,wed
    thu="Thursday",fri="Friday"
}

// let weekday:Days;
// weekday=Days.thu
function weekday(day:Days){
    return day
}

console.warn(weekday(Days.fri));