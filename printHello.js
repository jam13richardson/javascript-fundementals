const printHello = () => {
    console.log('Hello hello hello');
  };

  setTimeout(printHello, 3000);

  const executeAfterDelay = (delay, callbackFunction) => {
setTimeout(callbackFunction, delay * 1000);
};

executeAfterDelay(5, printHello);



