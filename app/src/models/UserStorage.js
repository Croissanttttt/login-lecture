"use strict";

class UserStorage{
    static #users = {
        id: ["dev", "test", "admin"],
        password: ["asdf", "1234", "admin"],
        name: ["나개발", "테스트", "어드민"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;