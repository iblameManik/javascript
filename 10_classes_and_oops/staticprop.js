class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return '123';
    }
}

const Manik = new User("Manik");
// console.log(Manik.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const iPhone = new Teacher("Apple","iPhone16@google.com")
iPhone.logMe();
console.log(iPhone.createId());

