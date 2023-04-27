// file: rectangle.js

class Rectangle {

    // A constructor, to give initial arguments.
    constructor(height, width) {
  
      // We can define attributes stored on the instance with `this`
      this.height = height;
      this.width = width;
    }
  
    // A method.
    getArea() {
      return this.height * this.width;
    }
  }
  
  // Export the class
  module.exports = Rectangle;

//We can now launch the node REPL and require the class:

// In the REPL

const Rectangle = require('./rectangle');
//And use it to create new instances:

const rect = new Rectangle(4, 10);

rect.getArea(); // 40

//classes can be exported and required the same way as functions! So we can write something like this:

// In the rectangle.js file...
module.exports = Rectangle;

// ... and in the node REPL
const Rectangle = require('./rectangle');

const rect = new Rectangle(4, 10);


The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

//Then use new MyClass() to create a new object with all the listed methods.

