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
exports.changeUserRole = exports.deleteUser = exports.getUserByEmail = exports.updateUserProfile = exports.getUserProfile = exports.getAllUsers = void 0;
const User_1 = require("../database/models/User");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //ToDo: add code to show max 10 users per page
        const users = yield User_1.User.find({
            select: {
                password: false,
            },
            relations: ["role"],
        });
        res.json({
            success: true,
            message: "All users retrieved",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving users",
            error: error.message || error,
        });
    }
});
exports.getAllUsers = getAllUsers;
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.id;
        const user = yield User_1.User.findOne({
            where: {
                id: userId,
            },
            select: ["id", "firstName", "lastName", "email", "role"],
            relations: ["role"],
        });
        res.json({
            success: true,
            message: "User profile retrieved",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to retrieve user profile",
            error: error.message || error,
        });
    }
});
exports.getUserProfile = getUserProfile;
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userIdToUpdate = req.tokenData.id;
        const body = req.body;
        const userUpdated = yield User_1.User.update({
            id: userIdToUpdate,
        }, body);
        res.status(200).json({
            success: true,
            message: "User updated",
            data: userUpdated,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to update user",
            error: error.message || error,
        });
    }
});
exports.updateUserProfile = updateUserProfile;
const getUserByEmail = (req, res) => {
    //ToDo: extra, not mandatory for project
    res.send("getUserByEmail code to be written");
};
exports.getUserByEmail = getUserByEmail;
const deleteUser = (req, res) => {
    //ToDo: extra, not mandatory for project
    res.send("deleteUser code to be written");
};
exports.deleteUser = deleteUser;
const changeUserRole = (req, res) => {
    //ToDo: extra, not mandatory for project
    res.send("changeUserRole code to be written");
};
exports.changeUserRole = changeUserRole;
