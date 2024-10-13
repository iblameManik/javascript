class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New Course was added by ${this.username}`); 
    }
}

const Raju = new Teacher("Raju","Raju@cgc.in","Raju123");
Raju.addCourse();

const masalaChai = new User("MasalaChai");
// masalaChai.addCourse();
masalaChai.logMe();
Raju.logMe();

// console.log(Raju === masalaChai);
// console.log(Raju === Teacher);
// console.log(Raju instanceof Teacher);
console.log(Raju instanceof User);
// console.log(masalaChai instanceof User);
console.log(masalaChai instanceof Teacher);





