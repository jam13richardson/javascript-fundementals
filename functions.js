// Creating a function
const aFunction = () => {
    return 123;
  }
  
  // Functions can be referenced as values, without the brackets ()
  // here we are essentially assigning the exact same function to a new name.
  const anotherFunction = aFunction;
  
  // When using the brackets (), we're *calling* the function
  // so we'll get the value returned by it.
  const returnValue = anotherFunction();


  // functions are values
  // need brackets to call the values 

//   -> executeFunction(getName)
//   - executeFunction accepts one arguement 'myFunction'
//   - executeFunction calls 'myFunction()'
//   - we get the return value of calling 'myFunction()'
//   - executeFunction returns this value 