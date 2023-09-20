function users<T>(data:T):T{
    return data
}

console.warn(users({name:"Luffy",age:20}).age)