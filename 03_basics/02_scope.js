// var c=300;
let a = 300;

if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    var c = 30
}

// for(let i = 0;i < Array.length; i++){
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Manik"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Manik"
    if(username==="Manik"){
        website=" Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++ interesting ++++++++++++

addone(5);
function addone(value){
    return value + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
