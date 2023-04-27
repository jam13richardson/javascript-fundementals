const printMessage = () => {
    console.log('Hello there');
  }
  
  setTimout(printMessge, 3000);


// above command dictates how long it takes for message to prin in the terminal
// It gets two arguments:

// the function to execute after the delay
// the delay (in milliseconds, so in the previous example, 2 seconds)

setTimeout(() => {
    console.log('Hello there');
  }, 2000);