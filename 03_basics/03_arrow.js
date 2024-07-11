const user = {
    name: "shru",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.name}, welcome to website`);  // this -> refer current context
    console.log(this);
    }
}

// user.welcomeMsg()
// user.name = "sam"
// user.welcomeMsg()

// console.log(this);   // in node environment this will refer to an empty object. 

// function chai(){
//     let username = "shruti"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "shruti"
//     console.log(this.username);
// }

const chai = () => {
        let username = "shruti"
        // console.log(this);
    }


// chai()

// const add2 = (num1, num2) => {
//     return num1+num2            // explicit return
// }

// const add2 = (num1, num2) =>   num1+num2

// const add2 = (num1, num2) =>  ( num1 + num2 )  // implicit return
const add2 = (num1, num2) =>( {username: "shru"})  

console.log(add2(3,4))


// const myArray = [2, 3, 4 , 5]

// myArrayyArray.foreach()