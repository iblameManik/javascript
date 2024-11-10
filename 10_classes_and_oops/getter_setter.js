class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }

    get password(){
        return `${this._password}manik`;
    }

    set password(value){
        this._password = value;
    }
}

const manik = new User("m@manik.ai","abc");
console.log(manik.password);
console.log(manik.email);

