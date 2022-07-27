"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userBusiness_1 = require("../business/userBusiness");
const userController_1 = require("../controller/userController");
const userData_1 = __importDefault(require("../data/userData"));
const IdGenerator_1 = __importDefault(require("../services/IdGenerator"));
exports.userRouter = (0, express_1.Router)();
const userBussiness = new userBusiness_1.UserBussines(new userData_1.default(), new IdGenerator_1.default());
const userController = new userController_1.UserController(userBussiness);
exports.userRouter.post("/signUp", userController.signUp);
exports.userRouter.get("/users", userController.getAllUsers);
