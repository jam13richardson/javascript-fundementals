function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      return "FizzBuzz";
    } else if (n % 3 === 0) {
      return "Fizz";
    } else if (n % 5 === 0) {
      return "Buzz";
    } else {
      return n.toString();
    }
  }
  
  function fizzbuzzUntil(n) {
    for (let i = 1; i <= n; i++) {
      console.log(fizzBuzz(i));
    }
  }
  

module.exports = fizzbuzzUntil;



