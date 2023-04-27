//"object" usually refers to a type of key-value structure, similar to a Ruby hash. Here's an example of a JavaScript object:

const person = {
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123'
  };
  
  // both ways can be used to access an object's property:
  console.log(person.name);
  console.log(person['name']);
  
  //there are two ways of declaring objects in JavaScript

  const bankAccount = {
    // simple value attributes
    accountNumber: 376782676,
    accountSortCode: 999999,
  
    // we can attach functions too (so they act like 'methods'):
    getBalance: () => {
      return 100;
    }
  };
  
  bankAccount.getBalance();