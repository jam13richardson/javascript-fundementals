const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

module.exports = transform;
module.exports = lowercaseMessage;

// const lowercaseMessage = require('./lowercaseMessage')
// const transform = require('./lowercaseMessage')