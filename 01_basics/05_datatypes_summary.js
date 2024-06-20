//  Based on memory storage and access data types are of two types

// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;//undefined
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);
// const bigNumber = 3456454854824854854854n
// console.log(typeof bigNumber);

//Reference (Non-Primitive)

//Array, Objects, Functions

const heroes = ["batman", "superman", "dojacat"];
let myObj = {
    name: "Manik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heroes);