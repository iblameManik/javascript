const user = {
    username: "manik",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="manik"
//     console.log(this.username);
// }
// chai();

// const chai = function () {
//     let username="manik"
//     console.log(this.username);
// }

const chai =  () => {
    let username="manik"
    console.log(this);
}

// chai()

// () => {} // arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "manik"})


console.log(addTwo(3,4));

// const myArr =[2, 5, 3, 7, 8]
// myArr.forEach()