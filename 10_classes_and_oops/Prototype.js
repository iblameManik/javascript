// let myName = "Manik     "
// let myChannel = "Earn     "

// console.log(myName.trim().length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.manik = function(){
    console.log(`Manik is present in all objects`);
}
Array.prototype.heyManik = function(){
    console.log(`Manik is present in all Arrays`);
}
// heroPower.manik();
myHeroes.manik();
myHeroes.heyManik();
// heroPower.heyManik();

// Inheritance

const User = {
    name: "chai",
    email: "chai@js"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:  false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Manik       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);   
}
anotherUsername.trueLength()
"Manik".trueLength();
"IcedTea".trueLength();