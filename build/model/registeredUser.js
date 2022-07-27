"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisteredUser {
    constructor(id, firstName, lastName, participation) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.participation = participation;
    }
    getId() {
        return this.id;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getParticipation() {
        return this.participation;
    }
}
exports.default = RegisteredUser;
