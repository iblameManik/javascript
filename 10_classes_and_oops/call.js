function setUsername(username){
    //complex DB Calls
    this.username = username;
    console.log("called");
    
}

function createUser(username,password,email){
    setUsername.call(this, username)
    this.password=password
    this.email=email
}

const chai = new createUser("chai", "124", "chai@meta.com")
console.log(chai);
