// 'node' to run anything in the terminal first 

const sayHello = () => {
    return 'Hello';
};

const anotheranothersayHello = (name) => {
    return 'Hello' + name ;
};

const anotherSayHello = (name) => {
    return 'Hello ${name}'
};

// sayHello is a function 
// if we want to run this function outside the file then we need to export it 

module.exports = sayHello;

// in the terminal run;
// const sayHello = require('./sayHello')
// sayHello()
// then terminal will produce output 