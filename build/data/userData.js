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
const BaseDataBase_1 = require("./BaseDataBase");
class UserData extends BaseDataBase_1.BaseDatabase {
    constructor() {
        super();
        this.TABLE_NAME = "cube_table";
        this.insertUser = (inputUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection(this.TABLE_NAME).insert(inputUser);
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
        this.selectUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield this.connection(this.TABLE_NAME).select('*');
                let totalParticipation = yield this.connection(this.TABLE_NAME).sum('participation as totalParticipation');
                let response = {
                    users,
                    totalParticipation: totalParticipation[0].totalParticipation
                };
                return response;
            }
            catch (error) {
                throw new Error(error.sqlMessage);
            }
        });
    }
}
exports.default = UserData;
