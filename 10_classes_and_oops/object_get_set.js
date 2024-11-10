const User={
    _email: "m@manik.com",
    _password: "manik",


    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

const tea = Object.create(User);
console.log(tea.email);
