const fizzBuzz = (number) => {

    if (number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz'
    } else if (number % 5 === 0) {
        return 'Buzz'
    } else if (number % 3 === 0)
        return 'Fizz'
    };

module.exports = fizzBuzz;
  
// in the terminal run;
// node
// const fizzBuzz = require('./fizzBuzz') <---- require the functions 
// sayHello() <---- call the functions 
// then terminal will produce output 

// && means both must be true 
// '(number % 3 === 0 && number % 5 === 0)' statement needed to go first as program reads from top to bottom

