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
exports.appointmentsSeeder = void 0;
const db_1 = require("../db");
const Appointment_1 = require("../models/Appointment");
const User_1 = require("../models/User");
const Service_1 = require("../models/Service");
const appointmentsSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const users = yield User_1.User.find();
        const services = yield Service_1.Service.find();
        if (users.length === 0 || services.length === 0) {
            console.error("Users or services data is missing");
            return;
        }
        const filteredUsers = users.filter((user) => user.id < 1 || user.id > 5);
        const generateRandomDate = (start, end) => {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        };
        const startDate = new Date(2024, 7, 1);
        const endDate = new Date(2025, 2, 20);
        for (let i = 0; i < 80; i++) {
            const appointment = new Appointment_1.Appointment();
            appointment.appointmentDate = generateRandomDate(startDate, endDate);
            appointment.userId =
                filteredUsers[Math.floor(Math.random() * filteredUsers.length)].id;
            appointment.serviceId =
                services[Math.floor(Math.random() * services.length)].id;
            yield appointment.save();
        }
        console.log("Appointments have been created");
    }
    catch (error) {
        console.log("Error appointmentsSeeder:", error.message);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.appointmentsSeeder = appointmentsSeeder;
