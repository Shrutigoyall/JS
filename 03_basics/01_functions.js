function myName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("t");
    console.log("i");
}

// myName()


// values pass- parameters 
// function addTwoNum(num1, num2){
// console.log(num1 + num2);
// }

//value call- arguments

function addTwoNum(num1, num2){
    // let result = num1 + num2
   
    // return result

    return num1 + num2
    }


const result = addTwoNum(1, 2)

// console.log("Result: ", result);


function userLogin(username = sam){
    if(!username){
console.log("Enter username");
return
    }
    return `${username} just logged in`
}

// console.log(userLogin("shru"))

// console.log(userLogin());
// console.log(userLogin("goyal"));

function calCartPrice(val1, val2, ...num1) {   // ... -> rest operator
    return num1
}

// console.log(calCartPrice(20, 30, 40, 50));

const user = {
    username: "shru",
    price: 200
}

function handleObj(anyObj) {

console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
    
}

// handleObj(user)

handleObj({
    username: "sam",
    price: 500
})

const newArr = [10, 20, 30,34]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArr));
console.log(returnSecondValue([200, 250, 300, 400]));