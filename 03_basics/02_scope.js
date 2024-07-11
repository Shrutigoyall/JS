// var c = 300
let a = 300
if (true){
    let a = 50
    const b = 40
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const user = "shru"

    function two(){
        const website = "yt"
        // console.log(user);
    }
    // console.log(website);
    two()

}

one()

if(true){
    const username = "shruti"
    if (username === "shruti"){
        const website = "yt"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//+++++++++++ interesting ++++++++++//
console.log(add1(5));

function add1 (num){
    return num + 1
} 

add2(5)

const add2 = function(num){

    return num + 2

}

