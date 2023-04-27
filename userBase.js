class UserBase {
    constructor(users) {
        this.users = users;
    }

    getNames() {
        return this.name;
    }

    introMessage() {
        return `Hi, my name is ${this.name}`;
    }

    getIntroductions() {
        return users.map(introMessage);
    }
}

module.exports = UserBase;

//const UserBase = require('./userBase');