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
exports.deleteServiceById = exports.updateServiceById = exports.createService = exports.getAllServices = void 0;
const Service_1 = require("../database/models/Service");
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Service_1.Service.find();
        res.json({
            success: true,
            message: "All services retrieved",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving services",
            error: error.message || error,
        });
    }
});
exports.getAllServices = getAllServices;
const createService = (req, res) => {
    res.send("createService code to be written");
};
exports.createService = createService;
const updateServiceById = (req, res) => {
    res.send(`updateServiceById ${req.params.id} code to be written`);
};
exports.updateServiceById = updateServiceById;
const deleteServiceById = (req, res) => {
    res.send(`deleteServiceById ${req.params.id} code to be written`);
};
exports.deleteServiceById = deleteServiceById;
