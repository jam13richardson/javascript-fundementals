const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);

const phonenumbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];

const checkLength = (phonenumbers) => {
    if (phonenumbers.length > 10) { 
        return true;
    } else {
        return false;
    }
};

const filterLongNumbers = phonenumbers.filter(checkLength);







const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const getMessage = names.map(generateMessages)

const generateMessages = (name) => {
    return `Hi ${name} 50% off our best candies for you today!`
};


// Terminal input - 
// node
// Welcome to Node.js v20.0.0.
// Type ".help" for more information.
// > const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// undefined
// > const generateMessages = (name) => {
// ...     return `Hi ${name} 50% off our best candies for you today!`
// ... };
// undefined
// > const getMessage = names.map(generateMessages)
// undefined
// > getMessage
// [
//   'Hi Anna 50% off our best candies for you today!',
//   'Hi Laura 50% off our best candies for you today!',
//   'Hi Josh 50% off our best candies for you today!',
//   'Hi Min 50% off our best candies for you today!',
//   'Hi Karla 50% off our best candies for you today!'
// ]
// > 

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ]

const discountMessage = (array) => {
    return `Hi ${array.name}! ${array.discount}% off our best candies for you today!`
};

const createMessage = array.map(discountMessage);