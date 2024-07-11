// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
} ) () ;  // semi colon should be put here to run two IIFE simultaneously
 // to remove the global scope variables or declaration that can cause pollution we use iife. 

(  (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
}) ('shruti')

