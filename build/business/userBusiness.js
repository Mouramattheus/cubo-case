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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBussines = void 0;
const registeredUser_1 = __importDefault(require("../model/registeredUser"));
class UserBussines {
    constructor(userData, idGenerator) {
        this.userData = userData;
        this.idGenerator = idGenerator;
        this.inputSignup = (inputUser) => __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, participation } = inputUser;
            const id = this.idGenerator.generateId();
            const newCubeUser = new registeredUser_1.default(id, firstName, lastName, participation);
            yield this.userData.insertUser(newCubeUser);
        });
        this.getallRegistredUsers = () => __awaiter(this, void 0, void 0, function* () {
            let registerUser = yield this.userData.selectUsers();
            return registerUser;
        });
    }
}
exports.UserBussines = UserBussines;
