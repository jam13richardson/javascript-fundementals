const isValidLength = (phoneNumber) => {
    if (phoneNumber.length === 11) {
      return true;
    } else {
     return false;
    }
  };

  module.exports = isValidLength;
  
  // in the terminal run;
  // node
// const isValidLength = require('./isValidLength') <---- require the functions 
// sayHello() <---- call the functions 
// then terminal will produce output 