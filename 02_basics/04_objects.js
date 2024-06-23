const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manik",
            lastname: "Mahajan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@gmail.com",
    },
    {
        id: 1,
        email: "m@gmail.com",
    },
    {
        id: 1,
        email: "m@gmail.com",
    }
]

// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course= {
    coursename: "Javascript",
    price: "1499",
    courseInstructor: "Manik"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Manik")


// {
//     "name": "Manik",
//     "coursename": "Javascript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]