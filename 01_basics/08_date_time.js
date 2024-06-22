//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 5, 23)
// console.log(myCreatedDate.toDateString());

// let myCrDate = new Date(2024, 5, 23, 5, 3)
// let myCrDate = new Date("2024-03-13")
let myCrDate = new Date("03-13-2024")
// console.log(myCrDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCrDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// `${newDate.getDate()} and the time is`

newDate.toLocaleString('default',{
    weekday: "long", 
})