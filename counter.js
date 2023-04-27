let counter = 0;

//let allows you to declare variables that are limited to 
//the scope of a block statement, or expression on which it is used, 
//unlike the var keyword, which declares a variable globally, or
// locally to an entire function regardless of block scope

function increment() {
  counter++;
  console.log(counter);
}

setInterval(increment, 1000);





setInterval(counter, 2000); // myFunction will execute every 2 seconds