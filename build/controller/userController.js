"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userBussiness) {
        this.userBussiness = userBussiness;
        this.signUp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, participation } = req.body;
            try {
                const inputUser = {
                    firstName: firstName,
                    lastName: lastName,
                    participation: participation
                };
                yield this.userBussiness.inputSignup(inputUser);
                res.status(201).send("Registered user thanks for participating");
            }
            catch (error) {
                res.send(error.message);
            }
        });
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getuser = yield this.userBussiness.getallRegistredUsers();
                res.status(200).send(getuser);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.UserController = UserController;
