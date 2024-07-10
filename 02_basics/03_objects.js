// singleton 
// Object.create

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "shru",
    "full name": "Shruti goyal",
    mySym: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "shruti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[ mySym]);

JsUser.email = "shruti@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shruti@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());