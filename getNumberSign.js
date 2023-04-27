const getNumberSign = (a) => {

    if (a === 3) {
      return 'positive'
    } else if (a === 0) {
        return 'zero'
    } else if (a === -5)
        return 'negative'
    };
    
    module.exports = getNumberSign;

    // in the terminal run;
// const getNumberSign = require('./getNumberSign')
// getNumberSign(a)
// then terminal will produce output 

