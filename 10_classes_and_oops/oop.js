const user = {
    username: "manik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databae");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}

const userOne = new User("Manik", 12, true);
const userTwo = new User("ManikMahajan", 11, false);
console.log(userOne);
// console.log(userOne.constructor);

console.log(userTwo);

//When new keyword is used than an empty object is created which is called instance.
//Constructor function call due to new keyword and it packs all the methods and arguments.
// all the methods and arguments are packed in this keyword.
// you get in the function in last.