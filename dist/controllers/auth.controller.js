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
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../database/models/User");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, roleId } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Required info: firstName, lastName, email, password",
            });
        }
        //ToDo, validate email format
        if (password.length < 8 || password.length > 15) {
            return res.status(400).json({
                success: false,
                message: "The password has to be between 8 and 15 characters",
            });
        }
        const hashedPassword = bcrypt_1.default.hashSync(password, 10);
        const newUser = yield User_1.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            roleId: roleId,
        }).save();
        res.status(201).json({
            success: true,
            message: "User registered",
            data: newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to register user",
            error: error.message || error,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Required info: email, password",
            });
        }
        const user = yield User_1.User.findOne({
            where: { email: email },
        });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email not found",
            });
        }
        const isPasswordValid = bcrypt_1.default.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Password not valid",
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            role: user.roleId,
            email: user.email,
        }, process.env.JWT_SECRET, {
            expiresIn: "2h",
        });
        res.status(200).json({
            success: true,
            message: "User logged in",
            data: user,
            token: token,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to log in",
            error: error,
        });
    }
});
exports.login = login;
