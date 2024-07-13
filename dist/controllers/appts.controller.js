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
exports.getAllAppointments = exports.getAppointmentById = exports.updateAppointment = exports.createAppointment = void 0;
const Appointment_1 = require("../database/models/Appointment");
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //ToDo: instead of passing the service id, pass the service name
    try {
        const userId = req.tokenData.id;
        const appointmentDate = req.body.appointmentDate;
        const serviceId = req.body.serviceId;
        if (!appointmentDate || !serviceId) {
            return res.status(400).json({
                success: false,
                message: "Required info: appointmentDate, serviceId",
            });
        }
        // ToDo: check if there is already an appointment made for that day
        const newAppointment = yield Appointment_1.Appointment.create({
            userId: userId,
            appointmentDate: appointmentDate,
            serviceId: serviceId,
        }).save();
        res.status(201).json({
            success: true,
            message: "Appointment made",
            data: newAppointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to make appointment",
            error: error.message || error,
        });
    }
});
exports.createAppointment = createAppointment;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.id;
        const appointmentIdToUpdate = parseInt(req.params.id);
        const body = req.body;
        const appointment = yield Appointment_1.Appointment.findOne({
            where: { id: appointmentIdToUpdate },
        });
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        if (appointment.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this appointment",
            });
        }
        const appointmentUpdated = yield Appointment_1.Appointment.update({
            id: appointmentIdToUpdate,
        }, body);
        res.status(200).json({
            success: true,
            message: "Appointment updated",
            data: appointmentUpdated,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to update appointment",
            error: error.message || error,
        });
    }
});
exports.updateAppointment = updateAppointment;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = parseInt(req.params.id);
        const body = req.body;
        const appointment = yield Appointment_1.Appointment.findOne({
            where: { id: appointmentId },
            relations: ["user", "service"],
        });
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Appointment found",
            data: appointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error trying to find appointment by id",
            error: error.message || error,
        });
    }
});
exports.getAppointmentById = getAppointmentById;
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //ToDo: add code to show max 10 appointments per page
        const users = yield Appointment_1.Appointment.find({
            relations: ["user", "service"],
        });
        res.json({
            success: true,
            message: "All appointments retrieved",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving appointments",
            error: error.message || error,
        });
    }
});
exports.getAllAppointments = getAllAppointments;
