const uppercaseMessage = (message) => {
    return message.toUpperCase();
  }
  
  // This function accepts as arguments a string message, and a function.
  // It then calls the given function to do its job.
  const transform = (message, transformFunction) => {
    return transformFunction(message);
  }
  
  transform("hello", uppercaseMessage);

  module.exports = uppercaseMessage;

  module.exports = transform;

  
  // in the terminal run;
  // node
// const uppercaseMessage = require('./uppercaseMessage') <---- require the functions 
// sayHello() <---- call the functions 
// then terminal will produce output 