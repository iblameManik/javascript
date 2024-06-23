// singleton - Object created from constructor
// Object.create

//When we create by literals than it is not singleton

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Manik",
    "full name": "Manik Mahajan",
    [mySym]: "mykey1",
    age: 18,
    location: "Pathankot",
    email: "manik@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturaday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "manik@chatgpt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "manik@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());